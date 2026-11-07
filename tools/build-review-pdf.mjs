// Builds gi/gi-review-articles.pdf from the review article popups in gi/physiology.html and gi/index.html.
// Run from the project root after changing a review: node tools/build-review-pdf.mjs
import { readFileSync } from "node:fs";
import { printPdf } from "./print-pdf.mjs";

const OUTPUT = "gi/gi-review-articles.pdf";

// Which review section each diagram sits beside, in page order. Other reviews place theirs after Key points.
const FIGURE_SECTIONS = {
    "gastric-secretion": ["", "Cephalic phase", "Gastric cells and the mucosal barrier", "Gastric cells and the mucosal barrier", "Receptors and intracellular pathways", "Pharmacology"],
    "digestion-absorption": ["", "Carbohydrates", "Proteins", "Fats", "Micronutrients"],
    "liver-function": ["Anatomy and histology", "Anatomy and histology", "Anatomy and histology", "Carbohydrate metabolism", "Bilirubin conjugation", "Channels", "Pharmacology"],
};

// For a diagram with no description on its page
const FIGURE_LEGENDS = {
    "biliary-stones": "The gallbladder and biliary tree.",
};

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
let figureCount = 0;
function clean(html) {
    return html
        .replace(/<abbr [^>]*data-definition="([^"]*)"[^>]*>([\s\S]*?)<\/abbr>/g, (m, definition, text) => {
            if (/[A-Z].*[A-Z0-9]|^[a-z]+[A-Z]/.test(text) && !/ [a-z]/.test(text) && !glossary.has(text)) glossary.set(text, definition);
            return text;
        })
        .replace(/<button [^>]*data-goto="([^"]+)"[^>]*>([\s\S]*?)<\/button>/g, '<a href="#review-$1">$2</a>')
        .replace(/<a [^>]*href="(?:index|physiology)\.html#([^"]+)"[^>]*>/g, '<a href="#review-$1">');
}

