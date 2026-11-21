// Worksheet for the Metabolic Alkalosis page, built by tools/build-worksheet-pdf.mjs renal metabolic-alkalosis.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Metabolic Alkalosis",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From urine Cl− to cause",
        top: "H+ lost or HCO3− gained → HCO3− rises → metabolic [[alkalosis]]; low volume, Cl−, or K+, or aldosterone excess, keeps the kidney from [[excreting]] the extra HCO3−",
        rows: ["Type", "Why it happens", "Key test", "Treatment"],
        columns: [
            ["Gut (1)", "HCl lost by vomiting or NG tube suction leaves [[HCO3−]] behind", "Urine Cl− below [[20]] mmol/L", "0.9% saline with [[KCl]]; treat the cause of vomiting"],
            ["Diuretics (2)", "More Na+ reaches the collecting duct, where [[aldosterone]] swaps it for H+ and K+", "Urine Cl− high while acting, [[low]] after", "Stop or reduce; replace KCl; acetazolamide if overloaded"],
            ["Aldosterone excess and its mimics (3–5)", "A mineralocorticoid effect retains Na+ and loses H+ and K+, with [[hypertension]]", "BP, [[renin]], and aldosterone", "Spironolactone or adrenalectomy; stop licorice; [[amiloride]] for Liddle syndrome"],
            ["Bartter and Gitelman syndromes (6)", "Inherited loss of NKCC2 or [[NCC]]", "Urine Ca2+ high in Bartter, [[low]] in Gitelman", "KCl and [[Mg2+]]"],
        ],
        span: "Every cause: treat the cause and replace volume, K+, and Cl−; [[acetazolamide]] when saline cannot be given; dialysis or dilute [[HCl]] only for severe or refractory alkalosis",
        chains: [
            { label: "pH, K+, and Ca2+", steps: [["Alkalosis", "K+ moves into cells → [[hypokalemia]]"], ["Albumin", "Binds more Ca2+ → low [[ionized]] Ca2+ → tetany"]] },
            { label: "Why an alkalosis lasts", steps: [["Generation", "H+ lost or HCO3− gained"], ["Low volume", "Angiotensin II and aldosterone"], ["Low Cl−", "No Cl− to [[swap]] for HCO3− in the collecting duct"], ["Low K+", "More H+ secretion and NH4+ production"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "In metabolic alkalosis, H+ is lost from the [[stomach]] or kidney, or HCO3− is gained, and the lungs [[hypoventilate]] to raise pCO2. Alkalosis moves K+ [[into]] cells and makes albumin bind more [[Ca2+]], so ionized Ca2+ falls while total Ca2+ is unchanged." },
                { id: "r-path-maintain", type: "order",
                    stem: "Number the steps that keep an alkalosis going after vomiting, in the order the page gives them.",
                    items: ["Low Cl− leaves nothing to swap for HCO3− in the collecting duct", "H+ is lost as HCl, leaving HCO3− in the blood", "Low K+ increases H+ secretion and NH4+ production", "Low volume raises angiotensin II and aldosterone"],
                    order: [1, 3, 0, 2],
                    explanation: "Generation is the HCl loss; maintenance is low volume, low Cl−, and low K+, which last until all three are replaced." },
                { id: "r-path-why-lasts", type: "sa", lines: 2,
                    stem: "Healthy kidneys excrete extra HCO3− quickly. Why, then, does a metabolic alkalosis need a maintenance factor to persist?",
                    answer: "Without low volume, Cl−, or K+, or aldosterone excess, the kidney would excrete the extra HCO3− within days.",
                    explanation: "Each maintenance factor keeps the kidney reabsorbing HCO3− or secreting H+." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-alk", type: "match",
                    stem: "Match each cause of metabolic alkalosis to its mechanism.",
                    items: ["Loop diuretics", "Primary hyperaldosteronism", "Licorice", "Gitelman syndrome", "Milk-alkali syndrome", "After hypercapnia"],
                    options: ["Inherited loss of NCC in the distal tubule", "An alkali load from calcium carbonate", "Blocks 11β-HSD2, so cortisol acts on the mineralocorticoid receptor", "More Na+ reaches the collecting duct, and volume loss raises aldosterone", "HCO3− retained during chronic respiratory acidosis is left behind", "The adrenal makes aldosterone regardless of renin"],
                    answer: [3, 5, 2, 0, 1, 4],
                    explanation: "Diuretics also cause a contraction alkalosis, as the extracellular fluid shrinks around the same amount of HCO3−." },
                { id: "r-cause-vomit", type: "sa", lines: 2,
                    stem: "Losing fluid from the stomach causes an alkalosis, while losing fluid from below the stomach causes an acidosis. Why?",
                    answer: "Gastric fluid is rich in HCl, so losing it leaves HCO3− behind; intestinal and pancreatic fluid is rich in HCO3−.",
                    explanation: "Both losses also cause hypokalemia." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-effects", type: "blank",
                    stem: "Complete the effects of metabolic alkalosis.",
                    html: labs(["Effect", "What happens"], [
                        ["Breathing", "Shallow and slow, usually mild"],
                        ["Heart", "Arrhythmias from low [[K+]] and low Ca2+"],
                        ["Neuromuscular", "Perioral numbness, carpopedal spasm, [[Chvostek]] and Trousseau signs"],
                        ["Oxygen dissociation curve", "Shifts [[left]]: less O2 released to tissues"],
                    ]) },
                { id: "r-sx-copd", type: "sa", lines: 2,
                    stem: "Why can a metabolic alkalosis be dangerous in a patient with COPD, even though the hypoventilation it causes is usually mild?",
                    answer: "Hypoventilation raises pCO2 and lowers O2, worsening their existing hypercapnia and hypoxemia.",
                    explanation: "Obesity hypoventilation carries the same risk." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-bartter", type: "sa", lines: 2,
                    stem: "Bartter and Gitelman syndromes both cause a hypokalemic alkalosis with low or normal BP and high renin and aldosterone. Which findings separate them?",
                    answer: "Urine Ca2+ is high in Bartter syndrome, and low in Gitelman syndrome, which also has low Mg2+.",
                    explanation: "Bartter syndrome affects NKCC2, like a loop diuretic, and Gitelman syndrome affects NCC, like a thiazide. The blood gas and compensation are read as on the Acid-base Disorders: Comparison and Workup page." },
                { id: "r-dx-urinecl", type: "blank",
                    html: "Urine Cl− below [[20]] mmol/L marks a chloride-[[responsive]] alkalosis, in which the kidney holds on to Cl− because volume and Cl− are low. Urine Cl− is high while a diuretic acts and [[low]] once it wears off, so a changing result suggests hidden diuretic use." },
                { id: "r-dx-alk", type: "blank",
                    stem: "Complete the causes of a chloride-resistant alkalosis with hypertension.",
                    html: labs(["Cause", "Renin", "Aldosterone"], [
                        ["Primary hyperaldosteronism", "[[Low]]", "High"],
                        ["Secondary hyperaldosteronism", "High", "[[High]]"],
                        ["Apparent mineralocorticoid excess", "Low", "[[Low]]"],
                    ]) },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-alk", type: "mc", select: 2,
                    stem: "Which patients with metabolic alkalosis should receive 0.9% saline with KCl?",
                    options: ["A man vomiting for 4 days, urine Cl− 9 mmol/L", "A woman on NG tube suction after surgery, urine Cl− 12 mmol/L", "A woman with heart failure and edema on furosemide", "A man with an aldosterone-secreting adenoma", "A man with Liddle syndrome"], answer: [0, 1],
                    explanation: "A low urine Cl− marks a chloride-responsive alkalosis, which corrects once volume, Cl−, and K+ are replaced.",
                    notes: { 2: "Saline would worsen her fluid overload; acetazolamide is used instead.", 3: "Aldosterone excess is chloride-resistant; it needs spironolactone or surgery.", 4: "Liddle syndrome is chloride-resistant and needs amiloride." } },
                { id: "r-tx-match", type: "match",
                    stem: "Match each cause to its treatment.",
                    items: ["Vomiting with a urine Cl− of 10 mmol/L", "Primary hyperaldosteronism", "Liddle syndrome", "Gitelman syndrome", "Heart failure with edema on furosemide", "Daily black licorice"],
                    options: ["Spironolactone, or adrenalectomy for an adenoma", "Amiloride", "KCl and Mg2+", "Acetazolamide", "0.9% saline with KCl", "Stop the licorice"],
                    answer: [4, 0, 1, 2, 3, 5],
                    explanation: "Liddle syndrome's ENaC works without aldosterone, so it needs a channel blocker rather than a receptor blocker." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "A week of vomiting",
                keyPoints: [
                    "Losing HCl generates a metabolic alkalosis; low volume, Cl−, and K+ maintain it.",
                    "Urine Cl− below 20 mmol/L marks a chloride-responsive alkalosis, which corrects with saline and KCl.",
                    "Alkalosis lowers ionized Ca2+ because albumin binds more Ca2+, so tetany can occur with a normal total calcium.",
                    "Urine Cl− is high while a diuretic acts and low after it wears off, so a changing result suggests hidden diuretic use.",
                ],
                blocks: [
                    { passage: `<p>A 63-year-old man with years of untreated duodenal ulcers has vomited undigested food for a week. He is dry and dizzy on standing. Results (illustrative):</p>
${labs(["Test", "Result"], [["pH / pCO2", "7.52 / 48 mmHg"], ["Na+ / K+", "136 / 2.7 mmol/L"], ["Cl− / HCO3−", "86 / 38 mmol/L"], ["Urine Cl−", "8 mmol/L"]])}`,
                        questions: [
                            { id: "s3-primary", type: "sa", lines: 3, work: true,
                                stem: "Name his primary disorder and check his compensation.",
                                answer: "Metabolic alkalosis; expected pCO2 = 0.7 × 38 + 20 ≈ 47 ± 5; measured 48: appropriate.",
                                explanation: "His HCO3− is high and moves the same way as the pH, so the disorder is metabolic." },
                            { id: "s3-urinecl", type: "sa", lines: 2,
                                stem: "What does his urine Cl− tell you, and why is his kidney not excreting the extra HCO3−?",
                                answer: "Chloride-responsive: low volume, Cl−, and K+ keep the kidney reabsorbing HCO3−.",
                                explanation: "His gastric outlet obstruction generated the alkalosis; the depletion maintains it." },
                            { id: "s3-treat", type: "sa", lines: 2,
                                stem: "What fluid will correct his alkalosis, and how does it work?",
                                answer: "0.9% saline with KCl: it restores volume, Cl−, and K+, so the kidney can excrete HCO3−.",
                                explanation: "The cause, the obstruction, also needs treating." },
                        ] },
                    { passage: `<p>Before the fluids start, he has tingling around his mouth and his hand cramps into a spasm when a BP cuff is inflated. His total calcium is normal.</p>`,
                        questions: [
                            { id: "s3-tetany", type: "sa", lines: 2,
                                stem: "Explain his symptoms despite a normal total calcium, and name the test that confirms the cause.",
                                answer: "Alkalosis makes albumin bind more Ca2+, lowering ionized Ca2+; measure ionized calcium.",
                                explanation: "The cuff-induced spasm is the Trousseau sign." },
                        ] },
                    { passage: `<p>A month later, his daughter, 28, is found to have a metabolic alkalosis with HCO3− 34 mmol/L and K+ 3.0 mmol/L. She denies vomiting. Her urine Cl− is 48 mmol/L on Monday and 9 mmol/L on Thursday. Her BP is normal.</p>`,
                        questions: [
                            { id: "s3-hidden", type: "mc", justify: 12,
                                stem: "What best explains her results? Briefly justify your choice.",
                                options: ["Hidden diuretic use", "Gitelman syndrome", "Primary hyperaldosteronism", "Hidden vomiting alone", "Milk-alkali syndrome"], answer: 0,
                                justifyAnswer: "Urine Cl− is high during diuretic action and low after.",
                                explanation: "A urine Cl− that swings between high and low suggests intermittent diuretic use; a urine diuretic screen can confirm it.",
                                notes: { 1: "Gitelman syndrome wastes Cl− constantly, so urine Cl− would stay high.", 2: "She has a normal BP, and urine Cl− would stay high.", 3: "Vomiting alone would keep urine Cl− low.", 4: "Milk-alkali syndrome causes hypercalcemia and does not make urine Cl− swing." } },
                        ] },
                ],
            },
            {
                title: "Hypertension that will not settle",
                keyPoints: [
                    "A chloride-resistant alkalosis with hypertension is sorted by renin and aldosterone.",
                    "Low renin with low aldosterone is apparent mineralocorticoid excess: Cushing syndrome, licorice, or Liddle syndrome.",
                    "Each cause of apparent mineralocorticoid excess has its own clue: cushingoid features and cortisol tests, a dietary history, or a family history with early hypertension.",
                    "When licorice is the cause, stopping it corrects the BP and K+ over weeks, which confirms the diagnosis.",
                ],
                blocks: [
                    { passage: `<p>A 56-year-old woman has new hypertension of 168/100 mmHg and muscle cramps. She takes no medicines. Results (illustrative):</p>
${labs(["Test", "Result"], [["pH / pCO2", "7.49 / 43 mmHg"], ["Na+ / K+", "144 / 2.8 mmol/L"], ["HCO3−", "32 mmol/L"], ["Urine Cl−", "55 mmol/L"], ["Renin", "Low"], ["Aldosterone", "Low"]])}`,
                        questions: [
                            { id: "s4-pattern", type: "sa", lines: 3,
                                stem: "Classify her alkalosis using the urine Cl−, and explain what her renin and aldosterone exclude and what they point to.",
                                answer: "Chloride-resistant. Low aldosterone excludes primary and secondary hyperaldosteronism; low renin and aldosterone point to apparent mineralocorticoid excess.",
                                explanation: "In apparent mineralocorticoid excess, the collecting duct acts as if aldosterone were high, and the hypertension suppresses renin and aldosterone." },
                            { id: "s4-differential", type: "blank",
                                stem: "Complete the causes of apparent mineralocorticoid excess and the clue you would look for in each.",
                                html: labs(["Cause", "Mechanism", "Clue to look for"], [
                                    ["Cushing syndrome", "Cortisol acts on the [[mineralocorticoid]] receptor", "Cushingoid features; cortisol testing"],
                                    ["Licorice", "Blocks [[11β-HSD2]], so cortisol is not inactivated", "A [[dietary]] history"],
                                    ["Liddle syndrome", "Overactive [[ENaC]]", "Young onset; a [[family]] history of hypertension"],
                                ]) },
                        ] },
                    { passage: `<p>She has no cushingoid features. Asked about her diet, she says she has eaten a large bag of black licorice every day for a year. She stops it. Results (illustrative):</p>
${labs(["Test", "Now", "6 weeks later"], [["BP", "168/100 mmHg", "128/80 mmHg"], ["K+ / HCO3−", "2.8 / 32 mmol/L", "4.1 / 25 mmol/L"], ["Renin / aldosterone", "Low / low", "Normal / normal"]])}`,
                        questions: [
                            { id: "s4-recovery", type: "sa", lines: 2,
                                stem: "What do the results at 6 weeks show, and why did renin and aldosterone return to normal?",
                                answer: "Stopping licorice removed the cortisol effect, confirming it; lower BP and volume let renin and aldosterone recover.",
                                explanation: "Renin and aldosterone were suppressed by the hypertension and volume expansion, not by a disease of their own." },
                            { id: "s4-if-not", type: "sa", lines: 3,
                                stem: "Had her BP and K+ stayed abnormal off licorice, which two causes would remain, and how would you treat each?",
                                answer: "Cushing syndrome: treat the cause of excess cortisol. Liddle syndrome: amiloride, since its ENaC does not need aldosterone.",
                                explanation: "Spironolactone blocks the receptor and so helps when cortisol or aldosterone acts on it, but not when the channel itself is overactive." },
                        ] },
                ],
            },
            {
                title: "Antacids for heartburn",
                keyPoints: [
                    "Milk-alkali syndrome is an alkali load from calcium carbonate, with a high Ca2+.",
                    "An alkali load lasts only when the kidney cannot excrete HCO3−, as with a low GFR or low volume.",
                    "Treatment is stopping the source and giving saline, which restores volume and GFR so the kidney excretes HCO3−.",
                    "Acetazolamide suits alkalosis with volume overload, not a volume-depleted patient.",
                ],
                blocks: [
                    { passage: `<p>A 76-year-old woman has become confused over a week. For months she has chewed many calcium carbonate antacid tablets a day for heartburn. She is dry, with a postural drop in BP. Results (illustrative):</p>
${labs(["Test", "Result"], [["pH / pCO2", "7.50 / 45 mmHg"], ["Na+ / K+", "139 / 3.4 mmol/L"], ["Cl− / HCO3−", "96 / 36 mmol/L"], ["Ca2+ (corrected)", "3.4 mmol/L"], ["Creatinine", "210 µmol/L (baseline 90)"]])}`,
                        questions: [
                            { id: "s5-primary", type: "sa", lines: 3, work: true,
                                stem: "Name her primary disorder and check her compensation.",
                                answer: "Metabolic alkalosis; expected pCO2 = 0.7 × 36 + 20 ≈ 45 ± 5; measured 45: appropriate.",
                                explanation: "Her HCO3− is high and moves the same way as the pH." },
                            { id: "s5-name", type: "sa", lines: 2,
                                stem: "Which syndrome explains both her alkalosis and her high Ca2+, and how?",
                                answer: "Milk-alkali syndrome: the carbonate is an alkali load and the calcium raises plasma Ca2+.",
                                explanation: "It is one of the alkali loads on the page, along with HCO3− tablets, citrate, and acetate." },
                            { id: "s5-persist", type: "sa", lines: 2,
                                stem: "Healthy kidneys excrete extra HCO3− quickly. Which two of her findings explain why hers has not?",
                                answer: "Her creatinine has more than doubled (low GFR), and she is volume depleted.",
                                explanation: "Low volume keeps HCO3− reabsorption high through angiotensin II and aldosterone, and a low GFR filters less of it." },
                            { id: "s5-treat", type: "mc", justify: 12,
                                stem: "Which management fits best? Briefly justify your choice.",
                                options: ["Stop the antacids and give 0.9% saline", "Acetazolamide to excrete the HCO3−", "Dilute HCl through a central line", "Spironolactone with KCl", "Continue the antacids and give furosemide"], answer: 0,
                                justifyAnswer: "Removes the alkali source and restores volume so kidneys excrete HCO3−.",
                                explanation: "Saline treats milk-alkali syndrome: restoring volume and GFR lets the kidney excrete both the HCO3− and the Ca2+.",
                                notes: { 1: "Acetazolamide suits alkalosis with fluid overload; she is volume depleted, and it would worsen that.", 2: "Dilute HCl is kept for severe or refractory alkalosis; hers corrects once the cause is removed.", 3: "Spironolactone treats aldosterone excess, which is not the cause here.", 4: "Continuing the alkali load keeps the alkalosis going, and furosemide alone would deplete her volume further." } },
                        ] },
                    { passage: `<p>She stops the antacids and receives IV saline. Results (illustrative):</p>
${labs(["Test", "Day 1", "Day 4"], [["Creatinine", "210 µmol/L", "105 µmol/L"], ["Ca2+ (corrected)", "3.4 mmol/L", "2.5 mmol/L"], ["HCO3−", "36 mmol/L", "27 mmol/L"]])}`,
                        questions: [
                            { id: "s5-recovery", type: "sa", lines: 2,
                                stem: "Explain why her HCO3− fell once her creatinine improved, although she was given no acid.",
                                answer: "With volume and GFR restored, her kidneys could excrete the extra HCO3− themselves.",
                                explanation: "An alkali load is self-limiting in healthy kidneys; her AKI and low volume were what kept it going." },
                        ] },
                ],
            },
        ],
    },
};
