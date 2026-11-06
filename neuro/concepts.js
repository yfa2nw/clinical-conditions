/* =========================
   Shared concepts
   Mark a term with <span class="concept" data-concept="key">. A key used in more than one
   condition adds a panel linking those pages. The mark itself is invisible.
   (uses conditionContents and labelFor from app.js)
========================= */

const conceptHomes = new Map(); // concept key -> { name, ids of the conditions using it }

conditionContents.forEach((article) => {
    article.querySelectorAll(".concept").forEach((concept) => {
        const key = concept.dataset.concept;
        if (!conceptHomes.has(key)) conceptHomes.set(key, { name: concept.textContent.trim(), ids: new Set() });
        conceptHomes.get(key).ids.add(article.id);
    });
});

conditionContents.forEach((article) => {
    const shared = [...conceptHomes.values()].filter(({ ids }) => ids.has(article.id) && ids.size > 1);
    if (!shared.length) return;

    const panel = document.createElement("div"); // not a <section>: the axon's end relies on :last-of-type
    panel.className = "shared-concepts";
    const heading = document.createElement("h3");
    heading.textContent = "Shared concepts";
    const list = document.createElement("ul");

    shared.forEach(({ name, ids }) => {
        const item = document.createElement("li");
        item.append(`${name}: `);
        [...ids].filter((id) => id !== article.id).forEach((id) => {
            const link = document.createElement("button");
            link.type = "button";
            link.className = "link-button";
            link.dataset.goto = id;
            link.textContent = labelFor(id);
            item.append(link, " ");
        });
        list.append(item);
    });

    panel.append(heading, list);
    article.querySelector(".article-footer").before(panel);
});
