/* =========================
   Spine drawing
   Vertebrae and discs run down the side in a gentle curve. At each sidebar station a rib
   leaves the spine. shared/map.js calls drawTract() and adds the dots and leader lines.
========================= */

// Draws the spine and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const step = 19;
    const spineX = (y) => width * 0.28 + 6 * Math.sin(y / 110);
    const ribY = (spot) => spot.labelY + 22;

    order.forEach((organ, index) => {
        const cy = ribY(stations[organ]);
        const top = index === 0 ? 4 : ribY(stations[order[index - 1]]) + step / 2;
        const bottom = cy + step / 2;
        const count = Math.max(1, Math.round((bottom - top) / step));
        const height = (bottom - top) / count;

        // The rib passes behind its vertebra
        const x = spineX(cy);
        const tip = [width * 0.74, cy + 16];
        part(organ, `M ${x} ${bottom - height / 2} C ${x + 16} ${cy - 14}, ${tip[0] - 6} ${cy - 10}, ${tip[0]} ${tip[1]}`, "map-rib");

        for (let i = 0; i < count; i += 1) {
            const y = top + height * (i + 0.5);
            const vx = spineX(y);
            const half = height / 2 - 2.5;
            if (i < count - 1 || index < order.length - 1) {
                const dx = spineX(y + height / 2);
                part(organ, `M ${dx - 7} ${y + height / 2} H ${dx + 7}`, "map-disc");
            }
            // A body with waisted sides and short processes
            add(svgEl("path", {
                d: `M ${vx - 11} ${y - half} H ${vx + 11} Q ${vx + 8} ${y - 2} ${vx + 16} ${y - 1} V ${y + 2} Q ${vx + 9} ${y + 2} ${vx + 11} ${y + half} H ${vx - 11} Q ${vx - 9} ${y + 2} ${vx - 16} ${y + 2} V ${y - 1} Q ${vx - 8} ${y - 2} ${vx - 11} ${y - half} Z`,
                class: "map-organ map-vertebra",
                "data-organ": organ,
            }));
        }
        organs[organ] = tip;
    });

    return organs;
}
