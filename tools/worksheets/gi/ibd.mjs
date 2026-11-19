// Worksheet for the Inflammatory Bowel Disease (IBD) page, built by tools/build-worksheet-pdf.mjs gi ibd.
// Part 1 follows the page's sections; Part 2 follows patients through unfolding scenarios and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Inflammatory Bowel Disease (IBD)",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From genes to treatment",
        top: "Genes and environment (family history, NOD-2, HLA DRB1, Western diet) → immune [[dysregulation]] → chronic inflammation of the gut",
        rows: ["Disease", "Risk and immunity", "Where and how deep", "Leads to", "Diagnosis", "Treatment"],
        columns: [
            ["1. Crohn disease", "NOD-2; smoking raises risk; [[Th1]]", "Anywhere in the GIT, most often the [[ileum]]; skip lesions; [[transmural]]", "Fistulas, abscesses, [[strictures]], malabsorption (B12, oxalate stones, gallstones)", "Cobblestone mucosa; noncaseating [[granulomas]] in up to 33%; string sign; ASCA", "Maintenance: [[immunomodulators]]; resection or stricturoplasty for complications, recurring at the anastomosis in ~90%"],
            ["2. Ulcerative colitis", "HLA DRB1; smoking [[lowers]] risk; Th2", "Colon only, continuous from the [[rectum]]; mucosa and submucosa", "Bloody diarrhea, toxic megacolon, colorectal cancer; [[PSC]]", "Friable mucosa, pseudopolyps, crypt [[abscesses]]; p-ANCA in 60–70%; lead-pipe colon", "Maintenance: [[5-ASA]]; colectomy [[cures]] it; colonoscopy every 1–2 years"],
            ["Toxic megacolon", "Severe UC or C. difficile; opioids and [[antimotility]] drugs precipitate it", "Colon over 6 cm, with systemic toxicity", "Perforation; the leading cause of death in UC", "Abdominal x-ray, plus fever, heart rate over 120, neutrophilia, or anemia", "IV corticosteroid 3 days, then [[infliximab]] or cyclosporine; subtotal colectomy if this fails"],
        ],
        span: "Rule out IBS with fecal [[calprotectin]] and ESR or CRP, and infection with stool culture, O&P, and C. diff; then colonoscopy with biopsy",
        chains: [
            { label: "Treatment pyramid", steps: [["5-ASA", "Maintenance in UC"], ["Corticosteroids", "[[Induction]] and flares"], ["Immunomodulators", "AZA, 6-MP, MTX: maintenance in Crohn"], ["Biologics", "Infliximab, adalimumab, vedolizumab"], ["Surgery", "For complications or failure"]] },
            { label: "Extraintestinal", steps: [["Joints", "Arthralgia"], ["Eyes", "Uveitis"], ["Skin", "Pyoderma gangrenosum, erythema nodosum"], ["Blood", "Hypercoagulability: VTE"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-table", type: "blank",
                    stem: "Complete the comparison.",
                    html: `<table><thead><tr><th></th><th>Crohn disease</th><th>Ulcerative colitis</th></tr></thead><tbody>
<tr><td>Location</td><td>Anywhere in the GIT, most often the [[ileum]]; rectum-sparing; RLQ pain</td><td>Colon only, starting at the [[rectum]]; LLQ pain</td></tr>
<tr><td>Lesions</td><td>[[Skip]] lesions</td><td>[[Continuous]] lesions</td></tr>
<tr><td>Diarrhea</td><td>Watery; bloody in flare-ups</td><td>[[Bloody]]</td></tr>
<tr><td>Histology</td><td>[[Transmural]] ulcers with deep fissures; creeping fat; may have granulomas</td><td>Submucosal ulcers; no granulomas</td></tr>
<tr><td>Immunity</td><td>[[Th1]] dysregulation</td><td>[[Th2]] dysregulation</td></tr>
</tbody></table>` },
                { id: "r-path-match", type: "match",
                    stem: "Match each process to its result.",
                    items: ["Transmural inflammation", "Tracts through the wall", "Scarring in Crohn disease", "Continuous inflammation from the rectum", "Years of chronic inflammation"],
                    options: ["Bloody diarrhea", "Small bowel obstruction", "Dysplasia and colorectal cancer", "Inflammation of every layer, in skip lesions", "Enterovesical, enteroenteral, and enterocutaneous fistulas"],
                    answer: [3, 4, 1, 0, 2],
                    explanation: "The depth and pattern of inflammation decide the complications." },
                { id: "r-path-why", type: "sa", lines: 2,
                    stem: "Why does Crohn disease cause RLQ pain, and ulcerative colitis LLQ pain?",
                    answer: "Crohn disease most often affects the terminal ileum, in the RLQ; ulcerative colitis starts in the rectum and sigmoid, on the left.",
                    explanation: "The site of inflammation sets the site of pain." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-match", type: "match",
                    stem: "Match each risk factor to the disease or diseases it affects.",
                    items: ["NOD-2 mutation", "HLA DRB1 association", "Smoking raises risk", "Family history and Western diet"],
                    options: ["Both diseases", "Ulcerative colitis", "Crohn disease", "Crohn disease (and its protection is lost on quitting in UC)"],
                    answer: [2, 1, 3, 0],
                    explanation: "Smoking raises the risk of Crohn disease and lowers that of ulcerative colitis, so recent ex-smokers are at risk of ulcerative colitis." },
                { id: "r-cause-exsmoker", type: "sa", lines: 2,
                    stem: "Why are recent ex-smokers at risk of ulcerative colitis?",
                    answer: "Smoking lowers the risk of ulcerative colitis, so stopping removes that protection.",
                    explanation: "Smoking decreases the risk of ulcerative colitis but raises that of Crohn disease." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-comp-ileum", type: "order",
                    stem: "Number the steps from ileal Crohn disease to gallstones in order.",
                    items: ["Bile is supersaturated with cholesterol", "The diseased ileum reabsorbs fewer bile salts", "Cholesterol gallstones form", "The bile salt pool shrinks"],
                    order: [1, 3, 0, 2],
                    explanation: "Decreased enterohepatic circulation → decreased bile salt recycling → increased cholesterol → cholelithiasis." },
                { id: "r-comp-oxalate", type: "sa", lines: 3,
                    stem: "Explain how fat malabsorption in ileal Crohn disease leads to kidney stones.",
                    answer: "Unabsorbed fat binds calcium in the gut, leaving oxalate free; it is absorbed in the colon and forms calcium oxalate stones.",
                    explanation: "Decreased fat absorption → increased free oxalate → nephrolithiasis." },
                { id: "r-comp-fistula", type: "match",
                    stem: "Match each fistula to its clue.",
                    items: ["Enterovesical", "Enteroenteral", "Enterocutaneous"],
                    options: ["Increased drainage onto the skin", "Pneumaturia, fecaluria, and UTI", "Diarrhea"],
                    answer: [1, 2, 0],
                    explanation: "Transmural inflammation tunnels into neighboring organs or skin." },
                { id: "r-comp-megacolon", type: "blank",
                    html: "Toxic megacolon is a colon over [[6]] cm on x-ray, plus at least 3 of fever over 38 °C, heart rate over [[120]], neutrophilia, or [[anemia]], plus 1 of dehydration, confusion, electrolyte disturbance, or [[hypotension]]. Opioids, anticholinergics, and [[antimotility]] drugs can precipitate it." },
                { id: "r-comp-extra", type: "mc", select: 2,
                    stem: "Which are extraintestinal features of IBD?",
                    options: ["Uveitis", "Erythema nodosum", "Dermatitis herpetiformis", "Night blindness from vitamin A excess", "Raynaud phenomenon"], answer: [0, 1],
                    explanation: "Joints (arthralgia), eyes (uveitis), skin (pyoderma gangrenosum, erythema nodosum), blood (hypercoagulability), and liver (PSC, in UC).",
                    notes: { 2: "Dermatitis herpetiformis is celiac disease.", 3: "Vitamin A deficiency, not excess, causes night blindness, from malabsorption.", 4: "Raynaud phenomenon is not listed." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-match", type: "match",
                    stem: "Match each finding to the disease.",
                    items: ["Cobblestone mucosa", "Pseudopolyps and friable mucosa", "String sign", "Stove-pipe (lead-pipe) colon", "ASCA more common"],
                    options: ["Ulcerative colitis", "Crohn disease"],
                    answer: [1, 0, 1, 0, 1],
                    explanation: "p-ANCA (60–70%) favors ulcerative colitis; ASCA favors Crohn disease." },
                { id: "r-dx-ruleout", type: "sa", lines: 2,
                    stem: "Before colonoscopy, which two conditions are ruled out, and with which tests?",
                    answer: "IBS with fecal calprotectin and ESR or CRP; infectious diarrhea with stool culture, O&P, and C. diff.",
                    explanation: "Otherwise, ileocolonoscopy or colonoscopy with biopsy." },
                { id: "r-dx-imaging", type: "blank",
                    html: "Perforation and small bowel obstruction are looked for with an abdominal [[x-ray]], and nephrolithiasis or cholelithiasis with [[ultrasound]]. Ulcerative colitis is surveyed with colonoscopy every [[1–2]] years for colorectal cancer." },
                { id: "r-dx-granuloma", type: "mc",
                    stem: "A biopsy from a patient with suspected Crohn disease shows no granulomas. What does this mean?",
                    options: ["Crohn disease is still possible; granulomas are often absent", "Crohn disease is excluded, because granulomas are required for it", "The diagnosis must be ulcerative colitis", "The biopsy was taken from the wrong organ", "Tuberculosis must be the cause"], answer: 0,
                    explanation: "Noncaseating granulomas support Crohn disease but are found in only up to 33%.",
                    notes: { 1: "Their absence does not exclude Crohn disease.", 2: "Ulcerative colitis has no granulomas, but neither do most Crohn biopsies.", 3: "Nothing suggests a sampling error.", 4: "Tuberculosis causes caseating granulomas." } },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-pyramid", type: "order",
                    stem: "Number the treatment pyramid from its base to its top.",
                    items: ["Biological therapy", "Corticosteroids", "Surgery", "5-ASA and sulfasalazine", "Immunomodulators"],
                    order: [3, 1, 4, 0, 2],
                    explanation: "Depending on severity, move up the pyramid." },
                { id: "r-tx-match", type: "match",
                    stem: "Match each drug class to its role.",
                    items: ["5-ASA", "Corticosteroids", "AZA, 6-MP, and MTX", "Infliximab"],
                    options: ["Induction and flare-ups", "Maintenance in Crohn disease", "Maintenance in ulcerative colitis", "Biological therapy; also used in toxic megacolon"],
                    answer: [2, 0, 1, 3],
                    explanation: "Steroids induce remission; maintenance differs between the two diseases." },
                { id: "r-tx-surgery", type: "sa", lines: 3,
                    stem: "List three indications for colectomy in ulcerative colitis, and explain why surgery is used more sparingly in Crohn disease.",
                    answer: "Any three of failed medical therapy, fulminant colitis, toxic megacolon, perforation, uncontrolled bleeding, or dysplasia. Crohn disease recurs at the anastomosis in ~90%, so surgery is for complications.",
                    explanation: "Colectomy cures ulcerative colitis; resection or stricturoplasty treats Crohn complications." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Pain on the right and a draining sinus",
                keyPoints: [
                    "RLQ pain, watery diarrhea, weight loss, and perianal disease in a smoker point to Crohn disease of the terminal ileum.",
                    "Skip lesions, cobblestone mucosa, and a spared rectum favor Crohn disease; granulomas help when present but are often absent.",
                    "Transmural inflammation explains fistulas and abscesses; ileal disease explains B12 deficiency, oxalate stones, and gallstones.",
                    "Corticosteroids induce remission, immunomodulators maintain it, and biologics follow for refractory disease.",
                    "Fibrotic strictures that obstruct need resection or stricturoplasty, and disease recurs at the anastomosis in about 90%.",
                ],
                blocks: [
                    { passage: `<p>A 24-year-old woman who smokes 15 cigarettes a day has 8 months of crampy RLQ pain, watery diarrhea, and 6 kg weight loss. She has mouth ulcers and a painful perianal swelling that has started to drain.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>104 g/L</td><td>115–160</td></tr>
<tr><td>MCV</td><td>106 fL</td><td>80–100</td></tr>
<tr><td>Vitamin B12</td><td>98 pmol/L</td><td>150–600</td></tr>
<tr><td>Fecal calprotectin</td><td>640 µg/g</td><td>under 50</td></tr>
<tr><td>Stool culture, O&amp;P, C. diff</td><td>Negative</td><td></td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-dx", type: "mc", justify: 15,
                                stem: "Which diagnosis is most likely? Briefly justify your choice.",
                                options: ["Crohn disease", "Ulcerative colitis", "IBS", "Celiac disease", "Infectious colitis"], answer: 0,
                                justifyAnswer: "RLQ pain, low B12 from ileal disease, perianal disease, mouth ulcers, and smoking.",
                                explanation: "Crohn disease most often involves the ileum, with aphthous ulcers and perianal abscesses.",
                                notes: { 1: "UC gives bloody diarrhea with LLQ pain and no perianal fistulas.", 2: "A high calprotectin rules out IBS.", 3: "Celiac disease does not cause perianal abscesses.", 4: "Stool tests are negative." } },
                            { id: "s1-b12", type: "sa", lines: 2,
                                stem: "Explain her macrocytic anemia.",
                                answer: "Inflamed terminal ileum absorbs less B12, causing B12 deficiency and macrocytosis.",
                                explanation: "Decreased B12 absorption → anemia." },
                        ] },
                    { passage: `<p>Ileocolonoscopy shows patchy deep ulcers with cobblestone mucosa in the terminal ileum and cecum, separated by normal mucosa. The rectum is normal. Biopsies show transmural inflammation with no granulomas. MRI shows a perianal abscess with a fistula tract to the skin.</p>`,
                        questions: [
                            { id: "s1-granuloma", type: "sa", lines: 2,
                                stem: "Does the absence of granulomas argue against the diagnosis? Explain.",
                                answer: "No: granulomas are found in only up to 33%; skip lesions, cobblestoning, rectal sparing, and transmural inflammation support Crohn disease.",
                                explanation: "Noncaseating granulomas support Crohn disease when present." },
                            { id: "s1-fistula", type: "sa", lines: 2,
                                stem: "Why has she developed a fistula?",
                                answer: "Transmural inflammation with deep fissures tunnels through the wall to the skin.",
                                explanation: "Fistulas and abscesses are tracts through the wall in Crohn disease." },
                            { id: "s1-smoke", type: "mc",
                                stem: "Which advice about smoking is correct for her?",
                                options: ["Stopping will help, because smoking raises Crohn risk and severity", "Continuing protects her, as it does in ulcerative colitis", "Smoking has no effect on Crohn disease", "She should switch to nicotine patches to treat the disease", "Stopping will trigger ulcerative colitis instead, so she should keep smoking"], answer: 0,
                                explanation: "Smoking is a risk factor for Crohn disease; it lowers the risk only of ulcerative colitis.",
                                notes: { 1: "Smoking protects against ulcerative colitis, not Crohn disease.", 2: "Smoking worsens Crohn disease.", 3: "Nicotine is not a treatment for Crohn disease.", 4: "Her disease is Crohn disease, which smoking worsens." } },
                        ] },
                    { passage: `<p>The abscess is drained. She enters remission on budesonide.</p>`,
                        questions: [
                            { id: "s1-maint", type: "mc", justify: 15,
                                stem: "Which drug class should maintain her remission? Briefly justify your choice.",
                                options: ["An immunomodulator such as azathioprine", "Mesalazine", "Long-term prednisone", "Loperamide", "No maintenance is needed"], answer: 0,
                                justifyAnswer: "Immunomodulators maintain Crohn disease; 5-ASA maintains UC, and steroids only induce remission.",
                                explanation: "On the pyramid, immunomodulators are maintenance in Crohn disease.",
                                notes: { 1: "5-ASA is maintenance for ulcerative colitis.", 2: "Steroids are for induction and flares.", 3: "Loperamide treats symptoms only.", 4: "Crohn disease relapses." } },
                        ] },
                    { passage: `<p>Six years later, despite infliximab, she has repeated episodes of cramping pain, distention, vomiting, and obstipation. A small bowel follow-through shows a long, narrow segment of terminal ileum, and her CRP is normal.</p>`,
                        questions: [
                            { id: "s1-stricture", type: "sa", lines: 3,
                                stem: "Interpret the imaging, explain why more medication is unlikely to help, and name the treatment.",
                                answer: "String sign from a fibrotic stricture; scar does not respond to anti-inflammatory drugs (CRP is normal); resection or stricturoplasty.",
                                explanation: "Strictures from scarring cause small bowel obstruction; disease recurs at the anastomosis in ~90%." },
                        ] },
                ],
            },
            {
                title: "Blood every morning",
                keyPoints: [
                    "Bloody diarrhea with urgency and tenesmus, continuous from the rectum, is ulcerative colitis once infection is ruled out.",
                    "Crypt abscesses, friable mucosa, and pseudopolyps support UC, and p-ANCA is found in 60–70%.",
                    "5-ASA maintains UC; corticosteroids treat flares; antimotility drugs and opioids are avoided in severe colitis.",
                    "Toxic megacolon needs a colon over 6 cm plus systemic toxicity, and is treated with IV corticosteroid, then infliximab or cyclosporine, then colectomy.",
                    "Colectomy cures UC, and surveillance colonoscopy every 1–2 years looks for dysplasia.",
                ],
                blocks: [
                    { passage: `<p>A 29-year-old man who stopped smoking a year ago has 6 weeks of bloody diarrhea, 5 times a day, with urgency and tenesmus. Stool culture, O&amp;P, and C. diff testing are negative. Colonoscopy shows continuous inflammation from the rectum to the splenic flexure, with friable mucosa. Biopsies show cryptitis, crypt distortion, and crypt abscesses.</p>`,
                        questions: [
                            { id: "s2-dx", type: "sa", lines: 2,
                                stem: "Name the diagnosis, and give two features that separate it from Crohn disease.",
                                answer: "Ulcerative colitis: continuous inflammation starting at the rectum, limited to the mucosa with crypt abscesses, no granulomas.",
                                explanation: "UC is continuous from the rectum, colon only, with submucosal ulcers." },
                            { id: "s2-tx", type: "mc", select: 2,
                                stem: "His flare is moderate. Which are appropriate?",
                                options: ["Corticosteroids to induce remission", "Mesalazine to maintain remission", "Loperamide to reduce stool frequency", "Long-term prednisone for maintenance", "Immediate colectomy"], answer: [0, 1],
                                explanation: "Steroids induce; 5-ASA maintains UC.",
                                notes: { 2: "Antimotility drugs can precipitate toxic megacolon.", 3: "Steroids are not used for maintenance.", 4: "Colectomy is for failed therapy or complications." } },
                        ] },
                    { passage: `<p>Two years later he is admitted with a severe flare. On day 2:</p>
<table><thead><tr><th>Finding</th><th>Result</th></tr></thead><tbody>
<tr><td>Temperature</td><td>38.8 °C</td></tr>
<tr><td>Heart rate</td><td>124</td></tr>
<tr><td>BP</td><td>98/60</td></tr>
<tr><td>Hemoglobin</td><td>94 g/L</td></tr>
<tr><td>Neutrophils</td><td>14.2 × 10<sup>9</sup>/L</td></tr>
<tr><td>Abdominal x-ray</td><td>Transverse colon 7 cm; no free air</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-criteria", type: "sa", lines: 3,
                                stem: "Show how he meets the criteria for toxic megacolon.",
                                answer: "Colon 7 cm (over 6); fever, heart rate over 120, anemia, and neutrophilia (at least 3); hypotension (at least 1).",
                                explanation: "Colon over 6 cm, plus 3 of fever, tachycardia, neutrophilia, or anemia, plus 1 of dehydration, confusion, electrolyte disturbance, or hypotension." },
                            { id: "s2-plan", type: "order",
                                stem: "Number the steps of his treatment in order, if each fails.",
                                items: ["Subtotal colectomy with end ileostomy", "Infliximab or cyclosporine for 3 days", "IV corticosteroid for 3 days"],
                                order: [2, 1, 0],
                                explanation: "IV corticosteroid, then infliximab or cyclosporine, then subtotal colectomy." },
                            { id: "s2-infliximab", type: "mc", justify: 12,
                                stem: "Before infliximab, which test should be sent? Briefly justify your choice.",
                                options: ["IGRA for latent TB", "TPMT activity", "ASCA", "Serum ceruloplasmin", "Fecal elastase"], answer: 0,
                                justifyAnswer: "Blocking TNF can reactivate latent TB, so it is screened first.",
                                explanation: "Latent TB (and HBV) is screened before biologics.",
                                notes: { 1: "TPMT is checked before thiopurines.", 2: "ASCA is not a safety test.", 3: "Ceruloplasmin tests for Wilson disease.", 4: "Fecal elastase tests the pancreas." } },
                        ] },
                    { passage: `<p>He recovers on infliximab. Eight years after diagnosis he has a raised ALP, and MRCP shows beaded bile ducts. Surveillance colonoscopy shows low-grade dysplasia in flat mucosa.</p>`,
                        questions: [
                            { id: "s2-late", type: "sa", lines: 3,
                                stem: "Name the liver disease, and explain what the dysplasia means for his management.",
                                answer: "Primary sclerosing cholangitis; dysplasia from chronic inflammation leads toward colorectal cancer, so colectomy is indicated, which also cures the UC.",
                                explanation: "Colectomy is indicated for dysplasia; PSC is linked to ulcerative colitis." },
                        ] },
                ],
            },
        ],
    },
};
