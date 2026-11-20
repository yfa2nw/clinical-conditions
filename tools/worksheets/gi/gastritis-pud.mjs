// Worksheet for the Gastritis and Peptic Ulcer Disease page, built by tools/build-worksheet-pdf.mjs gi gastritis-pud.
// Merged from the worksheets of the pages it replaced (gastritis, pud); question ids keep a prefix from their source page.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    "title": "Gastritis and Peptic Ulcer Disease",
    "flowchart": {
        "title": "From damage to treatment",
        "top": "Drugs, infection, gastrin, stress, or autoimmunity damage the stomach → gastritis stays above the [[muscularis mucosae]]; an ulcer extends beyond it",
        "rows": [
            "Cause",
            "Why it happens",
            "Main test",
            "Treatment"
        ],
        "columns": [
            [
                "1. NSAIDs and alcohol",
                "[[COX]] inhibition → decreased PG → increased HCl and decreased mucus",
                "History; EGD: antral erosions or an ulcer",
                "Stop the NSAID or lower the dose; PPI; [[misoprostol]] if it must continue"
            ],
            [
                "2. H. pylori (most common cause of PUD)",
                "Gram-negative, [[urease]]-positive; increased gastrin → increased HCl",
                "[[Urea breath]] test or stool antigen; stop PPIs 2 weeks and ABX 4 weeks before",
                "Triple therapy bd for 7–14 days: PPI, amoxicillin, and [[clarithromycin]]; confirm cure 4–6 weeks after"
            ],
            [
                "3. Gastrinomas",
                "[[Zollinger-Ellison]] syndrome → gastrin → HCl; 20–30% with MEN1; jejunal ulcers and diarrhea",
                "Fasting gastrin over 1000 pg/mL; secretin test if equivocal",
                "High-dose PPI; resection if localized"
            ],
            [
                "4–5. Curling and Cushing ulcers",
                "Burns → hypovolemia → [[ischemia]]; raised ICP → increased CN X activity → increased HCl",
                "EGD if bleeding",
                "Stress prophylaxis: PPI first line, [[H2RA]] second"
            ],
            [
                "6. Autoimmune",
                "Autoantibodies attack [[parietal]] cells → decreased HCl and IF → atrophy of the body and fundus",
                "Anti-parietal cell (sensitive) and anti-IF (specific) antibodies; B12 and iron",
                "IM [[B12]], then lifelong; iron; EGD every 3 years if atrophy is advanced"
            ]
        ],
        "span": "EGD is the gold standard: age [[60]] or older with new dyspepsia, or alarm features. Suppress acid (antacids, H2RA, PPI) and protect the mucosa (misoprostol, sucralfate, bismuth)",
        "chains": [
            {
                "label": "As the ulcer deepens",
                "steps": [
                    [
                        "Ulcer crater",
                        "Gastric: worse with eating. Duodenal: [[better]] with eating"
                    ],
                    [
                        "Vessel erosion",
                        "Posterior duodenal: [[gastroduodenal]] artery. Lesser curvature: left gastric"
                    ],
                    [
                        "Perforation",
                        "Upright [[CXR]]: pneumoperitoneum; surgery"
                    ],
                    [
                        "Scarring",
                        "Gastric outlet obstruction: [[succussion]] splash"
                    ]
                ]
            },
            {
                "label": "Chronic H. pylori",
                "steps": [
                    [
                        "Atrophy",
                        "Loss of glands"
                    ],
                    [
                        "Intestinal metaplasia",
                        "Then dysplasia"
                    ],
                    [
                        "Intestinal-type adenocarcinoma",
                        "The most common type; forms glands"
                    ],
                    [
                        "[[MALT]] lymphoma",
                        "Eradicate if t(11;18) negative"
                    ]
                ]
            }
        ]
    },
    "review": [
        {
            "section": "Pathophysiology",
            "questions": [
                {
                    "id": "gas-r-path-blanks",
                    "type": "blank",
                    "html": "Gastritis is inflammation of the stomach's [[mucosal]] lining after damage to the stomach. It is associated with the [[antrum]], with shallow [[erosions]] that do not pass the muscularis mucosae, and in autoimmune gastritis with atrophy of the [[fundus]] rather than erosions."
                },
                {
                    "id": "gas-r-path-match",
                    "type": "match",
                    "stem": "Match each effect of damage to its cause.",
                    "items": [
                        "Weakened mucus layer",
                        "Increased HCl",
                        "Mucosal ischemia",
                        "Parietal cell loss"
                    ],
                    "options": [
                        "Hypovolemia from severe burns",
                        "Autoantibodies",
                        "COX inhibition decreasing PG",
                        "NSAIDs, alcohol, H. pylori, and increased CN X activity"
                    ],
                    "answer": [
                        2,
                        3,
                        0,
                        1
                    ],
                    "explanation": "Each cause either weakens the defenses (mucus, blood flow) or strengthens the attack (HCl); autoimmunity instead destroys the cells that make acid."
                },
                {
                    "id": "gas-r-path-depth",
                    "type": "sa",
                    "lines": 2,
                    "stem": "What separates gastritis from peptic ulcer disease, and why are Curling and Cushing ulcers grouped with gastritis?",
                    "answer": "Depth: gastritis stays above the muscularis mucosae, and Curling and Cushing lesions do not erode past it.",
                    "explanation": "Curling and Cushing ulcers are not true ulcers."
                },
                {
                    "id": "pud-r-path-blanks",
                    "type": "blank",
                    "html": "PUD is ulceration of the mucosal lining that extends beyond the [[muscularis mucosae]]. H. pylori, NSAIDs, and alcohol weaken the barrier and decrease [[mucus]], and increased [[gastrin]] or decreased PG brings more acid. An ulcer that reaches a vessel [[bleeds]], and full-thickness injury causes pneumoperitoneum and [[peritonitis]]."
                },
                {
                    "id": "pud-r-path-depth",
                    "type": "sa",
                    "lines": 2,
                    "stem": "What separates a peptic ulcer from the erosions of gastritis, and why does depth matter clinically?",
                    "answer": "An ulcer passes the muscularis mucosae; deeper injury can reach vessels and bleed, or go full thickness and perforate.",
                    "explanation": "Gastritis, including Curling and Cushing ulcers, stays above the muscularis mucosae."
                }
            ]
        },
        {
            "section": "Etiology",
            "questions": [
                {
                    "id": "gas-r-cause-table",
                    "type": "blank",
                    "stem": "Complete the table of causes.",
                    "html": "<table><thead><tr><th>Cause</th><th>Mechanism</th></tr></thead><tbody>\n<tr><td>1. NSAIDs and alcohol</td><td>COX inhibition → decreased [[PG]] → increased HCl and decreased [[mucus]]</td></tr>\n<tr><td>2. H. pylori</td><td>Urease makes [[ammonia]]; infection → increased [[gastrin]] → increased HCl</td></tr>\n<tr><td>3. Curling ulcers</td><td>Severe burns → [[hypovolemia]] → mucosal ischemia</td></tr>\n<tr><td>4. Cushing ulcers</td><td>Increased ICP → increased [[CN X]] activity → increased HCl</td></tr>\n<tr><td>5. Autoimmune gastritis</td><td>Autoantibodies attack parietal cells → decreased HCl and [[IF]]; often with autoimmune [[thyroid]] disease</td></tr>\n</tbody></table>"
                },
                {
                    "id": "gas-r-cause-sites",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does autoimmune gastritis affect the body and fundus but spare the antrum?",
                    "answer": "Its target, the parietal cell, lives in the body and fundus; the antrum holds G cells instead.",
                    "explanation": "H. pylori gastritis, by contrast, typically starts in the antrum."
                },
                {
                    "id": "gas-r-cause-stress",
                    "type": "mc",
                    "stem": "Which pairing of patient and stress lesion is correct?",
                    "options": [
                        "Raised ICP: a Cushing ulcer, from increased CN X activity",
                        "A woman with 40% burns: a Cushing ulcer from increased CN X activity",
                        "A man with raised ICP: a Curling ulcer from hypovolemia",
                        "A woman on naproxen: a Curling ulcer from ischemia",
                        "A woman with burns: autoimmune gastritis from parietal cell loss"
                    ],
                    "answer": 0,
                    "explanation": "Burns cause Curling ulcers through hypovolemia and ischemia; raised ICP causes Cushing ulcers through increased CN X activity.",
                    "notes": {
                        "1": "Burns cause Curling ulcers.",
                        "2": "Raised ICP causes Cushing ulcers.",
                        "3": "Naproxen injures through COX inhibition.",
                        "4": "Burns do not cause autoimmune gastritis."
                    }
                },
                {
                    "id": "pud-r-cause-table",
                    "type": "blank",
                    "stem": "Complete the table of causes.",
                    "html": "<table><thead><tr><th>Cause</th><th>Key facts</th></tr></thead><tbody>\n<tr><td>1. H. pylori</td><td>Gram-[[negative]], urease-positive, multiple [[flagella]]; virulence factors: ureases, cytotoxins (VacA, [[CagA]]), mucinases, phospholipases, and PAF</td></tr>\n<tr><td>2. NSAIDs and alcohol</td><td>Risk highest with piroxicam and [[ketorolac]], lowest with ibuprofen and [[celecoxib]]</td></tr>\n<tr><td>3. Gastrinomas</td><td>[[MEN1]] in 20–30%; refractory or multiple ulcers, including [[jejunal]] ulcers, with diarrhea</td></tr>\n</tbody></table>"
                },
                {
                    "id": "pud-r-cause-urease",
                    "type": "sa",
                    "lines": 2,
                    "stem": "How does urease help H. pylori survive, and which tests rely on it?",
                    "answer": "It makes ammonia, which neutralizes acid around the organism; the urea breath test and rapid urease test detect it.",
                    "explanation": "The stool antigen test and histology detect the organism itself."
                },
                {
                    "id": "pud-r-cause-nsaid",
                    "type": "mc",
                    "stem": "Why do NSAIDs cause ulcers?",
                    "options": [
                        "Less PG: more HCl, less mucus",
                        "They increase gastrin release from G cells",
                        "They are toxic to parietal cells",
                        "They promote H. pylori growth",
                        "They block bicarbonate secretion by the pancreas"
                    ],
                    "answer": 0,
                    "explanation": "PG protect the mucosa by stimulating mucus and restraining acid; NSAIDs remove both defenses.",
                    "notes": {
                        "1": "Increased gastrin is the mechanism of H. pylori and gastrinomas.",
                        "2": "NSAIDs do not destroy parietal cells; autoimmune gastritis does.",
                        "3": "NSAIDs are a separate cause from H. pylori.",
                        "4": "The pancreas is not the site of NSAID injury."
                    }
                },
                {
                    "id": "pud-r-cause-chain",
                    "type": "order",
                    "stem": "Number the steps from chronic H. pylori infection to gastric cancer.",
                    "items": [
                        "Dysplasia",
                        "Gastritis",
                        "Gastric cancer",
                        "Atrophy and intestinal metaplasia"
                    ],
                    "order": [
                        1,
                        3,
                        0,
                        2
                    ],
                    "explanation": "Chronic infection also leads to gastric MALT lymphoma."
                }
            ]
        },
        {
            "section": "Symptoms and complications",
            "questions": [
                {
                    "id": "gas-r-sx-order",
                    "type": "order",
                    "stem": "Number the steps of autoimmune gastritis in order.",
                    "items": [
                        "Pernicious anemia",
                        "B12 malabsorption over 2–5 years",
                        "Neurological damage",
                        "Parietal cell loss with decreased IF and HCl"
                    ],
                    "order": [
                        3,
                        1,
                        0,
                        2
                    ],
                    "explanation": "Neurological damage begins as peripheral neuropathy, then subacute combined degeneration."
                },
                {
                    "id": "gas-r-sx-match",
                    "type": "match",
                    "stem": "Match each complication to its cause.",
                    "items": [
                        "Type 1 gastric carcinoid",
                        "Gastric MALT lymphoma",
                        "Hemorrhage",
                        "Iron and B12 deficiency",
                        "Peptic ulcer"
                    ],
                    "options": [
                        "Atrophic gastritis",
                        "H. pylori and NSAIDs",
                        "Stress gastritis without prophylaxis",
                        "High gastrin in autoimmune gastritis",
                        "Chronic H. pylori infection"
                    ],
                    "answer": [
                        3,
                        4,
                        2,
                        0,
                        1
                    ],
                    "explanation": "Gastritis is often asymptomatic, so complications can be how it is found."
                },
                {
                    "id": "gas-r-sx-cancer",
                    "type": "blank",
                    "stem": "Complete the comparison of gastric adenocarcinoma.",
                    "html": "<table><thead><tr><th>Feature</th><th>Intestinal type</th><th>Diffuse type</th></tr></thead><tbody>\n<tr><td>Histology</td><td>Forms [[glands]]</td><td>[[Signet ring]] cells; no cell adhesion ([[CDH1]] mutations)</td></tr>\n<tr><td>Growth</td><td>A mass</td><td>Infiltrates the wall → [[linitis plastica]]</td></tr>\n<tr><td>Risks</td><td>H. pylori, atrophic gastritis, pernicious anemia, smoking, salt-preserved, smoked, or N-nitroso foods</td><td>Blood group [[A]]</td></tr>\n</tbody></table>"
                },
                {
                    "id": "gas-r-sx-signs",
                    "type": "match",
                    "stem": "Match each metastatic sign of gastric cancer to its site.",
                    "items": [
                        "Virchow node",
                        "Sister Mary Joseph nodule",
                        "Irish node",
                        "Krukenberg tumor",
                        "Blumer shelf"
                    ],
                    "options": [
                        "Umbilicus",
                        "Pelvic cul-de-sac",
                        "Left supraclavicular",
                        "Ovary",
                        "Left axilla"
                    ],
                    "answer": [
                        2,
                        0,
                        4,
                        3,
                        1
                    ],
                    "explanation": "Paraneoplastic signs are acanthosis nigricans, diffuse seborrheic keratoses, and Trousseau syndrome."
                },
                {
                    "id": "gas-r-sx-menetrier",
                    "type": "blank",
                    "html": "In Ménétrier disease, excess [[TGF-α]] activates EGFR, causing giant folds in the body and fundus, sparing the [[antrum]]. Acid is [[decreased]], and protein loss causes hypoalbuminemia and [[edema]]. It is premalignant in adults; a self-limited form in children follows [[CMV]]."
                },
                {
                    "id": "pud-r-sx-table",
                    "type": "blank",
                    "stem": "Complete the comparison.",
                    "html": "<table><thead><tr><th>Feature</th><th>Gastric ulcer</th><th>Duodenal ulcer</th></tr></thead><tbody>\n<tr><td>Usual site</td><td>The [[lesser curvature]]</td><td>The duodenal [[bulb]]</td></tr>\n<tr><td>Pain timing</td><td>[[15–30]] minutes after meals</td><td>2–3 hours after meals and at [[night]]</td></tr>\n<tr><td>Eating</td><td>[[Worse]]</td><td>Better</td></tr>\n<tr><td>Bleeding vessel</td><td>Left gastric artery</td><td>[[Gastroduodenal]] artery (posterior ulcer)</td></tr>\n</tbody></table>"
                },
                {
                    "id": "pud-r-sx-why",
                    "type": "sa",
                    "lines": 3,
                    "stem": "Explain why a patient with a duodenal ulcer may gain weight, while a patient with a gastric ulcer may lose it.",
                    "answer": "Food buffers acid and relieves duodenal pain, so patients eat more; eating brings acid onto a gastric ulcer, so patients avoid food.",
                    "explanation": "Duodenal pain returns when the stomach empties, 2–3 hours after meals and at night."
                },
                {
                    "id": "pud-r-sx-match",
                    "type": "match",
                    "stem": "Match each complication to its signs.",
                    "items": [
                        "Bleeding",
                        "Perforation",
                        "Gastric outlet obstruction"
                    ],
                    "options": [
                        "Pneumoperitoneum and peritonitis",
                        "Vomiting, pain, malnutrition, and succussion splash",
                        "Hematemesis and melena"
                    ],
                    "answer": [
                        2,
                        0,
                        1
                    ],
                    "explanation": "Other complications are intestinal metaplasia, gastric cancer, and gastric MALT lymphoma."
                }
            ]
        },
        {
            "section": "Diagnosis",
            "questions": [
                {
                    "id": "gas-r-dx-pathway",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which patients with dyspepsia need EGD with biopsies from 5 sites rather than H. pylori testing first?",
                    "options": [
                        "A 63-year-old with no alarm features",
                        "A 40-year-old with persistent vomiting",
                        "A 35-year-old with bloating after meals",
                        "A 45-year-old whose breath test is positive",
                        "A 30-year-old on an empiric PPI"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Age 60 or older or alarm features (weight loss, bleeding, dysphagia, a mass, persistent vomiting, family history of gastric cancer) call for EGD.",
                    "notes": {
                        "2": "Bloating is a common symptom, not an alarm feature.",
                        "3": "A positive breath test leads to eradication.",
                        "4": "An empiric PPI is for H. pylori-negative dyspepsia under 60."
                    }
                },
                {
                    "id": "gas-r-dx-antibodies",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Anti-parietal cell antibodies are sensitive and anti-IF antibodies specific. What does a negative anti-parietal cell result and a positive anti-IF result each tell you?",
                    "answer": "A negative sensitive test makes the disease unlikely; a positive specific test makes it likely.",
                    "explanation": "Biopsy shows body and fundus atrophy with intestinal metaplasia, and B12 and iron are checked."
                },
                {
                    "id": "gas-r-dx-blanks",
                    "type": "blank",
                    "html": "In pernicious anemia, the FBC shows macrocytosis and [[hypersegmented]] neutrophils, but [[one-third]] have no macrocytosis. Ménétrier disease may need a [[deep]] biopsy if mucosal biopsy is normal. Cure of H. pylori is confirmed with a [[noninvasive]] test 4–6 weeks after finishing ABX or PPI."
                },
                {
                    "id": "pud-r-dx-match",
                    "type": "match",
                    "stem": "Match each situation to the test.",
                    "items": [
                        "Suspected perforation",
                        "Bleeding",
                        "No H. pylori detected",
                        "Gastrin equivocal",
                        "Gastrinoma confirmed"
                    ],
                    "options": [
                        "Secretin stimulation test",
                        "Calcium, PTH, and prolactin",
                        "EGD with biopsy",
                        "Fasting gastrin",
                        "Upright CXR"
                    ],
                    "answer": [
                        4,
                        2,
                        3,
                        0,
                        1
                    ],
                    "explanation": "Each complication and cause has its own test; gastrin is checked only once H. pylori is excluded."
                },
                {
                    "id": "pud-r-dx-prep",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why are PPIs stopped 2 weeks, and ABX and bismuth 4 weeks, before H. pylori testing?",
                    "answer": "They suppress the organism, so tests done sooner can be falsely negative.",
                    "explanation": "PPIs are also stopped 1 week before a fasting gastrin, because they raise gastrin."
                },
                {
                    "id": "pud-r-dx-secretin",
                    "type": "blank",
                    "html": "A fasting gastrin over [[1000]] pg/mL ([[10]] times normal) is diagnostic of gastrinoma. If it is equivocal, a [[paradoxical]] rise over 120 pg/mL after secretin confirms Zollinger-Ellison syndrome. EGD is the [[gold standard]] for ulcers, for age 60 or older with new dyspepsia or alarm features at any age."
                },
                {
                    "id": "pud-r-dx-egd",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which patients need EGD rather than testing and treatment alone?",
                    "options": [
                        "A 56-year-old with new dyspepsia",
                        "A 35-year-old with dyspepsia and weight loss",
                        "A 30-year-old with a positive breath test and no alarm features",
                        "A 28-year-old with pain relieved by eating",
                        "A 40-year-old after a negative test of cure"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "EGD is for age 60 or older with new dyspepsia, or alarm features at any age.",
                    "notes": {
                        "2": "Under 50 without alarm features, a positive test leads to eradication.",
                        "3": "Pain relieved by eating alone is not an alarm feature.",
                        "4": "A negative test of cure confirms eradication."
                    }
                }
            ]
        },
        {
            "section": "Treatment",
            "questions": [
                {
                    "id": "gas-r-tx-match",
                    "type": "match",
                    "stem": "Match each situation to its treatment.",
                    "items": [
                        "Critically ill, for stress prophylaxis",
                        "H. pylori-negative dyspepsia under 60",
                        "Gastritis from NSAIDs or alcohol",
                        "Gastric MALT lymphoma, t(11;18) negative",
                        "Ménétrier disease"
                    ],
                    "options": [
                        "Stop the cause; PPI",
                        "High-protein diet, PPI, and albumin; total gastrectomy if refractory",
                        "PPI first line, H2RA second line",
                        "H. pylori eradication",
                        "Empiric PPI, then a prokinetic or tricyclic antidepressant"
                    ],
                    "answer": [
                        2,
                        4,
                        0,
                        3,
                        1
                    ],
                    "explanation": "Eradication gives an 80% complete response in t(11;18)-negative MALT lymphoma; otherwise radiotherapy or systemic therapy."
                },
                {
                    "id": "gas-r-tx-b12",
                    "type": "sa",
                    "lines": 3,
                    "stem": "Give the B12 regimen for autoimmune gastritis, and explain why oral B12 at dietary doses would not work.",
                    "answer": "IM B12 1000 µg daily or alternate days for 1–2 weeks, then IM or high-dose oral for life; without IF, normal doses are not absorbed.",
                    "explanation": "Iron is replaced too, and EGD every 3 years follows if atrophy is advanced."
                },
                {
                    "id": "gas-r-tx-folate",
                    "type": "mc",
                    "stem": "Why should folic acid not be given alone to a patient with pernicious anemia?",
                    "options": [
                        "It fixes the anemia as nerve damage worsens",
                        "It blocks B12 absorption in the terminal ileum",
                        "It raises gastrin and the carcinoid risk",
                        "It causes a microcytic anemia",
                        "It inactivates intrinsic factor antibodies"
                    ],
                    "answer": 0,
                    "explanation": "Folate can bypass the block in DNA synthesis and correct the blood count, but not the neurological effect of B12 deficiency.",
                    "notes": {
                        "1": "Folate does not block B12 absorption.",
                        "2": "Folate does not affect gastrin.",
                        "3": "Folate does not cause microcytosis.",
                        "4": "Folate does not affect antibodies."
                    }
                },
                {
                    "id": "pud-r-tx-complications",
                    "type": "blank",
                    "html": "Perforation: IV fluids, IV PPI, IV [[ABX]], and [[surgery]]. Bleeding: IV fluids, IV PPI, [[EGD]], and surgery."
                },
                {
                    "id": "pud-r-tx-drugs",
                    "type": "match",
                    "stem": "Match each drug to its role.",
                    "items": [
                        "PPI",
                        "Misoprostol",
                        "Sucralfate",
                        "Clarithromycin",
                        "Bismuth"
                    ],
                    "options": [
                        "Protects the mucosa; part of a quadruple eradication regimen",
                        "Protects the ulcer base",
                        "Suppresses acid",
                        "An antibiotic in first-line triple therapy",
                        "Replaces PG for patients who must continue NSAIDs"
                    ],
                    "answer": [
                        2,
                        4,
                        1,
                        3,
                        0
                    ],
                    "explanation": "Acid suppressors are antacids, H2RAs, and PPIs; mucosal protectants are misoprostol, sucralfate, and bismuth."
                },
                {
                    "id": "pud-r-tx-alt",
                    "type": "blank",
                    "html": "Alternative eradication regimens: PPI, amoxicillin, and [[levofloxacin]]; PPI, metronidazole, [[tetracycline]], and bismuth; and PPI, amoxicillin, and [[rifabutin]]."
                },
                {
                    "id": "pud-r-tx-refractory",
                    "type": "sa",
                    "lines": 3,
                    "stem": "Define a refractory ulcer, and list the four causes to look for before surgery.",
                    "answer": "Over 5 mm and not healed after 8–12 weeks of PPI; persistent H. pylori, NSAIDs, gastrinoma, or cancer.",
                    "explanation": "Vagotomy or partial gastrectomy follows only if no treatable cause is found."
                }
            ]
        }
    ],
    "practice": {
        "scenarios": [
            {
                "title": "Pain that wakes him at night",
                "keyPoints": [
                    "Duodenal ulcer pain comes 2–3 hours after meals and at night and is relieved by eating.",
                    "PPIs are stopped 2 weeks before H. pylori testing, because they suppress the organism and cause false negatives.",
                    "First-line eradication is triple therapy: a PPI, amoxicillin, and clarithromycin, bd for 7–14 days.",
                    "Cure is confirmed by urea breath test 4–6 weeks after treatment, because eradication can fail.",
                    "After failure, an alternative regimen avoids the antibiotic most likely to be resisted."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 34-year-old chef has 2 months of burning epigastric pain that starts mid-afternoon and around 2 am, eased by snacks and milk. He has gained 2 kg. He has no weight loss, bleeding, dysphagia, or vomiting. He has been taking a PPI bought from a pharmacy for 3 weeks, with partial relief. He has no allergies.</p>",
                        "questions": [
                            {
                                "id": "pud-s1-site",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Which type of ulcer does his pain pattern suggest, and why does eating help?",
                                "answer": "Duodenal: food buffers acid while the stomach holds it, so pain eases until the stomach empties.",
                                "explanation": "Duodenal ulcer pain is 2–3 hours after meals and at night, better with eating."
                            },
                            {
                                "id": "pud-s1-prep",
                                "type": "mc",
                                "justify": 12,
                                "stem": "He wants to be tested for H. pylori today. What is the best advice? Briefly justify your choice.",
                                "options": [
                                    "Stop the PPI 2 weeks, then breath test",
                                    "Do a breath test today, continuing the PPI",
                                    "Do H. pylori serology today instead",
                                    "Stop the PPI for 4 weeks and add bismuth",
                                    "Skip testing and start triple therapy"
                                ],
                                "answer": 0,
                                "justifyAnswer": "PPIs suppress H. pylori, so testing on one can be falsely negative.",
                                "explanation": "PPIs are stopped 2 weeks before testing, and ABX and bismuth 4 weeks before.",
                                "notes": {
                                    "1": "A breath test on a PPI can be falsely negative.",
                                    "2": "Serology cannot tell current from past infection.",
                                    "3": "Bismuth also suppresses the organism.",
                                    "4": "Treatment follows a positive test."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>Two weeks off the PPI, his urea breath test is positive. He is under 50 with no alarm features, so he is treated without EGD.</p>",
                        "questions": [
                            {
                                "id": "pud-s1-regimen",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Write his first-line regimen, including dosing frequency and duration.",
                                "answer": "PPI, amoxicillin, and clarithromycin, bd for 7–14 days.",
                                "explanation": "Metronidazole would replace amoxicillin in penicillin allergy."
                            },
                            {
                                "id": "pud-s1-why",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Why does eradication, rather than a PPI alone, prevent his ulcer from coming back?",
                                "answer": "Eradication removes the infection that raises gastrin and HCl; a PPI only suppresses acid while taken.",
                                "explanation": "H. pylori causes 90% of duodenal ulcers."
                            }
                        ]
                    },
                    {
                        "passage": "<p>He finishes the course. A urea breath test 6 weeks later, off all PPIs for 2 weeks, is positive again. He says he took every dose. He has had several courses of clarithromycin for chest infections in the past.</p>",
                        "questions": [
                            {
                                "id": "pud-s1-fail",
                                "type": "mc",
                                "justify": 12,
                                "stem": "Which regimen is most appropriate now? Briefly justify your choice.",
                                "options": [
                                    "PPI, metronidazole, tetracycline, and bismuth",
                                    "PPI, amoxicillin, and clarithromycin once more",
                                    "PPI, metronidazole, and clarithromycin",
                                    "A PPI alone for 8 weeks",
                                    "Vagotomy"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Prior clarithromycin suggests resistance; the alternative regimen avoids it.",
                                "explanation": "Alternative regimens are PPI, amoxicillin, and levofloxacin; PPI, metronidazole, tetracycline, and bismuth; and PPI, amoxicillin, and rifabutin.",
                                "notes": {
                                    "1": "Repeating the failed regimen keeps clarithromycin, the likely problem.",
                                    "2": "This still relies on clarithromycin.",
                                    "3": "A PPI does not eradicate the infection.",
                                    "4": "Surgery is for refractory ulcers without a treatable cause."
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Black stools on arthritis tablets",
                "keyPoints": [
                    "A bleeding ulcer is treated with IV fluids, IV PPI, EGD, and surgery if EGD fails.",
                    "A posterior duodenal ulcer erodes the gastroduodenal artery, and a lesser curvature ulcer the left gastric artery.",
                    "H. pylori is checked even when an NSAID explains the ulcer, but tests on a PPI can be falsely negative.",
                    "NSAID ulcers: stop the NSAID or lower the dose, with misoprostol for those who must continue.",
                    "NSAID risk varies: highest with piroxicam and ketorolac, lowest with ibuprofen and celecoxib."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 71-year-old woman with rheumatoid arthritis takes piroxicam daily. She has passed black stools for 2 days and fainted this morning.</p>\n<table><thead><tr><th>Measure</th><th>Result</th><th>Reference</th></tr></thead><tbody>\n<tr><td>Heart rate</td><td>118/min</td><td>60–100</td></tr>\n<tr><td>BP</td><td>92/58 mm Hg</td><td>—</td></tr>\n<tr><td>Hemoglobin</td><td>74 g/L</td><td>115–165</td></tr>\n<tr><td>Urea</td><td>21.4 mmol/L</td><td>2.5–7.5</td></tr>\n<tr><td>Creatinine</td><td>88 µmol/L</td><td>45–90</td></tr>\n</tbody></table>",
                        "questions": [
                            {
                                "id": "pud-s2-urea",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Her urea is high but her creatinine normal. What does this suggest about the source of bleeding?",
                                "answer": "Blood digested in the upper GI tract is absorbed as protein, raising urea: an upper GI source.",
                                "explanation": "Melena and a raised urea with normal creatinine point to bleeding above the ligament of Treitz."
                            },
                            {
                                "id": "pud-s2-order",
                                "type": "order",
                                "stem": "Number her management in order.",
                                "items": [
                                    "EGD to find and treat the bleeding point",
                                    "IV fluids and blood",
                                    "IV PPI",
                                    "Surgery if EGD cannot control the bleeding"
                                ],
                                "order": [
                                    1,
                                    2,
                                    0,
                                    3
                                ],
                                "explanation": "Bleeding is treated with IV fluids, IV PPI, EGD, and surgery."
                            }
                        ]
                    },
                    {
                        "passage": "<p>EGD shows a 1.5-cm ulcer on the posterior wall of the duodenal bulb with a visible vessel, which is treated endoscopically. A rapid urease test on antral biopsies, taken during her IV PPI infusion, is negative.</p>",
                        "questions": [
                            {
                                "id": "pud-s2-artery",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Which artery is at risk from this ulcer, and why does its location matter?",
                                "answer": "The gastroduodenal artery, which runs behind the first part of the duodenum, so posterior ulcers erode into it.",
                                "explanation": "A lesser curvature gastric ulcer erodes the left gastric artery instead."
                            },
                            {
                                "id": "pud-s2-hp",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which statements about her H. pylori status are correct?",
                                "options": [
                                    "The negative result may be false, because she is on a PPI",
                                    "She should be retested off the PPI, or by histology",
                                    "Piroxicam fully explains the ulcer, so no further testing is needed",
                                    "A negative rapid urease test means a gastrinoma must be sought",
                                    "Serology would confirm whether she is cured"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "PPIs suppress H. pylori and cause false negatives, so the result does not exclude infection.",
                                "notes": {
                                    "2": "H. pylori is checked in every ulcer, as both causes can coexist.",
                                    "3": "Gastrin is checked once H. pylori is truly excluded.",
                                    "4": "Serology cannot show current infection."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>She recovers. Her rheumatologist says she needs ongoing anti-inflammatory treatment for her joints.</p>",
                        "questions": [
                            {
                                "id": "pud-s2-nsaid",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Suggest two changes to her NSAID treatment that lower her risk of another ulcer, with a reason for each.",
                                "answer": "Switch from piroxicam to a lower-risk NSAID such as celecoxib or ibuprofen, at the lowest dose; add misoprostol to replace PG.",
                                "explanation": "Stop the NSAID or lower the dose, with misoprostol to prevent ulcers in those who must continue."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Tired, with numb feet",
                "keyPoints": [
                    "Autoimmune gastritis is usually found through anemia, and it often accompanies autoimmune thyroid disease.",
                    "One-third of patients with pernicious anemia have no macrocytosis, especially when iron deficiency coexists.",
                    "Anti-parietal cell antibodies are sensitive and anti-IF antibodies specific; biopsy shows body and fundus atrophy.",
                    "B12 is given IM at first, then IM or high-dose oral for life, with iron replacement.",
                    "Low acid raises gastrin, which drives ECL cell growth and type 1 carcinoids, so advanced atrophy is surveyed every 3 years."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 52-year-old woman with Hashimoto thyroiditis and vitiligo has 8 months of fatigue, a sore tongue, and pins and needles in both feet. She eats meat most days.</p>\n<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>\n<tr><td>Hemoglobin</td><td>94 g/L</td><td>115–165</td></tr>\n<tr><td>MCV</td><td>91 fL</td><td>80–100</td></tr>\n<tr><td>Blood film</td><td>Hypersegmented neutrophils; mixed small and large red cells</td><td>—</td></tr>\n<tr><td>Serum B12</td><td>85 pmol/L</td><td>Over 150</td></tr>\n<tr><td>Ferritin</td><td>9 µg/L</td><td>30–300</td></tr>\n</tbody></table><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "gas-s2-mcv",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Her MCV is normal despite B12 deficiency. Explain why, using the blood film.",
                                "answer": "Coexisting iron deficiency makes small cells that offset the large B12-deficient cells, so the average MCV is normal.",
                                "explanation": "One-third of patients with pernicious anemia have no macrocytosis; atrophic gastritis causes both iron and B12 deficiency."
                            },
                            {
                                "id": "gas-s2-why",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which features point to autoimmune gastritis as the cause?",
                                "options": [
                                    "Hashimoto thyroiditis and vitiligo",
                                    "B12 deficiency despite eating meat",
                                    "A sore tongue",
                                    "A normal MCV",
                                    "Her age"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "Autoimmune gastritis accompanies other autoimmune disease, and B12 deficiency with an adequate diet points to malabsorption from IF loss.",
                                "notes": {
                                    "2": "A sore tongue occurs in both B12 and iron deficiency, whatever the cause.",
                                    "3": "A normal MCV is explained by the iron deficiency, not the cause.",
                                    "4": "Age alone does not point to the cause."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>\n<tr><td>Anti-parietal cell antibodies</td><td>Positive</td></tr>\n<tr><td>Anti-intrinsic factor antibodies</td><td>Negative</td></tr>\n<tr><td>Fasting gastrin</td><td>Markedly increased</td></tr>\n</tbody></table><p>EGD shows thin, pale mucosa in the body and fundus with a normal antrum. Biopsies show atrophy with intestinal metaplasia in the body. Biopsies are negative for H. pylori.</p>",
                        "questions": [
                            {
                                "id": "gas-s2-ab",
                                "type": "mc",
                                "justify": 12,
                                "stem": "Does the negative anti-IF result exclude autoimmune gastritis? Briefly justify your choice.",
                                "options": [
                                    "No; anti-IF is specific, not sensitive",
                                    "Yes; anti-IF must be positive for the diagnosis",
                                    "Yes; the positive anti-parietal result is a false positive",
                                    "No, but only because H. pylori was negative",
                                    "Yes; the high gastrin points to a gastrinoma instead"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Anti-IF is specific but often negative; biopsy shows body and fundus atrophy.",
                                "explanation": "Anti-parietal cell antibodies are sensitive, anti-IF specific; body and fundus atrophy with intestinal metaplasia supports the diagnosis.",
                                "notes": {
                                    "1": "A negative specific test does not exclude the disease.",
                                    "2": "The biopsy supports a true positive.",
                                    "3": "H. pylori status does not decide the antibody question.",
                                    "4": "A gastrinoma would raise acid and thicken folds, not cause atrophy."
                                }
                            },
                            {
                                "id": "gas-s2-gastrin",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Explain her high gastrin, and the tumor it puts her at risk of.",
                                "answer": "Low acid removes feedback on the spared antral G cells; high gastrin makes ECL cells grow, risking type 1 carcinoid.",
                                "explanation": "The antrum is spared, so G cells keep secreting."
                            }
                        ]
                    },
                    {
                        "passage": "<p>Her GP plans to start oral folic acid and oral iron and review her in 3 months.</p>",
                        "questions": [
                            {
                                "id": "gas-s2-plan",
                                "type": "sa",
                                "lines": 3,
                                "stem": "What is wrong with this plan, and what should she receive?",
                                "answer": "Folate alone may fix the blood count while nerve damage progresses, and she cannot absorb dietary B12; give IM B12 1000 µg daily or alternate days for 1–2 weeks, then lifelong, plus iron.",
                                "explanation": "Neurological damage progresses from peripheral neuropathy to subacute combined degeneration."
                            },
                            {
                                "id": "gas-s2-follow",
                                "type": "mc",
                                "stem": "Which follow-up is appropriate for her stomach?",
                                "options": [
                                    "EGD every 3 years",
                                    "No follow-up once B12 is replaced",
                                    "EGD every 3 months",
                                    "Annual H. pylori breath tests",
                                    "Total gastrectomy to prevent carcinoid"
                                ],
                                "answer": 0,
                                "explanation": "EGD every 3 years follows advanced atrophy, for carcinoid and intestinal-type adenocarcinoma.",
                                "notes": {
                                    "1": "B12 corrects the deficiency, not the cancer risk of atrophy.",
                                    "2": "Three-monthly EGD is far more often than needed.",
                                    "3": "Her biopsies were negative for H. pylori, and her gastritis is autoimmune.",
                                    "4": "Gastrectomy is not used to prevent carcinoid here."
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Two patients in the ICU",
                "keyPoints": [
                    "Severe burns cause Curling ulcers through hypovolemia and mucosal ischemia.",
                    "Raised ICP causes Cushing ulcers through increased CN X activity and HCl production.",
                    "Both are erosions above the muscularis mucosae, not true ulcers, but they can hemorrhage.",
                    "Critically ill patients receive stress prophylaxis: a PPI first line, an H2RA second line.",
                    "Gastritis from NSAIDs or alcohol is treated by stopping the cause and giving a PPI."
                ],
                "blocks": [
                    {
                        "passage": "<p>Two patients are admitted to the ICU on the same night. Patient A, 31, has full-thickness burns over 50% of his body and is receiving large volumes of IV fluid. Patient B, 45, has a traumatic brain injury with raised ICP and is ventilated. Neither was prescribed stress prophylaxis. Patient B takes ibuprofen and drinks heavily at home.</p>",
                        "questions": [
                            {
                                "id": "gas-s3-mech",
                                "type": "sa",
                                "lines": 3,
                                "stem": "For each patient, name the stress lesion he is at risk of and its mechanism.",
                                "answer": "A: Curling ulcer, from hypovolemia and mucosal ischemia. B: Cushing ulcer, from increased CN X activity raising HCl.",
                                "explanation": "Burns cause Curling ulcers; brain injury causes Cushing ulcers."
                            },
                            {
                                "id": "gas-s3-ppx",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which statements about stress prophylaxis for these patients are correct?",
                                "options": [
                                    "A PPI is first line",
                                    "An H2RA is the second-line option",
                                    "Misoprostol is first line",
                                    "It is needed only if H. pylori is positive",
                                    "It is unnecessary because these are not true ulcers"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "Stress gastritis can hemorrhage without prophylaxis; a PPI is first line and an H2RA second line.",
                                "notes": {
                                    "2": "Misoprostol is not the page's stress prophylaxis.",
                                    "3": "Stress gastritis is not caused by H. pylori.",
                                    "4": "Erosions can still hemorrhage."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>On day 3, before prophylaxis is started, patient B has coffee-ground aspirate from his nasogastric tube and melena. His hemoglobin falls from 132 to 101 g/L. EGD shows multiple shallow erosions in the body and antrum, none extending beyond the mucosa, with oozing from several.</p>",
                        "questions": [
                            {
                                "id": "gas-s3-label",
                                "type": "mc",
                                "justify": 12,
                                "stem": "How are these lesions best described? Briefly justify your choice.",
                                "options": [
                                    "Stress gastritis, with erosions rather than true ulcers",
                                    "Peptic ulcer disease",
                                    "Autoimmune gastritis",
                                    "Gastric adenocarcinoma",
                                    "Ménétrier disease"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Shallow erosions that do not pass the muscularis mucosae, after raised ICP.",
                                "explanation": "Cushing ulcers are not true ulcers because they do not erode past the muscularis mucosae.",
                                "notes": {
                                    "1": "PUD extends beyond the muscularis mucosae.",
                                    "2": "Autoimmune gastritis causes atrophy, not erosions.",
                                    "3": "Multiple oozing erosions after brain injury are not a tumor.",
                                    "4": "Ménétrier disease causes giant folds."
                                }
                            },
                            {
                                "id": "gas-s3-home",
                                "type": "sa",
                                "lines": 3,
                                "stem": "His home ibuprofen and alcohol add a second mechanism. Explain it, and state what should happen to them on discharge.",
                                "answer": "COX inhibition decreases PG, lowering mucus and raising HCl; stop the ibuprofen and alcohol, and continue a PPI.",
                                "explanation": "Gastritis from NSAIDs or alcohol is treated by stopping the cause and giving a PPI."
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
