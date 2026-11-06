# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Clinical Conditions: a static study reference for medical conditions, organized by organ system, with a USMLE-style quiz. Plain HTML, CSS and JavaScript with no dependencies, framework or build step.

## Commands

There is nothing to install or lint. The site itself has no build step; only the review PDF is generated. Open `index.html` in a browser. Everything must keep working from `file://`, so do not load content with `fetch` or ES modules.

- After changing anything, run `node tools/check-site.mjs` from the project root. It takes about three minutes and exits with a failure if a question bank or the markup is invalid, or if any page has a console error, overflows sideways at desktop or phone width, or has a review popup that does not open and close. Add `--shots <folder>` to save a full-page screenshot of every page. It does not check content, so compare a new review article with its page by hand.
- After changing a GI review article, rebuild its PDF from the project root: `node tools/build-review-pdf.mjs`. It writes `gi/gi-review-articles.pdf`, which the landing page links to, using headless Edge.
- Syntax-check a script: `node --check shared/app.js`
- Load a question bank in Node to validate it (it is a plain script, so use `vm`): `vm.runInNewContext(fs.readFileSync("gi/questions.js", "utf8") + ";QUIZ_QUESTIONS")`. Check for unique `id`s, exactly five distinct `options`, `answer` from 0 to 4, `step` of 1 or 2, a `condition` matching an article `id`, and no `notes` entry on the correct answer.
- Browser checks: headless Edge is available at `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`. Headless windows have a 500px minimum width, so test phone layouts with the DevTools protocol's `Emulation.setDeviceMetricsOverride`, and emulate `prefers-reduced-motion: reduce` so screenshots are not caught mid-animation.

## Architecture

Each organ system is a folder (`gi/`, `neuro/`) with its own `index.html`, `style.css`, `questions.js` and `map.js`, sharing the engine in `shared/`. The root `index.html` is the landing page; it also redirects old hash links such as `index.html#gerd` to `gi/`.

Scripts are classic `defer` scripts sharing one global scope, so load order matters: `shared/app.js`, `questions.js`, `shared/quiz.js`, the organ system's `map.js`, `shared/map.js`, then any organ-specific scripts such as `gi/journey.js` or `neuro/concepts.js`. Top-level `const`s in `app.js` (`conditionButtons`, `contentPanel`, `quizView`, `SITE_NAME` and others) are used directly by later scripts, and redeclaring one is a SyntaxError that stops that script.

- **Pages are generated from markup.** `app.js` builds each article's sticky header, jump bar (from `.content-section > h3`) and Previous/Next (from sidebar button order). `quiz.js` adds "Quiz me" buttons and builds its topic groups from `.condition-group` and the `.group-label` directly before it, so keep that adjacency.
- **Routing** is by hash, using article `id`s; `#quiz` opens the quiz. A `data-goto` link to a missing article is shown disabled as "not added yet" and activates by itself once that `id` exists.
- **Sidebar map.** Conditions sit in `.station[data-organ]` groups. `shared/map.js` measures the stations, calls the organ system's `drawTract({ stations, width, add, part, note })`, and draws a dot and leader line for each `[x, y]` point it returns. Every `data-organ` value needs a returned point; the last station sets the drawing height. Redraws follow station size changes, so the drawing must be derived from measured positions, never fixed coordinates.
- **Search** dims non-matches with `.filtered-out` rather than hiding them, so the map keeps its shape (they are hidden only in the phone layout). Keyboard navigation goes through `isListed()`.
- **Phone layout (768px and below):** the map is hidden, `.station` becomes `display: contents`, and conditions form a scrolling pill row.
- **Saved data:** theme in `clinical-theme` (falling back to the older `gi-theme`); quiz results in `<specialty>-quiz-history`, from `<body data-specialty>`. Question `id`s are stored there, so do not rename them.

## Visual style per organ system

Every organ system has its own aesthetic. `shared/style.css` holds structure and the default tokens; an organ system restyles itself in its own `style.css` by overriding tokens and restyling the shared components, keeping the same markup. Token overrides must cover all three selectors the shared file uses: `:root`, `:root:not([data-theme="light"])` inside `@media (prefers-color-scheme: dark)`, and `:root[data-theme="dark"]`. Anything specific to one organ system stays out of `shared/`.

Neurology's look is "connected": the sidebar is a chain of neurons, each article has one axon running through its section headings, flowchart arrows are axons with boutons, and `neuro/concepts.js` adds a "Shared concepts" panel. Tie conditions together by marking recurring terms with `<span class="concept" data-concept="key">`; the mark is invisible, and a key used across conditions adds the panel to those pages. Lines drawn between mentions, then hover highlighting and click-to-jump between them, were tried and removed.

