// Worksheet for the GERD page, built by tools/build-worksheet-pdf.mjs gi gerd.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Gastroesophageal Reflux Disease (GERD)",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From reflux to treatment",
        top: "A weak barrier or high pressure lets [[HCl]] enter the esophagus → mucosal damage, which can progress to [[Barrett]] esophagus",
        rows: ["Cause", "Examples", "Why reflux follows", "What helps"],
        columns: [
            ["1. Decreased LES tone", "Transient LES relaxations; smoking, alcohol, caffeine; nitrates, CCB, anticholinergics, [[theophylline]], morphine", "The sphincter no longer holds HCl in the stomach", "Stop smoking; avoid caffeine, alcohol, and [[chocolate]]; review drugs"],
            ["2. Hiatal hernia", "[[Sliding]] (type I), over 95%; paraesophageal (types II–IV)", "The junction moves above the diaphragm and loses the crura's support", "Paraesophageal: surgical repair, as an emergency for [[volvulus]] or incarceration"],
            ["3. Increased HCl production", "Smoking, alcohol, and [[Zollinger-Ellison]] syndrome", "Each reflux episode carries more acid", "PPI; treat the cause"],
            ["4. Increased intragastric pressure", "[[Obesity]], gastroparesis, and pregnancy", "Pressure pushes HCl upward", "Weight loss; no meals [[2–3]] hours before bed; raise the head of the bed"],
        ],
        span: "Every patient: a [[PPI]] or H2RA. ECG if chest pain; EGD first if alarm features; otherwise an [[8]]-week PPI trial, then EGD and pH monitoring if no improvement",
        chains: [
            { label: "As injury persists", steps: [["Chronic acid injury", "Heartburn, regurgitation, dyspepsia"], ["Intestinal metaplasia", "Salmon mucosa 1 cm or more above the junction, with [[goblet cells]]"], ["Dysplasia", "Endoscopic eradication, such as [[radiofrequency ablation]]"], ["Adenocarcinoma", "In fewer than [[5]]% of Barrett esophagus"]] },
            { label: "Refractory reflux", steps: [["Failed 8-week PPI", "EGD and ambulatory [[pH monitoring]]"], ["Abnormal acid exposure", "GERD confirmed"], ["[[Manometry]]", "Excludes achalasia or a scleroderma-like esophagus"], ["Nissen fundoplication", "Avoided in [[scleroderma]]"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "GERD occurs when [[HCl]] enters the esophagus, causing [[mucosal damage]]. A failed barrier, from decreased [[LES]] tone or a hiatal hernia, lets HCl pass, and increased [[intragastric]] pressure pushes it upward. Refluxed HCl that reaches the airway causes [[aspiration pneumonia]]." },
                { id: "r-path-match", type: "match",
                    stem: "Match each effect of reflux to its result.",
                    items: ["Failed barrier", "Raised pressure", "Mucosal injury", "Chronic injury", "Aspiration"],
                    options: ["Heartburn, dyspepsia, and chest pain", "HCl pushed upward into the esophagus", "Intestinal metaplasia, dysplasia, and adenocarcinoma", "HCl passes through a weak LES or a hiatal hernia", "Aspiration pneumonia"],
                    answer: [3, 1, 0, 2, 4],
                    explanation: "Reflux needs a barrier that fails or pressure that overcomes it; what happens next depends on how long HCl stays and where it goes." },
                { id: "r-path-why", type: "sa", lines: 2,
                    stem: "Why does increased HCl production make reflux more damaging, even if the number of reflux episodes stays the same?",
                    answer: "Each episode carries more acid onto the mucosa, so the same reflux causes more injury.",
                    explanation: "Increased HCl production is one of the four mechanisms, from smoking, alcohol, and Zollinger-Ellison syndrome." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-match", type: "match",
                    stem: "Match each risk to the mechanism it acts through.",
                    items: ["Pregnancy", "Nitrates", "Zollinger-Ellison syndrome", "Obesity", "Morphine", "A sliding hernia"],
                    options: ["Decreased LES tone", "Increased intragastric pressure", "Increased HCl production", "Loss of the crura's support at the junction"],
                    answer: [1, 0, 2, 1, 0, 3],
                    explanation: "Pregnancy also lowers LES tone through progesterone, but the page places it among causes of increased intragastric pressure." },
                { id: "r-cause-hernia", type: "mc",
                    stem: "Why can a paraesophageal hernia be dangerous even when it causes little reflux?",
                    options: ["The stomach can twist or strangulate", "It moves the junction above the diaphragm", "It raises HCl production", "It always causes Barrett esophagus", "It narrows the esophagus into a stricture"], answer: 0,
                    explanation: "Paraesophageal hernias (types II–IV) can cause volvulus and strangulation, so they are repaired surgically.",
                    notes: { 1: "Moving the junction above the diaphragm describes a sliding hernia.", 2: "Hernias do not raise acid secretion.", 3: "Barrett esophagus follows chronic reflux, not a hernia itself.", 4: "Strictures follow chronic acid injury." } },
                { id: "r-cause-drugs", type: "mc", select: 2,
                    stem: "Which drugs promote reflux by decreasing LES tone?",
                    options: ["Amlodipine", "Isosorbide mononitrate", "Omeprazole", "Famotidine", "Metformin"], answer: [0, 1],
                    explanation: "Nitrates, CCBs, anticholinergics, theophylline, and morphine lower LES tone.",
                    notes: { 2: "Omeprazole is a PPI that treats GERD.", 3: "Famotidine is an H2RA that treats GERD.", 4: "Metformin does not affect the LES." } },
                { id: "r-cause-nsaid", type: "blank",
                    html: "Aspirin and other [[NSAIDs]] are also risk factors for GERD, and in a patient taking them, the treatment is to [[stop the offending drug]]." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-blanks", type: "blank",
                    html: "Typical symptoms are heartburn, [[regurgitation]], dysphagia, dyspepsia, and chest pain. Extraesophageal symptoms are chronic [[cough]], asthma, laryngitis and [[hoarseness]], sore throat, and dental [[erosions]]." },
                { id: "r-sx-comp", type: "match",
                    stem: "Match each complication to how it presents.",
                    items: ["Bleeding", "Perforation", "Stricture", "Aspiration"],
                    options: ["Progressive dysphagia", "Pneumonia", "Hematemesis and melena", "Pneumomediastinum and mediastinitis"],
                    answer: [2, 3, 0, 1],
                    explanation: "Deeper injury bleeds or perforates, healing narrows, and refluxed HCl reaching the airway causes pneumonia." },
                { id: "r-sx-barrett", type: "blank",
                    stem: "Complete the facts about Barrett esophagus.",
                    html: `<table><thead><tr><th>Feature</th><th>Fact</th></tr></thead><tbody>
<tr><td>Defined by</td><td>[[Salmon]]-colored mucosa [[1]] cm or more above the gastroesophageal junction, with [[goblet cells]]</td></tr>
<tr><td>Risk factors</td><td>Men, White, over [[50]], central obesity, smoking, and a family history</td></tr>
<tr><td>Screen when</td><td>Chronic reflux comes with [[3]] or more risk factors</td></tr>
<tr><td>Cancer risk</td><td>Fewer than 5% develop [[adenocarcinoma]]</td></tr>
</tbody></table>` },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-order", type: "order",
                    stem: "Number the steps of the diagnostic pathway for a patient with reflux symptoms and chest pain.",
                    items: ["EGD and pH monitoring if there is no improvement", "Check for alarm features", "ECG", "An 8-week PPI trial before the first meal"],
                    order: [2, 1, 3, 0],
                    explanation: "Chest pain is presumed cardiac until proven otherwise; alarm features send the patient to EGD first; otherwise a PPI trial comes before tests." },
                { id: "r-dx-alarm", type: "mc", select: 2,
                    stem: "Which findings are alarm features that call for EGD before a PPI trial?",
                    options: ["Odynophagia", "Iron-deficiency anemia", "Hoarseness", "Regurgitation after meals", "Heartburn at night"], answer: [0, 1],
                    explanation: "Alarm features are dysphagia, odynophagia, anemia, weight loss, and hematemesis or melena.",
                    notes: { 2: "Hoarseness is an extraesophageal symptom.", 3: "Regurgitation is a typical symptom.", 4: "Nighttime heartburn is treated with a bedtime H2RA." } },
                { id: "r-dx-tests", type: "match",
                    stem: "Match each test to its role.",
                    items: ["Ambulatory pH monitoring", "Manometry", "Barium swallow", "Contrast esophagram and CXR"],
                    options: ["Before antireflux surgery, to exclude achalasia or a scleroderma-like esophagus", "Suspected perforation", "The only test of abnormal acid exposure", "Strictures, hiatal hernia, and tumors"],
                    answer: [2, 0, 3, 1],
                    explanation: "Barium has little role in uncomplicated reflux, and bleeding is evaluated by EGD with biopsy." },
                { id: "r-dx-manometry", type: "sa", lines: 2,
                    stem: "Why is manometry done before Nissen fundoplication?",
                    answer: "The esophagus must push food through the wrap; manometry excludes achalasia and the weak peristalsis of a scleroderma-like esophagus.",
                    explanation: "Nissen fundoplication is avoided in scleroderma, and achalasia can mimic refractory reflux." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-lifestyle", type: "match",
                    stem: "Match each lifestyle measure to the mechanism it targets.",
                    items: ["Weight loss", "Stopping smoking", "Raising the head of the bed", "No meals 2–3 hours before bed"],
                    options: ["Lets gravity keep HCl in the stomach at night", "Lowers intragastric pressure", "Leaves an emptier stomach with less to reflux at night", "Protects LES tone and lowers HCl production"],
                    answer: [1, 3, 0, 2],
                    explanation: "Each measure works on one of the four mechanisms of reflux." },
                { id: "r-tx-ppi", type: "sa", lines: 2,
                    stem: "Why is a PPI taken before the first meal, and what is added for nighttime symptoms?",
                    answer: "PPIs block only active pumps, which the meal switches on; a bedtime H2RA is added at night.",
                    explanation: "A standard-dose PPI before the first meal is given for 8 weeks." },
                { id: "r-tx-surveillance", type: "blank",
                    stem: "Complete the plan for Barrett surveillance.",
                    html: `<table><thead><tr><th>Biopsy shows</th><th>Plan</th></tr></thead><tbody>
<tr><td>No dysplasia</td><td>EGD every [[5]] years if under 3 cm, every [[3]] years if 3 cm or more</td></tr>
<tr><td>Indefinite dysplasia</td><td>Repeat EGD in [[6 months]] on twice-daily PPI</td></tr>
<tr><td>Low- or high-grade dysplasia</td><td>Endoscopic [[eradication]], such as radiofrequency ablation</td></tr>
</tbody></table>` },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Burning after dinner",
                keyPoints: [
                    "Chest pain is presumed cardiac until proven otherwise, so an ECG comes before a reflux diagnosis.",
                    "Without alarm features, an 8-week PPI trial before the first meal is both treatment and test.",
                    "PPIs block only active pumps, so a PPI taken at bedtime works poorly; nighttime symptoms take a bedtime H2RA.",
                    "Extraesophageal symptoms, such as cough and hoarseness, come from HCl rising beyond the esophagus.",
                    "After a failed trial, pH monitoring confirms reflux, and manometry must show normal peristalsis before Nissen fundoplication.",
                ],
                blocks: [
                    { passage: `<p>A 46-year-old man (BMI 33) has 4 months of burning behind his sternum after dinner and when he lies down, sometimes with a sour taste. He has had a dry cough and a hoarse voice most mornings. He drinks 4 cups of coffee and 3 glasses of wine daily. One episode last week felt like pressure and spread to his jaw.</p>`,
                        questions: [
                            { id: "s1-first", type: "sa", lines: 2,
                                stem: "What should be done before his symptoms are attributed to GERD, and why?",
                                answer: "An ECG, because chest pain is presumed cardiac until proven otherwise, and pain spreading to his jaw could be angina.",
                                explanation: "Reflux and ischemia can both cause burning retrosternal pain." },
                            { id: "s1-mech", type: "mc", select: 2,
                                stem: "Which mechanisms of reflux does his history most clearly show?",
                                options: ["Increased intragastric pressure", "Decreased LES tone", "Increased HCl production from a gastrinoma", "A paraesophageal hernia", "Loss of esophageal peristalsis"], answer: [0, 1],
                                explanation: "Obesity raises intragastric pressure, and coffee and alcohol lower LES tone; alcohol also raises HCl production.",
                                notes: { 2: "Nothing suggests Zollinger-Ellison syndrome, such as multiple ulcers or diarrhea.", 3: "There is no evidence of a hernia yet.", 4: "Loss of peristalsis is a motility disorder." } },
                            { id: "s1-cough", type: "sa", lines: 2,
                                stem: "Explain how reflux could cause his cough and hoarseness.",
                                answer: "Refluxed HCl rises beyond the esophagus, irritating the larynx and reaching the airway.",
                                explanation: "Chronic cough, asthma, laryngitis and hoarseness, sore throat, and dental erosions are extraesophageal symptoms." },
                        ] },
                    { passage: `<p>His ECG and troponin are normal. He has no dysphagia, odynophagia, anemia, weight loss, or bleeding. He is started on omeprazole 20 mg daily for 8 weeks with lifestyle advice. At review he says the heartburn is only slightly better. He has been taking the omeprazole at bedtime "so it works overnight," and he still has dinner at 9 pm before going to bed at 10.</p>`,
                        questions: [
                            { id: "s1-timing", type: "sa", lines: 3,
                                stem: "Explain why his PPI timing has reduced its effect, and how he should take it.",
                                answer: "PPIs block only active pumps, which meals switch on; at bedtime few are active. Take it before the first meal.",
                                explanation: "A standard dose before the first meal for 8 weeks is the page's regimen." },
                            { id: "s1-advice", type: "mc", justify: 12,
                                stem: "His nighttime symptoms continue after the timing is corrected. Which addition is most appropriate? Briefly justify your choice.",
                                options: ["A bedtime H2RA", "A second PPI dose at bedtime with dinner", "Sucralfate before bed", "Nissen fundoplication", "Metoclopramide with dinner"], answer: 0,
                                justifyAnswer: "Night acid secretion is histamine-driven, and an H2RA blocks it while asleep.",
                                explanation: "The page adds a bedtime H2RA for nighttime symptoms, along with no meals 2–3 hours before bed and raising the head of the bed.",
                                notes: { 1: "A bedtime PPI dose works poorly without a meal to activate pumps.", 2: "Sucralfate coats ulcers; it is not the page's treatment for night symptoms.", 3: "Surgery is for disease refractory to treatment, after investigation.", 4: "Metoclopramide is not part of the page's plan." } },
                        ] },
                    { passage: `<p>Six months later, despite weight loss of 9 kg, a twice-daily PPI, and a bedtime H2RA, he still has daily regurgitation. EGD shows a small sliding hiatal hernia and mild erosive esophagitis. pH monitoring off treatment shows abnormal acid exposure linked to his symptoms. He would like surgery.</p>`,
                        questions: [
                            { id: "s1-next", type: "order",
                                stem: "Number the steps toward surgery in order.",
                                items: ["Nissen fundoplication", "Manometry showing normal peristalsis", "Confirmed abnormal acid exposure on pH monitoring"],
                                order: [2, 1, 0],
                                explanation: "pH monitoring confirms GERD, manometry shows the esophagus can push food through a wrap, and then surgery." },
                            { id: "s1-nissen", type: "sa", lines: 2,
                                stem: "How does a Nissen fundoplication stop reflux?",
                                answer: "The fundus is wrapped around the lower esophagus, rebuilding a high-pressure barrier at the junction.",
                                explanation: "That barrier is also why weak peristalsis, as in scleroderma, is a contraindication." },
                        ] },
                ],
            },
            {
                title: "Food that sticks low in the chest",
                keyPoints: [
                    "Dysphagia, weight loss, and anemia are alarm features, so EGD comes before any PPI trial.",
                    "Healing of chronic acid injury narrows the lumen into a stricture, which catches solids first.",
                    "Barrett esophagus is salmon-colored mucosa 1 cm or more above the junction with goblet cells, and segment length sets the interval.",
                    "Indefinite dysplasia is rechecked in 6 months on twice-daily PPI, because inflammation can mimic dysplasia.",
                    "Low- or high-grade dysplasia is treated by endoscopic eradication, such as radiofrequency ablation.",
                ],
                blocks: [
                    { passage: `<p>A 64-year-old White man has had heartburn for 20 years, treated on and off with antacids. For 3 months solid food has stuck low in his chest, and he has lost 5 kg. He smokes and has central obesity.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>109 g/L</td><td>130–180</td></tr>
<tr><td>MCV</td><td>76 fL</td><td>80–100</td></tr>
<tr><td>Ferritin</td><td>11 µg/L</td><td>30–300</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s2-alarm", type: "sa", lines: 2,
                                stem: "Name his alarm features, and state what must happen before any PPI trial.",
                                answer: "Dysphagia, weight loss, and iron-deficiency anemia; EGD with biopsy first.",
                                explanation: "Alarm features suggest a stricture, ulcer, bleeding, or cancer, which EGD can see and biopsy." },
                        ] },
                    { passage: `<p>EGD shows a smooth, short narrowing at the gastroesophageal junction that the scope passes with resistance, and above it a 2-cm segment of salmon-colored mucosa. There is no mass.</p>
<table><thead><tr><th>Biopsy site</th><th>Finding</th></tr></thead><tbody>
<tr><td>Narrowing</td><td>Inflamed squamous mucosa with fibrosis; no malignancy</td></tr>
<tr><td>Salmon-colored segment</td><td>Columnar epithelium with goblet cells; indefinite for dysplasia, with marked inflammation</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s2-stricture", type: "sa", lines: 2,
                                stem: "Explain how 20 years of reflux produced the narrowing, and why it caught solids before liquids.",
                                answer: "Repeated acid injury healed by fibrosis, narrowing the lumen; liquids still pass a narrow lumen, solids do not.",
                                explanation: "Strictures cause progressive dysphagia, a complication of GERD." },
                            { id: "s2-indefinite", type: "mc", justify: 12,
                                stem: "What is the best plan for the salmon-colored segment? Briefly justify your choice.",
                                options: ["Repeat EGD in 6 months on twice-daily PPI", "Radiofrequency ablation now", "Repeat EGD in 5 years", "Repeat EGD in 3 years", "Esophagectomy"], answer: 0,
                                justifyAnswer: "Marked inflammation can mimic dysplasia; clear it with PPI, then rebiopsy.",
                                explanation: "Indefinite dysplasia is rechecked in 6 months on twice-daily PPI.",
                                notes: { 1: "Ablation is for confirmed low- or high-grade dysplasia.", 2: "Every 5 years is for a segment under 3 cm without dysplasia.", 3: "Every 3 years is for a segment of 3 cm or more without dysplasia.", 4: "Esophagectomy is not needed for indefinite dysplasia." } },
                        ] },
                    { passage: `<p>His stricture is dilated, and he takes the twice-daily PPI. Repeat biopsies at 6 months, with the inflammation healed, show high-grade dysplasia in the segment, confirmed by a second pathologist.</p>`,
                        questions: [
                            { id: "s2-hgd", type: "sa", lines: 2,
                                stem: "What treatment is now indicated, and why is it urgent?",
                                answer: "Endoscopic eradication, such as radiofrequency ablation; dysplasia is the step before adenocarcinoma.",
                                explanation: "Chronic injury → intestinal metaplasia → dysplasia → esophageal adenocarcinoma." },
                            { id: "s2-family", type: "mc", select: 2,
                                stem: "His 52-year-old brother has chronic reflux. Which further facts would bring him to the screening threshold for Barrett esophagus?",
                                options: ["He smokes", "He has central obesity", "He drinks coffee", "He has a hoarse voice", "He takes a PPI"], answer: [0, 1],
                                explanation: "He is already male, White, over 50, and has a family history; screening needs 3 or more risk factors with chronic reflux. Smoking and central obesity are risk factors too.",
                                notes: { 2: "Coffee lowers LES tone but is not a Barrett risk factor.", 3: "Hoarseness is an extraesophageal symptom, not a risk factor.", 4: "PPI use is not a risk factor." } },
                        ] },
                    { passage: `<p>A year later he vomits fresh blood twice and passes black stool. His heart rate is 108 and his BP 104/66.</p>`,
                        questions: [
                            { id: "s2-bleed", type: "mc",
                                stem: "Which investigation is most appropriate for this complication?",
                                options: ["EGD with biopsy", "Contrast esophagram and CXR", "Ambulatory pH monitoring", "Barium swallow", "Manometry"], answer: 0,
                                explanation: "Bleeding (hematemesis and melena) is evaluated by EGD with biopsy, which can find and treat the source.",
                                notes: { 1: "A contrast esophagram and CXR are for suspected perforation.", 2: "pH monitoring measures acid exposure, not bleeding.", 3: "Barium cannot treat bleeding and obscures later endoscopy.", 4: "Manometry measures pressures before surgery." } },
                        ] },
                ],
            },
            {
                title: "Chest pain after every meal",
                keyPoints: [
                    "Sliding hernias move the junction up and cause reflux; paraesophageal hernias roll the stomach up beside it.",
                    "Paraesophageal hernias can cause volvulus and strangulation, so they are repaired surgically.",
                    "Sudden pain, retching without vomiting, and failure to pass a tube suggest volvulus, an emergency.",
                    "Perforation causes pneumomediastinum and mediastinitis and is confirmed by contrast esophagram and CXR, followed by surgery.",
                ],
                blocks: [
                    { passage: `<p>A 74-year-old woman has 1 year of fullness and pressure in her lower chest after meals, early satiety, and occasional regurgitation, but little heartburn. A CXR shows an air-fluid level behind the heart. Barium swallow shows the gastroesophageal junction in its normal place below the diaphragm, with the gastric fundus rolled up into the chest beside it.</p>`,
                        questions: [
                            { id: "s3-type", type: "mc", justify: 12,
                                stem: "What type of hernia is this? Briefly justify your choice.",
                                options: ["Paraesophageal hiatal hernia", "Sliding hiatal hernia", "Zenker diverticulum", "Achalasia with a dilated esophagus", "Morgagni hernia"], answer: 0,
                                justifyAnswer: "The junction stays below the diaphragm; the fundus rolls up beside it.",
                                explanation: "Paraesophageal hernias are types II–IV; sliding hernias (type I) move the junction itself and are over 95% of hiatal hernias.",
                                notes: { 1: "A sliding hernia moves the junction above the diaphragm.", 2: "A Zenker diverticulum is a pouch at the top of the esophagus.", 3: "Achalasia dilates the esophagus above a bird's beak.", 4: "A Morgagni hernia is an anterior congenital defect, not through the hiatus." } },
                            { id: "s3-why", type: "sa", lines: 2,
                                stem: "Why does she have little heartburn, and why is surgical repair still advised?",
                                answer: "Her junction and LES are in place, so the barrier holds; the stomach beside it can twist or strangulate.",
                                explanation: "Paraesophageal hernias can cause volvulus and strangulation." },
                        ] },
                    { passage: `<p>While awaiting elective repair, she presents with 4 hours of severe chest and upper abdominal pain. She retches but cannot vomit, and a nasogastric tube cannot be passed. Heart rate 122, BP 98/60, lactate 4.1 mmol/L (reference under 2).</p>`,
                        questions: [
                            { id: "s3-volvulus", type: "sa", lines: 2,
                                stem: "What has most likely happened, and what does she need?",
                                answer: "Gastric volvulus in the hernia, with possible strangulation; emergency surgery.",
                                explanation: "A raised lactate suggests ischemia of the twisted stomach; the page advises emergency surgery for volvulus or incarceration." },
                        ] },
                    { passage: `<p>After surgery she develops fever and crepitus in her neck, and a CXR shows air in the mediastinum.</p>`,
                        questions: [
                            { id: "s3-perf", type: "mc",
                                stem: "Which test best confirms the suspected complication?",
                                options: ["Contrast esophagram and CXR", "EGD with biopsy", "Ambulatory pH monitoring", "Manometry", "Barium swallow with a solid bolus"], answer: 0,
                                explanation: "Perforation causes pneumomediastinum and mediastinitis and is evaluated by contrast esophagram and CXR, followed by surgery.",
                                notes: { 1: "EGD with biopsy is for bleeding; insufflating air could enlarge a leak.", 2: "pH monitoring measures acid exposure.", 3: "Manometry measures pressures before antireflux surgery.", 4: "Barium leaking into the mediastinum worsens mediastinitis." } },
                        ] },
                ],
            },
        ],
    },
};
