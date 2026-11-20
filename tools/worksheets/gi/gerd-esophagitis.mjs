// Worksheet for the GERD and Esophagitis page, built by tools/build-worksheet-pdf.mjs gi gerd-esophagitis.
// Merged from the worksheets of the pages it replaced (esophagitis, gerd); question ids keep a prefix from their source page.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    "title": "GERD and Esophagitis",
    "flowchart": {
        "title": "From injury to treatment",
        "top": "Pills, caustics, allergens, infection, or refluxed [[HCl]] injure the mucosa → esophagitis; persistent reflux can lead to [[Barrett]] esophagus",
        "rows": [
            "Cause",
            "Why it happens",
            "EGD and biopsy",
            "Treatment"
        ],
        "columns": [
            [
                "1. Pill-induced",
                "NSAIDs, KCl, doxycycline, or bisphosphonates lodge where the aortic arch or an enlarged left atrium narrows the esophagus",
                "An ulcer in the [[middle]] third, within hours to 10 days of the pill",
                "Stop the drug; take pills with at least 6 oz of water and stay upright for 30 minutes"
            ],
            [
                "2. Caustic",
                "Alkali: [[liquefactive]] necrosis, deep. Acid: coagulative necrosis, superficial, with skip lesions",
                "EGD within [[24]] hours grades the injury; after 96 hours, friable tissue risks perforation",
                "Secure the airway, NPO, never induce [[vomiting]]; surgery for perforation"
            ],
            [
                "3. Eosinophilic",
                "An allergic reaction to food and air antigens, with asthma, rhinitis, or atopic dermatitis",
                "Rings and furrows; [[15]] or more eosinophils per high-power field, biopsied after an 8-week PPI trial",
                "PPI, then trigger food elimination or swallowed [[topical steroids]]; dilate strictures once treated"
            ],
            [
                "4. Infectious",
                "Impaired [[cell-mediated]] immunity: HIV, chemotherapy, or corticosteroids",
                "Candida: white plaques. HSV: small, deep ulcers. CMV: large, shallow ulcers",
                "Candida: oral [[fluconazole]] for 14–21 days, never topical; antivirals for HSV and CMV"
            ],
            [
                "5. Reflux: GERD (6–9)",
                "Decreased LES tone, hiatal hernia, increased HCl, or increased intragastric pressure",
                "ECG if chest pain; EGD first for alarm features; otherwise an [[8]]-week PPI trial",
                "Lifestyle; PPI or H2RA; Nissen fundoplication if refractory"
            ]
        ],
        "span": "Every cause: a [[PPI]] to prevent further mucosal damage",
        "chains": [
            {
                "label": "As injury deepens",
                "steps": [
                    [
                        "Mucosal inflammation",
                        "Odynophagia, heartburn, chest pain"
                    ],
                    [
                        "Ulcer",
                        "Bleeding: hematemesis and [[melena]]"
                    ],
                    [
                        "Stricture",
                        "[[Dysphagia]] and food impaction"
                    ],
                    [
                        "Perforation",
                        "Pneumomediastinum and mediastinitis"
                    ]
                ]
            },
            {
                "label": "As injury persists",
                "steps": [
                    [
                        "Chronic acid injury",
                        "Heartburn, regurgitation, dyspepsia"
                    ],
                    [
                        "Intestinal metaplasia",
                        "Salmon mucosa 1 cm or more above the junction, with [[goblet cells]]"
                    ],
                    [
                        "Dysplasia",
                        "Endoscopic eradication, such as [[radiofrequency ablation]]"
                    ],
                    [
                        "Adenocarcinoma",
                        "In fewer than [[5]]% of Barrett esophagus"
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
                    "id": "eso-r-path-blanks",
                    "type": "blank",
                    "html": "Esophagitis begins when pills, caustics, allergens, infection, or [[reflux]] injure the [[mucosa]], causing [[inflammation]] of the esophagus. The damage can deepen into [[ulcers]] or heal with scarring into [[strictures]]."
                },
                {
                    "id": "eso-r-path-match",
                    "type": "match",
                    "stem": "Match each kind of injury to what it causes.",
                    "items": [
                        "Mucosal inflammation",
                        "An ulcer into the submucosa",
                        "Healing that narrows the lumen",
                        "Full-thickness injury",
                        "Chronic injury with metaplasia"
                    ],
                    "options": [
                        "Pneumomediastinum and mediastinitis",
                        "Odynophagia, heartburn, and chest pain",
                        "Dysplasia and esophageal adenocarcinoma",
                        "Hematemesis and melena",
                        "Dysphagia and obstruction"
                    ],
                    "answer": [
                        1,
                        3,
                        4,
                        0,
                        2
                    ],
                    "explanation": "Each step deeper into the wall changes the result: inflamed mucosa hurts, ulcers bleed, scars narrow, full-thickness injury perforates, and chronic injury can become Barrett esophagus."
                },
                {
                    "id": "eso-r-path-why",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does a stricture cause dysphagia, while mucosal inflammation causes odynophagia?",
                    "answer": "A stricture narrows the lumen, so food cannot pass easily; inflamed, damaged mucosa hurts as food passes over it.",
                    "explanation": "Dysphagia is difficulty getting food through; odynophagia is pain on swallowing. Healing scar narrows the lumen, while damaged mucosa is painful."
                },
                {
                    "id": "eso-r-path-barrett",
                    "type": "order",
                    "stem": "Number these steps toward esophageal adenocarcinoma in order.",
                    "items": [
                        "Dysplasia",
                        "Chronic injury of the mucosa",
                        "Esophageal adenocarcinoma",
                        "Intestinal metaplasia (Barrett esophagus)"
                    ],
                    "order": [
                        1,
                        3,
                        0,
                        2
                    ],
                    "explanation": "Chronic injury leads to intestinal metaplasia, then dysplasia, then adenocarcinoma."
                },
                {
                    "id": "gerd-r-path-blanks",
                    "type": "blank",
                    "html": "GERD occurs when [[HCl]] enters the esophagus, causing [[mucosal damage]]. A failed barrier, from decreased [[LES]] tone or a hiatal hernia, lets HCl pass, and increased [[intragastric]] pressure pushes it upward. Refluxed HCl that reaches the airway causes [[aspiration pneumonia]]."
                },
                {
                    "id": "gerd-r-path-match",
                    "type": "match",
                    "stem": "Match each effect of reflux to its result.",
                    "items": [
                        "Failed barrier",
                        "Raised pressure",
                        "Mucosal injury",
                        "Chronic injury",
                        "Aspiration"
                    ],
                    "options": [
                        "Heartburn, dyspepsia, and chest pain",
                        "HCl pushed upward into the esophagus",
                        "Intestinal metaplasia, dysplasia, and adenocarcinoma",
                        "HCl passes through a weak LES or a hiatal hernia",
                        "Aspiration pneumonia"
                    ],
                    "answer": [
                        3,
                        1,
                        0,
                        2,
                        4
                    ],
                    "explanation": "Reflux needs a barrier that fails or pressure that overcomes it; what happens next depends on how long HCl stays and where it goes."
                },
                {
                    "id": "gerd-r-path-why",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does increased HCl production make reflux more damaging, even if the number of reflux episodes stays the same?",
                    "answer": "Each episode carries more acid onto the mucosa, so the same reflux causes more injury.",
                    "explanation": "Increased HCl production is one of the four mechanisms, from smoking, alcohol, and Zollinger-Ellison syndrome."
                }
            ]
        },
        {
            "section": "Etiology",
            "questions": [
                {
                    "id": "eso-r-cause-table",
                    "type": "blank",
                    "stem": "Complete the table of causes.",
                    "html": "<table><thead><tr><th>Cause</th><th>Key facts</th></tr></thead><tbody>\n<tr><td>1. Pill-induced</td><td>Pills lodge in the [[middle]] esophagus, where the [[aortic arch]] or an enlarged [[left atrium]] narrows it</td></tr>\n<tr><td>2. Caustic</td><td>Strong alkali causes [[liquefactive]] necrosis that penetrates deeply; strong acid causes [[coagulative]] necrosis, more superficial, with [[skip lesions]]</td></tr>\n<tr><td>3. Eosinophilic</td><td>An [[allergic]] reaction to food and air antigens, with asthma, allergic rhinitis, or atopic dermatitis</td></tr>\n<tr><td>4. Infectious</td><td>Impaired [[cell-mediated]] immunity: Candida in [[88]]%, HSV in [[10]]%, and CMV in [[2]]%</td></tr>\n<tr><td>5. Reflux-associated</td><td>[[GERD]], including cases that do not respond to PPIs</td></tr>\n</tbody></table>"
                },
                {
                    "id": "eso-r-cause-pill-why",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does taking a pill lying down with little water raise the risk of pill esophagitis?",
                    "answer": "Without gravity or water to carry it on, the pill sits against the narrowed mid-esophagus and injures the mucosa.",
                    "explanation": "Pills lodge where the aortic arch or an enlarged left atrium narrows the esophagus, especially when taken lying down with little water."
                },
                {
                    "id": "eso-r-cause-caustic",
                    "type": "mc",
                    "stem": "Why does strong alkali usually injure the esophagus more deeply than strong acid?",
                    "options": [
                        "Alkali causes liquefactive necrosis, which penetrates deeply",
                        "Alkali causes coagulative necrosis, which spreads along the wall",
                        "Acid is neutralized by saliva before it reaches the esophagus",
                        "Acid causes liquefactive necrosis, which stays superficial",
                        "Alkali triggers an allergic reaction in the mucosa"
                    ],
                    "answer": 0,
                    "explanation": "Alkali causes liquefactive necrosis that penetrates deeply; acid causes coagulative necrosis, which is more superficial, with skip lesions.",
                    "notes": {
                        "1": "Coagulative necrosis is caused by acid and is more superficial.",
                        "2": "Acid injures the esophagus, causing coagulative necrosis with skip lesions.",
                        "3": "Acid causes coagulative, not liquefactive, necrosis.",
                        "4": "Allergy is the mechanism of eosinophilic esophagitis."
                    }
                },
                {
                    "id": "eso-r-cause-infection",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which patients are at risk of infectious esophagitis?",
                    "options": [
                        "A man with HIV who stopped antiretroviral therapy",
                        "A woman receiving chemotherapy for lymphoma",
                        "A teenager taking doxycycline at bedtime",
                        "A man with asthma and atopic dermatitis",
                        "A woman taking weekly alendronate"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Infectious esophagitis follows impaired cell-mediated immunity, as with HIV, chemotherapy, or corticosteroids.",
                    "notes": {
                        "2": "Doxycycline at bedtime is a pill-induced risk.",
                        "3": "Atopy points to eosinophilic esophagitis.",
                        "4": "Alendronate is a pill-induced risk."
                    }
                },
                {
                    "id": "gerd-r-cause-match",
                    "type": "match",
                    "stem": "Match each risk to the mechanism it acts through.",
                    "items": [
                        "Pregnancy",
                        "Nitrates",
                        "Zollinger-Ellison syndrome",
                        "Obesity",
                        "Morphine",
                        "A sliding hernia"
                    ],
                    "options": [
                        "Decreased LES tone",
                        "Increased intragastric pressure",
                        "Increased HCl production",
                        "Loss of the crura's support at the junction"
                    ],
                    "answer": [
                        1,
                        0,
                        2,
                        1,
                        0,
                        3
                    ],
                    "explanation": "Pregnancy also lowers LES tone through progesterone, but the page places it among causes of increased intragastric pressure."
                },
                {
                    "id": "gerd-r-cause-hernia",
                    "type": "mc",
                    "stem": "Why can a paraesophageal hernia be dangerous even when it causes little reflux?",
                    "options": [
                        "The stomach can twist or strangulate",
                        "It moves the junction above the diaphragm",
                        "It raises HCl production",
                        "It always causes Barrett esophagus",
                        "It narrows the esophagus into a stricture"
                    ],
                    "answer": 0,
                    "explanation": "Paraesophageal hernias (types II–IV) can cause volvulus and strangulation, so they are repaired surgically.",
                    "notes": {
                        "1": "Moving the junction above the diaphragm describes a sliding hernia.",
                        "2": "Hernias do not raise acid secretion.",
                        "3": "Barrett esophagus follows chronic reflux, not a hernia itself.",
                        "4": "Strictures follow chronic acid injury."
                    }
                },
                {
                    "id": "gerd-r-cause-drugs",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which drugs promote reflux by decreasing LES tone?",
                    "options": [
                        "Amlodipine",
                        "Isosorbide mononitrate",
                        "Omeprazole",
                        "Famotidine",
                        "Metformin"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Nitrates, CCBs, anticholinergics, theophylline, and morphine lower LES tone.",
                    "notes": {
                        "2": "Omeprazole is a PPI that treats GERD.",
                        "3": "Famotidine is an H2RA that treats GERD.",
                        "4": "Metformin does not affect the LES."
                    }
                },
                {
                    "id": "gerd-r-cause-nsaid",
                    "type": "blank",
                    "html": "Aspirin and other [[NSAIDs]] are also risk factors for GERD, and in a patient taking them, the treatment is to [[stop the offending drug]]."
                }
            ]
        },
        {
            "section": "Symptoms and complications",
            "questions": [
                {
                    "id": "eso-r-comp-blanks",
                    "type": "blank",
                    "html": "Bleeding from ulcers causes [[hematemesis]] and [[melena]]; perforation causes [[pneumomediastinum]] and [[mediastinitis]]; and aspiration causes [[pneumonia]]."
                },
                {
                    "id": "eso-r-comp-impaction",
                    "type": "sa",
                    "lines": 2,
                    "stem": "How can eosinophilic esophagitis lead to food impaction?",
                    "answer": "Chronic eosinophilic inflammation forms rings and strictures that narrow the lumen, so a bolus of food lodges.",
                    "explanation": "Rings, furrows, and strictures are the endoscopic signs of eosinophilic esophagitis, and food impaction is one of its symptoms."
                },
                {
                    "id": "gerd-r-sx-blanks",
                    "type": "blank",
                    "html": "Typical symptoms are heartburn, [[regurgitation]], dysphagia, dyspepsia, and chest pain. Extraesophageal symptoms are chronic [[cough]], asthma, laryngitis and [[hoarseness]], sore throat, and dental [[erosions]]."
                },
                {
                    "id": "gerd-r-sx-comp",
                    "type": "match",
                    "stem": "Match each complication to how it presents.",
                    "items": [
                        "Bleeding",
                        "Perforation",
                        "Stricture",
                        "Aspiration"
                    ],
                    "options": [
                        "Progressive dysphagia",
                        "Pneumonia",
                        "Hematemesis and melena",
                        "Pneumomediastinum and mediastinitis"
                    ],
                    "answer": [
                        2,
                        3,
                        0,
                        1
                    ],
                    "explanation": "Deeper injury bleeds or perforates, healing narrows, and refluxed HCl reaching the airway causes pneumonia."
                },
                {
                    "id": "gerd-r-sx-barrett",
                    "type": "blank",
                    "stem": "Complete the facts about Barrett esophagus.",
                    "html": "<table><thead><tr><th>Feature</th><th>Fact</th></tr></thead><tbody>\n<tr><td>Defined by</td><td>[[Salmon]]-colored mucosa [[1]] cm or more above the gastroesophageal junction, with [[goblet cells]]</td></tr>\n<tr><td>Risk factors</td><td>Men, White, over [[50]], central obesity, smoking, and a family history</td></tr>\n<tr><td>Screen when</td><td>Chronic reflux comes with [[3]] or more risk factors</td></tr>\n<tr><td>Cancer risk</td><td>Fewer than 5% develop [[adenocarcinoma]]</td></tr>\n</tbody></table>"
                }
            ]
        },
        {
            "section": "Diagnosis",
            "questions": [
                {
                    "id": "eso-r-dx-match",
                    "type": "match",
                    "stem": "Match each EGD and biopsy finding to its cause.",
                    "items": [
                        "White plaques that do not wash off",
                        "Small, deep ulcers with multinucleated giant cells and Cowdry type A inclusions",
                        "Large, shallow ulcers with intranuclear and cytoplasmic inclusions",
                        "Rings, longitudinal furrows, and 15 or more eosinophils per high-power field",
                        "A single ulcer in the middle third, at the aortic arch"
                    ],
                    "options": [
                        "HSV",
                        "Pill-induced",
                        "Candida",
                        "Eosinophilic",
                        "CMV"
                    ],
                    "answer": [
                        2,
                        0,
                        4,
                        3,
                        1
                    ],
                    "explanation": "The endoscopic pattern points to the cause, and histology confirms it."
                },
                {
                    "id": "eso-r-dx-caustic",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why is EGD done within 24 hours of a caustic ingestion, but avoided after 96 hours?",
                    "answer": "Early EGD grades the injury and predicts strictures; after 96 hours the tissue is friable, so EGD risks perforation.",
                    "explanation": "Timing balances information against risk: grading is most useful early, and healing tissue is weakest later."
                },
                {
                    "id": "eso-r-dx-eoe",
                    "type": "sa",
                    "lines": 2,
                    "stem": "In suspected eosinophilic esophagitis, why are biopsies taken after an 8-week PPI trial, and even when the mucosa looks normal?",
                    "answer": "The PPI trial separates it from GERD, and endoscopy is normal in up to 10%, so only biopsy shows the eosinophils.",
                    "explanation": "Diagnosis needs 15 or more eosinophils per high-power field, which a normal-looking mucosa can still hide."
                },
                {
                    "id": "eso-r-dx-blanks",
                    "type": "blank",
                    "html": "Biopsies are taken from the [[proximal]], [[mid]], and [[distal]] esophagus. If perforation is suspected, a [[contrast esophagram]] and [[CXR]] are done, followed by surgery."
                },
                {
                    "id": "gerd-r-dx-order",
                    "type": "order",
                    "stem": "Number the steps of the diagnostic pathway for a patient with reflux symptoms and chest pain.",
                    "items": [
                        "EGD and pH monitoring if there is no improvement",
                        "Check for alarm features",
                        "ECG",
                        "An 8-week PPI trial before the first meal"
                    ],
                    "order": [
                        2,
                        1,
                        3,
                        0
                    ],
                    "explanation": "Chest pain is presumed cardiac until proven otherwise; alarm features send the patient to EGD first; otherwise a PPI trial comes before tests."
                },
                {
                    "id": "gerd-r-dx-alarm",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which findings are alarm features that call for EGD before a PPI trial?",
                    "options": [
                        "Odynophagia",
                        "Iron-deficiency anemia",
                        "Hoarseness",
                        "Regurgitation after meals",
                        "Heartburn at night"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Alarm features are dysphagia, odynophagia, anemia, weight loss, and hematemesis or melena.",
                    "notes": {
                        "2": "Hoarseness is an extraesophageal symptom.",
                        "3": "Regurgitation is a typical symptom.",
                        "4": "Nighttime heartburn is treated with a bedtime H2RA."
                    }
                },
                {
                    "id": "gerd-r-dx-tests",
                    "type": "match",
                    "stem": "Match each test to its role.",
                    "items": [
                        "Ambulatory pH monitoring",
                        "Manometry",
                        "Barium swallow",
                        "Contrast esophagram and CXR"
                    ],
                    "options": [
                        "Before antireflux surgery, to exclude achalasia or a scleroderma-like esophagus",
                        "Suspected perforation",
                        "The only test of abnormal acid exposure",
                        "Strictures, hiatal hernia, and tumors"
                    ],
                    "answer": [
                        2,
                        0,
                        3,
                        1
                    ],
                    "explanation": "Barium has little role in uncomplicated reflux, and bleeding is evaluated by EGD with biopsy."
                },
                {
                    "id": "gerd-r-dx-manometry",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why is manometry done before Nissen fundoplication?",
                    "answer": "The esophagus must push food through the wrap; manometry excludes achalasia and the weak peristalsis of a scleroderma-like esophagus.",
                    "explanation": "Nissen fundoplication is avoided in scleroderma, and achalasia can mimic refractory reflux."
                }
            ]
        },
        {
            "section": "Treatment",
            "questions": [
                {
                    "id": "eso-r-tx-ppi",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why is a PPI given in every case of esophagitis, whatever the cause?",
                    "answer": "Acid would keep damaging the injured mucosa; the PPI prevents further damage while the cause is treated.",
                    "explanation": "Always give PPIs for esophagitis to prevent further mucosal damage, then treat the cause."
                },
                {
                    "id": "eso-r-tx-candida",
                    "type": "mc",
                    "stem": "How is Candida esophagitis treated?",
                    "options": [
                        "Oral fluconazole for 14–21 days",
                        "Nystatin swish and swallow for 7 days",
                        "A PPI alone, since acid drives the infection",
                        "IV acyclovir",
                        "Swallowed fluticasone for 8 weeks"
                    ],
                    "answer": 0,
                    "explanation": "Candida esophagitis is treated with oral fluconazole for 14–21 days, always systemic rather than topical.",
                    "notes": {
                        "1": "Treatment is always systemic, never topical.",
                        "2": "A PPI is given in every esophagitis, but the infection needs an antifungal.",
                        "3": "Acyclovir is an antiviral for HSV.",
                        "4": "Swallowed steroids treat eosinophilic esophagitis."
                    }
                },
                {
                    "id": "eso-r-tx-caustic",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which steps belong in the first management of a caustic ingestion?",
                    "options": [
                        "Secure the airway and keep the patient NPO",
                        "EGD within 24 hours to grade the injury",
                        "Induce vomiting to empty the esophagus",
                        "Delay EGD until day 5, once swelling settles",
                        "Dilate the esophagus at once to prevent strictures"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Secure the airway, keep the patient NPO, grade the injury by EGD within 24 hours, never induce vomiting, and operate for perforation; strictures are the main late complication.",
                    "notes": {
                        "2": "Vomiting is never induced.",
                        "3": "After 96 hours, friable tissue risks perforation.",
                        "4": "Strictures are a late complication, and early dilation would risk perforation."
                    }
                },
                {
                    "id": "eso-r-tx-eoe",
                    "type": "order",
                    "stem": "Number the steps in treating eosinophilic esophagitis in order.",
                    "items": [
                        "Dilation of strictures once the inflammation is treated",
                        "A PPI first",
                        "Elimination of trigger foods, or swallowed topical steroids for 8 weeks"
                    ],
                    "order": [
                        1,
                        2,
                        0
                    ],
                    "explanation": "A PPI comes first; then trigger foods (cow's milk, wheat, peanuts and tree nuts, egg, soy, and seafood) are eliminated or swallowed fluticasone or budesonide is given; strictures are dilated once treated."
                },
                {
                    "id": "eso-r-tx-pill",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Which two instructions help prevent pill esophagitis?",
                    "answer": "Take pills with at least 6 oz of water, and stay upright for 30 minutes afterward.",
                    "explanation": "Stopping the offending drug treats an episode; water and posture prevent the next."
                },
                {
                    "id": "gerd-r-tx-lifestyle",
                    "type": "match",
                    "stem": "Match each lifestyle measure to the mechanism it targets.",
                    "items": [
                        "Weight loss",
                        "Stopping smoking",
                        "Raising the head of the bed",
                        "No meals 2–3 hours before bed"
                    ],
                    "options": [
                        "Lets gravity keep HCl in the stomach at night",
                        "Lowers intragastric pressure",
                        "Leaves an emptier stomach with less to reflux at night",
                        "Protects LES tone and lowers HCl production"
                    ],
                    "answer": [
                        1,
                        3,
                        0,
                        2
                    ],
                    "explanation": "Each measure works on one of the four mechanisms of reflux."
                },
                {
                    "id": "gerd-r-tx-ppi",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why is a PPI taken before the first meal, and what is added for nighttime symptoms?",
                    "answer": "PPIs block only active pumps, which the meal switches on; a bedtime H2RA is added at night.",
                    "explanation": "A standard-dose PPI before the first meal is given for 8 weeks."
                },
                {
                    "id": "gerd-r-tx-surveillance",
                    "type": "blank",
                    "stem": "Complete the plan for Barrett surveillance.",
                    "html": "<table><thead><tr><th>Biopsy shows</th><th>Plan</th></tr></thead><tbody>\n<tr><td>No dysplasia</td><td>EGD every [[5]] years if under 3 cm, every [[3]] years if 3 cm or more</td></tr>\n<tr><td>Indefinite dysplasia</td><td>Repeat EGD in [[6 months]] on twice-daily PPI</td></tr>\n<tr><td>Low- or high-grade dysplasia</td><td>Endoscopic [[eradication]], such as radiofrequency ablation</td></tr>\n</tbody></table>"
                }
            ]
        }
    ],
    "practice": {
        "scenarios": [
            {
                "title": "Water with every bite",
                "keyPoints": [
                    "Atopy, years of adaptation (small bites, water with every bite), and food impaction point to eosinophilic esophagitis.",
                    "Eosinophils involve the whole esophagus, unlike reflux, which is worst distally, so biopsies come from three levels.",
                    "A PPI comes first; eosinophils of 15 or more per high-power field after 8 weeks mean trigger foods or swallowed steroids are next.",
                    "Swallowed steroids impair local immunity, so new odynophagia with plaques is Candida, treated systemically.",
                    "Strictures are dilated only once inflammation is controlled, because inflamed tissue tears."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 22-year-old man with asthma, allergic rhinitis, and eczema has eaten slowly for 4 years. He cuts his food into small pieces and drinks water with every bite. He has twice felt food stick in his chest. Tonight a piece of chicken lodged and was removed endoscopically. EGD shows rings, longitudinal furrows, and white exudates.</p>\n<table><thead><tr><th>Biopsy site</th><th>Eosinophils (peak per high-power field)</th><th>Other findings</th></tr></thead><tbody>\n<tr><td>Proximal esophagus</td><td>38</td><td>Eosinophil clusters near the surface</td></tr>\n<tr><td>Mid-esophagus</td><td>45</td><td>Basal cell hyperplasia</td></tr>\n<tr><td>Distal esophagus</td><td>41</td><td>No fungal elements</td></tr>\n</tbody></table><p>He is not taking a PPI.</p>",
                        "questions": [
                            {
                                "id": "eso-s1-habits",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Explain how his eating habits relate to the changes in his esophagus.",
                                "answer": "Rings and strictures narrow the lumen, so small pieces and water help food pass; he has adapted to dysphagia.",
                                "explanation": "Chronic eosinophilic inflammation narrows the esophagus; patients often adapt for years before an impaction brings them to care."
                            },
                            {
                                "id": "eso-s1-ppi-trial",
                                "type": "mc",
                                "stem": "Why is an 8-week PPI trial followed by repeat biopsy, rather than treating eosinophilic esophagitis now?",
                                "options": [
                                    "To separate eosinophilic esophagitis from GERD, which also responds to acid suppression",
                                    "Because PPIs cure eosinophilic esophagitis in every patient, so nothing else is ever needed",
                                    "To let the rings heal before any dilation",
                                    "Because eosinophils appear only after 8 weeks of symptoms",
                                    "To check for Candida caused by the PPI"
                                ],
                                "answer": 0,
                                "explanation": "Biopsy after an 8-week PPI trial separates eosinophilic esophagitis from GERD; a PPI is also the first treatment.",
                                "notes": {
                                    "1": "A PPI is first-line, but persisting eosinophilia defines nonresponse.",
                                    "2": "Dilation follows treatment of the inflammation, not the PPI trial.",
                                    "3": "He already has 45 eosinophils per high-power field.",
                                    "4": "Impaired cell-mediated immunity, not a PPI, predisposes to Candida."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>After 8 weeks of a PPI, his symptoms are unchanged, and repeat biopsies show 40 eosinophils per high-power field.</p>",
                        "questions": [
                            {
                                "id": "eso-s1-repeat",
                                "type": "mc",
                                "justify": 12,
                                "stem": "What do the repeat biopsies show? Briefly justify your choice.",
                                "options": [
                                    "Eosinophilic esophagitis that has not responded to the PPI",
                                    "GERD that needs a higher PPI dose",
                                    "Candida esophagitis",
                                    "Pill esophagitis from his asthma medicines",
                                    "Barrett esophagus developing from chronic inflammation"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Eosinophils stay above 15 per high-power field despite 8 weeks of PPI.",
                                "explanation": "Persisting eosinophilia of 15 or more per high-power field after the PPI trial confirms eosinophilic esophagitis not controlled by a PPI.",
                                "notes": {
                                    "1": "Eosinophilia persisting on a PPI points away from GERD.",
                                    "2": "Candida causes white plaques that do not wash off, not eosinophilia.",
                                    "3": "Pill esophagitis causes a localized ulcer.",
                                    "4": "Barrett esophagus is intestinal metaplasia."
                                }
                            },
                            {
                                "id": "eso-s1-next",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which treatments are appropriate next?",
                                "options": [
                                    "Elimination of trigger foods such as cow's milk, wheat, and egg",
                                    "Swallowed fluticasone or budesonide for 8 weeks",
                                    "Immediate dilation of his rings",
                                    "Oral fluconazole for 14–21 days",
                                    "Stopping all treatment, since the PPI failed"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "After a PPI, trigger foods are eliminated or swallowed topical steroids are given for 8 weeks; strictures are dilated once the inflammation is treated.",
                                "notes": {
                                    "2": "Dilation waits until the inflammation is treated.",
                                    "3": "He has no sign of Candida.",
                                    "4": "Other treatments are available after the PPI."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>Six weeks into swallowed fluticasone, he develops pain on swallowing. Repeat EGD shows white plaques that do not wash off. A narrowing in the mid-esophagus remains.</p>",
                        "questions": [
                            {
                                "id": "eso-s1-candida",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Explain why this complication occurred, and how it should be treated.",
                                "answer": "The swallowed steroid coats the esophagus and impairs local cell-mediated immunity, allowing Candida; treat with oral fluconazole for 14–21 days.",
                                "explanation": "Corticosteroids impair cell-mediated immunity, the main risk for infectious esophagitis, and Candida needs systemic treatment."
                            },
                            {
                                "id": "eso-s1-dilation",
                                "type": "mc",
                                "stem": "Why is his narrowing dilated only once the inflammation has been treated?",
                                "options": [
                                    "Inflamed tissue is friable, so dilating it risks perforation",
                                    "Dilation spreads eosinophils into the mediastinum",
                                    "Steroids make the scar too hard to dilate",
                                    "Strictures in eosinophilic esophagitis always resolve without dilation",
                                    "Dilation triggers an allergic reaction to the balloon"
                                ],
                                "answer": 0,
                                "explanation": "Dilation is done once the inflammation is treated; friable tissue tears more easily, as after caustic injury, when EGD after 96 hours risks perforation.",
                                "notes": {
                                    "1": "Perforation, not spread of eosinophils, is the risk.",
                                    "2": "Steroids reduce inflammation; they do not harden scar.",
                                    "3": "Strictures are dilated once treated.",
                                    "4": "The concern is tissue strength, not allergy."
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "title": "A bottle under the sink",
                "keyPoints": [
                    "After a caustic ingestion: secure the airway, keep the patient NPO, and never induce vomiting, which burns the esophagus a second time.",
                    "EGD within 24 hours grades the injury and predicts strictures; after 96 hours friable healing tissue makes endoscopy dangerous.",
                    "Alkali liquefies tissue and penetrates deeply, which is why it perforates and scars more than acid.",
                    "Fever, chest pain, crepitus, and mediastinal air mean perforation: a contrast esophagram and CXR, then surgery.",
                    "Deep injury heals by fibrosis, so strictures are the main late complication, presenting weeks later as dysphagia to solids."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 34-year-old man is brought in 40 minutes after deliberately drinking from a bottle of drain cleaner (sodium hydroxide). He is drooling and has burns on his lips and soft palate. His voice is normal, and he has no stridor. Heart rate 108, BP 132/80, SpO2 98% on room air. His partner asks whether he should be made to vomit.</p>",
                        "questions": [
                            {
                                "id": "eso-s3-first",
                                "type": "order",
                                "stem": "Number these steps in the order they should happen.",
                                "items": [
                                    "Grade the injury by EGD",
                                    "Assess and protect the airway",
                                    "Keep him NPO and start IV fluids",
                                    "Plan follow-up for late complications"
                                ],
                                "order": [
                                    1,
                                    2,
                                    0,
                                    3
                                ],
                                "explanation": "The airway comes first, because burns and swelling can obstruct it; then nothing by mouth, with IV fluids; then EGD within 24 hours to grade the injury; then follow-up for strictures."
                            },
                            {
                                "id": "eso-s3-vomit",
                                "type": "sa",
                                "lines": 2,
                                "stem": "How should his partner's question be answered, and why?",
                                "answer": "No: vomiting brings the alkali back over the esophagus, burning it again, and risks aspiration.",
                                "explanation": "Vomiting is never induced after a caustic ingestion."
                            },
                            {
                                "id": "eso-s3-alkali",
                                "type": "mc",
                                "stem": "Why is an alkali more dangerous to his esophagus than an acid of similar strength?",
                                "options": [
                                    "Alkali causes liquefactive necrosis that penetrates deeply",
                                    "Alkali causes coagulative necrosis that seals the surface off",
                                    "Alkali is absorbed and damages the esophagus from the blood",
                                    "Alkali triggers an allergic eosinophilic reaction in the wall",
                                    "Alkali stays in the stomach and so spares the esophagus"
                                ],
                                "answer": 0,
                                "explanation": "Alkali liquefies tissue, so nothing limits its spread and it penetrates deeply; acid coagulates tissue into an eschar that limits it, giving more superficial injury with skip lesions.",
                                "notes": {
                                    "1": "Coagulative necrosis that limits spread describes acid.",
                                    "2": "The injury is local contact necrosis, not from the blood.",
                                    "3": "Eosinophilic reactions are allergic, not chemical.",
                                    "4": "Alkali burns the esophagus on the way down."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>EGD 10 hours after ingestion:</p>\n<table><thead><tr><th>Level</th><th>Finding</th></tr></thead><tbody>\n<tr><td>Oropharynx</td><td>Patchy superficial burns</td></tr>\n<tr><td>Mid-esophagus</td><td>Deep circumferential ulceration with patches of dark, necrotic mucosa</td></tr>\n<tr><td>Distal esophagus</td><td>Shallow ulcers and erythema</td></tr>\n<tr><td>Stomach</td><td>Erythema only</td></tr>\n</tbody></table>",
                        "questions": [
                            {
                                "id": "eso-s3-predict",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What does this report predict for his recovery, and why?",
                                "answer": "Deep circumferential injury is likely to heal by fibrosis into a stricture, causing dysphagia weeks later.",
                                "explanation": "Grading the depth and extent of injury at EGD predicts strictures, the main late complication."
                            },
                            {
                                "id": "eso-s3-timing",
                                "type": "mc",
                                "stem": "The team considers repeating the EGD on day 5 to reassess. What is the best advice?",
                                "options": [
                                    "Avoid it, because the wall is friable after 96 hours",
                                    "Repeat it, because grading is most accurate after 5 days",
                                    "Repeat it daily until the ulcers have healed",
                                    "Replace it with a barium swallow on day 5",
                                    "Repeat it and dilate the narrowed segment"
                                ],
                                "answer": 0,
                                "explanation": "EGD is useful within 24 hours; after 96 hours, sloughing necrotic tissue leaves the wall at its weakest, so instrumenting it risks perforation.",
                                "notes": {
                                    "1": "Grading is useful within 24 hours, not later.",
                                    "2": "Repeated endoscopy adds perforation risk without benefit.",
                                    "3": "There is no indication for imaging now, and barium would worsen any leak.",
                                    "4": "Dilation waits until healing is complete and inflammation has settled."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>On day 3 he develops worsening chest pain and a temperature of 38.9 °C. Heart rate 124. There is crepitus in his neck. A CXR shows air outlining the mediastinum.</p>",
                        "questions": [
                            {
                                "id": "eso-s3-perf",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Name the complication, the test that confirms it, and its treatment.",
                                "answer": "Esophageal perforation; contrast esophagram with CXR; surgery.",
                                "explanation": "Full-thickness injury lets air and esophageal contents into the mediastinum, causing pneumomediastinum and mediastinitis."
                            }
                        ]
                    },
                    {
                        "passage": "<p>He recovers after surgical repair. Seven weeks later he returns: solid food sticks behind his sternum, he can manage liquids, and he has lost 4 kg.</p>",
                        "questions": [
                            {
                                "id": "eso-s3-late",
                                "type": "mc",
                                "justify": 12,
                                "stem": "What is the most likely cause of his new symptoms? Briefly justify your choice.",
                                "options": [
                                    "A stricture where the deepest injury healed",
                                    "Achalasia caused by the caustic",
                                    "Candida esophagitis",
                                    "Esophageal adenocarcinoma arising in the scar",
                                    "Pill esophagitis"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Deep injury healed by fibrosis, narrowing the lumen; solids stick first.",
                                "explanation": "Strictures are the main late complication of caustic injury; a narrowed lumen catches solids before liquids.",
                                "notes": {
                                    "1": "Achalasia is a loss of inhibitory neurons, causing dysphagia to solids and liquids.",
                                    "2": "Candida causes odynophagia with plaques, in impaired immunity.",
                                    "3": "Cancer is not a complication within 7 weeks.",
                                    "4": "There is no new culprit drug."
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Burning after dinner",
                "keyPoints": [
                    "Chest pain is presumed cardiac until proven otherwise, so an ECG comes before a reflux diagnosis.",
                    "Without alarm features, an 8-week PPI trial before the first meal is both treatment and test.",
                    "PPIs block only active pumps, so a PPI taken at bedtime works poorly; nighttime symptoms take a bedtime H2RA.",
                    "Extraesophageal symptoms, such as cough and hoarseness, come from HCl rising beyond the esophagus.",
                    "After a failed trial, pH monitoring confirms reflux, and manometry must show normal peristalsis before Nissen fundoplication."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 46-year-old man (BMI 33) has 4 months of burning behind his sternum after dinner and when he lies down, sometimes with a sour taste. He has had a dry cough and a hoarse voice most mornings. He drinks 4 cups of coffee and 3 glasses of wine daily. One episode last week felt like pressure and spread to his jaw.</p>",
                        "questions": [
                            {
                                "id": "gerd-s1-first",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What should be done before his symptoms are attributed to GERD, and why?",
                                "answer": "An ECG, because chest pain is presumed cardiac until proven otherwise, and pain spreading to his jaw could be angina.",
                                "explanation": "Reflux and ischemia can both cause burning retrosternal pain."
                            },
                            {
                                "id": "gerd-s1-mech",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which mechanisms of reflux does his history most clearly show?",
                                "options": [
                                    "Increased intragastric pressure",
                                    "Decreased LES tone",
                                    "Increased HCl production from a gastrinoma",
                                    "A paraesophageal hernia",
                                    "Loss of esophageal peristalsis"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "Obesity raises intragastric pressure, and coffee and alcohol lower LES tone; alcohol also raises HCl production.",
                                "notes": {
                                    "2": "Nothing suggests Zollinger-Ellison syndrome, such as multiple ulcers or diarrhea.",
                                    "3": "There is no evidence of a hernia yet.",
                                    "4": "Loss of peristalsis is a motility disorder."
                                }
                            },
                            {
                                "id": "gerd-s1-cough",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Explain how reflux could cause his cough and hoarseness.",
                                "answer": "Refluxed HCl rises beyond the esophagus, irritating the larynx and reaching the airway.",
                                "explanation": "Chronic cough, asthma, laryngitis and hoarseness, sore throat, and dental erosions are extraesophageal symptoms."
                            }
                        ]
                    },
                    {
                        "passage": "<p>His ECG and troponin are normal. He has no dysphagia, odynophagia, anemia, weight loss, or bleeding. He is started on omeprazole 20 mg daily for 8 weeks with lifestyle advice. At review he says the heartburn is only slightly better. He has been taking the omeprazole at bedtime \"so it works overnight,\" and he still has dinner at 9 pm before going to bed at 10.</p>",
                        "questions": [
                            {
                                "id": "gerd-s1-timing",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Explain why his PPI timing has reduced its effect, and how he should take it.",
                                "answer": "PPIs block only active pumps, which meals switch on; at bedtime few are active. Take it before the first meal.",
                                "explanation": "A standard dose before the first meal for 8 weeks is the page's regimen."
                            },
                            {
                                "id": "gerd-s1-advice",
                                "type": "mc",
                                "justify": 12,
                                "stem": "His nighttime symptoms continue after the timing is corrected. Which addition is most appropriate? Briefly justify your choice.",
                                "options": [
                                    "A bedtime H2RA",
                                    "A second PPI dose at bedtime with dinner",
                                    "Sucralfate before bed",
                                    "Nissen fundoplication",
                                    "Metoclopramide with dinner"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Night acid secretion is histamine-driven, and an H2RA blocks it while asleep.",
                                "explanation": "The page adds a bedtime H2RA for nighttime symptoms, along with no meals 2–3 hours before bed and raising the head of the bed.",
                                "notes": {
                                    "1": "A bedtime PPI dose works poorly without a meal to activate pumps.",
                                    "2": "Sucralfate coats ulcers; it is not the page's treatment for night symptoms.",
                                    "3": "Surgery is for disease refractory to treatment, after investigation.",
                                    "4": "Metoclopramide is not part of the page's plan."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>Six months later, despite weight loss of 9 kg, a twice-daily PPI, and a bedtime H2RA, he still has daily regurgitation. EGD shows a small sliding hiatal hernia and mild erosive esophagitis. pH monitoring off treatment shows abnormal acid exposure linked to his symptoms. He would like surgery.</p>",
                        "questions": [
                            {
                                "id": "gerd-s1-next",
                                "type": "order",
                                "stem": "Number the steps toward surgery in order.",
                                "items": [
                                    "Nissen fundoplication",
                                    "Manometry showing normal peristalsis",
                                    "Confirmed abnormal acid exposure on pH monitoring"
                                ],
                                "order": [
                                    2,
                                    1,
                                    0
                                ],
                                "explanation": "pH monitoring confirms GERD, manometry shows the esophagus can push food through a wrap, and then surgery."
                            },
                            {
                                "id": "gerd-s1-nissen",
                                "type": "sa",
                                "lines": 2,
                                "stem": "How does a Nissen fundoplication stop reflux?",
                                "answer": "The fundus is wrapped around the lower esophagus, rebuilding a high-pressure barrier at the junction.",
                                "explanation": "That barrier is also why weak peristalsis, as in scleroderma, is a contraindication."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Food that sticks low in the chest",
                "keyPoints": [
                    "Dysphagia, weight loss, and anemia are alarm features, so EGD comes before any PPI trial.",
                    "Healing of chronic acid injury narrows the lumen into a stricture, which catches solids first.",
                    "Barrett esophagus is salmon-colored mucosa 1 cm or more above the junction with goblet cells, and segment length sets the interval.",
                    "Indefinite dysplasia is rechecked in 6 months on twice-daily PPI, because inflammation can mimic dysplasia.",
                    "Low- or high-grade dysplasia is treated by endoscopic eradication, such as radiofrequency ablation."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 64-year-old White man has had heartburn for 20 years, treated on and off with antacids. For 3 months solid food has stuck low in his chest, and he has lost 5 kg. He smokes and has central obesity.</p>\n<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>\n<tr><td>Hemoglobin</td><td>109 g/L</td><td>130–180</td></tr>\n<tr><td>MCV</td><td>76 fL</td><td>80–100</td></tr>\n<tr><td>Ferritin</td><td>11 µg/L</td><td>30–300</td></tr>\n</tbody></table>",
                        "questions": [
                            {
                                "id": "gerd-s2-alarm",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Name his alarm features, and state what must happen before any PPI trial.",
                                "answer": "Dysphagia, weight loss, and iron-deficiency anemia; EGD with biopsy first.",
                                "explanation": "Alarm features suggest a stricture, ulcer, bleeding, or cancer, which EGD can see and biopsy."
                            }
                        ]
                    },
                    {
                        "passage": "<p>EGD shows a smooth, short narrowing at the gastroesophageal junction that the scope passes with resistance, and above it a 2-cm segment of salmon-colored mucosa. There is no mass.</p>\n<table><thead><tr><th>Biopsy site</th><th>Finding</th></tr></thead><tbody>\n<tr><td>Narrowing</td><td>Inflamed squamous mucosa with fibrosis; no malignancy</td></tr>\n<tr><td>Salmon-colored segment</td><td>Columnar epithelium with goblet cells; indefinite for dysplasia, with marked inflammation</td></tr>\n</tbody></table>",
                        "questions": [
                            {
                                "id": "gerd-s2-stricture",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Explain how 20 years of reflux produced the narrowing, and why it caught solids before liquids.",
                                "answer": "Repeated acid injury healed by fibrosis, narrowing the lumen; liquids still pass a narrow lumen, solids do not.",
                                "explanation": "Strictures cause progressive dysphagia, a complication of GERD."
                            },
                            {
                                "id": "gerd-s2-indefinite",
                                "type": "mc",
                                "justify": 12,
                                "stem": "What is the best plan for the salmon-colored segment? Briefly justify your choice.",
                                "options": [
                                    "Repeat EGD in 6 months on twice-daily PPI",
                                    "Radiofrequency ablation now",
                                    "Repeat EGD in 5 years",
                                    "Repeat EGD in 3 years",
                                    "Esophagectomy"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Marked inflammation can mimic dysplasia; clear it with PPI, then rebiopsy.",
                                "explanation": "Indefinite dysplasia is rechecked in 6 months on twice-daily PPI.",
                                "notes": {
                                    "1": "Ablation is for confirmed low- or high-grade dysplasia.",
                                    "2": "Every 5 years is for a segment under 3 cm without dysplasia.",
                                    "3": "Every 3 years is for a segment of 3 cm or more without dysplasia.",
                                    "4": "Esophagectomy is not needed for indefinite dysplasia."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>His stricture is dilated, and he takes the twice-daily PPI. Repeat biopsies at 6 months, with the inflammation healed, show high-grade dysplasia in the segment, confirmed by a second pathologist.</p>",
                        "questions": [
                            {
                                "id": "gerd-s2-hgd",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What treatment is now indicated, and why is it urgent?",
                                "answer": "Endoscopic eradication, such as radiofrequency ablation; dysplasia is the step before adenocarcinoma.",
                                "explanation": "Chronic injury → intestinal metaplasia → dysplasia → esophageal adenocarcinoma."
                            },
                            {
                                "id": "gerd-s2-family",
                                "type": "mc",
                                "select": 2,
                                "stem": "His 52-year-old brother has chronic reflux. Which further facts would bring him to the screening threshold for Barrett esophagus?",
                                "options": [
                                    "He smokes",
                                    "He has central obesity",
                                    "He drinks coffee",
                                    "He has a hoarse voice",
                                    "He takes a PPI"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "He is already male, White, over 50, and has a family history; screening needs 3 or more risk factors with chronic reflux. Smoking and central obesity are risk factors too.",
                                "notes": {
                                    "2": "Coffee lowers LES tone but is not a Barrett risk factor.",
                                    "3": "Hoarseness is an extraesophageal symptom, not a risk factor.",
                                    "4": "PPI use is not a risk factor."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>A year later he vomits fresh blood twice and passes black stool. His heart rate is 108 and his BP 104/66.</p>",
                        "questions": [
                            {
                                "id": "gerd-s2-bleed",
                                "type": "mc",
                                "stem": "Which investigation is most appropriate for this complication?",
                                "options": [
                                    "EGD with biopsy",
                                    "Contrast esophagram and CXR",
                                    "Ambulatory pH monitoring",
                                    "Barium swallow",
                                    "Manometry"
                                ],
                                "answer": 0,
                                "explanation": "Bleeding (hematemesis and melena) is evaluated by EGD with biopsy, which can find and treat the source.",
                                "notes": {
                                    "1": "A contrast esophagram and CXR are for suspected perforation.",
                                    "2": "pH monitoring measures acid exposure, not bleeding.",
                                    "3": "Barium cannot treat bleeding and obscures later endoscopy.",
                                    "4": "Manometry measures pressures before surgery."
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
