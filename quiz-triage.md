# Quiz triage

Working list for the quiz overhaul in `requests.md` (Request 1), made by `node tools/triage-quiz.mjs`. Each old question was given a kind from its length, its data, and what it asks: analysis for long cases or 4 or more values to interpret, reasoning for why, how, mechanism, or next-step questions, and memory for short recall. Check the kind when rewriting a page.

Verdicts:

- **keep**: fits the new style as it is.
- **keep, expand**: the question fits, but the explanation needs the why and how and a note on every wrong option.
- **rewrite**: the question itself needs changing (a negative lead-in, or a memory question that is too long).
- **drop**: repeats another question on the page.

Over target: a kind with more kept questions than its target; move the extras to another kind by rewriting them, or drop the weakest.

Pages marked done have been rewritten to the new style; their ids are in `DONE` in the script. The kinds on the other pages were proposed from each question's length, data, and what it asks, so check them when rewriting.

Across the 5 banks: 1589 questions now, against a target of 4955. 1011 keep, 571 keep with a fuller explanation, 7 rewrite, and 0 drop; about 3481 new questions are still to write.

## GI conditions (`gi/questions.js`)

| Page | Memory | Reasoning | Analysis | Target | Still to write | Over target | Needs work |
|---|---|---|---|---|---|---|---|
| GERD and Esophagitis (done) | 14/14 | 14/14 | 7/7 | 35 | 0 |  | 0 |
| Esophageal Motility Disorders (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Gastritis and Peptic Ulcer Disease (done) | 16/16 | 16/16 | 8/8 | 40 | 0 |  | 0 |
| Gastric Tumors (done) | 16/16 | 16/16 | 8/8 | 40 | 0 |  | 0 |
| Malabsorption (done) | 10/14 | 10/14 | 5/7 | 35 | 10 |  | 0 |
| Diverticular Diseases (done) | 6/12 | 6/12 | 3/6 | 30 | 15 |  | 0 |
| Inflammatory Bowel Disease: Comparison and Workup (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Irritable Bowel Syndrome (IBS) (done) | 4/10 | 4/10 | 2/5 | 25 | 15 |  | 0 |
| Acute Diarrhea (done) | 16/20 | 16/20 | 8/10 | 50 | 10 |  | 0 |
| Chronic Diarrhea (done) | 12/12 | 12/12 | 6/6 | 30 | 0 |  | 0 |
| Intestinal Ischemia (done) | 6/12 | 6/12 | 3/6 | 30 | 15 |  | 0 |
| Vascular Disorders of the Liver (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Viral Hepatitis (done) | 16/16 | 16/16 | 8/8 | 40 | 0 |  | 0 |
| Primary Biliary Cholangitis and Primary Sclerosing Cholangitis (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Hemochromatosis, Wilson Disease, and Alpha-1 Antitrypsin Deficiency (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Drug-Induced Liver Injury and Paracetamol Overdose (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Liver Masses and Cancer (done) | 6/10 | 6/10 | 3/5 | 25 | 10 |  | 0 |
| Acute Liver Failure (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Gallstones, Cholecystitis, and Biliary Fistulas (done) | 16/12 | 16/12 | 8/6 | 30 | 0 | 4 memory, 4 reasoning, 2 analysis | 0 |
| Choledocholithiasis and Ascending Cholangitis (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Biliary Tract and Periampullary Malignancies (done) | 6/6 | 6/6 | 3/3 | 15 | 0 |  | 0 |
| Acute Pancreatitis (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Appendicitis (done) | 4/12 | 4/12 | 2/6 | 30 | 20 |  | 0 |
| Localizing GI Bleeding (done) | 16/20 | 16/20 | 8/10 | 50 | 10 |  | 0 |
| Localizing Abdominal Pain (done) | 15/20 | 15/20 | 10/10 | 50 | 10 |  | 0 |
| Reading Liver Function Tests (done) | 15/20 | 15/20 | 10/10 | 50 | 10 |  | 0 |
| Barrett Esophagus and Esophageal Cancer | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Esophageal Tears and Varices | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Esophageal Disease: Comparison and Workup | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Functional Dyspepsia and Gastroparesis | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Stomach Disease: Comparison and Workup | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Alcohol-Associated Liver Disease | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD) | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Liver Abscess and Trauma | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Cirrhosis | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Portal Hypertension and Ascites | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Hepatic Encephalopathy and Hepatorenal Syndrome | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Liver Disease: Comparison and Workup | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Biliary Disease: Comparison and Workup | 0/6 | 0/6 | 0/3 | 15 | 15 |  | 0 |
| Chronic Pancreatitis | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Pancreatic Cancer | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Neuroendocrine Tumors and Carcinoid Syndrome | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Pancreatic Disease: Comparison and Workup | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Celiac Disease | 0/14 | 0/14 | 0/7 | 35 | 35 |  | 0 |
| Diarrhea and Malabsorption: Comparison and Workup | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Crohn Disease | 0/14 | 0/14 | 0/7 | 35 | 35 |  | 0 |
| Ulcerative Colitis | 0/14 | 0/14 | 0/7 | 35 | 35 |  | 0 |
| Small and Large Bowel Obstruction | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Volvulus and Intussusception | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Hernias | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Polyps and Colorectal Cancer | 0/14 | 0/14 | 0/7 | 35 | 35 |  | 0 |
| Constipation | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Anorectal Conditions | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Localizing Dysphagia | 0/18 | 0/18 | 0/9 | 45 | 45 |  | 0 |
| Localizing Jaundice | 0/20 | 0/20 | 0/10 | 50 | 50 |  | 0 |
| Localizing Nausea and Vomiting | 0/20 | 0/20 | 0/10 | 50 | 50 |  | 0 |
| Reading Abdominal Imaging | 0/20 | 0/20 | 0/10 | 50 | 50 |  | 0 |
| Reading Endoscopy | 0/20 | 0/20 | 0/10 | 50 | 50 |  | 0 |
| Autoimmune Hepatitis | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |

## GI physiology and pharmacology (`gi/physiology-questions.js`)

| Page | Memory | Reasoning | Analysis | Target | Still to write | Over target | Needs work |
|---|---|---|---|---|---|---|---|
| GI Embryology and Defects (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Gastric Secretion (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Emetic Center (done) | 10/10 | 10/10 | 5/5 | 25 | 0 |  | 0 |
| Liver Function (done) | 16/16 | 16/16 | 8/8 | 40 | 0 |  | 0 |
| Digestion and Absorption | 17/10 | 16/10 | 0/5 | 25 | 5 | 7 memory, 6 reasoning | 33 |
| Immune System of the Gut | 7/12 | 2/12 | 0/6 | 30 | 21 |  | 9 |
| Enteric Nervous System | 5/8 | 4/8 | 0/4 | 20 | 11 |  | 9 |
| Acid-Suppressing and Protective Drugs | 1/10 | 4/10 | 0/5 | 25 | 20 |  | 5 |
| Anti-Infectives | 0/20 | 2/20 | 0/10 | 50 | 48 |  | 2 |
| Antiemetics, Motility, and Pain Drugs | 2/20 | 0/20 | 0/10 | 50 | 48 |  | 2 |
| Laxatives and Antidiarrheals | 1/12 | 2/12 | 0/6 | 30 | 27 |  | 3 |
| IBD and Immune Drugs | 2/14 | 3/14 | 0/7 | 35 | 30 |  | 5 |
| Liver Drugs | 1/20 | 2/20 | 0/10 | 50 | 47 |  | 3 |
| Replacement Therapy | 0/8 | 2/8 | 0/4 | 20 | 18 |  | 2 |
| GI Cancer Drugs | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Drugs That Cause GI Disease | 2/4 | 0/4 | 0/2 | 10 | 8 |  | 2 |
| GI Hormones | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Biliary and Pancreatic Secretion | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Motility by Region | 0/16 | 0/16 | 0/8 | 40 | 40 |  | 0 |

### Digestion and Absorption

- `dg-salivary-amylase`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 102 characters; needs the why and how)
- `dg-amylase-products`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 137 characters; needs the why and how)
- `dg-sucrase`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 141 characters; needs the why and how)
- `dg-sglt1`: memory, **keep, expand** (explanation 62 characters; needs the why and how)
- `dg-glut-route`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 109 characters; needs the why and how)
- `dg-fiber`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 54 characters; needs the why and how)
- `dg-gastric-active`: memory, **keep, expand** (explanation 114 characters; needs the why and how)
- `dg-enterokinase`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 161 characters; needs the why and how)
- `dg-trypsin-cascade`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 115 characters; needs the why and how)
- `dg-pancreas-active`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 179 characters; needs the why and how)
- `dg-colipase`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 105 characters; needs the why and how)
- `dg-why-inactive`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 179 characters; needs the why and how)
- `dg-peptide-transport`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 140 characters; needs the why and how)
- `dg-bile-role`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 120 characters; needs the why and how)
- `dg-pancreatic-lipase`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 120 characters; needs the why and how)
- `dg-chylomicron`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 93 characters; needs the why and how)
- `dg-mct`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 89 characters; needs the why and how)
- `dg-bile-recycle`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 131 characters; needs the why and how)
- `dg-iron-reduction`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 85 characters; needs the why and how)
- `dg-iron-transport`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 110 characters; needs the why and how)
- `dg-hepcidin`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 127 characters; needs the why and how)
- `dg-b12-pancreas`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 123 characters; needs the why and how)
- `dg-b12-site`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 91 characters; needs the why and how)
- `dg-site-pairs`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 142 characters; needs the why and how)
- `dg-calcium`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 72 characters; needs the why and how)
- `dg-fat-soluble`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 134 characters; needs the why and how)
- `dg-copper-route`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 78 characters; needs the why and how)
- `dg-copper-liver`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 145 characters; needs the why and how)
- `dg-zinc`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 121 characters; needs the why and how)
- `dg-lactose`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 161 characters; needs the why and how)
- `dg-pancreatic-insufficiency`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 135 characters; needs the why and how)
- `dg-zes`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 109 characters; needs the why and how)
- `dg-celiac`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 138 characters; needs the why and how)

