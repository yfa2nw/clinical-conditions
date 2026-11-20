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

];
