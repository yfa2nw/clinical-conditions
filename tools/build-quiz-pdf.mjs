// Builds an offline copy of a page's quiz: the questions by kind, then every answer with its
// explanation and a note on each wrong option. The quiz screen links to it when the article has
// data-quiz-pdf="quizzes/<id>.pdf".
// Run from the project root: node tools/build-quiz-pdf.mjs gi esophagitis
import { mkdirSync, readFileSync, existsSync } from "node:fs";
import vm from "node:vm";
import { printPdf } from "./print-pdf.mjs";

const THEMES = {
    gi: { name: "Gastrointestinal", accent: "#0f766e", soft: "#e2f1ee", dark: "#0a3a35" },
    neuro: { name: "Neurology", accent: "#4f46c8", soft: "#e9e8fb", dark: "#1b1a47" },
    review: { name: "Basic Clinical Sciences", accent: "#80640c", soft: "#f4ebca", dark: "#2a2614" },
    foundations: { name: "Foundations", accent: "#3f5566", soft: "#e4eaef", dark: "#1d2730" },
    msk: { name: "Musculoskeletal", accent: "#7d3486", soft: "#f3e3f4", dark: "#2e1a32" },
    resp: { name: "Respiratory", accent: "#4c7419", soft: "#e8f2d8", dark: "#1d2a14" },
    cardio: { name: "Cardiovascular", accent: "#b01c3a", soft: "#fbe4e8", dark: "#321319" },
    endocrine: { name: "Endocrine", accent: "#b35c0e", soft: "#fbeedd", dark: "#2a1b0c" },
    renal: { name: "Renal", accent: "#1c6db0", soft: "#e1eff9", dark: "#13283a" },
};
const [SYSTEM, ID] = process.argv.slice(2);
if (!THEMES[SYSTEM] || !ID) throw new Error("Usage: node tools/build-quiz-pdf.mjs <gi|neuro|foundations|msk|resp|cardio|endocrine|renal|review> <page id>");
const THEME = THEMES[SYSTEM];

// The page lives on the conditions page or the physiology page, each with its own bank
const sources = [["index.html", "questions.js"], ["physiology.html", "physiology-questions.js"]]
    .map(([page, bank]) => [`${SYSTEM}/${page}`, `${SYSTEM}/${bank}`])
    .filter(([page, bank]) => existsSync(page) && existsSync(bank));
const found = sources.find(([page]) => readFileSync(page, "utf8").includes(`id="${ID}"`));
if (!found) throw new Error(`No page with id ${ID} in ${SYSTEM}`);
const [PAGE_FILE, BANK_FILE] = found;
const pageHtml = readFileSync(PAGE_FILE, "utf8");
const TITLE = pageHtml.match(new RegExp(`id="${ID}"[^>]*>\\s*<h2>([\\s\\S]*?)</h2>`))[1].replace(/<[^>]+>/g, "").trim();
const QUESTIONS = vm.runInNewContext(`${readFileSync(BANK_FILE, "utf8")};QUIZ_QUESTIONS`).filter((q) => q.condition === ID);
if (!QUESTIONS.length) throw new Error(`No questions for ${ID} in ${BANK_FILE}`);

mkdirSync(`${SYSTEM}/quizzes`, { recursive: true });
const OUTPUT = `${SYSTEM}/quizzes/${ID}.pdf`;
const LETTERS = ["A", "B", "C", "D", "E"];
const KINDS = [["memory", "Memory"], ["reasoning", "Reasoning"], ["analysis", "Analysis"]];

/* ---------- Repeatable shuffling, with each letter correct about equally often ---------- */
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

