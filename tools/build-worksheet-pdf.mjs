// Builds a page's worksheet: a flowchart of the page, Part 1 reviewing it section by section, Part 2 clinical scenarios, then the answers.
// The page's quiz, with an explanation for every option, lives on the website (and its own PDF), so the worksheet has no standalone questions.
// Run from the project root: node tools/build-worksheet-pdf.mjs gi esophagitis
// Content is in tools/worksheets/<system>/<id>.mjs; the PDF goes to <system>/worksheets/<id>.pdf, which the page links to.
import { mkdirSync } from "node:fs";
import { printPdf } from "./print-pdf.mjs";

const THEMES = {
    gi: { name: "Gastrointestinal", accent: "#0f766e", soft: "#e2f1ee", dark: "#0a3a35" },
    neuro: { name: "Neurology", accent: "#4f46c8", soft: "#e9e8fb", dark: "#1b1a47" },
    renal: { name: "Renal", accent: "#1c6db0", soft: "#e1eff9", dark: "#13283a" },
};
const [SYSTEM, ID] = process.argv.slice(2);
if (!THEMES[SYSTEM] || !ID) throw new Error("Usage: node tools/build-worksheet-pdf.mjs <gi|neuro|renal> <page id>");
const THEME = THEMES[SYSTEM];
const { WORKSHEET } = await import(`./worksheets/${SYSTEM}/${ID}.mjs`);
mkdirSync(`${SYSTEM}/worksheets`, { recursive: true });
const OUTPUT = `${SYSTEM}/worksheets/${ID}.pdf`;
const LETTERS = [..."ABCDEFGHIJ"]; // matching questions can have more than five options

/* ---------- Repeatable shuffling, as in the practice tests and exams ---------- */
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
// Multiple choice options are shuffled, with single-answer questions given an even share of correct letters
function arrange(questions, key) {
    const singles = questions.filter((q) => q.type === "mc" && !q.select);
    const letters = shuffled(singles.map((q, i) => i % 5), `letters-${key}`);
    return questions.map((q) => {
        if (q.type !== "mc") return q;
        const tagged = q.options.map((text, original) => ({ text, original }));
        const correct = [q.answer].flat();
        let shown;
        if (q.select) shown = shuffled(tagged, q.id);
        else {
            shown = shuffled(tagged.filter(({ original }) => original !== q.answer), q.id);
            shown.splice(letters[singles.indexOf(q)], 0, tagged[q.answer]);
        }
        return { ...q, shown, correctShown: shown.map((o, i) => (correct.includes(o.original) ? i : -1)).filter((i) => i >= 0) };
    });
}

/* ---------- Number the questions ---------- */
let number = 0;
const sections = WORKSHEET.review.map((section, s) => ({ ...section, questions: arrange(section.questions, `review-${s}`).map((q) => ({ ...q, number: ++number })) }));
const reviewCount = number;
const scenarioQuestions = arrange(WORKSHEET.practice.scenarios.flatMap((sc) => sc.blocks.flatMap((b) => b.questions)), "scenarios").map((q) => ({ ...q, number: ++number }));
const byId = new Map(scenarioQuestions.map((q) => [q.id, q]));
const scenarios = WORKSHEET.practice.scenarios.map((sc) => ({ ...sc, blocks: sc.blocks.map((b) => ({ ...b, questions: b.questions.map((q) => byId.get(q.id)) })) }));
const range = (list) => (list.length === 1 ? `${list[0].number}` : `${list[0].number}–${list[list.length - 1].number}`);

/* ---------- Questions ---------- */
const bubble = (letter, filled) => `<i${filled ? ' class="is-on"' : ""}>${letter}</i>`;
const lines = (count) => `<div class="write">${"<span></span>".repeat(count)}</div>`;
const blankWidth = (answer) => Math.max(14, Math.min(60, answer.length * 2.1));
const withBlanks = (html, filled) => html.replace(/\[\[([^\]]+)\]\]/g, (m, answer) => (filled ? `<span class="filled">${answer}</span>` : `<span class="blank" style="min-width:${blankWidth(answer)}mm"></span>`));
const typeLabel = (q) => (q.type === "blank" ? "Fill in the blanks" : q.type === "match" ? "Matching" : q.type === "order" ? "Ordering" : q.type === "sa" ? "Short answer" : q.select ? `Select ${q.select}` : q.justify ? "Multiple choice, with justification" : "Multiple choice");

