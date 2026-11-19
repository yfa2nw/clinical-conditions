// Worksheet for the Malabsorption page, built by tools/build-worksheet-pdf.mjs gi malabsorption.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Malabsorption",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From the lumen to the deficiency",
        top: "Mucosal injury (true malabsorption) or failed digestion ([[maldigestion]]) → nutrients stay in the lumen → diarrhea and deficiencies. The [[D-xylose]] test separates the two",
        rows: ["Cause", "Why it happens", "Key test", "Treatment"],
        columns: [
            ["1. Celiac disease", "HLA DQ2/8; [[gliadin]] from wheat, rye, and barley drives T and B cells", "tTG-IgA with total [[IgA]], on gluten for 6–8 weeks; biopsy: villous atrophy", "Strict, lifelong [[gluten-free]] diet; dapsone for dermatitis herpetiformis"],
            ["2. Whipple disease", "Tropheryma whipplei infects [[macrophages]]; joints, heart, CNS", "[[PAS]]-positive foamy macrophages on small bowel biopsy", "Ceftriaxone for 2 weeks, then TMP-SMX for at least 12 months"],
            ["3. Tropical sprue", "Coliform overgrowth after over 1 month in the tropics", "Travel history and exclusion of other causes", "Tetracycline plus [[folic acid]] and iron for 3–6 months; parenteral B12"],
            ["4. Pancreatic insufficiency", "Pancreatitis, cystic fibrosis, pancreatic cancer or surgery", "Fecal [[elastase]], unaffected by enzyme replacement", "Enzyme replacement"],
            ["5. Bile salt deficiency", "Cirrhosis, biliary obstruction, impaired [[enterohepatic]] circulation", "LFTs or biopsy", "Treat the liver disease or cholestasis"],
            ["6. Lactose intolerance", "Genetic or after gastroenteritis: too little [[lactase]]", "[[Hydrogen]] breath test", "Lactase replacement or lactose-free diet"],
        ],
        span: "Every micronutrient deficiency: replace the micronutrients and give IV fluids",
        chains: [
            { label: "By nutrient", steps: [["Carbohydrate", "[[Osmotic]] diarrhea, gas, and flatulence"], ["Protein", "Muscle atrophy and weight loss"], ["Fat", "[[Steatorrhea]] and loss of vitamins A, D, E, K"], ["Micronutrients", "Iron, B12, folate → [[anemia]]"]] },
            { label: "Other causes", steps: [["SIBO", "Stasis or low acid; low B12, high [[folate]]"], ["Rifaximin", "2 weeks; treat the cause"], ["Abetalipoproteinemia", "[[MTTP]] mutation; fat stays in enterocytes"], ["Vitamin E", "Low-fat diet, high-dose vitamin E"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-table", type: "blank",
                    stem: "Complete the comparison.",
                    html: `<table><thead><tr><th>Feature</th><th>True malabsorption</th><th>Maldigestion</th></tr></thead><tbody>
<tr><td>Mucosal injury</td><td>[[Yes]]</td><td>[[No]]</td></tr>
<tr><td>Enzyme function</td><td>[[Normal]]</td><td>[[Altered]]</td></tr>
<tr><td>Urinary D-xylose</td><td>[[Low]]</td><td>[[Normal]]</td></tr>
</tbody></table>` },
                { id: "r-path-carb", type: "sa", lines: 2,
                    stem: "Explain why undigested carbohydrate causes both diarrhea and flatulence.",
                    answer: "It holds water in the lumen by osmosis, causing osmotic diarrhea, and colonic bacteria ferment it, producing gas.",
                    explanation: "Undigested carbohydrate causes osmotic diarrhea, distention, and gas from bacterial digestion." },
                { id: "r-path-match", type: "match",
                    stem: "Match each failure to its result.",
                    items: ["Blunted villi", "Too few enzymes or bile salts", "Undigested fat", "Lost iron, B12, and folate"],
                    options: ["Steatorrhea and fat-soluble vitamin deficiency", "Undigested food: maldigestion", "Anemia", "Decreased absorption: true malabsorption"],
                    answer: [3, 1, 0, 2],
                    explanation: "Either way, nutrients stay in the lumen, and the consequences depend on which nutrient is lost." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-celiac", type: "order",
                    stem: "Number the steps of the immune response in celiac disease in order.",
                    items: ["B cells make IgA antibodies: tTG, DGP, and EMA", "Gliadin binds antigen-presenting cells (HLA DQ2/8)", "T helper cells are activated", "Gluten from wheat, rye, or barley is eaten"],
                    order: [3, 1, 2, 0],
                    explanation: "Gliadin binds antigen-presenting cells, which activate T helper cells, which activate B cells to make IgA antibodies." },
                { id: "r-cause-assoc", type: "mc", select: 2,
                    stem: "Which conditions are associated with celiac disease?",
                    options: ["Type 1 diabetes", "IgA deficiency", "Cystic fibrosis", "Abetalipoproteinemia", "Chronic pancreatitis"], answer: [0, 1],
                    explanation: "Celiac disease is associated with type 1 diabetes and other autoimmune disease, IgA deficiency, and dermatitis herpetiformis.",
                    notes: { 2: "Cystic fibrosis causes pancreatic insufficiency.", 3: "Abetalipoproteinemia is a separate inherited cause.", 4: "Chronic pancreatitis causes pancreatic insufficiency." } },
                { id: "r-cause-sibo", type: "sa", lines: 2,
                    stem: "Name two situations that allow SIBO to develop, and explain how SIBO causes steatorrhea.",
                    answer: "Stasis (motility disorders or blind loops) and low acid; the bacteria deconjugate bile salts, so fat is poorly digested.",
                    explanation: "The bacteria also damage the mucosa directly." },
                { id: "r-cause-match", type: "match",
                    stem: "Match each cause to its mechanism.",
                    items: ["Whipple disease", "Tropical sprue", "Abetalipoproteinemia", "Lactose intolerance"],
                    options: ["Coliform overgrowth after a stay in the tropics", "Too little brush border lactase", "A gram-positive bacillus infecting macrophages", "MTTP mutation; chylomicrons cannot be exported"],
                    answer: [2, 0, 3, 1],
                    explanation: "Causes 1–3 injure the mucosa; causes 4–6 leave food undigested." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-comp-vitamins", type: "blank",
                    html: "Vitamin A deficiency causes [[night blindness]]; vitamin D deficiency causes hypocalcemia, [[osteomalacia]], and osteoporosis; vitamin E deficiency causes neuropathy and [[hemolytic]] anemia; and vitamin K deficiency causes [[coagulopathy]]." },
                { id: "r-comp-match", type: "match",
                    stem: "Match each cause to its typical presentation.",
                    items: ["Celiac disease", "Whipple disease", "SIBO", "Abetalipoproteinemia", "Tropical sprue"],
                    options: ["Failure to thrive from infancy, acanthocytes, and ataxia", "Bloating with low B12 and normal or high folate", "Iron deficiency and itchy vesicles on extensor surfaces", "Chronic diarrhea after a traveler's diarrhea-like illness", "Migratory large-joint arthralgia, fever, and CNS signs"],
                    answer: [2, 4, 1, 0, 3],
                    explanation: "Each cause adds features beyond the shared diarrhea and weight loss." },
                { id: "r-comp-eatl", type: "sa", lines: 2,
                    stem: "Which lymphoma complicates celiac disease, and why does a gluten-free diet lower its risk?",
                    answer: "Enteropathy-associated T-cell lymphoma; the diet removes the gluten that keeps stimulating the mucosal T cells.",
                    explanation: "It is rare and more likely when celiac disease is refractory." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-match", type: "match",
                    stem: "Match each test to the cause it diagnoses.",
                    items: ["Fecal elastase", "Hydrogen breath test after lactose", "Glucose or lactulose breath test", "PAS stain of small bowel biopsy", "Direct immunofluorescence of skin beside a lesion"],
                    options: ["SIBO", "Dermatitis herpetiformis", "Lactose intolerance", "Pancreatic insufficiency", "Whipple disease"],
                    answer: [3, 2, 0, 4, 1],
                    explanation: "After the D-xylose test separates the two groups, each cause has its own test." },
                { id: "r-dx-iga", type: "sa", lines: 2,
                    stem: "Why is celiac serology done on a gluten diet, and why is total IgA measured with it?",
                    answer: "Antibodies fall without gluten; IgA deficiency makes tTG-IgA falsely negative, so IgG tests are then used.",
                    explanation: "Serology is done on a gluten diet for 6–8 weeks, measuring tTG-IgA with total IgA." },
                { id: "r-dx-biopsy", type: "blank",
                    html: "Celiac disease is confirmed by EGD with biopsy, taking 1–2 from the [[bulb]] and 4 from the [[distal]] duodenum. Biopsies show villous atrophy, [[crypt hyperplasia]], and intraepithelial [[lymphocytes]]." },
                { id: "r-dx-abeta", type: "mc",
                    stem: "Which blood results point to abetalipoproteinemia?",
                    options: ["Acanthocytes with very low cholesterol, LDL, and VLDL", "Low B12 with a high folate level", "Positive tTG-IgA antibodies with a normal total IgA level", "Low urinary D-xylose with PAS-positive cells", "High cholesterol with low vitamin A levels"], answer: 0,
                    explanation: "Without apo B lipoproteins, cholesterol, LDL, and VLDL are very low, and vitamin E deficiency causes acanthocytes.",
                    notes: { 1: "Low B12 with high folate is SIBO.", 2: "Positive tTG-IgA is celiac disease.", 3: "PAS-positive macrophages are Whipple disease.", 4: "Cholesterol is very low, not high." } },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each cause to its treatment.",
                    items: ["Celiac disease", "Whipple disease", "Pancreatic insufficiency", "SIBO", "Lactose intolerance"],
                    options: ["Rifaximin for 2 weeks", "Lactase replacement or lactose-free diet", "Strict, lifelong gluten-free diet", "Ceftriaxone, then TMP-SMX for at least 12 months", "Enzyme replacement"],
                    answer: [2, 3, 4, 0, 1],
                    explanation: "Micronutrient deficiency in any cause is treated by replacement and IV fluids." },
                { id: "r-tx-sprue", type: "sa", lines: 2,
                    stem: "Why does tropical sprue need both antibiotics and vitamins?",
                    answer: "Antibiotics clear the coliform overgrowth that injures the mucosa; folic acid, iron, and B12 replace what was lost.",
                    explanation: "Tetracycline, TMP-SMX, or a quinolone, plus folic acid and iron, for 3–6 months, with parenteral B12." },
                { id: "r-tx-abeta", type: "mc", select: 2,
                    stem: "Which belong in treating abetalipoproteinemia?",
                    options: ["A low-fat diet", "Very large doses of oral vitamin E and other fat-soluble vitamins", "Pancreatic enzyme replacement", "A gluten-free diet", "Rifaximin"], answer: [0, 1],
                    explanation: "Fat cannot leave the enterocytes, so fat is limited and vitamins are given in very large doses.",
                    notes: { 2: "Digestion is normal; export is the problem.", 3: "The villi are normal.", 4: "Rifaximin treats SIBO." } },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Tired, with a rash on her elbows",
                keyPoints: [
                    "Iron deficiency, osteoporosis, and an itchy extensor rash in a young adult point to celiac disease, with dermatitis herpetiformis pathognomonic.",
                    "tTG-IgA is only meaningful with a normal total IgA and while eating gluten; with IgA deficiency, IgG tests are used.",
                    "Biopsy confirms celiac disease: villous atrophy, crypt hyperplasia, and intraepithelial lymphocytes, from the bulb and distal duodenum.",
                    "Treatment is a strict, lifelong gluten-free diet, with dapsone for the rash and replacement of lost micronutrients.",
                    "Symptoms returning despite the diet raise hidden gluten first and, if refractory, enteropathy-associated T-cell lymphoma.",
                ],
                blocks: [
                    { passage: `<p>A 27-year-old woman with type 1 diabetes has 1 year of fatigue, bloating, and loose stools. She has intensely itchy blisters on her elbows and knees. A DXA scan for a wrist fracture after a minor fall showed osteoporosis.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>101 g/L</td><td>115–160</td></tr>
<tr><td>MCV</td><td>75 fL</td><td>80–100</td></tr>
<tr><td>Ferritin</td><td>7 µg/L</td><td>30–300</td></tr>
<tr><td>Vitamin D</td><td>21 nmol/L</td><td>over 50</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-link", type: "sa", lines: 3,
                                stem: "Explain how one diagnosis links her anemia, her fracture, and her diabetes.",
                                answer: "Celiac disease damages the duodenum, where iron is absorbed, and fat malabsorption lowers vitamin D, causing osteoporosis; it is associated with type 1 diabetes.",
                                explanation: "Celiac disease causes iron deficiency anemia and osteoporosis and is associated with other autoimmune disease." },
                            { id: "s1-rash", type: "mc", justify: 12,
                                stem: "How should the rash be confirmed? Briefly justify your choice.",
                                options: ["Skin biopsy with direct immunofluorescence beside a lesion", "Viral swab from the base of a blister for herpes simplex virus", "Skin scraping for fungal hyphae", "Patch testing for contact allergy", "Biopsy of the blister roof for culture"], answer: 0,
                                justifyAnswer: "Dermatitis herpetiformis shows immune deposits in the skin beside the lesion.",
                                explanation: "Dermatitis herpetiformis is diagnosed by direct immunofluorescence of skin beside a lesion.",
                                notes: { 1: "It is not a herpes infection, despite its name.", 2: "It is immune, not fungal.", 3: "It is not a contact allergy.", 4: "Culture does not diagnose an immune rash." } },
                        ] },
                    { passage: `<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>tTG-IgA</td><td>Negative</td></tr>
<tr><td>Total IgA</td><td>Undetectable</td></tr>
<tr><td>DGP-IgG</td><td>Strongly positive</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s1-serology", type: "sa", lines: 2,
                                stem: "Interpret these results, and name the next step.",
                                answer: "IgA deficiency made tTG-IgA falsely negative; positive DGP-IgG supports celiac disease. Next: EGD with duodenal biopsies.",
                                explanation: "IgA deficiency is associated with celiac disease, and IgG tests are used instead." },
                            { id: "s1-biopsy", type: "mc",
                                stem: "Which biopsy plan is best?",
                                options: ["1–2 from the bulb and 4 from the distal duodenum", "A single biopsy from the gastric antrum", "Biopsies from the terminal ileum taken at colonoscopy", "One biopsy of the most abnormal area only", "No biopsy, since the serology is positive"], answer: 0,
                                explanation: "Damage can be patchy, so biopsies come from the bulb and distal duodenum.",
                                notes: { 1: "Celiac disease affects the small bowel, not the stomach.", 2: "The proximal small bowel is most affected.", 3: "Patchy damage can be missed by a single biopsy.", 4: "Biopsy confirms the diagnosis." } },
                        ] },
                    { passage: `<p>Biopsies show villous atrophy, crypt hyperplasia, and intraepithelial lymphocytes. She starts a gluten-free diet, dapsone, iron, and vitamin D. Fourteen months later she has new weight loss and abdominal pain, and DGP-IgG is still high.</p>`,
                        questions: [
                            { id: "s1-relapse", type: "sa", lines: 3,
                                stem: "What should be checked first, and which serious complication must be considered if the disease proves refractory?",
                                answer: "Hidden gluten in her diet; enteropathy-associated T-cell lymphoma, which is more likely in refractory disease.",
                                explanation: "A gluten-free diet lowers the risk of the lymphoma." },
                        ] },
                ],
            },
            {
                title: "Greasy stools after years of drinking",
                keyPoints: [
                    "The D-xylose test comes first: normal in maldigestion, because D-xylose needs no digestion, and low in mucosal disease.",
                    "Chronic pancreatitis causes pancreatic insufficiency; fecal elastase confirms it and stays valid on enzyme replacement.",
                    "Steatorrhea means losing fat-soluble vitamins: vitamin K deficiency prolongs the INR, and vitamin D deficiency weakens bone.",
                    "Enzymes are taken with meals, and lost micronutrients are replaced.",
                ],
                blocks: [
                    { passage: `<p>A 56-year-old man who drank heavily for 25 years has had recurrent epigastric pain and now has pale, bulky, oily stools that are hard to flush. He has lost 9 kg. CT shows pancreatic calcification.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Urinary D-xylose</td><td>Normal</td></tr>
<tr><td>Fecal elastase</td><td>Very low</td></tr>
<tr><td>INR</td><td>1.6 (normal 0.9–1.2)</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-xylose", type: "mc", justify: 15,
                                stem: "What does the normal D-xylose result show? Briefly justify your choice.",
                                options: ["The mucosa is healthy, so this is maldigestion", "Celiac disease is present", "SIBO has damaged the mucosa", "His liver cannot excrete D-xylose", "The test is invalid in alcohol use"], answer: 0,
                                justifyAnswer: "D-xylose is absorbed without digestion, so normal uptake means the mucosa works.",
                                explanation: "D-xylose separates malabsorption from maldigestion.",
                                notes: { 1: "Celiac disease injures the mucosa and lowers D-xylose.", 2: "Mucosal damage would lower D-xylose.", 3: "D-xylose is measured in the urine.", 4: "Alcohol does not invalidate the test." } },
                            { id: "s2-inr", type: "sa", lines: 2,
                                stem: "Explain his raised INR without invoking liver failure.",
                                answer: "Fat maldigestion stops vitamin K absorption, so vitamin K-dependent clotting factors fall.",
                                explanation: "Vitamin K deficiency causes coagulopathy." },
                        ] },
                    { passage: `<p>He starts pancreatic enzyme replacement. Three months later his clinician asks whether repeating the fecal elastase will show whether the enzymes are working.</p>`,
                        questions: [
                            { id: "s2-elastase", type: "sa", lines: 2,
                                stem: "Answer the clinician, with a reason.",
                                answer: "No: fecal elastase measures his own pancreas, is unaffected by enzyme replacement, and stays low; follow symptoms and weight.",
                                explanation: "Fecal elastase is unaffected by enzyme replacement." },
                            { id: "s2-plan", type: "mc", select: 2,
                                stem: "Which belong in his ongoing care?",
                                options: ["Enzymes taken with meals", "Replacing fat-soluble vitamins, including vitamin K", "A gluten-free diet", "Rifaximin every month", "A lactose-free diet alone"], answer: [0, 1],
                                explanation: "Enzyme replacement treats pancreatic insufficiency, and lost micronutrients are replaced.",
                                notes: { 2: "He does not have celiac disease.", 3: "Rifaximin treats SIBO.", 4: "Lactose is not his problem." } },
                        ] },
                ],
            },
            {
                title: "Back from the field",
                keyPoints: [
                    "Arthralgia years before diarrhea, with fever and weight loss, suggests Whipple disease, confirmed by PAS-positive foamy macrophages.",
                    "Whipple disease is treated with ceftriaxone or penicillin G for 2 weeks, then TMP-SMX for at least 12 months.",
                    "Tropical sprue follows over 1 month in the tropics and lowers both B12 and folate; SIBO lowers B12 but not folate.",
                    "Tropical sprue is treated with antibiotics plus folic acid and iron for 3–6 months, and parenteral B12.",
                    "Diagnosis of tropical sprue rests on the travel history and excluding other causes.",
                ],
                blocks: [
                    { passage: `<p>Two men are referred with chronic diarrhea and weight loss. Both have low urinary D-xylose and negative celiac serology with normal total IgA.</p>
<table><thead><tr><th></th><th>Patient A, 51</th><th>Patient B, 33</th></tr></thead><tbody>
<tr><td>History</td><td>3 years of migratory knee and wrist pain; fever; new forgetfulness</td><td>10 months as an engineer in South Asia; a diarrheal illness there that never settled</td></tr>
<tr><td>MCV</td><td>88 fL</td><td>114 fL</td></tr>
<tr><td>B12</td><td>Normal</td><td>Low</td></tr>
<tr><td>Folate</td><td>Normal</td><td>Low</td></tr>
<tr><td>Small bowel biopsy</td><td>Foamy macrophages in the lamina propria</td><td>Villous blunting; no organisms</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-a", type: "sa", lines: 2,
                                stem: "What is patient A's most likely diagnosis, and which stain would confirm it?",
                                answer: "Whipple disease; PAS stain showing PAS-positive foamy macrophages.",
                                explanation: "Tropheryma whipplei infects macrophages and involves the joints, heart, and CNS." },
                            { id: "s3-b", type: "mc", justify: 15,
                                stem: "What is patient B's most likely diagnosis? Briefly justify your choice.",
                                options: ["Tropical sprue", "SIBO", "Celiac disease", "Whipple disease", "Lactose intolerance"], answer: 0,
                                justifyAnswer: "Over a month in the tropics, mucosal injury, and low B12 and folate.",
                                explanation: "Tropical sprue follows coliform overgrowth after over 1 month in tropical areas.",
                                notes: { 1: "SIBO gives low B12 with normal or high folate.", 2: "Serology is negative with normal IgA.", 3: "There are no foamy macrophages.", 4: "Lactose intolerance does not blunt villi or lower B12." } },
                        ] },
                    { passage: `<p>Both start treatment.</p>`,
                        questions: [
                            { id: "s3-tx", type: "sa", lines: 3,
                                stem: "Outline each man's treatment, including its length.",
                                answer: "A: ceftriaxone or penicillin G for 2 weeks, then TMP-SMX for at least 12 months. B: tetracycline (or TMP-SMX or a quinolone) with folic acid and iron for 3–6 months, plus parenteral B12.",
                                explanation: "Both are infections of the mucosa treated with antibiotics, but Whipple disease needs a much longer course." },
                            { id: "s3-short", type: "mc",
                                stem: "Patient A stops TMP-SMX after 2 months because he feels well. What is the main concern?",
                                options: ["Relapse, because the course should last at least 12 months", "Stopping TMP-SMX early causes rebound villous atrophy in the gut", "He will develop celiac disease", "His B12 will fall from stopping the drug", "Stopping causes pancreatic insufficiency"], answer: 0,
                                explanation: "Whipple disease needs TMP-SMX for at least 12 months after the first 2 weeks of ceftriaxone or penicillin G.",
                                notes: { 1: "Stopping a drug does not cause villous atrophy.", 2: "Celiac disease is not caused by antibiotics.", 3: "His B12 was normal.", 4: "The pancreas is not involved." } },
                        ] },
                ],
            },
        ],
    },
};
