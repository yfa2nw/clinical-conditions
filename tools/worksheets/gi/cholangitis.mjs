// Worksheet for the Ascending Cholangitis page, built by tools/build-worksheet-pdf.mjs gi cholangitis.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Ascending Cholangitis",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From obstruction to drainage",
        top: "A blocked bile duct holds bile still → bacteria ascend from the [[duodenum]] → infected bile under [[pressure]] enters the blood → sepsis",
        rows: ["Cause", "Why bile stagnates", "Main test", "Drainage"],
        columns: [
            ["CBD stone (most common)", "A stone, usually from the [[gallbladder]], blocks the CBD", "Ultrasound or CT: a dilated CBD, often with the stone", "ERCP with [[stone removal]]; then cholecystectomy once recovered"],
            ["Benign or malignant stricture", "Scar or tumor narrows the duct", "Ultrasound or CT; [[MRCP]] if the cause is unclear", "ERCP with a [[stent]] across the stricture"],
            ["Blocked biliary stent", "Sludge and biofilm close a stent placed at [[ERCP]]", "Returning jaundice and fever in a patient with a stent", "ERCP to replace the stent"],
            ["PSC", "Bile stagnates behind multiple, [[beaded]] strictures", "MRCP: strictures with dilated segments between them", "ERCP drainage; episodes tend to recur"],
        ],
        span: "Every cause: IV fluids, [[blood cultures]], broad-spectrum IV ABX such as [[piperacillin-tazobactam]], and drainage; percutaneous drainage if ERCP fails",
        chains: [
            { label: "As infection progresses", steps: [["Obstruction and stasis", "Bile stops moving"], ["Ascending bacteria", "[[E. coli]], Klebsiella, Enterococcus"], ["Raised pressure", "Fever, RUQ pain, and [[jaundice]]: Charcot triad"], ["Bacteremia", "Cytokine storm → sepsis"]] },
            { label: "Severity decides timing", steps: [["Charcot triad", "Specific, but all three in only ~[[25]]%"], ["Reynolds pentad", "Adds [[hypotension]] and [[confusion]]: septic shock"], ["Severe", "Shock or organ failure: [[urgent]] drainage"], ["Mild", "[[80–90]]% respond to ABX; drain before discharge"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Bile duct [[obstruction]] lets bacteria ascend from the [[duodenum]] into stagnant bile. Infected bile under [[pressure]] then pushes bacteria and toxins into the [[blood]], causing a cytokine storm and [[sepsis]]." },
                { id: "r-path-order", type: "order",
                    stem: "Number these steps in ascending cholangitis in order.",
                    items: ["Infected bile under raised pressure", "Bacteria and toxins enter the blood", "Obstruction holds bile still", "Bacteria ascend from the duodenum"],
                    order: [2, 3, 0, 1],
                    explanation: "Obstruction and stasis come first, then bacteria ascend, then pressure builds in infected bile, and finally bacteremia causes sepsis." },
                { id: "r-path-flow", type: "sa", lines: 2,
                    stem: "Why do bacteria that reach the bile duct rarely cause infection while bile is flowing?",
                    answer: "Flowing bile flushes them back into the duodenum; only still bile lets them multiply.",
                    explanation: "Stasis is the condition infection depends on, which is why drainage, restoring flow, is the definitive treatment." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-match", type: "match",
                    stem: "Match each patient to the cause of the obstruction.",
                    items: ["Gallstones, with a stone in a dilated CBD", "A plastic stent placed 5 months ago for pancreatic cancer", "Ulcerative colitis and beaded ducts on MRCP", "Previous bile duct surgery and a short, smooth narrowing"],
                    options: ["Benign stricture", "CBD stone", "PSC", "Blocked biliary stent"],
                    answer: [1, 3, 2, 0],
                    explanation: "The four causes on the page are a CBD stone (most common), a benign or malignant stricture, a blocked stent after ERCP, and PSC." },
                { id: "r-cause-organisms", type: "blank",
                    html: "The organisms come from the gut: [[E. coli]] most often, then [[Klebsiella]] and [[Enterococcus]]." },
                { id: "r-cause-common", type: "mc",
                    stem: "Why is a CBD stone the most common cause of cholangitis?",
                    options: ["Gallbladder stones are common and pass into the CBD", "Stones carry bacteria into the duct from the stomach lining", "Stones form within the CBD itself in most adults over 60", "Stones dissolve the duct wall, letting gut bacteria in", "Stones narrow the duodenum, so bacteria are pushed upward"], answer: 0,
                    explanation: "Most CBD stones form in the gallbladder and pass into the duct, where they block bile flow; that is why cholecystectomy prevents recurrence.",
                    notes: { 1: "The bacteria ascend from the duodenum; the stone's role is to obstruct.", 2: "Most CBD stones come from the gallbladder rather than forming in the duct.", 3: "Stones obstruct the duct; they do not dissolve its wall.", 4: "The obstruction is in the bile duct, not the duodenum." } },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-triad", type: "blank",
                    html: "Charcot triad is [[fever]], [[RUQ pain]], and [[jaundice]]. Reynolds pentad adds [[hypotension]] and [[confusion]], and means [[septic shock]]." },
                { id: "r-sx-why", type: "sa", lines: 3,
                    stem: "Explain how each feature of Charcot triad arises from infected bile under pressure.",
                    answer: "Fever from infection of the bile; RUQ pain from the distended, inflamed duct; jaundice because bile cannot leave the liver past the obstruction.",
                    explanation: "Each feature of the triad maps onto one step: infection, distension, and obstruction." },
                { id: "r-sx-sensitivity", type: "mc",
                    stem: "Charcot triad is specific, but all three features appear in only about 25% of patients. What does this mean in practice?",
                    options: ["Its absence does not exclude cholangitis", "Its presence is too unreliable to act on", "It should be replaced by Murphy sign", "Only patients with all three need ABX", "It is useful only after ERCP"], answer: 0,
                    explanation: "A specific but insensitive sign rules in when present but cannot rule out when absent; the Tokyo Guidelines combine other evidence.",
                    notes: { 1: "Specificity means the full triad makes cholangitis likely.", 2: "Murphy sign points to cholecystitis.", 3: "Patients without the full triad can still have cholangitis and need treatment.", 4: "The triad is used at presentation." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-table", type: "blank",
                    stem: "Complete the table of the three kinds of evidence the Tokyo Guidelines combine.",
                    html: `<table><thead><tr><th>Evidence of</th><th>Tests</th></tr></thead><tbody>
<tr><td>Inflammation</td><td>FBC ([[leukocytosis]]), [[CRP]], and blood cultures</td></tr>
<tr><td>Cholestasis</td><td>LFTs: a [[cholestatic]] pattern with increased [[bilirubin]]</td></tr>
<tr><td>Obstruction and cause</td><td>Ultrasound or CT showing [[dilated bile ducts]]; [[MRCP]] if unclear</td></tr>
</tbody></table>` },
                { id: "r-dx-cultures", type: "sa", lines: 2,
                    stem: "Why are blood cultures taken before the first dose of ABX?",
                    answer: "Bacteremia is part of the disease, and ABX can sterilize the cultures, losing the chance to identify the organism.",
                    explanation: "Infected bile under pressure enters the blood, so cultures often grow the causative gut organism and guide later treatment." },
                { id: "r-dx-select", type: "mc", select: 2,
                    stem: "Which two findings most help separate cholangitis from acute cholecystitis?",
                    options: ["A cholestatic LFT pattern with raised bilirubin", "A dilated CBD on ultrasound", "Fever above 38 °C", "RUQ pain", "A raised white cell count"], answer: [0, 1],
                    explanation: "Both conditions cause fever, RUQ pain, and leukocytosis; cholestasis and a dilated CBD show the duct itself is blocked.",
                    notes: { 2: "Both cause fever.", 3: "Both cause RUQ pain.", 4: "Both cause leukocytosis." } },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-order", type: "order",
                    stem: "Number the steps of treatment for severe cholangitis in order.",
                    items: ["Cholecystectomy once recovered, if gallstones were the cause", "Urgent ERCP with stone removal or stent", "IV fluids, with vasopressors if in shock, and blood cultures", "Broad-spectrum IV ABX"],
                    order: [2, 3, 1, 0],
                    explanation: "Resuscitate and culture, start ABX, drain the bile urgently, then prevent recurrence once recovered." },
                { id: "r-tx-drain", type: "sa", lines: 2,
                    stem: "Why is ERCP, rather than ABX, called the definitive treatment?",
                    answer: "ERCP removes the obstruction, restoring flow and lowering pressure; ABX cannot clear infected bile that stays trapped.",
                    explanation: "Drainage removes the source; ABX control the bacteremia while it is done." },
                { id: "r-tx-timing", type: "match",
                    stem: "Match each situation to the plan.",
                    items: ["Shock or organ failure", "Mild, improving on ABX", "ERCP cannot reach the duct", "Recovered, with stones in the gallbladder"],
                    options: ["Percutaneous drainage", "Cholecystectomy", "Urgent drainage", "Drainage before discharge"],
                    answer: [2, 3, 0, 1],
                    explanation: "Severity sets the timing of drainage, the route depends on whether ERCP succeeds, and cholecystectomy removes the source of stones." },
                { id: "r-tx-abx", type: "mc",
                    stem: "Why is a broad-spectrum IV agent such as piperacillin-tazobactam chosen?",
                    options: ["It covers the gut organisms that ascend from the duodenum", "It dissolves the obstructing stone while it treats infection", "It is the only ABX that is excreted unchanged in bile", "It covers the skin organisms that are introduced by ERCP", "It treats the fungal infection of bile that causes sepsis"], answer: 0,
                    explanation: "The organisms are gut flora (E. coli, Klebsiella, Enterococcus), and the patient is septic or at risk, so a broad-spectrum IV agent is used.",
                    notes: { 1: "ABX do not dissolve stones.", 2: "Several ABX reach bile; the choice follows the organisms.", 3: "The organisms come from the gut, not the skin.", 4: "Cholangitis is bacterial." } },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Rigors at the nursing home",
                keyPoints: [
                    "Fever with cholestatic LFTs and a dilated CBD is cholangitis even without the full Charcot triad.",
                    "Hypotension and confusion complete Reynolds pentad: septic shock that needs urgent drainage, not a trial of ABX.",
                    "Resuscitation, cultures, ABX, and drainage run in parallel; vasopressors support perfusion until the source is removed.",
                    "Blood cultures that grow a gut organism confirm the ascending route of infection.",
                    "Cholecystectomy once recovered removes the source of stones and prevents another episode.",
                ],
                blocks: [
                    { passage: `<p>An 83-year-old woman is sent from her nursing home with a day of rigors and vomiting. Staff noticed her eyes turning yellow. She has a history of gallstones. She is drowsy but answers questions and denies pain, though she winces when her right upper quadrant is pressed. Temperature 38.9 °C, heart rate 112, BP 108/64.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>White cell count</td><td>16.4 × 10⁹/L</td><td>4.0–11.0</td></tr>
<tr><td>CRP</td><td>184 mg/L</td><td>Under 5</td></tr>
<tr><td>Bilirubin</td><td>71 µmol/L</td><td>Under 20</td></tr>
<tr><td>ALP</td><td>356 IU/L</td><td>30–110</td></tr>
<tr><td>GGT</td><td>448 IU/L</td><td>Under 50</td></tr>
<tr><td>ALT</td><td>118 IU/L</td><td>Under 40</td></tr>
<tr><td>Lipase</td><td>45 U/L</td><td>Under 60</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-pattern", type: "sa", lines: 2,
                                stem: "Describe the LFT pattern, and say what it tells you about where the problem is.",
                                answer: "Cholestatic: ALP and GGT far above ALT, with raised bilirubin; bile flow is obstructed rather than hepatocytes injured.",
                                explanation: "A cholestatic pattern with increased bilirubin is the cholestasis arm of the Tokyo Guidelines." },
                            { id: "s1-next", type: "mc", justify: 12,
                                stem: "Which test should be done next? Briefly justify your choice.",
                                options: ["Ultrasound of the abdomen", "HIDA scan", "Immediate ERCP without imaging", "CA 19-9", "Plain abdominal x-ray"], answer: 0,
                                justifyAnswer: "It shows whether the bile ducts are dilated, and often the cause.",
                                explanation: "Ultrasound or CT shows duct dilation and its cause, completing the evidence of obstruction; MRCP follows if it is unclear.",
                                notes: { 1: "A HIDA scan tests the cystic duct for cholecystitis.", 2: "Imaging confirms the obstruction and guides the drainage first.", 3: "Tumor markers do not diagnose infected obstruction.", 4: "Plain x-ray misses most stones and does not show the ducts." } },
                        ] },
                    { passage: `<p>Ultrasound shows a CBD of 12 mm with a stone at its lower end and many stones in the gallbladder. Blood cultures are taken. Two hours later she is confused, her BP is 82/46 after 2 L of fluid, and her urine output has fallen to 10 mL per hour.</p>`,
                        questions: [
                            { id: "s1-name", type: "sa", lines: 2,
                                stem: "What does her deterioration mean, and how does it change the timing of drainage?",
                                answer: "Reynolds pentad: septic shock with organ failure, so drainage is now urgent rather than planned.",
                                explanation: "Severe cholangitis, with shock or organ failure, needs urgent drainage; mild disease can be drained before discharge." },
                            { id: "s1-now", type: "mc", select: 2,
                                stem: "Which two treatments should start at once, while ERCP is arranged?",
                                options: ["Vasopressors", "Broad-spectrum IV ABX such as piperacillin-tazobactam", "Laparoscopic cholecystectomy", "Oral ursodeoxycholic acid", "Withholding treatment until the cultures grow"], answer: [0, 1],
                                explanation: "Persisting hypotension after fluids needs vasopressors, and ABX start once cultures are drawn; drainage follows urgently.",
                                notes: { 2: "Cholecystectomy is for after recovery.", 3: "Ursodeoxycholic acid has no role in infected obstruction.", 4: "ABX are given empirically once cultures are taken." } },
                        ] },
                    { passage: `<p>Urgent ERCP removes the stone, and pus drains from the duct. Her BP recovers over 24 hours, and vasopressors are stopped. Blood cultures grow a gram-negative rod.</p>`,
                        questions: [
                            { id: "s1-organism", type: "sa", lines: 2,
                                stem: "Which organism is most likely, and what does it tell you about how the infection began?",
                                answer: "E. coli; a gut organism that ascended from the duodenum into the stagnant bile.",
                                explanation: "E. coli, Klebsiella, and Enterococcus ascend from the duodenum." },
                            { id: "s1-prevent", type: "sa", lines: 2,
                                stem: "Her family asks how to stop this happening again. What do you advise, and why?",
                                answer: "Cholecystectomy once she has recovered, because her gallbladder stones can pass into the CBD again.",
                                explanation: "Cholecystectomy once recovered prevents recurrence when gallstones were the cause." },
                        ] },
                ],
            },
            {
                title: "A stent and a second fever",
                keyPoints: [
                    "A biliary stent can block with sludge and biofilm, causing cholangitis months after it was placed.",
                    "Returning jaundice with fever in a patient with a stent points to stent occlusion; drainage means replacing it.",
                    "When ERCP fails, the ducts are drained percutaneously, because drainage cannot wait in septic shock.",
                    "Cholecystostomy drains only the gallbladder and does not relieve an obstruction below the cystic duct.",
                ],
                blocks: [
                    { passage: `<p>A 69-year-old man has unresectable pancreatic head cancer. A plastic biliary stent was placed at ERCP 5 months ago, and his jaundice cleared. He now has 2 days of fever, rigors, and itch, and his wife says his eyes are yellow again. Temperature 39.0 °C, heart rate 104, BP 118/70.</p>
<table><thead><tr><th>Test</th><th>5 months ago, after stenting</th><th>Today</th></tr></thead><tbody>
<tr><td>Bilirubin (µmol/L)</td><td>18</td><td>88</td></tr>
<tr><td>ALP (IU/L)</td><td>140</td><td>420</td></tr>
<tr><td>White cell count (× 10⁹/L)</td><td>7.2</td><td>15.9</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-why", type: "sa", lines: 3,
                                stem: "Explain why he has developed cholangitis now.",
                                answer: "The stent has blocked with sludge and biofilm, so bile stagnates again and bacteria ascend from the duodenum into it.",
                                explanation: "A blocked stent is one of the four causes of obstruction; the mechanism is the same as for a stone." },
                            { id: "s2-plan", type: "mc", justify: 12,
                                stem: "He is stable. What is the best plan? Briefly justify your choice.",
                                options: ["IV ABX and ERCP to replace the stent", "Oral ABX at home and review in a week", "IV ABX alone, leaving the stent", "Pancreaticoduodenectomy", "Percutaneous cholecystostomy"], answer: 0,
                                justifyAnswer: "The blocked stent is the obstruction; ABX alone cannot clear trapped bile.",
                                explanation: "Treatment is the same as for any cause: ABX and drainage, here by replacing the stent.",
                                notes: { 1: "Fever and rigors with obstruction need IV ABX and drainage.", 2: "The blockage would persist, and the infection with it.", 3: "His cancer is unresectable.", 4: "Cholecystostomy does not drain the CBD below the cystic duct." } },
                        ] },
                    { passage: `<p>While he waits for ERCP the next morning, his BP falls to 80/50 and he becomes confused. At ERCP, the tumor has grown into the duodenum, and the endoscopist cannot reach the ampulla.</p>`,
                        questions: [
                            { id: "s2-route", type: "sa", lines: 2,
                                stem: "How should the bile now be drained, and why can it not wait?",
                                answer: "Percutaneous transhepatic drainage, because he is in septic shock and needs urgent drainage.",
                                explanation: "Percutaneous drainage is used if ERCP fails; shock means severe cholangitis, which needs urgent drainage." },
                            { id: "s2-chole", type: "mc",
                                stem: "A colleague suggests a percutaneous cholecystostomy instead. Why would it fail?",
                                options: ["It drains the gallbladder, not the blocked CBD below it", "It is too slow to drain infected bile from a septic patient", "It requires a general anesthetic, which is unsafe in shock", "It cannot be done in patients who are deeply jaundiced", "It introduces skin organisms into the CBD and worsens sepsis"], answer: 0,
                                explanation: "His obstruction is in the distal CBD; the gallbladder fills through the cystic duct above it, so draining it does not decompress the ducts reliably. Percutaneous transhepatic drainage enters the dilated ducts directly.",
                                notes: { 1: "Speed is not the problem; it drains the wrong structure.", 2: "Cholecystostomy is usually done under local anesthesia.", 3: "Jaundice does not prevent it.", 4: "The problem is the site of drainage, not contamination." } },
                        ] },
                ],
            },
            {
                title: "Four admissions in two years",
                keyPoints: [
                    "Recurrent cholangitis without stones in a patient with ulcerative colitis suggests PSC.",
                    "PSC strictures hold bile still behind them, so bacterial cholangitis keeps returning.",
                    "MRCP shows the strictures and dilated segments of PSC without instrumenting the ducts.",
                    "Mild episodes that respond to ABX are still followed by drainage of a dominant obstruction.",
                    "Fever marks the step from obstruction to infection; jaundice and a dilated duct separate cholangitis from cholecystitis.",
                ],
                blocks: [
                    { passage: `<p>A 36-year-old man with ulcerative colitis presents for the fourth time in 2 years with fever, rigors, and jaundice. Each previous episode settled on IV ABX. He had a cholecystectomy for an unrelated reason 6 years ago. Temperature 38.6 °C, BP 126/78, alert.</p>`,
                        questions: [
                            { id: "s3-cause", type: "mc", justify: 12,
                                stem: "Which cause of obstruction is most likely? Briefly justify your choice.",
                                options: ["PSC", "A CBD stone from his gallbladder", "A blocked biliary stent", "Acute cholecystitis", "Hepatitis A"], answer: 0,
                                justifyAnswer: "Ulcerative colitis, recurrent cholangitis, and no gallbladder to make stones.",
                                explanation: "PSC is linked to ulcerative colitis, and bile stagnates behind its strictures, causing recurrent cholangitis.",
                                notes: { 1: "His gallbladder was removed 6 years ago.", 2: "He has never had a stent.", 3: "He has no gallbladder.", 4: "Hepatitis A does not recur and is not obstructive." } },
                        ] },
                    { passage: `<p>MRCP shows multiple short strictures of the intrahepatic and extrahepatic ducts with dilated segments between them, and one tighter stricture in the common hepatic duct with dilated ducts above it. No stones are seen.</p>`,
                        questions: [
                            { id: "s3-mrcp", type: "sa", lines: 2,
                                stem: "Why was MRCP chosen over ERCP as the first test of his ducts?",
                                answer: "MRCP shows the whole biliary tree without instrumentation; ERCP is kept for drainage or sampling.",
                                explanation: "MRCP is used when ultrasound or CT leaves the cause of obstruction unclear." },
                            { id: "s3-recur", type: "sa", lines: 3,
                                stem: "Explain why ABX settle each episode but do not prevent the next.",
                                answer: "ABX clear the bacteria, but the strictures stay, so bile keeps stagnating and bacteria ascend again.",
                                explanation: "Stasis is the condition infection depends on; only relieving the obstruction removes it." },
                        ] },
                    { passage: `<p>He settles on IV ABX within 48 hours: his temperature is normal and his bilirubin is falling.</p>`,
                        questions: [
                            { id: "s3-drain", type: "mc",
                                stem: "What should happen before he goes home?",
                                options: ["ERCP to drain the tight common hepatic duct stricture", "Nothing, since he has responded to ABX", "Cholecystectomy before discharge", "Six months of oral ABX instead of drainage", "Repeat MRCP in 1 year, with no other step"], answer: 0,
                                explanation: "80–90% of mild cases respond to ABX, but the obstruction is drained before discharge; here the tight stricture is the obstruction, and ERCP can stent it and take brushings, since PSC raises the risk of cholangiocarcinoma.",
                                notes: { 1: "Response allows drainage to be planned, not skipped.", 2: "His gallbladder has already been removed.", 3: "ABX do not relieve the stricture.", 4: "Waiting leaves the obstruction in place." } },
                        ] },
                ],
            },
        ],
    },
};
