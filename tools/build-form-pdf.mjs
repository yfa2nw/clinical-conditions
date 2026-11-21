// Builds an organ system's practice exam in one of two forms, as a PDF.
// Run from the project root: node tools/build-form-pdf.mjs <gi|neuro> <a|b>
// Form A is the classic paper: 100 multiple choice questions in 120 minutes.
// Form B is the reasoning paper: four timed parts in 180 minutes, with new data, unseen mechanisms, and one extended answer.
// Content is in tools/exam-<system>-form-<a|b>.mjs. The PDF goes to <system>/<system>-exam-form-<a|b>.pdf, linked from the landing page.
// The covers signal the difference: Form A is light and calm, with two bars of the gauge filled; Form B is dark,
// with every bar filled and a warm accent.
import { readFileSync } from "node:fs";
import { printPdf } from "./print-pdf.mjs";

const THEMES = {
    gi: { accent: "#0f766e", soft: "#e2f1ee", dark: "#0a3a35", band: ["#0d433d", "#06231f"], light: "#8fd8cb", deck: "#d3e6e2", base: "#9fbab5", calm: ["#eef7f5", "#d4ece7"] },
    neuro: { accent: "#4f46c8", soft: "#e9e8fb", dark: "#1b1a47", band: ["#24225e", "#0d0c26"], light: "#c3bff7", deck: "#dddcf5", base: "#a6a4cc", calm: ["#f3f2fd", "#dddbf7"] },
};
const [SYSTEM = "gi", FORM_ARG = "a"] = process.argv.slice(2);
const FORM = FORM_ARG.toLowerCase();
if (!THEMES[SYSTEM] || !["a", "b"].includes(FORM)) throw new Error("Usage: node tools/build-form-pdf.mjs <gi|neuro> <a|b>");
const THEME = THEMES[SYSTEM];
const content = await import(`./exam-${SYSTEM}-form-${FORM}.mjs`);
const { EXAM, EXTRA_TERMS = {} } = content;
const OUTPUT = `${SYSTEM}/${SYSTEM}-exam-form-${FORM}.pdf`;
const isA = FORM === "a";
const HOT = "#e8836f";

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
for (const [term, definition] of Object.entries(EXTRA_TERMS)) if (!glossary.has(term)) glossary.set(term, [definition]);
// A definition that only extends another, such as "X, the toxic metabolite of Y" after "X", is dropped
for (const [term, list] of glossary) glossary.set(term, list.filter((d) => !list.some((other) => other !== d && d.toLowerCase().startsWith(other.toLowerCase()))));
// Once questions are written, only the abbreviations they use are listed; until then, every abbreviation on the pages
const questionData = isA ? [content.MEMORY, content.REASONING, content.ANALYSIS] : [content.PART1, content.PART2, content.PART3?.questions, content.PART4?.questions];
const examText = JSON.stringify(questionData).replace(/<[^>]+>/g, " ");
const hasQuestions = questionData.some((list) => list && list.length);
const uses = (term) => new RegExp(`(^|[^A-Za-z0-9-])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^A-Za-z0-9-]|$)`).test(examText);
const terms = [...glossary].filter(([term]) => !hasQuestions || uses(term)).sort(([a], [b]) => a.localeCompare(b, "en", { sensitivity: "base" }));

/* ---------- Cover ---------- */
const updated = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
// The difficulty gauge: two bars filled on Form A, all five on Form B
const gauge = (filled) => `<svg class="gauge" viewBox="0 0 30 14" aria-hidden="true">${[0, 1, 2, 3, 4].map((i) => `<rect x="${i * 6}" y="${12 - (i + 1) * 2.4}" width="4" height="${(i + 1) * 2.4 + 2}" rx="0.8" class="${i < filled ? (i === 4 ? "on peak" : "on") : "off"}"/>`).join("")}</svg>`;
const landing = readFileSync("index.html", "utf8");
const panelStart = landing.indexOf(`<article class="world is-${SYSTEM}">`);
const coverArt = landing.slice(landing.indexOf("<svg", panelStart), landing.indexOf("</svg>", panelStart) + 6)
    .replace(/ role="img" aria-label="[^"]*"/, ' aria-hidden="true"')
    .replace(/<text class="art-label[^"]*"[\s\S]*?<\/text>/g, "")
    .replace(/<path class="(?:gi-bolus|neuro-pulse)[^"]*"[^>]*\/>/g, "");
const totalMinutes = isA ? EXAM.minutes : EXAM.parts.reduce((t, p) => t + p.minutes, 0);
const totalQuestions = isA ? 100 : (content.PART1 || []).reduce((t, p) => t + p.questions.length, 0)
    + (content.PART2 || []).reduce((t, c) => t + c.stages.reduce((u, st) => u + st.questions.length, 0), 0)
    + (content.PART3?.questions?.length || 0) + (content.PART4?.questions?.length || 0);
const totalPoints = isA ? 100 : EXAM.parts.reduce((t, p) => t + p.points, 0);
const coverLine = isA ? `100 questions · ${totalMinutes} minutes · Multiple choice` : `Four parts · ${totalMinutes} minutes · ${totalPoints} points`;

/* ---------- Instructions ---------- */
const formA = `
        <div class="facts">
            <div><strong>${totalMinutes} minutes</strong><span>in one sitting</span></div>
            <div><strong>100 questions</strong><span>all multiple choice</span></div>
            <div><strong>100 points</strong><span>1 point each</span></div>
        </div>
        <table class="structure"><thead><tr><th>Questions</th><th>What they ask</th><th>Count</th><th>Suggested time</th></tr></thead><tbody>
            <tr><td>1–70</td><td><strong>Recall and reasoning,</strong> in no particular order: short "what" and "which" questions, and "how" and "why" questions on mechanisms, presentations, and next steps</td><td>70</td><td>About 70 min</td></tr>
            <tr><td>71–100</td><td><strong>Analysis:</strong> short cases and data to interpret, in the order written; linked questions share one passage</td><td>30</td><td>About 50 min</td></tr>
            <tr class="total"><td></td><td>Total</td><td>100</td><td>${totalMinutes} min</td></tr>
        </tbody></table>
        <p class="kicker">Taking the exam</p>
        <ul>
            <li>Work through all 100 questions in one sitting of ${totalMinutes} minutes. There are no parts or breaks; questions run from 1 to 100 without headings.</li>
            <li>Each question has five options. Unless a question says otherwise, choose the single best option. A question marked <strong>Select 2</strong> needs both correct options for its point; there is no partial credit.</li>
            <li>Mark your answers on the answer sheet at the end. There is no penalty for a wrong answer, so answer every question.</li>
            <li>Questions 71–100 are cases and data. Where a passage is shared, it is printed once, before the first of its questions.</li>
            <li>Use only the abbreviations on the next pages, or those defined in a passage.</li>
            <li>No notes, website, or other references.</li>
        </ul>
        <p class="kicker">About the exam</p>
        <ul>
            <li>Form A covers the same pages as Form B but is a separate exam: it tests breadth and speed, while Form B tests depth and reasoning. The two can be taken in either order.</li>
            <li>Answers follow the course material. Every answer comes with an explanation and a note on each wrong option.</li>
        </ul>
        <p class="good-luck">Keep a steady pace, and leave time for the cases at the end. Good luck.</p>`;

