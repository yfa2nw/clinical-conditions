/* =========================
   Page quizzes
   (uses conditionButtons, conditionContents, contentPanel, quizView, viewStatus,
   labelFor, buttonFor, scrollBehavior, quizHashCondition and SITE_NAME from app.js)

   Each page has its own quiz, opened by its "Quiz me" button. Memory questions come first,
   then reasoning, then analysis, shuffled within each kind; a set of questions that shares a
   passage stays together and in order.
========================= */

// Each specialty keeps its own results (e.g. "gi-quiz-history")
const QUIZ_HISTORY_KEY = `${document.body.dataset.specialty}-quiz-history`;
const LETTERS = ["A", "B", "C", "D", "E"];
const KINDS = ["memory", "reasoning", "analysis"];
const KIND_NAMES = { memory: "Memory", reasoning: "Reasoning", analysis: "Analysis" };

const quiz = {
    phase: "setup", // setup | question | results
    condition: null,
    settings: { kind: "all", source: "all", count: "all" },
    items: [], // { question, order: [original option indexes in display order], chosen: display index or null }
    index: 0,
};

/* ---------- Abbreviations ---------- */

// Quiz text borrows the definitions already on the pages
const quizTerms = new Map();
document.querySelectorAll("abbr.term").forEach((term) => {
    const text = term.textContent.trim();
    const isAbbreviation = /[A-Z].*[A-Z0-9]|^[a-z]+[A-Z]|^(bd|A-fib)$/.test(text);
    if (isAbbreviation && !quizTerms.has(text)) quizTerms.set(text, term.dataset.definition);
});

// Some abbreviations mean different things on different topics, such as V1, so each topic's own definitions come first
const topicTerms = new Map(conditionContents.map((article) => {
    const terms = new Map();
    article.querySelectorAll("abbr.term").forEach((term) => {
        const text = term.textContent.trim();
        if (quizTerms.has(text) && !terms.has(text)) terms.set(text, term.dataset.definition);
    });
    return [article.id, terms];
}));

const quizTermPattern = quizTerms.size
    ? new RegExp(`(?<![\\w+-]|type )(${[...quizTerms.keys()]
        .sort((a, b) => b.length - a.length)
        .map((text) => text.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&"))
        .join("|")})(?!\\w)`, "g")
    : null;

function addQuizTerms(root, currentTopic = null) {
    if (!quizTermPattern) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
        const parent = node.parentElement;
        if (parent.closest("button, .tag, .eyebrow, .visually-hidden, .option-letter, .term, .review-meta, .breakdown-name, th")) return;

        const pieces = node.textContent.split(quizTermPattern);
        if (pieces.length === 1) return;

        node.replaceWith(...pieces.map((piece, index) => {
            if (index % 2 === 0) return piece;
            const inLabel = parent.closest("label");
            const topic = parent.closest("[data-topic]")?.dataset.topic || currentTopic;
            return el("abbr", {
                class: "term",
                tabindex: inLabel ? null : "0",
                "data-definition": topicTerms.get(topic)?.get(piece) || quizTerms.get(piece),
                text: piece,
            });
        }));
    });
}

/* ---------- Small helpers ---------- */

function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
        if (value === null || value === undefined || value === false) return;
        if (key === "class") node.className = value;
        else if (key === "text") node.textContent = value;
        else if (key === "html") node.innerHTML = value;
        else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
        else node.setAttribute(key, value === true ? "" : value);
    });
    children.flat().forEach((child) => {
        if (child !== null && child !== undefined && child !== false) node.append(child);
    });
    return node;
}

// Question text is written by the site, so HTML in it (lists, tables, emphasis) is trusted
const looksLikeHtml = (text) => /<\/?[a-z][^>]*>/i.test(text);

function rich(tag, text, props = {}) {
    if (!text) return null;
    return looksLikeHtml(text) ? el(tag === "p" ? "div" : tag, { ...props, html: text }) : el(tag, { ...props, text });
}

function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const conditionName = (id) => labelFor(id);
const isCorrect = (item) => item.chosen !== null && item.order[item.chosen] === item.question.answer;
const correctDisplayIndex = (item) => item.order.indexOf(item.question.answer);
const questionsFor = (id) => QUIZ_QUESTIONS.filter((question) => question.condition === id);

