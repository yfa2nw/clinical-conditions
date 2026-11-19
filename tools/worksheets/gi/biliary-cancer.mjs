// Worksheet for the Biliary Tract and Periampullary Malignancies page, built by tools/build-worksheet-pdf.mjs gi biliary-cancer.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Biliary Tract and Periampullary Malignancies",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From tumor to treatment",
        top: "A tumor in or around the bile ducts blocks bile flow [[gradually]] → [[painless]] obstructive jaundice, with weight loss",
        rows: ["Tumor", "Risk factors", "What stands out", "Treatment"],
        columns: [
            ["1. Pancreatic head adenocarcinoma", "[[Smoking]], chronic pancreatitis, and diabetes", "Most common periampullary cancer; double duct sign", "[[Pancreaticoduodenectomy]] (Whipple) if resectable"],
            ["2–3. Ampullary and duodenal adenocarcinoma", "[[FAP]] and Lynch syndrome; duodenal also celiac disease", "Ampullary blocks bile early: found earlier, may be [[intermittent]]. Duodenal: bleeding or obstruction", "Whipple procedure if resectable"],
            ["4. Pancreatic neuroendocrine tumors", "[[MEN1]]", "From islet cells; may secrete hormones: insulinoma, gastrinoma, [[vipoma]], glucagonoma", "Resection if resectable"],
            ["5. Cholangiocarcinoma", "PSC, liver flukes ([[Clonorchis]]), choledochal cysts, hepatitis B or C, cirrhosis", "Perihilar (Klatskin) ~[[50]]%, distal ~40%, intrahepatic ~10%", "Resection, often with part of the [[liver]]; transplant in selected cases"],
            ["6. Gallbladder carcinoma", "Gallstones (especially over [[3]] cm), porcelain gallbladder, polyps over 1 cm, PSC", "Older women; over half found by chance after [[cholecystectomy]]", "Cholecystectomy alone if confined to the [[mucosa]]; otherwise with liver resection and nodes"],
        ],
        span: "Workup: LFTs → CA 19-9 and CEA (not for [[screening]]) → ultrasound, then CT or MRCP → tissue by ERCP brushings or [[endoscopic ultrasound]] biopsy. Unresectable: biliary [[stent]] and chemotherapy",
        chains: [
            { label: "Courvoisier gallbladder", steps: [["Tumor below the [[cystic duct]]", "Pancreatic head, ampulla, distal CBD"], ["Slow, steady block", "Bile cannot reach the gut: [[pale]] stools"], ["Back pressure", "Jaundice, pruritus, dark urine"], ["Healthy, stretchy wall", "Enlarged, palpable, [[nontender]] gallbladder"]] },
            { label: "Complications", steps: [["Stasis behind the tumor or a blocked stent", "Ascending [[cholangitis]]"], ["Spread", "Liver metastases"], ["Growth into the duodenum", "Gastric [[outlet]] obstruction"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "A tumor below the cystic duct causes a slow, steady [[blockage]]. Bile cannot reach the gut, causing [[pale stools]], and builds up behind the block, causing painless jaundice, [[pruritus]], and [[dark urine]]. Because the gallbladder wall is healthy and stretchy, it becomes [[enlarged]], palpable, and nontender." },
                { id: "r-path-order", type: "order",
                    stem: "Number these steps in order.",
                    items: ["Back pressure: jaundice, pruritus, and dark urine", "Tumor growth below the cystic duct", "Enlarged, palpable, nontender gallbladder", "Bile duct obstruction: pale stools"],
                    order: [1, 3, 0, 2],
                    explanation: "Tumor growth, obstruction, back pressure, then the Courvoisier gallbladder." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-match", type: "match",
                    stem: "Match each risk factor to the tumor it is most linked with on the page.",
                    items: ["Smoking and chronic pancreatitis", "MEN1", "Liver flukes (Clonorchis)", "Porcelain gallbladder and stones over 3 cm", "Celiac disease"],
                    options: ["Cholangiocarcinoma", "Duodenal adenocarcinoma", "Pancreatic head adenocarcinoma", "Gallbladder carcinoma", "Pancreatic neuroendocrine tumor"],
                    answer: [2, 4, 0, 3, 1],
                    explanation: "Each tumor has its own risk factors; PSC is shared by cholangiocarcinoma and gallbladder carcinoma, and FAP and Lynch syndrome by ampullary and duodenal cancers." },
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of cholangiocarcinoma sites.",
                    html: `<table><thead><tr><th>Site</th><th>Share</th></tr></thead><tbody>
<tr><td>[[Perihilar]] (Klatskin)</td><td>~50%</td></tr>
<tr><td>Distal</td><td>~[[40]]%</td></tr>
<tr><td>[[Intrahepatic]]</td><td>~10%</td></tr>
</tbody></table>` },
                { id: "r-cause-ampulla", type: "sa", lines: 2,
                    stem: "Why is ampullary adenocarcinoma found earlier than pancreatic head adenocarcinoma?",
                    answer: "It sits where the CBD drains, so even a small tumor blocks bile and causes jaundice.",
                    explanation: "Earlier diagnosis gives ampullary cancer a better prognosis." },
                { id: "r-cause-select", type: "mc", select: 2,
                    stem: "Which two raise the risk of cholangiocarcinoma through chronic bile duct injury?",
                    options: ["PSC", "Choledochal cysts", "MEN1", "Smoking", "FAP"], answer: [0, 1],
                    explanation: "PSC raises the risk of both cholangiocarcinoma and gallbladder carcinoma; choledochal cysts raise the risk of cholangiocarcinoma.",
                    notes: { 2: "MEN1 is linked to pancreatic neuroendocrine tumors.", 3: "Smoking is a risk factor for pancreatic head cancer on the page.", 4: "FAP is linked to ampullary and duodenal cancer." } },
                { id: "r-cause-pnet", type: "match",
                    stem: "Match each pancreatic neuroendocrine tumor to what it causes.",
                    items: ["Insulinoma", "Gastrinoma", "Vipoma", "Glucagonoma"],
                    options: ["Recurrent peptic ulcers", "Fasting hypoglycemia", "Diabetes and a rash", "Watery diarrhea with hypokalemia"],
                    answer: [1, 0, 3, 2],
                    explanation: "Each tumor's symptoms come from the hormone its islet cells secrete." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-courvoisier", type: "blank",
                    html: "Courvoisier law: painless jaundice with a [[palpable]] gallbladder is unlikely to be caused by [[gallstones]], so suspect [[malignancy]]. In gallstone obstruction, repeated inflammation has already [[scarred]] the gallbladder, so it is shrunken and cannot distend." },
                { id: "r-sx-hilar", type: "sa", lines: 3,
                    stem: "A patient has painless jaundice from a perihilar cholangiocarcinoma. Why is the gallbladder not palpable?",
                    answer: "The tumor blocks above the cystic duct, so bile cannot reach the gallbladder to fill and distend it.",
                    explanation: "Courvoisier law applies to tumors below the cystic duct: the pancreatic head, ampulla, and distal CBD." },
                { id: "r-sx-comp", type: "mc",
                    stem: "Which complication is most likely when a patient with a biliary stent for an unresectable tumor develops fever and returning jaundice?",
                    options: ["Ascending cholangitis", "Gastric outlet obstruction", "Liver metastases", "Acute pancreatitis", "Bouveret syndrome"], answer: 0,
                    explanation: "A blocked stent lets bile stagnate again, and bacteria ascend: ascending cholangitis, one of the page's complications.",
                    notes: { 1: "Gastric outlet obstruction causes vomiting, not fever with jaundice.", 2: "Metastases do not cause fever with returning jaundice in this way.", 3: "Pancreatitis causes epigastric pain radiating to the back.", 4: "Bouveret syndrome needs a gallstone through a fistula." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-table", type: "blank",
                    stem: "Complete the table.",
                    html: `<table><thead><tr><th>For</th><th>Obtain</th></tr></thead><tbody>
<tr><td>Cholestasis</td><td>[[LFTs]]</td></tr>
<tr><td>Tumor markers</td><td>[[CA 19-9]] and CEA: not for screening</td></tr>
<tr><td>Imaging</td><td>Ultrasound, then CT or [[MRCP]]: double duct sign</td></tr>
<tr><td>Tissue diagnosis</td><td>ERCP [[brushings]] or endoscopic ultrasound biopsy</td></tr>
</tbody></table>` },
                { id: "r-dx-double", type: "sa", lines: 2,
                    stem: "Which two ducts are dilated in the double duct sign, and why does that place the tumor at the ampulla or pancreatic head?",
                    answer: "The CBD and pancreatic duct; they meet only at the ampulla and run through the pancreatic head, so one mass there blocks both.",
                    explanation: "The double duct sign supports a periampullary tumor." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each tumor to its treatment if resectable, or the plan if not.",
                    items: ["Resectable pancreatic head cancer", "Perihilar cholangiocarcinoma", "Gallbladder carcinoma confined to the mucosa", "Gallbladder carcinoma beyond the mucosa", "Unresectable disease with jaundice"],
                    options: ["Cholecystectomy alone", "Biliary stent and chemotherapy", "Pancreaticoduodenectomy", "Cholecystectomy with liver resection and lymph node removal", "Bile duct resection, often with part of the liver"],
                    answer: [2, 4, 0, 3, 1],
                    explanation: "Surgery follows the tumor's site and depth; a stent relieves jaundice when surgery cannot cure." },
                { id: "r-tx-whipple", type: "sa", lines: 2,
                    stem: "Why does a Whipple procedure remove the pancreatic head, duodenum, and distal CBD together?",
                    answer: "They lie together around the ampulla, so a periampullary tumor cannot be cleared without removing all three.",
                    explanation: "The same operation treats periampullary tumors 1–3." },
                { id: "r-tx-stent", type: "mc",
                    stem: "What is the purpose of a biliary stent in unresectable disease?",
                    options: ["To relieve jaundice and itch by restoring bile flow", "To cure the tumor by compressing it", "To prevent liver metastases", "To deliver chemotherapy into the tumor", "To allow a later cholecystectomy"], answer: 0,
                    explanation: "A stent bridges the obstruction so bile drains; chemotherapy treats the cancer.",
                    notes: { 1: "A stent does not treat the tumor.", 2: "A stent has no effect on spread.", 3: "Chemotherapy is given systemically.", 4: "Cholecystectomy does not relieve CBD obstruction." } },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Itching for a month",
                keyPoints: [
                    "Painless, progressive jaundice with a palpable, nontender gallbladder points to a tumor below the cystic duct.",
                    "A cholestatic pattern, pale stools, and dark urine show obstruction; new diabetes and smoking point to the pancreatic head.",
                    "The double duct sign places the tumor at the ampulla or pancreatic head.",
                    "Tumor markers support but do not diagnose; tissue comes from endoscopic ultrasound biopsy or ERCP brushings.",
                    "Resectable periampullary tumors are treated by Whipple procedure; unresectable disease by stent and chemotherapy.",
                ],
                blocks: [
                    { passage: `<p>A 71-year-old woman has a month of generalized itch, then yellow eyes, dark urine, and pale, floating stools. She has lost 6 kg. She was diagnosed with type 2 diabetes 4 months ago. She has smoked for 50 years. She has no pain. A smooth, nontender, pear-shaped mass is felt below the right costal margin.</p>
<table><thead><tr><th>Test</th><th>Week 1</th><th>Week 3</th><th>Reference</th></tr></thead><tbody>
<tr><td>Bilirubin (µmol/L)</td><td>64</td><td>148</td><td>Under 20</td></tr>
<tr><td>ALP (IU/L)</td><td>410</td><td>620</td><td>30–110</td></tr>
<tr><td>GGT (IU/L)</td><td>520</td><td>780</td><td>Under 50</td></tr>
<tr><td>ALT (IU/L)</td><td>70</td><td>88</td><td>Under 40</td></tr>
<tr><td>INR</td><td>1.1</td><td>1.5</td><td>0.9–1.2</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-mass", type: "sa", lines: 3,
                                stem: "What is the mass, and what does it tell you about the cause of her jaundice?",
                                answer: "Her distended gallbladder; with painless jaundice it points to a tumor below the cystic duct rather than gallstones (Courvoisier law).",
                                explanation: "A healthy, stretchy gallbladder enlarges behind a slow, steady block." },
                            { id: "s1-trend", type: "sa", lines: 3,
                                stem: "Interpret the trend in her LFTs, including the INR.",
                                answer: "A worsening cholestatic pattern from steadily progressing obstruction; the INR rises because fat-soluble vitamin K is not absorbed without bile.",
                                explanation: "Without bile in the gut, fat and vitamin K are poorly absorbed, which also explains her floating stools." },
                            { id: "s1-risk", type: "mc", select: 2,
                                stem: "Which two features of her history point most toward a pancreatic head adenocarcinoma?",
                                options: ["Her smoking", "Her new diabetes", "Her age alone", "Her itch", "Her female sex"], answer: [0, 1],
                                explanation: "Smoking, chronic pancreatitis, and diabetes are the page's risk factors for pancreatic head adenocarcinoma.",
                                notes: { 2: "Age matters for many cancers but does not point to the pancreas.", 3: "Itch reflects cholestasis of any cause.", 4: "Gallbladder carcinoma, not pancreatic, mainly affects older women." } },
                        ] },
                    { passage: `<p><strong>Ultrasound:</strong> Distended gallbladder with no stones. CBD 15 mm. Intrahepatic ducts dilated.</p>
<p><strong>CT pancreas:</strong> A 2.8-cm low-density mass in the pancreatic head. The CBD and pancreatic duct are both dilated to the mass. The superior mesenteric vessels are clear. No liver lesions or ascites.</p>`,
                        questions: [
                            { id: "s1-ct", type: "sa", lines: 2,
                                stem: "Name the sign on CT and explain why it occurs.",
                                answer: "The double duct sign: the mass in the head blocks both the CBD and the pancreatic duct where they run together.",
                                explanation: "The double duct sign supports a periampullary tumor." },
                            { id: "s1-next", type: "mc", justify: 12,
                                stem: "What is the best next step toward treatment? Briefly justify your choice.",
                                options: ["Endoscopic ultrasound biopsy", "CA 19-9 alone to confirm the diagnosis", "Cholecystectomy", "Repeat CT in 3 months", "HIDA scan"], answer: 0,
                                justifyAnswer: "Tissue is needed; endoscopic ultrasound reaches the pancreatic head from the duodenum.",
                                explanation: "Tissue diagnosis is by ERCP brushings or endoscopic ultrasound biopsy; tumor markers support but do not diagnose.",
                                notes: { 1: "Tumor markers are not diagnostic.", 2: "Cholecystectomy leaves the obstructing tumor.", 3: "Waiting risks the tumor becoming unresectable.", 4: "A HIDA scan tests the cystic duct." } },
                        ] },
                    { passage: `<p>Biopsy confirms adenocarcinoma. She is fit for surgery.</p>`,
                        questions: [
                            { id: "s1-op", type: "sa", lines: 2,
                                stem: "Which operation is indicated, and why is it resectable?",
                                answer: "Pancreaticoduodenectomy (Whipple procedure); the vessels are clear and there are no metastases.",
                                explanation: "Periampullary tumors are treated by pancreaticoduodenectomy if resectable." },
                            { id: "s1-if", type: "sa", lines: 2,
                                stem: "If CT had shown liver metastases, how would the plan change?",
                                answer: "She would be unresectable: a biliary stent to relieve jaundice, and chemotherapy.",
                                explanation: "Unresectable disease is treated with a biliary stent to relieve jaundice, and chemotherapy." },
                        ] },
                ],
            },
            {
                title: "A stricture after years of colitis",
                keyPoints: [
                    "PSC raises the risk of cholangiocarcinoma and gallbladder carcinoma, so a new dominant stricture needs tissue.",
                    "A perihilar tumor blocks above the cystic duct, so the gallbladder is not palpable despite painless jaundice.",
                    "ERCP brushings sample the stricture and allow a stent at the same procedure.",
                    "Perihilar resection often includes part of the liver; transplant is used in selected cases.",
                ],
                blocks: [
                    { passage: `<p>A 46-year-old man with ulcerative colitis and PSC, diagnosed 12 years ago, has 6 weeks of deepening jaundice and a 5-kg weight loss. He has no fever. His gallbladder is not palpable. MRCP shows his known beaded ducts and a new tight stricture at the hepatic duct confluence, with marked dilation of the intrahepatic ducts above it. The CBD below is not dilated.</p>
<table><thead><tr><th>Test</th><th>6 months ago</th><th>Today</th></tr></thead><tbody>
<tr><td>Bilirubin (µmol/L)</td><td>28</td><td>164</td></tr>
<tr><td>ALP (IU/L)</td><td>310</td><td>720</td></tr>
<tr><td>CA 19-9 (U/mL)</td><td>30</td><td>410</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-concern", type: "mc", justify: 12,
                                stem: "What is the main concern? Briefly justify your choice.",
                                options: ["Perihilar cholangiocarcinoma", "Ascending cholangitis from PSC", "A CBD stone", "Pancreatic head adenocarcinoma", "Gallbladder carcinoma"], answer: 0,
                                justifyAnswer: "PSC, a new dominant hilar stricture, weight loss, and rising CA 19-9.",
                                explanation: "PSC raises the risk of cholangiocarcinoma, and perihilar is the most common site.",
                                notes: { 1: "He has no fever, and the new stricture with weight loss points to a tumor.", 2: "MRCP shows a stricture, not a stone, and the CBD is not dilated.", 3: "A pancreatic head tumor would dilate the CBD and pancreatic duct.", 4: "The stricture is at the hepatic duct confluence." } },
                            { id: "s2-gb", type: "sa", lines: 2,
                                stem: "Why is his gallbladder not palpable, despite painless jaundice?",
                                answer: "The stricture is above the cystic duct, so bile does not reach the gallbladder to distend it.",
                                explanation: "A Courvoisier gallbladder needs a block below the cystic duct." },
                            { id: "s2-marker", type: "sa", lines: 2,
                                stem: "His CA 19-9 has risen. Why can it not confirm the diagnosis on its own?",
                                answer: "Tumor markers lack specificity and rise in benign obstruction and cholangitis, so tissue is needed.",
                                explanation: "CA 19-9 and CEA support but do not diagnose." },
                        ] },
                    { passage: `<p>ERCP brushings of the stricture show adenocarcinoma, and a stent is placed. Staging shows no spread beyond the hilum.</p>`,
                        questions: [
                            { id: "s2-order", type: "order",
                                stem: "Number the steps of his workup and treatment in order.",
                                items: ["Resection of the bile duct, often with part of the liver", "MRCP showing a dominant stricture", "ERCP brushings, with a stent", "LFTs showing worsening cholestasis"],
                                order: [3, 1, 2, 0],
                                explanation: "LFTs, then imaging, then tissue with drainage, then resection." },
                            { id: "s2-liver", type: "sa", lines: 2,
                                stem: "Why does his resection often include part of the liver?",
                                answer: "The tumor sits at the confluence, where the hepatic ducts enter the liver, so they must be removed with it.",
                                explanation: "Cholangiocarcinoma is treated by resection of the bile duct, often with part of the liver; transplant in selected cases." },
                        ] },
                ],
            },
            {
                title: "A routine gallbladder",
                keyPoints: [
                    "More than half of gallbladder carcinomas are found by chance after cholecystectomy.",
                    "Risk factors are gallstones (especially over 3 cm), porcelain gallbladder, polyps over 1 cm, and PSC, mainly in older women.",
                    "Depth decides surgery: cholecystectomy alone if confined to the mucosa, otherwise liver resection and lymph node removal.",
                    "Gallbladder carcinoma tends to present late because it causes few symptoms until it spreads or blocks the ducts.",
                ],
                blocks: [
                    { passage: `<p>A 74-year-old woman has laparoscopic cholecystectomy for recurrent biliary colic. Her ultrasound before surgery showed a 3.5-cm gallstone and patchy calcification of the gallbladder wall. She recovers well.</p>`,
                        questions: [
                            { id: "s3-risk", type: "mc", select: 2,
                                stem: "Which two features before surgery raised her risk of gallbladder carcinoma?",
                                options: ["A stone over 3 cm", "Calcification of the gallbladder wall", "Recurrent biliary colic", "Laparoscopic surgery", "Normal LFTs"], answer: [0, 1],
                                explanation: "Gallstones (especially over 3 cm) and porcelain gallbladder are risk factors; so are polyps over 1 cm and PSC.",
                                notes: { 2: "Colic is the symptom of gallstones, not a separate risk factor on the page.", 3: "The approach does not cause cancer.", 4: "Normal LFTs do not raise risk." } },
                        ] },
                    { passage: `<p><strong>Pathology:</strong> Chronic cholecystitis with a 1.2-cm adenocarcinoma in the fundus, invading through the muscle layer into the tissue beneath. Cystic duct margin clear. One cystic duct lymph node, negative.</p>`,
                        questions: [
                            { id: "s3-found", type: "sa", lines: 2,
                                stem: "Why are many gallbladder carcinomas found this way rather than from symptoms?",
                                answer: "They cause few symptoms until they spread or block the ducts, so many are found in gallbladders removed for stones.",
                                explanation: "More than half are found by chance at cholecystectomy." },
                            { id: "s3-plan", type: "mc", justify: 12,
                                stem: "What further treatment is needed? Briefly justify your choice.",
                                options: ["Liver resection and lymph node removal", "No further treatment, since the margin is clear", "A biliary stent", "Repeat cholecystectomy", "Annual CA 19-9 only"], answer: 0,
                                justifyAnswer: "Invasion beyond the mucosa puts the liver bed and nodes at risk.",
                                explanation: "Cholecystectomy alone is enough only if the tumor is confined to the mucosa.",
                                notes: { 1: "A clear margin is not enough once the tumor has gone beyond the mucosa.", 2: "She has no obstruction.", 3: "The gallbladder has already been removed.", 4: "Tumor markers are not a substitute for treatment." } },
                            { id: "s3-if", type: "sa", lines: 2,
                                stem: "How would the plan differ if the tumor had been confined to the mucosa?",
                                answer: "No further surgery: cholecystectomy alone is enough.",
                                explanation: "Depth of invasion decides whether liver resection and lymph node removal are needed." },
                        ] },
                ],
            },
        ],
    },
};