### Immune System of the Gut

- `imm-m-cell`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 179 characters; needs the why and how)
- `imm-pigr`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 221 characters; needs the why and how)
- `imm-iga-def`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 168 characters; needs the why and how)
- `imm-iga-celiac`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 110 characters; needs the why and how)
- `imm-typhoid`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 140 characters; needs the why and how)
- `imm-tolerance`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 136 characters; needs the why and how)
- `imm-vedolizumab`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 156 characters; needs the why and how)
- `imm-ustekinumab`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 116 characters; needs the why and how)
- `imm-newborn`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 136 characters; needs the why and how)

### Enteric Nervous System

- `ens-plexus`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 235 characters; needs the why and how)
- `ens-icc`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 143 characters; needs the why and how)
- `ens-reflex`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 152 characters; needs the why and how)
- `ens-hirschsprung`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 198 characters; needs the why and how)
- `ens-mmc`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 182 characters; needs the why and how)
- `ens-sympathetic`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 150 characters; needs the why and how)
- `ens-gastroparesis`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 185 characters; needs the why and how)
- `ens-loperamide`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 138 characters; needs the why and how)
- `ens-ogilvie`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 198 characters; needs the why and how)

### Acid-Suppressing and Protective Drugs

- `gp-ppi-timing`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 246 characters; needs the why and how)
- `gp-ppi-magnesium`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 126 characters; needs the why and how)
- `gp-cimetidine-warfarin`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 211 characters; needs the why and how)
- `gp-misoprostol-pregnancy`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 134 characters; needs the why and how)
- `gp-sucralfate-acid`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 219 characters; needs the why and how)

### Anti-Infectives

- `gp-fluconazole-warfarin`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 242 characters; needs the why and how)
- `gp-acyclovir-hydration`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 227 characters; needs the why and how)

### Antiemetics, Motility, and Pain Drugs

- `gp-neostigmine-ogilvie`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 222 characters; needs the why and how)
- `gp-loperamide-contra`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 215 characters; needs the why and how)

### Laxatives and Antidiarrheals

- `gp-alosetron-colitis`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 217 characters; needs the why and how)
- `gp-eluxadoline-cholecystectomy`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 241 characters; needs the why and how)
- `gp-lactulose-mechanism`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 189 characters; needs the why and how)

### IBD and Immune Drugs

- `gp-thiopurine-allopurinol`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 198 characters; needs the why and how)
- `gp-tpmt-testing`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 191 characters; needs the why and how)
- `gp-antitnf-screening`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 155 characters; needs the why and how)
- `gp-budesonide-firstpass`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 198 characters; needs the why and how)
- `gp-sulfasalazine-sperm`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 221 characters; needs the why and how)

### Liver Drugs

- `gp-nac-mechanism`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 200 characters; needs the why and how)
- `gp-penicillamine-switch`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 244 characters; needs the why and how)
- `gp-deferoxamine-yersinia`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 185 characters; needs the why and how)

### Replacement Therapy

- `gp-b12-oral`: reasoning, **keep, expand** (notes on 0 of 4 wrong options)
- `gp-folate-b12`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 192 characters; needs the why and how)

### Drugs That Cause GI Disease

- `gp-pill-esophagitis`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 153 characters; needs the why and how)
- `gp-cdiff-antibiotic`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 159 characters; needs the why and how)

## Neurology conditions (`neuro/questions.js`)