// The passage of a set is written once, on its first question
function passageFor(question) {
    if (!question.set) return null;
    return QUIZ_QUESTIONS.find((other) => other.set === question.set && other.passage)?.passage || null;
}

// A short label for a question in the results list
function summaryText(question) {
    if (question.leadIn) return question.leadIn;
    const text = question.stem.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const sentences = text.match(/[^.?!]+[.?!]/g) || [text];
    return sentences[sentences.length - 1].trim();
}

function focusQuizTitle() {
    const title = document.getElementById("quiz-title");
    if (title) title.focus({ preventScroll: true });
}

/* ---------- Remembering results between visits ---------- */

function loadQuizHistory() {
    try {
        return JSON.parse(localStorage.getItem(QUIZ_HISTORY_KEY)) || {};
    } catch (error) {
        return {};
    }
}

let quizHistory = loadQuizHistory();

function saveQuizHistory() {
    try {
        localStorage.setItem(QUIZ_HISTORY_KEY, JSON.stringify(quizHistory));
    } catch (error) {}
}

/* ---------- Choosing and ordering questions ---------- */

function questionPool(condition, settings) {
    return questionsFor(condition).filter((question) => {
        if (settings.kind !== "all" && question.kind !== settings.kind) return false;
        if (settings.source === "new" && quizHistory[question.id]) return false;
        if (settings.source === "missed" && (!quizHistory[question.id] || quizHistory[question.id].correct)) return false;
        return true;
    });
}

// Memory, then reasoning, then analysis; shuffled within each kind, with each set kept whole and in order
function orderQuestions(questions, limit = Infinity) {
    const units = [];
    const bySet = new Map();
    questions.forEach((question) => {
        if (!question.set) return units.push([question]);
        if (!bySet.has(question.set)) {
            bySet.set(question.set, []);
            units.push(bySet.get(question.set));
        }
        bySet.get(question.set).push(question);
    });

    const ordered = KINDS.flatMap((kind) => shuffle(units.filter((unit) => unit[0].kind === kind)));
    if (limit === Infinity) return ordered.flat();

    // Pick across kinds, keeping their proportions, then put them back in order
    const chosen = new Set(shuffle(ordered).reduce((picked, unit) => {
        if (picked.count >= limit) return picked;
        picked.units.push(unit);
        picked.count += unit.length;
        return picked;
    }, { units: [], count: 0 }).units);
    return ordered.filter((unit) => chosen.has(unit)).flat();
}

function startQuiz(questions) {
    quiz.items = questions.map((question) => ({
        question,
        order: shuffle(question.options.map((option, index) => index)),
        chosen: null,
    }));
    quiz.index = 0;
    quiz.phase = "question";
    renderQuiz();
    contentPanel.scrollTop = 0;
    focusQuizTitle();
}

function finishQuiz() {
    quiz.items = quiz.items.filter((item) => item.chosen !== null);
    quiz.phase = quiz.items.length ? "results" : "setup";
    renderQuiz();
    contentPanel.scrollTop = 0;
    focusQuizTitle();
}

/* ---------- Opening the quiz view ---------- */

function openQuiz({ updateHistory = true, condition }) {
    if (!condition || !questionsFor(condition).length) return;

    conditionContents.forEach((article) => article.classList.remove("active"));
    // The page being quizzed stays marked in the sidebar
    conditionButtons.forEach((button) => {
        const isCurrent = button.dataset.condition === condition;
        button.classList.toggle("active", isCurrent);
        if (isCurrent) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
    });
    quizView.classList.add("active");

    const hash = `#quiz/${encodeURIComponent(condition)}`;
    if (updateHistory && location.hash !== hash) history.pushState({ quiz: condition }, "", hash);
    document.title = `Quiz: ${conditionName(condition)} · ${SITE_NAME}`;
    viewStatus.textContent = `Showing the quiz on ${conditionName(condition)}`;

    if (quiz.condition !== condition) {
        quiz.condition = condition;
        quiz.settings = { kind: "all", source: "all", count: "all" };
        quiz.phase = "setup";
    } else if (quiz.phase === "results") {
        quiz.phase = "setup";
    }
    renderQuiz();
    contentPanel.scrollTop = 0;
}

