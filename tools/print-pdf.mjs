// Prints an HTML string to a PDF with headless Edge. Used by the PDF builders in this folder.
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

export async function printPdf(html, output, footerText) {
    const folder = mkdtempSync(join(tmpdir(), "site-pdf-"));
    const source = join(folder, "page.html");
    writeFileSync(source, html);

    const port = 9900 + Math.floor(Math.random() * 90);
    const browser = spawn(EDGE, ["--headless=new", "--disable-gpu", `--remote-debugging-port=${port}`, `--user-data-dir=${join(folder, "profile")}`, "about:blank"]);
    process.on("exit", () => browser.kill());
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let targets;
    for (let i = 0; i < 50 && !targets; i += 1) {
        try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(200); }
    }
    const socket = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
    await new Promise((resolve) => socket.addEventListener("open", resolve));

    let nextId = 0;
    const waiting = new Map();
    socket.addEventListener("message", (event) => {
        const message = JSON.parse(event.data);
        if (waiting.has(message.id)) { waiting.get(message.id)(message); waiting.delete(message.id); }
    });
    const send = (method, params = {}) => new Promise((resolve) => {
        nextId += 1;
        waiting.set(nextId, resolve);
        socket.send(JSON.stringify({ id: nextId, method, params }));
    });

    await send("Page.enable");
    await send("Page.navigate", { url: pathToFileURL(source).href });
    await sleep(1500);

    const footer = `<div style="width: 100%; padding: 0 16mm; color: #5b6470; font: 7.5pt 'Segoe UI', sans-serif; display: flex; justify-content: space-between;"><span>${footerText}</span><span class="pageNumber"></span></div>`;
    const result = await send("Page.printToPDF", {
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: true,
        headerTemplate: "<span></span>",
        footerTemplate: footer,
        marginTop: 0.63,
        marginBottom: 0.7,
        marginLeft: 0.63,
        marginRight: 0.63,
        generateTaggedPDF: true,
        generateDocumentOutline: true,
    });
    if (!result.result?.data) throw new Error(JSON.stringify(result.error));
    writeFileSync(output, Buffer.from(result.result.data, "base64"));
    socket.close();
    browser.kill();
}