| Page | Memory | Reasoning | Analysis | Target | Still to write | Over target | Needs work |
|---|---|---|---|---|---|---|---|
| Stroke Syndromes by Location | 14/12 | 0/12 | 0/6 | 30 | 18 | 2 memory | 14 |
| Transient Ischemic Attack and Carotid Disease | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Acute Ischemic Stroke | 7/16 | 7/16 | 0/8 | 40 | 26 |  | 14 |
| Intracerebral Hemorrhage | 7/12 | 5/12 | 0/6 | 30 | 18 |  | 12 |
| Subarachnoid Hemorrhage | 7/12 | 5/12 | 0/6 | 30 | 18 |  | 12 |
| Cerebral Venous Thrombosis | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Stroke: Comparison and Workup | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Migraine | 0/6 | 0/6 | 0/3 | 15 | 15 |  | 0 |
| Tension-Type and Cluster Headache | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Trigeminal Neuralgia | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Secondary Headache | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Headache: Comparison and Workup | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Epidural and Subdural Hematoma | 6/6 | 3/6 | 0/3 | 15 | 6 |  | 9 |
| Concussion and Diffuse Axonal Injury | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Increased Intracranial Pressure and Herniation | 4/12 | 2/12 | 0/6 | 30 | 24 |  | 6 |
| Hydrocephalus and Normal Pressure Hydrocephalus | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Idiopathic Intracranial Hypertension | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Seizures | 4/14 | 10/14 | 0/7 | 35 | 21 |  | 14 |
| Status Epilepticus | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Epilepsy Syndromes | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Bacterial Meningitis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Viral Meningitis and Encephalitis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Brain Abscess and Other Infections | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Prion Disease and Progressive Multifocal Leukoencephalopathy | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| CNS Infection: Comparison and Workup | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Multiple Sclerosis | 8/10 | 6/10 | 0/5 | 25 | 11 |  | 14 |
| Neuromyelitis Optica Spectrum Disorder (NMOSD) | 9/12 | 3/12 | 0/6 | 30 | 18 |  | 12 |
| MOG Antibody-Associated Disease (MOGAD) | 6/6 | 3/6 | 0/3 | 15 | 6 |  | 9 |
| Autoimmune Encephalitis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Demyelinating and Autoimmune Disease: Comparison and Workup | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Spinal Cord Syndromes | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Spinal Cord Compression | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Transverse Myelitis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Spinal Cord Degeneration and Syringomyelia | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Nerve Palsies | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Facial Palsy | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Polyneuropathy | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Guillain-Barré Syndrome and CIDP | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Myasthenia Gravis and Lambert-Eaton Syndrome | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Amyotrophic Lateral Sclerosis and Spinal Muscular Atrophy | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Muscular Dystrophies | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Neuromuscular Disease: Comparison and Workup | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Adult Brain Tumors | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Pediatric Brain Tumors | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Neurocutaneous Syndromes | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Alzheimer Disease | 8/8 | 6/8 | 0/4 | 20 | 6 |  | 14 |
| Frontotemporal Dementia | 8/6 | 1/6 | 0/3 | 15 | 8 | 2 memory | 9 |
| Dementia with Lewy Bodies | 5/8 | 5/8 | 0/4 | 20 | 10 |  | 10 |
| Vascular Dementia | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Delirium | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Coma and Brain Death | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Wernicke-Korsakoff Syndrome | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Cognition and Consciousness: Comparison and Workup | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Motor Signs and Syndromes | 11/10 | 3/10 | 0/5 | 25 | 12 | 1 memory | 14 |
| Parkinson Disease | 4/10 | 8/10 | 0/5 | 25 | 13 |  | 12 |
| Atypical Parkinsonism | 9/8 | 1/8 | 0/4 | 20 | 11 | 1 memory | 10 |
| Huntington Disease | 5/8 | 5/8 | 0/4 | 20 | 10 |  | 10 |
| Tremor, Dystonia, and Tics | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Ataxias | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Glaucoma | 5/8 | 5/8 | 0/4 | 20 | 10 |  | 10 |
| Cataract | 3/4 | 7/4 | 0/2 | 10 | 3 | 3 reasoning | 10 |
| Red Eye | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Retinal Disease | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Optic Nerve and Pupils | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Vision Loss and Red Eye | 3/4 | 9/4 | 0/2 | 10 | 3 | 5 reasoning | 12 |
| Hearing Loss | 8/10 | 4/10 | 0/5 | 25 | 13 |  | 12 |
| Vertigo | 4/10 | 6/10 | 0/5 | 25 | 15 |  | 10 |
| Narcolepsy, Restless Legs, and Parasomnias | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Localizing a Lesion | 29/14 | 3/14 | 0/7 | 35 | 18 | 15 memory | 32 |
| Localizing Weakness | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Ruling Out Mimics | 26/8 | 2/8 | 0/4 | 20 | 10 | 18 memory | 28 |
| Choosing Imaging and EEG | 21/12 | 3/12 | 0/6 | 30 | 15 | 9 memory | 24 |
| Reading CSF | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |

### Stroke Syndromes by Location

- `ss-wallenberg`: memory, **rewrite** (long for a memory question; shorten to a direct what or which; notes on 3 of 4 wrong options)
- `ss-aca`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 197 characters; needs the why and how)
- `ss-conduction`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 120 characters; needs the why and how)
- `ss-weber`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 206 characters; needs the why and how)
- `ss-locked-in`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 200 characters; needs the why and how)
- `ss-anterior-cord`: memory, **rewrite** (long for a memory question; shorten to a direct what or which; notes on 3 of 4 wrong options; explanation 205 characters; needs the why and how)
- `ss-pca`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 209 characters; needs the why and how)
- `ss-sah-complication`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 221 characters; needs the why and how)
- `ss-neglect`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 131 characters; needs the why and how)
- `ss-millard-gubler`: memory, **keep, expand** (explanation 162 characters; needs the why and how)
- `ss-dejerine`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 236 characters; needs the why and how)
- `ss-central-cord`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 185 characters; needs the why and how)
- `ss-lacunar-pure-sensory`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 115 characters; needs the why and how)
- `ss-post-stroke-pain`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 106 characters; needs the why and how)

### Acute Ischemic Stroke

- `ais-first-step`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 179 characters; needs the why and how)
- `ais-thrombectomy`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 167 characters; needs the why and how)
- `ais-contraindication`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 197 characters; needs the why and how)
- `ais-af-prevention`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 174 characters; needs the why and how)
- `ais-pfo`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 217 characters; needs the why and how)
- `ais-carotid`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 224 characters; needs the why and how)
- `ais-bp`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 169 characters; needs the why and how)
- `ais-mimic-bell`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 145 characters; needs the why and how)
- `ais-dapt`: memory, **rewrite** (long for a memory question; shorten to a direct what or which; notes on 3 of 4 wrong options; explanation 219 characters; needs the why and how)
- `ais-aspirin-timing`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 83 characters; needs the why and how)
- `ais-swallow`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 158 characters; needs the why and how)
- `ais-cha2ds2vasc`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 127 characters; needs the why and how)
- `ais-dissection`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 172 characters; needs the why and how)
- `ais-endocarditis`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 170 characters; needs the why and how)

### Intracerebral Hemorrhage

- `ich-location`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 248 characters; needs the why and how)
- `ich-bp`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 130 characters; needs the why and how)
- `ich-warfarin`: memory, **keep, expand** (explanation 109 characters; needs the why and how)
- `ich-cerebellar`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 131 characters; needs the why and how)
- `ich-cvst`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 174 characters; needs the why and how)
- `ich-charcot`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 166 characters; needs the why and how)
- `ich-score`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 222 characters; needs the why and how)
- `ich-dabigatran`: memory, **keep, expand** (explanation 156 characters; needs the why and how)
- `ich-ct-angiogram`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 143 characters; needs the why and how)
- `ich-melanoma`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 154 characters; needs the why and how)
- `ich-amyloid-antithrombotic`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 112 characters; needs the why and how)
- `ich-seizure-prophylaxis`: memory, **keep, expand** (explanation 156 characters; needs the why and how)

### Subarachnoid Hemorrhage

- `sah-lp`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 185 characters; needs the why and how)
- `sah-site`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 110 characters; needs the why and how)
- `sah-nimodipine`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 204 characters; needs the why and how)
- `sah-hyponatremia`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 173 characters; needs the why and how)
- `sah-hydrocephalus`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 111 characters; needs the why and how)
- `sah-pkd`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 200 characters; needs the why and how)
- `sah-pain`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 155 characters; needs the why and how)
- `sah-ottawa`: memory, **keep, expand** (notes on 1 of 4 wrong options)
- `sah-ct-6h`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 172 characters; needs the why and how)
- `sah-hunt-hess`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 153 characters; needs the why and how)
- `sah-bp`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 108 characters; needs the why and how)
- `sah-antifibrinolytic`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 161 characters; needs the why and how)

### Epidural and Subdural Hematoma

- `edh-lucid`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 188 characters; needs the why and how)
- `edh-ct`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 149 characters; needs the why and how)
- `edh-treatment`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 165 characters; needs the why and how)
- `edh-age`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 188 characters; needs the why and how)
- `sdh-chronic`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 184 characters; needs the why and how)
- `sdh-veins`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 131 characters; needs the why and how)
- `sdh-ct`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 173 characters; needs the why and how)
- `sdh-infant`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 181 characters; needs the why and how)
- `sdh-burr`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 156 characters; needs the why and how)

### Increased Intracranial Pressure and Herniation

- `hern-uncal`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 162 characters; needs the why and how)
- `hern-kernohan`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 162 characters; needs the why and how)
- `hern-subfalcine`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 127 characters; needs the why and how)
- `hern-tonsillar`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 175 characters; needs the why and how)
- `hern-cushing`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 115 characters; needs the why and how)
- `hern-treatment`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 214 characters; needs the why and how)