function closeQuiz() {
    showCondition(quiz.condition, { focusTitle: true });
}

function renderQuiz() {
    if (quiz.phase === "question") quizView.replaceChildren(renderQuestion());
    else if (quiz.phase === "results") quizView.replaceChildren(renderResults());
    else quizView.replaceChildren(renderSetup());
    addQuizTerms(quizView, quiz.condition);
}

/* =========================
   Setup screen
========================= */

function segmented(name, legend, choices, current, onChange) {
    return el("fieldset", { class: "setup-group" },
        el("legend", { text: legend }),
        el("div", { class: "segmented" },
            choices.map(([value, label]) => el("label", { class: "segment" },
                el("input", {
                    type: "radio",
                    name,
                    value,
                    checked: value === current,
                    onchange: () => onChange(value),
                }),
                el("span", { text: label }),
            )),
        ),
    );
}

function renderSetup() {
    const condition = quiz.condition;
    const settings = quiz.settings;
    const all = questionsFor(condition);
    const poolCount = el("p", { class: "pool-count", "aria-live": "polite" });
    const startButton = el("button", { type: "submit", class: "btn btn-primary", text: "Start quiz" });

    function refreshCount() {
        const available = questionPool(condition, settings).length;
        const count = settings.count === "all" ? available : Math.min(Number(settings.count), available);
        poolCount.textContent = available
            ? `${count} of ${available} matching ${available === 1 ? "question" : "questions"}`
            : "No questions match these settings";
        startButton.disabled = available === 0;
    }

    const kindCounts = KINDS.map((kind) => [kind, all.filter((question) => question.kind === kind).length]);
    const form = el("form", {
        class: "quiz-setup",
        onsubmit: (event) => {
            event.preventDefault();
            const pool = questionPool(condition, settings);
            startQuiz(orderQuestions(pool, settings.count === "all" ? Infinity : Number(settings.count)));
        },
    },
        segmented("quiz-kind", "Questions to include", [["all", "All"], ...kindCounts.filter(([, n]) => n).map(([kind, n]) => [kind, `${KIND_NAMES[kind]} (${n})`])], settings.kind, (value) => {
            settings.kind = value;
            refreshCount();
        }),
        segmented("quiz-source", "Progress", [["all", "All"], ["new", "Not yet answered"], ["missed", "Previously missed"]], settings.source, (value) => {
            settings.source = value;
            refreshCount();
        }),
        segmented("quiz-count", "Length", [["10", "10"], ["20", "20"], ["all", "All"]], settings.count, (value) => {
            settings.count = value;
            refreshCount();
        }),
        el("div", { class: "setup-footer" }, poolCount, startButton),
    );
    refreshCount();

    // Progress on this page
    const answered = all.filter((question) => quizHistory[question.id]);
    const correctCount = answered.filter((question) => quizHistory[question.id].correct).length;
    const stats = answered.length
        ? el("div", { class: "quiz-stats" },
            el("p", {},
                el("strong", { text: `${answered.length} of ${all.length}` }),
                " questions answered · ",
                el("strong", { text: `${Math.round((correctCount / answered.length) * 100)}%` }),
                " correct on your latest attempts",
            ),
            el("button", {
                type: "button",
                class: "text-button",
                text: "Reset progress",
                onclick: () => {
                    if (!window.confirm(`Clear your saved progress on ${conditionName(condition)}?`)) return;
                    all.forEach((question) => delete quizHistory[question.id]);
                    saveQuizHistory();
                    renderQuiz();
                },
            }),
        )
        : null;

    const pdf = document.getElementById(condition)?.dataset.quizPdf;
    return el("div", { class: "quiz-shell" },
        el("header", { class: "quiz-intro" },
            el("p", { class: "eyebrow", text: "Quiz" }),
            el("h2", { id: "quiz-title", tabindex: "-1", text: conditionName(condition) }),
            el("p", { text: "Memory questions check the facts, reasoning questions ask how and why, and analysis questions work through cases and data. Every answer explains why it is right and why each other option is wrong, so read the explanations as part of the page." }),
            el("p", { class: "quiz-intro-links" },
                el("button", { type: "button", class: "text-button", text: `Back to ${conditionName(condition)}`, onclick: closeQuiz }),
                pdf && el("a", { class: "text-button", href: pdf, target: "_blank", rel: "noopener", text: "Offline copy (PDF)" }),
            ),
        ),
        stats,
        form,
    );
}