const formB = isA ? "" : `
        <div class="facts">
            <div><strong>${totalMinutes} minutes</strong><span>in four timed parts</span></div>
            <div><strong>${totalQuestions} questions</strong><span>mostly short written answers</span></div>
            <div><strong>${totalPoints} points</strong><span>marked by reasoning step</span></div>
        </div>
        <table class="structure"><thead><tr><th>Part</th><th>Focus</th><th>Questions</th><th>Points</th><th>Time</th></tr></thead><tbody>
            ${EXAM.parts.map((part, i) => `<tr><td>Part ${i + 1}</td><td><strong>${part.name}.</strong> ${part.focus}</td><td>${part.questions}</td><td>${part.points}</td><td>${part.minutes} min</td></tr>`).join("")}
            <tr class="total"><td></td><td>Total</td><td></td><td>${totalPoints}</td><td>${totalMinutes} min</td></tr>
        </tbody></table>
        <p class="formats-note">The question formats, and how each is marked, are on the next page.</p>
        <p class="kicker">Taking the exam</p>
        <ul>
            <li>Take one part at a time and time each part separately. Do not return to a part once its time is up. A short break between parts is allowed.</li>
            <li><strong>Some questions describe a disease or drug you have not studied.</strong> Everything you need is in the passage or its supplementary material; the task is to apply what you know to it.</li>
            <li><strong>In Part 2, each stage of a case starts on a new page.</strong> Answer the questions on a page before turning it, and <strong>do not turn back</strong>: later stages can reveal earlier answers. The opening of each case is repeated at the top of its later pages.</li>
            <li>Answers are marked by step, such as the mechanism, the finding it predicts, and the next step, so show your reasoning even when you are unsure of the final answer. Words beyond a limit are not marked.</li>
            <li>Use only the abbreviations on the next pages, or those defined in a passage. Write any other term in full the first time you use it.</li>
            <li>No notes, website, or other references. A basic calculator is allowed in Parts 1 and 3.</li>
        </ul>
        <p class="kicker">About the exam</p>
        <ul>
            <li>Form B covers the same pages as Form A but is a separate exam: where Form A tests breadth, Form B asks you to infer, connect ideas across topics, and reason past what you have memorized.</li>
            <li>Every piece of data in a passage is there for a reason, and most questions need more than one.</li>
            <li>Answers follow the course material, with the marking points for each question.</li>
        </ul>
        <p class="good-luck">Read each passage once, carefully, and use all of it. Good luck.</p>`;

// Form B's question formats, on their own page, grouped by the part that uses them most
const FORMAT_GROUPS = [
    ["In any part", [
        ["Prediction grid", "Mark each value ↑, ↓, or ↔; each row is marked on its own."],
        ["Ranking", "Order the options, then name the finding that separates the top two."],
        ["Justify", "Choose an answer, then explain it within the word limit."],
        ["Calculation", "Show your working; a correct method earns credit."],
        ["Short answer", "Answer in a sentence or two, within any word limit given."],
        ["Ordering", "Number the steps in the order they happen."],
        ["Multiple choice", "Choose the single best option, or two where a question says Select 2."],
    ]],
    ["Part 1: Mechanisms and data", [
        ["Account for every result", "Attribute each abnormal result to the diagnosis, a second process, or something expected; there may be no second process."],
        ["Sketch the trend", "Draw the expected curve; marked on direction, shape, and timing."],
        ["Two patients", "Explain why the same test or treatment differs between two cases."],
        ["Unseen mechanism", "From a failed gene, transporter, or enzyme, or a new drug's target, predict the findings, uses, or adverse effects."],
        ["Pathway completion", "Fill the missing step, then predict the effect of blocking another."],
    ]],
    ["Part 2: Unfolding cases", [
        ["Before and after", "Give the leading diagnoses before and after a result, and what would reverse them."],
        ["Defend or refute", "Give points for and against a conclusion, and the test that settles it."],
        ["Prioritize", "Say which of two active problems comes first, and why."],
        ["Discharge criteria", "Say what must be true before the patient goes home."],
    ]],
    ["Part 3: Reading the research", [
        ["Supported or not", "Mark each statement supported, overstated, or unsupported, with the evidence."],
        ["Apply to the case", "Say whether the result applies to a Part 2 patient, with a reason for and against."],
    ]],
    ["Part 4: Synthesis", [
        ["Teach it", "Explain a mechanism as a chain of causes, within the word limit."],
        ["Concept map", "Link the terms with labeled arrows; each correct link earns credit."],
    ]],
];
const formatsPage = isA ? "" : `
    <section class="formats-page">
        <header class="page-head"><h1>Question formats</h1><p>${EXAM.title}<span>How each is answered and marked</span></p></header>
        <p class="intro">Each question names its format. Answers are marked by step, so sound reasoning earns credit even when the final answer is wrong.</p>
        ${FORMAT_GROUPS.map(([group, rows]) => `<p class="kicker">${group}</p><table class="formats"><tbody>${rows.map(([name, how]) => `<tr><th>${name}</th><td>${how}</td></tr>`).join("")}</tbody></table>`).join("\n        ")}
    </section>`;