### Seizures

- `sz-status`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 248 characters; needs the why and how)
- `sz-absence`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 205 characters; needs the why and how)
- `sz-temporal`: memory, **keep, expand** (notes on 2 of 4 wrong options)
- `sz-valproate-pregnancy`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 208 characters; needs the why and how)
- `sz-prolactin`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 160 characters; needs the why and how)
- `sz-carbamazepine-hla`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 161 characters; needs the why and how)
- `sz-todd`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 214 characters; needs the why and how)
- `sz-febrile`: reasoning, **keep, expand** (notes on 0 of 4 wrong options)
- `sz-status-second-line`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 196 characters; needs the why and how)
- `sz-ncse`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 115 characters; needs the why and how)
- `sz-mechanism-sodium`: reasoning, **keep, expand** (explanation 76 characters; needs the why and how)
- `sz-phenytoin`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 157 characters; needs the why and how)
- `sz-west`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 49 characters; needs the why and how)
- `sz-hypoglycemia-first`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 82 characters; needs the why and how)

### Multiple Sclerosis

- `ms-ino`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 155 characters; needs the why and how)
- `ms-uhthoff`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 137 characters; needs the why and how)
- `ms-relapse`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 104 characters; needs the why and how)
- `ms-natalizumab`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 63 characters; needs the why and how)
- `ms-fingolimod`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 221 characters; needs the why and how)
- `ms-mcdonald`: memory, **keep, expand** (notes on 1 of 4 wrong options)
- `ms-b12`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 210 characters; needs the why and how)
- `ms-pathology`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 242 characters; needs the why and how)
- `ms-optic-neuritis`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 78 characters; needs the why and how)
- `ms-lhermitte`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 106 characters; needs the why and how)
- `ms-spms`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 142 characters; needs the why and how)
- `ms-bladder`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 150 characters; needs the why and how)
- `ms-high-efficacy`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 197 characters; needs the why and how)
- `ms-cvs`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 204 characters; needs the why and how)

### Neuromyelitis Optica Spectrum Disorder (NMOSD)

- `nmo-mechanism`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 190 characters; needs the why and how)
- `nmo-aps`: memory, **keep, expand** (notes on 2 of 4 wrong options)
- `nmo-avoid-ms-drugs`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 247 characters; needs the why and how)
- `nmo-plex`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 188 characters; needs the why and how)
- `nmo-csf`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 146 characters; needs the why and how)
- `nmo-pregnancy`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 121 characters; needs the why and how)
- `nmo-mri`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 184 characters; needs the why and how)
- `nmo-seronegative`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 187 characters; needs the why and how)
- `nmo-ocb-red-flag`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 153 characters; needs the why and how)
- `nmo-eculizumab`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 121 characters; needs the why and how)
- `nmo-rtx-ig`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 113 characters; needs the why and how)
- `nmo-oct`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 145 characters; needs the why and how)

### MOG Antibody-Associated Disease (MOGAD)

- `mog-target`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 212 characters; needs the why and how)
- `mog-optic`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 196 characters; needs the why and how)
- `mog-titer`: memory, **keep, expand** (notes on 2 of 4 wrong options)
- `mog-relapse`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 239 characters; needs the why and how)
- `mog-vs-ms`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 207 characters; needs the why and how)
- `mog-sex`: memory, **keep, expand** (explanation 146 characters; needs the why and how)
- `mog-low-titer`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 163 characters; needs the why and how)
- `mog-testing-all`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 102 characters; needs the why and how)
- `mog-acute`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 193 characters; needs the why and how)

### Alzheimer Disease

- `ad-secretase`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 168 characters; needs the why and how)
- `ad-early-onset`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 242 characters; needs the why and how)
- `ad-down`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 84 characters; needs the why and how)
- `ad-donepezil`: reasoning, **keep, expand** (notes on 1 of 4 wrong options)
- `ad-donepezil-brady`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 90 characters; needs the why and how)
- `ad-csf`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 127 characters; needs the why and how)
- `ad-nph`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 136 characters; needs the why and how)
- `ad-delirium`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 117 characters; needs the why and how)
- `ad-apoe`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 197 characters; needs the why and how)
- `ad-braak`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 167 characters; needs the why and how)
- `ad-memantine`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 204 characters; needs the why and how)
- `ad-aria`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 109 characters; needs the why and how)
- `ad-death`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 119 characters; needs the why and how)
- `ad-abc`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 148 characters; needs the why and how)

### Frontotemporal Dementia

- `ftd-bv`: memory, **rewrite** (long for a memory question; shorten to a direct what or which; notes on 0 of 4 wrong options; explanation 239 characters; needs the why and how)
- `ftd-semantic`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 228 characters; needs the why and how)
- `ftd-c9`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 134 characters; needs the why and how)
- `ftd-treatment`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 210 characters; needs the why and how)
- `ftd-pick`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 144 characters; needs the why and how)
- `ftd-nfvppa`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 163 characters; needs the why and how)
- `ftd-right-temporal`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 115 characters; needs the why and how)
- `ftd-donepezil`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 133 characters; needs the why and how)
- `ftd-lppa`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 107 characters; needs the why and how)

### Dementia with Lewy Bodies

- `dlb-core`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 240 characters; needs the why and how)
- `dlb-antipsychotic`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 248 characters; needs the why and how)
- `dlb-first-treatment`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 158 characters; needs the why and how)
- `dlb-biomarker`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 217 characters; needs the why and how)
- `dlb-memory`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 166 characters; needs the why and how)
- `dlb-rbd`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 69 characters; needs the why and how)
- `dlb-pdd`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 166 characters; needs the why and how)
- `dlb-mibg`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 148 characters; needs the why and how)
- `dlb-quetiapine`: memory, **keep, expand** (explanation 223 characters; needs the why and how)
- `dlb-saa`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 129 characters; needs the why and how)

### Motor Signs and Syndromes

- `ms2-umn-lmn`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 233 characters; needs the why and how)
- `ms2-facial`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 238 characters; needs the why and how)
- `ms2-peroneal`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 249 characters; needs the why and how)
- `ms2-romberg`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 176 characters; needs the why and how)
- `ms2-essential`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 117 characters; needs the why and how)
- `ms2-ballismus`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 160 characters; needs the why and how)
- `ms2-erb`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 182 characters; needs the why and how)
- `ms2-posturing`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 185 characters; needs the why and how)
- `ms2-decorticate`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 185 characters; needs the why and how)
- `ms2-radial`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 178 characters; needs the why and how)
- `ms2-carpal`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 204 characters; needs the why and how)
- `ms2-winging`: memory, **keep, expand** (explanation 79 characters; needs the why and how)
- `ms2-klumpke`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 216 characters; needs the why and how)
- `ms2-rubral`: memory, **keep, expand** (notes on 3 of 4 wrong options)

### Parkinson Disease

- `pd-prodrome`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 236 characters; needs the why and how)
- `pd-drug-induced`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 222 characters; needs the why and how)
- `pd-dat`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 215 characters; needs the why and how)
- `pd-carbidopa`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 142 characters; needs the why and how)
- `pd-impulse`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 212 characters; needs the why and how)
- `pd-wearing-off`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 188 characters; needs the why and how)
- `pd-mptp`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 122 characters; needs the why and how)
- `pd-threshold`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 65 characters; needs the why and how)
- `pd-lrrk2`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 136 characters; needs the why and how)
- `pd-mds-exclusion`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 128 characters; needs the why and how)
- `pd-entacapone`: reasoning, **keep, expand** (explanation 159 characters; needs the why and how)
- `pd-dbs`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 41 characters; needs the why and how)

### Atypical Parkinsonism

