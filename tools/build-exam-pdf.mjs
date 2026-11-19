// Builds an organ system's practice exam: three timed parts in the style of a course final.
// Run from the project root: node tools/build-exam-pdf.mjs [gi|neuro]
// Content is in tools/exam-<system>-content.mjs. The PDFs are not linked from the site.
import { readFileSync } from "node:fs";
import { printPdf } from "./print-pdf.mjs";

// Each system's colors: the page accents, then the dark cover band and the light text and gauge on it
const THEMES = {
    gi: { accent: "#0f766e", soft: "#e2f1ee", dark: "#0a3a35", band: ["#0d433d", "#06231f"], light: "#8fd8cb", deck: "#d3e6e2", base: "#9fbab5", easy: "#9ccfc6", moderate: "#3f8f84" },
    neuro: { accent: "#4f46c8", soft: "#e9e8fb", dark: "#1b1a47", band: ["#24225e", "#0d0c26"], light: "#c3bff7", deck: "#dddcf5", base: "#a6a4cc", easy: "#c3bff7", moderate: "#7a73d9" },
};
const SYSTEM = process.argv[2] || "gi";
if (!THEMES[SYSTEM]) throw new Error(`Unknown system ${SYSTEM}; use ${Object.keys(THEMES).join(" or ")}`);
const THEME = THEMES[SYSTEM];
const { EXAM, PART1, PART2, PART3, EXTRA_TERMS = {} } = await import(`./exam-${SYSTEM}-content.mjs`);

const OUTPUT = `${SYSTEM}/${SYSTEM}-practice-exam.pdf`;
const LETTERS = ["A", "B", "C", "D", "E"];
const { accent: ACCENT, soft: SOFT, dark: DARK } = THEME;
const POINTS = { part1: 1, hard: 2, part2: 2 };
const SHORT_WORDS = 15;

/* ---------- Repeatable shuffling, as in the practice tests ---------- */
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

// Single-answer questions get an even share of correct letters; "select 2" questions are shuffled freely.
// Short-answer and ordering questions have no options to shuffle.
function arrange(questions, key) {
    const singles = questions.filter((q) => q.options && !q.select);
    const letters = shuffled(singles.map((q, i) => i % LETTERS.length), `letters-${key}`);
    return questions.map((q) => {
        if (!q.options) return q;
        const tagged = q.options.map((text, original) => ({ text, original }));
        const correct = [q.answer].flat();
        let shown;
        if (q.select) shown = shuffled(tagged, q.id);
        else {
            shown = shuffled(tagged.filter(({ original }) => original !== q.answer), q.id);
            shown.splice(letters[singles.indexOf(q)], 0, tagged[q.answer]);
        }
        return { ...q, type: "mc", shown, correctShown: shown.map((o, i) => (correct.includes(o.original) ? i : -1)).filter((i) => i >= 0) };
    });
}

/* ---------- Number the questions ---------- */
// Part 1: easy and moderate questions in a fixed random order, then the hard questions in the order written
const isHard = (q) => q.level === "hard";
const part1 = arrange([...shuffled(PART1.filter((q) => !isHard(q)), "part1-order"), ...PART1.filter(isHard)]
    .map((q) => ({ ...q, points: q.points || (isHard(q) ? POINTS.hard : POINTS.part1) })), "part1");
let number = 0;
part1.forEach((q) => { q.number = ++number; });
const part2Flat = arrange(PART2.flatMap((scenario) => scenario.blocks.flatMap((block) => block.questions)).map((q) => ({ ...q, points: q.points || POINTS.part2 })), "part2");
const part2ById = new Map(part2Flat.map((q) => [q.id, q]));
part2Flat.forEach((q) => { q.number = ++number; });
const part3 = arrange(PART3.questions, "part3");
part3.forEach((q) => { q.number = ++number; });
const scenarios = PART2.map((scenario) => ({ ...scenario, blocks: scenario.blocks.map((block) => ({ ...block, questions: block.questions.map((q) => part2ById.get(q.id)) })) }));

const sum = (list) => list.reduce((total, q) => total + q.points, 0);
const partPoints = [sum(part1), sum(part2Flat), sum(part3)];
const totalPoints = partPoints.reduce((a, b) => a + b, 0);
const totalMinutes = EXAM.parts.reduce((total, part) => total + part.minutes, 0);
const range = (list) => (list.length === 1 ? `${list[0].number}` : `${list[0].number}–${list[list.length - 1].number}`);
const answerLead = (list) => `Answer question${list.length === 1 ? "" : "s"} ${range(list)}`;
const partQuestions = [part1, part2Flat, part3];

