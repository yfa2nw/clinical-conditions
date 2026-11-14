// Builds an organ system's review article PDF from the review popups on its physiology and clinical pages.
// Run from the project root only when the site owner asks: node tools/build-review-pdf.mjs [gi|neuro]
import { readFileSync } from "node:fs";
import { printPdf } from "./print-pdf.mjs";

// Which review section each diagram sits beside, in page order. Other reviews place theirs after Key points.
const GI_FIGURE_SECTIONS = {
    "gastric-secretion": ["", "Cephalic phase", "Gastric cells and the mucosal barrier", "Gastric cells and the mucosal barrier", "Receptors and intracellular pathways", "Pharmacology"],
    "emetic-center": ["Inputs", "Pharmacology"],
    "gi-embryology": ["Germ layers and regions", "Rotation and the pancreas"],
    "gut-immunity": ["Epithelial cells", "Peyer patches", "Pharmacology"],
    "enteric-nervous-system": ["Structure", "Motility patterns", "Pharmacology"],
    "digestion-absorption": ["", "Carbohydrates", "Proteins", "Fats", "Micronutrients"],
    "liver-function": ["Anatomy and histology", "Anatomy and histology", "Anatomy and histology", "Carbohydrate metabolism", "Bilirubin conjugation", "Channels", "Pharmacology"],
    "gi-pharm-acid": ["Suppressing acid"],
    "gi-pharm-hepatitis-bile": ["Hepatitis B and D"],
    "gi-pharm-nausea": ["The CTZ and the gut"],
    "gi-pharm-motility": ["Speeding the gut"],
    "gi-pharm-immune": ["Broad suppression"],
};

// For a diagram with no description on its page
const GI_FIGURE_LEGENDS = {
    "biliary-stones": "The gallbladder and biliary tree.",
};

const SYSTEMS = {
    gi: { name: "Gastrointestinal", accent: "#0f766e", soft: "#e2f1ee", dark: "#0a3a35", art: "#bfe7df", cover: { deep: "#041d1a", glow: "rgba(20, 184, 166, 0.55)", glow2: "rgba(245, 158, 11, 0.28)", art: "#9ff0de", hot: "#f5a524" }, reach: "from the esophagus to the appendix", sections: GI_FIGURE_SECTIONS, legends: GI_FIGURE_LEGENDS },
    neuro: { name: "Neurology", accent: "#4f46c8", soft: "#e9e8fb", dark: "#1b1a47", art: "#c9c6ff", cover: { deep: "#0d0b2b", glow: "rgba(124, 115, 255, 0.6)", glow2: "rgba(236, 72, 153, 0.25)", art: "#d4d0ff", hot: "#ff8fc7" }, reach: "from stroke to movement disorders", sections: {}, legends: {} },
};
const SYSTEM = process.argv[2] || "gi";
if (!SYSTEMS[SYSTEM]) throw new Error(`Unknown organ system: ${SYSTEM}`);
const { name: SYSTEM_NAME, accent: ACCENT, soft: SOFT, dark: DARK, art: ART, cover: COVER, reach: REACH, sections: FIGURE_SECTIONS, legends: FIGURE_LEGENDS } = SYSTEMS[SYSTEM];
const OUTPUT = `${SYSTEM}/${SYSTEM}-review-articles.pdf`;

/* ---------- Read the reviews in sidebar order ---------- */
const page = readFileSync(`${SYSTEM}/index.html`, "utf8");
const physiologyPage = readFileSync(`${SYSTEM}/physiology.html`, "utf8");
const articleText = (source, id) => {
    const start = source.indexOf(`<article class="condition-content`, source.indexOf(`data-condition="${id}"`));
    const at = source.indexOf(`id="${id}"`, start);
    // Cards inside a page are articles too, so end at the next condition article
    const next = source.indexOf('<article class="condition-content', at);
    return source.slice(at, next < 0 ? source.indexOf("<!-- Practice quiz", at) : next);
};