// Memory, reasoning, then analysis, as on the website; sets stay together and in order
let number = 0;
const letters = shuffled(QUESTIONS.map((q, i) => i % 5), `letters-${ID}`);
const groups = KINDS.map(([level, name]) => {
    const units = [];
    const bySet = new Map();
    QUESTIONS.filter((q) => q.kind === level).forEach((q) => {
        if (!q.set) return units.push([q]);
        if (!bySet.has(q.set)) bySet.set(q.set, units[units.push([]) - 1]);
        bySet.get(q.set).push(q);
    });
    const questions = shuffled(units, `${ID}-${level}`).flat().map((q) => {
        const others = shuffled(q.options.map((text, original) => ({ text, original })).filter(({ original }) => original !== q.answer), q.id);
        const correctAt = letters[QUESTIONS.indexOf(q)];
        others.splice(correctAt, 0, { text: q.options[q.answer], original: q.answer });
        return { ...q, shown: others, correctAt, number: ++number };
    });
    return { level, name, questions };
}).filter((group) => group.questions.length);

const passageFor = (q) => (q.set ? QUESTIONS.find((other) => other.set === q.set && other.passage)?.passage : null);
const asHtml = (text) => (/<\/?[a-z][^>]*>/i.test(text) ? text : `<p>${text}</p>`);
const bubble = (letter, filled) => `<i${filled ? ' class="is-on"' : ""}>${letter}</i>`;

const questionHtml = (q, group) => {
    const passage = q.set && q === group.questions.find((other) => other.set === q.set) ? passageFor(q) : null;
    const members = q.set ? group.questions.filter((other) => other.set === q.set) : [];
    return `${passage ? `<div class="passage"><p class="lead">Questions ${members[0].number}–${members[members.length - 1].number} share this case</p>${passage}</div>` : ""}<section class="question">
    <span class="q-num">${q.number}</span>
    <div class="stem">${asHtml(q.stem)}${q.leadIn ? `<p><strong>${q.leadIn}</strong></p>` : ""}</div>
    <ol class="options">${q.shown.map((o, i) => `<li>${bubble(LETTERS[i])}<span>${o.text}</span></li>`).join("")}</ol>
</section>`;
};

const answerHtml = (q) => {
    const notes = q.shown.map((o, i) => ({ letter: LETTERS[i], text: o.text, note: q.notes?.[o.original] })).filter(({ note }) => note);
    return `<section class="answer">
    <span class="q-num">${q.number}</span>
    <p class="answer-head">${bubble(LETTERS[q.correctAt], true)}<span>${q.options[q.answer]}</span></p>
    <div class="explanation">${asHtml(q.explanation)}</div>
    ${q.info ? `<p class="info"><strong>Additional information:</strong> ${q.info}</p>` : ""}
    ${notes.length ? `<p class="why-not">Why not the others</p><ul class="reasons">${notes.map(({ letter, note }) => `<li>${bubble(letter)}<span>${note}</span></li>`).join("")}</ul>` : ""}
</section>`;
};

