// Merges a checked quiz block (tools/quiz-staging/<system>/<id>.js) into the bank, in place of that
// page's old questions, and links the page's worksheet and quiz copy from its article.
//   node tools/merge-quiz-block.mjs gi pud
// Run tools/check-quiz-block.mjs first; afterwards build the PDFs and add the page to DONE in tools/triage-quiz.mjs.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const [SYSTEM, ID] = process.argv.slice(2);
if (!SYSTEM || !ID) throw new Error("Usage: node tools/merge-quiz-block.mjs <system> <page id>");
const physiology = existsSync(`${SYSTEM}/physiology.html`) && readFileSync(`${SYSTEM}/physiology.html`, "utf8").includes(`id="${ID}"`);
const BANK = `${SYSTEM}/${physiology ? "physiology-questions.js" : "questions.js"}`;
const PAGE = `${SYSTEM}/${physiology ? "physiology.html" : "index.html"}`;
const block = readFileSync(`tools/quiz-staging/${SYSTEM}/${ID}.js`, "utf8").trim();

// Find the end of the object literal that starts at `start` (skipping strings and template literals)
function objectEnd(text, start) {
    let depth = 0;
    let quote = null;
    for (let j = start; j < text.length; j += 1) {
        const c = text[j];
        if (quote) {
            if (c === "\\") j += 1;
            else if (c === quote) quote = null;
            continue;
        }
        if (c === '"' || c === "'" || c === "`") quote = c;
        else if (c === "{") depth += 1;
        else if (c === "}" && --depth === 0) return text[j + 1] === "," ? j + 2 : j + 1;
    }
    throw new Error("unbalanced braces");
}

let bank = readFileSync(BANK, "utf8");
let insertAt = -1;
let removed = 0;
for (;;) {
    const at = bank.indexOf(`condition: "${ID}"`);
    if (at < 0) break;
    const start = bank.lastIndexOf("\n    {", at) + 1;
    const end = objectEnd(bank, bank.indexOf("{", start));
    // Take any section comments directly above the first question with it
    let cut = start;
    const before = bank.slice(0, start);
    const comments = before.match(/(\n[ \t]*\/\*[^\n]*\*\/[ \t]*\n?)+\s*$/);
    if (comments && removed === 0) cut = start - comments[0].length + 1;
    if (insertAt < 0) insertAt = cut;
    bank = bank.slice(0, cut) + bank.slice(end).replace(/^\s*\n/, "\n");
    removed += 1;
}
if (insertAt < 0) insertAt = bank.lastIndexOf("];");
bank = `${bank.slice(0, insertAt).replace(/\s*$/, "\n\n")}    ${block}\n\n${bank.slice(insertAt).replace(/^\s*/, "    ")}`;
// Tidy blank lines
bank = bank.replace(/\n{3,}/g, "\n\n").replace(/\n {4}\n/g, "\n\n").replace(/\n {4}\];/, "\n];");
writeFileSync(BANK, bank);

// Link the worksheet and quiz copy from the article
let page = readFileSync(PAGE, "utf8");
const tag = page.match(new RegExp(`<article class="condition-content[^"]*" id="${ID}"[^>]*>`))[0];
let newTag = tag;
if (existsSync(`tools/worksheets/${SYSTEM}/${ID}.mjs`) && !/data-worksheet=/.test(tag)) newTag = newTag.replace(/>$/, ` data-worksheet="worksheets/${ID}.pdf">`);
if (!/data-quiz-pdf=/.test(newTag)) newTag = newTag.replace(/>$/, ` data-quiz-pdf="quizzes/${ID}.pdf">`);
if (newTag !== tag) writeFileSync(PAGE, page.replace(tag, newTag));
console.log(`${ID}: replaced ${removed} old questions in ${BANK}; article ${newTag === tag ? "unchanged" : "linked"}`);
