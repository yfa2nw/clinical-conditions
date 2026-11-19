// Worksheet for the Hepatocellular Injury: Infectious Causes page, built by tools/build-worksheet-pdf.mjs gi hepatic-infectious.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

const labs = (head, rows) => `<table><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

export const WORKSHEET = {
    title: "Hepatocellular Injury: Infectious Causes",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From virus to treatment",
        top: "Viral infection of hepatocytes → a [[cytotoxic T-cell]] response destroys infected cells → hepatic inflammation, acute or chronic",
        rows: ["Virus", "Spread and structure", "Becomes chronic", "Diagnosis", "Treatment"],
        columns: [
            ["HAV", "[[Fecal-oral]]; naked +ssRNA picornavirus", "Never; no carrier state", "IgM anti-HAV", "Supportive; vaccine or immunoglobulin after exposure"],
            ["HBV", "Sex, blood, perinatal; pdsDNA that [[integrates]] into host DNA", "About 90% of infants; under [[5]]% of adults", "HBsAg for 6 months or more means chronic; [[anti-HBc]] only after natural infection", "Chronic: [[tenofovir]] or entecavir, or peginterferon-α"],
            ["HCV", "Blood, mainly IV drug use; enveloped +ssRNA flavivirus", "[[75–85]]%, from high antigenic variation", "Anti-HCV, then HCV [[RNA]]; assess fibrosis", "[[Direct-acting antivirals]] for 8–12 weeks; cure over 95%"],
            ["HDV", "Needs [[HBsAg]] from HBV as its envelope", "Rare after coinfection; most [[superinfections]]", "IgM anti-HDV or HDV RNA with HBsAg", "Peginterferon-α; treat the HBV"],
            ["HEV", "Fecal-oral: water, undercooked [[pork]]", "Only if immunocompromised", "IgM anti-HEV", "Supportive; ribavirin if chronic. Fulminant in [[pregnancy]]"],
        ],
        span: "Also: CMV ([[ganciclovir]]), HSV (IV acyclovir at once), EBV (supportive); abscesses (drainage and antibiotics; amebic: [[metronidazole]]) and parasites (hydatid: albendazole; schistosomiasis: praziquantel)",
        chains: [
            { label: "Acute hepatitis", steps: [["Incubation", "Asymptomatic"], ["Prodromal", "Flu-like, RUQ pain; ALT more than AST"], ["Icteric", "Jaundice, dark urine, [[pale]] stools"], ["Convalescent", "Resolves over weeks to months"]] },
            { label: "Chronic infection", steps: [["Chronic hepatitis", "Ongoing inflammation"], ["Fibrosis", "APRI above 1.0 suggests cirrhosis"], ["Cirrhosis", "Liver failure"], ["HCC", "Ultrasound every [[6]] months in chronic HBV, or HCV with cirrhosis"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Viruses replicate inside hepatocytes, where type I [[interferons]] (IFN-α and β) are the first, innate defense. [[Cytotoxic T cells]] then recognize and destroy infected cells, raising AST and [[ALT]]. Chronic infection leads to [[fibrosis]] and cirrhosis, while HBV can also [[integrate]] into host DNA and cause HCC without cirrhosis." },
                { id: "r-path-why", type: "sa", lines: 2,
                    stem: "Why is most of the liver damage in viral hepatitis caused by the immune system rather than by the virus itself?",
                    answer: "The hepatitis viruses do little direct harm; T cells kill the infected hepatocytes to clear the virus, and that killing is the injury.",
                    explanation: "A cytotoxic T-cell response destroys infected cells and causes hepatic inflammation." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-vowels", type: "sa", lines: 2,
                    stem: "\"The vowels hit your bowels.\" Which viruses does this describe, and what three features do they share?",
                    answer: "HAV and HEV: fecal-oral spread, acute infection only, and a naked (unenveloped) virus.",
                    explanation: "HEV becomes chronic only in immunocompromised patients." },
                { id: "r-cause-match", type: "match",
                    stem: "Match each virus to its key feature.",
                    items: ["HAV", "HBV", "HCV", "HDV", "HEV"],
                    options: ["High antigenic variation, so no vaccine", "Needs HBV to replicate", "No carrier state", "Fulminant hepatitis in pregnancy", "Can cause HCC without cirrhosis"],
                    answer: [2, 4, 0, 1, 3],
                    explanation: "Each virus has one feature that drives how it behaves clinically." },
                { id: "r-cause-hdv", type: "mc",
                    stem: "Why does HDV superinfection usually become chronic, while coinfection is usually cleared?",
                    options: ["Chronic HBV keeps supplying HBsAg for its envelope", "Superinfection is caused by a different, more aggressive HDV genotype", "In coinfection the HDV vaccine protects the patient", "Coinfection happens only in infants", "Superinfection always involves HCV as well"], answer: 0,
                    explanation: "When both are acquired together, clearing the HBV removes HDV's envelope; on top of chronic HBV, HDV always has HBsAg available.",
                    notes: { 1: "The difference is the state of the HBV, not the HDV strain.", 2: "There is no HDV vaccine; the HBV vaccine protects.", 3: "Coinfection can occur at any age.", 4: "HCV plays no part in HDV infection." } },
                { id: "r-cause-life", type: "order",
                    stem: "Number the steps of the HBV life cycle in order.",
                    items: ["Host RNA polymerase II makes pregenomic RNA", "Entry through the NTCP receptor", "Reverse transcriptase makes new pdsDNA", "pdsDNA repaired into cccDNA in the nucleus", "Assembly with an HBsAg envelope and release"],
                    order: [1, 3, 0, 2, 4],
                    explanation: "cccDNA persists in the nucleus, so HBV is hard to cure; tenofovir and entecavir block reverse transcription." },
                { id: "r-cause-other", type: "match",
                    stem: "Match each infection to its setting or source.",
                    items: ["CMV hepatitis", "HSV hepatitis", "Amebic abscess", "Hydatid cyst", "Schistosomiasis"],
                    options: ["Eggs from dogs, with sheep as intermediate hosts", "Freshwater snails", "Third trimester of pregnancy, neonates, and immunocompromised patients", "Transplant recipients and AIDS", "Contaminated food or water; men aged 18–50"],
                    answer: [3, 2, 4, 0, 1],
                    explanation: "The setting often points to the cause before any test." },
                { id: "r-cause-pyogenic", type: "blank",
                    html: "Pyogenic abscesses are usually [[polymicrobial]] (E. coli, Klebsiella, streptococci, staphylococci, and anaerobes), spreading from the [[biliary tract]] or through the [[portal vein]]; half of solitary abscesses are in the [[right]] lobe." },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-anicteric", type: "sa", lines: 2,
                    stem: "Why is acute HCV infection often missed?",
                    answer: "It is often anicteric, with no jaundice, so it causes few or no symptoms.",
                    explanation: "Many infections are anicteric, especially HAV in young children and acute HCV." },
                { id: "r-sx-outcome", type: "mc", select: 2,
                    stem: "Which infections carry a recognized risk of fulminant hepatitis?",
                    options: ["HEV in pregnancy", "HDV superinfection", "HAV in a young child", "EBV in an adolescent", "CMV in a healthy adult"], answer: [0, 1],
                    explanation: "Fulminant hepatitis is linked with HBV, HDV, and HEV in pregnancy; HSV hepatitis can also be fulminant.",
                    notes: { 2: "HAV in young children is usually anicteric and mild.", 3: "EBV causes a mild transaminase rise.", 4: "CMV hepatitis occurs in immunocompromised patients and is usually mild." } },
                { id: "r-sx-extra", type: "blank",
                    stem: "Complete the extrahepatic manifestations.",
                    html: `<table><thead><tr><th>Feature</th><th>Mainly</th></tr></thead><tbody>
