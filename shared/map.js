/* =========================
   Sidebar body map
   Lines a drawing up with the sidebar's .station groups, and highlights the organ of the
   open condition, hovered group and search matches. Each specialty supplies the drawing
   as a drawTract() function in its own map.js, loaded before this file.
   (uses searchInput from app.js)
========================= */

const mapNav = document.querySelector(".map-nav");
const mapSvg = mapNav.querySelector(".map-svg");
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

function drawMap() {
    if (getComputedStyle(mapSvg).display === "none") return;

    const width = parseFloat(getComputedStyle(mapNav).getPropertyValue("--map-width")) || 104;
    const s = measureStations();
    const lastStation = mapStations[mapStations.length - 1];
    const height = s[lastStation.dataset.organ].bottom + 16;

    mapSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    mapSvg.style.width = `${width}px`;
    mapSvg.style.height = `${height}px`;
    mapSvg.replaceChildren();

    const add = (node) => mapSvg.appendChild(node);
    const part = (organ, d, extra = "") => add(svgEl("path", { d, class: `map-part ${extra}`, "data-organ": organ }));
    const note = (text, tx, ty, anchor = "start") =>
        add(svgEl("text", { x: tx, y: ty, class: "map-note", "text-anchor": anchor }, text));

    const organs = drawTract({ stations: s, width, add, part, note });

    /* ----- Stations: a dot on each organ, with a leader line to its conditions ----- */
    Object.entries(organs).forEach(([organ, [px, py]]) => {
        const ly = s[organ].labelY;
        const mid = (px + width) / 2;
        add(svgEl("path", {
            d: `M ${px} ${py} C ${mid} ${py}, ${mid} ${ly}, ${width} ${ly}`,
            class: "map-leader",
            "data-organ": organ,
        }));
        add(svgEl("circle", { cx: px, cy: py, r: 4.5, class: "map-dot", "data-organ": organ }));
        add(svgEl("circle", { cx: width, cy: ly, r: 3, class: "map-dot map-dot-end", "data-organ": organ }));
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
