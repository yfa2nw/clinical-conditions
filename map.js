/* =========================
   GI tract map
   Draws the tract as one continuous string down the left of the sidebar, from the mouth
   to the rectum, with the liver, biliary tree, pancreas and appendix hanging off it.
   Each organ lines up with its .station (group of conditions) and points to it.
   (uses searchInput from script.js)
========================= */

const mapNav = document.querySelector(".gi-map-nav");
const mapSvg = mapNav.querySelector(".gi-map");
const mapStations = [...mapNav.querySelectorAll(".station")];
const SVG_NS = "http://www.w3.org/2000/svg";

function svgEl(tag, attrs = {}, text = null) {
    const node = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
}

// Where each station sits, in the nav's scrolling coordinates
function measureStations() {
    const navTop = mapNav.getBoundingClientRect().top - mapNav.scrollTop;
    const spots = {};

    mapStations.forEach((station) => {
        const box = station.getBoundingClientRect();
        const label = station.querySelector(".group-label").getBoundingClientRect();
        spots[station.dataset.organ] = {
            top: box.top - navTop,
            bottom: box.bottom - navTop,
            labelY: (label.top + label.bottom) / 2 - navTop,
        };
    });

    return spots;
}

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

function drawMap() {
    if (getComputedStyle(mapSvg).display === "none") return;

    const width = parseFloat(getComputedStyle(mapNav).getPropertyValue("--map-width")) || 104;
    const s = measureStations();
    const { esophagus: eso, stomach: sto, liver, biliary: bil, pancreas: pan, "small-intestine": si, colon, appendix: app } = s;
    const height = app.bottom + 16;
    const x = width * 0.7; // main line

    mapSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    mapSvg.style.width = `${width}px`;
    mapSvg.style.height = `${height}px`;
    mapSvg.replaceChildren();

    const organs = {}; // organ -> point that the leader line starts from
    const add = (node) => mapSvg.appendChild(node);
    const part = (organ, d, extra = "") => add(svgEl("path", { d, class: `gi-part ${extra}`, "data-organ": organ }));
    const note = (text, tx, ty, anchor = "start") =>
        add(svgEl("text", { x: tx, y: ty, class: "gi-note", "text-anchor": anchor }, text));

    /* ----- Mouth and esophagus ----- */
    const mouthY = eso.top + 14;
    add(svgEl("ellipse", { cx: x, cy: mouthY, rx: 9, ry: 5, class: "gi-mouth", "data-organ": "esophagus" }));
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
    ].join(" "), "gi-thick");
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
        class: "gi-organ",
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
    part("biliary", `M ${hepaticDuctTop[0]} ${hepaticDuctTop[1]} C 26 ${hepaticDuctTop[1] + 60}, 34 ${junction[1] - 40}, ${junction[0]} ${junction[1]}`, "gi-thin");
    part("biliary", `M ${junction[0]} ${junction[1]} C 34 ${ampulla[1] - 30}, ${ampulla[0] - 30} ${ampulla[1] - 4}, ${ampulla[0]} ${ampulla[1]}`, "gi-thin");
    part("biliary", `M ${junction[0]} ${junction[1]} C 26 ${junction[1] + 2}, 20 ${junction[1] + 6}, 18 ${junction[1] + 12}`, "gi-thin");
    add(svgEl("ellipse", {
        cx: 15, cy: junction[1] + 26, rx: 8, ry: 15,
        transform: `rotate(-14 15 ${junction[1] + 26})`,
        class: "gi-organ", "data-organ": "biliary",
    }));
    organs.biliary = [23, junction[1] + 26];

    // Pancreas: head tucked into the duodenal C-loop, tail sweeping to the left
    const pTop = pan.top + 22;
    add(svgEl("path", {
        class: "gi-organ gi-pancreas",
        "data-organ": "pancreas",
        d: [
            `M 8 ${pTop + 46}`,
            `C 14 ${pTop + 24}, 46 ${pTop + 8}, ${x + 4} ${pTop + 4}`,
            `C ${x + 12} ${pTop + 12}, ${x + 8} ${pTop + 30}, ${x - 6} ${pTop + 34}`,
            `C 44 ${pTop + 40}, 24 ${pTop + 56}, 8 ${pTop + 46} Z`,
        ].join(" "),
    }));
    part("pancreas", `M 14 ${pTop + 42} C 34 ${pTop + 26}, ${ampulla[0] - 24} ${ampulla[1] + 10}, ${ampulla[0]} ${ampulla[1]}`, "gi-hair");
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
    ].join(" "), "gi-thick");
    add(svgEl("path", { d: `M ${x - 6} ${app.bottom - 6} L ${x + 6} ${app.bottom - 6}`, class: "gi-part", "data-organ": "colon" }));
    organs.colon = [right, (top + cecum) / 2];
    note("rectum", x, app.bottom + 10, "middle");

    // Appendix hangs from the cecum down into its own station
    const appTip = [left + 12, app.top + 34];
    part("appendix", `M ${left} ${cecum + 10} C ${left} ${cecum + 34}, ${appTip[0] - 10} ${appTip[1] - 24}, ${appTip[0]} ${appTip[1]}`, "gi-thin");
    organs.appendix = appTip;

    /* ----- Stations: a dot on each organ, with a leader line to its conditions ----- */
    Object.entries(organs).forEach(([organ, [px, py]]) => {
        const ly = s[organ].labelY;
        const mid = (px + width) / 2;
        add(svgEl("path", {
            d: `M ${px} ${py} C ${mid} ${py}, ${mid} ${ly}, ${width} ${ly}`,
            class: "gi-leader",
            "data-organ": organ,
        }));
        add(svgEl("circle", { cx: px, cy: py, r: 4.5, class: "gi-dot", "data-organ": organ }));
        add(svgEl("circle", { cx: width, cy: ly, r: 3, class: "gi-dot gi-dot-end", "data-organ": organ }));
    });

    updateMapState();
}