<tr><td>Polyarteritis nodosa</td><td>[[HBV]]</td></tr>
<tr><td>Mixed cryoglobulinemia vasculitis</td><td>[[HCV]]</td></tr>
<tr><td>Membranous nephropathy</td><td>[[HBV]]</td></tr>
<tr><td>B-cell non-Hodgkin lymphoma</td><td>[[HCV]]</td></tr>
<tr><td>Porphyria cutanea tarda and lichen planus</td><td>[[HCV]]</td></tr>
</tbody></table>` },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-igm", type: "sa", lines: 2,
                    stem: "Why does IgM mark a current or recent infection while IgG marks past infection or immunity?",
                    answer: "IgM is made first, early in a new infection, and fades; IgG follows and persists for years.",
                    explanation: "The rule applies to HAV, HDV, and HEV serology, and to anti-HBc." },
                { id: "r-dx-hbv", type: "match",
                    stem: "Match each HBV serology pattern to its phase.",
                    items: ["HBsAg, HBeAg, HBV DNA, IgM anti-HBc", "IgM anti-HBc alone, with or without anti-HBe", "Anti-HBs and anti-HBe with IgG anti-HBc", "Anti-HBs alone", "HBsAg, anti-HBe, and IgG anti-HBc, with low HBV DNA"],
                    options: ["Immunized", "Window period", "Chronic, non-replicative", "Acute infection", "Recovery"],
                    answer: [3, 1, 4, 0, 2],
                    explanation: "Anti-HBc never comes from vaccination; HBsAg for 6 months or more means chronic infection." },
                { id: "r-dx-hdv", type: "sa", lines: 2,
                    stem: "A patient has IgM anti-HDV and HBsAg. Which HBV test separates coinfection from superinfection, and how?",
                    answer: "IgM anti-HBc: positive in coinfection (HBV is new), negative in superinfection (HBV is chronic).",
                    explanation: "HDV serology is read alongside HBV serology." },
                { id: "r-dx-abscess", type: "match",
                    stem: "Match each finding to its cause.",
                    items: ["Odorless, brown \"anchovy paste\" aspirate", "Detached membrane (water lily sign) and eosinophilia", "Eggs or antigen in stool, with periportal fibrosis", "\"Owl's eye\" inclusions on biopsy"],
                    options: ["Schistosomiasis", "CMV", "Amebic abscess", "Hydatid cyst"],
                    answer: [2, 3, 0, 1],
                    explanation: "Each infection has a signature finding on aspiration, imaging, or biopsy." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-table", type: "blank",
                    stem: "Complete the treatment table.",
                    html: `<table><thead><tr><th>Cause</th><th>Treatment</th></tr></thead><tbody>