- `atp-msa`: memory, **rewrite** (long for a memory question; shorten to a direct what or which; notes on 2 of 4 wrong options; explanation 204 characters; needs the why and how)
- `atp-psp`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 167 characters; needs the why and how)
- `atp-cbd`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 164 characters; needs the why and how)
- `atp-protein`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 142 characters; needs the why and how)
- `atp-dat`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 163 characters; needs the why and how)
- `atp-oh`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 94 characters; needs the why and how)
- `atp-msa-c`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 215 characters; needs the why and how)
- `atp-psp-subtype`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 142 characters; needs the why and how)
- `atp-levodopa-trial`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 126 characters; needs the why and how)
- `atp-cbs-nonspecific`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 110 characters; needs the why and how)

### Huntington Disease

- `hd-indirect`: reasoning, **keep, expand** (notes on 0 of 4 wrong options)
- `hd-anticipation`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 138 characters; needs the why and how)
- `hd-tetrabenazine`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 184 characters; needs the why and how)
- `hd-repeat-range`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 185 characters; needs the why and how)
- `hd-westphal`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 191 characters; needs the why and how)
- `hd-mri`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 174 characters; needs the why and how)
- `hd-27-35`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 106 characters; needs the why and how)
- `hd-acanthocytes`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 169 characters; needs the why and how)
- `hd-prenatal`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 95 characters; needs the why and how)
- `hd-cognition`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 144 characters; needs the why and how)

### Glaucoma

- `gl-acute-closure`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 247 characters; needs the why and how)
- `gl-open-angle`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 151 characters; needs the why and how)
- `gl-timolol-asthma`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 146 characters; needs the why and how)
- `gl-latanoprost`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 135 characters; needs the why and how)
- `gl-decongestant`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 212 characters; needs the why and how)
- `gl-gonioscopy`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 186 characters; needs the why and how)
- `gl-pilocarpine-timing`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 185 characters; needs the why and how)
- `gl-iridotomy`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 138 characters; needs the why and how)
- `gl-brimonidine-child`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 110 characters; needs the why and how)
- `gl-ntg`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 139 characters; needs the why and how)

### Cataract

- `cat-nuclear`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 148 characters; needs the why and how)
- `cat-steroid`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 171 characters; needs the why and how)
- `cat-rapd`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 109 characters; needs the why and how)
- `cat-phacomorphic`: reasoning, **keep, expand** (notes on 1 of 4 wrong options)
- `cat-tamsulosin`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 85 characters; needs the why and how)
- `cat-congenital`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 188 characters; needs the why and how)
- `cat-diabetes`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 105 characters; needs the why and how)
- `cat-phacolytic`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 167 characters; needs the why and how)
- `cat-monocular-diplopia`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 84 characters; needs the why and how)
- `cat-surgery-indication`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 185 characters; needs the why and how)

### Vision Loss and Red Eye

- `eye-keratitis`: reasoning, **keep, expand** (notes on 1 of 4 wrong options)
- `eye-viral-conj`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 241 characters; needs the why and how)
- `eye-optic-neuritis`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 237 characters; needs the why and how)
- `eye-detachment`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 178 characters; needs the why and how)
- `eye-wet-amd`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 196 characters; needs the why and how)
- `eye-rp`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 146 characters; needs the why and how)
- `eye-crao`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 183 characters; needs the why and how)
- `eye-bacterial-conj`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 181 characters; needs the why and how)
- `eye-gonococcal`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 168 characters; needs the why and how)
- `eye-uveitis`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 192 characters; needs the why and how)
- `eye-dry-amd`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 177 characters; needs the why and how)
- `eye-crvo`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 177 characters; needs the why and how)

### Hearing Loss

- `hl-tuning-fork`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 192 characters; needs the why and how)
- `hl-otosclerosis`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 184 characters; needs the why and how)
- `hl-schwannoma`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 143 characters; needs the why and how)
- `hl-sudden`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 245 characters; needs the why and how)
- `hl-noise`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 206 characters; needs the why and how)
- `hl-gjb2`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 236 characters; needs the why and how)
- `hl-waardenburg`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 199 characters; needs the why and how)
- `hl-presbycusis`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 128 characters; needs the why and how)
- `hl-ototoxic`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 127 characters; needs the why and how)
- `hl-aspirin-tinnitus`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 152 characters; needs the why and how)
- `hl-nf2`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 146 characters; needs the why and how)
- `hl-effusion-child`: reasoning, **keep, expand** (explanation 138 characters; needs the why and how)

### Vertigo

- `vt-bppv`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 209 characters; needs the why and how)
- `vt-hints`: reasoning, **keep, expand** (notes on 0 of 4 wrong options)
- `vt-neuritis`: memory, **rewrite** (long for a memory question; shorten to a direct what or which; notes on 0 of 4 wrong options; explanation 213 characters; needs the why and how)
- `vt-meniere`: reasoning, **keep, expand** (notes on 0 of 4 wrong options)
- `vt-nystagmus`: reasoning, **keep, expand** (notes on 0 of 4 wrong options)
- `vt-suppressants`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 238 characters; needs the why and how)
- `vt-labyrinthitis`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 100 characters; needs the why and how)
- `vt-epley`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 179 characters; needs the why and how)
- `vt-head-roll`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 189 characters; needs the why and how)
- `vt-saccule`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 157 characters; needs the why and how)

### Localizing a Lesion

- `loc-crossed`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 145 characters; needs the why and how)
- `loc-cn3-pupil`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 164 characters; needs the why and how)
- `loc-capsule`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 179 characters; needs the why and how)
- `loc-bitemporal`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 79 characters; needs the why and how)
- `loc-jaw`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 200 characters; needs the why and how)
- `loc-parinaud`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 168 characters; needs the why and how)
- `loc-iih`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 186 characters; needs the why and how)
- `loc-cluster`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 213 characters; needs the why and how)
- `loc-aca-leg`: memory, **keep, expand** (explanation 123 characters; needs the why and how)
- `loc-cord-face`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 157 characters; needs the why and how)
- `loc-hemisection`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 127 characters; needs the why and how)
- `loc-lmn`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 178 characters; needs the why and how)
- `loc-barrel`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 136 characters; needs the why and how)
- `loc-jacksonian`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 102 characters; needs the why and how)
- `loc-cn3-sparing`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 136 characters; needs the why and how)
- `loc-cn4`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 63 characters; needs the why and how)
- `loc-bell`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 131 characters; needs the why and how)
- `loc-cavernous`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 65 characters; needs the why and how)
- `loc-jugular`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 129 characters; needs the why and how)
- `loc-pseudobulbar`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 110 characters; needs the why and how)
- `loc-horner`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 192 characters; needs the why and how)
- `loc-rapd`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 111 characters; needs the why and how)
- `loc-ino-old`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 195 characters; needs the why and how)
- `loc-gaze-deviation`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 90 characters; needs the why and how)
- `loc-peripheral-nystagmus`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 151 characters; needs the why and how)
- `loc-downbeat`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 177 characters; needs the why and how)
- `loc-macular-sparing`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 104 characters; needs the why and how)
- `loc-gerstmann`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 124 characters; needs the why and how)
- `loc-orbitofrontal`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 79 characters; needs the why and how)
- `loc-gca`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 163 characters; needs the why and how)
- `loc-steppage`: memory, **keep, expand** (explanation 123 characters; needs the why and how)
- `loc-sensory-ataxia`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 191 characters; needs the why and how)

### Ruling Out Mimics

