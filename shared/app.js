const SITE_NAME = "Clinical Conditions";

const conditionButtons = [...document.querySelectorAll(".condition-item")];
const conditionContents = [...document.querySelectorAll(".condition-content")];
const contentPanel = document.getElementById("content-panel");
const viewStatus = document.getElementById("view-status");
const searchInput = document.getElementById("condition-search");
const searchHint = document.getElementById("search-hint");
const noResults = document.getElementById("no-results");
const themeToggle = document.getElementById("theme-toggle");
const quizView = document.getElementById("quiz");
const quizButton = document.getElementById("quiz-button");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const scrollBehavior = () => (reducedMotion.matches ? "auto" : "smooth");

function buttonFor(id) {
    return conditionButtons.find((button) => button.dataset.condition === id);
}

function labelFor(id) {
    return buttonFor(id).firstChild.textContent.trim();
}

/* =========================
   Per-condition header, section jump bar and prev/next footer
========================= */

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

conditionContents.forEach((article) => {
    const title = article.querySelector("h2");
    title.id = `${article.id}-title`;
    title.tabIndex = -1;
    article.setAttribute("aria-labelledby", title.id);

    const header = document.createElement("header");
    header.className = "article-header";
    title.replaceWith(header);
    header.appendChild(title);

    const sections = [...article.querySelectorAll(".content-section > h3")];
    if (sections.length) {
        const nav = document.createElement("nav");
        nav.className = "section-nav";
        nav.setAttribute("aria-label", "Jump to section");

        sections.forEach((heading) => {
            heading.id = `${article.id}-${slugify(heading.textContent)}`;

            const link = document.createElement("a");
            link.className = "section-link";
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent.replace("Symptoms and complications", "Symptoms");
            link.dataset.target = heading.id;
            nav.appendChild(link);
        });

        header.appendChild(nav);
    }

    const progress = document.createElement("div");
    progress.className = "read-progress";
    progress.setAttribute("aria-hidden", "true");
    header.appendChild(progress);

    // Prev / next follow the sidebar order
    const order = conditionButtons.map((button) => button.dataset.condition);
    const position = order.indexOf(article.id);
    const footer = document.createElement("footer");
    footer.className = "article-footer";

    [["prev", order[position - 1]], ["next", order[position + 1]]].forEach(([direction, id]) => {
        if (!id) {
            footer.appendChild(document.createElement("span"));
            return;
        }
        const link = document.createElement("button");
        link.type = "button";
        link.className = `pager pager-${direction}`;
        link.dataset.goto = id;
        link.innerHTML = `<span class="pager-label">${direction === "prev" ? "Previous" : "Next"}</span>
            <span class="pager-title">${labelFor(id)}</span>`;
        footer.appendChild(link);
    });

    article.appendChild(footer);
});

/* =========================
   Showing a condition
========================= */

let activeArticle = conditionContents.find((article) => article.classList.contains("active"));

function showCondition(id, { updateHistory = true, focusTitle = false } = {}) {
    const selectedContent = document.getElementById(id);
    if (!selectedContent || !selectedContent.classList.contains("condition-content")) return;

    conditionButtons.forEach((button) => {
        const isSelected = button.dataset.condition === id;
        button.classList.toggle("active", isSelected);

        if (isSelected) {
            button.setAttribute("aria-current", "true");
            // Keeps the pill visible in the sideways-scrolling phone layout
            button.scrollIntoView({ block: "nearest", inline: "nearest" });
        } else {
            button.removeAttribute("aria-current");
        }
    });

    conditionContents.forEach((section) => {
        section.classList.toggle("active", section === selectedContent);
    });
    activeArticle = selectedContent;

    quizView.classList.remove("active");
    quizButton.classList.remove("active");
    quizButton.removeAttribute("aria-current");

    // Return the right panel to the top when switching conditions
    contentPanel.scrollTop = 0;
    updateScrollState();
    highlightMatches();

    if (updateHistory && location.hash !== `#${id}`) {
        history.pushState({ condition: id }, "", `#${id}`);
    }

    document.title = `${labelFor(id)} · ${SITE_NAME}`;
    viewStatus.textContent = `Showing ${selectedContent.querySelector("h2").textContent}`;

    if (focusTitle) {
        selectedContent.querySelector("h2").focus({ preventScroll: true });
    }
}

conditionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showCondition(button.dataset.condition);
        scrollToFirstMatch();
    });
});

// Links to pages that haven't been written yet stay visible but inactive
document.querySelectorAll("[data-goto]").forEach((link) => {
    if (document.getElementById(link.dataset.goto)) return;
    link.disabled = true;
    link.classList.add("is-pending");
    link.title = "Not added yet";
    link.insertAdjacentHTML("beforeend", '<span class="visually-hidden"> (not added yet)</span>');
});

// Cross-links and prev/next live inside the content, so move focus with them
document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-goto]");
    if (link) showCondition(link.dataset.goto, { focusTitle: true });
});

function conditionFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    return conditionContents.some((article) => article.id === id) ? id : null;
}

window.addEventListener("popstate", () => {
    if (location.hash === "#quiz") {
        openQuiz({ updateHistory: false });
        return;
    }
    showCondition(conditionFromHash() || conditionContents[0].id, { updateHistory: false });
});

/* =========================
   Section jump bar: smooth scroll + highlight the section in view
========================= */

function headerOffset() {
    return activeArticle.querySelector(".article-header").offsetHeight + 16;
}

document.addEventListener("click", (event) => {
    const link = event.target.closest(".section-link");
    if (!link) return;
    event.preventDefault();

    const heading = document.getElementById(link.dataset.target);
    contentPanel.scrollTo({
        top: heading.closest(".content-section").offsetTop - headerOffset(),
        behavior: scrollBehavior(),
    });
});

function updateScrollState() {
    const header = activeArticle.querySelector(".article-header");
    const maxScroll = contentPanel.scrollHeight - contentPanel.clientHeight;
    const progress = maxScroll > 0 ? contentPanel.scrollTop / maxScroll : 1;

    header.querySelector(".read-progress").style.setProperty("--progress", progress);
    header.classList.toggle("stuck", contentPanel.scrollTop > 8);

    const links = [...header.querySelectorAll(".section-link")];
    if (!links.length) return;

    // The current section is the last one whose top has passed under the header
    const line = contentPanel.scrollTop + headerOffset() + 40;
    let current = links[0];
    links.forEach((link) => {
        const section = document.getElementById(link.dataset.target).closest(".content-section");
        if (section.offsetTop <= line) current = link;
    });
    if (progress > 0.995) current = links[links.length - 1];

    links.forEach((link) => {
        if (link === current) {
            link.setAttribute("aria-current", "true");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

let scrollFrame = null;
contentPanel.addEventListener("scroll", () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
        scrollFrame = null;
        updateScrollState();
    });
});

/* =========================
   Search: filter the sidebar by name or by anything in a condition's text
========================= */

const searchIndex = conditionButtons.map((button) => ({
    button,
    name: button.textContent.toLowerCase(),
    // Sections only: the Previous/Next buttons would match the neighbouring conditions
    text: [...document.getElementById(button.dataset.condition).querySelectorAll(".content-section")]
        .map((section) => section.textContent).join(" ").toLowerCase(),
}));

function currentQuery() {
    return searchInput.value.trim().toLowerCase();
}

// Non-matching conditions are dimmed on the map (and hidden in the phone layout) rather
// than removed, so the drawing keeps its shape while searching
function isListed(button) {
    return !button.classList.contains("filtered-out");
}

function filterConditions() {
    const query = currentQuery();
    let matchCount = 0;

    searchIndex.forEach(({ button, name, text }) => {
        const nameMatch = name.includes(query);
        const textMatch = !nameMatch && query.length > 1 && text.includes(query);
        const visible = !query || nameMatch || textMatch;

        button.classList.toggle("filtered-out", !visible);
        button.classList.toggle("text-match", Boolean(query) && textMatch);
        if (visible) matchCount += 1;
    });

    document.querySelectorAll(".station").forEach((station) => {
        const hasListed = [...station.querySelectorAll(".condition-item")].some(isListed);
        station.classList.toggle("filtered-out", !hasListed);
    });

    noResults.hidden = matchCount > 0;
    searchHint.textContent = query
        ? `${matchCount} ${matchCount === 1 ? "condition" : "conditions"} found`
        : "";

    highlightMatches();
}

searchInput.addEventListener("input", filterConditions);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const first = conditionButtons.find(isListed);
        if (first) first.click();
    } else if (event.key === "Escape" && searchInput.value) {
        event.stopPropagation();
        searchInput.value = "";
        filterConditions();
    } else if (event.key === "ArrowDown") {
        event.preventDefault();
        const first = conditionButtons.find(isListed);
        if (first) first.focus();
    }
});

