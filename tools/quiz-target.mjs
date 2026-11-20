// Quiz length from page size, shared by check-quiz-block, triage-quiz, and page-sizes.
// Every page gets one question per 30 page words, rounded to the nearest 5 and kept between 10 and 40,
// split 2:2:1 into memory, reasoning, and analysis. A page is changed only when its count is 10 or more
// away from its target, so small edits to a page do not add or remove a group of questions.
import { readFileSync, existsSync } from "node:fs";

export const WORDS_PER_QUESTION = 30;
export const MIN_QUESTIONS = 10;
export const MAX_QUESTIONS = 40;
export const CHANGE_AT = 10;

// The article's visible text, without its diagrams, Related line, references, title, or review article
export function pageWords(article) {
    const body = article
        .replace(/<dialog class="quick-review"[\s\S]*?<\/dialog>/, "")
        .replace(/<section class="references"[\s\S]*?<\/section>/, "")
        .replace(/<p class="see-also">[\s\S]*?<\/p>/, "")
        .replace(/<h2[^>]*>[\s\S]*?<\/h2>/, "")
        .replace(/<svg[\s\S]*?<\/svg>/g, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&[a-z#0-9]+;/gi, " ")
        .trim();
    return body ? body.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length : 0;
}

export const split = (total) => ({ memory: (total / 5) * 2, reasoning: (total / 5) * 2, analysis: total / 5 });

export function quizTarget(words) {
    const total = Math.min(MAX_QUESTIONS, Math.max(MIN_QUESTIONS, Math.round(words / WORDS_PER_QUESTION / 5) * 5));
    return { total, ...split(total) };
}

// What a page should hold now: its target, or its current count when that is within CHANGE_AT of the target
// and inside the 10–40 range; a page below the floor or above the ceiling always moves to its target
export function quizGoal(words, current) {
    const target = quizTarget(words);
    const keep = current >= MIN_QUESTIONS && current <= MAX_QUESTIONS && current % 5 === 0 && Math.abs(current - target.total) < CHANGE_AT;
    const total = keep ? current : target.total;
    return { target: target.total, total, ...split(total) };
}

// Every page article in an HTML file, with nested articles (such as syndrome cards) kept inside their page
export function pageArticles(html) {
    const out = [];
    const open = /<article class="condition-content[^"]*" id="([^"]+)"/g;
    let match;
    while ((match = open.exec(html))) {
        const tags = /<\/?article\b[^>]*>/g;
        tags.lastIndex = match.index;
        let depth = 0, end = html.length;
        for (let t; (t = tags.exec(html)); ) {
            depth += t[0][1] === "/" ? -1 : 1;
            if (depth === 0) { end = t.index + t[0].length; break; }
        }
        out.push({ id: match[1], html: html.slice(match.index, end) });
        open.lastIndex = end;
    }
    return out;
}

// Finds an article in a system's pages and returns its words
export function articleWords(system, id) {
    for (const file of ["index.html", "physiology.html"]) {
        const path = `${system}/${file}`;
        if (!existsSync(path)) continue;
        const article = pageArticles(readFileSync(path, "utf8")).find((a) => a.id === id);
        if (article) return pageWords(article.html);
    }
    return 0;
}