- `mim-glucose`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 153 characters; needs the why and how)
- `mim-early-ct`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 120 characters; needs the why and how)
- `mim-eeg`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 122 characters; needs the why and how)
- `mim-syncope`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 114 characters; needs the why and how)
- `mim-nmosd`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 162 characters; needs the why and how)
- `mim-dat`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 195 characters; needs the why and how)
- `mim-prion`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 83 characters; needs the why and how)
- `mim-todd`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 115 characters; needs the why and how)
- `mim-hoover`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 111 characters; needs the why and how)
- `mim-migraine-aura`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 118 characters; needs the why and how)
- `mim-tumor`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 110 characters; needs the why and how)
- `mim-hints`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 102 characters; needs the why and how)
- `mim-unmasking`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 93 characters; needs the why and how)
- `mim-pnes`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 174 characters; needs the why and how)
- `mim-arrhythmia`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 133 characters; needs the why and how)
- `mim-tia-negative`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 115 characters; needs the why and how)
- `mim-panic`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 89 characters; needs the why and how)
- `mim-mogad`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 93 characters; needs the why and how)
- `mim-adem`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 89 characters; needs the why and how)
- `mim-b12`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 73 characters; needs the why and how)
- `mim-sarcoid`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 84 characters; needs the why and how)
- `mim-svd`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 103 characters; needs the why and how)
- `mim-delirium`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 112 characters; needs the why and how)
- `mim-depression`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 75 characters; needs the why and how)
- `mim-nph`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 74 characters; needs the why and how)
- `mim-vascular-dementia`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 85 characters; needs the why and how)
- `mim-essential-tremor`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 108 characters; needs the why and how)
- `mim-levodopa`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 182 characters; needs the why and how)

### Choosing Imaging and EEG

- `img-dwi-flair`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 203 characters; needs the why and how)
- `img-perfusion`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 180 characters; needs the why and how)
- `img-swi`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 88 characters; needs the why and how)
- `img-hyperdense`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 136 characters; needs the why and how)
- `img-triphasic`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 159 characters; needs the why and how)
- `img-gadolinium`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 98 characters; needs the why and how)
- `img-hu-blood`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 128 characters; needs the why and how)
- `img-early-signs`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 151 characters; needs the why and how)
- `img-aspects`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 127 characters; needs the why and how)
- `img-collaterals`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 105 characters; needs the why and how)
- `img-core`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 150 characters; needs the why and how)
- `img-thunderclap-lp`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 116 characters; needs the why and how)
- `img-xanthochromia`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 98 characters; needs the why and how)
- `img-schwannoma`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 132 characters; needs the why and how)
- `img-hints-central`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 101 characters; needs the why and how)
- `img-flair`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 131 characters; needs the why and how)
- `img-shine-through`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 99 characters; needs the why and how)
- `img-mra`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 96 characters; needs the why and how)
- `img-cvst`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 83 characters; needs the why and how)
- `img-dawson`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 115 characters; needs the why and how)
- `img-nmosd-optic`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 156 characters; needs the why and how)
- `img-cingulate-island`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 115 characters; needs the why and how)
- `img-caudate`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 63 characters; needs the why and how)
- `img-ictal-spect`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 160 characters; needs the why and how)

## Neurology physiology and pharmacology (`neuro/physiology-questions.js`)

| Page | Memory | Reasoning | Analysis | Target | Still to write | Over target | Needs work |
|---|---|---|---|---|---|---|---|
| Nervous System Embryology and Defects | 8/6 | 2/6 | 0/3 | 15 | 7 | 2 memory | 9 |
| Neurons and Action Potentials | 5/6 | 5/6 | 0/3 | 15 | 5 |  | 10 |
| Synapses and Neurotransmitters | 5/6 | 5/6 | 0/3 | 15 | 5 |  | 10 |
| Cortex and Limbic System | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| CSF, Ventricles, and Cerebral Blood Flow | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Ascending Tracts | 7/4 | 2/4 | 0/2 | 10 | 4 | 3 memory | 9 |
| Descending Tracts | 6/4 | 3/4 | 0/2 | 10 | 3 | 2 memory | 9 |
| Basal Ganglia Pathways | 5/4 | 4/4 | 0/2 | 10 | 2 | 1 memory | 9 |
| Cerebellum | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Pain Pathways and Descending Modulation | 9/8 | 3/8 | 0/4 | 20 | 9 | 1 memory | 12 |
| Vision | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Hearing and Balance | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Olfactory, Optic, and Vestibulocochlear Nerves | 6/4 | 3/4 | 0/2 | 10 | 3 | 2 memory | 9 |
| Oculomotor, Trochlear, and Abducens Nerves | 7/4 | 2/4 | 0/2 | 10 | 4 | 3 memory | 9 |
| Trigeminal and Facial Nerves | 5/4 | 4/4 | 0/2 | 10 | 2 | 1 memory | 9 |
| Glossopharyngeal, Vagus, Accessory, and Hypoglossal Nerves | 7/4 | 2/4 | 0/2 | 10 | 4 | 3 memory | 9 |
| Autonomic Nervous System | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Respiratory Center | 9/6 | 3/6 | 0/3 | 15 | 6 | 3 memory | 12 |
| Cardiovascular Center | 8/6 | 4/6 | 0/3 | 15 | 5 | 2 memory | 12 |
| Antithrombotics and Their Reversal | 7/12 | 4/12 | 0/6 | 30 | 19 |  | 11 |
| Blood Pressure and Brain Pressure Drugs | 1/4 | 1/4 | 0/2 | 10 | 8 |  | 2 |
| Antiseizure Drugs | 4/12 | 5/12 | 0/6 | 30 | 21 |  | 9 |
| MS, NMOSD, and MOGAD Drugs | 3/10 | 2/10 | 0/5 | 25 | 20 |  | 5 |
| Spasticity, Bladder, Autonomic, and Vertigo Drugs | 0/12 | 2/12 | 0/6 | 30 | 28 |  | 2 |
| Dementia and Mood Drugs | 1/4 | 2/4 | 0/2 | 10 | 7 |  | 3 |
| Movement Disorder Drugs | 1/8 | 3/8 | 0/4 | 20 | 16 |  | 4 |
| Analgesics and Anesthetics | 1/6 | 1/6 | 0/3 | 15 | 13 |  | 2 |
| Eye Drugs | 1/6 | 1/6 | 0/3 | 15 | 13 |  | 2 |
| Drugs That Cause Neurological Disease | 0/4 | 2/4 | 0/2 | 10 | 8 |  | 2 |

### Nervous System Embryology and Defects

- `ne-neuropore`: reasoning, **keep, expand** (explanation 180 characters; needs the why and how)
- `ne-myelomeningocele`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 239 characters; needs the why and how)
- `ne-occulta`: memory, **keep, expand** (explanation 159 characters; needs the why and how)
- `ne-folate`: reasoning, **keep, expand** (explanation 244 characters; needs the why and how)
- `ne-plates`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 138 characters; needs the why and how)
- `ne-vesicles`: memory, **keep**
- `ne-crest`: memory, **keep, expand** (explanation 211 characters; needs the why and how)
- `ne-holoprosencephaly`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 178 characters; needs the why and how)
- `ne-syrinx`: memory, **rewrite** (long for a memory question; shorten to a direct what or which; explanation 225 characters; needs the why and how)
- `ne-dandy-walker`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 182 characters; needs the why and how)

### Neurons and Action Potentials

- `nr-resting`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 231 characters; needs the why and how)
- `nr-refractory`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 220 characters; needs the why and how)
- `nr-saltatory`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 179 characters; needs the why and how)
- `nr-lidocaine`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 184 characters; needs the why and how)
- `nr-wallerian`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 232 characters; needs the why and how)
- `nr-glia`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 214 characters; needs the why and how)
- `nr-threshold`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 138 characters; needs the why and how)
- `nr-pump`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 80 characters; needs the why and how)
- `nr-pseudounipolar`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 139 characters; needs the why and how)
- `nr-ttx`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 67 characters; needs the why and how)

### Synapses and Neurotransmitters

