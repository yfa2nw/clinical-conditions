/* =========================
   Hormone web drawing
   A signal runs down a central axis, and each sidebar station is a gland on a thread
   from it, linked to the next gland. shared/map.js calls drawTract() and adds the dots
   and leader lines.
========================= */

// A small hexagon for a gland
function glandPath(cx, cy, r) {
    const points = Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i + Math.PI / 6;
        return `${(cx + r * Math.cos(angle)).toFixed(1)} ${(cy + r * Math.sin(angle)).toFixed(1)}`;
    });
    return `M ${points.join(" L ")} Z`;
}

// Draws the web and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const axisX = width * 0.18;
    const gland = (index, spot) => [width * (index % 2 === 0 ? 0.62 : 0.5), spot.labelY + 20];

    order.forEach((organ, index) => {
        const spot = stations[organ];
        const [cx, cy] = gland(index, spot);
        const top = index === 0 ? 4 : stations[order[index - 1]].labelY + 20;

        // The axis segment down to this gland, and the thread out to it
        part(organ, `M ${axisX} ${top} L ${axisX} ${cy}`, "map-thick");
        const thread = `M ${axisX} ${cy - 22} Q ${axisX + (cx - axisX) * 0.35} ${cy} ${cx - 11} ${cy}`;
        part(organ, thread, "map-thin");
        add(svgEl("path", { d: thread, pathLength: 100, class: "map-flow", "data-organ": organ }));

        // A fine link to the previous gland completes the web
        if (index > 0) {
            const [px, py] = gland(index - 1, stations[order[index - 1]]);
            part(organ, `M ${px} ${py + 11} Q ${(px + cx) / 2 + 14} ${(py + cy) / 2} ${cx} ${cy - 11}`, "map-hair");
        }

        add(svgEl("path", { d: glandPath(cx, cy, 11), class: "map-organ", "data-organ": organ }));
        organs[organ] = [cx, cy];
    });

    return organs;
}