/* ----- Highlighting: open condition, hover, and search matches ----- */

let hoveredOrgan = null;

function updateMapState() {
    const searching = searchInput.value.trim() !== "";

    mapStations.forEach((station) => {
        const organ = station.dataset.organ;
        const states = {
            "is-active": Boolean(station.querySelector(".condition-item.active")),
            "is-hover": organ === hoveredOrgan,
            "is-match": searching && !station.classList.contains("filtered-out"),
            "is-dim": searching && station.classList.contains("filtered-out"),
        };

        Object.entries(states).forEach(([name, on]) => {
            station.classList.toggle(name, on);
            mapSvg.querySelectorAll(`[data-organ="${organ}"]`).forEach((node) => node.classList.toggle(name, on));
        });
    });
}

mapNav.addEventListener("mouseover", (event) => {
    const station = event.target.closest(".station");
    const organ = station ? station.dataset.organ : null;
    if (organ !== hoveredOrgan) {
        hoveredOrgan = organ;
        updateMapState();
    }
});

mapNav.addEventListener("mouseleave", () => {
    hoveredOrgan = null;
    updateMapState();
});

mapNav.addEventListener("focusin", (event) => {
    const station = event.target.closest(".station");
    hoveredOrgan = station ? station.dataset.organ : null;
    updateMapState();
});

// The open condition and search results change classes on the buttons; follow them
let stateFrame = null;
new MutationObserver(() => {
    if (stateFrame) return;
    stateFrame = requestAnimationFrame(() => {
        stateFrame = null;
        updateMapState();
    });
}).observe(mapNav, { subtree: true, attributes: true, attributeFilter: ["class"] });

// Redraw whenever the stations change size (wrapping, window resize, fonts loading)
let drawFrame = null;
const scheduleDraw = () => {
    if (drawFrame) return;
    drawFrame = requestAnimationFrame(() => {
        drawFrame = null;
        drawMap();
    });
};

const stationObserver = new ResizeObserver(scheduleDraw);
mapStations.forEach((station) => stationObserver.observe(station));
window.addEventListener("resize", scheduleDraw);
if (document.fonts) document.fonts.ready.then(scheduleDraw);

drawMap();