// Mark search matches inside the open condition (where the browser supports it)
const canHighlight = typeof CSS !== "undefined" && "highlights" in CSS && typeof Highlight !== "undefined";

function matchRanges() {
    const query = currentQuery();
    if (query.length < 2) return [];

    const ranges = [];
    const walker = document.createTreeWalker(activeArticle, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        const text = node.textContent.toLowerCase();
        let index = text.indexOf(query);
        while (index !== -1) {
            const range = document.createRange();
            range.setStart(node, index);
            range.setEnd(node, index + query.length);
            ranges.push(range);
            index = text.indexOf(query, index + query.length);
        }
    }
    return ranges;
}

function highlightMatches() {
    if (!canHighlight) return;
    CSS.highlights.delete("search-match");
    const ranges = matchRanges();
    if (ranges.length) CSS.highlights.set("search-match", new Highlight(...ranges));
}

function scrollToFirstMatch() {
    const [first] = matchRanges();
    if (!first) return;

    const rangeTop = first.getBoundingClientRect().top;
    const panelTop = contentPanel.getBoundingClientRect().top;
    contentPanel.scrollTo({
        top: contentPanel.scrollTop + rangeTop - panelTop - headerOffset() - 24,
        behavior: scrollBehavior(),
    });
}

/* =========================
   Keyboard shortcuts
========================= */

