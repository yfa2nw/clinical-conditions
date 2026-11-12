// Builds an organ system's practice tests from its clinical and physiology question banks.
// Run from the project root after changing a question: node tools/build-practice-pdf.mjs [gi|neuro]
// Each test takes a fixed number of questions from each bank, so some are left over.
// The same banks always give the same tests. Adding or removing a question reshuffles them.
import { readFileSync } from "node:fs";
import vm from "node:vm";
import { printPdf } from "./print-pdf.mjs";

const TEST_NAMES = ["A", "B", "C"];
const MINUTES = 60;
const CLINICAL_PER_TEST = 35;
const PHYSIOLOGY_PER_TEST = 15;
const LETTERS = ["A", "B", "C", "D", "E"];

// Terms used in questions but not defined on a page, which is where the quiz finds its definitions
const SYSTEMS = {
    gi: {
        name: "Gastrointestinal",
        accent: "#0f766e",
        soft: "#e2f1ee",
        dark: "#0a3a35",
        extraTerms: {
            "5-HIAA": "5-hydroxyindoleacetic acid",
            "anti-CCP": "Anti-cyclic citrullinated peptide antibody",
            "anti-DGP": "Anti-deamidated gliadin peptide antibody",
            "anti-dsDNA": "Anti-double-stranded DNA antibody",
            "anti-HBe": "Antibody to hepatitis B e antigen",
            "anti-HBs": "Antibody to hepatitis B surface antigen",
            "anti-tTG": "Anti-tissue transglutaminase antibody",
            BMI: "Body mass index",
            cAMP: "Cyclic adenosine monophosphate",
            CD4: "Cluster of differentiation 4",
            CK: "Creatine kinase",
            COPD: "Chronic obstructive pulmonary disease",
            FODMAP: "Fermentable oligosaccharides, disaccharides, monosaccharides, and polyols",
            GE: "Gastroesophageal",
            HIV: "Human immunodeficiency virus",
            IM: "Intramuscular",
            KUB: "Kidneys, ureters, and bladder",
            LDL: "Low-density lipoprotein",
            MCAD: "Medium-chain acyl-CoA dehydrogenase",
            MCV: "Mean corpuscular volume",
            NSAID: "Nonsteroidal anti-inflammatory drug",
            PAS: "Periodic acid-Schiff",
            PET: "Positron emission tomography",
            PTT: "Partial thromboplastin time",
            "R-CHOP": "Rituximab, cyclophosphamide, doxorubicin, vincristine, and prednisone",
            TPMT: "Thiopurine methyltransferase",
            VIP: "Vasoactive intestinal peptide",
        },
    },
    neuro: {
        name: "Neurology",
        accent: "#4f46c8",
        soft: "#e9e8fb",
        dark: "#1b1a47",
        extraTerms: {
            AMPA: "α-Amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid",
            BMI: "Body mass index",
            CK: "Creatine kinase",
            G6PD: "Glucose-6-phosphate dehydrogenase",
            QT: "The QT interval on the ECG",
            SSRI: "Selective serotonin reuptake inhibitor",
            TPMT: "Thiopurine methyltransferase",
        },
    },
};
const SYSTEM = process.argv[2] || "gi";
if (!SYSTEMS[SYSTEM]) throw new Error(`Unknown system ${SYSTEM}; use ${Object.keys(SYSTEMS).join(" or ")}`);
const { name: SYSTEM_NAME, accent: ACCENT, soft: SOFT, dark: DARK, extraTerms: EXTRA_TERMS } = SYSTEMS[SYSTEM];
const OUTPUT = `${SYSTEM}/${SYSTEM}-practice-tests.pdf`;

const loadBank = (file) => vm.runInNewContext(`${readFileSync(file, "utf8")};QUIZ_QUESTIONS`);
const clinicalBank = loadBank(`${SYSTEM}/questions.js`);
const physiologyBank = loadBank(`${SYSTEM}/physiology-questions.js`).map((question) => ({ ...question, isPhysiology: true }));
const page = readFileSync(`${SYSTEM}/index.html`, "utf8");
const physiologyPage = readFileSync(`${SYSTEM}/physiology.html`, "utf8");