/* =========================
   Question screen
========================= */

function renderProgressTrack() {
    return el("ol", { class: "quiz-track", "aria-hidden": "true" },
        quiz.items.map((item, index) => {
            let state = "pending";
            if (item.chosen !== null) state = isCorrect(item) ? "correct" : "wrong";
            return el("li", { class: `track-${state}${index === quiz.index ? " track-current" : ""}` });
        }),
    );
}

function renderPassage(question) {
    const passage = passageFor(question);
    if (!passage) return null;
    const members = quiz.items.filter((item) => item.question.set === question.set);
    const position = members.findIndex((item) => item.question === question) + 1;
    return el("section", { class: "quiz-passage" },
        el("p", { class: "quiz-passage-label", text: `Case · question ${position} of ${members.length}` }),
        rich("div", passage),
    );
}

function renderQuestion() {
    const item = quiz.items[quiz.index];
    const question = item.question;
    const answered = item.chosen !== null;
    const total = quiz.items.length;
    const isLast = quiz.index === total - 1;
    const correctSoFar = quiz.items.filter(isCorrect).length;
    const answeredSoFar = quiz.items.filter((entry) => entry.chosen !== null).length;

    const submitButton = el("button", {
        type: "submit",
        class: "btn btn-primary",
        disabled: !answered,
        text: answered ? (isLast ? "See results" : "Next question") : "Submit answer",
    });

    const options = item.order.map((originalIndex, displayIndex) => {
        const isAnswer = originalIndex === question.answer;
        const isChosen = displayIndex === item.chosen;
        let state = "";
        let status = null;
        if (answered && isAnswer) {
            state = " is-correct";
            status = isChosen ? "Your answer · Correct" : "Correct answer";
        } else if (answered && isChosen) {
            state = " is-wrong";
            status = "Your answer";
        }

        return el("label", { class: `option${state}` },
            el("input", {
                type: "radio",
                name: "answer",
                value: displayIndex,
                checked: isChosen,
                disabled: answered,
                class: "option-input",
                onchange: () => {
                    submitButton.disabled = false;
                },
            }),
            el("span", { class: "option-letter", "aria-hidden": "true", text: LETTERS[displayIndex] }),
            el("span", { class: "option-text" },
                el("span", { class: "visually-hidden", text: `${LETTERS[displayIndex]}. ` }),
                question.options[originalIndex],
            ),
            status && el("span", { class: "option-status", text: status }),
        );
    });

    const form = el("form", {
        class: "question-card",
        onsubmit: (event) => {
            event.preventDefault();
            if (!answered) {
                const checked = form.querySelector(".option-input:checked");
                if (!checked) return;
                item.chosen = Number(checked.value);
                quizHistory[question.id] = { correct: isCorrect(item), at: Date.now() };
                saveQuizHistory();
                renderQuiz();
                const feedbackTitle = quizView.querySelector(".feedback-title");
                feedbackTitle.focus({ preventScroll: true });
                feedbackTitle.closest(".feedback").scrollIntoView({ block: "nearest", behavior: scrollBehavior() });
            } else if (isLast) {
                finishQuiz();
            } else {
                quiz.index += 1;
                renderQuiz();
                contentPanel.scrollTop = 0;
                focusQuizTitle();
            }
        },
    },
        el("div", { class: "question-tags" },
            el("span", { class: `tag tag-${question.kind}`, text: KIND_NAMES[question.kind] }),
        ),
        renderPassage(question),
        rich("p", question.stem, { class: "vignette" }),
        el("fieldset", { class: "options" },
            question.leadIn
                ? el("legend", { class: "lead-in", text: question.leadIn })
                : el("legend", { class: "visually-hidden", text: "Choose one answer" }),
            options,
        ),
        el("div", { class: "quiz-actions" },
            submitButton,
            !answered && el("span", { class: "kbd-hint", text: "Keys A–E to choose · Enter to submit" }),
        ),
        answered && renderFeedback(item),
    );

    return el("div", { class: "quiz-shell" },
        el("div", { class: "quiz-topbar" },
            el("p", { class: "quiz-count", id: "quiz-title", tabindex: "-1" },
                `Question ${quiz.index + 1} `,
                el("span", { text: `of ${total}` }),
            ),
            el("p", { class: "quiz-score", text: answeredSoFar ? `${correctSoFar} / ${answeredSoFar} correct` : "" }),
            el("button", { type: "button", class: "text-button", text: "End quiz", onclick: finishQuiz }),
            renderProgressTrack(),
        ),
        form,
    );
}