// Arrow keys move between conditions in the sidebar
document.querySelector(".condition-list").addEventListener("keydown", (event) => {
    const visible = conditionButtons.filter(isListed);
    const index = visible.indexOf(document.activeElement);
    if (index === -1) return;

    let next = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = visible[index + 1];
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = index === 0 ? searchInput : visible[index - 1];
    if (event.key === "Home") next = visible[0];
    if (event.key === "End") next = visible[visible.length - 1];

    if (next) {
        event.preventDefault();
        next.focus();
        if (next !== searchInput) next.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
});

// "/" jumps to search from anywhere
document.addEventListener("keydown", (event) => {
    const typing = event.target instanceof Element && event.target.closest("input, textarea, [contenteditable]");
    if (event.key === "/" && !typing && !event.ctrlKey && !event.metaKey && !event.altKey) {
        event.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
});

/* =========================
   Theme toggle (follows the system until the user picks one)
========================= */

const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function effectiveTheme() {
    return document.documentElement.dataset.theme || (systemDark.matches ? "dark" : "light");
}

function syncThemeToggle() {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${next} theme`);
    themeToggle.title = `Switch to ${next} theme`;
}

themeToggle.addEventListener("click", () => {
    const next = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
        localStorage.setItem("clinical-theme", next);
    } catch (error) {}
    syncThemeToggle();
});

systemDark.addEventListener("change", syncThemeToggle);
syncThemeToggle();

/* =========================
   Child-Pugh calculator: one choice per row, total gives the class
========================= */

const CHILD_PUGH_CLASSES = [
    { name: "A", max: 6, survival: "about 100%" },
    { name: "B", max: 9, survival: "about 80%" },
    { name: "C", max: 15, survival: "about 45%" },
];

document.querySelectorAll(".cp-calc").forEach((form) => {
    const result = form.querySelector(".cp-result");
    const rowCount = form.querySelectorAll("tbody tr").length;
    const classItems = form.querySelectorAll(".cp-classes li");

    function update() {
        const picked = [...form.querySelectorAll("input:checked")];
        let match = null;

        if (picked.length < rowCount) {
            result.textContent = `${picked.length} of ${rowCount} selected`;
        } else {
            const score = picked.reduce((total, input) => total + Number(input.value), 0);
            match = CHILD_PUGH_CLASSES.find((childPughClass) => score <= childPughClass.max);
            result.replaceChildren(
                "Score ",
                Object.assign(document.createElement("strong"), { textContent: score }),
                " · ",
                Object.assign(document.createElement("strong"), { textContent: `Class ${match.name}` }),
                ` · 1-year survival ${match.survival}`,
            );
        }

        classItems.forEach((item) => {
            item.classList.toggle("is-match", Boolean(match) && item.dataset.class === match.name);
        });
    }

    form.addEventListener("change", update);
    // Reset fires before the inputs clear, so update afterwards
    form.addEventListener("reset", () => setTimeout(update));
});

/* =========================
   Abbreviation tooltip
========================= */

const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.id = "term-tooltip";
tooltip.setAttribute("role", "tooltip");
document.body.appendChild(tooltip);

const TOOLTIP_MARGIN = 8;
let tooltipTerm = null;

function showTooltip(term) {
    if (tooltipTerm && tooltipTerm !== term) tooltipTerm.removeAttribute("aria-describedby");
    tooltipTerm = term;
    term.setAttribute("aria-describedby", tooltip.id);

    tooltip.textContent = term.dataset.definition;

    // Reset position so the tooltip measures at its natural size
    tooltip.style.left = "0px";
    tooltip.style.top = "0px";
    tooltip.classList.remove("below");

    const termRect = term.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();

    // Center over the term, then keep inside the window
    let left = termRect.left + termRect.width / 2 - tipRect.width / 2;
    left = Math.max(
        TOOLTIP_MARGIN,
        Math.min(left, window.innerWidth - tipRect.width - TOOLTIP_MARGIN)
    );

    // Above the term, or below if there isn't room
    let top = termRect.top - tipRect.height - TOOLTIP_MARGIN;
    if (top < TOOLTIP_MARGIN) {
        top = termRect.bottom + TOOLTIP_MARGIN;
        tooltip.classList.add("below");
    }

    // Point the arrow at the term even when the tooltip is clamped to the window
    const arrowX = termRect.left + termRect.width / 2 - left;
    tooltip.style.setProperty("--arrow-x", `${Math.max(12, Math.min(arrowX, tipRect.width - 12))}px`);

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.classList.add("visible");
}

function hideTooltip() {
    tooltip.classList.remove("visible");
    if (tooltipTerm) tooltipTerm.removeAttribute("aria-describedby");
    tooltipTerm = null;
}

document.addEventListener("mouseover", (event) => {
    const term = event.target.closest(".term");
    if (term) showTooltip(term);
});

document.addEventListener("mouseout", (event) => {
    const term = event.target.closest(".term");
    if (term && document.activeElement !== term) hideTooltip();
});

document.addEventListener("focusin", (event) => {
    const term = event.target.closest(".term");
    if (term) showTooltip(term);
});

document.addEventListener("focusout", (event) => {
    if (event.target.closest(".term")) hideTooltip();
});

// Hide when anything scrolls or resizes, so it never floats away from its term
document.addEventListener("scroll", hideTooltip, true);
window.addEventListener("resize", hideTooltip);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideTooltip();
});

/* =========================
   Review article popup
   A <dialog class="quick-review"> inside an article gets a button above the page's footer.
========================= */

document.querySelectorAll("dialog.quick-review").forEach((dialog) => {
    const opener = document.createElement("button");
    opener.type = "button";
    opener.className = "quick-review-open";
    opener.innerHTML = `<span class="quick-review-title">Review article</span>
        <span class="quick-review-hint">A short journal-style review of this condition and how it relates to others</span>`;
    dialog.closest(".condition-content").querySelector(".article-footer").before(opener);

    const closer = document.createElement("button");
    closer.type = "button";
    closer.className = "quick-review-close";
    closer.setAttribute("aria-label", "Close review article");
    closer.textContent = "×";
    dialog.prepend(closer);

    opener.addEventListener("click", () => {
        dialog.showModal();
        dialog.append(tooltip); // the page's tooltip would otherwise sit behind the popup
    });
    closer.addEventListener("click", () => dialog.close());

    dialog.addEventListener("close", () => {
        hideTooltip();
        document.body.append(tooltip);
    });

    dialog.addEventListener("click", (event) => {
        const clickedBackdrop = event.target === dialog;
        if (clickedBackdrop || event.target.closest("[data-goto]")) dialog.close();
    });
});

/* =========================
   Start-up
========================= */

const initialCondition = conditionFromHash();
if (initialCondition) {
    showCondition(initialCondition, { updateHistory: false });
} else if (location.hash === "#quiz") {
    // quiz.js opens the quiz once it has loaded
    updateScrollState();
} else {
    history.replaceState({ condition: activeArticle.id }, "", `#${activeArticle.id}`);
    updateScrollState();
}
