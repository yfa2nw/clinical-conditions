// Worksheet for the Choledocholithiasis and Ascending Cholangitis page, built by tools/build-worksheet-pdf.mjs gi bile-duct-stones.
// Merged from the worksheets of the pages it replaced (choledocholithiasis, cholangitis); question ids keep a prefix from their source page.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    "title": "Choledocholithiasis and Ascending Cholangitis",
    "flowchart": {
        "title": "From a blocked duct to drainage",
        "top": "A blocked CBD holds bile still → [[cholestasis]]; bacteria ascending from the [[duodenum]] infect the stagnant bile → ascending cholangitis and sepsis",
        "rows": [
            "Cause",
            "Why it happens",
            "Clues",
            "Treatment"
        ],
        "columns": [
            [
                "1. In the CBD",
                "Bile cannot drain → conjugated bilirubin and [[bile salts]] back up; less bile reaches the gut",
                "RUQ pain, jaundice, [[pruritus]], dark urine, and pale stools; lipase normal",
                "ERCP with [[sphincterotomy]] and stone removal, then cholecystectomy the same admission"
            ],
            [
                "2. At the ampulla",
                "Blocks the bile and [[pancreatic]] ducts → enzymes activate inside the pancreas",
                "Severe epigastric pain to the back; lipase [[3]] or more times normal",
                "IV fluids, pain relief, and early [[feeding]]; ERCP only for cholangitis or ongoing obstruction"
            ],
            [
                "3. Benign or malignant stricture",
                "Scar or tumor narrows the duct",
                "Ultrasound or CT; MRCP if the cause is unclear",
                "ERCP with a [[stent]] across the stricture"
            ],
            [
                "4. Blocked biliary stent",
                "Sludge and [[biofilm]] close a stent placed at ERCP",
                "Returning jaundice and fever in a patient with a stent",
                "ERCP to replace the stent"
            ],
            [
                "5. PSC",
                "Bile stagnates behind multiple, [[beaded]] strictures",
                "MRCP: strictures with dilated segments between them",
                "ERCP drainage; episodes tend to recur"
            ]
        ],
        "span": "Stone likelihood: low, surgery; intermediate, [[MRCP]] or EUS; high, ERCP. Cholangitis: blood cultures, IV ABX such as [[piperacillin-tazobactam]], and drainage",
        "chains": [
            {
                "label": "The cholestatic pattern",
                "steps": [
                    [
                        "ALP and [[GGT]]",
                        "Rise"
                    ],
                    [
                        "Conjugated bilirubin",
                        "Rises"
                    ],
                    [
                        "AST and ALT",
                        "Can [[spike]] early, then fall"
                    ]
                ]
            },
            {
                "label": "Severity decides timing",
                "steps": [
                    [
                        "Charcot triad",
                        "Fever, RUQ pain, and jaundice; all three in only ~25%"
                    ],
                    [
                        "Reynolds pentad",
                        "Adds [[hypotension]] and confusion: septic shock"
                    ],
                    [
                        "Severe",
                        "Shock or organ failure: [[urgent]] drainage"
                    ],
                    [
                        "Mild",
                        "80–90% respond to ABX; drain before discharge"
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
                    "id": "cd-r-path-blanks",
                    "type": "blank",
                    "html": "A stone in the [[common bile duct]] blocks bile flow from the liver, causing [[cholestasis]]: bile backs up, causing [[jaundice]] and [[pale]] stools with a cholestatic LFT pattern."
                },
                {
                    "id": "cd-r-path-match",
                    "type": "match",
                    "stem": "Match each effect of the stone to its result.",
                    "items": [
                        "Back pressure",
                        "Less bile in the gut",
                        "Ampulla obstruction",
                        "Infection behind the blockage"
                    ],
                    "options": [
                        "Gallstone pancreatitis",
                        "Jaundice, pruritus, and dark urine",
                        "Ascending cholangitis",
                        "Pale stools"
                    ],
                    "answer": [
                        1,
                        3,
                        0,
                        2
                    ],
                    "explanation": "Where bile goes, and where it cannot, explains each sign; a stone at the ampulla also blocks the pancreatic duct."
                },
                {
                    "id": "cd-r-path-urine",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does a CBD stone darken the urine but lighten the stool?",
                    "answer": "Conjugated bilirubin backs up into the blood and is filtered into urine; less bile reaches the gut, so stool loses its pigment.",
                    "explanation": "Only conjugated bilirubin is water-soluble enough to reach urine."
                },
                {
                    "id": "ch-r-path-blanks",
                    "type": "blank",
                    "html": "Bile duct [[obstruction]] lets bacteria ascend from the [[duodenum]] into stagnant bile. Infected bile under [[pressure]] then pushes bacteria and toxins into the [[blood]], causing a cytokine storm and [[sepsis]]."
                },
                {
                    "id": "ch-r-path-order",
                    "type": "order",
                    "stem": "Number these steps in ascending cholangitis in order.",
                    "items": [
                        "Infected bile under raised pressure",
                        "Bacteria and toxins enter the blood",
                        "Obstruction holds bile still",
                        "Bacteria ascend from the duodenum"
                    ],
                    "order": [
                        2,
                        3,
                        0,
                        1
                    ],
                    "explanation": "Obstruction and stasis come first, then bacteria ascend, then pressure builds in infected bile, and finally bacteremia causes sepsis."
                },
                {
                    "id": "ch-r-path-flow",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why do bacteria that reach the bile duct rarely cause infection while bile is flowing?",
                    "answer": "Flowing bile flushes them back into the duodenum; only still bile lets them multiply.",
                    "explanation": "Stasis is the condition infection depends on, which is why drainage, restoring flow, is the definitive treatment."
                }
            ]
        },
        {
            "section": "Etiology",
            "questions": [
                {
                    "id": "cd-r-cause-table",
                    "type": "blank",
                    "stem": "Complete the table of where stones form.",
                    "html": "<table><thead><tr><th>Stone</th><th>Key facts</th></tr></thead><tbody>\n<tr><td>Secondary</td><td>Up to [[90]]%; form in the [[gallbladder]] and migrate into the CBD; usually [[cholesterol]] stones</td></tr>\n<tr><td>Primary</td><td>Form in the ducts with bile [[stasis]] and infection ([[brown]] pigment stones); more common in Asia; cause recurrent cholangitis</td></tr>\n</tbody></table>"
                },
                {
                    "id": "cd-r-cause-ampulla",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why does a stone at the ampulla cause pancreatitis, while a stone higher in the CBD does not?",
                    "answer": "The bile and pancreatic ducts share the ampulla, so a stone there blocks pancreatic juice, and enzymes activate inside the pancreas.",
                    "explanation": "Gallstones are the most common cause of pancreatitis."
                },
                {
                    "id": "cd-r-cause-primary",
                    "type": "mc",
                    "stem": "Why can a CBD stone appear years after cholecystectomy?",
                    "options": [
                        "Primary stones form in the ducts themselves",
                        "The gallbladder grows back after surgery",
                        "Stones are left in the liver tissue at surgery",
                        "Cholecystectomy causes hemolysis",
                        "The cystic duct stump makes cholesterol"
                    ],
                    "answer": 0,
                    "explanation": "Primary stones form in the ducts with bile stasis and infection, as brown pigment stones.",
                    "notes": {
                        "1": "The gallbladder does not regrow.",
                        "2": "Stones do not form in liver tissue.",
                        "3": "Surgery does not cause hemolysis.",
                        "4": "The stump does not make cholesterol."
                    }
                },
                {
                    "id": "ch-r-cause-match",
                    "type": "match",
                    "stem": "Match each patient to the cause of the obstruction.",
                    "items": [
                        "Gallstones, with a stone in a dilated CBD",
                        "A plastic stent placed 5 months ago for pancreatic cancer",
                        "Ulcerative colitis and beaded ducts on MRCP",
                        "Previous bile duct surgery and a short, smooth narrowing"
                    ],
                    "options": [
                        "Benign stricture",
                        "CBD stone",
                        "PSC",
                        "Blocked biliary stent"
                    ],
                    "answer": [
                        1,
                        3,
                        2,
                        0
                    ],
                    "explanation": "The four causes on the page are a CBD stone (most common), a benign or malignant stricture, a blocked stent after ERCP, and PSC."
                },
                {
                    "id": "ch-r-cause-organisms",
                    "type": "blank",
                    "html": "The organisms come from the gut: [[E. coli]] most often, then [[Klebsiella]] and [[Enterococcus]]."
                },
                {
                    "id": "ch-r-cause-common",
                    "type": "mc",
                    "stem": "Why is a CBD stone the most common cause of cholangitis?",
                    "options": [
                        "Gallbladder stones are common and pass into the CBD",
                        "Stones carry bacteria into the duct from the stomach lining",
                        "Stones form within the CBD itself in most adults over 60",
                        "Stones dissolve the duct wall, letting gut bacteria in",
                        "Stones narrow the duodenum, so bacteria are pushed upward"
                    ],
                    "answer": 0,
                    "explanation": "Most CBD stones form in the gallbladder and pass into the duct, where they block bile flow; that is why cholecystectomy prevents recurrence.",
                    "notes": {
                        "1": "The bacteria ascend from the duodenum; the stone's role is to obstruct.",
                        "2": "Most CBD stones come from the gallbladder rather than forming in the duct.",
                        "3": "Stones obstruct the duct; they do not dissolve its wall.",
                        "4": "The obstruction is in the bile duct, not the duodenum."
                    }
                }
            ]
        },
        {
            "section": "Symptoms and complications",
            "questions": [
                {
                    "id": "cd-r-sx-compare",
                    "type": "blank",
                    "stem": "Complete the comparison.",
                    "html": "<table><thead><tr><th>Feature</th><th>Choledocholithiasis</th><th>Gallstone pancreatitis</th></tr></thead><tbody>\n<tr><td>Pain</td><td>[[RUQ]] pain</td><td>Severe [[epigastric]] pain radiating to the back</td></tr>\n<tr><td>LFTs</td><td>[[Cholestatic]] pattern</td><td>Cholestatic pattern</td></tr>\n<tr><td>Lipase</td><td>[[Normal]]</td><td>Increased, [[3]] or more times normal</td></tr>\n</tbody></table>"
                },
                {
                    "id": "cd-r-sx-comp",
                    "type": "match",
                    "stem": "Match each complication to its cause.",
                    "items": [
                        "Ascending cholangitis",
                        "Gallstone pancreatitis",
                        "Secondary biliary cirrhosis"
                    ],
                    "options": [
                        "A stone at the ampulla",
                        "Long-standing obstruction",
                        "Infection behind the blockage"
                    ],
                    "answer": [
                        2,
                        0,
                        1
                    ],
                    "explanation": "Each complication follows from where the stone sits, or how long it stays."
                },
                {
                    "id": "cd-r-sx-itch",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Which substance causes the pruritus of a blocked duct, and why does hemolysis not cause itch?",
                    "answer": "Bile salts backing up; hemolysis raises only unconjugated bilirubin, not bile salts.",
                    "explanation": "Back pressure raises both conjugated bilirubin and bile salts."
                },
                {
                    "id": "ch-r-sx-triad",
                    "type": "blank",
                    "html": "Charcot triad is [[fever]], [[RUQ pain]], and [[jaundice]]. Reynolds pentad adds [[hypotension]] and [[confusion]], and means [[septic shock]]."
                },
                {
                    "id": "ch-r-sx-why",
                    "type": "sa",
                    "lines": 3,
                    "stem": "Explain how each feature of Charcot triad arises from infected bile under pressure.",
                    "answer": "Fever from infection of the bile; RUQ pain from the distended, inflamed duct; jaundice because bile cannot leave the liver past the obstruction.",
                    "explanation": "Each feature of the triad maps onto one step: infection, distension, and obstruction."
                },
                {
                    "id": "ch-r-sx-sensitivity",
                    "type": "mc",
                    "stem": "Charcot triad is specific, but all three features appear in only about 25% of patients. What does this mean in practice?",
                    "options": [
                        "Its absence does not exclude cholangitis",
                        "Its presence is too unreliable to act on",
                        "It should be replaced by Murphy sign",
                        "Only patients with all three need ABX",
                        "It is useful only after ERCP"
                    ],
                    "answer": 0,
                    "explanation": "A specific but insensitive sign rules in when present but cannot rule out when absent; the Tokyo Guidelines combine other evidence.",
                    "notes": {
                        "1": "Specificity means the full triad makes cholangitis likely.",
                        "2": "Murphy sign points to cholecystitis.",
                        "3": "Patients without the full triad can still have cholangitis and need treatment.",
                        "4": "The triad is used at presentation."
                    }
                }
            ]
        },
        {
            "section": "Diagnosis",
            "questions": [
                {
                    "id": "cd-r-dx-pattern",
                    "type": "blank",
                    "html": "The cholestatic pattern is increased [[ALP]] and GGT and increased [[conjugated]] bilirubin; AST and ALT can [[spike]] early, then fall. On ultrasound the CBD is dilated over [[6]] mm, or over 8 mm after cholecystectomy, but the stone itself is seen in only [[15–40]]%."
                },
                {
                    "id": "cd-r-dx-match",
                    "type": "match",
                    "stem": "Match each likelihood of a CBD stone to the next step.",
                    "items": [
                        "No predictors",
                        "Abnormal LFTs, a dilated CBD, or age over 55",
                        "Stone seen, cholangitis, or bilirubin over 68 µmol/L with a dilated CBD"
                    ],
                    "options": [
                        "ERCP, which diagnoses and removes the stone",
                        "Cholecystectomy, with intraoperative cholangiography if needed",
                        "MRCP or endoscopic ultrasound"
                    ],
                    "answer": [
                        1,
                        2,
                        0
                    ],
                    "explanation": "The test matches the risk, so ERCP is used where it will treat a stone."
                },
                {
                    "id": "cd-r-dx-why",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why is MRCP or endoscopic ultrasound used before ERCP when the likelihood is intermediate?",
                    "answer": "They find stones without ERCP's risks, such as pancreatitis, so ERCP is kept for when there is a stone to remove.",
                    "explanation": "ERCP is invasive but treats as well as diagnoses."
                },
                {
                    "id": "ch-r-dx-table",
                    "type": "blank",
                    "stem": "Complete the table of the three kinds of evidence the Tokyo Guidelines combine.",
                    "html": "<table><thead><tr><th>Evidence of</th><th>Tests</th></tr></thead><tbody>\n<tr><td>Inflammation</td><td>FBC ([[leukocytosis]]), [[CRP]], and blood cultures</td></tr>\n<tr><td>Cholestasis</td><td>LFTs: a [[cholestatic]] pattern with increased [[bilirubin]]</td></tr>\n<tr><td>Obstruction and cause</td><td>Ultrasound or CT showing [[dilated bile ducts]]; [[MRCP]] if unclear</td></tr>\n</tbody></table>"
                },
                {
                    "id": "ch-r-dx-cultures",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why are blood cultures taken before the first dose of ABX?",
                    "answer": "Bacteremia is part of the disease, and ABX can sterilize the cultures, losing the chance to identify the organism.",
                    "explanation": "Infected bile under pressure enters the blood, so cultures often grow the causative gut organism and guide later treatment."
                },
                {
                    "id": "ch-r-dx-select",
                    "type": "mc",
                    "select": 2,
                    "stem": "Which two findings most help separate cholangitis from acute cholecystitis?",
                    "options": [
                        "A cholestatic LFT pattern with raised bilirubin",
                        "A dilated CBD on ultrasound",
                        "Fever above 38 °C",
                        "RUQ pain",
                        "A raised white cell count"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Both conditions cause fever, RUQ pain, and leukocytosis; cholestasis and a dilated CBD show the duct itself is blocked.",
                    "notes": {
                        "2": "Both cause fever.",
                        "3": "Both cause RUQ pain.",
                        "4": "Both cause leukocytosis."
                    }
                }
            ]
        },
        {
            "section": "Treatment",
            "questions": [
                {
                    "id": "cd-r-tx-order",
                    "type": "order",
                    "stem": "Number the treatment of a confirmed CBD stone in order.",
                    "items": [
                        "Cholecystectomy during the same admission",
                        "Stone removal",
                        "ERCP with sphincterotomy"
                    ],
                    "order": [
                        2,
                        1,
                        0
                    ],
                    "explanation": "Or both in one operation, by laparoscopic CBD exploration."
                },
                {
                    "id": "cd-r-tx-gp",
                    "type": "mc",
                    "select": 2,
                    "stem": "In gallstone pancreatitis, when is ERCP indicated?",
                    "options": [
                        "Cholangitis",
                        "Ongoing obstruction",
                        "Every case, within 24 hours",
                        "A lipase over 3 times normal",
                        "Mild pancreatitis with a passed stone"
                    ],
                    "answer": [
                        0,
                        1
                    ],
                    "explanation": "Gallstone pancreatitis is treated with IV fluids, pain relief, and early feeding; ERCP only for cholangitis or ongoing obstruction; cholecystectomy the same admission if mild.",
                    "notes": {
                        "2": "ERCP is not routine.",
                        "3": "A raised lipase makes the diagnosis but does not call for ERCP.",
                        "4": "A passed stone needs no ERCP; the gallbladder is removed."
                    }
                },
                {
                    "id": "cd-r-tx-why",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why is the gallbladder removed during the same admission after a CBD stone or mild gallstone pancreatitis?",
                    "answer": "Most duct stones come from the gallbladder, so it can release another stone and cause a repeat attack.",
                    "explanation": "Up to 90% of CBD stones are secondary."
                },
                {
                    "id": "ch-r-tx-order",
                    "type": "order",
                    "stem": "Number the steps of treatment for severe cholangitis in order.",
                    "items": [
                        "Cholecystectomy once recovered, if gallstones were the cause",
                        "Urgent ERCP with stone removal or stent",
                        "IV fluids, with vasopressors if in shock, and blood cultures",
                        "Broad-spectrum IV ABX"
                    ],
                    "order": [
                        2,
                        3,
                        1,
                        0
                    ],
                    "explanation": "Resuscitate and culture, start ABX, drain the bile urgently, then prevent recurrence once recovered."
                },
                {
                    "id": "ch-r-tx-drain",
                    "type": "sa",
                    "lines": 2,
                    "stem": "Why is ERCP, rather than ABX, called the definitive treatment?",
                    "answer": "ERCP removes the obstruction, restoring flow and lowering pressure; ABX cannot clear infected bile that stays trapped.",
                    "explanation": "Drainage removes the source; ABX control the bacteremia while it is done."
                },
                {
                    "id": "ch-r-tx-timing",
                    "type": "match",
                    "stem": "Match each situation to the plan.",
                    "items": [
                        "Shock or organ failure",
                        "Mild, improving on ABX",
                        "ERCP cannot reach the duct",
                        "Recovered, with stones in the gallbladder"
                    ],
                    "options": [
                        "Percutaneous drainage",
                        "Cholecystectomy",
                        "Urgent drainage",
                        "Drainage before discharge"
                    ],
                    "answer": [
                        2,
                        3,
                        0,
                        1
                    ],
                    "explanation": "Severity sets the timing of drainage, the route depends on whether ERCP succeeds, and cholecystectomy removes the source of stones."
                },
                {
                    "id": "ch-r-tx-abx",
                    "type": "mc",
                    "stem": "Why is a broad-spectrum IV agent such as piperacillin-tazobactam chosen?",
                    "options": [
                        "It covers the gut organisms that ascend from the duodenum",
                        "It dissolves the obstructing stone while it treats infection",
                        "It is the only ABX that is excreted unchanged in bile",
                        "It covers the skin organisms that are introduced by ERCP",
                        "It treats the fungal infection of bile that causes sepsis"
                    ],
                    "answer": 0,
                    "explanation": "The organisms are gut flora (E. coli, Klebsiella, Enterococcus), and the patient is septic or at risk, so a broad-spectrum IV agent is used.",
                    "notes": {
                        "1": "ABX do not dissolve stones.",
                        "2": "Several ABX reach bile; the choice follows the organisms.",
                        "3": "The organisms come from the gut, not the skin.",
                        "4": "Cholangitis is bacterial."
                    }
                }
            ]
        }
    ],
    "practice": {
        "scenarios": [
            {
                "title": "Itching and dark urine",
                "keyPoints": [
                    "Painful jaundice with pruritus, dark urine, and pale stools points to a stone blocking the CBD.",
                    "A cholestatic pattern rises over days, while AST and ALT can spike early and then fall.",
                    "A stone seen on ultrasound, cholangitis, or bilirubin over 68 µmol/L with a dilated duct means high likelihood: ERCP.",
                    "ERCP with sphincterotomy removes the stone; cholecystectomy follows during the same admission.",
                    "Laparoscopic CBD exploration can clear the duct and remove the gallbladder in one operation."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 59-year-old man has 3 days of RUQ pain, yellow eyes, itching, urine \"the color of cola,\" and pale stools. He is afebrile. He had two short attacks of RUQ pain after meals last year.</p>",
                        "questions": [
                            {
                                "id": "cd-s1-signs",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Explain each of his four signs of obstruction: jaundice, itching, dark urine, and pale stools.",
                                "answer": "Conjugated bilirubin backs up (jaundice) and is filtered into urine (dark urine); bile salts back up (itch); less bile reaches the gut (pale stools).",
                                "explanation": "All four come from one blocked duct."
                            },
                            {
                                "id": "cd-s1-source",
                                "type": "sa",
                                "lines": 2,
                                "stem": "His earlier attacks were probably biliary colic. How does that history help explain where his duct stone came from?",
                                "answer": "He has gallbladder stones; most CBD stones are secondary, migrating from the gallbladder.",
                                "explanation": "Up to 90% of CBD stones are secondary, usually cholesterol."
                            }
                        ]
                    },
                    {
                        "passage": "<table><thead><tr><th>Test</th><th>Day 1</th><th>Day 3</th><th>Reference</th></tr></thead><tbody><tr><td>ALT (U/L)</td><td>410</td><td>160</td><td>Under 35</td></tr><tr><td>ALP (U/L)</td><td>240</td><td>420</td><td>40–130</td></tr><tr><td>GGT (U/L)</td><td>310</td><td>520</td><td>Under 50</td></tr><tr><td>Bilirubin (µmol/L)</td><td>55</td><td>96</td><td>Under 21</td></tr><tr><td>Lipase (U/L)</td><td>40</td><td>38</td><td>Under 60</td></tr></tbody></table>\n<p>Ultrasound: gallstones; CBD 11 mm with an echogenic, shadowing focus in its distal part.</p><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "cd-s1-trend",
                                "type": "sa",
                                "lines": 2,
                                "stem": "His ALT is falling. Why does that not mean he is getting better?",
                                "answer": "AST and ALT spike early, then fall; his ALP, GGT, and bilirubin are still rising, so the duct is still blocked.",
                                "explanation": "The cholestatic markers track the obstruction."
                            },
                            {
                                "id": "cd-s1-next",
                                "type": "mc",
                                "justify": 15,
                                "stem": "Which is the best next step? Briefly justify your choice.",
                                "options": [
                                    "ERCP",
                                    "MRCP",
                                    "Endoscopic ultrasound",
                                    "Cholecystectomy with intraoperative cholangiography",
                                    "Repeat LFTs in a week"
                                ],
                                "answer": 0,
                                "justifyAnswer": "The stone is seen, and bilirubin is over 4 with a dilated duct: high likelihood.",
                                "explanation": "High likelihood goes straight to ERCP, which diagnoses and removes the stone.",
                                "notes": {
                                    "1": "MRCP is for intermediate likelihood.",
                                    "2": "Endoscopic ultrasound is for intermediate likelihood.",
                                    "3": "This suits low likelihood.",
                                    "4": "Waiting risks cholangitis."
                                }
                            },
                            {
                                "id": "cd-s1-lipase",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What does his normal lipase tell you about where the stone sits?",
                                "answer": "It is not blocking the pancreatic duct at the ampulla, so there is no gallstone pancreatitis.",
                                "explanation": "Lipase 3 or more times normal would point to pancreatitis."
                            }
                        ]
                    },
                    {
                        "passage": "<p>ERCP with sphincterotomy removes a 9 mm stone. His bilirubin falls over 2 days.</p>",
                        "questions": [
                            {
                                "id": "cd-s1-after",
                                "type": "mc",
                                "justify": 15,
                                "stem": "What should happen next? Briefly justify your choice.",
                                "options": [
                                    "Cholecystectomy during this admission",
                                    "Discharge, with surgery only if pain recurs",
                                    "Ursodeoxycholic acid for life",
                                    "Repeat ERCP every year",
                                    "No further treatment"
                                ],
                                "answer": 0,
                                "justifyAnswer": "His gallbladder still holds stones that can migrate into the duct again.",
                                "explanation": "Cholecystectomy follows ERCP during the same admission.",
                                "notes": {
                                    "1": "Waiting risks another duct stone, cholangitis, or pancreatitis.",
                                    "2": "It dissolves only small cholesterol stones, slowly.",
                                    "3": "Repeated ERCP does not remove the source.",
                                    "4": "The source remains."
                                }
                            },
                            {
                                "id": "cd-s1-alt",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Name an approach that would have treated both his duct and gallbladder in one operation.",
                                "answer": "Laparoscopic CBD exploration during cholecystectomy.",
                                "explanation": "It clears the duct during the cholecystectomy itself."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Pain through to the back",
                "keyPoints": [
                    "Severe epigastric pain to the back with lipase 3 or more times normal, gallstones, and a cholestatic pattern is gallstone pancreatitis.",
                    "A stone at the ampulla blocks both ducts, so patients can be jaundiced.",
                    "Gallstone pancreatitis is treated with IV fluids, pain relief, and early feeding; ERCP is not routine.",
                    "Rising bilirubin or fever means ongoing obstruction or cholangitis, the two reasons for ERCP.",
                    "Once a mild attack settles, cholecystectomy is done during the same admission."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 48-year-old woman has 8 hours of severe epigastric pain radiating to her back, with repeated vomiting. She drinks alcohol rarely.</p>\n<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody><tr><td>Lipase</td><td>2400 U/L</td><td>Under 60</td></tr><tr><td>Bilirubin</td><td>44 µmol/L</td><td>Under 21</td></tr><tr><td>ALP</td><td>220 U/L</td><td>40–130</td></tr><tr><td>ALT</td><td>290 U/L</td><td>Under 35</td></tr><tr><td>Temperature</td><td>37.0 °C</td><td></td></tr></tbody></table>\n<p>Ultrasound: gallstones; CBD 8 mm; no stone seen in the duct.</p><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "cd-s2-dx",
                                "type": "mc",
                                "justify": 15,
                                "stem": "What is the most likely diagnosis? Briefly justify your choice.",
                                "options": [
                                    "Gallstone pancreatitis",
                                    "Choledocholithiasis without pancreatitis",
                                    "Acute cholecystitis",
                                    "Alcohol-related pancreatitis",
                                    "Biliary colic"
                                ],
                                "answer": 0,
                                "justifyAnswer": "Epigastric pain to the back, lipase far above 3 times normal, gallstones, and cholestatic LFTs.",
                                "explanation": "Gallstones are the most common cause of pancreatitis.",
                                "notes": {
                                    "1": "Lipase is normal in choledocholithiasis alone.",
                                    "2": "Cholecystitis gives RUQ pain, fever, and normal lipase.",
                                    "3": "She rarely drinks, and gallstones with cholestatic LFTs point to a stone.",
                                    "4": "Colic has normal LFTs and lipase."
                                }
                            },
                            {
                                "id": "cd-s2-jaundice",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Why is her bilirubin raised as well as her lipase?",
                                "answer": "The stone at the ampulla blocks the bile duct as well as the pancreatic duct.",
                                "explanation": "The two ducts share the ampulla."
                            }
                        ]
                    },
                    {
                        "passage": "<p>She is admitted.</p>",
                        "questions": [
                            {
                                "id": "cd-s2-first",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which belong in her initial treatment?",
                                "options": [
                                    "IV fluids and pain relief",
                                    "Early feeding as she tolerates it",
                                    "ERCP within 24 hours",
                                    "Nothing by mouth until lipase is normal",
                                    "Emergency cholecystectomy tonight"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "Gallstone pancreatitis is treated with IV fluids, pain relief, and early feeding.",
                                "notes": {
                                    "2": "ERCP is only for cholangitis or ongoing obstruction.",
                                    "3": "Early feeding is part of treatment.",
                                    "4": "Cholecystectomy follows once a mild attack settles, during the same admission."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<table><thead><tr><th>Test</th><th>Admission</th><th>Day 2</th></tr></thead><tbody><tr><td>Bilirubin (µmol/L)</td><td>44</td><td>87</td></tr><tr><td>ALP (U/L)</td><td>220</td><td>390</td></tr><tr><td>Temperature</td><td>37.0 °C</td><td>38.9 °C</td></tr><tr><td>White cells (× 10<sup>9</sup>/L)</td><td>12.0</td><td>18.5</td></tr></tbody></table>\n<p>She has rigors.</p><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "cd-s2-change",
                                "type": "sa",
                                "lines": 3,
                                "stem": "What do the day 2 results show, and how does her management change?",
                                "answer": "Rising bilirubin and ALP mean ongoing obstruction, and fever with rigors means cholangitis; she needs ABX and ERCP to remove the stone and drain the duct.",
                                "explanation": "Cholangitis and ongoing obstruction are the two indications for ERCP in gallstone pancreatitis."
                            }
                        ]
                    },
                    {
                        "passage": "<p>ERCP removes a stone from the ampulla. Her fever settles, her pancreatitis is mild, and she is eating by day 5.</p>",
                        "questions": [
                            {
                                "id": "cd-s2-chole",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What should be done before she goes home, and why?",
                                "answer": "Cholecystectomy during the same admission, because her gallbladder still holds stones that can cause another attack.",
                                "explanation": "Cholecystectomy during the same admission is advised in mild gallstone pancreatitis."
                            },
                            {
                                "id": "cd-s2-long",
                                "type": "sa",
                                "lines": 2,
                                "stem": "If duct stones had kept blocking her bile flow for months, what liver complication could follow?",
                                "answer": "Secondary biliary cirrhosis.",
                                "explanation": "Long-standing obstruction injures and scars the liver."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Rigors at the nursing home",
                "keyPoints": [
                    "Fever with cholestatic LFTs and a dilated CBD is cholangitis even without the full Charcot triad.",
                    "Hypotension and confusion complete Reynolds pentad: septic shock that needs urgent drainage, not a trial of ABX.",
                    "Resuscitation, cultures, ABX, and drainage run in parallel; vasopressors support perfusion until the source is removed.",
                    "Blood cultures that grow a gut organism confirm the ascending route of infection.",
                    "Cholecystectomy once recovered removes the source of stones and prevents another episode."
                ],
                "blocks": [
                    {
                        "passage": "<p>An 83-year-old woman is sent from her nursing home with a day of rigors and vomiting. Staff noticed her eyes turning yellow. She has a history of gallstones. She is drowsy but answers questions and denies pain, though she winces when her right upper quadrant is pressed. Temperature 38.9 °C, heart rate 112, BP 108/64.</p>\n<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>\n<tr><td>White cell count</td><td>16.4 × 10⁹/L</td><td>4.0–11.0</td></tr>\n<tr><td>CRP</td><td>184 mg/L</td><td>Under 5</td></tr>\n<tr><td>Bilirubin</td><td>71 µmol/L</td><td>Under 20</td></tr>\n<tr><td>ALP</td><td>356 IU/L</td><td>30–110</td></tr>\n<tr><td>GGT</td><td>448 IU/L</td><td>Under 50</td></tr>\n<tr><td>ALT</td><td>118 IU/L</td><td>Under 40</td></tr>\n<tr><td>Lipase</td><td>45 U/L</td><td>Under 60</td></tr>\n</tbody></table><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "ch-s1-pattern",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Describe the LFT pattern, and say what it tells you about where the problem is.",
                                "answer": "Cholestatic: ALP and GGT far above ALT, with raised bilirubin; bile flow is obstructed rather than hepatocytes injured.",
                                "explanation": "A cholestatic pattern with increased bilirubin is the cholestasis arm of the Tokyo Guidelines."
                            },
                            {
                                "id": "ch-s1-next",
                                "type": "mc",
                                "justify": 12,
                                "stem": "Which test should be done next? Briefly justify your choice.",
                                "options": [
                                    "Ultrasound of the abdomen",
                                    "HIDA scan",
                                    "Immediate ERCP without imaging",
                                    "CA 19-9",
                                    "Plain abdominal x-ray"
                                ],
                                "answer": 0,
                                "justifyAnswer": "It shows whether the bile ducts are dilated, and often the cause.",
                                "explanation": "Ultrasound or CT shows duct dilation and its cause, completing the evidence of obstruction; MRCP follows if it is unclear.",
                                "notes": {
                                    "1": "A HIDA scan tests the cystic duct for cholecystitis.",
                                    "2": "Imaging confirms the obstruction and guides the drainage first.",
                                    "3": "Tumor markers do not diagnose infected obstruction.",
                                    "4": "Plain x-ray misses most stones and does not show the ducts."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>Ultrasound shows a CBD of 12 mm with a stone at its lower end and many stones in the gallbladder. Blood cultures are taken. Two hours later she is confused, her BP is 82/46 after 2 L of fluid, and her urine output has fallen to 10 mL per hour.</p>",
                        "questions": [
                            {
                                "id": "ch-s1-name",
                                "type": "sa",
                                "lines": 2,
                                "stem": "What does her deterioration mean, and how does it change the timing of drainage?",
                                "answer": "Reynolds pentad: septic shock with organ failure, so drainage is now urgent rather than planned.",
                                "explanation": "Severe cholangitis, with shock or organ failure, needs urgent drainage; mild disease can be drained before discharge."
                            },
                            {
                                "id": "ch-s1-now",
                                "type": "mc",
                                "select": 2,
                                "stem": "Which two treatments should start at once, while ERCP is arranged?",
                                "options": [
                                    "Vasopressors",
                                    "Broad-spectrum IV ABX such as piperacillin-tazobactam",
                                    "Laparoscopic cholecystectomy",
                                    "Oral ursodeoxycholic acid",
                                    "Withholding treatment until the cultures grow"
                                ],
                                "answer": [
                                    0,
                                    1
                                ],
                                "explanation": "Persisting hypotension after fluids needs vasopressors, and ABX start once cultures are drawn; drainage follows urgently.",
                                "notes": {
                                    "2": "Cholecystectomy is for after recovery.",
                                    "3": "Ursodeoxycholic acid has no role in infected obstruction.",
                                    "4": "ABX are given empirically once cultures are taken."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>Urgent ERCP removes the stone, and pus drains from the duct. Her BP recovers over 24 hours, and vasopressors are stopped. Blood cultures grow a gram-negative rod.</p>",
                        "questions": [
                            {
                                "id": "ch-s1-organism",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Which organism is most likely, and what does it tell you about how the infection began?",
                                "answer": "E. coli; a gut organism that ascended from the duodenum into the stagnant bile.",
                                "explanation": "E. coli, Klebsiella, and Enterococcus ascend from the duodenum."
                            },
                            {
                                "id": "ch-s1-prevent",
                                "type": "sa",
                                "lines": 2,
                                "stem": "Her family asks how to stop this happening again. What do you advise, and why?",
                                "answer": "Cholecystectomy once she has recovered, because her gallbladder stones can pass into the CBD again.",
                                "explanation": "Cholecystectomy once recovered prevents recurrence when gallstones were the cause."
                            }
                        ]
                    }
                ]
            },
            {
                "title": "A stent and a second fever",
                "keyPoints": [
                    "A biliary stent can block with sludge and biofilm, causing cholangitis months after it was placed.",
                    "Returning jaundice with fever in a patient with a stent points to stent occlusion; drainage means replacing it.",
                    "When ERCP fails, the ducts are drained percutaneously, because drainage cannot wait in septic shock.",
                    "Cholecystostomy drains only the gallbladder and does not relieve an obstruction below the cystic duct."
                ],
                "blocks": [
                    {
                        "passage": "<p>A 69-year-old man has unresectable pancreatic head cancer. A plastic biliary stent was placed at ERCP 5 months ago, and his jaundice cleared. He now has 2 days of fever, rigors, and itch, and his wife says his eyes are yellow again. Temperature 39.0 °C, heart rate 104, BP 118/70.</p>\n<table><thead><tr><th>Test</th><th>5 months ago, after stenting</th><th>Today</th></tr></thead><tbody>\n<tr><td>Bilirubin (µmol/L)</td><td>18</td><td>88</td></tr>\n<tr><td>ALP (IU/L)</td><td>140</td><td>420</td></tr>\n<tr><td>White cell count (× 10⁹/L)</td><td>7.2</td><td>15.9</td></tr>\n</tbody></table><p><em>Illustrative data.</em></p>",
                        "questions": [
                            {
                                "id": "ch-s2-why",
                                "type": "sa",
                                "lines": 3,
                                "stem": "Explain why he has developed cholangitis now.",
                                "answer": "The stent has blocked with sludge and biofilm, so bile stagnates again and bacteria ascend from the duodenum into it.",
                                "explanation": "A blocked stent is one of the four causes of obstruction; the mechanism is the same as for a stone."
                            },
                            {
                                "id": "ch-s2-plan",
                                "type": "mc",
                                "justify": 12,
                                "stem": "He is stable. What is the best plan? Briefly justify your choice.",
                                "options": [
                                    "IV ABX and ERCP to replace the stent",
                                    "Oral ABX at home and review in a week",
                                    "IV ABX alone, leaving the stent",
                                    "Pancreaticoduodenectomy",
                                    "Percutaneous cholecystostomy"
                                ],
                                "answer": 0,
                                "justifyAnswer": "The blocked stent is the obstruction; ABX alone cannot clear trapped bile.",
                                "explanation": "Treatment is the same as for any cause: ABX and drainage, here by replacing the stent.",
                                "notes": {
                                    "1": "Fever and rigors with obstruction need IV ABX and drainage.",
                                    "2": "The blockage would persist, and the infection with it.",
                                    "3": "His cancer is unresectable.",
                                    "4": "Cholecystostomy does not drain the CBD below the cystic duct."
                                }
                            }
                        ]
                    },
                    {
                        "passage": "<p>While he waits for ERCP the next morning, his BP falls to 80/50 and he becomes confused. At ERCP, the tumor has grown into the duodenum, and the endoscopist cannot reach the ampulla.</p>",
                        "questions": [
                            {
                                "id": "ch-s2-route",
                                "type": "sa",
                                "lines": 2,
                                "stem": "How should the bile now be drained, and why can it not wait?",
                                "answer": "Percutaneous transhepatic drainage, because he is in septic shock and needs urgent drainage.",
                                "explanation": "Percutaneous drainage is used if ERCP fails; shock means severe cholangitis, which needs urgent drainage."
                            },
                            {
                                "id": "ch-s2-chole",
                                "type": "mc",
                                "stem": "A colleague suggests a percutaneous cholecystostomy instead. Why would it fail?",
                                "options": [
                                    "It drains the gallbladder, not the blocked CBD below it",
                                    "It is too slow to drain infected bile from a septic patient",
                                    "It requires a general anesthetic, which is unsafe in shock",
                                    "It cannot be done in patients who are deeply jaundiced",
                                    "It introduces skin organisms into the CBD and worsens sepsis"
                                ],
                                "answer": 0,
                                "explanation": "His obstruction is in the distal CBD; the gallbladder fills through the cystic duct above it, so draining it does not decompress the ducts reliably. Percutaneous transhepatic drainage enters the dilated ducts directly.",
                                "notes": {
                                    "1": "Speed is not the problem; it drains the wrong structure.",
                                    "2": "Cholecystostomy is usually done under local anesthesia.",
                                    "3": "Jaundice does not prevent it.",
                                    "4": "The problem is the site of drainage, not contamination."
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