// Why the chosen wrong option is wrong comes first, then the explanation, then every other option
function renderFeedback(item) {
    const question = item.question;
    const correct = isCorrect(item);
    const chosenOriginal = item.order[item.chosen];
    const notes = question.notes || {};
    const chosenNote = !correct && notes[chosenOriginal];

    const otherNotes = item.order
        .map((originalIndex, displayIndex) => ({ originalIndex, displayIndex }))
        .filter(({ originalIndex }) => notes[originalIndex] && originalIndex !== chosenOriginal);

    return el("div", { class: `feedback ${correct ? "feedback-correct" : "feedback-wrong"}` },
        el("h3", { class: "feedback-title", tabindex: "-1" },
            el("span", { class: "feedback-icon", "aria-hidden": "true", text: correct ? "✓" : "✗" }),
            correct ? "Correct" : `Incorrect. The answer is ${LETTERS[correctDisplayIndex(item)]}.`,
        ),
        chosenNote && el("p", { class: "feedback-note" },
            el("strong", { text: `Why not ${LETTERS[item.chosen]}? ` }),
            rich("span", chosenNote),
        ),
        rich("div", question.explanation, { class: "feedback-explanation" }),
        renderInfo(question),
        otherNotes.length > 0 && el("div", { class: "feedback-options" },
            el("h4", { text: correct ? "Why not the other options" : "The other options" }),
            el("ul", {},
                otherNotes.map(({ originalIndex, displayIndex }) => el("li", {},
                    el("strong", { text: `${LETTERS[displayIndex]}. ${question.options[originalIndex]}: ` }),
                    rich("span", notes[originalIndex]),
                )),
            ),
        ),
    );
}

// Context beyond the course material, kept visually separate from the answer
function renderInfo(question) {
    if (!question.info) return null;
    return el("p", { class: "feedback-info" },
        el("strong", { text: "Additional information: " }),
        rich("span", question.info),
    );
}

/* =========================
   Results screen
========================= */

function scoreMessage(percent) {
    if (percent >= 90) return "Excellent work. You know this page well.";
    if (percent >= 70) return "Solid performance. Read the explanations for the questions you missed.";
    if (percent >= 50) return "Good start. Reread the page, then retry the questions you missed.";
    return "Keep going. Work through the page and its explanations, then try again.";
}

function breakdownRows(groups) {
    return el("ul", { class: "breakdown" },
        groups.map(({ label, correct, total }) => {
            const percent = Math.round((correct / total) * 100);
            return el("li", { class: "breakdown-row" },
                el("span", { class: "breakdown-name", text: label }),
                el("span", { class: "breakdown-bar", "aria-hidden": "true" },
                    el("span", { style: `--value: ${percent}%`, class: percent >= 70 ? "good" : percent >= 50 ? "fair" : "poor" }),
                ),
                el("span", { class: "breakdown-score", text: `${correct}/${total}` }),
            );
        }),
    );
}

