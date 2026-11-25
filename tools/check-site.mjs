// Checks the whole site: question banks, markup, and every page at desktop and phone widths.
// Run from the project root: node tools/check-site.mjs
// Add --shots <folder> to save a full-page screenshot of every page at desktop width,
// and --only <id,id> to limit the screenshots to those articles.
// Add --site <folder,folder> to open only those systems in the browser; every file is still checked.
// Pages are opened in several tabs at once; set TABS=<n> to change how many.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { availableParallelism, tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import vm from "node:vm";

const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const SITES = ["gi", "neuro", "foundations", "msk", "resp", "cardio", "renal", "endocrine", "review"];
const PROGRESS_SITES = ["gi", "neuro", "foundations", "msk", "resp", "cardio", "renal", "endocrine", "review"];
const PAGES = ["gi/index.html", "gi/physiology.html", "neuro/index.html", "neuro/physiology.html", "foundations/index.html", "msk/index.html", "msk/physiology.html", "resp/index.html", "resp/physiology.html", "cardio/index.html", "cardio/physiology.html", "renal/index.html", "renal/physiology.html", "endocrine/index.html", "endocrine/physiology.html", "review/index.html"];
const shotsAt = process.argv.indexOf("--shots");
const shotsFolder = shotsAt > 0 ? process.argv[shotsAt + 1] : null;
const onlyAt = process.argv.indexOf("--only");
const onlyIds = onlyAt > 0 ? new Set(process.argv[onlyAt + 1].split(",")) : null;