/* ---------- Form B, Part 1: problems and their answers ---------- */
const ARROWS = { up: "↑", down: "↓", flat: "↔" };
const pts = (n) => `${n} ${n === 1 ? "point" : "points"}`;
let questionNumber = 0;
// Multiple choice options are shuffled by a seed from the question id, so every build gives the same order
function seeded(text) {
    let seed = 2166136261;
    for (const ch of text) seed = Math.imul(seed ^ ch.codePointAt(0), 16777619);
    return () => {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
const shuffle = (q) => {
    const rand = seeded(q.id), list = q.options.map((text, original) => ({ text, original }));
    for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [list[i], list[j]] = [list[j], list[i]]; }
    return list;
};
const LETTERS = [..."ABCDE"];
const problems = isA ? [] : (content.PART1 || []).map((problem) => ({ ...problem, questions: problem.questions.map((q) => ({ ...q, number: ++questionNumber, shown: q.type === "mc" ? shuffle(q) : null })) }));
const correctOf = (q) => [q.answer].flat();
const cases = isA ? [] : (content.PART2 || []).map((c) => ({ ...c, stages: c.stages.map((st) => ({ ...st, questions: st.questions.map((q) => ({ ...q, number: ++questionNumber, shown: q.type === "mc" ? shuffle(q) : null })) })) }));
const caseQuestions = (c) => c.stages.flatMap((st) => st.questions);
const paper = isA || !content.PART3?.questions?.length ? null : { ...content.PART3, questions: content.PART3.questions.map((q) => ({ ...q, number: ++questionNumber, shown: q.type === "mc" ? shuffle(q) : null })) };
const part3Points = paper ? paper.questions.reduce((t, q) => t + q.points, 0) : 0;
const synthesis = isA || !content.PART4?.questions?.length ? null : { ...content.PART4, questions: content.PART4.questions.map((q) => ({ ...q, number: ++questionNumber, shown: null })) };
const part4Points = synthesis ? synthesis.questions.reduce((t, q) => t + q.points, 0) : 0;
const part2Points = cases.reduce((t, c) => t + caseQuestions(c).reduce((s2, q) => s2 + q.points, 0), 0);
const wordCount = (text) => text.split(/\s+/).length;
const overLimit = [...problems.flatMap((p) => p.questions), ...cases.flatMap(caseQuestions), ...(paper ? paper.questions : []), ...(synthesis ? synthesis.questions : [])].filter((q) => (q.words && wordCount(q.answer) > q.words) || (q.justify && wordCount(q.justifyAnswer) > q.justify)).map((q) => q.id);
const part1Points = problems.reduce((t, p) => t + p.questions.reduce((s, q) => s + q.points, 0), 0);
const lines = (n) => `<div class="lines">${"<span></span>".repeat(n)}</div>`;
const scale = (axes) => {
    const W = 150, H = 70, L = 16, B = 12, T = 4, R = 6;
    const xs = axes.xTicks, ys = axes.yTicks;
    const x = (v) => L + ((v - xs[0]) / (xs[xs.length - 1] - xs[0])) * (W - L - R);
    const y = (v) => H - B - ((v - ys[0]) / (ys[ys.length - 1] - ys[0])) * (H - B - T);
    return { W, H, L, B, T, R, x, y };
};
// Axes for a sketch, with the starting dot; the answer adds the expected curves
function axesSvg(axes, curves = []) {
    const s = scale(axes);
    const grid = axes.yTicks.map((v) => `<line x1="${s.L}" x2="${s.W - s.R}" y1="${s.y(v)}" y2="${s.y(v)}" class="grid"/><text x="${s.L - 2}" y="${s.y(v) + 1.2}" class="tick" text-anchor="end">${v}</text>`).join("")
        + axes.xTicks.map((v) => `<line x1="${s.x(v)}" x2="${s.x(v)}" y1="${s.T}" y2="${s.H - s.B}" class="grid"/><text x="${s.x(v)}" y="${s.H - s.B + 4.5}" class="tick" text-anchor="middle">${v}</text>`).join("");
    const frame = `<path d="M${s.L} ${s.T}V${s.H - s.B}H${s.W - s.R}" class="axis"/>`;
    const midY = (s.T + s.H - s.B) / 2;
    const labels = `<text x="${(s.L + s.W - s.R) / 2}" y="${s.H - 1}" class="label" text-anchor="middle">${axes.x}</text><text x="3.5" y="${midY}" class="label" text-anchor="middle" transform="rotate(-90 3.5 ${midY})">${axes.y}</text>`;
    const start = axes.start ? `<circle cx="${s.x(axes.start[0])}" cy="${s.y(axes.start[1])}" r="1.2" class="start"/>` : "";
    const drawn = curves.map((c, i) => {
        const d = c.points.map(([px, py], j) => `${j ? "L" : "M"}${s.x(px).toFixed(1)} ${s.y(py).toFixed(1)}`).join("");
        const [lx, ly] = c.points[c.points.length - 1];
        return `<path d="${d}" class="curve c${i}"/><text x="${s.x(lx) + 1.5}" y="${s.y(ly) + 1}" class="curve-label c${i}">${c.label}</text>`;
    }).join("");
    return `<svg class="sketch" viewBox="0 0 ${s.W} ${s.H}" aria-hidden="true">${grid}${frame}${labels}${start}${drawn}</svg>`;
}
const gridTable = (q, filled) => {
    const cols = q.columns || [""];
    const cell = (answer) => `<td class="choices">${["up", "down", "flat"].map((v) => `<span class="choice${filled && answer === v ? " is-on" : ""}">${ARROWS[v]}</span>`).join("")}</td>`;
    return `<table class="grid-table"><thead><tr><th></th>${cols.map((c) => `<th>${c || "Change"}</th>`).join("")}</tr></thead><tbody>${q.rows.map((row, r) => `<tr><th>${row}</th>${cols.map((c, ci) => cell(filled ? [q.answer[r]].flat()[ci] : null)).join("")}</tr>`).join("")}</tbody></table>`;
};
const JUDGMENTS = ["supported", "overstated", "unsupported"];
const supportTable = (q, filled) => `<table class="support"><thead><tr><th>Statement</th><th>Supported</th><th>Overstated</th><th>Unsupported</th></tr></thead><tbody>${q.rows.map((r, i) => `<tr><th>${r}</th>${JUDGMENTS.map((j) => `<td><span class="choice${filled && q.answer[i][0] === j ? " is-on" : ""}"></span></td>`).join("")}</tr><tr class="evidence"><td colspan="4">${filled ? `<em>Evidence:</em> ${q.answer[i][1]}` : `<span class="evidence-label">Evidence</span>${lines(1)}`}</td></tr>`).join("")}</tbody></table>`;
function body(q) {
    if (q.type === "support") return supportTable(q, false);
    if (q.type === "map") return `<div class="map-terms">${q.terms.map((t) => `<span>${t}</span>`).join("")}</div><div class="map-canvas"><span>Draw your map here. Copy each term once, and label every arrow.</span></div>`;
    if (q.type === "grid") return gridTable(q, false);
    if (q.type === "account") return `<table class="account"><thead><tr><th>Result</th><th>Attribution and reason</th></tr></thead><tbody>${q.rows.map((r) => `<tr><th>${r}</th><td>${lines(2)}</td></tr>`).join("")}</tbody></table>`;
    if (q.type === "sketch") return axesSvg(q.axes);
    if (q.type === "pathway") return `<ol class="pathway">${q.steps.map((st) => `<li class="${st ? "" : "is-blank"}">${st || lines(3)}</li>`).join("")}</ol>`;
    if (q.type === "order") return `<p class="hint">Write 1–${q.items.length} in the boxes.</p><ol class="order">${q.items.map((it) => `<li><b></b><span>${it}</span></li>`).join("")}</ol>`;
    if (q.type === "mc") return `${q.select ? `<p class="hint">Select ${q.select}</p>` : ""}<ol class="options">${q.shown.map((o, i) => `<li><i>${LETTERS[i]}</i><span>${o.text}</span></li>`).join("")}</ol>${q.justify ? `<p class="hint">Justify your choice</p>${lines(1)}<p class="limit">${q.justify} words or fewer</p>` : ""}`;
    return (q.work ? `<div class="work"><span>Show your working</span></div>` : "") + lines(q.lines || (q.words > 30 ? 3 : q.words > 15 ? 2 : 1)) + (q.words ? `<p class="limit">${q.words} words or fewer</p>` : "");
}
const qHead = (q) => `<header><span class="q-num">${q.number}</span><span class="q-format">${q.format}</span><span class="q-pts">${pts(q.points)}</span></header>`;
const questionHtml = (q) => `<section class="question">${qHead(q)}<p class="stem">${q.stem}</p>${body(q)}</section>`;
const part1Html = isA || !problems.length ? "" : `
    <section class="part">
        <header class="page-head"><h1>Part 1</h1><p>Mechanisms and data<span>${EXAM.parts[0].minutes} minutes · ${part1Points} points</span></p></header>
        <p class="part-intro">${["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"][problems.length] || problems.length} short problems on how the body works, each labeled with its discipline. Read each problem's information before its questions; supplementary information describes anything new. Each question names its format, explained on the Question formats page.</p>
        ${problems.map((p, i) => `<article class="problem"><p class="kicker">Problem ${i + 1} · ${p.title}${p.discipline ? `<span class="discipline">${p.discipline}</span>` : ""}</p><div class="passage">${p.passage}</div>${p.questions.map(questionHtml).join("")}</article>`).join("")}
        <p class="finished">You have finished Part 1. Stop the timer; take a short break if you need one before starting Part 2.</p>
    </section>`;
function answerBody(q) {
    if (q.type === "map") return `<p>${q.answer}</p><table class="map-links"><thead><tr><th>From</th><th>To</th><th>Label</th></tr></thead><tbody>${q.links.map(([a, b, l]) => `<tr><td>${a}</td><td>${b}</td><td>${l}</td></tr>`).join("")}</tbody></table>`;
    if (q.type === "support") return supportTable(q, true);
    if (q.type === "grid") return gridTable(q, true);
    if (q.type === "account") return `<table class="account is-answer"><tbody>${q.rows.map((r, i) => `<tr><th>${r}</th><td>${q.answer[i]}</td></tr>`).join("")}</tbody></table>`;
    if (q.type === "sketch") return `${axesSvg(q.axes, q.curves)}<p>${q.answer}</p>`;
    if (q.type === "order") return `<p>${q.order.map((i) => q.items[i]).join(" → ")}</p>`;
    if (q.type === "mc") {
        const right = q.shown.map((o, i) => ({ ...o, letter: LETTERS[i] })).filter((o) => correctOf(q).includes(o.original));
        const wrong = q.shown.map((o, i) => ({ ...o, letter: LETTERS[i] })).filter((o) => !correctOf(q).includes(o.original));
        return `<p><strong>${right.map((o) => `${o.letter}. ${o.text}`).join("; ")}</strong></p>${q.justify ? `<p><em>Justification:</em> ${q.justifyAnswer}</p>` : ""}<ul class="notes">${wrong.map((o) => `<li><strong>${o.letter}.</strong> ${q.notes[o.original]}</li>`).join("")}</ul>`;
    }
    return `<p>${q.answer}</p>`;
}
const answerHtml = (q) => `<section class="answer">${qHead(q)}${answerBody(q)}<p class="marking-label">Marking</p><ul class="marking">${q.marking.map((m) => `<li>${m}</li>`).join("")}</ul><div class="why">${q.explanation}</div></section>`;

/* ---------- Form B, Part 2: unfolding cases, a page per stage ---------- */
const part2Html = isA || !cases.length ? "" : `
    <section class="part">
        <header class="page-head"><h1>Part 2</h1><p>Unfolding cases<span>${EXAM.parts[1].minutes} minutes · ${part2Points} points</span></p></header>
        <p class="part-intro">Three patients, each followed over several stages. Each stage after the first starts on a new page: answer the questions on a page before turning it, and do not turn back. The opening of each case is repeated at the top of its later pages.</p>
        ${cases.map((c, ci) => `<article class="case${ci ? " is-new" : ""}">
            <p class="kicker">Case ${ci + 1}</p>
            <div class="passage">${c.opening}${c.stages[0].passage}</div>
            ${c.stages[0].questions.map(questionHtml).join("")}
            ${c.stages.slice(1).map((st, si) => `<div class="stage">
                <p class="turn">Do not turn back · Case ${ci + 1}, stage ${si + 2} of ${c.stages.length}</p>
                <p class="recap">${c.recap}</p>
                <div class="passage">${st.passage}</div>
                ${st.questions.map(questionHtml).join("")}
            </div>`).join("")}
        </article>`).join("")}
        <p class="finished">You have finished Part 2. Stop the timer; take a short break if you need one before starting Part 3.</p>
    </section>`;

const part3Html = !paper ? "" : `
    <section class="part">
        <header class="page-head"><h1>Part 3</h1><p>Reading the research<span>${EXAM.parts[2].minutes} minutes · ${part3Points} points</span></p></header>
        <p class="part-intro">Read the study summary once, carefully, then answer the questions. Excerpts in quotation marks are the authors' words; tables are abridged. A basic calculator is allowed.</p>
        <article class="paper"><p class="kicker">${paper.title}</p><div class="passage paper-text">${paper.passage}</div></article>
        <div class="paper-questions">${paper.questions.map(questionHtml).join("")}</div>
        <p class="finished">You have finished Part 3. Stop the timer; take a short break if you need one before starting Part 4.</p>
    </section>`;

const part4Html = !synthesis ? "" : `
    <section class="part">
        <header class="page-head"><h1>Part 4</h1><p>Synthesis<span>${EXAM.parts[3].minutes} minutes · ${part4Points} points</span></p></header>
        <p class="part-intro">${synthesis.questions.some((q) => q.type === "map") ? "One concept map, marked against a rubric. Plan the main chain first, then add the other terms; credit goes to each correct, labeled link." : "One extended answer, marked against a rubric. Plan briefly, then write in connected sentences; credit goes to each link in the chain you explain."}</p>
        <article class="problem"><p class="kicker">${synthesis.title}</p><div class="passage">${synthesis.passage}</div>${synthesis.questions.map(questionHtml).join("")}</article>
        <p class="finished">You have finished the exam. The answers and explanations follow.</p>
    </section>`;

const referencesHtml = !paper || !paper.references?.length ? "" : `
    <section class="references-page">
        <header class="page-head"><h1>References</h1><p>Part 3<span>Sources read and used</span></p></header>
        <ol class="references">${paper.references.map((r) => `<li>${r}</li>`).join("")}</ol>
    </section>`;

const answersHtml = isA || !problems.length ? "" : `
    <section class="answers">
        <header class="page-head"><h1>Answers</h1><p>${synthesis ? "Parts 1 to 4" : paper ? "Parts 1 to 3" : cases.length ? "Parts 1 and 2" : "Part 1"}<span>${part1Points + part2Points + part3Points + part4Points} points</span></p></header>
        <h2 class="answer-part">Part 1 · Mechanisms and data</h2>
        ${problems.map((p, i) => `<p class="kicker">Problem ${i + 1} · ${p.title}</p>${p.questions.map(answerHtml).join("")}`).join("")}
        ${cases.length ? `<h2 class="answer-part is-new">Part 2 · Unfolding cases</h2>${cases.map((c, ci) => `<p class="kicker">Case ${ci + 1}</p><p class="recap">${c.recap}</p>${caseQuestions(c).map(answerHtml).join("")}<div class="key-points"><p class="marking-label">Key points</p><ul>${c.keyPoints.map((k) => `<li>${k}</li>`).join("")}</ul></div>`).join("")}` : ""}
        ${paper ? `<h2 class="answer-part is-new">Part 3 · Reading the research</h2>${paper.questions.map(answerHtml).join("")}` : ""}
        ${synthesis ? `<h2 class="answer-part is-new">Part 4 · Synthesis</h2>${synthesis.questions.map((q) => answerHtml(q).replace('<p class="marking-label">Marking</p>', '<p class="marking-label">Rubric</p>')).join("")}` : ""}
    </section>`;

/* ---------- Page ---------- */
const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${EXAM.title}</title><style>
    @page { size: A4; }
    @page :first { margin: 0; }
    :root { --accent: ${THEME.accent}; --soft: ${THEME.soft}; --dark: ${THEME.dark}; --muted: #5b6470; --line: #dde2e6; --hot: ${HOT}; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.45 Georgia, "Times New Roman", serif; }
    h1, h2, .kicker, .facts, .cover, .structure, .formats, .terms strong, .badge { font-family: "Segoe UI", system-ui, sans-serif; }

    /* Cover */
    .cover { position: relative; width: 210mm; height: 297mm; overflow: hidden; break-after: page; background: #fff; }
    .masthead { position: absolute; top: 15mm; left: 16mm; right: 16mm; display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 3.5mm; border-bottom: 0.8pt solid #1a1f24; }
    .masthead h1 { margin: 0; font: 400 40pt/0.9 Georgia, "Times New Roman", serif; letter-spacing: -0.025em; }
    .masthead h1 em { color: var(--accent); font-style: italic; }
    .issue { margin: 0 0 1mm; color: var(--accent); font-size: 8pt; font-weight: 700; letter-spacing: 0.14em; line-height: 1.5; text-align: right; text-transform: uppercase; }
    .issue span { display: block; color: var(--muted); font-weight: 600; }
    .badge { position: absolute; top: 36mm; right: 16mm; display: flex; align-items: center; gap: 4mm; }
    .badge-letter { display: flex; align-items: center; justify-content: center; width: 24mm; height: 24mm; border-radius: 50%; font: 700 34pt/1 Georgia, "Times New Roman", serif; }
    .badge-text { color: var(--muted); font-size: 8pt; font-weight: 700; letter-spacing: 0.14em; line-height: 1.6; text-transform: uppercase; }
    .badge-text strong { display: block; font-size: 11pt; letter-spacing: 0.08em; }
    .cover-art { position: absolute; left: 16mm; right: 16mm; }
    .cover-art svg { display: block; width: 100%; height: auto; max-height: 120mm; overflow: visible; }
    .cover-art .gi-mouth, .cover-art .gi-tube { fill: none; stroke: var(--art); stroke-linecap: round; stroke-width: 9; }
    .cover-art .gi-mouth { stroke-width: 4; }
    .cover-art .gi-tube.is-stomach { stroke-width: 20; }
    .cover-art .gi-tube.is-colon { stroke-dasharray: 18 4; stroke-linecap: butt; stroke-width: 17; }
    .cover-art .neuro-dendrite, .cover-art .neuro-axon { fill: none; stroke: var(--art); stroke-linecap: round; stroke-width: 2; }
    .cover-art .neuro-bouton, .cover-art .neuro-soma { fill: #fff; stroke: var(--art); stroke-width: 2.5; }
    .cover-art .neuro-myelin-seg, .cover-art .neuro-hillock { fill: #fff; stroke: var(--art); stroke-width: 2; }
    .cover-art .neuro-ranvier, .cover-art .neuro-vesicle { fill: var(--art); }
    .cover-art .neuro-axis, .cover-art .neuro-threshold { fill: none; stroke: var(--art); stroke-width: 1.5; opacity: 0.4; }
    .cover-art .neuro-threshold { stroke-dasharray: 6 6; }
    .cover-art .neuro-trace { fill: none; stroke: var(--art); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3; }
    .cover-art .neuro-post { fill: none; stroke: var(--art); stroke-linecap: round; stroke-width: 2.5; }
    .cover-art .neuro-transmitter { display: none; }
    .cover-band { position: absolute; left: 0; right: 0; bottom: 0; }
    .headline { position: absolute; left: 16mm; right: 16mm; bottom: 34mm; }
    .headline .kicker { margin-bottom: 3mm; }
    .gauge { width: 11mm; height: 5mm; flex: none; }
    .headline h2 { margin: 0 0 3mm; font: 700 46pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .headline .deck { width: 145mm; margin: 0; font: italic 12.5pt/1.4 Georgia, "Times New Roman", serif; }
    .cover-base { position: absolute; left: 16mm; right: 16mm; bottom: 16mm; padding-top: 2.5mm; font-size: 7.5pt; letter-spacing: 0.04em; }

    /* Form A: light and open, a soft band, two bars of the gauge */
    .is-a { --art: var(--accent); }
    .is-a .badge-letter { border: 1.4pt solid var(--accent); color: var(--accent); background: #fff; }
    .is-a .badge-text strong { color: var(--accent); }
    .is-a .cover-art { top: 84mm; opacity: 0.9; }
    .is-a .cover-band { height: 82mm; background: linear-gradient(180deg, ${THEME.calm[0]}, ${THEME.calm[1]}); }
    .is-a .headline { color: var(--dark); }
    .is-a .headline .kicker { color: var(--accent); }
    .is-a .headline .kicker::after { border-color: var(--accent); opacity: 0.4; }
    .is-a .headline .deck { color: var(--dark); opacity: 0.8; }
    .is-a .gauge .on { fill: var(--accent); }
    .is-a .gauge .off { fill: none; stroke: var(--accent); stroke-width: 0.6; opacity: 0.45; }
    .is-a .cover-base { border-top: 0.4pt solid rgba(0, 0, 0, 0.15); color: var(--muted); }

    /* Form B: dark and dense, a hatched band, every bar of the gauge, and a warm accent */
    .is-b { --art: var(--dark); }
    .is-b .badge-letter { background: var(--hot); color: #fff; box-shadow: 0 0 0 2.2mm #fbe3dd; }
    .is-b .badge-text strong { color: #b4513d; }
    .is-b .cover-art { top: 70mm; }
    .is-b .cover-art .gi-tube.is-stomach { stroke-width: 22; }
    .is-b .cover-band { height: 112mm; background: repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.035) 0 1.2mm, transparent 1.2mm 3.6mm), linear-gradient(180deg, ${THEME.band[0]}, ${THEME.band[1]}); border-top: 1.6mm solid var(--hot); }
    .is-b .headline { color: #fff; }
    .is-b .headline .kicker { color: ${THEME.light}; }
    .is-b .headline .kicker::after { border-color: ${THEME.light}; opacity: 0.5; }
    .is-b .headline .deck { color: ${THEME.deck}; }
    .is-b .gauge .on { fill: ${THEME.light}; }
    .is-b .gauge .peak { fill: var(--hot); }
    .is-b .cover-base { border-top: 0.4pt solid rgba(255, 255, 255, 0.25); color: ${THEME.base}; }

    /* Headings */
    .kicker { display: flex; align-items: center; gap: 3mm; margin: 0 0 2mm; color: var(--accent); font-size: 7.8pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .kicker::after { content: ""; flex: 1; border-top: 0.6pt solid var(--accent); }
    .page-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 6mm; margin: 0 0 5mm; padding-bottom: 3mm; border-bottom: 0.8pt solid #1a1f24; }
    .page-head h1 { margin: 0; font: 400 30pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
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
    .structure, .formats { width: 100%; border-collapse: collapse; font-size: 9pt; }
    .structure th { padding: 1.6mm 2mm; border-bottom: 0.8pt solid #1a1f24; color: var(--muted); font-size: 7.5pt; letter-spacing: 0.08em; text-align: left; text-transform: uppercase; }
    .structure td { padding: 2mm; border-bottom: 0.4pt solid var(--line); vertical-align: top; }
    .structure td:first-child { color: var(--accent); font-weight: 700; white-space: nowrap; }
    .structure td:nth-child(n+3) { white-space: nowrap; }
    .structure tr.total td { border-bottom: 0; font-weight: 700; }
    .formats th { width: 34mm; padding: 1.5mm 2mm; color: var(--dark); font-size: 8.5pt; text-align: left; vertical-align: top; }
    .formats td { padding: 1.5mm 2mm; color: #333b44; }
    .formats tr:nth-child(odd) { background: #f4f6f7; }
    .formats-note { margin: 3mm 0 0; color: var(--muted); font-style: italic; }
    .formats-page { break-before: page; font-size: 10pt; }
    .formats-page .intro { margin: 0 0 3mm; color: var(--muted); }
    .formats-page .kicker { margin-top: 3.5mm; }
    .formats-page .formats th, .formats-page .formats td { padding: 1.1mm 2mm; }
    .formats-page .formats th { width: 40mm; }
    .good-luck { margin: 6mm 0 0; color: var(--dark); font: italic 11pt/1.4 Georgia, serif; }
    .abbreviations { break-before: page; }
    .abbreviations .intro { margin: 0 0 3mm; color: var(--muted); }
    .terms { column-count: 3; column-gap: 6mm; }
    .terms p { margin: 0 0 1mm; font-size: 8pt; line-height: 1.3; break-inside: avoid; }

    /* Part 1 and answers */
    .part, .answers { break-before: page; }
    .part-intro { margin: 0 0 4mm; color: #333b44; font-style: italic; }
    .problem { margin: 0 0 6mm; }
    .problem > .kicker { margin-top: 2mm; break-after: avoid; }
    .passage { margin: 0 0 3.5mm; padding: 3mm 4mm; border-radius: 2mm; background: var(--soft); break-inside: avoid; }
    .passage p { margin: 0 0 2mm; }
    .passage p:last-child { margin-bottom: 0; }
    .passage ul { margin: 0 0 2mm; padding-left: 4.5mm; }
    .passage table, .account, .grid-table { border-collapse: collapse; font: 8.5pt/1.35 "Segoe UI", system-ui, sans-serif; }
    .passage table { margin: 1mm 0 2mm; background: #fff; }
    .passage th, .passage td { padding: 0.9mm 3mm; border-bottom: 0.4pt solid var(--line); text-align: left; }
    .passage thead th { color: var(--muted); font-size: 7.5pt; letter-spacing: 0.06em; text-transform: uppercase; }
    .illustrative { color: var(--muted); font-size: 8pt; font-style: italic; }
    .supplement { margin: 1mm 0 0; padding: 2.4mm 3.5mm; border-left: 1.2mm solid var(--hot); background: #fff; }
    .supplement .supplement-label { margin: 0 0 1mm; color: #b4513d; font: 700 7.5pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; }
    .question, .answer { margin: 0 0 5mm; break-inside: avoid; }
    .question header, .answer header { display: flex; align-items: baseline; gap: 2.5mm; margin: 0 0 1mm; font-family: "Segoe UI", system-ui, sans-serif; }
    .q-num { display: inline-flex; align-items: center; justify-content: center; min-width: 6mm; height: 6mm; border-radius: 1.2mm; background: var(--dark); color: #fff; font-size: 8.5pt; font-weight: 700; }
    .q-format { color: var(--accent); font-size: 7.5pt; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
    .q-pts { margin-left: auto; color: var(--muted); font-size: 8pt; font-weight: 600; }
    .stem { margin: 0 0 2mm; }
    .lines span { display: block; height: 7.5mm; border-bottom: 0.5pt dotted #9aa5ad; }
    .limit, .hint { margin: 1mm 0 0; color: var(--muted); font: 600 7.5pt "Segoe UI", system-ui, sans-serif; }
    .work { height: 26mm; margin: 0 0 1mm; padding: 1.5mm 2.5mm; border: 0.5pt dashed #b9c2c8; border-radius: 1.5mm; }
    .work span { color: var(--muted); font: 600 7.5pt "Segoe UI", system-ui, sans-serif; }
    .grid-table th, .grid-table td { padding: 1.2mm 3mm; border-bottom: 0.4pt solid var(--line); text-align: left; }
    .grid-table thead th { color: var(--muted); font-size: 7.5pt; letter-spacing: 0.06em; text-transform: uppercase; }
    .grid-table tbody th { font-weight: 500; }
    .choices { white-space: nowrap; }
    .choice { display: inline-flex; align-items: center; justify-content: center; width: 6mm; height: 6mm; margin-right: 1.5mm; border: 0.6pt solid #a9b3ba; border-radius: 50%; color: var(--muted); font-size: 9pt; }
    .choice.is-on { border-color: var(--accent); background: var(--accent); color: #fff; }
    .account { width: 100%; }
    .account th, .account td { padding: 1mm 2.5mm; border-bottom: 0.4pt solid var(--line); text-align: left; vertical-align: top; }
    .account thead th { color: var(--muted); font-size: 7.5pt; letter-spacing: 0.06em; text-transform: uppercase; }
    .account tbody th { width: 48mm; font-weight: 500; }
    .account .lines span { height: 6.5mm; }
    .sketch { display: block; width: 150mm; height: auto; margin: 1mm 0; font-family: "Segoe UI", system-ui, sans-serif; }
    .sketch .grid { stroke: #e3e8eb; stroke-width: 0.25; }
    .sketch .axis { fill: none; stroke: #1a1f24; stroke-width: 0.5; }
    .sketch .tick { fill: var(--muted); font-size: 2.6px; }
    .sketch .label { fill: #333b44; font-size: 2.8px; font-weight: 600; }
    .sketch .start { fill: var(--dark); }
    .sketch .curve { fill: none; stroke-width: 0.8; stroke-linejoin: round; stroke-linecap: round; }
    .sketch .curve.c0 { stroke: var(--accent); }
    .sketch .curve.c1 { stroke: var(--hot); }
    .sketch .curve-label { font-size: 3px; font-weight: 700; }
    .sketch .curve-label.c0 { fill: var(--accent); }
    .sketch .curve-label.c1 { fill: #b4513d; }
    .pathway { display: flex; flex-direction: column; gap: 4mm; margin: 0; padding: 0; list-style: none; }
    .pathway li { position: relative; width: 120mm; padding: 2mm 3.5mm; border: 0.6pt solid var(--accent); border-radius: 2mm; font: 9pt/1.35 "Segoe UI", system-ui, sans-serif; }
    .pathway li + li::before { content: "↓"; position: absolute; top: -4.4mm; left: 50%; color: var(--accent); font-size: 9pt; line-height: 1; }
    .pathway li.is-blank { border-style: dashed; border-color: #a9b3ba; padding-top: 0; }
    .order { margin: 1mm 0 0; padding: 0; list-style: none; }
    .order li { display: flex; align-items: center; gap: 3mm; margin-bottom: 1.6mm; }
    .order b { flex: none; width: 6.5mm; height: 5.5mm; border: 0.6pt solid #a9b3ba; border-radius: 1.2mm; }
    .finished { margin: 6mm 0 0; padding-top: 3mm; border-top: 0.6pt solid var(--line); color: var(--dark); font-style: italic; }
    .answer p { margin: 0 0 1.5mm; }
    .account.is-answer tbody th { width: 52mm; }
    .marking-label { margin: 2mm 0 0.5mm; color: var(--accent); font: 700 7.5pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; }
    .answer .marking-label { margin: 2mm 0 0.5mm; }
    .marking { margin: 0 0 1.5mm; padding-left: 4.5mm; font-size: 9pt; }
    .why { color: #333b44; font-size: 9pt; }
    .why p { margin: 0 0 1mm; }
    .discipline { order: 3; padding: 0.4mm 2mm; border-radius: 3mm; background: var(--soft); color: var(--dark); font-size: 7pt; letter-spacing: 0.08em; }
    .paper-text { font-size: 9.2pt; break-inside: auto; }
    .paper-text h3 { margin: 3mm 0 1mm; color: var(--dark); font: 700 9pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; }
    .paper-text .source { color: var(--muted); font-size: 8.5pt; }
    .paper-text blockquote { margin: 1.5mm 0 2mm; padding: 0 0 0 3.5mm; border-left: 0.8mm solid var(--accent); color: #2b3238; font-style: italic; }
    .paper-text table { width: 100%; }
    .paper-questions { break-before: page; }
    .support { width: 100%; border-collapse: collapse; font: 8.5pt/1.35 "Segoe UI", system-ui, sans-serif; }
    .support thead th { padding: 1mm 2mm; border-bottom: 0.6pt solid #1a1f24; color: var(--muted); font-size: 7.2pt; letter-spacing: 0.05em; text-align: center; text-transform: uppercase; }
    .support thead th:first-child { text-align: left; }
    .support tbody th { padding: 1.6mm 2mm 0.6mm; font-weight: 500; text-align: left; }
    .support td { width: 18mm; padding: 1.6mm 0 0.6mm; text-align: center; }
    .support tr.evidence td { width: auto; padding: 0 2mm 1.6mm; border-bottom: 0.4pt solid var(--line); text-align: left; }
    .support .choice { margin: 0; }
    .evidence-label { color: var(--muted); font-size: 7.2pt; font-weight: 600; }
    .support .lines span { height: 5.5mm; }
    .references-page { break-before: page; }
    .map-terms { display: flex; flex-wrap: wrap; gap: 1.6mm; margin: 1mm 0 3mm; }
    .map-terms span { padding: 1.2mm 2.6mm; border: 0.7pt solid var(--accent); border-radius: 1.5mm; font: 600 8.5pt "Segoe UI", system-ui, sans-serif; }
    .map-canvas { height: 135mm; padding: 2mm 3mm; border: 0.6pt dashed #a9b3ba; border-radius: 2mm; }
    .map-canvas span { color: var(--muted); font: 600 7.5pt "Segoe UI", system-ui, sans-serif; }
    .map-links { width: 100%; border-collapse: collapse; font: 8.5pt/1.35 "Segoe UI", system-ui, sans-serif; margin: 1mm 0 2mm; }
    .map-links th { padding: 1mm 2mm; border-bottom: 0.6pt solid #1a1f24; color: var(--muted); font-size: 7.2pt; letter-spacing: 0.05em; text-align: left; text-transform: uppercase; }
    .map-links td { padding: 1mm 2mm; border-bottom: 0.4pt solid var(--line); vertical-align: top; }
    .prompts { margin: 1.5mm 0 0; padding-left: 6mm; list-style: lower-alpha; }
    .prompts li { margin-bottom: 0.8mm; }
    .references { padding-left: 5mm; font-size: 9pt; }
    .references li { margin-bottom: 1.5mm; }
    .case.is-new { break-before: page; }
    .stage { break-before: page; }
    .turn { margin: 0 0 2mm; padding: 1.6mm 3mm; border-radius: 1.5mm; background: var(--dark); color: #fff; font: 700 7.8pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.1em; text-transform: uppercase; }
    .recap { margin: 0 0 3mm; color: var(--muted); font-style: italic; }
    .answer-part { margin: 2mm 0 3mm; color: var(--dark); font: 700 13pt "Segoe UI", system-ui, sans-serif; }
    .answer-part.is-new { break-before: page; }
    .key-points { margin: 0 0 6mm; padding: 2.6mm 4mm; border-left: 1.2mm solid var(--accent); background: var(--soft); break-inside: avoid; }
    .key-points ul { margin: 0; padding-left: 4.5mm; font-size: 9pt; }
    .options { margin: 1mm 0 0; padding: 0; list-style: none; }
    .options li { display: flex; align-items: flex-start; gap: 2.5mm; margin-bottom: 1.4mm; }
    .options i { flex: none; display: inline-flex; align-items: center; justify-content: center; width: 4.6mm; height: 4.6mm; border: 0.7pt solid var(--muted); border-radius: 50%; color: var(--muted); font: normal 700 7pt "Segoe UI", system-ui, sans-serif; }
    .notes { margin: 0 0 1.5mm; padding-left: 4.5mm; font-size: 9pt; color: #333b44; }

</style></head><body>
    <section class="cover is-${FORM}">
        <header class="masthead">
            <h1>Clinical <em>Conditions</em></h1>
            <p class="issue">Practice exam<span>Last updated ${updated}</span></p>
        </header>
        <div class="badge"><span class="badge-text">Practice exam<strong>Form ${EXAM.form}</strong></span><span class="badge-letter">${EXAM.form}</span></div>
        <div class="cover-art">${coverArt}</div>
        <div class="cover-band"></div>
        <div class="headline">
            <p class="kicker">${gauge(isA ? 2 : 5)}${coverLine}</p>
            <h2>${EXAM.system}</h2>
            <p class="deck">${EXAM.deck}</p>
        </div>
        <div class="cover-base">For educational use only. This is a study aid, not a clinical reference.</div>
    </section>

    <section class="instructions">
        <header class="page-head"><h1>Instructions</h1><p>${EXAM.title}<span>Last updated ${updated}</span></p></header>
        ${isA ? formA : formB}
    </section>
${formatsPage}

    <section class="abbreviations">
        <header class="page-head"><h1>Abbreviations</h1><p>Allowed during the exam</p></header>
        <p class="intro">These abbreviations may appear in the exam and may be used in your answers. Definitions follow the Clinical Conditions website.</p>
        <div class="terms">${terms.map(([term, definition]) => `<p><strong>${term}</strong> ${[definition].flat().join("; ")}</p>`).join("")}</div>
    </section>
${part1Html}
${part2Html}
${part3Html}
${part4Html}
${answersHtml}
${referencesHtml}
</body></html>`;

await printPdf(html, OUTPUT, `Clinical Conditions · ${EXAM.title}`);
console.log(`${OUTPUT}: Form ${EXAM.form}${isA ? "" : `, Part 1: ${problems.length} problems, ${problems.reduce((t, p) => t + p.questions.length, 0)} questions, ${part1Points} points; Part 2: ${cases.length} cases, ${cases.reduce((t, c) => t + caseQuestions(c).length, 0)} questions, ${part2Points} points; Part 3: ${paper ? paper.questions.length : 0} questions, ${part3Points} points; Part 4: ${part4Points} points${overLimit.length ? `; over the word limit: ${overLimit.join(", ")}` : ""}`}, ${totalMinutes} minutes, ${totalPoints} points, ${terms.length} abbreviations${hasQuestions ? "" : " (no questions yet, so every abbreviation on the pages)"}`);
process.exit(0);
