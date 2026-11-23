/* =========================
   Bronchial tree drawing
   An airway ringed with cartilage runs down the side. At each sidebar station it gives
   off a bronchus that branches into bronchioles and alveoli.
   shared/map.js calls drawTract() and adds the dots and leader lines.
========================= */

// Draws the tree and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const airX = width * 0.2;
    const splitX = width * 0.42;
    const tipX = width * 0.68;
    const branchY = (spot) => spot.labelY + 30;

    order.forEach((organ, index) => {
        const cy = branchY(stations[organ]);
        const top = index === 0 ? 0 : branchY(stations[order[index - 1]]) - 18;
        const bottom = cy - 18;

        const airway = `M ${airX} ${top} V ${bottom}`;
        part(organ, airway, "map-airway");
        part(organ, airway, "map-ring");

        // The bronchus, its bronchioles, and an alveolus at each tip
        const bronchus = `M ${airX} ${bottom - 4} C ${airX} ${cy - 6}, ${airX + 8} ${cy}, ${splitX} ${cy}`;
        part(organ, bronchus, "map-bronchus");
        const tips = [[tipX - 8, cy - 18], [tipX + 4, cy - 2], [tipX - 8, cy + 15]];
        tips.forEach(([x, y]) => part(organ, `M ${splitX} ${cy} Q ${(splitX + x) / 2} ${cy}, ${x} ${y}`, "map-bronchiole"));
        tips.forEach(([x, y]) => add(svgEl("circle", { cx: x, cy: y, r: 8, class: "map-organ", "data-organ": organ })));

        [airway, bronchus].forEach((d) => add(svgEl("path", { d, class: "map-flow", "data-organ": organ })));
        organs[organ] = tips[1];
    });

    return organs;
}
