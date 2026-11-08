/* =========================
   Tubule drawing
   Water flows down one winding tubule, through a glomerulus at each sidebar station.
   shared/map.js calls drawTract() and adds the dots and leader lines.
========================= */

// Draws the tubule and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const nodeY = (spot) => spot.labelY + 20;
    const nodeX = (index) => width * (index % 2 === 0 ? 0.6 : 0.34);

    order.forEach((organ, index) => {
        const cx = nodeX(index);
        const cy = nodeY(stations[organ]);
        const fromX = index === 0 ? cx : nodeX(index - 1);
        const fromY = index === 0 ? 4 : nodeY(stations[order[index - 1]]) + 12;
        const endY = cy - 12;
        const bend = (endY - fromY) * 0.55;
        const tube = `M ${fromX} ${fromY} C ${fromX} ${fromY + bend}, ${cx} ${endY - bend}, ${cx} ${endY}`;

        part(organ, tube, "map-thick map-tubule");
        add(svgEl("path", { d: tube, pathLength: 100, class: "map-flow", "data-organ": organ }));

        // A glomerulus: the capsule with a looped capillary tuft
        add(svgEl("circle", { cx, cy, r: 12, class: "map-organ", "data-organ": organ }));
        part(organ, `M ${cx - 6} ${cy + 2} c 0 -9 6 -9 6 -2 c 0 -9 7 -8 6 0 c 4 6 -3 9 -6 5 c -2 5 -7 3 -6 -3`, "map-thin");
        organs[organ] = [cx, cy];
    });

    return organs;
}