const siteAt = process.argv.indexOf("--site");
const onlySites = siteAt > 0 ? new Set(process.argv[siteAt + 1].split(",")) : null;
const unknown = onlySites ? [...onlySites].filter((site) => !SITES.includes(site)) : [];
if (unknown.length) { console.log(`No such system: ${unknown.join(", ")}`); process.exit(1); }
const TABS = +process.env.TABS || Math.max(2, Math.min(8, Math.floor(availableParallelism() / 2)));

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
    // A page folded into another lives on as an alias, and its questions wait for the page to be finished
    const folded = [...html.matchAll(/<article class="condition-content[^>]* data-aliases="([^"]+)"/g)].flatMap((m) => m[1].split(" "))
        // Pages set aside for another system keep their questions too
        .concat(existsSync(`${site}/stash`) ? readdirSync(`${site}/stash`).map((f) => f.replace(".html", "")) : []);
    const questions = vm.runInNewContext(`${readFileSync(`${site}/${bank}`, "utf8")};QUIZ_QUESTIONS`);
    const seen = new Set();
    let unexplained = 0;
    for (const q of questions) {
        if (seen.has(q.id)) fail(`${site}: duplicate question ${q.id}`);
        seen.add(q.id);
        if (q.options.length !== 5 || new Set(q.options).size !== 5) fail(`${site}/${q.id}: needs five distinct options`);
        if (!(q.answer >= 0 && q.answer <= 4)) fail(`${site}/${q.id}: bad answer index`);
        if (!["memory", "reasoning", "analysis"].includes(q.kind)) fail(`${site}/${q.id}: kind must be memory, reasoning, or analysis`);
        if ("step" in q || "difficulty" in q) fail(`${site}/${q.id}: "step" and "difficulty" were replaced by "kind"`);
        if (!articles.includes(q.condition) && !folded.includes(q.condition)) fail(`${site}/${q.id}: no article ${q.condition}`);
        if (q.notes && q.answer in q.notes) fail(`${site}/${q.id}: note on the correct answer`);
        // Every wrong option needs a note; older questions are still being brought up to this
        if ([0, 1, 2, 3, 4].some((i) => i !== q.answer && !(q.notes && q.notes[i]))) unexplained += 1;
    }
    // Questions sharing a passage: one passage, on the first question, all on one page
    const sets = new Map();
    for (const q of questions) if (q.set) sets.set(q.set, [...(sets.get(q.set) || []), q]);
    for (const [name, members] of sets) {
        if (members.length < 2) fail(`${site}: set ${name} has only one question`);
        if (!members[0].passage || members.slice(1).some((q) => q.passage)) fail(`${site}: set ${name} needs its passage on the first question only`);
        if (new Set(members.map((q) => q.condition)).size > 1) fail(`${site}: set ${name} spans more than one page`);
    }
    for (const q of questions) if (q.passage && !q.set) fail(`${site}/${q.id}: a passage belongs to a set`);
    if (unexplained) notes.push(`${site} ${bank}: ${unexplained} of ${questions.length} questions still lack a note on every wrong option`);
    // Chance is about 20%; well above that, picking the longest option becomes a way to guess
    const longest = questions.filter((q) => q.options[q.answer].length >= Math.max(...q.options.map((option) => option.length))).length;
    const longestShare = questions.length ? Math.round((longest / questions.length) * 100) : 0;
    if (longestShare > 30) fail(`${site}: the correct option is the longest in ${longestShare}% of questions`);
    // Quizzes of pages on hold are hidden, so the landing page leaves them out
    const held = new Set([...html.matchAll(/<article class="condition-content[^"]*" id="([^"]+)" data-on-hold/g)].map((m) => m[1]));
    return { articles: articles.length, questions: questions.length, shown: questions.filter((q) => articles.includes(q.condition) && !held.has(q.condition)).length, longestShare };
}

const counts = {};
for (const site of SITES) counts[site] = checkQuestions(site);
// A system with a physiology page adds its topics and questions to the landing counts
const physiology = {};
for (const site of SITES) physiology[site] = existsSync(`${site}/physiology.html`) ? checkQuestions(site, "physiology.html", "physiology-questions.js") : { articles: 0, questions: 0, shown: 0 };
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
// Each panel shows its topic and question counts; each unfinished panel also says how many are written
for (const site of SITES) {
    const start = landing.indexOf(`<article class="world is-${site}">`);
    if (start < 0) { fail(`index.html: no panel for ${site}`); continue; }
    const panel = landing.slice(start, landing.indexOf("</article>", start));
    const panelStat = (word) => +(panel.match(new RegExp(`<strong>(\\d+)</strong> ${word}`)) || [])[1];
    const topics = counts[site].articles + physiology[site].articles;
    const questions = counts[site].shown + physiology[site].shown;
    if (panelStat("topics") !== topics || panelStat("questions") !== questions) {
        fail(`index.html: ${site} says ${panelStat("topics")} topics and ${panelStat("questions")} questions, but has ${topics} and ${questions}`);
    }
    if (!PROGRESS_SITES.includes(site)) continue;
    const pages = ["index.html", "physiology.html"].filter((page) => existsSync(`${site}/${page}`))
        .flatMap((page) => readFileSync(`${site}/${page}`, "utf8").split(/<article class="condition-content[ \"]/).slice(1));
    const done = pages.filter((page) => !page.includes("pending-content")).length;
    const written = panel.match(/(\d+) of (\d+) topics written/) || [];
    if (+written[1] !== done || +written[2] !== pages.length) {
        fail(`index.html: ${site} progress is out of date; ${done} of ${pages.length} topics are written`);
    }
}

/* ---------- Browser ---------- */
const folder = mkdtempSync(join(tmpdir(), "site-check-"));
const port = 9400 + Math.floor(Math.random() * 400);
const browser = spawn(EDGE, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`, `--user-data-dir=${join(folder, "profile")}`, "--window-size=1440,900", "--disable-background-timer-throttling", "--disable-renderer-backgrounding", "--disable-backgrounding-occluded-windows", "about:blank"]);
process.on("exit", () => browser.kill());
const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

let endpoint;
for (let i = 0; i < 60 && !endpoint; i += 1) {
    try { endpoint = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json(); } catch { await sleep(100); }
}
if (!endpoint) { console.log("Edge did not start."); process.exit(1); }

// One browser tab, driven over its own connection
async function openTab() {
    const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
    const socket = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((done) => socket.addEventListener("open", done));
    let nextId = 0;
    let loaded = null;
    const waiting = new Map();
    const tab = { errors: [] };
    socket.addEventListener("message", (event) => {
        const message = JSON.parse(event.data);
        if (waiting.has(message.id)) { waiting.get(message.id)(message); waiting.delete(message.id); }
        if (message.method === "Page.loadEventFired" && loaded) loaded(true);
        if (message.method === "Runtime.exceptionThrown") tab.errors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
        if (message.method === "Log.entryAdded" && message.params.entry.level === "error" && (message.params.entry.url || "").startsWith("file:")) tab.errors.push(message.params.entry.text);
    });
    tab.send = (method, params = {}) => new Promise((done) => {
        nextId += 1;
        waiting.set(nextId, done);
        socket.send(JSON.stringify({ id: nextId, method, params }));
    });
    tab.run = async (expression) => {
        const reply = await tab.send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
        if (reply.result?.exceptionDetails) fail(`script error: ${reply.result.exceptionDetails.exception?.description}`);
        return reply.result?.result?.value;
    };
    tab.open = async (path) => {
        const load = new Promise((done) => { loaded = done; });
        await tab.send("Page.navigate", { url: pathToFileURL(resolve(path)).href });
        if (!(await Promise.race([load, sleep(15000)]))) fail(`${path}: did not load in 15 seconds`);
        await sleep(150);
    };
    tab.settle = async ({ width, height, scheme }) => {
        await tab.send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 600 });
        await tab.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: scheme }, { name: "prefers-reduced-motion", value: "reduce" }] });
    };
    tab.takeErrors = () => tab.errors.splice(0).join("; ");
    await tab.send("Runtime.enable");
    await tab.send("Log.enable");
    await tab.send("Page.enable");
    return tab;
}

// Waits inside the page until a condition holds, then lets two frames draw; gives up after 3 seconds
const READY = (condition) => `new Promise((done) => {
    const started = performance.now();
    const settle = () => { const end = setTimeout(done, 120, true); requestAnimationFrame(() => requestAnimationFrame(() => { clearTimeout(end); done(true); })); };
    const look = () => { if (${condition}) settle(); else if (performance.now() - started > 3000) done(false); else setTimeout(look, 8); };
    look();
})`;
const goTo = (tab, id) => tab.run(`(location.hash = ${JSON.stringify(id)}, ${READY(`document.getElementById(${JSON.stringify(id)}).classList.contains("active")`)})`);

// Runs the jobs across several tabs at once
async function inTabs(jobs, work) {
    const queue = [...jobs];
    await Promise.all(Array.from({ length: Math.min(TABS, jobs.length) }, async () => {
        const tab = await openTab();
        for (let job = queue.shift(); job; job = queue.shift()) await work(tab, job);
    }));
}

const inspect = (id) => `(() => {
    const article = document.getElementById(${JSON.stringify(id)});
    const out = { active: article.classList.contains("active"), overflow: contentPanel.scrollWidth > contentPanel.clientWidth + 1 || document.documentElement.scrollWidth > innerWidth + 1, dead: [] };
    out.dead = [...article.querySelectorAll("[data-goto]")].filter((link) => !document.getElementById(link.dataset.goto)).map((link) => link.dataset.goto);
    out.pending = article.querySelectorAll(".pending-content").length;
    const dialog = article.querySelector("dialog.quick-review");
    out.review = !!dialog && !article.hasAttribute("data-on-hold");
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

const DESKTOP = { name: "desktop", width: 1440, height: 900, scheme: "light" };
const PHONE = { name: "phone", width: 390, height: 844, scheme: "dark" };
const pageNotes = new Map(); // kept per file so that notes print in page order
const checkedFiles = PAGES.filter((file) => !onlySites || onlySites.has(file.split("/")[0]));

async function checkPage(tab, { view, file }) {
    await tab.settle(view);
    await tab.open(file);
    if (file === "index.html") {
        const errors = tab.takeErrors();
        if (errors) fail(`${view.name} landing: ${errors}`);
        return;
    }
    const site = file.replace("/index.html", "").replace(".html", "");
    const own = [];
    if (view === DESKTOP) pageNotes.set(file, own);
    const ids = JSON.parse(await tab.run(`JSON.stringify(conditionContents.map((article) => article.id))`));
    for (const id of ids) {
        await goTo(tab, id);
        const where = `${view.name} ${site}#${id}`;
        const answer = await tab.run(inspect(id));
        if (!answer) { fail(`${where}: could not be inspected`); continue; }
        const r = JSON.parse(answer);
        if (!r.active) fail(`${where}: did not open`);
        if (r.overflow) fail(`${where}: page overflows sideways`);
        if (r.review && (!r.opener || !r.opened || !r.closed)) fail(`${where}: review popup did not open and close`);
        if (r.reviewOverflow) fail(`${where}: review popup overflows sideways`);
        if (view === DESKTOP) {
            r.dead.forEach((target) => own.push(`${site}#${id}: link waits for a page that does not exist yet (${target})`));
            if (!r.pending && !r.review) own.push(`${site}#${id}: finished page with no review article`);
            if (!r.pending && !r.references) own.push(`${site}#${id}: finished page with no references`);
        }
        const errors = tab.takeErrors();
        if (errors) fail(`${where}: ${errors}`);
    }
    const quiz = await tab.run(`(() => { if (typeof QUIZ_QUESTIONS === "undefined" || !QUIZ_QUESTIONS.length) return "none"; const open = QUIZ_QUESTIONS.find((q) => questionsFor(q.condition).length && document.getElementById(q.condition)); if (!open) return "none"; location.hash = "quiz/" + open.condition; return "ok"; })()`);
    if (quiz === "ok") {
        await tab.run(READY(`quizView.querySelector("form")`));
        await tab.run(`quizView.querySelector("form").requestSubmit(); 1`);
        if (!(await tab.run(READY(`document.querySelector(".vignette")`)))) fail(`${view.name} ${site}: quiz did not start`);
    }
    await sleep(150); // late errors from the last topic or the quiz
    const errors = tab.takeErrors();
    if (errors) fail(`${view.name} ${site}: ${errors}`);
}

// The biggest files first, so that no long one is left running alone at the end
const size = (file) => readFileSync(file).length;
const jobs = [...checkedFiles].sort((a, b) => size(b) - size(a)).concat("index.html").flatMap((file) => [DESKTOP, PHONE].map((view) => ({ view, file })));
await inTabs(jobs, checkPage);
for (const file of checkedFiles) notes.push(...(pageNotes.get(file) || []));

if (shotsFolder) {
    mkdirSync(shotsFolder, { recursive: true });
    const holds = (file, id) => new RegExp(`<article class="condition-content[^"]*" id="${id}"`).test(readFileSync(file, "utf8"));
    const wanted = checkedFiles.filter((file) => !onlyIds || [...onlyIds].some((id) => holds(file, id)));
    await inTabs(wanted, async (tab, file) => {
        const site = file.replace("/index.html", "").replace(".html", "").replace("/", "-");
        await tab.settle(DESKTOP);
        await tab.open(file);
        const ids = JSON.parse(await tab.run(`JSON.stringify(conditionContents.map((article) => article.id))`));
        for (const id of ids.filter((each) => !onlyIds || onlyIds.has(each))) {
            await tab.settle(DESKTOP);
            await goTo(tab, id);
            const full = await tab.run(`contentPanel.scrollHeight + 60`);
            await tab.settle({ ...DESKTOP, height: full });
            await sleep(250);
            let image = await tab.send("Page.captureScreenshot", { format: "png" });
            if (!image.result) { await sleep(500); image = await tab.send("Page.captureScreenshot", { format: "png" }); }
            if (image.result) writeFileSync(join(shotsFolder, `${site}-${id}.png`), Buffer.from(image.result.data, "base64"));
            else fail(`${site}#${id}: screenshot failed (${image.error?.message})`);
        }
    });
}

/* ---------- Report ---------- */
for (const site of SITES) console.log(`${site}: ${counts[site].articles} pages, ${counts[site].questions} questions, correct option longest in ${counts[site].longestShare}%`);
for (const site of SITES) {
    const p = physiology[site];
    if (p.longestShare !== undefined) console.log(`${site} physiology: ${p.articles} pages, ${p.questions} questions, correct option longest in ${p.longestShare}%`);
}
if (notes.length) console.log(`\nNotes:\n${[...new Set(notes)].map((n) => `  ${n}`).join("\n")}`);
if (problems.length) {
    console.log(`\n${problems.length} problem(s):\n${problems.map((p) => `  ${p}`).join("\n")}`);
    process.exit(1);
}
console.log(onlySites ? `\nAll checks passed (browser checks: ${[...onlySites].join(", ")} only).` : "\nAll checks passed.");
process.exit(0);
