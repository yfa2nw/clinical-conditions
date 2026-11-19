// Worksheet for the Acute Pancreatitis page, built by tools/build-worksheet-pdf.mjs gi pancreatitis.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Acute Pancreatitis",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From trypsin to treatment",
        top: "Premature [[trypsin]] activation inside the pancreas → [[autodigestion]] → local and systemic inflammation. Diagnose with any 2 of 3: epigastric pain to the back, lipase at least 3 times normal, typical imaging",
        rows: ["Cause", "Why it happens", "Find it with", "Treat the cause"],
        columns: [
            ["Gallstones (most common)", "A stone blocks the [[ampulla]]", "RUQ ultrasound in every patient; ALT over [[150]]", "[[Cholecystectomy]] during the same admission"],
            ["Ethanol (second)", "Direct acinar toxicity and protein plugs in the ducts", "Alcohol history", "Stop drinking"],
            ["High triglycerides", "Triglycerides usually over [[1000]] mg/dL", "Triglycerides", "[[Insulin]] infusion"],
            ["Drugs", "Azathioprine, valproate, thiazides, furosemide, sulfonamides, didanosine", "Medication review", "Stop the offending drug"],
            ["Others", "Idiopathic, trauma, steroids, mumps, autoimmune, scorpion, hypercalcemia, hypothermia, ERCP", "Calcium; recent ERCP or trauma", "Treat the cause"],
        ],
        span: "Every patient: goal-directed IV fluids, pain relief, and early oral feeding; no prophylactic ABX; contrast CT only if unclear or not improving after [[48–72]] hours",
        chains: [
            { label: "Systemic: SIRS", steps: [["Cytokines", "Increased IL-1, IL-6, and TNF-α"], ["Leaky capillaries", "[[Third spacing]]: shock, AKI, and ARDS"], ["Tissue factor", "Clotting in small vessels: [[DIC]]"], ["Fat saponification", "[[Hypocalcemia]]"]] },
            { label: "Local", steps: [["Interstitial edema", "Fluid collects around the pancreas"], ["[[Pseudocyst]]", "After 4 weeks; no epithelium; observe"], ["Necrotizing", "Enzymes erode vessels: Cullen and [[Grey Turner]] signs"], ["Infected necrosis", "Carbapenem; drain after 4 weeks"]] },
            { label: "Repeated attacks: chronic", steps: [["Protein plugs", "[[Calcification]] and fibrosis"], ["Exocrine failure", "Steatorrhea; low fecal elastase"], ["Endocrine failure", "Type [[3c]] diabetes"], ["Cancer", "Pancreatic ductal adenocarcinoma"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Premature activation of [[trypsin]] inside the pancreas leads to [[autodigestion]] of the gland, causing local and [[systemic]] inflammation, which can cause [[SIRS]]." },
                { id: "r-path-match", type: "match",
                    stem: "Match each step to its result.",
                    items: ["Autodigestion", "Cytokine release", "Leaky capillaries", "Fat saponification"],
                    options: ["Hypocalcemia", "Third spacing, hypovolemia, and shock", "Epigastric pain", "SIRS"],
                    answer: [2, 3, 1, 0],
                    explanation: "Enzymes digesting the pancreas cause pain; IL-1, IL-6, and TNF-α cause SIRS; increased capillary permeability shifts fluid out of the vessels; and fatty acids from digested fat bind calcium." },
                { id: "r-path-why", type: "sa", lines: 2,
                    stem: "Why can a patient with pancreatitis become hypovolemic without losing any blood?",
                    answer: "Cytokines make capillaries leaky, so fluid shifts out of the vessels into tissues around the pancreas, the abdomen, and the lungs.",
                    explanation: "Third spacing removes fluid from the circulation, which is why goal-directed IV fluids come first." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete I GET SMASHED.",
                    html: `<table><thead><tr><th>Letter</th><th>Cause</th><th>Notes</th></tr></thead><tbody>
<tr><td>I</td><td>[[Idiopathic]]</td><td>No cause found in about 10–20%</td></tr>
<tr><td>G</td><td>Gallstones</td><td>Most common; a stone blocks the [[ampulla]]</td></tr>
<tr><td>E</td><td>Ethanol</td><td>Second most common; direct acinar toxicity and protein [[plugs]] in ducts</td></tr>
<tr><td>T</td><td>Trauma</td><td>Blunt abdominal trauma, such as a bicycle [[handlebar]] injury</td></tr>
<tr><td>S</td><td>Steroids</td><td></td></tr>
<tr><td>M</td><td>[[Mumps]]</td><td>Also coxsackievirus and CMV</td></tr>
<tr><td>A</td><td>Autoimmune</td><td>[[IgG4]]-related autoimmune pancreatitis, SLE, and polyarteritis nodosa</td></tr>
<tr><td>S</td><td>Scorpion sting</td><td>Tityus trinitatis (Trinidad)</td></tr>
<tr><td>H</td><td>Hypercalcemia, [[hypertriglyceridemia]], hypothermia</td><td>Triglycerides usually over 1000 mg/dL</td></tr>
<tr><td>E</td><td>[[ERCP]]</td><td>Its most common complication</td></tr>
<tr><td>D</td><td>Drugs</td><td>Azathioprine, valproate, thiazides, furosemide, sulfonamides, didanosine</td></tr>
</tbody></table>` },
                { id: "r-cause-gallstone", type: "sa", lines: 2,
                    stem: "How does a gallstone, which forms in the gallbladder, cause pancreatitis?",
                    answer: "It passes down the common bile duct and lodges at the ampulla, blocking pancreatic outflow, so enzymes build up and activate in the gland.",
                    explanation: "The bile and pancreatic ducts meet at the ampulla, so one stone can block both." },
                { id: "r-cause-calcium", type: "sa", lines: 2,
                    stem: "Calcium appears twice on the page. Explain how it can be both a cause and a result of pancreatitis.",
                    answer: "High calcium is a cause (the H in I GET SMASHED); low calcium is a result, as fatty acids from digested fat bind calcium.",
                    explanation: "Hypercalcemia triggers pancreatitis, while fat saponification during an attack causes hypocalcemia." },
                { id: "r-cause-drugs", type: "mc", select: 2,
                    stem: "Which of these drugs can cause acute pancreatitis?",
                    options: ["Valproate", "Furosemide", "Amlodipine", "Metoprolol", "Omeprazole"], answer: [0, 1],
                    explanation: "The page's drugs are azathioprine, valproate, thiazides, furosemide, sulfonamides, and didanosine.",
                    notes: { 2: "Amlodipine is not on the page's list.", 3: "Metoprolol is not on the page's list.", 4: "Omeprazole is not on the page's list." } },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-comp-systemic", type: "match",
                    stem: "Match each mechanism to the complication it causes.",
                    items: ["Increased capillary permeability", "Increased tissue factor", "Islet damage", "Enzymes eroding blood vessels"],
                    options: ["Hyperglycemia", "Retroperitoneal bleeding with Cullen and Grey Turner signs", "Shock, AKI, ARDS, and exudative ascites", "DIC, with schistocytes"],
                    answer: [2, 3, 0, 1],
                    explanation: "Leaky capillaries cause third spacing; tissue factor drives clotting in small vessels that uses up platelets and clotting factors; islet damage raises glucose; and in necrotizing pancreatitis enzymes erode vessels." },
                { id: "r-comp-pseudocyst", type: "order",
                    stem: "Number these steps toward a complicated pseudocyst in order.",
                    items: ["Fluid collects around the pancreas", "Compression causing gastric outlet obstruction", "Pancreatic edema", "A pseudocyst, after 4 weeks, with no epithelium"],
                    order: [2, 0, 3, 1],
                    explanation: "Interstitial edematous pancreatitis causes edema, then fluid around the pancreas, which is walled off into a pseudocyst after 4 weeks; it can then become infected, rupture, or compress the stomach or small bowel." },
                { id: "r-comp-local", type: "mc", select: 2,
                    stem: "Which of these are local pancreatic complications?",
                    options: ["Walled-off necrosis", "A pseudocyst", "ARDS", "DIC", "Hypocalcemia"], answer: [0, 1],
                    explanation: "The local complications are pseudocysts after interstitial edematous pancreatitis, and acute necrotic collections that become walled-off necrosis after 4 weeks in necrotizing pancreatitis.",
                    notes: { 2: "ARDS is a systemic complication of leaky capillaries.", 3: "DIC is a systemic complication of increased tissue factor.", 4: "Hypocalcemia is a metabolic complication of fat saponification." } },
                { id: "r-comp-chronic", type: "blank",
                    html: "In chronic pancreatitis, protein plugs in the ducts lead to [[calcification]] and stones, and [[fibrosis]] replaces the gland. Steatorrhea and weight loss appear once over [[90]]% of the gland is damaged, and loss of the islets causes pancreatogenic ([[type 3c]]) diabetes. The pain often improves when the patient leans [[forward]]." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-criteria", type: "blank",
                    html: "Acute pancreatitis is diagnosed with any [[2]] of 3 criteria: acute, severe epigastric pain, often radiating to the [[back]]; lipase or amylase at least [[3]] times the upper limit of normal, with lipase more [[specific]]; and typical findings on imaging." },
                { id: "r-dx-ct", type: "sa", lines: 2,
                    stem: "Why is contrast CT not done routinely at admission, and when is it done?",
                    answer: "Early CT can miss necrosis, which takes days to develop; CT is done if the diagnosis is unclear, or after 48–72 hours if not improving.",
                    explanation: "Most patients meet the criteria on pain and lipase, so imaging is kept for doubt or deterioration." },
                { id: "r-dx-atlanta", type: "match",
                    stem: "Match each severity grade (revised Atlanta classification) to its definition.",
                    items: ["Mild", "Moderately severe", "Severe"],
                    options: ["Organ failure lasting over 48 hours", "No organ failure and no local complications", "Organ failure lasting under 48 hours, or local complications"],
                    answer: [1, 2, 0],
                    explanation: "Severity is graded by organ failure and its duration, and by local complications, not by the lipase." },
                { id: "r-dx-chronic", type: "blank",
                    html: "In chronic pancreatitis, CT or MRCP shows [[calcifications]], the hallmark. Fecal elastase is normal over [[500]] µg/g, and a 72-hour fecal fat over [[7]] g a day is the most definitive test of exocrine failure." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-cause", type: "match",
                    stem: "Match each cause to the treatment that removes it.",
                    items: ["Gallstones", "Alcohol", "Hypertriglyceridemia", "Azathioprine"],
                    options: ["Insulin infusion", "Stop the drug", "Cholecystectomy during the same admission", "Stop drinking"],
                    answer: [2, 3, 0, 1],
                    explanation: "Supportive care treats the attack; treating the cause prevents the next one." },
                { id: "r-tx-necrosis", type: "sa", lines: 2,
                    stem: "Why is drainage or necrosectomy for infected necrosis delayed, ideally until after 4 weeks?",
                    answer: "By then the necrosis has walled off, separating dead from living tissue, so it can be removed with less bleeding and damage.",
                    explanation: "Infected necrosis is treated with ABX such as a carbapenem first; prophylactic ABX are not given." },
                { id: "r-tx-pain", type: "order",
                    stem: "Number the steps for pain in chronic pancreatitis in the order they are used.",
                    items: ["Opioids, if the first drugs fail", "Stop alcohol and smoking", "Paracetamol, NSAIDs, or pregabalin"],
                    order: [1, 2, 0],
                    explanation: "Every patient stops alcohol and smoking; paracetamol, NSAIDs, or pregabalin come before opioids. A celiac plexus block, ERCP, or shock wave lithotripsy for obstructing stones or strictures are further options." },
                { id: "r-tx-enzymes", type: "mc",
                    stem: "What does pancreatic enzyme replacement with meals treat in chronic pancreatitis?",
                    options: ["Steatorrhea", "Pain", "Type 3c diabetes", "Calcifications", "Cancer risk"], answer: 0,
                    explanation: "Enzyme replacement supplies the lipase and other enzymes the gland no longer makes, so fat in food is digested; it does not relieve pain.",
                    notes: { 1: "Enzyme replacement does not relieve pain.", 2: "Diabetes needs glucose-lowering treatment, often insulin.", 3: "Calcifications do not reverse.", 4: "Enzymes do not change the cancer risk." } },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "The night after the party",
                keyPoints: [
                    "Pain plus lipase at least 3 times normal makes the diagnosis; imaging is not needed for it.",
                    "Every patient gets a RUQ ultrasound and a search for other causes, even when alcohol seems obvious.",
                    "Third spacing explains the shock, AKI, and ARDS, and goal-directed IV fluids treat it.",
                    "Organ failure lasting over 48 hours makes the attack severe; local complications alone make it moderately severe.",
                    "CT after 48–72 hours finds necrosis that early CT misses, but sterile necrosis does not need ABX.",
                    "Falling platelets and fibrinogen with schistocytes mean DIC from widespread clotting in small vessels.",
                ],
                blocks: [
                    { passage: `<p>A 44-year-old man has had 10 hours of severe epigastric pain going through to his back, with repeated vomiting. He drinks about 10 standard drinks a day and drank more than usual at a party last night. Temperature 38.1 °C, heart rate 118, BP 104/66, respiratory rate 22, SpO2 95% on room air. His epigastrium is tender, with guarding.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Lipase</td><td>1850 U/L</td><td>Under 60</td></tr>
<tr><td>ALT</td><td>52 U/L</td><td>Under 40</td></tr>
<tr><td>Hematocrit</td><td>0.51</td><td>0.40–0.50</td></tr>
<tr><td>BUN</td><td>28 mg/dL</td><td>7–20</td></tr>
<tr><td>Creatinine</td><td>110 µmol/L</td><td>60–110</td></tr>
<tr><td>WCC</td><td>16 × 10<sup>9</sup>/L</td><td>4–11</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-diagnosis", type: "sa", lines: 2,
                                stem: "Does he meet the criteria for acute pancreatitis without imaging? Explain.",
                                answer: "Yes: typical epigastric pain to the back and lipase over 3 times normal make 2 of the 3 criteria.",
                                explanation: "Any 2 of pain, enzymes, and imaging are enough; CT is kept for an unclear diagnosis or no improvement after 48–72 hours." },
                            { id: "s1-cause", type: "mc", select: 2,
                                stem: "Alcohol is the likely cause. Which tests should still be done to look for another one?",
                                options: ["RUQ ultrasound", "Triglycerides and calcium", "Contrast CT abdomen today", "ERCP", "Serum amylase"], answer: [0, 1],
                                explanation: "Every patient has a RUQ ultrasound for gallstones, plus LFTs, triglycerides, calcium, an alcohol history, and a medication review.",
                                notes: { 2: "CT today is not needed for the diagnosis and can miss necrosis.", 3: "ERCP is a treatment and is itself a cause of pancreatitis.", 4: "Amylase adds nothing to the cause once lipase is known." } },
                            { id: "s1-hct", type: "sa", lines: 2,
                                stem: "Explain why his hematocrit and BUN are raised, and what this means for his first treatment.",
                                answer: "Leaky capillaries move plasma out of the vessels, concentrating the blood and reducing kidney perfusion; he needs goal-directed IV fluids.",
                                explanation: "Third spacing causes hypovolemia; fluids such as Hartmann solution are titrated to heart rate, urine output, and BUN." },
                        ] },
                    { passage: `<p>Despite IV fluids, over the next 3 days:</p>
<table><thead><tr><th>Measure</th><th>Day 1</th><th>Day 2</th><th>Day 3</th><th>Day 4</th></tr></thead><tbody>
<tr><td>SpO2 (oxygen)</td><td>95% (air)</td><td>90% (6 L/min)</td><td>91% (high-flow)</td><td>92% (high-flow)</td></tr>
<tr><td>Creatinine (µmol/L)</td><td>110</td><td>180</td><td>240</td><td>230</td></tr>
<tr><td>Corrected calcium (mmol/L)</td><td>2.20</td><td>1.95</td><td>1.85</td><td>1.90</td></tr>
<tr><td>Glucose (mmol/L)</td><td>7.0</td><td>11.5</td><td>12.8</td><td>10.9</td></tr>
</tbody></table>
<p>A CXR on day 2 shows bilateral infiltrates with a normal heart size. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-organs", type: "sa", lines: 3,
                                stem: "Explain how pancreatitis is causing his low oxygen, rising creatinine, and rising glucose.",
                                answer: "Leaky capillaries flood the lungs (ARDS) and drain the circulation (AKI); islet damage raises glucose.",
                                explanation: "Cytokine-driven capillary leak causes ARDS and AKI; damage to the islets causes hyperglycemia." },
                            { id: "s1-calcium", type: "mc", justify: 12,
                                stem: "Why is his calcium falling? Briefly justify your choice.",
                                options: ["Fat saponification", "Hyperparathyroidism", "Renal calcium wasting", "Dilution by IV fluids alone", "Vitamin D excess"], answer: 0,
                                justifyAnswer: "Lipase digests fat; the released fatty acids bind calcium.",
                                explanation: "Fat saponification takes calcium out of the blood, and hypocalcemia goes with more severe disease.",
                                notes: { 1: "Hyperparathyroidism raises calcium and can cause pancreatitis.", 2: "The kidneys are failing, not wasting calcium.", 3: "Fluids dilute a little, but his calcium is corrected and keeps falling.", 4: "Vitamin D excess raises calcium." } },
                            { id: "s1-grade", type: "mc", justify: 12,
                                stem: "What is his severity by the revised Atlanta classification? Briefly justify your choice.",
                                options: ["Severe", "Moderately severe", "Mild", "Cannot be graded without CT", "Cannot be graded until lipase normalizes"], answer: 0,
                                justifyAnswer: "Respiratory and kidney failure have lasted over 48 hours.",
                                explanation: "Organ failure lasting over 48 hours defines severe pancreatitis.",
                                notes: { 1: "Moderately severe is organ failure under 48 hours or local complications.", 2: "Mild has no organ failure.", 3: "Organ failure alone grades him; CT is not needed for that.", 4: "Lipase does not grade severity." } },
                        ] },
                    { passage: `<p>On day 4 he is no better. Contrast CT: <em>"Nonenhancing pancreatic body and tail, about 40% of the gland, consistent with necrosis. Acute necrotic collection around the pancreas, without gas. Bilateral pleural effusions."</em> He remains afebrile on high-flow oxygen. The admitting CT on day 1 at another hospital had been reported as "edematous pancreas, no necrosis."</p>`,
                        questions: [
                            { id: "s1-ct", type: "sa", lines: 2,
                                stem: "Explain why the two CT reports differ.",
                                answer: "Necrosis takes days to develop, so the day 1 CT was too early to show it.",
                                explanation: "CT too early can miss necrosis; it is done after 48–72 hours if the patient is not improving." },
                            { id: "s1-abx", type: "mc", justify: 12,
                                stem: "Should ABX be started now? Briefly justify your choice.",
                                options: ["No", "Yes, a carbapenem for 14 days", "Yes, until the necrosis resolves", "Yes, with necrosectomy this week", "Yes, oral ABX only"], answer: 0,
                                justifyAnswer: "The necrosis is sterile; prophylactic ABX are not given.",
                                explanation: "ABX are given for infected necrosis, not to prevent infection.",
                                notes: { 1: "A carbapenem is for infected necrosis.", 2: "Prophylactic ABX are not given, whatever the extent of necrosis.", 3: "Necrosectomy is for infected necrosis, ideally after 4 weeks.", 4: "There is no indication for ABX by any route." } },
                            { id: "s1-feeding", type: "sa", lines: 2,
                                stem: "He cannot eat. How should he be fed, and why that route?",
                                answer: "Enteral feeding by tube, because feeding the gut keeps its lining healthy and lowers infection risk.",
                                explanation: "Early oral feeding is the rule, and enteral feeding is used if severe." },
                        ] },
                    { passage: `<p>On day 6 he oozes from his cannula sites.</p>
<table><thead><tr><th>Test</th><th>Day 4</th><th>Day 6</th><th>Reference</th></tr></thead><tbody>
<tr><td>Platelets (× 10<sup>9</sup>/L)</td><td>210</td><td>58</td><td>150–400</td></tr>
<tr><td>INR</td><td>1.1</td><td>1.9</td><td>0.9–1.2</td></tr>
<tr><td>Fibrinogen (g/L)</td><td>4.8</td><td>1.1</td><td>2.0–4.0</td></tr>
<tr><td>Blood film</td><td>Normal</td><td>Schistocytes</td><td></td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-dic", type: "sa", lines: 3,
                                stem: "Name the complication and explain how pancreatitis caused it.",
                                answer: "DIC: increased tissue factor causes clotting in small vessels, using up platelets and clotting factors and shearing red cells.",
                                explanation: "Widespread clotting consumes platelets and fibrinogen, so the patient bleeds, and red cells passing through clotted small vessels become schistocytes." },
                        ] },
                ],
            },
            {
                title: "A milky sample",
                keyPoints: [
                    "Milky serum with poorly controlled diabetes points to hypertriglyceridemia, usually over 1000 mg/dL.",
                    "An insulin infusion treats the cause by lowering triglycerides; drugs on the list are stopped if no other cause explains the attack.",
                    "A normal ALT and no stones on ultrasound argue against a gallstone cause.",
                    "A pseudocyst forms after 4 weeks and has no epithelium; most are observed.",
                    "A pseudocyst that compresses the stomach and causes vomiting is symptomatic, so it is drained.",
                ],
                blocks: [
                    { passage: `<p>A 36-year-old man with type 2 diabetes stopped his medications 6 months ago. He started hydrochlorothiazide for hypertension 2 years ago. He has 1 day of severe epigastric pain radiating to his back. He drinks rarely. The laboratory calls to say his blood sample is milky.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Lipase</td><td>980 U/L</td><td>Under 60</td></tr>
<tr><td>Triglycerides</td><td>2900 mg/dL</td><td>Under 150</td></tr>
<tr><td>Glucose</td><td>19.5 mmol/L</td><td>3.5–7.8</td></tr>
<tr><td>ALT</td><td>34 U/L</td><td>Under 40</td></tr>
<tr><td>Corrected calcium</td><td>2.25 mmol/L</td><td>2.10–2.60</td></tr>
</tbody></table>
<p>RUQ ultrasound: no gallstones; normal bile duct. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-cause", type: "mc", justify: 12,
                                stem: "Which cause best explains this attack? Briefly justify your choice.",
                                options: ["Hypertriglyceridemia", "Hydrochlorothiazide", "Gallstones", "Ethanol", "Hypercalcemia"], answer: 0,
                                justifyAnswer: "Triglycerides are far above 1000 mg/dL, with milky serum.",
                                explanation: "Hypertriglyceridemia over 1000 mg/dL is a cause; uncontrolled diabetes raises triglycerides. Thiazides are on the drug list, but he has taken it for 2 years and has a stronger explanation.",
                                notes: { 1: "Thiazides can cause pancreatitis, but a triglyceride level of 2900 mg/dL is a stronger explanation.", 2: "No stones, a normal duct, and a normal ALT argue against gallstones.", 3: "He drinks rarely.", 4: "His calcium is normal." } },
                            { id: "s2-alt", type: "sa", lines: 2,
                                stem: "How does his normal ALT help with the cause?",
                                answer: "A stone passing to the ampulla usually raises ALT; an ALT over 150 suggests gallstones, so a normal ALT argues against them.",
                                explanation: "LFTs are part of the search for the cause in every patient." },
                            { id: "s2-insulin", type: "sa", lines: 2,
                                stem: "Besides fluids, pain relief, and feeding, what treats the cause of this attack?",
                                answer: "An insulin infusion, which lowers his triglycerides (and his glucose).",
                                explanation: "Each cause has its own treatment; for hypertriglyceridemia it is an insulin infusion." },
                        ] },
                    { passage: `<p>He recovers and is discharged. Six weeks later he returns with 10 days of early satiety, fullness after small meals, and vomiting of undigested food. He has lost 5 kg. He is afebrile.</p>
<p>CT: <em>"A 9 cm round, thin-walled, homogeneous fluid collection in the lesser sac, compressing the stomach and narrowing the gastric antrum. No solid component and no gas. The pancreas has no necrosis."</em></p>`,
                        questions: [
                            { id: "s2-collection", type: "mc", justify: 12,
                                stem: "What is the collection? Briefly justify your choice.",
                                options: ["A pseudocyst", "Walled-off necrosis", "Infected necrosis", "A pancreatic tumor", "An acute peripancreatic fluid collection"], answer: 0,
                                justifyAnswer: "Homogeneous fluid with a thin wall, over 4 weeks after interstitial pancreatitis.",
                                explanation: "Interstitial edematous pancreatitis causes fluid around the pancreas, which forms a pseudocyst, with no epithelium, after 4 weeks.",
                                notes: { 1: "Walled-off necrosis follows necrotizing pancreatitis and contains necrotic solid material.", 2: "There is no fever or gas to suggest infection.", 3: "There is no solid component.", 4: "An acute collection is the stage before 4 weeks." } },
                            { id: "s2-drain", type: "sa", lines: 2,
                                stem: "Most pseudocysts are observed. Should this one be drained? Explain.",
                                answer: "Yes: it compresses the stomach and causes gastric outlet obstruction, so it is symptomatic.",
                                explanation: "Pseudocysts are drained only if symptomatic or complicated by infection, rupture, or compression." },
                            { id: "s2-future", type: "mc", select: 2,
                                stem: "Which steps most reduce his risk of another attack?",
                                options: ["Control his diabetes and triglycerides", "Review whether to stop hydrochlorothiazide", "Cholecystectomy", "Long-term prophylactic ABX", "Pancreatic enzyme replacement"], answer: [0, 1],
                                explanation: "Treating the cause prevents recurrence: lowering triglycerides, and stopping a drug on the list when it may contribute.",
                                notes: { 2: "He has no gallstones.", 3: "Prophylactic ABX have no role.", 4: "Enzymes treat steatorrhea in chronic pancreatitis." } },
                        ] },
                ],
            },
            {
                title: "Attacks since childhood",
                keyPoints: [
                    "Recurrent attacks in a child without gallstones suggest a genetic cause: CFTR, PRSS1, or SPINK1.",
                    "Repeated attacks lead to chronic pancreatitis: protein plugs, calcification, and fibrosis.",
                    "Lipase may be normal in a scarred gland; calcifications and a low fecal elastase make the diagnosis.",
                    "Steatorrhea appears once over 90% of the gland is lost, and enzyme replacement with meals treats it but not pain.",
                    "Pain is treated with paracetamol, NSAIDs, or pregabalin before opioids; stones or strictures may need ERCP or lithotripsy.",
                ],
                blocks: [
                    { passage: `<p>A 15-year-old girl has had four attacks of acute pancreatitis since she was 10, each with epigastric pain to the back and a lipase over 5 times normal. She does not drink or smoke, takes no medications, and has had no trauma. Her father had "pancreas problems" from his twenties.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>RUQ ultrasound</td><td>No gallstones; normal bile duct</td></tr>
<tr><td>Triglycerides</td><td>Normal</td></tr>
<tr><td>Calcium</td><td>Normal</td></tr>
<tr><td>Sweat chloride</td><td>Normal</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s3-genes", type: "sa", lines: 2,
                                stem: "What kind of cause is most likely, and which genes would be tested?",
                                answer: "A genetic cause: PRSS1, SPINK1, and CFTR.",
                                explanation: "In children, chronic pancreatitis comes from cystic fibrosis and genes such as PRSS1, SPINK1, and CFTR; her family history supports an inherited cause." },
                            { id: "s3-mechanism", type: "sa", lines: 2,
                                stem: "PRSS1 encodes trypsinogen. Using the page's pathophysiology, explain why a variant that resists trypsin's breakdown could cause repeated attacks.",
                                answer: "Trypsin that stays active inside the pancreas keeps activating enzymes, causing autodigestion.",
                                explanation: "Premature trypsin activation inside the pancreas is the first step of acute pancreatitis." },
                        ] },
                    { passage: `<p>At 22 she has constant epigastric pain, better when she leans forward, with pain-free weeks. She has lost 7 kg and passes pale, oily stools.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Lipase</td><td>38 U/L</td><td>Under 60</td></tr>
<tr><td>Fecal elastase</td><td>45 µg/g</td><td>Over 500</td></tr>
<tr><td>HbA1c</td><td>5.4%</td><td>Under 6.0%</td></tr>
</tbody></table>
<p>CT: <em>"Multiple pancreatic calcifications. The main pancreatic duct is dilated to 7 mm upstream of a 6 mm stone in the pancreatic head."</em> <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-lipase", type: "sa", lines: 2,
                                stem: "Explain why her lipase is normal despite severe disease.",
                                answer: "Fibrosis has replaced most of the gland, so there is little acinar tissue left to release lipase.",
                                explanation: "Chronic pancreatitis is diagnosed with imaging (calcifications) and tests of exocrine function, not lipase." },
                            { id: "s3-function", type: "mc", justify: 12,
                                stem: "Which statement best describes her pancreatic function? Briefly justify your choice.",
                                options: ["Exocrine failure only, so far", "Exocrine and endocrine failure", "Endocrine failure only", "Normal function", "Exocrine function cannot be judged without a fecal fat"], answer: 0,
                                justifyAnswer: "Low fecal elastase and steatorrhea, but a normal HbA1c.",
                                explanation: "Fecal elastase under 500 µg/g and steatorrhea show exocrine failure; her HbA1c shows no diabetes yet, though type 3c diabetes may follow.",
                                notes: { 1: "Her HbA1c is normal.", 2: "Her steatorrhea and fecal elastase show exocrine failure.", 3: "Her elastase is very low.", 4: "Fecal fat is the most definitive test, but a fecal elastase this low, with steatorrhea, is enough." } },
                            { id: "s3-treatment", type: "order",
                                stem: "Number her treatments from the first-line step to the last resort for pain.",
                                items: ["Opioids", "Paracetamol, an NSAID, or pregabalin", "ERCP or shock wave lithotripsy for the obstructing stone"],
                                order: [1, 2, 0],
                                explanation: "Simple analgesics and pregabalin come first; an obstructing stone with a dilated duct can be treated by ERCP or lithotripsy; opioids are used only if these fail." },
                            { id: "s3-enzymes", type: "sa", lines: 2,
                                stem: "She starts enzyme replacement and asks whether it will help her pain. How should she be answered?",
                                answer: "It treats her steatorrhea and weight loss when taken with meals, but it does not relieve pain.",
                                explanation: "Pancreatic enzyme replacement with meals digests fat in food; pain has its own treatments." },
                            { id: "s3-risks", type: "mc", select: 2,
                                stem: "Which long-term risks should her follow-up watch for?",
                                options: ["Pancreatogenic (type 3c) diabetes", "Pancreatic ductal adenocarcinoma", "Barrett esophagus", "Gallbladder cancer", "Autoimmune hepatitis"], answer: [0, 1],
                                explanation: "As fibrosis spreads, islet loss causes type 3c diabetes, and chronic pancreatitis raises the risk of pancreatic ductal adenocarcinoma.",
                                notes: { 2: "Barrett esophagus follows chronic reflux.", 3: "Gallbladder cancer is linked to gallstones.", 4: "Autoimmune hepatitis is unrelated." } },
                        ] },
                ],
            },
        ],
    },
};