const body = (q) => {
    if (q.type === "blank") return `<div class="blank-text">${withBlanks(q.html, false)}</div>`;
    if (q.type === "match") return `<div class="match"><ol class="match-items">${q.items.map((item) => `<li><b class="match-box"></b><span>${item}</span></li>`).join("")}</ol><ol class="match-options">${q.options.map((option, i) => `<li>${bubble(LETTERS[i])}<span>${option}</span></li>`).join("")}</ol></div>`;
    if (q.type === "order") return `<p class="hint">Write 1–${q.items.length} in the boxes.</p><ol class="order-items">${q.items.map((item) => `<li><b class="order-box"></b><span>${item}</span></li>`).join("")}</ol>`;
    if (q.type === "sa") return lines(q.lines || 2);
    return `<ol class="options">${q.shown.map((o, i) => `<li>${bubble(LETTERS[i])}<span>${o.text}</span></li>`).join("")}</ol>${q.justify ? `<div class="write is-justify"><span></span><span class="limit">Justify in ${q.justify} words or fewer</span></div>` : ""}`;
};
const questionHtml = (q) => `<section class="question">
    <span class="q-num">${q.number}</span>
    ${q.passage ? `<div class="mini-passage">${q.passage}</div>` : ""}
    ${q.stem ? `<p class="stem">${q.stem}${q.select ? ` <span class="select">Select ${q.select}</span>` : ""}</p>` : `<p class="stem type">${typeLabel(q)}</p>`}
    ${body(q)}
</section>`;

