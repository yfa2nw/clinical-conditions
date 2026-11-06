/* =========================
   Neuron chain drawing
   One neuron per sidebar station: a soma with dendrites, joined to the next station by a
   myelinated axon that ends in a synapse. shared/map.js calls drawTract() and adds the
   dots and leader lines.
========================= */

// A soft, slightly uneven cell body
function somaPath(cx, cy, seed) {
    const lobes = 6;
    const points = [];

    for (let i = 0; i < lobes; i += 1) {
        const angle = (Math.PI * 2 * i) / lobes + seed;
        const radius = 11 + 3 * Math.sin(seed * 3 + i * 2.1);
        points.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
    }

    const middle = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const start = middle(points[lobes - 1], points[0]);
    let d = `M ${start[0].toFixed(1)} ${start[1].toFixed(1)}`;

    points.forEach((point, i) => {
        const end = middle(point, points[(i + 1) % lobes]);
        d += ` Q ${point[0].toFixed(1)} ${point[1].toFixed(1)} ${end[0].toFixed(1)} ${end[1].toFixed(1)}`;
    });
    return `${d} Z`;
}

// A curved dendrite that forks near its tip
function dendritePath(cx, cy, angle, length) {
    const along = (distance, turn = 0) => [
        cx + distance * Math.cos(angle + turn),
        cy + distance * Math.sin(angle + turn),
    ];
    const [sx, sy] = along(10);
    const [mx, my] = along(length * 0.7, 0.18);
    const [ax, ay] = along(length, 0.42);
    const [bx, by] = along(length * 1.02, -0.12);

    return `M ${sx.toFixed(1)} ${sy.toFixed(1)} L ${mx.toFixed(1)} ${my.toFixed(1)} L ${ax.toFixed(1)} ${ay.toFixed(1)} M ${mx.toFixed(1)} ${my.toFixed(1)} L ${bx.toFixed(1)} ${by.toFixed(1)}`;
}

// Draws the chain and returns { organ: [x, y] }, the point each leader line starts from
function drawTract({ stations, width, add, part }) {
    const order = Object.keys(stations);
    const organs = {};
    const somaY = (spot) => spot.labelY + 22;
    const somaX = (index) => width * (index % 2 === 0 ? 0.62 : 0.36);

    order.forEach((organ, index) => {
        const cx = somaX(index);
        const cy = somaY(stations[organ]);
        const seed = index * 1.7 + 0.4;

        // Axon arriving from the previous neuron, stopping short of the soma at a synapse
        const fromX = index === 0 ? cx : somaX(index - 1);
        const fromY = index === 0 ? 6 : somaY(stations[order[index - 1]]) + 12;
        const endY = cy - 19;
        const bend = (endY - fromY) * 0.5;
        const axon = `M ${fromX} ${fromY} C ${fromX} ${fromY + bend}, ${cx} ${endY - bend}, ${cx} ${endY}`;

        part(organ, axon, "map-axon");
        add(svgEl("path", { d: axon, pathLength: 100, class: "map-pulse", "data-organ": organ }));
        add(svgEl("circle", { cx, cy: endY, r: 3.5, class: "map-bouton", "data-organ": organ }));

        // Dendrites point away from the arriving axon
        [0.5, 1.5, 2.65, 0.05 + Math.PI * 1.98].forEach((angle, i) => {
            part(organ, dendritePath(cx, cy, angle + seed * 0.2, 20 + (i % 2) * 5), "map-thin");
        });

        add(svgEl("path", { d: somaPath(cx, cy, seed), class: "map-organ", "data-organ": organ }));
        organs[organ] = [cx, cy];
    });

    return organs;
}