- `syn-calcium`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 141 characters; needs the why and how)
- `syn-lems`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 245 characters; needs the why and how)
- `syn-benzo`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 131 characters; needs the why and how)
- `syn-ipsp`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 142 characters; needs the why and how)
- `syn-hepatic`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 91 characters; needs the why and how)
- `syn-mg`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 203 characters; needs the why and how)
- `syn-ionotropic`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 161 characters; needs the why and how)
- `syn-glycine`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 99 characters; needs the why and how)
- `syn-gap`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 85 characters; needs the why and how)
- `syn-botulinum`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 75 characters; needs the why and how)

### Ascending Tracts

- `asc-hemisection`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 195 characters; needs the why and how)
- `asc-dc-cross`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 217 characters; needs the why and how)
- `asc-syrinx`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 160 characters; needs the why and how)
- `asc-friedreich`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 170 characters; needs the why and how)
- `asc-dermatome`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 163 characters; needs the why and how)
- `asc-gracilis`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 89 characters; needs the why and how)
- `asc-crossing-level`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 180 characters; needs the why and how)
- `asc-medial-medullary`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 133 characters; needs the why and how)
- `asc-dsct`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 225 characters; needs the why and how)

### Descending Tracts

- `desc-decussation`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 170 characters; needs the why and how)
- `desc-forehead`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 139 characters; needs the why and how)
- `desc-decerebrate`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 210 characters; needs the why and how)
- `desc-pseudobulbar`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 145 characters; needs the why and how)
- `desc-anterior-cst`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 189 characters; needs the why and how)
- `desc-capsule`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 149 characters; needs the why and how)
- `desc-rubrospinal`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 106 characters; needs the why and how)
- `desc-medullary-rst`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 146 characters; needs the why and how)
- `desc-cord-ipsilateral`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 98 characters; needs the why and how)

### Basal Ganglia Pathways

- `bg-direct`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 224 characters; needs the why and how)
- `bg-dopamine`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 151 characters; needs the why and how)
- `bg-stn`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 149 characters; needs the why and how)
- `bg-parkinson`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 153 characters; needs the why and how)
- `bg-vmat2`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 176 characters; needs the why and how)
- `bg-gpi-output`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 111 characters; needs the why and how)
- `bg-stn-glutamate`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 82 characters; needs the why and how)
- `bg-huntington`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 102 characters; needs the why and how)
- `bg-haloperidol`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 129 characters; needs the why and how)

### Pain Pathways and Descending Modulation

- `pain-fibers`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 192 characters; needs the why and how)
- `pain-rub`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 172 characters; needs the why and how)
- `pain-referred`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 153 characters; needs the why and how)
- `pain-descending`: memory, **keep, expand** (notes on 0 of 4 wrong options)
- `pain-opioid-cellular`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 172 characters; needs the why and how)
- `pain-duloxetine`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 185 characters; needs the why and how)
- `pain-gabapentin`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 175 characters; needs the why and how)
- `pain-silent`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 100 characters; needs the why and how)
- `pain-allodynia`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 114 characters; needs the why and how)
- `pain-medial`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 233 characters; needs the why and how)
- `pain-kappa`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 154 characters; needs the why and how)
- `pain-crps`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 198 characters; needs the why and how)

### Olfactory, Optic, and Vestibulocochlear Nerves

- `cns-rapd`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 217 characters; needs the why and how)
- `cns-meyer`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 212 characters; needs the why and how)
- `cns-smell`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 219 characters; needs the why and how)
- `cns-hearing`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 120 characters; needs the why and how)
- `cns-argyll`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 91 characters; needs the why and how)
- `cns-ammonia`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 53 characters; needs the why and how)
- `cns-optic-cns`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 126 characters; needs the why and how)
- `cns-tract`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 115 characters; needs the why and how)
- `cns-scarpa`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 138 characters; needs the why and how)

### Oculomotor, Trochlear, and Abducens Nerves

- `cne-iv`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 177 characters; needs the why and how)
- `cne-vi-icp`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 175 characters; needs the why and how)
- `cne-pupil-surface`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 148 characters; needs the why and how)
- `cne-horner`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 232 characters; needs the why and how)
- `cne-mlf`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 164 characters; needs the why and how)
- `cne-superior-oblique`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 141 characters; needs the why and how)
- `cne-sympathetic`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 223 characters; needs the why and how)
- `cne-iv-crossing`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 125 characters; needs the why and how)
- `cne-vi-nucleus`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 159 characters; needs the why and how)

### Trigeminal and Facial Nerves

- `cnf-corneal`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 165 characters; needs the why and how)
- `cnf-bell`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 183 characters; needs the why and how)
- `cnf-neuralgia`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 181 characters; needs the why and how)
- `cnf-foramen`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 172 characters; needs the why and how)
- `cnf-ramsay`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 114 characters; needs the why and how)
- `cnf-spinal-v`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 164 characters; needs the why and how)
- `cnf-jaw-angle`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 68 characters; needs the why and how)
- `cnf-greater-petrosal`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 165 characters; needs the why and how)
- `cnf-parotid`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 158 characters; needs the why and how)

### Glossopharyngeal, Vagus, Accessory, and Hypoglossal Nerves

- `cnl-uvula`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 145 characters; needs the why and how)
- `cnl-tongue`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 87 characters; needs the why and how)
- `cnl-gag`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 173 characters; needs the why and how)
- `cnl-recurrent`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 117 characters; needs the why and how)
- `cnl-xi`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 106 characters; needs the why and how)
- `cnl-carotid-sinus`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 148 characters; needs the why and how)
- `cnl-stylopharyngeus`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 52 characters; needs the why and how)
- `cnl-vagus-gut`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 117 characters; needs the why and how)
- `cnl-xii-exit`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 173 characters; needs the why and how)

### Respiratory Center

- `resp-co2`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 198 characters; needs the why and how)
- `resp-opioid`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 249 characters; needs the why and how)
- `resp-cheyne`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 214 characters; needs the why and how)
- `resp-apneustic`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 198 characters; needs the why and how)
- `resp-copd-oxygen`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 204 characters; needs the why and how)
- `resp-ohs`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 192 characters; needs the why and how)
- `resp-hering`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 187 characters; needs the why and how)
- `resp-preb`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 175 characters; needs the why and how)
- `resp-peripheral`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 146 characters; needs the why and how)
- `resp-kussmaul`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 102 characters; needs the why and how)
- `resp-rem`: reasoning, **keep, expand** (notes on 3 of 4 wrong options; explanation 161 characters; needs the why and how)
- `resp-asthma-co2`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 111 characters; needs the why and how)

### Cardiovascular Center

- `cv-baroreflex`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 214 characters; needs the why and how)
- `cv-carotid-nerve`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 153 characters; needs the why and how)
- `cv-csh`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 171 characters; needs the why and how)
- `cv-dysreflexia`: memory, **keep, expand** (notes on 0 of 4 wrong options)
- `cv-orthostatic`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 210 characters; needs the why and how)
- `cv-cushing`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 210 characters; needs the why and how)
- `cv-vasovagal`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 170 characters; needs the why and how)
- `cv-ganglia`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 152 characters; needs the why and how)
- `cv-rvlm`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 139 characters; needs the why and how)
- `cv-anp`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 190 characters; needs the why and how)
- `cv-pots`: memory, **keep, expand** (notes on 3 of 4 wrong options; explanation 122 characters; needs the why and how)
- `cv-sympathetic-outflow`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 154 characters; needs the why and how)

### Antithrombotics and Their Reversal

- `np-tpa-bp`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 205 characters; needs the why and how)
- `np-tpa-inr`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 206 characters; needs the why and how)
- `np-aspirin-after-tpa`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 145 characters; needs the why and how)
- `np-clopidogrel-omeprazole`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 139 characters; needs the why and how)
- `np-dapt-minor`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 200 characters; needs the why and how)
- `np-warfarin-reversal`: reasoning, **keep, expand** (notes on 2 of 4 wrong options; explanation 202 characters; needs the why and how)
- `np-dabigatran-reversal`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 181 characters; needs the why and how)
- `np-protamine-fish`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 204 characters; needs the why and how)
- `np-valve-warfarin`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 183 characters; needs the why and how)
- `np-warfarin-necrosis`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 178 characters; needs the why and how)
- `np-statin-clarithromycin`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 171 characters; needs the why and how)

