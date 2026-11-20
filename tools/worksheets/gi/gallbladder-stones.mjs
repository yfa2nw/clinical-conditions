// Worksheet for the Gallstones, Cholecystitis, and Biliary Fistulas page, built by tools/build-worksheet-pdf.mjs gi gallbladder-stones.
// Merged from the worksheets of the pages it replaced (biliary-stones, cholecystitis, biliary-fistula); question ids keep a prefix from their source page.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    "title": "Gallstones, Cholecystitis, and Biliary Fistulas",
    "flowchart": {
        "title": "From a stone to a diseased gallbladder",
        "top": "Excess [[cholesterol]] or bilirubin in bile, or bile [[stasis]] → gallstones, mostly silent and left untreated; what the stone does next decides the disease",
        "rows": [
            "Disease",
            "Why it happens",
            "Clues and test",
            "Treatment"
        ],
        "columns": [
            [
                "Biliary colic",
                "Fatty meal → [[CCK]] → the gallbladder contracts against a stone in the cystic duct",
                "Pain resolves within [[6]] hours; no fever, normal LFTs",
                "Pain relief, then elective laparoscopic cholecystectomy"
            ],
            [
                "4. Acute cholecystitis (about 90–95%)",
                "A stone blocks the cystic duct; distention and E. coli, Klebsiella, and Enterococcus inflame the wall",
                "Pain over 6 hours, fever, [[Murphy]] sign; unclear ultrasound: HIDA, the gallbladder does not fill",
                "IV ABX, then laparoscopic cholecystectomy within [[72]] hours"
            ],
            [
                "5. Mirizzi syndrome",
                "A stone in the gallbladder neck presses on the common hepatic duct",
                "Jaundice with cholestatic LFTs; [[MRCP]] or ERCP",
                "Cholecystectomy (often open); ERCP stenting if needed"
            ],
            [
                "6. Acalculous (about 10%)",
                "Critical illness: gallbladder stasis and [[ischemia]], no stone",
                "Ultrasound: inflamed gallbladder without stones",
                "Percutaneous [[cholecystostomy]] with ABX"
            ],
            [
                "7–11. Biliary fistulas",
                "Chronic inflammation and a large stone erode into a neighbor, most often the duodenum",
                "CT: [[pneumobilia]]; gallstone ileus: Rigler triad",
                "Gallstone ileus: [[enterolithotomy]] first; fistula repair later if needed"
            ]
        ],
        "span": "RUQ [[ultrasound]] first; a plain x-ray shows only about 10% of stones. Every acute case: NPO, IV fluids, pain relief, and IV ABX; emergency surgery for gangrene or perforation",
        "chains": [
            {
                "label": "Cholesterol stones: the triad",
                "steps": [
                    [
                        "Supersaturation",
                        "More cholesterol, or fewer [[bile salts]] or phospholipids"
                    ],
                    [
                        "Nucleation",
                        "Excess factors such as [[mucin]]"
                    ],
                    [
                        "Hypomotility",
                        "Stasis: crystals grow into stones"
                    ],
                    [
                        "Cholesterol stone",
                        "About [[75]]% of gallstones"
                    ]
                ]
            },
            {
                "label": "Years of inflammation",
                "steps": [
                    [
                        "Chronic cholecystitis",
                        "HIDA with CCK: ejection fraction under [[35]]%"
                    ],
                    [
                        "Porcelain gallbladder",
                        "Calcified wall"
                    ],
                    [
                        "Fistula",
                        "Into the duodenum in about 68%"
                    ],
                    [
                        "Gallstone ileus",
                        "Impacts at the [[terminal ileum]]"
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
                    "id": "bs-r-path-blanks",
                    "type": "blank",
                    "html": "Excess [[cholesterol]] or [[bilirubin]] in bile, or bile [[stasis]], leads to [[crystal]] formation and gallstones. Most stones stay [[silent]]."
                },
                {
                    "id": "bs-r-path-match",
                    "type": "match",
                    "stem": "Match each step to what it does.",
                    "items": [
                        "Supersaturation",
                        "Nucleation",
                        "Hypomotility",
                        "Brief cystic duct block",
                        "Persistent cystic duct block"
                    ],
                    "options": [
                        "Biliary colic",
                        "Bile stays in the gallbladder longer, so crystals become stones",
                        "Cholecystitis",
                        "Increased cholesterol or decreased bile salts or phospholipids form crystals",
                        "Excess nucleation factors make crystals grow"
                    ],
                    "answer": [
                        3,
                        4,
                        1,
                        0,
                        2
                    ],
                    "explanation": "The first three steps form a stone; how long it blocks the cystic duct decides whether it causes colic or cholecystitis."
                },
                {
                    "id": "bs-r-path-block",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does a brief block of the cystic duct cause pain without fever, while a persistent block causes fever?",
                    "answer": "A brief block ends when the stone dislodges, before inflammation sets in; a persistent block traps bile, and the gallbladder wall becomes inflamed.",
                    "explanation": "Colic is pain from contraction against the stone; cholecystitis is inflammation."
                },
                {
                    "id": "bc-r-path-blanks",
                    "type": "blank",
                    "html": "Persistent [[cystic duct]] obstruction leads to gallbladder [[distention]] and bacterial [[colonization]], causing inflammation of the gallbladder, which can progress to [[gangrene]]."
                },
                {
                    "id": "bc-r-path-match",
                    "type": "match",
                    "stem": "Match each step to what it causes.",
                    "items": [
                        "Obstruction",
                        "Distention",
                        "Bacterial colonization",
                        "Wall inflammation",
                        "Gangrene"
                    ],
                    "options": [
                        "Fever and sepsis",
                        "Perforation, abscess, and peritonitis",
                        "RUQ pain over 6 hours",
                        "RUQ tenderness and Murphy sign",
                        "Increased back pressure in the gallbladder"
                    ],
                    "answer": [
                        2,
                        4,
                        0,
                        3,
                        1
                    ],
                    "explanation": "Each step adds a sign: obstruction gives prolonged pain, colonization gives fever, the inflamed wall gives tenderness, and necrosis gives perforation."
                },
                {
                    "id": "bc-r-path-murphy",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does Murphy sign appear in cholecystitis but not in biliary colic?",
                    "answer": "It needs an inflamed gallbladder wall, pushed onto the examining hand on inspiration; colic has no inflammation.",
                    "explanation": "Colic is brief contraction against a stone; cholecystitis is inflammation of the wall."
                },
                {
                    "id": "bf-r-path-blanks",
                    "type": "blank",
                    "html": "Chronic [[inflammation]] weakens the gallbladder wall, a [[large]] stone presses on it, and a tract opens into a neighboring organ, usually the [[duodenum]]. The stone can then enter the bowel, causing gallstone [[ileus]], and gut bacteria can enter the bile ducts, causing ascending [[cholangitis]]."
                },
                {
                    "id": "bf-r-path-order",
                    "type": "order",
                    "stem": "Number these steps toward gallstone ileus in order.",
                    "items": [
                        "A tract opens into the duodenum",
                        "A large stone presses on the inflamed wall",
                        "The stone lodges at the terminal ileum",
                        "Chronic inflammation weakens the gallbladder wall",
                        "The stone passes into the bowel"
                    ],
                    "order": [
                        3,
                        1,
                        0,
                        4,
                        2
                    ],
                    "explanation": "Inflammation weakens the wall, the stone erodes through it, the tract opens, the stone passes, and it impacts where the bowel is narrowest."
                },
                {
                    "id": "bf-r-path-two",
                    "type": "sa",
                    "lines": 2,
                    "stem": "A fistula is an open path in both directions. Name what travels each way, and what it causes.",
                    "answer": "The stone travels into the bowel, causing gallstone ileus; gut bacteria travel into the ducts, causing ascending cholangitis.",
                    "explanation": "The same tract also lets air in, which is why pneumobilia is the sign of a fistula."
                }
            ]
        },
        {
            "section": "Etiology",
            "questions": [
                {
                    "id": "bs-r-cause-table",
                    "type": "blank",
                    "stem": "Complete the table of gallstone types.",
                    "html": "<table><thead><tr><th>Type</th><th>Cause</th><th>Forms in</th></tr></thead><tbody>\n<tr><td>Cholesterol (about [[75]]%)</td><td>Supersaturation, nucleation, and gallbladder [[hypomotility]]</td><td>[[Gallbladder]]</td></tr>\n<tr><td>Black pigment</td><td>Chronic [[hemolysis]] (increased unconjugated bilirubin), cirrhosis, or ileal disease</td><td>Gallbladder</td></tr>\n<tr><td>Brown pigment</td><td>Bile duct [[infection]] or stricture, e.g. Clonorchis</td><td>[[Bile ducts]]</td></tr>\n</tbody></table>"
                },
                {
                    "id": "bs-r-cause-match",
                    "type": "match",
                    "stem": "Match each risk factor to how it promotes stones.",
                    "items": [
                        "Estrogen therapy",
                        "TPN",
                        "Ileal resection",
                        "Sickle cell disease",
                        "Clonorchis infection"
                    ],
                    "options": [
                        "Gallbladder stasis",
                        "Excess unconjugated bilirubin",
                        "Bile duct infection",
                        "Raised cholesterol secretion into bile",
                        "Bile salt loss"
                    ],
                    "answer": [
                        3,
                        0,
                        4,
                        1,
                        2
                    ],
                    "explanation": "Each risk factor acts on a step: estrogen raises cholesterol secretion, fasting and TPN cause hypomotility, ileal loss drains bile salts, hemolysis forms black stones, and infection forms brown stones."
                },
                {
                    "id": "bs-r-cause-fs",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Explain how \"female\" and \"fertile\" among the 6 Fs promote cholesterol stones.",
                    "answer": "Estrogen raises cholesterol secretion into bile (supersaturation); pregnancy also slows gallbladder emptying (hypomotility).",
                    "explanation": "The 6 Fs are female, fat, fertile, forty, fair, and family history."
                },
                {
                    "id": "bs-r-cause-stasis",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which risk factors work mainly through gallbladder hypomotility?",
                    "options": [
                        "Fasting",
                        "Octreotide",
                        "Hereditary spherocytosis",
                        "Clonorchis infection",
                        "Fair ancestry"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Fasting, TPN, and octreotide reduce gallbladder contraction, so bile stagnates.",
                    "notes": {
                        "2": "Spherocytosis causes hemolysis and black pigment stones.",
                        "3": "Clonorchis infects the ducts and forms brown stones.",
                        "4": "Ancestry is a risk factor without a single step on the page."
                    }
                },
                {
                    "id": "bc-r-cause-table",
                    "type": "blank",
                    "stem": "Complete the table of causes.",
                    "html": "<table><thead><tr><th>Cause</th><th>Key facts</th></tr></thead><tbody>\n<tr><td>1. Calculous</td><td>About [[90–95]]%; a stone obstructs the cystic duct, and [[E. coli]], Klebsiella, and Enterococcus colonize it</td></tr>\n<tr><td>2. Mirizzi syndrome</td><td>A stone in the cystic duct or gallbladder neck compresses the common hepatic duct, causing obstructive [[jaundice]] and [[cholestatic]] LFTs</td></tr>\n<tr><td>3. Acalculous</td><td>About [[10]]%; critically ill patients (ICU, burns, sepsis, TPN); high risk of gangrene and [[perforation]]</td></tr>\n</tbody></table>"
                },
                {
                    "id": "bc-r-cause-acalc",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why do fasting, TPN, and shock lead to acalculous cholecystitis?",
                    "answer": "Without food there is no CCK, so bile stagnates (stasis); shock reduces blood flow to the wall (ischemia).",
                    "explanation": "The wall is ischemic from the start, which is why gangrene and perforation are common."
                },
                {
                    "id": "bc-r-cause-at-risk",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which patients are at risk of acalculous cholecystitis?",
                    "options": [
                        "A man in ICU with 40% burns",
                        "A woman with septic shock on TPN",
                        "A healthy 40-year-old woman after a fatty meal",
                        "A man with a stone impacted in the gallbladder neck",
                        "A woman with hereditary spherocytosis"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Acalculous cholecystitis occurs in critically ill patients: ICU, burns, sepsis, and TPN.",
                    "notes": {
                        "2": "A fatty meal triggers biliary colic in someone with stones.",
                        "3": "An impacted stone is calculous disease, or Mirizzi syndrome.",
                        "4": "Spherocytosis causes black pigment stones and calculous disease."
                    }
                },
                {
                    "id": "bf-r-cause-match",
                    "type": "match",
                    "stem": "Match each fistula to what it most typically causes.",
                    "items": [
                        "Cholecystoduodenal",
                        "Cholecystocolic",
                        "Cholecystogastric",
                        "Cholecystocholedochal",
                        "Choledochoduodenal"
                    ],
                    "options": [
                        "Advanced Mirizzi syndrome",
                        "Bile acid diarrhea",
                        "Gallstone ileus",
                        "A link with a penetrating duodenal ulcer",
                        "Gastric outlet obstruction"
                    ],
                    "answer": [
                        2,
                        1,
                        4,
                        0,
                        3
                    ],
                    "explanation": "The organ the fistula opens into decides its effect."
                },
                {
                    "id": "bf-r-cause-table",
                    "type": "blank",
                    "stem": "Complete the table.",
                    "html": "<table><thead><tr><th>Fistula</th><th>Share of biliary-enteric fistulas</th></tr></thead><tbody>\n<tr><td>Cholecystoduodenal</td><td>~[[68]]%</td></tr>\n<tr><td>Cholecystocolic</td><td>~[[17]]%</td></tr>\n<tr><td>Cholecystogastric</td><td>~[[5]]%</td></tr>\n</tbody></table>"
                },
                {
                    "id": "bf-r-cause-select",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which two are causes of biliary fistulas on the page, besides gallstones?",
                    "options": [
                        "Peptic ulcer disease",
                        "Crohn disease",
                        "Celiac disease",
                        "Hepatitis A",
                        "Irritable bowel syndrome"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "The causes are gallstones (most cases, especially large stones), peptic ulcer disease, malignancy, trauma or surgery, and Crohn disease.",
                    "notes": {
                        "2": "Celiac disease damages the small bowel mucosa but does not form fistulas.",
                        "3": "Hepatitis A is an acute viral hepatitis.",
                        "4": "IBS causes no structural damage."
                    }
                },
                {
                    "id": "bf-r-cause-colic",
                    "type": "sa",
                    "lines": 3,
                    "stem": "Explain why a cholecystocolic fistula causes diarrhea.",
                    "answer": "Bile drains into the colon without passing the terminal ileum, where bile salts are reabsorbed; in the colon they drive water secretion.",
                    "explanation": "This is bile acid diarrhea, a rare cause of chronic diarrhea in older patients with gallstones."
                }
            ]
        },
        {
            "section": "Symptoms and complications",
            "questions": [
                {
                    "id": "bs-r-sx-order",
                    "type": "order",
                    "stem": "Number the events of an attack of biliary colic in order.",
                    "items": [
                        "The gallbladder contracts against an impacted stone",
                        "A heavy, fatty meal",
                        "The stone dislodges and the pain resolves",
                        "CCK is released",
                        "Epigastric or RUQ pain radiating to the back or right scapula"
                    ],
                    "order": [
                        1,
                        3,
                        0,
                        4,
                        2
                    ],
                    "explanation": "The pain resolves within 6 hours; longer pain or fever suggests cholecystitis."
                },
                {
                    "id": "bs-r-sx-comp",
                    "type": "match",
                    "stem": "Match each complication to its cause.",
                    "items": [
                        "Porcelain gallbladder",
                        "Gallstone ileus",
                        "Gallstone pancreatitis",
                        "Cholangitis",
                        "Gallbladder carcinoma"
                    ],
                    "options": [
                        "A stone at the ampulla",
                        "Risk rising with stone size, highest over 3 cm",
                        "A large stone through a fistula",
                        "A common bile duct stone with infection",
                        "Repeated colic calcifying the wall"
                    ],
                    "answer": [
                        4,
                        2,
                        0,
                        3,
                        1
                    ],
                    "explanation": "Each complication follows from where the stone goes or how long it irritates the gallbladder."
                },
                {
                    "id": "bs-r-sx-silent",
                    "type": "blank",
                    "html": "Cholelithiasis is mostly [[asymptomatic]] and often found by chance on imaging; about [[1–2]]% of people with gallstones develop symptoms each year. Biliary colic has [[normal]] LFTs and no [[fever]]."
                },
                {
                    "id": "bc-r-sx-blanks",
                    "type": "blank",
                    "html": "Acute cholecystitis causes RUQ pain over [[6]] hours, RUQ tenderness, Murphy sign, [[fever]], and nausea and vomiting. LFTs are usually [[normal]]; jaundice suggests a CBD stone or [[Mirizzi]] syndrome."
                },
                {
                    "id": "bc-r-sx-match",
                    "type": "match",
                    "stem": "Match each complication to its description.",
                    "items": [
                        "Gallbladder empyema",
                        "Gangrenous cholecystitis",
                        "Emphysematous cholecystitis",
                        "Cholecystoenteric fistula",
                        "Porcelain gallbladder"
                    ],
                    "options": [
                        "Leads to gallstone ileus",
                        "Pus-filled gallbladder",
                        "Wall calcified by chronic inflammation",
                        "Wall necrosis, leading to perforation and peritonitis",
                        "Gas-forming bacteria after wall ischemia"
                    ],
                    "answer": [
                        1,
                        3,
                        4,
                        0,
                        2
                    ],
                    "explanation": "Acute complications follow infection and ischemia; fistula and porcelain gallbladder follow chronic inflammation."
                },
                {
                    "id": "bc-r-sx-ileus",
                    "type": "order",
                    "stem": "Number the steps from inflammation to gallstone ileus in order.",
                    "items": [
                        "The stone passes into the bowel",
                        "Small bowel obstruction",
                        "Chronic inflammation with a large stone",
                        "The stone lodges at the terminal ileum or ileocecal valve",
                        "A cholecystoenteric fistula forms"
                    ],
                    "order": [
                        2,
                        4,
                        0,
                        3,
                        1
                    ],
                    "explanation": "The obstruction gives CAVO: colicky pain, abdominal distention, vomiting, and obstipation."
                },
                {
                    "id": "bc-r-sx-chronic",
                    "type": "mc",
                    "stem": "Which presentation fits chronic cholecystitis?",
                    "options": [
                        "Dull pain after meals for months, rarely febrile",
                        "Sudden RUQ pain with high fever and deep jaundice",
                        "Constant RUQ pain for 12 hours with fever",
                        "Painless jaundice with a palpable gallbladder",
                        "Colicky pain with vomiting and obstipation"
                    ],
                    "answer": 0,
                    "explanation": "Chronic cholecystitis follows repeated biliary colic, with stones in over 90%; Rokitansky-Aschoff sinuses are found in about 90% of specimens.",
                    "notes": {
                        "1": "Fever with jaundice points to cholangitis or Mirizzi syndrome.",
                        "2": "This is acute cholecystitis.",
                        "3": "Painless jaundice with a palpable gallbladder suggests malignancy.",
                        "4": "This is CAVO, from gallstone ileus."
                    }
                },
                {
                    "id": "bf-r-sx-blanks",
                    "type": "blank",
                    "html": "Fistulas often cause [[no symptoms]]. Gallstone ileus is small bowel obstruction, presenting with [[colicky]] pain, abdominal distention, vomiting, and [[obstipation]]. Bouveret syndrome is gastric outlet obstruction, with [[vomiting]] and epigastric fullness. Other complications are ascending cholangitis and GI [[bleeding]]."
                },
                {
                    "id": "bf-r-sx-site",
                    "type": "mc",
                    "stem": "Why does a stone in Bouveret syndrome cause vomiting with little abdominal distention, while gallstone ileus causes marked distention?",
                    "options": [
                        "Bouveret blocks at the pylorus or duodenum, above most of the bowel",
                        "Bouveret stones are smaller and block only partly, letting gas pass on downstream",
                        "Gallstone ileus always perforates the bowel",
                        "Bouveret syndrome causes pancreatitis instead",
                        "Gallstone ileus also blocks the colon"
                    ],
                    "answer": 0,
                    "explanation": "The level of the blockage decides the picture: a high obstruction empties by vomiting, while an obstruction at the terminal ileum leaves the whole small bowel to distend.",
                    "notes": {
                        "1": "Bouveret stones are usually large; size is not the difference.",
                        "2": "Gallstone ileus is usually a non-perforating obstruction.",
                        "3": "Bouveret syndrome is gastric outlet obstruction.",
                        "4": "The colon is collapsed below an ileal obstruction."
                    }
                }
            ]
        },
        {
            "section": "Diagnosis",
            "questions": [
                {
                    "id": "bs-r-dx-us",
                    "type": "mc",
                    "stem": "Why is RUQ ultrasound, not a plain x-ray, the first-line test for gallstones?",
                    "options": [
                        "Most stones lack enough calcium to show on x-ray",
                        "Plain x-rays cannot image the RUQ",
                        "Ultrasound dissolves small stones",
                        "Gallstones are always radiopaque, so the x-ray adds nothing",
                        "X-rays are unsafe in anyone with abdominal pain"
                    ],
                    "answer": 0,
                    "explanation": "Ultrasound shows mobile, shadowing stones; a plain x-ray misses most stones.",
                    "notes": {
                        "1": "Plain x-rays include the RUQ; the stones are simply invisible.",
                        "2": "Ultrasound images stones; it does not treat them.",
                        "3": "Most stones are radiolucent.",
                        "4": "Radiation is not the reason; the x-ray misses most stones."
                    }
                },
                {
                    "id": "bs-r-dx-labs",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why are LFTs and an FBC taken in suspected biliary colic, when they are expected to be normal?",
                    "answer": "To look for complications: raised white cells suggest cholecystitis, and raised bilirubin or ALP suggests a duct stone.",
                    "explanation": "Normal results support simple colic; abnormal ones show the stone has caused more."
                },
                {
                    "id": "bc-r-dx-match",
                    "type": "match",
                    "stem": "Match each condition to the test that confirms it.",
                    "items": [
                        "Acute cholecystitis",
                        "Acute cholecystitis with an unclear ultrasound",
                        "Mirizzi syndrome",
                        "Gallstone ileus",
                        "Chronic cholecystitis"
                    ],
                    "options": [
                        "CT showing Rigler triad",
                        "HIDA scan with CCK: ejection fraction under 35%",
                        "RUQ ultrasound",
                        "MRCP or ERCP",
                        "HIDA scan: gallbladder does not fill"
                    ],
                    "answer": [
                        2,
                        4,
                        3,
                        0,
                        1
                    ],
                    "explanation": "Ultrasound comes first; HIDA, MRCP or ERCP, and CT answer specific questions."
                },
                {
                    "id": "bc-r-dx-hida",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does the gallbladder not fill on a HIDA scan in acute cholecystitis?",
                    "answer": "The cystic duct is blocked, so tracer excreted in bile passes to the duodenum but cannot enter the gallbladder.",
                    "explanation": "In chronic cholecystitis the gallbladder fills but empties poorly after CCK."
                },
                {
                    "id": "bc-r-dx-emph",
                    "type": "blank",
                    "html": "Emphysematous cholecystitis shows [[gas]] in the gallbladder wall or lumen on [[CT]]. FBC shows [[leukocytosis]] in acute cholecystitis."
                },
                {
                    "id": "bf-r-dx-table",
                    "type": "blank",
                    "stem": "Complete the table.",
                    "html": "<table><thead><tr><th>For</th><th>Obtain</th></tr></thead><tbody>\n<tr><td>Suspected fistula</td><td>CT abdomen: [[pneumobilia]]</td></tr>\n<tr><td>Gallstone ileus</td><td>CT: [[Rigler triad]] (sensitivity ~[[93]]%); x-ray may also show it</td></tr>\n<tr><td>Fistula opening</td><td>[[ERCP]] or upper endoscopy</td></tr>\n</tbody></table>"
                },
                {
                    "id": "bf-r-dx-rigler",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Name the three parts of Rigler triad, and say how each arises.",
                    "answer": "Pneumobilia (air enters through the fistula), small bowel obstruction (the stone blocks the lumen), and an ectopic gallstone (the stone in the bowel).",
                    "explanation": "The triad is the imaging signature of gallstone ileus."
                },
                {
                    "id": "bf-r-dx-air",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why do the bile ducts normally contain no air?",
                    "answer": "The sphincter of Oddi keeps the gut closed off from the ducts, so air enters only through an abnormal opening such as a fistula.",
                    "explanation": "Pneumobilia without previous ERCP or biliary surgery points to a biliary-enteric fistula."
                }
            ]
        },
        {
            "section": "Treatment",
            "questions": [
                {
                    "id": "bs-r-tx-match",
                    "type": "match",
                    "stem": "Match each patient to the treatment.",
                    "items": [
                        "Gallstones found by chance, never symptomatic",
                        "Recurrent biliary colic, fit for surgery",
                        "Biliary colic with small cholesterol stones, unfit for surgery"
                    ],
                    "options": [
                        "Ursodeoxycholic acid",
                        "No treatment",
                        "Pain relief, then elective laparoscopic cholecystectomy"
                    ],
                    "answer": [
                        1,
                        2,
                        0
                    ],
                    "explanation": "Silent stones are left alone; symptomatic stones are removed with the gallbladder; ursodeoxycholic acid is for those unfit for surgery."
                },
                {
                    "id": "bs-r-tx-urso",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which statements about ursodeoxycholic acid are correct?",
                    "options": [
                        "It works only on small cholesterol stones",
                        "It dissolves fewer than half of stones",
                        "It dissolves black pigment stones",
                        "It is first line for biliary colic",
                        "It works best on calcified stones"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Ursodeoxycholic acid is for patients not fit for surgery, with small cholesterol stones only, and dissolves fewer than half.",
                    "notes": {
                        "2": "Pigment stones are not cholesterol and do not dissolve.",
                        "3": "Elective laparoscopic cholecystectomy is first line.",
                        "4": "Calcium does not dissolve; small cholesterol stones respond best."
                    }
                },
                {
                    "id": "bs-r-tx-silent",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why are asymptomatic gallstones not removed?",
                    "answer": "Most never cause symptoms (about 1–2% a year do), so the risks of surgery outweigh the benefit.",
                    "explanation": "Cholecystectomy is offered once stones cause symptoms."
                },
                {
                    "id": "bc-r-tx-match",
                    "type": "match",
                    "stem": "Match each situation to its treatment.",
                    "items": [
                        "Acute calculous cholecystitis, fit for surgery",
                        "Too unwell for surgery, or acalculous",
                        "Gangrene, perforation, or emphysematous",
                        "Gallstone ileus",
                        "Chronic cholecystitis, unfit for surgery"
                    ],
                    "options": [
                        "Emergency cholecystectomy",
                        "Low-fat diet",
                        "Early laparoscopic cholecystectomy within 72 hours",
                        "Enterolithotomy",
                        "Percutaneous cholecystostomy with ABX"
                    ],
                    "answer": [
                        2,
                        4,
                        0,
                        3,
                        1
                    ],
                    "explanation": "Each treatment fits how sick the patient is and where the problem lies."
                },
                {
                    "id": "bc-r-tx-porcelain",
                    "type": "mc",
                    "select": 2,
                    "stem": "When is cholecystectomy advised for a porcelain gallbladder?",
                    "options": [
                        "When it causes symptoms",
                        "When the calcification is selective mucosal",
                        "Always, at once, because cancer is likely",
                        "Only once cancer is proven on biopsy",
                        "Never, because the risk is zero"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "The cancer risk is lower than once thought: cholecystectomy if symptomatic or with selective mucosal calcification; otherwise discuss observation.",
                    "notes": {
                        "2": "The cancer risk is lower than once thought.",
                        "3": "Surgery is offered before cancer develops in these two settings.",
                        "4": "Observation is discussed, not because the risk is zero."
                    }
                },
                {
                    "id": "bc-r-tx-ileus",
                    "type": "sa",
                    "lines": 2,
                    "stem": "In gallstone ileus, why is the stone removed from the bowel first, and the fistula repaired only later if needed?",
                    "answer": "The obstruction is the emergency; repairing a fused, inflamed fistula lengthens surgery in a frail, obstructed patient.",
                    "explanation": "Enterolithotomy removes the stone; fistula repair follows if needed."
                },
                {
                    "id": "bf-r-tx-match",
                    "type": "match",
                    "stem": "Match each problem to its first treatment.",
                    "items": [
                        "Gallstone ileus",
                        "Bouveret syndrome",
                        "A fistula causing recurrent cholangitis"
                    ],
                    "options": [
                        "Cholecystectomy with fistula repair",
                        "Enterolithotomy",
                        "Endoscopic stone removal"
                    ],
                    "answer": [
                        1,
                        2,
                        0
                    ],
                    "explanation": "Obstruction is relieved first, by the least invasive route that reaches the stone; a symptomatic fistula is then repaired."
                },
                {
                    "id": "bf-r-tx-why",
                    "type": "sa",
                    "lines": 3,
                    "stem": "Why is gallstone ileus treated by enterolithotomy first, with fistula repair later if needed?",
                    "answer": "The obstruction is the immediate threat; patients are older and unwell, so adding fistula surgery to an emergency adds risk, and many fistulas cause no further trouble.",
                    "explanation": "Enterolithotomy is usually open; fistula repair follows later only if needed."
                },
                {
                    "id": "bf-r-tx-bouveret",
                    "type": "mc",
                    "stem": "When is surgery used in Bouveret syndrome?",
                    "options": [
                        "When endoscopic stone removal fails",
                        "In every patient, as the first treatment",
                        "Only once the stone reaches the terminal ileum",
                        "Only when the patient also has cholangitis",
                        "Never; the stone always passes eventually"
                    ],
                    "answer": 0,
                    "explanation": "Bouveret syndrome is treated by endoscopic stone removal, with surgery if this fails.",
                    "notes": {
                        "1": "Endoscopy is tried first, because the stone is within reach.",
                        "2": "A stone at the terminal ileum would be gallstone ileus.",
                        "3": "Cholangitis is not the trigger for surgery.",
                        "4": "A stone large enough to obstruct the duodenum is unlikely to pass."
                    }
                }
            ]
        }
    ],
    "practice": {
        "scenarios": [
            {
                "title": "Pain after a takeaway dinner",
                "keyPoints": [
                    "Several of the 6 Fs together, with pain after fatty meals, make cholesterol stones and biliary colic likely.",
                    "Fat releases CCK, and the gallbladder contracts against an impacted stone; the pain settles within 6 hours as the stone dislodges.",
                    "RUQ ultrasound shows mobile, shadowing stones; a normal plain x-ray does not exclude gallstones.",
                    "Biliary colic is treated with pain relief and elective laparoscopic cholecystectomy.",
                    "Pain over 6 hours with fever means cholecystitis; jaundice with raised ALP means the stone has reached the common bile duct."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 44-year-old woman with a BMI of 34, three children, and a combined oral contraceptive has had four attacks of pain over 2 months. Each began about an hour after a takeaway meal of fried food, felt like a heavy ache under her right ribs spreading to her right shoulder blade, and settled after 2–3 hours. Her mother had her gallbladder removed.</p>",
                        "questions": [
                            {
                                "id": "bs-s1-fs",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Which of the 6 Fs does she have, and how do her contraceptive and pregnancies promote stones?",
                                "answer": "Female, fat, fertile, forty, and family history; estrogen raises cholesterol secretion into bile, and pregnancy slows gallbladder emptying.",
                                "explanation": "Most of the 6 Fs push bile toward cholesterol supersaturation."
                            },
                            {
                                "id": "bs-s1-meal",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Explain why her pain starts after fatty meals and stops within a few hours.",
                                "answer": "Fat releases CCK, so the gallbladder contracts against a stone in the cystic duct; the pain stops when the stone falls back.",
                                "explanation": "The pain resolves within 6 hours as the stone dislodges."
                            }
                        ]
                    },
                    {
                        "passage": "<p>She is seen the next day, pain-free. Her temperature is 36.7 °C, and her abdomen is soft and nontender. A plain abdominal x-ray taken at another clinic was reported as normal.</p>\n<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody><tr><td>White cells</td><td>7.4 × 10<sup>9</sup>/L</td><td>4.0–11.0</td></tr><tr><td>Bilirubin</td><td>12 µmol/L</td><td>Under 21</td></tr><tr><td>ALP</td><td>88 U/L</td><td>40–130</td></tr><tr><td>ALT</td><td>24 U/L</td><td>Under 35</td></tr></tbody></table>\n<p>RUQ ultrasound: several echogenic foci in the gallbladder that move with position and cast acoustic shadows. The gallbladder wall is thin, and the common bile duct is not dilated.</p><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "bs-s1-dx",
                                "type": "mc",
                                "justify": 15,
                                "stem": "What is the most likely diagnosis? Briefly justify your choice.",
                                "options": [
                                    "Biliary colic",
                                    "Acute cholecystitis",
                                    "Choledocholithiasis",
                                    "Gallstone pancreatitis",
                                    "Peptic ulcer disease"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Brief postprandial pain, no fever, normal LFTs, and mobile, shadowing stones.",
                                "explanation": "Biliary colic has normal LFTs and no fever, and resolves within 6 hours.",
                                "notes": {
                                    "1": "Cholecystitis gives pain over 6 hours, fever, and often a thick wall.",
                                    "2": "Her bilirubin and ALP are normal, and the duct is not dilated.",
                                    "3": "Nothing suggests a stone at the ampulla.",
                                    "4": "Epigastric pain overlaps, but meal-linked colic with stones on ultrasound fits gallstones."
                                }
                            },
                            {
                                "id": "bs-s1-xray",
                                "type": "sa",
                                "lines": 2,
                                "stem": "How can her plain x-ray be normal when she has several stones?",
                                "answer": "Only about 10% of stones have enough calcium to show; her stones are probably cholesterol, which is radiolucent.",
                                "explanation": "That is why ultrasound is first line."
                            },
                            {
                                "id": "bs-s1-plan",
                                "type": "mc",
                                "justify": 15,
                                "stem": "What is the best plan? Briefly justify your choice.",
                                "options": [
                                    "Elective laparoscopic cholecystectomy",
                                    "No treatment, since she is pain-free today",
                                    "Ursodeoxycholic acid for 2 years",
                                    "Admission for IV ABX",
                                    "ERCP to clear the stones"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Symptomatic stones recur and can cause complications; removing the gallbladder removes the source.",
                                "explanation": "Biliary colic is treated with pain relief (e.g. NSAIDs), then elective laparoscopic cholecystectomy.",
                                "notes": {
                                    "1": "No treatment is for asymptomatic stones.",
                                    "2": "Ursodeoxycholic acid is for patients not fit for surgery.",
                                    "3": "ABX treat infection; she has none.",
                                    "4": "ERCP clears common bile duct stones; her duct is normal."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>While waiting for surgery, she presents with RUQ pain that has lasted 13 hours. Her temperature is 38.5 °C.</p>\n<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody><tr><td>White cells</td><td>16.2 × 10<sup>9</sup>/L</td></tr><tr><td>Bilirubin</td><td>15 µmol/L</td></tr><tr><td>ALP</td><td>102 U/L</td></tr></tbody></table>\n<p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "bs-s1-change",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What has changed, and what does it mean about the stone?",
                                "answer": "Pain over 6 hours with fever and raised white cells: the stone has stayed in the cystic duct, causing cholecystitis.",
                                "explanation": "A persistent cystic duct block causes cholecystitis; LFTs stay normal because the common bile duct is clear."
                            }
                        ]
                    },
                    {
                        "passage": "<p>She recovers and is booked for surgery. Two weeks later she returns with yellow eyes, dark urine, and pale stools.</p>\n<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody><tr><td>Bilirubin</td><td>70 µmol/L</td></tr><tr><td>ALP</td><td>390 U/L</td></tr><tr><td>GGT</td><td>420 U/L</td></tr><tr><td>Temperature</td><td>36.9 °C</td></tr></tbody></table>\n<p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "bs-s1-cbd",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Where is the stone now, and which complication must she be watched for?",
                                "answer": "The common bile duct (choledocholithiasis); it can become infected, causing cholangitis.",
                                "explanation": "A blocked common bile duct gives a cholestatic pattern; stones there can also lodge at the ampulla and cause pancreatitis."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Pain that did not settle",
                "keyPoints": [
                    "Pain over 6 hours with fever, Murphy sign, and leukocytosis moves the diagnosis from colic to cholecystitis.",
                    "Normal LFTs show the common bile duct is clear, because only the cystic duct is blocked.",
                    "When ultrasound is unclear, a HIDA scan in which the gallbladder does not fill confirms acute cholecystitis.",
                    "Treatment is NPO, IV fluids, pain relief, and IV ABX, then early laparoscopic cholecystectomy within 72 hours.",
                    "Delay lets the wall become gangrenous; perforation needs emergency cholecystectomy."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 49-year-old woman with known gallstones has had RUQ pain for 16 hours, spreading to her right shoulder, with vomiting. Her previous attacks lasted 2 hours. Temperature 38.3 °C, heart rate 104. She stops breathing in when her RUQ is pressed.</p>\n<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody><tr><td>White cells</td><td>15.1 × 10<sup>9</sup>/L</td><td>4.0–11.0</td></tr><tr><td>Bilirubin</td><td>14 µmol/L</td><td>Under 21</td></tr><tr><td>ALP</td><td>96 U/L</td><td>40–130</td></tr><tr><td>Lipase</td><td>35 U/L</td><td>Under 60</td></tr></tbody></table>\n<p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "bc-s1-colic",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Her earlier attacks were biliary colic. Which features show that this attack is different?",
                                "answer": "Pain over 6 hours, fever, Murphy sign, and raised white cells: a persistent block with inflammation.",
                                "explanation": "Colic resolves within 6 hours, with no fever and normal LFTs."
                            },
                            {
                                "id": "bc-s1-lfts",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What do her normal bilirubin, ALP, and lipase tell you about the stone?",
                                "answer": "It is in the cystic duct, not the common bile duct or ampulla, so bile flow from the liver and the pancreatic duct are clear.",
                                "explanation": "Jaundice would suggest a CBD stone or Mirizzi syndrome; a raised lipase, gallstone pancreatitis."
                            }
                        ]
                    },
                    {
                        "passage": "<p>RUQ ultrasound: several gallstones; the wall measures 3.5 mm; a little fluid near the gallbladder; the sonographic Murphy sign cannot be assessed because she has had opioids. The report is \"equivocal.\"</p>",
                        "questions": [
                            {
                                "id": "bc-s1-next",
                                "type": "mc",
                                "justify": 15,
                                "stem": "Which test should come next? Briefly justify your choice.",
                                "options": [
                                    "HIDA scan",
                                    "Plain abdominal x-ray",
                                    "MRCP",
                                    "HIDA scan with CCK for ejection fraction",
                                    "ERCP"
                                ],
                                "answer": 0,
                                "justifyAnswer": "If the gallbladder does not fill, the cystic duct is blocked: acute cholecystitis.",
                                "explanation": "An unclear ultrasound is followed by a HIDA scan, in which the gallbladder does not fill in acute cholecystitis.",
                                "notes": {
                                    "1": "A plain x-ray misses most stones and does not show inflammation.",
                                    "2": "MRCP images the ducts, for suspected duct stones or Mirizzi syndrome.",
                                    "3": "An ejection fraction study is for chronic cholecystitis.",
                                    "4": "ERCP is for duct stones; her LFTs are normal."
                                }
                            },
                            {
                                "id": "bc-s1-hida",
                                "type": "sa",
                                "lines": 2,
                                "passage": "<p>HIDA scan: tracer appears in the bile ducts and duodenum by 30 minutes; the gallbladder is not seen at 4 hours.</p>",
                                "stem": "Interpret the HIDA scan.",
                                "answer": "The gallbladder does not fill because the cystic duct is blocked: acute cholecystitis; open ducts to the duodenum.",
                                "explanation": "Tracer reaching the duodenum shows the common bile duct is open."
                            }
                        ]
                    },
                    {
                        "passage": "<p>She is admitted.</p>",
                        "questions": [
                            {
                                "id": "bc-s1-plan",
                                "type": "order",
                                "stem": "Number her management steps in order.",
                                "items": [
                                    "Laparoscopic cholecystectomy",
                                    "NPO, IV fluids, and pain relief",
                                    "IV ABX",
                                    "Decide whether she is fit for surgery"
                                ],
                                "order": [
                                    1,
                                    2,
                                    3,
                                    0
                                ],
                                "explanation": "Supportive care and ABX come first; early laparoscopic cholecystectomy follows within 72 hours if she is fit."
                            },
                            {
                                "id": "bc-s1-abx",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Which organisms should her ABX cover, and why?",
                                "answer": "E. coli, Klebsiella, and Enterococcus: gut organisms that colonize the obstructed gallbladder.",
                                "explanation": "Colonization causes fever and sepsis."
                            }
                        ]
                    },
                    {
                        "passage": "<p>Her surgery is delayed by a theater backlog. On day 5, her pain becomes generalized and her abdomen is rigid. Temperature 39.2 °C, heart rate 128, BP 92/56. CT shows a defect in the gallbladder wall with free fluid and a collection in the RUQ.</p>",
                        "questions": [
                            {
                                "id": "bc-s1-perf",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Explain what has happened to her gallbladder, and how she should be treated.",
                                "answer": "Gangrene: pressure and inflammation made the wall necrotic, and it perforated, causing an abscess and peritonitis; emergency cholecystectomy.",
                                "explanation": "Gangrene, perforation, or emphysematous cholecystitis needs emergency cholecystectomy."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "A man in the burns unit",
                "keyPoints": [
                    "Critically ill patients (ICU, burns, sepsis, TPN) develop acalculous cholecystitis from stasis and ischemia, without a stone.",
                    "A stone-free gallbladder does not exclude cholecystitis; wall thickening and fluid in a septic patient are enough to act on.",
                    "Patients too unwell for surgery, or with acalculous disease, have a percutaneous cholecystostomy with ABX.",
                    "Gas in the gallbladder wall on CT is emphysematous cholecystitis, most often Clostridium perfringens in men and diabetics.",
                    "Emphysematous cholecystitis has a high mortality and needs emergency cholecystectomy."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 62-year-old man with type 2 diabetes is in ICU 12 days after 45% burns. He is on noradrenaline and TPN, with nothing by mouth. He develops a new fever of 38.9 °C, and his white cells rise from 11 to 21 × 10<sup>9</sup>/L. His RUQ appears tender. Ultrasound shows a distended gallbladder with a 6 mm wall and pericholecystic fluid, and no stones.</p>",
                        "questions": [
                            {
                                "id": "bc-s2-dx",
                                "type": "mc",
                                "justify": 15,
                                "stem": "What is the most likely diagnosis? Briefly justify your choice.",
                                "options": [
                                    "Acalculous cholecystitis",
                                    "Calculous cholecystitis",
                                    "Choledocholithiasis",
                                    "Chronic cholecystitis flaring",
                                    "Mirizzi syndrome"
                                ],
                                "answer": 0,
                                "justifyAnswer": "An inflamed gallbladder without stones in a critically ill patient on TPN and vasopressors.",
                                "explanation": "Acalculous cholecystitis is about 10% of acute cases, in critically ill patients.",
                                "notes": {
                                    "1": "There are no stones.",
                                    "2": "Nothing suggests a duct stone, and no stones are seen.",
                                    "3": "Chronic cholecystitis follows repeated colic and is rarely febrile.",
                                    "4": "Mirizzi syndrome needs an impacted stone."
                                }
                            },
                            {
                                "id": "bc-s2-why",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Explain how his ICU treatment has contributed to this.",
                                "answer": "TPN and fasting mean no CCK, so bile stagnates; shock and noradrenaline reduce blood flow to the wall, causing ischemia.",
                                "explanation": "Stasis and ischemia inflame the wall without a stone."
                            }
                        ]
                    },
                    {
                        "passage": "<p>He is judged too unstable for an operation.</p>",
                        "questions": [
                            {
                                "id": "bc-s2-tx",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What treatment should he have, and why can it not wait?",
                                "answer": "Percutaneous cholecystostomy with ABX; acalculous disease has a high risk of gangrene and perforation.",
                                "explanation": "A drain decompresses the infected gallbladder without a general anesthetic."
                            }
                        ]
                    },
                    {
                        "passage": "<p>Before the drain can be placed, he deteriorates. CT shows gas within the gallbladder wall and lumen.</p>",
                        "questions": [
                            {
                                "id": "bc-s2-gas",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which two statements about this new finding are correct?",
                                "options": [
                                    "It is emphysematous cholecystitis, often from Clostridium perfringens",
                                    "His diabetes and male sex put him at higher risk",
                                    "It is gallstone ileus through a fistula",
                                    "It shows the drain is no longer needed",
                                    "It is a benign finding after TPN"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "Emphysematous cholecystitis follows wall ischemia with gas-forming bacteria, in men and diabetics, and has a high mortality.",
                                "notes": {
                                    "2": "Gallstone ileus gives air in the bile ducts and bowel obstruction.",
                                    "3": "The gas makes treatment more urgent, not less.",
                                    "4": "Gas in the wall means a dangerous infection."
                                }
                            },
                            {
                                "id": "bc-s2-emerg",
                                "type": "sa",
                                "lines": 2,
                                "stem": "How should his treatment change, and why?",
                                "answer": "Emergency cholecystectomy, because the gas-forming infection in an ischemic wall rapidly causes gangrene and perforation.",
                                "explanation": "Emphysematous cholecystitis, like gangrene and perforation, needs emergency cholecystectomy."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Vomiting that comes and goes",
                "keyPoints": [
                    "Intermittent obstructive symptoms in an older woman with gallstones and no surgery should raise gallstone ileus.",
                    "Pneumobilia without previous ERCP or biliary surgery points to a biliary-enteric fistula.",
                    "CT confirms Rigler triad in about 93%, so a nondiagnostic x-ray is followed by CT.",
                    "Enterolithotomy relieves the obstruction first; the fistula is left unless it causes symptoms.",
                    "A fistula that later causes recurrent cholangitis is treated by cholecystectomy with fistula repair."
                ],
                "blocks": [
                    {
                        "passage": "<p>An 81-year-old woman has had 5 days of crampy central abdominal pain and vomiting that eased for a day, then returned worse. She has passed no stool or flatus for 36 hours. She had RUQ pain after meals on and off for 20 years but never had it investigated. She has never had abdominal surgery. Her abdomen is distended, with tinkling bowel sounds and no hernias.</p>\n<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>\n<tr><td>White cell count</td><td>11.8 × 10⁹/L</td><td>4.0–11.0</td></tr>\n<tr><td>Sodium</td><td>131 mmol/L</td><td>135–145</td></tr>\n<tr><td>Potassium</td><td>3.2 mmol/L</td><td>3.5–5.2</td></tr>\n<tr><td>Creatinine</td><td>132 µmol/L</td><td>45–90</td></tr>\n<tr><td>Bilirubin</td><td>14 µmol/L</td><td>Under 20</td></tr>\n<tr><td>Lipase</td><td>40 U/L</td><td>Under 60</td></tr>\n</tbody></table><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "bf-s1-why",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Her small bowel obstruction has no hernia or previous surgery to explain it. Using her history, what cause should you suspect, and why might her symptoms have come and gone?",
                                "answer": "Gallstone ileus: a large stone through a fistula; it can move along the bowel, easing and then blocking again further down.",
                                "explanation": "Older women with long-standing gallstones are the usual patients; a stone can lodge, move on, and lodge again lower down before it impacts at the terminal ileum."
                            },
                            {
                                "id": "bf-s1-bloods",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What do her bloods show, and what do they mean for her immediate care?",
                                "answer": "Hyponatremia, hypokalemia, and kidney injury from vomiting and fluid loss; she needs IV fluids and electrolyte replacement before surgery.",
                                "explanation": "Obstruction causes vomiting and fluid sequestration in the bowel; resuscitation comes before enterolithotomy."
                            }
                        ]
                    },
                    {
                        "passage": "<p>Her abdominal x-ray shows dilated small bowel loops, but no stone or biliary air is seen.</p>",
                        "questions": [
                            {
                                "id": "bf-s1-ct",
                                "type": "mc",
                                "justify": 12,
                                "stem": "What is the best next test? Briefly justify your choice.",
                                "options": [
                                    "CT abdomen",
                                    "Repeat x-ray in 24 hours",
                                    "HIDA scan",
                                    "Colonoscopy",
                                    "Abdominal ultrasound alone"
                                ],
                                "answer": 0,
                                "justifyAnswer": "CT shows Rigler triad in about 93%; the x-ray often misses it.",
                                "explanation": "An x-ray may show Rigler triad but often does not; CT is more sensitive and shows where the stone sits.",
                                "notes": {
                                    "1": "Waiting delays treatment of an obstruction.",
                                    "2": "A HIDA scan tests the cystic duct in cholecystitis.",
                                    "3": "Colonoscopy cannot reach an ileal stone and is unsafe in obstruction.",
                                    "4": "Bowel gas limits ultrasound in obstruction."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p><strong>CT abdomen:</strong> Air in the intrahepatic ducts and gallbladder. A thick-walled, contracted gallbladder fused to the first part of the duodenum. Dilated small bowel to a 3.4-cm laminated stone in the terminal ileum; collapsed colon. No free air or ischemic bowel.</p>",
                        "questions": [
                            {
                                "id": "bf-s1-read",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Identify each part of Rigler triad in this report, and name the fistula.",
                                "answer": "Pneumobilia, small bowel obstruction, and the ileal stone; a cholecystoduodenal fistula.",
                                "explanation": "The cholecystoduodenal fistula is the most common type and the main route for gallstone ileus."
                            },
                            {
                                "id": "bf-s1-op",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which two statements about her operation are correct?",
                                "options": [
                                    "Enterolithotomy removes the stone and relieves the obstruction",
                                    "The fistula is left now and repaired later only if needed",
                                    "Cholecystectomy and fistula repair must be done at the same time",
                                    "A right hemicolectomy is needed to remove the stone",
                                    "The operation can be avoided if the stone is pushed into the colon at colonoscopy"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "Enterolithotomy first, usually open; fistula repair later if needed.",
                                "notes": {
                                    "2": "A one-stage operation adds risk in an older, unwell patient.",
                                    "3": "No bowel needs to be removed.",
                                    "4": "Colonoscopy cannot reach the stone above the ileocecal valve."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>She recovers. A year later she is admitted twice with fever, rigors, RUQ pain, and a bilirubin of 60 µmol/L, each settling on IV ABX. CT still shows pneumobilia.</p>",
                        "questions": [
                            {
                                "id": "bf-s1-later",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Explain these episodes, and say what should now be done about the fistula.",
                                "answer": "Ascending cholangitis from gut bacteria entering the ducts through the fistula; it is now symptomatic, so cholecystectomy with fistula repair.",
                                "explanation": "A symptomatic fistula is treated by cholecystectomy with fistula repair."
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