/* ---------- Abbreviations, from the system's pages ---------- */
const sitePages = readFileSync(`${SYSTEM}/index.html`, "utf8") + readFileSync(`${SYSTEM}/physiology.html`, "utf8");
const glossary = new Map();
for (const m of sitePages.matchAll(/<abbr [^>]*data-definition="([^"]*)"[^>]*>([^<]+)<\/abbr>/g)) {
    const term = m[2].trim();
    if (!/[A-Z].*[A-Z0-9]|^[a-z]+[A-Z]/.test(term) || / [a-z]/.test(term)) continue;
    const list = glossary.get(term) || [];
    if (!list.some((d) => d.toLowerCase() === m[1].toLowerCase())) list.push(m[1]);
    glossary.set(term, list);
}
// Terms the exam uses but the pages do not define come from the content file's EXTRA_TERMS
const plainText = (html) => html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&");
const examText = plainText(JSON.stringify([PART1, PART2, { ...PART3, references: [] }]));
const has = (term) => new RegExp(`(^|[^A-Za-z0-9-])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^A-Za-z0-9-]|$)`).test(examText);
const usedTerms = new Map([...glossary].filter(([term]) => has(term)));
for (const [term, definition] of Object.entries(EXTRA_TERMS)) if (has(term) && !usedTerms.has(term)) usedTerms.set(term, [definition]);
// Interleukins appear as IL-25 and the like, which the word-boundary check skips
if (/\bIL-\d/.test(examText) && EXTRA_TERMS.IL) usedTerms.set("IL", [EXTRA_TERMS.IL]);
const terms = [...usedTerms].sort(([a], [b]) => a.localeCompare(b, "en", { sensitivity: "base" }));
// Capitalized tokens with no definition, so a missing one is noticed
const undefinedTerms = [...new Set(examText.match(/\b[A-Z][A-Z0-9]{1,}[a-z]?\b/g))].filter((t) => !usedTerms.has(t) && !/^(I|II|III|IV|PPI|PPIs|NSAIDs|ABX|IU|ULN|DNA|RNA|ATP|NADH|HCl|CO2|CYP\w*|GLUT\d|SGLT1|PepT1|IgA|IgE|IgG4|USA|LGR5|B12|HCO3|HT3|HT|HT4|A2|NH4|V1|V2|ANCA|ASA|MP|HS|JS|YH|BJS|PMC8693162|CC|BY|CA|CA19|N0|AUCs|GFR|GLP)$/.test(t));

/* ---------- Markup ---------- */
const bubble = (letter, filled) => `<i${filled ? ' class="is-on"' : ""}>${letter}</i>`;
const tag = (q) => `<span class="pts">${q.points} ${q.points === 1 ? "pt" : "pts"}</span>`;
const selectNote = (q) => (q.select ? `<span class="select">Select ${q.select}</span>` : "");

const mcHtml = (q) => `<ol class="options">${q.shown.map((o, i) => `<li>${bubble(LETTERS[i])}<span>${o.text}</span></li>`).join("")}</ol>`;
const limitNote = (words) => `<span class="limit">${words} words or fewer</span>`;
const answerBox = (q) => {
    const lines = q.lines || 2;
    const note = q.work ? '<span class="limit">Show your working</span>' : q.lines ? "" : limitNote(q.words || SHORT_WORDS);
    return `<div class="write">${"<span></span>".repeat(lines)}${note}</div>`;
};
const justifyBox = (q) => `<div class="write is-justify"><span></span>${limitNote(q.justify)}</div>`;
const orderHtml = (q) => `<p class="order-hint">Write 1–${q.items.length} in the boxes.</p><ol class="order-items">${q.items.map((item) => `<li><b class="order-box"></b><span>${item}</span></li>`).join("")}</ol>`;
const questionBody = (q) => (q.type === "sa" ? answerBox(q) : q.type === "order" ? orderHtml(q) : mcHtml(q) + (q.justify ? justifyBox(q) : ""));
const questionHtml = (q, withPassage = true) => `<section class="question">
    <span class="q-num">${q.number}</span>
    ${withPassage && q.passage ? `<div class="mini-passage">${q.passage}</div>` : ""}
    <p class="stem">${q.stem} ${selectNote(q)} ${tag(q)}</p>
    ${questionBody(q)}
</section>`;
// A linked set shares one passage, or builds on its first question, so it is kept together
const questionList = (list) => {
    let html = "";
    for (let i = 0; i < list.length; i += 1) {
        const q = list[i];
        if (!q.set) { html += questionHtml(q); continue; }
        const group = list.slice(i, i + q.set);
        html += `<div class="set"><p class="set-lead">Questions ${range(group)} go together</p>${q.passage ? `<div class="mini-passage">${q.passage}</div>` : ""}${group.map((g) => questionHtml(g, false)).join("\n")}</div>`;
        i += q.set - 1;
    }
    return html;
};

const partHead = (index, extra = "") => {
    const part = EXAM.parts[index];
    const list = partQuestions[index];
    return `<header class="test-head"><div><p class="kicker">Part ${index + 1} · Questions ${range(list)}</p><h1>${part.name}</h1></div><p class="chips"><span>${list.length} questions</span><span>${partPoints[index]} points</span><span>${part.minutes} minutes</span>${extra}</p></header>`;
};
const finished = (index) => `<p class="finished">${index < 2 ? `You have finished Part ${index + 1}. Stop the timer; take a short break if you need one before starting Part ${index + 2}.` : "You have finished the exam. The answers and explanations follow."}</p>`;

// Only questions with options have bubbles; the rest are answered in the exam itself
const sheetGrid = (list, showAnswers) => {
    const rows = 10;
    return `<div class="grid" style="grid-template-rows: repeat(${rows}, auto)">${list.filter((q) => q.shown).map((q) => `<p><strong>${q.number}</strong>${LETTERS.map((letter, i) => bubble(letter, showAnswers && q.correctShown.includes(i))).join("")}</p>`).join("")}</div>`;
};
const writtenNumbers = (list) => list.filter((q) => !q.shown).map((q) => q.number);

