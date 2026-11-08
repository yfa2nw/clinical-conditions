// Checks the whole site: question banks, markup, and every page at desktop and phone widths.
// Run from the project root: node tools/check-site.mjs
// Add --shots <folder> to save a full-page screenshot of every page at desktop width,
// and --only <id,id> to limit the screenshots to those articles.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import vm from "node:vm";

const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const SITES = ["gi", "neuro", "renal", "endocrine"];
const PROGRESS_SITES = ["neuro", "renal", "endocrine"];
const PAGES = ["gi/index.html", "gi/physiology.html", "neuro/index.html", "neuro/physiology.html", "renal/index.html", "renal/physiology.html", "endocrine/index.html"];
const shotsAt = process.argv.indexOf("--shots");
const shotsFolder = shotsAt > 0 ? process.argv[shotsAt + 1] : null;
const onlyAt = process.argv.indexOf("--only");
const onlyIds = onlyAt > 0 ? new Set(process.argv[onlyAt + 1].split(",")) : null;

const problems = [];
const notes = [];
const fail = (message) => problems.push(message);

/* ---------- Files ---------- */
function checkMarkup(file) {
    const html = readFileSync(file, "utf8");
    for (const tag of ["div", "section", "article", "table", "tr", "td", "ul", "ol", "li", "p", "span", "figure", "dialog", "abbr", "button"]) {
        const opened = (html.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length;
        const closed = (html.match(new RegExp(`</${tag}>`, "g")) || []).length;
        if (opened !== closed) fail(`${file}: ${opened} <${tag}> but ${closed} closing tags`);
    }
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    const repeats = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
    if (repeats.length) fail(`${file}: duplicate ids: ${repeats.join(", ")}`);
    if (/<abbr\b[^>]*>(?:(?!<\/abbr>)[\s\S])*?<abbr\b/.test(html)) fail(`${file}: nested <abbr>`);
    if (/@@|\[\[|\$[12]\b/.test(html.replace(/<script[\s\S]*?<\/script>/g, ""))) fail(`${file}: leftover template text`);
    if (/\sstyle="/.test(html.replace(/<svg[\s\S]*?<\/svg>/g, ""))) fail(`${file}: inline style`);
}

function checkQuestions(site, page = "index.html", bank = "questions.js") {
    const html = readFileSync(`${site}/${page}`, "utf8");
    const articles = [...html.matchAll(/<article class="condition-content[^"]*" id="([^"]+)"/g)].map((m) => m[1]);
    const questions = vm.runInNewContext(`${readFileSync(`${site}/${bank}`, "utf8")};QUIZ_QUESTIONS`);
    const seen = new Set();
    for (const q of questions) {
        if (seen.has(q.id)) fail(`${site}: duplicate question ${q.id}`);
        seen.add(q.id);
        if (q.options.length !== 5 || new Set(q.options).size !== 5) fail(`${site}/${q.id}: needs five distinct options`);
        if (!(q.answer >= 0 && q.answer <= 4)) fail(`${site}/${q.id}: bad answer index`);
        if (![1, 2].includes(q.step)) fail(`${site}/${q.id}: bad step`);
        if (!articles.includes(q.condition)) fail(`${site}/${q.id}: no article ${q.condition}`);
        if (q.notes && q.answer in q.notes) fail(`${site}/${q.id}: note on the correct answer`);
    }
    // Chance is about 20%; well above that, picking the longest option becomes a way to guess
    const longest = questions.filter((q) => q.options[q.answer].length >= Math.max(...q.options.map((option) => option.length))).length;
    const longestShare = questions.length ? Math.round((longest / questions.length) * 100) : 0;
    if (longestShare > 30) fail(`${site}: the correct option is the longest in ${longestShare}% of questions`);
    return { articles: articles.length, questions: questions.length, longestShare };
}

const counts = {};
for (const site of SITES) counts[site] = checkQuestions(site);
const physiology = checkQuestions("gi", "physiology.html", "physiology-questions.js");
for (const file of PAGES) {
    checkMarkup(file);
    // Links between a system's pages are plain links, so check that they land on an article
    const folder = file.slice(0, file.indexOf("/"));
    for (const m of readFileSync(file, "utf8").matchAll(/href="([a-z-]+\.html)#([^"]+)"/g)) {
        const target = `${folder}/${m[1]}`;
        if (!existsSync(target) || !readFileSync(target, "utf8").includes(`id="${m[2]}"`)) fail(`${file}: broken link to ${m[1]}#${m[2]}`);
    }
}
const landing = readFileSync("index.html", "utf8");
for (const m of landing.matchAll(/href="([^"#]+)"/g)) {
    if (!/^(https?:|\.\.)/.test(m[1]) && !existsSync(m[1])) fail(`index.html: broken link ${m[1]}`);
}
const stat = (word) => +(landing.match(new RegExp(`<strong>(\\d+)</strong> ${word}`)) || [])[1];
if (stat("conditions") !== counts.gi.articles || stat("questions") !== counts.gi.questions) {
    fail(`index.html: says ${stat("conditions")} conditions and ${stat("questions")} questions, but GI has ${counts.gi.articles} and ${counts.gi.questions}`);
}
// Each panel other than GI shows its topic and group counts and a progress chain
for (const site of PROGRESS_SITES) {
    const start = landing.indexOf(`<article class="world is-${site}">`);
    if (start < 0) { fail(`index.html: no panel for ${site}`); continue; }
    const panel = landing.slice(start, landing.indexOf("</article>", start));
    const siteHtml = readFileSync(`${site}/index.html`, "utf8");
    const groups = (siteHtml.match(/class="station"/g) || []).length;
    const pages = siteHtml.split(/<article class="condition-content[ "]/).slice(1);
    const done = pages.filter((page) => !page.includes("pending-content")).length;
    const panelStat = (word) => +(panel.match(new RegExp(`<strong>(\\d+)</strong> ${word}`)) || [])[1];
    const written = panel.match(/(\d+) of (\d+) topics written/) || [];
    const cells = (panel.match(/class="progress-cell/g) || []).length;
    const litCells = (panel.match(/progress-cell is-done/g) || []).length;
    if (panelStat("groups") !== groups || +written[1] !== done || +written[2] !== pages.length || panelStat("topics") !== pages.length || cells !== pages.length || litCells !== done) {
        fail(`index.html: ${site} progress is out of date; ${done} of ${pages.length} topics are written, in ${groups} groups`);
    }
}

/* ---------- Browser ---------- */
const folder = mkdtempSync(join(tmpdir(), "site-check-"));
const port = 9400 + Math.floor(Math.random() * 400);
const browser = spawn(EDGE, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`, `--user-data-dir=${join(folder, "profile")}`, "--window-size=1440,900", "about:blank"]);
process.on("exit", () => browser.kill());
const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

let targets;
for (let i = 0; i < 60 && !targets; i += 1) {
    try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(200); }
}
const socket = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((done) => socket.addEventListener("open", done));

let nextId = 0;
let pageErrors = [];
const waiting = new Map();
socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (waiting.has(message.id)) { waiting.get(message.id)(message); waiting.delete(message.id); }
    if (message.method === "Runtime.exceptionThrown") pageErrors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
    if (message.method === "Log.entryAdded" && message.params.entry.level === "error" && (message.params.entry.url || "").startsWith("file:")) pageErrors.push(message.params.entry.text);
});
const send = (method, params = {}) => new Promise((done) => {
    nextId += 1;
    waiting.set(nextId, done);
    socket.send(JSON.stringify({ id: nextId, method, params }));
});
const run = async (expression) => {
    const reply = await send("Runtime.evaluate", { expression, returnByValue: true });
    if (reply.result?.exceptionDetails) fail(`script error: ${reply.result.exceptionDetails.exception?.description}`);
    return reply.result?.result?.value;
};
const open = async (path) => { await send("Page.navigate", { url: pathToFileURL(resolve(path)).href }); await sleep(1300); };

await send("Runtime.enable");
await send("Log.enable");
await send("Page.enable");

const inspect = (id) => `(() => {
    const article = document.getElementById(${JSON.stringify(id)});
    const out = { active: article.classList.contains("active"), overflow: contentPanel.scrollWidth > contentPanel.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth + 1, dead: [] };
    out.dead = [...article.querySelectorAll("[data-goto]")].filter((link) => !document.getElementById(link.dataset.goto)).map((link) => link.dataset.goto);
    out.pending = article.querySelectorAll(".pending-content").length;
    const dialog = article.querySelector("dialog.quick-review");
    out.review = !!dialog;
    out.references = !!article.querySelector(":scope > .references");
    if (dialog) {
        const opener = article.querySelector(".quick-review-open");
        out.opener = !!opener;
        if (opener) {
            opener.click();
            out.opened = dialog.open;
            out.reviewOverflow = dialog.scrollWidth > dialog.clientWidth + 1;
            dialog.querySelector(".quick-review-close")?.click();
            out.closed = !dialog.open;
            if (dialog.open) dialog.close();
        }
    }
    return JSON.stringify(out);
})()`;

for (const [view, width, height, scheme] of [["desktop", 1440, 900, "light"], ["phone", 390, 844, "dark"]]) {
    await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 600 });
    await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: scheme }, { name: "prefers-reduced-motion", value: "reduce" }] });

    await open("index.html");
    if (pageErrors.length) fail(`${view} landing: ${pageErrors.join("; ")}`);
    pageErrors = [];

    for (const file of PAGES) {
        const site = file.replace("/index.html", "").replace(".html", "");
        await open(file);
        const ids = JSON.parse(await run(`JSON.stringify(conditionContents.map((article) => article.id))`));
        for (const id of ids) {
            await run(`location.hash = ${JSON.stringify(id)}; 1`);
            await sleep(150);
            const where = `${view} ${site}#${id}`;
            const answer = await run(inspect(id));
            if (!answer) { fail(`${where}: could not be inspected`); continue; }
            const r = JSON.parse(answer);
            if (!r.active) fail(`${where}: did not open`);
            if (r.overflow) fail(`${where}: page overflows sideways`);
            if (r.review && (!r.opener || !r.opened || !r.closed)) fail(`${where}: review popup did not open and close`);
            if (r.reviewOverflow) fail(`${where}: review popup overflows sideways`);
            if (view === "desktop") {
                r.dead.forEach((target) => notes.push(`${site}#${id}: link waits for a page that does not exist yet (${target})`));
                if (!r.pending && !r.review) notes.push(`${site}#${id}: finished page with no review article`);
                if (!r.pending && !r.references) notes.push(`${site}#${id}: finished page with no references`);
            }
            if (pageErrors.length) { fail(`${where}: ${pageErrors.join("; ")}`); pageErrors = []; }
        }
        const quiz = await run(`(() => { if (typeof QUIZ_QUESTIONS === "undefined" || !QUIZ_QUESTIONS.length) return "none"; location.hash = "quiz"; return "ok"; })()`);
        if (quiz === "ok") {
            await sleep(200);
            await run(`quizView.querySelector("form").requestSubmit(); 1`);
            await sleep(250);
            if (!(await run(`!!document.querySelector(".vignette")`))) fail(`${view} ${site}: quiz did not start`);
        }
    }
}

if (shotsFolder) {
    mkdirSync(shotsFolder, { recursive: true });
    await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: "light" }, { name: "prefers-reduced-motion", value: "reduce" }] });
    for (const file of PAGES) {
        const site = file.replace("/index.html", "").replace(".html", "").replace("/", "-");
        await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
        await open(file);
        const ids = JSON.parse(await run(`JSON.stringify(conditionContents.map((article) => article.id))`));
        for (const id of ids.filter((each) => !onlyIds || onlyIds.has(each))) {
            await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
            await run(`location.hash = ${JSON.stringify(id)}; 1`);
            await sleep(200);
            const full = await run(`contentPanel.scrollHeight + 60`);
            await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: full, deviceScaleFactor: 1, mobile: false });
            await sleep(250);
            const image = await send("Page.captureScreenshot", { format: "png" });
            writeFileSync(join(shotsFolder, `${site}-${id}.png`), Buffer.from(image.result.data, "base64"));
        }
    }
}

socket.close();

/* ---------- Report ---------- */
for (const site of SITES) console.log(`${site}: ${counts[site].articles} pages, ${counts[site].questions} questions, correct option longest in ${counts[site].longestShare}%`);
console.log(`gi physiology: ${physiology.articles} pages, ${physiology.questions} questions, correct option longest in ${physiology.longestShare}%`);
if (notes.length) console.log(`\nNotes:\n${[...new Set(notes)].map((n) => `  ${n}`).join("\n")}`);
if (problems.length) {
    console.log(`\n${problems.length} problem(s):\n${problems.map((p) => `  ${p}`).join("\n")}`);
    process.exit(1);
}
console.log("\nAll checks passed.");
process.exit(0);
