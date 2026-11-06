// Builds gi/gi-review-articles.pdf from the review article popups in gi/physiology.html and gi/index.html.
// Run from the project root after changing a review: node tools/build-review-pdf.mjs
import { readFileSync } from "node:fs";
import { printPdf } from "./print-pdf.mjs";

const OUTPUT = "gi/gi-review-articles.pdf";

/* ---------- Read the reviews in sidebar order ---------- */
const page = readFileSync("gi/index.html", "utf8");
const physiologyPage = readFileSync("gi/physiology.html", "utf8");
const articleText = (source, id) => {
    const start = source.indexOf(`<article class="condition-content`, source.indexOf(`data-condition="${id}"`));
    const at = source.indexOf(`id="${id}"`, start);
    return source.slice(at, source.indexOf("</article>", at));
};

const physiologyIds = [...new Set([...physiologyPage.matchAll(/data-condition="([^"]+)"/g)].map((m) => m[1]))];
const clinicalGroups = [...page.matchAll(/<p class="group-label"[^>]*>([^<]+)<\/p>([\s\S]*?)<\/(?:div|nav|ul)>\s*<\/div>/g)]
    .map((m) => ({ name: m[1].replaceAll("&amp;", "&"), ids: [...m[2].matchAll(/data-condition="([^"]+)"/g)].map((c) => c[1]) }))
    .filter((group) => group.ids.length)
    .map((group) => ({ ...group, source: page }));
const groups = [{ name: "Physiology", ids: physiologyIds, source: physiologyPage }, ...clinicalGroups];

const glossary = new Map();
function clean(html) {
    return html
        .replace(/<abbr [^>]*data-definition="([^"]*)"[^>]*>([\s\S]*?)<\/abbr>/g, (m, definition, text) => {
            if (/[A-Z].*[A-Z0-9]|^[a-z]+[A-Z]/.test(text) && !/ [a-z]/.test(text) && !glossary.has(text)) glossary.set(text, definition);
            return text;
        })
        .replace(/<button [^>]*data-goto="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g, '<a href="#review-$1">$2</a>')
        .replace(/<a [^>]*href="(?:index|physiology)\.html#([^"]+)"[^>]*>/g, '<a href="#review-$1">');
}

const articles = groups.flatMap((group) => group.ids.map((id) => {
    const text = articleText(group.source, id);
    const open = text.indexOf('<div class="quick-review-body">');
    if (open < 0) throw new Error(`No review for ${id}`);
    const body = clean(text.slice(open + '<div class="quick-review-body">'.length, text.lastIndexOf("</div>", text.indexOf("</dialog>", open))));
    const title = body.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)[1];
    const split = body.indexOf("</aside>") + "</aside>".length;
    const top = body.slice(0, split).replace(/<p class="review-kicker">[^<]*<\/p>/, `<p class="kicker">${group.name}</p>`).replace(/<h3[^>]*>/, "<h2>").replace("</h3>", "</h2>");
    return { id, group: group.name, title, html: `<article id="review-${id}">${top}<div class="columns">${body.slice(split)}</div></article>` };
}));

/* ---------- Page ---------- */
const contents = groups.map((group) => `<h3>${group.name}</h3><ol>${articles.filter((a) => a.group === group.name).map((a) => `<li><a href="#review-${a.id}">${a.title}</a></li>`).join("")}</ol>`).join("");
const terms = [...glossary].sort(([a], [b]) => a.localeCompare(b, "en", { sensitivity: "base" })).map(([term, definition]) => `<p><strong>${term}</strong> ${definition}</p>`).join("");

const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Gastrointestinal Review Articles</title><style>
    @page { size: A4; }
    :root { --accent: #0f766e; --soft: #e2f1ee; --muted: #5b6470; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.42 Georgia, "Times New Roman", serif; }
    h1, h2, h3, h4, .kicker, .cover p, nav a { font-family: "Segoe UI", system-ui, sans-serif; }
    a { color: inherit; text-decoration: none; }
    .cover { display: flex; flex-direction: column; justify-content: center; height: 245mm; }
    .cover .label { margin: 0 0 3mm; color: var(--accent); font-size: 10pt; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
    .cover h1 { margin: 0 0 5mm; font-size: 34pt; line-height: 1.1; }
    .cover p { margin: 0 0 2mm; color: var(--muted); font-size: 11pt; }
    .contents { break-before: page; column-count: 2; column-gap: 8mm; }
    .contents > h1, .terms > h1 { column-span: all; margin: 0 0 4mm; font-size: 20pt; }
    .contents h3 { margin: 4mm 0 1mm; color: var(--accent); font-size: 9.5pt; break-after: avoid; }
    .contents ol { margin: 0; padding-left: 5mm; }
    .contents li { margin-bottom: 1.2mm; font-size: 9pt; line-height: 1.3; break-inside: avoid; }
    article { break-before: page; }
    .kicker { margin: 0 0 1.5mm; color: var(--accent); font-size: 8pt; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
    h2 { margin: 0 0 3mm; font-size: 18pt; line-height: 1.2; }
    .review-abstract { margin: 0 0 3.5mm; font-weight: 700; }
    .review-key-points { margin-bottom: 4mm; padding: 2.5mm 4mm; border-radius: 2mm; background: var(--soft); break-inside: avoid; }
    .review-key-points h4 { margin: 0 0 1mm; font-size: 9.5pt; }
    .review-key-points ul { margin: 0; padding-left: 4mm; }
    .review-key-points li { margin-bottom: 0.6mm; font-size: 9pt; }
    .columns { column-count: 2; column-gap: 7mm; text-align: justify; hyphens: auto; }
    .columns h4 { margin: 3mm 0 1mm; color: var(--accent); font-size: 10pt; text-align: left; break-after: avoid; }
    .columns h4:first-child { margin-top: 0; }
    .columns p { margin: 0 0 1.6mm; orphans: 2; widows: 2; }
    .columns a { color: var(--accent); font-weight: 700; }
    .terms { break-before: page; column-count: 3; column-gap: 6mm; }
    .terms p { margin: 0 0 1mm; font-size: 8pt; line-height: 1.3; break-inside: avoid; }
    .terms strong { font-family: "Segoe UI", system-ui, sans-serif; }
</style></head><body>
    <section class="cover">
        <p class="label">Clinical Conditions</p>
        <h1>Gastrointestinal Review Articles</h1>
        <p>${physiologyIds.length} physiology topics and ${articles.length - physiologyIds.length} conditions, from the esophagus to the appendix</p>
        <p>For educational use only. This is a study aid, not a clinical reference.</p>
    </section>
    <nav class="contents"><h1>Contents</h1>${contents}</nav>
    ${articles.map((a) => a.html).join("\n")}
    <section class="terms"><h1>Abbreviations</h1>${terms}</section>
</body></html>`;

await printPdf(html, OUTPUT, "Clinical Conditions · Gastrointestinal review articles");
console.log(`${OUTPUT}: ${articles.length} reviews, ${glossary.size} abbreviations`);
process.exit(0);