/* ---------- Repeatable shuffling ---------- */
function randomFrom(text) {
    let seed = 2166136261;
    for (const character of text) seed = Math.imul(seed ^ character.codePointAt(0), 16777619);
    return () => {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function shuffled(items, key) {
    const random = randomFrom(key);
    const list = [...items];
    for (let i = list.length - 1; i > 0; i -= 1) {
        const j = Math.floor(random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
}

/* ---------- Split the bank ---------- */
const orderIn = (source) => [...new Set([...source.matchAll(/data-condition="([^"]+)"/g)].map((m) => m[1]))];
const conditionOrder = orderIn(page);
const physiologyOrder = orderIn(physiologyPage);

// Gives every test each condition, then shares the extras among the largest conditions.
// Steps alternate within a condition, so each test gets a similar mix.
function deal(bank, order, perTest) {
    const picks = TEST_NAMES.map(() => []);
    const base = Math.floor(perTest / order.length);
    const extras = (perTest - base * order.length) * TEST_NAMES.length;
    const bySize = [...order].sort((a, b) => bank.filter((q) => q.condition === b).length - bank.filter((q) => q.condition === a).length || order.indexOf(a) - order.indexOf(b));
    // Extras go round the conditions from largest to smallest, one test at a time, skipping any condition with no questions left
    const extra = Object.fromEntries(order.map((condition) => [condition, TEST_NAMES.map(() => 0)]));
    const left = Object.fromEntries(order.map((condition) => [condition, bank.filter((q) => q.condition === condition).length - base * TEST_NAMES.length]));
    for (let k = 0, next = 0; k < extras && next < extras * order.length; next += 1) {
        const condition = bySize[next % order.length];
        if (left[condition] < 1) continue;
        extra[condition][k % TEST_NAMES.length] += 1;
        left[condition] -= 1;
        k += 1;
    }

    order.forEach((condition, index) => {
        const inCondition = shuffled(bank.filter((q) => q.condition === condition), `deal-${condition}`);
        const [first, second] = index % 2 ? [2, 1] : [1, 2];
        const lanes = [inCondition.filter((q) => q.step === first), inCondition.filter((q) => q.step === second)];
        const queue = [];
        while (lanes[0].length || lanes[1].length) {
            if (lanes[0].length) queue.push(lanes[0].shift());
            if (lanes[1].length) queue.push(lanes[1].shift());
        }

        const quota = TEST_NAMES.map((name, test) => base + extra[condition][test]);
        for (let round = 0; round < Math.max(...quota); round += 1) {
            quota.forEach((count, test) => {
                if (round < count) picks[test].push(queue.shift());
            });
        }
    });
    return picks;
}

const clinicalPicks = deal(clinicalBank, conditionOrder, CLINICAL_PER_TEST);
const physiologyPicks = deal(physiologyBank, physiologyOrder, PHYSIOLOGY_PER_TEST);
const tests = TEST_NAMES.map((name, index) => ({ name, questions: [...clinicalPicks[index], ...physiologyPicks[index]] }));
const questions = tests.flatMap((test) => test.questions);

for (const test of tests) {
    // The bank usually lists the correct answer first, so each letter is given an equal share
    const correctLetters = shuffled(Array.from({ length: test.questions.length }, (item, i) => i % LETTERS.length), `letters-${test.name}`);
    test.questions = shuffled(test.questions, `order-${test.name}`).map((question, i) => {
        const options = shuffled(question.options.map((text, original) => ({ text, original })).filter(({ original }) => original !== question.answer), question.id);
        options.splice(correctLetters[i], 0, { text: question.options[question.answer], original: question.answer });
        return { ...question, number: i + 1, shown: options, correct: correctLetters[i] };
    });
}

/* ---------- Markup ---------- */
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const conditionName = (id) => (page.match(new RegExp(`data-condition="${id}"[^>]*>([^<]+)<`)) || physiologyPage.match(new RegExp(`data-condition="${id}"[^>]*>([^<]+)<`)))[1].trim();

const glossary = new Map();
for (const m of (page + physiologyPage).matchAll(/<abbr [^>]*data-definition="([^"]*)"[^>]*>([^<]+)<\/abbr>/g)) {
    const term = m[2].trim();
    if (!/[A-Z].*[A-Z0-9]|^[a-z]+[A-Z]/.test(term) || / [a-z]/.test(term)) continue;
    // An abbreviation can mean different things on different pages, such as V1, so each meaning is kept
    const list = glossary.get(term) || [];
    if (!list.some((d) => d.toLowerCase() === m[1].toLowerCase())) list.push(m[1]);
    glossary.set(term, list);
}
const allText = questions.map((q) => [q.stem, q.leadIn, ...q.options].join(" ")).join(" ");
const usedTerms = [...[...glossary]
    .filter(([term]) => new RegExp(`(^|[^A-Za-z0-9-])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^A-Za-z0-9-]|$)`).test(allText)), ...Object.entries(EXTRA_TERMS).filter(([term]) => allText.toLowerCase().includes(term.toLowerCase()))]
    .sort(([a], [b]) => a.localeCompare(b, "en", { sensitivity: "base" }));

const bubble = (letter, filled) => `<i${filled ? ' class="is-on"' : ""}>${letter}</i>`;

const questionHtml = (q) => `<section class="question">
    <span class="q-num">${q.number}</span>
    <p class="stem">${escape(q.stem)}</p>
    <p class="lead-in">${escape(q.leadIn)}</p>
    <ol class="options">${q.shown.map((option, i) => `<li>${bubble(LETTERS[i])}<span>${escape(option.text)}</span></li>`).join("")}</ol>
</section>`;

// The answer sheet and the answer key share one grid, numbered down the columns, so they can be laid side by side
const ROWS = 10;
const bubbleGrid = (test, showAnswers) => `<div class="grid" style="grid-template-rows: repeat(${ROWS}, auto)">${test.questions.map((q) => `<p><strong>${q.number}</strong>${LETTERS.map((letter, i) => bubble(letter, showAnswers && q.correct === i)).join("")}</p>`).join("")}</div>`;

const answerSheet = (test) => `<section class="answer-sheet" id="sheet-${test.name}">
    <p class="kicker">Test ${test.name}</p>
    <h1>Answer sheet</h1>
    <p class="sheet-line">Name <span></span> Date <span></span> Score <span class="short"></span> / ${test.questions.length}</p>
    ${bubbleGrid(test, false)}
    <p class="sheet-note">Fill one bubble for each question. The answer key at the start of the Test ${test.name} answers uses the same layout.</p>
</section>`;

const answerHtml = (q) => {
    const reasons = q.shown
        .map((option, i) => ({ letter: LETTERS[i], note: q.notes?.[option.original] }))
        .filter(({ note }) => note)
        .map(({ letter, note }) => `<li>${bubble(letter)}<span>${escape(note)}</span></li>`)
        .join("");
    return `<section class="answer">
    <span class="q-num">${q.number}</span>
    <p class="answer-head">${bubble(LETTERS[q.correct], true)}<span>${escape(q.shown[q.correct].text)}</span></p>
    <p class="answer-tag">${q.isPhysiology ? "<b>Physiology</b>" : ""}<b>${escape(conditionName(q.condition))}</b><b>Step ${q.step}</b></p>
    <p class="explanation">${escape(q.explanation)}</p>
    ${reasons ? `<p class="why-not">Why not the others</p><ul class="reasons">${reasons}</ul>` : ""}
    ${q.info ? `<p class="info"><strong>Additional information:</strong> ${escape(q.info)}</p>` : ""}
</section>`;
};

const sizes = tests.map((test) => test.questions.length);
const sizeText = new Set(sizes).size === 1 ? `${sizes[0]} questions` : `${Math.min(...sizes)}–${Math.max(...sizes)} questions`;
const pace = Math.round((MINUTES * 60) / Math.max(...sizes));
const updated = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
const bankSize = clinicalBank.length + physiologyBank.length;

// The cover reuses the organ system's drawing from the landing page, without labels or the moving signal, as the review PDF does
const landing = readFileSync("index.html", "utf8");
const panelStart = landing.indexOf(`<article class="world is-${SYSTEM}">`);
const coverArt = panelStart < 0 ? "" : landing.slice(landing.indexOf("<svg", panelStart), landing.indexOf("</svg>", panelStart) + 6)
    .replace(/ role="img" aria-label="[^"]*"/, ' aria-hidden="true"')
    .replace(/<text class="art-label"[\s\S]*?<\/text>/g, "")
    .replace(/<path class="(?:gi-bolus|neuro-pulse)"[^>]*\/>/g, "");

const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${SYSTEM_NAME} Practice Tests</title><style>
    @page { size: A4; }
    @page :first { margin: 0; }
    :root { --accent: ${ACCENT}; --soft: ${SOFT}; --dark: ${DARK}; --muted: #5b6470; --line: #dde2e6; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.45 Georgia, "Times New Roman", serif; }
    h1, h2, h3, .kicker, .q-num, .lead-in, .answer-head, .answer-tag, .why-not, .grid, .sheet-line, .sheet-note, .contents, .facts, .cover, i { font-family: "Segoe UI", system-ui, sans-serif; }
    a { color: inherit; text-decoration: none; }

    /* Cover: the review PDF's layout on white */
    .cover { position: relative; width: 210mm; height: 297mm; overflow: hidden; break-after: page; }
    .masthead { position: absolute; top: 15mm; left: 16mm; right: 16mm; display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 3.5mm; border-bottom: 0.8pt solid #1a1f24; }
    .masthead h1 { margin: 0; font: 400 40pt/0.9 Georgia, "Times New Roman", serif; letter-spacing: -0.025em; }
    .masthead h1 em { color: var(--accent); font-style: italic; }
    .issue { margin: 0 0 1mm; color: var(--accent); font-size: 8pt; font-weight: 700; letter-spacing: 0.14em; line-height: 1.5; text-align: right; text-transform: uppercase; }
    .issue span { display: block; color: var(--muted); font-weight: 600; }
    .cover-art { position: absolute; left: 16mm; right: 16mm; top: 92mm; }
    .cover-art svg { display: block; width: 100%; height: auto; max-height: 130mm; overflow: visible; }
    .cover-art .gi-mouth, .cover-art .gi-tube { fill: none; stroke: var(--accent); stroke-linecap: round; stroke-width: 9; }
    .cover-art .gi-mouth { stroke-width: 4; }
    .cover-art .gi-tube.is-stomach { stroke-width: 20; }
    .cover-art .gi-tube.is-colon { stroke-dasharray: 18 4; stroke-linecap: butt; stroke-width: 17; }
    .cover-art .neuro-dendrite, .cover-art .neuro-axon { fill: none; stroke: var(--accent); stroke-linecap: round; stroke-width: 2; }
    .cover-art .neuro-myelin { fill: none; stroke: var(--accent); stroke-dasharray: 15 5; stroke-width: 7; opacity: 0.55; }
    .cover-art .neuro-bouton { fill: var(--accent); }
    .cover-art .neuro-soma { fill: #fff; stroke: var(--accent); stroke-width: 2.5; }
    .headline { position: absolute; left: 16mm; right: 16mm; bottom: 34mm; }
    .headline .kicker { margin-bottom: 3mm; }
    .headline h2 { margin: 0 0 3mm; font: 700 46pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .headline .deck { width: 130mm; margin: 0; color: #333b44; font: italic 12.5pt/1.4 Georgia, "Times New Roman", serif; }
    .cover-base { position: absolute; left: 16mm; right: 16mm; bottom: 16mm; padding-top: 2.5mm; border-top: 0.4pt solid var(--line); color: var(--muted); font-size: 7.5pt; letter-spacing: 0.04em; }

    /* Shared headings */
    .kicker { display: flex; align-items: center; gap: 3mm; margin: 0 0 2mm; color: var(--accent); font-size: 7.8pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .kicker::after { content: ""; flex: 1; border-top: 0.6pt solid var(--accent); }
    .page-head { display: flex; justify-content: space-between; align-items: flex-end; margin: 0 0 6mm; padding-bottom: 3mm; border-bottom: 0.8pt solid #1a1f24; }
    .page-head h1 { margin: 0; font: 400 32pt/0.9 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .page-head p { margin: 0 0 1mm; color: var(--accent); font: 700 8pt/1.5 "Segoe UI", system-ui, sans-serif; letter-spacing: 0.14em; text-align: right; text-transform: uppercase; }
    .page-head p span { display: block; color: var(--muted); font-weight: 600; }

    /* Instructions */
    .instructions { break-before: page; font-size: 10pt; }
    .facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; margin-bottom: 5mm; }
    .facts div { padding: 3mm 4mm; border-left: 1.2mm solid var(--accent); background: var(--soft); }
    .facts strong { display: block; color: var(--dark); font-size: 15pt; line-height: 1.2; }
    .facts span { color: var(--muted); font-size: 8.5pt; }
    .instructions .kicker { margin-top: 5mm; }
    .instructions ul { margin: 0; padding-left: 4.5mm; }
    .instructions li { margin-bottom: 1.3mm; }
    .instructions li::marker { color: var(--accent); }
    .source { margin: 0 0 1mm; padding: 3mm 4mm; border: 0.8pt solid var(--accent); border-radius: 2mm; }
    .source strong { color: var(--dark); }
    .contents { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5mm 4mm; font-size: 9.5pt; }
    .contents a { display: flex; justify-content: space-between; padding: 1.2mm 0; border-bottom: 0.4pt solid var(--line); font-weight: 600; }
    .contents a b { color: var(--accent); }
    .abbreviations { break-before: page; }
    .abbreviations .intro { margin: 0 0 3mm; color: var(--muted); }
    .terms { column-count: 3; column-gap: 6mm; }
    .terms p { margin: 0 0 1mm; font-size: 8pt; line-height: 1.3; break-inside: avoid; }
    .terms strong { font-family: "Segoe UI", system-ui, sans-serif; }

    /* Questions */
    .test, .answers { break-before: page; }
    .test-head { display: flex; justify-content: space-between; align-items: flex-end; margin: 0 0 5mm; padding-bottom: 3mm; border-bottom: 0.8pt solid #1a1f24; }
    .test-head h1 { margin: 0; font: 400 32pt/0.9 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .test-head h1 b { color: var(--accent); font-weight: 700; }
    .chips { display: flex; gap: 2mm; margin: 0; }
    .chips span { padding: 1mm 2.6mm; border-radius: 4mm; background: var(--soft); color: var(--dark); font: 600 8pt "Segoe UI", system-ui, sans-serif; }
    .columns { column-count: 2; column-gap: 8mm; column-rule: 0.4pt solid var(--line); }
    .question, .answer { position: relative; margin: 0 0 3.2mm; padding: 0 0 3.2mm 9mm; border-bottom: 0.4pt solid var(--line); break-inside: avoid; }
    .q-num { position: absolute; left: 0; top: 0.3mm; display: flex; align-items: center; justify-content: center; width: 6.6mm; height: 5mm; border-radius: 1.2mm; background: var(--accent); color: #fff; font-size: 8.2pt; font-weight: 700; }
    .stem { margin: 0 0 1.6mm; }
    .lead-in { margin: 0 0 1.8mm; color: var(--dark); font-size: 9.3pt; font-weight: 700; line-height: 1.35; }
    .options, .reasons { margin: 0; padding: 0; list-style: none; }
    .options li, .reasons li, .answer-head { display: flex; align-items: flex-start; gap: 2mm; }
    .options li { margin-bottom: 1mm; line-height: 1.35; }
    i { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 4.4mm; height: 4.4mm; margin-top: 0.1mm; border: 0.7pt solid var(--muted); border-radius: 50%; color: var(--muted); font-size: 6.8pt; font-style: normal; font-weight: 700; }
    i.is-on { border-color: var(--accent); background: var(--accent); color: #fff; }

    /* Answer sheet and key */
    .answer-sheet { break-before: page; }
    .answer-sheet h1 { margin: 0 0 5mm; font: 400 30pt/1 Georgia, "Times New Roman", serif; }
    .sheet-line { display: flex; align-items: flex-end; gap: 2mm; margin: 0 0 7mm; font-size: 10pt; }
    .sheet-line span { flex: 1; border-bottom: 0.8pt solid var(--muted); }
    .sheet-line span.short { flex: 0 0 14mm; }
    .grid { display: grid; grid-auto-flow: column; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0 3mm; padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); }
    .grid p { display: flex; align-items: center; gap: 0.8mm; margin: 0; padding: 1.5mm 0; border-bottom: 0.4pt solid rgba(0, 0, 0, 0.08); }
    .grid p:nth-child(${ROWS}n) { border-bottom: 0; }
    .grid strong { width: 5mm; margin-right: 0.6mm; color: var(--dark); font-size: 8.5pt; text-align: right; }
    .grid i { width: 4.6mm; height: 4.6mm; background: #fff; font-size: 6.8pt; }
    .grid i.is-on { background: var(--accent); }
    .sheet-note { margin: 3mm 0 0; color: var(--muted); font-size: 8.5pt; }
    .answers .grid { margin-bottom: 6mm; }

    /* Answers */
    .answer { break-inside: auto; }
    .answer p { margin: 0 0 1.2mm; orphans: 2; widows: 2; }
    .answer-head, .answer-tag, .why-not { break-after: avoid; }
    .reasons li { break-inside: avoid; }
    .answer-head { color: var(--dark); font-weight: 700; line-height: 1.3; }
    .answer-tag { display: flex; flex-wrap: wrap; gap: 1.2mm; }
    .answer-tag b { padding: 0.3mm 1.8mm; border-radius: 3mm; background: var(--soft); color: var(--dark); font-size: 7pt; font-weight: 600; }
    .why-not { margin: 1.6mm 0 0.8mm !important; color: var(--accent); font-size: 7pt; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    .reasons { font-size: 8.8pt; }
    .reasons li { margin-bottom: 0.8mm; line-height: 1.35; }
    .reasons i { width: 4mm; height: 4mm; font-size: 6.2pt; }
    .info { padding: 1.5mm 2.5mm; border-left: 0.8mm solid var(--accent); background: var(--soft); font-size: 8.8pt; }
</style></head><body>
    <section class="cover">
        <header class="masthead">
            <h1>Clinical <em>Conditions</em></h1>
            <p class="issue">Practice tests<span>Last updated ${updated}</span></p>
        </header>
        <div class="cover-art">${coverArt}</div>
        <div class="headline">
            <p class="kicker">${tests.length} timed tests · ${sizes[0]} questions each</p>
            <h2>${SYSTEM_NAME}</h2>
            <p class="deck">Practice tests of USMLE-style questions drawn from the website quizzes, with answers and explanations.</p>
        </div>
        <div class="cover-base">For educational use only. This is a study aid, not a clinical reference.</div>
    </section>

    <section class="instructions">
        <header class="page-head"><h1>Instructions</h1><p>${SYSTEM_NAME} practice tests<span>Last updated ${updated}</span></p></header>
        <div class="facts">
            <div><strong>${MINUTES} minutes</strong><span>for each test</span></div>
            <div><strong>${sizeText}</strong><span>in each test</span></div>
            <div><strong>About ${pace} seconds</strong><span>for each question</span></div>
        </div>
        <p class="source"><strong>Every question comes from the website.</strong> These tests are built from the quizzes on the Clinical Conditions website, ${questions.length} of its ${bankSize} questions, so if you have done the website quizzes you will meet questions you have seen before. For the truest measure, take a test before using the website quiz for these topics, and treat a remembered answer as revision rather than a sign of mastery.</p>
        <p class="kicker">Taking a test</p>
        <ul>
            <li>Take each test in one sitting, with a timer set to ${MINUTES} minutes. Do not pause the timer.</li>
            <li>Each question has five options and one best answer. Choose the single best option, even if more than one seems reasonable.</li>
            <li>Fill in the answer sheet after the last question of each test, or use a separate piece of paper.</li>
            <li>Do not use notes, the website, or other references. The abbreviation list on the next page is allowed.</li>
            <li>There is no penalty for guessing, so answer every question. An unanswered question counts as incorrect.</li>
            <li>When time ends, stop, even if you have not finished.</li>
        </ul>
        <p class="kicker">About the tests</p>
        <ul>
            <li>No question appears in more than one test, so the three tests can be taken in any order.</li>
            <li>Every test has ${PHYSIOLOGY_PER_TEST} physiology and ${CLINICAL_PER_TEST} clinical questions, covering all ${physiologyOrder.length} physiology topics and all ${conditionOrder.length} clinical topics, with a similar mix of Step 1 questions (mechanisms, microbiology, and pathology) and Step 2 questions (diagnosis, next step, and management).</li>
            <li>Questions are in random order, and the topic being tested is not shown until the answers.</li>
        </ul>
        <p class="kicker">Scoring and review</p>
        <ul>
            <li>Your score is the number of correct answers. The answer key at the start of each answer section has the same layout as the answer sheet, so you can mark one against the other.</li>
            <li>Then read the explanations. Each one names the topic and step, so you can see what to revisit.</li>
            <li>Answers follow the course material. Where a guideline differs, the explanation says so under "Additional information".</li>
        </ul>
        <p class="kicker">Contents</p>
        <div class="contents">
            ${tests.map((test) => `<a href="#test-${test.name}">Test ${test.name} <b>Questions</b></a>`).join("")}
            ${tests.map((test) => `<a href="#sheet-${test.name}">Test ${test.name} <b>Answer sheet</b></a>`).join("")}
            ${tests.map((test) => `<a href="#answers-${test.name}">Test ${test.name} <b>Answers</b></a>`).join("")}
        </div>
    </section>

    <section class="abbreviations">
        <header class="page-head"><h1>Abbreviations</h1><p>Allowed during a test</p></header>
        <div class="terms">${usedTerms.map(([term, definition]) => `<p><strong>${term}</strong> ${[definition].flat().join("; ")}</p>`).join("")}</div>
    </section>

    ${tests.map((test) => `<section class="test" id="test-${test.name}">
        <header class="test-head"><h1>Test <b>${test.name}</b></h1><p class="chips"><span>${test.questions.length} questions</span><span>${MINUTES} minutes</span><span>Start the timer</span></p></header>
        <div class="columns">${test.questions.map(questionHtml).join("\n")}</div>
    </section>
    ${answerSheet(test)}`).join("\n")}

    ${tests.map((test) => `<section class="answers" id="answers-${test.name}">
        <header class="test-head"><h1>Test <b>${test.name}</b> answers</h1><p class="chips"><span>Answer key</span><span>Explanations</span></p></header>
        ${bubbleGrid(test, true)}
        <div class="columns">${test.questions.map(answerHtml).join("\n")}</div>
    </section>`).join("\n")}
</body></html>`;

await printPdf(html, OUTPUT, `Clinical Conditions · ${SYSTEM_NAME} practice tests`);

for (const test of tests) {
    const count = (check) => test.questions.filter(check).length;
    const letters = LETTERS.map((letter, i) => `${letter} ${count((q) => q.correct === i)}`).join(", ");
    console.log(`Test ${test.name}: ${test.questions.length} questions (${count((q) => q.isPhysiology)} physiology), Step 1 ${count((q) => q.step === 1)}, Step 2 ${count((q) => q.step === 2)}, ${new Set(test.questions.map((q) => q.condition)).size} conditions, ${letters}`);
}
console.log(`${OUTPUT}: ${usedTerms.length} abbreviations`);
process.exit(0);
