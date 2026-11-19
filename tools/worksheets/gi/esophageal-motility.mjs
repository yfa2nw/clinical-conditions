// Worksheet for the Esophageal motility disorders page, built by tools/build-worksheet-pdf.mjs gi esophageal-motility.
// Part 1 follows the page's sections; Part 2 asks for inference and avoids the quiz's questions.
// Question types: blank (html with [[answer]] marks), match (items, options, and the option index for each item),
// mc (options and answer; select: 2 or justify: <words>), sa, and order (items and the correct order of their indexes).

export const WORKSHEET = {
    title: "Esophageal motility disorders",
    // The first page: one flowchart of the whole page, with [[answer]] blanks to fill in
    flowchart: {
        title: "From neuromuscular failure to treatment",
        top: "Dysfunction of nerves or [[smooth muscle]] → abnormal motility of the LES or mid-distal esophagus → [[dysphagia]] to solids and liquids",
        rows: ["Cause", "Why it happens", "Barium and manometry", "Treatment"],
        columns: [
            ["1. Achalasia", "Idiopathic or [[Trypanosoma cruzi]]: loss of myenteric neurons → decreased NO and VIP → increased LES tone, absent peristalsis", "[[Bird's beak]] with a dilated esophagus; IRP over [[15]] mm Hg with absent peristalsis; types I, II, and III", "Pneumatic dilation or myotomy (Heller with a partial fundoplication, or [[POEM]] for type III); CCB, nitrates, or botulinum if unfit"],
            ["2. Diffuse esophageal spasm", "A trigger, possibly increased [[ACh]] release → simultaneous, premature contractions", "[[Corkscrew]] or rosary-bead esophagus; premature contractions in 20% or more of swallows", "[[CCB]] or nitrates; pneumatic dilation or botulinum are other options"],
            ["3. Esophageal scleroderma", "Systemic sclerosis, often [[CREST]]: atrophy and fibrosis of the distal smooth muscle; proximal motility preserved", "Weak distal peristalsis and [[low]] LES pressure", "PPIs; avoid [[Nissen]] fundoplication"],
        ],
        span: "Every patient: barium swallow first, [[EGD]] to exclude pseudoachalasia from a tumor, and manometry as the gold standard",
        chains: [
            { label: "When food is retained", steps: [["LES does not open", "Food stays in the esophagus"], ["Dilated esophagus", "Regurgitation and weight loss"], ["Aspiration", "[[Pneumonia]]"], ["Chronic irritation", "[[Squamous cell]] carcinoma or adenocarcinoma"]] },
            { label: "Other causes of dysphagia", steps: [["Zenker diverticulum", "Through the [[Killian]] triangle; barium swallow"], ["Schatzki ring", "Dilation, then a PPI"], ["Plummer-Vinson", "[[Iron]]-deficiency anemia and a web"], ["Eosinophilic esophagitis", "Atopy; EGD with biopsy"]] },
        ],
    },
    review: [
        {
            section: "Pathophysiology",
            questions: [
                { id: "r-path-blanks", type: "blank",
                    html: "Motility disorders are [[neuromuscular]] dysfunctions of the esophagus that cause [[dysphagia]]. Abnormal motility in the [[LES]] or the mid-distal esophagus stops food passing normally, and food that stays in the esophagus predisposes to [[aspiration pneumonia]] and [[cancer]]." },
                { id: "r-path-match", type: "match",
                    stem: "Match each dysfunction to what it does.",
                    items: ["Failed LES relaxation", "Disorganized contractions", "Atrophy and fibrosis", "Retained food"],
                    options: ["Uncoordinated mid-distal motility, as in diffuse esophageal spasm", "Aspiration pneumonia and cancer", "Decreased NO and VIP raising LES tone, as in achalasia", "Weakened smooth muscle with decreased LES tone, as in scleroderma"],
                    answer: [2, 0, 3, 1],
                    explanation: "The LES is too tight in achalasia and too weak in scleroderma; in diffuse esophageal spasm the body contracts out of sequence." },
                { id: "r-path-opposites", type: "sa", lines: 2,
                    stem: "Why are achalasia and esophageal scleroderma described as opposites at the LES?",
                    answer: "Achalasia raises LES tone so it will not open; scleroderma lowers it so acid refluxes freely.",
                    explanation: "Both weaken mid-distal motility, but LES tone moves in opposite directions, so their symptoms and treatments are opposed." },
            ],
        },
        {
            section: "Etiology",
            questions: [
                { id: "r-cause-table", type: "blank",
                    stem: "Complete the table of causes.",
                    html: `<table><thead><tr><th>Cause</th><th>Mechanism</th></tr></thead><tbody>
<tr><td>1. Achalasia</td><td>Idiopathic or [[Trypanosoma cruzi]] → decreased [[myenteric]] plexus activity → decreased NO and VIP → [[increased]] LES tone and decreased mid-distal motility</td></tr>
<tr><td>2. Diffuse esophageal spasm</td><td>A trigger, possibly increased ACh release → [[simultaneous]], premature contractions → disorganized mid-distal motility</td></tr>
<tr><td>3. Esophageal scleroderma</td><td>Systemic sclerosis, often limited ([[CREST]]) → atrophy and [[fibrosis]] of the distal smooth muscle → decreased LES tone; [[proximal]] motility preserved</td></tr>
</tbody></table>` },
                { id: "r-cause-no", type: "sa", lines: 2,
                    stem: "Why does losing NO and VIP neurons make the LES too tight, rather than too weak?",
                    answer: "NO and VIP are the inhibitory signals that relax smooth muscle; without them, excitatory tone is unopposed.",
                    explanation: "The excitatory cholinergic drive remains in achalasia, which is also why blocking ACh with botulinum lowers LES tone." },
                { id: "r-cause-proximal", type: "mc",
                    stem: "Why is proximal esophageal motility preserved in scleroderma?",
                    options: ["Its muscle is skeletal, which the disease spares", "The proximal esophagus has no myenteric plexus", "Fibrosis begins at the upper sphincter and moves down", "The proximal esophagus is protected by acid from the stomach", "Scleroderma affects only the LES itself"], answer: 0,
                    explanation: "Scleroderma causes atrophy and fibrosis of smooth muscle, which forms the distal esophagus; the upper esophagus is skeletal muscle.",
                    notes: { 1: "The myenteric plexus runs the length of the esophagus.", 2: "The distal smooth muscle is affected, not the upper sphincter.", 3: "Acid injures the distal mucosa; it protects nothing.", 4: "Distal peristalsis is weakened too, not only the LES." } },
            ],
        },
        {
            section: "Symptoms and complications",
            questions: [
                { id: "r-sx-match", type: "match",
                    stem: "Match each presentation to its disorder.",
                    items: ["Progressive dysphagia to solids and liquids, regurgitation, and weight loss", "Episodic chest pain after iced drinks or eating quickly", "Severe reflux with Raynaud phenomenon and sclerodactyly"],
                    options: ["Esophageal scleroderma", "Achalasia", "Diffuse esophageal spasm"],
                    answer: [1, 2, 0],
                    explanation: "Achalasia obstructs steadily, spasm comes in episodes that can mimic angina, and scleroderma presents as severe reflux within CREST." },
                { id: "r-sx-crest", type: "blank",
                    html: "CREST is [[calcinosis]], [[Raynaud]] phenomenon, esophageal [[dysmotility]], [[sclerodactyly]], and [[telangiectasia]]." },
                { id: "r-sx-gerd", type: "sa", lines: 2,
                    stem: "Heartburn occurs in 27–42% of achalasia. Why does this matter, and what should prompt suspicion?",
                    answer: "It is often mistreated as GERD; reflux symptoms that persist despite PPIs should raise suspicion of achalasia.",
                    explanation: "The LES in achalasia is tight, so acid suppression does not relieve the symptoms." },
                { id: "r-sx-comp", type: "mc", select: 2,
                    stem: "Which are complications of long-standing achalasia?",
                    options: ["Aspiration pneumonia", "Esophageal squamous cell carcinoma", "Gastric MALT lymphoma", "Severe acid reflux from a weak LES", "Barrett esophagus from a low LES pressure"], answer: [0, 1],
                    explanation: "Food retained above the LES is aspirated and chronically irritates the mucosa, leading to squamous cell carcinoma or adenocarcinoma.",
                    notes: { 2: "MALT lymphoma is driven by H. pylori in the stomach.", 3: "The LES in achalasia is tight, not weak.", 4: "Low LES pressure is a feature of scleroderma, not achalasia." } },
            ],
        },
        {
            section: "Diagnosis",
            questions: [
                { id: "r-dx-order", type: "order",
                    stem: "Number the tests for suspected achalasia in the usual order.",
                    items: ["High-resolution manometry", "Barium swallow", "EGD"],
                    order: [1, 2, 0],
                    explanation: "Barium swallow is the first test, EGD excludes pseudoachalasia from a tumor, and manometry, the gold standard, confirms and classifies." },
                { id: "r-dx-types", type: "blank",
                    stem: "Complete the Chicago classification of achalasia.",
                    html: `<table><thead><tr><th>Type</th><th>Esophageal body</th><th>Response to treatment</th></tr></thead><tbody>
<tr><td>I</td><td>No [[pressurization]]</td><td>Intermediate</td></tr>
<tr><td>II</td><td>[[Panesophageal]] pressurization</td><td>[[Best]]</td></tr>
<tr><td>III</td><td>[[Premature]], spastic contractions</td><td>[[Least]]; POEM preferred</td></tr>
</tbody></table>` },
                { id: "r-dx-irp", type: "sa", lines: 2,
                    stem: "A patient has spastic contractions on manometry. Which single measurement separates type III achalasia from diffuse esophageal spasm, and how?",
                    answer: "The IRP: over 15 mm Hg in achalasia, where the LES does not relax; normal in diffuse esophageal spasm.",
                    explanation: "Both have premature contractions, but only achalasia has failed LES relaxation." },
                { id: "r-dx-other", type: "match",
                    stem: "Match each other cause of dysphagia to the test that shows it.",
                    items: ["Pseudoachalasia", "Zenker diverticulum", "Plummer-Vinson syndrome", "Eosinophilic esophagitis"],
                    options: ["Iron studies and EGD for an upper web", "EGD with biopsy", "EGD for a tumor at the junction or fundus", "Barium swallow; manometry is unhelpful"],
                    answer: [2, 3, 0, 1],
                    explanation: "Structural causes need imaging or endoscopy; only motility disorders are defined by manometry." },
                { id: "r-dx-zenker", type: "blank",
                    html: "Zenker diverticulum is a [[false]] diverticulum, herniating through the Killian triangle between the [[cricopharyngeus]] and the inferior pharyngeal constrictor. It occurs in [[older men]], with regurgitation of food, [[halitosis]], and aspiration." },
            ],
        },
        {
            section: "Treatment",
            questions: [
                { id: "r-tx-match", type: "match",
                    stem: "Match each treatment to how it lowers LES pressure.",
                    items: ["Pneumatic dilation", "Heller myotomy or POEM", "Botulinum injection", "CCB", "Nitrates"],
                    options: ["Blocks ACh release from excitatory nerves", "Releases NO, relaxing smooth muscle", "Stretches and tears the sphincter muscle", "Blocks calcium entry into smooth muscle", "Cuts the sphincter muscle"],
                    answer: [2, 4, 0, 3, 1],
                    explanation: "All achalasia treatments disrupt or relax the LES; dilation and myotomy are durable, while drugs and botulinum are for patients unfit for them." },
                { id: "r-tx-sclero", type: "mc",
                    stem: "Why is Nissen fundoplication avoided in esophageal scleroderma?",
                    options: ["Weak peristalsis cannot push food through a tight wrap", "The wrap would raise LES pressure above that of achalasia", "Fundoplication worsens Raynaud phenomenon", "Scleroderma makes the stomach too stiff to wrap", "PPIs are always effective, so surgery is never needed"], answer: 0,
                    explanation: "A Nissen wrap tightens the LES; a weak esophagus cannot overcome it, so dysphagia follows. PPIs are the treatment.",
                    notes: { 1: "The problem is propulsion, not the exact pressure reached.", 2: "Raynaud phenomenon is unrelated to the surgery.", 3: "The concern is the esophagus, not the stomach.", 4: "The reason is mechanical, not that PPIs always work." } },
                { id: "r-tx-other", type: "blank",
                    html: "Zenker diverticulum: cricopharyngeal [[myotomy]] with diverticulectomy. Schatzki ring: [[dilation]], then a PPI to prevent recurrence. Plummer-Vinson syndrome: [[iron]] replacement and dilation of the web if needed, watching for [[squamous cell carcinoma]]." },
            ],
        },
    ],
    practice: {
        scenarios: [
            {
                title: "Heartburn that will not settle",
                keyPoints: [
                    "Reflux symptoms that persist despite PPIs, with regurgitation of undigested food, should raise suspicion of achalasia.",
                    "Dysphagia to solids and liquids from the start points to a motility disorder rather than a narrowing.",
                    "A bird's beak can be a tumor: EGD excludes pseudoachalasia before manometry or treatment.",
                    "An IRP over 15 mm Hg with absent peristalsis is achalasia, and the pattern of the body sets the type and the outlook.",
                    "Treatments for achalasia lower LES pressure, so a partial fundoplication is added to a Heller myotomy to limit reflux.",
                    "Retained food causes aspiration pneumonia and, over years, esophageal cancer.",
                ],
                blocks: [
                    { passage: `<p>A 38-year-old teacher has been treated for GERD for 18 months, most recently with esomeprazole 40 mg twice daily, with no change in her heartburn. On questioning, water and bread both stick behind her sternum, she drinks large volumes to "push food down," and she wakes coughing with undigested food on her pillow. She has lost 6 kg. She has never traveled outside Australia.</p>`,
                        questions: [
                            { id: "s1-why", type: "sa", lines: 3,
                                stem: "Give two features of her history that argue against GERD as the whole explanation, and say what each suggests.",
                                answer: "Dysphagia to liquids as well as solids suggests failed propulsion; heartburn unchanged on twice-daily PPI suggests the burning is not acid reflux.",
                                explanation: "Regurgitation of undigested food and weight loss point to food retained above a closed LES." },
                            { id: "s1-cause", type: "mc",
                                stem: "Which cause of her condition is most likely?",
                                options: ["Idiopathic loss of myenteric neurons", "Trypanosoma cruzi infection", "Systemic sclerosis", "Excess ACh release in the esophageal body", "A peptic stricture from long-standing reflux"], answer: 0,
                                explanation: "Achalasia is idiopathic or due to T. cruzi; with no travel to Latin America, idiopathic achalasia is most likely.",
                                notes: { 1: "T. cruzi is spread in Latin America, where she has never been.", 2: "Scleroderma lowers LES tone, causing reflux without dysphagia to liquids from the start.", 3: "Possible excess ACh release is the proposed trigger in diffuse esophageal spasm.", 4: "A stricture catches solids first, and liquids pass." } },
                        ] },
                    { passage: `<p>Barium swallow shows a dilated esophagus with an air-fluid level, tapering smoothly to a bird's beak at the gastroesophageal junction. EGD shows retained food and a tight junction that the scope passes with gentle pressure; there is no mass at the junction or in the fundus on retroflexion.</p>
<table><thead><tr><th>High-resolution manometry (10 swallows)</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>IRP</td><td>29 mm Hg</td><td>15 mm Hg or less</td></tr>
<tr><td>Swallows with normal peristalsis</td><td>0 of 10</td><td>7 or more</td></tr>
<tr><td>Swallows with pressurization</td><td>0 of 10</td><td>None</td></tr>
<tr><td>Swallows with premature contractions</td><td>0 of 10</td><td>Under 20%</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s1-egd", type: "sa", lines: 2,
                                stem: "Why was the EGD needed before manometry, and what did it show?",
                                answer: "To exclude pseudoachalasia from a tumor at the junction or fundus; it showed no mass.",
                                explanation: "A tumor can produce the same bird's beak and manometry as achalasia." },
                            { id: "s1-type", type: "mc", justify: 12,
                                stem: "How is her manometry best classified? Briefly justify your choice.",
                                options: ["Type I achalasia", "Type II achalasia", "Type III achalasia", "Diffuse esophageal spasm", "Esophageal scleroderma"], answer: 0,
                                justifyAnswer: "IRP over 15 mm Hg, absent peristalsis, and no pressurization or spasm.",
                                explanation: "Type I has no pressurization, type II panesophageal pressurization, and type III premature, spastic contractions.",
                                notes: { 1: "Type II needs panesophageal pressurization, and she has none.", 2: "Type III needs premature contractions.", 3: "Diffuse esophageal spasm has a normal IRP.", 4: "Scleroderma has a low LES pressure, not an IRP of 29." } },
                        ] },
                    { passage: `<p>She chooses laparoscopic Heller myotomy. The surgeon plans to add a partial (rather than a Nissen) fundoplication.</p>`,
                        questions: [
                            { id: "s1-wrap", type: "sa", lines: 3,
                                stem: "Explain why a wrap is added at all, and why it is partial rather than full.",
                                answer: "The myotomy opens the LES, so reflux follows; a full wrap would rebuild a barrier her aperistaltic esophagus cannot push through.",
                                explanation: "A partial wrap limits reflux while letting an esophagus that empties by gravity drain into the stomach." },
                            { id: "s1-alternatives", type: "mc", select: 2,
                                stem: "Which other treatments would be reasonable first choices for her, as a fit patient?",
                                options: ["Pneumatic dilation", "POEM", "Nifedipine before meals", "Botulinum injection", "A higher PPI dose"], answer: [0, 1],
                                explanation: "Pneumatic dilation is first line for most types, and myotomy (Heller or POEM) is the other definitive option; drugs and botulinum are for patients unfit for these.",
                                notes: { 2: "CCBs are for patients unfit for dilation or myotomy.", 3: "Botulinum wears off and suits patients unfit for procedures.", 4: "A PPI does not open the LES." } },
                        ] },
                    { passage: `<p>Her sister, 64, has had untreated achalasia for 30 years and refused treatment. She is admitted with fever, a cough, and right lower lobe consolidation after a night of regurgitation.</p>`,
                        questions: [
                            { id: "s1-sister", type: "sa", lines: 3,
                                stem: "Explain how her achalasia led to this admission, and name the other long-term risk it carries.",
                                answer: "Retained food was regurgitated and aspirated, causing pneumonia; chronic stasis also raises the risk of esophageal cancer.",
                                explanation: "Squamous cell carcinoma and adenocarcinoma are both complications of achalasia." },
                        ] },
                ],
            },
            {
                title: "Chest pain with cold drinks",
                keyPoints: [
                    "Esophageal chest pain can mimic angina, so the heart is assessed first.",
                    "Pain set off by eating quickly or by hot or cold drinks, with intermittent dysphagia, suggests diffuse esophageal spasm.",
                    "Premature contractions in 20% or more of swallows with a normal IRP are diffuse esophageal spasm; a high IRP would mean type III achalasia.",
                    "CCBs and nitrates relax smooth muscle; pneumatic dilation or botulinum injection are other options.",
                    "Type III achalasia responds least to treatment, and POEM is preferred for it.",
                ],
                blocks: [
                    { passage: `<p>A 61-year-old man with hypertension has 6 months of sudden, squeezing retrosternal pain lasting 5–10 minutes. Episodes come with meals, especially when he eats fast or drinks iced water, and sometimes food briefly sticks. One woke him at night. He presented to the emergency department during an episode.</p>
<table><thead><tr><th>Test</th><th>During pain</th><th>6 hours later</th></tr></thead><tbody>
<tr><td>High-sensitivity troponin (ng/L, reference under 15)</td><td>4</td><td>4</td></tr>
<tr><td>ECG</td><td>Sinus rhythm, no ST changes</td><td>Unchanged</td></tr>
</tbody></table><p>A CT coronary angiogram shows no significant stenosis.</p>`,
                        questions: [
                            { id: "s2-heart", type: "sa", lines: 2,
                                stem: "Why was the heart assessed before the esophagus?",
                                answer: "Esophageal spasm can mimic angina, and missing a cardiac cause would be dangerous.",
                                explanation: "Both cause squeezing retrosternal pain; the troponin, ECG, and angiogram now make a cardiac cause unlikely." },
                            { id: "s2-clues", type: "mc", select: 2,
                                stem: "Which features point toward an esophageal cause?",
                                options: ["Pain triggered by iced water", "Pain with meals and food briefly sticking", "A history of hypertension", "Episodes lasting 5–10 minutes", "Pain that woke him at night"], answer: [0, 1],
                                explanation: "Triggers related to swallowing, and intermittent dysphagia, suggest diffuse esophageal spasm.",
                                notes: { 2: "Hypertension is a cardiac risk factor.", 3: "Angina and spasm can both last minutes.", 4: "Both cardiac and esophageal pain can occur at night." } },
                        ] },
                    { passage: `<p>Barium swallow shows a corkscrew appearance of the mid-distal esophagus. EGD is normal.</p>
<table><thead><tr><th>High-resolution manometry (10 swallows)</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>IRP</td><td>11 mm Hg</td><td>15 mm Hg or less</td></tr>
<tr><td>Swallows with premature contractions</td><td>3 of 10 (30%)</td><td>Under 20%</td></tr>
<tr><td>Swallows with normal peristalsis</td><td>6 of 10</td><td>7 or more</td></tr>
</tbody></table><p><em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s2-dx", type: "mc", justify: 12,
                                stem: "What is the diagnosis? Briefly justify your choice.",
                                options: ["Diffuse esophageal spasm", "Type III achalasia", "Type II achalasia", "Esophageal scleroderma", "A normal study"], answer: 0,
                                justifyAnswer: "Premature contractions in 30% of swallows, with a normal IRP.",
                                explanation: "Diffuse esophageal spasm needs premature contractions in 20% or more of swallows, and the LES relaxes normally.",
                                notes: { 1: "Type III achalasia needs an IRP over 15 mm Hg.", 2: "Type II achalasia has absent peristalsis and a high IRP.", 3: "Scleroderma shows weak peristalsis and a low LES pressure.", 4: "30% premature swallows is above the 20% threshold." } },
                            { id: "s2-ccb", type: "sa", lines: 3,
                                stem: "His BP is above target on his current drug. Explain why adding a CCB makes sense for both problems, and name one alternative drug class for the spasm.",
                                answer: "A CCB blocks calcium entry, relaxing vascular and esophageal smooth muscle, lowering BP and the premature contractions; nitrates are an alternative.",
                                explanation: "Pneumatic dilation or botulinum injection are other options if drugs fail." },
                        ] },
                    { passage: `<p>Two years later his dysphagia has become constant, to solids and liquids, and he has lost 7 kg. Repeat manometry shows an IRP of 26 mm Hg, no normal peristalsis, and premature, spastic contractions in 7 of 10 swallows. EGD shows no mass.</p>`,
                        questions: [
                            { id: "s2-change", type: "sa", lines: 2,
                                stem: "What has the diagnosis become, and which result shows the change?",
                                answer: "Type III achalasia; the IRP is now over 15 mm Hg, so the LES no longer relaxes.",
                                explanation: "Spastic contractions plus failed LES relaxation and absent peristalsis are type III achalasia." },
                            { id: "s2-poem", type: "mc",
                                stem: "Which treatment is preferred now, and why?",
                                options: ["POEM, because the myotomy can extend up the spastic body", "Nissen fundoplication, because reflux drives the spasm", "Higher-dose amlodipine, because CCBs work best in type III", "Cricopharyngeal myotomy, because the spasm starts at the top", "Iron replacement, because the dysphagia is from a web"], answer: 0,
                                explanation: "POEM is preferred for type III, which responds least to treatment; its myotomy can be extended as far up the esophagus as the spasm reaches.",
                                notes: { 1: "Nissen fundoplication tightens the LES, which is already too tight.", 2: "Drugs are for patients unfit for dilation or myotomy.", 3: "Cricopharyngeal myotomy treats a Zenker diverticulum.", 4: "A web causes postcricoid dysphagia with iron deficiency, not a high IRP." } },
                        ] },
                ],
            },
            {
                title: "Cold fingers and constant reflux",
                keyPoints: [
                    "Scleroderma causes atrophy and fibrosis of the distal smooth muscle, lowering LES tone and weakening distal peristalsis.",
                    "The proximal esophagus is skeletal muscle, so proximal motility is preserved.",
                    "Esophageal scleroderma behaves like severe GERD and is treated with PPIs.",
                    "Treatments that lower LES pressure, including the CCBs used for Raynaud phenomenon, can worsen reflux.",
                    "Nissen fundoplication is avoided, because weak peristalsis cannot push food through a tight wrap.",
                ],
                blocks: [
                    { passage: `<p>A 52-year-old woman has had painful, color-changing fingers in the cold for 10 years. She now has tight skin over her fingers, small red spots on her face and lips, and hard nodules at her fingertips on x-ray. For a year she has had daily heartburn, regurgitation of sour fluid when she bends over, and food sticking low in her chest.</p>`,
                        questions: [
                            { id: "s3-crest", type: "sa", lines: 2,
                                stem: "Name the syndrome, and match each of her features to a letter of its name.",
                                answer: "CREST: calcinosis (nodules), Raynaud phenomenon (fingers), esophageal dysmotility (reflux, dysphagia), sclerodactyly (tight skin), telangiectasia (red spots).",
                                explanation: "Limited systemic sclerosis is the usual cause of esophageal scleroderma." },
                        ] },
                    { passage: `<table><thead><tr><th>High-resolution manometry</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Resting LES pressure</td><td>4 mm Hg</td><td>10–35 mm Hg</td></tr>
<tr><td>Distal contraction strength</td><td>Weak or absent in 9 of 10 swallows</td><td>Normal in 7 or more</td></tr>
<tr><td>Proximal contractions</td><td>Normal</td><td>Normal</td></tr>
</tbody></table><p>EGD shows erosive esophagitis in the distal esophagus. <em>Illustrative data.</em></p>`,
                        questions: [
                            { id: "s3-manometry", type: "sa", lines: 3,
                                stem: "Explain how her manometry accounts for both her reflux and her dysphagia, and why the proximal result is normal.",
                                answer: "A weak LES lets acid reflux, and weak distal contractions clear acid and food slowly; the proximal esophagus is skeletal muscle and is spared.",
                                explanation: "Atrophy and fibrosis of distal smooth muscle lower LES tone and distal motility." },
                            { id: "s3-tx", type: "mc", justify: 12,
                                stem: "Which treatment is most appropriate for her esophagus? Briefly justify your choice.",
                                options: ["A PPI", "Pneumatic dilation", "Botulinum injection into the LES", "Heller myotomy", "A nitrate before meals"], answer: 0,
                                justifyAnswer: "A weak LES causes severe reflux; acid suppression protects the mucosa.",
                                explanation: "Esophageal scleroderma is treated with PPIs; every achalasia treatment lowers LES pressure further.",
                                notes: { 1: "Dilation lowers LES pressure, worsening reflux.", 2: "Botulinum lowers LES pressure.", 3: "Myotomy cuts an already weak sphincter.", 4: "Nitrates relax smooth muscle and lower LES tone." } },
                        ] },
                    { passage: `<p>Her rheumatologist plans to start nifedipine for worsening Raynaud phenomenon. Six months later, despite a twice-daily PPI, she still has troublesome regurgitation, and she asks about antireflux surgery.</p>`,
                        questions: [
                            { id: "s3-nifedipine", type: "sa", lines: 2,
                                stem: "What effect might nifedipine have on her esophageal symptoms, and why?",
                                answer: "It may worsen reflux, because it relaxes smooth muscle and lowers LES tone further.",
                                explanation: "CCBs relax the LES, which helps in achalasia and spasm but harms a sphincter that is already weak." },
                            { id: "s3-surgery", type: "mc", select: 2,
                                stem: "Which statements about Nissen fundoplication for her are correct?",
                                options: ["It is avoided in esophageal scleroderma", "Her weak peristalsis could not push food through a tight wrap", "It is the preferred treatment once a PPI fails", "It would restore her distal peristalsis", "It is safe because her proximal motility is preserved"], answer: [0, 1],
                                explanation: "A Nissen wrap tightens the LES; with weak distal propulsion, food would stick above it.",
                                notes: { 2: "Nissen fundoplication is avoided in scleroderma.", 3: "No surgery restores peristalsis.", 4: "The distal esophagus must push food through the wrap, and it is the weak part." } },
                        ] },
                ],
            },
            {
                title: "Tired and stuck at the throat",
                keyPoints: [
                    "Dysphagia high in the throat with iron-deficiency anemia in a middle-aged woman suggests Plummer-Vinson syndrome.",
                    "Iron studies and EGD look for the deficiency and the upper esophageal web.",
                    "Iron replacement, with dilation of the web if needed, is the treatment, and surveillance for squamous cell carcinoma follows.",
                    "Structural causes of dysphagia are found by barium swallow and EGD; manometry defines only motility disorders.",
                    "Halitosis and regurgitation of old food in an older man point instead to a Zenker diverticulum.",
                ],
                blocks: [
                    { passage: `<p>A 47-year-old woman has 4 months of difficulty swallowing solids, which stick just below her larynx. She feels tired and short of breath on stairs. She has heavy periods. Examination shows pale conjunctivae, cracks at the corners of her mouth, and spoon-shaped nails.</p>
<table><thead><tr><th>Test</th><th>Result</th><th>Reference</th></tr></thead><tbody>
<tr><td>Hemoglobin</td><td>92 g/L</td><td>115–165</td></tr>
<tr><td>MCV</td><td>71 fL</td><td>80–100</td></tr>
<tr><td>Ferritin</td><td>5 µg/L</td><td>30–300</td></tr>
</tbody></table>`,
                        questions: [
                            { id: "s4-dx", type: "mc", justify: 12,
                                stem: "What is the most likely diagnosis? Briefly justify your choice.",
                                options: ["Plummer-Vinson syndrome", "Zenker diverticulum", "Achalasia", "Schatzki ring", "Eosinophilic esophagitis"], answer: 0,
                                justifyAnswer: "Middle-aged woman, iron-deficiency anemia, and postcricoid dysphagia.",
                                explanation: "Plummer-Vinson syndrome combines iron-deficiency anemia, postcricoid dysphagia, and an upper esophageal web.",
                                notes: { 1: "Zenker diverticulum affects older men, with halitosis and regurgitation of food.", 2: "Achalasia causes dysphagia to liquids too, felt low in the chest.", 3: "A Schatzki ring sits in the distal esophagus.", 4: "Eosinophilic esophagitis presents with atopy and food impaction." } },
                            { id: "s4-tests", type: "sa", lines: 2,
                                stem: "Which investigations confirm the diagnosis, and why is manometry not among them?",
                                answer: "Iron studies and EGD for an upper esophageal web; a web is structural, not a motility disorder.",
                                explanation: "Manometry defines motility disorders; structural causes need endoscopy or barium." },
                        ] },
                    { passage: `<p>EGD shows a thin web in the upper esophagus. She starts oral iron, and her periods are investigated. Three months later her hemoglobin is 128 g/L, and her swallowing is much better.</p>`,
                        questions: [
                            { id: "s4-follow", type: "sa", lines: 3,
                                stem: "What should happen if dysphagia returns despite normal iron, and what long-term risk should her follow-up watch for?",
                                answer: "Dilate the web; watch for squamous cell carcinoma.",
                                explanation: "Iron replacement and dilation of the web if needed are the treatment; the syndrome predisposes to squamous cell carcinoma." },
                            { id: "s4-compare", type: "order",
                                stem: "Her 79-year-old father has halitosis and regurgitates food eaten hours earlier. Number his care in order.",
                                items: ["Cricopharyngeal myotomy with diverticulectomy", "Barium swallow showing a pouch above the cricopharyngeus", "History suggesting a Zenker diverticulum"],
                                order: [2, 1, 0],
                                explanation: "Barium swallow shows a Zenker diverticulum (manometry is unhelpful), and it is treated by cricopharyngeal myotomy with diverticulectomy, open or endoscopic." },
                        ] },
                ],
            },
        ],
    },
};
