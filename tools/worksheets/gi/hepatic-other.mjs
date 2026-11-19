// Worksheet for the Hepatocellular Injury: Acute Fatty Liver of Pregnancy page, built by tools/build-worksheet-pdf.mjs gi hepatic-other.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Hepatocellular Injury: Acute Fatty Liver of Pregnancy",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From fetal enzyme to maternal liver failure",
        top: "Fetal [[LCHAD]] deficiency (the mother is a [[carrier]]) → fetal fatty acids reach the mother → her liver mitochondria are overwhelmed → [[microvesicular]] steatosis",
        rows: ["Complication", "Why it happens", "Finding", "Support"],
        columns: [
            ["Hypoglycemia", "Failing hepatocytes cannot keep up [[glucose]]", "Decreased glucose; common in AFLP, rare in HELLP", "IV [[glucose]], checked often"],
            ["Coagulopathy", "Decreased clotting factor synthesis, and [[DIC]]", "Increased INR, decreased [[fibrinogen]]", "FFP and [[cryoprecipitate]]"],
            ["Encephalopathy", "The failing liver cannot clear [[ammonia]]", "Confusion; increased ammonia", "ICU care"],
            ["Kidneys", "Acute kidney injury", "Increased creatinine and [[uric acid]]", "ICU care"],
            ["Fetus", "Maternal liver failure", "Fetal [[distress]] and death", "Delivery"],
        ],
        span: "Prompt [[delivery]] is the only cure; then test the [[newborn]] for LCHAD deficiency and counsel about [[recurrence]]",
        chains: [
            { label: "Who is at risk", steps: [["Timing", "Third trimester, usually [[30–38]] weeks"], ["Pregnancy", "First pregnancy; [[twins]]"], ["Fetus", "[[Male]] fetus"], ["Mother", "Pre-eclampsia"]] },
            { label: "AFLP or HELLP", steps: [["Glucose", "Low in AFLP; rarely low in HELLP"], ["Clotting", "Coagulopathy common in AFLP"], ["Hemolysis", "Uncommon in AFLP; present in [[HELLP]]"], ["Platelets", "Normal or mildly low in AFLP; low in HELLP"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "In fetal [[LCHAD]] deficiency, fetal fatty acids reach the [[maternal]] liver. Its overwhelmed [[mitochondria]] leave tiny fat droplets in hepatocytes ([[microvesicular]] steatosis), and acute liver failure develops in the [[third]] trimester." },
                { id: "r-path-match", type: "match",
                    stem: "Match each effect to its mechanism.",
                    items: ["Hypoglycemia", "Raised INR", "Encephalopathy", "Microvesicular steatosis"],
                    options: ["Increased ammonia", "Overwhelmed mitochondria leave tiny fat droplets", "Failing hepatocytes cannot keep up glucose", "Decreased clotting factor synthesis"],
                    answer: [2, 3, 0, 1],
                    explanation: "Each complication follows from hepatocytes that can no longer do their work." },
                { id: "r-path-why", type: "sa", lines: 2,
                    stem: "Why does the mother's liver fail although the enzyme deficiency is in the fetus?",
                    answer: "The fetus passes its unoxidized fatty acids to the mother, and her carrier liver, with less reserve, is overwhelmed.",
                    explanation: "The mother is a carrier, so her fatty acid oxidation has less capacity to spare." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-order", type: "order",
                    stem: "Number the steps from the fetal defect to liver failure in order.",
                    items: ["Maternal liver mitochondria are overwhelmed", "Fetal LCHAD deficiency", "Microvesicular steatosis and acute liver failure", "Fetal fatty acids reach the mother"],
                    order: [1, 3, 0, 2],
                    explanation: "The fetal defect sends fatty acids to the mother, whose mitochondria are overwhelmed, leaving fat droplets and liver failure." },
                { id: "r-cause-risk", type: "mc", select: 2,
                    stem: "Which are risk factors for AFLP?",
                    options: ["Twin pregnancy", "A male fetus", "Many previous pregnancies", "The first trimester", "A female fetus"], answer: [0, 1],
                    explanation: "Risk factors are the third trimester (usually 30–38 weeks), first pregnancy, twin pregnancy, male fetus, and pre-eclampsia.",
                    notes: { 2: "A first pregnancy is the risk factor.", 3: "AFLP occurs in the third trimester.", 4: "A male fetus is the risk factor." } },
                { id: "r-cause-twins", type: "sa", lines: 2,
                    stem: "Why might twins raise the risk of AFLP?",
                    answer: "Two fetuses can send a larger fatty acid load to the maternal liver.",
                    explanation: "The mechanism is an overload of the mother's mitochondria." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-blanks", type: "blank",
                    html: "Symptoms of AFLP are nausea and vomiting, abdominal pain, malaise, [[jaundice]], and an unusual pair: [[polyuria]] and polydipsia." },
                { id: "r-sx-comp", type: "match",
                    stem: "Match each complication to the finding that shows it.",
                    items: ["Acute liver failure", "Acute kidney injury", "Fetal compromise"],
                    options: ["Rising creatinine with falling urine output", "Fetal distress on monitoring", "Hypoglycemia, coagulopathy, and encephalopathy"],
                    answer: [2, 0, 1],
                    explanation: "Complications are acute liver failure, acute kidney injury, and fetal distress and death." },
                { id: "r-sx-vague", type: "sa", lines: 2,
                    stem: "Why can AFLP be missed early?",
                    answer: "Early symptoms (nausea, vomiting, malaise) are vague and can be mistaken for a minor illness until the liver fails.",
                    explanation: "Bloods, especially glucose and clotting, reveal it." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-table", type: "blank",
                    stem: "Complete the key findings.",
                    html: `<table><thead><tr><th>Test</th><th>Finding in AFLP</th></tr></thead><tbody>
<tr><td>AST and ALT</td><td>Increased, usually under [[1000]] U/L</td></tr>
<tr><td>Glucose</td><td>[[Decreased]]</td></tr>
<tr><td>INR and fibrinogen</td><td>INR increased, fibrinogen [[decreased]]</td></tr>
<tr><td>Ammonia, uric acid, creatinine</td><td>[[Increased]]</td></tr>
<tr><td>White cells</td><td>[[Leukocytosis]]</td></tr>
</tbody></table>` },
                { id: "r-dx-hellp", type: "match",
                    stem: "Match each feature to the condition where it is more typical.",
                    items: ["Hypoglycemia", "Hemolysis", "Low platelets", "Coagulopathy", "Hypertension usually present"],
                    options: ["AFLP", "HELLP syndrome"],
                    answer: [0, 1, 1, 0, 1],
                    explanation: "AFLP is liver failure (glucose and clotting); HELLP is hemolysis and low platelets, usually with hypertension." },
                { id: "r-dx-biopsy", type: "mc",
                    stem: "Why is a liver biopsy rarely needed in AFLP?",
                    options: ["The diagnosis is clinical, using the Swansea criteria", "Biopsy never shows any abnormality", "The pregnant uterus makes the liver too hard to reach with a needle", "Fetal genetic testing gives the answer first", "Ultrasound always shows microvesicular fat"], answer: 0,
                    explanation: "AFLP is a clinical diagnosis (Swansea criteria); biopsy, which would show microvesicular steatosis, is rarely needed.",
                    notes: { 1: "Biopsy would show microvesicular steatosis.", 2: "Liver size is not the reason.", 3: "The newborn is tested after delivery.", 4: "Ultrasound cannot show microvesicular fat." } },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-cure", type: "sa", lines: 2,
                    stem: "Why is prompt delivery the only cure?",
                    answer: "It removes the fetal source of the fatty acids overwhelming the mother's liver.",
                    explanation: "Support keeps her safe until and after delivery." },
                { id: "r-tx-match", type: "match",
                    stem: "Match each support to what it treats.",
                    items: ["IV glucose", "FFP", "Cryoprecipitate", "ICU care"],
                    options: ["Low fibrinogen", "Encephalopathy and organ failure", "Hypoglycemia", "Raised INR from missing clotting factors"],
                    answer: [2, 3, 0, 1],
                    explanation: "Support covers each part of acute liver failure while delivery removes the cause." },
                { id: "r-tx-follow", type: "blank",
                    html: "After delivery, the [[newborn]] is tested for LCHAD deficiency, and the mother is counseled about [[recurrence]] in future pregnancies." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Thirsty at 36 weeks",
                keyPoints: [
                    "Vague symptoms with polyuria and polydipsia in the third trimester should prompt glucose, clotting, and liver tests.",
                    "Hypoglycemia and coagulopathy with near-normal platelets favor AFLP over HELLP.",
                    "AFLP is a clinical diagnosis; biopsy is rarely needed and risky with coagulopathy.",
                    "Correct glucose and clotting (IV glucose, FFP, cryoprecipitate) while arranging prompt delivery.",
                    "The newborn likely has LCHAD deficiency and is tested, and recurrence is discussed.",
                ],
                blocks: [
                    { passage: `<p>A 29-year-old woman in her first pregnancy, carrying a boy, is 36 weeks pregnant. For 5 days she has felt unwell, with nausea, epigastric pain, and constant thirst; she is passing large volumes of urine. Her BP is 142/90, and urine dipstick shows a trace of protein.</p>
${labs(["Test", "Result", "Reference"], [["Bilirubin", "72 µmol/L", "&lt;20"], ["ALT", "410 U/L", "&lt;35"], ["Glucose", "2.7 mmol/L", "3.5–6.0"], ["INR", "1.8", "0.9–1.2"], ["Fibrinogen", "1.3 g/L", "2.0–4.0 (higher in pregnancy)"], ["Platelets", "128 × 10⁹/L", "150–400"], ["LDH", "Mildly increased", ""], ["Blood film", "No schistocytes", ""]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-risk", type: "sa", lines: 2,
                                stem: "List the features of her history that raise the risk of AFLP.",
                                answer: "Third trimester (36 weeks), first pregnancy, a male fetus, and possible pre-eclampsia (BP and proteinuria).",
                                explanation: "Twin pregnancy is the other risk factor on the page." },
                            { id: "s1-dx", type: "mc", justify: 12,
                                stem: "Her BP and proteinuria raise the question of HELLP. Which diagnosis fits best? Briefly justify your choice.",
                                options: ["AFLP", "HELLP syndrome", "Pre-eclampsia without liver involvement", "Intrahepatic cholestasis of pregnancy", "Hyperemesis gravidarum"], answer: 0,
                                justifyAnswer: "Hypoglycemia and coagulopathy, no hemolysis, platelets only mildly low.",
                                explanation: "Hypoglycemia and coagulopathy are common in AFLP and uncommon in HELLP; pre-eclampsia is a risk factor for AFLP, so mild hypertension does not exclude it.",
                                notes: { 1: "HELLP needs hemolysis and low platelets; she has no schistocytes and platelets only mildly low.", 2: "Pre-eclampsia alone does not cause hypoglycemia and coagulopathy.", 3: "Cholestasis causes itching, not liver failure.", 4: "Hyperemesis is a first-trimester problem." } },
                            { id: "s1-biopsy", type: "sa", lines: 2,
                                stem: "A junior doctor suggests a liver biopsy to confirm the diagnosis. Give two reasons against it.",
                                answer: "AFLP is a clinical diagnosis (Swansea criteria), and her coagulopathy makes bleeding likely; it would also delay delivery.",
                                explanation: "Biopsy, rarely needed, would show microvesicular steatosis." },
                        ] },
                    { passage: `<p>The obstetric team plans a cesarean delivery within hours. Her glucose has fallen to 2.1 mmol/L, and she is becoming drowsy.</p>`,
                        questions: [
                            { id: "s1-order", type: "order",
                                stem: "Number these steps in the order they should start.",
                                items: ["Cesarean delivery", "IV glucose", "FFP and cryoprecipitate to correct clotting before surgery", "ICU care after delivery"],
                                order: [1, 2, 0, 3],
                                explanation: "Hypoglycemia is treated at once, clotting is corrected for surgery, delivery cures, and ICU care supports recovery." },
                            { id: "s1-drowsy", type: "mc",
                                stem: "Her glucose is corrected but she stays drowsy. What most likely explains it?",
                                options: ["Increased ammonia from liver failure", "Eclampsia", "Wernicke encephalopathy", "A side effect of FFP", "Normal tiredness in the last weeks of pregnancy"], answer: 0,
                                explanation: "Encephalopathy in AFLP comes from increased ammonia as the liver fails, which makes delivery more urgent.",
                                notes: { 1: "Eclampsia means seizures; she has none.", 2: "Wernicke encephalopathy follows thiamine deficiency.", 3: "FFP does not cause drowsiness.", 4: "Drowsiness with liver failure is encephalopathy, not tiredness." } },
                        ] },
                    { passage: `<p>A healthy boy is delivered. The mother improves over a week. On day 2, the baby becomes jittery after a long gap between feeds, with a glucose of 1.6 mmol/L.</p>`,
                        questions: [
                            { id: "s1-baby", type: "sa", lines: 3,
                                stem: "Explain the baby's hypoglycemia, and how it links to his mother's illness.",
                                answer: "He likely has LCHAD deficiency, the cause of her AFLP; he cannot oxidize long-chain fatty acids for energy when fasting, so glucose falls.",
                                explanation: "This is why the newborn is tested for LCHAD deficiency after AFLP." },
                        ] },
                ],
            },
            {
                title: "The next pregnancy",
                keyPoints: [
                    "A carrier mother can have an affected fetus again, so AFLP can recur and is discussed after the first episode.",
                    "AFLP is a third-trimester disease; liver tests and glucose are watched closely then.",
                    "AST and ALT in the thousands are unusual for AFLP: think of viral hepatitis, and give empiric IV acyclovir for HSV.",
                    "Both AFLP and fulminant viral hepatitis cause hypoglycemia and coagulopathy, so enzymes and the history separate them.",
                    "Whatever the cause, support with glucose, blood products, and ICU care is the same.",
                ],
                blocks: [
                    { passage: `<p>Two years after AFLP in her first pregnancy, a 31-year-old woman is pregnant again with the same partner. Her first child was diagnosed with LCHAD deficiency.</p>`,
                        questions: [
                            { id: "s2-recur", type: "sa", lines: 2,
                                stem: "Why could AFLP happen again, and what does her first child's diagnosis say about her partner?",
                                answer: "She is a carrier, and her child's LCHAD deficiency means her partner is a carrier too, so this fetus could also be affected.",
                                explanation: "LCHAD deficiency needs two faulty copies, one from each parent." },
                            { id: "s2-watch", type: "mc",
                                stem: "When is she at greatest risk of AFLP in this pregnancy?",
                                options: ["The third trimester, usually 30–38 weeks", "The first 12 weeks", "Only during labor", "The second trimester", "Only if she develops gestational diabetes"], answer: 0,
                                explanation: "AFLP occurs in the third trimester, usually at 30–38 weeks, as the fetal fatty acid load grows.",
                                notes: { 1: "AFLP is not a first-trimester disease.", 2: "It develops before labor, in the third trimester.", 3: "It is concentrated in the third trimester.", 4: "Gestational diabetes is not one of the risk factors." } },
                        ] },
                    { passage: `<p>At 32 weeks she presents with 3 days of fever (38.9 °C), myalgia, and malaise, then jaundice. She has no rash.</p>
${labs(["Test", "Result", "Reference"], [["AST", "5800 U/L", "&lt;35"], ["ALT", "5100 U/L", "&lt;35"], ["Bilirubin", "60 µmol/L", "&lt;20"], ["Glucose", "3.1 mmol/L", "3.5–6.0"], ["INR", "1.9", "0.9–1.2"], ["Platelets", "110 × 10⁹/L", "150–400"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-unusual", type: "sa", lines: 2,
                                stem: "Which finding makes AFLP less likely as the whole explanation, and why?",
                                answer: "AST and ALT in the thousands; in AFLP they are usually under 1000 U/L, so viral hepatitis is more likely.",
                                explanation: "Her fever and myalgia also suggest an infection." },
                            { id: "s2-acyclovir", type: "mc", justify: 12,
                                stem: "What should be started while tests are awaited? Briefly justify your choice.",
                                options: ["Empiric IV acyclovir", "Ursodeoxycholic acid", "Prednisolone", "IV magnesium sulfate", "No treatment until results return"], answer: 0,
                                justifyAnswer: "HSV can cause fulminant hepatitis in late pregnancy; it is treatable.",
                                explanation: "HEV and HSV can cause fulminant hepatitis in the third trimester, and HSV needs empiric IV acyclovir.",
                                notes: { 1: "Ursodeoxycholic acid treats cholestasis of pregnancy.", 2: "Steroids would worsen a viral infection.", 3: "Magnesium prevents eclamptic seizures.", 4: "Waiting risks untreated HSV hepatitis." } },
                            { id: "s2-same", type: "mc", select: 2,
                                stem: "Whatever the final cause, which supportive measures does she need now?",
                                options: ["IV glucose with frequent checks", "FFP and cryoprecipitate if she bleeds or needs a procedure", "Oral fluids only", "Discharge with daily bloods", "Stopping all IV fluids to avoid edema"], answer: [0, 1],
                                explanation: "Hypoglycemia and coagulopathy from acute liver failure need IV glucose and blood products, with ICU care.",
                                notes: { 2: "Oral fluids cannot correct hypoglycemia from liver failure.", 3: "She is in acute liver failure and needs admission.", 4: "She needs IV glucose." } },
                        ] },
                ],
            },
        ],
    },
};
