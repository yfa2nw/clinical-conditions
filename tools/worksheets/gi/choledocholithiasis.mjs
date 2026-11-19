// Worksheet for the Choledocholithiasis and Gallstone Pancreatitis page, built by tools/build-worksheet-pdf.mjs gi choledocholithiasis.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Choledocholithiasis and Gallstone Pancreatitis",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From a duct stone to treatment",
        top: "A stone in the common bile duct blocks bile flow from the liver → [[cholestasis]]",
        rows: ["Stone", "Why it happens", "Clues", "Treatment"],
        columns: [
            ["1. In the CBD", "Bile cannot drain → conjugated bilirubin and [[bile salts]] back up; less bile reaches the gut", "RUQ pain, jaundice, [[pruritus]], dark urine, and pale stools; lipase normal", "ERCP with [[sphincterotomy]] and stone removal, then cholecystectomy the same admission"],
            ["2. At the ampulla", "Blocks the bile and [[pancreatic]] ducts → enzymes activate inside the pancreas", "Severe epigastric pain to the back; lipase [[3]] or more times normal", "IV fluids, pain relief, and early [[feeding]]; ERCP only for cholangitis or ongoing obstruction"],
            ["Secondary stones (up to [[90]]%)", "Form in the gallbladder and migrate; usually [[cholesterol]]", "Gallstones in the gallbladder on ultrasound", "Cholecystectomy removes their source"],
            ["Primary stones", "Bile stasis and infection in the ducts form [[brown]] pigment stones", "More common in Asia; can form after cholecystectomy", "ERCP clears the duct; they cause recurrent [[cholangitis]]"],
        ],
        span: "Ultrasound first: CBD over [[6]] mm (over 8 after cholecystectomy); the stone is seen in only 15–40%. Low likelihood: surgery; intermediate: [[MRCP]] or EUS; high: ERCP",
        chains: [
            { label: "The cholestatic pattern", steps: [["ALP and [[GGT]]", "Rise"], ["Conjugated bilirubin", "Rises"], ["AST and ALT", "Can [[spike]] early, then fall"]] },
            { label: "Complications", steps: [["Ascending cholangitis", "Infection behind the blockage"], ["Gallstone pancreatitis", "A stone at the ampulla"], ["Secondary biliary [[cirrhosis]]", "Long-standing obstruction"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "A stone in the [[common bile duct]] blocks bile flow from the liver, causing [[cholestasis]]: bile backs up, causing [[jaundice]] and [[pale]] stools with a cholestatic LFT pattern." },
                { id: "r-path-match", type: "match",
                    stem: "Match each effect of the stone to its result.",
                    items: ["Back pressure", "Less bile in the gut", "Ampulla obstruction", "Infection behind the blockage"],
                    options: ["Gallstone pancreatitis", "Jaundice, pruritus, and dark urine", "Ascending cholangitis", "Pale stools"],
                    answer: [1, 3, 0, 2],
                    explanation: "Where bile goes, and where it cannot, explains each sign; a stone at the ampulla also blocks the pancreatic duct." },
                { id: "r-path-urine", type: "sa", lines: 2,
                    stem: "Why does a CBD stone darken the urine but lighten the stool?",
                    answer: "Conjugated bilirubin backs up into the blood and is filtered into urine; less bile reaches the gut, so stool loses its pigment.",
                    explanation: "Only conjugated bilirubin is water-soluble enough to reach urine." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of where stones form.",
                    html: `<table><thead><tr><th>Stone</th><th>Key facts</th></tr></thead><tbody>
<tr><td>Secondary</td><td>Up to [[90]]%; form in the [[gallbladder]] and migrate into the CBD; usually [[cholesterol]] stones</td></tr>
<tr><td>Primary</td><td>Form in the ducts with bile [[stasis]] and infection ([[brown]] pigment stones); more common in Asia; cause recurrent cholangitis</td></tr>
</tbody></table>` },
                { id: "r-cause-ampulla", type: "sa", lines: 2,
                    stem: "Why does a stone at the ampulla cause pancreatitis, while a stone higher in the CBD does not?",
                    answer: "The bile and pancreatic ducts share the ampulla, so a stone there blocks pancreatic juice, and enzymes activate inside the pancreas.",
                    explanation: "Gallstones are the most common cause of pancreatitis." },
                { id: "r-cause-primary", type: "mc",
                    stem: "Why can a CBD stone appear years after cholecystectomy?",
                    options: ["Primary stones form in the ducts themselves", "The gallbladder grows back after surgery", "Stones are left in the liver tissue at surgery", "Cholecystectomy causes hemolysis", "The cystic duct stump makes cholesterol"], answer: 0,
                    explanation: "Primary stones form in the ducts with bile stasis and infection, as brown pigment stones.",
                    notes: { 1: "The gallbladder does not regrow.", 2: "Stones do not form in liver tissue.", 3: "Surgery does not cause hemolysis.", 4: "The stump does not make cholesterol." } },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-compare", type: "blank",
                    stem: "Complete the comparison.",
                    html: `<table><thead><tr><th>Feature</th><th>Choledocholithiasis</th><th>Gallstone pancreatitis</th></tr></thead><tbody>
<tr><td>Pain</td><td>[[RUQ]] pain</td><td>Severe [[epigastric]] pain radiating to the back</td></tr>
<tr><td>LFTs</td><td>[[Cholestatic]] pattern</td><td>Cholestatic pattern</td></tr>
<tr><td>Lipase</td><td>[[Normal]]</td><td>Increased, [[3]] or more times normal</td></tr>
</tbody></table>` },
                { id: "r-sx-comp", type: "match",
                    stem: "Match each complication to its cause.",
                    items: ["Ascending cholangitis", "Gallstone pancreatitis", "Secondary biliary cirrhosis"],
                    options: ["A stone at the ampulla", "Long-standing obstruction", "Infection behind the blockage"],
                    answer: [2, 0, 1],
                    explanation: "Each complication follows from where the stone sits, or how long it stays." },
                { id: "r-sx-itch", type: "sa", lines: 2,
                    stem: "Which substance causes the pruritus of a blocked duct, and why does hemolysis not cause itch?",
                    answer: "Bile salts backing up; hemolysis raises only unconjugated bilirubin, not bile salts.",
                    explanation: "Back pressure raises both conjugated bilirubin and bile salts." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-pattern", type: "blank",
                    html: "The cholestatic pattern is increased [[ALP]] and GGT and increased [[conjugated]] bilirubin; AST and ALT can [[spike]] early, then fall. On ultrasound the CBD is dilated over [[6]] mm, or over 8 mm after cholecystectomy, but the stone itself is seen in only [[15–40]]%." },
                { id: "r-dx-match", type: "match",
                    stem: "Match each likelihood of a CBD stone to the next step.",
                    items: ["No predictors", "Abnormal LFTs, a dilated CBD, or age over 55", "Stone seen, cholangitis, or bilirubin over 68 µmol/L with a dilated CBD"],
                    options: ["ERCP, which diagnoses and removes the stone", "Cholecystectomy, with intraoperative cholangiography if needed", "MRCP or endoscopic ultrasound"],
                    answer: [1, 2, 0],
                    explanation: "The test matches the risk, so ERCP is used where it will treat a stone." },
                { id: "r-dx-why", type: "sa", lines: 2,
                    stem: "Why is MRCP or endoscopic ultrasound used before ERCP when the likelihood is intermediate?",
                    answer: "They find stones without ERCP's risks, such as pancreatitis, so ERCP is kept for when there is a stone to remove.",
                    explanation: "ERCP is invasive but treats as well as diagnoses." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-order", type: "order",
                    stem: "Number the treatment of a confirmed CBD stone in order.",
                    items: ["Cholecystectomy during the same admission", "Stone removal", "ERCP with sphincterotomy"],
                    order: [2, 1, 0],
                    explanation: "Or both in one operation, by laparoscopic CBD exploration." },
                { id: "r-tx-gp", type: "mc", select: 2,
                    stem: "In gallstone pancreatitis, when is ERCP indicated?",
                    options: ["Cholangitis", "Ongoing obstruction", "Every case, within 24 hours", "A lipase over 3 times normal", "Mild pancreatitis with a passed stone"], answer: [0, 1],
                    explanation: "Gallstone pancreatitis is treated with IV fluids, pain relief, and early feeding; ERCP only for cholangitis or ongoing obstruction; cholecystectomy the same admission if mild.",
                    notes: { 2: "ERCP is not routine.", 3: "A raised lipase makes the diagnosis but does not call for ERCP.", 4: "A passed stone needs no ERCP; the gallbladder is removed." } },
                { id: "r-tx-why", type: "sa", lines: 2,
                    stem: "Why is the gallbladder removed during the same admission after a CBD stone or mild gallstone pancreatitis?",
                    answer: "Most duct stones come from the gallbladder, so it can release another stone and cause a repeat attack.",
                    explanation: "Up to 90% of CBD stones are secondary." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Itching and dark urine",
                keyPoints: [
                    "Painful jaundice with pruritus, dark urine, and pale stools points to a stone blocking the CBD.",
                    "A cholestatic pattern rises over days, while AST and ALT can spike early and then fall.",
                    "A stone seen on ultrasound, cholangitis, or bilirubin over 68 µmol/L with a dilated duct means high likelihood: ERCP.",
                    "ERCP with sphincterotomy removes the stone; cholecystectomy follows during the same admission.",
                    "Laparoscopic CBD exploration can clear the duct and remove the gallbladder in one operation.",
                ],
                blocks: [
                    { passage: `<p>A 59-year-old man has 3 days of RUQ pain, yellow eyes, itching, urine "the color of cola," and pale stools. He is afebrile. He had two short attacks of RUQ pain after meals last year.</p>`,
                        questions: [
                            { id: "s1-signs", type: "sa", lines: 3,
                                stem: "Explain each of his four signs of obstruction: jaundice, itching, dark urine, and pale stools.",
                                answer: "Conjugated bilirubin backs up (jaundice) and is filtered into urine (dark urine); bile salts back up (itch); less bile reaches the gut (pale stools).",
                                explanation: "All four come from one blocked duct." },
                            { id: "s1-source", type: "sa", lines: 2,
                                stem: "His earlier attacks were probably biliary colic. How does that history help explain where his duct stone came from?",
                                answer: "He has gallbladder stones; most CBD stones are secondary, migrating from the gallbladder.",
                                explanation: "Up to 90% of CBD stones are secondary, usually cholesterol." },
                        ] },
                    { passage: `${labs(["Test", "Day 1", "Day 3", "Reference"], [["ALT (U/L)", "410", "160", "Under 35"], ["ALP (U/L)", "240", "420", "40–130"], ["GGT (U/L)", "310", "520", "Under 50"], ["Bilirubin (µmol/L)", "55", "96", "Under 21"], ["Lipase (U/L)", "40", "38", "Under 60"]])}
<p>Ultrasound: gallstones; CBD 11 mm with an echogenic, shadowing focus in its distal part.</p><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-trend", type: "sa", lines: 2,
                                stem: "His ALT is falling. Why does that not mean he is getting better?",
                                answer: "AST and ALT spike early, then fall; his ALP, GGT, and bilirubin are still rising, so the duct is still blocked.",
                                explanation: "The cholestatic markers track the obstruction." },
                            { id: "s1-next", type: "mc", justify: 15,
                                stem: "Which is the best next step? Briefly justify your choice.",
                                options: ["ERCP", "MRCP", "Endoscopic ultrasound", "Cholecystectomy with intraoperative cholangiography", "Repeat LFTs in a week"], answer: 0,
                                justifyAnswer: "The stone is seen, and bilirubin is over 4 with a dilated duct: high likelihood.",
                                explanation: "High likelihood goes straight to ERCP, which diagnoses and removes the stone.",
                                notes: { 1: "MRCP is for intermediate likelihood.", 2: "Endoscopic ultrasound is for intermediate likelihood.", 3: "This suits low likelihood.", 4: "Waiting risks cholangitis." } },
                            { id: "s1-lipase", type: "sa", lines: 2,
                                stem: "What does his normal lipase tell you about where the stone sits?",
                                answer: "It is not blocking the pancreatic duct at the ampulla, so there is no gallstone pancreatitis.",
                                explanation: "Lipase 3 or more times normal would point to pancreatitis." },
                        ] },
                    { passage: `<p>ERCP with sphincterotomy removes a 9 mm stone. His bilirubin falls over 2 days.</p>`,
                        questions: [
                            { id: "s1-after", type: "mc", justify: 15,
                                stem: "What should happen next? Briefly justify your choice.",
                                options: ["Cholecystectomy during this admission", "Discharge, with surgery only if pain recurs", "Ursodeoxycholic acid for life", "Repeat ERCP every year", "No further treatment"], answer: 0,
                                justifyAnswer: "His gallbladder still holds stones that can migrate into the duct again.",
                                explanation: "Cholecystectomy follows ERCP during the same admission.",
                                notes: { 1: "Waiting risks another duct stone, cholangitis, or pancreatitis.", 2: "It dissolves only small cholesterol stones, slowly.", 3: "Repeated ERCP does not remove the source.", 4: "The source remains." } },
                            { id: "s1-alt", type: "sa", lines: 2,
                                stem: "Name an approach that would have treated both his duct and gallbladder in one operation.",
                                answer: "Laparoscopic CBD exploration during cholecystectomy.",
                                explanation: "It clears the duct during the cholecystectomy itself." },
                        ] },
                ],
            },
            {
                title: "Pain through to the back",
                keyPoints: [
                    "Severe epigastric pain to the back with lipase 3 or more times normal, gallstones, and a cholestatic pattern is gallstone pancreatitis.",
                    "A stone at the ampulla blocks both ducts, so patients can be jaundiced.",
                    "Gallstone pancreatitis is treated with IV fluids, pain relief, and early feeding; ERCP is not routine.",
                    "Rising bilirubin or fever means ongoing obstruction or cholangitis, the two reasons for ERCP.",
                    "Once a mild attack settles, cholecystectomy is done during the same admission.",
                ],
                blocks: [
                    { passage: `<p>A 48-year-old woman has 8 hours of severe epigastric pain radiating to her back, with repeated vomiting. She drinks alcohol rarely.</p>
${labs(["Test", "Result", "Reference"], [["Lipase", "2400 U/L", "Under 60"], ["Bilirubin", "44 µmol/L", "Under 21"], ["ALP", "220 U/L", "40–130"], ["ALT", "290 U/L", "Under 35"], ["Temperature", "37.0 °C", ""]])}
<p>Ultrasound: gallstones; CBD 8 mm; no stone seen in the duct.</p><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-dx", type: "mc", justify: 15,
                                stem: "What is the most likely diagnosis? Briefly justify your choice.",
                                options: ["Gallstone pancreatitis", "Choledocholithiasis without pancreatitis", "Acute cholecystitis", "Alcohol-related pancreatitis", "Biliary colic"], answer: 0,
                                justifyAnswer: "Epigastric pain to the back, lipase far above 3 times normal, gallstones, and cholestatic LFTs.",
                                explanation: "Gallstones are the most common cause of pancreatitis.",
                                notes: { 1: "Lipase is normal in choledocholithiasis alone.", 2: "Cholecystitis gives RUQ pain, fever, and normal lipase.", 3: "She rarely drinks, and gallstones with cholestatic LFTs point to a stone.", 4: "Colic has normal LFTs and lipase." } },
                            { id: "s2-jaundice", type: "sa", lines: 2,
                                stem: "Why is her bilirubin raised as well as her lipase?",
                                answer: "The stone at the ampulla blocks the bile duct as well as the pancreatic duct.",
                                explanation: "The two ducts share the ampulla." },
                        ] },
                    { passage: `<p>She is admitted.</p>`,
                        questions: [
                            { id: "s2-first", type: "mc", select: 2,
                                stem: "Which belong in her initial treatment?",
                                options: ["IV fluids and pain relief", "Early feeding as she tolerates it", "ERCP within 24 hours", "Nothing by mouth until lipase is normal", "Emergency cholecystectomy tonight"], answer: [0, 1],
                                explanation: "Gallstone pancreatitis is treated with IV fluids, pain relief, and early feeding.",
                                notes: { 2: "ERCP is only for cholangitis or ongoing obstruction.", 3: "Early feeding is part of treatment.", 4: "Cholecystectomy follows once a mild attack settles, during the same admission." } },
                        ] },
                    { passage: `${labs(["Test", "Admission", "Day 2"], [["Bilirubin (µmol/L)", "44", "87"], ["ALP (U/L)", "220", "390"], ["Temperature", "37.0 °C", "38.9 °C"], ["White cells (× 10<sup>9</sup>/L)", "12.0", "18.5"]])}
<p>She has rigors.</p><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-change", type: "sa", lines: 3,
                                stem: "What do the day 2 results show, and how does her management change?",
                                answer: "Rising bilirubin and ALP mean ongoing obstruction, and fever with rigors means cholangitis; she needs ABX and ERCP to remove the stone and drain the duct.",
                                explanation: "Cholangitis and ongoing obstruction are the two indications for ERCP in gallstone pancreatitis." },
                        ] },
                    { passage: `<p>ERCP removes a stone from the ampulla. Her fever settles, her pancreatitis is mild, and she is eating by day 5.</p>`,
                        questions: [
                            { id: "s2-chole", type: "sa", lines: 2,
                                stem: "What should be done before she goes home, and why?",
                                answer: "Cholecystectomy during the same admission, because her gallbladder still holds stones that can cause another attack.",
                                explanation: "Cholecystectomy during the same admission is advised in mild gallstone pancreatitis." },
                            { id: "s2-long", type: "sa", lines: 2,
                                stem: "If duct stones had kept blocking her bile flow for months, what liver complication could follow?",
                                answer: "Secondary biliary cirrhosis.",
                                explanation: "Long-standing obstruction injures and scars the liver." },
                        ] },
                ],
            },
        ],
    },
};