const reasons = (q) => q.shown
    .map((o, i) => ({ letter: LETTERS[i], note: q.notes?.[o.original] }))
    .filter(({ note }) => note)
    .map(({ letter, note }) => `<li>${bubble(letter)}<span>${note}</span></li>`)
    .join("");
const levelTag = (q) => `<b class="level-${q.level}">${q.level[0].toUpperCase()}${q.level.slice(1)}</b>`;
const pointsTag = (q) => `<b>${q.points} ${q.points === 1 ? "point" : "points"}</b>`;
const markingList = (list) => `<ul class="marking">${list.map((m) => `<li>${m}</li>`).join("")}</ul>`;
const answerHtml = (q) => {
    if (q.type === "sa") {
        return `<section class="answer">
    <span class="q-num">${q.number}</span>
    <p class="answer-head is-sa"><span>${q.answer}</span></p>
    <p class="answer-tag">${levelTag(q)}<b>${q.work ? "Calculation" : "Short answer"}</b>${pointsTag(q)}</p>
    ${markingList(q.marking)}
    <p class="explanation">${q.explanation}</p>
</section>`;
    }
    if (q.type === "order") {
        return `<section class="answer">
    <span class="q-num">${q.number}</span>
    <ol class="order-answer">${q.order.map((i) => `<li>${q.items[i]}</li>`).join("")}</ol>
    <p class="answer-tag">${levelTag(q)}<b>Ordering</b>${pointsTag(q)}</p>
    ${markingList(q.marking)}
    <p class="explanation">${q.explanation}</p>
</section>`;
    }
    const why = reasons(q);
    return `<section class="answer">
    <span class="q-num">${q.number}</span>
    <p class="answer-head">${q.correctShown.map((i) => bubble(LETTERS[i], true)).join("")}<span>${q.correctShown.map((i) => q.shown[i].text).join("; ")}</span></p>
    <p class="answer-tag">${levelTag(q)}${q.topic ? `<b>${q.topic}</b>` : ""}${q.select ? `<b>Select ${q.select}: both needed</b>` : ""}${q.justify ? "<b>Justify</b>" : ""}${pointsTag(q)}</p>
    ${q.justify ? `<p class="justify"><strong>Justification:</strong> ${q.justifyAnswer}</p>${markingList([q.justifyMarking])}` : ""}
    <p class="explanation">${q.explanation}</p>
    ${why ? `<p class="why-not">Why not the others</p><ul class="reasons">${why}</ul>` : ""}
</section>`;
};

const tableHtml = (t) => `<figure class="data"><figcaption>${t.caption}</figcaption><table><thead><tr>${t.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></figure>`;

const updated = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
const levelCount = (level) => PART1.filter((q) => q.level === level).length;
// Difficulty across the whole exam, shown on the instructions page
const allQuestions = [...part1, ...part2Flat, ...part3];
const profile = ["easy", "moderate", "hard"].map((level) => [level, allQuestions.filter((q) => q.level === level).length]);
// A small gauge on the cover, every bar filled
const gauge = `<svg class="gauge" viewBox="0 0 30 14" aria-hidden="true">${[0, 1, 2, 3, 4].map((i) => `<rect x="${i * 6}" y="${12 - (i + 1) * 2.4}" width="4" height="${(i + 1) * 2.4 + 2}" rx="0.8"${i === 4 ? ' class="peak"' : ""}/>`).join("")}</svg>`;

// The cover reuses the system's drawing from the landing page, without labels or the moving signal, as the practice tests do
const landing = readFileSync("index.html", "utf8");
const panelStart = landing.indexOf(`<article class="world is-${SYSTEM}">`);
const coverArt = landing.slice(landing.indexOf("<svg", panelStart), landing.indexOf("</svg>", panelStart) + 6)
    .replace(/ role="img" aria-label="[^"]*"/, ' aria-hidden="true"')
    .replace(/<text class="art-label[^"]*"[\s\S]*?<\/text>/g, "")
    .replace(/<path class="(?:gi-bolus|neuro-pulse)[^"]*"[^>]*\/>/g, "");

const REFERENCES = PART3.references;

