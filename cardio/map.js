/* =========================
   Blood vessel drawing
   An artery runs down one side and a vein up the other. At each sidebar station an
   arteriole leaves the artery, opens into a capillary bed, and drains into the vein.
   shared/map.js calls drawTract() and adds the dots and leader lines.
========================= */

// Draws the vessels and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const arteryX = width * 0.16;
    const veinX = width * 0.76;
    const bedLeft = width * 0.3;
    const bedRight = width * 0.62;
    const bedY = (spot) => spot.labelY + 30;

    const flow = (organ, d) => add(svgEl("path", { d, class: "map-flow", "data-organ": organ }));

    order.forEach((organ, index) => {
        const cy = bedY(stations[organ]);
        const top = index === 0 ? 4 : bedY(stations[order[index - 1]]) - 14;
        const bottom = cy - 14;
        const mid = (top + bottom) / 2;
        const sway = index === 0 ? 0 : 6;

        // The great vessels down to this station, swaying a little between branches
        const artery = `M ${arteryX} ${top} C ${arteryX - sway} ${mid}, ${arteryX + sway} ${mid}, ${arteryX} ${bottom}`;
        const vein = `M ${veinX} ${bottom} C ${veinX + sway} ${mid}, ${veinX - sway} ${mid}, ${veinX} ${top}`;
        part(organ, artery, "map-thick map-artery");
        part(organ, vein, "map-thick map-vein");

        // Arteriole, capillary bed, and venule
        const arteriole = `M ${arteryX} ${bottom} C ${arteryX} ${cy - 2}, ${arteryX + 6} ${cy}, ${bedLeft} ${cy}`;
        const venule = `M ${bedRight} ${cy} C ${veinX - 6} ${cy}, ${veinX} ${cy - 2}, ${veinX} ${bottom}`;
        part(organ, arteriole, "map-thin map-artery");
        part(organ, venule, "map-thin map-vein");
        // Unevenly winding capillaries, so the bed reads as a mesh
        [[-20, -2], [-12, 8], [0, -9], [4, 14], [20, 10]].forEach(([first, second]) => {
            const third = (bedRight - bedLeft) / 3;
            part(organ, `M ${bedLeft} ${cy} C ${bedLeft + third * 0.6} ${cy + first}, ${bedRight - third * 0.6} ${cy + second}, ${bedRight} ${cy}`, "map-hair map-capillary");
        });

        [artery, arteriole, venule, vein].forEach((d) => flow(organ, d));
        organs[organ] = [veinX, bottom];
    });

    return organs;
}