<tr><td>Chronic HBV</td><td>[[Tenofovir]] or entecavir, or peginterferon-α</td></tr>
<tr><td>HCV</td><td>Direct-acting antivirals for [[8–12]] weeks</td></tr>
<tr><td>HDV</td><td>[[Peginterferon-α]]; treat the HBV</td></tr>
<tr><td>Chronic HEV</td><td>[[Ribavirin]]</td></tr>
<tr><td>HSV</td><td>IV [[acyclovir]], started as soon as suspected</td></tr>
<tr><td>Schistosomiasis</td><td>[[Praziquantel]]</td></tr>
</tbody></table>` },
                { id: "r-tx-vaccine", type: "mc", select: 2,
                    stem: "Which adults should be offered the hepatitis B vaccine?",
                    options: ["A man on hemodialysis", "The household contact of an HBsAg-positive person", "A woman with anti-HBs and IgG anti-HBc", "A man with chronic HBV", "A woman who recovered from hepatitis A as a child, with no other risk"], answer: [0, 1],
                    explanation: "At-risk adults include dialysis patients and household and sex contacts of HBsAg-positive people, among others.",
                    notes: { 2: "She is already immune from natural infection.", 3: "Vaccination does not treat existing infection.", 4: "Past HAV is not an HBV risk factor." } },
                { id: "r-tx-amebic", type: "sa", lines: 2,
                    stem: "Why is an amebic abscess treated with metronidazole and then a luminal agent?",
                    answer: "Metronidazole kills the invasive amebae in the liver; the luminal agent clears cysts left in the gut, preventing relapse.",
                    explanation: "Metronidazole, then a luminal agent such as paromomycin; drainage only in select cases." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "A new partner",
                keyPoints: [
                    "Acute HBV shows HBsAg, HBeAg, HBV DNA, and IgM anti-HBc; most adults clear it.",
                    "Sex partners and household contacts are offered the vaccine, with HBIG after a recent exposure.",
                    "HBsAg for 6 months or more means chronic infection; HBeAg and HBV DNA show how replicative and infectious it is.",
                    "Integrated HBV DNA can cause HCC without cirrhosis, so every patient with chronic HBV has ultrasound every 6 months.",
                    "Tenofovir or entecavir suppress HBV but leave cccDNA, so treatment is long term.",
                ],
                blocks: [
                    { passage: `<p>A 24-year-old man has 1 week of fatigue, nausea, aching joints, and RUQ pain, followed in the last 2 days by dark urine and yellow eyes. Three months ago he began a relationship with a new partner; they do not use condoms. He has never been vaccinated.</p>
