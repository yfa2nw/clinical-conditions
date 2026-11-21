// Content of the neurology practice exam, Form A, read by tools/build-form-pdf.mjs neuro a.
// Form A is the classic paper: 100 multiple choice questions in 120 minutes, 1 point each.
// Questions 1–70 mix 40 memory and 30 reasoning questions in random order; questions 71–100 are analysis,
// in the order written, with linked sets sharing a passage. No headings separate the kinds.
// Question objects follow tools/exam-neuro-content.mjs: five options, `answer` an index (or two for `select: 2`),
// and `notes` for every wrong option. Options are shuffled when built, so never name a letter.

export const EXAM = {
    form: "A",
    title: "Neurology Practice Exam, Form A",
    system: "Neurology",
    deck: "One hundred multiple choice questions across the nervous system, from recall to reasoning to cases and data.",
    minutes: 120,
};

// Abbreviations used in the exam but not defined on the neurology pages
export const EXTRA_TERMS = {
    BP: "Blood pressure",
};

export const MEMORY = [];
export const REASONING = [];
export const ANALYSIS = [];
