/* =========================
   DNA helix drawing
   Two strands wind down the side, joined by rungs in the colors of the seven organ systems.
   At each sidebar station one rung reaches out. shared/map.js calls drawTract() and adds
   the dots and leader lines.
========================= */

// Draws the helix and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const axis = width * 0.36;
    const reach = width * 0.2;
    const turn = 92;
    const wave = (y) => Math.sin((y / turn) * Math.PI * 2) * reach;
    const crest = (spot) => spot.labelY + 18;
    let rung = 0;

    const strand = (from, to, side) => {
        const points = [];
        for (let y = from; y < to; y += 4) points.push(`${(axis + side * wave(y)).toFixed(1)} ${y.toFixed(1)}`);
        points.push(`${(axis + side * wave(to)).toFixed(1)} ${to.toFixed(1)}`);
        return `M ${points.join(" L ")}`;
    };

    order.forEach((organ, index) => {
        const cy = crest(stations[organ]);
        const top = index === 0 ? 4 : crest(stations[order[index - 1]]);
        const bottom = index === order.length - 1 ? cy + 20 : cy;

        for (let y = Math.ceil(top / 11) * 11; y < bottom; y += 11) {
            rung += 1;
            if (Math.abs(wave(y)) > 5) part(organ, `M ${axis - wave(y)} ${y} H ${axis + wave(y)}`, `map-rung is-${rung % 7}`);
        }
        part(organ, strand(top, bottom, 1), "map-strand");
        part(organ, strand(top, bottom, -1), "map-strand");

        const x = axis + Math.abs(wave(cy));
        part(organ, `M ${x} ${cy} H ${width * 0.72}`, "map-hair");
        organs[organ] = [width * 0.72, cy];
    });

    return organs;
}
