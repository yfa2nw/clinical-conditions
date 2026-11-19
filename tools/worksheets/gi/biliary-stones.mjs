// Worksheet for the Cholelithiasis and Biliary Colic page, built by tools/build-worksheet-pdf.mjs gi biliary-stones.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Cholelithiasis and Biliary Colic",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "Following a stone down the tree",
        top: "Excess [[cholesterol]] or bilirubin in bile, or bile [[stasis]] → crystals → gallstones; where the stone lodges decides the disease",
        rows: ["Where the stone is", "What happens", "Clues", "Next step"],
        columns: [
            ["Gallbladder: cholelithiasis", "Most stones stay silent; about 1–2% a year develop symptoms", "Found by [[chance]] on imaging", "No treatment"],
            ["Cystic duct, brief block: biliary colic", "Fatty meal → [[CCK]] → the gallbladder contracts against the stone", "Pain resolves within [[6]] hours; no fever, normal LFTs", "Pain relief (e.g. NSAIDs), then elective laparoscopic [[cholecystectomy]]"],
            ["Cystic duct, persistent block: cholecystitis", "The trapped gallbladder becomes [[inflamed]]", "Pain over 6 hours and [[fever]]", "See Acute cholecystitis"],
            ["Common bile duct: choledocholithiasis", "Bile flow is blocked; infection can follow as [[cholangitis]]", "Jaundice, with raised bilirubin and ALP", "See Choledocholithiasis"],
            ["Ampulla: gallstone pancreatitis", "The stone blocks the outlet the bile and pancreatic ducts share", "Epigastric pain to the back", "See Acute pancreatitis"],
        ],
        span: "Diagnosis: RUQ [[ultrasound]] first, showing mobile, shadowing stones; a plain x-ray shows only about [[10]]% of stones",
        chains: [
            { label: "Cholesterol stones: the triad", steps: [["Supersaturation", "More cholesterol, or fewer [[bile salts]] or phospholipids"], ["Nucleation", "Excess factors such as [[mucin]]"], ["Hypomotility", "Stasis: crystals grow into stones"], ["Cholesterol stone", "About [[75]]% of gallstones"]] },
            { label: "Pigment stones and late complications", steps: [["Black pigment", "[[Hemolysis]], cirrhosis, or ileal disease; in the gallbladder"], ["Brown pigment", "Duct infection or stricture, e.g. [[Clonorchis]]; in the ducts"], ["Chronic cholecystitis", "Calcified wall: [[porcelain]] gallbladder"], ["Gallstone ileus", "A large stone through a [[fistula]]"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Excess [[cholesterol]] or [[bilirubin]] in bile, or bile [[stasis]], leads to [[crystal]] formation and gallstones. Most stones stay [[silent]]." },
                { id: "r-path-match", type: "match",
                    stem: "Match each step to what it does.",
                    items: ["Supersaturation", "Nucleation", "Hypomotility", "Brief cystic duct block", "Persistent cystic duct block"],
                    options: ["Biliary colic", "Bile stays in the gallbladder longer, so crystals become stones", "Cholecystitis", "Increased cholesterol or decreased bile salts or phospholipids form crystals", "Excess nucleation factors make crystals grow"],
                    answer: [3, 4, 1, 0, 2],
                    explanation: "The first three steps form a stone; how long it blocks the cystic duct decides whether it causes colic or cholecystitis." },
                { id: "r-path-block", type: "sa", lines: 2,
                    stem: "Why does a brief block of the cystic duct cause pain without fever, while a persistent block causes fever?",
                    answer: "A brief block ends when the stone dislodges, before inflammation sets in; a persistent block traps bile, and the gallbladder wall becomes inflamed.",
                    explanation: "Colic is pain from contraction against the stone; cholecystitis is inflammation." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of gallstone types.",
                    html: `<table><thead><tr><th>Type</th><th>Cause</th><th>Forms in</th></tr></thead><tbody>
<tr><td>Cholesterol (about [[75]]%)</td><td>Supersaturation, nucleation, and gallbladder [[hypomotility]]</td><td>[[Gallbladder]]</td></tr>
<tr><td>Black pigment</td><td>Chronic [[hemolysis]] (increased unconjugated bilirubin), cirrhosis, or ileal disease</td><td>Gallbladder</td></tr>
<tr><td>Brown pigment</td><td>Bile duct [[infection]] or stricture, e.g. Clonorchis</td><td>[[Bile ducts]]</td></tr>
</tbody></table>` },
                { id: "r-cause-match", type: "match",
                    stem: "Match each risk factor to how it promotes stones.",
                    items: ["Estrogen therapy", "TPN", "Ileal resection", "Sickle cell disease", "Clonorchis infection"],
                    options: ["Gallbladder stasis", "Excess unconjugated bilirubin", "Bile duct infection", "Raised cholesterol secretion into bile", "Bile salt loss"],
                    answer: [3, 0, 4, 1, 2],
                    explanation: "Each risk factor acts on a step: estrogen raises cholesterol secretion, fasting and TPN cause hypomotility, ileal loss drains bile salts, hemolysis forms black stones, and infection forms brown stones." },
                { id: "r-cause-fs", type: "sa", lines: 2,
                    stem: "Explain how \"female\" and \"fertile\" among the 6 Fs promote cholesterol stones.",
                    answer: "Estrogen raises cholesterol secretion into bile (supersaturation); pregnancy also slows gallbladder emptying (hypomotility).",
                    explanation: "The 6 Fs are female, fat, fertile, forty, fair, and family history." },
                { id: "r-cause-stasis", type: "mc", select: 2,
                    stem: "Which risk factors work mainly through gallbladder hypomotility?",
                    options: ["Fasting", "Octreotide", "Hereditary spherocytosis", "Clonorchis infection", "Fair ancestry"], answer: [0, 1],
                    explanation: "Fasting, TPN, and octreotide reduce gallbladder contraction, so bile stagnates.",
                    notes: { 2: "Spherocytosis causes hemolysis and black pigment stones.", 3: "Clonorchis infects the ducts and forms brown stones.", 4: "Ancestry is a risk factor without a single step on the page." } },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-order", type: "order",
                    stem: "Number the events of an attack of biliary colic in order.",
                    items: ["The gallbladder contracts against an impacted stone", "A heavy, fatty meal", "The stone dislodges and the pain resolves", "CCK is released", "Epigastric or RUQ pain radiating to the back or right scapula"],
                    order: [1, 3, 0, 4, 2],
                    explanation: "The pain resolves within 6 hours; longer pain or fever suggests cholecystitis." },
                { id: "r-sx-comp", type: "match",
                    stem: "Match each complication to its cause.",
                    items: ["Porcelain gallbladder", "Gallstone ileus", "Gallstone pancreatitis", "Cholangitis", "Gallbladder carcinoma"],
                    options: ["A stone at the ampulla", "Risk rising with stone size, highest over 3 cm", "A large stone through a fistula", "A common bile duct stone with infection", "Repeated colic calcifying the wall"],
                    answer: [4, 2, 0, 3, 1],
                    explanation: "Each complication follows from where the stone goes or how long it irritates the gallbladder." },
                { id: "r-sx-silent", type: "blank",
                    html: "Cholelithiasis is mostly [[asymptomatic]] and often found by chance on imaging; about [[1–2]]% of people with gallstones develop symptoms each year. Biliary colic has [[normal]] LFTs and no [[fever]]." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-us", type: "mc",
                    stem: "Why is RUQ ultrasound, not a plain x-ray, the first-line test for gallstones?",
                    options: ["Most stones lack enough calcium to show on x-ray", "Plain x-rays cannot image the RUQ", "Ultrasound dissolves small stones", "Gallstones are always radiopaque, so the x-ray adds nothing", "X-rays are unsafe in anyone with abdominal pain"], answer: 0,
                    explanation: "Ultrasound shows mobile, shadowing stones; a plain x-ray misses most stones.",
                    notes: { 1: "Plain x-rays include the RUQ; the stones are simply invisible.", 2: "Ultrasound images stones; it does not treat them.", 3: "Most stones are radiolucent.", 4: "Radiation is not the reason; the x-ray misses most stones." } },
                { id: "r-dx-labs", type: "sa", lines: 2,
                    stem: "Why are LFTs and an FBC taken in suspected biliary colic, when they are expected to be normal?",
                    answer: "To look for complications: raised white cells suggest cholecystitis, and raised bilirubin or ALP suggests a duct stone.",
                    explanation: "Normal results support simple colic; abnormal ones show the stone has caused more." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each patient to the treatment.",
                    items: ["Gallstones found by chance, never symptomatic", "Recurrent biliary colic, fit for surgery", "Biliary colic with small cholesterol stones, unfit for surgery"],
                    options: ["Ursodeoxycholic acid", "No treatment", "Pain relief, then elective laparoscopic cholecystectomy"],
                    answer: [1, 2, 0],
                    explanation: "Silent stones are left alone; symptomatic stones are removed with the gallbladder; ursodeoxycholic acid is for those unfit for surgery." },
                { id: "r-tx-urso", type: "mc", select: 2,
                    stem: "Which statements about ursodeoxycholic acid are correct?",
                    options: ["It works only on small cholesterol stones", "It dissolves fewer than half of stones", "It dissolves black pigment stones", "It is first line for biliary colic", "It works best on calcified stones"], answer: [0, 1],
                    explanation: "Ursodeoxycholic acid is for patients not fit for surgery, with small cholesterol stones only, and dissolves fewer than half.",
                    notes: { 2: "Pigment stones are not cholesterol and do not dissolve.", 3: "Elective laparoscopic cholecystectomy is first line.", 4: "Calcium does not dissolve; small cholesterol stones respond best." } },
                { id: "r-tx-silent", type: "sa", lines: 2,
                    stem: "Why are asymptomatic gallstones not removed?",
                    answer: "Most never cause symptoms (about 1–2% a year do), so the risks of surgery outweigh the benefit.",
                    explanation: "Cholecystectomy is offered once stones cause symptoms." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Pain after a takeaway dinner",
                keyPoints: [
                    "Several of the 6 Fs together, with pain after fatty meals, make cholesterol stones and biliary colic likely.",
                    "Fat releases CCK, and the gallbladder contracts against an impacted stone; the pain settles within 6 hours as the stone dislodges.",
                    "RUQ ultrasound shows mobile, shadowing stones; a normal plain x-ray does not exclude gallstones.",
                    "Biliary colic is treated with pain relief and elective laparoscopic cholecystectomy.",
                    "Pain over 6 hours with fever means cholecystitis; jaundice with raised ALP means the stone has reached the common bile duct.",
                ],
                blocks: [
                    { passage: `<p>A 44-year-old woman with a BMI of 34, three children, and a combined oral contraceptive has had four attacks of pain over 2 months. Each began about an hour after a takeaway meal of fried food, felt like a heavy ache under her right ribs spreading to her right shoulder blade, and settled after 2–3 hours. Her mother had her gallbladder removed.</p>`,
                        questions: [
                            { id: "s1-fs", type: "sa", lines: 3,
                                stem: "Which of the 6 Fs does she have, and how do her contraceptive and pregnancies promote stones?",
                                answer: "Female, fat, fertile, forty, and family history; estrogen raises cholesterol secretion into bile, and pregnancy slows gallbladder emptying.",
                                explanation: "Most of the 6 Fs push bile toward cholesterol supersaturation." },
                            { id: "s1-meal", type: "sa", lines: 2,
                                stem: "Explain why her pain starts after fatty meals and stops within a few hours.",
                                answer: "Fat releases CCK, so the gallbladder contracts against a stone in the cystic duct; the pain stops when the stone falls back.",
                                explanation: "The pain resolves within 6 hours as the stone dislodges." },
                        ] },
                    { passage: `<p>She is seen the next day, pain-free. Her temperature is 36.7 °C, and her abdomen is soft and nontender. A plain abdominal x-ray taken at another clinic was reported as normal.</p>
${labs(["Test", "Result", "Reference"], [["White cells", "7.4 × 10<sup>9</sup>/L", "4.0–11.0"], ["Bilirubin", "12 µmol/L", "Under 21"], ["ALP", "88 U/L", "40–130"], ["ALT", "24 U/L", "Under 35"]])}
<p>RUQ ultrasound: several echogenic foci in the gallbladder that move with position and cast acoustic shadows. The gallbladder wall is thin, and the common bile duct is not dilated.</p><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-dx", type: "mc", justify: 15,
                                stem: "What is the most likely diagnosis? Briefly justify your choice.",
                                options: ["Biliary colic", "Acute cholecystitis", "Choledocholithiasis", "Gallstone pancreatitis", "Peptic ulcer disease"], answer: 0,
                                justifyAnswer: "Brief postprandial pain, no fever, normal LFTs, and mobile, shadowing stones.",
                                explanation: "Biliary colic has normal LFTs and no fever, and resolves within 6 hours.",
                                notes: { 1: "Cholecystitis gives pain over 6 hours, fever, and often a thick wall.", 2: "Her bilirubin and ALP are normal, and the duct is not dilated.", 3: "Nothing suggests a stone at the ampulla.", 4: "Epigastric pain overlaps, but meal-linked colic with stones on ultrasound fits gallstones." } },
                            { id: "s1-xray", type: "sa", lines: 2,
                                stem: "How can her plain x-ray be normal when she has several stones?",
                                answer: "Only about 10% of stones have enough calcium to show; her stones are probably cholesterol, which is radiolucent.",
                                explanation: "That is why ultrasound is first line." },
                            { id: "s1-plan", type: "mc", justify: 15,
                                stem: "What is the best plan? Briefly justify your choice.",
                                options: ["Elective laparoscopic cholecystectomy", "No treatment, since she is pain-free today", "Ursodeoxycholic acid for 2 years", "Admission for IV ABX", "ERCP to clear the stones"], answer: 0,
                                justifyAnswer: "Symptomatic stones recur and can cause complications; removing the gallbladder removes the source.",
                                explanation: "Biliary colic is treated with pain relief (e.g. NSAIDs), then elective laparoscopic cholecystectomy.",
                                notes: { 1: "No treatment is for asymptomatic stones.", 2: "Ursodeoxycholic acid is for patients not fit for surgery.", 3: "ABX treat infection; she has none.", 4: "ERCP clears common bile duct stones; her duct is normal." } },
                        ] },
                    { passage: `<p>While waiting for surgery, she presents with RUQ pain that has lasted 13 hours. Her temperature is 38.5 °C.</p>
${labs(["Test", "Result"], [["White cells", "16.2 × 10<sup>9</sup>/L"], ["Bilirubin", "15 µmol/L"], ["ALP", "102 U/L"]])}
<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-change", type: "sa", lines: 2,
                                stem: "What has changed, and what does it mean about the stone?",
                                answer: "Pain over 6 hours with fever and raised white cells: the stone has stayed in the cystic duct, causing cholecystitis.",
                                explanation: "A persistent cystic duct block causes cholecystitis; LFTs stay normal because the common bile duct is clear." },
                        ] },
                    { passage: `<p>She recovers and is booked for surgery. Two weeks later she returns with yellow eyes, dark urine, and pale stools.</p>
${labs(["Test", "Result"], [["Bilirubin", "70 µmol/L"], ["ALP", "390 U/L"], ["GGT", "420 U/L"], ["Temperature", "36.9 °C"]])}
<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-cbd", type: "sa", lines: 2,
                                stem: "Where is the stone now, and which complication must she be watched for?",
                                answer: "The common bile duct (choledocholithiasis); it can become infected, causing cholangitis.",
                                explanation: "A blocked common bile duct gives a cholestatic pattern; stones there can also lodge at the ampulla and cause pancreatitis." },
                        ] },
                ],
            },
            {
                title: "A frail mother and her son",
                keyPoints: [
                    "Ursodeoxycholic acid dissolves only small cholesterol stones, and fewer than half, so it suits few patients.",
                    "A stone that shows on x-ray contains calcium, which bile acids cannot dissolve.",
                    "Silent stones found by chance need no treatment; about 1–2% a year become symptomatic.",
                    "Rapid weight loss and bariatric surgery are risk factors for gallstones.",
                    "Once silent stones cause colic, elective laparoscopic cholecystectomy is offered.",
                ],
                blocks: [
                    { passage: `<p>An 86-year-old woman with severe COPD and heart failure has had three attacks of biliary colic this year. The anesthetist judges her unfit for surgery. A plain x-ray shows a single round, calcified stone about 2.5 cm across in the RUQ, and ultrasound confirms one large stone in the gallbladder.</p>`,
                        questions: [
                            { id: "s2-urso", type: "mc", justify: 15,
                                stem: "Her family asks about a tablet to dissolve the stone. Is ursodeoxycholic acid likely to work? Briefly justify your choice.",
                                options: ["No, because her stone is large and calcified", "Yes, because it dissolves any gallstone", "Yes, because large stones respond best", "Unlikely, because it works only on pigment stones", "Yes, because calcified stones dissolve fastest"], answer: 0,
                                justifyAnswer: "It dissolves only small cholesterol stones, and visible calcium means it is not pure cholesterol.",
                                explanation: "Ursodeoxycholic acid is for patients unfit for surgery with small cholesterol stones only, and dissolves fewer than half.",
                                notes: { 1: "It works only on cholesterol stones.", 2: "Small stones respond best.", 3: "It works on cholesterol stones, not pigment stones.", 4: "Calcium does not dissolve in bile acids." } },
                            { id: "s2-visible", type: "sa", lines: 2,
                                stem: "Why does her stone show on x-ray when most gallstones do not?",
                                answer: "It contains enough calcium; only about 10% of gallstones do.",
                                explanation: "Calcium content, not size, decides whether a stone shows on a plain x-ray." },
                            { id: "s2-size", type: "sa", lines: 2,
                                stem: "Which later complication becomes more likely as gallstones get larger?",
                                answer: "Gallbladder carcinoma; the risk rises with stone size and is highest over 3 cm.",
                                explanation: "Chronic irritation of the gallbladder wall is linked to carcinoma." },
                        ] },
                    { passage: `<p>Her 52-year-old son has an ultrasound for kidney stones, which also shows several small, mobile gallstones. He has never had abdominal pain, and his LFTs are normal. He asks whether he should have his gallbladder removed, like his mother would have if she were fit.</p>`,
                        questions: [
                            { id: "s2-son", type: "sa", lines: 3,
                                stem: "How should he be advised, and why?",
                                answer: "No treatment: most gallstones stay silent (about 1–2% a year become symptomatic), so surgery's risks outweigh its benefit; return if colic develops.",
                                explanation: "Asymptomatic gallstones need no treatment." },
                        ] },
                    { passage: `<p>Three years later, he has bariatric surgery and loses 40 kg in 8 months. He then has two attacks of RUQ pain after meals, each lasting 2 hours. Bloods are normal, and he is afebrile.</p>`,
                        questions: [
                            { id: "s2-weight", type: "mc", select: 2,
                                stem: "Which two features of his history raise his risk of symptomatic stones?",
                                options: ["Rapid weight loss", "Bariatric surgery", "Kidney stones", "Normal LFTs", "Male sex"], answer: [0, 1],
                                explanation: "Rapid weight loss and bariatric surgery are risk factors for gallstones on the page.",
                                notes: { 2: "Kidney stones are a separate condition here.", 3: "Normal LFTs argue against complications; they are not a risk factor.", 4: "Female sex, not male, is one of the 6 Fs." } },
                            { id: "s2-now", type: "sa", lines: 2,
                                stem: "What should he be offered now, and why has the advice changed?",
                                answer: "Pain relief, then elective laparoscopic cholecystectomy, because his stones now cause biliary colic.",
                                explanation: "Treatment depends on symptoms, not on the presence of stones." },
                        ] },
                ],
            },
            {
                title: "Stones without a gallbladder",
                keyPoints: [
                    "Brown pigment stones form in the bile ducts themselves, so they can appear years after cholecystectomy.",
                    "Bile duct infection, including the liver fluke Clonorchis, and strictures cause brown stones, more often in East Asia.",
                    "Black pigment stones form in the gallbladder from excess unconjugated bilirubin, such as in hemolysis or cirrhosis.",
                    "Cholesterol stones also form in the gallbladder, so neither type explains new duct stones after it is removed.",
                ],
                blocks: [
                    { passage: `<p>A 63-year-old man who grew up in southern China and ate raw freshwater fish as a young man had his gallbladder removed 12 years ago. He now has 3 days of RUQ pain and yellow eyes.</p>
${labs(["Test", "Result", "Reference"], [["Bilirubin", "65 µmol/L", "Under 21"], ["ALP", "460 U/L", "40–130"], ["ALT", "88 U/L", "Under 35"], ["Hemoglobin", "142 g/L", "130–170"]])}
<p>Ultrasound shows a dilated common bile duct containing several soft stones, and a stricture of the duct higher up. Stool microscopy shows Clonorchis eggs.</p><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-type", type: "mc", justify: 15,
                                stem: "Which type of stone is he most likely to have? Briefly justify your choice.",
                                options: ["Brown pigment stones", "Black pigment stones", "Cholesterol stones", "Calcium oxalate stones", "Porcelain gallbladder fragments"], answer: 0,
                                justifyAnswer: "They formed in his ducts after cholecystectomy, with fluke infection and a stricture.",
                                explanation: "Brown pigment stones form in the bile ducts after infection with bacteria or parasites such as Clonorchis, or behind a stricture.",
                                notes: { 1: "Black stones form in the gallbladder, and his hemoglobin is normal.", 2: "Cholesterol stones form in the gallbladder, which he no longer has.", 3: "Calcium oxalate forms kidney stones.", 4: "He has no gallbladder, and porcelain gallbladder is a calcified wall." } },
                            { id: "s3-how", type: "sa", lines: 2,
                                stem: "Explain how he can form stones without a gallbladder.",
                                answer: "Infection and the stricture let bile stagnate in the ducts, so brown stones form there rather than in the gallbladder.",
                                explanation: "Removing the gallbladder removes the site of cholesterol and black stones, but not of brown stones." },
                            { id: "s3-risk", type: "sa", lines: 2,
                                stem: "His stones are blocking the common bile duct. Which infection of the ducts is he at risk of?",
                                answer: "Cholangitis.",
                                explanation: "A common bile duct stone is choledocholithiasis, which can lead to cholangitis." },
                        ] },
                ],
            },
        ],
    },
};
