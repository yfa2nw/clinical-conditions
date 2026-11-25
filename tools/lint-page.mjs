// Checks one condition page against the model pages (Osteoarthritis, Asthma, and Aortic stenosis).
// Run from the project root: node tools/lint-page.mjs <system> <page id>
// It prints the page's outline, then anything that departs from the standard in CLAUDE.md.
// It checks form, not facts, and some points it lists may be right for the page.
import { readFileSync } from "node:fs";

const [, , system, id] = process.argv;
if (!system || !id) { console.log("Usage: node tools/lint-page.mjs <system> <page id>"); process.exit(1); }
const html = readFileSync(`${system}/index.html`, "utf8");
const start = html.search(new RegExp(`<article class="condition-content[^"]*" id="${id}"`));
if (start < 0) { console.log(`No page ${id} in ${system}/index.html`); process.exit(1); }
const next = html.indexOf('<article class="condition-content', start + 20);
const page = html.slice(start, next < 0 ? undefined : next).replace(/<dialog[\s\S]*?<\/dialog>/g, "");

const issues = [];
const flag = (message) => issues.push(message);
const strip = (text) => text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const count = (text, pattern) => (text.match(pattern) || []).length;
const STANDARD = ["Pathophysiology", "Etiology", "Symptoms and complications", "Diagnosis", "Treatment"];

/* ---------- Sections ---------- */
const sections = page.split('<section class="content-section">').slice(1).map((part) => part.slice(0, part.indexOf("</section>")));
const named = new Map(sections.map((section) => [strip(section.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)[1]), section]));
if ([...named.keys()].join("|") !== STANDARD.join("|")) flag(`sections are ${[...named.keys()].join(", ")}`);

// A range such as 1–3 stands for each number in it
const numbersIn = (section) => [...section.matchAll(/class="cause-number"[^>]*>(\d+)(?:–(\d+))?</g)].flatMap((m) => Array.from({ length: (+m[2] || +m[1]) - m[1] + 1 }, (_, k) => +m[1] + k));
for (const [name, section] of named) {
    const headings = [...section.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)].map((m) => strip(m[1]));
    console.log(`${name}: ${count(section, /<svg/g)} diagrams, ${count(section, /<table/g)} tables${headings.length ? `\n    ${headings.join("; ")}` : ""}`);
    if (count(section, /class="note"/g) > 1) flag(`${name}: more than one note`);
    if (section.includes("pending-content")) flag(`${name}: still has a placeholder`);
    const opening = section.replace(/^[\s\S]*?<\/h3>\s*/, "");
    if (["Pathophysiology", "Diagnosis", "Treatment"].includes(name)) {
        if (!opening.startsWith("<p>")) flag(`${name}: does not open with one sentence`);
        else if (strip(opening.slice(0, opening.indexOf("</p>"))).split(/[.!?] /).length > 1) flag(`${name}: the opening is more than one sentence`);
        if (!/<\/p>\s*<ol class="pathway"/.test(opening)) flag(`${name}: no pathway after the opening sentence`);
    }
}
const etiology = named.get("Etiology") || "", causes = numbersIn(etiology);
if (!causes.length) flag("Etiology: no numbered causes");
if (causes.some((n, i) => n !== i + 1)) flag(`Etiology: causes run ${causes.join(", ")}`);
for (const [name, heading] of [["Diagnosis", "Find the cause"], ["Treatment", "Treat the cause"]]) {
    const section = named.get(name) || "", at = section.indexOf(heading);
    if (at < 0) { flag(`${name}: no "${heading}"`); continue; }
    const numbers = numbersIn(section.slice(at));
    if (numbers.join() !== causes.join()) flag(`${name}: "${heading}" covers ${numbers.join(", ") || "nothing"}, but Etiology has ${causes.join(", ")}`);
}
for (const [name, section] of named) {
    for (const m of section.matchAll(/<ol class="pathway">([\s\S]*?)<\/ol>/g)) {
        const steps = count(m[1], /<li>/g);
        if (steps < 3 || steps > 7) flag(`${name}: a pathway of ${steps} steps`);
    }
}
if (!/<h4[^>]*>Complications<\/h4>/.test(named.get("Symptoms and complications") || "")) flag('Symptoms and complications: no "Complications"');
if (!/<h4[^>]*>(Mimics|Red flags[^<]*)<\/h4>/.test(named.get("Diagnosis") || "")) flag('Diagnosis: no "Mimics" or "Red flags"');
for (const svg of page.match(/<svg[^>]*>/g) || []) if (svg.includes('role="img"') && !/aria-label="[^"]{20,}"/.test(svg)) flag("a diagram has no description");
if (!page.includes('class="see-also"')) flag("no Related line");
if (!page.includes('class="references"')) flag("no references");

/* ---------- Wording ---------- */
const body = page.replace(/<p class="see-also">[\s\S]*$/, "").replace(/<svg[\s\S]*?<\/svg>/g, " ");
const text = strip(body);
for (const pattern of [/\b(elevated|raised|reduced|e\.g\.|i\.e\.|mg\/dL|g\/dL|mEq)\b/g, /\b(oedema|tumour|centre|behaviour|haem\w+|oestr\w+|anaem\w+)\b/gi, /\b\d{1,3},\d{3}\b/g, /\b(acetaminophen|epinephrine|albuterol|CBC|BUN|commonest)\b/gi, /\bfirst line\b/gi]) {
    for (const m of text.matchAll(pattern)) flag(`wording "${m[0]}": …${text.slice(Math.max(0, m.index - 30), m.index + 40)}…`);
}
for (const m of body.matchAll(/class="(cause-detail|pair-to|pathway-detail|cause-name)">([\s\S]*?)<\/span>(?=<|\s)/g)) {
    const words = strip(m[2]).split(" ").length, most = { "cause-detail": 35, "pair-to": 35, "pathway-detail": 14, "cause-name": 8 }[m[1]];
    if (words > most) flag(`${words} words in one entry: ${strip(m[2]).slice(0, 70)}…`);
}
const bare = strip(body.replace(/<abbr[\s\S]*?<\/abbr>|<thead[\s\S]*?<\/thead>|<h[23][\s\S]*?<\/h[23]>|<button[\s\S]*?<\/button>|<a [\s\S]*?<\/a>/g, " "));
const untagged = [...new Set(bare.match(/\b[A-Z][A-Za-z]*[A-Z][A-Za-z0-9]*(?:-\d+)?\b/g) || [])].filter((word) => !/^(I{1,3}|IV|V|VI{0,3}|IX|X)$/.test(word));
if (untagged.length) flag(`may need a tooltip: ${untagged.join(", ")}`);

const words = text.split(" ").length;
if (words > 2500) flag(`${words} words`);
console.log(`\n${words} words`);
console.log(issues.length ? `\n${issues.length} to look at:\n${issues.map((issue) => `  ${issue}`).join("\n")}` : "\nMatches the model pages.");
