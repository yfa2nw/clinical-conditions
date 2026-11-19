// Worksheet for the Biliary Fistulas page, built by tools/build-worksheet-pdf.mjs gi biliary-fistula.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Biliary Fistulas",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From erosion to repair",
        top: "Chronic [[inflammation]] weakens the gallbladder wall, and pressure from a [[large]] stone erodes it into a neighboring organ",
        rows: ["Fistula", "Connects", "What can follow", "First treatment"],
        columns: [
            ["1. Cholecystoduodenal (~[[68]]%)", "Gallbladder and duodenum", "Gallstone ileus; [[Bouveret]] syndrome if the stone stops at the pylorus or duodenum", "Ileus: [[enterolithotomy]]. Bouveret: endoscopic removal"],
            ["2. Cholecystocolic (~17%)", "Gallbladder and [[colon]]", "Bile acid [[diarrhea]]; stones may pass in the stool", "Cholecystectomy with fistula repair if symptomatic"],
            ["3. Cholecystogastric (~5%)", "Gallbladder and stomach", "Gastric [[outlet]] obstruction", "Relieve the obstruction; repair if symptomatic"],
            ["4. Cholecystocholedochal", "Gallbladder and CBD", "Advanced [[Mirizzi]] syndrome", "Cholecystectomy with repair"],
            ["5. Choledochoduodenal", "CBD and duodenum", "From a penetrating duodenal [[ulcer]] or CBD stones", "Treat the cause; repair if symptomatic"],
        ],
        span: "Every type: CT shows [[pneumobilia]]; ERCP or upper endoscopy shows the opening; gut bacteria entering the ducts cause [[cholangitis]]",
        chains: [
            { label: "Gallstone ileus", steps: [["Stone over [[2]] cm", "Mostly older women"], ["Through the fistula", "Into the duodenum"], ["Impacts", "At the [[terminal ileum]], the narrowest point"], ["Obstruction", "CAVO; CT shows [[Rigler]] triad (~93%)"]] },
            { label: "Rigler triad", steps: [["Pneumobilia", "Air enters the ducts through the fistula"], ["Small bowel obstruction", "Dilated loops, collapsed colon"], ["[[Ectopic]] gallstone", "The stone in the bowel"], ["Treatment", "Enterolithotomy first, usually [[open]]; fistula repair later if needed"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Chronic [[inflammation]] weakens the gallbladder wall, a [[large]] stone presses on it, and a tract opens into a neighboring organ, usually the [[duodenum]]. The stone can then enter the bowel, causing gallstone [[ileus]], and gut bacteria can enter the bile ducts, causing ascending [[cholangitis]]." },
                { id: "r-path-order", type: "order",
                    stem: "Number these steps toward gallstone ileus in order.",
                    items: ["A tract opens into the duodenum", "A large stone presses on the inflamed wall", "The stone lodges at the terminal ileum", "Chronic inflammation weakens the gallbladder wall", "The stone passes into the bowel"],
                    order: [3, 1, 0, 4, 2],
                    explanation: "Inflammation weakens the wall, the stone erodes through it, the tract opens, the stone passes, and it impacts where the bowel is narrowest." },
                { id: "r-path-two", type: "sa", lines: 2,
                    stem: "A fistula is an open path in both directions. Name what travels each way, and what it causes.",
                    answer: "The stone travels into the bowel, causing gallstone ileus; gut bacteria travel into the ducts, causing ascending cholangitis.",
                    explanation: "The same tract also lets air in, which is why pneumobilia is the sign of a fistula." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-match", type: "match",
                    stem: "Match each fistula to what it most typically causes.",
                    items: ["Cholecystoduodenal", "Cholecystocolic", "Cholecystogastric", "Cholecystocholedochal", "Choledochoduodenal"],
                    options: ["Advanced Mirizzi syndrome", "Bile acid diarrhea", "Gallstone ileus", "A link with a penetrating duodenal ulcer", "Gastric outlet obstruction"],
                    answer: [2, 1, 4, 0, 3],
                    explanation: "The organ the fistula opens into decides its effect." },
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table.",
                    html: `<table><thead><tr><th>Fistula</th><th>Share of biliary-enteric fistulas</th></tr></thead><tbody>
<tr><td>Cholecystoduodenal</td><td>~[[68]]%</td></tr>
<tr><td>Cholecystocolic</td><td>~[[17]]%</td></tr>
<tr><td>Cholecystogastric</td><td>~[[5]]%</td></tr>
</tbody></table>` },
                { id: "r-cause-select", type: "mc", select: 2,
                    stem: "Which two are causes of biliary fistulas on the page, besides gallstones?",
                    options: ["Peptic ulcer disease", "Crohn disease", "Celiac disease", "Hepatitis A", "Irritable bowel syndrome"], answer: [0, 1],
                    explanation: "The causes are gallstones (most cases, especially large stones), peptic ulcer disease, malignancy, trauma or surgery, and Crohn disease.",
                    notes: { 2: "Celiac disease damages the small bowel mucosa but does not form fistulas.", 3: "Hepatitis A is an acute viral hepatitis.", 4: "IBS causes no structural damage." } },
                { id: "r-cause-colic", type: "sa", lines: 3,
                    stem: "Explain why a cholecystocolic fistula causes diarrhea.",
                    answer: "Bile drains into the colon without passing the terminal ileum, where bile salts are reabsorbed; in the colon they drive water secretion.",
                    explanation: "This is bile acid diarrhea, a rare cause of chronic diarrhea in older patients with gallstones." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-blanks", type: "blank",
                    html: "Fistulas often cause [[no symptoms]]. Gallstone ileus is small bowel obstruction, presenting with [[colicky]] pain, abdominal distention, vomiting, and [[obstipation]]. Bouveret syndrome is gastric outlet obstruction, with [[vomiting]] and epigastric fullness. Other complications are ascending cholangitis and GI [[bleeding]]." },
                { id: "r-sx-site", type: "mc",
                    stem: "Why does a stone in Bouveret syndrome cause vomiting with little abdominal distention, while gallstone ileus causes marked distention?",
                    options: ["Bouveret blocks at the pylorus or duodenum, above most of the bowel", "Bouveret stones are smaller and block only partly, letting gas pass on downstream", "Gallstone ileus always perforates the bowel", "Bouveret syndrome causes pancreatitis instead", "Gallstone ileus also blocks the colon"], answer: 0,
                    explanation: "The level of the blockage decides the picture: a high obstruction empties by vomiting, while an obstruction at the terminal ileum leaves the whole small bowel to distend.",
                    notes: { 1: "Bouveret stones are usually large; size is not the difference.", 2: "Gallstone ileus is usually a non-perforating obstruction.", 3: "Bouveret syndrome is gastric outlet obstruction.", 4: "The colon is collapsed below an ileal obstruction." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-table", type: "blank",
                    stem: "Complete the table.",
                    html: `<table><thead><tr><th>For</th><th>Obtain</th></tr></thead><tbody>
<tr><td>Suspected fistula</td><td>CT abdomen: [[pneumobilia]]</td></tr>
<tr><td>Gallstone ileus</td><td>CT: [[Rigler triad]] (sensitivity ~[[93]]%); x-ray may also show it</td></tr>
<tr><td>Fistula opening</td><td>[[ERCP]] or upper endoscopy</td></tr>
</tbody></table>` },
                { id: "r-dx-rigler", type: "sa", lines: 2,
                    stem: "Name the three parts of Rigler triad, and say how each arises.",
                    answer: "Pneumobilia (air enters through the fistula), small bowel obstruction (the stone blocks the lumen), and an ectopic gallstone (the stone in the bowel).",
                    explanation: "The triad is the imaging signature of gallstone ileus." },
                { id: "r-dx-air", type: "sa", lines: 2,
                    stem: "Why do the bile ducts normally contain no air?",
                    answer: "The sphincter of Oddi keeps the gut closed off from the ducts, so air enters only through an abnormal opening such as a fistula.",
                    explanation: "Pneumobilia without previous ERCP or biliary surgery points to a biliary-enteric fistula." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each problem to its first treatment.",
                    items: ["Gallstone ileus", "Bouveret syndrome", "A fistula causing recurrent cholangitis"],
                    options: ["Cholecystectomy with fistula repair", "Enterolithotomy", "Endoscopic stone removal"],
                    answer: [1, 2, 0],
                    explanation: "Obstruction is relieved first, by the least invasive route that reaches the stone; a symptomatic fistula is then repaired." },
                { id: "r-tx-why", type: "sa", lines: 3,
                    stem: "Why is gallstone ileus treated by enterolithotomy first, with fistula repair later if needed?",
                    answer: "The obstruction is the immediate threat; patients are older and unwell, so adding fistula surgery to an emergency adds risk, and many fistulas cause no further trouble.",
                    explanation: "Enterolithotomy is usually open; fistula repair follows later only if needed." },
                { id: "r-tx-bouveret", type: "mc",
                    stem: "When is surgery used in Bouveret syndrome?",
                    options: ["When endoscopic stone removal fails", "In every patient, as the first treatment", "Only once the stone reaches the terminal ileum", "Only when the patient also has cholangitis", "Never; the stone always passes eventually"], answer: 0,
                    explanation: "Bouveret syndrome is treated by endoscopic stone removal, with surgery if this fails.",
                    notes: { 1: "Endoscopy is tried first, because the stone is within reach.", 2: "A stone at the terminal ileum would be gallstone ileus.", 3: "Cholangitis is not the trigger for surgery.", 4: "A stone large enough to obstruct the duodenum is unlikely to pass." } },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Vomiting that comes and goes",
                keyPoints: [
                    "Intermittent obstructive symptoms in an older woman with gallstones and no surgery should raise gallstone ileus.",
                    "Pneumobilia without previous ERCP or biliary surgery points to a biliary-enteric fistula.",
                    "CT confirms Rigler triad in about 93%, so a nondiagnostic x-ray is followed by CT.",
                    "Enterolithotomy relieves the obstruction first; the fistula is left unless it causes symptoms.",
                    "A fistula that later causes recurrent cholangitis is treated by cholecystectomy with fistula repair.",
                ],
                blocks: [
                    { passage: `<p>An 81-year-old woman has had 5 days of crampy central abdominal pain and vomiting that eased for a day, then returned worse. She has passed no stool or flatus for 36 hours. She had RUQ pain after meals on and off for 20 years but never had it investigated. She has never had abdominal surgery. Her abdomen is distended, with tinkling bowel sounds and no hernias.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>White cell count</td><td>11.8 × 10⁹/L</td><td>4.0–11.0</td></tr>
<tr><td>Sodium</td><td>131 mmol/L</td><td>135–145</td></tr>
<tr><td>Potassium</td><td>3.2 mmol/L</td><td>3.5–5.2</td></tr>
<tr><td>Creatinine</td><td>132 µmol/L</td><td>45–90</td></tr>
<tr><td>Bilirubin</td><td>14 µmol/L</td><td>Under 20</td></tr>
<tr><td>Lipase</td><td>40 U/L</td><td>Under 60</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-why", type: "sa", lines: 3,
                                stem: "Her small bowel obstruction has no hernia or previous surgery to explain it. Using her history, what cause should you suspect, and why might her symptoms have come and gone?",
                                answer: "Gallstone ileus: a large stone through a fistula; it can move along the bowel, easing and then blocking again further down.",
                                explanation: "Older women with long-standing gallstones are the usual patients; a stone can lodge, move on, and lodge again lower down before it impacts at the terminal ileum." },
                            { id: "s1-bloods", type: "sa", lines: 2,
                                stem: "What do her bloods show, and what do they mean for her immediate care?",
                                answer: "Hyponatremia, hypokalemia, and kidney injury from vomiting and fluid loss; she needs IV fluids and electrolyte replacement before surgery.",
                                explanation: "Obstruction causes vomiting and fluid sequestration in the bowel; resuscitation comes before enterolithotomy." },
                        ] },
                    { passage: `<p>Her abdominal x-ray shows dilated small bowel loops, but no stone or biliary air is seen.</p>`,
                        questions: [
                            { id: "s1-ct", type: "mc", justify: 12,
                                stem: "What is the best next test? Briefly justify your choice.",
                                options: ["CT abdomen", "Repeat x-ray in 24 hours", "HIDA scan", "Colonoscopy", "Abdominal ultrasound alone"], answer: 0,
                                justifyAnswer: "CT shows Rigler triad in about 93%; the x-ray often misses it.",
                                explanation: "An x-ray may show Rigler triad but often does not; CT is more sensitive and shows where the stone sits.",
                                notes: { 1: "Waiting delays treatment of an obstruction.", 2: "A HIDA scan tests the cystic duct in cholecystitis.", 3: "Colonoscopy cannot reach an ileal stone and is unsafe in obstruction.", 4: "Bowel gas limits ultrasound in obstruction." } },
                        ] },
                    { passage: `<p><strong>CT abdomen:</strong> Air in the intrahepatic ducts and gallbladder. A thick-walled, contracted gallbladder fused to the first part of the duodenum. Dilated small bowel to a 3.4-cm laminated stone in the terminal ileum; collapsed colon. No free air or ischemic bowel.</p>`,
                        questions: [
                            { id: "s1-read", type: "sa", lines: 2,
                                stem: "Identify each part of Rigler triad in this report, and name the fistula.",
                                answer: "Pneumobilia, small bowel obstruction, and the ileal stone; a cholecystoduodenal fistula.",
                                explanation: "The cholecystoduodenal fistula is the most common type and the main route for gallstone ileus." },
                            { id: "s1-op", type: "mc", select: 2,
                                stem: "Which two statements about her operation are correct?",
                                options: ["Enterolithotomy removes the stone and relieves the obstruction", "The fistula is left now and repaired later only if needed", "Cholecystectomy and fistula repair must be done at the same time", "A right hemicolectomy is needed to remove the stone", "The operation can be avoided if the stone is pushed into the colon at colonoscopy"], answer: [0, 1],
                                explanation: "Enterolithotomy first, usually open; fistula repair later if needed.",
                                notes: { 2: "A one-stage operation adds risk in an older, unwell patient.", 3: "No bowel needs to be removed.", 4: "Colonoscopy cannot reach the stone above the ileocecal valve." } },
                        ] },
                    { passage: `<p>She recovers. A year later she is admitted twice with fever, rigors, RUQ pain, and a bilirubin of 60 µmol/L, each settling on IV ABX. CT still shows pneumobilia.</p>`,
                        questions: [
                            { id: "s1-later", type: "sa", lines: 3,
                                stem: "Explain these episodes, and say what should now be done about the fistula.",
                                answer: "Ascending cholangitis from gut bacteria entering the ducts through the fistula; it is now symptomatic, so cholecystectomy with fistula repair.",
                                explanation: "A symptomatic fistula is treated by cholecystectomy with fistula repair." },
                        ] },
                ],
            },
            {
                title: "Diarrhea at 84",
                keyPoints: [
                    "A cholecystocolic fistula lets bile bypass the terminal ileum, so bile salts reach the colon and cause bile acid diarrhea.",
                    "Stones that enter the colon are past the narrowest point of the bowel and can pass in the stool.",
                    "Pneumobilia is the CT sign of a fistula; endoscopy or ERCP shows its opening.",
                    "A symptomatic fistula is treated by cholecystectomy with fistula repair.",
                ],
                blocks: [
                    { passage: `<p>An 84-year-old man has 6 months of watery diarrhea, 4 to 6 times a day, and has lost 5 kg. He has known gallstones and had two episodes of acute cholecystitis treated with ABX years ago, when he was judged too frail for surgery. Stool cultures and celiac serology are negative. Colonoscopy, done for weight loss, shows no tumor or colitis, but a 1.5-cm stone is seen in the ascending colon.</p>`,
                        questions: [
                            { id: "s2-stone", type: "sa", lines: 3,
                                stem: "How could a gallstone have reached his colon, and why is it unlikely to cause obstruction there?",
                                answer: "Through a fistula from the gallbladder to the colon; the colon is wider than the terminal ileum, so the stone can pass in the stool.",
                                explanation: "Stones may pass in the stool with a cholecystocolic fistula." },
                            { id: "s2-test", type: "mc",
                                stem: "Which test would best support a fistula?",
                                options: ["CT abdomen, looking for pneumobilia", "Fecal calprotectin, looking for inflammation", "Serum CA 19-9", "Hydrogen breath test for bacterial overgrowth", "Esophageal manometry"], answer: 0,
                                explanation: "Pneumobilia on CT suggests a biliary-enteric fistula; the tract may also be seen.",
                                notes: { 1: "Calprotectin points to intestinal inflammation, already excluded at colonoscopy.", 2: "CA 19-9 is a tumor marker.", 3: "Breath testing looks for bacterial overgrowth or lactose intolerance.", 4: "Manometry tests esophageal motility." } },
                        ] },
                    { passage: `<p>CT shows air in the gallbladder and ducts, and a tract from the gallbladder to the hepatic flexure.</p>`,
                        questions: [
                            { id: "s2-mech", type: "sa", lines: 3,
                                stem: "Explain why this fistula causes watery diarrhea and weight loss.",
                                answer: "Bile bypasses the terminal ileum, so bile salts reach the colon and drive water secretion; less bile in the small bowel means poorer fat absorption.",
                                explanation: "This is bile acid diarrhea." },
                            { id: "s2-why-fistula", type: "mc", justify: 12,
                                stem: "Which part of his history best explains why the fistula formed? Briefly justify your choice.",
                                options: ["Repeated cholecystitis with gallstones left in place", "His age alone", "The recent colonoscopy that found the stone", "Negative celiac serology", "His weight loss of 5 kg over 6 months"], answer: 0,
                                justifyAnswer: "Chronic inflammation weakened the wall, and stones eroded through it.",
                                explanation: "Chronic inflammation and pressure from a large stone erode the gallbladder wall into a neighboring organ.",
                                notes: { 1: "Age matters because fistulas take years of inflammation, but it is not the cause.", 2: "The fistula was already present when the stone was seen.", 3: "A negative test does not cause a fistula.", 4: "Weight loss is a result of the fistula." } },
                            { id: "s2-plan", type: "sa", lines: 2,
                                stem: "He is now fitter after cardiac treatment and wants his diarrhea fixed. What is the treatment?",
                                answer: "Cholecystectomy with fistula repair, because the fistula is symptomatic.",
                                explanation: "A symptomatic fistula is treated by cholecystectomy with fistula repair." },
                        ] },
                ],
            },
            {
                title: "Fullness after every meal",
                keyPoints: [
                    "A gallstone stopped at the pylorus or duodenum causes gastric outlet obstruction: Bouveret syndrome.",
                    "High obstruction causes vomiting and epigastric fullness rather than the distention of distal small bowel obstruction.",
                    "Endoscopic stone removal comes first, and surgery follows if it fails.",
                    "A stone pushed on down the bowel can impact again at the terminal ileum as gallstone ileus.",
                ],
                blocks: [
                    { passage: `<p>A 79-year-old woman has a week of fullness after small meals, then 2 days of vomiting large volumes of undigested food. She has gallstones. Her abdomen is not distended, but there is a succussion splash in the epigastrium. Lipase and bilirubin are normal.</p>`,
                        questions: [
                            { id: "s3-level", type: "sa", lines: 2,
                                stem: "At what level is she obstructed, and which features tell you?",
                                answer: "At the gastric outlet: vomiting undigested food, epigastric fullness, and a succussion splash without abdominal distention.",
                                explanation: "A high obstruction empties by vomiting and leaves the rest of the bowel undistended." },
                        ] },
                    { passage: `<p><strong>CT abdomen:</strong> Distended, fluid-filled stomach. Air in the gallbladder. A 4.5-cm stone in the duodenal bulb, with a tract between the gallbladder and the duodenum. Small bowel and colon are not dilated.</p>`,
                        questions: [
                            { id: "s3-name", type: "mc", justify: 12,
                                stem: "What is the diagnosis? Briefly justify your choice.",
                                options: ["Bouveret syndrome", "Gallstone ileus", "Mirizzi syndrome", "Pyloric stenosis from a gastric ulcer", "Gastric adenocarcinoma"], answer: 0,
                                justifyAnswer: "A gallstone through a cholecystoduodenal fistula is blocking the duodenal bulb.",
                                explanation: "Bouveret syndrome is gastric outlet obstruction from a gallstone lodged in the pylorus or duodenum.",
                                notes: { 1: "Gallstone ileus is a stone at the terminal ileum, with dilated small bowel.", 2: "Mirizzi syndrome causes jaundice from compression of the common hepatic duct.", 3: "The stone in the bulb explains the obstruction.", 4: "No mass is seen; the obstruction is a stone." } },
                            { id: "s3-order", type: "order",
                                stem: "Number the steps of her management in order.",
                                items: ["Surgery if the stone cannot be removed", "IV fluids and nasogastric decompression", "Endoscopic stone removal"],
                                order: [1, 2, 0],
                                explanation: "Resuscitate and decompress the stomach, try endoscopic removal, and operate if it fails." },
                        ] },
                    { passage: `<p>At endoscopy the stone is grasped, but it cannot pass back through the pylorus. The endoscopist suggests pushing it on down the duodenum instead.</p>`,
                        questions: [
                            { id: "s3-push", type: "sa", lines: 3,
                                stem: "What is the risk of pushing a 4.5-cm stone down the bowel, and what is the safer plan?",
                                answer: "It would likely impact again at the narrow terminal ileum as gallstone ileus; surgery to remove it is safer.",
                                explanation: "Stones over 2 cm usually cannot pass the terminal ileum; surgery is used when endoscopic removal fails." },
                        ] },
                ],
            },
        ],
    },
};