/* ---------- Diagrams ---------- */
// Diagrams are styled by classes in the site's stylesheets, so copy those rules, in the light theme
const plain = (html) => html.replace(/<span class="badge">[\s\S]*?<\/span>/g, "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

function topLevelRules(css) {
    const rules = [];
    const source = css.replace(/\/\*[\s\S]*?\*\//g, "");
    let depth = 0;
    let start = 0;
    for (let i = 0; i < source.length; i += 1) {
        if (source[i] === "{") depth += 1;
        if (source[i] === "}") {
            depth -= 1;
            if (depth === 0) {
                rules.push(source.slice(start, i + 1).trim());
                start = i + 1;
            }
        }
    }
    return rules;
}

function diagramStyles() {
    const svgs = (page + physiologyPage).match(/<svg\b[\s\S]*?<\/svg>/g);
    const classes = new Set(svgs.flatMap((svg) => [...svg.matchAll(/class="([^"]+)"/g)].flatMap((m) => m[1].split(/\s+/))));
    classes.delete("map-svg");
    const usesDiagram = (selector) => [...selector.matchAll(/\.([\w-]+)/g)].some((m) => classes.has(m[1]));
    const rules = ["shared/style.css", "gi/style.css"].flatMap((file) => topLevelRules(readFileSync(file, "utf8")));
    return rules.flatMap((rule) => {
        const brace = rule.indexOf("{");
        const selector = rule.slice(0, brace).trim();
        if (selector.startsWith("@")) return [];
        if (selector === ":root") return [rule];
        const kept = selector.split(",").map((part) => part.trim()).filter((part) => usesDiagram(part) && !part.includes(":hover"));
        return kept.length ? [`${kept.join(", ")} ${rule.slice(brace)}`] : [];
    }).join("\n");
}

// The numbers on a diagram refer to lists on its page, so a figure's legend has to carry them
function figureKey(after, svg, id) {
    const wanted = [...new Set([...svg.matchAll(/<g class="site-marker">[\s\S]*?<text[^>]*>([A-Z0-9]+)<\/text>/g)].map((m) => m[1]))].sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
    if (!wanted.length) return "";
    const section = after.slice(0, after.indexOf("</section>"));
    const found = new Map();
    for (const m of section.matchAll(/<span class="cause-number"[^>]*>([A-Z0-9]+)<\/span><span class="cause-text"><span class="cause-name">([\s\S]*?)<\/span><span class="cause-detail">/g)) {
        if (!found.has(m[1])) found.set(m[1], plain(m[2]));
    }
    for (const m of section.matchAll(/<h5 class="drug-name"><span class="cause-number"[^>]*>(\d+)<\/span>([\s\S]*?)<\/h5>/g)) {
        if (!found.has(m[1])) found.set(m[1], plain(m[2].replace(/<span class="drug-examples">[\s\S]*?<\/span>/, "")));
    }
    for (const m of section.matchAll(/<h4 class="sc-heading">(\d+)\. ([\s\S]*?)<\/h4>/g)) {
        if (!found.has(m[1])) found.set(m[1], plain(m[2]));
    }
    const missing = wanted.filter((n) => !found.has(n));
    if (missing.length) throw new Error(`${id}: no key for diagram numbers ${missing.join(", ")}`);
    return ` ${wanted.map((n) => `${n}, ${found.get(n)}`).join("; ")}.`;
}

function figuresFor(text, id) {
    const body = text.replace(/<dialog[\s\S]*?<\/dialog>/g, "");
    return [...body.matchAll(/<svg\b[^>]*>[\s\S]*?<\/svg>/g)].map((m, index) => {
        const svg = m[0];
        const after = body.slice(m.index + svg.length);
        const box = svg.match(/viewBox="[-\d.]+ [-\d.]+ ([\d.]+) ([\d.]+)"/);
        const label = svg.match(/aria-label="([^"]+)"/)?.[1] || FIGURE_LEGENDS[id];
        if (!label) throw new Error(`${id}: diagram with no legend`);
        const note = after.match(/^<figcaption>([\s\S]*?)<\/figcaption>/)?.[1];
        const legend = `${label.replace(/\.?$/, ".")}${note && !note.startsWith("Numbers match") ? ` ${plain(note)}` : ""}${figureKey(after, svg, id)}`;
        const wide = Number(box[1]) / Number(box[2]) > 1.6;
        return { section: FIGURE_SECTIONS[id]?.[index] || "", html: `<figure class="figure journey-page${wide ? " is-wide" : ""}">${svg}<figcaption><strong>Fig. ${index + 1} |</strong> ${legend}</figcaption></figure>` };
    });
}

const articles = groups.flatMap((group) => group.ids.map((id) => {
    const text = articleText(group.source, id);
    const open = text.indexOf('<div class="quick-review-body">');
    if (open < 0) throw new Error(`No review for ${id}`);
    const body = clean(text.slice(open + '<div class="quick-review-body">'.length, text.lastIndexOf("</div>", text.indexOf("</dialog>", open))));
    const title = body.match(/<h3[^>]*>([\s\S]*?)<\/h3>/)[1];
    const split = body.indexOf("</aside>") + "</aside>".length;
    const top = body.slice(0, split).replace(/<p class="review-kicker">[^<]*<\/p>/, `<p class="kicker">${group.name}</p>`).replace(/<h3[^>]*>/, "<h2>").replace("</h3>", "</h2>");
    const figures = figuresFor(text, id);
    let columns = body.slice(split);
    // A figure for the first section goes above the columns, so it does not split them at the page top
    const firstSection = columns.match(/<h4>([\s\S]*?)<\/h4>/)[1];
    figures.forEach((figure) => {
        if (figure.section === firstSection) figure.section = "";
    });
    figures.filter((figure) => figure.section).forEach((figure) => {
        const heading = `<h4>${figure.section}</h4>`;
        if (!columns.includes(heading)) throw new Error(`${id}: no section ${figure.section}`);
        columns = columns.replace(heading, () => `${figure.html}${heading}`);
    });
    const lead = figures.filter((figure) => !figure.section).map((figure) => figure.html).join("");
    figureCount += figures.length;
    return { id, group: group.name, title, html: `<article id="review-${id}"${group.source === physiologyPage ? ' class="is-physiology"' : ""}>${top}${lead}<div class="columns">${columns}</div></article>` };
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
    .figure { display: flex; align-items: center; gap: 5mm; margin: 2mm 0 4mm; padding: 2.5mm 0; border-top: 0.6pt solid var(--accent); border-bottom: 0.6pt solid var(--accent); break-inside: avoid; column-span: all; }
    .figure svg { flex: 0 0 72mm; width: 72mm; height: auto; max-height: 66mm; }
    .figure.is-wide { display: block; }
    .figure.is-wide svg { display: block; width: 122mm; max-height: 62mm; margin: 0 auto 2mm; }
    .figure svg { overflow: visible; }
    .figure svg text { font-family: "Segoe UI", system-ui, sans-serif; }
    .is-physiology .figure { margin: 1mm 0 3mm; padding: 1.5mm 0; }
    .is-physiology .figure svg { flex-basis: 52mm; width: 52mm; max-height: 48mm; }
    .is-physiology .figure.is-wide { display: flex; }
    .is-physiology .figure.is-wide svg { flex-basis: 92mm; width: 92mm; max-height: 46mm; margin: 0; }
    .figure figcaption { color: #333b44; font: 8pt/1.35 "Segoe UI", system-ui, sans-serif; text-align: left; }
    .figure figcaption strong { color: var(--accent); }
    ${diagramStyles()}
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
console.log(`${OUTPUT}: ${articles.length} reviews, ${figureCount} figures, ${glossary.size} abbreviations`);
process.exit(0);
