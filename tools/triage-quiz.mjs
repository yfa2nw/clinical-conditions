// One-off triage of the old USMLE-style banks for the quiz overhaul (requests.md, Request 1).
// For every question without a kind it proposes memory, reasoning, or analysis, replaces
// "step" with a kind in the bank (then called "difficulty"), and gives a verdict on what the question needs.
// It writes quiz-triage.md, the working list for rewriting each page.
//
//   node tools/triage-quiz.mjs          report only
//   node tools/triage-quiz.mjs --apply  also rewrite step as kind in the banks

import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";
import { articleWords, quizGoal, quizTarget } from "./quiz-target.mjs";

const APPLY = process.argv.includes("--apply");
const BANKS = [
    { system: "GI", file: "gi/questions.js", page: "gi/index.html", kind: "clinical" },
    { system: "GI", file: "gi/physiology-questions.js", page: "gi/physiology.html", kind: "physiology" },
    { system: "Neurology", file: "neuro/questions.js", page: "neuro/index.html", kind: "clinical" },
    { system: "Neurology", file: "neuro/physiology-questions.js", page: "neuro/physiology.html", kind: "physiology" },
    { system: "Renal", file: "renal/questions.js", page: "renal/index.html", kind: "clinical" },
];
// Pages rewritten to the new style; add each page here once its quiz is done
const DONE = new Set(["gi-embryology", "gastric-secretion", "emetic-center", "liver-function", "abdominal-pain", "liver-tests", "pancreatitis", "appendicitis", "hepatic-metabolic", "hepatic-iatrogenic", "hepatic-neoplastic", "hepatic-other", "biliary-cancer", "esophageal-motility", "gastric-tumors", "malabsorption", "diverticular-diseases", "ibd", "liver-failure", "ibs", "diarrhea", "chronic-diarrhea", "intestinal-ischemia", "gi-bleeding-obstruction", "hepatic-vascular", "hepatic-infectious", "hepatic-traumatic", "hepatic-autoimmune", "metabolic-acidosis", "metabolic-alkalosis", "gerd-esophagitis", "gastritis-pud", "gallbladder-stones", "bile-duct-stones", "prerenal-aki", "intrarenal-aki", "postrenal-aki", "aki-workup"]);

// Quiz length follows page size (tools/quiz-target.mjs). A rewritten page keeps its count while it is within 10 of its target.
function target(id, system, current) {
    const words = articleWords(system, id);
    return DONE.has(id) ? quizGoal(words, current) : quizTarget(words);
}

const plain = (text = "") => text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

// Analysis: long cases or data to interpret. Reasoning: why, how, mechanism, or what to do next.
// Memory: short recall, including the diagnosis or cause behind a short classic vignette.
function classify(q) {
    const stem = plain(q.stem);
    const ask = plain(q.leadIn || stem.split(/(?<=[.?!])\s+/).pop());
    const values = (stem.match(/\d+(\.\d+)?\s*(mmol\/L|µmol\/L|U\/L|IU\/L|g\/L|g\/dL|mg\/dL|mmHg|×|\/µL|%|seconds|cells)/g) || []).length;
    if (stem.length > 520 || values >= 4 || /<table/.test(q.stem)) return "analysis";
    if (/\b(why|how|mechanism|explains?|next|management|manage|treat|treatment|therapy|drug|first[- ]line|initial|definitive|best step|approach|advice|prevent|avoid|change)\b/i.test(ask)) return "reasoning";
    if (stem.length > 340) return "reasoning";
    return "memory";
}

function verdict(q, kind, duplicateOf) {
    const reasons = [];
    const wrong = [0, 1, 2, 3, 4].filter((i) => i !== q.answer);
    const noted = wrong.filter((i) => q.notes && q.notes[i]).length;
    const explanation = plain(q.explanation).length;
    if (duplicateOf) return { verdict: "drop", reasons: [`same answer and lead-in as ${duplicateOf}`] };
    if (/\b(EXCEPT|NOT)\b/.test(q.leadIn || "")) reasons.push("negative lead-in");
    if (kind === "memory" && plain(q.stem).length > 220) reasons.push("long for a memory question; shorten to a direct what or which");
    if (noted < 4) reasons.push(`notes on ${noted} of 4 wrong options`);
    if (explanation < 250) reasons.push(`explanation ${explanation} characters; needs the why and how`);
    if (q.step !== undefined && !q.leadIn) reasons.push("no lead-in");
    const rewrite = reasons.some((r) => r.startsWith("negative") || r.startsWith("long for"));
    if (rewrite) return { verdict: "rewrite", reasons };
    if (reasons.length) return { verdict: "keep, expand", reasons };
    return { verdict: "keep", reasons };
}