const updated = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${TITLE} Quiz</title><style>
    @page { size: A4; }
    :root { --accent: ${THEME.accent}; --soft: ${THEME.soft}; --dark: ${THEME.dark}; --muted: #5b6470; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.45 Georgia, "Times New Roman", serif; }
    h1, h2, h3, .kicker, .q-num, .answer-head, .why-not, .lead, table, i, .head-meta { font-family: "Segoe UI", system-ui, sans-serif; }
    .page-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 6mm; margin: 0 0 4mm; padding-bottom: 3mm; border-bottom: 0.8pt solid #1a1f24; }
    .page-head h1 { margin: 0; font: 400 30pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .head-meta { flex: none; white-space: nowrap; margin: 0 0 1mm; color: var(--accent); font-size: 8pt; font-weight: 700; letter-spacing: 0.14em; line-height: 1.5; text-align: right; text-transform: uppercase; }
    .head-meta span { display: block; color: var(--muted); font-weight: 600; }
    .intro { margin: 0 0 5mm; color: #333b44; font-style: italic; }
    .kicker { margin: 0 0 1.5mm; color: var(--accent); font-size: 7.8pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .part-head { margin: 7mm 0 4mm; break-after: avoid; }
    .part-head h2 { margin: 0; font: 400 20pt/1 Georgia, "Times New Roman", serif; }
    .part-head.new-page { break-before: page; margin-top: 0; }
    .part-head.is-first { margin-top: 0; }
    .columns { column-count: 2; column-gap: 11mm; }
    .question, .answer { position: relative; margin: 0 0 6mm; padding: 0 0 0 9mm; break-inside: avoid; }
    .q-num { position: absolute; left: 0; top: 0.3mm; display: flex; align-items: center; justify-content: center; width: 6.6mm; height: 5mm; border-radius: 1.2mm; background: var(--accent); color: #fff; font-size: 8.2pt; font-weight: 700; }
    .stem p { margin: 0 0 2mm; }
    .options, .reasons { margin: 0; padding: 0; list-style: none; }
    .options li, .reasons li, .answer-head { display: flex; align-items: flex-start; gap: 2mm; }
    .options li { margin-bottom: 1.4mm; line-height: 1.35; }
    i { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 4.4mm; height: 4.4mm; margin-top: 0.1mm; border: 0.7pt solid var(--muted); border-radius: 50%; color: var(--muted); font-size: 6.8pt; font-style: normal; font-weight: 700; }
    i.is-on { border-color: var(--accent); background: var(--accent); color: #fff; }
    .passage { margin: 0 0 4mm; padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); break-inside: avoid; }
    .passage p { margin: 0 0 1.6mm; }
    .passage .lead { color: var(--accent); font-size: 7.5pt; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    table { width: 100%; margin: 1.5mm 0; border-collapse: collapse; font-size: 8pt; }
    th { padding: 1.2mm 2mm; color: var(--dark); font-weight: 700; text-align: left; }
    td { padding: 1.2mm 2mm; vertical-align: top; }
    tbody tr:nth-child(odd) td { background: rgba(255, 255, 255, 0.6); }
    .answer-head { margin: 0 0 1.5mm; color: var(--dark); font-weight: 700; line-height: 1.3; }
    .explanation p, .explanation ul { margin: 0 0 1.6mm; }
    .explanation ul { padding-left: 4.5mm; }
    .info { padding: 1.4mm 2.5mm; border-left: 1.6pt solid var(--accent); background: #f4f6f7; font-size: 8.8pt; }
    .why-not { margin: 1.6mm 0 0.8mm; color: var(--accent); font-size: 7pt; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    .reasons { font-size: 8.8pt; }
    .reasons li { margin-bottom: 0.8mm; line-height: 1.35; }
    .reasons i { width: 4mm; height: 4mm; font-size: 6.2pt; }
</style></head><body>
    <header class="page-head">
        <div><p class="kicker">Quiz · ${THEME.name}</p><h1>${TITLE}</h1></div>
        <p class="head-meta">Clinical Conditions<span>Last updated ${updated}</span></p>
    </header>
    <p class="intro">An offline copy of the page's quiz on the website: ${QUESTIONS.length} questions: memory questions on the facts, reasoning questions on how and why, and analysis questions on cases and data. The answers explain why each one is right and why every other option is wrong; read them as part of the page.</p>
    ${groups.map((group, g) => `<div class="part-head${g === 0 ? " is-first" : " new-page"}"><p class="kicker">Questions ${group.questions[0].number}–${group.questions[group.questions.length - 1].number}</p><h2>${group.name}</h2></div>
    ${group.level === "analysis" ? group.questions.map((q) => questionHtml(q, group)).join("\n") : `<div class="columns">${group.questions.map((q) => questionHtml(q, group)).join("\n")}</div>`}`).join("\n")}
    <div class="part-head new-page"><p class="kicker">Questions 1–${number}</p><h2>Answers and explanations</h2></div>
    ${groups.flatMap((group) => group.questions).map(answerHtml).join("\n")}
</body></html>`;

await printPdf(html, OUTPUT, `Clinical Conditions · ${TITLE} quiz`);
console.log(`${groups.map((group) => `${group.name} ${group.questions.length}`).join(", ")}`);
console.log(OUTPUT);
process.exit(0);
