/* =========================
   Practice quiz
   (uses conditionButtons, conditionContents, contentPanel, quizView, quizButton,
   viewStatus and labelFor from script.js)
========================= */

const QUIZ_HISTORY_KEY = "gi-quiz-history";
const LETTERS = ["A", "B", "C", "D", "E"];
const STEP_NAMES = { 1: "Step 1", 2: "Step 2 CK" };

const quizConditionIds = conditionButtons
    .map((button) => button.dataset.condition)
    .filter((id) => QUIZ_QUESTIONS.some((question) => question.condition === id));

const quiz = {
    phase: "setup", // setup | question | results
    settings: {
        topics: new Set(quizConditionIds),
        step: "all",
        source: "all",
        count: "10",
    },
    items: [], // { question, order: [original option indexes in display order], chosen: display index or null }
    index: 0,
};

/* ---------- Small helpers ---------- */

function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
        if (value === null || value === undefined || value === false) return;
        if (key === "class") node.className = value;
        else if (key === "text") node.textContent = value;
        else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
        else node.setAttribute(key, value === true ? "" : value);
    });
    children.flat().forEach((child) => {
        if (child !== null && child !== undefined && child !== false) node.append(child);
    });
    return node;
}

function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function conditionName(id) {
    return labelFor(id);
}

function isCorrect(item) {
    return item.chosen !== null && item.order[item.chosen] === item.question.answer;
}

