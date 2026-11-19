// Worksheet for the Hepatocellular Injury: Autoimmune Causes page, built by tools/build-worksheet-pdf.mjs gi hepatic-autoimmune.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Hepatocellular Injury: Autoimmune Causes",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From immune attack to treatment",
        top: "Immune-mediated bile duct damage → [[cholestasis]] → retained bile salts cause hepatocellular injury",
        rows: ["Cause", "Typical patient and antibody", "What is attacked", "Diagnosis", "Treatment"],
        columns: [
            ["1. PBC", "Middle-aged woman; [[AMA]] in over 90%", "Small intrahepatic ducts: T cells and granulomas (florid duct lesion) → [[ductopenia]]", "AMA; biopsy only if AMA-negative or unclear", "[[UDCA]]; add obeticholic acid if no response"],
            ["2. PSC", "Young to middle-aged man; p-ANCA; most have [[ulcerative colitis]]", "Medium and large ducts: [[onion-skin]] fibrosis → strictures", "MRCP: [[beaded]] ducts", "ERCP with balloon dilation of a dominant stricture; cancer surveillance"],
            ["3–4. Autoimmune hepatitis", "Type 1: young women, ANA and [[ASMA]], high IgG. Type 2: children, anti-LKM1", "Hepatocytes", "Serology and IgG", "[[Corticosteroids]], with or without azathioprine"],
            ["5. IgG4-related", "Raised IgG4", "Bile ducts; mimics PSC", "IgG4", "Corticosteroids: steroid-responsive"],
        ],
        span: "Workup: cholestatic pattern (markedly increased [[ALP]] and GGT) → RUQ [[ultrasound]] to rule out stones or a mass → serology. For every cause: fat-soluble vitamins, calcium and vitamin D, cholestyramine for itch, and [[transplant]] for end-stage disease",
        chains: [
            { label: "Bile builds up", steps: [["Bile salts in blood", "[[Pruritus]], often first"], ["Conjugated bilirubin", "Jaundice and dark urine"], ["Cholesterol", "[[Xanthomas]]"], ["Toxic bile salts", "Fibrosis → biliary cirrhosis → HCC"]] },
            { label: "Less bile in the gut", steps: [["Fat malabsorption", "[[Steatorrhea]] and pale stools"], ["Vitamins A, D, E, K", "Deficiencies"], ["Low vitamin D", "[[Osteoporosis]]"], ["PSC only", "Cholangitis and [[cholangiocarcinoma]]"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "In PBC, T cells destroy the [[small intrahepatic]] bile ducts; in PSC, onion-skin fibrosis causes [[strictures]] of medium and large ducts. Either way bile builds up, raising bile salts in blood, with [[pruritus]], and conjugated bilirubin, with [[jaundice]]. Retained bile salts damage hepatocytes, and ongoing injury leads to [[cirrhosis]]." },
                { id: "r-path-why", type: "sa", lines: 2,
                    stem: "PBC and PSC are diseases of the bile ducts. Why do they also injure hepatocytes?",
                    answer: "Bile cannot drain, so toxic bile salts are retained in the liver and damage the hepatocytes.",
                    explanation: "Retained bile salts cause hepatocellular injury, then fibrosis and cirrhosis." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the comparison.",
                    html: `<table><thead><tr><th>Feature</th><th>PBC</th><th>PSC</th></tr></thead><tbody>
<tr><td>Typical patient</td><td>Middle-aged [[woman]]</td><td>Young to middle-aged [[man]]</td></tr>
<tr><td>Bile ducts</td><td>Small, [[intrahepatic]] only</td><td>Medium and large, intra- and [[extrahepatic]]</td></tr>
<tr><td>Antibody</td><td>AMA</td><td>[[p-ANCA]]</td></tr>
<tr><td>Cancer risk</td><td>[[HCC]] once cirrhotic</td><td>HCC, cholangiocarcinoma, gallbladder, and [[colorectal]] cancer</td></tr>
</tbody></table>` },
                { id: "r-cause-assoc", type: "match",
                    stem: "Match each associated condition to PBC or PSC.",
                    items: ["Ulcerative colitis", "Hashimoto thyroiditis", "CREST scleroderma", "Glomerulonephritis and vasculitis", "Sjögren syndrome"],
                    options: ["PBC", "PSC"],
                    answer: [1, 0, 0, 1, 0],
                    explanation: "PBC goes with other autoimmune diseases; PSC goes with other p-ANCA-associated diseases." },
                { id: "r-cause-other", type: "match",
                    stem: "Match each marker to its condition.",
                    items: ["ANA and ASMA with high IgG", "Anti-LKM1", "Raised IgG4", "AMA"],
                    options: ["IgG4-related sclerosing cholangitis", "Primary biliary cholangitis", "Autoimmune hepatitis type 1", "Autoimmune hepatitis type 2"],
                    answer: [2, 3, 0, 1],
                    explanation: "Autoantibodies point to the cause once ultrasound has ruled out obstruction." },
                { id: "r-cause-beaded", type: "sa", lines: 2,
                    stem: "Why do the bile ducts look \"beaded\" in PSC?",
                    answer: "Fibrotic strictures alternate with dilated segments where bile backs up behind them.",
                    explanation: "Strictures alternating with dilations give the beaded ducts on MRCP." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-match", type: "match",
                    stem: "Match each feature to its cause.",
                    items: ["Pruritus", "Xanthomas", "Steatorrhea", "Osteoporosis", "Recurrent bacterial cholangitis"],
                    options: ["Low vitamin D absorption", "Bile salts in the blood", "Bile stagnating behind strictures", "Raised blood cholesterol", "Less bile reaching the gut"],
                    answer: [1, 3, 4, 0, 2],
                    explanation: "Bile building up, less bile in the gut, toxic bile salts, and (in PSC) duct inflammation explain every feature." },
                { id: "r-sx-inr", type: "sa", lines: 2,
                    stem: "Why can cholestasis raise the INR before the liver is failing?",
                    answer: "Less bile in the gut means poor absorption of vitamin K, which is needed to make clotting factors.",
                    explanation: "Fat-soluble vitamin deficiencies (A, D, E, K) follow decreased bile reaching the gut." },
                { id: "r-sx-psc", type: "mc", select: 2,
                    stem: "Which complications arise from chronic duct inflammation in PSC but not PBC?",
                    options: ["Cholangiocarcinoma", "Recurrent bacterial cholangitis", "Pruritus", "Fat-soluble vitamin deficiency", "Biliary cirrhosis"], answer: [0, 1],
                    explanation: "Duct inflammation in PSC causes cholangiocarcinoma and recurrent cholangitis; the others are shared by both.",
                    notes: { 2: "Pruritus comes from bile salts in both.", 3: "Vitamin deficiency follows less bile in the gut in both.", 4: "Biliary cirrhosis can follow both." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-pattern", type: "blank",
                    html: "The cholestatic pattern is a markedly increased [[ALP]], increased [[GGT]], conjugated bilirubin increased [[later]], and only mildly increased AST and ALT." },
                { id: "r-dx-order", type: "order",
                    stem: "Number the steps in working up a cholestatic pattern in order.",
                    items: ["Autoimmune serology", "Confirm the cholestatic LFT pattern", "MRCP if p-ANCA or IBD; biopsy if AMA-negative or unclear", "RUQ ultrasound"],
                    order: [1, 3, 0, 2],
                    explanation: "Ultrasound rules out extrahepatic obstruction before serology looks for the cause." },
                { id: "r-dx-why-us", type: "sa", lines: 2,
                    stem: "Why is a normal ultrasound expected in PBC?",
                    answer: "PBC destroys only small intrahepatic ducts, too small to see, so the larger ducts are not dilated.",
                    explanation: "Ultrasound rules out extrahepatic obstruction such as gallstones or a mass." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each goal to its treatment.",
                    items: ["Decrease liver injury in PBC", "PBC not responding to UDCA", "Relieve pruritus", "Open a dominant PSC stricture", "End-stage disease"],
                    options: ["Cholestyramine", "Liver transplant", "UDCA", "ERCP with balloon dilation", "Obeticholic acid"],
                    answer: [2, 4, 0, 3, 1],
                    explanation: "Each treatment targets a different consequence of cholestasis." },
                { id: "r-tx-steroid", type: "mc",
                    stem: "Which of these conditions responds to corticosteroids?",
                    options: ["IgG4-related sclerosing cholangitis", "Primary sclerosing cholangitis with ulcerative colitis", "Primary biliary cholangitis", "Cholangiocarcinoma", "Biliary cirrhosis"], answer: 0,
                    explanation: "IgG4-related disease and autoimmune hepatitis are treated with corticosteroids; PSC and PBC are not.",
                    notes: { 1: "PSC does not respond to steroids, which is why telling it from IgG4 disease matters.", 2: "PBC is treated with UDCA.", 3: "Cancer needs oncological treatment.", 4: "Cirrhosis does not reverse with steroids." } },
                { id: "r-tx-chol", type: "sa", lines: 2,
                    stem: "How does cholestyramine relieve itch?",
                    answer: "It binds bile salts in the gut so they are excreted rather than reabsorbed, lowering bile salts in the blood.",
                    explanation: "Cholestyramine is a bile acid sequestrant." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "A routine blood test",
                keyPoints: [
                    "A cholestatic pattern in a young man with UC and normal ultrasound points to PSC; MRCP showing beaded ducts confirms it.",
                    "Bile stagnating behind strictures causes recurrent bacterial cholangitis.",
                    "A dominant stricture is opened by ERCP with balloon dilation, after cancer is considered.",
                    "PSC needs surveillance for cholangiocarcinoma, gallbladder cancer, and colorectal cancer.",
                    "PSC does not respond to steroids, unlike IgG4-related disease.",
                ],
                blocks: [
                    { passage: `<p>A 29-year-old man with ulcerative colitis, well controlled on mesalazine, has abnormal LFTs on routine monitoring. He feels well.</p>
${labs(["Test", "Result"], [["ALP (U/L)", "410"], ["GGT (U/L)", "380"], ["ALT / AST (U/L)", "62 / 48"], ["Bilirubin (µmol/L)", "16"], ["Ultrasound", "Normal liver; no gallstones; ducts not clearly dilated"], ["p-ANCA", "Positive"], ["AMA", "Negative"], ["IgG4", "Normal"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-pattern", type: "sa", lines: 2,
                                stem: "Describe his LFT pattern and what it tells you.",
                                answer: "Cholestatic: ALP and GGT far above AST and ALT, so bile flow is impaired; bilirubin is still normal.",
                                explanation: "A cholestatic pattern is a markedly increased ALP, increased GGT, and mildly increased AST and ALT." },
                            { id: "s1-next", type: "mc", justify: 12,
                                stem: "Which test should come next? Briefly justify your choice.",
                                options: ["MRCP", "Liver biopsy", "AMA repeated in 3 months", "Corticosteroid trial", "HIDA scan"], answer: 0,
                                justifyAnswer: "UC and p-ANCA suggest PSC; MRCP shows beaded ducts.",
                                explanation: "p-ANCA or IBD is confirmed with MRCP: beaded bile ducts mean PSC.",
                                notes: { 1: "Biopsy is not needed when MRCP can show the ducts.", 2: "AMA is negative, and PSC is the likely diagnosis.", 3: "PSC does not respond to steroids.", 4: "A HIDA scan looks for cholecystitis." } },
                        ] },
                    { passage: `<p>MRCP shows multiple short strictures alternating with dilated segments in the intra- and extrahepatic ducts. Eighteen months later he presents with fever of 39.2 °C, rigors, RUQ pain, and jaundice.</p>
${labs(["Test", "Result"], [["WCC (×10<sup>9</sup>/L)", "17.4"], ["Bilirubin (µmol/L)", "88"], ["ALP (U/L)", "760"], ["Blood cultures", "E. coli"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-cholangitis", type: "sa", lines: 3,
                                stem: "Name this complication and explain why PSC makes it likely.",
                                answer: "Bacterial cholangitis: bile stagnates behind the strictures, so gut bacteria can grow and ascend the ducts.",
                                explanation: "Chronic bile duct inflammation in PSC causes recurrent bacterial cholangitis." },
                        ] },
                    { passage: `<p>After antibiotics he recovers, but his jaundice persists. Repeat MRCP shows a new tight stricture of the common bile duct with dilated ducts above it. CA 19-9 is normal, and brushings at ERCP are benign. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-stricture", type: "mc", justify: 15,
                                stem: "What should be done for the stricture? Briefly justify your choice.",
                                options: ["Balloon dilation at ERCP", "High-dose corticosteroids", "Liver transplant now", "Obeticholic acid", "Cholestyramine and observation"], answer: 0,
                                justifyAnswer: "A benign dominant stricture is blocking bile flow; dilation reopens it.",
                                explanation: "A dominant stricture in PSC is opened with ERCP and balloon dilation.",
                                notes: { 1: "PSC does not respond to steroids.", 2: "Transplant is for end-stage disease.", 3: "Obeticholic acid is for PBC.", 4: "Itch relief leaves the block in place." } },
                            { id: "s1-surveil", type: "sa", lines: 3,
                                stem: "Which three cancers does he need surveillance for, and why is each a risk?",
                                answer: "Cholangiocarcinoma and gallbladder cancer, from chronic duct inflammation; colorectal cancer, from his ulcerative colitis.",
                                explanation: "PSC needs surveillance for cholangiocarcinoma, gallbladder, and colorectal cancer." },
                        ] },
                ],
            },
            {
                title: "Itching for a year",
                keyPoints: [
                    "Pruritus and fatigue with a cholestatic pattern in a middle-aged woman with another autoimmune disease suggest PBC; AMA confirms it.",
                    "Less bile in the gut causes fat malabsorption and deficiency of vitamins A, D, E, and K.",
                    "A raised INR that corrects with vitamin K reflects malabsorption, not liver failure.",
                    "UDCA is first line; obeticholic acid is added if there is no response.",
                    "Biliary cirrhosis brings portal hypertension and HCC risk, and end-stage disease needs transplant.",
                ],
                blocks: [
                    { passage: `<p>A 51-year-old woman with Hashimoto thyroiditis and CREST scleroderma has itched for a year and is always tired. She has noticed pale, floating stools and has trouble seeing in dim light.</p>
${labs(["Test", "Result"], [["ALP (U/L)", "680"], ["GGT (U/L)", "520"], ["ALT / AST (U/L)", "70 / 58"], ["Bilirubin (µmol/L)", "26"], ["Albumin (g/L)", "40"], ["INR", "1.6"], ["Ultrasound", "No duct dilation; no stones or mass"], ["AMA", "Positive"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-dx", type: "sa", lines: 2,
                                stem: "What is the diagnosis, and which features support it?",
                                answer: "PBC: a middle-aged woman with autoimmune disease, pruritus, a cholestatic pattern, normal ducts, and a positive AMA.",
                                explanation: "AMA is positive in over 90%; biopsy is needed only if AMA-negative or unclear." },
                            { id: "s2-vision", type: "sa", lines: 2,
                                stem: "Explain her pale stools and poor night vision.",
                                answer: "Less bile reaches the gut, so fat is not absorbed (steatorrhea) and neither is vitamin A, needed for night vision.",
                                explanation: "Fat malabsorption causes steatorrhea, pale stools, and fat-soluble vitamin deficiencies." },
                            { id: "s2-inr", type: "mc", justify: 15,
                                stem: "Her albumin is normal but her INR is 1.6. What is the most likely reason? Briefly justify your choice.",
                                options: ["Vitamin K malabsorption", "End-stage liver failure", "Disseminated intravascular coagulation", "An effect of AMA on clotting", "Hemolysis"], answer: 0,
                                justifyAnswer: "Normal albumin shows preserved synthesis; poor bile flow blocks vitamin K absorption.",
                                explanation: "Fat-soluble vitamin deficiency includes vitamin K; parenteral vitamin K should correct the INR.",
                                notes: { 1: "Liver failure would lower albumin too.", 2: "Nothing suggests DIC.", 3: "AMA is a marker and does not affect clotting.", 4: "Hemolysis does not raise the INR." } },
                        ] },
                    { passage: `<p>She starts UDCA, vitamin replacement, calcium and vitamin D, and cholestyramine.</p>
${labs(["", "Start", "6 months", "12 months"], [["ALP (U/L)", "680", "250", "160"], ["Bilirubin (µmol/L)", "26", "18", "15"], ["INR", "1.6", "1.1", "1.0"], ["Itch (0–10)", "8", "4", "2"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-response", type: "sa", lines: 2,
                                stem: "Has she responded to UDCA? What would have been added if she had not?",
                                answer: "Yes: ALP and bilirubin have fallen. Without a response, obeticholic acid would be added.",
                                explanation: "PBC not responding to UDCA: add obeticholic acid, a farnesoid X receptor agonist." },
                            { id: "s2-timing", type: "sa", lines: 2,
                                stem: "She takes cholestyramine with her UDCA at breakfast. What should she change, and why?",
                                answer: "Take them at different times, because cholestyramine binds UDCA in the gut and stops it being absorbed.",
                                explanation: "Bile acid sequestrants bind other drugs taken at the same time." },
                        ] },
                    { passage: `<p>Fifteen years later, after years of poor adherence, she has a small, nodular liver, ascites, and esophageal varices. Her bilirubin is 140 µmol/L and albumin 26 g/L.</p>`,
                        questions: [
                            { id: "s2-late", type: "mc", select: 2,
                                stem: "Which two steps belong in her care now?",
                                options: ["Assessment for liver transplant", "Ultrasound surveillance for HCC", "ERCP with balloon dilation", "Starting corticosteroids", "Screening colonoscopy for PSC"], answer: [0, 1],
                                explanation: "Biliary cirrhosis with decompensation is end-stage disease, needing transplant assessment; PBC carries HCC risk once cirrhotic.",
                                notes: { 2: "Dilation is for a dominant PSC stricture.", 3: "Steroids do not treat PBC.", 4: "She does not have PSC." } },
                        ] },
                ],
            },
            {
                title: "Painless jaundice at 66",
                keyPoints: [
                    "IgG4-related sclerosing cholangitis mimics PSC and can mimic cancer.",
                    "A raised IgG4, especially with a diffusely enlarged pancreas and no mass, points to it.",
                    "It is steroid-responsive, which PSC is not, so telling them apart changes treatment.",
                ],
                blocks: [
                    { passage: `<p>A 66-year-old man has 4 weeks of painless jaundice, itch, and dark urine. He has no IBD.</p>
${labs(["Test", "Result"], [["Bilirubin (µmol/L)", "142"], ["ALP (U/L)", "690"], ["IgG4 (g/L)", "4.8 (reference under 1.35)"], ["CA 19-9 (U/mL)", "48"], ["p-ANCA", "Negative"], ["AMA", "Negative"]])}
<p>CT and MRCP: strictures of the common bile duct and intrahepatic ducts; diffusely enlarged, sausage-shaped pancreas without a mass. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-dx", type: "mc", justify: 15,
                                stem: "What is the most likely diagnosis? Briefly justify your choice.",
                                options: ["IgG4-related sclerosing cholangitis", "Primary sclerosing cholangitis", "Primary biliary cholangitis", "Autoimmune hepatitis type 1", "Choledocholithiasis with an impacted common duct stone"], answer: 0,
                                justifyAnswer: "Duct strictures with markedly raised IgG4, a diffusely enlarged pancreas, and no IBD.",
                                explanation: "IgG4-related sclerosing cholangitis mimics PSC and is steroid-responsive.",
                                notes: { 1: "PSC typically affects younger men with UC and has a normal IgG4.", 2: "PBC affects only small intrahepatic ducts, with AMA.", 3: "Autoimmune hepatitis is hepatocellular.", 4: "No stones are described, and stones do not raise IgG4." } },
                            { id: "s3-tx", type: "sa", lines: 2,
                                stem: "What treatment should he receive, and why does it matter that this is not PSC?",
                                answer: "Corticosteroids; IgG4-related disease responds to them, while PSC does not, so the strictures may resolve.",
                                explanation: "IgG4-related disease is treated with corticosteroids." },
                        ] },
                    { passage: `<p>After 4 weeks of prednisolone, his bilirubin is 30 µmol/L, and repeat MRCP shows the strictures have largely resolved. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-response", type: "sa", lines: 2,
                                stem: "How does this response support the diagnosis?",
                                answer: "Rapid resolution with steroids fits IgG4-related disease; PSC strictures and cancer would not resolve.",
                                explanation: "Steroid response is a defining feature of IgG4-related sclerosing cholangitis." },
                        ] },
                ],
            },
        ],
    },
};