const physiologyIds = [...new Set([...physiologyPage.matchAll(/data-condition="([^"]+)"/g)].map((m) => m[1]))];
const clinicalGroups = [...page.matchAll(/<p class="group-label"[^>]*>([^<]+)<\/p>([\s\S]*?)<\/(?:div|nav|ul)>\s*<\/div>/g)]
    .map((m) => ({ name: m[1].replaceAll("&amp;", "&"), ids: [...m[2].matchAll(/data-condition="([^"]+)"/g)].map((c) => c[1]) }))
    .filter((group) => group.ids.length)
    .map((group) => ({ ...group, source: page }));
// Pharmacology pages sit on the physiology page but get their own group, after the special topics
const isPharmacology = (id) => id.startsWith(`${SYSTEM}-pharm`);
const groups = [
    { name: "Physiology", ids: physiologyIds.filter((id) => !isPharmacology(id)), source: physiologyPage },
    ...clinicalGroups,
    { name: "Pharmacology", ids: physiologyIds.filter(isPharmacology), source: physiologyPage },
].filter((group) => group.ids.length);

const glossary = new Map();
// An abbreviation can mean different things on different pages, such as V1, so each meaning is kept
const addDefinition = (term, definition) => {
    const list = glossary.get(term) || [];
    if (!list.some((d) => d.toLowerCase() === definition.toLowerCase())) list.push(definition);
    glossary.set(term, list);
};
let figureCount = 0;
function clean(html) {
    return html
        .replace(/<abbr [^>]*data-definition="([^"]*)"[^>]*>([\s\S]*?)<\/abbr>/g, (m, definition, text) => {
            if (/[A-Z].*[A-Z0-9]|^[a-z]+[A-Z]/.test(text) && !/ [a-z]/.test(text)) addDefinition(text, definition);
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
    const rules = ["shared/style.css", `${SYSTEM}/style.css`].flatMap((file) => topLevelRules(readFileSync(file, "utf8")));
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
function figureKey(after, svg, id, label = "") {
    const wanted = [...new Set([...svg.matchAll(/<g class="site-marker">[\s\S]*?<text[^>]*>([A-Z0-9]+)<\/text>/g)].map((m) => m[1]))].sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
    if (!wanted.length) return "";
    const section = after.slice(0, after.indexOf("</section>"));
    const found = new Map();
    for (const m of section.matchAll(/<span class="cause-number"[^>]*>([A-Z0-9]+)<\/span><span class="cause-text"><span class="cause-name">([\s\S]*?)<\/span><span class="cause-detail">/g)) {
        if (!found.has(m[1])) found.set(m[1], plain(m[2]));
    }
    // On a pharmacology page the drugs follow in later sections, so their headings are looked for down the page
    for (const m of after.matchAll(/<h5 class="drug-name"><span class="cause-number"[^>]*>(\d+)<\/span>([\s\S]*?)<\/h5>/g)) {
        if (!found.has(m[1])) found.set(m[1], plain(m[2].replace(/<span class="drug-examples">[\s\S]*?<\/span>/, "")));
    }
    for (const m of section.matchAll(/<h4 class="sc-heading">(\d+)\. ([\s\S]*?)<\/h4>/g)) {
        if (!found.has(m[1])) found.set(m[1], plain(m[2]));
    }
    // A legend that already names every numbered site, as in "1, the optic nerve", carries its own key
    const named = (n) => new RegExp(`(^|[\\s:;,(])${n}, `).test(label);
    const missing = wanted.filter((n) => !found.has(n) && !named(n));
    if (missing.length) throw new Error(`${id}: no key for diagram numbers ${missing.join(", ")}`);
    const keyed = wanted.filter((n) => found.has(n));
    return keyed.length ? ` ${keyed.map((n) => `${n}, ${found.get(n)}`).join("; ")}.` : "";
}

function figuresFor(text, id) {
    // Card icons, such as the lesion maps, are too small to print as figures
    const body = text.replace(/<dialog[\s\S]*?<\/dialog>/g, "").replace(/<figure class="lesion-map[\s\S]*?<\/figure>/g, "");
    return [...body.matchAll(/<svg\b[^>]*>[\s\S]*?<\/svg>/g)].map((m, index) => {
        const svg = m[0];
        const after = body.slice(m.index + svg.length);
        const box = svg.match(/viewBox="[-\d.]+ [-\d.]+ ([\d.]+) ([\d.]+)"/);
        const label = svg.match(/aria-label="([^"]+)"/)?.[1] || FIGURE_LEGENDS[id];
        if (!label) throw new Error(`${id}: diagram with no legend`);
        const note = after.match(/^<figcaption>([\s\S]*?)<\/figcaption>/)?.[1];
        const legend = `${label.replace(/\.?$/, ".")}${note && !note.startsWith("Numbers match") ? ` ${plain(note)}` : ""}${figureKey(after, svg, id, label)}`;
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
    const refs = text.match(/<section class="references"[^>]*>[\s\S]*?<ol>([\s\S]*?)<\/ol>/)?.[1].trim() || "";
    return { id, group: group.name, title, refs: clean(refs), html: `<article id="review-${id}"${group.source === physiologyPage ? ' class="is-physiology"' : ""}>${top}${lead}<div class="columns">${columns}</div></article>` };
}));

/* ---------- Cover ---------- */
// The cover reuses the organ system's drawing from the landing page, without labels or the moving signal
const landing = readFileSync("index.html", "utf8");
const panelStart = landing.indexOf(`<article class="world is-${SYSTEM}">`);
const coverArt = panelStart < 0 ? "" : landing.slice(landing.indexOf("<svg", panelStart), landing.indexOf("</svg>", panelStart) + 6)
    .replace(/ role="img" aria-label="[^"]*"/, ' aria-hidden="true"')
    .replace(/<text class="art-label[^"]*"[\s\S]*?<\/text>/g, "")
    .replace(/<path class="(?:gi-bolus|neuro-pulse)[^"]*"[^>]*\/>/g, "");
// The landing panel's one-line description becomes the cover's deck
const coverDeck = panelStart < 0 ? "" : (landing.slice(panelStart).match(/<div class="world-intro">[\s\S]*?<p>([^<]+)<\/p>/) || [, ""])[1];
// One bright point in the drawing: the bolus entering the stomach, or a firing neuron
const coverArtLit = coverArt
    .replace(/(<path class="gi-tube is-stomach"[^>]*\/>)/, '$1<circle class="cover-hot" cx="143" cy="118" r="11"/>')
    .replace(/<path class="neuro-soma"/, '<path class="neuro-soma is-hot"');

/* ---------- Page ---------- */
const contents = groups.map((group) => `<section class="toc-group"><h3>${group.name}</h3><ol>${articles.filter((a) => a.group === group.name).map((a) => `<li><a href="#review-${a.id}">${a.title}</a></li>`).join("")}</ol></section>`).join("");
const references = articles.filter((a) => a.refs).map((a) => `<div class="ref-group"><h3>${a.title}</h3><ol>${a.refs}</ol></div>`).join("");
const updated = new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" });
const terms = [...glossary].sort(([a], [b]) => a.localeCompare(b, "en", { sensitivity: "base" })).map(([term, definitions]) => `<p><strong>${term}</strong> ${definitions.join("; ")}</p>`).join("");

const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${SYSTEM_NAME} Review Articles</title><style>
    @page { size: A4; }
    :root { --accent: ${ACCENT}; --soft: ${SOFT}; --dark: ${DARK}; --art: ${ART}; --muted: #5b6470; --c-deep: ${COVER.deep}; --c-glow: ${COVER.glow}; --c-glow2: ${COVER.glow2}; --c-art: ${COVER.art}; --c-hot: ${COVER.hot}; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #1a1f24; font: 9.6pt/1.42 Georgia, "Times New Roman", serif; }
    h1, h2, h3, h4, .kicker, .cover p, nav a { font-family: "Segoe UI", system-ui, sans-serif; }
    a { color: inherit; text-decoration: none; }
    @page :first { margin: 0; }
    .cover { position: relative; width: 210mm; height: 297mm; overflow: hidden; color: #fff; break-after: page;
        background: radial-gradient(70% 55% at 88% 30%, var(--c-glow) 0%, transparent 62%), radial-gradient(60% 45% at 6% 96%, var(--c-glow2) 0%, transparent 65%), linear-gradient(170deg, var(--c-deep) 0%, #000 140%); }
    .cover-art { position: absolute; left: -22mm; top: 128mm; width: 252mm; transform: rotate(-8deg); transform-origin: 50% 50%; filter: drop-shadow(0 0 4mm var(--c-glow)); }
    .cover-art svg { display: block; width: 100%; height: auto; overflow: visible; }
    .cover-art .gi-mouth, .cover-art .gi-tube { fill: none; stroke: var(--c-art); stroke-linecap: round; stroke-width: 13; }
    .cover-art .gi-mouth { stroke-width: 5; }
    .cover-art .gi-tube.is-stomach { stroke-width: 28; }
    .cover-art .gi-tube.is-colon { stroke-dasharray: 22 4; stroke-linecap: butt; stroke-width: 24; }
    .cover-art .neuro-dendrite, .cover-art .neuro-axon { fill: none; stroke: var(--c-art); stroke-linecap: round; stroke-width: 2.5; }
    .cover-art .neuro-myelin { fill: none; stroke: var(--c-art); stroke-dasharray: 15 5; stroke-width: 8; opacity: 0.7; }
    .cover-art .neuro-bouton { fill: var(--c-deep); stroke: var(--c-art); stroke-width: 2.5; }
    .cover-art .neuro-soma { fill: var(--c-deep); stroke: var(--c-art); stroke-width: 3; }
    .cover-art .neuro-soma.is-hot { fill: var(--c-hot); stroke: var(--c-hot); filter: drop-shadow(0 0 3mm var(--c-hot)); }
    .cover-art .neuro-myelin-seg { fill: var(--c-deep); stroke: var(--c-art); stroke-width: 2; }
    .cover-art .neuro-hillock { fill: var(--c-deep); stroke: var(--c-art); stroke-width: 2; }
    .cover-art .neuro-ranvier, .cover-art .neuro-vesicle { fill: var(--c-art); }
    .cover-art .neuro-axis, .cover-art .neuro-threshold { fill: none; stroke: var(--c-art); stroke-width: 1.5; opacity: 0.4; }
    .cover-art .neuro-threshold { stroke-dasharray: 6 6; }
    .cover-art .neuro-trace { fill: none; stroke: var(--c-art); stroke-linecap: round; stroke-linejoin: round; stroke-width: 3; }
    .cover-art .neuro-post { fill: none; stroke: var(--c-art); stroke-linecap: round; stroke-width: 2.5; }
    .cover-art .neuro-transmitter { display: none; }
    .cover-art .cover-hot { fill: var(--c-hot); filter: drop-shadow(0 0 3mm var(--c-hot)); }
    .masthead { position: absolute; top: 15mm; left: 16mm; right: 16mm; display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 3.5mm; border-bottom: 0.7pt solid rgba(255, 255, 255, 0.55); }
    .masthead h1 { margin: 0; font: 400 50pt/0.86 Georgia, "Times New Roman", serif; letter-spacing: -0.025em; }
    .masthead h1 em { color: var(--c-art); font-style: italic; }
    .issue { margin: 0 0 1mm; font: 600 8pt/1.5 "Segoe UI", system-ui, sans-serif; letter-spacing: 0.14em; text-align: right; text-transform: uppercase; white-space: nowrap; }
    .issue span { display: block; color: var(--c-art); }
    .coverlines { position: absolute; top: 48mm; right: 16mm; width: 46mm; margin: 0; padding: 0; list-style: none; font: 8.5pt/1.3 "Segoe UI", system-ui, sans-serif; text-align: right; }
    .coverlines li { padding: 1.3mm 0; text-shadow: 0 0 2mm rgba(0, 0, 0, 0.6); border-bottom: 0.4pt solid rgba(255, 255, 255, 0.28); color: rgba(255, 255, 255, 0.86); }
    .coverlines li:first-child { color: var(--c-hot); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
    .headline { position: absolute; left: 16mm; bottom: 34mm; width: 128mm; }
    .headline .kicker { margin: 0 0 3mm; color: var(--c-hot); font: 700 8.5pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.18em; text-transform: uppercase; }
    .headline h2 { margin: 0 0 4mm; color: #fff; font: 700 46pt/0.95 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .headline p.deck { margin: 0; color: rgba(255, 255, 255, 0.88); font: italic 13pt/1.4 Georgia, "Times New Roman", serif; }
    .cover-base { position: absolute; left: 16mm; right: 16mm; bottom: 16mm; display: flex; justify-content: space-between; padding-top: 2.5mm; border-top: 0.4pt solid rgba(255, 255, 255, 0.35); color: rgba(255, 255, 255, 0.7); font: 7.5pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.04em; }
    .contents { break-before: page; counter-reset: review; }
    .toc-head { display: flex; justify-content: space-between; align-items: flex-end; margin: 0 0 6mm; padding-bottom: 3mm; border-bottom: 0.8pt solid #1a1f24; }
    .toc-head h1 { margin: 0; font: 400 34pt/0.9 Georgia, "Times New Roman", serif; letter-spacing: -0.02em; }
    .toc-head p { margin: 0 0 1mm; color: var(--accent); font: 700 8pt/1.5 "Segoe UI", system-ui, sans-serif; letter-spacing: 0.14em; text-align: right; text-transform: uppercase; }
    .toc-head p span { display: block; color: var(--muted); font-weight: 600; }
    .toc-groups { column-count: 2; column-gap: 9mm; }
    .toc-group { break-inside: avoid-column; margin-bottom: 4.5mm; }
    .contents h3 { margin: 0 0 1.5mm; padding-bottom: 1.2mm; border-bottom: 0.5pt solid var(--accent); color: var(--accent); font: 700 7.8pt "Segoe UI", system-ui, sans-serif; letter-spacing: 0.14em; text-transform: uppercase; break-after: avoid; }
    .contents ol { margin: 0; padding: 0; list-style: none; }
    .contents li { position: relative; margin: 0; padding: 1.1mm 0 1.1mm 8mm; border-bottom: 0.3pt solid #dfe4e8; font: 9pt/1.3 Georgia, "Times New Roman", serif; break-inside: avoid; counter-increment: review; }
    .contents li::before { content: counter(review); position: absolute; left: 0; top: 1.2mm; color: var(--accent); font: 700 8pt "Segoe UI", system-ui, sans-serif; }
    .contents li:last-child { border-bottom: 0; }
    article { break-before: page; }
    .kicker { display: flex; align-items: center; gap: 3mm; margin: 0 0 2.5mm; color: var(--accent); font-size: 7.8pt; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .kicker::after { content: ""; flex: 1; border-top: 0.6pt solid var(--accent); }
    h2 { margin: 0 0 3.5mm; font: 400 21pt/1.12 Georgia, "Times New Roman", serif; letter-spacing: -0.01em; }
    .review-abstract { margin: 0 0 4mm; padding-bottom: 3.5mm; border-bottom: 0.6pt solid var(--accent); font-weight: 700; }
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
    .references { break-before: page; column-count: 2; column-gap: 7mm; }
    .terms > h1 { column-span: all; margin: 0 0 5mm; padding-bottom: 2.5mm; border-bottom: 0.8pt solid #1a1f24; font: 400 26pt/1 Georgia, "Times New Roman", serif; }
    .references > h1 { column-span: all; margin: 0 0 5mm; padding-bottom: 2.5mm; border-bottom: 0.8pt solid #1a1f24; font: 400 26pt/1 Georgia, "Times New Roman", serif; }
    .references h3 { margin: 3mm 0 1mm; color: var(--accent); font-size: 9pt; line-height: 1.25; break-after: avoid; }
    .references ol { margin: 0; padding-left: 5mm; }
    .references li { margin-bottom: 1mm; font-size: 7.6pt; line-height: 1.3; break-inside: avoid; }
    .references a { color: var(--accent); }
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
        <div class="cover-art">${coverArtLit}</div>
        <header class="masthead">
            <h1>Clinical <em>Conditions</em></h1>
            <p class="issue">Review articles<span>Last updated ${updated}</span></p>
        </header>
        <ul class="coverlines">
            <li>Inside</li>
            ${groups.map((group) => `<li>${group.name}</li>`).join("")}
        </ul>
        <div class="headline">
            <p class="kicker">${REACH.charAt(0).toUpperCase() + REACH.slice(1)}</p>
            <h2>${SYSTEM_NAME}</h2>
            <p class="deck">${coverDeck}</p>
        </div>
        <div class="cover-base"><span>For educational use only. This is a study aid, not a clinical reference.</span></div>
    </section>
    <nav class="contents"><header class="toc-head"><h1>Contents</h1><p>${SYSTEM_NAME} review articles<span>Last updated ${updated}</span></p></header><div class="toc-groups">${contents}</div></nav>
    ${articles.map((a) => a.html).join("\n")}
    <section class="terms"><h1>Abbreviations</h1>${terms}</section>
    ${references ? `<section class="references"><h1>References</h1>${references}</section>` : ""}
</body></html>`;

await printPdf(html, OUTPUT, `Clinical Conditions · ${SYSTEM_NAME} review articles`);
console.log(`${OUTPUT}: ${articles.length} reviews, ${figureCount} figures, ${glossary.size} abbreviations`);
process.exit(0);
