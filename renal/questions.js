/*
   Question bank for the renal quiz.
   The format is described at the top of gi/questions.js. The quiz button stays hidden
   until this list has questions.
*/

const QUIZ_QUESTIONS = [

    /* ===== Metabolic acidosis and alkalosis ===== */

    /* --- Memory --- */
    {
        id: "ab-ag-formula",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "Which calculation gives the anion gap as it is used on this page?",
        options: ["(Na+ + K+) − (Cl− + HCO3−)", "(Na+ + Cl−) − (K+ + HCO3−)", "Na+ − (K+ + Cl− + HCO3−)", "(Cl− + HCO3−) − (Na+ + K+)", "Na+ + K+ − Cl−, in a urine sample"],
        answer: 0,
        explanation: `<p><strong>The anion gap is (Na+ + K+) − (Cl− + HCO3−),</strong> normally 12–16 mmol/L when K+ is included.</p>
<p>Plasma always carries as many positive as negative charges. The gap is simply the negative charge that the routine panel does not measure, mostly albumin, with some phosphate and sulfate. When an acid such as lactic acid is added, its H+ uses up HCO3− and its anion (lactate) stays behind unmeasured, so the gap widens. When HCO3− is lost and Cl− takes its place, the two measured anions trade places and the gap stays normal.</p>`,
        notes: {
            1: "This puts Cl− with the cations; Cl− is the main measured anion, so it belongs on the subtracted side with HCO3−.",
            2: "K+ is a cation, so it is added to Na+, not subtracted with the anions.",
            3: "This reverses the calculation and would give a negative number in health.",
            4: "This is the urine anion gap, used in a NAGMA to separate renal from gut causes, not the plasma anion gap.",
        },
        info: "Many laboratories leave K+ out, giving Na+ − (Cl− + HCO3−) with a normal range of 8–12 mmol/L. Use the range that matches the formula.",
    },
    {
        id: "ab-ag-normal",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "What is the normal anion gap when K+ is included in the calculation?",
        options: ["12–16 mmol/L", "8–12 mmol/L", "3–5 mmol/L", "22–26 mmol/L", "Above 20 mmol/L"],
        answer: 0,
        explanation: `<p><strong>With K+ included, the normal anion gap is 12–16 mmol/L.</strong> Leaving K+ out lowers it by about 4, giving 8–12 mmol/L.</p>
<p>The gap is mostly albumin, which carries negative charge, so the normal value also falls when albumin is low: each 10 g/L fall lowers the gap by about 2.5. That is why a low albumin can hide an AGMA, and why some clinicians add 2.5 for each 10 g/L of albumin below 40.</p>`,
        notes: {
            1: "8–12 mmol/L is the normal gap when K+ is left out of the calculation.",
            2: "3–5 mmol/L is roughly the normal plasma K+, not the anion gap.",
            3: "22–26 mmol/L is the normal plasma HCO3−.",
            4: "A gap of 20–30 mmol/L is clearly high and suggests an organic acid such as lactate or ketoacids.",
        },
    },
    {
        id: "ab-winter",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "In metabolic acidosis, which formula predicts the expected pCO2 (the Winter formula)?",
        options: ["1.5 × HCO3− + 8 (± 2)", "0.7 × HCO3− + 20 (± 5)", "2 × Na+ + glucose + urea", "40 + 2 × (24 − HCO3−)", "HCO3− + 15 (± 2)"],
        answer: 0,
        explanation: `<p><strong>The Winter formula predicts pCO2 = 1.5 × HCO3− + 8 (± 2)</strong> in metabolic acidosis.</p>
<p>The respiratory center responds to acidemia within hours by deepening and quickening breathing, which lowers pCO2 and pulls the pH back toward normal. The formula tells you how far it should fall:</p>
<ul>
<li><strong>pCO2 as predicted:</strong> a pure metabolic acidosis with appropriate compensation.</li>
<li><strong>pCO2 higher:</strong> the lungs are not keeping up, so there is a respiratory acidosis as well.</li>
<li><strong>pCO2 lower:</strong> something else is driving breathing, so there is a respiratory alkalosis as well, as in aspirin poisoning.</li>
</ul>`,
        notes: {
            1: "0.7 × HCO3− + 20 predicts pCO2 in metabolic alkalosis, where the lungs hypoventilate.",
            2: "2 × Na+ + glucose + urea is the calculated osmolality, used to find the osmolal gap.",
            3: "This formula is not used on this page; it would predict pCO2 rising as HCO3− falls, the opposite of compensation.",
            4: "HCO3− + 15 is a rough rule some use, but it is not the Winter formula.",
        },
        info: "A quick check is that pCO2 is about the last two digits of the pH in a compensated metabolic acidosis.",
    },
    {
        id: "ab-rta-common",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "Which type of RTA is the most common?",
        options: ["Type 4, from too little aldosterone effect", "Type 1, from failed distal H+ secretion", "Type 2, from failed proximal HCO3− reabsorption", "Type 3, a mixed proximal and distal defect", "The incomplete form of type 1"],
        answer: 0,
        explanation: `<p><strong>RTA type 4 is the most common RTA,</strong> mostly from hyporeninemic hypoaldosteronism in diabetic nephropathy, and from drugs that block the renin-angiotensin-aldosterone system or its effect.</p>
<p>Too little aldosterone, or resistance to it, cuts H+ and K+ secretion in the collecting duct. The resulting high K+ then suppresses NH4+ production, so less acid is excreted. The result is a mild, hyperkalemic NAGMA with a urine pH below 5.5. Culprit drugs include ACEi, ARBs, potassium-sparing diuretics, NSAIDs, heparin, and trimethoprim.</p>`,
        notes: {
            1: "Type 1 is less common; it is most often autoimmune in adults and gives hypokalemia and a urine pH above 5.5.",
            2: "Type 2 is rarer than type 1, often with Fanconi syndrome or multiple myeloma.",
            3: "Type 3 is a very rare inherited carbonic anhydrase II deficiency.",
            4: "Incomplete distal RTA occurs in some stone formers but is far less common than type 4.",
        },
    },
    {
        id: "ab-rta1-urine-ph",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "In which cause of NAGMA does the urine pH stay above 5.5 even when the acidosis is severe?",
        options: ["RTA type 1", "RTA type 2", "RTA type 4", "Diarrhea", "Large-volume 0.9% saline"],
        answer: 0,
        explanation: `<p><strong>In RTA type 1, α-intercalated cells cannot secrete H+,</strong> so the urine cannot be acidified however severe the acidosis becomes. The urine pH stays above 5.5.</p>
<p>The other causes leave distal H+ secretion working, so the kidney acidifies the urine normally in response to acidemia:</p>
<ul>
<li><strong>RTA type 2:</strong> once plasma HCO3− falls below the lowered proximal threshold, all filtered HCO3− is reclaimed and the urine pH falls below 5.5.</li>
<li><strong>RTA type 4:</strong> fewer H+ are secreted, but with little NH4+ to buffer them, even a few H+ lower the urine pH.</li>
<li><strong>Gut losses and saline:</strong> the kidney responds normally, excreting acid as NH4+.</li>
</ul>`,
        notes: {
            1: "In type 2, urine pH is above 5.5 only when HCO3− is above the threshold, such as during alkali treatment; at steady state it falls below 5.5.",
            2: "In type 4, urine pH is below 5.5, because the little H+ that is secreted has little NH4+ to buffer it.",
            3: "In diarrhea, the kidney responds normally and acidifies the urine, excreting acid as NH4+.",
            4: "After saline, the kidney's acid excretion is intact, so it can acidify the urine.",
        },
    },
    {
        id: "ab-eg-crystals",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "Which cause of AGMA produces calcium oxalate crystals in the urine?",
        options: ["Ethylene glycol", "Methanol", "Isopropyl alcohol", "Salicylates", "Metformin"],
        answer: 0,
        explanation: `<p><strong>Ethylene glycol, found in antifreeze, is metabolized to glycolic acid and oxalic acid.</strong> Glycolic acid causes most of the acidosis, and oxalic acid binds calcium to form calcium oxalate crystals.</p>
<p>The crystals deposit in the tubules and cause AKI with flank pain and hematuria, and the calcium they take up causes hypocalcemia, which can lead to tetany. Early on, the unmetabolized glycol raises the osmolal gap; as it is converted to acid, the osmolal gap closes and the anion gap widens.</p>`,
        notes: {
            1: "Methanol is made into formic acid, which damages the retina and basal ganglia; it does not form oxalate crystals.",
            2: "Isopropyl alcohol is made into acetone, which causes ketosis without acidosis and no crystals.",
            3: "Salicylates cause a respiratory alkalosis and then an AGMA from lactate and ketoacids, without crystals.",
            4: "Metformin causes type B lactic acidosis, without crystals.",
        },
    },
    {
        id: "ab-methanol-metabolite",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "Which metabolite causes the acidosis and visual loss of methanol poisoning?",
        options: ["Formic acid", "Glycolic acid", "Oxalic acid", "Acetone", "β-hydroxybutyrate"],
        answer: 0,
        explanation: `<p><strong>Methanol is oxidized by alcohol dehydrogenase to formaldehyde and then to formic acid.</strong> Formic acid accumulates, causing the AGMA, and it is toxic to the retina and the basal ganglia, causing blurred vision, dilated pupils, and papilledema.</p>
<p>Methanol itself is relatively harmless and raises the osmolal gap. That is why treatment with fomepizole works: blocking alcohol dehydrogenase stops formic acid from being made while the methanol is removed, by hemodialysis if needed.</p>`,
        notes: {
            1: "Glycolic acid is the main acid made from ethylene glycol.",
            2: "Oxalic acid comes from ethylene glycol and forms calcium oxalate crystals.",
            3: "Acetone is made from isopropyl alcohol and is uncharged, so it causes ketosis without acidosis.",
            4: "β-hydroxybutyrate is the main ketoacid of DKA, AKA, and starvation.",
        },
    },
    {
        id: "ab-oxoproline",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "Chronic use of which drug can cause an AGMA from 5-oxoproline (pyroglutamic acid)?",
        options: ["Paracetamol", "Metformin", "Acetazolamide", "Furosemide", "Spironolactone"],
        answer: 0,
        explanation: `<p><strong>Chronic paracetamol use can cause 5-oxoproline (pyroglutamic acid) to accumulate,</strong> especially in people with malnutrition or chronic illness. It is the O in GOLDMARK.</p>
<p>The clue is an AGMA with normal lactate and no ketones, and no toxic alcohol history; 5-oxoproline can be found in the urine. Treatment is to stop the paracetamol.</p>`,
        notes: {
            1: "Metformin causes type B lactic acidosis, an AGMA from L-lactate rather than 5-oxoproline.",
            2: "Acetazolamide inhibits carbonic anhydrase and causes a NAGMA by impairing proximal HCO3− reabsorption, like RTA type 2.",
            3: "Furosemide is a loop diuretic and causes a metabolic alkalosis.",
            4: "Spironolactone blocks aldosterone and can cause a hyperkalemic NAGMA like RTA type 4.",
        },
    },
    {
        id: "ab-metformin",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "A patient has lactic acidosis without shock, hypoxia, or poor perfusion. Which drug is a classic cause?",
        options: ["Metformin", "Spironolactone", "Acetazolamide", "Lithium", "Thiazides"],
        answer: 0,
        explanation: `<p><strong>Metformin is a classic cause of type B lactic acidosis,</strong> in which lactate rises without hypoxia because mitochondria cannot use pyruvate.</p>
<p>Lactic acidosis is divided by mechanism:</p>
<ul>
<li><strong>Type A:</strong> too little oxygen is delivered (shock, sepsis, ischemia), driving anaerobic glycolysis. Treatment restores perfusion.</li>
<li><strong>Type B:</strong> oxygen delivery is adequate but pyruvate is not used: metformin, liver failure, and thiamine deficiency. Treatment stops metformin, with hemodialysis if severe, and gives thiamine.</li>
</ul>`,
        notes: {
            1: "Spironolactone causes a hyperkalemic NAGMA, like RTA type 4, not lactic acidosis.",
            2: "Acetazolamide causes a NAGMA through proximal HCO3− loss.",
            3: "Lithium is a cause of RTA type 1, a NAGMA.",
            4: "Thiazides cause metabolic alkalosis, not acidosis.",
        },
    },
    {
        id: "ab-saline-nagma",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "Which IV fluid, given in large volumes, causes a NAGMA?",
        options: ["0.9% saline", "Hartmann solution", "Plasma-Lyte", "5% dextrose", "Sodium bicarbonate 8.4%"],
        answer: 0,
        explanation: `<p><strong>0.9% saline contains 154 mmol/L Cl− and no HCO3−,</strong> so large volumes dilute plasma HCO3− and load the body with Cl−, causing a hyperchloremic NAGMA.</p>
<p>The fix is to switch to a balanced crystalloid such as Hartmann solution or Plasma-Lyte. These contain less Cl− and carry lactate, acetate, or gluconate, which the body metabolizes into HCO3−.</p>`,
        notes: {
            1: "Hartmann solution is a balanced crystalloid with less Cl− and lactate that becomes HCO3−; it is the remedy, not the cause.",
            2: "Plasma-Lyte is a balanced crystalloid with a near-physiological Cl− level.",
            3: "5% dextrose contains no Cl−; it can dilute electrolytes but is not the classic cause of NAGMA.",
            4: "Sodium bicarbonate raises HCO3− and can cause metabolic alkalosis.",
        },
    },
    {
        id: "ab-urine-cl-cutoff",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "In metabolic alkalosis, which urine Cl− result marks a chloride-responsive cause such as vomiting?",
        options: ["Below 20 mmol/L", "Above 20 mmol/L", "Above 40 mmol/L", "Exactly equal to urine Na+", "Above 100 mmol/L"],
        answer: 0,
        explanation: `<p><strong>Urine Cl− below 20 mmol/L marks a chloride-responsive alkalosis.</strong> The kidney is holding on to Cl− because volume and Cl− are depleted, as after vomiting, NG tube suction, or a diuretic that has worn off.</p>
<p>These alkaloses correct with 0.9% saline and KCl. Urine Cl− above 20 mmol/L marks a chloride-resistant alkalosis, from a diuretic still acting, aldosterone excess and its mimics, Bartter and Gitelman syndromes, or severe hypokalemia; there, BP, renin, and aldosterone separate the causes.</p>`,
        notes: {
            1: "Above 20 mmol/L marks a chloride-resistant cause, or a diuretic that is still acting.",
            2: "Above 40 mmol/L would also be a chloride-resistant result.",
            3: "Urine Na+ is unreliable in alkalosis, because Na+ can be excreted with HCO3− even when volume is low; that is why Cl− is measured.",
            4: "A urine Cl− above 100 mmol/L would point to active Cl− excretion, the opposite of a depleted state.",
        },
    },
    {
        id: "ab-delta-high",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "In an AGMA, what does a delta-delta ratio above 2 suggest?",
        options: ["A metabolic alkalosis as well", "A NAGMA as well", "A pure AGMA", "A respiratory acidosis as well", "A laboratory error in the K+"],
        answer: 0,
        explanation: `<p><strong>A delta-delta ratio above 2 means HCO3− has fallen less than the gap has risen,</strong> so something is adding HCO3− back: a metabolic alkalosis as well, such as vomiting with DKA, or a high HCO3− from before.</p>
<p>The ratio is (AG − 16) ÷ (24 − HCO3−). In a pure AGMA, each H+ that uses up one HCO3− leaves one unmeasured anion, so the two changes roughly match:</p>
<ul>
<li><strong>Below 1:</strong> HCO3− fell more than the gap rose, so a NAGMA is present as well.</li>
<li><strong>1–2:</strong> a pure AGMA.</li>
<li><strong>Above 2:</strong> a metabolic alkalosis as well.</li>
</ul>`,
        notes: {
            1: "A NAGMA as well gives a ratio below 1, because HCO3− falls without a matching rise in the gap.",
            2: "A pure AGMA gives a ratio of 1–2.",
            3: "A respiratory acidosis is found by comparing pCO2 with the expected value, not by the delta-delta ratio.",
            4: "The ratio is interpreted as a second metabolic disorder, not an error; a K+ error would shift the gap by only a few mmol/L.",
        },
        info: "With the gap calculated without K+, the ratio is (AG − 12) ÷ (24 − HCO3−).",
    },
    {
        id: "ab-isopropanol",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "Which ingestion raises the osmolal gap and causes ketosis, but without a metabolic acidosis?",
        options: ["Isopropyl alcohol", "Methanol", "Ethylene glycol", "Salicylates (aspirin)", "Paracetamol"],
        answer: 0,
        explanation: `<p><strong>Isopropyl alcohol is made into acetone,</strong> a ketone with no charge. Acetone is not an acid, so it causes ketosis without acidosis, while the isopropyl alcohol itself raises the osmolal gap.</p>
<p>Methanol and ethylene glycol are different: both are made into acids (formic, glycolic, and oxalic acid) that cause an AGMA, so they give a high osmolal gap with a high anion gap.</p>`,
        notes: {
            1: "Methanol is made into formic acid, so it causes an AGMA with a high osmolal gap.",
            2: "Ethylene glycol is made into glycolic and oxalic acid, so it causes an AGMA with a high osmolal gap.",
            3: "Salicylates cause a respiratory alkalosis and an AGMA, without a large osmolal gap.",
            4: "Paracetamol can cause an AGMA from 5-oxoproline with chronic use, but it does not raise the osmolal gap.",
        },
    },
    {
        id: "ab-gitelman",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Which finding favors Gitelman syndrome over Bartter syndrome?",
        options: ["Low urine Ca2+ with low plasma Mg2+", "High urine Ca2+ with nephrocalcinosis", "Hypertension with low renin", "Urine Cl− below 20 mmol/L", "Hyperkalemia with a urine pH below 5.5"],
        answer: 0,
        explanation: `<p><strong>Gitelman syndrome gives low urine Ca2+ and low Mg2+,</strong> because it is a loss of NCC in the distal tubule, like a lifelong thiazide, and thiazides lower urine Ca2+.</p>
<p>Bartter syndrome is a loss of NKCC2 in the loop of Henle, like a lifelong loop diuretic, so urine Ca2+ is high and nephrocalcinosis can follow. Both cause a hypokalemic, chloride-resistant alkalosis with high renin and aldosterone but normal or low BP, which separates them from aldosterone excess.</p>`,
        notes: {
            1: "High urine Ca2+ and nephrocalcinosis point to Bartter syndrome, the loop defect.",
            2: "Hypertension with low renin points to primary hyperaldosteronism or apparent mineralocorticoid excess; both Bartter and Gitelman syndromes have high renin and normal or low BP.",
            3: "Both syndromes waste Cl− in the urine, so urine Cl− is above 20 mmol/L.",
            4: "Both cause hypokalemia; hyperkalemia with an acid urine is RTA type 4.",
        },
    },
    {
        id: "ab-primary-aldo",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Which renin and aldosterone pattern marks primary hyperaldosteronism?",
        options: ["Low renin, high aldosterone", "High renin, high aldosterone", "Low renin, low aldosterone", "High renin, low aldosterone", "Normal renin, normal aldosterone"],
        answer: 0,
        explanation: `<p><strong>In primary hyperaldosteronism, the adrenal makes aldosterone regardless of renin,</strong> from an adenoma (Conn syndrome) or bilateral hyperplasia. The Na+ retention and hypertension suppress renin, giving low renin, high aldosterone, and a high aldosterone-to-renin ratio.</p>
<p>The other patterns of a hypertensive alkalosis:</p>
<ul>
<li><strong>High renin, high aldosterone:</strong> secondary hyperaldosteronism, such as renal artery stenosis.</li>
<li><strong>Low renin, low aldosterone:</strong> apparent mineralocorticoid excess: Cushing syndrome, licorice, Liddle syndrome.</li>
</ul>`,
        notes: {
            1: "High renin with high aldosterone is secondary hyperaldosteronism, as in renal artery stenosis, or volume loss from vomiting or diuretics.",
            2: "Both low is apparent mineralocorticoid excess, where something else activates the collecting duct.",
            3: "High renin with low aldosterone fits adrenal insufficiency, which causes an RTA type 4 picture, not alkalosis.",
            4: "Normal values would not explain a hypokalemic alkalosis from aldosterone excess.",
        },
    },

    /* --- Reasoning --- */
    {
        id: "ab-diarrhea-normal-gap",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why does severe diarrhea cause a normal anion gap acidosis rather than a high anion gap one?",
        options: ["HCO3− is lost and Cl− is retained in its place, so no unmeasured anion is added", "Stool contains lactate, which is reabsorbed and measured as Cl−", "Diarrhea lowers albumin, which hides the rise in the gap", "Diarrhea is acute, and the gap takes days to rise", "The kidney excretes the unmeasured anions as fast as they form"],
        answer: 0,
        explanation: `<p><strong>Intestinal fluid beyond the stomach is rich in HCO3−,</strong> so diarrhea removes HCO3− from the body. The kidney retains Cl− in its place to keep the charges balanced, so the two measured anions simply swap and the gap stays normal: a hyperchloremic acidosis.</p>
<p>An AGMA needs an added acid whose anion stays in the blood unmeasured, such as lactate or ketoanions. Diarrhea adds no acid; it removes base. K+ is lost in the stool too, so the K+ is often low, and secretory diarrhea loses more HCO3− than inflammatory diarrhea.</p>`,
        notes: {
            1: "Diarrhea does not add lactate; the lost fluid carries HCO3−, and Cl− takes its place.",
            2: "Low albumin can hide an AGMA, but diarrhea causes a true NAGMA because no unmeasured anion is added.",
            3: "The gap rises as soon as an unmeasured acid is added; timing is not the reason.",
            4: "There is no unmeasured anion to excrete; HCO3− is lost and replaced by Cl−.",
        },
    },
    {
        id: "ab-urine-ag-negative",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "In a NAGMA from diarrhea, the urine anion gap is negative. Why?",
        options: ["The kidney excretes plenty of NH4+, which leaves with Cl−, so urine Cl− exceeds Na+ plus K+", "Diarrhea lowers urine Na+ to zero, whatever the kidney does", "The kidney excretes HCO3− into the urine to correct the acidosis", "Urine Cl− falls because Cl− is lost in the stool", "Diarrhea damages α-intercalated cells, so H+ cannot be secreted"],
        answer: 0,
        explanation: `<p><strong>The urine anion gap, Na+ + K+ − Cl−, is an indirect measure of urine NH4+.</strong> NH4+ is a cation that is not measured, and it is excreted with Cl−. When the kidney responds normally to acidosis, it excretes a lot of NH4+Cl, so Cl− rises above Na+ plus K+ and the gap becomes negative.</p>
<ul>
<li><strong>Negative:</strong> the kidney is excreting acid normally, so the HCO3− was lost elsewhere: diarrhea, fistulas, or saline.</li>
<li><strong>Positive:</strong> the kidney cannot excrete NH4+: RTA types 1 and 4, or CKD.</li>
</ul>`,
        notes: {
            1: "Urine Na+ can be low with volume loss, but the gap is negative because of high Cl− excreted with NH4+, not because Na+ is zero.",
            2: "The kidney conserves HCO3− in acidosis; it does not excrete it.",
            3: "Urine Cl− is high, not low, because the kidney excretes NH4+ with Cl−.",
            4: "Failed distal H+ secretion is RTA type 1, which gives a positive urine anion gap.",
        },
    },
    {
        id: "ab-vomiting-maintenance",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Vomiting generates a metabolic alkalosis by removing HCl. Why does the alkalosis persist after the vomiting stops, until saline is given?",
        options: ["Low volume, Cl−, and K+ keep the kidney reabsorbing HCO3−", "The parietal cells keep making HCO3− for days after vomiting stops", "The lungs hypoventilate and keep the pCO2 high", "Vomiting damages the proximal tubule, which then cannot excrete HCO3−", "HCO3− is stored in bone and released slowly"],
        answer: 0,
        explanation: `<p><strong>Healthy kidneys excrete extra HCO3− quickly, so an alkalosis lasts only while something keeps the kidney reabsorbing it.</strong> After vomiting, three things do:</p>
<ul>
<li><strong>Low volume:</strong> angiotensin II increases proximal HCO3− reabsorption, and aldosterone increases distal H+ and K+ secretion.</li>
<li><strong>Low Cl−:</strong> the collecting duct secretes HCO3− only in exchange for Cl−, and too little Cl− reaches it.</li>
<li><strong>Low K+:</strong> increases H+ secretion and NH4+ production, which makes new HCO3−.</li>
</ul>
<p>0.9% saline with KCl replaces all three, so the kidney can excrete the HCO3−.</p>`,
        notes: {
            1: "Parietal cells make HCO3− only while they secrete acid; the loss of HCl generates the alkalosis but does not maintain it.",
            2: "Hypoventilation is the compensation, which limits the pH change; it does not keep HCO3− high.",
            3: "Vomiting does not damage the tubule; the kidney is responding appropriately to low volume and Cl−.",
            4: "Bone buffers acid in chronic acidosis; it is not a store that maintains alkalosis.",
        },
    },
    {
        id: "ab-no-bicarb-lactate",
        condition: "acid-base-workup",
        kind: "reasoning",
        stem: "Why is sodium bicarbonate not routinely given for lactic acidosis or DKA, while it is used in RTA?",
        options: ["Lactate and ketoanions are metabolized back into HCO3− once the cause is treated", "Bicarbonate is inactivated by lactate and ketoanions", "The acidosis in DKA is too mild to need treatment", "Bicarbonate raises K+ and worsens hyperkalemia", "Bicarbonate cannot cross into the blood in shock"],
        answer: 0,
        explanation: `<p><strong>In an AGMA from lactate or ketoacids, the HCO3− is not really lost:</strong> it is tied up as lactate or ketoanions. Once perfusion is restored or insulin is given, these anions are metabolized and regenerate HCO3−. Giving HCO3− on top can overshoot into alkalosis.</p>
<p>In a NAGMA such as RTA, the HCO3− has truly been lost in urine or stool, so it has to be replaced, as oral NaHCO3 or potassium citrate. Bicarbonate also has risks: hypernatremia, fluid overload, low ionized Ca2+, and hypokalemia as K+ moves into cells.</p>`,
        notes: {
            1: "Bicarbonate is not inactivated by these anions; the issue is that the anions themselves turn back into HCO3−.",
            2: "DKA acidosis is often severe; the reason is that insulin clears the ketoacids and regenerates HCO3−.",
            3: "Bicarbonate moves K+ into cells and lowers it, which is a risk in DKA where total body K+ is low.",
            4: "IV bicarbonate is in the blood once given; the problem is overshoot and adverse effects, not absorption.",
        },
        info: "Some guidelines reserve IV bicarbonate in DKA for very severe acidemia (for example, pH below 6.9).",
    },
    {
        id: "ab-rta2-alkali-dose",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why does RTA type 2 need much larger doses of alkali than RTA type 1, and K+ with it?",
        options: ["HCO3− raised above the lowered proximal threshold is lost in urine, carrying K+ with it", "Type 2 patients absorb oral alkali poorly from the gut", "Alkali is broken down faster in the proximal tubule", "Type 2 causes a more severe acidosis, with HCO3− below 10 mmol/L", "K+ is needed to activate the proximal HCO3− transporter"],
        answer: 0,
        explanation: `<p><strong>In RTA type 2, the proximal tubule reclaims HCO3− only up to a lowered threshold.</strong> As treatment raises plasma HCO3− above it, the extra HCO3− spills into the urine, so most of each dose is lost. The extra Na+ and water reaching the collecting duct also drive K+ secretion, so K+ falls further.</p>
<p>Treatment is therefore large doses of alkali with K+. A thiazide can help by shrinking volume, which increases proximal reabsorption. In RTA type 1, the proximal tubule works normally and reclaims the given HCO3−, so modest doses correct the acidosis, and potassium citrate also prevents stones.</p>`,
        notes: {
            1: "Gut absorption is normal; the problem is renal loss of HCO3− above the threshold.",
            2: "Alkali is not broken down; it is filtered and not fully reclaimed.",
            3: "Type 2 usually settles at an HCO3− of 12–18 mmol/L; HCO3− below 10 mmol/L is more typical of type 1.",
            4: "K+ is given because it is lost in the urine, not to activate a transporter.",
        },
    },
    {
        id: "ab-tetany-alkalosis",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "A patient with metabolic alkalosis from vomiting has perioral tingling and carpopedal spasm, with a normal total calcium. What explains this?",
        options: ["Albumin binds more Ca2+ in alkalosis, so ionized Ca2+ falls", "Vomiting removes calcium from the body in gastric juice", "Alkalosis increases renal Ca2+ excretion, lowering total calcium", "Low K+ releases Ca2+ from muscle, causing spasm", "Alkalosis blocks parathyroid hormone release"],
        answer: 0,
        explanation: `<p><strong>In alkalosis, albumin gives up H+ and binds more Ca2+ in its place.</strong> Total calcium is unchanged, but the ionized, active fraction falls, and nerves and muscles become irritable.</p>
<p>This causes perioral numbness, paresthesias, carpopedal spasm, Chvostek and Trousseau signs, and tetany. The ionized Ca2+ should be checked in anyone with these symptoms, since the total calcium will look normal. Acidosis does the reverse, freeing Ca2+ from albumin.</p>`,
        notes: {
            1: "Gastric juice carries little calcium; the total calcium is normal here.",
            2: "Total calcium is normal, so loss in urine is not the explanation.",
            3: "Hypokalemia causes weakness and arrhythmias, not tetany through calcium release.",
            4: "Alkalosis lowers ionized Ca2+ by albumin binding; it does not block parathyroid hormone release.",
        },
    },
    {
        id: "ab-rta1-low-k",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Acidosis usually moves K+ out of cells. Why is K+ low, not high, in RTA type 1?",
        options: ["K+ is lost in the urine faster than it shifts out of cells", "The acidosis in RTA type 1 is too mild to shift much K+ out of cells", "Aldosterone is suppressed in RTA type 1", "H+ moves out of cells and K+ moves in", "K+ is lost in the stool"],
        answer: 0,
        explanation: `<p><strong>In RTA type 1, the distal nephron cannot secrete H+,</strong> so more Na+ reabsorption there is balanced by K+ secretion instead, and K+ is lost in the urine. That loss outweighs the shift out of cells, so K+ is low.</p>
<p>This is one of the exceptions to the usual shift: K+ is low despite acidosis in RTA types 1 and 2 and in diarrhea, where K+ is lost in urine or stool. Correcting the acidosis moves K+ back into cells and can lower it further, so K+ is replaced alongside alkali, often as potassium citrate.</p>`,
        notes: {
            1: "The acidosis in type 1 can be severe, with HCO3− below 10 mmol/L.",
            2: "Low aldosterone causes RTA type 4, which gives hyperkalemia.",
            3: "This describes alkalosis; in acidosis, H+ moves into cells.",
            4: "K+ is lost in the stool in diarrhea; in RTA type 1, it is lost in the urine.",
        },
    },
    {
        id: "ab-organic-k",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why does lactic acidosis raise K+ less than an acidosis from a mineral acid such as NH4Cl?",
        options: ["Lactate enters cells together with its H+, so less K+ has to leave", "Lactate binds K+ in the blood", "Lactic acidosis is always milder than an acidosis from a mineral acid", "Lactate increases renal K+ excretion", "Mineral acids damage cell membranes, releasing K+"],
        answer: 0,
        explanation: `<p><strong>When cells buffer H+, a cation must leave to keep the charge balanced, and that cation is K+.</strong> Organic acids such as lactate and ketoacids enter cells together with their H+, so the charge is already balanced and little K+ leaves.</p>
<p>A mineral acid such as HCl or NH4Cl leaves its Cl− outside the cell, so the H+ that enters must be swapped for K+, raising plasma K+ more. In DKA, the high K+ comes mainly from insulin deficiency and high osmolality instead, although total body K+ is low.</p>`,
        notes: {
            1: "Lactate does not bind K+; the difference is whether the anion enters the cell with H+.",
            2: "Lactic acidosis can be severe; the smaller K+ shift is about the anion, not severity.",
            3: "Lactate does not increase renal K+ excretion.",
            4: "Mineral acids shift K+ by charge exchange across intact membranes, not by damage.",
        },
    },
    {
        id: "ab-dka-k-first",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "A patient with DKA has a K+ of 3.1 mmol/L after the first liter of IV fluid. What is the next step, and why?",
        options: ["Replace K+ before starting insulin, because insulin moves K+ into cells", "Start insulin now, because insulin raises K+", "Give IV NaHCO3 first, because correcting the acidosis will raise the plasma K+", "Withhold K+, because K+ rises as the acidosis worsens", "Start insulin and recheck K+ in 24 hours"],
        answer: 0,
        explanation: `<p><strong>In DKA, total body K+ is low even when plasma K+ looks normal or high,</strong> because insulin deficiency and high osmolality hold K+ outside cells. Insulin moves K+ back into cells, so starting it with a K+ of 3.1 mmol/L would cause dangerous hypokalemia, with arrhythmias and respiratory muscle weakness.</p>
<p>K+ is replaced first, and insulin starts once K+ is at least 3.5 mmol/L, then continues, with K+ replacement, until the anion gap closes.</p>`,
        notes: {
            1: "Insulin lowers plasma K+ by moving it into cells.",
            2: "Bicarbonate also moves K+ into cells and would lower it further; it is not routine in DKA.",
            3: "K+ is already low, and fluids and insulin will lower it further, so it must be replaced.",
            4: "K+ must be checked frequently during treatment, because it falls quickly with insulin.",
        },
    },
    {
        id: "ab-liddle-amiloride",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "A young man with resistant hypertension, hypokalemic alkalosis, and low renin and aldosterone is diagnosed with Liddle syndrome. Why is amiloride used rather than spironolactone?",
        options: ["The overactive ENaC does not depend on aldosterone, so blocking the channel works", "Spironolactone worsens hypokalemia", "Amiloride lowers renin, which is the cause", "Spironolactone cannot reach the collecting duct", "Amiloride replaces the missing aldosterone"],
        answer: 0,
        explanation: `<p><strong>In Liddle syndrome, ENaC in the collecting duct is overactive on its own,</strong> reabsorbing Na+ and driving H+ and K+ secretion without aldosterone. Aldosterone is already low, so blocking its receptor with spironolactone does little. Amiloride blocks the channel directly.</p>
<p>Liddle syndrome is one of the apparent mineralocorticoid excess states, with low renin and low aldosterone, along with Cushing syndrome and licorice. In primary hyperaldosteronism, by contrast, aldosterone is the cause, so spironolactone or eplerenone works.</p>`,
        notes: {
            1: "Spironolactone is potassium-sparing; it would not worsen hypokalemia, but it does little when aldosterone is low.",
            2: "Renin is already low in Liddle syndrome; the channel is the problem.",
            3: "Spironolactone acts on the collecting duct; it fails here because aldosterone is not driving the channel.",
            4: "Aldosterone is not missing in a way that needs replacing; amiloride blocks ENaC.",
        },
    },
    {
        id: "ab-acetazolamide-hf",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "A man with heart failure on high-dose furosemide has a metabolic alkalosis with HCO3− 36 mmol/L. He has leg edema and crackles. Which treatment fits best?",
        options: ["Acetazolamide, which increases renal HCO3− excretion", "0.9% saline with KCl", "Stopping all diuretics and giving IV fluids to restore volume", "Oral NaHCO3", "Fludrocortisone"],
        answer: 0,
        explanation: `<p><strong>Acetazolamide inhibits carbonic anhydrase in the proximal tubule,</strong> so less HCO3− is reabsorbed and more is excreted, lowering plasma HCO3− without adding fluid.</p>
<p>Diuretic alkalosis is usually corrected by replacing volume, Cl−, and K+, but saline would worsen this patient's fluid overload. Acetazolamide is used when saline cannot be given, as in heart failure, alongside KCl replacement or a potassium-sparing diuretic.</p>`,
        notes: {
            1: "Saline corrects a chloride-responsive alkalosis but would worsen this patient's edema and pulmonary congestion.",
            2: "He is fluid overloaded, so IV fluids would be harmful.",
            3: "NaHCO3 would raise HCO3− further.",
            4: "Fludrocortisone is a mineralocorticoid; it would increase H+ and K+ loss and worsen the alkalosis.",
        },
    },
    {
        id: "ab-osmolal-late",
        condition: "acid-base-workup",
        kind: "reasoning",
        stem: "A patient presents 30 hours after drinking windscreen washer fluid, with an AGMA and a normal osmolal gap. Why does the normal osmolal gap not exclude methanol poisoning?",
        options: ["Methanol has been metabolized to formic acid, so the osmolal gap closed as the anion gap widened", "Methanol is not osmotically active at any stage", "The osmolal gap is only raised by ethylene glycol", "Formic acid lowers the measured osmolality", "Methanol is excreted unchanged within hours"],
        answer: 0,
        explanation: `<p><strong>The osmolal gap reflects the unmetabolized alcohol, and the anion gap reflects the acids made from it.</strong> Early after ingestion, the osmolal gap is high and the anion gap normal. As alcohol dehydrogenase converts methanol into formic acid, the osmolal gap closes and the anion gap widens.</p>
<p>So a late presentation can show an AGMA with a normal osmolal gap, and the history still points to methanol, which should be treated with fomepizole and, if needed, hemodialysis.</p>`,
        notes: {
            1: "Methanol is osmotically active and raises the osmolal gap early.",
            2: "Methanol, ethylene glycol, and isopropyl alcohol all raise the osmolal gap.",
            3: "Formic acid adds an unmeasured anion; it does not lower measured osmolality.",
            4: "Methanol is cleared slowly and largely by metabolism, not excreted unchanged within hours.",
        },
    },
    {
        id: "ab-fomepizole",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "How does fomepizole treat ethylene glycol and methanol poisoning?",
        options: ["It blocks alcohol dehydrogenase, so no toxic acids are made", "It binds the toxic acids so they are excreted in urine", "It neutralizes the acidosis by releasing HCO3−", "It speeds the conversion of the alcohols into harmless CO2 and water", "It removes the alcohols from the blood like dialysis"],
        answer: 0,
        explanation: `<p><strong>The parent alcohols are relatively harmless; their metabolites cause the damage.</strong> Alcohol dehydrogenase starts the conversion of methanol to formic acid and of ethylene glycol to glycolic and oxalic acid. Fomepizole blocks this enzyme, so the toxic acids are not made.</p>
<p>Ethanol works the same way, by competing for alcohol dehydrogenase, and is used if fomepizole is unavailable. Hemodialysis removes both the alcohol and its acids, and is used for severe acidosis, visual change, AKI, or instability. Thiamine and pyridoxine are given for ethylene glycol.</p>`,
        notes: {
            1: "Fomepizole does not bind the acids; it prevents them from forming.",
            2: "Fomepizole is not a buffer.",
            3: "It slows metabolism; speeding it would make more toxic acid.",
            4: "Hemodialysis removes the alcohols; fomepizole blocks their metabolism.",
        },
    },
    {
        id: "ab-albumin-gap",
        condition: "acid-base-workup",
        kind: "reasoning",
        stem: "A patient with cirrhosis and septic shock has a lactate of 6 mmol/L, an albumin of 20 g/L, and an anion gap of 13 mmol/L (with K+). Why can her anion gap look normal despite a lactic acidosis?",
        options: [
            "Albumin is most of the unmeasured anion, so a low albumin lowers the baseline gap",
            "Lactate is a measured anion, so it never widens the anion gap",
            "Liver disease converts lactate back into Cl−, which keeps the gap normal",
            "Septic shock causes a NAGMA rather than an AGMA, so the gap stays normal",
            "Leaving K+ in the calculation always hides a raised anion gap",
        ],
        answer: 0,
        explanation: "<p><strong>The anion gap is mostly albumin,</strong> so each 10 g/L fall in albumin lowers it by about 2.5 mmol/L. With an albumin of 20 g/L, her baseline gap is about 5 mmol/L lower than usual, so a gap of 13 mmol/L is in fact raised.</p><p>Some clinicians correct for this by adding 2.5 for each 10 g/L of albumin below 40, which here gives about 18 mmol/L, a high gap that fits her lactic acidosis.</p>",
        notes: {
            1: "Lactate is an unmeasured anion; it widens the gap, which is why lactic acidosis is an AGMA.",
            2: "The liver metabolizes lactate back into HCO3−, not Cl−, and failing livers clear lactate less well.",
            3: "Type A lactic acidosis from shock is an AGMA; the gap looks normal here only because albumin is low.",
            4: "Including K+ raises the normal range to 12–16 mmol/L but does not hide an acidosis; the low albumin does.",
        },
    },
    {
        id: "ab-dlactate",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "Which condition causes a D-lactic acidosis?",
        options: ["Short bowel syndrome", "Septic shock", "Metformin toxicity", "Severe thiamine deficiency", "Liver failure"],
        answer: 0,
        explanation: "<p><strong>In short bowel syndrome, colonic bacteria ferment unabsorbed carbohydrate into D-lactate,</strong> an isomer that humans metabolize poorly, so it builds up and causes an AGMA.</p><p>Treatment addresses the short bowel and limits the carbohydrate reaching the colon. Routine lactate assays measure L-lactate, so D-lactate must be requested specifically.</p>",
        notes: {
            1: "Septic shock causes type A L-lactic acidosis from too little oxygen delivery.",
            2: "Metformin causes type B L-lactic acidosis, without hypoxia.",
            3: "Thiamine deficiency causes type B L-lactic acidosis, because pyruvate cannot enter the mitochondria.",
            4: "Liver failure causes type B L-lactic acidosis by clearing lactate poorly.",
        },
    },
    {
        id: "ab-fanconi",
        condition: "metabolic-acidosis",
        kind: "memory",
        stem: "A NAGMA comes with glycosuria despite a normal blood glucose, phosphaturia, aminoaciduria, and a low urate. Which syndrome is this?",
        options: ["Fanconi syndrome with RTA type 2", "Sjögren syndrome with RTA type 1", "Diabetic nephropathy with RTA type 4", "Gitelman syndrome", "Bartter syndrome"],
        answer: 0,
        explanation: "<p><strong>Fanconi syndrome is a general failure of the proximal tubule,</strong> so glucose, phosphate, amino acids, urate, and HCO3− all spill into urine. The HCO3− leak is RTA type 2.</p><p>Phosphate loss causes bone disease, treated with phosphate and vitamin D alongside large doses of alkali with K+.</p>",
        notes: {
            1: "Sjögren syndrome causes RTA type 1, a distal defect in H+ secretion, without the proximal leaks.",
            2: "Diabetic nephropathy causes RTA type 4, with high K+ and no proximal leaks; glycosuria there would come with a high blood glucose.",
            3: "Gitelman syndrome causes a metabolic alkalosis, not an acidosis.",
            4: "Bartter syndrome causes a metabolic alkalosis, not an acidosis.",
        },
    },
    {
        id: "ab-osm-gap-normal",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "What is a normal osmolal gap, and above which value is it concerning?",
        options: ["Below 10, concerning above 15 mOsm/kg", "Below 20, concerning above 30 mOsm/kg", "Below 5, concerning above 8 mOsm/kg", "Below 15, concerning only above 25 mOsm/kg", "Below 12, concerning above 16 mOsm/kg"],
        answer: 0,
        explanation: "<p><strong>The osmolal gap, measured minus calculated osmolality, is normally below 10 and concerning above 15.</strong> Calculated osmolality is 2 × Na+ + glucose + urea.</p><p>A high gap with an AGMA suggests methanol or ethylene glycol; a high gap with ketosis but no acidosis suggests isopropyl alcohol.</p>",
        notes: {
            1: "A gap of 20 would already be high; toxic alcohol ingestions often give gaps well above this.",
            2: "These values are too tight; small measurement differences alone could exceed them.",
            3: "A gap of 15 is already concerning, so it cannot be the top of normal.",
            4: "12–16 is the normal anion gap with K+, not the osmolal gap.",
        },
    },
    {
        id: "ab-ckd-gap-change",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why does CKD cause a NAGMA in its earlier stages but an AGMA as GFR falls further?",
        options: [
            "Early, less NH4+ is made; later, sulfate, phosphate, and urate are retained",
            "Early, HCO3− is lost in urine; later, lactate builds up from anemia",
            "Early, aldosterone falls; later, ketoacids accumulate from poor intake",
            "Early, the gut loses HCO3−; later, the kidney retains Cl−",
            "Early, a low albumin hides the raised gap; later, the albumin returns to normal",
        ],
        answer: 0,
        explanation: "<p><strong>Early CKD is a problem of acid excretion:</strong> fewer nephrons make less NH4+, so less acid leaves and less new HCO3− is made, and Cl− takes HCO3−'s place, giving a normal gap.</p><p><strong>Advanced CKD adds retained anions,</strong> sulfate, phosphate, urate, and hippurate, which widen the gap; this is the renal failure of GOLDMARK. Oral NaHCO3 is used to protect bone and muscle and slow progression.</p>",
        notes: {
            1: "Proximal HCO3− wasting is RTA type 2, and anemia does not cause lactic acidosis in CKD.",
            2: "Low aldosterone is RTA type 4, seen in diabetic nephropathy, but it does not explain the late AGMA.",
            3: "Gut HCO3− loss is diarrhea, not CKD.",
            4: "Albumin changes do not explain the shift; the late AGMA comes from retained acid anions.",
        },
    },
    {
        id: "ab-kussmaul",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why do patients with severe metabolic acidosis develop Kussmaul breathing?",
        options: [
            "Deep, rapid breaths lower pCO2, raising the pH toward normal",
            "Acid damages the lungs, causing pulmonary edema and air hunger",
            "Low K+ weakens the diaphragm, so breaths become deep and slow",
            "Ketones stimulate the cough reflex, which deepens each breath",
            "Hypoxia from a right-shifted oxygen curve drives faster breathing",
        ],
        answer: 0,
        explanation: "<p><strong>Kussmaul breathing is respiratory compensation:</strong> blowing off CO2 shifts H+ + HCO3− ⇌ CO2 + H2O to the right, using up H+ and raising the pH.</p><p>The expected pCO2 is 1.5 × HCO3− + 8 (± 2). The respiratory muscles can tire, and a pCO2 above the expected range then signals a respiratory acidosis as well.</p>",
        notes: {
            1: "Acidosis does not cause pulmonary edema; the breathing is a chemoreceptor response.",
            2: "Kussmaul breathing is deep and rapid, and K+ is often high, not low, in acidosis.",
            3: "Ketones do not trigger coughing; the drive is the low pH.",
            4: "A right-shifted curve releases more O2 to tissues and does not cause hypoxemia.",
        },
    },
    {
        id: "ab-rta1-stones",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why does RTA type 1 cause calcium phosphate stones and nephrocalcinosis?",
        options: [
            "Alkaline urine with high Ca2+ and low citrate lets calcium phosphate precipitate",
            "Uric acid is retained, and urate crystals seed calcium stones",
            "The proximal tubule leaks phosphate, which then binds Ca2+ in the tubules and blood",
            "High aldosterone increases Ca2+ reabsorption into the medulla",
            "Oxalate from the acid load forms calcium oxalate in the tubules",
        ],
        answer: 0,
        explanation: "<p><strong>In RTA type 1, the distal tubule cannot secrete H+, so the urine stays alkaline,</strong> and calcium phosphate is poorly soluble in alkaline urine.</p><p>Chronic acidosis also draws Ca2+ from bone and raises urine Ca2+, while citrate, which normally keeps Ca2+ in solution, is reabsorbed and falls. Potassium citrate treats the acidosis, replaces K+, and prevents stones.</p>",
        notes: {
            1: "Urate stones form in acid, not alkaline, urine, and are not the stone of RTA type 1.",
            2: "Proximal phosphate leaking is Fanconi syndrome with RTA type 2, which causes bone disease rather than stones.",
            3: "Aldosterone is not high in RTA type 1, and it does not handle Ca2+.",
            4: "Calcium oxalate crystals are typical of ethylene glycol poisoning.",
        },
    },
    {
        id: "ab-rta4-k",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why does RTA type 4 cause both hyperkalemia and acidosis?",
        options: [
            "Low aldosterone cuts H+ and K+ secretion, and high K+ suppresses NH4+ production",
            "The proximal tubule leaks HCO3−, so K+ moves out of cells in exchange for the H+",
            "Distal H+ secretion fails, and K+ is retained because urine pH is high",
            "Diarrhea removes HCO3−, and the kidney retains K+ to compensate",
            "Lactate accumulates and carries K+ out of cells",
        ],
        answer: 0,
        explanation: "<p><strong>Too little aldosterone, or resistance to it, cuts H+ and K+ secretion in the collecting duct,</strong> so both build up. The high K+ also suppresses NH4+ production, so even less acid is excreted.</p><p>Causes include diabetic nephropathy, ACEi, ARBs, potassium-sparing diuretics, NSAIDs, heparin, trimethoprim, and adrenal insufficiency. The urine pH can still fall below 5.5.</p>",
        notes: {
            1: "Proximal HCO3− leaking is RTA type 2, which causes hypokalemia.",
            2: "Failed distal H+ secretion is RTA type 1, which causes hypokalemia, not hyperkalemia.",
            3: "Diarrhea causes hypokalemia, because K+ is lost in stool.",
            4: "Lactic acidosis is an AGMA, whereas RTA type 4 is a NAGMA.",
        },
    },
    {
        id: "ab-eg-hypocalcemia",
        condition: "metabolic-acidosis",
        kind: "reasoning",
        stem: "Why does ethylene glycol poisoning cause hypocalcemia and AKI?",
        options: [
            "Its oxalic acid binds Ca2+ and forms calcium oxalate crystals in the tubules",
            "It is made into formic acid, which blocks parathyroid hormone release",
            "The acidosis makes albumin bind more Ca2+, which lowers the ionized Ca2+ level",
            "It causes severe vomiting, which loses Ca2+ and volume",
            "It is made into acetone, which damages the tubules directly",
        ],
        answer: 0,
        explanation: "<p><strong>Ethylene glycol is made into glycolic acid, which causes the AGMA, and oxalic acid, which binds Ca2+</strong> to form calcium oxalate crystals that lodge in the tubules, causing AKI and lowering plasma Ca2+.</p><p>Fomepizole blocks alcohol dehydrogenase so these acids are not made, with hemodialysis for severe acidosis or AKI, and thiamine and pyridoxine.</p>",
        notes: {
            1: "Formic acid comes from methanol and damages the retina, not the parathyroids.",
            2: "Acidosis does the reverse: it frees Ca2+ from albumin and raises ionized Ca2+; alkalosis lowers it.",
            3: "Vomiting does not explain crystals in the urine or the low Ca2+.",
            4: "Acetone comes from isopropyl alcohol, which causes ketosis without acidosis or crystals.",
        },
    },
    {
        id: "ab-set-ckd-1",
        condition: "metabolic-acidosis",
        kind: "analysis",
        set: "ab-ckd",
        passage: "<p>A 71-year-old woman with CKD G4 from diabetes and hypertension has fatigue and a fracture after a minor fall. She has no diarrhea and takes no ACEi, ARB, or potassium-sparing diuretic. Results (illustrative):</p>\n<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>\n<tr><td>pH / pCO2</td><td>7.33 / 31 mmHg</td></tr>\n<tr><td>Na+ / K+</td><td>138 / 5.4 mmol/L</td></tr>\n<tr><td>Cl− / HCO3−</td><td>112 / 16 mmol/L</td></tr>\n<tr><td>eGFR</td><td>22 mL/min/1.73 m2</td></tr>\n<tr><td>Urine Na+ / K+ / Cl−</td><td>40 / 30 / 52 mmol/L</td></tr>\n</tbody></table>",
        stem: "What does her anion gap show, and what best explains her acidosis?",
        options: [
            "A normal gap of about 15: CKD with too little NH4+ made",
            "A high gap of about 25: retained sulfate and phosphate",
            "A normal gap of about 15: diarrhea she has not mentioned",
            "A high gap of about 25: lactic acidosis from her fracture",
            "A normal gap of about 15: RTA type 1 from her diabetes",
        ],
        answer: 0,
        explanation: "<p><strong>Anion gap = (138 + 5.4) − (112 + 16) ≈ 15, which is normal (12–16), so this is a NAGMA.</strong> Her urine anion gap is 40 + 30 − 52 = +18, positive, so the kidney is not excreting NH4+.</p><p>With an eGFR of 22, too few nephrons make NH4+, the NAGMA of CKD. Her pCO2 of 31 is close to the expected 1.5 × 16 + 8 = 32 (± 2), so compensation is appropriate.</p>",
        notes: {
            1: "Her gap is normal; retained sulfate and phosphate widen it later, as GFR falls further.",
            2: "Diarrhea gives a negative urine anion gap, because the kidney excretes NH4+ normally; hers is positive.",
            3: "Her gap is normal, and a fracture does not cause lactic acidosis without shock.",
            4: "RTA type 1 causes hypokalemia and is not a complication of diabetes; her K+ is high-normal.",
        },
    },
    {
        id: "ab-set-ckd-2",
        condition: "metabolic-acidosis",
        kind: "analysis",
        set: "ab-ckd",
        stem: "Which treatment best addresses her acidosis, and why?",
        options: [
            "Oral NaHCO3, to protect bone and muscle and slow progression",
            "IV NaHCO3 boluses until her HCO3− is normal",
            "No treatment, because the acidosis is compensated",
            "Fludrocortisone, to increase H+ and K+ secretion in the collecting duct",
            "Large-volume 0.9% saline, to improve her GFR",
        ],
        answer: 0,
        explanation: "<p><strong>Oral NaHCO3 is used for the acidosis of CKD:</strong> chronic acidosis draws on bone to buffer acid, wastes muscle, and speeds CKD progression, and her fracture fits the bone effect.</p><p>Dialysis is needed when CKD is advanced and the acidosis becomes refractory.</p>",
        notes: {
            1: "IV boluses are not needed for a chronic, stable acidosis and risk fluid overload and hypernatremia in CKD.",
            2: "Compensation limits the fall in pH but does not prevent the bone and muscle effects of chronic acidosis.",
            3: "Fludrocortisone treats RTA type 4 from aldosterone deficiency, not the NH4+ deficit of CKD.",
            4: "Saline adds Cl− without HCO3−, which worsens a NAGMA, and risks overload in CKD G4.",
        },
    },
    {
        id: "ab-saline-why",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Why does 0.9% saline correct a chloride-responsive metabolic alkalosis?",
        options: ["It restores volume and Cl−, so the kidney stops reabsorbing HCO3− and can secrete it", "Saline contains acid that neutralizes HCO3−", "Saline dilutes HCO3− to a normal level", "Saline lowers aldosterone, which raises K+ directly", "Saline stimulates the lungs to blow off CO2"],
        answer: 0,
        explanation: `<p><strong>A chloride-responsive alkalosis is maintained by low volume and low Cl−.</strong> Saline fixes both:</p>
<ul>
<li><strong>Volume:</strong> angiotensin II and aldosterone fall, so the proximal tubule reabsorbs less HCO3− and the collecting duct secretes less H+.</li>
<li><strong>Cl−:</strong> more Cl− reaches the collecting duct, where it is exchanged for HCO3−, so HCO3− can be secreted into the urine.</li>
</ul>
<p>KCl is added because low K+ also maintains the alkalosis. A chloride-resistant alkalosis, such as aldosterone excess, does not respond, because the drive to secrete H+ does not depend on volume.</p>`,
        notes: {
            1: "Saline is not acidic; it works by letting the kidney excrete HCO3−.",
            2: "Dilution has a small effect; the main benefit is restoring the kidney's ability to excrete HCO3−.",
            3: "Lower aldosterone reduces K+ loss but does not raise K+ directly; KCl is still needed.",
            4: "Saline does not stimulate breathing; respiration would raise pH further by lowering pCO2.",
        },
    },
    {
        id: "ab-post-hypercapnia",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "A man with COPD and a chronic pCO2 of 70 mmHg is intubated and ventilated to a pCO2 of 40 mmHg. His HCO3− stays at 38 mmol/L. Why?",
        options: ["The kidney retained HCO3− to compensate for chronic hypercapnia, and it is excreted only slowly", "Ventilation generates new HCO3− in the lungs", "Intubation causes vomiting, which raises HCO3−", "The low pCO2 stimulates aldosterone", "COPD damages the kidney's ability to make NH4+"],
        answer: 0,
        explanation: `<p><strong>In chronic respiratory acidosis, the kidney retains HCO3− over days to compensate.</strong> When ventilation lowers pCO2 quickly, that extra HCO3− is left behind, causing a metabolic alkalosis after hypercapnia.</p>
<p>The kidney can excrete it, but only slowly, and more slowly still if the patient is low in volume, Cl−, or K+. It is treated with saline and KCl if Cl− is depleted, or acetazolamide.</p>`,
        notes: {
            1: "The lungs remove CO2; they do not make HCO3−.",
            2: "There is no vomiting in this case; the HCO3− was retained before intubation.",
            3: "Low pCO2 does not drive aldosterone; the retained HCO3− is left over from compensation.",
            4: "COPD does not impair NH4+ production; the kidney is responding appropriately to the earlier hypercapnia.",
        },
    },

    /* --- Analysis --- */
    {
        id: "ab-set-dka-1",
        condition: "acid-base-workup",
        kind: "analysis",
        set: "ab-dka",
        passage: `<p>A 24-year-old woman with type 1 diabetes has had 2 days of vomiting and has not taken her insulin. She is drowsy, with deep, rapid breathing and dry mucous membranes. Results (illustrative):</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>pH</td><td>7.32</td></tr>
<tr><td>pCO2</td><td>28 mmHg</td></tr>
<tr><td>HCO3−</td><td>14 mmol/L</td></tr>
<tr><td>Na+</td><td>134 mmol/L</td></tr>
<tr><td>K+</td><td>5.4 mmol/L</td></tr>
<tr><td>Cl−</td><td>86 mmol/L</td></tr>
<tr><td>Glucose</td><td>29 mmol/L</td></tr>
<tr><td>β-hydroxybutyrate</td><td>6.2 mmol/L</td></tr>
</tbody></table>`,
        stem: "What is her anion gap?",
        options: ["About 39 mmol/L", "About 34 mmol/L", "About 20 mmol/L", "About 55 mmol/L", "About 14 mmol/L, a normal gap"],
        answer: 0,
        explanation: `<p><strong>AG = (Na+ + K+) − (Cl− + HCO3−) = (134 + 5.4) − (86 + 14) = 39.4 mmol/L,</strong> far above the normal 12–16 mmol/L.</p>
<p>The added acid is β-hydroxybutyrate: insulin deficiency and high glucagon drive lipolysis and ketone production. Each ketoacid uses up one HCO3− and leaves a ketoanion behind, unmeasured, which widens the gap.</p>`,
        notes: {
            1: "34 mmol/L leaves out K+; that version of the gap has a normal range of 8–12 mmol/L.",
            2: "20 mmol/L would need a much higher Cl− or HCO3−; check the subtraction.",
            3: "55 mmol/L adds HCO3− instead of subtracting it.",
            4: "14 mmol/L is her HCO3−, not her anion gap.",
        },
    },
    {
        id: "ab-set-dka-2",
        condition: "acid-base-workup",
        kind: "analysis",
        set: "ab-dka",
        stem: "What does her delta-delta ratio show?",
        options: ["About 2.3: an AGMA with a metabolic alkalosis", "About 1.5: a pure AGMA", "About 0.6: an AGMA with a NAGMA", "About 2.3: an AGMA with a respiratory acidosis", "It cannot be used because glucose is high"],
        answer: 0,
        explanation: `<p><strong>Delta-delta = (AG − 16) ÷ (24 − HCO3−) = (39.4 − 16) ÷ (24 − 14) = 23.4 ÷ 10 ≈ 2.3.</strong> The gap has risen by much more than HCO3− has fallen, so something has added HCO3− back: a metabolic alkalosis as well.</p>
<p>Her 2 days of vomiting explain it. Losing HCl leaves HCO3− in the blood, and her low Cl− (86 mmol/L) fits. Without the vomiting, her HCO3− would be about 24 − 23.4, close to 1 mmol/L.</p>`,
        notes: {
            1: "A pure AGMA gives a ratio of 1–2; hers is above 2.",
            2: "A ratio below 1 would mean HCO3− fell more than the gap rose, as with diarrhea alongside DKA.",
            3: "The delta-delta ratio finds a second metabolic disorder; a respiratory disorder is found by comparing pCO2 with the expected value.",
            4: "High glucose does not prevent the ratio from being used; the gap is calculated from Na+, K+, Cl−, and HCO3−.",
        },
    },
    {
        id: "ab-set-dka-3",
        condition: "acid-base-workup",
        kind: "analysis",
        set: "ab-dka",
        stem: "Is her respiratory compensation appropriate?",
        options: ["Yes: the expected pCO2 is 27–31 mmHg, and hers is 28", "No: the expected pCO2 is 40 mmHg, so she also has a respiratory alkalosis", "No: the expected pCO2 is 35–39 mmHg, so she also has a respiratory alkalosis", "No: her pCO2 is low, so she has a primary respiratory alkalosis", "It cannot be judged until the pH is below 7.2"],
        answer: 0,
        explanation: `<p><strong>Winter formula: expected pCO2 = 1.5 × 14 + 8 = 29 (± 2), so 27–31 mmHg.</strong> Her pCO2 of 28 mmHg falls in that range, so the lungs are compensating appropriately and there is no separate respiratory disorder.</p>
<p>Her full picture is an AGMA from DKA, a metabolic alkalosis from vomiting, and appropriate respiratory compensation. Treatment is IV fluids, K+ as needed, and insulin once K+ is at least 3.5 mmol/L, continued until the gap closes.</p>`,
        notes: {
            1: "40 mmHg is the normal pCO2; in metabolic acidosis, the lungs should lower it.",
            2: "This miscalculates the formula; 1.5 × 14 + 8 is 29.",
            3: "Her low pCO2 is the expected compensation; the primary change is the low HCO3−, which explains the low pH.",
            4: "Compensation can be judged at any pH using the Winter formula.",
        },
    },
    {
        id: "ab-set-rta1-1",
        condition: "metabolic-acidosis",
        kind: "analysis",
        set: "ab-rta1",
        passage: `<p>A 42-year-old woman with Sjögren syndrome has muscle weakness and has passed two kidney stones this year. Her creatinine is normal. Results (illustrative):</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>pH / pCO2</td><td>7.31 / 29 mmHg</td></tr>
<tr><td>Na+ / K+</td><td>140 / 2.8 mmol/L</td></tr>
<tr><td>Cl− / HCO3−</td><td>115 / 14 mmol/L</td></tr>
<tr><td>Urine pH</td><td>6.8</td></tr>
<tr><td>Urine Na+ / K+ / Cl−</td><td>40 / 30 / 50 mmol/L</td></tr>
<tr><td>Urine culture</td><td>No growth</td></tr>
<tr><td>Kidney x-ray</td><td>Nephrocalcinosis</td></tr>
</tbody></table>`,
        stem: "Which diagnosis best explains these results?",
        options: ["RTA type 1", "RTA type 2", "RTA type 4", "Chronic diarrhea", "CKD"],
        answer: 0,
        explanation: `<p><strong>This is a NAGMA from RTA type 1.</strong> Work through it in order:</p>
<ul>
<li><strong>Anion gap:</strong> (140 + 2.8) − (115 + 14) ≈ 14 mmol/L, normal, so a NAGMA.</li>
<li><strong>Urine anion gap:</strong> 40 + 30 − 50 = +20, positive, so the kidney cannot excrete NH4+: a renal cause.</li>
<li><strong>K+ low, urine pH 6.8 despite acidosis:</strong> distal H+ secretion has failed.</li>
<li><strong>Supporting features:</strong> Sjögren syndrome (the commonest adult cause), stones, and nephrocalcinosis from alkaline urine with high urine Ca2+ and low urine citrate. The negative culture excludes a urease-producing UTI as the reason for the alkaline urine.</li>
</ul>`,
        notes: {
            1: "RTA type 2 also gives low K+, but at a steady HCO3− of 14 the urine pH would be below 5.5, and stones are not a feature.",
            2: "RTA type 4 gives high K+ and a urine pH below 5.5.",
            3: "Diarrhea gives a negative urine anion gap, because the kidney excretes NH4+ normally.",
            4: "CKD would have a low GFR and high creatinine; hers is normal.",
        },
    },
    {
        id: "ab-set-rta1-2",
        condition: "metabolic-acidosis",
        kind: "analysis",
        set: "ab-rta1",
        stem: "Which treatment is most appropriate?",
        options: ["Oral potassium citrate", "IV 0.9% saline", "Fludrocortisone", "A thiazide diuretic alone", "Spironolactone"],
        answer: 0,
        explanation: `<p><strong>Potassium citrate treats all three problems at once:</strong> citrate is metabolized to HCO3− and corrects the acidosis, the K+ replaces what is lost in urine, and citrate in the urine prevents calcium stones.</p>
<p>RTA type 1 corrects with modest doses of alkali, because the proximal tubule works normally and reclaims the HCO3− given. The cause (here, Sjögren syndrome) is treated too. Correcting the acidosis moves K+ into cells, so K+ must be replaced alongside it.</p>`,
        notes: {
            1: "Saline would add Cl− and dilute HCO3−, worsening a hyperchloremic acidosis.",
            2: "Fludrocortisone treats aldosterone deficiency in RTA type 4 and would worsen her K+ loss.",
            3: "A thiazide can help in RTA type 2 by shrinking volume; alone it would not correct type 1 and would worsen hypokalemia.",
            4: "Spironolactone treats aldosterone excess; it does not correct RTA type 1.",
        },
    },
    {
        id: "ab-set-conn-1",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-conn",
        passage: `<p>A 48-year-old man has hypertension of 172/104 mmHg despite three drugs, with muscle cramps. He takes no diuretics and eats no licorice. Results (illustrative):</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>pH / pCO2</td><td>7.50 / 44 mmHg</td></tr>
<tr><td>Na+ / K+</td><td>145 / 2.9 mmol/L</td></tr>
<tr><td>Cl− / HCO3−</td><td>98 / 33 mmol/L</td></tr>
<tr><td>Urine Cl−</td><td>64 mmol/L</td></tr>
<tr><td>Renin</td><td>Low</td></tr>
<tr><td>Aldosterone</td><td>High</td></tr>
</tbody></table>`,
        stem: "What is the most likely cause of his alkalosis?",
        options: ["Primary hyperaldosteronism", "Renal artery stenosis", "Liddle syndrome", "Gitelman syndrome", "Recurrent vomiting from gastric outlet obstruction"],
        answer: 0,
        explanation: `<p><strong>A hypertensive, hypokalemic, chloride-resistant alkalosis with low renin and high aldosterone is primary hyperaldosteronism.</strong></p>
<ul>
<li><strong>Urine Cl− 64 mmol/L:</strong> chloride-resistant, so not vomiting or a past diuretic.</li>
<li><strong>Hypertension:</strong> points to aldosterone excess or a mimic, not Bartter or Gitelman syndrome.</li>
<li><strong>Low renin, high aldosterone:</strong> the adrenal is making aldosterone on its own, from an adenoma (Conn syndrome) or bilateral hyperplasia.</li>
</ul>
<p>His pCO2 of 44 mmHg matches the expected 0.7 × 33 + 20 ≈ 43, so compensation is appropriate.</p>`,
        notes: {
            1: "Renal artery stenosis causes secondary hyperaldosteronism, with high renin as well as high aldosterone.",
            2: "Liddle syndrome causes hypertension and hypokalemic alkalosis, but with low aldosterone.",
            3: "Gitelman syndrome gives normal or low BP with high renin.",
            4: "Vomiting gives a urine Cl− below 20 mmol/L and low or normal BP.",
        },
    },
    {
        id: "ab-set-conn-2",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-conn",
        stem: "A colleague suggests IV 0.9% saline to correct his alkalosis. Which approach is better?",
        options: ["Spironolactone with KCl, since the alkalosis is chloride-resistant", "Saline, because all metabolic alkaloses respond to volume", "Acetazolamide alone, because the HCO3− is retained proximally", "Amiloride, because his ENaC is overactive even without any aldosterone", "Oral NaHCO3, because his K+ will rise"],
        answer: 0,
        explanation: `<p><strong>His alkalosis is chloride-resistant:</strong> aldosterone drives Na+ reabsorption and H+ and K+ secretion whatever his volume, so saline would only raise his BP without correcting it.</p>
<p>Spironolactone (or eplerenone) blocks the mineralocorticoid receptor, stopping the H+ and K+ loss, and KCl replaces his K+. Once imaging shows a unilateral adenoma, adrenalectomy can cure it.</p>`,
        notes: {
            1: "Only chloride-responsive alkaloses, with urine Cl− below 20 mmol/L, correct with saline; his urine Cl− is 64.",
            2: "Acetazolamide is used when saline cannot be given, as in heart failure; it does not treat the aldosterone excess driving this alkalosis.",
            3: "Amiloride is the treatment for Liddle syndrome, where aldosterone is low; his aldosterone is high.",
            4: "NaHCO3 would worsen the alkalosis.",
        },
    },
    {
        id: "ab-alk-compensation",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "In metabolic alkalosis, which formula predicts the expected pCO2?",
        options: ["0.7 × HCO3− + 20 (± 5)", "1.5 × HCO3− + 8 (± 2)", "0.7 × HCO3− + 8 (± 2)", "1.5 × HCO3− + 20 (± 10)", "HCO3− + 15 (± 2)"],
        answer: 0,
        explanation: "<p><strong>Expected pCO2 = 0.7 × HCO3− + 20 (± 5).</strong> The lungs hypoventilate to raise pCO2 and pull the pH back toward normal; another rule is a rise of 0.6–0.7 mmHg for each 1 mmol/L rise in HCO3− above 24.</p><p>A pCO2 above the range means a respiratory acidosis as well, and one below it a respiratory alkalosis as well.</p>",
        notes: {
            1: "This is the Winter formula, used for metabolic acidosis.",
            2: "This mixes the alkalosis slope with the acidosis constant; it predicts a pCO2 far too low.",
            3: "This mixes the acidosis slope with the alkalosis constant; it predicts a pCO2 far too high.",
            4: "HCO3− + 15 is a rough rule sometimes quoted for alkalosis, but it is not the formula the page uses.",
        },
    },
    {
        id: "ab-alk-pco2-limit",
        condition: "acid-base-workup",
        kind: "memory",
        stem: "Respiratory compensation for a metabolic alkalosis rarely raises pCO2 above which value?",
        options: ["55 mmHg", "45 mmHg", "70 mmHg", "80 mmHg", "100 mmHg"],
        answer: 0,
        explanation: "<p><strong>pCO2 rarely passes 55 mmHg from compensation alone,</strong> because hypoventilation also lowers O2, and hypoxia then drives breathing.</p><p>A pCO2 well above 55 mmHg in a metabolic alkalosis suggests a respiratory acidosis as well, as in COPD or obesity hypoventilation.</p>",
        notes: {
            1: "45 mmHg is the top of the normal range; compensation regularly takes pCO2 above it.",
            2: "A pCO2 of 70 mmHg points to a primary respiratory acidosis, not compensation.",
            3: "Hypoxia limits hypoventilation long before pCO2 reaches 80 mmHg.",
            4: "A pCO2 of 100 mmHg is severe respiratory failure, never compensation.",
        },
    },
    {
        id: "ab-licorice",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Licorice causes a hypertensive, hypokalemic alkalosis by blocking which enzyme?",
        options: ["11β-hydroxysteroid dehydrogenase type 2", "Aldosterone synthase", "Carbonic anhydrase in the proximal tubule", "Na+/K+-ATPase", "Angiotensin-converting enzyme"],
        answer: 0,
        explanation: "<p><strong>Licorice blocks 11β-HSD2,</strong> the enzyme that normally inactivates cortisol in the collecting duct. Cortisol then acts on the mineralocorticoid receptor, so the duct behaves as if aldosterone were high.</p><p>This is apparent mineralocorticoid excess: hypertension, hypokalemia, and alkalosis with low renin and low aldosterone. Stopping licorice is the treatment.</p>",
        notes: {
            1: "Blocking aldosterone synthase would lower aldosterone effect and cause hyperkalemia, not alkalosis.",
            2: "Blocking carbonic anhydrase is how acetazolamide works; it causes a NAGMA and is used to treat alkalosis.",
            3: "Blocking Na+/K+-ATPase is how digoxin works; it does not cause a mineralocorticoid picture.",
            4: "Blocking ACE lowers angiotensin II and aldosterone and tends to raise K+.",
        },
    },
    {
        id: "ab-bartter-site",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Bartter syndrome is an inherited loss of which transporter?",
        options: ["NKCC2 in the thick ascending limb", "NCC in the distal tubule", "ENaC in the collecting duct", "The mineralocorticoid receptor", "Carbonic anhydrase in the proximal tubule"],
        answer: 0,
        explanation: "<p><strong>Bartter syndrome is a loss of NKCC2 in the thick ascending limb,</strong> so it behaves like a lifelong loop diuretic: Na+ and Cl− wasting, high renin and aldosterone, hypokalemic alkalosis, normal or low BP, and high urine Ca2+.</p><p>Gitelman syndrome is the distal counterpart, a loss of NCC, like a lifelong thiazide, with low urine Ca2+ and low Mg2+.</p>",
        notes: {
            1: "Loss of NCC is Gitelman syndrome.",
            2: "An overactive ENaC is Liddle syndrome, which causes hypertension; loss of ENaC would cause salt wasting with hyperkalemia.",
            3: "Loss of the mineralocorticoid receptor causes resistance to aldosterone, with hyperkalemia and acidosis.",
            4: "Loss of proximal carbonic anhydrase activity causes an acidosis, as acetazolamide does.",
        },
    },
    {
        id: "ab-milk-alkali",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Which cause of metabolic alkalosis comes with a high plasma Ca2+?",
        options: ["Milk-alkali syndrome", "Gitelman syndrome", "Vomiting", "Liddle syndrome", "Primary hyperaldosteronism"],
        answer: 0,
        explanation: "<p><strong>Milk-alkali syndrome</strong> follows large intakes of calcium carbonate: the carbonate is an alkali load and the calcium raises plasma Ca2+.</p><p>An alkali load lasts mainly when the kidney cannot excrete HCO3−, as in CKD or low volume; treatment is stopping the source, with saline.</p>",
        notes: {
            1: "Gitelman syndrome lowers urine Ca2+ but does not raise plasma Ca2+ out of range; its typical extra finding is low Mg2+.",
            2: "Vomiting does not raise Ca2+; the alkalosis lowers ionized Ca2+ instead.",
            3: "Liddle syndrome causes hypertension and hypokalemia, with normal Ca2+.",
            4: "Primary hyperaldosteronism causes hypertension and hypokalemia, with a normal Ca2+.",
        },
    },
    {
        id: "ab-cf-sweat",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Which condition can cause a chloride-responsive metabolic alkalosis through Cl− lost in sweat?",
        options: ["Cystic fibrosis", "Gitelman syndrome", "Liddle syndrome", "Cushing syndrome", "Primary hyperaldosteronism"],
        answer: 0,
        explanation: "<p><strong>Cystic fibrosis</strong> loses large amounts of Cl− in sweat, which depletes volume and Cl− in the same way vomiting does, so urine Cl− is low and saline corrects it.</p><p>Chloride-losing diarrhea, from a villous adenoma or congenital chloridorrhea, acts similarly.</p>",
        notes: {
            1: "Gitelman syndrome wastes Cl− in urine, so it is chloride-resistant.",
            2: "Liddle syndrome is a chloride-resistant alkalosis with hypertension.",
            3: "Cushing syndrome is chloride-resistant: cortisol acts on the mineralocorticoid receptor.",
            4: "Primary hyperaldosteronism is chloride-resistant, with hypertension and low renin.",
        },
    },
    {
        id: "ab-alk-oxygen",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "How does metabolic alkalosis affect the oxygen dissociation curve?",
        options: ["Shifts it left, so less O2 is released to tissues", "Shifts it right, so more O2 is released to tissues", "Shifts it left, so more O2 is released to tissues", "Shifts it right, so less O2 is released to tissues", "Leaves it unchanged, because only pCO2 moves it"],
        answer: 0,
        explanation: "<p><strong>Alkalosis shifts the curve left:</strong> hemoglobin holds O2 more tightly, so less is released to tissues. Acidosis does the opposite.</p><p>Combined with the cerebral vasoconstriction of alkalosis, this contributes to confusion and seizures.</p>",
        notes: {
            1: "A right shift with more O2 released is the effect of acidosis.",
            2: "A left shift means hemoglobin holds O2 more tightly, so less, not more, is released.",
            3: "A right shift releases more O2, not less.",
            4: "pH itself moves the curve, independent of pCO2; this is the Bohr effect.",
        },
    },
    {
        id: "ab-diuretic-alkalosis",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "How do loop and thiazide diuretics cause a metabolic alkalosis?",
        options: [
            "Volume loss raises aldosterone, which swaps the extra distal Na+ for H+ and K+",
            "They block carbonic anhydrase, so the proximal tubule reclaims more filtered HCO3−",
            "They are metabolized to HCO3− in the liver, adding an alkali load",
            "They block H+ secretion by intercalated cells, so HCO3− builds up",
            "They depress breathing, so pCO2 rises and the kidney keeps HCO3−",
        ],
        answer: 0,
        explanation: "<p><strong>Diuretics deliver more Na+ to the collecting duct while the volume loss raises aldosterone,</strong> and aldosterone reabsorbs that Na+ in exchange for H+ and K+, so H+ and K+ are lost in urine.</p><p>The ECF also shrinks around the same amount of HCO3−, a contraction alkalosis. Urine Cl− is high while the drug acts and low once it wears off.</p>",
        notes: {
            1: "Blocking carbonic anhydrase is how acetazolamide works, and it causes the opposite, a NAGMA.",
            2: "Loop and thiazide diuretics are not metabolized to HCO3−; citrate and acetate are the alkali loads.",
            3: "Diuretics increase, not block, distal H+ secretion.",
            4: "Diuretics do not depress breathing; a high pCO2 here is compensation, not the cause.",
        },
    },
    {
        id: "ab-low-k-maintains",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Why does hypokalemia help keep a metabolic alkalosis going?",
        options: [
            "It increases distal H+ secretion and NH4+ production, which makes new HCO3−",
            "It lowers aldosterone, so the collecting duct reabsorbs more HCO3−",
            "It blocks Cl− reabsorption in the loop, so HCO3− is kept instead",
            "It stimulates the respiratory center, so pCO2 falls further",
            "It moves HCO3− out of cells into the blood in exchange for K+",
        ],
        answer: 0,
        explanation: "<p><strong>Low K+ increases H+ secretion and NH4+ production,</strong> and each NH4+ excreted adds a new HCO3− to the blood, so the kidney keeps generating alkali.</p><p>Low volume (through angiotensin II and aldosterone) and low Cl− (leaving nothing to swap for HCO3−) are the other maintenance factors; the alkalosis lasts until all three are replaced.</p>",
        notes: {
            1: "Low K+ does reduce aldosterone, but that would lessen H+ loss, not maintain the alkalosis.",
            2: "Low K+ does not explain a high urine Cl−; that comes from diuretics or tubular salt wasting.",
            3: "Breathing falls, not rises, in alkalosis; a lower pCO2 would make it worse, but low K+ does not cause it.",
            4: "In hypokalemia, H+ moves into cells as K+ leaves them, but the main maintaining effect is renal.",
        },
    },
    {
        id: "ab-gitelman-saline",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Why does 0.9% saline not correct the alkalosis of Gitelman syndrome, though it corrects the alkalosis of vomiting?",
        options: [
            "The tubule keeps wasting Na+ and Cl−, so aldosterone stays high whatever is given",
            "Saline adds Cl−, which the distal tubule turns into HCO3− in this syndrome",
            "Gitelman syndrome causes hypertension, so saline would be unsafe",
            "Saline lowers plasma Mg2+ further, which makes the alkalosis worse",
            "Gitelman syndrome is an alkali load, which saline cannot remove",
        ],
        answer: 0,
        explanation: "<p><strong>In Gitelman syndrome, the tubule keeps losing Na+ and Cl− whatever is given,</strong> so urine Cl− stays above 20 mmol/L and renin and aldosterone stay high: a chloride-resistant alkalosis.</p><p>After vomiting, the kidney holds on to Cl− because volume and Cl− are low; restoring them lets it excrete HCO3−. Gitelman syndrome instead needs lifelong KCl and Mg2+, with potassium-sparing diuretics, NSAIDs, ACEi, or ARBs if K+ stays low.</p>",
        notes: {
            1: "Cl− is not converted to HCO3−; Cl− delivery to the collecting duct normally lets HCO3− be secreted.",
            2: "Gitelman syndrome has normal or low BP, not hypertension.",
            3: "Low Mg2+ in Gitelman syndrome comes from the tubular defect, not from saline.",
            4: "Gitelman syndrome is a tubular salt-wasting disorder, not an alkali load.",
        },
    },
    {
        id: "ab-urine-cl-not-na",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "In a volume-depleted patient with metabolic alkalosis, why is urine Cl− measured rather than urine Na+?",
        options: [
            "Na+ leaves with HCO3− even when volume is low, so it can be falsely high",
            "Urine Na+ cannot be measured accurately once the pH is above 7.45",
            "Cl− is the only ion that aldosterone acts on in the collecting duct",
            "Urine Na+ is always below 20 mmol/L in alkalosis, so it cannot separate the causes",
            "Cl− is measured because the test is cheaper and faster than Na+",
        ],
        answer: 0,
        explanation: "<p><strong>In alkalosis, the kidney excretes extra HCO3−, and Na+ goes with it as its partner cation,</strong> so urine Na+ can exceed 20 mmol/L despite low volume.</p><p>Cl− does not travel with HCO3−, so a low urine Cl− still shows the kidney holding on to volume and Cl−, which marks a chloride-responsive alkalosis.</p>",
        notes: {
            1: "Urine Na+ can be measured at any pH; the problem is interpreting it.",
            2: "Aldosterone acts mainly on Na+ reabsorption and K+ and H+ secretion, not on Cl− alone.",
            3: "Urine Na+ can be high in alkalosis, which is exactly why it misleads.",
            4: "The choice is about meaning, not cost.",
        },
    },
    {
        id: "ab-set-ngt-1",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-ngt",
        passage: "<p>A 66-year-old man is on day 4 after bowel surgery, with a prolonged ileus. His NG tube drains about 2 L a day, and he has had only maintenance fluid. He is dizzy on sitting up, with BP 102/64 mmHg. Results (illustrative):</p>\n<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>\n<tr><td>pH / pCO2</td><td>7.53 / 49 mmHg</td></tr>\n<tr><td>Na+ / K+</td><td>137 / 2.9 mmol/L</td></tr>\n<tr><td>Cl− / HCO3−</td><td>88 / 40 mmol/L</td></tr>\n<tr><td>Urine Cl−</td><td>6 mmol/L</td></tr>\n</tbody></table>",
        stem: "Is his respiratory compensation appropriate?",
        options: [
            "Yes: expected pCO2 is about 48 (43–53), and his is 49",
            "No: expected pCO2 is about 68, so he also has a respiratory alkalosis",
            "No: expected pCO2 is 40, so he also has a respiratory acidosis",
            "No: expected pCO2 is about 30, so he also has a respiratory acidosis",
            "Compensation cannot be judged until his K+ is corrected",
        ],
        answer: 0,
        explanation: "<p><strong>Expected pCO2 = 0.7 × 40 + 20 = 48 (± 5), or 43–53 mmHg; his 49 mmHg is appropriate,</strong> so this is a simple metabolic alkalosis.</p><p>His HCO3− is high and moves the same way as the pH, so the disorder is metabolic, and the lungs have hypoventilated as expected.</p>",
        notes: {
            1: "68 comes from the Winter formula (1.5 × 40 + 8), which applies to metabolic acidosis.",
            2: "A pCO2 of 40 would be normal, but compensation should raise it in alkalosis.",
            3: "A pCO2 of 30 would mean hyperventilation, the response to acidosis.",
            4: "Compensation is judged from HCO3− and pCO2; K+ does not change the calculation.",
        },
    },
    {
        id: "ab-set-ngt-2",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-ngt",
        stem: "Which result best shows what is keeping his alkalosis going?",
        options: [
            "Urine Cl− 6 mmol/L: low volume and Cl− keep HCO3− reabsorbed",
            "HCO3− of 40 mmol/L: the high HCO3− itself stimulates more reabsorption",
            "pCO2 of 49 mmHg: hypoventilation is generating more HCO3−",
            "Na+ of 137 mmol/L: normal Na+ shows aldosterone is suppressed",
            "BP of 102/64 mmHg: low BP directly releases HCO3− from bone",
        ],
        answer: 0,
        explanation: "<p><strong>A urine Cl− of 6 mmol/L shows the kidney holding on to Cl−,</strong> because volume and Cl− are depleted. Angiotensin II and aldosterone then keep HCO3− reabsorption high, too little Cl− reaches the collecting duct to swap for HCO3−, and his low K+ adds to H+ secretion.</p><p>The NG tube generated the alkalosis by removing HCl; the depletion maintains it.</p>",
        notes: {
            1: "A high HCO3− would normally be excreted quickly by healthy kidneys; something else must be stopping that.",
            2: "His pCO2 is the expected compensation, not a cause of the alkalosis.",
            3: "A normal Na+ says nothing about aldosterone, which is high here because of the volume loss.",
            4: "Low BP reflects volume loss; bone does not release HCO3− in response.",
        },
    },
    {
        id: "ab-set-ngt-3",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-ngt",
        stem: "Which treatment will best correct his alkalosis?",
        options: [
            "0.9% saline with KCl, replacing ongoing NG losses",
            "Acetazolamide, to make the kidney excrete HCO3−",
            "Spironolactone, to block the raised aldosterone",
            "Dilute HCl through a central line, given slowly",
            "D5W with KCl, to replace the water he has lost",
        ],
        answer: 0,
        explanation: "<p><strong>0.9% saline with KCl restores volume, Cl−, and K+,</strong> removing what keeps the kidney reabsorbing HCO3−, so the kidney can then excrete the excess.</p><p>His ongoing NG losses also need replacing, or the alkalosis will return.</p>",
        notes: {
            1: "Acetazolamide is used when saline cannot be given, as in fluid overload; he is volume depleted and would lose more volume and K+.",
            2: "His aldosterone is a response to low volume; blocking it would not restore volume or Cl−.",
            3: "Dilute HCl is kept for severe or refractory alkalosis; his is chloride-responsive.",
            4: "D5W replaces water but no Cl−, and spreads into cells, so it corrects neither the volume nor the Cl− deficit.",
        },
    },
    {
        id: "ab-contraction",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "What is the alkalosis called when diuretics shrink the extracellular fluid around an unchanged amount of HCO3−?",
        options: ["Contraction alkalosis", "Post-hypercapnic alkalosis", "Milk-alkali syndrome", "Apparent mineralocorticoid excess", "Dilutional alkalosis"],
        answer: 0,
        explanation: "<p><strong>Contraction alkalosis:</strong> loop and thiazide diuretics remove Na+, Cl−, and water without HCO3−, so the same HCO3− sits in a smaller volume and its concentration rises.</p><p>Diuretics also raise aldosterone through volume loss and deliver more Na+ to the collecting duct, where it is swapped for H+ and K+.</p>",
        notes: {
            1: "Post-hypercapnic alkalosis is HCO3− left behind when a chronic high pCO2 is lowered quickly.",
            2: "Milk-alkali syndrome is an alkali load from calcium carbonate.",
            3: "Apparent mineralocorticoid excess is a collecting duct acting as if aldosterone were high.",
            4: "Dilution lowers HCO3− and causes an acidosis, the opposite effect.",
        },
    },
    {
        id: "ab-liddle-channel",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Liddle syndrome is caused by an overactive form of which channel?",
        options: ["ENaC in the collecting duct", "NCC in the distal tubule", "NKCC2 in the thick ascending limb", "Aquaporin-2 in the collecting duct", "The mineralocorticoid receptor"],
        answer: 0,
        explanation: "<p><strong>In Liddle syndrome, ENaC is overactive,</strong> so the collecting duct reabsorbs Na+ and secretes K+ and H+ without needing aldosterone: hypertension, hypokalemia, and alkalosis with low renin and low aldosterone.</p><p>Amiloride blocks ENaC directly, whereas spironolactone, a receptor blocker, does not help.</p>",
        notes: {
            1: "Loss of NCC is Gitelman syndrome, with normal or low BP.",
            2: "Loss of NKCC2 is Bartter syndrome, with normal or low BP.",
            3: "Aquaporin-2 handles water, not Na+, and its defects cause diabetes insipidus.",
            4: "Cortisol acting on the mineralocorticoid receptor causes the picture in Cushing syndrome and licorice use, not Liddle syndrome.",
        },
    },
    {
        id: "ab-villous",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Which colonic tumor can cause a chloride-losing diarrhea with metabolic alkalosis?",
        options: ["Villous adenoma", "Tubular adenoma", "Carcinoid tumor", "Vipoma", "Gastrointestinal stromal tumor"],
        answer: 0,
        explanation: "<p><strong>A villous adenoma can secrete fluid rich in Cl− and K+,</strong> so, unlike most diarrhea, it depletes Cl− and causes a chloride-responsive metabolic alkalosis with hypokalemia.</p><p>Congenital chloridorrhea does the same. Most diarrhea instead loses HCO3− and causes a NAGMA.</p>",
        notes: {
            1: "Tubular adenomas are small and rarely secrete enough fluid to change acid-base balance.",
            2: "Carcinoid tumors cause flushing and diarrhea through serotonin, not a chloride-losing state.",
            3: "A vipoma causes a watery diarrhea that loses HCO3− and K+, giving a NAGMA rather than an alkalosis.",
            4: "GISTs bleed or obstruct rather than secrete fluid.",
        },
    },
    {
        id: "ab-transfusion-citrate",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Massive blood transfusion can cause a metabolic alkalosis through which substance?",
        options: ["Citrate", "Lactate", "Acetate", "Potassium", "Chloride"],
        answer: 0,
        explanation: "<p><strong>Stored blood contains citrate as an anticoagulant,</strong> and the liver metabolizes it to HCO3−, an alkali load.</p><p>Like other alkali loads, it lasts mainly when the kidney cannot excrete HCO3−, as in CKD or low volume.</p>",
        notes: {
            1: "Lactate in Hartmann solution is also metabolized to HCO3−, but it is not what blood products contain.",
            2: "Acetate is the alkali in some TPN and Plasma-Lyte, not in stored blood.",
            3: "Stored blood can raise K+, but K+ does not cause an alkalosis.",
            4: "A Cl− load causes a NAGMA, the opposite of an alkalosis.",
        },
    },
    {
        id: "ab-ame-pattern",
        condition: "metabolic-alkalosis",
        kind: "memory",
        stem: "Which renin and aldosterone pattern marks apparent mineralocorticoid excess, such as from licorice?",
        options: ["Low renin and low aldosterone", "Low renin and high aldosterone", "High renin and high aldosterone", "High renin and low aldosterone", "Normal renin and high aldosterone"],
        answer: 0,
        explanation: "<p><strong>In apparent mineralocorticoid excess, something other than aldosterone drives the mineralocorticoid effect,</strong> so the retained Na+ and hypertension suppress both renin and aldosterone.</p><p>Causes are Cushing syndrome and licorice, where cortisol acts on the receptor, and Liddle syndrome, where ENaC is overactive.</p>",
        notes: {
            1: "Low renin with high aldosterone is primary hyperaldosteronism.",
            2: "High renin with high aldosterone is secondary hyperaldosteronism, or Bartter and Gitelman syndromes with normal or low BP.",
            3: "High renin with low aldosterone is primary adrenal insufficiency, which causes hyperkalemia and acidosis.",
            4: "A high aldosterone would not fit; the mineralocorticoid effect here comes from elsewhere.",
        },
    },
    {
        id: "ab-alk-k-shift",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Why does metabolic alkalosis lower plasma K+?",
        options: [
            "H+ leaves cells and K+ enters in its place, and more K+ is lost in urine",
            "K+ binds to HCO3− in plasma and is filtered more easily",
            "Alkalosis blocks K+ absorption in the gut",
            "Albumin binds K+ more tightly in alkalosis, which lowers the free plasma K+",
            "The lungs excrete K+ when breathing slows",
        ],
        answer: 0,
        explanation: "<p><strong>Cells release H+ to soften the rise in pH, and K+ moves in to keep the charge balanced.</strong> The aldosterone excess or volume loss behind many alkaloses also increases K+ loss in urine.</p><p>The low K+ then helps maintain the alkalosis by increasing H+ secretion and NH4+ production.</p>",
        notes: {
            1: "K+ does not bind HCO3−; the shift is across cell membranes.",
            2: "Alkalosis does not change gut K+ absorption.",
            3: "Albumin binds more Ca2+ in alkalosis, not K+; that is why ionized Ca2+ falls.",
            4: "The lungs do not excrete K+.",
        },
    },
    {
        id: "ab-alkali-persist",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Why does an alkali load, such as HCO3− tablets, usually cause a lasting alkalosis only in patients with CKD or low volume?",
        options: [
            "Healthy kidneys excrete extra HCO3− quickly; CKD and low volume stop this",
            "Alkali is absorbed from the gut only when GFR is low",
            "CKD raises aldosterone, which turns alkali into HCO3−",
            "Low volume makes the lungs breathe faster, which traps the HCO3− in plasma",
            "Alkali loads are toxic only to damaged nephrons",
        ],
        answer: 0,
        explanation: "<p><strong>Normal kidneys excrete extra HCO3− within days,</strong> so an alkali load alone is quickly corrected.</p><p>In CKD, too few nephrons filter it; in low volume, angiotensin II and aldosterone keep HCO3− reabsorption high. Milk-alkali syndrome is the classic example, treated by stopping the source and giving saline.</p>",
        notes: {
            1: "Alkali is absorbed from the gut whatever the GFR.",
            2: "Aldosterone does not convert alkali to HCO3−, and CKD does not reliably raise it.",
            3: "Breathing slows, not speeds up, in alkalosis, and breathing does not trap HCO3−.",
            4: "The problem is failure to excrete HCO3−, not toxicity to nephrons.",
        },
    },
    {
        id: "ab-ras-alkalosis",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "How does renal artery stenosis cause a hypokalemic metabolic alkalosis?",
        options: [
            "Low renal perfusion raises renin, so aldosterone swaps Na+ for H+ and K+",
            "The narrowed artery filters less HCO3−, so it builds up in the blood",
            "Ischemic tubules lose the ability to reabsorb Cl−",
            "The stenosis raises cortisol, which acts on the mineralocorticoid receptor",
            "Hypertension directly increases H+ secretion in the collecting duct",
        ],
        answer: 0,
        explanation: "<p><strong>The kidney beyond the stenosis senses low perfusion and releases renin,</strong> so angiotensin II and aldosterone rise: secondary hyperaldosteronism, with high renin and high aldosterone.</p><p>Aldosterone reabsorbs Na+ in exchange for H+ and K+, causing hypertension, hypokalemia, and a chloride-resistant alkalosis. Treating the stenosis treats the alkalosis.</p>",
        notes: {
            1: "Filtering less HCO3− does not generate an alkalosis; the driver is aldosterone.",
            2: "Chloride wasting by ischemic tubules is not the mechanism; urine Cl− is high because of the mineralocorticoid effect.",
            3: "Cortisol acting on the receptor is the mechanism of Cushing syndrome and licorice.",
            4: "Hypertension is a result of the aldosterone excess, not a cause of H+ secretion.",
        },
    },
    {
        id: "ab-cushing-alkalosis",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Why does severe Cushing syndrome cause a hypertensive, hypokalemic alkalosis with low renin and low aldosterone?",
        options: [
            "Cortisol overwhelms 11β-HSD2 and acts on the mineralocorticoid receptor",
            "Cortisol stimulates renin release from the juxtaglomerular cells of the kidney",
            "Cortisol blocks NKCC2 in the thick ascending limb",
            "The adrenal makes extra aldosterone alongside cortisol",
            "Cortisol causes vomiting, which loses HCl",
        ],
        answer: 0,
        explanation: "<p><strong>Cortisol binds the mineralocorticoid receptor as well as aldosterone does;</strong> 11β-HSD2 normally inactivates it in the collecting duct, but large amounts overwhelm the enzyme.</p><p>The duct then acts as if aldosterone were high, retaining Na+ and losing H+ and K+, and the resulting hypertension suppresses renin and aldosterone: apparent mineralocorticoid excess.</p>",
        notes: {
            1: "Renin is low, not high, in this picture.",
            2: "Blocking NKCC2 would cause salt wasting with normal or low BP, like Bartter syndrome.",
            3: "Aldosterone is low, which is what separates this from primary hyperaldosteronism.",
            4: "Vomiting gives a chloride-responsive alkalosis with low BP and high renin.",
        },
    },
    {
        id: "ab-alk-brain",
        condition: "metabolic-alkalosis",
        kind: "reasoning",
        stem: "Why can severe metabolic alkalosis cause confusion and seizures?",
        options: [
            "Cerebral vasoconstriction, low ionized Ca2+, and less O2 released to tissues",
            "Cerebral edema from the high Na+ that alkalosis causes",
            "Direct toxicity of HCO3− to neurons",
            "Hypoglycemia from increased insulin release",
            "A high pCO2 from hypoventilation, which dilates the cerebral vessels and raises ICP",
        ],
        answer: 0,
        explanation: "<p><strong>Alkalosis constricts cerebral vessels, lowers ionized Ca2+ by making albumin bind more of it, and shifts the oxygen curve left,</strong> so less O2 reaches the brain.</p><p>Low K+ and low Ca2+ add muscle cramps, tetany, and arrhythmias.</p>",
        notes: {
            1: "Alkalosis does not raise Na+ or cause cerebral edema.",
            2: "HCO3− is not directly neurotoxic; the effects come from pH, Ca2+, and blood flow.",
            3: "Alkalosis does not cause hypoglycemia.",
            4: "Compensatory hypoventilation raises pCO2 only modestly and is not the cause of the neurologic effects.",
        },
    },
    {
        id: "ab-set-bulimia-1",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-bulimia",
        passage: "<p>A 19-year-old woman is referred for weakness and palpitations. She is very thin, with worn tooth enamel and calluses on the backs of her fingers, but denies vomiting and takes no medicines. BP 96/60 mmHg. Results (illustrative):</p>\n<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>\n<tr><td>pH / pCO2</td><td>7.49 / 45 mmHg</td></tr>\n<tr><td>Na+ / K+</td><td>136 / 2.6 mmol/L</td></tr>\n<tr><td>Cl− / HCO3−</td><td>90 / 34 mmol/L</td></tr>\n<tr><td>Urine Cl−</td><td>7 mmol/L (on two occasions)</td></tr>\n<tr><td>Urine diuretic screen</td><td>Negative</td></tr>\n</tbody></table>",
        stem: "What best explains her alkalosis?",
        options: ["Self-induced vomiting", "Gitelman syndrome", "Hidden diuretic use", "Primary hyperaldosteronism", "Liddle syndrome"],
        answer: 0,
        explanation: "<p><strong>A hypokalemic alkalosis with a consistently low urine Cl−, low BP, enamel erosion, and knuckle calluses points to self-induced vomiting.</strong> The low urine Cl− shows the kidney holding on to Cl− because volume and Cl− are depleted: a chloride-responsive alkalosis.</p><p>The negative diuretic screen and the urine Cl− that stays low argue against hidden diuretic use.</p>",
        notes: {
            1: "Gitelman syndrome wastes Cl− in urine, so urine Cl− would be high.",
            2: "Diuretics make urine Cl− high while they act, and her screen is negative.",
            3: "Primary hyperaldosteronism causes hypertension and a high urine Cl−.",
            4: "Liddle syndrome causes hypertension and a high urine Cl−.",
        },
    },
    {
        id: "ab-set-bulimia-2",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-bulimia",
        stem: "Is her respiratory compensation appropriate?",
        options: [
            "Yes: expected pCO2 is about 44 (39–49), and hers is 45",
            "No: expected pCO2 is about 59, so she has a respiratory alkalosis too",
            "No: expected pCO2 is 40, so she has a respiratory acidosis too",
            "No: expected pCO2 is about 30, so she has a respiratory acidosis too",
            "It cannot be judged while her K+ is low",
        ],
        answer: 0,
        explanation: "<p><strong>Expected pCO2 = 0.7 × 34 + 20 ≈ 44 (± 5), or 39–49 mmHg; her 45 mmHg is appropriate,</strong> so this is a simple metabolic alkalosis.</p><p>The lungs hypoventilate to raise pCO2 and pull the pH back toward normal, but rarely past 55 mmHg, because hypoxia then drives breathing. A pCO2 above the range would add a respiratory acidosis, and one below it a respiratory alkalosis.</p>",
        notes: {
            1: "59 comes from the Winter formula (1.5 × 34 + 8), which applies to metabolic acidosis.",
            2: "A pCO2 of 40 is normal, but compensation should raise it in alkalosis.",
            3: "A pCO2 of 30 would be hyperventilation, the response to acidosis.",
            4: "Compensation is judged from HCO3− and pCO2; K+ does not change the calculation.",
        },
    },
    {
        id: "ab-set-bulimia-3",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-bulimia",
        stem: "Which management fits best?",
        options: [
            "0.9% saline with KCl, and treating the eating disorder",
            "Spironolactone, to block the aldosterone raised by volume loss",
            "Acetazolamide, to excrete HCO3−",
            "Amiloride, to reduce K+ loss",
            "Dilute HCl, to lower her pH quickly",
        ],
        answer: 0,
        explanation: "<p><strong>0.9% saline with KCl restores volume, Cl−, and K+,</strong> so the kidney can excrete the extra HCO3−; her K+ of 2.6 mmol/L also needs replacing to protect her heart.</p><p>Without treating the eating disorder, the vomiting and the alkalosis will return.</p>",
        notes: {
            1: "Her aldosterone is a response to volume loss; blocking it does not restore volume or Cl−.",
            2: "Acetazolamide is for alkalosis when saline cannot be given, as in fluid overload; she is volume depleted.",
            3: "Amiloride treats Liddle syndrome and offsets diuretic K+ loss, but does not correct her Cl− and volume deficit.",
            4: "Dilute HCl is kept for severe or refractory alkalosis; hers is chloride-responsive.",
        },
    },
    {
        id: "ab-set-bartter-1",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-bartter",
        passage: "<p>A 6-year-old boy has poor growth, polyuria, salt craving, and muscle cramps. His BP is normal for his age. Results (illustrative):</p>\n<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>\n<tr><td>K+ / HCO3−</td><td>2.8 / 32 mmol/L</td></tr>\n<tr><td>Mg2+</td><td>Normal</td></tr>\n<tr><td>Urine Cl−</td><td>70 mmol/L</td></tr>\n<tr><td>Urine Ca2+</td><td>High</td></tr>\n<tr><td>Renin / aldosterone</td><td>High / high</td></tr>\n<tr><td>Kidney ultrasound</td><td>Nephrocalcinosis</td></tr>\n</tbody></table>",
        stem: "Which diagnosis fits best?",
        options: ["Bartter syndrome", "Gitelman syndrome", "Primary hyperaldosteronism", "Liddle syndrome", "Hidden vomiting"],
        answer: 0,
        explanation: "<p><strong>A chloride-resistant hypokalemic alkalosis with normal BP, high renin and aldosterone, high urine Ca2+, and nephrocalcinosis is Bartter syndrome,</strong> a loss of NKCC2 that behaves like a lifelong loop diuretic.</p><p>Gitelman syndrome would give low urine Ca2+ and low Mg2+.</p>",
        notes: {
            1: "Gitelman syndrome gives low urine Ca2+ and low Mg2+; he has high urine Ca2+ and normal Mg2+.",
            2: "Primary hyperaldosteronism causes hypertension with low renin.",
            3: "Liddle syndrome causes hypertension with low renin and low aldosterone.",
            4: "Vomiting would make urine Cl− low, not 70 mmol/L.",
        },
    },
    {
        id: "ab-set-bartter-2",
        condition: "metabolic-alkalosis",
        kind: "analysis",
        set: "ab-bartter",
        stem: "Which long-term treatment is most appropriate?",
        options: [
            "KCl, adding potassium-sparing diuretics or NSAIDs if K+ stays low",
            "Repeated 0.9% saline infusions until the alkalosis has fully corrected",
            "Spironolactone alone, as for primary hyperaldosteronism",
            "Acetazolamide alone, to excrete HCO3−",
            "A thiazide diuretic, to reduce urine Ca2+",
        ],
        answer: 0,
        explanation: "<p><strong>The tubular defect keeps wasting Na+, Cl−, and K+, so treatment is lifelong replacement:</strong> KCl, with potassium-sparing diuretics, NSAIDs, ACEi, or ARBs if K+ stays low. Mg2+ is added when it is low, as in Gitelman syndrome.</p><p>Saline cannot correct it, because the wasting continues.</p>",
        notes: {
            1: "Saline does not fix a tubular defect that keeps wasting salt; the alkalosis is chloride-resistant.",
            2: "Spironolactone can help as a potassium-sparing diuretic, but alone it does not replace the K+ he is losing.",
            3: "Acetazolamide would add to his volume and K+ losses.",
            4: "A thiazide would add salt and K+ wasting at another site and worsen his hypokalemia.",
        },
    },
    {
        id: "ab-eg-case",
        condition: "metabolic-acidosis",
        kind: "analysis",
        stem: `<p>A 30-year-old man is found confused in his garage beside an unlabeled bottle. He seems drunk, but his blood ethanol is zero. Six hours later his creatinine is rising, and urine microscopy shows envelope-shaped crystals. Results (illustrative):</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>pH / pCO2 / HCO3−</td><td>7.35 / 34 mmHg / 18 mmol/L</td></tr>
<tr><td>Na+ / K+ / Cl−</td><td>138 / 4.0 / 100 mmol/L</td></tr>
<tr><td>Glucose / urea</td><td>5 / 6 mmol/L</td></tr>
<tr><td>Measured osmolality</td><td>330 mOsm/kg</td></tr>
<tr><td>Ca2+</td><td>Low</td></tr>
</tbody></table>
<p>What is the most likely ingestion?</p>`,
        options: ["Ethylene glycol", "Methanol", "Isopropyl alcohol", "Salicylates", "Paracetamol"],
        answer: 0,
        explanation: `<p><strong>An AGMA with a high osmolal gap, calcium oxalate crystals, rising creatinine, and low Ca2+ is ethylene glycol.</strong></p>
<ul>
<li><strong>Anion gap:</strong> (138 + 4) − (100 + 18) = 24 mmol/L, high.</li>
<li><strong>Osmolal gap:</strong> calculated 2 × 138 + 5 + 6 = 287; 330 − 287 = 43, far above 15, so an unmeasured osmole such as a toxic alcohol.</li>
<li><strong>Crystals, AKI, and low Ca2+:</strong> oxalic acid binds calcium and deposits as calcium oxalate in the tubules.</li>
</ul>
<p>Treatment is fomepizole, hemodialysis given the AKI, and thiamine and pyridoxine.</p>`,
        notes: {
            1: "Methanol also gives an AGMA with a high osmolal gap, but with visual change and no oxalate crystals.",
            2: "Isopropyl alcohol raises the osmolal gap but causes ketosis without acidosis.",
            3: "Salicylates cause tinnitus and a respiratory alkalosis with an AGMA, without a large osmolal gap or crystals.",
            4: "Chronic paracetamol can cause an AGMA from 5-oxoproline, but not a high osmolal gap or crystals.",
        },
    },
    {
        id: "ab-rta4-case",
        condition: "metabolic-acidosis",
        kind: "analysis",
        stem: `<p>A 68-year-old man with type 2 diabetes and diabetic nephropathy (eGFR 70) started ramipril and spironolactone 2 months ago. He feels well. Results (illustrative):</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>pH / HCO3−</td><td>7.36 / 18 mmol/L</td></tr>
<tr><td>Na+ / K+ / Cl−</td><td>138 / 6.2 / 112 mmol/L</td></tr>
<tr><td>Urine pH</td><td>5.2</td></tr>
<tr><td>Urine anion gap</td><td>Positive</td></tr>
</tbody></table>
<p>Which diagnosis best explains these results?</p>`,
        options: ["RTA type 4", "RTA type 1", "RTA type 2", "Diarrhea", "Uremic acidosis"],
        answer: 0,
        explanation: `<p><strong>A mild, hyperkalemic NAGMA with an acid urine and a positive urine anion gap is RTA type 4.</strong></p>
<ul>
<li><strong>Anion gap:</strong> (138 + 6.2) − (112 + 18) ≈ 14 mmol/L, normal.</li>
<li><strong>High K+:</strong> separates type 4 from types 1 and 2, which cause low K+.</li>
<li><strong>Urine pH 5.2:</strong> the little H+ secreted has little NH4+ to buffer it, so the urine still acidifies.</li>
<li><strong>Cause:</strong> diabetic nephropathy (hyporeninemic hypoaldosteronism) plus two drugs that block aldosterone's effect.</li>
</ul>
<p>Management is to stop or reduce the culprit drugs, a low-potassium diet, and a loop or thiazide diuretic.</p>`,
        notes: {
            1: "RTA type 1 gives low K+ and a urine pH above 5.5.",
            2: "RTA type 2 gives low K+.",
            3: "Diarrhea gives a negative urine anion gap and usually low K+.",
            4: "Uremic acidosis is an AGMA in advanced kidney failure; his gap is normal and his eGFR is 70.",
        },
    },
    {
        id: "ab-aspirin-case",
        condition: "metabolic-acidosis",
        kind: "analysis",
        stem: `<p>A 70-year-old woman who has been taking large amounts of aspirin for arthritis has ringing in her ears, nausea, and fast breathing. Results (illustrative):</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>pH / pCO2 / HCO3−</td><td>7.43 / 22 mmHg / 14 mmol/L</td></tr>
<tr><td>Na+ / K+ / Cl−</td><td>140 / 3.6 / 104 mmol/L</td></tr>
</tbody></table>
<p>Which describes her acid-base disorder?</p>`,
        options: ["An AGMA with a respiratory alkalosis", "A pure AGMA with appropriate compensation", "A NAGMA with a respiratory alkalosis", "An AGMA with a respiratory acidosis", "No disorder, because the pH is normal"],
        answer: 0,
        explanation: `<p><strong>Salicylates stimulate the respiratory center and also cause an AGMA, so both disorders appear together.</strong></p>
<ul>
<li><strong>Anion gap:</strong> (140 + 3.6) − (104 + 14) ≈ 26 mmol/L, high.</li>
<li><strong>Expected pCO2:</strong> 1.5 × 14 + 8 = 29 (± 2), so 27–31 mmHg. Hers is 22, lower than expected, so there is a respiratory alkalosis as well.</li>
<li><strong>Normal pH:</strong> the two disorders cancel out; a normal pH with abnormal HCO3− and pCO2 means a mixed disorder.</li>
</ul>
<p>Treatment is activated charcoal, IV NaHCO3 to alkalinize the urine and trap salicylate there, and hemodialysis if severe.</p>`,
        notes: {
            1: "Her pCO2 of 22 is below the expected 27–31, so compensation alone does not explain it.",
            2: "Her gap of about 26 mmol/L is high, so this is an AGMA.",
            3: "A respiratory acidosis would give a pCO2 higher than expected; hers is lower.",
            4: "A normal pH with a low HCO3− and low pCO2 is a mixed disorder, not the absence of one.",
        },
    },

    /* ===== Prerenal AKI ===== */

    /* --- Memory --- */
    {
        id: "pre-intrarenal",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "Which of these causes AKI by injuring the kidney itself, rather than by decreasing its perfusion?",
        options: ["Gentamicin", "Ibuprofen", "Lisinopril", "Upper GI bleeding", "Cirrhosis with ascites"],
        answer: 0,
        explanation: `<p><strong>Aminoglycosides such as gentamicin are toxic to tubular cells, causing ATN, an intrarenal AKI.</strong> The kidney itself is damaged, so restoring perfusion does not reverse it.</p>
<p>Prerenal causes lower perfusion while the kidney stays healthy: too little blood volume, a failing heart or dilated vessels, or drugs and diseases that act on the kidney's own vessels. Because the tubules still work, the urine is concentrated and low in Na+, and creatinine falls once perfusion returns.</p>`,
        notes: {
            1: "NSAIDs remove the prostaglandins that dilate the afferent arteriole, a prerenal cause (6).",
            2: "ACEi dilate the efferent arteriole and lower glomerular pressure, a prerenal cause (7).",
            3: "Bleeding lowers blood volume, a prerenal cause (1).",
            4: "Cirrhosis causes hepatorenal syndrome through intense renal vasoconstriction, a prerenal cause (5).",
        },
    },
    {
        id: "pre-angiotensin",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "As renal perfusion falls, which hormone constricts the efferent arteriole to hold GFR up?",
        options: ["Angiotensin II", "Prostaglandin E2", "ADH", "Aldosterone", "Atrial natriuretic peptide"],
        answer: 0,
        explanation: `<p><strong>Angiotensin II constricts the efferent arteriole,</strong> raising glomerular pressure so that GFR holds up even as flow falls. Prostaglandins dilate the afferent arteriole at the same time.</p>
<p>This autoregulation works until systolic pressure falls below about 80 mmHg. That is why drugs that remove either arm, ACEi and ARBs on the efferent side and NSAIDs on the afferent side, can tip a patient into prerenal AKI.</p>`,
        notes: {
            1: "Prostaglandins dilate the afferent arteriole, the other arm of autoregulation.",
            2: "ADH concentrates the urine by water reabsorption; it does not set glomerular pressure.",
            3: "Aldosterone increases Na+ reabsorption in the collecting duct, not efferent tone.",
            4: "ANP is released when the atria stretch, in volume overload, and promotes Na+ excretion.",
        },
    },
    {
        id: "pre-nsaids",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "Which drug class removes the mechanism that dilates the afferent arteriole when renal perfusion falls?",
        options: ["NSAIDs", "ACEi", "ARBs", "Loop diuretics", "Calcium channel blockers"],
        answer: 0,
        explanation: `<p><strong>NSAIDs block prostaglandin synthesis, and prostaglandins dilate the afferent arteriole</strong> to keep blood flowing into the glomerulus when perfusion falls.</p>
<p>In a healthy, well-filled patient this barely matters, but in hypovolemia, HF, or cirrhosis the kidney depends on it, so NSAIDs can cause prerenal AKI (6). They are stopped as part of treatment.</p>`,
        notes: {
            1: "ACEi remove angiotensin II at the efferent arteriole, lowering glomerular pressure from the other side (7).",
            2: "ARBs act like ACEi, on the efferent arteriole (7).",
            3: "Loop diuretics cause prerenal AKI by overdiuresis and fluid loss (1), not afferent constriction.",
            4: "Calcium channel blockers dilate the afferent arteriole rather than constricting it.",
        },
        info: "Calcium channel blockers dilating the afferent arteriole is standard pharmacology rather than page content.",
    },
    {
        id: "pre-urine",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "Which urine finding fits prerenal AKI?",
        options: ["FENa below 1%", "Muddy brown granular casts", "Urine Na+ above 40 mmol/L", "Urine osmolality below 450 mOsm/kg", "RBC casts"],
        answer: 0,
        explanation: `<p><strong>In prerenal AKI the tubules still work and hold on to Na+, so FENa is below 1%.</strong> The other findings follow from the same idea:</p>
<ul>
<li>Urine Na+ below 20 mmol/L.</li>
<li>Urine osmolality above 500 mOsm/kg.</li>
<li>UCR above 100.</li>
<li>Bland urine, or hyaline casts.</li>
</ul>
<p>With diuretics, FEUrea below 35% is used instead.</p>`,
        notes: {
            1: "Muddy brown granular casts mean tubular cells are dying, as in ATN.",
            2: "A high urine Na+ means the tubules can no longer reabsorb it, as in ATN.",
            3: "Dilute urine means the tubules can no longer concentrate, as in ATN; prerenal urine is above 500.",
            4: "RBC casts point to glomerulonephritis, an intrarenal cause.",
        },
    },
    {
        id: "pre-rbc-casts",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "A patient with low skin turgor, tachycardia, and oliguria is thought to have AKI. Which finding would point away from a prerenal cause?",
        options: ["RBC casts", "FENa of 0.7%", "A postural fall in blood pressure", "Hyaline casts", "A UCR of 130"],
        answer: 0,
        explanation: `<p><strong>RBC casts form when red cells leak through damaged glomeruli and set in the tubules,</strong> so they point to glomerulonephritis, an intrarenal cause, rather than hypoperfusion.</p>
<p>Prerenal AKI has bland urine, or hyaline casts, with signs of the cause, such as hypovolemia here. Volume depletion and glomerulonephritis can coexist, so RBC casts call for the glomerular workup even when the patient is dry.</p>`,
        notes: {
            1: "A FENa below 1% fits prerenal AKI, with tubules that still hold on to Na+.",
            2: "A postural fall in blood pressure is a sign of hypovolemia, a prerenal cause.",
            3: "Hyaline casts are found in concentrated, bland urine and fit prerenal AKI.",
            4: "A UCR above 100 fits prerenal AKI, as urea is reabsorbed with Na+ and water.",
        },
    },
    {
        id: "pre-threshold",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "Below about which systolic blood pressure does renal autoregulation stop holding GFR steady?",
        options: ["80 mmHg", "40 mmHg", "100 mmHg", "120 mmHg", "60 mmHg diastolic"],
        answer: 0,
        explanation: `<p><strong>Autoregulation holds GFR until systolic pressure falls below about 80 mmHg.</strong> Above it, angiotensin II constricting the efferent arteriole and prostaglandins dilating the afferent keep glomerular pressure up.</p>
<p>Below it, further angiotensin II and sympathetic drive constrict the afferent arteriole too, and GFR falls. In CKD, autoregulation is weaker, so GFR falls with a smaller drop in perfusion.</p>`,
        notes: {
            1: "Autoregulation fails well before 40 mmHg.",
            2: "Autoregulation still works at 100 mmHg.",
            3: "120 mmHg is a normal systolic pressure.",
            4: "The threshold is given as a systolic pressure.",
        },
    },
    {
        id: "pre-best-test",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "Which finding best confirms that an AKI was prerenal?",
        options: ["Creatinine returning toward baseline within 24–72 hours of restoring volume", "A FENa below 1% on admission", "Hyaline casts on urinalysis", "A UCR above 100", "Urine osmolality above 500 mOsm/kg"],
        answer: 0,
        explanation: `<p><strong>The best test is the response: creatinine returns toward baseline within 24–72 hours of restoring volume,</strong> because the kidney itself was healthy.</p>
<p>The urine indices support the diagnosis but can mislead. FENa can be low despite intrinsic disease in HF, cirrhosis, contrast-associated AKI, and glomerulonephritis, and falsely high with diuretics.</p>`,
        notes: {
            1: "A low FENa supports it but also occurs in contrast-associated AKI and glomerulonephritis.",
            2: "Hyaline casts are consistent with it but are not specific.",
            3: "A high UCR supports it but can be raised by bleeding into the gut or corticosteroids.",
            4: "Concentrated urine supports it but does not prove the kidney will recover.",
        },
        info: "A high UCR from upper GI bleeding or corticosteroids is standard teaching rather than page content.",
    },
    {
        id: "pre-acs",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "After a large abdominal operation, a ventilated patient has a tense, distended abdomen and falling urine output. Which measurement best tests for the cause?",
        options: ["Bladder pressure", "Central venous pressure", "Urine osmolality", "Renal artery Doppler", "Serum lactate"],
        answer: 0,
        explanation: `<p><strong>Bladder pressure measures intra-abdominal pressure,</strong> the test for abdominal compartment syndrome (9). Increased pressure compresses the renal veins and kidneys and lowers renal perfusion.</p>
<p>It is treated by lowering the intra-abdominal pressure, by surgical decompression when severe.</p>`,
        notes: {
            1: "Central venous pressure helps assess volume, but does not show increased abdominal pressure.",
            2: "Urine osmolality shows the kidney is concentrating, not why perfusion fell.",
            3: "Renal artery Doppler looks for renal artery stenosis (8).",
            4: "Lactate is used in suspected sepsis (3).",
        },
    },
    {
        id: "pre-acei",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "Which drugs lower glomerular pressure by removing the angiotensin II that constricts the efferent arteriole?",
        options: ["ACEi and ARBs", "NSAIDs", "Calcineurin inhibitors", "Iodinated contrast", "Amphotericin B"],
        answer: 0,
        explanation: `<p><strong>ACEi and ARBs remove the effect of angiotensin II, so the efferent arteriole dilates and glomerular pressure falls</strong> (7).</p>
<p>This matters most when perfusion is already low, as in hypovolemia or renal artery stenosis. They are held until volume and creatinine recover.</p>`,
        notes: {
            1: "NSAIDs act on the afferent arteriole, removing the prostaglandins that dilate it (6).",
            2: "Calcineurin inhibitors constrict the afferent arteriole (6).",
            3: "Iodinated contrast constricts the afferent arteriole (6).",
            4: "Amphotericin B constricts the afferent arteriole (6).",
        },
    },
    {
        id: "pre-safe",
        condition: "prerenal-aki",
        kind: "memory",
        stem: "In prerenal AKI from fluid loss, how did isotonic saline compare with 4% albumin for resuscitation in the SAFE study?",
        options: ["Outcomes were similar", "Albumin halved the need for dialysis", "Saline caused more AKI", "Albumin reduced deaths by a third", "Saline was harmful in every group"],
        answer: 0,
        explanation: `<p><strong>The SAFE study found isotonic saline and 4% albumin similar in outcome,</strong> so either restores volume in prerenal AKI from fluid loss.</p>
<p>Fluid is followed by maintenance fluid, watching for overload. In contrast, albumin has a specific role in cirrhosis, where it is given with large-volume paracentesis and in hepatorenal syndrome.</p>`,
        notes: {
            1: "Albumin did not reduce dialysis compared with saline.",
            2: "Saline did not cause more AKI than albumin.",
            3: "Albumin did not reduce deaths compared with saline.",
            4: "Saline was not harmful; outcomes were similar.",
        },
    },

    /* --- Reasoning --- */
    {
        id: "pre-concentrated",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "Why is the urine concentrated, rather than dilute, in prerenal AKI?",
        options: ["The tubules are uninjured and ADH drives water reabsorption", "Less filtrate reaches the tubules, so less water is excreted regardless of their function", "Filtered proteins pull water out of the urine", "Damaged tubules leak concentrated fluid into the urine", "Angiotensin II concentrates urine in the glomerulus"],
        answer: 0,
        explanation: `<p><strong>In prerenal AKI the kidney itself is healthy, and falling perfusion raises ADH.</strong> The intact tubules respond, reabsorbing water in the collecting duct, so urine osmolality is above 500 mOsm/kg.</p>
<p>Once tubular cells are injured, as in ATN, they can no longer concentrate, and the urine becomes dilute, below 450 mOsm/kg. So concentrated urine is evidence that the tubules still work.</p>`,
        notes: {
            1: "Less filtrate lowers the volume, but concentration needs working tubules and ADH.",
            2: "Proteinuria is not a feature of prerenal AKI and would not concentrate urine.",
            3: "Injured tubules cannot concentrate; that is ATN, with dilute urine.",
            4: "The glomerulus filters; concentration happens in the tubules and collecting duct.",
        },
    },
    {
        id: "pre-sodium",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "Why are Na+ and water reabsorbed avidly in prerenal AKI?",
        options: ["Low perfusion switches on renin, sympathetic drive, and ADH", "Injured tubules can no longer secrete Na+, so it stays in the blood and draws water back", "The glomerulus filters less Na+ than water", "High urea levels drive Na+ out of the urine", "Aldosterone falls as the kidneys fail"],
        answer: 0,
        explanation: `<p><strong>The kidney senses low perfusion and responds as if the body were short of volume.</strong> Baroreceptors raise sympathetic tone, the afferent arteriole releases renin, angiotensin II and aldosterone increase, and ADH rises.</p>
<p>Because the tubules are healthy, they act on these signals, reabsorbing Na+ and water, and urea follows passively in the proximal tubule. In fluid loss the volume really is low; in HF and cirrhosis the kidney senses underfilling although total body water is high.</p>`,
        notes: {
            1: "Prerenal tubules are uninjured, and the issue is reabsorption, not secretion.",
            2: "The glomerulus filters Na+ and water together; GFR falls for both.",
            3: "Urea follows Na+ and water; it does not drive Na+ reabsorption.",
            4: "Aldosterone increases with renin and angiotensin II.",
        },
    },
    {
        id: "pre-cirrhosis",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "How does cirrhosis lead to AKI in hepatorenal syndrome?",
        options: ["Splanchnic vasodilation underfills the arteries, so the kidneys constrict their vessels", "Bilirubin deposits injure the tubules", "Portal hypertension compresses the renal veins, so blood backs up and filtration pressure falls", "Ascites blocks both ureters", "Low albumin causes immune complexes to form in the glomeruli"],
        answer: 0,
        explanation: `<p><strong>In cirrhosis, the splanchnic vessels dilate, so the arteries are underfilled although total body fluid is high.</strong> The kidneys sense low perfusion and constrict their own vessels intensely, so GFR falls while the tubules still work.</p>
<p>That is why the urine is bland with a low FENa. Bleeding, overdiuresis, large-volume paracentesis without albumin, infection, and NSAIDs trigger it.</p>`,
        notes: {
            1: "Bile cast nephropathy exists, but hepatorenal syndrome is functional, with intact tubules.",
            2: "The problem is arterial underfilling and vasoconstriction, not venous compression.",
            3: "Ascites does not obstruct the ureters.",
            4: "Hepatorenal syndrome has bland urine; immune complex disease would cause an active sediment.",
        },
        info: "Bile cast nephropathy is standard teaching rather than page content.",
    },
    {
        id: "pre-feurea",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "Why is FEUrea used instead of FENa to decide whether AKI is prerenal in a patient taking diuretics?",
        options: ["Diuretics block Na+ reabsorption, but urea is reabsorbed in the proximal tubule before they act", "Diuretics stop the glomerulus from filtering urea, so its clearance cannot be measured accurately", "FENa cannot be calculated when urine output is low", "Urea is unaffected by changes in perfusion", "Diuretics lower plasma creatinine, so FENa reads falsely low"],
        answer: 0,
        explanation: `<p><strong>Diuretics stop the tubules reabsorbing Na+, so FENa rises even when the kidney is underperfused.</strong> A prerenal patient on diuretics can have a FENa above 1%.</p>
<p>Urea is handled passively in the proximal tubule, before loop and thiazide diuretics act, so it is still held back in prerenal AKI. A FEUrea below 35% points to a prerenal cause.</p>`,
        notes: {
            1: "Urea is still filtered; the point is where it is reabsorbed.",
            2: "FENa can be calculated from spot samples at any urine output.",
            3: "Urea reabsorption increases with low perfusion; that is why FEUrea falls.",
            4: "Diuretics make FENa falsely high, not low.",
        },
    },
    {
        id: "pre-ucr",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "Why does the UCR rise above 100 in prerenal AKI?",
        options: ["Urea is reabsorbed with Na+ and water in the proximal tubule, but creatinine is not", "The liver makes more urea when perfusion falls", "Creatinine is secreted faster into the tubules when GFR falls, so plasma creatinine rises more slowly", "Muscle breakdown releases urea", "Urea is filtered more than creatinine at low GFR"],
        answer: 0,
        explanation: `<p><strong>Both urea and creatinine accumulate as GFR falls, but urea is also reabsorbed.</strong> In prerenal AKI the tubules reabsorb Na+ and water avidly, and urea follows passively in the proximal tubule, so plasma urea rises faster than creatinine.</p>
<p>The UCR is urea in mmol/L divided by creatinine in mmol/L. In ATN, injured tubules reabsorb less, so the ratio stays below 100.</p>`,
        notes: {
            1: "Urea production does not rise with low perfusion.",
            2: "Creatinine secretion does not explain the ratio; urea reabsorption does.",
            3: "Muscle breakdown releases creatinine and potassium, as in rhabdomyolysis.",
            4: "Both are filtered freely; the difference is reabsorption.",
        },
    },
    {
        id: "pre-ckd",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "Why does a patient with CKD develop prerenal AKI after a smaller fall in blood pressure than a healthy person?",
        options: ["Autoregulation is weaker, so GFR falls with a smaller drop in perfusion", "CKD raises the threshold for ADH release", "Their damaged tubules cannot reabsorb enough Na+ to defend volume, so they become dry sooner", "CKD causes the efferent arteriole to dilate permanently", "Their urine is always dilute"],
        answer: 0,
        explanation: `<p><strong>In CKD, the kidney's ability to hold GFR steady is weaker,</strong> so a fall in perfusion that a healthy kidney would buffer lowers GFR.</p>
<p>They are also often taking ACEi, ARBs, or diuretics, which remove more of that buffering, so these are held when they become dry or unwell.</p>`,
        notes: {
            1: "ADH release is not the reason; the issue is glomerular autoregulation.",
            2: "If the tubules could not reabsorb Na+, it would be tubular disease, not a prerenal pattern.",
            3: "CKD does not permanently dilate the efferent arteriole.",
            4: "Urine concentration varies in CKD; it does not explain the lower threshold.",
        },
        info: "CKD patients often taking ACEi, ARBs, or diuretics is standard teaching rather than page content.",
    },
    {
        id: "pre-ras",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "A 70-year-old with bilateral renal artery stenosis starts ramipril, and creatinine rises sharply within a week. What explains this?",
        options: ["Glomerular pressure depended on angiotensin II constricting the efferent arteriole", "Ramipril injures the tubules directly", "Ramipril constricts the afferent arteriole", "Ramipril causes an allergic interstitial nephritis in every patient", "Ramipril blocks prostaglandin synthesis"],
        answer: 0,
        explanation: `<p><strong>Beyond a stenosis, pressure is low, and the glomerulus holds its filtration pressure by angiotensin II constricting the efferent arteriole.</strong> An ACEi removes that, so glomerular pressure and GFR fall.</p>
<p>The same happens with stenosis of a single working kidney. Creatinine rising after ACEi or ARBs is a clue to renal artery stenosis (8); the drug is stopped, and revascularization is considered in selected patients.</p>`,
        notes: {
            1: "ACEi act through hemodynamics here, not tubular toxicity.",
            2: "ACEi dilate the efferent arteriole; they do not constrict the afferent.",
            3: "AIN is uncommon and drug-specific; this is the expected hemodynamic effect.",
            4: "Blocking prostaglandins is the action of NSAIDs.",
        },
    },
    {
        id: "pre-hf-diuresis",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "In cardiorenal syndrome, why can careful diuresis improve renal function, although it removes fluid?",
        options: ["It relieves renal venous congestion, which also lowers renal perfusion", "It raises cardiac output by removing excess fluid from the circulating blood volume", "It increases renin release", "It concentrates the urine, raising GFR", "It removes urea, which was injuring the tubules"],
        answer: 0,
        explanation: `<p><strong>In HF, both low output and high venous pressure lower renal perfusion.</strong> High renal venous pressure reduces the pressure gradient across the kidney, so relieving congestion with careful diuresis can improve GFR.</p>
<p>Too much diuresis, however, removes the volume the heart depends on and causes prerenal AKI from overdiuresis, which is why it is cautious.</p>`,
        notes: {
            1: "Diuresis can improve output in some patients, but the page's reason is relief of venous congestion.",
            2: "More renin would worsen Na+ retention and vasoconstriction.",
            3: "Urine concentration does not raise GFR.",
            4: "Urea is not the cause of the injury in cardiorenal syndrome.",
        },
    },
    {
        id: "pre-to-atn",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "Why can a prerenal AKI that is left untreated for days stop responding to fluid?",
        options: ["Prolonged hypoperfusion injures tubular cells, turning it into ATN", "The kidney becomes resistant to ADH and aldosterone, so fluid given late is simply excreted", "Fluid given late is excreted before it reaches the kidney", "The renin system switches off", "Prolonged hypoperfusion causes glomerulonephritis"],
        answer: 0,
        explanation: `<p><strong>Tubular cells need a steady oxygen supply, and prolonged hypoperfusion kills them.</strong> Prerenal AKI then becomes ATN, an intrarenal injury that no longer reverses when perfusion returns, and recovery takes weeks.</p>
<p>The urine changes with it: FENa rises above 2%, the urine becomes dilute, and muddy brown casts appear. This is why prompt restoration of perfusion matters.</p>`,
        notes: {
            1: "ADH resistance is not the mechanism; the tubular cells are dead.",
            2: "Fluid reaches the kidney; the injured tubules can no longer respond.",
            3: "The renin system stays active; the tubules are what fail.",
            4: "Hypoperfusion injures tubules, not glomeruli.",
        },
    },
    {
        id: "pre-hrs-tx",
        condition: "prerenal-aki",
        kind: "reasoning",
        stem: "In hepatorenal syndrome, why are albumin and terlipressin given together?",
        options: ["Albumin refills the arteries, and terlipressin constricts the dilated splanchnic vessels", "Both drugs dilate the renal arteries directly", "Albumin binds bilirubin, and terlipressin increases urine output by diuresis", "They lower portal pressure by draining ascites", "They replace the clotting factors the liver no longer makes"],
        answer: 0,
        explanation: `<p><strong>Hepatorenal syndrome is driven by splanchnic vasodilation and arterial underfilling.</strong> Albumin expands the circulating volume, and terlipressin, a vasoconstrictor, constricts the splanchnic vessels, so more blood reaches the kidneys and they relax their own vasoconstriction.</p>
<p>Diuretics and nephrotoxins are stopped, and transplant referral is the definitive treatment.</p>`,
        notes: {
            1: "Neither dilates the renal arteries directly; they correct the underfilling that makes the kidneys constrict.",
            2: "Albumin is given for volume, and terlipressin is not a diuretic.",
            3: "Neither drains ascites.",
            4: "Neither replaces clotting factors.",
        },
    },

    /* --- Analysis --- */
    {
        id: "pre-set-contrast-1",
        condition: "prerenal-aki",
        kind: "analysis",
        set: "pre-contrast",
        passage: `<p>A 72-year-old man with stable chronic HF has coronary angiography with iodinated contrast for worsening angina. Over the next 2 days his urine output falls and his ankle edema worsens. His weight, blood pressure, and echocardiogram are unchanged from before the procedure.</p>
<table><thead><tr><th>Test</th><th>Before angiography</th><th>Day 2</th></tr></thead><tbody>
<tr><td>Creatinine</td><td>110 µmol/L</td><td>190 µmol/L</td></tr>
<tr><td>Urea</td><td>8 mmol/L</td><td>22 mmol/L</td></tr>
<tr><td>FENa</td><td>–</td><td>0.6%</td></tr>
<tr><td>Urine osmolality</td><td>–</td><td>560 mOsm/kg</td></tr>
<tr><td>Urinalysis</td><td>–</td><td>Bland</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>`,
        stem: "What best explains his AKI?",
        options: ["Contrast constricting the renal vessels", "Worsening cardiac output from his HF", "Atheroembolic disease from the catheter", "ATN from contrast toxic to the tubules, with a FENa that should be high", "Overdiuresis since the procedure"],
        answer: 0,
        explanation: `<p><strong>The AKI began only after contrast, while his heart function was unchanged, so the cause is the contrast constricting the afferent arteriole</strong> (6), lowering perfusion while the tubules still work.</p>
<ul>
<li><strong>UCR:</strong> 22 ÷ 0.19 is about 116, above 100.</li>
<li><strong>Working tubules:</strong> FENa 0.6%, osmolality 560 mOsm/kg, and bland urine.</li>
</ul>
<p>Contrast is also toxic to tubular cells, so this can progress to ATN, and FENa can be low in contrast-associated AKI even then, which is why the course matters too.</p>`,
        notes: {
            1: "His echocardiogram, weight, and blood pressure are unchanged, and the AKI followed the procedure.",
            2: "Atheroembolic disease appears days to weeks later, with livedo reticularis and eosinophilia.",
            3: "Contrast can cause ATN, but a low FENa does not exclude it; a low FENa is not a reason to choose ATN over vasoconstriction.",
            4: "His weight is unchanged, and there is no mention of extra diuretics.",
        },
    },
    {
        id: "pre-set-contrast-2",
        condition: "prerenal-aki",
        kind: "analysis",
        set: "pre-contrast",
        stem: "His creatinine returns to 115 µmol/L by day 10. Three weeks later it rises to 240 µmol/L, with mottled purple skin on his feet, painful blue toes, and an eosinophil count of 1.2 × 10⁹/L. What is the most likely cause now?",
        options: ["Atheroembolic disease", "A second episode of contrast vasoconstriction", "Hepatorenal syndrome", "Prerenal AKI from worsening HF", "Allergic reaction to the contrast"],
        answer: 0,
        explanation: `<p><strong>Livedo reticularis, blue toes, and eosinophilia weeks after angiography point to atheroembolic disease.</strong> The catheter dislodged cholesterol crystals from aortic plaque, which lodge in small renal arteries and in the toes.</p>
<p>It appears days to weeks after the procedure, with eosinophiluria and low complement, and biopsy shows cholesterol clefts. There is no specific treatment: statins, BP control, and avoiding further procedures. Its late timing separates it from contrast-associated AKI, which follows within 48–72 hours and recovers by about 2 weeks, as his did.</p>`,
        notes: {
            1: "He had no further contrast, and contrast-associated AKI follows within days, without skin changes.",
            2: "He does not have cirrhosis.",
            3: "HF does not explain livedo, blue toes, or eosinophilia.",
            4: "A contrast allergy causes an immediate reaction, not AKI with blue toes weeks later.",
        },
    },
    {
        id: "pre-set-vomit-1",
        condition: "prerenal-aki",
        kind: "analysis",
        set: "pre-vomit",
        passage: `<p>An 84-year-old woman who lives alone is found after 3 days of vomiting and poor intake. She takes perindopril and furosemide. She is drowsy, with dry mucosa, a pulse of 112, and blood pressure 92/60 mmHg lying and 74/48 mmHg sitting.</p>
<table><thead><tr><th>Test</th><th>Day 1</th></tr></thead><tbody>
<tr><td>Creatinine</td><td>260 µmol/L (baseline 90)</td></tr>
<tr><td>Urea</td><td>34 mmol/L</td></tr>
<tr><td>FENa</td><td>1.8%</td></tr>
<tr><td>FEUrea</td><td>24%</td></tr>
<tr><td>Urine osmolality</td><td>610 mOsm/kg</td></tr>
<tr><td>Urinalysis</td><td>Hyaline casts</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>`,
        stem: "How should her day 1 results be read?",
        options: ["Prerenal AKI; the FENa is raised by furosemide, and the FEUrea is low", "ATN, since the FENa is above 1%", "Postrenal AKI, since she is elderly", "Glomerulonephritis, since creatinine has nearly tripled", "No AKI, since the urine is concentrated"],
        answer: 0,
        explanation: `<p><strong>Everything points to prerenal AKI from fluid loss, made worse by perindopril and furosemide.</strong></p>
<ul>
<li><strong>FENa 1.8%:</strong> falsely high, because furosemide blocks Na+ reabsorption.</li>
<li><strong>FEUrea 24%:</strong> below 35%, so the tubules are holding on to urea.</li>
<li><strong>Osmolality 610 and hyaline casts:</strong> concentrated, bland urine from working tubules.</li>
<li><strong>UCR:</strong> 34 ÷ 0.26 is about 130, above 100.</li>
</ul>
<p>She needs isotonic fluid, and perindopril and furosemide are held until volume and creatinine recover.</p>`,
        notes: {
            1: "With diuretics FENa is unreliable; her FEUrea and concentrated urine show working tubules.",
            2: "Age alone does not suggest obstruction, and her history explains the AKI.",
            3: "Her urine is bland, with hyaline casts rather than RBC casts.",
            4: "Creatinine has nearly tripled from baseline, which is AKI.",
        },
    },
    {
        id: "pre-set-vomit-2",
        condition: "prerenal-aki",
        kind: "analysis",
        set: "pre-vomit",
        stem: "Because of a bed shortage, she receives little fluid for the first 2 days. On day 4, despite good blood pressure after fluid, her results are as follows: creatinine 410 µmol/L, urea 30 mmol/L, FEUrea 62%, urine osmolality 310 mOsm/kg, and muddy brown granular casts. What has happened?",
        options: ["Prolonged hypoperfusion has caused ATN", "She is still underfilled and needs more fluid", "The furosemide has worn off, unmasking a prerenal pattern", "She has developed hepatorenal syndrome", "Her perindopril was restarted too early"],
        answer: 0,
        explanation: `<p><strong>Prolonged hypoperfusion injured her tubular cells, turning prerenal AKI into ATN.</strong> The tubules can no longer hold urea or concentrate the urine:</p>
<ul>
<li><strong>FEUrea 62%:</strong> above 50%.</li>
<li><strong>Osmolality 310:</strong> dilute, below 450.</li>
<li><strong>Muddy brown casts:</strong> dying tubular cells.</li>
<li><strong>UCR:</strong> 30 ÷ 0.41 is about 73, now below 100.</li>
</ul>
<p>ATN no longer responds to fluid, and recovery takes weeks, which is why perfusion is restored promptly.</p>`,
        notes: {
            1: "Her blood pressure has recovered with fluid, and the urine shows tubular injury rather than underfilling.",
            2: "Without diuretics, a prerenal pattern would show a low FEUrea and concentrated urine; hers is the opposite.",
            3: "She does not have cirrhosis.",
            4: "Restarting an ACEi would lower GFR hemodynamically, but would not cause muddy brown casts.",
        },
    },
    {
        id: "pre-hrs-case",
        condition: "prerenal-aki",
        kind: "analysis",
        stem: `<p>A 56-year-old man with alcohol-related cirrhosis and tense ascites has 8 L of ascites drained, without albumin. Over 4 days his urine output falls. His diuretics are stopped and he is given albumin for 2 days, without improvement. He has no shock and takes no nephrotoxic drugs.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Creatinine</td><td>98 → 220 µmol/L</td></tr>
<tr><td>Urine Na+</td><td>8 mmol/L</td></tr>
<tr><td>FENa</td><td>0.2%</td></tr>
<tr><td>Urinalysis</td><td>Bland; no protein or blood</td></tr>
<tr><td>Renal ultrasound</td><td>Normal</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>
<p>What is the most likely diagnosis?</p>`,
        options: ["Hepatorenal syndrome", "Prerenal AKI from paracentesis that will respond to more albumin", "ATN from the procedure", "Obstruction from tense ascites", "Glomerulonephritis from hepatitis C"],
        answer: 0,
        explanation: `<p><strong>AKI in cirrhosis with ascites, with bland urine and a very low FENa, that does not respond to stopping diuretics and giving albumin is hepatorenal syndrome</strong> (5).</p>
<p>Large-volume paracentesis without albumin triggered it by further underfilling the arteries, and the kidneys responded by constricting their vessels intensely. Treatment adds a vasoconstrictor such as terlipressin to albumin, with transplant referral.</p>`,
        notes: {
            1: "Simple prerenal AKI would have responded to stopping diuretics and giving albumin.",
            2: "ATN would show muddy brown casts and a high FENa.",
            3: "His renal ultrasound is normal, with no hydronephrosis.",
            4: "His urine is bland, with no protein or blood.",
        },
    },

    /* ===== Intrarenal AKI ===== */

    /* --- Memory --- */
    {
        id: "intra-acyclovir",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "Which part of the kidney does acyclovir injure when it causes AKI?",
        options: ["The tubules, where its crystals block the lumen", "The interstitium, through an allergic reaction", "The glomerulus, through immune complexes", "The small vessels, through endothelial injury", "The collecting system, through stones in the ureter"],
        answer: 0,
        explanation: `<p><strong>Acyclovir is poorly soluble in urine, so it forms crystals that block the tubule lumen</strong> (compartment 3), with urate in TLS, indinavir, ethylene glycol, and myeloma light chains.</p>
<p>The page sorts intrarenal AKI by where the injury lies: small vessels (1), glomerulus (2), tubules (3), and interstitium (4). Crystal injury is prevented by keeping the patient well hydrated.</p>`,
        notes: {
            1: "Allergic interstitial injury is AIN, from drugs such as PPIs, penicillins, and NSAIDs.",
            2: "Immune complexes in the glomerulus cause glomerulonephritis, such as lupus nephritis or PSGN.",
            3: "Endothelial injury in small vessels is TMA.",
            4: "Ureteric stones cause postrenal AKI, not crystal injury inside the kidney.",
        },
        info: "Acyclovir's poor solubility and hydration as prevention are standard pharmacology rather than page content.",
    },
    {
        id: "intra-ppi",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "Omeprazole can cause AKI by injuring which part of the kidney?",
        options: ["Interstitium", "Tubule lumen", "Glomerulus", "Small vessels", "Collecting system"],
        answer: 0,
        explanation: `<p><strong>PPIs such as omeprazole cause AIN, an immune reaction that fills the interstitium with white cells</strong> (compartment 4).</p>
<p>The other common drug causes are diuretics, NSAIDs, penicillins and cephalosporins, rifampin, sulfonamides, and allopurinol. AIN usually follows a new drug by 1–2 weeks, and the urine shows white cell casts and sterile pyuria.</p>`,
        notes: {
            1: "Drugs that block the tubule lumen form crystals, such as acyclovir and indinavir.",
            2: "PPIs do not cause glomerular disease.",
            3: "Small vessel injury is TMA, cholesterol emboli, or malignant hypertension.",
            4: "The collecting system is involved in postrenal obstruction.",
        },
    },
    {
        id: "intra-tma",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "Which condition causes AKI through endothelial injury and clots in the kidney's small vessels?",
        options: ["Thrombotic microangiopathy", "Acute tubular necrosis", "Acute interstitial nephritis", "IgA nephropathy", "Minimal change disease"],
        answer: 0,
        explanation: `<p><strong>In thrombotic microangiopathy (HUS and TTP), injured endothelium triggers platelet clots in small vessels</strong> (compartment 1). Red cells are sheared as they pass, so anemia and low platelets accompany the AKI.</p>
<p>It is found with a blood film for schistocytes, platelets, and LDH, and treated with plasma exchange or complement blockade by type. Cholesterol emboli and malignant hypertension also injure the small vessels.</p>`,
        notes: {
            1: "ATN kills tubular cells, not vessels.",
            2: "AIN is an immune infiltrate in the interstitium.",
            3: "IgA nephropathy is a glomerular disease.",
            4: "Minimal change disease is a nephrotic glomerular disease without clots.",
        },
    },
    {
        id: "intra-glomerular",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "Which condition injures the glomerulus, letting blood and protein into the urine?",
        options: ["IgA nephropathy", "Acute tubular necrosis", "Acute interstitial nephritis", "Atheroembolic disease", "Rhabdomyolysis"],
        answer: 0,
        explanation: `<p><strong>IgA nephropathy is a glomerular disease</strong> (compartment 2): immune injury and inflammation lower filtration and let blood and protein through.</p>
<p>Glomerular disease shows hematuria, proteinuria, edema, and hypertension, with red cell casts and dysmorphic red cells. The glomerular causes are nephrotic (MCD, FSGS, MN, DKD, and amyloid) or nephritic (anti-GBM disease, ANCA vasculitis, Alport syndrome, IgA nephropathy, PSGN, MPGN, and lupus nephritis).</p>`,
        notes: {
            1: "ATN injures tubular cells, giving muddy brown casts rather than blood and protein.",
            2: "AIN injures the interstitium, giving white cell casts and sterile pyuria.",
            3: "Atheroembolic disease blocks small arteries with cholesterol crystals.",
            4: "Rhabdomyolysis injures the tubules with myoglobin.",
        },
    },
    {
        id: "intra-light-chains",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "A 74-year-old has AKI with no clear cause in the history or urine sediment. Which tests look for the tubular cause most easily missed?",
        options: ["SPEP and UPEP, with serum free light chains", "Complement, ANCA, anti-GBM, and ANA serology", "A blood film for schistocytes", "CK and urine myoglobin", "Renal ultrasound"],
        answer: 0,
        explanation: `<p><strong>Myeloma light chains block the tubules</strong> (compartment 3), and the sediment can look unremarkable, so SPEP, UPEP, and serum free light chains are checked in older patients with unexplained AKI.</p>
<p>Each compartment has its tests: the glomeruli complement, ANCA, anti-GBM, and ANA; the vessels a blood film, platelets, and LDH; and the tubules CK and myoglobin, urate and phosphate, and the light chain tests.</p>`,
        notes: {
            1: "These look for glomerular disease, which would usually show red cell casts or protein.",
            2: "A blood film looks for TMA, with anemia and low platelets.",
            3: "CK and myoglobin look for rhabdomyolysis, after muscle injury.",
            4: "Ultrasound looks for obstruction, a postrenal cause.",
        },
    },
    {
        id: "intra-muddy",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "Muddy brown granular casts on urine microscopy point to which compartment?",
        options: ["Tubules", "Glomerulus", "Interstitium", "Small vessels", "Renal artery"],
        answer: 0,
        explanation: `<p><strong>Muddy brown granular casts are made of dead tubular cells sloughed into the lumen, so they point to ATN</strong> (compartment 3), often with renal tubular epithelial cells. Early on the sediment can still be normal.</p>
<p>The sediment points to the compartment: red cell casts to the glomerulus, white cell casts to the interstitium, and often bland urine in vessel disease.</p>`,
        notes: {
            1: "Glomerular disease gives red cell casts and dysmorphic red cells.",
            2: "Interstitial disease gives white cell casts and sterile pyuria.",
            3: "Small vessel disease often leaves the sediment bland.",
            4: "Renal artery disease lowers perfusion, a prerenal pattern with bland urine.",
        },
    },
    {
        id: "intra-rhabdo-fluid",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "In rhabdomyolysis, early IV fluid aims for which urine output?",
        options: ["200–300 mL/h", "0.5 mL/kg/h", "50–100 mL/h", "500–600 mL/h", "As little as possible, to avoid overload"],
        answer: 0,
        explanation: `<p><strong>Large volumes of IV fluid, started early, aim for a urine output of 200–300 mL/h.</strong> The high flow dilutes myoglobin and washes it through before it forms casts that block the tubules.</p>
<p>The fluid has to start early, before myoglobin casts and heme toxicity have established ATN.</p>`,
        notes: {
            1: "0.5 mL/kg/h is the threshold that defines low urine output, not a target here.",
            2: "50–100 mL/h is too low to wash myoglobin through.",
            3: "500–600 mL/h is beyond the page's target.",
            4: "Restricting fluid would let myoglobin casts form.",
        },
        info: "The 0.5 mL/kg/h threshold comes from the KDIGO staging on AKI: Comparison and Workup.",
    },
    {
        id: "intra-common",
        condition: "intrarenal-aki",
        kind: "memory",
        stem: "Which intrarenal cause accounts for the largest share of hospital AKI?",
        options: ["Acute tubular necrosis", "Glomerulonephritis and vasculitis", "Acute interstitial nephritis", "Atheroembolic disease", "Thrombotic microangiopathy"],
        answer: 0,
        explanation: `<p><strong>ATN causes about 45% of hospital AKI,</strong> mostly from ischemia in shock and from nephrotoxins such as aminoglycosides, cisplatin, amphotericin B, vancomycin, and contrast.</p>
<p>The other intrarenal causes are far less common: glomerulonephritis and vasculitis about 4%, AIN about 2%, and atheroemboli about 1%.</p>`,
        notes: {
            1: "Glomerulonephritis and vasculitis cause about 4%.",
            2: "AIN causes about 2%.",
            3: "Atheroemboli cause about 1%.",
            4: "TMA is uncommon compared with ATN.",
        },
    },

    /* --- Reasoning --- */
    {
        id: "intra-fena",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "Why is FENa above 2% in ATN, but below 1% in prerenal AKI?",
        options: ["Injured tubular cells can no longer reabsorb Na+", "The glomerulus filters more Na+ in ATN", "Aldosterone is absent in ATN", "Diuretics are always given in ATN", "Prerenal AKI raises plasma Na+, lowering the fraction excreted"],
        answer: 0,
        explanation: `<p><strong>FENa measures how much filtered Na+ escapes into the urine. In ATN, the tubular cells that reabsorb it are dead,</strong> so more than 2% escapes and the urine is dilute, below 450 mOsm/kg.</p>
<p>In prerenal AKI the tubules are healthy and hold on to Na+. A low FENa therefore means working tubules, not necessarily prerenal AKI: glomerulonephritis, vasculitis, and contrast-associated AKI can also give a low FENa, because filtration falls while the tubules still work.</p>`,
        notes: {
            1: "GFR falls in ATN, so less Na+ is filtered, not more.",
            2: "Aldosterone is present; the tubules cannot respond to it.",
            3: "Diuretics raise FENa falsely, but ATN raises it without them.",
            4: "Plasma Na+ does not explain the difference; tubular function does.",
        },
    },
    {
        id: "intra-rhabdo-away",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "A 24-year-old has cola-colored urine and aching thighs the day after an intense weight-lifting session. Which finding points away from rhabdomyolysis?",
        options: ["Dysmorphic red cells and red cell casts on microscopy", "CK 30 times the upper limit", "A dipstick strongly positive for blood, with no red cells seen", "A high K+", "A low Ca2+"],
        answer: 0,
        explanation: `<p><strong>In rhabdomyolysis the dipstick is positive for blood with few red cells on microscopy,</strong> because the dipstick reacts to the heme in myoglobin. Dysmorphic red cells in casts mean blood is leaking through damaged glomeruli, which points to glomerular disease.</p>
<p>Injured muscle releases K+, phosphate, urate, CK, and myoglobin, and Ca2+ is low early as it deposits in damaged muscle. Myoglobin injures the tubules by constricting vessels (heme binds NO), by direct toxicity, and by forming casts, which form more readily in acidic urine.</p>`,
        notes: {
            1: "A CK above 5 times the upper limit fits rhabdomyolysis.",
            2: "A positive dipstick fits, since it detects the heme in myoglobin.",
            3: "Injured muscle releases K+, so hyperkalemia fits.",
            4: "Ca2+ is low early in rhabdomyolysis and high in recovery.",
        },
        info: "Ca2+ depositing in damaged muscle is standard teaching; the page gives low Ca2+ early and high Ca2+ in recovery.",
    },
    {
        id: "intra-dysmorphic",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "A patient with AKI has dysmorphic red cells on urine microscopy. Which tests should be ordered next?",
        options: ["Complement, ANCA, anti-GBM, and ANA", "CK and urine myoglobin", "SPEP, UPEP, and serum free light chains", "A blood film for schistocytes, platelets, and LDH", "Renal ultrasound for hydronephrosis"],
        answer: 0,
        explanation: `<p><strong>Dysmorphic red cells are distorted as they squeeze through damaged glomeruli, so they point to glomerular disease.</strong> The serology sorts the cause:</p>
<ul>
<li>Low complement in immune complex disease, such as PSGN, MPGN, and lupus nephritis.</li>
<li>ANCA in ANCA vasculitis, and anti-GBM in anti-GBM disease.</li>
<li>ANA in lupus.</li>
</ul>
<p>Biopsy usually follows to confirm the diagnosis.</p>`,
        notes: {
            1: "CK and myoglobin look for rhabdomyolysis, which gives few red cells.",
            2: "Light chain tests look for myeloma cast nephropathy in the tubules.",
            3: "A blood film looks for TMA in the small vessels.",
            4: "Ultrasound looks for obstruction; dysmorphic red cells come from the glomerulus.",
        },
    },
    {
        id: "intra-tls",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "Before chemotherapy for a bulky lymphoma, why is the patient given IV fluid from 48 hours beforehand, with allopurinol or rasburicase?",
        options: ["To keep urine flowing and lower uric acid, so urate crystals do not block the tubules", "To protect the glomeruli from immune complexes released by the tumor", "To prevent an allergic interstitial nephritis from the chemotherapy", "To keep blood pressure up during chemotherapy so that the kidneys stay well perfused throughout", "To bind the chemotherapy drug in the bowel"],
        answer: 0,
        explanation: `<p><strong>In tumor lysis syndrome, dying tumor cells release DNA that is broken down to uric acid, which crystallizes in the tubules and blocks them.</strong></p>
<ul>
<li><strong>IV fluid:</strong> keeps urine flowing and dilute, so crystals do not form.</li>
<li><strong>Allopurinol:</strong> blocks xanthine oxidase, so less uric acid is made.</li>
<li><strong>Rasburicase:</strong> breaks down uric acid that is already present.</li>
</ul>`,
        notes: {
            1: "TLS injures the tubules with crystals, not the glomeruli.",
            2: "Allergic AIN is a drug reaction; allopurinol can even cause it.",
            3: "Perfusion matters, but the specific danger is urate crystals.",
            4: "None of these bind chemotherapy in the bowel.",
        },
        info: "How allopurinol and rasburicase work is standard pharmacology rather than page content.",
    },
    {
        id: "intra-perfusion",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "Why does restoring blood pressure and volume not reverse intrarenal AKI, as it does prerenal AKI?",
        options: ["The kidney itself is damaged, and injured tubules release vasoconstrictors", "Fluid given in intrarenal AKI leaks into the tissues instead of reaching the kidney", "The kidney stops making renin in intrarenal AKI", "Intrarenal AKI always involves a blocked ureter", "The glomeruli are too small to accept more blood"],
        answer: 0,
        explanation: `<p><strong>In intrarenal AKI the injury is in the kidney itself, in its vessels, glomeruli, tubules, or interstitium,</strong> so better perfusion does not repair it. Injured tubules also release vasoconstrictors that lower GFR further.</p>
<p>That is why recovery in ATN takes weeks to months, with support and dialysis if needed, while prerenal AKI recovers within 24–72 hours of restoring volume.</p>`,
        notes: {
            1: "Fluid reaches the kidney; the kidney cannot respond.",
            2: "Renin is still made; the problem is structural injury.",
            3: "A blocked ureter is postrenal AKI.",
            4: "Glomerular size is not the issue.",
        },
    },
    {
        id: "intra-ain-polyuria",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "Why can a patient with AIN pass more urine than usual, despite AKI?",
        options: ["Interstitial inflammation disrupts the medulla's ability to concentrate urine", "The drug causing AIN is always a diuretic, which keeps acting after the kidney is injured", "AIN raises GFR", "The infiltrating white cells secrete water", "AIN blocks ADH release from the pituitary"],
        answer: 0,
        explanation: `<p><strong>The interstitium of the medulla holds the concentration gradient that lets the collecting duct reabsorb water.</strong> When it fills with white cells, the gradient fails, so urine stays dilute and its volume can increase: a concentrating defect.</p>
<p>So AIN can present with polyuria rather than oliguria, along with a new drug 1–2 weeks before. Fever, rash, and eosinophilia occur in only about 10%.</p>`,
        notes: {
            1: "Diuretics are one cause of AIN, but the polyuria comes from the concentrating defect.",
            2: "GFR falls in AIN.",
            3: "White cells do not secrete water.",
            4: "ADH is released normally; the kidney cannot respond to it.",
        },
        info: "The medullary gradient as the reason for the concentrating defect is standard physiology; the page names the concentrating defect.",
    },
    {
        id: "intra-rhabdo-early",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "Why are large volumes of IV fluid started early in rhabdomyolysis?",
        options: ["To dilute myoglobin and wash it through before it forms casts in the tubules", "To lower CK by dilution so that muscle stops breaking down", "To replace the albumin lost in the urine", "To correct a low K+", "To prevent glomerular immune complexes"],
        answer: 0,
        explanation: `<p><strong>Myoglobin injures the tubules by forming casts that block them, by direct heme toxicity, and by constricting vessels.</strong> A high urine flow dilutes it and washes it through before casts form, which they do more readily in acidic urine.</p>
<p>Once casts and tubular cell death are established, fluid no longer reverses the injury, so it is started as early as possible.</p>`,
        notes: {
            1: "CK is a marker of muscle injury; diluting it does not stop the breakdown.",
            2: "Rhabdomyolysis releases myoglobin, not albumin.",
            3: "K+ is high in rhabdomyolysis, not low.",
            4: "Rhabdomyolysis injures the tubules, not the glomeruli.",
        },
    },
    {
        id: "intra-contrast",
        condition: "intrarenal-aki",
        kind: "reasoning",
        stem: "Why can contrast-associated AKI show a low FENa, although contrast is a tubular toxin?",
        options: ["Contrast also constricts renal vessels, lowering filtration while many tubules still work", "Contrast blocks the collecting duct", "Contrast stimulates aldosterone release, so the collecting duct holds on to more of the filtered Na+", "Contrast is reabsorbed with Na+", "Contrast causes an allergic interstitial nephritis"],
        answer: 0,
        explanation: `<p><strong>Iodinated contrast acts in two ways: it constricts renal vessels and is toxic to tubular cells.</strong> The vasoconstriction lowers filtration while many tubules still reabsorb Na+, so FENa can be low.</p>
<p>Risk is highest in CKD, DM, HF, volume depletion, and with large contrast volumes. It is prevented with hydration, the lowest dose, and avoiding repeat exposure.</p>`,
        notes: {
            1: "Contrast does not block the collecting duct.",
            2: "Aldosterone is not the mechanism.",
            3: "Contrast is filtered and excreted, not reabsorbed with Na+.",
            4: "Contrast-associated AKI is a vascular and tubular injury, not AIN.",
        },
    },

    /* --- Analysis --- */
    {
        id: "intra-ain-case",
        condition: "intrarenal-aki",
        kind: "analysis",
        stem: `<p>A 63-year-old woman has 4 days of fatigue, a faint rash on her trunk, and passing more urine than usual. Her creatinine has risen from 80 to 230 µmol/L. Her blood pressure is normal, and she has no edema.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Urine microscopy</td><td>White cell casts; white cells with a negative culture</td></tr>
<tr><td>Urine protein</td><td>Trace</td></tr>
<tr><td>Urine red cells</td><td>Few, normal shape</td></tr>
<tr><td>Eosinophils</td><td>Normal</td></tr>
<tr><td>CK</td><td>Normal</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>
<p>Which additional finding would most support AIN?</p>`,
        options: ["Omeprazole started 10 days ago", "Eosinophils seen in the urine", "A recent sore throat", "Coronary angiography 2 days ago", "A low complement level"],
        answer: 0,
        explanation: `<p><strong>AIN usually follows a new drug by 1–2 weeks,</strong> and PPIs are among the commonest causes. Her white cell casts, sterile pyuria, and polyuria from a concentrating defect fit the interstitium (compartment 4).</p>
<p>Fever, rash, and eosinophilia occur together in only about 10%, so their absence does not exclude it. Treatment is stopping the drug, with corticosteroids if there is no improvement within 3–7 days.</p>`,
        notes: {
            1: "Eosinophiluria is unreliable in AIN, and it also occurs in atheroemboli.",
            2: "A sore throat 1–3 weeks before points to PSGN, a glomerular disease with red cell casts.",
            3: "Contrast causes contrast-associated AKI, with muddy brown casts rather than white cell casts.",
            4: "Low complement points to immune complex glomerular disease or atheroemboli.",
        },
    },
    {
        id: "intra-set-sort-1",
        condition: "intrarenal-aki",
        kind: "analysis",
        set: "intra-sort",
        passage: `<p>Three patients on a ward develop AKI in the same week.</p>
<table><thead><tr><th>Patient</th><th>History</th><th>Urine microscopy</th><th>FENa</th></tr></thead><tbody>
<tr><td>A, 70</td><td>Septic shock 3 days ago, on noradrenaline for 36 hours</td><td>Muddy brown granular casts and tubular cells</td><td>3.4%</td></tr>
<tr><td>B, 58</td><td>Started on flucloxacillin for cellulitis 12 days ago</td><td>White cell casts; sterile pyuria</td><td>2.1%</td></tr>
<tr><td>C, 34</td><td>Coughing up blood for 2 days; new hypertension</td><td>Dysmorphic red cells and red cell casts; protein</td><td>0.8%</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>`,
        stem: "Which compartment is injured in each patient?",
        options: ["A tubules, B interstitium, C glomeruli", "A interstitium, B tubules, C glomeruli", "A tubules, B glomeruli, C interstitium", "A small vessels, B interstitium, C tubules", "A glomeruli, B tubules, C small vessels"],
        answer: 0,
        explanation: `<p><strong>The sediment points to the compartment:</strong></p>
<ul>
<li><strong>A:</strong> muddy brown casts after shock is ischemic ATN, in the tubules.</li>
<li><strong>B:</strong> white cell casts and sterile pyuria after a penicillin is AIN, in the interstitium.</li>
<li><strong>C:</strong> dysmorphic red cells, red cell casts, and protein are glomerular, here with hemoptysis.</li>
</ul>
<p>C's FENa is low because filtration falls while the tubules still work, which is why a low FENa does not always mean prerenal AKI.</p>`,
        notes: {
            1: "Muddy brown casts mean tubular injury, and white cell casts mean interstitial injury, not the reverse.",
            2: "White cell casts point to the interstitium, and red cell casts to the glomeruli.",
            3: "Vessel disease leaves the urine often bland, and red cell casts are glomerular.",
            4: "Muddy brown casts are tubular, not glomerular.",
        },
    },
    {
        id: "intra-set-sort-2",
        condition: "intrarenal-aki",
        kind: "analysis",
        set: "intra-sort",
        stem: "What is the most urgent next step for patient C?",
        options: ["Anti-GBM and ANCA testing, with urgent referral for biopsy and immunosuppression", "Stop her medicines and wait 3–7 days", "Large volumes of IV fluid aiming for 200–300 mL/h", "SPEP and serum free light chains", "Repeat urinalysis in a week"],
        answer: 0,
        explanation: `<p><strong>Hemoptysis with a glomerular sediment and rising creatinine suggests a pulmonary-renal syndrome, such as anti-GBM disease or ANCA vasculitis,</strong> which can destroy the kidneys and lungs within days.</p>
<p>Anti-GBM and ANCA testing, with complement and ANA, are sent at once, and biopsy and immunosuppression follow quickly. Biopsy is reserved for unexplained or rapidly progressive AKI, and she has both.</p>`,
        notes: {
            1: "Stopping the drug and waiting suits AIN, as in patient B.",
            2: "High-volume fluid is for rhabdomyolysis.",
            3: "Light chain tests look for myeloma, which does not cause red cell casts or hemoptysis.",
            4: "Waiting risks permanent loss of kidney function in rapidly progressive disease.",
        },
        info: "Pulmonary-renal syndrome is covered on the glomerular disease pages; this page lists hemoptysis as a glomerular clue.",
    },
    {
        id: "intra-tma-case",
        condition: "intrarenal-aki",
        kind: "analysis",
        stem: `<p>A 29-year-old woman has 3 days of headache, confusion, and passing less urine. She has bruises on her legs.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>74 g/L</td></tr>
<tr><td>Platelets</td><td>18 × 10⁹/L</td></tr>
<tr><td>Blood film</td><td>Many schistocytes</td></tr>
<tr><td>LDH</td><td>1850 U/L (high)</td></tr>
<tr><td>Creatinine</td><td>190 µmol/L</td></tr>
<tr><td>Urine microscopy</td><td>A few red cells; no casts</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>
<p>Which compartment is injured, and how is it treated?</p>`,
        options: ["Small vessels; plasma exchange or complement blockade by type", "Glomeruli; corticosteroids and cyclophosphamide", "Tubules; large volumes of IV fluid", "Interstitium; stop the drug, then corticosteroids", "Small vessels; platelet transfusion to stop the bleeding"],
        answer: 0,
        explanation: `<p><strong>Anemia with schistocytes, low platelets, high LDH, and AKI is thrombotic microangiopathy,</strong> an injury to the small vessels (compartment 1). Endothelial injury triggers platelet clots, which shear red cells, and the urine is often fairly bland.</p>
<p>With confusion and very low platelets, TTP is likely, treated with plasma exchange; complement-mediated HUS is treated with complement blockade. The Thrombotic Microangiopathy page covers telling the types apart.</p>`,
        notes: {
            1: "Glomerulonephritis gives red cell casts and protein, without schistocytes and very low platelets.",
            2: "ATN does not cause hemolysis or low platelets.",
            3: "AIN gives white cell casts after a drug, without hemolysis.",
            4: "The platelets are being consumed in clots; the treatment is plasma exchange or complement blockade.",
        },
        info: "Platelet transfusion being avoided in TTP is standard teaching on the Thrombotic Microangiopathy page.",
    },

    /* ===== Postrenal AKI ===== */

    /* --- Memory --- */
    {
        id: "post-bph",
        condition: "postrenal-aki",
        kind: "memory",
        stem: "What is the most common cause of postrenal AKI in older men?",
        options: ["Benign prostatic hyperplasia", "Kidney stones", "Retroperitoneal fibrosis", "Bladder cancer with clot retention", "Urethral stricture"],
        answer: 0,
        explanation: `<p><strong>BPH is the most common cause of postrenal AKI in older men.</strong> The enlarged prostate narrows the urethra below the bladder (cause 1), so both kidneys back up at once.</p>
<p>It presents with difficulty starting to void, a weak stream, and retention with a distended bladder. A urethral catheter that drains a large volume is diagnostic and therapeutic, with a Coudé tip when the prostate is large.</p>`,
        notes: {
            1: "Stones are the most common cause in younger patients.",
            2: "Retroperitoneal fibrosis is a less common cause that encases both ureters.",
            3: "Bladder tumors and clots cause obstruction, but less often than BPH.",
            4: "Urethral stricture is a less common cause below the bladder.",
        },
    },
    {
        id: "post-stones",
        condition: "postrenal-aki",
        kind: "memory",
        stem: "What is the most common cause of postrenal AKI in younger patients?",
        options: ["Kidney stones", "Benign prostatic hyperplasia", "Pelvic cancers", "Neurogenic bladder", "Retroperitoneal fibrosis"],
        answer: 0,
        explanation: `<p><strong>Stones are the most common cause of postrenal AKI in younger patients</strong> (cause 3). They cause AKI only when both ureters, or the ureter of a single working kidney, are blocked.</p>
<p>They typically cause flank pain. Struvite and cystine stones grow fast, and an infected, obstructed kidney needs urgent drainage.</p>`,
        notes: {
            1: "BPH is the most common cause in older men.",
            2: "Pelvic masses and cancers are the most common cause in older women.",
            3: "Neurogenic bladder is a cause at any age, but less common than stones in the young.",
            4: "Retroperitoneal fibrosis is an uncommon cause, usually in older patients.",
        },
    },
    {
        id: "post-women",
        condition: "postrenal-aki",
        kind: "memory",
        stem: "What is the most common cause of postrenal AKI in older women?",
        options: ["Pelvic masses and cancers", "Kidney stones", "Posterior urethral valves", "Phimosis", "Benign prostatic hyperplasia"],
        answer: 0,
        explanation: `<p><strong>Pelvic masses and cancers are the most common cause in older women</strong> (cause 4). They compress both ureters, often slowly, so the obstruction can be painless until the kidneys fail.</p>
<p>Retroperitoneal fibrosis and lymph nodes block the ureters in the same way, and pelvic organ prolapse can obstruct the bladder outlet.</p>`,
        notes: {
            1: "Stones are the most common cause in younger patients.",
            2: "Posterior urethral valves obstruct the urethra in boys.",
            3: "Phimosis is a cause below the bladder in men.",
            4: "BPH affects men.",
        },
    },
    {
        id: "post-ultrasound",
        condition: "postrenal-aki",
        kind: "memory",
        stem: "Which imaging test is used first to look for hydronephrosis and hydroureter?",
        options: ["Kidney ultrasound", "CT of the abdomen and pelvis", "Plain abdominal x-ray", "MRI of the pelvis", "Renal angiography"],
        answer: 0,
        explanation: `<p><strong>Kidney ultrasound shows hydronephrosis and hydroureter</strong> without radiation or contrast, so it is the first test once a bladder scan and catheter have dealt with the bladder outlet.</p>
<p>CT follows to find the cause, such as a stone or mass. Because obstruction is reversible, it is looked for early in every unexplained AKI.</p>`,
        notes: {
            1: "CT finds stones and masses, but ultrasound comes first to show the dilation.",
            2: "A plain x-ray shows some stones but not hydronephrosis.",
            3: "MRI is not the first test for hydronephrosis.",
            4: "Angiography looks at the renal arteries, not the urinary tract.",
        },
    },
    {
        id: "post-pod",
        condition: "postrenal-aki",
        kind: "memory",
        stem: "Which complication follows the relief of urinary obstruction in up to 50% of patients?",
        options: ["Post-obstructive diuresis", "Hyperkalemia", "Acute interstitial nephritis", "Bladder rupture", "Hepatorenal syndrome"],
        answer: 0,
        explanation: `<p><strong>Post-obstructive diuresis follows relief in up to 50%:</strong> urine output of 200 mL/h or more for 2 hours, or over 3 L in 24 hours.</p>
<p>It can cause hypovolemia and losses of Na+, K+, phosphate, and Mg2+, so these are checked every 12–24 hours. Risk is highest when 1500 mL or more drains at once.</p>`,
        notes: {
            1: "K+ is lost in the diuresis, so hypokalemia, not hyperkalemia, follows relief.",
            2: "AIN is a drug reaction, not a consequence of relieving obstruction.",
            3: "Draining the bladder relieves pressure; it does not cause rupture.",
            4: "Hepatorenal syndrome is a complication of cirrhosis.",
        },
    },
    {
        id: "post-coude",
        condition: "postrenal-aki",
        kind: "memory",
        stem: "An older man with a large prostate is in urinary retention, and a standard urethral catheter will not pass. What is tried next?",
        options: ["A Coudé-tip catheter, then a suprapubic catheter if it fails", "A ureteral stent", "A percutaneous nephrostomy", "Start tamsulosin, then review the retention again in a week", "Furosemide to increase urine flow"],
        answer: 0,
        explanation: `<p><strong>A Coudé catheter has a curved tip that rides over a large prostate.</strong> If no urethral catheter can pass, a suprapubic catheter drains the bladder through the abdominal wall.</p>
<p>The obstruction is relieved at its level: below the bladder with a catheter, and in the ureters with a stent or nephrostomy. BPH treatment, from drugs to TURP, follows.</p>`,
        notes: {
            1: "A ureteral stent relieves obstruction of the ureter, not the bladder outlet.",
            2: "A nephrostomy drains the kidney when the ureter is blocked.",
            3: "BPH drugs come later; retention needs drainage now.",
            4: "A diuretic adds urine to a bladder that cannot empty.",
        },
        info: "The curved tip of the Coudé catheter is standard teaching; the page recommends it when the prostate is large.",
    },

    /* --- Reasoning --- */
    {
        id: "post-unilateral",
        condition: "postrenal-aki",
        kind: "reasoning",
        stem: "A CT done for another reason shows retroperitoneal fibrosis narrowing the left ureter, with left hydronephrosis. She has no pain, and her urine output and creatinine are normal. Why is her creatinine normal?",
        options: ["The right kidney compensates for the blocked left kidney", "Fibrosis lowers the pressure in the left Bowman space", "Creatinine rises only once the bladder outlet itself is obstructed", "The left kidney filters more to overcome the blockage", "Hydronephrosis does not affect filtration"],
        answer: 0,
        explanation: `<p><strong>Obstruction causes AKI only when both kidneys, or a single working kidney, are blocked.</strong> With one ureter narrowed gradually, the other kidney compensates, so creatinine and urine output stay normal.</p>
<p>The blockage is painless because it developed slowly; stones cause flank pain because they block suddenly. The left kidney is still at risk: obstruction that lasts causes tubular atrophy and interstitial fibrosis.</p>`,
        notes: {
            1: "Obstruction raises Bowman space pressure; it does not lower it.",
            2: "Both ureters, or one ureter of a single kidney, can cause AKI without bladder involvement.",
            3: "The obstructed kidney filters less, not more.",
            4: "Hydronephrosis does lower filtration in that kidney; the other kidney makes up for it.",
        },
    },
    {
        id: "post-bowman",
        condition: "postrenal-aki",
        kind: "reasoning",
        stem: "A man with a neurogenic bladder develops retention and AKI. Which Starling force across the glomerulus changes first, and how?",
        options: ["Bowman space hydrostatic pressure increases", "Glomerular capillary hydrostatic pressure falls", "Glomerular capillary oncotic pressure increases", "Bowman space oncotic pressure increases", "Glomerular capillary hydrostatic pressure increases"],
        answer: 0,
        explanation: `<p><strong>Urine that cannot drain raises the pressure up the urinary tract into the tubules and Bowman space.</strong> Bowman space hydrostatic pressure opposes filtration, so within hours it narrows the net filtration pressure and GFR falls.</p>
<p>Later, renal vasoconstriction, inflammation, tubular atrophy, and interstitial fibrosis add to the injury, which is why obstruction is relieved early.</p>`,
        notes: {
            1: "Glomerular capillary pressure falls later with renal vasoconstriction, not first.",
            2: "Capillary oncotic pressure is not what obstruction changes first.",
            3: "Bowman space has almost no protein, so its oncotic pressure stays near zero.",
            4: "An increase would raise GFR, the opposite of what happens.",
        },
    },
    {
        id: "post-infected",
        condition: "postrenal-aki",
        kind: "reasoning",
        stem: "A febrile patient has a stone blocking the ureter of her only working kidney, with hydronephrosis and pus cells in the urine. Why is a ureteral stent or nephrostomy needed urgently, rather than antibiotics alone?",
        options: ["Infected urine cannot drain, so antibiotics alone fail", "Antibiotics cannot be given until the stone is removed", "The stent sterilizes the urine directly", "Nephrostomy is needed to measure GFR", "Antibiotics would dissolve the stone too slowly to protect the kidney"],
        answer: 0,
        explanation: `<p><strong>An infected, obstructed kidney is a closed space full of infected urine,</strong> so antibiotics alone fail and sepsis can follow quickly. A ureteral stent or percutaneous nephrostomy drains it, urgently when it is infected.</p>
<p>Antibiotics and a urine culture accompany drainage, and the stone is treated once the infection settles.</p>`,
        notes: {
            1: "Antibiotics are given at once; they simply are not enough without drainage.",
            2: "The stent drains the urine; it does not sterilize it.",
            3: "Nephrostomy is for drainage, not measurement.",
            4: "Antibiotics do not dissolve stones; the point is drainage of infected urine.",
        },
    },
    {
        id: "post-partial",
        condition: "postrenal-aki",
        kind: "reasoning",
        stem: "A man reports days of passing almost no urine alternating with days of passing large volumes. What does this pattern suggest?",
        options: ["A partial obstruction", "A complete obstruction", "Prerenal AKI from fluid loss", "ATN in its diuretic phase", "A concentrating defect from AIN"],
        answer: 0,
        explanation: `<p><strong>Alternating polyuria and low output suggest a partial obstruction:</strong> urine backs up while flow is blocked, then passes in large volumes when it gives way. Damaged tubules also concentrate poorly, adding to the volume.</p>
<p>Sudden anuria, by contrast, suggests a complete obstruction. Both call for a bladder scan, catheter, and kidney ultrasound.</p>`,
        notes: {
            1: "A complete obstruction causes sudden anuria, without the large-volume days.",
            2: "Prerenal AKI causes low output of concentrated urine, without polyuric days.",
            3: "The diuretic phase of ATN follows oliguria once, without alternating back.",
            4: "AIN can cause polyuria, but not alternating anuria.",
        },
    },
    {
        id: "post-replace",
        condition: "postrenal-aki",
        kind: "reasoning",
        stem: "In post-obstructive diuresis, why are fluid losses replaced with care rather than matched mL for mL?",
        options: ["Giving all the output back can keep the diuresis going", "IV fluid is unsafe in AKI", "The kidneys reabsorb all the lost fluid within hours", "Replacing fluid raises the pressure in the bladder and makes the obstruction recur", "Matching output causes hyperkalemia"],
        answer: 0,
        explanation: `<p><strong>Part of the diuresis is a physiological clearance of fluid retained during the obstruction.</strong> Replacing every mL keeps the patient overloaded, so the kidneys keep excreting, and the fluid itself drives the diuresis.</p>
<p>Losses are replaced with care, with Na+, K+, phosphate, Mg2+, urea, and creatinine checked every 12–24 hours, to avoid hypovolemia without prolonging the diuresis.</p>`,
        notes: {
            1: "IV fluid is often needed; the point is how much.",
            2: "The kidneys excrete fluid in this phase; they do not hold on to it.",
            3: "Fluid does not cause the obstruction to recur.",
            4: "The diuresis loses K+, so hypokalemia is the risk.",
        },
        info: "Retained fluid as the physiological part of the diuresis comes from the StatPearls chapter on postobstructive diuresis.",
    },
    {
        id: "post-early",
        condition: "postrenal-aki",
        kind: "reasoning",
        stem: "Why is obstruction looked for early in every unexplained AKI?",
        options: ["It reverses if relieved early, but scars the kidney if it lasts", "It is the most common cause of AKI in hospital", "It always causes severe pain", "It cannot be found by ultrasound once it has been present for more than a few days", "It causes hyperkalemia within minutes"],
        answer: 0,
        explanation: `<p><strong>Obstruction is the cause of AKI most easily reversed,</strong> but if it lasts, renal vasoconstriction, inflammation, tubular atrophy, and interstitial fibrosis follow.</p>
<p>Over weeks to months it leads to bladder atony, chronic interstitial nephritis, secondary FSGS, and ESRD. So a bladder scan and catheter, then ultrasound, come early in the workup.</p>`,
        notes: {
            1: "Prerenal AKI and ATN are far more common in hospital.",
            2: "Slow obstruction is often painless, as with fibrosis or tumor.",
            3: "Ultrasound shows hydronephrosis whether the obstruction is new or old.",
            4: "Hyperkalemia is a complication of AKI, not the reason to look early.",
        },
    },

    /* --- Analysis --- */
    {
        id: "post-psa",
        condition: "postrenal-aki",
        kind: "analysis",
        stem: `<p>A 72-year-old man has 2 months of difficulty starting to void, a weak stream, and 6 kg of unintended weight loss. He is passing urine, and his bladder is not palpable. Digital rectal examination finds a hard, nodular prostate.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Urinalysis</td><td>Blood 2+; red cells of normal shape</td></tr>
<tr><td>Creatinine</td><td>92 µmol/L (normal)</td></tr>
<tr><td>Post-void residual on bladder scan</td><td>80 mL</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>
<p>What is the next best step?</p>`,
        options: ["PSA", "Urgent suprapubic catheter", "Ureteral stents", "Start tamsulosin and review in 3 months", "Complement and ANCA"],
        answer: 0,
        explanation: `<p><strong>A hard, nodular prostate with weight loss and hematuria raises concern for prostate cancer, so PSA is checked.</strong></p>
<ul>
<li><strong>No obstruction now:</strong> he is voiding, his residual is small, and his creatinine is normal, so he needs no drainage.</li>
<li><strong>Not glomerular:</strong> the red cells are of normal shape.</li>
</ul>
<p>Prostate cancer is one of the causes below the bladder (cause 1), with BPH, urethral stricture, and phimosis.</p>`,
        notes: {
            1: "He is voiding with a small residual, so he does not need drainage.",
            2: "His ureters are not obstructed; the concern is the prostate.",
            3: "Treating as BPH would delay assessment of a possible cancer.",
            4: "Normal-shaped red cells and normal creatinine do not suggest glomerulonephritis.",
        },
        info: "Some pathways now use prostate MRI before biopsy; the page's next step is PSA.",
    },
    {
        id: "post-set-retention-1",
        condition: "postrenal-aki",
        kind: "analysis",
        set: "post-retention",
        passage: `<p>An 80-year-old man with BPH has not passed urine for 18 hours and has a tender, distended bladder. A Coudé catheter drains 1800 mL. Over the next 12 hours his urine keeps flowing, and his blood pressure falls from 150/85 to 112/70 mmHg.</p>
<table><thead><tr><th>Test</th><th>Admission</th><th>12 hours after the catheter</th></tr></thead><tbody>
<tr><td>Urine output</td><td>–</td><td>380 mL/h</td></tr>
<tr><td>Creatinine</td><td>410 µmol/L</td><td>260 µmol/L</td></tr>
<tr><td>K+</td><td>5.8 mmol/L</td><td>3.1 mmol/L</td></tr>
<tr><td>Mg2+</td><td>0.9 mmol/L</td><td>0.55 mmol/L</td></tr>
<tr><td>Phosphate</td><td>1.8 mmol/L</td><td>0.6 mmol/L</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>`,
        stem: "What best explains his course after the catheter?",
        options: ["Post-obstructive diuresis, with electrolyte losses", "Prerenal AKI from fluid loss before admission", "ATN entering its oliguric phase", "Bladder rupture from the catheter", "Hepatorenal syndrome"],
        answer: 0,
        explanation: `<p><strong>Over 200 mL/h after relief is post-obstructive diuresis,</strong> and the risk was highest because 1500 mL or more drained at once.</p>
<ul>
<li><strong>Creatinine falling:</strong> the obstruction has been relieved.</li>
<li><strong>K+, Mg2+, and phosphate falling:</strong> damaged tubules lose them in the large urine volume.</li>
<li><strong>Blood pressure falling:</strong> early hypovolemia from the losses.</li>
</ul>`,
        notes: {
            1: "His creatinine is falling with high urine output, which is recovery from obstruction, not prerenal AKI.",
            2: "His output is high, the opposite of an oliguric phase.",
            3: "The catheter drains well and output is high; rupture would stop drainage and cause pain.",
            4: "He does not have cirrhosis.",
        },
    },
    {
        id: "post-set-retention-2",
        condition: "postrenal-aki",
        kind: "analysis",
        set: "post-retention",
        stem: "Which plan is most appropriate now?",
        options: ["Replace losses with care, replace K+, Mg2+, and phosphate, and check electrolytes every 12–24 hours", "Give IV fluid matching every mL of urine output hour by hour", "Clamp the catheter to slow the diuresis", "Furosemide to protect the kidneys", "Stop all IV fluid and let him drink to thirst"],
        answer: 0,
        explanation: `<p><strong>Post-obstructive diuresis is managed by replacing losses with care and monitoring closely:</strong> Na+, K+, phosphate, Mg2+, urea, and creatinine every 12–24 hours.</p>
<p>His falling blood pressure means he needs some fluid, but matching every mL would keep the diuresis going, because part of it is the excretion of fluid retained during the obstruction.</p>`,
        notes: {
            1: "Matching every mL can drive the diuresis itself.",
            2: "Clamping the catheter would recreate the obstruction.",
            3: "A diuretic would add to the losses.",
            4: "He is becoming hypovolemic with falling electrolytes; he needs monitored replacement.",
        },
    },

    /* ===== AKI: Comparison and Workup ===== */

    /* --- Memory --- */
    {
        id: "akiw-stec",
        condition: "aki-workup",
        kind: "memory",
        stem: "In STEC-HUS, how long after the diarrhea starts does creatinine usually begin to rise?",
        options: ["5–13 days", "Within 24 hours", "48–72 hours", "3–4 weeks", "Over 3 months"],
        answer: 0,
        explanation: `<p><strong>Creatinine rises 5–13 days after the diarrhea starts in STEC-HUS.</strong> Shiga toxin is absorbed from the colon and injures the endothelium of the glomerular capillaries, and the clots that follow take days to cut filtration enough to show on bloods.</p>
<p>By then the diarrhea has often settled, so the history has to be asked for. About half of patients need dialysis.</p>`,
        notes: {
            1: "Within 24 hours is too soon; the toxin takes days to injure the glomerular endothelium.",
            2: "48–72 hours is when contrast-associated AKI starts to rise.",
            3: "3–4 weeks is too late; most cases of HUS have declared themselves within 2 weeks.",
            4: "Over 3 months defines CKD, not the onset of HUS.",
        },
    },
    {
        id: "akiw-diuretic-phase",
        condition: "aki-workup",
        kind: "memory",
        stem: "In which phase of ATN are hypovolemia and hypokalemia most likely?",
        options: ["The diuretic (polyuric) phase", "The initiation phase", "The extension phase", "The oliguric (maintenance) phase", "Recovery, once creatinine is stable"],
        answer: 0,
        explanation: `<p><strong>In the diuretic phase, GFR returns before the tubules can concentrate urine,</strong> so large volumes of Na+, K+, Mg2+, and water are lost.</p>
<p>That makes it the phase for hypovolemia and hypokalemia, and why fluid balance and electrolytes are watched closely as urine output rises. The oliguric phase carries the opposite risks: overload, hyperkalemia, and acidosis.</p>`,
        notes: {
            1: "In initiation, GFR is only starting to fall, and urine output is not yet high.",
            2: "In extension, injury is still spreading and urine output is falling, not high.",
            3: "The oliguric phase brings overload and hyperkalemia, not hypovolemia and hypokalemia.",
            4: "In recovery, the tubules concentrate urine again, so losses are no longer large.",
        },
    },
    {
        id: "akiw-polyuria",
        condition: "aki-workup",
        kind: "memory",
        stem: "Which cause of AKI often presents with polyuria rather than oliguria?",
        options: ["Acute interstitial nephritis", "Prerenal AKI from vomiting", "Complete bilateral ureteric obstruction", "Ischemic ATN in its oliguric phase", "Occlusion of a single kidney's renal artery"],
        answer: 0,
        explanation: `<p><strong>AIN often causes polyuria,</strong> because inflammation in the interstitium disrupts the medulla's ability to concentrate urine.</p>
<p>The other causes of polyuria in AKI are post-obstructive diuresis, after an obstruction is relieved, and the diuretic phase of ATN. Oliguria, by contrast, favors AKI over CKD.</p>`,
        notes: {
            1: "Prerenal AKI conserves water, so the urine is low in volume and concentrated.",
            2: "Complete obstruction causes sudden anuria until it is relieved; polyuria may follow relief.",
            3: "The oliguric phase of ATN is, by definition, low in urine output.",
            4: "Sudden occlusion of the artery to a single kidney causes anuria.",
        },
    },
    {
        id: "akiw-ckd-history",
        condition: "aki-workup",
        kind: "memory",
        stem: "A patient has a creatinine of 380 µmol/L with no earlier result. Which history favors CKD over AKI?",
        options: ["Months of fatigue, anorexia, nocturia, and pruritus", "Three days of vomiting with dizziness on standing up from bed", "A CT with contrast 2 days ago", "Starting an NSAID for back pain last week", "Cola-colored urine after a long-distance run"],
        answer: 0,
        explanation: `<p><strong>Months of fatigue, anorexia, nocturia, polyuria, and pruritus point to CKD,</strong> because uremic symptoms take time to build, and the failing kidney has lost its ability to concentrate urine overnight.</p>
<p>Other clues to CKD are small kidneys on ultrasound, anemia, a high phosphate, and a high PTH. A recent insult with a normal creatinine before favors AKI.</p>`,
        notes: {
            1: "Recent vomiting with postural dizziness is a recent insult, favoring prerenal AKI.",
            2: "Recent contrast is an insult that favors contrast-associated AKI.",
            3: "A new NSAID is a recent insult, favoring AKI through afferent constriction or AIN.",
            4: "Cola-colored urine after exertion suggests rhabdomyolysis, an acute cause.",
        },
    },
    {
        id: "akiw-kdigo",
        condition: "aki-workup",
        kind: "memory",
        stem: "Which creatinine change meets the KDIGO definition of AKI?",
        options: ["A rise of 26.5 µmol/L or more within 48 hours", "A rise of 10 µmol/L or more within 48 hours", "A rise of 1.2 times baseline within 30 days", "Any creatinine above the upper limit of normal", "A fall in eGFR below 60 for 3 months"],
        answer: 0,
        explanation: `<p><strong>KDIGO defines AKI as any of three changes:</strong></p>
<ul>
<li>a rise in creatinine of 26.5 µmol/L or more within 48 hours;</li>
<li>a rise to 1.5 times baseline or more within 7 days;</li>
<li>urine output below 0.5 mL/kg/h for 6 hours.</li>
</ul>
<p>The definition rests on change, not a single value, which is why a baseline creatinine matters.</p>`,
        notes: {
            1: "A rise of 10 µmol/L is within normal variation and too small to define AKI.",
            2: "The relative threshold is 1.5 times baseline within 7 days.",
            3: "A single high value does not show a change; it may be CKD.",
            4: "An eGFR below 60 for 3 months defines CKD, not AKI.",
        },
    },
    {
        id: "akiw-akd",
        condition: "aki-workup",
        kind: "memory",
        stem: "Kidney function that has not recovered 7–90 days after an AKI is called what?",
        options: ["Acute kidney disease (AKD)", "Chronic kidney disease (CKD)", "Stage 3 AKI", "Acute-on-chronic kidney disease", "Rapidly progressive glomerulonephritis"],
        answer: 0,
        explanation: `<p><strong>Function that is still abnormal 7–90 days after an insult is acute kidney disease (AKD).</strong> The timeframes run on from one another:</p>
<ul>
<li>AKI: changes within 7 days;</li>
<li>AKD: 7–90 days, when function has not yet recovered;</li>
<li>CKD: abnormal for over 3 months.</li>
</ul>`,
        notes: {
            1: "CKD needs abnormal function for over 3 months.",
            2: "Stage 3 is the most severe stage of AKI by creatinine or urine output, not a timeframe.",
            3: "Acute-on-chronic describes AKI on top of CKD, not a failure to recover.",
            4: "RPGN is a glomerular disease that loses function over days to weeks, not a stage of recovery.",
        },
    },
    {
        id: "akiw-cystatin",
        condition: "aki-workup",
        kind: "memory",
        stem: "Which marker of filtration rises sooner than creatinine in AKI and is not affected by muscle mass?",
        options: ["Cystatin C", "Urea", "Albumin-to-creatinine ratio", "Urine Na+", "Creatine kinase"],
        answer: 0,
        explanation: `<p><strong>Cystatin C rises sooner than creatinine and does not depend on muscle mass.</strong> Creatinine lags behind the injury, so a fall in urine output can be the only early sign, and in a frail patient with little muscle a normal creatinine can hide a low GFR.</p>
<p>KDIGO suggests cystatin C when creatinine is less accurate.</p>`,
        notes: {
            1: "Urea also changes with protein intake, bleeding, and corticosteroids, so it is a poorer marker of GFR.",
            2: "The albumin-to-creatinine ratio measures protein leak, not filtration.",
            3: "Urine Na+ shows how the tubules handle Na+, not GFR.",
            4: "CK marks muscle injury, as in rhabdomyolysis, not filtration.",
        },
    },
    {
        id: "akiw-contrast",
        condition: "aki-workup",
        kind: "memory",
        stem: "When does creatinine usually peak in contrast-associated AKI?",
        options: ["2–5 days after the contrast", "Within 6 hours of the contrast", "1–2 weeks after the contrast", "5–13 days after the contrast", "3 months after the contrast"],
        answer: 0,
        explanation: `<p><strong>Contrast-associated AKI rises within 48–72 hours, peaks at 2–5 days, and returns to baseline by about 2 weeks.</strong></p>
<p>That timecourse helps separate it from atheroemboli, which can follow the same angiogram but cause AKI days to weeks later, with variable recovery. It is also why contrast in the last 24–48 hours is asked about in the workup.</p>`,
        notes: {
            1: "Within 6 hours is too soon for creatinine to change after any insult.",
            2: "1–2 weeks after a new drug is the timing of AIN.",
            3: "5–13 days after the diarrhea starts is the timing of STEC-HUS.",
            4: "By 3 months, contrast-associated AKI has usually recovered.",
        },
    },
    {
        id: "akiw-ain-steroids",
        condition: "aki-workup",
        kind: "memory",
        stem: "In drug-induced AIN, when are corticosteroids added after stopping the drug?",
        options: ["If there is no improvement in 3–7 days", "Straight away, with the first dose of IV fluid", "Only once dialysis has been needed", "After 3 months without recovery", "Never, because AIN recovers by itself"],
        answer: 0,
        explanation: `<p><strong>The drug is stopped first, and corticosteroids are added if there is no improvement in 3–7 days.</strong> Many patients recover once the trigger is gone, so steroids are kept for those who do not.</p>
<p>A biopsy is considered at the same point, to confirm the diagnosis before treating.</p>`,
        notes: {
            1: "Stopping the drug comes first; many patients recover without steroids.",
            2: "Waiting for dialysis would let the inflammation scar the interstitium.",
            3: "After 3 months, fibrosis has set in and steroids help little.",
            4: "Corticosteroids are used when stopping the drug is not enough.",
        },
    },
    {
        id: "akiw-infection",
        condition: "aki-workup",
        kind: "memory",
        stem: "Which complication of AKI is more common in these patients and a major cause of their death?",
        options: ["Infection", "Hypercalcemia", "Hypernatremia", "Polycythemia", "Hypoglycemia"],
        answer: 0,
        explanation: `<p><strong>Infection is more common in AKI and a major cause of death.</strong> Uremia impairs immune function, and patients often have catheters and lines, including dialysis catheters.</p>
<p>In-hospital mortality is 40–50%, and over 50% in ICU. The other complications are overload, hyperkalemia, acidosis, other electrolyte changes, uremia, and drug toxicity.</p>`,
        notes: {
            1: "AKI tends to cause hypocalcemia, with a high phosphate.",
            2: "AKI more often causes hyponatremia, from water the kidney cannot excrete.",
            3: "AKI does not cause polycythemia; CKD causes anemia.",
            4: "Hypoglycemia is not a typical complication of AKI.",
        },
    },
    {
        id: "akiw-mortality",
        condition: "aki-workup",
        kind: "memory",
        stem: "About what proportion of patients with AKI in hospital die there?",
        options: ["40–50%", "Under 1%", "5–10%", "15–20%", "Over 90%"],
        answer: 0,
        explanation: `<p><strong>In-hospital mortality in AKI is 40–50%, and over 50% in ICU.</strong> Much of this reflects the illness that caused the AKI, but AKI adds its own risks through overload, hyperkalemia, acidosis, and infection.</p>
<p>Of those who survive, 12–15% later need long-term dialysis, and repeated AKI adds up to CKD.</p>`,
        notes: {
            1: "Under 1% is far too low; AKI is a marker of serious illness.",
            2: "5–10% underestimates the mortality.",
            3: "12–15% is the proportion that later needs long-term dialysis, not the mortality.",
            4: "Over 90% is far too high; most patients outside ICU survive.",
        },
    },
    {
        id: "akiw-fatty-casts",
        condition: "aki-workup",
        kind: "memory",
        stem: "Fatty casts and oval fat bodies on urine microscopy point to which condition?",
        options: ["Nephrotic syndrome", "Acute tubular necrosis", "Prerenal AKI", "Acute interstitial nephritis", "Ethylene glycol poisoning"],
        answer: 0,
        explanation: `<p><strong>Fatty casts and oval fat bodies point to nephrotic syndrome.</strong> The leaky glomerulus lets lipoproteins into the tubule, where tubular cells take up the lipid and are shed as oval fat bodies.</p>
<p>They come with heavy proteinuria, usually 3+ or more on the dipstick.</p>`,
        notes: {
            1: "ATN gives muddy brown granular casts and tubular cells.",
            2: "Prerenal AKI gives bland urine or hyaline casts.",
            3: "AIN gives white cell casts and sterile pyuria.",
            4: "Ethylene glycol gives calcium oxalate crystals.",
        },
    },
    {
        id: "akiw-oxalate",
        condition: "aki-workup",
        kind: "memory",
        stem: "Calcium oxalate crystals in the urine of a patient with AKI point to which cause?",
        options: ["Ethylene glycol poisoning", "Tumor lysis syndrome", "Acyclovir", "Rhabdomyolysis", "Methanol poisoning from home-made spirits"],
        answer: 0,
        explanation: `<p><strong>Calcium oxalate crystals point to ethylene glycol,</strong> which is metabolized to oxalate that precipitates with calcium in the tubules.</p>
<p>Other crystals have their own causes: urate in TLS, and acyclovir crystals after high doses. Ethylene glycol is also a dialyzable poison, one of the AEIOU indications.</p>`,
        notes: {
            1: "TLS gives urate crystals.",
            2: "Acyclovir gives its own needle-shaped crystals.",
            3: "Rhabdomyolysis gives blood on the dipstick with few red cells, from myoglobin.",
            4: "Methanol causes a high anion gap acidosis and blindness, not oxalate crystals.",
        },
    },
    {
        id: "akiw-intoxication",
        condition: "aki-workup",
        kind: "memory",
        stem: "Under the AEIOU indications for dialysis, which poisoning is an example of the \"I\"?",
        options: ["Lithium", "Paracetamol", "Digoxin", "Benzodiazepines", "Opioids"],
        answer: 0,
        explanation: `<p><strong>"I" is a dialyzable poison, such as methanol, ethylene glycol, or lithium.</strong> These are small, water-soluble molecules that are not tightly bound to protein, so dialysis removes them.</p>
<p>The other indications are refractory acidosis, refractory hyperkalemia, overload that does not respond to diuretics, and uremia with encephalopathy, pericarditis, neuropathy, seizures, or bleeding.</p>`,
        notes: {
            1: "Paracetamol poisoning is treated with acetylcysteine, not dialysis.",
            2: "Digoxin is widely distributed in tissues, so dialysis removes little; digoxin antibodies are used.",
            3: "Benzodiazepines are protein-bound and treated supportively, with flumazenil rarely.",
            4: "Opioid toxicity is treated with naloxone.",
        },
    },
    {
        id: "akiw-protein",
        condition: "aki-workup",
        kind: "memory",
        stem: "How much protein a day is recommended for a patient with AKI?",
        options: ["1.2–1.5 g/kg", "Under 0.3 g/kg", "0.6–0.8 g/kg", "2.5–3 g/kg", "None until dialysis starts"],
        answer: 0,
        explanation: `<p><strong>Protein of 1.2–1.5 g/kg a day, preferably enteral, is recommended because AKI is catabolic.</strong> Restricting protein would worsen muscle wasting without protecting the kidney.</p>
<p>Potassium and phosphate are limited instead, because the kidney cannot excrete them.</p>`,
        notes: {
            1: "Under 0.3 g/kg would worsen wasting in a catabolic patient.",
            2: "0.6–0.8 g/kg is the restriction used in stable CKD, not in catabolic AKI.",
            3: "2.5–3 g/kg is more than recommended and adds to the urea load.",
            4: "Withholding protein worsens wasting and is not needed before dialysis.",
        },
    },
    {
        id: "akiw-crrt",
        condition: "aki-workup",
        kind: "memory",
        stem: "Which form of dialysis is used for a patient with AKI whose blood pressure is unstable?",
        options: ["CRRT", "Intermittent hemodialysis", "Peritoneal dialysis through a permanent catheter", "Plasma exchange", "A kidney transplant"],
        answer: 0,
        explanation: `<p><strong>CRRT is used for unstable patients,</strong> because it removes fluid and solute slowly over 24 hours, avoiding the large shifts that drop blood pressure in intermittent dialysis.</p>
<p>In AKI, dialysis runs through a temporary venous catheter, is reassessed daily, and usually lasts days to weeks.</p>`,
        notes: {
            1: "Intermittent hemodialysis removes fluid quickly and can drop blood pressure in unstable patients.",
            2: "Dialysis in AKI uses a temporary venous catheter, not a permanent peritoneal one.",
            3: "Plasma exchange removes antibodies or proteins, as in anti-GBM disease or TTP; it does not replace kidney function.",
            4: "AKI often recovers, so transplant is not used.",
        },
    },

    /* --- Reasoning --- */
    {
        id: "akiw-dialysis-oliguric",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why is dialysis most often needed during the oliguric phase of severe ATN?",
        options: ["With little urine, the kidney cannot excrete fluid, K+, or acid", "Creatinine is highest then, and creatinine itself is toxic", "The tubules leak Na+ and water, causing hypovolemia and low blood pressure", "Loop diuretics stop working only in this phase", "Dialysis speeds the regrowth of the tubular cells"],
        answer: 0,
        explanation: `<p><strong>In the oliguric phase, so little urine is made that fluid, K+, and acid build up.</strong> When overload, hyperkalemia, or acidosis does not respond to treatment, those are AEIOU indications for dialysis.</p>
<p>Dialysis is usually needed for a few days to a few weeks, until the diuretic phase begins. It replaces the kidney's work but does not speed its recovery.</p>`,
        notes: {
            1: "Creatinine is a marker, not a toxin; dialysis is started for the complications, not a number.",
            2: "Na+ and water loss is the problem of the diuretic phase.",
            3: "Loop diuretics may still increase urine output; they work poorly when few nephrons are filtering.",
            4: "Dialysis does not speed recovery; it supports the patient until the tubules regrow.",
        },
    },
    {
        id: "akiw-oliguria-ckd",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why does oliguria favor AKI over CKD?",
        options: ["In CKD, the remaining nephrons adapt and urine output is kept", "In CKD, the kidneys are larger and filter more urine", "CKD causes oliguria only when the kidneys are infected", "Creatinine is normal in CKD, so oliguria cannot occur", "In AKI, ADH is always high, but in CKD it is no longer secreted at all"],
        answer: 0,
        explanation: `<p><strong>In CKD, function is lost slowly, and the remaining nephrons adapt by each filtering more,</strong> so urine output is usually kept until late. The failing kidney also loses the ability to concentrate urine, so nocturia and polyuria are common.</p>
<p>In AKI, GFR falls suddenly with no time to adapt, so urine output drops. That makes oliguria a clue to AKI, though non-oliguric AKI is common.</p>`,
        notes: {
            1: "Kidneys in CKD are usually small, not large.",
            2: "Infection is not what keeps urine output in CKD; adaptation of the remaining nephrons does.",
            3: "Creatinine is high in CKD.",
            4: "ADH is not absent in CKD; the failing kidney responds poorly to it.",
        },
        info: "The adaptation of the remaining nephrons goes beyond the page, which states only that oliguria favors AKI and that CKD brings nocturia and polyuria.",
    },
    {
        id: "akiw-fena-gn",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why can the FENa be below 1% in glomerulonephritis, although the kidney itself is injured?",
        options: ["GFR falls, but the tubules still work and reabsorb Na+", "Glomerular inflammation releases a hormone that blocks Na+ excretion", "The urine is too dilute for Na+ to be measured", "Red cells in the urine bind Na+ and lower its level", "Glomerulonephritis always has a prerenal cause as well"],
        answer: 0,
        explanation: `<p><strong>In glomerulonephritis, the injury is to the glomerulus, so GFR falls while the tubules still reabsorb Na+ avidly.</strong> The FENa then looks prerenal, below 1%.</p>
<p>The same happens in HF, cirrhosis, contrast-associated AKI, and vasculitis. A low FENa therefore needs the sediment beside it: dysmorphic red cells and red cell casts point to the glomerulus.</p>`,
        notes: {
            1: "No such hormone explains it; it reflects working tubules.",
            2: "Urine Na+ can be measured at any concentration; the FENa corrects for concentration with creatinine.",
            3: "Red cells do not bind Na+ in a meaningful amount.",
            4: "A prerenal component may coexist, but the low FENa occurs without one.",
        },
    },
    {
        id: "akiw-eosinophils",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why is eosinophiluria not used to diagnose AIN?",
        options: ["It is often absent in AIN and also seen in other conditions, such as atheroemboli", "It appears only after a biopsy has confirmed AIN", "Eosinophils cannot be seen on urine microscopy", "It is present in every case of ATN as well, so it does not separate the two conditions", "It is a sign of nephrotic syndrome, not of AIN"],
        answer: 0,
        explanation: `<p><strong>Eosinophiluria is unreliable for AIN, because it is often absent and is also seen in other conditions,</strong> such as atheroemboli.</p>
<p>Sterile pyuria and white cell casts are more useful, and biopsy confirms the diagnosis when stopping the drug does not bring improvement in 3–7 days. Eosinophilia in the blood is also uncommon, in about 10%.</p>`,
        notes: {
            1: "It is a urine test, so it does not depend on biopsy.",
            2: "Eosinophils can be seen in the urine with special stains.",
            3: "Eosinophiluria is not a feature of ATN, which gives muddy brown granular casts.",
            4: "Nephrotic syndrome gives fatty casts and oval fat bodies, not eosinophils.",
        },
        info: "StatPearls reports a sensitivity of about 40% and a positive predictive value of about 38% for eosinophiluria in drug-induced AIN.",
    },
    {
        id: "akiw-ckd-baseline",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why is AKI harder to diagnose and characterize in a patient with CKD?",
        options: ["The baseline may be unknown, and the urine indices are less reliable", "CKD keeps creatinine from rising further, because the kidney has already lost its reserve", "Patients with CKD cannot develop ATN", "Ultrasound cannot be used in CKD", "CKD lowers K+, hiding hyperkalemia"],
        answer: 0,
        explanation: `<p><strong>AKI is defined by a change from baseline,</strong> so without an earlier result, a high creatinine could be CKD, AKI, or both.</p>
<p>CKD also weakens Na+ conservation and concentration, so the FENa, urine Na+, and urine osmolality become less reliable at separating prerenal AKI from ATN. CKD is a risk factor for AKI, so the two often occur together.</p>`,
        notes: {
            1: "Creatinine rises further in AKI on CKD.",
            2: "CKD increases the risk of ATN.",
            3: "Ultrasound is useful in CKD and shows small kidneys.",
            4: "CKD tends to raise K+, not lower it.",
        },
    },
    {
        id: "akiw-light-chains",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "A 76-year-old has AKI. The dipstick shows only trace protein, but the urine protein-to-creatinine ratio is very high. Why?",
        options: ["The dipstick detects albumin and misses light chains", "The dipstick overestimates protein in dilute urine", "The ratio is falsely high when creatinine is high", "The sample was taken after exercise, raising the ratio", "Trace protein on the dipstick rules out myeloma"],
        answer: 0,
        explanation: `<p><strong>The dipstick detects albumin and misses light chains,</strong> so a large gap between a low dipstick and a high protein measurement suggests a protein other than albumin, such as the light chains of myeloma.</p>
<p>That is why SPEP and UPEP are part of the workup in older patients with AKI, alongside Ca2+ and the FBC.</p>`,
        notes: {
            1: "The dipstick underestimates protein in dilute urine, but here the ratio corrects for concentration.",
            2: "The ratio uses urine creatinine, not serum creatinine.",
            3: "Exercise can cause transient proteinuria, but the dipstick would show it too.",
            4: "Trace protein on the dipstick does not rule out myeloma, because it misses light chains.",
        },
    },
    {
        id: "akiw-furosemide",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "How does IV furosemide help in AKI?",
        options: ["It treats fluid overload, without improving recovery", "It protects the tubules by lowering their O2 demand", "Turning oliguric into non-oliguric AKI improves survival", "It speeds the regrowth of injured tubular cells", "It reduces the need for dialysis in ATN"],
        answer: 0,
        explanation: `<p><strong>IV loop diuretics, often at high doses, treat fluid overload in AKI.</strong> They may increase urine output, but turning oliguric into non-oliguric AKI does not improve recovery, the need for dialysis, or survival.</p>
<p>Overload that does not respond to diuretics is one of the AEIOU indications for dialysis.</p>`,
        notes: {
            1: "Lowering tubular O2 demand was the theory, but it has not improved outcomes.",
            2: "Urine output may rise, but survival does not improve.",
            3: "Furosemide does not speed tubular recovery.",
            4: "It does not reduce the need for dialysis.",
        },
    },
    {
        id: "akiw-isosthenuria",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why is the urine specific gravity fixed near 1.010 in ATN?",
        options: ["Injured tubules can neither concentrate nor dilute the filtrate", "ADH is absent in ATN, so water cannot be reabsorbed in the collecting duct", "Muddy brown casts dilute the urine", "The glomerulus stops filtering Na+", "The kidney retains all the urea"],
        answer: 0,
        explanation: `<p><strong>In ATN, the tubules cannot concentrate or dilute the filtrate,</strong> so urine leaves at about the osmolality of plasma: near 1.010, about 300 mOsm/kg. This is isosthenuria.</p>
<p>In prerenal AKI, the working tubules respond to ADH and aldosterone, so the specific gravity is high and urine osmolality is above 500 mOsm/kg.</p>`,
        notes: {
            1: "ADH is present, often high; the injured tubules cannot respond to it.",
            2: "Casts do not change the urine's concentration.",
            3: "Na+ is still filtered; the injured tubules fail to reabsorb it, so the FENa is high.",
            4: "Urea is not retained; the UCR stays below 100 in ATN.",
        },
    },
    {
        id: "akiw-extension",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "After a period of shock, blood pressure is restored, yet creatinine keeps rising for several days. Why?",
        options: ["Hypoxia and inflammation keep killing tubular cells after the insult", "The restored blood pressure overloads the glomerulus", "Creatinine is produced faster once perfusion returns", "Recovery always starts with a rise in creatinine", "Fluid given during resuscitation is directly toxic to the tubular cells of the medulla"],
        answer: 0,
        explanation: `<p><strong>In the extension phase, ongoing hypoxia and inflammation keep killing cells in the outer medulla after the insult has passed.</strong> The outer medulla has little O2 to spare, and injured endothelium and inflammatory cells keep its blood flow low.</p>
<p>Creatinine also lags behind the injury, so it keeps rising for days even once GFR has stopped falling.</p>`,
        notes: {
            1: "Restoring perfusion does not overload the glomerulus.",
            2: "Creatinine production depends on muscle mass, not perfusion.",
            3: "Recovery comes with a falling creatinine, in the diuretic phase and after.",
            4: "Isotonic fluid is not toxic to the tubules, though too much causes overload.",
        },
    },
    {
        id: "akiw-cr-lag",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why can creatinine be normal on the day of a kidney insult, although GFR has already fallen?",
        options: ["Creatinine takes time to build up once its excretion falls", "Creatinine is destroyed in the blood faster during AKI", "The liver makes less creatinine during the insult", "Creatinine is still cleared normally by tubular secretion for the first day", "A normal creatinine always means the GFR is normal"],
        answer: 0,
        explanation: `<p><strong>Creatinine is made at a steady rate, so when GFR falls, it takes time to accumulate in the blood.</strong> The insult usually lies in the 24–48 hours before creatinine rises.</p>
<p>That is why a fall in urine output can be the only early sign, why cystatin C rises sooner, and why recent drugs and contrast are asked about over the last 24–48 hours.</p>`,
        notes: {
            1: "Creatinine is not destroyed in the blood; it is excreted by the kidney.",
            2: "Creatinine comes from muscle, not the liver.",
            3: "Tubular secretion is only a small share of creatinine clearance and cannot keep creatinine normal when GFR falls.",
            4: "A normal creatinine can hide a low GFR early in AKI, or in a patient with little muscle.",
        },
    },
    {
        id: "akiw-oliguria-mortality",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why does oliguric ATN carry a higher mortality than non-oliguric ATN?",
        options: ["Oliguria reflects more severe injury and brings overload and hyperkalemia", "Oliguria is caused by the drugs used to treat ATN", "Non-oliguric ATN never needs dialysis, so its complications are always managed medically", "Oliguric patients lose more Na+ and K+", "Oliguria occurs only in patients with CKD"],
        answer: 0,
        explanation: `<p><strong>Oliguria marks more extensive tubular injury,</strong> and with little urine the kidney cannot excrete fluid, K+, or acid, so overload, hyperkalemia, and acidosis follow.</p>
<p>Non-oliguric ATN, as from aminoglycosides, is often milder. Making the urine flow with diuretics does not change the underlying injury, which is why it does not improve survival.</p>`,
        notes: {
            1: "Oliguria comes from the injury, not its treatment.",
            2: "Non-oliguric ATN can still need dialysis, though less often.",
            3: "Large Na+ and K+ losses are a feature of the diuretic phase, not oliguria.",
            4: "Oliguria occurs in AKI without CKD, and it favors AKI over CKD.",
        },
    },
    {
        id: "akiw-danger-first",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "In the AKI workup, why are K+, an ECG, and a blood gas checked before looking for the cause?",
        options: ["Hyperkalemia, acidosis, and overload can kill before the cause is found", "The cause cannot be found until the K+ is known", "An ECG shows whether the cause is prerenal or intrarenal, which directs the rest of the workup", "A blood gas gives the FENa", "They decide the KDIGO stage"],
        answer: 0,
        explanation: `<p><strong>The complications of AKI, especially hyperkalemia, can cause arrhythmias and death within hours,</strong> while finding the cause can take days.</p>
<p>So after confirming and staging the AKI, the second step is immediate danger: K+, ECG, blood gas, and signs of fluid overload. Then come volume and drugs, obstruction, the urine, the blood, and biopsy.</p>`,
        notes: {
            1: "The cause can be sought at any K+; K+ is checked first because of its danger.",
            2: "An ECG shows the effects of K+, not the cause of AKI.",
            3: "The FENa comes from urine and serum Na+ and creatinine, not a blood gas.",
            4: "KDIGO staging uses creatinine and urine output.",
        },
    },
    {
        id: "akiw-fluid-challenge",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "A patient with AKI who is likely hypovolemic is given a monitored fluid challenge, and creatinine falls over the next 48 hours. What does this show?",
        options: ["There was a prerenal component, with working tubules", "The cause was ATN, and the tubules are now recovering after the insult", "Obstruction has been ruled out", "The patient has CKD", "The patient will need dialysis"],
        answer: 0,
        explanation: `<p><strong>Improvement after fluid supports a prerenal component:</strong> once perfusion is restored, working tubules let GFR return, and creatinine falls within 24–72 hours.</p>
<p>In ATN, the injured tubules do not respond to fluid, and in postrenal AKI, nothing improves until the obstruction is relieved. The challenge is monitored because too much fluid causes overload when the kidney cannot excrete it.</p>`,
        notes: {
            1: "ATN does not respond to fluid; recovery takes weeks.",
            2: "Fluid does not test for obstruction; a bladder scan and ultrasound do.",
            3: "A quick response to fluid fits prerenal AKI, not CKD.",
            4: "A falling creatinine is reassuring and makes dialysis less likely.",
        },
    },
    {
        id: "akiw-biopsy",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why is a kidney biopsy done in AKI with suspected glomerulonephritis?",
        options: ["The type of glomerulonephritis decides the treatment, and only biopsy shows it", "Biopsy is needed to stage AKI by KDIGO", "Biopsy treats the inflammation by draining the kidney", "Biopsy is the first test in every AKI", "Serology cannot be done once AKI has started"],
        answer: 0,
        explanation: `<p><strong>Biopsy shows the type of glomerulonephritis, and the type decides treatment,</strong> such as immunosuppression for ANCA vasculitis or plasma exchange for anti-GBM disease.</p>
<p>It is the last step in the workup, after the urine, bloods, serology, and complement, and is used for unexplained or rapidly falling function or suspected glomerulonephritis.</p>`,
        notes: {
            1: "KDIGO staging uses creatinine and urine output.",
            2: "Biopsy is diagnostic, not a treatment.",
            3: "Most AKI is prerenal or ATN and is diagnosed without a biopsy.",
            4: "Serology is done before biopsy and guides it.",
        },
    },
    {
        id: "akiw-catabolic",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "Why is protein not restricted in AKI, as it may be in stable CKD?",
        options: ["AKI is catabolic, so restriction would worsen muscle wasting", "Protein protects the tubules from further injury", "Urea cannot build up in AKI", "Protein lowers K+ and phosphate", "Restricting protein causes hyperkalemia"],
        answer: 0,
        explanation: `<p><strong>AKI is catabolic: the illness behind it breaks down muscle,</strong> so restricting protein would worsen wasting and slow recovery. Protein of 1.2–1.5 g/kg a day, preferably enteral, is recommended.</p>
<p>Potassium and phosphate are limited instead, and dialysis handles the urea when it becomes a problem.</p>`,
        notes: {
            1: "Protein does not protect the tubules; it prevents wasting.",
            2: "Urea does build up in AKI; dialysis removes it when needed.",
            3: "Protein foods often contain K+ and phosphate, so they do not lower them.",
            4: "Restricting protein does not cause hyperkalemia.",
        },
    },
    {
        id: "akiw-dose-adjust",
        condition: "aki-workup",
        kind: "reasoning",
        stem: "A patient with AKI is taking gentamicin and morphine. Why are their doses adjusted for GFR?",
        options: ["Renally cleared drugs build up, and nephrotoxic ones worsen the injury", "AKI speeds the liver's metabolism of drugs", "Drugs become less effective in AKI, so doses are increased", "Adjusting doses lowers creatinine directly", "Only drugs given by mouth need adjusting"],
        answer: 0,
        explanation: `<p><strong>Drugs cleared by the kidney build up when GFR falls,</strong> causing toxicity, such as sedation from morphine's metabolites.</p>
<p>Nephrotoxic drugs such as gentamicin also add to the injury, so they are stopped or their doses adjusted with level monitoring. Preventing further injury means stopping NSAIDs and nephrotoxins, holding ACEi and ARBs, and avoiding contrast.</p>`,
        notes: {
            1: "AKI does not speed hepatic metabolism.",
            2: "Doses are reduced, because the drugs accumulate.",
            3: "Adjusting doses prevents toxicity; it does not lower creatinine.",
            4: "IV drugs such as gentamicin need adjusting too.",
        },
    },

    /* --- Analysis --- */
    {
        id: "akiw-uremic",
        condition: "aki-workup",
        kind: "analysis",
        stem: "A man in hospital with severe ATN develops chest pain. His ECG shows peaked T waves, and a friction rub is heard over the heart. Which pair of substances best explains these findings?",
        options: ["K+ and uremic toxins (urea as their marker)", "Na+ and Ca2+", "HCO3− and phosphate", "Creatinine and Mg2+", "Glucose and albumin"],
        answer: 0,
        explanation: `<p><strong>Peaked T waves are hyperkalemia, and a friction rub with chest pain is uremic pericarditis.</strong> Both follow from what the failing kidney cannot excrete:</p>
<ul>
<li><strong>K+:</strong> builds up, with ECG changes an emergency treated with calcium gluconate, insulin with dextrose, and salbutamol.</li>
<li><strong>Uremic toxins:</strong> inflame the pericardium; urea is measured as their marker.</li>
</ul>
<p>Refractory hyperkalemia and uremic pericarditis are both AEIOU indications for dialysis.</p>`,
        notes: {
            1: "Na+ and Ca2+ changes do not cause peaked T waves or pericarditis.",
            2: "Acidosis and a high phosphate occur in AKI but do not explain these findings.",
            3: "Creatinine is a marker, not a toxin, and Mg2+ does not explain the rub.",
            4: "Glucose and albumin do not cause these changes.",
        },
    },
    {
        id: "akiw-set-hf-1",
        condition: "aki-workup",
        kind: "analysis",
        set: "akiw-hf",
        passage: `<p>A 68-year-old woman with HF takes furosemide 80 mg a day. She had a cardiac arrest 4 days ago and needed adrenaline for 2 hours to keep her blood pressure up. She now has pitting edema to the knees, a high JVP, and bibasal crackles. Her urine output is 300 mL a day.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Creatinine</td><td>Baseline 95 µmol/L; day 2 190; day 4 320 µmol/L</td></tr>
<tr><td>FENa</td><td>3%</td></tr>
<tr><td>FEUrea</td><td>60%</td></tr>
<tr><td>Urine osmolality</td><td>320 mOsm/kg</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>`,
        stem: "How should her FENa and FEUrea be read?",
        options: ["The FENa cannot be read on furosemide, but the high FEUrea points to ATN", "The high FENa confirms ATN, and the FEUrea adds nothing", "The FENa is high from furosemide, so this is prerenal AKI from HF", "Both indices point to prerenal AKI from poor cardiac output", "Neither index is useful, so only a biopsy can decide"],
        answer: 0,
        explanation: `<p><strong>Furosemide blocks Na+ reabsorption, so a high FENa may reflect the drug rather than injured tubules.</strong> Urea is handled in the proximal tubule, before diuretics act, so the FEUrea stays useful.</p>
<ul>
<li><strong>FEUrea 60%:</strong> above 50%, pointing to ATN.</li>
<li><strong>Urine osmolality 320 mOsm/kg:</strong> below 450, so the tubules cannot concentrate.</li>
<li><strong>The story:</strong> 2 hours of shock 4 days ago, and a creatinine rising by about 65 µmol/L a day, with no fall once perfusion returned.</li>
</ul>
<p>Her edema and crackles are overload from oliguria, not evidence that the AKI is prerenal.</p>`,
        notes: {
            1: "On furosemide, the FENa cannot confirm ATN by itself; the FEUrea is the index that can be read.",
            2: "Furosemide does make the FENa unreliable, but the FEUrea above 50% and dilute urine do not fit prerenal AKI.",
            3: "A prerenal FEUrea would be below 35%, and the urine would be concentrated.",
            4: "The FEUrea answers the question without a biopsy.",
        },
    },
    {
        id: "akiw-set-hf-2",
        condition: "aki-workup",
        kind: "analysis",
        set: "akiw-hf",
        stem: "Which urine microscopy finding would best support your reading of her indices?",
        options: ["Muddy brown granular casts and tubular cells", "Hyaline casts in otherwise bland urine", "Fatty casts and oval fat bodies", "Calcium oxalate crystals", "A high specific gravity"],
        answer: 0,
        explanation: `<p><strong>Muddy brown granular casts and tubular cells are the sediment of ATN:</strong> dead tubular cells shed into the lumen and form casts.</p>
<p>With a FEUrea above 50%, dilute urine, and no response once perfusion returned, they would confirm ischemic ATN after her cardiac arrest. She then needs her overload treated with high-dose IV loop diuretics, close watch on K+ and acid, and dialysis if they fail.</p>`,
        notes: {
            1: "Hyaline casts in bland urine fit prerenal AKI.",
            2: "Fatty casts and oval fat bodies point to nephrotic syndrome.",
            3: "Calcium oxalate crystals point to ethylene glycol poisoning.",
            4: "A high specific gravity means concentrated urine, which fits prerenal AKI; ATN gives isosthenuria near 1.010.",
        },
    },
    {
        id: "akiw-nsaid",
        condition: "aki-workup",
        kind: "analysis",
        stem: `<p>A frail 85-year-old woman with CKD (baseline creatinine 140 µmol/L) was started on naproxen daily for osteoarthritis 12 days ago. She now has 3 days of passing little urine, and her creatinine is 310 µmol/L. Her blood pressure and volume status are normal.</p>
<p><em>Illustrative data.</em></p>
<p>Which urine finding would suggest that the NSAID has caused AIN, rather than AKI from afferent constriction?</p>`,
        options: ["White cell casts and white cells with a negative culture", "Hyaline casts in otherwise bland urine", "A urine osmolality of 650 mOsm/kg", "A FENa of 0.4%", "A urine Na+ of 10 mmol/L"],
        answer: 0,
        explanation: `<p><strong>NSAIDs cause AKI in two ways,</strong> and the urine separates them:</p>
<ul>
<li><strong>Afferent constriction:</strong> blocking prostaglandins removes the afferent dilation that holds GFR up, especially in older patients with CKD. The tubules work, so the urine looks prerenal: bland, concentrated, with a low FENa and urine Na+.</li>
<li><strong>AIN:</strong> an immune reaction, often 1–2 weeks after starting the drug, with white cell casts and sterile pyuria.</li>
</ul>
<p>Either way, the NSAID is stopped. In AIN, corticosteroids are added if there is no improvement in 3–7 days.</p>`,
        notes: {
            1: "Hyaline casts in bland urine fit the hemodynamic, prerenal-like effect.",
            2: "Concentrated urine shows working tubules, which fits afferent constriction.",
            3: "A low FENa shows working tubules, which fits afferent constriction.",
            4: "A low urine Na+ shows Na+ conservation, which fits afferent constriction.",
        },
    },
    {
        id: "akiw-dialysis-now",
        condition: "aki-workup",
        kind: "analysis",
        stem: "Five patients in hospital have AKI. Which one has an indication for dialysis now?",
        options: ["A man with lithium toxicity, confusion, and a tremor", "A woman with K+ 5.6 mmol/L and a normal ECG", "A man with creatinine 420 µmol/L, no symptoms, and normal K+", "A woman with mild ankle edema who responds to furosemide", "A man with pH 7.31 and HCO3− 18 mmol/L"],
        answer: 0,
        explanation: `<p><strong>Dialysis follows the AEIOU indications,</strong> not a creatinine number:</p>
<ul>
<li><strong>A:</strong> severe acidosis that does not respond to treatment.</li>
<li><strong>E:</strong> hyperkalemia that does not respond to treatment.</li>
<li><strong>I:</strong> a dialyzable poison, such as methanol, ethylene glycol, or lithium.</li>
<li><strong>O:</strong> overload that does not respond to diuretics.</li>
<li><strong>U:</strong> uremia with encephalopathy, pericarditis, neuropathy, seizures, or bleeding.</li>
</ul>
<p>Lithium toxicity with neurological signs is an "I" indication, especially when the kidney cannot excrete it.</p>`,
        notes: {
            1: "K+ of 5.6 mmol/L with a normal ECG is treated medically first.",
            2: "A high creatinine alone, without symptoms or complications, is not an indication.",
            3: "Overload that responds to diuretics is not an indication.",
            4: "A mild acidosis is treated first; it is an indication only when severe and refractory.",
        },
    },
    {
        id: "akiw-stage",
        condition: "aki-workup",
        kind: "analysis",
        stem: `<p>A 70 kg man has sepsis from pneumonia. His creatinine was 90 µmol/L a month ago.</p>
<table><thead><tr><th>Time</th><th>Creatinine</th><th>Urine output</th></tr></thead><tbody>
<tr><td>Day 1</td><td>130 µmol/L</td><td>40 mL/h</td></tr>
<tr><td>Day 2</td><td>210 µmol/L</td><td>25 mL/h for the last 14 hours</td></tr>
<tr><td>Day 3</td><td>250 µmol/L</td><td>25 mL/h</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>
<p>What is his KDIGO stage on day 3?</p>`,
        options: ["Stage 2", "Stage 1", "Stage 3", "No AKI, since he still passes urine", "AKD, since it has lasted over 48 hours"],
        answer: 0,
        explanation: `<p><strong>KDIGO stages by whichever of creatinine or urine output is worse.</strong></p>
<ul>
<li><strong>Creatinine:</strong> 250 ÷ 90 is about 2.8 times baseline, which is stage 2 (2.0–2.9 times).</li>
<li><strong>Urine output:</strong> 25 mL/h in a 70 kg man is about 0.36 mL/kg/h, below 0.5 for 12 hours or more, which is also stage 2.</li>
</ul>
<p>Stage 3 would need 3 times baseline, 354 µmol/L or more, dialysis, or below 0.3 mL/kg/h for 24 hours.</p>`,
        notes: {
            1: "Stage 1 is 1.5–1.9 times baseline; he is at about 2.8 times.",
            2: "He has not reached 3 times baseline, 354 µmol/L, or output below 0.3 mL/kg/h for 24 hours.",
            3: "AKI is defined by the creatinine rise as well as the urine output; he meets both.",
            4: "AKD applies when function has not recovered by 7–90 days, not after 48 hours.",
        },
    },
    {
        id: "akiw-ckd-case",
        condition: "aki-workup",
        kind: "analysis",
        stem: `<p>A 58-year-old man who has not seen a doctor for years presents with tiredness and itch. His creatinine is 520 µmol/L, with no earlier result. He passes urine normally and gets up three times a night to void.</p>
<table><thead><tr><th>Test</th><th>Result</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>92 g/L</td></tr>
<tr><td>Phosphate</td><td>2.1 mmol/L</td></tr>
<tr><td>PTH</td><td>High</td></tr>
<tr><td>Ultrasound</td><td>Both kidneys 8 cm, with thin cortices</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>
<p>What do these findings most suggest?</p>`,
        options: ["CKD, from small kidneys with anemia and a high PTH", "Prerenal AKI, because urine output is normal", "ATN, because creatinine is very high", "Postrenal AKI, because he voids at night", "AKI, because the phosphate is high"],
        answer: 0,
        explanation: `<p><strong>Several clues point to CKD, each taking months to develop:</strong></p>
<ul>
<li><strong>History:</strong> fatigue, pruritus, and nocturia, with urine output kept.</li>
<li><strong>Ultrasound:</strong> small kidneys with thin cortices, from scarring.</li>
<li><strong>Blood:</strong> anemia from low erythropoietin, and a high phosphate and PTH from long-standing failure to excrete phosphate and make calcitriol.</li>
</ul>
<p>AKI can still occur on top of CKD, so a recent insult is worth asking about.</p>`,
        notes: {
            1: "Normal urine output is common in CKD, and prerenal AKI would not shrink the kidneys.",
            2: "A very high creatinine does not separate ATN from CKD; the small kidneys do.",
            3: "Nocturia is a concentrating defect of CKD; obstruction would show hydronephrosis.",
            4: "A high phosphate occurs in both, but with a high PTH and small kidneys it favors CKD.",
        },
    },
    {
        id: "akiw-urinalysis",
        condition: "aki-workup",
        kind: "analysis",
        stem: `<p>Two patients have AKI, and both have 3+ blood on the dipstick.</p>
<table><thead><tr><th>Finding</th><th>Patient A</th><th>Patient B</th></tr></thead><tbody>
<tr><td>Red cells on microscopy</td><td>Few</td><td>Many, dysmorphic</td></tr>
<tr><td>Casts</td><td>Pigmented granular casts</td><td>Red cell casts</td></tr>
<tr><td>Protein on the dipstick</td><td>Trace</td><td>2+</td></tr>
<tr><td>CK</td><td>48000 U/L</td><td>Normal</td></tr>
</tbody></table>
<p><em>Illustrative data.</em></p>
<p>What best explains each patient's urine?</p>`,
        options: ["A rhabdomyolysis; B glomerulonephritis", "A glomerulonephritis; B rhabdomyolysis", "A a kidney stone; B rhabdomyolysis", "A glomerulonephritis; B a bladder tumor", "A intravascular hemolysis; B a kidney stone"],
        answer: 0,
        explanation: `<p><strong>The dipstick detects heme, so blood with few red cells means a pigment.</strong></p>
<ul>
<li><strong>Patient A:</strong> few red cells, pigmented casts, and a very high CK mean myoglobin from rhabdomyolysis.</li>
<li><strong>Patient B:</strong> many dysmorphic red cells and red cell casts mean the blood comes through the glomerulus, so glomerulonephritis. Serology and complement come next.</li>
</ul>
<p>Stones or a tumor bleed with many normal-shaped red cells and no red cell casts.</p>`,
        notes: {
            1: "The patients are reversed; dysmorphic cells and red cell casts belong to B.",
            2: "A stone gives many normal-shaped red cells, not few, and B has red cell casts.",
            3: "A has few red cells and a high CK, and a bladder tumor would give normal-shaped cells.",
            4: "Hemolysis also gives blood with few red cells, but the very high CK points to muscle, and B's red cell casts are glomerular.",
        },
    },

];
