// Worksheet for the Hepatocellular Injury: Traumatic Causes page, built by tools/build-worksheet-pdf.mjs gi hepatic-traumatic.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Hepatocellular Injury: Traumatic Causes",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From injury to treatment",
        top: "Blunt force (collisions, [[falls]], assault) or penetrating force (stabbings, gunshots) → liver lacerations and hematomas → bleeding",
        rows: ["Patient", "Vital signs", "First test", "What it shows", "Treatment"],
        columns: [
            ["Unstable", "Tachycardia and hypotension despite resuscitation", "[[FAST]] exam at the bedside", "[[Free fluid]]: blood in the abdomen", "Emergency [[laparotomy]]"],
            ["Stable, not bleeding", "Stable vital signs", "CT abdomen with [[IV contrast]]", "Grade on the [[AAST]] scale, I–VI; grades I and II are over half", "[[Nonoperative]] management with close monitoring"],
            ["Stable, actively bleeding", "Stable vital signs", "CT abdomen with IV contrast", "Active bleeding: contrast leaking into the liver", "[[Angioembolization]], with monitoring"],
        ],
        span: "[[Hemodynamic stability]], rather than the mechanism, decides the test and the treatment; most stable injuries heal without surgery",
        chains: [
            { label: "What the injury tears", steps: [["Liver tissue", "Laceration: RUQ pain"], ["Vessels", "[[Hemoperitoneum]] and hypovolemic shock"], ["Bile ducts", "[[Biloma]] and bile peritonitis"], ["A vessel into a duct", "[[Hemobilia]]: RUQ pain, jaundice, GI bleeding"]] },
            { label: "Clues and later problems", steps: [["Blood under the diaphragm", "Right [[shoulder]] pain, through the [[phrenic]] nerve"], ["Distention", "Blood filling the abdomen"], ["Days later", "Liver [[abscess]]: fever and a collection"], ["Prolonged shock", "[[Ischemic]] hepatitis"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Blunt or penetrating force causes liver [[lacerations]] and [[hematomas]], leading to bleeding into the [[abdomen]] or the bile ducts." },
                { id: "r-path-match", type: "match",
                    stem: "Match each injury to its result.",
                    items: ["Torn liver tissue", "Torn vessels", "Torn bile ducts", "Blood entering the bile ducts", "Blood under the diaphragm"],
                    options: ["Biloma and bile peritonitis", "Right shoulder pain", "RUQ pain", "RUQ pain, jaundice, and GI bleeding", "Hemoperitoneum and hypovolemic shock"],
                    answer: [2, 4, 0, 3, 1],
                    explanation: "Each structure the force tears gives its own complication." },
                { id: "r-path-shoulder", type: "sa", lines: 2,
                    stem: "Why can a liver injury cause pain in the right shoulder?",
                    answer: "Blood under the diaphragm irritates it; the phrenic nerve (C3–C5) carries the pain, felt in the C4 dermatome over the shoulder.",
                    explanation: "Right shoulder pain comes from diaphragm irritation." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-sort", type: "match",
                    stem: "Classify each injury as blunt or penetrating.",
                    items: ["Motor vehicle collision", "Stab wound", "Fall from a roof", "Gunshot wound", "Assault with kicks to the abdomen"],
                    options: ["Blunt", "Penetrating"],
                    answer: [0, 1, 0, 1, 0],
                    explanation: "Blunt trauma: collisions, falls, and assault. Penetrating trauma: stab and gunshot wounds." },
                { id: "r-cause-why", type: "sa", lines: 2,
                    stem: "Why can liver injuries bleed so heavily?",
                    answer: "The liver has a large blood supply from both the portal vein and the hepatic artery, so torn vessels lose blood fast.",
                    explanation: "Torn vessels bleed, causing hemoperitoneum and hypovolemic shock." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-signs", type: "mc", select: 2,
                    stem: "Which findings after RUQ trauma suggest significant bleeding from the liver?",
                    options: ["Increasing abdominal distention", "Rising heart rate with falling BP", "Pain only on deep inspiration", "Bruising over the right ribs alone", "A normal hemoglobin 10 minutes after injury"], answer: [0, 1],
                    explanation: "Distention reflects hemoperitoneum, and a rising heart rate with falling BP is shock.",
                    notes: { 2: "Pleuritic pain suggests rib or chest wall injury.", 3: "Bruising shows impact, not bleeding.", 4: "Hemoglobin can stay normal early, before fluid dilutes the blood." } },
                { id: "r-sx-blanks", type: "blank",
                    html: "Complications are hemorrhage, causing [[hemoperitoneum]] and [[hypovolemic]] shock; bile leak, causing biloma and [[bile peritonitis]]; hemobilia, causing RUQ pain, [[jaundice]], and GI bleeding; and liver [[abscess]]." },
                { id: "r-sx-hemobilia", type: "sa", lines: 2,
                    stem: "Explain why hemobilia causes GI bleeding.",
                    answer: "Blood in the bile ducts drains with bile through the ampulla into the duodenum, causing melena or hematemesis.",
                    explanation: "Blood entering the bile ducts causes RUQ pain, jaundice, and GI bleeding." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-pathway", type: "blank",
                    html: "The first question is whether the patient is [[hemodynamically stable]]. If unstable, a [[FAST]] exam looks for free fluid. If stable, [[CT abdomen]] with IV contrast grades the injury on the AAST scale, grades [[I]] to VI." },
                { id: "r-dx-why-ct", type: "sa", lines: 2,
                    stem: "Why is an unstable patient not sent to CT?",
                    answer: "The scanner takes them away from resuscitation and delays control of bleeding; FAST at the bedside answers the key question.",
                    explanation: "Unstable patients have FAST; stable patients have CT." },
                { id: "r-dx-fast", type: "mc",
                    stem: "What can FAST tell the team?",
                    options: ["Whether there is free fluid in the abdomen", "Which grade of liver injury is present", "Whether a bile duct is torn", "Whether the bleeding comes from an artery or a vein", "Whether angioembolization will work"], answer: 0,
                    explanation: "FAST shows free fluid but not the organ injured or its grade.",
                    notes: { 1: "Grading needs CT.", 2: "FAST does not image bile duct injury.", 3: "FAST cannot tell the source vessel.", 4: "That depends on CT findings and the patient." } },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each patient to the treatment.",
                    items: ["Stable, with a grade I laceration", "Stable, with active bleeding on CT", "Unstable, with a positive FAST"],
                    options: ["Emergency laparotomy", "Nonoperative management with close monitoring", "Angioembolization"],
                    answer: [1, 2, 0],
                    explanation: "Stability decides, and active bleeding in a stable patient adds angioembolization." },
                { id: "r-tx-why", type: "sa", lines: 2,
                    stem: "Why do most stable liver injuries not need surgery?",
                    answer: "Most are low grade and stop bleeding by themselves while the circulation is stable, so they heal with monitoring.",
                    explanation: "Grades I and II make up over half; most stable injuries heal without surgery." },
                { id: "r-tx-order", type: "order",
                    stem: "Number the steps for a trauma patient with a suspected liver injury.",
                    items: ["Decide on the test: FAST or CT", "Assess hemodynamic stability", "Treat: laparotomy, angioembolization, or monitoring", "Monitor for bleeding and late complications"],
                    order: [1, 0, 2, 3],
                    explanation: "Stability comes first, because it decides both the test and the treatment." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Struck at a crossing",
                keyPoints: [
                    "A stable patient has CT with IV contrast, which grades the injury and shows active bleeding.",
                    "Active bleeding in a stable patient is treated with angioembolization, as part of nonoperative management.",
                    "Monitoring watches the heart rate, BP, and hemoglobin, because bleeding can restart.",
                    "Fever with a collection days later is a liver abscess, treated with drainage and antibiotics.",
                    "Hemodynamic stability, not the grade alone, decides whether surgery is needed.",
                ],
                blocks: [
                    { passage: `<p>A 58-year-old woman is struck by a car at a crossing. She has RUQ tenderness, bruising over the right lower ribs, and pain at the tip of her right shoulder.</p>
${labs(["", "Arrival", "After 1 L crystalloid"], [["Heart rate", "104", "88"], ["BP (mm Hg)", "112/70", "126/78"], ["Hemoglobin (g/L)", "128", "124"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-shoulder", type: "sa", lines: 2,
                                stem: "What does her shoulder pain suggest?",
                                answer: "Blood under the right hemidiaphragm irritating it, pointing to a liver injury.",
                                explanation: "Right shoulder pain comes from diaphragm irritation, referred through the phrenic nerve." },
                            { id: "s1-test", type: "mc", justify: 12,
                                stem: "Which test should come next? Briefly justify your choice.",
                                options: ["CT abdomen with IV contrast", "Emergency laparotomy", "FAST alone, then discharge if negative", "MRCP", "Diagnostic peritoneal lavage"], answer: 0,
                                justifyAnswer: "She responded to fluids and is stable, so CT can grade it.",
                                explanation: "Stable patients have CT abdomen with IV contrast to grade the injury.",
                                notes: { 1: "Laparotomy is for unstable patients.", 2: "FAST cannot grade an injury, and tenderness after a high-energy impact needs CT.", 3: "MRCP images the bile ducts and is not an acute trauma test.", 4: "Lavage is invasive and has been replaced by FAST and CT." } },
                        ] },
                    { passage: `<p>CT abdomen with IV contrast: a 4 cm laceration through the right lobe with a parenchymal hematoma (AAST grade III) and a focus of contrast leaking into the liver tissue, showing active bleeding; moderate perihepatic fluid. Her heart rate is 90 and BP 124/76.</p>`,
                        questions: [
                            { id: "s1-tx", type: "mc", justify: 15,
                                stem: "What is the best treatment? Briefly justify your choice.",
                                options: ["Angioembolization with close monitoring", "Emergency laparotomy for the grade III injury", "Observation alone on the ward", "Liver resection once the bleeding stops", "ERCP and biliary stenting"], answer: 0,
                                justifyAnswer: "She is stable but actively bleeding; angioembolization stops it without surgery.",
                                explanation: "Stable patients have nonoperative management, with angioembolization if actively bleeding.",
                                notes: { 1: "Grade alone does not mandate surgery; she is stable.", 2: "Active bleeding needs treatment, not observation alone.", 3: "Resection is not routine for a stable patient.", 4: "ERCP treats bile leaks, not arterial bleeding." } },
                            { id: "s1-monitor", type: "sa", lines: 2,
                                stem: "After angioembolization, which observations would show that she is bleeding again, and what would follow if she became unstable?",
                                answer: "Rising heart rate, falling BP, falling hemoglobin, or distention; instability with a positive FAST means emergency laparotomy.",
                                explanation: "Nonoperative management continues only while the patient stays stable." },
                        ] },
                    { passage: `<p>On day 9 she develops a temperature of 38.8 °C and worsening RUQ pain.</p>
${labs(["Test", "Day 2", "Day 9"], [["WCC (×10<sup>9</sup>/L)", "10.2", "19.6"], ["CRP (mg/L)", "60", "245"], ["Hemoglobin (g/L)", "112", "110"]])}
<p>CT: a 6 cm rim-enhancing collection with a small gas bubble at the site of the laceration. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-late", type: "mc", select: 2,
                                stem: "Which two statements are correct?",
                                options: ["This is a liver abscess at the injury site", "It needs drainage as well as antibiotics", "Her stable hemoglobin shows active rebleeding", "Emergency laparotomy is needed for hemorrhage", "This is hemobilia"], answer: [0, 1],
                                explanation: "Fever, a raised WCC, and a rim-enhancing collection with gas are an abscess, a recognized complication of liver trauma, treated with drainage and antibiotics.",
                                notes: { 2: "A stable hemoglobin argues against rebleeding.", 3: "She is not bleeding.", 4: "Hemobilia causes jaundice and GI bleeding, not fever with a collection." } },
                        ] },
                ],
            },
            {
                title: "A knife in the right side",
                keyPoints: [
                    "An unstable patient with a positive FAST goes straight to emergency laparotomy, never to CT.",
                    "Hypovolemic shock from hemorrhage can itself cause ischemic hepatitis, with AST and ALT in the thousands.",
                    "Ischemic hepatitis falls within 7–10 days once perfusion is restored.",
                    "Torn bile ducts leak bile, which collects as a biloma or causes bile peritonitis.",
                ],
                blocks: [
                    { passage: `<p>A 27-year-old man is stabbed in the right upper abdomen. On arrival he is pale and sweaty.</p>
${labs(["", "Arrival", "After 2 units of blood"], [["Heart rate", "138", "142"], ["BP (mm Hg)", "76/42", "80/48"], ["Abdomen", "Tender, distending", "Distended"]])}
<p>FAST: free fluid in the hepatorenal pouch. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-next", type: "sa", lines: 2,
                                stem: "What should happen next, and why is CT not appropriate?",
                                answer: "Emergency laparotomy; he is unstable with a positive FAST, and CT would delay control of bleeding.",
                                explanation: "Unstable patients with a positive FAST have emergency laparotomy." },
                            { id: "s2-shock", type: "sa", lines: 2,
                                stem: "Explain his tachycardia and hypotension.",
                                answer: "Hemorrhage into the peritoneum causes hypovolemic shock: less venous return, lower cardiac output, and a compensatory rise in heart rate.",
                                explanation: "Torn vessels bleed, causing hemoperitoneum and hypovolemic shock." },
                        ] },
                    { passage: `<p>At laparotomy, a deep laceration of the right lobe is repaired and the bleeding controlled. He was hypotensive for about 2 hours in total.</p>
${labs(["", "Day 0", "Day 1", "Day 2", "Day 6"], [["AST (U/L)", "180", "3900", "2200", "260"], ["ALT (U/L)", "160", "3300", "2600", "540"], ["LDH (U/L)", "420", "4800", "1600", "380"], ["Bilirubin (µmol/L)", "18", "34", "40", "30"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-enzymes", type: "mc", justify: 15,
                                stem: "What explains the enzyme pattern? Briefly justify your choice.",
                                options: ["Ischemic hepatitis from the period of shock", "Acute hepatitis B acquired from the blood transfusions", "Hemobilia blocking the bile ducts", "Paracetamol given for pain", "A bile leak into the peritoneum"], answer: 0,
                                justifyAnswer: "A massive rise with high LDH a day after hypotension, falling fast once perfusion returned.",
                                explanation: "Hypovolemic shock reduces hepatic perfusion, causing zone 3 necrosis throughout the liver; enzymes fall within 7–10 days.",
                                notes: { 1: "Transfusion-acquired HBV would take 1–6 months.", 2: "Hemobilia causes jaundice and GI bleeding, not enzymes in the thousands.", 3: "Nothing suggests an overdose, and the timing follows the shock.", 4: "A bile leak causes a biloma or peritonitis, not this enzyme pattern." } },
                        ] },
                    { passage: `<p>On day 8 he has a low-grade fever, a swollen abdomen, and RUQ pain. His surgical drain, which had stopped draining, now produces 300 mL a day of green-brown fluid. Ultrasound shows a 7 cm fluid collection beside the repaired laceration. Hemoglobin is stable.</p>`,
                        questions: [
                            { id: "s2-bile", type: "sa", lines: 3,
                                stem: "What complication has developed, and how did the injury cause it?",
                                answer: "A bile leak with a biloma: the laceration tore intrahepatic bile ducts, which leak bile into a collection; spreading bile could cause bile peritonitis.",
                                explanation: "Torn ducts leak, causing biloma and bile peritonitis." },
                        ] },
                ],
            },
        ],
    },
};
