// Worksheet for the Localizing Abdominal Pain page, built by tools/build-worksheet-pdf.mjs gi abdominal-pain.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.

export const WORKSHEET = {
    title: "Localizing Abdominal Pain",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From where it hurts to the first test",
        top: "Where it hurts narrows the [[organs]] → what it is like narrows the process → signs and examination point to a condition → targeted tests confirm it",
        rows: ["Region", "Leading causes", "What the pain is like", "Key sign", "First test"],
        columns: [
            ["RUQ", "Biliary colic, cholecystitis, cholangitis", "Colic after fatty meals settling within 6 hours; over 6 hours with fever is [[cholecystitis]]", "[[Murphy]] sign; Charcot triad in cholangitis", "LFTs and lipase, then RUQ [[ultrasound]]"],
            ["Epigastric", "PUD, gastritis, GERD, and pancreatitis", "Duodenal ulcer eases with eating; pancreatitis radiates to the [[back]]", "Rigid abdomen after a perforation", "[[ECG]] and troponin if cardiac risk; lipase"],
            ["Periumbilical to RLQ", "Appendicitis; SMA embolism", "Moves to the RLQ over 12–24 hours; ischemia is out of [[proportion]] to the signs", "Tenderness at [[McBurney]] point; Rovsing, psoas, and obturator signs", "CT AP; ultrasound in children and pregnancy"],
            ["LLQ", "Diverticulitis, ischemic colitis, and ulcerative colitis", "Pain, fever, and leukocytosis; hematochezia after shock or [[vasopressors]]", "Pneumaturia from an enterovesical fistula", "CT AP; avoid [[colonoscopy]] in acute diverticulitis"],
            ["Pelvic", "Ectopic pregnancy, ovarian torsion, PID, and UTI", "Pain and bleeding 6–8 weeks after the last period", "An adnexal mass in ovarian torsion", "[[β-hCG]], then transvaginal ultrasound"],
        ],
        span: "Must not miss outside the gut: MI, ruptured [[AAA]] (bedside ultrasound if unstable), aortic dissection, and testicular torsion",
        chains: [
            { label: "Why appendicitis pain moves", steps: [["Visceral pain", "Stretch: dull and [[periumbilical]]"], ["Inflammation spreads", "Reaches the parietal peritoneum"], ["Somatoparietal pain", "Sharp and localized to the RLQ"], ["Perforation", "Diffuse [[peritonitis]]; the patient lies still"]] },
            { label: "Signs beyond the abdomen", steps: [["Painless jaundice, palpable gallbladder", "[[Courvoisier]] law: malignancy"], ["Grey Turner or Cullen sign", "Retroperitoneal or intra-abdominal bleeding"], ["Virchow node", "Metastatic gastric cancer"], ["Erythema nodosum or uveitis", "IBD"]] },
        ],
    },
    review: [
        {
            section: "Approach",
            questions: [
                { id: "r-approach", type: "blank",
                    html: "The location of pain narrows the [[organs]] involved; its character and triggers narrow the [[process]]; signs beyond the abdomen and examination findings point to particular [[conditions]]; and targeted [[tests]] then confirm the leading diagnosis." },
                { id: "r-pain-types", type: "match",
                    stem: "Match each kind of pain to its description.",
                    items: ["Visceral pain", "Somatoparietal pain", "Referred pain"],
                    options: ["Sharp and localized, from inflamed or stretched parietal peritoneum", "Felt elsewhere because visceral and somatic nerves share a spinal level", "Dull and poorly localized, from stretch of hollow organs"],
                    answer: [2, 0, 1],
                    explanation: "Visceral receptors sit in the serosa, mesentery, muscle, and mucosa and localize poorly; the parietal peritoneum localizes sharply; shared spinal levels refer pain elsewhere." },
                { id: "r-appendix-why", type: "sa", lines: 2,
                    stem: "Why does appendicitis start as periumbilical pain and then move to the RLQ?",
                    answer: "Early stretch of the appendix gives poorly localized visceral pain; once inflammation reaches the parietal peritoneum, sharp somatoparietal pain localizes to the RLQ.",
                    explanation: "The shift from visceral to somatoparietal pain is why location changes over 12–24 hours." },
            ],
        },
        {
            section: "Where it hurts",
            questions: [
                { id: "r-regions", type: "blank",
                    stem: "Complete the table of regions.",
                    html: `<table><thead><tr><th>Region</th><th>Causes</th></tr></thead><tbody>
<tr><td>1. RUQ</td><td>Biliary colic, acute cholecystitis, [[cholangitis]], acute hepatitis and liver abscess, and Budd-Chiari syndrome</td></tr>
<tr><td>2. Epigastric</td><td>PUD, gastritis, GERD, and pancreatitis; always exclude [[myocardial infarction]]</td></tr>
<tr><td>3. LUQ</td><td>Splenic infarct, abscess, or rupture, with left shoulder pain (the [[Kehr]] sign)</td></tr>
<tr><td>4. Periumbilical</td><td>Early [[appendicitis]]; embolism to the proximal [[SMA]]</td></tr>
<tr><td>5. RLQ</td><td>Appendicitis at [[McBurney]] point, terminal ileal Crohn disease, ectopic pregnancy, and ovarian torsion</td></tr>
<tr><td>6. Suprapubic and pelvic</td><td>Ectopic pregnancy, [[pelvic inflammatory disease]], ovarian or testicular torsion, UTI or obstruction, and incarcerated hernia</td></tr>
<tr><td>7. LLQ</td><td>[[Diverticulitis]], ischemic colitis, and ulcerative colitis</td></tr>
<tr><td>8. Diffuse</td><td>Acute mesenteric ischemia, obstruction, perforation, and ruptured [[AAA]]</td></tr>
</tbody></table>` },
                { id: "r-rlq-women", type: "mc", select: 2,
                    stem: "In a woman of reproductive age with RLQ pain, which conditions must be considered alongside appendicitis?",
                    options: ["Ectopic pregnancy", "Ovarian torsion", "Biliary colic", "GERD", "Splenic infarct"], answer: [0, 1],
                    explanation: "Ectopic pregnancy and ovarian torsion cause RLQ and pelvic pain and must not be missed.",
                    notes: { 2: "Biliary colic causes RUQ or epigastric pain.", 3: "GERD causes heartburn and regurgitation.", 4: "Splenic infarct causes LUQ pain." } },
            ],
        },
        {
            section: "What the pain is like",
            questions: [
                { id: "r-character-match", type: "match",
                    stem: "Match each pattern to its likeliest cause.",
                    items: ["Burning epigastric pain, better with eating and worse at night", "Pain out of proportion to the examination; the patient writhes", "Sudden pain, then a rigid abdomen; the patient lies still", "Pain 15–30 minutes after meals, with fear of eating and weight loss", "Recurrent pain related to defecation, with changes in the stool"],
                    options: ["Chronic mesenteric ischemia", "IBS", "Duodenal ulcer", "Perforation with peritonitis", "Acute mesenteric ischemia"],
                    answer: [2, 4, 3, 0, 1],
                    explanation: "Timing, triggers, and how the patient moves each point to a process." },
                { id: "r-still-writhe", type: "sa", lines: 3,
                    stem: "Why does a patient with peritonitis lie still, while a patient with early acute mesenteric ischemia writhes?",
                    answer: "In peritonitis, any movement stretches inflamed parietal peritoneum, so the patient keeps still; early ischemia causes visceral pain before the peritoneum is inflamed, so the abdomen is soft and the patient cannot settle.",
                    explanation: "This is why ischemic pain is out of proportion to the examination." },
                { id: "r-colic-cholecystitis", type: "sa", lines: 2,
                    stem: "Which features separate biliary colic from acute cholecystitis?",
                    answer: "Biliary colic settles within 6 hours with normal LFTs and no fever; cholecystitis lasts over 6 hours, with fever and a Murphy sign.",
                    explanation: "Duration and signs of inflammation separate a transient obstruction from an inflamed gallbladder." },
            ],
        },
        {
            section: "Must not miss outside the gut",
            questions: [
                { id: "r-mustnot", type: "blank",
                    stem: "Complete the table.",
                    html: `<table><thead><tr><th>If there is</th><th>Consider</th><th>Obtain</th></tr></thead><tbody>
<tr><td>Epigastric pain with cardiac risk factors</td><td>Myocardial infarction</td><td>[[ECG]] and [[troponin]]</td></tr>
<tr><td>Pain with hypotension and a pulsatile mass</td><td>Ruptured AAA</td><td>[[Bedside ultrasound]] if unstable; CT if stable</td></tr>
<tr><td>Sharp, tearing pain with pulse deficits</td><td>[[Aortic dissection]]</td><td>CT angiogram of the chest, abdomen, and pelvis</td></tr>
<tr><td>Pain and vaginal bleeding 6–8 weeks after the last period</td><td>Ectopic pregnancy</td><td>[[β-hCG]], then transvaginal ultrasound</td></tr>
<tr><td>Severe pelvic pain and vomiting with an adnexal mass</td><td>[[Ovarian torsion]]</td><td>Pelvic ultrasound</td></tr>
</tbody></table>` },
                { id: "r-aaa-us", type: "mc",
                    stem: "Why is bedside ultrasound, rather than CT, used for a suspected ruptured AAA in a hypotensive patient?",
                    options: ["An unstable patient cannot safely leave for CT, and ultrasound at the bedside answers the question quickly", "Ultrasound shows the exact site and size of the rupture in more detail than CT, so surgeons prefer it before operating", "CT contrast would worsen the bleeding from the aneurysm", "Ultrasound is needed to measure the troponin first", "CT cannot show the abdominal aorta"], answer: 0,
                    explanation: "Bedside ultrasound is used if the patient is unstable; CT is used if stable.",
                    notes: { 1: "CT shows anatomy in more detail; ultrasound is chosen for speed and safety.", 2: "The concern is moving an unstable patient, not contrast.", 3: "Troponin is a blood test for myocardial infarction.", 4: "CT shows the aorta well, which is why it is used when the patient is stable." } },
            ],
        },
        {
            section: "Signs beyond the abdomen",
            questions: [
                { id: "r-signs-match", type: "match",
                    stem: "Match each sign to what it points to.",
                    items: ["Kayser-Fleischer rings", "Dermatitis herpetiformis", "Virchow node", "Grey Turner sign", "Bronze skin with diabetes"],
                    options: ["Hemochromatosis", "Metastatic gastric cancer", "Wilson disease", "Retroperitoneal bleeding, as in necrotizing pancreatitis", "Celiac disease"],
                    answer: [2, 4, 1, 3, 0],
                    explanation: "Signs on the skin, eyes, and nodes often point to the cause of abdominal pain." },
                { id: "r-courvoisier", type: "sa", lines: 3,
                    stem: "Why does painless jaundice with a palpable, nontender gallbladder point to cancer rather than gallstones?",
                    answer: "A tumor below the cystic duct blocks bile slowly, distending a healthy, stretchy gallbladder; gallstones have usually scarred the gallbladder, so it cannot distend, and they cause pain.",
                    explanation: "This is the Courvoisier law, explained on Biliary Tract and Periampullary Malignancies." },
            ],
        },
        {
            section: "Examination",
            questions: [
                { id: "r-exam-blanks", type: "blank",
                    html: "In the Murphy sign, [[inspiration]] stops as the gallbladder meets the examiner's hand. McBurney point lies [[one third]] of the way from the ASIS to the umbilicus. In the Rovsing sign, [[LLQ]] pressure causes RLQ pain. The psoas sign suggests [[retrocecal]] appendicitis, and the obturator sign suggests [[pelvic]] appendicitis or abscess." },
                { id: "r-peritonitis", type: "mc", select: 2,
                    stem: "Which examination findings suggest peritonitis?",
                    options: ["Rebound tenderness", "Rigidity", "Shifting dullness", "A succussion splash", "Dilated veins draining away from the umbilicus"], answer: [0, 1],
                    explanation: "Rebound tenderness, involuntary guarding, and rigidity suggest peritonitis.",
                    notes: { 2: "Shifting dullness suggests ascites.", 3: "A succussion splash suggests delayed gastric emptying.", 4: "These veins suggest portal hypertension." } },
            ],
        },
        {
            section: "Choosing tests",
            questions: [
                { id: "r-ruq-order", type: "order",
                    stem: "Number the tests for RUQ pain in the order they are usually used.",
                    items: ["HIDA scan if cholecystitis is unclear", "LFTs and lipase", "MRCP or endoscopic ultrasound for a suspected bile duct stone", "RUQ ultrasound"],
                    order: [1, 3, 0, 2],
                    explanation: "Bloods and ultrasound come first; HIDA settles unclear cholecystitis, and MRCP or endoscopic ultrasound looks for a bile duct stone." },
                { id: "r-us-first", type: "sa", lines: 2,
                    stem: "Why is ultrasound used first for suspected appendicitis in children and in pregnancy, when CT is used in other adults?",
                    answer: "Ultrasound avoids ionizing radiation, which matters most in children and a developing fetus.",
                    explanation: "CT AP with contrast is used in adults; ultrasound comes first in children and pregnancy." },
            ],
        },
        {
            section: "Which endoscopy",
            questions: [
                { id: "r-endoscopy", type: "match",
                    stem: "Match each situation to the endoscopy it calls for.",
                    items: ["Dysphagia, or upper GI bleeding", "Rectal bleeding with a change in bowel habit", "A bile duct stone that needs removing"],
                    options: ["ERCP", "EGD", "Colonoscopy"],
                    answer: [1, 2, 0],
                    explanation: "EGD looks at the upper tract, colonoscopy the colon, and ERCP is mainly therapeutic for the bile ducts." },
                { id: "r-colonoscopy-not", type: "mc", select: 2,
                    stem: "In which situations is colonoscopy not needed, or avoided?",
                    options: ["Uncomplicated abdominal pain under 4 weeks", "Acute diverticulitis", "A positive FOBT", "Iron deficiency anemia", "Rectal bleeding with weight loss"], answer: [0, 1],
                    explanation: "Colonoscopy is not needed for uncomplicated abdominal pain or diarrhea under 4 weeks, and it is avoided in peritonitis and acute diverticulitis, where air and instruments risk perforating an inflamed wall.",
                    notes: { 2: "A positive FOBT is an indication for colonoscopy.", 3: "Iron deficiency anemia is an indication for colonoscopy.", 4: "Rectal bleeding and weight loss are indications for colonoscopy." } },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Pain under the sternum",
                keyPoints: [
                    "Epigastric pain with cardiac risk factors or sweating needs an ECG and troponin first, because the heart refers pain to the upper abdomen.",
                    "Sudden pain followed by a rigid abdomen, in a patient who lies still, means perforation with peritonitis.",
                    "An upright CXR comes first for free air, but a normal film does not exclude perforation, so CT AP with contrast follows.",
                    "Endoscopy is avoided while perforation is suspected, because insufflated air can enlarge the hole.",
                    "After recovery, H. pylori is tested by urea breath test or stool antigen, and new alarm features call for EGD.",
                ],
                blocks: [
                    { passage: `<p>A 61-year-old man with hypertension and knee arthritis has taken ibuprofen 400 mg three times a day for 6 weeks. For 2 hours he has had severe epigastric pain. He is pale and sweating.</p>
<table><thead><tr><th>Observation</th><th>Result</th></tr></thead><tbody>
<tr><td>Heart rate</td><td>112/min</td></tr>
<tr><td>BP</td><td>118/76 mmHg</td></tr>
<tr><td>Temperature</td><td>37.4 °C</td></tr>
<tr><td>Abdomen</td><td>Soft, tender in the epigastrium</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s1-first", type: "mc", select: 2,
                                stem: "Which tests should come first?",
                                options: ["ECG and troponin", "Lipase", "Colonoscopy", "Fecal calprotectin", "HIDA scan"], answer: [0, 1],
                                explanation: "Epigastric pain with cardiac risk factors and sweating needs an ECG and troponin to exclude MI, and lipase is part of the bloods for any significant abdominal pain, especially epigastric pain.",
                                notes: { 2: "Colonoscopy has no place in acute epigastric pain.", 3: "Calprotectin is for chronic diarrhea and suspected IBD.", 4: "HIDA is used when cholecystitis is unclear on ultrasound." } },
                            { id: "s1-mi-why", type: "sa", lines: 2,
                                stem: "Why can a myocardial infarction cause epigastric pain?",
                                answer: "Visceral afferents from the heart enter the same spinal levels as those from the upper abdomen, so the pain is referred there.",
                                explanation: "Referred pain arises where visceral and somatic nerves share a spinal level, which is why MI is a must-not-miss cause of epigastric pain." },
                        ] },
                    { passage: `<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>ECG</td><td>Sinus tachycardia, no ST changes</td><td></td></tr>
<tr><td>Troponin, 0 and 3 hours</td><td>Under 5 and under 5 ng/L</td><td>Under 14</td></tr>
<tr><td>Lipase</td><td>48 U/L</td><td>Under 60</td></tr>
<tr><td>WCC</td><td>13.9 × 10⁹/L</td><td>4.0–11.0</td></tr>
</tbody></table>
<p>Over the next hour his pain spreads across his whole abdomen. He now lies completely still, and his abdomen is rigid, with rebound tenderness and absent bowel sounds. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-still", type: "sa", lines: 2,
                                stem: "What has most likely happened, and why does he now lie completely still?",
                                answer: "An NSAID ulcer has perforated; spilled contents inflame the parietal peritoneum, and any movement stretches it, worsening sharp somatoparietal pain.",
                                explanation: "Sudden pain, then a rigid abdomen with the patient lying still, is perforation with peritonitis; visceral pain, by contrast, makes patients restless." },
                            { id: "s1-egd", type: "mc", justify: 12,
                                stem: "A colleague suggests urgent EGD to look for the ulcer. What is the best response? Briefly justify your choice.",
                                options: ["Avoid EGD for now and obtain an upright CXR", "Proceed with EGD, because it finds ulcers best", "Proceed with EGD, then a colonoscopy in the same session", "Obtain a urea breath test before deciding on EGD", "Give oral triple therapy and review in a week"], answer: 0,
                                justifyAnswer: "Insufflated air can enlarge a perforation; an upright CXR comes first.",
                                explanation: "For peritonitis or suspected perforation, the page's order is an upright CXR, blood cultures, then CT AP with contrast. Endoscopy pumps air into the gut and can make a perforation worse.",
                                notes: { 1: "EGD is the test for a suspected ulcer only once perforation is not suspected.", 2: "Colonoscopy is avoided in peritonitis.", 3: "H. pylori testing does not answer the urgent question of perforation.", 4: "A perforation needs surgery, not outpatient treatment." } },
                        ] },
                    { passage: `<p>Upright CXR: <em>"No free gas is seen beneath either hemidiaphragm. Lungs clear."</em></p><p>Blood cultures are taken. His abdomen remains rigid.</p>`,
                        questions: [
                            { id: "s1-normal-cxr", type: "mc", justify: 12,
                                stem: "What is the best next step? Briefly justify your choice.",
                                options: ["CT AP with contrast", "Discharge, since perforation has been excluded", "Colonoscopy with biopsy", "Repeat the upright CXR in a week", "A urea breath test"], answer: 0,
                                justifyAnswer: "A normal CXR cannot exclude perforation; rigidity still needs CT.",
                                explanation: "An upright CXR comes first because it is quick, but small leaks may show no free gas. A rigid abdomen means peritonitis until proven otherwise, so CT AP with contrast follows.",
                                notes: { 1: "A normal CXR does not exclude a perforation.", 2: "Colonoscopy is avoided in peritonitis.", 3: "Waiting a week lets peritonitis worsen.", 4: "H. pylori testing does not address a possible perforation." } },
                        ] },
                    { passage: `<p>CT AP with contrast: <em>"Small locules of free gas and fluid around the duodenal bulb, with a defect in its anterior wall. Pancreas normal. Aorta normal caliber."</em></p>`,
                        questions: [
                            { id: "s1-manage", type: "mc",
                                stem: "Which management is appropriate now?",
                                options: ["IV fluids, IV PPI, IV antibiotics, and surgery", "Oral triple therapy and discharge with review", "Colonoscopy within 24 hours to assess the bowel", "Observation, with a repeat CT AP tomorrow", "Stop ibuprofen, start misoprostol, review in clinic"], answer: 0,
                                explanation: "A perforated ulcer is treated with IV fluids, IV PPI, and IV antibiotics for the peritoneal soiling, then surgical repair.",
                                notes: { 1: "H. pylori treatment comes later; the perforation needs repair now.", 2: "Colonoscopy is avoided in peritonitis.", 3: "Waiting worsens peritonitis.", 4: "Misoprostol helps prevent NSAID ulcers; it does not treat a perforation." } },
                            { id: "s1-ct-other", type: "sa", lines: 2,
                                stem: "The report comments on the pancreas and aorta. Which must-not-miss causes of epigastric or back pain do these lines exclude?",
                                answer: "Acute pancreatitis (with his normal lipase) and an abdominal aortic aneurysm or rupture.",
                                explanation: "Severe epigastric pain can come from pancreatitis or a ruptured AAA, so the report addresses both." },
                        ] },
                    { passage: `<p>Eight weeks after repair he is well and has stopped ibuprofen. He asks whether anything else caused his ulcer.</p>`,
                        questions: [
                            { id: "s1-hp", type: "sa", lines: 2,
                                stem: "Which other cause should be tested for, and how?",
                                answer: "H. pylori, by urea breath test or stool antigen; treating it lowers the chance of another ulcer.",
                                explanation: "The page's tests for epigastric pain include a urea breath test or stool antigen for H. pylori, alongside EGD for a suspected ulcer." },
                            { id: "s1-alarm", type: "mc", select: 2,
                                stem: "Which new features would call for an EGD?",
                                options: ["Persistent vomiting", "Iron deficiency anemia with a suspected upper source", "Pain that settled completely after his operation", "A single episode of heartburn after a large meal", "Mild LLQ pain related to defecation"], answer: [0, 1],
                                explanation: "EGD is indicated for persistent upper abdominal pain or pain with alarm features, persistent vomiting, dysphagia or odynophagia, upper GI bleeding, and iron deficiency anemia with a suspected upper source.",
                                notes: { 2: "Settled pain without alarm features does not need EGD.", 3: "Occasional heartburn is not an indication; refractory GERD is.", 4: "Pain related to defecation points to the colon or IBS, not the upper tract." } },
                        ] },
                ],
            },
            {
                title: "Worse than she looks",
                keyPoints: [
                    "Sudden, severe pain out of proportion to a soft abdomen, with an embolic source such as A-fib, suggests an embolus to the proximal SMA.",
                    "Lactate rises only once bowel is infarcting, so a normal value never delays the CT angiogram.",
                    "Early ischemia gives visceral pain with a soft abdomen; once the wall dies, peritonitis brings rigidity and absent bowel sounds.",
                    "Midgut pain is felt around the umbilicus, because visceral pain is placed in the midline over the organ's region of origin.",
                    "Ischemic colitis is a low-flow injury after shock or vasopressors, giving LLQ pain with hematochezia.",
                ],
                blocks: [
                    { passage: `<p>A 76-year-old woman with A-fib stopped apixaban 3 weeks ago for dental work and did not restart it. Two hours ago she developed sudden, severe central abdominal pain and vomited once. She is writhing and asking for more analgesia. Her abdomen is soft and only mildly tender around the umbilicus, with bowel sounds present.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Heart rate</td><td>118/min, irregular</td><td></td></tr>
<tr><td>BP</td><td>150/88 mmHg</td><td></td></tr>
<tr><td>WCC</td><td>17.2 × 10⁹/L</td><td>4.0–11.0</td></tr>
<tr><td>Lactate</td><td>1.6 mmol/L</td><td>Under 2.0</td></tr>
<tr><td>Lipase</td><td>38 U/L</td><td>Under 60</td></tr>
<tr><td>Troponin</td><td>8 ng/L</td><td>Under 14</td></tr>
<tr><td>ECG</td><td>A-fib, no ST changes</td><td></td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-pattern", type: "sa", lines: 3,
                                stem: "Which feature of her examination is most worrying, and what does it suggest in her?",
                                answer: "Pain out of proportion to a soft abdomen; with A-fib off anticoagulation, it suggests acute mesenteric ischemia from an SMA embolus.",
                                explanation: "The bowel is starved of blood before its wall dies, so pain is severe but the peritoneum is not yet inflamed." },
                            { id: "s2-lactate", type: "mc", justify: 15,
                                stem: "A colleague suggests observing her overnight because the lactate is normal. What is the best next step? Briefly justify your choice.",
                                options: ["CT angiogram of the abdomen", "Repeat the lactate in 6 hours", "Upright CXR, then observe", "Colonoscopy to look for ischemic colitis", "RUQ ultrasound for biliary colic"], answer: 0,
                                justifyAnswer: "Lactate rises only late, once bowel infarcts, so a normal value cannot exclude ischemia.",
                                explanation: "Suspected mesenteric ischemia needs a CT angiogram now; lactate rises only late, and every hour of delay costs bowel.",
                                notes: { 1: "Waiting for lactate to rise means waiting for infarction.", 2: "Free air is not the question; the vessels are.", 3: "Colonoscopy cannot see the SMA and is not used in acute illness like this.", 4: "Her pain is periumbilical, and nothing points to the gallbladder." } },
                        ] },
                    { passage: `<p>CT angiogram: <em>"Occlusive filling defect in the proximal SMA. Loops of jejunum and ileum show reduced wall enhancement. No free gas. Celiac axis and IMA patent."</em></p>`,
                        questions: [
                            { id: "s2-source", type: "sa", lines: 2,
                                stem: "Where did the clot most likely come from, and what allowed it to form?",
                                answer: "The left atrium: A-fib lets blood stagnate there, and she had stopped her anticoagulant.",
                                explanation: "A-fib is the classic embolic source for acute mesenteric ischemia, and the SMA is the usual destination." },
                            { id: "s2-umbilicus", type: "mc",
                                stem: "Why was her pain felt around the umbilicus rather than over one loop of bowel?",
                                options: ["Visceral pain from midgut organs is poorly localized and felt in the midline", "The SMA runs just beneath the umbilicus and is itself tender", "Pain is referred to the umbilicus through the phrenic nerve", "The parietal peritoneum at the umbilicus was already inflamed", "Vomiting strained the muscles of the umbilical region"], answer: 0,
                                explanation: "Visceral afferents are sparse and enter the cord on both sides, so midgut pain is felt vaguely around the umbilicus; the page lists periumbilical pain for early appendicitis and SMA embolism alike.",
                                notes: { 1: "The artery is not felt through the abdominal wall; the pain comes from the bowel it supplies.", 2: "The phrenic nerve refers diaphragmatic pain to the shoulder.", 3: "Her soft abdomen shows the parietal peritoneum was not yet inflamed.", 4: "Muscle strain does not explain severe pain with a soft abdomen." } },
                        ] },
                    { passage: `<p>Transfer for surgery is delayed. Eight hours later she lies still and her abdomen is rigid, with rebound tenderness and absent bowel sounds.</p>
<table><thead><tr><th>Test</th><th>On arrival</th><th>8 hours later</th></tr></thead><tbody>
<tr><td>Lactate (mmol/L)</td><td>1.6</td><td>6.4</td></tr>
<tr><td>BP (mmHg)</td><td>150/88</td><td>92/58</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-change", type: "sa", lines: 3,
                                stem: "Explain the change in her examination and lactate.",
                                answer: "The bowel wall has infarcted, inflaming the parietal peritoneum, so pain is now somatoparietal and she lies still; dead bowel stops moving and releases lactate.",
                                explanation: "Absent bowel sounds suggest late obstruction, intestinal ischemia, ileus, or peritonitis; the late rise in lactate marks infarction." },
                        ] },
                    { passage: `<p>She has a bowel resection and returns to intensive care on noradrenaline for shock. On day 3 she develops LLQ pain and passes bright red blood mixed with stool.</p>`,
                        questions: [
                            { id: "s2-colitis", type: "mc", justify: 12,
                                stem: "What is the most likely cause of the new bleeding? Briefly justify your choice.",
                                options: ["Ischemic colitis", "Diverticular bleeding", "A new SMA embolus", "Ulcerative colitis", "Meckel diverticulum"], answer: 0,
                                justifyAnswer: "LLQ pain with hematochezia after shock and vasopressors means low-flow colonic ischemia.",
                                explanation: "LLQ pain and hematochezia after shock or vasopressors point to ischemic colitis.",
                                notes: { 1: "Diverticular bleeding is painless.", 2: "An SMA embolus causes periumbilical pain out of proportion to the examination, affecting the small bowel.", 3: "Ulcerative colitis causes bloody diarrhea with tenesmus over weeks.", 4: "Meckel diverticulum bleeds painlessly, usually under age 2." } },
                            { id: "s2-differ", type: "sa", lines: 2,
                                stem: "How does this injury differ from the one that brought her in?",
                                answer: "The first was an embolus blocking the SMA to the small bowel; this is low flow and vasoconstriction injuring the left colon, with no blocked artery.",
                                explanation: "Both are intestinal ischemia, but one is occlusive and sudden, the other non-occlusive and driven by shock." },
                        ] },
                ],
            },
            {
                title: "Pain that settled on the right",
                keyPoints: [
                    "In a woman of reproductive age with RLQ pain, β-hCG comes first, because ectopic pregnancy must be excluded and the result decides whether CT is safe.",
                    "Periumbilical pain that moves to the RLQ over 12–24 hours, with anorexia then vomiting, is visceral pain becoming somatoparietal.",
                    "A negative obturator sign does not exclude pelvic appendicitis, because its sensitivity is only 8%.",
                    "CT AP with contrast is used in adults; ultrasound comes first in children and pregnancy to avoid radiation.",
                    "Perforation spreads infection across the peritoneum, turning localized RLQ pain into diffuse pain with rigidity, and colonoscopy is then avoided.",
                ],
                blocks: [
                    { passage: `<p>A 24-year-old woman has had abdominal pain for 20 hours. It began as a dull ache around her umbilicus, then moved to her right lower abdomen and became sharp. She has not wanted to eat since yesterday and has vomited twice since the pain began. Her last period was 5 weeks ago; her cycles are irregular. Temperature 37.9 °C, heart rate 102/min, BP 118/74 mmHg.</p>`,
                        questions: [
                            { id: "s3-sequence", type: "order",
                                stem: "Number these events in untreated appendicitis from 1 to 5.",
                                items: ["Vomiting", "Dull periumbilical pain", "Diffuse peritonitis after perforation", "Anorexia", "Sharp, localized RLQ pain"],
                                order: [1, 3, 0, 4, 2],
                                explanation: "Periumbilical visceral pain comes first, then anorexia and vomiting; as the parietal peritoneum becomes inflamed, pain localizes to the RLQ, and perforation spreads peritonitis." },
                            { id: "s3-bloods", type: "sa", lines: 3,
                                stem: "List the first bloods and bedside tests for significant abdominal pain, and say which matters most for her, and why.",
                                answer: "FBC, electrolytes, creatinine, glucose, calcium, LFTs, lipase, urinalysis, and β-hCG; β-hCG matters most, to exclude ectopic pregnancy and before any CT.",
                                explanation: "β-hCG is added whenever pregnancy is possible; ectopic pregnancy causes RLQ and pelvic pain and must not be missed." },
                        ] },
                    { passage: `<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>β-hCG</td><td>Negative</td><td></td></tr>
<tr><td>WCC</td><td>14.1 × 10⁹/L</td><td>4.0–11.0</td></tr>
<tr><td>CRP</td><td>52 mg/L</td><td>Under 5</td></tr>
<tr><td>Urinalysis</td><td>Trace leukocytes; no nitrites or blood</td><td></td></tr>
</tbody></table>
<table><thead><tr><th>Examination</th><th>Finding</th></tr></thead><tbody>
<tr><td>McBurney point</td><td>Tender, with guarding</td></tr>
<tr><td>Rovsing sign</td><td>Positive</td></tr>
<tr><td>Psoas sign</td><td>Negative</td></tr>
<tr><td>Obturator sign</td><td>Negative</td></tr>
<tr><td>Pelvic examination</td><td>No adnexal mass</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-signs", type: "mc", justify: 12,
                                stem: "A colleague says the negative psoas and obturator signs make appendicitis unlikely. What is the best response? Briefly justify your choice.",
                                options: ["Appendicitis remains likely; those signs are often negative", "Agree, and discharge her with analgesia", "Agree, and look for ovarian torsion instead", "Agree, because the trace leukocytes show a UTI", "Repeat both signs in a week before imaging"], answer: 0,
                                justifyAnswer: "Obturator sensitivity is only 8%; McBurney tenderness and Rovsing sign support appendicitis.",
                                explanation: "The psoas and obturator signs suggest where the appendix lies (retrocecal or pelvic); a negative sign, especially the obturator sign with a sensitivity of 8%, does not exclude appendicitis.",
                                notes: { 1: "Her migrating pain, fever, and leukocytosis need imaging, not discharge.", 2: "There is no adnexal mass, and the history fits appendicitis.", 3: "Trace leukocytes can come from an inflamed appendix lying near the bladder or ureter; there are no nitrites.", 4: "Waiting risks perforation." } },
                            { id: "s3-imaging", type: "sa", lines: 2,
                                stem: "Which imaging is most appropriate for her, and why that rather than ultrasound?",
                                answer: "CT AP with contrast, because she is a non-pregnant adult; ultrasound comes first only in children and pregnancy.",
                                explanation: "CT AP with contrast is used for suspected appendicitis, diverticulitis, or obstruction in adults." },
                        ] },
                    { passage: `<p>CT AP with contrast: <em>"Appendix dilated to 12 mm, with wall enhancement, surrounding fat stranding, and an appendicolith. No free gas or collection."</em></p><p>While she waits for theatre, her pain suddenly spreads across her whole abdomen. She lies still, and her abdomen is rigid with rebound tenderness. Temperature 38.9 °C.</p>`,
                        questions: [
                            { id: "s3-perf", type: "sa", lines: 2,
                                stem: "What has happened, and why has her pain changed?",
                                answer: "The appendix has perforated; pus spreads across the peritoneum, so diffuse somatoparietal pain replaces the localized RLQ pain.",
                                explanation: "Perforation turns local peritonism into diffuse peritonitis." },
                            { id: "s3-avoid", type: "mc",
                                stem: "Which test should be avoided in her now?",
                                options: ["Colonoscopy", "Blood cultures", "A repeat FBC", "Serum lactate", "A group and hold"], answer: 0,
                                explanation: "Colonoscopy is avoided in peritonitis, because insufflated air and instruments can worsen a perforation; blood cultures are part of the workup for peritonitis or sepsis.",
                                notes: { 1: "Blood cultures are recommended in peritonitis or sepsis.", 2: "A repeat FBC is harmless and tracks the infection.", 3: "Lactate helps assess sepsis.", 4: "Blood is grouped before surgery." } },
                        ] },
                    { passage: `<p>A year later her sister, 29 years old and 16 weeks pregnant, arrives with the same story: periumbilical pain moving to the RLQ over 18 hours, anorexia, and a temperature of 38.0 °C.</p>`,
                        questions: [
                            { id: "s3-pregnant", type: "sa", lines: 2,
                                stem: "Which imaging should come first for her sister, and why?",
                                answer: "Ultrasound first, to avoid exposing the fetus to the radiation of CT.",
                                explanation: "Ultrasound comes first for suspected appendicitis in children and pregnancy." },
                        ] },
                ],
            },
            {
                title: "Clues from head to toe",
                keyPoints: [
                    "Signs beyond the abdomen point to the cause: a Virchow node or acanthosis nigricans to gastric cancer, angular cheilitis to iron deficiency.",
                    "A succussion splash hours after a meal means the stomach cannot empty, as when a tumor or scarring narrows the outlet.",
                    "Persistent upper abdominal pain with alarm features, persistent vomiting, and iron deficiency with a suspected upper source all call for EGD.",
                    "Each metastatic sign follows a route: lymphatics to the Virchow node, and the peritoneum to the umbilicus and ovaries.",
                    "Shifting dullness shows ascites, which can come from peritoneal spread as well as from portal hypertension.",
                ],
                blocks: [
                    { passage: `<p>A 66-year-old man has had 3 months of epigastric discomfort, early fullness, and a 9-kg weight loss. For 2 weeks he has vomited food eaten the day before. He is tired.</p>
<table><thead><tr><th>Examination</th><th>Finding</th></tr></thead><tbody>
<tr><td>Mouth</td><td>Cracks at the corners of the mouth; smooth, pale tongue</td></tr>
<tr><td>Neck</td><td>Hard, fixed node above the left clavicle</td></tr>
<tr><td>Skin</td><td>Velvety, dark skin in both axillae</td></tr>
<tr><td>Abdomen</td><td>Splash on rocking, 4 hours after his last meal; no jaundice</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s4-signs", type: "sa", lines: 4,
                                stem: "Interpret each of his four examination findings.",
                                answer: "Angular cheilitis and a smooth, pale tongue: iron deficiency. Left supraclavicular node: Virchow node, metastatic gastric cancer. Velvety axillary skin: acanthosis nigricans, a paraneoplastic sign. Splash: delayed gastric emptying.",
                                explanation: "Together they point to a gastric cancer that is bleeding slowly, has spread to nodes, and is narrowing the gastric outlet." },
                            { id: "s4-vomit", type: "mc",
                                stem: "Why is he vomiting food eaten the day before?",
                                options: ["Something is narrowing the gastric outlet, so the stomach cannot empty", "Small bowel adhesions are blocking the distal ileum", "Acid from a duodenal ulcer is stimulating the vomiting center in the brainstem", "Liver metastases are compressing the esophagus", "Iron deficiency slows gastric muscle contraction"], answer: 0,
                                explanation: "Food that never leaves the stomach comes back undigested, and the succussion splash shows fluid and air still in the stomach hours after a meal, as in gastric outlet obstruction.",
                                notes: { 1: "Distal obstruction causes distention and feculent vomiting, not food from the day before with a gastric splash.", 2: "Ulcer pain does not cause vomiting of old food unless scarring obstructs the outlet.", 3: "Liver metastases do not compress the esophagus.", 4: "Iron deficiency does not cause gastric stasis." } },
                        ] },
                    { passage: `<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>94 g/L</td><td>130–170</td></tr>
<tr><td>MCV</td><td>71 fL</td><td>80–100</td></tr>
<tr><td>Ferritin</td><td>6 µg/L</td><td>30–300</td></tr>
<tr><td>Albumin</td><td>31 g/L</td><td>35–50</td></tr>
<tr><td>LFTs and lipase</td><td>Normal</td><td></td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s4-anemia", type: "sa", lines: 2,
                                stem: "What kind of anemia is this, and what is its likeliest cause in him?",
                                answer: "Iron deficiency anemia (microcytic, low ferritin), from slow blood loss from a lesion in the stomach.",
                                explanation: "Chronic occult bleeding from an ulcerated tumor uses up iron stores, which explains the mouth and tongue signs." },
                            { id: "s4-scope", type: "mc", justify: 12,
                                stem: "Which endoscopy should come first? Briefly justify your choice.",
                                options: ["EGD", "Colonoscopy", "ERCP", "Capsule endoscopy", "Endoscopic ultrasound of the bile duct"], answer: 0,
                                justifyAnswer: "Upper pain, alarm features, vomiting, and iron deficiency suggest an upper source.",
                                explanation: "EGD is indicated for persistent upper abdominal pain with alarm features, persistent vomiting, and iron deficiency anemia with a suspected upper source.",
                                notes: { 1: "Colonoscopy is also an indication in iron deficiency, but his symptoms and signs all point upward.", 2: "ERCP is mainly therapeutic, for bile duct stones, strictures, and cholangitis.", 3: "Capsule endoscopy cannot take biopsies and would lodge at a narrowed outlet.", 4: "His LFTs are normal and nothing suggests a bile duct problem." } },
                        ] },
                    { passage: `<p>EGD: <em>"Ulcerated, friable mass in the gastric antrum narrowing the pylorus; the scope passes with difficulty."</em> Biopsies show signet ring cell adenocarcinoma. A week later his abdomen has swollen, and the flanks are dull to percussion.</p>`,
                        questions: [
                            { id: "s4-spread", type: "sa", lines: 3,
                                stem: "How did the cancer reach the node above his left clavicle? Name two other signs of spread listed on the page, with their sites.",
                                answer: "Through the lymphatics and thoracic duct to the Virchow node; a Sister Mary Joseph nodule at the umbilicus and a Krukenberg tumor in the ovary.",
                                explanation: "The Virchow node, Sister Mary Joseph nodule, and Krukenberg tumor all point to metastatic gastric cancer." },
                            { id: "s4-ascites", type: "mc",
                                stem: "Which examination sign would best confirm that the dullness is free fluid?",
                                options: ["Shifting dullness", "A succussion splash", "High-pitched, tinkling bowel sounds", "A positive Murphy sign", "Rebound tenderness"], answer: 0,
                                explanation: "Free fluid moves with gravity, so dullness that shifts when the patient rolls shows ascites; here peritoneal spread of the tumor is the likely cause.",
                                notes: { 1: "A succussion splash shows fluid in the stomach, not the peritoneum.", 2: "Tinkling bowel sounds suggest early small bowel obstruction.", 3: "A Murphy sign suggests acute cholecystitis.", 4: "Rebound tenderness suggests peritonitis." } },
                        ] },
                ],
            },
        ],
    },
};
