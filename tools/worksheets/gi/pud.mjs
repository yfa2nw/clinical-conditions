// Worksheet for the Peptic Ulcer Disease page, built by tools/build-worksheet-pdf.mjs gi pud.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Peptic Ulcer Disease (PUD)",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From damage to treatment",
        top: "H. pylori, NSAIDs, alcohol, or gastrinomas damage the mucosa → acid reaches deeper layers → an ulcer beyond the [[muscularis mucosae]]",
        rows: ["Cause", "Why it happens", "Test", "Treatment"],
        columns: [
            ["1. H. pylori (most common)", "Gram-negative, [[urease]]-positive, flagellated; causes [[90]]% of duodenal and 70–90% of gastric ulcers", "Urea breath, stool antigen, rapid urease, or histology; stop PPIs [[2]] weeks and ABX and bismuth 4 weeks before", "Triple therapy bd for 7–14 days: PPI, amoxicillin ([[metronidazole]] if allergic), and clarithromycin; breath test 4–6 weeks after"],
            ["2. NSAIDs and alcohol", "COX inhibition → decreased [[PG]] → increased HCl and decreased mucus; highest risk with [[piroxicam]] and ketorolac", "History; EGD", "Stop the NSAID or lower the dose; [[misoprostol]] if it must continue"],
            ["3. Gastrinomas", "[[Zollinger-Ellison]] syndrome → gastrin → HCl; 20–30% with MEN1; jejunal ulcers and diarrhea", "Fasting gastrin over [[1000]] pg/mL; secretin test if equivocal; calcium, PTH, prolactin", "[[High-dose]] PPI; resection if localized"],
        ],
        span: "EGD is the gold standard: age 60 or older with new dyspepsia, or alarm features. Suppress acid (antacids, H2RA, PPI) and protect the mucosa (misoprostol, [[sucralfate]], bismuth)",
        chains: [
            { label: "As the ulcer deepens", steps: [["Ulcer crater", "Gastric: worse with eating. Duodenal: [[better]] with eating"], ["Vessel erosion", "Posterior duodenal: [[gastroduodenal]] artery. Lesser curvature: left gastric"], ["Perforation", "Upright [[CXR]]: pneumoperitoneum; surgery"], ["Scarring", "Gastric outlet obstruction: [[succussion]] splash"]] },
            { label: "Chronic H. pylori", steps: [["Gastritis", "Increased gastrin and HCl"], ["Atrophy", "Intestinal metaplasia"], ["Dysplasia", "Gastric [[cancer]]"], ["Lymphoid stimulation", "Gastric MALT lymphoma"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "PUD is ulceration of the mucosal lining that extends beyond the [[muscularis mucosae]]. H. pylori, NSAIDs, and alcohol weaken the barrier and decrease [[mucus]], and increased [[gastrin]] or decreased PG brings more acid. An ulcer that reaches a vessel [[bleeds]], and full-thickness injury causes pneumoperitoneum and [[peritonitis]]." },
                { id: "r-path-depth", type: "sa", lines: 2,
                    stem: "What separates a peptic ulcer from the erosions of gastritis, and why does depth matter clinically?",
                    answer: "An ulcer passes the muscularis mucosae; deeper injury can reach vessels and bleed, or go full thickness and perforate.",
                    explanation: "Gastritis, including Curling and Cushing ulcers, stays above the muscularis mucosae." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of causes.",
                    html: `<table><thead><tr><th>Cause</th><th>Key facts</th></tr></thead><tbody>
<tr><td>1. H. pylori</td><td>Gram-[[negative]], urease-positive, multiple [[flagella]]; virulence factors: ureases, cytotoxins (VacA, [[CagA]]), mucinases, phospholipases, and PAF</td></tr>
<tr><td>2. NSAIDs and alcohol</td><td>Risk highest with piroxicam and [[ketorolac]], lowest with ibuprofen and [[celecoxib]]</td></tr>
<tr><td>3. Gastrinomas</td><td>[[MEN1]] in 20–30%; refractory or multiple ulcers, including [[jejunal]] ulcers, with diarrhea</td></tr>
</tbody></table>` },
                { id: "r-cause-urease", type: "sa", lines: 2,
                    stem: "How does urease help H. pylori survive, and which tests rely on it?",
                    answer: "It makes ammonia, which neutralizes acid around the organism; the urea breath test and rapid urease test detect it.",
                    explanation: "The stool antigen test and histology detect the organism itself." },
                { id: "r-cause-nsaid", type: "mc",
                    stem: "Why do NSAIDs cause ulcers?",
                    options: ["Less PG: more HCl, less mucus", "They increase gastrin release from G cells", "They are toxic to parietal cells", "They promote H. pylori growth", "They block bicarbonate secretion by the pancreas"], answer: 0,
                    explanation: "PG protect the mucosa by stimulating mucus and restraining acid; NSAIDs remove both defenses.",
                    notes: { 1: "Increased gastrin is the mechanism of H. pylori and gastrinomas.", 2: "NSAIDs do not destroy parietal cells; autoimmune gastritis does.", 3: "NSAIDs are a separate cause from H. pylori.", 4: "The pancreas is not the site of NSAID injury." } },
                { id: "r-cause-chain", type: "order",
                    stem: "Number the steps from chronic H. pylori infection to gastric cancer.",
                    items: ["Dysplasia", "Gastritis", "Gastric cancer", "Atrophy and intestinal metaplasia"],
                    order: [1, 3, 0, 2],
                    explanation: "Chronic infection also leads to gastric MALT lymphoma." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-table", type: "blank",
                    stem: "Complete the comparison.",
                    html: `<table><thead><tr><th>Feature</th><th>Gastric ulcer</th><th>Duodenal ulcer</th></tr></thead><tbody>
<tr><td>Usual site</td><td>The [[lesser curvature]]</td><td>The duodenal [[bulb]]</td></tr>
<tr><td>Pain timing</td><td>[[15–30]] minutes after meals</td><td>2–3 hours after meals and at [[night]]</td></tr>
<tr><td>Eating</td><td>[[Worse]]</td><td>Better</td></tr>
<tr><td>Bleeding vessel</td><td>Left gastric artery</td><td>[[Gastroduodenal]] artery (posterior ulcer)</td></tr>
</tbody></table>` },
                { id: "r-sx-why", type: "sa", lines: 3,
                    stem: "Explain why a patient with a duodenal ulcer may gain weight, while a patient with a gastric ulcer may lose it.",
                    answer: "Food buffers acid and relieves duodenal pain, so patients eat more; eating brings acid onto a gastric ulcer, so patients avoid food.",
                    explanation: "Duodenal pain returns when the stomach empties, 2–3 hours after meals and at night." },
                { id: "r-sx-match", type: "match",
                    stem: "Match each complication to its signs.",
                    items: ["Bleeding", "Perforation", "Gastric outlet obstruction"],
                    options: ["Pneumoperitoneum and peritonitis", "Vomiting, pain, malnutrition, and succussion splash", "Hematemesis and melena"],
                    answer: [2, 0, 1],
                    explanation: "Other complications are intestinal metaplasia, gastric cancer, and gastric MALT lymphoma." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-match", type: "match",
                    stem: "Match each situation to the test.",
                    items: ["Suspected perforation", "Bleeding", "No H. pylori detected", "Gastrin equivocal", "Gastrinoma confirmed"],
                    options: ["Secretin stimulation test", "Calcium, PTH, and prolactin", "EGD with biopsy", "Fasting gastrin", "Upright CXR"],
                    answer: [4, 2, 3, 0, 1],
                    explanation: "Each complication and cause has its own test; gastrin is checked only once H. pylori is excluded." },
                { id: "r-dx-prep", type: "sa", lines: 2,
                    stem: "Why are PPIs stopped 2 weeks, and ABX and bismuth 4 weeks, before H. pylori testing?",
                    answer: "They suppress the organism, so tests done sooner can be falsely negative.",
                    explanation: "PPIs are also stopped 1 week before a fasting gastrin, because they raise gastrin." },
                { id: "r-dx-secretin", type: "blank",
                    html: "A fasting gastrin over [[1000]] pg/mL ([[10]] times normal) is diagnostic of gastrinoma. If it is equivocal, a [[paradoxical]] rise over 120 pg/mL after secretin confirms Zollinger-Ellison syndrome. EGD is the [[gold standard]] for ulcers, for age 60 or older with new dyspepsia or alarm features at any age." },
                { id: "r-dx-egd", type: "mc", select: 2,
                    stem: "Which patients need EGD rather than testing and treatment alone?",
                    options: ["A 56-year-old with new dyspepsia", "A 35-year-old with dyspepsia and weight loss", "A 30-year-old with a positive breath test and no alarm features", "A 28-year-old with pain relieved by eating", "A 40-year-old after a negative test of cure"], answer: [0, 1],
                    explanation: "EGD is for age 60 or older with new dyspepsia, or alarm features at any age.",
                    notes: { 2: "Under 50 without alarm features, a positive test leads to eradication.", 3: "Pain relieved by eating alone is not an alarm feature.", 4: "A negative test of cure confirms eradication." } },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-complications", type: "blank",
                    html: "Perforation: IV fluids, IV PPI, IV [[ABX]], and [[surgery]]. Bleeding: IV fluids, IV PPI, [[EGD]], and surgery." },
                { id: "r-tx-drugs", type: "match",
                    stem: "Match each drug to its role.",
                    items: ["PPI", "Misoprostol", "Sucralfate", "Clarithromycin", "Bismuth"],
                    options: ["Protects the mucosa; part of a quadruple eradication regimen", "Protects the ulcer base", "Suppresses acid", "An antibiotic in first-line triple therapy", "Replaces PG for patients who must continue NSAIDs"],
                    answer: [2, 4, 1, 3, 0],
                    explanation: "Acid suppressors are antacids, H2RAs, and PPIs; mucosal protectants are misoprostol, sucralfate, and bismuth." },
                { id: "r-tx-alt", type: "blank",
                    html: "Alternative eradication regimens: PPI, amoxicillin, and [[levofloxacin]]; PPI, metronidazole, [[tetracycline]], and bismuth; and PPI, amoxicillin, and [[rifabutin]]." },
                { id: "r-tx-refractory", type: "sa", lines: 3,
                    stem: "Define a refractory ulcer, and list the four causes to look for before surgery.",
                    answer: "Over 5 mm and not healed after 8–12 weeks of PPI; persistent H. pylori, NSAIDs, gastrinoma, or cancer.",
                    explanation: "Vagotomy or partial gastrectomy follows only if no treatable cause is found." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Pain that wakes him at night",
                keyPoints: [
                    "Duodenal ulcer pain comes 2–3 hours after meals and at night and is relieved by eating.",
                    "PPIs are stopped 2 weeks before H. pylori testing, because they suppress the organism and cause false negatives.",
                    "First-line eradication is triple therapy: a PPI, amoxicillin, and clarithromycin, bd for 7–14 days.",
                    "Cure is confirmed by urea breath test 4–6 weeks after treatment, because eradication can fail.",
                    "After failure, an alternative regimen avoids the antibiotic most likely to be resisted.",
                ],
                blocks: [
                    { passage: `<p>A 34-year-old chef has 2 months of burning epigastric pain that starts mid-afternoon and around 2 am, eased by snacks and milk. He has gained 2 kg. He has no weight loss, bleeding, dysphagia, or vomiting. He has been taking a PPI bought from a pharmacy for 3 weeks, with partial relief. He has no allergies.</p>`,
                        questions: [
                            { id: "s1-site", type: "sa", lines: 2,
                                stem: "Which type of ulcer does his pain pattern suggest, and why does eating help?",
                                answer: "Duodenal: food buffers acid while the stomach holds it, so pain eases until the stomach empties.",
                                explanation: "Duodenal ulcer pain is 2–3 hours after meals and at night, better with eating." },
                            { id: "s1-prep", type: "mc", justify: 12,
                                stem: "He wants to be tested for H. pylori today. What is the best advice? Briefly justify your choice.",
                                options: ["Stop the PPI 2 weeks, then breath test", "Do a breath test today, continuing the PPI", "Do H. pylori serology today instead", "Stop the PPI for 4 weeks and add bismuth", "Skip testing and start triple therapy"], answer: 0,
                                justifyAnswer: "PPIs suppress H. pylori, so testing on one can be falsely negative.",
                                explanation: "PPIs are stopped 2 weeks before testing, and ABX and bismuth 4 weeks before.",
                                notes: { 1: "A breath test on a PPI can be falsely negative.", 2: "Serology cannot tell current from past infection.", 3: "Bismuth also suppresses the organism.", 4: "Treatment follows a positive test." } },
                        ] },
                    { passage: `<p>Two weeks off the PPI, his urea breath test is positive. He is under 50 with no alarm features, so he is treated without EGD.</p>`,
                        questions: [
                            { id: "s1-regimen", type: "sa", lines: 2,
                                stem: "Write his first-line regimen, including dosing frequency and duration.",
                                answer: "PPI, amoxicillin, and clarithromycin, bd for 7–14 days.",
                                explanation: "Metronidazole would replace amoxicillin in penicillin allergy." },
                            { id: "s1-why", type: "sa", lines: 2,
                                stem: "Why does eradication, rather than a PPI alone, prevent his ulcer from coming back?",
                                answer: "Eradication removes the infection that raises gastrin and HCl; a PPI only suppresses acid while taken.",
                                explanation: "H. pylori causes 90% of duodenal ulcers." },
                        ] },
                    { passage: `<p>He finishes the course. A urea breath test 6 weeks later, off all PPIs for 2 weeks, is positive again. He says he took every dose. He has had several courses of clarithromycin for chest infections in the past.</p>`,
                        questions: [
                            { id: "s1-fail", type: "mc", justify: 12,
                                stem: "Which regimen is most appropriate now? Briefly justify your choice.",
                                options: ["PPI, metronidazole, tetracycline, and bismuth", "PPI, amoxicillin, and clarithromycin once more", "PPI, metronidazole, and clarithromycin", "A PPI alone for 8 weeks", "Vagotomy"], answer: 0,
                                justifyAnswer: "Prior clarithromycin suggests resistance; the alternative regimen avoids it.",
                                explanation: "Alternative regimens are PPI, amoxicillin, and levofloxacin; PPI, metronidazole, tetracycline, and bismuth; and PPI, amoxicillin, and rifabutin.",
                                notes: { 1: "Repeating the failed regimen keeps clarithromycin, the likely problem.", 2: "This still relies on clarithromycin.", 3: "A PPI does not eradicate the infection.", 4: "Surgery is for refractory ulcers without a treatable cause." } },
                        ] },
                ],
            },
            {
                title: "Black stools on arthritis tablets",
                keyPoints: [
                    "A bleeding ulcer is treated with IV fluids, IV PPI, EGD, and surgery if EGD fails.",
                    "A posterior duodenal ulcer erodes the gastroduodenal artery, and a lesser curvature ulcer the left gastric artery.",
                    "H. pylori is checked even when an NSAID explains the ulcer, but tests on a PPI can be falsely negative.",
                    "NSAID ulcers: stop the NSAID or lower the dose, with misoprostol for those who must continue.",
                    "NSAID risk varies: highest with piroxicam and ketorolac, lowest with ibuprofen and celecoxib.",
                ],
                blocks: [
                    { passage: `<p>A 71-year-old woman with rheumatoid arthritis takes piroxicam daily. She has passed black stools for 2 days and fainted this morning.</p>
<table><thead><tr><th>Measure</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Heart rate</td><td>118/min</td><td>60–100</td></tr>
<tr><td>BP</td><td>92/58 mm Hg</td><td>—</td></tr>
<tr><td>Hemoglobin</td><td>74 g/L</td><td>115–165</td></tr>
<tr><td>Urea</td><td>21.4 mmol/L</td><td>2.5–7.5</td></tr>
<tr><td>Creatinine</td><td>88 µmol/L</td><td>45–90</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s2-urea", type: "sa", lines: 2,
                                stem: "Her urea is high but her creatinine normal. What does this suggest about the source of bleeding?",
                                answer: "Blood digested in the upper GI tract is absorbed as protein, raising urea: an upper GI source.",
                                explanation: "Melena and a raised urea with normal creatinine point to bleeding above the ligament of Treitz." },
                            { id: "s2-order", type: "order",
                                stem: "Number her management in order.",
                                items: ["EGD to find and treat the bleeding point", "IV fluids and blood", "IV PPI", "Surgery if EGD cannot control the bleeding"],
                                order: [1, 2, 0, 3],
                                explanation: "Bleeding is treated with IV fluids, IV PPI, EGD, and surgery." },
                        ] },
                    { passage: `<p>EGD shows a 1.5-cm ulcer on the posterior wall of the duodenal bulb with a visible vessel, which is treated endoscopically. A rapid urease test on antral biopsies, taken during her IV PPI infusion, is negative.</p>`,
                        questions: [
                            { id: "s2-artery", type: "sa", lines: 2,
                                stem: "Which artery is at risk from this ulcer, and why does its location matter?",
                                answer: "The gastroduodenal artery, which runs behind the first part of the duodenum, so posterior ulcers erode into it.",
                                explanation: "A lesser curvature gastric ulcer erodes the left gastric artery instead." },
                            { id: "s2-hp", type: "mc", select: 2,
                                stem: "Which statements about her H. pylori status are correct?",
                                options: ["The negative result may be false, because she is on a PPI", "She should be retested off the PPI, or by histology", "Piroxicam fully explains the ulcer, so no further testing is needed", "A negative rapid urease test means a gastrinoma must be sought", "Serology would confirm whether she is cured"], answer: [0, 1],
                                explanation: "PPIs suppress H. pylori and cause false negatives, so the result does not exclude infection.",
                                notes: { 2: "H. pylori is checked in every ulcer, as both causes can coexist.", 3: "Gastrin is checked once H. pylori is truly excluded.", 4: "Serology cannot show current infection." } },
                        ] },
                    { passage: `<p>She recovers. Her rheumatologist says she needs ongoing anti-inflammatory treatment for her joints.</p>`,
                        questions: [
                            { id: "s2-nsaid", type: "sa", lines: 3,
                                stem: "Suggest two changes to her NSAID treatment that lower her risk of another ulcer, with a reason for each.",
                                answer: "Switch from piroxicam to a lower-risk NSAID such as celecoxib or ibuprofen, at the lowest dose; add misoprostol to replace PG.",
                                explanation: "Stop the NSAID or lower the dose, with misoprostol to prevent ulcers in those who must continue." },
                        ] },
                ],
            },
            {
                title: "An ulcer that will not heal",
                keyPoints: [
                    "Gastric ulcers can be malignant, so they are biopsied; duodenal ulcers rarely are.",
                    "A refractory ulcer, over 5 mm and not healed after 8–12 weeks of PPI, prompts a search for H. pylori, NSAIDs, gastrinoma, or cancer.",
                    "Hidden NSAID use, such as over-the-counter tablets, is a common reason an ulcer does not heal.",
                    "Perforation is diagnosed by upright CXR and treated with IV fluids, IV PPI, IV ABX, and surgery.",
                    "Scarring near the pylorus causes gastric outlet obstruction, with vomiting and a succussion splash.",
                ],
                blocks: [
                    { passage: `<p>A 58-year-old woman has 6 weeks of burning epigastric pain 20 minutes after meals. She eats less and has lost 3 kg. EGD shows a 12-mm ulcer on the lesser curvature.</p>`,
                        questions: [
                            { id: "s3-why-egd", type: "sa", lines: 2,
                                stem: "Why was EGD the right first test for her, and what must be done to the ulcer?",
                                answer: "Weight loss is an alarm feature, which calls for EGD at any age; the gastric ulcer is biopsied, because it can be malignant.",
                                explanation: "EGD is the gold standard, for age 60 or older with new dyspepsia or alarm features at any age." },
                            { id: "s3-type", type: "mc",
                                stem: "Which feature of her history fits a gastric rather than a duodenal ulcer?",
                                options: ["Pain 20 minutes after meals, with weight loss", "Burning epigastric pain", "Pain that wakes her at night", "Pain relieved by eating", "Gaining weight"], answer: 0,
                                explanation: "Gastric ulcer pain comes 15–30 minutes after meals and is worse with eating, so patients eat less.",
                                notes: { 1: "Burning epigastric pain occurs in both.", 2: "Night pain fits a duodenal ulcer.", 3: "Relief with eating fits a duodenal ulcer.", 4: "Weight gain fits a duodenal ulcer." } },
                        ] },
                    { passage: `<p>Biopsies show a benign ulcer, with no H. pylori on histology, and a breath test off PPI is negative. She takes a PPI for 10 weeks. Repeat EGD shows the ulcer is still 9 mm.</p>`,
                        questions: [
                            { id: "s3-refractory", type: "sa", lines: 3,
                                stem: "Is this a refractory ulcer? Explain, and give the causes to look for next.",
                                answer: "Yes: over 5 mm and not healed after 8–12 weeks of PPI; look for persistent H. pylori, NSAIDs, gastrinoma, or cancer.",
                                explanation: "Vagotomy or partial gastrectomy is considered only after these are excluded." },
                            { id: "s3-hidden", type: "mc", justify: 12,
                                stem: "On careful questioning, she takes an over-the-counter cold and flu tablet most days. Why does this matter? Briefly justify your choice.",
                                options: ["It may contain an NSAID", "Decongestants raise gastrin directly", "Cold tablets cause H. pylori reinfection", "Paracetamol causes gastric ulcers", "It suggests a gastrinoma"], answer: 0,
                                justifyAnswer: "Hidden NSAIDs inhibit COX, lowering PG, so the ulcer cannot heal.",
                                explanation: "NSAIDs are one of the four causes of a refractory ulcer, and over-the-counter use is easily missed.",
                                notes: { 1: "Decongestants are not a cause of raised gastrin.", 2: "Medicines do not cause H. pylori infection.", 3: "Paracetamol is not an NSAID and does not cause ulcers.", 4: "Hidden NSAID use is a simpler explanation, found first." } },
                        ] },
                    { passage: `<p>Before her review, she presents with sudden severe epigastric pain spreading across her abdomen. She lies still, with a rigid abdomen. Heart rate 124, temperature 38.2 °C.</p>`,
                        questions: [
                            { id: "s3-perf", type: "sa", lines: 3,
                                stem: "Name the complication, the first test, what it would show, and the treatment.",
                                answer: "Perforation; upright CXR showing free air under the diaphragm; IV fluids, IV PPI, IV ABX, and surgery.",
                                explanation: "Full-thickness injury lets air and gastric contents into the peritoneum, causing pneumoperitoneum and peritonitis." },
                        ] },
                    { passage: `<p>Her brother, 66, has had untreated duodenal ulcers for years. He now vomits undigested food eaten the day before, and a splash is heard over his stomach when it is gently rocked.</p>`,
                        questions: [
                            { id: "s3-goo", type: "sa", lines: 2,
                                stem: "What complication does he have, and how did his ulcers cause it?",
                                answer: "Gastric outlet obstruction: chronic ulcers near the pylorus healed with scarring that narrows the outlet.",
                                explanation: "Gastric outlet obstruction causes vomiting, pain, malnutrition, and a succussion splash." },
                        ] },
                ],
            },
        ],
    },
};
