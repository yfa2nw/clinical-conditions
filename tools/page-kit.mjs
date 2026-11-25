// Building blocks for drafting a condition page: the markup of the model pages (Osteoarthritis,
// Asthma, and Aortic stenosis). A draft script outside the project imports these, calls
// writePage() once, and is then thrown away: after that the HTML is the source, edited by hand,
// and writePage() refuses a page that is no longer a placeholder.
import fs from "node:fs";
export const abbrWith = (DEF) => {
    const keys = Object.keys(DEF).sort((a, b) => b.length - a.length).map((k) => k.replace(/[-+]/g, "\\$&"));
    const re = new RegExp(`(?<![\\w-]|(?:[Tt]ypes?|[Cc]lass|[Gg]rade|[Ss]tage|Rome|Borrmann|[Aa]ngiotensin|[Tt]opoisomerase|[Ff]actor) |III[–-])(${keys.join("|")})(?![\\w]|-\\d)`, "g");
    return (html) => {
        let skip = 0;
        return html.split(/(<[^>]+>)/).map((x) => {
            if (x.startsWith("<")) { if (/^<(thead|svg|button|a|h2|h3)\b/.test(x)) skip += 1; if (/^<\/(thead|svg|button|a|h2|h3)>/.test(x)) skip -= 1; return x; }
            return skip ? x : x.replace(re, (m) => `<abbr class="term" tabindex="0" data-definition="${DEF[m]}">${m}</abbr>`);
        }).join("");
    };
};
const li = (n, name, detail) => `<li><span class="cause-number" aria-hidden="true">${n}</span><span class="cause-text"><span class="cause-name">${name}</span><span class="cause-detail">${detail}</span></span></li>`;
export const causes = (rows, two) => `<ul class="cause-list${two ? " is-two-column" : ""}">\n${rows.map((r) => (Array.isArray(r) ? li(...r) : `<li class="cause-group">${r}</li>`)).join("\n")}\n</ul>`;
export const path = (rows) => `<ol class="pathway">\n${rows.map(([t, d]) => `<li><span class="pathway-title">${t}</span><span class="pathway-detail">${d}</span></li>`).join("\n")}\n</ol>`;
export const pairs = (rows) => `<ul class="pair-list">\n${rows.map(([a, b]) => `<li><span class="pair-from">${a}</span><span class="pair-arrow" aria-hidden="true"></span><span class="pair-to">${b}</span></li>`).join("\n")}\n</ul>`;
export const table = (head, rows) => `<div class="table-wrap"><table class="data-table compare-table"><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>\n${rows.map(([a, ...b]) => `<tr><th scope="row">${a}</th>${b.map((x) => `<td>${x}</td>`).join("")}</tr>`).join("\n")}\n</tbody></table></div>`;
export const sub = (h, html) => `<div class="subsection">\n<h4 class="sc-heading">${h}</h4>\n${html}\n</div>`;
export const chips = (xs) => `<ul class="chip-list">${xs.map((x) => `<li>${x}</li>`).join("")}</ul>`;
export const grid = (rows) => `<ul class="complication-grid">\n${rows.map(([a, b]) => `<li><span class="cause-name">${a}</span><span class="cause-detail">${b}</span></li>`).join("\n")}\n</ul>`;
export const goals = (rows) => `<div class="goal-grid">\n${rows.map(([h, xs]) => `<div class="goal"><h5>${h}</h5><ul>${xs.map((x) => `<li>${x}</li>`).join("")}</ul></div>`).join("\n")}\n</div>`;
export const note = (b, t) => `<p class="note"><strong>${b}</strong> ${t}</p>`;
export const go = (id, t) => `<button type="button" class="link-button" data-goto="${id}">${t}</button>`;
export const map = (svg, list) => `<div class="etiology-map">\n<figure class="cause-map">${svg}</figure>\n${list}\n</div>`;
export const wide = (svg) => `<figure class="cause-map is-wide">${svg}</figure>`;
export const up = '<span class="change up">Increased</span>', down = '<span class="change down">Decreased</span>', flat = '<span class="change flat">Normal</span>';
export const mark = (n, x, y) => `<g class="site-marker"><circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y + 4.5}">${n}</text></g>`;
const url = (id) => (id.startsWith("NBK") ? `https://www.ncbi.nlm.nih.gov/books/${id}/` : id.startsWith("PMC") ? `https://pmc.ncbi.nlm.nih.gov/articles/${id}/` : `https://pubmed.ncbi.nlm.nih.gov/${id.slice(5)}/`);
const a = (id) => `<a href="${url(id)}" target="_blank" rel="noopener">${id}</a>`;
export const refList = (REF) => REF.map((r) => (typeof r === "string" ? r : r.length === 2 ? `${r[0]} In: <em>StatPearls</em>. StatPearls Publishing. ${a(r[1])}` : `${r[0]} <em>${r[1]}</em>. ${r[2]}. ${a(r[3])}`)).map((x) => `                        <li>${x}</li>`).join("\n");
// Writes a page in place: S is { heading: html }, see/phys/ext are Related targets
export function writePage({ site, id, S, abbr, refs, see = [], phys = [], ext = [], aliases }) {
    const file = `${site}/index.html`, html = fs.readFileSync(file, "utf8").replace(/\r\n/g, "\n"), ph = fs.existsSync(`${site}/physiology.html`) ? fs.readFileSync(`${site}/physiology.html`, "utf8") : "";
    const title = (src, x) => { const i = src.indexOf(`id="${x}"`); if (i < 0) throw new Error(x); return src.slice(i).match(/<h2>([^<]+)/)[1]; };
    const links = [...see.map((x) => `                    ${go(x, title(html, x))}`), ...phys.map((x) => `                    <a class="link-button" href="physiology.html#${x}">${title(ph, x)}</a>`), ...ext.map(([f, x]) => `                    <a class="link-button" href="../${f}#${x}">${title(fs.readFileSync(f, "utf8"), x)}</a>`)].join("\n");
    const i = html.search(new RegExp(` *<article class="condition-content[^"]*" id="${id}"`)), open = html.slice(i).match(/^.*\n *<h2>.*\n/)[0];
    const next = html.indexOf('<article class="condition-content', i + open.length), n = next < 0 ? html.length : next, end = html.lastIndexOf("</article>", n) + "</article>\n".length;
    if (!html.slice(i, end).includes("pending-content")) throw new Error(`${id} is already written; edit its HTML instead`);
    if (html.slice(i, end).includes("<dialog")) throw new Error("has a review article");
    const out = `${open}${Object.entries(S).map(([h, b]) => `\n                <section class="content-section">\n                    <h3>${h}</h3>\n${abbr(b)}\n                </section>\n`).join("")}\n                <p class="see-also">\n                    Related:\n${links}\n                </p>\n\n                <section class="references" aria-label="References">\n                    <h3>References</h3>\n                    <ol>\n${refs}\n                    </ol>\n                </section>\n            </article>\n`;
    fs.writeFileSync(file, html.slice(0, i) + out + html.slice(end));
    // Landing progress
    let done = 0, all = 0;
    for (const f of [file, `${site}/physiology.html`]) if (fs.existsSync(f)) for (const p of fs.readFileSync(f, "utf8").split('<article class="condition-content').slice(1)) { all += 1; if (!p.includes("pending-content")) done += 1; }
    let home = fs.readFileSync("index.html", "utf8"); const s = home.indexOf(`world is-${site}"`), e = home.indexOf("</article>", s);
    home = home.slice(0, s) + home.slice(s, e).replace(/\d+ of \d+ topics written/, `${done} of ${all} topics written`) + home.slice(e); fs.writeFileSync("index.html", home);
}

// Formulas with a fraction, as MathML (built into browsers). Text goes in mtext, which can hold
// an abbr tooltip; a single-letter variable goes in v("U"), with a subscript as v("U", "Na").
export const txt = (s) => `<mtext>${s}</mtext>`;
export const v = (a, b) => (b ? `<msub><mi>${a}</mi><mtext>${b}</mtext></msub>` : `<mi>${a}</mi>`);
export const op = (o) => `<mo lspace="0.25em" rspace="0.25em">${o}</mo>`;
export const num = (n) => `<mn>${n}</mn>`;
export const frac = (a, b) => `<mfrac><mrow>${a}</mrow><mrow>${b}</mrow></mfrac>`;
export const paren = (x) => `<mrow><mo>(</mo>${x}<mo>)</mo></mrow>`;
export const math = (x) => `<math class="formula-math">${x}</math>`;
