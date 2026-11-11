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
            COPD: "Chronic obstructive pulmonary disease",
            FODMAP: "Fermentable oligosaccharides, disaccharides, monosaccharides, and polyols",
            GE: "Gastroesophageal",
            HIV: "Human immunodeficiency virus",
            IM: "Intramuscular",
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
        extraTerms: {
            BMI: "Body mass index",
            G6PD: "Glucose-6-phosphate dehydrogenase",
            QT: "The QT interval on the ECG",
            SSRI: "Selective serotonin reuptake inhibitor",
            TPMT: "Thiopurine methyltransferase",
        },
    },
};
const SYSTEM = process.argv[2] || "gi";
if (!SYSTEMS[SYSTEM]) throw new Error(`Unknown system ${SYSTEM}; use ${Object.keys(SYSTEMS).join(" or ")}`);
const { name: SYSTEM_NAME, accent: ACCENT, soft: SOFT, extraTerms: EXTRA_TERMS } = SYSTEMS[SYSTEM];
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

const questionHtml = (q) => `<section class="question">
    <p class="stem"><span class="number">${q.number}.</span> ${escape(q.stem)}</p>
    <p class="lead-in">${escape(q.leadIn)}</p>
    <ul class="options">${q.shown.map((option, i) => `<li><span class="letter">${LETTERS[i]}.</span> ${escape(option.text)}</li>`).join("")}</ul>
</section>`;

const answerSheet = (test) => `<section class="answer-sheet" id="sheet-${test.name}">
    <h2>Test ${test.name} answer sheet</h2>
    <p class="sheet-line">Name <span></span> Date <span></span> Score <span class="short"></span> / ${test.questions.length}</p>
    <div class="sheet-grid">${test.questions.map((q) => `<p><strong>${q.number}</strong>${LETTERS.map((letter) => `<i>${letter}</i>`).join("")}</p>`).join("")}</div>
</section>`;

const answerHtml = (q) => {
    const reasons = q.shown
        .map((option, i) => ({ letter: LETTERS[i], note: q.notes?.[option.original] }))
        .filter(({ note }) => note)
        .map(({ letter, note }) => `<li><span class="letter">${letter}.</span> ${escape(note)}</li>`)
        .join("");
    return `<section class="answer">
    <p class="answer-head"><span class="number">${q.number}.</span> ${LETTERS[q.correct]}. ${escape(q.shown[q.correct].text)}</p>
    <p class="answer-tag">${q.isPhysiology ? "Physiology · " : ""}${escape(conditionName(q.condition))} · Step ${q.step}</p>
    <p>${escape(q.explanation)}</p>
    ${reasons ? `<ul class="reasons">${reasons}</ul>` : ""}
    ${q.info ? `<p class="info"><strong>Additional information:</strong> ${escape(q.info)}</p>` : ""}
</section>`;
};

const sizes = tests.map((test) => test.questions.length);
const sizeText = new Set(sizes).size === 1 ? `${sizes[0]} questions` : `${Math.min(...sizes)}–${Math.max(...sizes)} questions`;
const pace = Math.round((MINUTES * 60) / Math.max(...sizes));

const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${SYSTEM_NAME} Practice Tests</title><style>
    @page { size: A4; }
    :root { --accent: ${ACCENT}; --soft: ${SOFT}; --muted: #5b6470; --line: #c9d1d6; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.42 Georgia, "Times New Roman", serif; }
    h1, h2, h3, .cover p, .answer-head, .answer-tag, .number, .letter, .sheet-line, .sheet-grid, .key, .contents { font-family: "Segoe UI", system-ui, sans-serif; }
    a { color: inherit; text-decoration: none; }
    .cover { display: flex; flex-direction: column; justify-content: center; height: 245mm; }
    .cover .label { margin: 0 0 3mm; color: var(--accent); font-size: 10pt; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
    .cover h1 { margin: 0 0 5mm; font-size: 34pt; line-height: 1.1; }
    .cover p { margin: 0 0 2mm; color: var(--muted); font-size: 11pt; }
    .instructions { break-before: page; font-size: 10.5pt; }
    .instructions h1, .abbreviations h1, .test > h1, .answers > h1 { margin: 0 0 4mm; font-size: 20pt; line-height: 1.2; }
    .instructions h2 { margin: 6mm 0 1.5mm; color: var(--accent); font-size: 11.5pt; }
    .instructions ul { margin: 0; padding-left: 5mm; }
    .instructions li { margin-bottom: 1.4mm; }
    .facts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; margin-bottom: 2mm; font-family: "Segoe UI", system-ui, sans-serif; }
    .facts div { padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); }
    .facts strong { display: block; font-size: 15pt; line-height: 1.2; }
    .facts span { color: var(--muted); font-size: 9pt; }
    .contents { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1mm 3mm; font-size: 10pt; }
    .contents a { color: var(--accent); font-weight: 650; }
    .abbreviations { break-before: page; }
    .abbreviations .intro { margin: 0 0 3mm; color: var(--muted); }
    .terms { column-count: 3; column-gap: 6mm; }
    .terms p { margin: 0 0 1mm; font-size: 8pt; line-height: 1.3; break-inside: avoid; }
    .terms strong { font-family: "Segoe UI", system-ui, sans-serif; }
    .test, .answers { break-before: page; }
    .test > .intro { margin: 0 0 4mm; padding-bottom: 2mm; border-bottom: 1px solid var(--line); color: var(--muted); }
    .columns { column-count: 2; column-gap: 7mm; }
    .question { margin-bottom: 4.5mm; break-inside: avoid; }
    .stem, .lead-in { margin: 0 0 1.4mm; }
    .lead-in { font-weight: 700; }
    .number { color: var(--accent); font-weight: 700; }
    .options, .reasons { margin: 0; padding: 0; list-style: none; }
    .options li, .reasons li { position: relative; padding-left: 5mm; }
    .options li { margin-bottom: 0.5mm; }
    .letter { position: absolute; left: 0; font-size: 8.8pt; font-weight: 700; }
    .answer-sheet { break-before: page; }
    .answer-sheet h2 { margin: 0 0 4mm; font-size: 16pt; }
    .sheet-line { display: flex; align-items: flex-end; gap: 2mm; margin: 0 0 6mm; font-size: 10pt; }
    .sheet-line span { flex: 1; border-bottom: 1px solid var(--muted); }
    .sheet-line span.short { flex: 0 0 14mm; }
    .sheet-grid { column-count: 4; column-gap: 7mm; }
    .sheet-grid p { display: flex; align-items: center; gap: 1.2mm; height: 10mm; margin: 0; break-inside: avoid; }
    .sheet-grid strong { width: 7mm; font-size: 9.5pt; text-align: right; }
    .sheet-grid i { display: flex; align-items: center; justify-content: center; width: 5.2mm; height: 5.2mm; border: 0.8px solid var(--muted); border-radius: 50%; color: var(--muted); font-size: 7pt; font-style: normal; }
    .key { display: grid; grid-template-columns: repeat(10, 1fr); gap: 0.8mm 2mm; margin: 0 0 6mm; padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); font-size: 9pt; }
    .key span b { display: inline-block; width: 6mm; color: var(--muted); font-weight: 400; }
    .key span { font-weight: 700; }
    .answer { margin-bottom: 4.5mm; break-inside: avoid; }
    .answer p { margin: 0 0 1mm; }
    .answer-head { font-weight: 700; line-height: 1.3; break-after: avoid; }
    .answer .answer-tag { color: var(--muted); font-size: 7.8pt; break-after: avoid; }
    .reasons { margin-top: 1mm; font-size: 9pt; }
    .reasons li { margin-bottom: 0.6mm; }
    .reasons .letter { font-size: 8.2pt; }
    .info { font-size: 9pt; }