GI's look is food's journey from the mouth to the rectum. An article with `data-stop` (`esophagus`, `stomach`, `small-intestine`, or `colon`) gets a strip showing where it sits on the tract, a gut tube down its sections, and a bolus that moves down the tube with scrolling, all from `gi/journey.js`. Food does not pass through the accessory organs, so they are side branches listed in `JOURNEY_BRANCHES`: `liver`, `biliary`, `pancreas`, and `appendix`. Each draws its link to the tract (the portal vein, bile duct, or pancreatic duct), and the tube takes that branch's color (`.is-branch`, `--branch-color`). Every GI page has this.

## Writing content

Match the GI pages Esophagitis, Esophageal motility disorders, GERD, PUD and IBD:

- **Sections, in order:** Pathophysiology, Etiology, Symptoms and complications, Diagnosis, Treatment.
  Exception: the stroke types share one "Stroke symptoms and complications" page in the sidebar, organized by lesion location, so their own pages omit that section and link to it. Its syndrome diagrams use the slice outlines and lesion shapes from the neighboring `neuro-tracts` project.
- **Pathophysiology:** one sentence, cause → mechanism → result, or a comparison table.
- **Notes (`.note`):** at most one per section, one sentence, starting `<strong>Note:</strong>` or a bold rule.
- **`.node-label`:** a short qualifier of a few words, never a sentence.
- **Flowchart steps:** short noun phrases. `.change.up` and `.change.down` mark Increased and Decreased.
- **Visual pages:** Acute ischemic stroke, Intracerebral hemorrhage, and the GI pages are the model for a condition page. The remaining neuro pages should be written this way. Keep the five sections but lead with a picture of the content: a diagram in Etiology with numbered causes beside it (`.etiology-map`, `.cause-map`, `.cause-list`), a `.pathway` for ordered diagnostic steps, and pairs, timelines, or short lists in Treatment (`.pair-list`, `.time-windows`, `.stop-list`, `.goal-grid`). A cause keeps the same number through Etiology, Diagnosis, and Treatment. Avoid boxes inside boxes. The layouts are in `shared/style.css`, and each organ system's diagram styles stay in its own `style.css`. Diagrams are schematic and static, with no hover or click behavior.
- **Review article:** a `<dialog class="quick-review">` at the end of an article is a pure-text version of the condition in the style of a Nature Reviews article, and `app.js` adds its button above the page's footer. It has a descriptive title, a bold abstract, a "Key points" box, formal third-person sections covering every point on the page, and "Relationships to other conditions" with similarities, differences, and what favors each. It is written for readers who know the condition. Never invent citations or facts that are not on the page or in the quiz. Every GI page and finished stroke page has one, and links inside it can only reach pages in the same organ system.
- **Table headers:** where a page still uses tables, Diagnosis uses `If there is | Obtain` or `For | Obtain`. Treatment uses `Cause | Treatment`, `If there is | Treat with`, `If | Then`, `Goal | Treatment` or `To | Use`.
- **Abbreviations:** prefer the abbreviation (ABX, bd, CT AP) and wrap every use in `<abbr class="term" tabindex="0" data-definition="...">`, except in page titles, buttons, and table header rows. The quiz stores plain strings, and `quiz.js` adds hover definitions by reusing the ones on the page, so an abbreviation needs to appear on a page to get one there.
- **Language:** Australian words with American spelling: paracetamol, FBC, bloods, adrenaline, mesalazine, Hartmann solution, but hemorrhage, tumor, and center.
- **Terms:** bile salt (keeping "bile acid sequestrant" and "bile acid diarrhea"), vipoma, A-fib, x-ray, workup. Eponyms take no possessive: Crohn disease, Murphy sign, Cushing triad.
- **Punctuation:** Oxford commas, double quotes, no commas in numbers (3000), en dashes in ranges, and a capital after "Note:". Links at the end of a page start "Related:" and use the target page's title.

The site owner's coursework sets the expected answers, including where it differs from other sources: IBS uses Rome V, and first-line H. pylori treatment is triple therapy. Guideline differences go in a question's `info` field, shown as "Additional information", and are not presented as the answer.

Quiz questions are clinical vignettes with an optional `notes` map of `{ optionIndex: "why it is wrong" }`. Options are shuffled when shown, so never refer to an option by its letter or position.
