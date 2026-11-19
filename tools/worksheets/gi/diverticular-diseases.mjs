// Worksheet for the Diverticular Diseases page, built by tools/build-worksheet-pdf.mjs gi diverticular-diseases.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Diverticular Diseases",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From pressure to complication",
        top: "Low fiber and constipation raise sigmoid [[intraluminal pressure]] → mucosa and submucosa push through the muscularis externa where the [[vasa recta]] enter",
        rows: ["Problem", "Why it happens", "Key test", "Treatment"],
        columns: [
            ["1. Diverticulosis", "[[False]] diverticula; over half of people over 60; left-sided in up to 90%", "Usually found incidentally", "Increase [[fiber]]; nuts and seeds are safe"],
            ["Bleeding", "A vessel beside a diverticulum ruptures; [[painless]] hematochezia, from the right colon in 50–90%", "[[Colonoscopy]]", "Colonoscopy"],
            ["2. Diverticulitis", "A [[fecalith]] blocks the neck → back pressure and bacteria; LLQ pain, fever", "CT AP with contrast; leukocytosis and raised [[CRP]]", "Outpatient liquid diet and [[paracetamol]]; ABX if immunocompromised, comorbid, or CRP over 140"],
            ["Complicated", "Abscess, enterovesical [[fistula]], perforation, pylephlebitis", "Perforation: abdominal x-ray and CT AP", "Abscess: ABX and percutaneous [[drainage]]. Perforation: laparotomy with [[Hartmann]] procedure"],
            ["Meckel diverticulum", "[[Vitelline]] duct fails to close; ectopic gastric mucosa", "Meckel scan: [[technetium-99m]]", "Surgical excision if symptomatic"],
        ],
        span: "Avoid colonoscopy during acute diverticulitis; perform it [[6–8]] weeks after recovery",
        chains: [
            { label: "As diverticulitis worsens", steps: [["Inflamed diverticulum", "LLQ pain, fever, leukocytosis"], ["Abscess", "Persistent pain and fever despite treatment"], ["Fistula", "Pneumaturia, fecaluria, and UTI"], ["Perforation", "[[Pneumoperitoneum]] and peritonitis"]] },
            { label: "Rule of 2s", steps: [["2%", "Of people; 2% symptomatic"], ["Under age 2", "Males twice as often"], ["2 feet", "From the [[ileocecal]] valve; up to 2 inches long"], ["2 tissues", "Ectopic tissue; acid causes bleeding"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Increased [[sigmoid]] colon intraluminal pressure pushes the [[mucosa]] and [[submucosa]] out through the [[muscularis externa]], forming diverticula. Because the pouch lacks the muscle layer, it is a [[false]] diverticulum." },
                { id: "r-path-order", type: "order",
                    stem: "Number the steps leading to perforated diverticulitis in order.",
                    items: ["Back pressure and bacterial colonization", "A fecalith obstructs the neck of a diverticulum", "The inflamed diverticulum ruptures", "Abscess, pneumoperitoneum, and peritonitis"],
                    order: [1, 0, 2, 3],
                    explanation: "Obstruction, then pressure and infection, then rupture; the same sequence happens in appendicitis." },
                { id: "r-path-bleed", type: "sa", lines: 2,
                    stem: "Why is diverticular bleeding painless, while diverticulitis is painful?",
                    answer: "Bleeding is a vessel rupturing without inflammation; diverticulitis is inflammation and infection of the pouch.",
                    explanation: "A vessel beside the diverticulum bleeds, causing LGIB with hematochezia." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-risk", type: "mc", select: 2,
                    stem: "Which raise the risk of diverticulosis?",
                    options: ["A low-fiber diet", "Obesity", "Eating nuts and seeds", "A high-fiber diet", "Younger age"], answer: [0, 1],
                    explanation: "Low fiber, constipation, obesity, and older age raise sigmoid pressure.",
                    notes: { 2: "Nuts and seeds are safe.", 3: "Fiber lowers the risk.", 4: "Risk rises with age." } },
                { id: "r-cause-numbers", type: "blank",
                    html: "Diverticulosis affects over [[half]] of people over 60 and is left-sided in up to [[90]]% in Western countries, but only about [[4]]% of people with diverticulosis develop diverticulitis." },
                { id: "r-cause-compare", type: "blank",
                    stem: "Compare colonic and Meckel diverticula.",
                    html: `<table><thead><tr><th></th><th>Colonic diverticulum</th><th>Meckel diverticulum</th></tr></thead><tbody>
<tr><td>Origin</td><td>Acquired, from high pressure</td><td>[[Congenital]]: the vitelline duct fails to close</td></tr>
<tr><td>Wall</td><td>[[False]]: mucosa and submucosa</td><td>True: all layers</td></tr>
<tr><td>Site</td><td>Mostly the [[sigmoid]] colon</td><td>Ileum, 2 feet from the ileocecal valve</td></tr>
<tr><td>Bleeding</td><td>A ruptured vessel, in older adults</td><td>[[Acid]] from ectopic gastric mucosa, in children</td></tr>
</tbody></table>` },
                { id: "r-cause-appendix", type: "sa", lines: 2,
                    stem: "How does the mechanism of diverticulitis mirror that of appendicitis, and how do their sites of pain differ?",
                    answer: "A fecalith blocks a blind pouch, and pressure and infection follow in both; diverticulitis causes LLQ pain, appendicitis RLQ pain.",
                    explanation: "Both are obstructed blind pouches." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-comp-match", type: "match",
                    stem: "Match each complication to its clue.",
                    items: ["LGIB", "Abscess", "Enterovesical fistula", "Perforation", "Pylephlebitis"],
                    options: ["Pneumoperitoneum and peritonitis", "Septic portal or mesenteric vein clot", "Painless hematochezia", "Pneumaturia, fecaluria, and UTI", "Persistent pain and fever despite treatment"],
                    answer: [2, 4, 3, 0, 1],
                    explanation: "Pylephlebitis has a mortality of up to 25%, and up to 30% have a recurrence after a first episode." },
                { id: "r-comp-meckel", type: "mc",
                    stem: "How does Meckel diverticulum usually present in adults, compared with children under 2?",
                    options: ["Adults: small bowel obstruction. Children: painless bleeding", "Adults: painless bleeding. Children: obstruction", "Both: LLQ pain and fever", "Adults: fistula to the bladder. Children: perforation", "Both: pneumaturia and UTI"], answer: 0,
                    explanation: "Small bowel obstruction is the most common adult complication; in children, acid from ectopic gastric mucosa causes painless bleeding.",
                    notes: { 1: "The pattern is the other way round.", 2: "LLQ pain and fever are diverticulitis.", 3: "Fistula is a complication of sigmoid diverticulitis.", 4: "Pneumaturia is an enterovesical fistula." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-match", type: "match",
                    stem: "Match each problem to its test.",
                    items: ["Suspected diverticulitis", "Suspected perforation", "Diverticular bleeding", "Suspected Meckel diverticulum"],
                    options: ["Colonoscopy", "Meckel scan", "CT AP with contrast; FBC and CRP", "Abdominal x-ray and CT AP"],
                    answer: [2, 3, 0, 1],
                    explanation: "Each problem has its own test." },
                { id: "r-dx-colonoscopy", type: "sa", lines: 2,
                    stem: "Why is colonoscopy avoided during acute diverticulitis, and why is it still done afterward?",
                    answer: "It could perforate the inflamed colon; 6–8 weeks after recovery it looks for a cancer that can mimic diverticulitis.",
                    explanation: "Avoid colonoscopy during acute diverticulitis; perform it 6–8 weeks after recovery." },
                { id: "r-dx-scan", type: "sa", lines: 2,
                    stem: "What does the Meckel scan detect, and why does that also find the diverticula most likely to bleed?",
                    answer: "Ectopic gastric mucosa taking up technetium-99m; that mucosa secretes the acid that ulcerates the ileum.",
                    explanation: "Acid from ectopic gastric mucosa causes the bleeding." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each problem to its treatment.",
                    items: ["Perforation", "Abscess", "Fistula", "Diverticular bleeding", "Symptomatic Meckel diverticulum"],
                    options: ["Surgery", "Laparotomy, with Hartmann procedure or primary anastomosis", "Surgical excision", "ABX, percutaneous drainage, and surgery", "Colonoscopy"],
                    answer: [1, 3, 0, 4, 2],
                    explanation: "Treatment follows the complication, and severity is monitored for potential colectomy." },
                { id: "r-tx-admit", type: "mc", select: 2,
                    stem: "Which patients with diverticulitis should be admitted for IV ABX?",
                    options: ["A patient who cannot keep fluids down", "A patient on immunosuppressive drugs", "A well patient with a CRP of 50", "A patient whose pain settles with paracetamol", "A patient who eats nuts daily"], answer: [0, 1],
                    explanation: "Admit for fever, inability to keep hydrated, immunocompromise, or comorbidity.",
                    notes: { 2: "A well patient with a low CRP is treated as an outpatient.", 3: "Settling pain supports outpatient care.", 4: "Nuts and seeds are safe." } },
                { id: "r-tx-outpatient", type: "blank",
                    html: "Uncomplicated diverticulitis is treated as an outpatient with a [[liquid]] diet and paracetamol, not [[NSAIDs]]. ABX (amoxicillin-clavulanate, or a fluoroquinolone with [[metronidazole]], for 7–10 days) are added if the patient is immunocompromised, comorbid, or has a CRP over 140." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Pain on the left after a long weekend",
                keyPoints: [
                    "LLQ pain with fever and leukocytosis is diverticulitis until CT shows otherwise; CT AP with contrast confirms it and finds complications.",
                    "Treatment depends on the patient as well as the CT: fever, dehydration, immunocompromise, or comorbidity means admission.",
                    "ABX are added for outpatients who are immunocompromised, comorbid, or have a CRP over 140, and paracetamol is used rather than NSAIDs.",
                    "A collection with persistent pain and fever is an abscess, drained percutaneously with ABX.",
                    "After recovery: colonoscopy at 6–8 weeks to exclude cancer, and more fiber to lower sigmoid pressure.",
                ],
                blocks: [
                    { passage: `<p>A 63-year-old man with no other illness has 2 days of constant LLQ pain. He has had constipation for years and eats little fruit or vegetables. Temperature 37.5 °C, heart rate 88. He is tender in the LLQ without guarding and is drinking normally.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>WBC</td><td>13.1 × 10<sup>9</sup>/L</td><td>4.0–11.0</td></tr>
<tr><td>CRP</td><td>165 mg/L</td><td>under 5</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-why", type: "sa", lines: 2,
                                stem: "Explain how his diet and bowel habit relate to his likely diagnosis.",
                                answer: "Low fiber and constipation raise sigmoid pressure, forming diverticula; a fecalith blocking one causes diverticulitis.",
                                explanation: "Low fiber and constipation raise sigmoid intraluminal pressure." },
                            { id: "s1-test", type: "mc", justify: 12,
                                stem: "Which test should be done next? Briefly justify your choice.",
                                options: ["CT AP with contrast", "Colonoscopy", "Barium enema", "Meckel scan", "Flexible sigmoidoscopy"], answer: 0,
                                justifyAnswer: "It confirms diverticulitis and shows abscess or perforation without instrumenting the colon.",
                                explanation: "Suspected diverticulitis is evaluated with CT AP with contrast.",
                                notes: { 1: "Colonoscopy is avoided during acute diverticulitis.", 2: "Barium pressurizes the inflamed colon.", 3: "A Meckel scan looks for ectopic gastric mucosa.", 4: "Insufflation risks perforation." } },
                        ] },
                    { passage: `<p>CT shows sigmoid diverticula with wall thickening and fat stranding, and no collection or free air.</p>`,
                        questions: [
                            { id: "s1-plan", type: "sa", lines: 3,
                                stem: "He is afebrile, drinking, and has no comorbidities. Outline his treatment, explaining whether he needs ABX.",
                                answer: "Outpatient liquid diet and paracetamol, not NSAIDs; oral ABX (amoxicillin-clavulanate for 7–10 days) because his CRP is over 140.",
                                explanation: "ABX are given if immunocompromised, comorbid, or CRP over 140." },
                        ] },
                    { passage: `<p>Five days later he returns with worse pain and a temperature of 38.6 °C despite taking his ABX. Repeat CT shows a 5 cm rim-enhancing collection beside the sigmoid with no free air.</p>`,
                        questions: [
                            { id: "s1-abscess", type: "mc", justify: 15,
                                stem: "What is the best next step? Briefly justify your choice.",
                                options: ["Admission, IV ABX, and percutaneous drainage", "Change to a fluoroquinolone with metronidazole at home", "Emergency laparotomy with Hartmann procedure", "Urgent colonoscopy", "Stop ABX and review in a week"], answer: 0,
                                justifyAnswer: "Persistent fever with a contained collection is an abscess; ABX alone are failing, so drain.",
                                explanation: "Abscess: ABX, percutaneous drainage, and surgery if that fails.",
                                notes: { 1: "Changing oral ABX does not drain pus.", 2: "Laparotomy is for perforation with peritonitis.", 3: "Colonoscopy is avoided in acute disease.", 4: "He has an undrained abscess." } },
                        ] },
                    { passage: `<p>He recovers after drainage. Eight weeks later he is well.</p>`,
                        questions: [
                            { id: "s1-follow", type: "mc", select: 2,
                                stem: "Which belong in his follow-up?",
                                options: ["Colonoscopy now, 6–8 weeks after recovery", "Increasing his fiber intake", "Avoiding all nuts and seeds", "Lifelong prophylactic ABX", "Repeat CT every 3 months"], answer: [0, 1],
                                explanation: "Colonoscopy excludes cancer once inflammation has settled, and fiber lowers sigmoid pressure; recurrence is up to 30%.",
                                notes: { 2: "Nuts and seeds are safe.", 3: "ABX are not given long term.", 4: "Routine CT is not needed when he is well." } },
                        ] },
                ],
            },
            {
                title: "Bubbles and blood",
                keyPoints: [
                    "Painless hematochezia in an older adult with diverticulosis is diverticular bleeding, diagnosed and treated by colonoscopy.",
                    "Bleeding comes from the right colon in 50–90%, so the whole colon is examined.",
                    "Pneumaturia, fecaluria, and recurrent mixed-organism UTIs after diverticulitis mean an enterovesical fistula, which needs surgery.",
                    "A septic portal or mesenteric vein clot (pylephlebitis) is a rare but deadly complication, with mortality up to 25%.",
                ],
                blocks: [
                    { passage: `<p>A 79-year-old woman with known diverticulosis passes a large amount of dark red blood without pain. Heart rate 106, BP 104/64. Her abdomen is soft and nontender.</p>
<table><thead><tr><th>Time</th><th>Hemoglobin</th><th>Heart rate</th></tr></thead><tbody>
<tr><td>Arrival</td><td>118 g/L</td><td>106</td></tr>
<tr><td>6 hours, after fluids</td><td>101 g/L</td><td>88</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-cause", type: "sa", lines: 2,
                                stem: "What is the most likely source of bleeding, and why is there no pain?",
                                answer: "A vessel beside a diverticulum has ruptured; there is no inflammation, so no pain.",
                                explanation: "Diverticular bleeding is painless hematochezia." },
                            { id: "s2-scope", type: "mc", justify: 15,
                                stem: "She stabilizes. Which test should follow? Briefly justify your choice.",
                                options: ["Colonoscopy", "CT AP with contrast", "Barium enema", "Meckel scan", "Abdominal x-ray"], answer: 0,
                                justifyAnswer: "It finds and treats the bleeding vessel, often in the right colon despite left-sided diverticula.",
                                explanation: "Bleeding: colonoscopy; diverticular bleeding comes from the right colon in 50–90%.",
                                notes: { 1: "CT AP with contrast is for suspected diverticulitis.", 2: "Barium does not treat bleeding.", 3: "A Meckel scan is for children with suspected Meckel bleeding.", 4: "An x-ray looks for free air." } },
                        ] },
                    { passage: `<p>Two years later she has had sigmoid diverticulitis twice. Now she has had three UTIs in 5 months, and she notices air passing with her urine.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Urine culture</td><td>Mixed E. coli, Klebsiella, and Bacteroides</td></tr>
<tr><td>CT AP with contrast</td><td>Air in the bladder; sigmoid adherent to the bladder dome</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s2-fistula", type: "sa", lines: 3,
                                stem: "Explain how her diverticulitis caused these findings, and state the treatment.",
                                answer: "Recurrent inflammation eroded from the sigmoid into the bladder, forming an enterovesical fistula that passes gas and gut bacteria; treated surgically.",
                                explanation: "Enterovesical fistula causes pneumaturia, fecaluria, and UTI; fistulas are treated with surgery." },
                            { id: "s2-pyle", type: "mc",
                                stem: "Before surgery she develops rigors, jaundice, and high fever. CT shows a clot in the portal vein. What is the complication?",
                                options: ["Pylephlebitis", "Perforation", "Diverticular abscess", "Recurrent diverticular bleeding", "Meckel diverticulitis"], answer: 0,
                                explanation: "Pylephlebitis is a septic portal or mesenteric vein clot, with mortality up to 25%.",
                                notes: { 1: "Perforation causes pneumoperitoneum and peritonitis.", 2: "An abscess is a collection beside the colon.", 3: "Bleeding causes hematochezia.", 4: "Meckel diverticulum is in the ileum and does not explain a portal clot." } },
                        ] },
                ],
            },
            {
                title: "A toddler's red nappy",
                keyPoints: [
                    "Painless, brick-colored or currant jelly bleeding under age 2 points to Meckel diverticulum, about half of LGIB at that age.",
                    "The bleeding comes from acid made by ectopic gastric mucosa ulcerating the ileum beside it.",
                    "A Meckel scan finds that mucosa by its uptake of technetium-99m.",
                    "A symptomatic Meckel diverticulum is excised; in adults it more often causes small bowel obstruction or intussusception.",
                ],
                blocks: [
                    { passage: `<p>A 19-month-old boy has passed two large, brick-colored stools today. He is not distressed and eats normally. His abdomen is soft. Heart rate 140, hemoglobin 78 g/L.</p>`,
                        questions: [
                            { id: "s3-ddx", type: "sa", lines: 2,
                                stem: "What is the most likely cause, and how does it make the bowel bleed?",
                                answer: "Meckel diverticulum: acid from ectopic gastric mucosa ulcerates the adjacent ileum.",
                                explanation: "Meckel diverticulum causes about 50% of LGIB under age 2." },
                            { id: "s3-test", type: "mc", justify: 12,
                                stem: "Which test should be done? Briefly justify your choice.",
                                options: ["Meckel scan", "CT AP with contrast", "Colonoscopy", "Abdominal x-ray", "Barium enema"], answer: 0,
                                justifyAnswer: "Technetium-99m is taken up by the ectopic gastric mucosa.",
                                explanation: "Meckel scan: technetium-99m taken up by ectopic gastric mucosa.",
                                notes: { 1: "CT does not identify gastric mucosa.", 2: "The source is in the ileum, out of reach.", 3: "An x-ray looks for free air or obstruction.", 4: "Barium does not show the diverticulum reliably." } },
                        ] },
                    { passage: `<p>The scan shows uptake in the stomach and in a second focus in the right lower abdomen.</p>`,
                        questions: [
                            { id: "s3-tx", type: "sa", lines: 2,
                                stem: "What treatment is needed, and what could happen later in life if the diverticulum were left?",
                                answer: "Surgical excision; later it could cause small bowel obstruction or intussusception, or rebleed.",
                                explanation: "Small bowel obstruction is the most common complication in adults." },
                            { id: "s3-wall", type: "sa", lines: 2,
                                stem: "His grandmother had colonic diverticula. Explain why his diverticulum is a true diverticulum and hers were false.",
                                answer: "His is a vitelline duct remnant with all layers of the gut wall; hers were mucosa and submucosa pushed through the muscle by pressure.",
                                explanation: "Meckel diverticulum is congenital; colonic diverticula are acquired from raised sigmoid pressure." },
                        ] },
                ],
            },
        ],
    },
};