${labs(["Test", "Result"], [["ALT / AST (U/L)", "1840 / 1260"], ["ALP (U/L)", "160"], ["Bilirubin (µmol/L)", "96"], ["INR", "1.1"], ["HBsAg", "Positive"], ["HBeAg", "Positive"], ["IgM anti-HBc", "Positive"], ["Anti-HBs", "Negative"], ["IgM anti-HAV", "Negative"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-phase", type: "sa", lines: 2,
                                stem: "Name the phases of acute viral hepatitis he has passed through, giving the features of each.",
                                answer: "Incubation (none), prodromal (fatigue, nausea, arthralgia, RUQ pain), and now icteric (dark urine, jaundice).",
                                explanation: "The convalescent phase follows over weeks to months." },
                            { id: "s1-dx", type: "mc", justify: 12,
                                stem: "What do his results show? Briefly justify your choice.",
                                options: ["Acute hepatitis B", "Chronic hepatitis B with a flare", "Window period of hepatitis B", "Acute hepatitis A", "Immunity from vaccination"], answer: 0,
                                justifyAnswer: "HBsAg and HBeAg with IgM anti-HBc, after a recent exposure.",
                                explanation: "IgM anti-HBc marks recent infection; his incubation of 3 months fits the 1–6 months for HBV.",
                                notes: { 1: "A flare of chronic infection would usually show IgG, not IgM, anti-HBc.", 2: "In the window period HBsAg is negative.", 3: "IgM anti-HAV is negative.", 4: "He was never vaccinated, and HBsAg is positive." } },
                            { id: "s1-partner", type: "sa", lines: 2,
                                stem: "His partner has never been vaccinated and tests negative for HBV. What should she be offered, and why both parts?",
                                answer: "HBIG and the vaccine: HBIG neutralizes virus from recent exposure now; the vaccine gives lasting immunity.",
                                explanation: "Post-exposure prophylaxis is vaccine plus HBIG; sex partners are a group offered the vaccine." },
                            { id: "s1-tx", type: "mc",
                                stem: "His INR is normal and he is alert. How should his acute hepatitis B be treated?",
                                options: ["Supportive care, with antivirals only if it becomes severe", "Tenofovir at once, for life", "Peginterferon-α for 48 weeks", "Direct-acting antivirals for 12 weeks", "Referral for liver transplant assessment now, before he deteriorates"], answer: 0,
                                explanation: "Acute HBV is treated supportively, with antivirals if severe; most adults clear it.",
                                notes: { 1: "Lifelong tenofovir is for chronic infection.", 2: "Peginterferon-α is an option for chronic HBV, or for HDV.", 3: "Direct-acting antivirals treat HCV.", 4: "He has no sign of liver failure." } },
                        ] },
                    { passage: `<p>He feels well within 2 months. He misses follow-up and returns 9 months after the first test.</p>
${labs(["Test", "Month 0", "Month 9"], [["HBsAg", "Positive", "Positive"], ["HBeAg", "Positive", "Negative"], ["Anti-HBe", "Negative", "Positive"], ["Anti-HBc", "IgM", "IgG"], ["Anti-HBs", "Negative", "Negative"], ["HBV DNA (IU/mL)", "3.2 × 10<sup>7</sup>", "850"], ["ALT (U/L)", "1840", "32"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-chronic", type: "sa", lines: 3,
                                stem: "Interpret his month 9 results: is the infection acute or chronic, and how infectious is he now?",
                                answer: "Chronic, since HBsAg has persisted for 6 months or more; non-replicative with low infectivity, as HBeAg is negative, anti-HBe positive, and HBV DNA low.",
                                explanation: "He belongs to the under 5% of adults whose infection becomes chronic." },
                            { id: "s1-screen", type: "mc", justify: 15,
                                stem: "Ultrasound shows a normal liver without cirrhosis. Does he need HCC screening? Briefly justify your choice.",
                                options: ["Yes, ultrasound every 6 months", "No, because he has no cirrhosis", "No, because his HBV DNA is low", "Only once his ALT rises", "Only after age 60"], answer: 0,
                                justifyAnswer: "Integrated HBV DNA can cause HCC without cirrhosis, so all chronic HBV is screened.",
                                explanation: "Screen for HCC with ultrasound every 6 months in chronic HBV, or HCV with cirrhosis.",
                                notes: { 1: "The no-cirrhosis rule applies to HCV, not HBV.", 2: "Integration does not depend on a high viral load.", 3: "Normal enzymes do not remove the risk.", 4: "The page's rule has no age limit for chronic HBV." } },
                        ] },
                    { passage: `<p>Years later his HBV DNA rises to 2.4 × 10<sup>6</sup> IU/mL with an ALT of 140 U/L, and tenofovir is started. He then develops fever, weight loss, painful nodules on his shins, a foot drop, and a BP of 172/104.</p>`,
                        questions: [
                            { id: "s1-tenofovir", type: "sa", lines: 2,
                                stem: "He asks whether he can stop tenofovir once his HBV DNA is undetectable. What is the answer, and why?",
                                answer: "Usually not: tenofovir blocks reverse transcription but cccDNA persists in the nucleus, so the virus returns when it stops.",
                                explanation: "cccDNA persists, so HBV is hard to cure." },
                            { id: "s1-pan", type: "sa", lines: 2,
                                stem: "Which complication explains his new symptoms, and by what mechanism?",
                                answer: "Polyarteritis nodosa: HBV immune complexes inflame medium-sized arteries in the skin, nerves, and kidneys.",
                                explanation: "Extrahepatic manifestations of HBV come mostly from immune complexes." },
                        ] },
                ],
            },
            {
                title: "Purple spots on the shins",
                keyPoints: [
                    "Anti-HCV shows exposure only; HCV RNA shows current infection.",
                    "Cryoglobulins from chronic HCV cause purpura, arthralgia, low complement, and MPGN.",
                    "Fibrosis is assessed before treatment, with APRI, FIB-4, or elastography.",
                    "Direct-acting antivirals for 8–12 weeks cure over 95%, but anti-HCV stays positive for life.",
                    "Cure does not protect: reinfection is possible, so HCV RNA, not antibody, detects it.",
                ],
                blocks: [
                    { passage: `<p>A 49-year-old man who injected drugs in his twenties has 3 months of a purple rash on his legs that does not blanch, aching knees, and ankle swelling. Urine dipstick: blood 2+, protein 3+.</p>
${labs(["Test", "Result"], [["Creatinine (µmol/L)", "148"], ["C3 / C4", "Normal / Low"], ["Cryoglobulins", "Present"], ["ALT / AST (U/L)", "78 / 66"], ["HBsAg", "Negative"], ["Anti-HCV", "Positive"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-link", type: "sa", lines: 3,
                                stem: "Explain how a liver virus could cause his skin, joint, and kidney findings.",
                                answer: "Chronic HCV drives B cells to make cryoglobulins, immune complexes that deposit in small vessels, joints, and glomeruli: purpura, arthralgia, and MPGN.",
                                explanation: "Mixed cryoglobulinemia vasculitis and MPGN are extrahepatic manifestations mainly of HCV." },
                            { id: "s2-next", type: "mc", justify: 12,
                                stem: "Which test is needed before treating his HCV? Briefly justify your choice.",
                                options: ["HCV RNA by PCR", "Repeat anti-HCV antibody", "Liver biopsy", "IgM anti-HCV", "HCV genotype alone"], answer: 0,
                                justifyAnswer: "Anti-HCV shows exposure only; RNA confirms current infection.",
                                explanation: "A positive antibody is followed by HCV RNA; if positive, fibrosis is assessed before treatment.",
                                notes: { 1: "The antibody stays positive for life.", 2: "Noninvasive tests assess fibrosis without biopsy.", 3: "The page's HCV test is antibody then RNA, not IgM.", 4: "Genotype does not show whether the virus is present." } },
                        ] },
                    { passage: `<p>HCV RNA is 1.8 × 10<sup>6</sup> IU/mL. Elastography suggests moderate fibrosis without cirrhosis. He takes a sofosbuvir-based regimen for 12 weeks. HCV RNA is undetectable 12 weeks after finishing, and his rash settles.</p>`,
                        questions: [
                            { id: "s2-sofo", type: "sa", lines: 2,
                                stem: "Why can HCV be cured in 12 weeks when HBV cannot?",
                                answer: "HCV replicates only as RNA in the cytoplasm and leaves no lasting copy; HBV keeps cccDNA in the nucleus.",
                                explanation: "HCV drugs target NS3/4A, NS5A, and NS5B; cure exceeds 95%." },
                            { id: "s2-screen", type: "mc",
                                stem: "Does he need ultrasound every 6 months for HCC after cure?",
                                options: ["No, because he has no cirrhosis", "Yes, because anti-HCV is still positive", "Yes, because all HCV integrates into DNA", "Yes, because he had cryoglobulinemia", "No, because he never had any jaundice"], answer: 0,
                                explanation: "For HCV, screening is for those with cirrhosis; HCV does not integrate, so the risk comes through cirrhosis.",
                                notes: { 1: "Anti-HCV stays positive after cure and does not mean active infection.", 2: "HCV does not integrate; HBV does.", 3: "Cryoglobulinemia does not change HCC screening.", 4: "Jaundice has no bearing on screening." } },
                        ] },
                    { passage: `<p>Two years later he restarts injecting. Routine bloods show ALT 210 U/L.</p>
${labs(["Test", "Result"], [["Anti-HCV", "Positive"], ["HCV RNA (IU/mL)", "4.6 × 10<sup>5</sup>"], ["HBsAg", "Negative"], ["Anti-HBs", "Negative"], ["Anti-HBc", "Negative"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-reinfect", type: "mc", select: 2,
                                stem: "Which two conclusions follow from these results?",
                                options: ["He has been reinfected with HCV", "He is not immune to HBV and should be vaccinated", "His first treatment failed, because anti-HCV is positive", "He has chronic HBV", "His anti-HCV antibodies should have protected him"], answer: [0, 1],
                                explanation: "HCV RNA after a documented cure means reinfection; he has no HBV markers, so he needs the HBV vaccine as a person who injects drugs.",
                                notes: { 2: "Anti-HCV stays positive after cure; RNA showed cure.", 3: "HBsAg is negative.", 4: "Anti-HCV is not protective." } },
                        ] },
                ],
            },
            {
                title: "Jaundice at 32 weeks",
                keyPoints: [
                    "Acute hepatitis after untreated water points to the fecal-oral viruses, HAV and HEV.",
                    "IgG anti-HAV after vaccination means immunity; IgM anti-HEV means current HEV.",
                    "HEV can be fulminant in pregnancy: a rising INR, confusion, and hypoglycemia mean acute liver failure.",
                    "HSV hepatitis is the other fulminant threat in the third trimester: very high enzymes with little jaundice, treated with IV acyclovir at once.",
                ],
                blocks: [
                    { passage: `<p>A 27-year-old woman at 32 weeks' gestation has 5 days of nausea, RUQ pain, and dark urine, 6 weeks after a trip where she drank well water. She was vaccinated against hepatitis A and B before travel.</p>
${labs(["Test", "Result"], [["ALT / AST (U/L)", "2650 / 2100"], ["Bilirubin (µmol/L)", "118"], ["INR", "1.4"], ["IgM anti-HAV", "Negative"], ["IgG anti-HAV", "Positive"], ["HBsAg", "Negative"], ["Anti-HBs", "Positive"], ["Anti-HBc", "Negative"], ["IgM anti-HEV", "Positive"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-read", type: "sa", lines: 3,
                                stem: "Interpret her hepatitis A, B, and E results.",
                                answer: "HAV: immune from vaccination (IgG only). HBV: vaccinated (anti-HBs alone, no anti-HBc). HEV: IgM anti-HEV means acute hepatitis E.",
                                explanation: "IgG anti-HAV is also positive after vaccination; anti-HBc never comes from the vaccine." },
                            { id: "s3-concern", type: "sa", lines: 2,
                                stem: "Why does her pregnancy make this diagnosis especially concerning?",
                                answer: "HEV can cause fulminant hepatitis in pregnancy, with high mortality.",
                                explanation: "HEV is usually self-limited, but not in pregnancy." },
                        ] },
                    { passage: `<p>Over the next 48 hours:</p>
${labs(["", "Day 1", "Day 2", "Day 3"], [["INR", "1.4", "2.1", "3.0"], ["Glucose (mmol/L)", "4.9", "3.5", "2.6"], ["Bilirubin (µmol/L)", "118", "190", "260"], ["Mental state", "Alert", "Slow to answer", "Confused, asterixis"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-alf", type: "mc", justify: 12,
                                stem: "What has happened? Briefly justify your choice.",
                                options: ["Fulminant hepatitis with acute liver failure", "Convalescent phase of hepatitis E", "Progression to chronic hepatitis E", "HBV reactivation", "Cholestasis of pregnancy"], answer: 0,
                                justifyAnswer: "Rising INR, hypoglycemia, and encephalopathy show failing liver function.",
                                explanation: "Coagulopathy, hypoglycemia, and encephalopathy mark acute liver failure.",
                                notes: { 1: "Convalescence would bring falling bilirubin and a normal INR.", 2: "HEV becomes chronic only in immunocompromised patients, and not within days.", 3: "She is HBV-vaccinated with no anti-HBc.", 4: "Cholestasis would not cause encephalopathy and coagulopathy." } },
                        ] },
                    { passage: `<p>In the same unit, another woman at 35 weeks has fever and RUQ pain with AST 5200 U/L and ALT 4600 U/L, but a bilirubin of only 28 µmol/L. Her hepatitis A–E serology is negative.</p>`,
                        questions: [
                            { id: "s3-hsv", type: "sa", lines: 2,
                                stem: "Which infection must be considered, and what should be done before the confirmatory test returns?",
                                answer: "HSV hepatitis (fulminant, anicteric); start IV acyclovir at once while HSV PCR is sent.",
                                explanation: "IV acyclovir is started as soon as HSV hepatitis is suspected." },
                        ] },
                ],
            },
            {
                title: "A cyst on the sheep farm",
                keyPoints: [
                    "A slowly growing liver cyst with daughter cysts or a floating membrane and eosinophilia is a hydatid cyst.",
                    "People become accidental intermediate hosts by swallowing eggs from dogs that eat sheep offal.",
                    "Albendazole, with PAIR or surgery for larger cysts; spillage can cause anaphylaxis.",
                    "A pyogenic abscess, by contrast, is a fevered, polymicrobial collection from the biliary tract or portal vein, treated with drainage and antibiotics.",
                ],
                blocks: [
                    { passage: `<p>A 45-year-old sheep farmer, who keeps working dogs, has a year of dull RUQ fullness. He has no fever. The liver edge is palpable.</p>
${labs(["Test", "Result"], [["WCC (×10<sup>9</sup>/L)", "7.9"], ["Eosinophils (×10<sup>9</sup>/L)", "0.9 (raised)"], ["ALT / ALP (U/L)", "34 / 118"], ["Ultrasound", "9 cm cyst in the right lobe containing several smaller cysts and a detached, floating membrane"]])}<p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s4-dx", type: "mc", justify: 12,
                                stem: "What is the most likely diagnosis? Briefly justify your choice.",
                                options: ["Hydatid cyst", "Pyogenic abscess", "Amebic abscess", "Schistosomiasis", "HCC"], answer: 0,
                                justifyAnswer: "Daughter cysts, water lily sign, eosinophilia, and contact with dogs and sheep.",
                                explanation: "Echinococcus granulosus eggs from dogs form slowly growing cysts with daughter cysts.",
                                notes: { 1: "A pyogenic abscess causes fever and has no daughter cysts.", 2: "An amebic abscess follows travel or life in an endemic area and causes fever.", 3: "Schistosomiasis causes periportal fibrosis, not a cyst.", 4: "HCC is a solid tumor, usually in a cirrhotic liver." } },
                            { id: "s4-cycle", type: "sa", lines: 2,
                                stem: "How did he most likely acquire it?",
                                answer: "By swallowing Echinococcus eggs passed by his dogs, which were infected by eating offal from sheep, the intermediate hosts.",
                                explanation: "Dogs are the definitive hosts; sheep and other livestock are intermediate hosts, and people are accidental ones." },
                        ] },
                    { passage: `<p>The surgeons plan PAIR (puncture, aspiration, injection, reaspiration) for the cyst.</p>`,
                        questions: [
                            { id: "s4-tx", type: "sa", lines: 3,
                                stem: "Which drug should be given with the procedure, and what complication of puncture is the team guarding against?",
                                answer: "Albendazole; spillage of cyst fluid, which can cause anaphylaxis.",
                                explanation: "Albendazole, with PAIR or surgery for larger cysts; avoid spillage." },
                            { id: "s4-contrast", type: "sa", lines: 2,
                                stem: "If the same cyst had been a pyogenic abscess, how would its treatment differ?",
                                answer: "Drainage and antibiotics, with aspirate sent for stains and cultures, since it is a polymicrobial pus collection.",
                                explanation: "Pyogenic abscess: ultrasound, then CT with contrast; guided aspiration; drainage and antibiotics." },
                        ] },
                ],
            },
        ],
    },
};
