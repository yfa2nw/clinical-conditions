/* =========================
   Food's journey
   An article with data-stop gets a strip showing where it sits on the way from the mouth
   to the rectum, and a bolus that moves down the page's tube as the reader scrolls.
   (uses contentPanel from app.js)
========================= */

const JOURNEY_STOPS = [
    { id: "mouth", name: "Mouth", x: 34, shape: '<ellipse cx="34" cy="44" rx="17" ry="11"/>' },
    { id: "esophagus", name: "Esophagus", x: 122, shape: '<path d="M52 44H192"/>' },
    { id: "stomach", name: "Stomach", x: 246, shape: '<path d="M192 44C202 8 270 2 288 36C294 50 302 50 314 44"/>' },
    { id: "small-intestine", name: "Small intestine", x: 436, shape: '<path d="M314 44c12-30 30-30 38 0s26 30 38 0 26-30 38 0 26 30 38 0 26-30 38 0 26 30 38 0"/>' },
    { id: "colon", name: "Colon", x: 656, shape: '<path d="M542 44C566 2 742 2 768 44"/>' },
    { id: "rectum", name: "Rectum", x: 812, shape: '<path d="M768 44H858"/>' },
];

// Food never enters these organs, so they branch off the tract
const JOURNEY_BRANCHES = {
    liver: {
        name: "Liver",
        x: 402,
        y: -40,
        shape: '<path class="journey-branch" d="M340 -32C352 -62 430 -66 462 -50C482 -40 474 -24 454 -18C420 -8 380 -4 356 -8C336 -12 334 -20 340 -32Z"/>',
        link: '<path class="journey-link" d="M408 -10V18"/>',
        label: "Portal vein",
        nameX: 494,
        labelX: 464,
    },
    biliary: {
        name: "Biliary tree",
        x: 304,
        y: -40,
        shape: '<path class="journey-branch" d="M276 -58C262 -44 268 -18 296 -16C326 -14 340 -42 322 -56C310 -64 288 -66 276 -58Z"/>',
        link: '<path class="journey-link" d="M312 -16C316 0 318 16 318 34"/>',
        label: "Bile duct",
        nameX: 394,
        labelX: 372,
    },
    pancreas: {
        name: "Pancreas",
        x: 420,
        y: -40,
        shape: '<path class="journey-branch" d="M340 -28C352 -52 430 -60 490 -48C510 -38 488 -22 440 -20C394 -18 346 -14 340 -28Z"/>',
        link: '<path class="journey-link" d="M372 -20C366 -4 362 14 360 34"/>',
        label: "Pancreatic duct",
        nameX: 552,
        labelX: 430,
    },
    appendix: {
        name: "Appendix",
        x: 520,
        y: -44,
        shape: '<path class="journey-worm" d="M556 22C540 0 516 -14 520 -42"/>',
        link: "",
        label: "",
        nameX: 590,
        labelX: 0,
    },
};

function journeyStrip(current) {
    const branch = JOURNEY_BRANCHES[current];
    if (branch) return branchStrip(current, branch);

    const index = JOURNEY_STOPS.findIndex((stop) => stop.id === current);
    const here = JOURNEY_STOPS[index];

    const strip = document.createElement("figure");
    strip.className = "journey-strip";
    strip.innerHTML = `
        <svg viewBox="0 0 892 92" role="img" aria-label="Food's journey: stop ${index + 1} of ${JOURNEY_STOPS.length}, ${here.name}">
            ${JOURNEY_STOPS.map((stop) => `<g class="journey-organ${stop.id === current ? " is-here" : ""}" data-organ="${stop.id}">${stop.shape}</g>`).join("")}
            ${JOURNEY_STOPS.map((stop) => `<text class="journey-name${stop.id === current ? " is-here" : ""}" x="${stop.x}" y="86">${stop.name}</text>`).join("")}
            <ellipse class="journey-food" cx="${here.x}" cy="44" rx="11" ry="9"/>
        </svg>
        <figcaption>Stop ${index + 1} of ${JOURNEY_STOPS.length}: ${here.name}</figcaption>`;
    return strip;
}

function branchStrip(current, branch) {
    const strip = document.createElement("figure");
    strip.className = "journey-strip";
    strip.innerHTML = `
        <svg viewBox="0 -72 892 164" role="img" aria-label="Food's journey: side branch to the ${branch.name}">
            ${JOURNEY_STOPS.map((stop) => `<g class="journey-organ" data-organ="${stop.id}">${stop.shape}</g>`).join("")}
            ${JOURNEY_STOPS.map((stop) => `<text class="journey-name" x="${stop.x}" y="86">${stop.name}</text>`).join("")}
            ${branch.link}${branch.shape}
            <text class="journey-name is-here" x="${branch.nameX}" y="${branch.y + 8}">${branch.name}</text>
            <text class="journey-name" x="${branch.labelX}" y="10">${branch.label}</text>
            <ellipse class="journey-food" cx="${branch.x}" cy="${branch.y + 2}" rx="11" ry="9"/>
        </svg>
        <figcaption>Side branch: ${branch.name}</figcaption>`;
    return strip;
}

document.querySelectorAll(".condition-content[data-stop]").forEach((article) => {
    article.classList.add("journey-page");
    if (JOURNEY_BRANCHES[article.dataset.stop]) article.classList.add("is-branch");
    article.querySelector(".content-section").before(journeyStrip(article.dataset.stop));

    const bolus = document.createElement("span");
    bolus.className = "journey-bolus";
    bolus.setAttribute("aria-hidden", "true");
    article.append(bolus);

    // The bolus runs the length of the tube, in step with how far the page has scrolled
    function moveBolus() {
        const sections = article.querySelectorAll(".content-section");
        if (!sections.length || !article.offsetHeight) return;

        const base = article.getBoundingClientRect().top;
        const start = sections[0].getBoundingClientRect().top - base + 38; // clears the first section's marker
        const end = sections[sections.length - 1].getBoundingClientRect().bottom - base - bolus.offsetHeight;
        const left = sections[0].getBoundingClientRect().left - article.getBoundingClientRect().left;
        const scrollable = contentPanel.scrollHeight - contentPanel.clientHeight;
        const progress = scrollable > 0 ? Math.min(1, contentPanel.scrollTop / scrollable) : 0;

        bolus.style.left = `${left}px`;
        bolus.style.transform = `translateY(${start + (end - start) * progress}px)`;
    }

    contentPanel.addEventListener("scroll", moveBolus, { passive: true });
    window.addEventListener("hashchange", () => requestAnimationFrame(moveBolus));
    new ResizeObserver(moveBolus).observe(article);
    moveBolus();
});
