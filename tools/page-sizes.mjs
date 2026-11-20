// Lists every page's size and quiz length, by organ system, in sidebar order.
// Run from the project root: node tools/page-sizes.mjs   (writes page-sizes.md)
//
// Page words count the article's visible text, leaving out its diagrams, Related line, references, and review article.
// Review words count the review article. Diagrams count the inline SVGs on the page.
// Targets follow tools/quiz-target.mjs: one question per 30 page words, rounded to the nearest 5, from 10 to 40, split 2:2:1.
// Change shows the questions to add or remove, only when a page is 10 or more away from its target.

import { readFileSync, existsSync, writeFileSync } from "node:fs";
import vm from "node:vm";
import { pageWords, pageArticles, quizGoal, WORDS_PER_QUESTION, CHANGE_AT, MIN_QUESTIONS, MAX_QUESTIONS } from "./quiz-target.mjs";

const SYSTEMS = [
    { name: "GI", folder: "gi", pages: [["index.html", "questions.js"], ["physiology.html", "physiology-questions.js"]] },
    { name: "Neurology", folder: "neuro", pages: [["index.html", "questions.js"], ["physiology.html", "physiology-questions.js"]] },
    { name: "Renal", folder: "renal", pages: [["index.html", "questions.js"], ["physiology.html", "physiology-questions.js"]] },
    { name: "Endocrine", folder: "endocrine", pages: [["index.html", "questions.js"]] },
];

const words = (html) => {
    const text = html.replace(/<svg[\s\S]*?<\/svg>/g, " ").replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").trim();
    return text ? text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length : 0;
};
const loadBank = (file) => {
    if (!existsSync(file)) return [];
    try { return vm.runInNewContext(readFileSync(file, "utf8") + ";typeof QUIZ_QUESTIONS === 'undefined' ? [] : QUIZ_QUESTIONS"); } catch { return []; }
};
// A page is in the new quiz style once every question has a note on each wrong option
const rewritten = (questions) => questions.length > 0 && questions.every((q) => q.notes && Object.keys(q.notes).length >= 4);

const out = [
    "# Page sizes", "",
    `Made by \`node tools/page-sizes.mjs\` on ${new Date().toISOString().slice(0, 10)}. Page words leave out diagrams, the Related line, references, and the review article; review words count the review article. Questions are memory / reasoning / analysis.`, "",
    `Each page's target is one question per ${WORDS_PER_QUESTION} page words, rounded to the nearest 5 and kept between ${MIN_QUESTIONS} and ${MAX_QUESTIONS}, split 2:2:1. **Change** is the number of questions to add or remove, always in groups of 5 (2 memory, 2 reasoning, 1 analysis), shown only when a page is ${CHANGE_AT} or more away from its target. An asterisk marks a quiz not yet rewritten in the new style; its change is made when it is rewritten. A dash marks a page that is not written yet.`, "",
];
const summary = [];

for (const system of SYSTEMS) {
    const rows = [];
    for (const [file, bankFile] of system.pages) {
        const path = `${system.folder}/${file}`;
        if (!existsSync(path)) continue;
        const html = readFileSync(path, "utf8");
        const bank = loadBank(`${system.folder}/${bankFile}`);
        const articles = pageArticles(html);
        // Sidebar order, falling back to document order
        const order = [...html.matchAll(/data-condition="([^"]+)"/g)].map((m) => m[1]);
        articles.sort((a, b) => (order.indexOf(a.id) + 1 || 1e6) - (order.indexOf(b.id) + 1 || 1e6));
        for (const { id, html: article } of articles) {
            const title = (article.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [, id])[1].replace(/<[^>]+>/g, "").trim();
            const review = (article.match(/<dialog class="quick-review"[\s\S]*?<\/dialog>/) || [""])[0];
            const size = pageWords(article);
            const questions = bank.filter((q) => q.condition === id);
            rows.push({
                page: file === "index.html" ? "Conditions" : "Physiology",
                title, id, pending: /pending-content/.test(article),
                words: size, review: words(review),
                diagrams: (article.replace(review, "").match(/<svg/g) || []).length,
                questions: questions.length,
                kinds: ["memory", "reasoning", "analysis"].map((k) => questions.filter((q) => q.kind === k).length),
                goal: quizGoal(size, questions.length),
                rewritten: rewritten(questions),
            });
        }
    }
    if (!rows.length) continue;
    const written = rows.filter((r) => !r.pending);
    const totalWords = written.reduce((n, r) => n + r.words, 0);
    const totalQuestions = rows.reduce((n, r) => n + r.questions, 0);
    const totalTarget = written.reduce((n, r) => n + r.goal.total, 0);
    summary.push(`| ${system.name} | ${written.length} of ${rows.length} | ${totalWords} | ${written.length ? Math.round(totalWords / written.length) : 0} | ${totalQuestions} | ${totalTarget} |`);
    out.push(`## ${system.name}`, "");
    for (const section of ["Conditions", "Physiology"]) {
        const list = rows.filter((r) => r.page === section);
        if (!list.length) continue;
        out.push(`### ${section} (\`${system.folder}/${section === "Conditions" ? "index" : "physiology"}.html\`)`, "");
        out.push("| Page | Page words | Review words | Diagrams | Questions | M / R / A | Words per question | Target | Change |", "|---|---:|---:|---:|---:|---|---:|---:|---:|");
        for (const r of list) {
            const dash = (v) => (r.pending && !v ? "–" : v);
            const change = r.pending ? 0 : r.goal.total - r.questions;
            const ratio = r.questions ? Math.round(r.words / r.questions) : "–";
            out.push(`| ${r.title}${r.questions && !r.rewritten ? "*" : ""} | ${dash(r.words)} | ${dash(r.review)} | ${dash(r.diagrams)} | ${r.questions} | ${r.kinds.join(" / ")} | ${ratio} | ${r.pending ? "–" : r.goal.target} | ${change > 0 ? `+${change}` : change < 0 ? `${change}` : ""} |`);
        }
        out.push("");
    }
}

out.splice(6, 0, "| System | Pages written | Page words | Average per page | Questions | Target for written pages |", "|---|---|---:|---:|---:|---:|", ...summary, "");
writeFileSync("page-sizes.md", out.join("\n"));
console.log(summary.join("\n"));
console.log("page-sizes.md");