const report = ["# Quiz triage", "", "Working list for the quiz overhaul in `requests.md` (Request 1), made by `node tools/triage-quiz.mjs`. Each old question was given a kind from its length, its data, and what it asks: analysis for long cases or 4 or more values to interpret, reasoning for why, how, mechanism, or next-step questions, and memory for short recall. Check the kind when rewriting a page.", "", "Verdicts:", "", "- **keep**: fits the new style as it is.", "- **keep, expand**: the question fits, but the explanation needs the why and how and a note on every wrong option.", "- **rewrite**: the question itself needs changing (a negative lead-in, or a memory question that is too long).", "- **drop**: repeats another question on the page.", "", "Over target: a kind with more kept questions than its target; move the extras to another kind by rewriting them, or drop the weakest.", "", "Pages marked done have been rewritten to the new style; their ids are in `DONE` in the script. The kinds on the other pages were proposed from each question's length, data, and what it asks, so check them when rewriting.", ""];
const totals = { questions: 0, keep: 0, "keep, expand": 0, rewrite: 0, drop: 0, toWrite: 0, target: 0 };

for (const bank of BANKS) {
    const source = readFileSync(bank.file, "utf8");
    const questions = vm.runInNewContext(`${source};QUIZ_QUESTIONS`);
    const html = readFileSync(bank.page, "utf8");
    const pages = [...html.matchAll(/<article class="condition-content[^"]*" id="([^"]+)"/g)].map((m) => m[1]);
    const titles = Object.fromEntries([...html.matchAll(/<article class="condition-content[^"]*" id="([^"]+)"[^>]*>\s*<h2>([\s\S]*?)<\/h2>/g)].map((m) => [m[1], plain(m[2])]));

    // Propose a kind for every question that lacks one
    for (const q of questions) if (!q.kind || APPLY) q.proposed = classify(q);

    if (APPLY) {
        let index = 0;
        const steps = questions.filter((q) => q.step !== undefined);
        const updated = source.replace(/\bstep: [12],/g, () => `kind: "${steps[index++].proposed}",`);
        if (index !== steps.length) throw new Error(`${bank.file}: matched ${index} steps for ${steps.length} questions`);
        writeFileSync(bank.file, updated.replace(/\n\s*step\s+1 \(mechanisms[^\n]*\n/, "\n"));
    }

    report.push(`## ${bank.system} ${bank.kind === "clinical" ? "conditions" : "physiology and pharmacology"} (\`${bank.file}\`)`, "");
    report.push("| Page | Memory | Reasoning | Analysis | Target | Still to write | Over target | Needs work |", "|---|---|---|---|---|---|---|---|");
    const detail = [];
    for (const id of pages) {
        const onPage = questions.filter((q) => q.condition === id);
        const want = target(id, bank.page.split("/")[0], onPage.length);
        const done = DONE.has(id);
        const level = (q) => q.kind || q.proposed;
        const have = Object.fromEntries(["memory", "reasoning", "analysis"].map((d) => [d, onPage.filter((q) => level(q) === d).length]));
        const seen = new Map();
        const verdicts = onPage.map((q) => {
            const key = `${plain(q.leadIn || "")}|${q.options[q.answer]}`;
            const duplicateOf = q.leadIn && seen.get(key);
            if (!duplicateOf) seen.set(key, q.id);
            const v = done ? { verdict: "keep", reasons: ["rewritten"] } : verdict(q, level(q), duplicateOf);
            return { q, ...v };
        });
        const kept = (d) => verdicts.filter((v) => level(v.q) === d && v.verdict !== "drop").length;
        const toWrite = ["memory", "reasoning", "analysis"].reduce((sum, d) => sum + Math.max(0, want[d] - kept(d)), 0);
        const needsWork = verdicts.filter((v) => v.verdict !== "keep").length;
        const over = ["memory", "reasoning", "analysis"].filter((d) => kept(d) > want[d]).map((d) => `${kept(d) - want[d]} ${d}`).join(", ") || "";
        const wantTotal = want.memory + want.reasoning + want.analysis;
        totals.questions += onPage.length;
        totals.toWrite += toWrite;
        totals.target += wantTotal;
        verdicts.forEach((v) => (totals[v.verdict] += 1));
        report.push(`| ${titles[id] || id}${done ? " (done)" : ""} | ${have.memory}/${want.memory} | ${have.reasoning}/${want.reasoning} | ${have.analysis}/${want.analysis} | ${wantTotal} | ${toWrite} | ${over} | ${needsWork} |`);
        if (!done && onPage.length) {
            detail.push(`### ${titles[id] || id}`, "");
            verdicts.forEach((v) => detail.push(`- \`${v.q.id}\`: ${level(v.q)}, **${v.verdict}**${v.reasons.length ? ` (${v.reasons.join("; ")})` : ""}`));
            detail.push("");
        }
    }
    report.push("", ...detail);
}

report.splice(report.findIndex((line) => line.startsWith("## ")), 0, `Across the ${BANKS.length} banks: ${totals.questions} questions now, against a target of ${totals.target}. ${totals.keep} keep, ${totals["keep, expand"]} keep with a fuller explanation, ${totals.rewrite} rewrite, and ${totals.drop} drop; about ${totals.toWrite} new questions are still to write.`, "");
writeFileSync("quiz-triage.md", `${report.join("\n")}\n`);
console.log(report.find((line) => line.startsWith("Across")));
