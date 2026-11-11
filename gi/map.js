/* =========================
   GI tract drawing
   One continuous string from the mouth to the rectum, with the liver, biliary tree,
   pancreas and appendix hanging off it. shared/map.js calls drawTract() and adds the
   dots and leader lines.
========================= */

// Small intestine: a looping coil (prolate trochoid) between two heights
function coilPoints(cx, radius, yStart, yEnd) {
    const loops = Math.max(2, Math.round((yEnd - yStart) / 38));
    const turns = Math.PI * 2 * loops;
    const step = (yEnd - yStart) / turns;
    const points = [];

    for (let t = 0; t <= turns + 0.001; t += 0.2) {
        points.push([cx + radius * Math.cos(t), yStart + step * t + radius * 0.55 * Math.sin(t)]);
    }
    return points;
}

// Draws the tract and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations: s, width, add, part, note }) {
    const { esophagus: eso, stomach: sto, liver, biliary: bil, pancreas: pan, "small-intestine": si, colon, appendix: app } = s;
    const x = width * 0.7; // main line
    const organs = {};

    /* ----- Mouth and esophagus ----- */
    const mouthY = eso.top + 14;
    add(svgEl("ellipse", { cx: x, cy: mouthY, rx: 9, ry: 5, class: "map-organ", "data-organ": "esophagus" }));
    note("mouth", x - 14, mouthY + 4, "end");

    const stoTop = sto.top + 4;
    part("esophagus", `M ${x} ${mouthY + 5} L ${x} ${stoTop}`);
    organs.esophagus = [x, (mouthY + stoTop) / 2 + 8];

    /* ----- Stomach: a twist ----- */
    const stoMid = (sto.top + sto.bottom) / 2;
    const stoEnd = sto.bottom - 4;
    part("stomach", [
        `M ${x} ${stoTop}`,
        `C ${x + 28} ${stoTop + 6}, ${x + 30} ${stoMid + 8}, ${x + 4} ${stoMid + 16}`,
        `C ${x - 26} ${stoMid + 24}, ${x - 30} ${stoMid - 16}, ${x - 8} ${stoMid - 10}`,
        `C ${x + 10} ${stoMid - 4}, ${x + 6} ${stoEnd - 10}, ${x} ${stoEnd}`,
    ].join(" "), "map-thick");
    organs.stomach = [x + 23, stoMid - 2];

    /* ----- Duodenum: a C-curve down past the liver to the ampulla, around the pancreatic head ----- */
    const ampulla = [x + 14, pan.top + 16];
    const djFlexure = [x - 12, si.top + 10];
    part("duodenum", [
        `M ${x} ${stoEnd}`,
        `C ${x + 4} ${stoEnd + 70}, ${x + 18} ${ampulla[1] - 90}, ${ampulla[0]} ${ampulla[1]}`,
        `C ${x + 12} ${ampulla[1] + 60}, ${x} ${djFlexure[1] - 40}, ${djFlexure[0]} ${djFlexure[1]}`,
    ].join(" "));

    /* ----- Liver: a softened wedge, wide at the top and tapering down ----- */
    const lTop = liver.top + 8;
    const lH = Math.min(130, liver.bottom - liver.top - 30);
    add(svgEl("path", {
        class: "map-organ",
        "data-organ": "liver",
        d: [
            `M 10 ${lTop + 8}`,
            `C 20 ${lTop}, 48 ${lTop}, 57 ${lTop + 10}`,
            `C 63 ${lTop + 22}, 54 ${lTop + lH * 0.5}, 36 ${lTop + lH * 0.84}`,
            `C 27 ${lTop + lH}, 14 ${lTop + lH}, 10 ${lTop + lH * 0.8}`,
            `C 3 ${lTop + lH * 0.55}, 3 ${lTop + 26}, 10 ${lTop + 8} Z`,
        ].join(" "),
    }));
    organs.liver = [50, lTop + lH * 0.3];

    /* ----- Biliary tree, gallbladder and pancreas ----- */
    const junction = [34, bil.top + 26];
    const hepaticDuctTop = [24, lTop + lH * 0.9];
    part("biliary", `M ${hepaticDuctTop[0]} ${hepaticDuctTop[1]} C 26 ${hepaticDuctTop[1] + 60}, 34 ${junction[1] - 40}, ${junction[0]} ${junction[1]}`, "map-thin");
    part("biliary", `M ${junction[0]} ${junction[1]} C 34 ${ampulla[1] - 30}, ${ampulla[0] - 30} ${ampulla[1] - 4}, ${ampulla[0]} ${ampulla[1]}`, "map-thin");
    part("biliary", `M ${junction[0]} ${junction[1]} C 26 ${junction[1] + 2}, 20 ${junction[1] + 6}, 18 ${junction[1] + 12}`, "map-thin");
    add(svgEl("ellipse", {
        cx: 15, cy: junction[1] + 26, rx: 8, ry: 15,
        transform: `rotate(-14 15 ${junction[1] + 26})`,
        class: "map-organ", "data-organ": "biliary",
    }));
    organs.biliary = [23, junction[1] + 26];

    // Pancreas: head tucked into the duodenal C-loop, tail sweeping to the left
    const pTop = pan.top + 22;
    add(svgEl("path", {
        class: "map-organ gi-pancreas",
        "data-organ": "pancreas",
        d: [
            `M 8 ${pTop + 46}`,
            `C 14 ${pTop + 24}, 46 ${pTop + 8}, ${x + 4} ${pTop + 4}`,
            `C ${x + 12} ${pTop + 12}, ${x + 8} ${pTop + 30}, ${x - 6} ${pTop + 34}`,
            `C 44 ${pTop + 40}, 24 ${pTop + 56}, 8 ${pTop + 46} Z`,
        ].join(" "),
    }));
    part("pancreas", `M 14 ${pTop + 42} C 34 ${pTop + 26}, ${ampulla[0] - 24} ${ampulla[1] + 10}, ${ampulla[0]} ${ampulla[1]}`, "map-hair");
    organs.pancreas = [32, pTop + 32];

    /* ----- Small intestine: jejunum and ileum coil ----- */
    const coilCx = 42;
    const coilR = 20;
    const coilTop = si.top + 24;
    const coilBot = si.bottom - 28;
    const coil = coilPoints(coilCx, coilR, coilTop, coilBot);
    part("small-intestine", `M ${djFlexure[0]} ${djFlexure[1]} C ${djFlexure[0]} ${coilTop - 6}, ${coil[0][0] + 6} ${coilTop - 8}, ${coil[0][0]} ${coil[0][1]}` +
        coil.map(([px, py]) => ` L ${px.toFixed(1)} ${py.toFixed(1)}`).join(""));
    organs["small-intestine"] = [coilCx + coilR, (coilTop + coilBot) / 2];

    /* ----- Colon frame, appendix and rectum ----- */
    const left = 12;
    const right = width - 12;
    const top = colon.top + 22;
    const cecum = colon.bottom - 22;
    const coilEnd = coil[coil.length - 1];

    // Ileum crosses down into the cecum
    part("small-intestine", `M ${coilEnd[0]} ${coilEnd[1]} C ${coilEnd[0]} ${coilEnd[1] + 40}, ${left + 24} ${cecum - 20}, ${left + 3} ${cecum - 2}`);

    part("colon", [
        `M ${left} ${cecum + 8}`,
        `L ${left} ${top + 14} Q ${left} ${top} ${left + 14} ${top}`,
        `L ${right - 14} ${top} Q ${right} ${top} ${right} ${top + 14}`,
        `L ${right} ${cecum - 4}`,
        `C ${right} ${cecum + 18}, ${x} ${cecum + 6}, ${x} ${cecum + 24}`,
        `L ${x} ${app.bottom - 6}`,
    ].join(" "), "map-thick");
    add(svgEl("path", { d: `M ${x - 6} ${app.bottom - 6} L ${x + 6} ${app.bottom - 6}`, class: "map-part", "data-organ": "colon" }));
    organs.colon = [right, (top + cecum) / 2];
    note("rectum", x, app.bottom + 10, "middle");

    // Appendix hangs from the cecum down into its own station
    const appTip = [left + 12, app.top + 34];
    part("appendix", `M ${left} ${cecum + 10} C ${left} ${cecum + 34}, ${appTip[0] - 10} ${appTip[1] - 24}, ${appTip[0]} ${appTip[1]}`, "map-thin");
    organs.appendix = appTip;

    /* ----- Special topics: a magnifying glass below the rectum, off the tract, for working back from a finding ----- */
    if (s.special) {
        const cy = s.special.top + 34;
        add(svgEl("circle", { cx: x, cy, r: 10, class: "map-organ", "data-organ": "special" }));
        part("special", `M ${x + 7} ${cy + 7} L ${x + 16} ${cy + 16}`, "map-thick");
        organs.special = [x + 10, cy];
    }

    return organs;
}
