// Worksheet for the Hepatocellular Injury: Neoplastic Causes page, built by tools/build-worksheet-pdf.mjs gi hepatic-neoplastic.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Hepatocellular Injury: Neoplastic Causes",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From mass to treatment",
        top: "Benign or malignant tumors [[replace]] and compress normal liver; [[metastases]] are the most common liver malignancy",
        rows: ["Tumor", "Who or why", "Imaging and tests", "Danger", "Treatment"],
        columns: [
            ["1. Heman&shy;gioma", "Most common [[benign]] liver tumor", "Peripheral, nodular enhancement filling in toward the center", "Bleeds if biopsied", "Usually none; never [[biopsy]]"],
            ["2. Hepatic adenoma", "Young women on oral contraceptives; [[anabolic steroid]] users", "Multiphase CT or MRI", "[[Rupture]] and malignant change", "Stop hormones; resect all men, and women if over [[5]] cm or bleeding"],
            ["3. FNH", "Mostly women aged 20–50", "Central stellate [[scar]]", "None: no malignant potential", "Usually none"],
            ["4. Metastases", "Colon, breast, lung, and pancreas", "Look for the primary: colonoscopy, [[CEA]]", "Liver failure as tumor replaces liver", "Depends on the primary and stage"],
            ["5. HCC", "Cirrhosis, HBV, HCV, [[aflatoxin]]; fibrolamellar: young, no cirrhosis", "Arterial enhancement with [[washout]]; increased AFP", "Rupture; paraneoplastic effects", "Early: resection, transplant ([[Milan]]), ablation. Advanced: TACE or systemic"],
            ["6. Cholangio&shy;carcinoma", "[[PSC]] and liver flukes", "Multiphase CT or MRI", "Obstructive [[jaundice]]", "Resection if possible"],
            ["7. Angio&shy;sarcoma", "Rare: [[vinyl chloride]], arsenic, Thorotrast", "Multiphase CT or MRI", "Malignant", "By stage"],
        ],
        span: "Any liver mass: multiphase contrast CT or MRI; biopsy only if imaging is unclear, never a hemangioma; in cirrhosis, HCC needs [[no biopsy]]",
        chains: [
            { label: "What a tumor does", steps: [["Replaces liver", "Liver [[failure]]"], ["Compresses bile ducts", "Obstructive jaundice"], ["Ruptures", "[[Hemoperitoneum]] (adenoma, HCC)"], ["Paraneoplastic (HCC)", "Polycythemia, [[hypoglycemia]], hypercalcemia"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-match", type: "match",
                    stem: "Match each effect of a liver tumor to its result.",
                    items: ["Tumor replaces normal liver", "Tumor presses on bile ducts", "Adenoma or HCC ruptures", "HCC makes hormone-like substances"],
                    options: ["Hemoperitoneum", "Polycythemia, hypoglycemia, and hypercalcemia", "Liver failure", "Obstructive jaundice"],
                    answer: [2, 3, 0, 1],
                    explanation: "Tissue replacement, compression, rupture, and paraneoplastic effects are the four ways a liver tumor causes harm." },
                { id: "r-path-silent", type: "sa", lines: 2,
                    stem: "Why are many liver tumors found incidentally?",
                    answer: "A small tumor replaces or compresses too little liver to cause symptoms, so it shows up on imaging done for something else.",
                    explanation: "Symptoms appear once a tumor is large enough to cause pain, a mass, jaundice, or liver failure." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of tumors.",
                    html: `<table><thead><tr><th>Tumor</th><th>Key facts</th></tr></thead><tbody>
<tr><td>1. Hemangioma</td><td>The most common [[benign]] liver tumor; not biopsied because of [[bleeding]] risk</td></tr>
<tr><td>2. Hepatic adenoma</td><td>Young women on [[oral contraceptives]] and anabolic steroid users; can rupture</td></tr>
<tr><td>3. FNH</td><td>Central stellate scar; no [[malignant]] potential</td></tr>
<tr><td>4. Metastases</td><td>From the colon, [[breast]], lung, and pancreas</td></tr>
<tr><td>5. HCC</td><td>Cirrhosis, HBV, HCV, and aflatoxin; the [[fibrolamellar]] variant in young patients without cirrhosis</td></tr>
<tr><td>6. Cholangiocarcinoma</td><td>PSC and liver [[flukes]]</td></tr>
<tr><td>7. Angiosarcoma</td><td>Vinyl chloride, [[arsenic]], and Thorotrast</td></tr>
</tbody></table>` },
                { id: "r-cause-match", type: "match",
                    stem: "Match each exposure to the tumor it is linked to.",
                    items: ["Aflatoxin", "Vinyl chloride", "Liver flukes", "Anabolic steroids", "Chronic HBV"],
                    options: ["Hepatic adenoma", "Cholangiocarcinoma", "HCC", "Angiosarcoma"],
                    answer: [2, 3, 1, 0, 2],
                    explanation: "HCC follows cirrhosis, HBV, HCV, and aflatoxin; angiosarcoma follows chemical exposures; cholangiocarcinoma follows PSC and flukes; adenoma follows hormones." },
                { id: "r-cause-mets", type: "mc",
                    stem: "Which statement about liver malignancy is correct?",
                    options: ["Metastases are more common than any primary liver cancer", "HCC is the most common liver malignancy overall", "Cholangiocarcinoma is the most common primary liver cancer", "Angiosarcoma is the most common cancer after vinyl chloride is banned", "Hemangiomas often turn malignant"], answer: 0,
                    explanation: "Metastases are the most common liver malignancy; HCC is the most common primary liver cancer.",
                    notes: { 1: "HCC is the most common primary liver cancer, not the most common malignancy overall.", 2: "HCC, not cholangiocarcinoma, is the most common primary.", 3: "Angiosarcoma is rare.", 4: "Hemangiomas are benign." } },
                { id: "r-cause-fibro", type: "sa", lines: 2,
                    stem: "Why would cirrhosis surveillance not find a fibrolamellar HCC?",
                    answer: "It affects young patients without cirrhosis, who are not in a surveillance program.",
                    explanation: "Surveillance is for cirrhosis or chronic HBV." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-blanks", type: "blank",
                    html: "Liver tumors are often found [[incidentally]], or cause RUQ pain or a mass and [[weight loss]]. In a patient with cirrhosis, HCC may show itself as [[worsening]] of known cirrhosis." },
                { id: "r-sx-match", type: "match",
                    stem: "Match each complication to the tumor it is typical of.",
                    items: ["Rupture and hemoperitoneum in a young woman", "Polycythemia with hypercalcemia", "Obstructive jaundice"],
                    options: ["Cholangiocarcinoma", "Hepatic adenoma", "HCC"],
                    answer: [1, 2, 0],
                    explanation: "HCC can also rupture, and any tumor that replaces enough liver can cause liver failure." },
                { id: "r-sx-poly", type: "sa", lines: 2,
                    stem: "Why is a rising hemoglobin a warning sign in a patient with cirrhosis?",
                    answer: "Cirrhosis usually causes anemia, so polycythemia suggests a paraneoplastic effect of HCC.",
                    explanation: "HCC can cause polycythemia, hypoglycemia, and hypercalcemia." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-match", type: "match",
                    stem: "Match each imaging finding to the lesion.",
                    items: ["Arterial enhancement with washout in cirrhosis", "Peripheral, nodular enhancement filling in toward the center", "A central scar in a woman aged 20–50"],
                    options: ["Focal nodular hyperplasia", "HCC", "Hemangioma"],
                    answer: [1, 2, 0],
                    explanation: "Multiphase contrast CT or MRI shows how each lesion takes up contrast over time." },
                { id: "r-dx-washout", type: "sa", lines: 2,
                    stem: "Why can HCC be diagnosed without a biopsy in cirrhosis?",
                    answer: "Arterial enhancement with washout is specific enough in cirrhosis, so biopsy adds risk without changing the diagnosis.",
                    explanation: "Increased AFP supports the diagnosis; biopsy is kept for unclear imaging." },
                { id: "r-dx-surv", type: "mc", select: 2,
                    stem: "Who should have HCC surveillance with ultrasound, with or without AFP, every 6 months?",
                    options: ["A man with HCV cirrhosis", "A woman with chronic HBV and no cirrhosis", "A woman with an FNH", "A man with a hemangioma", "A woman on oral contraceptives"], answer: [0, 1],
                    explanation: "Surveillance is for cirrhosis or chronic HBV; HBV can cause HCC even without cirrhosis.",
                    notes: { 2: "FNH has no malignant potential.", 3: "Hemangiomas are benign.", 4: "Oral contraceptives are linked to adenoma, not HCC surveillance." } },
                { id: "r-dx-order", type: "order",
                    stem: "Number the steps for a liver nodule found on surveillance in cirrhosis.",
                    items: ["Treatment by stage", "Multiphase contrast CT or MRI", "Ultrasound finds a nodule", "Arterial enhancement with washout confirms HCC"],
                    order: [2, 1, 3, 0],
                    explanation: "Surveillance finds the nodule, multiphase imaging characterizes it, and the stage decides treatment." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-adenoma", type: "blank",
                    html: "A hepatic adenoma is treated by stopping oral contraceptives or [[steroids]]. It is resected in all [[men]], and in women if over [[5 cm]] or bleeding, because of the risks of rupture and [[malignant transformation]]." },
                { id: "r-tx-hcc", type: "mc",
                    stem: "Which treatments are used for early HCC?",
                    options: ["Resection, transplant, or ablation", "TACE or systemic therapy", "Stopping oral contraceptives", "No treatment, with surveillance", "Phlebotomy"], answer: 0,
                    explanation: "Early HCC can be cured by resection, transplant within the Milan criteria, or ablation; advanced HCC is treated with TACE or systemic therapy.",
                    notes: { 1: "TACE and systemic therapy are for advanced HCC.", 2: "Stopping hormones treats adenoma.", 3: "HCC is treated once found.", 4: "Phlebotomy treats hemochromatosis." } },
                { id: "r-tx-none", type: "sa", lines: 2,
                    stem: "Why do hemangioma and FNH usually need no treatment, while a large adenoma is resected?",
                    answer: "Hemangioma and FNH are benign and rarely cause harm; an adenoma can rupture and turn malignant.",
                    explanation: "Treatment follows the risk each lesion carries." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "A nodule on a routine scan",
                keyPoints: [
                    "Chronic HBV needs surveillance even without cirrhosis, because HBV can cause HCC directly.",
                    "A nodule on ultrasound goes on to multiphase contrast CT or MRI.",
                    "Arterial enhancement with washout diagnoses HCC without biopsy in cirrhosis; outside cirrhosis, biopsy may still be needed.",
                    "Early HCC is curable by resection, transplant (Milan criteria), or ablation; the liver around it decides which.",
                    "Advanced HCC is treated with TACE or systemic therapy.",
                ],
                blocks: [
                    { passage: `<p>A 52-year-old man with chronic HBV, without cirrhosis, has had ultrasound every 6 months for 8 years. Today's scan shows a new 2.5-cm nodule in the right lobe.</p>
${labs(["Test", "Result", "Reference"], [["AFP", "35 µg/L", "&lt;10"], ["ALT", "48 U/L", "&lt;40"], ["Albumin", "40 g/L", "35–50"], ["Platelets", "210 × 10⁹/L", "150–400"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-why", type: "sa", lines: 2,
                                stem: "He has no cirrhosis. Why was he in a surveillance program?",
                                answer: "HBV can cause HCC even without cirrhosis, so chronic HBV is an indication for surveillance.",
                                explanation: "Surveillance is ultrasound, with or without AFP, every 6 months in cirrhosis or chronic HBV." },
                            { id: "s1-next", type: "mc", justify: 12,
                                stem: "Which test should come next? Briefly justify your choice.",
                                options: ["Multiphase contrast CT or MRI", "Repeat ultrasound in 6 months", "Colonoscopy", "PET scan", "Immediate resection"], answer: 0,
                                justifyAnswer: "Any liver mass is characterized by how it takes up contrast.",
                                explanation: "Multiphase contrast CT or MRI evaluates any liver mass and can show the HCC pattern.",
                                notes: { 1: "A new nodule with a rising AFP should not wait.", 2: "Colonoscopy looks for a primary when metastases are suspected.", 3: "PET is not the page's test for a liver mass.", 4: "The lesion must be characterized first." } },
                        ] },
                    { passage: `<p>MRI shows arterial-phase enhancement with washout in the 2.5-cm nodule, and no other lesions. The liver is smooth, with no signs of cirrhosis.</p>`,
                        questions: [
                            { id: "s1-biopsy", type: "sa", lines: 3,
                                stem: "The page says HCC needs no biopsy in cirrhosis. Does that rule apply to him? Explain.",
                                answer: "Not strictly: the rule is for cirrhosis, which he does not have; a biopsy may be needed if the diagnosis is uncertain, though the pattern and AFP strongly suggest HCC.",
                                explanation: "Biopsy is for unclear imaging; the specificity of washout is established in cirrhotic livers." },
                            { id: "s1-tx", type: "mc",
                                stem: "HCC is confirmed. His liver function is good. Which treatment fits best?",
                                options: ["Resection", "TACE", "Systemic therapy", "Observation", "Stopping his antivirals"], answer: 0,
                                explanation: "Early HCC is treated by resection, transplant, or ablation; with a single tumor and a healthy liver, resection is reasonable.",
                                notes: { 1: "TACE is for advanced HCC.", 2: "Systemic therapy is for advanced HCC.", 3: "Early HCC is curable and should be treated.", 4: "HBV treatment continues; stopping it would worsen liver disease." } },
                        ] },
                    { passage: `<p>Four years later, surveillance shows many nodules in both lobes, with tumor in the portal vein.</p>`,
                        questions: [
                            { id: "s1-advanced", type: "sa", lines: 2,
                                stem: "How has the treatment approach changed, and why?",
                                answer: "TACE or systemic therapy, because the disease is now advanced and too widespread for resection, transplant, or ablation.",
                                explanation: "The Milan criteria limit transplant to early HCC." },
                        ] },
                ],
            },
            {
                title: "Collapse at the gym",
                keyPoints: [
                    "A young woman on oral contraceptives with sudden RUQ pain and shock may have a ruptured hepatic adenoma.",
                    "Rupture causes hemoperitoneum; a bleeding adenoma is resected.",
                    "Hormones drive adenomas, so oral contraceptives and anabolic steroids are stopped for good.",
                    "Women are resected if the adenoma is over 5 cm or bleeding; men are resected at any size.",
                    "Hemangioma and FNH usually need no treatment, and a hemangioma is never biopsied.",
                ],
                blocks: [
                    { passage: `<p>A 27-year-old woman collapses at the gym with sudden RUQ pain. She has taken a combined oral contraceptive for 9 years. Heart rate 128, BP 84/50. Her abdomen is distended and tender.</p>
${labs(["Test", "Result", "Reference"], [["Hemoglobin", "86 g/L", "115–160"], ["ALT", "62 U/L", "&lt;35"], ["Pregnancy test", "Negative", ""]])}<p>CT: a 7-cm mass in the right lobe with surrounding hematoma and blood in the peritoneum. No central scar.</p><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-dx", type: "mc", justify: 12,
                                stem: "Which lesion is most likely? Briefly justify your choice.",
                                options: ["Hepatic adenoma", "Focal nodular hyperplasia", "Hemangioma", "Fibrolamellar HCC", "Metastasis"], answer: 0,
                                justifyAnswer: "Young woman on long-term contraceptives; large mass that ruptured; no scar.",
                                explanation: "Hepatic adenoma affects young women on oral contraceptives and can rupture and bleed, causing hemoperitoneum.",
                                notes: { 1: "FNH has a central scar and does not rupture.", 2: "Hemangiomas rarely bleed unless biopsied.", 3: "Fibrolamellar HCC affects young patients but is not linked to contraceptives.", 4: "She has no primary tumor and is young." } },
                            { id: "s2-shock", type: "sa", lines: 2,
                                stem: "Explain her low BP and fast heart rate.",
                                answer: "The adenoma has ruptured and bled into the peritoneum (hemoperitoneum), causing hemorrhagic shock.",
                                explanation: "Rupture is one of the four ways a liver tumor causes harm." },
                        ] },
                    { passage: `<p>She is resuscitated and the bleeding adenoma is resected. Histology confirms hepatic adenoma, without malignancy. At follow-up she asks about contraception, and mentions that her brother, a 30-year-old bodybuilder, has been told he has a 3-cm "benign liver lump" while using anabolic steroids.</p>`,
                        questions: [
                            { id: "s2-ocp", type: "sa", lines: 2,
                                stem: "What should she be told about the combined oral contraceptive, and why?",
                                answer: "Do not restart it; oral contraceptives drive adenoma growth, so a non-hormonal method is preferred.",
                                explanation: "Stopping oral contraceptives or steroids is the first treatment for adenoma." },
                            { id: "s2-brother", type: "mc", select: 2,
                                stem: "If her brother's lump is a hepatic adenoma, which steps are right?",
                                options: ["Stop the anabolic steroids", "Resect the adenoma, although it is under 5 cm", "Observe, since it is under 5 cm", "Biopsy to confirm before deciding", "Continue steroids and repeat imaging yearly"], answer: [0, 1],
                                explanation: "Adenomas are resected in all men, whatever their size, and the steroids driving it are stopped.",
                                notes: { 2: "The 5-cm threshold applies to women.", 3: "Imaging and history identify an adenoma; resection is indicated in men.", 4: "Steroids keep driving the adenoma." } },
                            { id: "s2-other", type: "sa", lines: 2,
                                stem: "Her CT also showed a 2-cm lesion with peripheral, nodular enhancement filling in toward the center. What should be done about it, and why?",
                                answer: "Nothing: it is a hemangioma, which usually needs no treatment, and it must not be biopsied because it can bleed.",
                                explanation: "Hemangioma is the most common benign liver tumor." },
                        ] },
                ],
            },
            {
                title: "Yellow, itchy, and thinner",
                keyPoints: [
                    "PSC is a major risk factor for cholangiocarcinoma, which presents with obstructive jaundice.",
                    "Obstruction gives pale stools and dark urine, because conjugated bilirubin cannot reach the gut.",
                    "Many scattered lesions in a non-cirrhotic liver suggest metastases; look for the primary.",
                    "Metastases and cholangiocarcinoma are treated according to the primary and stage, with resection if possible.",
                    "Occupational history matters: vinyl chloride, arsenic, and Thorotrast cause angiosarcoma.",
                ],
                blocks: [
                    { passage: `<p>A 48-year-old man with ulcerative colitis and PSC has 6 weeks of itch, jaundice, pale stools, dark urine, and 5 kg weight loss. He has no fever.</p>
${labs(["Test", "Result", "Reference"], [["Bilirubin", "165 µmol/L", "&lt;20"], ["ALP", "780 U/L", "30–110"], ["GGT", "690 U/L", "&lt;50"], ["ALT", "95 U/L", "&lt;40"], ["AFP", "5 µg/L", "&lt;10"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-pattern", type: "sa", lines: 2,
                                stem: "What pattern do his results show, and how does it explain his pale stools and dark urine?",
                                answer: "Cholestatic: bile flow is blocked, so bilirubin does not reach the gut (pale stools) and conjugated bilirubin spills into the urine.",
                                explanation: "ALP and GGT rise far more than ALT in obstruction." },
                            { id: "s3-cause", type: "mc", justify: 12,
                                stem: "Which tumor is most likely? Briefly justify your choice.",
                                options: ["Cholangiocarcinoma", "HCC", "Hemangioma", "Focal nodular hyperplasia", "Hepatic adenoma"], answer: 0,
                                justifyAnswer: "PSC is a major risk; it narrows bile ducts, causing obstructive jaundice.",
                                explanation: "Cholangiocarcinoma is bile duct cancer linked to PSC and liver flukes.",
                                notes: { 1: "HCC usually arises in cirrhosis with a raised AFP, and does not typically cause obstruction first.", 2: "Hemangiomas are benign and usually silent.", 3: "FNH is benign and does not obstruct ducts.", 4: "Adenoma affects women on hormones and can rupture." } },
                        ] },
                    { passage: `<p>Multiphase CT shows a mass at the hilum narrowing the bile ducts, with dilated ducts above it and no spread. He is referred for surgery.</p>`,
                        questions: [
                            { id: "s3-tx", type: "sa", lines: 2,
                                stem: "What decides whether his tumor can be treated with surgery?",
                                answer: "Its stage: resection is done if possible, when the tumor has not spread.",
                                explanation: "Metastases and cholangiocarcinoma are treated according to the primary tumor and stage." },
                        ] },
                    { passage: `<p>In the same clinic, a 70-year-old retired worker from a PVC plant has weight loss and a large liver. Imaging shows a liver tumor, and biopsy shows a malignant tumor of blood vessel cells. A 66-year-old woman has many round lesions of different sizes in a smooth liver, with a raised CEA.</p>`,
                        questions: [
                            { id: "s3-match", type: "mc", select: 2,
                                stem: "Which statements about these two patients are correct?",
                                options: ["The retired worker most likely has angiosarcoma from vinyl chloride", "The woman's lesions most likely come from a colorectal primary", "The worker's tumor is most likely fibrolamellar HCC", "The woman needs HCC surveillance in 6 months", "Both tumors are benign"], answer: [0, 1],
                                explanation: "Angiosarcoma is linked to vinyl chloride, arsenic, and Thorotrast; many lesions with a high CEA suggest colorectal metastases, so the primary is sought with colonoscopy.",
                                notes: { 2: "Fibrolamellar HCC affects young patients and is a tumor of hepatocytes, not blood vessels.", 3: "Her lesions need explaining now; surveillance is for cirrhosis or HBV.", 4: "Both are malignant." } },
                        ] },
                ],
            },
        ],
    },
};
