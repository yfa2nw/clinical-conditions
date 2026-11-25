/* =========================
   Braid drawing
   Seven strands, one per organ system, weave down the side as one cord with a knot at each
   sidebar station. shared/map.js calls drawTract() and adds the dots and leader lines.
========================= */

// Draws the braid and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const axis = width * 0.4;
    const reach = width * 0.2;
    const turn = 150;
    const strandX = (i, y) => axis + reach * Math.sin((y / turn + i / 7) * Math.PI * 2);
    const knotY = (spot) => spot.labelY + 18;

    order.forEach((organ, index) => {
        const cy = knotY(stations[organ]);
        const top = index === 0 ? Math.max(4, stations[organ].top - 30) : knotY(stations[order[index - 1]]);
        const bottom = index === order.length - 1 ? cy + 24 : cy;

        for (let i = 0; i < 7; i += 1) {
            const points = [];
            for (let y = top; y < bottom; y += 5) points.push(`${strandX(i, y).toFixed(1)} ${y.toFixed(1)}`);
            points.push(`${strandX(i, bottom).toFixed(1)} ${bottom.toFixed(1)}`);
            part(organ, `M ${points.join(" L ")}`, `map-strand is-${i}`);
        }

        const x = width * 0.78;
        part(organ, `M ${axis} ${cy} H ${x}`, "map-hair");
        add(svgEl("circle", { cx: axis, cy, r: 7, class: "map-organ", "data-organ": organ }));
        organs[organ] = [x, cy];
    });

    return organs;
}
