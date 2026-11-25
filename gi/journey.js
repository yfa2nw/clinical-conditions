/* =========================
   Food's journey
   An article with data-stop has a tube down its sections and a bolus that moves down it as
   the reader scrolls. Food never enters the organs beside the tract, so their tube takes the
   branch color.
   (uses contentPanel from app.js)
========================= */

const JOURNEY_BRANCHES = ["liver", "biliary", "pancreas", "appendix"];

document.querySelectorAll(".condition-content[data-stop]").forEach((article) => {
    article.classList.add("journey-page");
    if (JOURNEY_BRANCHES.includes(article.dataset.stop)) article.classList.add("is-branch");

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
