// Worksheet for the Gastritis page, built by tools/build-worksheet-pdf.mjs gi gastritis.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Gastritis",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From damage to treatment",
        top: "Drugs, infection, stress, or autoimmunity damage the stomach → mucosal inflammation, or [[atrophy]] in autoimmune gastritis",
        rows: ["Cause", "Why it happens", "Main test", "Treatment"],
        columns: [
            ["1. NSAIDs and alcohol", "[[COX]] inhibition → decreased PG → increased HCl and decreased mucus", "EGD: shallow antral erosions", "Stop the cause; [[PPI]]"],
            ["2. H. pylori", "[[Urease]] makes ammonia; infection → increased gastrin → increased HCl", "[[Urea breath]] test or stool antigen", "Eradicate, then confirm cure [[4–6]] weeks after ABX or PPI"],
            ["3. Curling ulcers", "Severe [[burns]] → hypovolemia → mucosal ischemia", "EGD if bleeding", "Stress prophylaxis: PPI first line, [[H2RA]] second"],
            ["4. Cushing ulcers", "Increased [[ICP]] → increased CN X activity → increased HCl", "EGD if bleeding", "Stress prophylaxis: PPI first line, H2RA second"],
            ["5. Autoimmune", "Autoantibodies attack [[parietal]] cells → decreased HCl and IF → atrophy of the body and fundus", "Anti-parietal cell (sensitive) and anti-IF ([[specific]]) antibodies; B12 and iron", "IM [[B12]], then lifelong; iron; EGD every 3 years if atrophy is advanced"],
        ],
        span: "Shallow erosions do not pass the [[muscularis mucosae]]. Alarm features or age [[60]] or older: EGD with biopsies from 5 sites",
        chains: [
            { label: "Chronic H. pylori", steps: [["Atrophy", "Loss of glands"], ["Intestinal metaplasia", "Then dysplasia"], ["Intestinal-type adenocarcinoma", "The most common type; forms glands"], ["[[MALT]] lymphoma", "Eradicate if t(11;18) negative"]] },
            { label: "Autoimmune gastritis", steps: [["Parietal cell loss", "Decreased IF and HCl"], ["B12 malabsorption", "Over [[2–5]] years"], ["Pernicious anemia", "Macrocytosis, hypersegmented neutrophils"], ["High gastrin", "ECL growth → type 1 gastric [[carcinoid]]"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Gastritis is inflammation of the stomach's [[mucosal]] lining after damage to the stomach. It is associated with the [[antrum]], with shallow [[erosions]] that do not pass the muscularis mucosae, and in autoimmune gastritis with atrophy of the [[fundus]] rather than erosions." },
                { id: "r-path-match", type: "match",
                    stem: "Match each effect of damage to its cause.",
                    items: ["Weakened mucus layer", "Increased HCl", "Mucosal ischemia", "Parietal cell loss"],
                    options: ["Hypovolemia from severe burns", "Autoantibodies", "COX inhibition decreasing PG", "NSAIDs, alcohol, H. pylori, and increased CN X activity"],
                    answer: [2, 3, 0, 1],
                    explanation: "Each cause either weakens the defenses (mucus, blood flow) or strengthens the attack (HCl); autoimmunity instead destroys the cells that make acid." },
                { id: "r-path-depth", type: "sa", lines: 2,
                    stem: "What separates gastritis from peptic ulcer disease, and why are Curling and Cushing ulcers grouped with gastritis?",
                    answer: "Depth: gastritis stays above the muscularis mucosae, and Curling and Cushing lesions do not erode past it.",
                    explanation: "Curling and Cushing ulcers are not true ulcers." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of causes.",
                    html: `<table><thead><tr><th>Cause</th><th>Mechanism</th></tr></thead><tbody>
<tr><td>1. NSAIDs and alcohol</td><td>COX inhibition → decreased [[PG]] → increased HCl and decreased [[mucus]]</td></tr>
<tr><td>2. H. pylori</td><td>Urease makes [[ammonia]]; infection → increased [[gastrin]] → increased HCl</td></tr>
<tr><td>3. Curling ulcers</td><td>Severe burns → [[hypovolemia]] → mucosal ischemia</td></tr>
<tr><td>4. Cushing ulcers</td><td>Increased ICP → increased [[CN X]] activity → increased HCl</td></tr>
<tr><td>5. Autoimmune gastritis</td><td>Autoantibodies attack parietal cells → decreased HCl and [[IF]]; often with autoimmune [[thyroid]] disease</td></tr>
</tbody></table>` },
                { id: "r-cause-sites", type: "sa", lines: 2,
                    stem: "Why does autoimmune gastritis affect the body and fundus but spare the antrum?",
                    answer: "Its target, the parietal cell, lives in the body and fundus; the antrum holds G cells instead.",
                    explanation: "H. pylori gastritis, by contrast, typically starts in the antrum." },
                { id: "r-cause-stress", type: "mc",
                    stem: "Which pairing of patient and stress lesion is correct?",
                    options: ["Raised ICP: a Cushing ulcer, from increased CN X activity", "A woman with 40% burns: a Cushing ulcer from increased CN X activity", "A man with raised ICP: a Curling ulcer from hypovolemia", "A woman on naproxen: a Curling ulcer from ischemia", "A woman with burns: autoimmune gastritis from parietal cell loss"], answer: 0,
                    explanation: "Burns cause Curling ulcers through hypovolemia and ischemia; raised ICP causes Cushing ulcers through increased CN X activity.",
                    notes: { 1: "Burns cause Curling ulcers.", 2: "Raised ICP causes Cushing ulcers.", 3: "Naproxen injures through COX inhibition.", 4: "Burns do not cause autoimmune gastritis." } },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-order", type: "order",
                    stem: "Number the steps of autoimmune gastritis in order.",
                    items: ["Pernicious anemia", "B12 malabsorption over 2–5 years", "Neurological damage", "Parietal cell loss with decreased IF and HCl"],
                    order: [3, 1, 0, 2],
                    explanation: "Neurological damage begins as peripheral neuropathy, then subacute combined degeneration." },
                { id: "r-sx-match", type: "match",
                    stem: "Match each complication to its cause.",
                    items: ["Type 1 gastric carcinoid", "Gastric MALT lymphoma", "Hemorrhage", "Iron and B12 deficiency", "Peptic ulcer"],
                    options: ["Atrophic gastritis", "H. pylori and NSAIDs", "Stress gastritis without prophylaxis", "High gastrin in autoimmune gastritis", "Chronic H. pylori infection"],
                    answer: [3, 4, 2, 0, 1],
                    explanation: "Gastritis is often asymptomatic, so complications can be how it is found." },
                { id: "r-sx-cancer", type: "blank",
                    stem: "Complete the comparison of gastric adenocarcinoma.",
                    html: `<table><thead><tr><th>Feature</th><th>Intestinal type</th><th>Diffuse type</th></tr></thead><tbody>
<tr><td>Histology</td><td>Forms [[glands]]</td><td>[[Signet ring]] cells; no cell adhesion ([[CDH1]] mutations)</td></tr>
<tr><td>Growth</td><td>A mass</td><td>Infiltrates the wall → [[linitis plastica]]</td></tr>
<tr><td>Risks</td><td>H. pylori, atrophic gastritis, pernicious anemia, smoking, salt-preserved, smoked, or N-nitroso foods</td><td>Blood group [[A]]</td></tr>
</tbody></table>` },
                { id: "r-sx-signs", type: "match",
                    stem: "Match each metastatic sign of gastric cancer to its site.",
                    items: ["Virchow node", "Sister Mary Joseph nodule", "Irish node", "Krukenberg tumor", "Blumer shelf"],
                    options: ["Umbilicus", "Pelvic cul-de-sac", "Left supraclavicular", "Ovary", "Left axilla"],
                    answer: [2, 0, 4, 3, 1],
                    explanation: "Paraneoplastic signs are acanthosis nigricans, diffuse seborrheic keratoses, and Trousseau syndrome." },
                { id: "r-sx-menetrier", type: "blank",
                    html: "In Ménétrier disease, excess [[TGF-α]] activates EGFR, causing giant folds in the body and fundus, sparing the [[antrum]]. Acid is [[decreased]], and protein loss causes hypoalbuminemia and [[edema]]. It is premalignant in adults; a self-limited form in children follows [[CMV]]." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-pathway", type: "mc", select: 2,
                    stem: "Which patients with dyspepsia need EGD with biopsies from 5 sites rather than H. pylori testing first?",
                    options: ["A 63-year-old with no alarm features", "A 40-year-old with persistent vomiting", "A 35-year-old with bloating after meals", "A 45-year-old whose breath test is positive", "A 30-year-old on an empiric PPI"], answer: [0, 1],
                    explanation: "Age 60 or older or alarm features (weight loss, bleeding, dysphagia, a mass, persistent vomiting, family history of gastric cancer) call for EGD.",
                    notes: { 2: "Bloating is a common symptom, not an alarm feature.", 3: "A positive breath test leads to eradication.", 4: "An empiric PPI is for H. pylori-negative dyspepsia under 60." } },
                { id: "r-dx-antibodies", type: "sa", lines: 2,
                    stem: "Anti-parietal cell antibodies are sensitive and anti-IF antibodies specific. What does a negative anti-parietal cell result and a positive anti-IF result each tell you?",
                    answer: "A negative sensitive test makes the disease unlikely; a positive specific test makes it likely.",
                    explanation: "Biopsy shows body and fundus atrophy with intestinal metaplasia, and B12 and iron are checked." },
                { id: "r-dx-blanks", type: "blank",
                    html: "In pernicious anemia, the FBC shows macrocytosis and [[hypersegmented]] neutrophils, but [[one-third]] have no macrocytosis. Ménétrier disease may need a [[deep]] biopsy if mucosal biopsy is normal. Cure of H. pylori is confirmed with a [[noninvasive]] test 4–6 weeks after finishing ABX or PPI." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each situation to its treatment.",
                    items: ["Critically ill, for stress prophylaxis", "H. pylori-negative dyspepsia under 60", "Gastritis from NSAIDs or alcohol", "Gastric MALT lymphoma, t(11;18) negative", "Ménétrier disease"],
                    options: ["Stop the cause; PPI", "High-protein diet, PPI, and albumin; total gastrectomy if refractory", "PPI first line, H2RA second line", "H. pylori eradication", "Empiric PPI, then a prokinetic or tricyclic antidepressant"],
                    answer: [2, 4, 0, 3, 1],
                    explanation: "Eradication gives an 80% complete response in t(11;18)-negative MALT lymphoma; otherwise radiotherapy or systemic therapy." },
                { id: "r-tx-b12", type: "sa", lines: 3,
                    stem: "Give the B12 regimen for autoimmune gastritis, and explain why oral B12 at dietary doses would not work.",
                    answer: "IM B12 1000 µg daily or alternate days for 1–2 weeks, then IM or high-dose oral for life; without IF, normal doses are not absorbed.",
                    explanation: "Iron is replaced too, and EGD every 3 years follows if atrophy is advanced." },
                { id: "r-tx-folate", type: "mc",
                    stem: "Why should folic acid not be given alone to a patient with pernicious anemia?",
                    options: ["It fixes the anemia as nerve damage worsens", "It blocks B12 absorption in the terminal ileum", "It raises gastrin and the carcinoid risk", "It causes a microcytic anemia", "It inactivates intrinsic factor antibodies"], answer: 0,
                    explanation: "Folate can bypass the block in DNA synthesis and correct the blood count, but not the neurological effect of B12 deficiency.",
                    notes: { 1: "Folate does not block B12 absorption.", 2: "Folate does not affect gastrin.", 3: "Folate does not cause microcytosis.", 4: "Folate does not affect antibodies." } },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "A breath test after treatment",
                keyPoints: [
                    "Dyspepsia under 60 without alarm features is tested for H. pylori, preferably with the urea breath test.",
                    "H. pylori gastritis is always eradicated, because chronic infection leads to adenocarcinoma and MALT lymphoma.",
                    "ABX and PPIs suppress H. pylori, so a test of cure within 4–6 weeks of either can be falsely negative.",
                    "t(11;18)-negative MALT lymphoma depends on H. pylori, so eradication alone gives an 80% complete response.",
                    "t(11;18)-positive or unresponsive lymphoma needs radiotherapy or systemic therapy.",
                ],
                blocks: [
                    { passage: `<p>A 44-year-old man has 3 months of gnawing epigastric pain and bloating. He has no weight loss, bleeding, dysphagia, or vomiting, and no family history of gastric cancer. He takes no NSAIDs and drinks little alcohol. A urea breath test is positive.</p>`,
                        questions: [
                            { id: "s1-path", type: "sa", lines: 2,
                                stem: "Why was he tested for H. pylori rather than sent for EGD?",
                                answer: "He is under 60 with no alarm features, so noninvasive H. pylori testing comes first.",
                                explanation: "Alarm features or age 60 or older call for EGD with biopsies from 5 sites." },
                            { id: "s1-mech", type: "sa", lines: 3,
                                stem: "Explain how the infection survives in the stomach, and how it increases acid.",
                                answer: "Urease makes ammonia, shielding it from acid; antral infection increases gastrin, which drives HCl production.",
                                explanation: "The same urease is what the breath test detects." },
                        ] },
                    { passage: `<p>He completes 14 days of eradication therapy and continues a PPI for his symptoms. One week after the antibiotics end, while still taking the PPI, a stool antigen test is negative.</p>`,
                        questions: [
                            { id: "s1-cure", type: "mc", justify: 12,
                                stem: "How should this result be interpreted? Briefly justify your choice.",
                                options: ["Unreliable; repeat 4–6 weeks off ABX and PPI", "Cure is confirmed, so no further testing is needed", "Treatment failed; start a second regimen", "Repeat with serology instead", "Proceed to EGD with biopsies from 5 sites"], answer: 0,
                                justifyAnswer: "PPI and recent ABX suppress H. pylori, causing false negatives.",
                                explanation: "Cure is confirmed with a noninvasive test 4–6 weeks after finishing ABX or PPI.",
                                notes: { 1: "A test done this early on a PPI cannot confirm cure.", 2: "A negative result does not show failure.", 3: "Serology stays positive after cure.", 4: "EGD is not needed to confirm cure in a patient under 60 without alarm features." } },
                        ] },
                    { passage: `<p>He does not return for the repeat test. Six years later, aged 50, he has 2 months of early satiety and 6 kg weight loss. EGD with biopsies shows a gastric MALT lymphoma confined to the stomach, and H. pylori organisms are seen. Testing for t(11;18) is negative.</p>`,
                        questions: [
                            { id: "s1-egd", type: "sa", lines: 2,
                                stem: "Why did he go straight to EGD this time?",
                                answer: "Weight loss is an alarm feature.",
                                explanation: "Alarm features are weight loss, bleeding, dysphagia, a mass, persistent vomiting, and a family history of gastric cancer." },
                            { id: "s1-malt", type: "sa", lines: 3,
                                stem: "What is the first treatment, and why does the t(11;18) result matter?",
                                answer: "H. pylori eradication; t(11;18)-negative lymphoma still depends on the infection, so it often regresses (80% complete response).",
                                explanation: "t(11;18)-positive lymphoma grows independently and is treated with radiotherapy or systemic therapy." },
                        ] },
                ],
            },
            {
                title: "Tired, with numb feet",
                keyPoints: [
                    "Autoimmune gastritis is usually found through anemia, and it often accompanies autoimmune thyroid disease.",
                    "One-third of patients with pernicious anemia have no macrocytosis, especially when iron deficiency coexists.",
                    "Anti-parietal cell antibodies are sensitive and anti-IF antibodies specific; biopsy shows body and fundus atrophy.",
                    "B12 is given IM at first, then IM or high-dose oral for life, with iron replacement.",
                    "Low acid raises gastrin, which drives ECL cell growth and type 1 carcinoids, so advanced atrophy is surveyed every 3 years.",
                ],
                blocks: [
                    { passage: `<p>A 52-year-old woman with Hashimoto thyroiditis and vitiligo has 8 months of fatigue, a sore tongue, and pins and needles in both feet. She eats meat most days.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>94 g/L</td><td>115–165</td></tr>
<tr><td>MCV</td><td>91 fL</td><td>80–100</td></tr>
<tr><td>Blood film</td><td>Hypersegmented neutrophils; mixed small and large red cells</td><td>—</td></tr>
<tr><td>Serum B12</td><td>85 pmol/L</td><td>Over 150</td></tr>
<tr><td>Ferritin</td><td>9 µg/L</td><td>30–300</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-mcv", type: "sa", lines: 3,
                                stem: "Her MCV is normal despite B12 deficiency. Explain why, using the blood film.",
                                answer: "Coexisting iron deficiency makes small cells that offset the large B12-deficient cells, so the average MCV is normal.",
                                explanation: "One-third of patients with pernicious anemia have no macrocytosis; atrophic gastritis causes both iron and B12 deficiency." },
                            { id: "s2-why", type: "mc", select: 2,
                                stem: "Which features point to autoimmune gastritis as the cause?",
                                options: ["Hashimoto thyroiditis and vitiligo", "B12 deficiency despite eating meat", "A sore tongue", "A normal MCV", "Her age"], answer: [0, 1],
                                explanation: "Autoimmune gastritis accompanies other autoimmune disease, and B12 deficiency with an adequate diet points to malabsorption from IF loss.",
                                notes: { 2: "A sore tongue occurs in both B12 and iron deficiency, whatever the cause.", 3: "A normal MCV is explained by the iron deficiency, not the cause.", 4: "Age alone does not point to the cause." } },
                        ] },
                    { passage: `<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Anti-parietal cell antibodies</td><td>Positive</td></tr>
<tr><td>Anti-intrinsic factor antibodies</td><td>Negative</td></tr>
<tr><td>Fasting gastrin</td><td>Markedly increased</td></tr>
</tbody></table><p>EGD shows thin, pale mucosa in the body and fundus with a normal antrum. Biopsies show atrophy with intestinal metaplasia in the body. Biopsies are negative for H. pylori.</p>`,
                        questions: [
                            { id: "s2-ab", type: "mc", justify: 12,
                                stem: "Does the negative anti-IF result exclude autoimmune gastritis? Briefly justify your choice.",
                                options: ["No; anti-IF is specific, not sensitive", "Yes; anti-IF must be positive for the diagnosis", "Yes; the positive anti-parietal result is a false positive", "No, but only because H. pylori was negative", "Yes; the high gastrin points to a gastrinoma instead"], answer: 0,
                                justifyAnswer: "Anti-IF is specific but often negative; biopsy shows body and fundus atrophy.",
                                explanation: "Anti-parietal cell antibodies are sensitive, anti-IF specific; body and fundus atrophy with intestinal metaplasia supports the diagnosis.",
                                notes: { 1: "A negative specific test does not exclude the disease.", 2: "The biopsy supports a true positive.", 3: "H. pylori status does not decide the antibody question.", 4: "A gastrinoma would raise acid and thicken folds, not cause atrophy." } },
                            { id: "s2-gastrin", type: "sa", lines: 2,
                                stem: "Explain her high gastrin, and the tumor it puts her at risk of.",
                                answer: "Low acid removes feedback on the spared antral G cells; high gastrin makes ECL cells grow, risking type 1 carcinoid.",
                                explanation: "The antrum is spared, so G cells keep secreting." },
                        ] },
                    { passage: `<p>Her GP plans to start oral folic acid and oral iron and review her in 3 months.</p>`,
                        questions: [
                            { id: "s2-plan", type: "sa", lines: 3,
                                stem: "What is wrong with this plan, and what should she receive?",
                                answer: "Folate alone may fix the blood count while nerve damage progresses, and she cannot absorb dietary B12; give IM B12 1000 µg daily or alternate days for 1–2 weeks, then lifelong, plus iron.",
                                explanation: "Neurological damage progresses from peripheral neuropathy to subacute combined degeneration." },
                            { id: "s2-follow", type: "mc",
                                stem: "Which follow-up is appropriate for her stomach?",
                                options: ["EGD every 3 years", "No follow-up once B12 is replaced", "EGD every 3 months", "Annual H. pylori breath tests", "Total gastrectomy to prevent carcinoid"], answer: 0,
                                explanation: "EGD every 3 years follows advanced atrophy, for carcinoid and intestinal-type adenocarcinoma.",
                                notes: { 1: "B12 corrects the deficiency, not the cancer risk of atrophy.", 2: "Three-monthly EGD is far more often than needed.", 3: "Her biopsies were negative for H. pylori, and her gastritis is autoimmune.", 4: "Gastrectomy is not used to prevent carcinoid here." } },
                        ] },
                ],
            },
            {
                title: "Two patients in the ICU",
                keyPoints: [
                    "Severe burns cause Curling ulcers through hypovolemia and mucosal ischemia.",
                    "Raised ICP causes Cushing ulcers through increased CN X activity and HCl production.",
                    "Both are erosions above the muscularis mucosae, not true ulcers, but they can hemorrhage.",
                    "Critically ill patients receive stress prophylaxis: a PPI first line, an H2RA second line.",
                    "Gastritis from NSAIDs or alcohol is treated by stopping the cause and giving a PPI.",
                ],
                blocks: [
                    { passage: `<p>Two patients are admitted to the ICU on the same night. Patient A, 31, has full-thickness burns over 50% of his body and is receiving large volumes of IV fluid. Patient B, 45, has a traumatic brain injury with raised ICP and is ventilated. Neither was prescribed stress prophylaxis. Patient B takes ibuprofen and drinks heavily at home.</p>`,
                        questions: [
                            { id: "s3-mech", type: "sa", lines: 3,
                                stem: "For each patient, name the stress lesion he is at risk of and its mechanism.",
                                answer: "A: Curling ulcer, from hypovolemia and mucosal ischemia. B: Cushing ulcer, from increased CN X activity raising HCl.",
                                explanation: "Burns cause Curling ulcers; brain injury causes Cushing ulcers." },
                            { id: "s3-ppx", type: "mc", select: 2,
                                stem: "Which statements about stress prophylaxis for these patients are correct?",
                                options: ["A PPI is first line", "An H2RA is the second-line option", "Misoprostol is first line", "It is needed only if H. pylori is positive", "It is unnecessary because these are not true ulcers"], answer: [0, 1],
                                explanation: "Stress gastritis can hemorrhage without prophylaxis; a PPI is first line and an H2RA second line.",
                                notes: { 2: "Misoprostol is not the page's stress prophylaxis.", 3: "Stress gastritis is not caused by H. pylori.", 4: "Erosions can still hemorrhage." } },
                        ] },
                    { passage: `<p>On day 3, before prophylaxis is started, patient B has coffee-ground aspirate from his nasogastric tube and melena. His hemoglobin falls from 132 to 101 g/L. EGD shows multiple shallow erosions in the body and antrum, none extending beyond the mucosa, with oozing from several.</p>`,
                        questions: [
                            { id: "s3-label", type: "mc", justify: 12,
                                stem: "How are these lesions best described? Briefly justify your choice.",
                                options: ["Stress gastritis, with erosions rather than true ulcers", "Peptic ulcer disease", "Autoimmune gastritis", "Gastric adenocarcinoma", "Ménétrier disease"], answer: 0,
                                justifyAnswer: "Shallow erosions that do not pass the muscularis mucosae, after raised ICP.",
                                explanation: "Cushing ulcers are not true ulcers because they do not erode past the muscularis mucosae.",
                                notes: { 1: "PUD extends beyond the muscularis mucosae.", 2: "Autoimmune gastritis causes atrophy, not erosions.", 3: "Multiple oozing erosions after brain injury are not a tumor.", 4: "Ménétrier disease causes giant folds." } },
                            { id: "s3-home", type: "sa", lines: 3,
                                stem: "His home ibuprofen and alcohol add a second mechanism. Explain it, and state what should happen to them on discharge.",
                                answer: "COX inhibition decreases PG, lowering mucus and raising HCl; stop the ibuprofen and alcohol, and continue a PPI.",
                                explanation: "Gastritis from NSAIDs or alcohol is treated by stopping the cause and giving a PPI." },
                        ] },
                ],
            },
            {
                title: "Thick folds",
                keyPoints: [
                    "Giant folds in the body and fundus with low albumin and no other protein loss suggest Ménétrier disease.",
                    "Diffuse-type adenocarcinoma infiltrates the wall as linitis plastica and can hide from superficial biopsies.",
                    "Deep biopsy is needed when mucosal biopsies are normal but the wall looks abnormal.",
                    "Metastatic signs, such as a Virchow node, and paraneoplastic signs, such as acanthosis nigricans, point to gastric cancer.",
                ],
                blocks: [
                    { passage: `<p>A 58-year-old man (blood group A) has 3 months of early satiety, epigastric fullness, and 9 kg weight loss. He has new velvety dark skin in his armpits and a firm node above his left clavicle. EGD shows a thick, rigid stomach wall that barely distends with air, with prominent folds. Standard mucosal biopsies are normal. Albumin is 33 g/L (reference 35–50).</p>`,
                        questions: [
                            { id: "s4-signs", type: "sa", lines: 2,
                                stem: "Name the two signs outside the abdomen, and what each suggests.",
                                answer: "Acanthosis nigricans, a paraneoplastic sign, and a Virchow node, a metastasis: both suggest gastric cancer.",
                                explanation: "Other metastatic signs are the Sister Mary Joseph nodule, Irish node, Krukenberg tumor, and Blumer shelf." },
                            { id: "s4-ddx", type: "mc", justify: 12,
                                stem: "Which diagnosis is most likely? Briefly justify your choice.",
                                options: ["Diffuse-type adenocarcinoma", "Ménétrier disease", "Intestinal-type adenocarcinoma", "Autoimmune gastritis", "Gastric MALT lymphoma"], answer: 0,
                                justifyAnswer: "A rigid, non-distending wall with metastatic and paraneoplastic signs.",
                                explanation: "Diffuse-type cancer lacks cell adhesion and infiltrates the wall, giving linitis plastica; it is linked to blood group A.",
                                notes: { 1: "Ménétrier disease gives giant folds with marked protein loss, not a rigid wall with a Virchow node.", 2: "Intestinal type forms a glandular mass.", 3: "Autoimmune gastritis thins the mucosa.", 4: "MALT lymphoma follows chronic H. pylori infection and does not cause acanthosis nigricans." } },
                            { id: "s4-biopsy", type: "sa", lines: 2,
                                stem: "Why were the standard biopsies normal, and what should be done?",
                                answer: "The cancer cells infiltrate deep in the wall beneath normal mucosa; take deep biopsies.",
                                explanation: "Signet ring cells spread singly through the wall rather than forming a surface mass." },
                        ] },
                    { passage: `<p>Deep biopsies show signet ring cells infiltrating the submucosa and muscle. His 54-year-old brother is seen the same month with leg edema. His EGD shows giant folds in the body and fundus sparing the antrum; his albumin is 19 g/L, and his urine protein is normal.</p>`,
                        questions: [
                            { id: "s4-brother", type: "sa", lines: 3,
                                stem: "What does the brother most likely have, how does it cause his edema, and how is it treated?",
                                answer: "Ménétrier disease: TGF-α drives giant folds that leak protein, causing hypoalbuminemia; high-protein diet, PPI, albumin, gastrectomy if refractory.",
                                explanation: "CMV or H. pylori are treated if present, and the disease is progressive and premalignant in adults." },
                        ] },
                ],
            },
        ],
    },
};