### Blood Pressure and Brain Pressure Drugs

- `np-nimodipine-purpose`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 233 characters; needs the why and how)
- `np-mannitol-icp`: reasoning, **keep, expand** (notes on 0 of 4 wrong options)

### Antiseizure Drugs

- `np-status-first`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 176 characters; needs the why and how)
- `np-phenytoin-zero-order`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 195 characters; needs the why and how)
- `np-carbamazepine-hla`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 177 characters; needs the why and how)
- `np-carbamazepine-sodium`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 96 characters; needs the why and how)
- `np-jme-pregnancy`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 199 characters; needs the why and how)
- `np-lamotrigine-valproate`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 191 characters; needs the why and how)
- `np-ethosuximide-mechanism`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 195 characters; needs the why and how)
- `np-vigabatrin-fields`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 166 characters; needs the why and how)
- `np-topiramate-stones`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 176 characters; needs the why and how)

### MS, NMOSD, and MOGAD Drugs

- `np-natalizumab-jcv`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 140 characters; needs the why and how)
- `np-fingolimod-bradycardia`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 194 characters; needs the why and how)
- `np-anticd20-hbv`: memory, **keep, expand** (notes on 2 of 4 wrong options; explanation 167 characters; needs the why and how)
- `np-eculizumab-vaccine`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 154 characters; needs the why and how)
- `np-nmosd-wrong-drug`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 171 characters; needs the why and how)

### Spasticity, Bladder, Autonomic, and Vertigo Drugs

- `np-baclofen-withdrawal`: reasoning, **keep, expand** (notes on 1 of 4 wrong options; explanation 228 characters; needs the why and how)
- `np-midodrine-supine`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 211 characters; needs the why and how)

### Dementia and Mood Drugs

- `np-cholinesterase-bradycardia`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 147 characters; needs the why and how)
- `np-memantine-mechanism`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 147 characters; needs the why and how)
- `np-lecanemab-aria`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 169 characters; needs the why and how)

### Movement Disorder Drugs

- `np-carbidopa-role`: memory, **keep, expand** (notes on 1 of 4 wrong options; explanation 144 characters; needs the why and how)
- `np-pramipexole-gambling`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 190 characters; needs the why and how)
- `np-tetrabenazine-mood`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 156 characters; needs the why and how)
- `np-dlb-antipsychotic`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 188 characters; needs the why and how)

### Analgesics and Anesthetics

- `np-opioid-co2`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 141 characters; needs the why and how)
- `np-local-anesthetic-toxicity`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 244 characters; needs the why and how)

### Eye Drugs

- `np-timolol-asthma`: memory, **keep, expand** (notes on 0 of 4 wrong options; explanation 176 characters; needs the why and how)
- `np-latanoprost-iris`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 159 characters; needs the why and how)

### Drugs That Cause Neurological Disease

- `np-cause-seizure-drug`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 202 characters; needs the why and how)
- `np-cause-parkinsonism`: reasoning, **keep, expand** (notes on 0 of 4 wrong options; explanation 224 characters; needs the why and how)

## Renal conditions (`renal/questions.js`)

| Page | Memory | Reasoning | Analysis | Target | Still to write | Over target | Needs work |
|---|---|---|---|---|---|---|---|
| Prerenal AKI (done) | 10/14 | 10/14 | 5/7 | 35 | 10 |  | 0 |
| Intrarenal AKI (done) | 8/8 | 8/8 | 4/4 | 20 | 0 |  | 0 |
| Acute Tubular Necrosis | 0/14 | 0/14 | 0/7 | 35 | 35 |  | 0 |
| Acute Interstitial Nephritis | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Minimal Change Disease, FSGS, and Membranous Nephropathy | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Diabetic Kidney Disease and Amyloid Nephropathy | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Anti-GBM Disease, ANCA-Associated Vasculitis, and Alport Syndrome | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| IgA Nephropathy, PSGN, and MPGN | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Glomerular Disease: Comparison and Workup | 0/18 | 0/18 | 0/9 | 45 | 45 |  | 0 |
| Thrombotic Microangiopathy | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Renal Artery Disease | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Renal Vein Thrombosis | 0/6 | 0/6 | 0/3 | 15 | 15 |  | 0 |
| Postrenal AKI (done) | 6/10 | 6/10 | 3/5 | 25 | 10 |  | 0 |
| AKI: Comparison and Workup (done) | 16/16 | 16/16 | 8/8 | 40 | 0 |  | 0 |
| Diabetes Insipidus | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Syndrome of Inappropriate ADH Secretion (SIADH) | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Chronic Kidney Disease | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Polycystic Kidney Disease | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Metabolic Acidosis (done) | 9/16 | 12/16 | 7/8 | 40 | 12 |  | 0 |
| Metabolic Alkalosis (done) | 13/10 | 15/10 | 10/5 | 25 | 0 | 3 memory, 5 reasoning, 5 analysis | 0 |
| Acid-base Disorders: Comparison and Workup | 8/10 | 3/10 | 3/5 | 25 | 11 |  | 0 |
| Hypovolemia | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Hypervolemia | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Fluid Volume: Comparison and Workup | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Hyponatremia | 0/16 | 0/16 | 0/8 | 40 | 40 |  | 0 |
| Hypernatremia | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Sodium Disorders: Comparison and Workup | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Hypokalemia | 0/14 | 0/14 | 0/7 | 35 | 35 |  | 0 |
| Hyperkalemia | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Potassium Disorders: Comparison and Workup | 0/12 | 0/12 | 0/6 | 30 | 30 |  | 0 |
| Hypoaldosteronism and Hyperaldosteronism | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Hypocalcemia | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Hypercalcemia | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Hypomagnesemia | 0/8 | 0/8 | 0/4 | 20 | 20 |  | 0 |
| Hypermagnesemia | 0/6 | 0/6 | 0/3 | 15 | 15 |  | 0 |
| Calcium and Magnesium Disorders: Comparison and Workup | 0/10 | 0/10 | 0/5 | 25 | 25 |  | 0 |
| Complications of Chronic Kidney Disease | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Dialysis and Transplant | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Chronic Kidney Disease: Comparison and Workup | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Other Cystic and Inherited Kidney Disease | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Cystitis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Pyelonephritis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Kidney Stones | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Urinary Tract Obstruction | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Renal Cell Carcinoma and Wilms Tumor | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Bladder Cancer | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Hypophosphatemia and Hyperphosphatemia | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Respiratory Acidosis and Alkalosis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Reading a Urinalysis | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Reading UECs and Urine Electrolytes | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Reading a Blood Gas | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Hematuria and Proteinuria | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |
| Localizing Edema | 0/4 | 0/4 | 0/2 | 10 | 10 |  | 0 |

### Acid-base Disorders: Comparison and Workup

- `ab-ag-formula`: memory, **keep**
- `ab-ag-normal`: memory, **keep**
- `ab-winter`: memory, **keep**
- `ab-delta-high`: memory, **keep**
- `ab-isopropanol`: memory, **keep**
- `ab-no-bicarb-lactate`: reasoning, **keep**
- `ab-osmolal-late`: reasoning, **keep**
- `ab-albumin-gap`: reasoning, **keep**
- `ab-osm-gap-normal`: memory, **keep**
- `ab-set-dka-1`: analysis, **keep**
- `ab-set-dka-2`: analysis, **keep**
- `ab-set-dka-3`: analysis, **keep**
- `ab-alk-compensation`: memory, **keep**
- `ab-alk-pco2-limit`: memory, **keep**

