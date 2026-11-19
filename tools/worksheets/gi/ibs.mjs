// Worksheet for the Irritable Bowel Syndrome (IBS) page, built by tools/build-worksheet-pdf.mjs gi ibs.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Irritable Bowel Syndrome (IBS)",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From trigger to treatment",
        top: "IBS is a [[DGBI]] with no [[structural damage]]: carbohydrates and gas stretch the bowel, and the signals rise to the CNS",
        rows: ["Cause", "Why it happens", "What it causes", "Treatment"],
        columns: [
            ["1. Visceral hypersensitivity", "Psychiatric disorders, [[fibromyalgia]], depression, and anxiety increase CNS amplification of stretch signals", "Abdominal [[pain]], recurrent but not continuous", "Antispasmodics ([[dicyclomine]]) first, then peppermint oil, then [[TCAs]]; psychological therapy if refractory"],
            ["2. Altered microbiome", "The microbiome turns carbohydrates into [[gas]]; gas and osmotic effects stimulate stretch receptors", "Reflex contraction, bloating, and pain", "A [[low FODMAP]] diet reduces triggers; [[rifaximin]] if other treatments fail"],
            ["3. Hypermotility", "Increased gut motility", "[[Diarrhea]]", "[[Loperamide]]; then rifaximin or eluxadoline (not after [[cholecystectomy]]); alosetron for women with severe disease"],
        ],
        span: "Every pattern: soluble fiber such as [[psyllium]], not insoluble fiber, for global symptoms",
        chains: [
            { label: "Making the diagnosis", steps: [["Rome V", "Recurrent pain on at least [[3]] days per month"], ["And 2 of 3", "Related to defecation, stool frequency, and stool appearance"], ["Diarrhea", "Celiac serology with total [[IgA]], calprotectin, ESR/CRP, O&P, C. diff"], ["Alarm features", "Colonoscopy with [[random biopsies]] of the left and right colon"]] },
            { label: "Treating constipation", steps: [["First", "[[PEG]], an osmotic laxative"], ["Then", "Lubiprostone, linaclotide, or plecanitide"], ["Pain too", "Antispasmodics and peppermint oil; TCAs can constipate"], ["Refractory", "Psychological therapy"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "IBS is a disorder of [[gut-brain interaction]] that stems from visceral hypersensitivity, altered [[microbiome]], and [[hypermotility]]. Unlike IBD, there is no [[structural damage]]." },
                { id: "r-path-order", type: "order",
                    stem: "Number these steps from trigger to symptom in order.",
                    items: ["Signals rise to the CNS and are amplified", "Carbohydrates and gas in the bowel", "Abdominal pain with altered bowel habit", "Stretch receptors are stimulated"],
                    order: [1, 3, 0, 2],
                    explanation: "Carbohydrates and gas stretch the bowel, stretch receptors fire, the CNS amplifies the signals, and the result is pain with altered bowel habit." },
                { id: "r-path-match", type: "match",
                    stem: "Match each part of the mechanism to what it causes.",
                    items: ["Gas and osmotic load", "Stretch receptor stimulation", "CNS amplification", "Hypermotility"],
                    options: ["Diarrhea", "Reflex contraction", "Stretch of the bowel wall", "Abdominal pain"],
                    answer: [2, 1, 3, 0],
                    explanation: "The altered microbiome makes gas, which stretches the bowel; stretch receptors trigger reflex contraction; visceral hypersensitivity turns the signal into pain; and faster motility causes diarrhea." },
                { id: "r-path-why", type: "sa", lines: 2,
                    stem: "Why are colonoscopy and biopsy normal in IBS?",
                    answer: "IBS is a disorder of how the gut and brain handle normal signals; there is no structural damage to see.",
                    explanation: "The lack of structural damage is the defining feature, and any sign of damage is an alarm feature pointing elsewhere." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of causes.",
                    html: `<table><thead><tr><th>Cause</th><th>Mechanism</th></tr></thead><tbody>
<tr><td>1. Visceral hypersensitivity</td><td>Psychiatric disorders, [[fibromyalgia]], depression, and anxiety increase [[CNS]] amplification of stretch receptor stimulation → abdominal pain</td></tr>
<tr><td>2. Altered microbiome</td><td>The microbiome metabolizes [[carbohydrates]] into [[gas]] → stretch receptors → [[reflex contraction]] → abdominal pain</td></tr>
<tr><td>3. Hypermotility</td><td>Increased gut motility → [[diarrhea]]</td></tr>
</tbody></table>` },
                { id: "r-cause-fibro", type: "sa", lines: 2,
                    stem: "Why does IBS so often occur with fibromyalgia, depression, or anxiety?",
                    answer: "They share increased central amplification of sensory signals, so ordinary gut stretch is felt as pain.",
                    explanation: "Visceral hypersensitivity is a central process, which is also why centrally acting treatments help refractory pain." },
                { id: "r-cause-mc", type: "mc",
                    stem: "A patient's bloating and pain are worst a few hours after meals rich in onions, wheat, and apples. Which cause best explains the timing?",
                    options: ["Bacteria fermenting poorly absorbed carbohydrates", "An immune reaction to gluten damaging the small bowel villi", "Acid reflux triggered by large meals stretching the stomach", "Bile salts spilling into the colon after fatty meals", "Ischemia as blood is diverted to the stomach after meals"], answer: 0,
                    explanation: "Poorly absorbed carbohydrates (FODMAPs) reach the colon, where the altered microbiome ferments them into gas, stretching the bowel a few hours after eating.",
                    notes: { 1: "Celiac disease is excluded with serology; it damages the villi, which IBS does not.", 2: "Reflux causes heartburn, not lower abdominal bloating.", 3: "Bile acid diarrhea follows fat and ileal disease, not fermentable carbohydrates.", 4: "Postprandial ischemic pain occurs in older patients with vascular disease and weight loss." } },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-blanks", type: "blank",
                    html: "IBS causes abdominal pain with a predominant bowel pattern of [[diarrhea]], [[constipation]], or [[mixed]]." },
                { id: "r-sx-alarm", type: "mc", select: 2,
                    stem: "Which findings are alarm features that call for a search for another cause?",
                    options: ["Diarrhea that wakes the patient at night", "A raised fecal calprotectin", "Pain that eases after defecation", "Bloating that builds through the day", "Symptoms that worsen with stress"], answer: [0, 1],
                    explanation: "Nocturnal diarrhea and raised calprotectin are alarm features; IBS settles in sleep and has no inflammation.",
                    notes: { 2: "Pain related to defecation is a Rome V criterion.", 3: "Bloating from gas is typical of IBS.", 4: "Stress worsening symptoms fits visceral hypersensitivity." } },
                { id: "r-sx-why", type: "sa", lines: 3,
                    stem: "Explain why weight loss, blood in the stool, and iron deficiency anemia point away from IBS.",
                    answer: "IBS has no structural damage, so it cannot cause bleeding or malabsorption; these findings mean damage, such as cancer, IBD, or celiac disease.",
                    explanation: "Every alarm feature is a sign of structural disease, inflammation, or another cause (such as infection after ABX), which IBS lacks." },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-rome", type: "blank",
                    html: "Rome V requires abdominal pain or discomfort that is recurrent but not [[continuous]], for at least [[3]] days per month, and 2 of the following: related to [[defecation]], changes in stool [[frequency]], and changes in stool [[appearance]]." },
                { id: "r-dx-match", type: "match",
                    stem: "Match each test in the workup of diarrhea to what it looks for.",
                    items: ["Celiac serology with total IgA", "Fecal calprotectin and ESR/CRP", "O&P", "C. diff testing"],
                    options: ["Infection after recent ABX", "Celiac disease", "Parasites", "Intestinal inflammation, as in IBD"],
                    answer: [1, 3, 2, 0],
                    explanation: "Each test excludes a mimic of IBS with diarrhea: celiac disease, IBD, parasites, and C. diff." },
                { id: "r-dx-iga", type: "sa", lines: 2,
                    stem: "Why is total IgA measured with celiac serology?",
                    answer: "The celiac antibody is IgA, so IgA deficiency gives a false negative; a normal total IgA makes the result reliable.",
                    explanation: "If total IgA is low, IgG-based tests or biopsy are needed." },
                { id: "r-dx-colon", type: "sa", lines: 2,
                    stem: "Why are random biopsies taken from both sides of the colon when alarm features are present, even if it looks normal?",
                    answer: "Some causes of diarrhea change the tissue without visible lesions, and only biopsies from the left and right colon show them.",
                    explanation: "Alarm features call for colonoscopy with random biopsies of the left and right colon." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each treatment to its main use in IBS.",
                    items: ["Low FODMAP diet", "Dicyclomine", "PEG", "Loperamide", "Psyllium", "Psychological therapy"],
                    options: ["Refractory symptoms", "Constipation, first line", "Reducing triggers", "Global symptoms", "Diarrhea, first line", "Abdominal pain, first line"],
                    answer: [2, 5, 1, 4, 3, 0],
                    explanation: "Treatment targets the dominant symptom, after reducing triggers with diet." },
                { id: "r-tx-pain", type: "order",
                    stem: "Number the treatments for abdominal pain in the order they are used.",
                    items: ["TCAs", "Rifaximin", "Antispasmodics such as dicyclomine", "Peppermint oil"],
                    order: [2, 3, 0, 1],
                    explanation: "Antispasmodics first, then peppermint oil, then TCAs, with rifaximin if these fail." },
                { id: "r-tx-diarrhea", type: "blank",
                    html: "For diarrhea, [[loperamide]] comes first, then rifaximin or [[eluxadoline]], which is avoided after [[cholecystectomy]]. [[Alosetron]] is used for women with severe disease, because of its risk of [[ischemic colitis]]." },
                { id: "r-tx-constipation", type: "mc",
                    stem: "Constipation persists despite PEG. Which is the most appropriate next drug?",
                    options: ["Linaclotide", "Loperamide", "Alosetron", "Eluxadoline", "Wheat bran"], answer: 0,
                    explanation: "After PEG, constipation is treated with lubiprostone, linaclotide, or plecanitide, which increase intestinal fluid secretion.",
                    notes: { 1: "Loperamide slows transit and treats diarrhea.", 2: "Alosetron slows the bowel and treats severe diarrhea in women.", 3: "Eluxadoline treats diarrhea.", 4: "Insoluble fiber is not recommended; soluble fiber such as psyllium is." } },
                { id: "r-tx-fiber", type: "sa", lines: 2,
                    stem: "Why is soluble fiber recommended rather than insoluble fiber?",
                    answer: "Soluble fiber forms a gel that normalizes stool form; insoluble fiber adds bulk and gas that worsen bloating and pain.",
                    explanation: "Soluble fiber such as psyllium improves global symptoms in every bowel pattern." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Three days between",
                keyPoints: [
                    "Recurrent pain linked to defecation and to changes in stool frequency and form, without alarm features, meets Rome V: IBS is a positive diagnosis.",
                    "A low FODMAP diet and soluble fiber come first, because fermentable carbohydrates and bran add gas to a bowel sensitive to stretch.",
                    "Constipation is treated with PEG first, then a secretagogue such as linaclotide.",
                    "The treatment for one symptom can worsen another: a TCA's anticholinergic effect eases pain but worsens constipation.",
                    "Visceral hypersensitivity is central, so anxiety and stress worsen symptoms, and psychological therapy helps refractory disease.",
                ],
                blocks: [
                    { passage: `<p>A 31-year-old teacher has had 14 months of crampy lower abdominal pain on about 6 days a month. The pain eases after she opens her bowels. She passes hard, pellet-like stool every 3–4 days and feels bloated by evening. She has no bleeding, weight loss, fever, or night-time symptoms. Her mother has hypothyroidism; there is no family history of bowel disease. She has been eating two bowls of wheat bran a day and an apple at every meal "to keep regular."</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference range</th></tr></thead><tbody>
<tr><td>Hb</td><td>136 g/L</td><td>115–160</td></tr>
<tr><td>CRP</td><td>1 mg/L</td><td>Under 5</td></tr>
<tr><td>TSH</td><td>1.8 mU/L</td><td>0.4–4.0</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-rome", type: "sa", lines: 3,
                                stem: "Does she meet the Rome V criteria? Explain which parts of her history fit each criterion.",
                                answer: "Yes: recurrent pain on about 6 days a month, related to defecation, with less frequent stools and a changed (hard) appearance.",
                                explanation: "Rome V requires recurrent but not continuous pain for at least 3 days per month and 2 of 3 associated features; she has all three." },
                            { id: "s1-pattern", type: "mc",
                                stem: "Which predominant bowel pattern does she have?",
                                options: ["Constipation", "Diarrhea", "Mixed", "No pattern, because pain is the main symptom", "Cannot be judged without colonoscopy"], answer: 0,
                                explanation: "Hard, infrequent stools without loose episodes are a constipation pattern.",
                                notes: { 1: "She has no loose or frequent stools.", 2: "A mixed pattern alternates hard and loose stools.", 3: "The pattern is defined by her stools, which are hard and infrequent.", 4: "Bowel pattern is a clinical judgment; colonoscopy is for alarm features." } },
                            { id: "s1-diet", type: "sa", lines: 3,
                                stem: "Explain how her diet may be making her symptoms worse, and what she should change.",
                                answer: "Bran is insoluble fiber and wheat and apples are FODMAPs, fermented to gas that stretches the bowel; switch to soluble fiber and a low FODMAP diet.",
                                explanation: "Soluble fiber such as psyllium improves global symptoms; insoluble fiber and fermentable carbohydrates worsen bloating and pain." },
                        ] },
                    { passage: `<p>Eight weeks later her bloating is better on a low FODMAP diet with psyllium, but she still passes hard stool every 3 days. She started PEG 6 weeks ago and takes it daily as directed.</p>`,
                        questions: [
                            { id: "s1-next", type: "mc", justify: 12,
                                stem: "Which drug is most appropriate now? Briefly justify your choice.",
                                options: ["Linaclotide", "Loperamide", "Alosetron", "Rifaximin", "Eluxadoline"], answer: 0,
                                justifyAnswer: "Constipation persists despite PEG; a secretagogue draws fluid into the bowel.",
                                explanation: "After PEG, constipation is treated with lubiprostone, linaclotide, or plecanitide.",
                                notes: { 1: "Loperamide slows transit and would worsen constipation.", 2: "Alosetron treats severe diarrhea in women.", 3: "Rifaximin is for pain or diarrhea that fails other treatments.", 4: "Eluxadoline treats diarrhea." } },
                        ] },
                    { passage: `<p>Three months later her stools are soft and regular on linaclotide, but cramping pain persists on 5 days a month despite dicyclomine and then peppermint oil. She has been under strain at work and says the pain is worst in the week before reports are due. Her doctor considers amitriptyline.</p>`,
                        questions: [
                            { id: "s1-tca", type: "sa", lines: 3,
                                stem: "How would amitriptyline help her pain, and what effect would need watching in her case?",
                                answer: "It dampens visceral hypersensitivity, the CNS amplification of gut signals; its anticholinergic effect could bring back constipation.",
                                explanation: "TCAs are the third step for pain; they help most when diarrhea is the main pattern and need care when constipation is." },
                            { id: "s1-stress", type: "mc", select: 2,
                                stem: "Which statements explain why her pain is worse when she is under strain?",
                                options: ["Anxiety increases CNS amplification of gut signals", "Visceral hypersensitivity is a central process", "Stress causes mucosal ulcers in the colon", "Stress makes her bacteria produce blood in the stool", "Stress makes the pain structural rather than functional"], answer: [0, 1],
                                explanation: "Psychiatric disorders, depression, and anxiety increase CNS amplification of stretch receptor signals, which is visceral hypersensitivity.",
                                notes: { 2: "IBS has no structural damage, including ulcers.", 3: "Blood in the stool is an alarm feature, not part of IBS.", 4: "IBS remains a disorder of gut-brain interaction without structural damage." } },
                            { id: "s1-refractory", type: "sa", lines: 2,
                                stem: "If her symptoms remain refractory to drug treatment, what treatment targets the central part of IBS?",
                                answer: "Psychological therapy, which reduces the central amplification that drives her pain.",
                                explanation: "Psychological therapy is used for refractory IBS." },
                        ] },
                ],
            },
            {
                title: "New at fifty-two",
                keyPoints: [
                    "Onset at 50 or older and recent ABX are alarm features: look for another cause before diagnosing IBS.",
                    "Diarrhea is worked up with celiac serology and total IgA, calprotectin, ESR/CRP, O&P, C. diff, and colonoscopy with biopsy.",
                    "A normal colonoscopy with random left and right biopsies and normal inflammatory markers allow a confident diagnosis of IBS.",
                    "Diarrhea is treated with loperamide, then rifaximin or eluxadoline; eluxadoline is avoided after cholecystectomy, and alosetron is for women with severe disease.",
                ],
                blocks: [
                    { passage: `<p>A 52-year-old man has had 3 months of loose stools 3–4 times a day, with cramps that ease after defecation and bloating after meals. His symptoms began a week after a course of amoxicillin-clavulanate for a chest infection. He has no bleeding, fever, or weight loss, and he is not woken at night. His father had colorectal cancer at 74. He had a laparoscopic cholecystectomy 5 years ago.</p>`,
                        questions: [
                            { id: "s2-alarm", type: "mc", select: 2,
                                stem: "Which features of his history are alarm features?",
                                options: ["Onset at 52", "Diarrhea starting after a course of ABX", "Cramps that ease after defecation", "Bloating after meals", "Loose stools 3–4 times a day"], answer: [0, 1],
                                explanation: "Onset at 50 or older and recent ABX are alarm features; a family history of colorectal cancer is also one.",
                                notes: { 2: "Pain related to defecation is a Rome V criterion.", 3: "Bloating after meals fits fermentation of carbohydrates.", 4: "Frequent loose stools are the diarrhea pattern of IBS." } },
                            { id: "s2-plan", type: "sa", lines: 3,
                                stem: "List the tests his diarrhea and alarm features call for, and what each one excludes.",
                                answer: "Celiac serology with total IgA (celiac), calprotectin and ESR/CRP (IBD), O&P (parasites), C. diff (post-ABX infection), and colonoscopy with random left and right biopsies (cancer and mucosal disease).",
                                explanation: "Alarm features add colonoscopy with random biopsies of the left and right colon to the workup for diarrhea." },
                        ] },
                    { passage: `<table><thead><tr><th>Test</th><th>Result</th><th>Reference range</th></tr></thead><tbody>
<tr><td>Hb</td><td>148 g/L</td><td>130–180</td></tr>
<tr><td>CRP</td><td>2 mg/L</td><td>Under 5</td></tr>
<tr><td>ESR</td><td>6 mm/h</td><td>Under 20</td></tr>
<tr><td>Fecal calprotectin</td><td>31 µg/g</td><td>Under 50</td></tr>
<tr><td>Anti-tTG IgA; total IgA</td><td>Negative; 2.1 g/L</td><td>Negative; 0.7–4.0</td></tr>
<tr><td>C. diff toxin; O&amp;P</td><td>Negative; negative</td><td>Negative</td></tr>
</tbody></table>
<p>Colonoscopy: normal mucosa to the terminal ileum. Random biopsies of the right and left colon: normal.</p><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-interpret", type: "mc", justify: 15,
                                stem: "What is the most likely diagnosis now? Briefly justify your choice.",
                                options: ["IBS with a diarrhea pattern", "C. diff infection after his ABX course", "Celiac disease with a false-negative test", "Inflammatory bowel disease of the colon", "Colorectal cancer, given his father"], answer: 0,
                                justifyAnswer: "He meets Rome V, and the workup, colonoscopy, and random biopsies show no other cause.",
                                explanation: "Once alarm features have been investigated and the tests are normal, IBS is diagnosed by the Rome V criteria.",
                                notes: { 1: "The C. diff toxin is negative.", 2: "His total IgA is normal, so the negative serology is reliable.", 3: "Calprotectin, ESR, CRP, and the biopsies are normal.", 4: "Colonoscopy is normal, and his father was diagnosed at 74." } },
                        ] },
                    { passage: `<p>A low FODMAP diet and psyllium ease his bloating. He starts loperamide, which helps, but he still has urgent loose stools on 3 days a week. He asks about the newer drugs he has read about: eluxadoline and alosetron.</p>`,
                        questions: [
                            { id: "s2-next", type: "sa", lines: 3,
                                stem: "Which of the drugs after loperamide suits him, and why are the other two unsuitable?",
                                answer: "Rifaximin; eluxadoline is avoided after cholecystectomy, and alosetron is reserved for women with severe disease.",
                                explanation: "After loperamide, diarrhea is treated with rifaximin or eluxadoline (not after cholecystectomy), and alosetron is for women with severe disease, with a risk of ischemic colitis." },
                            { id: "s2-rifaximin", type: "mc",
                                stem: "How does rifaximin target the mechanism of his symptoms?",
                                options: ["It alters the microbiome, so less gas is made", "It clears the C. diff infection his ABX caused", "It slows transit through gut opioid receptors", "It heals inflamed mucosa in the colon and ileum", "It blocks 5-HT3 receptors on gut sensory nerves"], answer: 0,
                                explanation: "Rifaximin acts in the gut lumen on the altered microbiome, reducing gas, stretch receptor stimulation, and reflex contraction.",
                                notes: { 1: "His C. diff test was negative.", 2: "Opioid receptors are the target of loperamide and eluxadoline.", 3: "His mucosa is normal; IBS has no structural damage.", 4: "5-HT3 receptors are blocked by alosetron." } },
                        ] },
                ],
            },
        ],
    },
};