const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${EXAM.title}</title><style>
    @page { size: A4; }
    @page :first { margin: 0; }
    :root { --accent: ${ACCENT}; --soft: ${SOFT}; --dark: ${DARK}; --muted: #5b6470; --line: #dde2e6; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.45 Georgia, "Times New Roman", serif; }
    h1, h2, h3, h4, .kicker, .q-num, .answer-head, .answer-tag, .why-not, .grid, .sheet-line, .sheet-note, .facts, .cover, .chips, .pts, .select, .limit, .structure, .data figcaption, table, i { font-family: "Segoe UI", system-ui, sans-serif; }
    a { color: inherit; text-decoration: none; }

    /* Cover */
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
    .cover-art .neuro-bouton, .cover-art .neuro-soma { fill: #fff; stroke: var(--accent); stroke-width: 2.5; }
    .cover-art .neuro-myelin-seg, .cover-art .neuro-hillock { fill: #fff; stroke: var(--accent); stroke-width: 2; }
    .cover-art .neuro-ranvier, .cover-art .neuro-vesicle { fill: var(--accent); }
    .cover-art .neuro-axis, .cover-art .neuro-threshold { fill: none; stroke: var(--accent); stroke-width: 1.5; opacity: 0.4; }
    .cover-art .neuro-threshold { stroke-dasharray: 6 6; }
    .cover-art .neuro-trace { fill: none; stroke: var(--accent); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3; }
    .cover-art .neuro-post { fill: none; stroke: var(--accent); stroke-linecap: round; stroke-width: 2.5; }
    .cover-art .neuro-transmitter { display: none; }
    .cover-band { position: absolute; left: 0; right: 0; bottom: 0; height: 92mm; background: linear-gradient(180deg, ${THEME.band[0]}, ${THEME.band[1]}); }
    .headline { position: absolute; left: 16mm; right: 16mm; bottom: 34mm; color: #fff; }
    .headline .kicker { margin-bottom: 3mm; color: ${THEME.light}; }
    .headline .kicker::after { border-color: ${THEME.light}; opacity: 0.5; }
    .gauge { width: 9mm; height: 4.2mm; flex: none; }
    .gauge rect { fill: ${THEME.light}; }
    .gauge rect.peak { fill: #e8836f; }
    .headline h2 { margin: 0 0 3mm; font: 700 46pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .headline .deck { width: 140mm; margin: 0; color: ${THEME.deck}; font: italic 12.5pt/1.4 Georgia, "Times New Roman", serif; }
    .cover-base { position: absolute; left: 16mm; right: 16mm; bottom: 16mm; padding-top: 2.5mm; border-top: 0.4pt solid rgba(255, 255, 255, 0.25); color: ${THEME.base}; font-size: 7.5pt; letter-spacing: 0.04em; }
    .profile { margin: 4mm 0 0; }
    .profile-label { margin: 0 0 1.4mm; color: var(--muted); font: 700 7.5pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.08em; text-transform: uppercase; }
    .profile-bar { display: flex; gap: 0.6mm; height: 2.6mm; border-radius: 1.3mm; overflow: hidden; }
    .profile-bar .is-easy, .profile-key .is-easy i { background: ${THEME.easy}; }
    .profile-bar .is-moderate, .profile-key .is-moderate i { background: ${THEME.moderate}; }
    .profile-bar .is-hard, .profile-key .is-hard i { background: #9b2f22; }
    .profile-key { display: flex; gap: 5mm; margin: 1.4mm 0 0; color: var(--muted); font: 600 7.5pt "Segoe UI", system-ui, sans-serif; }
    .profile-key span { display: inline-flex; align-items: center; gap: 1.2mm; }
    .profile-key i { width: 2.4mm; height: 2.4mm; border: 0; border-radius: 0.6mm; }

    /* Headings */
    .kicker { display: flex; align-items: center; gap: 3mm; margin: 0 0 2mm; color: var(--accent); font-size: 7.8pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .kicker::after { content: ""; flex: 1; border-top: 0.6pt solid var(--accent); }
    .page-head, .test-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 6mm; margin: 0 0 5mm; padding-bottom: 3mm; border-bottom: 0.8pt solid #1a1f24; }
    .page-head h1, .test-head h1 { margin: 0; font: 400 30pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .test-head .kicker::after { display: none; }
    .page-head p { margin: 0 0 1mm; color: var(--accent); font: 700 8pt/1.5 "Segoe UI", system-ui, sans-serif; letter-spacing: 0.14em; text-align: right; text-transform: uppercase; }
    .page-head p span { display: block; color: var(--muted); font-weight: 600; }
    .chips { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 2mm; margin: 0; }
    .chips span { padding: 1mm 2.6mm; border-radius: 4mm; background: var(--soft); color: var(--dark); font-size: 8pt; font-weight: 600; white-space: nowrap; }

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
    .structure { width: 100%; border-collapse: collapse; font-size: 9pt; }
    .structure th { padding: 1.6mm 2mm; border-bottom: 0.8pt solid #1a1f24; color: var(--muted); font-size: 7.5pt; letter-spacing: 0.08em; text-align: left; text-transform: uppercase; }
    .structure td { padding: 2mm; border-bottom: 0.4pt solid var(--line); vertical-align: top; }
    .structure td:first-child { color: var(--accent); font-weight: 700; white-space: nowrap; }
    .structure td:nth-child(n+3) { white-space: nowrap; }
    .structure tr.total td { border-bottom: 0; font-weight: 700; }
    .good-luck { margin: 6mm 0 0; color: var(--dark); font: italic 11pt/1.4 Georgia, serif; }
    .abbreviations { break-before: page; }
    .abbreviations .intro { margin: 0 0 3mm; color: var(--muted); }
    .terms { column-count: 3; column-gap: 6mm; }
    .terms p { margin: 0 0 1mm; font-size: 8pt; line-height: 1.3; break-inside: avoid; }
    .terms strong { font-family: "Segoe UI", system-ui, sans-serif; }

    /* Questions */
    .part, .answers, .references-page { break-before: page; }
    .part-intro { margin: 0 0 4mm; color: #333b44; font-style: italic; }
    .columns { column-count: 2; column-gap: 8mm; column-rule: 0.4pt solid var(--line); }
    .question, .answer { position: relative; margin: 0 0 3.4mm; padding: 0 0 3.4mm 9mm; border-bottom: 0.4pt solid var(--line); break-inside: avoid; }
    .q-num { position: absolute; left: 0; top: 0.3mm; display: flex; align-items: center; justify-content: center; width: 6.6mm; height: 5mm; border-radius: 1.2mm; background: var(--accent); color: #fff; font-size: 8.2pt; font-weight: 700; }
    .stem { margin: 0 0 1.8mm; }
    .pts, .select { display: inline-block; margin-left: 1mm; padding: 0.2mm 1.6mm; border-radius: 3mm; font-size: 6.8pt; font-weight: 700; vertical-align: 1px; white-space: nowrap; }
    .pts { background: #eef1f3; color: var(--muted); }
    .select { background: var(--accent); color: #fff; letter-spacing: 0.04em; text-transform: uppercase; }
    .options, .reasons, .marking { margin: 0; padding: 0; list-style: none; }
    .options li, .reasons li, .answer-head { display: flex; align-items: flex-start; gap: 2mm; }
    .options li { margin-bottom: 1mm; line-height: 1.35; }
    i { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 4.4mm; height: 4.4mm; margin-top: 0.1mm; border: 0.7pt solid var(--muted); border-radius: 50%; color: var(--muted); font-size: 6.8pt; font-style: normal; font-weight: 700; }
    i.is-on { border-color: var(--accent); background: var(--accent); color: #fff; }
    .mini-passage { margin: 0 0 2mm; padding: 2mm 3mm; border-left: 0.8mm solid var(--accent); background: #f6f8f8; font-size: 8.8pt; }
    .mini-passage p { margin: 0 0 1.4mm; }
    .mini-passage p:last-child { margin-bottom: 0; }
    table { border-collapse: collapse; font-size: 7.8pt; }
    .mini-passage table, .passage table, .data table { width: 100%; margin: 1mm 0; }
    th { padding: 1mm 1.6mm; border-bottom: 0.8pt solid var(--dark); color: var(--dark); font-weight: 700; text-align: left; }
    td { padding: 0.9mm 1.6mm; border-bottom: 0.4pt solid var(--line); }

    /* Scenarios and the paper */
    .scenario { break-before: page; }
    .scenario.is-first { break-before: auto; }
    .keep { break-inside: avoid; }
    .scenario-head { margin: 0 0 3mm; }
    .scenario-head h2 { margin: 0; font: 400 20pt/1.1 Georgia, "Times New Roman", serif; }
    .passage { margin: 0 0 3.5mm; padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); break-inside: avoid; }
    .passage p { margin: 0 0 1.6mm; }
    .passage p:last-child { margin-bottom: 0; }
    .passage .lead { margin: 0 0 1.4mm; color: var(--accent); font: 700 7.5pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; }
    .supp { padding-top: 1.6mm; border-top: 0.4pt solid rgba(10, 58, 53, 0.18); font-size: 8.8pt; }
    .single .question { padding-bottom: 3.6mm; }
    .write { margin: 0 0 1mm; }
    .write span { display: block; height: 8mm; border-bottom: 0.5pt solid #9aa5ad; }
    .write .limit { height: auto; margin-top: 0.8mm; border: 0; color: var(--muted); font-size: 6.8pt; font-weight: 600; text-align: right; }
    .paper-cite { margin: 0 0 3mm; padding: 2.5mm 4mm; border: 0.8pt solid var(--accent); border-radius: 2mm; font-size: 9pt; }
    .excerpt { margin: 0 0 3mm; font-size: 9.2pt; }
    .excerpt p { margin: 0 0 2mm; text-align: justify; }
    .data { margin: 0 0 3.5mm; break-inside: avoid; }
    .data figcaption { margin-bottom: 1mm; color: var(--dark); font-size: 8pt; font-weight: 700; }
    .supp-list { margin: 0 0 4mm; padding: 3mm 4mm 3mm 8mm; border-radius: 2mm; background: var(--soft); font-size: 8.8pt; }
    .supp-list li { margin-bottom: 1.2mm; }
    .columns .finished { margin-top: 2mm; font-size: 9.5pt; }
    .finished { margin: 5mm 0 0; padding: 3mm 4mm; border-top: 0.8pt solid #1a1f24; color: var(--dark); font: italic 10.5pt/1.4 Georgia, serif; break-inside: avoid; }
    .section-label { margin: 4mm 0 2mm; }

    /* Hard questions, linked sets, and the newer formats */
    .hard-head { margin: 4mm 0 3.5mm; padding-top: 3mm; border-top: 0.8pt solid #1a1f24; break-inside: avoid; break-after: avoid; }
    .hard-head .kicker::after { display: none; }
    .hard-head p:last-child { margin: 0; color: #333b44; font-style: italic; }
    .set { margin: 0 0 3.4mm; padding: 2mm 0 0 2.5mm; border-left: 0.8mm solid var(--soft); break-inside: avoid; }
    .set-lead { margin: 0 0 1.6mm; color: var(--accent); font: 700 7pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; }
    .order-hint { margin: 0 0 1.4mm; color: var(--muted); font: 600 7.5pt "Segoe UI", system-ui, sans-serif; }
    .order-items { margin: 0; padding: 0; list-style: none; }
    .order-items li { display: flex; align-items: flex-start; gap: 2.4mm; margin-bottom: 1.4mm; line-height: 1.35; }
    .order-box { flex: none; width: 6.5mm; height: 5.5mm; border: 0.7pt solid var(--muted); border-radius: 1mm; }
    .write.is-justify { margin-top: 1.6mm; }
    .order-answer { margin: 0 0 1.2mm; padding-left: 5mm; color: var(--dark); font: 700 9pt/1.4 "Segoe UI", system-ui, sans-serif; }
    .justify { padding: 1.2mm 2.5mm 0; }
    .block.new-page { break-before: page; }
    .turn-cue { margin: 0 0 2.5mm; padding: 1.6mm 3mm; border-radius: 1.5mm; background: var(--dark); color: #fff; font: 700 8pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; }
    .recap { margin: 0 0 3.5mm; padding: 2mm 3mm; border-left: 0.8mm solid #b9c2c8; background: #f6f7f8; color: #4a5560; font-size: 8.3pt; }
    .recap p { margin: 0 0 1.2mm; }
    .recap .lead { color: var(--muted); font: 700 7pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; }
    .recap table { width: 100%; font-size: 7.2pt; }

    /* Answer sheet and key */
    .answer-sheet { break-before: page; }
    .answer-sheet h1 { margin: 0 0 5mm; font: 400 30pt/1 Georgia, "Times New Roman", serif; }
    .sheet-line { display: flex; align-items: flex-end; gap: 2mm; margin: 0 0 7mm; font-size: 10pt; }
    .sheet-line span { flex: 1; border-bottom: 0.8pt solid var(--muted); }
    .sheet-line span.short { flex: 0 0 14mm; }
    .grid { display: grid; grid-auto-flow: column; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0 4mm; padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); }
    .grid p { display: flex; align-items: center; gap: 1.2mm; margin: 0; padding: 1.5mm 0; border-bottom: 0.4pt solid rgba(0, 0, 0, 0.08); }
    .grid p:nth-child(10n) { border-bottom: 0; }
    .grid strong { width: 6mm; margin-right: 0.6mm; color: var(--dark); font-size: 8.5pt; text-align: right; }
    .grid i { width: 4.8mm; height: 4.8mm; background: #fff; font-size: 7pt; }
    .grid i.is-on { background: var(--accent); }
    .sheet-note { margin: 3mm 0 0; color: var(--muted); font-size: 8.5pt; }
    .answers .grid { margin-bottom: 6mm; }
    .answer { break-inside: avoid; }
    .answer p { margin: 0 0 1.2mm; orphans: 2; widows: 2; }
    .answer-head, .answer-tag, .why-not { break-after: avoid; }
    .reasons li, .marking li { break-inside: avoid; }
    .answer-head { color: var(--dark); font-weight: 700; line-height: 1.3; }
    .answer-head.is-sa { display: block; }
    .answer-tag { display: flex; flex-wrap: wrap; gap: 1.2mm; }
    .answer-tag b { padding: 0.3mm 1.8mm; border-radius: 3mm; background: var(--soft); color: var(--dark); font-size: 7pt; font-weight: 600; }
    .answer-tag b.level-easy { background: #e3f3e6; color: #1f5f2c; }
    .answer-tag b.level-moderate { background: #fbf0d9; color: #7a5410; }
    .answer-tag b.level-hard { background: #f9e1df; color: #8c2a20; }
    .why-not { margin: 1.6mm 0 0.8mm !important; color: var(--accent); font-size: 7pt; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    .reasons { font-size: 8.8pt; }
    .reasons li { margin-bottom: 0.8mm; line-height: 1.35; }
    .reasons i { width: 4rem; width: 4mm; height: 4mm; font-size: 6.2pt; }
    .marking { margin: 0 0 1.4mm; padding: 1.5mm 2.5mm; border-left: 0.8mm solid var(--accent); background: var(--soft); font-size: 8.6pt; }
    .marking li { margin-bottom: 0.5mm; }
    .answers h2 { margin: 5mm 0 3mm; font: 400 17pt/1.1 Georgia, "Times New Roman", serif; break-after: avoid; }
    .answers h2.new-page { break-before: page; margin-top: 0; }
    .references-page ol { margin: 0; padding-left: 6mm; font-size: 9pt; }
    .references-page li { margin-bottom: 2mm; }
    .references-page .intro { color: var(--muted); }
</style></head><body>
    <section class="cover">
        <header class="masthead">
            <h1>Clinical <em>Conditions</em></h1>
            <p class="issue">Practice exam<span>Last updated ${updated}</span></p>
        </header>
        <div class="cover-art">${coverArt}</div>
        <div class="cover-band"></div>
        <div class="headline">
            <p class="kicker">${gauge}Three parts · ${totalMinutes} minutes · ${totalPoints} points</p>
            <h2>${EXAM.system}</h2>
            <p class="deck">${EXAM.deck}</p>
        </div>
        <div class="cover-base">For educational use only. This is a study aid, not a clinical reference.</div>
    </section>

    <section class="instructions">
        <header class="page-head"><h1>Instructions</h1><p>${EXAM.title}<span>Last updated ${updated}</span></p></header>
        <div class="facts">
            <div><strong>${totalMinutes} minutes</strong><span>in three timed parts</span></div>
            <div><strong>${number} questions</strong><span>multiple choice and short answer</span></div>
            <div><strong>${totalPoints} points</strong><span>in total</span></div>
        </div>
        <table class="structure"><thead><tr><th>Part</th><th>Focus</th><th>Questions</th><th>Points</th><th>Time</th></tr></thead><tbody>
            ${EXAM.parts.map((part, i) => `<tr><td>Part ${i + 1}</td><td><strong>${part.name}.</strong> ${part.focus}</td><td>${range(partQuestions[i])} (${partQuestions[i].length})</td><td>${partPoints[i]}</td><td>${part.minutes} min</td></tr>`).join("")}
            <tr class="total"><td></td><td>Total</td><td>${number}</td><td>${totalPoints}</td><td>${totalMinutes} min</td></tr>
        </tbody></table>
        <div class="profile">
            <p class="profile-label">Difficulty profile</p>
            <div class="profile-bar">${profile.map(([level, count]) => `<span class="is-${level}" style="flex:${count}"></span>`).join("")}</div>
            <p class="profile-key">${profile.map(([level, count]) => `<span class="is-${level}"><i></i>${level[0].toUpperCase()}${level.slice(1)} ${count}</span>`).join("")}</p>
        </div>
        <p class="kicker">Taking the exam</p>
        <ul>
            <li>Take one part at a time and time each part separately. Do not look ahead to the next part, and do not return to a part once its time is up. A short break between parts is allowed.</li>
            <li>Each multiple choice question has five options. Unless a question says otherwise, choose the single best option. A question marked <strong>Select 2</strong> needs both correct options for its points; there is no partial credit.</li>
            <li>Some questions ask you to <strong>justify</strong> a choice, put steps <strong>in order</strong>, or <strong>calculate</strong>; follow the word limit or "Show your working" beside the answer lines. Short answers have a limit of ${SHORT_WORDS} words, and words beyond a limit are not marked.</li>
            <li><strong>In Part 2, each passage starts on a new page.</strong> Answer the questions under a passage before turning the page, and <strong>do not turn back</strong> once you have: later passages can reveal earlier answers. The opening of each scenario is repeated at the top of its later pages, so you need not look back.</li>
            <li>Use only the abbreviations on the next page, or those defined in a passage. Write any other term in full the first time you use it in an answer.</li>
            <li>No notes, website, or other references. A basic calculator is allowed in Part 3.</li>
        </ul>
        <p class="kicker">About the questions</p>
        <ul>
            <li>Part 1 begins with ${part1.filter((q) => !isHard(q)).length} single-best questions in no particular order, worth 1 point each. It ends with ${part1.filter(isHard).length} harder questions worth ${POINTS.hard} points each, in varied formats, which ask you to interpret data, connect ideas, and reason past what you have memorized. Some come in linked pairs.</li>
            <li>Each Part 2 scenario has at least 2 multiple choice and 2 short-answer questions. Scenarios differ in length and difficulty, and the second is the longest.</li>
            <li>Part 3 is built on a published study. The first questions introduce it; the rest ask you to judge what its data can and cannot show, using what you know.</li>
            <li>Answers follow the course material. Difficulty is shown only in the answers.</li>
        </ul>
        <p class="good-luck">Read each passage once, carefully, before its questions. Good luck.</p>
    </section>

    <section class="abbreviations">
        <header class="page-head"><h1>Abbreviations</h1><p>Allowed during the exam</p></header>
        <p class="intro">These abbreviations appear in the exam and may be used in your answers. Definitions follow the Clinical Conditions website.</p>
        <div class="terms">${terms.map(([term, definition]) => `<p><strong>${term}</strong> ${[definition].flat().join("; ")}</p>`).join("")}</div>
    </section>

    <section class="part" id="part-1">
        ${partHead(0)}
        <p class="part-intro">In this part, questions ${range(part1.filter((q) => !isHard(q)))} are single-best questions worth 1 point each. Questions ${range(part1.filter(isHard))} are worth ${POINTS.hard} points each and come in varied formats; some begin with a short passage or a table of data, and linked questions share one.</p>
        <div class="columns">${questionList(part1.filter((q) => !isHard(q)))}</div>
        <div class="hard-head"><p class="kicker">Questions ${range(part1.filter(isHard))} · ${POINTS.hard} points each</p><p>These questions ask you to interpret, connect, and reason. Read each passage before its questions.</p></div>
        <div class="columns">${questionList(part1.filter(isHard))}${finished(0)}</div>
    </section>

    <section class="answer-sheet">
        <p class="kicker">Part 1</p>
        <h1>Answer sheet</h1>
        <p class="sheet-line">Name <span></span> Date <span></span> Score <span class="short"></span> / ${partPoints[0]}</p>
        ${sheetGrid(part1, false)}
        <p class="sheet-note">Fill one bubble for each question, or two for a question marked Select 2. Questions ${writtenNumbers(part1).join(", ")} and the written parts of justify questions are answered in the exam itself, as are Parts 2 and 3.</p>
    </section>

    <section class="part" id="part-2">
        ${partHead(1)}
        <p class="part-intro">In this part, you will follow five patients from presentation to treatment. Each scenario unfolds in passages, and <strong>each passage starts on a new page</strong>. Answer the questions under a passage before you turn the page, and do not turn back afterward: later passages can reveal earlier answers. The opening of each scenario is repeated at the top of its later pages.</p>
    </section>
    ${scenarios.map((scenario, s) => `<section class="scenario single${s === 0 ? " is-first" : ""}">
        <header class="scenario-head"><p class="kicker">Scenario ${s + 1}</p><h2>${scenario.title}</h2></header>
        ${scenario.blocks.map((block, b) => `<div class="block${b ? " new-page" : ""}">
        ${b ? `<p class="turn-cue">Scenario ${s + 1}, continued. Do not turn back to earlier pages.</p><div class="recap"><p class="lead">Opening of the scenario, repeated</p>${scenario.blocks[0].passage}</div>` : ""}
        <div class="keep"><div class="passage"><p class="lead">${answerLead(block.questions)}</p>${block.passage}</div>${questionHtml(block.questions[0])}</div>
        ${block.questions.slice(1).map((q) => questionHtml(q)).join("\n")}</div>`).join("\n")}
        ${s === scenarios.length - 1 ? finished(1) : ""}
    </section>`).join("\n")}

    <section class="part single" id="part-3">
        ${partHead(2)}
        ${PART3.intro}
        <p class="paper-cite"><strong>The study.</strong> ${PART3.paper.cite} ${PART3.paper.id}. Excerpts below are quoted from the paper under its ${PART3.paper.license} license; "[…]" marks text left out.</p>
        <div class="excerpt">${PART3.excerpt}</div>
        ${PART3.tables.map(tableHtml).join("")}
        <p class="kicker section-label">Supplementary information</p>
        <ul class="supp-list">${PART3.supplementary.map((s) => `<li>${s}</li>`).join("")}</ul>
        <p class="kicker section-label">${answerLead(part3)}</p>
        ${part3.map((q) => questionHtml(q)).join("\n")}
        ${finished(2)}
    </section>

    <section class="answers">
        <header class="test-head"><div><p class="kicker">Questions 1–${number}</p><h1>Answers</h1></div><p class="chips"><span>Answer key</span><span>Marking guide</span><span>Explanations</span></p></header>
        <p class="kicker">Part 1 answer key</p>
        ${sheetGrid(part1, true)}
        <div class="columns">${part1.map(answerHtml).join("\n")}</div>
        <h2 class="new-page">Part 2: Clinical scenarios</h2>
        ${scenarios.map((scenario, s) => {
            const [first, ...rest] = scenario.blocks.flatMap((b) => b.questions);
            return `<div class="keep"><p class="kicker">Scenario ${s + 1} · ${scenario.title}</p>${answerHtml(first)}</div>${rest.map(answerHtml).join("\n")}`;
        }).join("\n")}
        <h2 class="new-page">Part 3: Reading the research</h2>
        ${part3.map(answerHtml).join("\n")}
    </section>

    <section class="references-page">
        <header class="page-head"><h1>References</h1><p>Sources for Part 3</p></header>
        <p class="intro">Parts 1 and 2 follow the Clinical Conditions website. Part 3 draws on these sources.</p>
        <ol>${REFERENCES.map((r) => `<li>${r}</li>`).join("")}</ol>
    </section>
</body></html>`;

await printPdf(html, OUTPUT, `Clinical Conditions · ${EXAM.title}`);

/* ---------- Checks ---------- */
const mcs = [...part1, ...part2Flat, ...part3].filter((q) => q.shown);
const longest = mcs.filter((q) => !q.select && q.shown[q.correctShown[0]].text.length > Math.max(...q.shown.filter((o, i) => i !== q.correctShown[0]).map((o) => o.text.length)));
const letterCount = (list) => LETTERS.map((letter, i) => `${letter} ${list.filter((q) => q.shown && !q.select && q.correctShown[0] === i).length}`).join(", ");
const kind = (q) => (q.type === "order" ? "order" : q.type === "sa" ? (q.work ? "calc" : "sa") : q.select ? "select" : q.justify ? "justify" : "mc");
const words = (text) => text.split(/\s+/).length;
const overLimit = [...part1, ...part2Flat, ...part3].filter((q) => (q.type === "sa" && !q.work && !q.lines && words(q.answer) > (q.words || SHORT_WORDS)) || (q.justify && words(q.justifyAnswer) > q.justify)).map((q) => q.id);
console.log(`Part 1: ${levelCount("easy")} easy, ${levelCount("moderate")} moderate, ${levelCount("hard")} hard (${part1.filter(isHard).map(kind).join(", ")}); letters ${letterCount(part1)}`);
scenarios.forEach((scenario, s) => {
    const qs = scenario.blocks.flatMap((b) => b.questions);
    const mc = qs.filter((q) => q.shown).length, sa = qs.filter((q) => q.type === "sa").length;
    const problems = [qs.length < 5 || qs.length > 8 ? `${qs.length} questions` : "", mc < 2 ? "under 2 MC" : "", sa < 2 ? "under 2 short answers" : ""].filter(Boolean);
    console.log(`Scenario ${s + 1} (${scenario.level || "?"}): ${qs.length} questions, ${qs.map(kind).join(", ")}${problems.length ? `; PROBLEM: ${problems.join(", ")}` : ""}`);
});
if (overLimit.length) console.log(`Over the word limit: ${overLimit.join(", ")}`);
console.log(`Part 3: ${part3.length} questions; correct option longest in ${longest.length} of ${mcs.filter((q) => !q.select).length} single-answer questions (${longest.map((q) => q.id).join(", ")})`);
console.log(`${OUTPUT}: ${totalPoints} points, ${totalMinutes} minutes, ${terms.length} abbreviations${undefinedTerms.length ? `; no definition for ${undefinedTerms.join(", ")}` : ""}`);
process.exit(0);