</style></head><body>
    <section class="cover">
        <p class="label">Clinical Conditions</p>
        <h1>${SYSTEM_NAME} Practice Tests</h1>
        <p>${tests.length} tests of ${sizes[0]} USMLE-style questions, with answers and explanations</p>
        <p>For educational use only. This is a study aid, not a clinical reference.</p>
    </section>

    <section class="instructions">
        <h1>Instructions</h1>
        <div class="facts">
            <div><strong>${MINUTES} minutes</strong><span>for each test</span></div>
            <div><strong>${sizeText}</strong><span>in each test</span></div>
            <div><strong>About ${pace} seconds</strong><span>for each question</span></div>
        </div>
        <h2>Taking a test</h2>
        <ul>
            <li>Take each test in one sitting, with a timer set to ${MINUTES} minutes. Do not pause the timer.</li>
            <li>Each question has five options and one best answer. Choose the single best option, even if more than one seems reasonable.</li>
            <li>Mark your answers on the answer sheet after the last question of each test, or on a separate piece of paper.</li>
            <li>Do not use notes, the website, or other references. The abbreviation list on the next page is allowed.</li>
            <li>There is no penalty for guessing, so answer every question. An unanswered question counts as incorrect.</li>
            <li>When time ends, stop, even if you have not finished.</li>
        </ul>
        <h2>About the tests</h2>
        <ul>
            <li>No question appears in more than one test, so the three tests can be taken in any order.</li>
            <li>Every test has ${PHYSIOLOGY_PER_TEST} physiology and ${CLINICAL_PER_TEST} clinical questions, covering all ${physiologyOrder.length} physiology topics and all ${conditionOrder.length} clinical topics, with a similar mix of Step 1 questions (mechanisms, microbiology, and pathology) and Step 2 questions (diagnosis, next step, and management).</li>
            <li>The tests use ${questions.length} of the ${clinicalBank.length + physiologyBank.length} questions on the website, so the website quiz has more practice.</li>
            <li>Questions are in random order, and the topic being tested is not shown until the answers.</li>
        </ul>
        <h2>Scoring and review</h2>
        <ul>
            <li>Your score is the number of correct answers. Use the answer key at the start of each answer section, and write your score on your answer sheet.</li>
            <li>Then read the explanations. Each one names the topic and step, so you can see what to revisit.</li>
            <li>Answers follow the course material. Where a guideline differs, the explanation says so under "Additional information".</li>
        </ul>
        <h2>Contents</h2>
        <div class="contents">
            ${tests.map((test) => `<a href="#test-${test.name}">Test ${test.name}</a>`).join("")}
            ${tests.map((test) => `<a href="#answers-${test.name}">Test ${test.name} answers</a>`).join("")}
        </div>
    </section>

    <section class="abbreviations">
        <h1>Abbreviations</h1>
        <p class="intro">You may refer to this page during a test.</p>
        <div class="terms">${usedTerms.map(([term, definition]) => `<p><strong>${term}</strong> ${[definition].flat().join("; ")}</p>`).join("")}</div>
    </section>

    ${tests.map((test) => `<section class="test" id="test-${test.name}">
        <h1>Test ${test.name}</h1>
        <p class="intro">${test.questions.length} questions · ${MINUTES} minutes</p>
        <div class="columns">${test.questions.map(questionHtml).join("\n")}</div>
    </section>
    ${answerSheet(test)}`).join("\n")}

    ${tests.map((test) => `<section class="answers" id="answers-${test.name}">
        <h1>Test ${test.name} answers and explanations</h1>
        <div class="key">${test.questions.map((q) => `<span><b>${q.number}</b>${LETTERS[q.correct]}</span>`).join("")}</div>
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