function renderResults() {
    const total = quiz.items.length;
    const correct = quiz.items.filter(isCorrect).length;
    const percent = Math.round((correct / total) * 100);
    const missed = quiz.items.filter((item) => !isCorrect(item));

    const byKind = KINDS
        .map((kind) => {
            const items = quiz.items.filter((item) => item.question.kind === kind);
            return { label: KIND_NAMES[kind], total: items.length, correct: items.filter(isCorrect).length };
        })
        .filter((group) => group.total > 0);

    const review = quiz.items.map((item, index) => {
        const ok = isCorrect(item);
        const question = item.question;
        return el("details", { class: `review-item ${ok ? "review-correct" : "review-wrong"}`, "data-topic": question.condition },
            el("summary", {},
                el("span", { class: "review-mark", "aria-hidden": "true", text: ok ? "✓" : "✗" }),
                el("span", { class: "visually-hidden", text: ok ? "Correct: " : "Incorrect: " }),
                el("span", { class: "review-summary" },
                    el("span", { class: "review-meta", text: `Q${index + 1} · ${KIND_NAMES[question.kind]}` }),
                    summaryText(question),
                ),
            ),
            el("div", { class: "review-body" },
                passageFor(question) && rich("div", passageFor(question), { class: "quiz-passage" }),
                rich("p", question.stem, { class: "vignette" }),
                question.leadIn && el("p", { class: "lead-in", text: question.leadIn }),
                el("p", {}, el("strong", { text: "Your answer: " }), question.options[item.order[item.chosen]]),
                !ok && el("p", {}, el("strong", { text: "Correct answer: " }), question.options[question.answer]),
                rich("div", question.explanation, { class: "review-explanation" }),
                renderInfo(question),
            ),
        );
    });

    return el("div", { class: "quiz-shell" },
        el("section", { class: "results-hero" },
            el("div", { class: "score-ring", style: `--score: ${percent}`, role: "img", "aria-label": `Score ${percent} percent` },
                el("span", { text: `${percent}%` }),
            ),
            el("div", {},
                el("p", { class: "eyebrow", text: `Quiz complete · ${conditionName(quiz.condition)}` }),
                el("h2", { id: "quiz-title", tabindex: "-1", text: `${correct} of ${total} correct` }),
                el("p", { text: scoreMessage(percent) }),
                el("div", { class: "results-actions" },
                    missed.length > 0 && el("button", {
                        type: "button",
                        class: "btn btn-primary",
                        text: `Retry ${missed.length} missed`,
                        onclick: () => startQuiz(orderQuestions(missed.map((entry) => entry.question))),
                    }),
                    el("button", {
                        type: "button",
                        class: `btn ${missed.length ? "btn-secondary" : "btn-primary"}`,
                        text: "New quiz",
                        onclick: () => {
                            quiz.phase = "setup";
                            renderQuiz();
                            contentPanel.scrollTop = 0;
                            focusQuizTitle();
                        },
                    }),
                    el("button", { type: "button", class: "btn btn-secondary", text: "Back to the page", onclick: closeQuiz }),
                ),
            ),
        ),
        byKind.length > 1 && el("section", { class: "results-section" },
            el("h3", { text: "By kind of question" }),
            breakdownRows(byKind),
        ),
        el("section", { class: "results-section" },
            el("h3", { text: "Review answers" }),
            el("div", { class: "review-list" }, review),
        ),
    );
}

/* =========================
   Keyboard: A–E or 1–5 picks an answer
========================= */

document.addEventListener("keydown", (event) => {
    if (!quizView.classList.contains("active") || quiz.phase !== "question") return;
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (event.target instanceof Element && event.target.closest("input[type='search'], input[type='text'], textarea")) return;

    const key = event.key.toLowerCase();
    let index = LETTERS.map((letter) => letter.toLowerCase()).indexOf(key);
    if (index === -1 && /^[1-5]$/.test(key)) index = Number(key) - 1;
    if (index === -1) return;

    const input = quizView.querySelectorAll(".option-input")[index];
    if (!input || input.disabled) return;

    event.preventDefault();
    input.checked = true;
    input.focus();
    input.dispatchEvent(new Event("change", { bubbles: true }));
});

/* =========================
   "Quiz me" buttons on each page
========================= */

conditionContents.forEach((article) => {
    const count = questionsFor(article.id).length;
    if (!count) return;

    // app.js gives every header a row of actions; "Quiz me" goes last, after the review article and worksheet
    article.querySelector(".header-actions").append(
        el("button", {
            type: "button",
            class: "quiz-me header-action",
            "aria-label": `Quiz me on ${conditionName(article.id)}: ${count} questions`,
            onclick: () => openQuiz({ condition: article.id }),
        },
            el("span", { class: "header-action-icon", "aria-hidden": "true", text: "?" }),
            el("span", { class: "header-action-label", text: "Quiz me" }),
            el("span", { class: "quiz-me-count", "aria-hidden": "true", text: count }),
        ),
    );
});

if (quizHashCondition()) {
    openQuiz({ updateHistory: false, condition: quizHashCondition() });
}