function correctDisplayIndex(item) {
    return item.order.indexOf(item.question.answer);
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

/* ---------- Choosing questions ---------- */

function questionPool(settings) {
    return QUIZ_QUESTIONS.filter((question) => {
        if (!settings.topics.has(question.condition)) return false;
        if (settings.step !== "all" && String(question.step) !== settings.step) return false;
        if (settings.source === "new" && quizHistory[question.id]) return false;
        if (settings.source === "missed" && (!quizHistory[question.id] || quizHistory[question.id].correct)) return false;
        return true;
    });
}

function startQuiz(questions) {
    quiz.items = shuffle(questions).map((question) => ({
        question,
        order: shuffle(question.options.map((option, index) => index)),
        chosen: null,
    }));
    quiz.index = 0;
    quiz.phase = "question";
    quizButton.classList.add("in-progress");
    renderQuiz();
    contentPanel.scrollTop = 0;
    focusQuizTitle();
}

function finishQuiz() {
    quiz.items = quiz.items.filter((item) => item.chosen !== null);
    quiz.phase = quiz.items.length ? "results" : "setup";
    quizButton.classList.remove("in-progress");
    renderQuiz();
    contentPanel.scrollTop = 0;
    focusQuizTitle();
}

/* ---------- Opening the quiz view ---------- */

function openQuiz({ updateHistory = true, condition = null } = {}) {
    conditionContents.forEach((article) => article.classList.remove("active"));
    conditionButtons.forEach((button) => {
        button.classList.remove("active");
        button.removeAttribute("aria-current");
    });
    quizButton.classList.add("active");
    quizButton.setAttribute("aria-current", "true");
    quizView.classList.add("active");

    if (updateHistory && location.hash !== "#quiz") {
        history.pushState({ quiz: true }, "", "#quiz");
    }
    document.title = "Practice quiz · GI Symptoms Reference";
    viewStatus.textContent = "Showing practice quiz";

    if (condition) {
        quiz.settings = { topics: new Set([condition]), step: "all", source: "all", count: "all" };
        startQuiz(QUIZ_QUESTIONS.filter((question) => question.condition === condition));
        return;
    }

    renderQuiz();
    contentPanel.scrollTop = 0;
}

quizButton.addEventListener("click", () => {
    openQuiz();
    focusQuizTitle();
});

function renderQuiz() {
    if (quiz.phase === "question") quizView.replaceChildren(renderQuestion());
    else if (quiz.phase === "results") quizView.replaceChildren(renderResults());
    else quizView.replaceChildren(renderSetup());
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
    const settings = quiz.settings;
    const poolCount = el("p", { class: "pool-count", "aria-live": "polite" });
    const startButton = el("button", { type: "submit", class: "btn btn-primary", text: "Start quiz" });

    function refreshCount() {
        const available = questionPool(settings).length;
        const count = settings.count === "all" ? available : Math.min(Number(settings.count), available);
        poolCount.textContent = available
            ? `${count} of ${available} matching ${available === 1 ? "question" : "questions"}`
            : "No questions match these settings";
        startButton.disabled = available === 0;
    }

    // Topic checkboxes, grouped like the sidebar
    const topicGroups = [...document.querySelectorAll(".condition-group")].map((group) => {
        const ids = [...group.querySelectorAll(".condition-item")]
            .map((button) => button.dataset.condition)
            .filter((id) => quizConditionIds.includes(id));

        return el("div", { class: "topic-group" },
            el("p", { class: "topic-group-label", text: group.previousElementSibling.textContent }),
            el("div", { class: "topic-list" },
                ids.map((id) => {
                    const total = QUIZ_QUESTIONS.filter((question) => question.condition === id).length;
                    return el("label", { class: "topic-chip" },
                        el("input", {
                            type: "checkbox",
                            value: id,
                            checked: settings.topics.has(id),
                            onchange: (event) => {
                                if (event.target.checked) settings.topics.add(id);
                                else settings.topics.delete(id);
                                refreshCount();
                            },
                        }),
                        el("span", { class: "topic-name", text: conditionName(id) }),
                        el("span", { class: "topic-count", text: total, "aria-label": `${total} questions` }),
                    );
                }),
            ),
        );
    });

    function setAllTopics(checked) {
        settings.topics = new Set(checked ? quizConditionIds : []);
        form.querySelectorAll(".topic-chip input").forEach((input) => {
            input.checked = checked;
        });
        refreshCount();
    }

    const form = el("form", {
        class: "quiz-setup",
        onsubmit: (event) => {
            event.preventDefault();
            const pool = questionPool(settings);
            const count = settings.count === "all" ? pool.length : Number(settings.count);
            startQuiz(shuffle(pool).slice(0, count));
        },
    },
        el("fieldset", { class: "setup-group" },
            el("legend", { text: "Topics" }),
            el("div", { class: "setup-links" },
                el("button", { type: "button", class: "text-button", text: "Select all", onclick: () => setAllTopics(true) }),
                el("button", { type: "button", class: "text-button", text: "Clear", onclick: () => setAllTopics(false) }),
            ),
            topicGroups,
        ),
        segmented("quiz-step", "Exam focus", [["all", "Both"], ["1", "Step 1"], ["2", "Step 2 CK"]], settings.step, (value) => {
            settings.step = value;
            refreshCount();
        }),
        segmented("quiz-source", "Questions", [["all", "All"], ["new", "Not yet answered"], ["missed", "Previously missed"]], settings.source, (value) => {
            settings.source = value;
            refreshCount();
        }),
        segmented("quiz-count", "Length", [["5", "5"], ["10", "10"], ["20", "20"], ["all", "All"]], settings.count, (value) => {
            settings.count = value;
            refreshCount();
        }),
        el("div", { class: "setup-footer" }, poolCount, startButton),
    );

    refreshCount();

    // Lifetime progress
    const answeredIds = Object.keys(quizHistory).filter((id) => QUIZ_QUESTIONS.some((question) => question.id === id));
    const correctCount = answeredIds.filter((id) => quizHistory[id].correct).length;
    const stats = answeredIds.length
        ? el("div", { class: "quiz-stats" },
            el("p", {},
                el("strong", { text: `${answeredIds.length} of ${QUIZ_QUESTIONS.length}` }),
                " questions answered · ",
                el("strong", { text: `${Math.round((correctCount / answeredIds.length) * 100)}%` }),
                " correct on your latest attempts",
            ),
            el("button", {
                type: "button",
                class: "text-button",
                text: "Reset progress",
                onclick: () => {
                    if (!window.confirm("Clear your saved quiz progress?")) return;
                    quizHistory = {};
                    saveQuizHistory();
                    renderQuiz();
                },
            }),
        )
        : null;

    return el("div", { class: "quiz-shell" },
        el("header", { class: "quiz-intro" },
            el("p", { class: "eyebrow", text: "Practice questions" }),
            el("h2", { id: "quiz-title", tabindex: "-1", text: "Test yourself" }),
            el("p", { text: "USMLE-style clinical vignettes: Step 1 questions test mechanisms, microbiology and pathology; Step 2 CK questions test diagnosis and the next best step in management. Every answer comes with an explanation and a link back to the topic." }),
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
                feedbackTitle.closest(".feedback").scrollIntoView({
                    block: "nearest",
                    behavior: scrollBehavior(),
                });
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
            el("span", { class: `tag tag-step${question.step}`, text: STEP_NAMES[question.step] }),
            el("span", { class: "tag", text: conditionName(question.condition) }),
        ),
        el("p", { class: "vignette", text: question.stem }),
        el("fieldset", { class: "options" },
            el("legend", { class: "lead-in", text: question.leadIn }),
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

function renderFeedback(item) {
    const question = item.question;
    const correct = isCorrect(item);
    const chosenOriginal = item.order[item.chosen];
    const chosenNote = !correct && question.notes && question.notes[chosenOriginal];

    // Notes on the other wrong options, in display order
    const otherNotes = item.order
        .map((originalIndex, displayIndex) => ({ originalIndex, displayIndex }))
        .filter(({ originalIndex }) => question.notes && question.notes[originalIndex] && originalIndex !== chosenOriginal);

    return el("div", { class: `feedback ${correct ? "feedback-correct" : "feedback-wrong"}` },
        el("h3", { class: "feedback-title", tabindex: "-1" },
            el("span", { class: "feedback-icon", "aria-hidden": "true", text: correct ? "✓" : "✗" }),
            correct ? "Correct" : `Incorrect. The answer is ${LETTERS[correctDisplayIndex(item)]}.`,
        ),
        el("p", { text: question.explanation }),
        chosenNote && el("p", { class: "feedback-note" },
            el("strong", { text: `Why not ${LETTERS[item.chosen]}? ` }),
            chosenNote,
        ),
        renderInfo(question),
        otherNotes.length > 0 && el("details", { class: "feedback-more" },
            el("summary", { text: "About the other options" }),
            el("ul", {},
                otherNotes.map(({ originalIndex, displayIndex }) => el("li", {},
                    el("strong", { text: `${LETTERS[displayIndex]}. ` }),
                    question.notes[originalIndex],
                )),
            ),
        ),
        el("p", { class: "feedback-review" },
            "Review: ",
            el("button", { type: "button", class: "link-button", "data-goto": question.condition, text: conditionName(question.condition) }),
        ),
    );
}

// Context beyond the course material, kept visually separate from the answer
function renderInfo(question) {
    if (!question.info) return null;
    return el("p", { class: "feedback-info" },
        el("strong", { text: "Additional information: " }),
        question.info,
    );
}

/* =========================
   Results screen
========================= */

function scoreMessage(percent) {
    if (percent >= 90) return "Excellent work. You know this material well.";
    if (percent >= 70) return "Solid performance. Review the questions you missed to close the gaps.";
    if (percent >= 50) return "Good start. Revisit the topics below with the lowest scores.";
    return "Keep going. Read through the topics below, then try again.";
}

function breakdownRows(groups) {
    return el("ul", { class: "breakdown" },
        groups.map(({ label, correct, total, goto }) => {
            const percent = Math.round((correct / total) * 100);
            return el("li", { class: "breakdown-row" },
                goto
                    ? el("button", { type: "button", class: "breakdown-name", "data-goto": goto, text: label })
                    : el("span", { class: "breakdown-name", text: label }),
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

    const byTopic = quizConditionIds
        .map((id) => {
            const items = quiz.items.filter((item) => item.question.condition === id);
            return { label: conditionName(id), goto: id, total: items.length, correct: items.filter(isCorrect).length };
        })
        .filter((group) => group.total > 0)
        .sort((a, b) => a.correct / a.total - b.correct / b.total);

    const byStep = [1, 2]
        .map((step) => {
            const items = quiz.items.filter((item) => item.question.step === step);
            return { label: STEP_NAMES[step], total: items.length, correct: items.filter(isCorrect).length };
        })
        .filter((group) => group.total > 0);

    const review = quiz.items.map((item, index) => {
        const ok = isCorrect(item);
        const question = item.question;
        return el("details", { class: `review-item ${ok ? "review-correct" : "review-wrong"}` },
            el("summary", {},
                el("span", { class: "review-mark", "aria-hidden": "true", text: ok ? "✓" : "✗" }),
                el("span", { class: "visually-hidden", text: ok ? "Correct: " : "Incorrect: " }),
                el("span", { class: "review-summary" },
                    el("span", { class: "review-meta", text: `Q${index + 1} · ${conditionName(question.condition)} · ${STEP_NAMES[question.step]}` }),
                    question.leadIn,
                ),
            ),
            el("div", { class: "review-body" },
                el("p", { class: "vignette", text: question.stem }),
                el("p", {}, el("strong", { text: "Your answer: " }), question.options[item.order[item.chosen]]),
                !ok && el("p", {}, el("strong", { text: "Correct answer: " }), question.options[question.answer]),
                el("p", { class: "review-explanation", text: question.explanation }),
                renderInfo(question),
                el("p", { class: "feedback-review" },
                    "Review: ",
                    el("button", { type: "button", class: "link-button", "data-goto": question.condition, text: conditionName(question.condition) }),
                ),
            ),
        );
    });

    return el("div", { class: "quiz-shell" },
        el("section", { class: "results-hero" },
            el("div", {
                class: "score-ring",
                style: `--score: ${percent}`,
                role: "img",
                "aria-label": `Score ${percent} percent`,
            }, el("span", { text: `${percent}%` })),
            el("div", {},
                el("p", { class: "eyebrow", text: "Quiz complete" }),
                el("h2", { id: "quiz-title", tabindex: "-1", text: `${correct} of ${total} correct` }),
                el("p", { text: scoreMessage(percent) }),
                el("div", { class: "results-actions" },
                    missed.length > 0 && el("button", {
                        type: "button",
                        class: "btn btn-primary",
                        text: `Retry ${missed.length} missed`,
                        onclick: () => startQuiz(missed.map((item) => item.question)),
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
                ),
            ),
        ),
        el("section", { class: "results-section" },
            el("h3", { text: "By topic" }),
            el("p", { class: "results-hint", text: "Weakest first. Select a topic to review it." }),
            breakdownRows(byTopic),
        ),
        byStep.length > 1 && el("section", { class: "results-section" },
            el("h3", { text: "By exam" }),
            breakdownRows(byStep),
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
   "Quiz me" buttons on each condition
========================= */

conditionContents.forEach((article) => {
    const count = QUIZ_QUESTIONS.filter((question) => question.condition === article.id).length;
    if (!count) return;

    const title = article.querySelector(".article-header h2");
    const row = el("div", { class: "header-row" });
    title.replaceWith(row);
    row.append(
        title,
        el("button", {
            type: "button",
            class: "quiz-me",
            "aria-label": `Quiz me on ${conditionName(article.id)}: ${count} questions`,
            onclick: () => openQuiz({ condition: article.id }),
        },
            el("span", { class: "quiz-button-icon", "aria-hidden": "true", text: "?" }),
            "Quiz me",
            el("span", { class: "quiz-me-count", "aria-hidden": "true", text: count }),
        ),
    );
});

if (location.hash === "#quiz") {
    openQuiz({ updateHistory: false });
}