/* ---------- Flowchart ---------- */
// One page that maps the whole topic: a top box, a grid of causes down the rows, a band that applies to all, and chains of consequences
const flowchartHtml = (fc, filled) => {
    const cell = (text) => withBlanks(text, filled);
    const grid = `<div class="fc-grid" style="grid-template-columns: 19mm repeat(${fc.columns.length}, minmax(0, 1fr))">${fc.rows.map((label, r) => `<div class="fc-label">${label}</div>${fc.columns.map((col) => `<div class="fc-cell${r === 0 ? " is-head" : ""}">${cell(col[r])}</div>`).join("")}`).join("")}</div>`;
    const chains = (fc.chains || []).map((chain) => `<div class="fc-chain"><div class="fc-chain-label">${chain.label}</div><div class="fc-steps">${chain.steps.map(([title, detail]) => `<div class="fc-step"><strong>${cell(title)}</strong><span>${cell(detail)}</span></div>`).join('<b class="fc-arrow">→</b>')}</div></div>`).join("");
    return `<div class="flowchart${filled ? " is-filled" : ""}">
        <div class="fc-top">${cell(fc.top)}</div>
        <div class="fc-down">↓</div>
        ${grid}
        ${fc.span ? `<div class="fc-down">↓</div><div class="fc-span">${cell(fc.span)}</div>` : ""}
        ${chains ? `<div class="fc-chains">${chains}</div>` : ""}
    </div>`;
};
const flowchartBlanks = (fc) => (JSON.stringify(fc).match(/\[\[/g) || []).length;

/* ---------- Answers ---------- */
const reasons = (q) => q.shown.map((o, i) => ({ letter: LETTERS[i], note: q.notes?.[o.original] })).filter(({ note }) => note).map(({ letter, note }) => `<li>${bubble(letter)}<span>${note}</span></li>`).join("");
const answerHead = (q) => {
    if (q.type === "blank") return `<div class="answer-blanks">${withBlanks(q.html, true)}</div>`;
    if (q.type === "match") return `<p class="answer-head is-text">${q.items.map((item, i) => `${i + 1} → ${LETTERS[q.answer[i]]} (${q.options[q.answer[i]]})`).join("; ")}</p>`;
    if (q.type === "order") return `<ol class="order-answer">${q.order.map((i) => `<li>${q.items[i]}</li>`).join("")}</ol>`;
    if (q.type === "sa") return `<p class="answer-head is-text">${q.answer}</p>`;
    return `<p class="answer-head">${q.correctShown.map((i) => bubble(LETTERS[i], true)).join("")}<span>${q.correctShown.map((i) => q.shown[i].text).join("; ")}</span></p>${q.justify ? `<p class="justify"><strong>Justification:</strong> ${q.justifyAnswer}</p>` : ""}`;
};
const answerHtml = (q) => {
    const why = q.type === "mc" ? reasons(q) : "";
    return `<section class="answer">
    <span class="q-num">${q.number}</span>
    ${answerHead(q)}
    ${q.explanation ? `<p class="explanation">${q.explanation}</p>` : ""}
    ${why ? `<p class="why-not">Why not the others</p><ul class="reasons">${why}</ul>` : ""}
</section>`;
};

const updated = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
const pad = (n) => String(n).padStart(2, "0");

const PAGE = WORKSHEET.covers ? "pages" : "page";
const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${WORKSHEET.title} Worksheet</title><style>
    @page { size: A4; }
    :root { --accent: ${THEME.accent}; --soft: ${THEME.soft}; --dark: ${THEME.dark}; --muted: #5b6470; --line: #dde2e6; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.45 Georgia, "Times New Roman", serif; }
    h1, h2, h3, .kicker, .q-num, .answer-head, .why-not, .select, .hint, .limit, .stem.type, .section-num, table, i, .head-meta { font-family: "Segoe UI", system-ui, sans-serif; }

    .page-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 6mm; margin: 0 0 4mm; padding-bottom: 3mm; border-bottom: 0.8pt solid #1a1f24; }
    .page-head .kicker { margin: 0 0 1.5mm; }
    .page-head .kicker::after { display: none; }
    .page-head h1 { margin: 0; font: 400 30pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .head-meta { flex: none; white-space: nowrap; margin: 0 0 1mm; color: var(--accent); font-size: 8pt; font-weight: 700; letter-spacing: 0.14em; line-height: 1.5; text-align: right; text-transform: uppercase; }
    .head-meta span { display: block; color: var(--muted); font-weight: 600; }
    .covers { margin: 0 0 3mm; padding: 2.5mm 3.5mm; border-left: 2pt solid var(--accent); background: #f4f6f7; }
    .intro { margin: 0 0 5mm; color: #333b44; font-style: italic; }
    .kicker { display: flex; align-items: center; gap: 3mm; margin: 0 0 2mm; color: var(--accent); font-size: 7.8pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .part-head { margin: 9mm 0 5mm; break-after: avoid; }
    .part-head h2 { margin: 0; font: 400 22pt/1 Georgia, "Times New Roman", serif; }
    .part-head p { margin: 1.5mm 0 0; color: #333b44; font-style: italic; }
    .part-head.new-page { break-before: page; margin-top: 0; }
    .part-head.is-first { margin-top: 0; }
    .section-head { display: flex; align-items: center; gap: 2.5mm; margin: 7mm 0 4mm; break-after: avoid; }
    .section-num { display: inline-flex; align-items: center; justify-content: center; width: 7mm; height: 7mm; border-radius: 50%; background: var(--accent); color: #fff; font-size: 7.5pt; font-weight: 700; }
    .section-head h3 { margin: 0; font-size: 13pt; font-weight: 700; color: var(--dark); }
    h3.sub { margin: 4mm 0 2.5mm; font: 400 15pt/1.1 Georgia, "Times New Roman", serif; break-after: avoid; }

    .columns { column-count: 2; column-gap: 11mm; }
    .question, .answer { position: relative; margin: 0 0 7mm; padding: 0 0 0 9mm; break-inside: avoid; }
    .q-num { position: absolute; left: 0; top: 0.3mm; display: flex; align-items: center; justify-content: center; width: 6.6mm; height: 5mm; border-radius: 1.2mm; background: var(--accent); color: #fff; font-size: 8.2pt; font-weight: 700; }
    .stem { margin: 0 0 2.4mm; }
    .stem.type { color: var(--muted); font-size: 7.5pt; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
    .select { display: inline-block; margin-left: 1mm; padding: 0.2mm 1.6mm; border-radius: 3mm; background: var(--accent); color: #fff; font-size: 6.8pt; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; vertical-align: 1px; }
    .options, .reasons, .match-items, .match-options, .order-items { margin: 0; padding: 0; list-style: none; }
    .options li, .reasons li, .answer-head, .match-options li { display: flex; align-items: flex-start; gap: 2mm; }
    .options li, .match-options li { margin-bottom: 1.4mm; line-height: 1.35; }
    i { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 4.4mm; height: 4.4mm; margin-top: 0.1mm; border: 0.7pt solid var(--muted); border-radius: 50%; color: var(--muted); font-size: 6.8pt; font-style: normal; font-weight: 700; }
    i.is-on { border-color: var(--accent); background: var(--accent); color: #fff; }
    .mini-passage { margin: 0 0 2.5mm; padding: 2.5mm 3.5mm; border-radius: 1.5mm; background: #f6f8f8; font-size: 8.8pt; }
    .mini-passage p { margin: 0 0 1.4mm; }
    .mini-passage p:last-child { margin-bottom: 0; }
    table { width: 100%; border-collapse: collapse; font-size: 8pt; }
    th { padding: 1.2mm 2mm; color: var(--dark); font-weight: 700; text-align: left; }
    td { padding: 1.4mm 2mm; vertical-align: top; line-height: 1.9; }
    tbody tr:nth-child(odd) td { background: #f6f8f8; }
    .blank-text { line-height: 2.1; }
    .blank { display: inline-block; height: 1em; border-bottom: 0.6pt solid #8a959d; vertical-align: -2px; }
    .filled { padding: 0 1mm; border-radius: 1mm; background: var(--soft); color: var(--dark); font-weight: 700; }
    .answer-blanks { line-height: 1.7; }
    .answer-blanks td { line-height: 1.5; }
    .match { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
    .match-items li, .order-items li { display: flex; align-items: flex-start; gap: 2.4mm; margin-bottom: 1.4mm; line-height: 1.35; counter-increment: item; }
    .match-items li::before { content: counter(item) "."; flex: none; width: 4mm; color: var(--muted); font: 700 8pt "Segoe UI", system-ui, sans-serif; }
    .match-box, .order-box { flex: none; width: 6.5mm; height: 5.5mm; border: 0.6pt solid #a9b3ba; border-radius: 1.2mm; }
    .hint { margin: 0 0 1.4mm; color: var(--muted); font-size: 7.5pt; font-weight: 600; }
    .write { margin: 0 0 1mm; }
    .write span { display: block; height: 8.5mm; border-bottom: 0.4pt dotted #a9b3ba; }
    .write.is-justify { margin-top: 1.6mm; }
    .write .limit { height: auto; margin-top: 0.8mm; border: 0; color: var(--muted); font-size: 6.8pt; font-weight: 600; text-align: right; }

    .scenario { margin: 4mm 0 0; break-before: page; }
    .scenario.is-first { break-before: auto; }
    .scenario-answers { margin: 0 0 5mm; }
    .scenario-answers > .kicker { margin: 0 0 2mm; }
    .scenario-answers + .scenario-answers { break-before: page; }
    .key-points { margin: 1mm 0 0; padding: 2.6mm 4mm; border-left: 2pt solid var(--accent); background: #f4f6f7; break-inside: avoid; }
    .key-points ul { margin: 0; padding-left: 4.5mm; }
    .key-points li { margin-bottom: 0.8mm; line-height: 1.4; }
    .sub.new-page { break-before: page; }
    .scenario-head .kicker { margin-bottom: 1mm; }
    .scenario-head h3 { margin: 0 0 3mm; font: 400 18pt/1.1 Georgia, "Times New Roman", serif; }
    .passage { margin: 0 0 3.5mm; padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); break-inside: avoid; }
    .passage p { margin: 0 0 1.6mm; }
    .passage p:last-child { margin-bottom: 0; }
    .passage .lead { color: var(--accent); font: 700 7.5pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.12em; text-transform: uppercase; }
    .keep { break-inside: avoid; }

    .answers { break-before: page; }

    /* Flowchart */
    .fc-page { break-after: page; }
    .fc-page h2 { margin: 0 0 1.5mm; font: 400 20pt/1.1 Georgia, "Times New Roman", serif; }
    .fc-page .fc-hint { margin: 0 0 4mm; color: #333b44; font-style: italic; }
    .flowchart { font: 7.6pt/1.35 "Segoe UI", system-ui, sans-serif; color: #1a1f24; }
    .fc-top, .fc-span { padding: 2.4mm 3mm; border-radius: 2mm; background: var(--dark); color: #fff; font-size: 8.6pt; font-weight: 600; text-align: center; }
    .fc-span { background: var(--soft); color: var(--dark); }
    .fc-down { margin: 0.6mm 0; color: var(--accent); font-size: 11pt; font-weight: 700; line-height: 1; text-align: center; }
    .fc-grid { display: grid; gap: 3.2mm 2mm; }
    .fc-label { align-self: center; color: var(--muted); font-size: 6.8pt; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
    .fc-cell { position: relative; padding: 2mm 2.2mm; border-radius: 1.6mm; background: #f6f8f8; }
    .fc-cell.is-head { background: var(--accent); color: #fff; font-size: 8pt; font-weight: 700; text-align: center; }
    /* Each column reads downward: a small arrowhead sits in the gap above every cell below the cause */
    .fc-cell:not(.is-head)::before { content: ""; position: absolute; top: -2.6mm; left: 50%; margin-left: -1.3mm; border-left: 1.3mm solid transparent; border-right: 1.3mm solid transparent; border-top: 1.8mm solid var(--accent); opacity: 0.55; }
    .fc-chains { display: grid; gap: 3mm; margin-top: 4.5mm; }
    .fc-chain-label { margin-bottom: 1.4mm; color: var(--accent); font-size: 7pt; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    .fc-steps { display: flex; align-items: stretch; gap: 1.6mm; }
    .fc-step { flex: 1; padding: 2mm 2.4mm; border-radius: 1.6mm; background: #f6f8f8; }
    .fc-step strong { display: block; color: var(--dark); font-size: 7.8pt; }
    .fc-step span { color: #4a5560; }
    .fc-arrow { align-self: center; color: var(--accent); font-size: 10pt; }
    .flowchart .blank { min-width: 12mm !important; border-bottom-color: #6b757d; }
    .fc-cell.is-head .blank, .fc-top .blank { border-bottom-color: #fff; }
    .flowchart .filled { padding: 0 0.6mm; }
    .fc-top .filled, .fc-cell.is-head .filled { background: rgba(255, 255, 255, 0.25); color: #fff; }
    .fc-answer { margin: 0 0 6mm; break-inside: avoid; }
    .answer-head { color: var(--dark); font-weight: 700; line-height: 1.3; }
    .answer-head.is-text { display: block; }
    .answer p { margin: 0 0 1.2mm; }
    .order-answer { margin: 0 0 1.2mm; padding-left: 5mm; color: var(--dark); font: 700 9pt/1.4 "Segoe UI", system-ui, sans-serif; }
    .justify { padding: 1.2mm 2.5mm 0; }
    .why-not { margin: 1.6mm 0 0.8mm !important; color: var(--accent); font-size: 7pt; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
    .reasons { font-size: 8.8pt; }
    .reasons li { margin-bottom: 0.8mm; line-height: 1.35; }
    .reasons i { width: 4mm; height: 4mm; font-size: 6.2pt; }
</style></head><body>
    <header class="page-head">
        <div><p class="kicker">Worksheet · ${THEME.name}</p><h1>${WORKSHEET.title}</h1></div>
        <p class="head-meta">Clinical Conditions<span>Last updated ${updated}</span></p>
    </header>
    ${WORKSHEET.covers ? `<p class="covers"><strong>A shared worksheet.</strong> This worksheet covers ${["", "one", "two", "three"][WORKSHEET.covers.length]} website pages: ${WORKSHEET.covers.join(" and ")}. Part 1 takes each page in turn, naming the page in each section heading; Part 2 mixes them.</p>` : ""}
    <p class="intro">${WORKSHEET.flowchart ? `The flowchart below maps ${WORKSHEET.covers ? "both pages" : "the whole page"}. ` : ""}Part 1 reviews the ${PAGE} section by section, with a focus on how and why. Part 2 follows patients through clinical scenarios, where each new passage brings results to interpret and decisions to justify. Answers, explanations, and the key points of each scenario are at the end. For quick multiple-choice practice, use the ${PAGE === "pages" ? "pages'" : "page's"} quiz on the website, which explains every option.</p>

    ${WORKSHEET.flowchart ? `<section class="fc-page"><h2>${WORKSHEET.flowchart.title}</h2><p class="fc-hint">Fill in the ${flowchartBlanks(WORKSHEET.flowchart)} blanks to complete the map of ${WORKSHEET.covers ? "both pages" : "the page"}; the completed flowchart is in the answers.</p>${flowchartHtml(WORKSHEET.flowchart, false)}</section>` : ""}
    <div class="part-head${WORKSHEET.flowchart ? " is-first" : ""}"><p class="kicker">Part 1 · Questions 1–${reviewCount}</p><h2>Review</h2></div>
    ${sections.map((section, s) => `<div class="section-head"><span class="section-num">${pad(s + 1)}</span><h3>${section.section}</h3></div>
    ${section.questions.map(questionHtml).join("\n")}`).join("\n")}

    <div class="part-head new-page"><p class="kicker">Part 2 · Questions ${reviewCount + 1}–${number}</p><h2>Clinical scenarios</h2><p>Each patient's story unfolds over several passages. Answer each block before reading on, because later passages can answer earlier questions. Use the results given with what you know.</p></div>
    ${scenarios.map((sc, s) => `<section class="scenario${s === 0 ? " is-first" : ""}">
        <header class="scenario-head"><p class="kicker">Clinical scenario ${s + 1}</p><h3>${sc.title}</h3></header>
        ${sc.blocks.map((block) => `<div class="keep"><div class="passage"><p class="lead">Questions ${range(block.questions)}</p>${block.passage}</div>${questionHtml(block.questions[0])}</div>${block.questions.slice(1).map(questionHtml).join("\n")}`).join("\n")}
    </section>`).join("\n")}

    <section class="answers">
        <div class="part-head"><p class="kicker">Questions 1–${number}</p><h2>Answers</h2></div>
        ${WORKSHEET.flowchart ? `<h3 class="sub">Flowchart</h3><div class="fc-answer">${flowchartHtml(WORKSHEET.flowchart, true)}</div>` : ""}
        <h3 class="sub">Part 1: Review</h3>
        <div class="columns">${sections.flatMap((s) => s.questions).map(answerHtml).join("\n")}</div>
        <h3 class="sub new-page">Part 2: Clinical scenarios</h3>
        ${scenarios.map((sc, s) => `<div class="scenario-answers"><p class="kicker">Clinical scenario ${s + 1} · ${sc.title}</p>
        <div class="columns">${sc.blocks.flatMap((b) => b.questions).map(answerHtml).join("\n")}</div>
        ${sc.keyPoints ? `<aside class="key-points"><p class="why-not">Key points</p><ul>${sc.keyPoints.map((point) => `<li>${point}</li>`).join("")}</ul></aside>` : ""}</div>`).join("\n")}
    </section>
</body></html>`;

await printPdf(html, OUTPUT, `Clinical Conditions · ${WORKSHEET.title} worksheet`);

/* ---------- Checks ---------- */
const all = [...sections.flatMap((s) => s.questions), ...scenarioQuestions];
const kinds = (list) => Object.entries(list.reduce((m, q) => ((m[typeLabel(q)] = (m[typeLabel(q)] || 0) + 1), m), {})).map(([k, n]) => `${k} ${n}`).join(", ");
const words = (text) => text.split(/\s+/).length;
const overJustify = all.filter((q) => q.justify && words(q.justifyAnswer) > q.justify).map((q) => q.id);
const singles = all.filter((q) => q.type === "mc" && !q.select);
const longest = singles.filter((q) => q.shown[q.correctShown[0]].text.length > Math.max(...q.shown.filter((o, i) => i !== q.correctShown[0]).map((o) => o.text.length)));
console.log(`Part 1: ${reviewCount} questions in ${sections.length} sections (${kinds(sections.flatMap((s) => s.questions))})`);
console.log(`Part 2: ${scenarios.length} scenarios with ${scenarioQuestions.length} questions (${kinds(scenarioQuestions)})`);
if (WORKSHEET.practice.standalone?.length) console.log(`Note: ${WORKSHEET.practice.standalone.length} standalone questions are no longer printed; remove them from the content file`);
const missingPoints = scenarios.filter((sc) => !sc.keyPoints?.length).map((sc) => sc.title);
if (missingPoints.length) console.log(`Scenarios without key points: ${missingPoints.join(", ")}`);
console.log(`Correct option longest in ${longest.length} of ${singles.length}${overJustify.length ? `; justification over its limit: ${overJustify.join(", ")}` : ""}`);
console.log(`${OUTPUT}`);
process.exit(0);
