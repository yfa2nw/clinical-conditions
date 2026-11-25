/* =========================
   GI tract drawing
   One tube from the mouth to the rectum: straight in the esophagus, a bean for the stomach,
   a gentle wave in the small bowel, and thick in the colon. The liver, gallbladder, pancreas,
   and appendix are small shapes beside it, each joined by one line, and stations off the
   tract are plain beads. shared/map.js calls drawTract() and adds the dots and leader lines.
========================= */

// How each station is drawn; a station not listed here sits on the tract as a plain tube
const SIDE_ORGANS = {
    hepatitis: "liver",
    liver: "liver",
    cirrhosis: "liver",
    biliary: "gallbladder",
    pancreas: "pancreas",
    appendix: "appendix",
};
const OFF_TRACT = ["special", "pharmacology"];
const SMALL_BOWEL = ["small-intestine", "bowel", "obstruction"];

const SIDE_SHAPES = {
    liver: (x, y) => `M ${x - 15} ${y - 8} C ${x - 8} ${y - 15}, ${x + 12} ${y - 14}, ${x + 16} ${y - 5} C ${x + 16} ${y + 2}, ${x + 2} ${y + 10}, ${x - 8} ${y + 12} C ${x - 18} ${y + 12}, ${x - 19} ${y}, ${x - 15} ${y - 8} Z`,
    gallbladder: (x, y) => `M ${x + 3} ${y - 11} C ${x + 8} ${y - 3}, ${x + 10} ${y + 12}, ${x} ${y + 12} C ${x - 10} ${y + 12}, ${x - 8} ${y - 3}, ${x - 3} ${y - 11} Z`,
    pancreas: (x, y) => `M ${x - 17} ${y + 4} C ${x - 12} ${y - 8}, ${x + 8} ${y - 10}, ${x + 16} ${y - 6} C ${x + 18} ${y + 2}, ${x + 8} ${y + 7}, ${x - 4} ${y + 6} C ${x - 10} ${y + 8}, ${x - 18} ${y + 10}, ${x - 17} ${y + 4} Z`,
    appendix: (x, y) => `M ${x + 10} ${y - 8} C ${x - 2} ${y - 10}, ${x - 10} ${y - 2}, ${x - 9} ${y + 8} C ${x - 8} ${y + 13}, ${x - 2} ${y + 12}, ${x - 2} ${y + 7} C ${x - 3} ${y + 1}, ${x + 4} ${y - 2}, ${x + 10} ${y - 1} Z`,
};

// Draws the tract and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part, note }) {
    const order = Object.keys(stations);
    const organs = {};
    const x = width * 0.66; // the tube
    const sideX = width * 0.26; // the organs beside it
    const pointY = (spot) => spot.labelY + 16;
    const onTract = order.filter((organ) => !OFF_TRACT.includes(organ));
    const lastTube = onTract.filter((organ) => !SIDE_ORGANS[organ]).pop();

    /* ----- Mouth ----- */
    let y = stations[order[0]].top + 14;
    add(svgEl("ellipse", { cx: x, cy: y, rx: 9, ry: 5, class: "map-organ", "data-organ": order[0] }));
    note("mouth", x - 14, y + 4, "end");
    y += 5;

    /* ----- The tube, one stretch per station ----- */
    onTract.forEach((organ) => {
        const spot = stations[organ];
        const next = stations[onTract[onTract.indexOf(organ) + 1]];
        const end = next ? next.top + 10 : spot.bottom - 6;
        const cy = pointY(spot);

        if (SMALL_BOWEL.includes(organ)) {
            const waves = Math.max(1, Math.round((end - y) / 34));
            const step = (end - y) / waves;
            let d = `M ${x} ${y}`;
            for (let i = 0; i < waves; i += 1) {
                const side = i % 2 === 0 ? 11 : -11;
                d += ` C ${x + side} ${y + step * (i + 0.25)}, ${x + side} ${y + step * (i + 0.75)}, ${x} ${y + step * (i + 1)}`;
            }
            part(organ, d);
        } else if (organ === "stomach") {
            part(organ, `M ${x} ${y} V ${end}`);
            add(svgEl("path", {
                d: `M ${x - 6} ${cy - 18} C ${x + 18} ${cy - 22}, ${x + 22} ${cy + 18}, ${x - 2} ${cy + 22} C ${x - 14} ${cy + 22}, ${x - 12} ${cy + 8}, ${x - 2} ${cy + 4} C ${x + 4} ${cy - 2}, ${x - 8} ${cy - 8}, ${x - 6} ${cy - 18} Z`,
                class: "map-organ",
                "data-organ": organ,
            }));
        } else {
            // Beside a side organ the tube passes by; it belongs to no station there
            part(SIDE_ORGANS[organ] ? "passing" : organ, `M ${x} ${y} V ${end}`, organ === "colon" ? "map-thick gi-colon" : "");
        }

        if (SIDE_ORGANS[organ]) {
            part(organ, `M ${sideX + 14} ${cy} C ${x - 20} ${cy}, ${x - 6} ${cy + 6}, ${x} ${cy + 22}`, "map-thin");
            add(svgEl("path", { d: SIDE_SHAPES[SIDE_ORGANS[organ]](sideX, cy), class: `map-organ is-${organ}`, "data-organ": organ }));
        }
        organs[organ] = SIDE_ORGANS[organ] ? [x, cy + 22] : [x, cy];
        y = end;
    });

    /* ----- Rectum ----- */
    add(svgEl("path", { d: `M ${x - 7} ${y} H ${x + 7}`, class: "map-part", "data-organ": lastTube }));
    note("rectum", x - 12, y + 3, "end");

    /* ----- Off the tract ----- */
    order.filter((organ) => OFF_TRACT.includes(organ)).forEach((organ) => {
        const cy = pointY(stations[organ]);
        add(svgEl("circle", { cx: x, cy, r: 9, class: "map-organ", "data-organ": organ }));
        organs[organ] = [x, cy];
    });

    return organs;
}
