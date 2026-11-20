// Checks one page's quiz block before it is merged into the bank, for writing quizzes page by page.
// A block is a staging file of question objects (the same text that sits between the bank's brackets):
//   node tools/check-quiz-block.mjs gi pud                 checks tools/quiz-staging/gi/pud.js
//   node tools/check-quiz-block.mjs gi pud --merged        checks the page's questions already in the bank
import { readFileSync, existsSync } from "node:fs";
import vm from "node:vm";
import { articleWords, quizGoal } from "./quiz-target.mjs";

const [SYSTEM, ID, flag] = process.argv.slice(2);
if (!SYSTEM || !ID) throw new Error("Usage: node tools/check-quiz-block.mjs <system> <page id> [--merged]");
// The page's quiz length follows its size (tools/quiz-target.mjs): one question per 30 page words, from 10 to 40
const words = articleWords(SYSTEM, ID);

const bankFile = existsSync(`${SYSTEM}/physiology.html`) && readFileSync(`${SYSTEM}/physiology.html`, "utf8").includes(`id="${ID}"`) ? `${SYSTEM}/physiology-questions.js` : `${SYSTEM}/questions.js`;
const pageFile = bankFile.includes("physiology") ? `${SYSTEM}/physiology.html` : `${SYSTEM}/index.html`;
const bank = vm.runInNewContext(`${readFileSync(bankFile, "utf8")};QUIZ_QUESTIONS`);
const questions = flag === "--merged"
    ? bank.filter((q) => q.condition === ID)
    : vm.runInNewContext(`const QUIZ_QUESTIONS = [${readFileSync(`tools/quiz-staging/${SYSTEM}/${ID}.js`, "utf8")}];QUIZ_QUESTIONS`);

const problems = [];
const warn = [];
const ids = new Set();
const otherIds = new Set(bank.filter((q) => q.condition !== ID).map((q) => q.id));
const pageText = readFileSync(pageFile, "utf8");
if (!pageText.includes(`id="${ID}"`)) problems.push(`no article ${ID} in ${pageFile}`);

for (const q of questions) {
    const where = q.id || "(no id)";
    if (!q.id) problems.push("a question has no id");
    if (ids.has(q.id)) problems.push(`${where}: duplicate id`);
    if (otherIds.has(q.id)) problems.push(`${where}: id already used by another page`);
    ids.add(q.id);
    if (q.condition !== ID) problems.push(`${where}: condition is ${q.condition}, not ${ID}`);
    if (!["memory", "reasoning", "analysis"].includes(q.kind)) problems.push(`${where}: kind must be memory, reasoning, or analysis`);
    if ("step" in q || "difficulty" in q) problems.push(`${where}: use kind, not step or difficulty`);
    if (!Array.isArray(q.options) || q.options.length !== 5 || new Set(q.options).size !== 5) problems.push(`${where}: needs five distinct options`);
    if (!(q.answer >= 0 && q.answer <= 4)) problems.push(`${where}: answer must be 0–4`);
    if (q.options?.some((o) => /<[a-z]/i.test(o))) problems.push(`${where}: options must be plain text`);
    if (!q.stem) problems.push(`${where}: no stem`);
    if (!q.explanation || q.explanation.replace(/<[^>]+>/g, "").length < 200) problems.push(`${where}: explanation missing or under 200 characters; teach the why and how`);
    const notes = q.notes || {};
    if (q.answer in notes) problems.push(`${where}: note on the correct answer`);
    const missing = [0, 1, 2, 3, 4].filter((i) => i !== q.answer && !notes[i]);
    if (missing.length) problems.push(`${where}: no note on option index ${missing.join(", ")}`);
    const text = `${q.stem} ${q.leadIn || ""}`;
    if (/\b(EXCEPT|NOT)\b/.test(text)) problems.push(`${where}: avoid EXCEPT or NOT lead-ins`);
    if (/\b(option|answer|choice) [A-E]\b|\b[A-E]\) /.test(`${q.explanation} ${Object.values(notes).join(" ")}`)) problems.push(`${where}: refers to an option by letter`);
    if (q.kind === "memory" && q.stem.replace(/<[^>]+>/g, "").length > 260) warn.push(`${where}: long for a memory question (${q.stem.length} characters)`);
    if (/b(colour|haem|oesoph|anaem|oedema|tumour|centre|diarrhoea|paediatric|foetal|ischaem)/i.test(JSON.stringify(q))) problems.push(`${where}: British spelling; use American spelling`);
}

// Sets: a passage on the first question only, two or more questions, same kind
const sets = new Map();
questions.forEach((q) => q.set && sets.set(q.set, [...(sets.get(q.set) || []), q]));
for (const [name, members] of sets) {
    if (members.length < 2) problems.push(`set ${name}: needs two or more questions`);
    if (!members[0].passage || members.slice(1).some((q) => q.passage)) problems.push(`set ${name}: passage goes on the first question only`);
    if (new Set(members.map((q) => q.kind)).size > 1) problems.push(`set ${name}: all questions in a set share a kind`);
}
questions.filter((q) => q.passage && !q.set).forEach((q) => problems.push(`${q.id}: a passage belongs to a set`));
if (!sets.size) warn.push("no set: include at least one analysis case with two or three questions");

// Counts against the page's target; a count within 10 of the target can stay as it is
const goal = quizGoal(words, questions.length);
const target = { memory: goal.memory, reasoning: goal.reasoning, analysis: goal.analysis };
if (goal.total !== questions.length) problems.push(`${questions.length} questions; the page has ${words} words, so its target is ${goal.target} (change in groups of 5: 2 memory, 2 reasoning, 1 analysis)`);
const counts = Object.fromEntries(["memory", "reasoning", "analysis"].map((k) => [k, questions.filter((q) => q.kind === k).length]));
for (const k of Object.keys(target)) if (Math.abs(counts[k] - target[k]) > 2) problems.push(`${counts[k]} ${k} questions; the target is ${target[k]} (within 2 is fine)`);

// The correct option should be the longest in about 1 in 5
const longest = questions.filter((q) => q.options && q.options[q.answer].length >= Math.max(...q.options.filter((_, i) => i !== q.answer).map((o) => o.length)));
const share = Math.round((longest.length / Math.max(questions.length, 1)) * 100);
if (share > 25) problems.push(`the correct option is the longest in ${share}% (${longest.map((q) => q.id).join(", ")}); keep it near 20%`);

// Correct answers spread across original positions do not matter (options are shuffled), but report the mix
console.log(`${ID}: ${questions.length} questions (memory ${counts.memory}, reasoning ${counts.reasoning}, analysis ${counts.analysis}); target ${goal.target} for ${words} words, goal ${target.memory}/${target.reasoning}/${target.analysis}; ${sets.size} set(s); correct option longest in ${share}%`);
warn.forEach((w) => console.log(`  warning: ${w}`));
if (problems.length) {
    problems.forEach((p) => console.log(`  problem: ${p}`));
    process.exit(1);
}
console.log("  ok");
