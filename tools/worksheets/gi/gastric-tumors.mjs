// Worksheet for the Gastric Tumors page, built by tools/build-worksheet-pdf.mjs gi gastric-tumors.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Gastric Tumors",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From stimulus to treatment",
        top: "A chronic stimulus or mutation (H. pylori, high gastrin, or KIT) drives growth in one [[layer]] of the stomach wall → a mass that bleeds, obstructs, spreads, or secretes",
        rows: ["Tumor", "What drives it", "Key test", "Treatment"],
        columns: [
            ["1. Polyps", "Fundic gland: PPI use and FAP. Hyperplastic: [[H. pylori]] and atrophy. Adenoma: precancerous", "Remove fundic gland over 1 cm, hyperplastic over [[0.5]] cm, and all adenomas", "Eradicate H. pylori (hyperplastic polyps regress); adenoma: resection, then EGD at 1 year"],
            ["2, 3. Leiomyoma, lipoma", "Smooth muscle of the muscularis propria; submucosal fat", "EUS: leiomyoma hypoechoic, desmin and SMA positive; lipoma [[hyperechoic]]", "None if small and silent; excision if symptomatic"],
            ["4. Adenocarcinoma", "Intestinal: H. pylori through metaplasia. Diffuse: [[CDH1]] loss, signet ring cells", "EGD with multiple biopsies; EUS for T stage; CT, PET-CT, laparoscopy", "Early: EMR or ESD. Deeper: perioperative chemotherapy and gastrectomy with [[D2]] lymphadenectomy"],
            ["5. Lymphoma", "MALT lymphoma: H. pylori in over [[90]]%. DLBCL", "Biopsy: CD20 positive, CD5 negative; t(11;18)", "MALT: eradicate H. pylori; radiotherapy or rituximab if [[t(11;18)]]. DLBCL: chemotherapy"],
            ["7. GIST", "Interstitial cells of Cajal; [[KIT]] or PDGFRA mutation", "Contrast CT; KIT (CD117) and [[DOG1]] staining", "R0 resection without rupture; [[imatinib]] if high risk or metastatic"],
            ["8. NET", "ECL cells driven by [[gastrin]]: type 1 autoimmune gastritis, type 2 ZES, type 3 sporadic", "Gastrin and gastric pH; chromogranin A; Ki-67", "Under 1 cm: surveillance; 1–2 cm: EMR or ESD; type 3: gastrectomy"],
        ],
        span: "Every suspected tumor: EGD with biopsies of the lesion and the surrounding mucosa for atrophy, [[metaplasia]], and H. pylori",
        chains: [
            { label: "Intestinal type", steps: [["H. pylori gastritis", "Chronic inflammation"], ["Atrophic gastritis", "Loss of glands"], ["Intestinal metaplasia", "Up to [[10]] times the risk"], ["Dysplasia", "Precancerous"], ["Adenocarcinoma", "Gland-forming mass or ulcer"]] },
            { label: "What the mass does", steps: [["Bleeding", "Melena, occult loss → [[iron deficiency]] anemia"], ["Obstruction", "Antrum: vomiting. Cardia: [[dysphagia]]"], ["Spread", "Thoracic duct → [[Virchow]] node; peritoneum → Krukenberg tumor"], ["Hormones", "Gastrin or serotonin"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "A chronic stimulus or mutation, such as [[H. pylori]], high [[gastrin]], or a [[KIT]] mutation, drives uncontrolled growth in one layer of the stomach wall. The mass can [[bleed]], obstruct, spread, or release [[hormones]]." },
                { id: "r-path-match", type: "match",
                    stem: "Match each tumor to the layer of the wall it arises from.",
                    items: ["Adenocarcinoma", "Lipoma", "GIST", "MALT lymphoma", "Leiomyoma"],
                    options: ["Muscularis propria, from the interstitial cells of Cajal", "Mucosa, from gastric epithelium", "Muscularis propria, from smooth muscle", "Submucosa, from fat", "Mucosa, from lymphoid tissue recruited by infection"],
                    answer: [1, 3, 0, 4, 2],
                    explanation: "Tumors of the mucosa are reached by forceps biopsy at EGD; tumors beneath the mucosa (lipoma, leiomyoma, GIST) need EUS and EUS-guided FNA." },
                { id: "r-path-anemia", type: "sa", lines: 2,
                    stem: "Explain how an ulcerated gastric tumor can present as tiredness with a low MCV and no visible bleeding.",
                    answer: "Slow occult blood loss from the ulcer uses up iron stores, causing microcytic iron deficiency anemia.",
                    explanation: "An ulcerated tumor bleeds, causing melena, hematemesis, or occult loss with iron deficiency anemia." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-polyps", type: "match",
                    stem: "Match each polyp to its association.",
                    items: ["Fundic gland polyp", "Hyperplastic polyp", "Adenoma", "Hamartoma"],
                    options: ["Precancerous, so all are removed", "Peutz-Jeghers syndrome and juvenile polyposis", "PPI use and FAP", "H. pylori and atrophic gastritis"],
                    answer: [2, 3, 0, 1],
                    explanation: "Fundic gland polyps are the most common, and over 90% of polyps are found incidentally." },
                { id: "r-cause-types", type: "blank",
                    stem: "Complete the comparison of the two types of adenocarcinoma.",
                    html: `<table><thead><tr><th></th><th>Intestinal type</th><th>Diffuse type</th></tr></thead><tbody>
<tr><td>Growth</td><td>Forms [[glands]]: a mass or nonhealing ulcer</td><td>No cell adhesion from loss of [[E-cadherin]]; [[signet ring]] cells infiltrate the wall</td></tr>
<tr><td>Precursor</td><td>Atrophic gastritis, metaplasia, and pernicious anemia</td><td>[[None]]</td></tr>
<tr><td>Who</td><td>More common in [[men]]; declining</td><td>Men and women equally; blood type [[A]]</td></tr>
<tr><td>Appearance</td><td>Mass or ulcer</td><td>[[Linitis plastica]], the leather bottle stomach</td></tr>
</tbody></table>` },
                { id: "r-cause-trend", type: "sa", lines: 2,
                    stem: "Why has distal, intestinal-type gastric cancer fallen while proximal and GEJ cancers are rising?",
                    answer: "Better diet, refrigeration, and H. pylori treatment remove distal risks, while obesity and GERD, which drive proximal cancers, are rising.",
                    explanation: "Proximal and GEJ tumors are linked to obesity, GERD, and bile reflux after gastric surgery." },
                { id: "r-cause-risk", type: "mc", select: 2,
                    stem: "Which of these raise the risk of gastric adenocarcinoma?",
                    options: ["A diet high in salt and smoked or cured foods", "Pernicious anemia", "Long-term PPI use without other risks", "A diet rich in vitamins A and C", "A lipoma in the gastric antrum"], answer: [0, 1],
                    explanation: "Diet (salt, smoked and cured foods, N-nitroso compounds, low vitamins A and C) and stomach disease (atrophic gastritis, pernicious anemia, gastric ulcers) raise the risk.",
                    notes: { 2: "Long-term PPI use is linked to fundic gland polyps, not listed as a cancer risk.", 3: "Low vitamins A and C raise the risk; a diet rich in them protects.", 4: "Lipomas are benign submucosal fat." } },
                { id: "r-cause-net", type: "sa", lines: 3,
                    stem: "Type 1 and type 2 gastric NETs both have high gastrin. Explain why gastric acid is low in one and high in the other.",
                    answer: "Type 1: autoimmune gastritis destroys parietal cells, so acid falls and gastrin rises in response. Type 2: a gastrinoma secretes gastrin autonomously, so acid is high.",
                    explanation: "In both, gastrin drives ECL cells to form NETs; type 3 has normal gastrin and is sporadic and aggressive." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-comp-spread", type: "match",
                    stem: "Match each sign of spread to what it is.",
                    items: ["Virchow node", "Sister Mary Joseph node", "Irish node", "Krukenberg tumor", "Blumer shelf"],
                    options: ["Left axillary node", "Mass in the rectouterine or rectovesical pouch", "Left supraclavicular node, through the thoracic duct", "Signet ring cell metastases to the ovaries", "Periumbilical nodule"],
                    answer: [2, 4, 0, 3, 1],
                    explanation: "Adenocarcinoma spreads through lymphatics, across the peritoneum, and through portal blood to the liver." },
                { id: "r-comp-blanks", type: "blank",
                    html: "The skin signs of gastric adenocarcinoma are the [[Leser-Trélat]] sign, a sudden crop of seborrheic keratoses, and [[acanthosis nigricans]]. MALT lymphoma can transform to [[DLBCL]] in 2–8%, and a ruptured [[GIST]] is more likely to recur." },
                { id: "r-comp-silent", type: "mc",
                    stem: "Why are polyps, leiomyomas, lipomas, and small NETs usually found incidentally?",
                    options: ["They are small and slow, so they rarely ulcerate, block, or spread", "They secrete hormones that block pain signals from the stomach wall", "They grow outward from the stomach wall, away from the lumen and food", "They cause pain that is usually mistaken for reflux and treated as such", "They are too small to see at EGD, so they are found only at surgery"], answer: 0,
                    explanation: "Over 90% of polyps are found incidentally; large polyps and lipomas can still obstruct the outlet.",
                    notes: { 1: "Hormones such as gastrin or serotonin cause symptoms rather than hide them.", 2: "Lipomas and leiomyomas sit within the wall, and polyps project into the lumen.", 3: "They are usually painless.", 4: "They are seen at EGD, usually done for other reasons." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-staging", type: "order",
                    stem: "Number the steps in diagnosing and staging gastric adenocarcinoma in order.",
                    items: ["CT chest, abdomen, and pelvis", "Staging laparoscopy with peritoneal washings", "EGD with multiple biopsies", "PET-CT if CT shows no metastases", "EUS for depth and nodes"],
                    order: [2, 4, 0, 3, 1],
                    explanation: "Diagnosis first; then local depth (EUS), distant spread (CT, then PET-CT), and finally peritoneal disease, found by laparoscopy in up to 40%." },
                { id: "r-dx-eus", type: "sa", lines: 2,
                    stem: "Why is EUS the key test for a lesion beneath the mucosa, rather than standard forceps biopsy?",
                    answer: "Forceps biopsy samples only the mucosa; EUS shows which layer the lesion arises from and its echo pattern, and guides FNA for tissue.",
                    explanation: "GIST and leiomyoma are hypoechoic from the muscularis propria; a lipoma is homogeneously hyperechoic." },
                { id: "r-dx-net", type: "blank",
                    html: "Gastric NETs are typed by serum [[gastrin]] and gastric [[pH]], stained for chromogranin A and [[synaptophysin]], and graded by [[Ki-67]]. Type 2 tumors need a MEN1 screen with PTH, calcium, and [[prolactin]]." },
                { id: "r-dx-markers", type: "mc",
                    stem: "What role do CEA and CA 19-9 have in gastric adenocarcinoma?",
                    options: ["They add little to diagnosis", "They confirm the diagnosis before biopsy", "They replace EUS for T staging", "They decide between HER2-directed drugs", "They screen the general population"], answer: 0,
                    explanation: "Tumor markers add little; diagnosis rests on biopsy, and HER2 amplification (12–27%) guides targeted treatment.",
                    notes: { 1: "Biopsy confirms the diagnosis.", 2: "EUS defines the T stage.", 3: "HER2 testing on the tumor guides targeted treatment.", 4: "Screening in Japan and South Korea is by endoscopy." } },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each tumor to its treatment.",
                    items: ["DLBCL of the stomach", "Gastric leiomyosarcoma", "Adenocarcinoma confined to the mucosa", "Metastatic GIST", "Type 3 NET"],
                    options: ["Imatinib", "Gastrectomy with lymphadenectomy", "Chemotherapy", "Surgical resection", "EMR or ESD"],
                    answer: [2, 3, 4, 0, 1],
                    explanation: "DLBCL grows independently of H. pylori, so it needs chemotherapy rather than eradication." },
                { id: "r-tx-gastrectomy", type: "sa", lines: 2,
                    stem: "Why does diffuse-type (signet ring cell) cancer need a total rather than a subtotal gastrectomy?",
                    answer: "It infiltrates the wall without a mass, so its edges cannot be seen, and leaving stomach behind risks leaving cancer.",
                    explanation: "Distal tumors suit subtotal gastrectomy; proximal, extensive, or diffuse tumors need total gastrectomy." },
                { id: "r-tx-malt", type: "mc", select: 2,
                    stem: "Which belong in the treatment of H. pylori-positive, t(11;18)-negative gastric MALT lymphoma?",
                    options: ["H. pylori eradication", "Confirming cure at 6 weeks and repeating EGD in 3–6 months", "Total gastrectomy with D2 lymphadenectomy", "Imatinib", "High-dose PPI alone"], answer: [0, 1],
                    explanation: "Over 75% respond to eradication; radiotherapy or rituximab is kept for t(11;18) or persisting disease.",
                    notes: { 2: "Gastrectomy with D2 lymphadenectomy treats adenocarcinoma.", 3: "Imatinib treats GIST.", 4: "A PPI alone does not clear H. pylori." } },
                { id: "r-tx-prognosis", type: "sa", lines: 2,
                    stem: "Over 50% of localized distal gastric cancers are cured. Why, then, is the outlook in the United States poor, and how do Japan and South Korea differ?",
                    answer: "Only 10–20% are found early in the United States; routine endoscopy in Japan and South Korea finds cancers while still curable.",
                    explanation: "Disseminated disease is almost never cured." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Full after a few mouthfuls",
                keyPoints: [
                    "Iron deficiency anemia with weight loss and early satiety in an older patient is an alarm picture that needs EGD with multiple biopsies.",
                    "Multiple biopsies of a suspicious ulcer matter: cancer may be present in only part of it, and seven raise sensitivity to 98%.",
                    "Staging moves outward: EUS for depth and nodes, CT for distant spread, PET-CT, then laparoscopy for peritoneal disease that imaging misses.",
                    "Tumors deeper than the superficial submucosa or with nodes get perioperative chemotherapy and gastrectomy with D2 lymphadenectomy.",
                    "Gastrectomy removes the source of intrinsic factor, so B12 must be replaced for life.",
                ],
                blocks: [
                    { passage: `<p>A 69-year-old man has had 3 months of epigastric discomfort and feeling full after a few mouthfuls. He has lost 7 kg. He grew up on a farm where meat was salted and smoked, and he smoked for 40 years. He was told he had H. pylori 20 years ago but was never treated.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>96 g/L</td><td>130–170</td></tr>
<tr><td>MCV</td><td>73 fL</td><td>80–100</td></tr>
<tr><td>Ferritin</td><td>8 µg/L</td><td>30–300</td></tr>
<tr><td>Albumin</td><td>33 g/L</td><td>35–50</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-risks", type: "sa", lines: 3,
                                stem: "List three features of his history that raise his risk of gastric adenocarcinoma, and explain how the untreated infection leads to cancer.",
                                answer: "Untreated H. pylori, salted and smoked food, and smoking. H. pylori causes chronic gastritis, then atrophy, intestinal metaplasia, dysplasia, and adenocarcinoma.",
                                explanation: "Diet, smoking, and H. pylori are risk factors; the infection drives the intestinal-type sequence." },
                            { id: "s1-labs", type: "mc", justify: 12,
                                stem: "What do his bloods most likely show? Briefly justify your choice.",
                                options: ["Iron deficiency anemia from slow bleeding", "B12 deficiency from pernicious anemia", "Anemia of chronic disease alone", "Hemolysis from the tumor", "Iron deficiency from a poor diet low in red meat"], answer: 0,
                                justifyAnswer: "Microcytosis with very low ferritin means lost iron; a tumor bleeds slowly.",
                                explanation: "An ulcerated tumor causes occult blood loss, and the iron stores run out.",
                                notes: { 1: "B12 deficiency causes a high MCV.", 2: "Anemia of chronic disease has a normal or high ferritin.", 3: "Nothing suggests hemolysis.", 4: "In an older man, iron deficiency means blood loss until proved otherwise." } },
                        ] },
                    { passage: `<p>EGD shows a 3 cm ulcer on the lesser curve of the antrum with heaped, irregular edges. The surrounding mucosa looks pale and thin.</p>`,
                        questions: [
                            { id: "s1-biopsy", type: "sa", lines: 2,
                                stem: "How should this ulcer and the mucosa around it be sampled, and why?",
                                answer: "Several biopsies of the ulcer, ideally seven, because cancer may be patchy; and the surrounding mucosa for atrophy, metaplasia, and H. pylori.",
                                explanation: "Seven biopsies raise sensitivity to 98%; cancer can present as a nonhealing ulcer." },
                        ] },
                    { passage: `<p>Biopsies show intestinal-type adenocarcinoma, HER2 not amplified, with intestinal metaplasia and H. pylori in the surrounding mucosa.</p>
<table><thead><tr><th>Staging test</th><th>Result</th></tr></thead><tbody>
<tr><td>EUS</td><td>Tumor through the muscularis propria; two enlarged perigastric nodes</td></tr>
<tr><td>CT chest, abdomen, and pelvis</td><td>No distant metastases</td></tr>
<tr><td>PET-CT</td><td>Uptake in the primary and perigastric nodes only</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s1-next", type: "mc", justify: 15,
                                stem: "Which step should come before treatment begins? Briefly justify your choice.",
                                options: ["Staging laparoscopy with peritoneal washings", "Endoscopic submucosal dissection", "Serum CEA and CA 19-9", "Repeat EGD in 3 months", "No further staging; begin palliative chemotherapy now"], answer: 0,
                                justifyAnswer: "Peritoneal disease is missed by CT and PET-CT and is found in up to 40%.",
                                explanation: "Finding peritoneal spread changes treatment from curative to palliative.",
                                notes: { 1: "ESD suits tumors confined to the mucosa or superficial submucosa; his reaches through the muscularis propria.", 2: "Tumor markers add little.", 3: "Waiting lets a curable tumor progress.", 4: "So far his disease is locoregional and potentially curable." } },
                            { id: "s1-plan", type: "sa", lines: 3,
                                stem: "Laparoscopy and washings are clear. Outline his treatment, naming the operation, and say what should be done about the H. pylori.",
                                answer: "Perioperative chemotherapy, then subtotal (distal) gastrectomy with D2 lymphadenectomy, since the tumor is distal; eradicate H. pylori.",
                                explanation: "Deeper or node-positive tumors get perioperative chemotherapy and gastrectomy with D2 lymphadenectomy (node stations 1–11); distal tumors suit subtotal gastrectomy." },
                        ] },
                    { passage: `<p>Eighteen months after a total gastrectomy, needed when the tumor proved more extensive at surgery, he has numbness in his feet and a hemoglobin of 104 g/L with an MCV of 112 fL.</p>`,
                        questions: [
                            { id: "s1-b12", type: "mc", justify: 12,
                                stem: "What is the most likely cause? Briefly justify your choice.",
                                options: ["B12 deficiency after loss of the parietal cells", "Recurrent cancer bleeding at the anastomosis", "Iron deficiency from reduced acid", "Chemotherapy toxicity to the marrow", "Folate excess from supplements"], answer: 0,
                                justifyAnswer: "Without a stomach there is no intrinsic factor; macrocytosis and neuropathy follow.",
                                explanation: "Total gastrectomy removes the parietal cells that make intrinsic factor, so B12 is replaced for life.",
                                notes: { 1: "Bleeding causes iron deficiency with a low MCV.", 2: "Iron deficiency causes microcytosis.", 3: "Chemotherapy ended long ago and would not explain neuropathy with macrocytosis.", 4: "Folate excess does not cause anemia." } },
                        ] },
                ],
            },
            {
                title: "A smooth bulge with a crater",
                keyPoints: [
                    "A smooth mass with normal mucosa over it sits beneath the mucosa, so EUS shows its layer and guides FNA, since forceps biopsy misses it.",
                    "GIST and leiomyoma look the same on EUS; KIT (CD117) and DOG1 identify a GIST, and desmin and SMA without KIT a leiomyoma.",
                    "Contrast CT is the first-line imaging for a GIST, looking at its size and the liver and peritoneum.",
                    "A localized GIST is resected completely without rupture, because rupture spills cells and raises recurrence.",
                    "Imatinib blocks the KIT tyrosine kinase: adjuvant for high-risk tumors and first line for unresectable or metastatic disease.",
                ],
                blocks: [
                    { passage: `<p>A 55-year-old woman with no past history passes black, tarry stools for 2 days and feels lightheaded. Heart rate 102, BP 112/70. Hemoglobin is 86 g/L. After resuscitation, EGD shows a 5 cm smooth, rounded bulge in the gastric body covered by normal mucosa, with a central ulcer. Forceps biopsies of the ulcer edge show only inflamed gastric mucosa.</p>`,
                        questions: [
                            { id: "s2-biopsy", type: "sa", lines: 2,
                                stem: "Why did the forceps biopsies not show the tumor, and which test should come next?",
                                answer: "The tumor lies beneath the mucosa, which forceps cannot reach; EUS with EUS-guided FNA.",
                                explanation: "EUS shows the layer the lesion comes from, and FNA obtains tissue." },
                            { id: "s2-ddx", type: "mc", select: 2,
                                stem: "Which tumors on the page fit a mass beneath the mucosa that can ulcerate and bleed?",
                                options: ["GIST", "Leiomyoma", "Fundic gland polyp", "Diffuse-type adenocarcinoma", "Type 1 NET"], answer: [0, 1],
                                explanation: "GIST and leiomyoma arise from the muscularis propria beneath the mucosa; GIST is listed among the bleeding tumors.",
                                notes: { 2: "Fundic gland polyps are small mucosal polyps.", 3: "Diffuse cancer infiltrates the wall without a discrete mass.", 4: "Type 1 NETs are small mucosal polyps." } },
                        ] },
                    { passage: `<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>EUS</td><td>5.2 cm hypoechoic mass arising from the muscularis propria</td></tr>
<tr><td>EUS-guided FNA</td><td>Spindle cells</td></tr>
<tr><td>Staining</td><td>KIT (CD117) positive, DOG1 positive, desmin negative</td></tr>
<tr><td>Contrast CT</td><td>No liver or peritoneal lesions</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s2-stain", type: "mc", justify: 12,
                                stem: "What is the diagnosis? Briefly justify your choice.",
                                options: ["GIST", "Leiomyoma", "Leiomyosarcoma", "Lipoma", "MALT lymphoma"], answer: 0,
                                justifyAnswer: "Spindle cells from the muscularis propria that stain for KIT and DOG1.",
                                explanation: "DOG1 is the most specific stain for GIST; KIT mutations are present in 75–80%.",
                                notes: { 1: "A leiomyoma is desmin and SMA positive and KIT negative.", 2: "Leiomyosarcoma is SMA positive and KIT and DOG1 negative.", 3: "A lipoma is hyperechoic fat in the submucosa.", 4: "Lymphoma arises in the mucosa and stains for B cell markers." } },
                            { id: "s2-surgery", type: "sa", lines: 2,
                                stem: "What is the goal of surgery, and what must the surgeon avoid?",
                                answer: "Complete (R0) resection; avoid rupturing the tumor, which spills cells and raises recurrence.",
                                explanation: "Complete resection without rupture is the treatment of a localized GIST." },
                        ] },
                    { passage: `<p>The resected tumor is 5.5 cm with a high mitotic rate and is judged high risk. Three years later, CT shows two new liver lesions, and biopsy confirms recurrent GIST.</p>`,
                        questions: [
                            { id: "s2-imatinib", type: "sa", lines: 3,
                                stem: "Which drug should she have received after surgery, how does it work, and what is its role now?",
                                answer: "Imatinib, a TKI that blocks the KIT kinase switched on by the mutation; it is adjuvant for high-risk tumors and first line for metastatic GIST.",
                                explanation: "Imatinib is adjuvant for high-risk resected GIST and first line if unresectable or metastatic." },
                        ] },
                ],
            },
            {
                title: "Indigestion that would not settle",
                keyPoints: [
                    "MALT lymphoma is a B cell clone that grows in lymphoid tissue recruited by H. pylori, so eradication treats it in over 75%.",
                    "Its stains are CD19, CD20, and CD79a positive, and CD5, CD10, and cyclin D1 negative, with lymphoepithelial lesions.",
                    "Cure of H. pylori is confirmed at 6 weeks, and EGD is repeated in 3–6 months to check the lymphoma.",
                    "Lymphoma with t(11;18), or that persists, no longer depends on the infection and needs radiotherapy or rituximab.",
                    "Transformation to DLBCL, which grows independently of H. pylori, is treated with chemotherapy.",
                ],
                blocks: [
                    { passage: `<p>A 61-year-old woman has 6 months of epigastric discomfort that did not settle with a PPI. EGD shows thickened, nodular folds in the antrum with a shallow erosion. Biopsies show a dense infiltrate of small lymphocytes invading and destroying gastric glands.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>CD19, CD20, CD79a</td><td>Positive</td></tr>
<tr><td>CD5, CD10, cyclin D1</td><td>Negative</td></tr>
<tr><td>H. pylori on histology</td><td>Present</td></tr>
<tr><td>t(11;18)</td><td>Not detected</td></tr>
<tr><td>Staging</td><td>Confined to the stomach</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s3-dx", type: "sa", lines: 2,
                                stem: "Name the diagnosis and explain what the lymphocytes destroying the glands represent.",
                                answer: "Gastric MALT lymphoma; lymphoepithelial lesions, where lymphoma cells invade the gland epithelium.",
                                explanation: "MALT lymphoma cells are B cells (CD19, CD20, CD79a positive) and CD5, CD10, and cyclin D1 negative." },
                            { id: "s3-first", type: "mc", justify: 15,
                                stem: "What is the first treatment? Briefly justify your choice.",
                                options: ["H. pylori eradication", "Radiotherapy to the stomach", "Total gastrectomy", "Chemotherapy for lymphoma", "Rituximab alone"], answer: 0,
                                justifyAnswer: "The clone still depends on H. pylori, and t(11;18) is absent, so over 75% respond.",
                                explanation: "MALT lymphoma is driven by H. pylori in over 90%, and eradication is first line unless t(11;18) is present.",
                                notes: { 1: "Radiotherapy is kept for t(11;18) or failure of eradication.", 2: "Surgery is not needed for MALT lymphoma.", 3: "Chemotherapy treats DLBCL.", 4: "Rituximab is for H. pylori-negative or t(11;18)-positive disease." } },
                        ] },
                    { passage: `<p>After eradication therapy:</p>
<table><thead><tr><th>Time</th><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>6 weeks</td><td>Urea breath test</td><td>Negative</td></tr>
<tr><td>4 months</td><td>EGD with biopsies</td><td>Folds flatter; residual lymphoma in the antrum</td></tr>
<tr><td>12 months</td><td>EGD with biopsies</td><td>Persisting lymphoma, unchanged</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-persist", type: "sa", lines: 2,
                                stem: "Interpret this course, and say what treatment comes next.",
                                answer: "The infection is cured, but the lymphoma persists, so it no longer depends on H. pylori; radiotherapy or rituximab.",
                                explanation: "Radiotherapy or rituximab treats MALT lymphoma that does not respond to eradication." },
                        ] },
                    { passage: `<p>Two years later she develops drenching night sweats, fever, and weight loss. EGD shows a large ulcerated antral mass, and biopsies show sheets of large B cells.</p>`,
                        questions: [
                            { id: "s3-dlbcl", type: "mc", justify: 12,
                                stem: "What has happened, and what treatment is needed? Briefly justify your choice.",
                                options: ["Transformation to DLBCL; chemotherapy", "New H. pylori infection; repeat eradication", "Adenocarcinoma; gastrectomy", "GIST; imatinib", "Type 3 NET; gastrectomy"], answer: 0,
                                justifyAnswer: "Large B cells with B symptoms; DLBCL grows independently of H. pylori.",
                                explanation: "MALT lymphoma transforms to DLBCL in 2–8%; DLBCL is treated with chemotherapy.",
                                notes: { 1: "Large B cells are lymphoma, not infection.", 2: "Adenocarcinoma forms glands or signet ring cells.", 3: "GIST is a spindle cell tumor beneath the mucosa.", 4: "NETs stain for chromogranin A and do not cause B symptoms." } },
                        ] },
                ],
            },
            {
                title: "Polyps in a patient on B12 injections",
                keyPoints: [
                    "In autoimmune gastritis, lost parietal cells mean low acid, so gastrin rises without a brake and drives ECL cells into type 1 NETs.",
                    "Gastrin and gastric pH type a NET: high gastrin with low acid is type 1, with high acid type 2, and normal gastrin type 3.",
                    "Small NETs are watched; 1–2 cm tumors are removed by EMR or ESD; multiple or recurrent type 1 tumors can take somatostatin analogs.",
                    "Fundic gland polyps over 1 cm, hyperplastic polyps over 0.5 cm, and all adenomas are biopsied or removed.",
                    "After an adenoma is resected, EGD is repeated at 1 year and then every 3–5 years.",
                ],
                blocks: [
                    { passage: `<p>A 58-year-old woman has pernicious anemia treated with IM B12 and has an EGD for dyspepsia. The gastric body mucosa is thin and pale. There are six small polyps in the body (3–8 mm) and one 14 mm flat-topped polyp in the antrum.</p>
<table><thead><tr><th>Polyp</th><th>Histology</th></tr></thead><tbody>
<tr><td>Body polyps (biopsied)</td><td>Nests of uniform cells; chromogranin A and synaptophysin positive; Ki-67 under 3%</td></tr>
<tr><td>Antral polyp (removed)</td><td>Tubular adenoma with low-grade dysplasia</td></tr>
</tbody></table>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Fasting serum gastrin</td><td>980 pg/mL (normal under 100)</td></tr>
<tr><td>Gastric pH</td><td>6.8</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s4-type", type: "mc", justify: 15,
                                stem: "Which type of NET are the body polyps? Briefly justify your choice.",
                                options: ["Type 1", "Type 2", "Type 3", "A GIST", "Fundic gland polyps"], answer: 0,
                                justifyAnswer: "High gastrin with low acid (pH 6.8) in autoimmune gastritis drives ECL cells.",
                                explanation: "Type 1 NETs are 70–80% of gastric NETs and arise with autoimmune gastritis and high gastrin.",
                                notes: { 1: "Type 2 has high gastrin with high acid, from ZES.", 2: "Type 3 has normal gastrin.", 3: "A GIST arises beneath the mucosa and stains for KIT and DOG1.", 4: "Fundic gland polyps do not stain for chromogranin A." } },
                            { id: "s4-mechanism", type: "order",
                                stem: "Number the steps from her autoimmune disease to the NETs in order.",
                                items: ["ECL cells multiply into small NETs", "Gastrin rises, with no acid to switch it off", "Antibodies destroy parietal cells", "Acid secretion falls"],
                                order: [2, 3, 1, 0],
                                explanation: "Low acid removes the brake on G cells, and gastrin is a growth signal for ECL cells." },
                        ] },
                    { passage: `<p>The body NETs are all under 1 cm. The adenoma was removed completely.</p>`,
                        questions: [
                            { id: "s4-plan", type: "sa", lines: 3,
                                stem: "Outline the plan for the NETs and for follow-up after the adenoma, with reasons.",
                                answer: "NETs under 1 cm: surveillance, with somatostatin analogs if multiple or recurrent. Adenoma: EGD at 1 year, then every 3–5 years, because adenomas are precancerous.",
                                explanation: "NETs 1–2 cm are removed by EMR or ESD; type 3 tumors need gastrectomy with lymphadenectomy." },
                            { id: "s4-polyp", type: "mc",
                                stem: "At a later EGD, a 12 mm fundic gland polyp is seen. What should be done?",
                                options: ["Biopsy or remove it, because it is over 1 cm", "Leave it, because fundic gland polyps never need removal", "Start a PPI to shrink it", "Eradicate H. pylori and recheck in a year", "Refer for total gastrectomy"], answer: 0,
                                explanation: "Fundic gland polyps over 1 cm are biopsied or removed.",
                                notes: { 1: "Fundic gland polyps over 1 cm are removed.", 2: "PPI use is linked to fundic gland polyps.", 3: "Eradication makes hyperplastic polyps regress.", 4: "A polyp is managed endoscopically." } },
                        ] },
                ],
            },
        ],
    },
};
