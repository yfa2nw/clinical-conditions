# Clinical Conditions

An interactive study reference for clinical conditions, organized by organ system. Each condition covers its pathophysiology, etiology, symptoms and complications, diagnosis, and treatment. A built-in practice quiz has USMLE-style multiple-choice questions.

> **For educational use only.** This is a study aid, not a clinical reference. Do not use it for patient care.

## Getting started

There is nothing to install or build. Open `index.html` in any modern browser and choose an organ system.

## Conditions covered

Gastrointestinal is complete. Neurology is in progress: stroke symptoms, acute ischemic stroke, and intracerebral hemorrhage are written, and the other pages are still to be added.

### Gastrointestinal

Grouped by organ, in the same top-to-bottom order as the sidebar map:

- **Esophagus:** esophagitis, esophageal motility disorders, GERD
- **Stomach:** gastritis, peptic ulcer disease (PUD)
- **Liver:**
  - Causes of hepatocellular injury, organized by the **VITAMIN + other** mnemonic:
    - **V**ascular: ischemic hepatitis, congestive hepatopathy, Budd-Chiari syndrome
    - **I**nfectious: hepatitis A–E, CMV, HSV, EBV
    - **T**raumatic
    - **A**utoimmune: PBC, PSC, autoimmune hepatitis
    - **M**etabolic: hemochromatosis, Wilson disease, A1AT deficiency, MASLD
    - **I**atrogenic/idiopathic: post-operative injury, paracetamol overdose, alcoholic liver disease
    - **N**eoplastic: benign and malignant liver tumors
    - **Other:** acute fatty liver of pregnancy (AFLP)
  - Acute liver failure and cirrhosis: complications, diagnosis, and an interactive Child-Pugh calculator
- **Gallbladder and biliary tree:** cholelithiasis and biliary colic, cholecystitis (including Mirizzi syndrome, acalculous cholecystitis and gallstone ileus), choledocholithiasis and gallstone pancreatitis, ascending cholangitis, biliary fistulas, biliary and periampullary malignancies
- **Pancreas:** acute pancreatitis
- **Small intestine:** malabsorption, diarrhea, intestinal ischemia
- **Colon and rectum:** diverticular diseases, IBD, IBS
- **Appendix:** appendicitis

Each hepatocellular injury page starts with a letter strip linking to the others. The biliary pages have a numbered strip instead, and the cholelithiasis page has a labelled diagram of the biliary tree showing where each stone problem happens.

## Features

### Reference pages

- **GI tract map**: the sidebar draws the GI tract as one continuous line from mouth to rectum, with the liver, biliary tree, gallbladder, pancreas and appendix attached. Each organ points to its list of conditions. Hovering over or opening a condition lights up its organ.
- **Search** matches condition names and the text inside each page, and highlights matches on the open page. On the map, organs with matches light up and the rest dim.
- **Section jump bar**: the title and section links stay at the top of the page while you scroll, and highlight the section you're reading.
- **Abbreviation tooltips**: hover over or focus any dotted-underlined term to see its definition.
- **Increased/Decreased labels** use both colour and an arrow shape.
- **Cross-links, plus Previous and Next buttons**, connect related conditions.
- **Shareable links**: each condition has its own address, e.g. `gi/index.html#gerd`.
- **Light and dark themes**: the page follows your system setting, or you can switch with the toggle in the sidebar.
- **Child-Pugh calculator**: select one option per row to get the score and class.
- **Phone layout**: the map is hidden, and the sidebar becomes a compact top bar with a scrolling row of conditions.

### Practice quiz

Open it from the **Practice quiz** button in the sidebar, the **Quiz me** button on any condition page, or `gi/index.html#quiz`.

- 238 clinical-vignette questions:
  - **Step 1** questions test mechanisms, microbiology and pathology.
  - **Step 2 CK** questions test diagnosis and the next step in management.
- Filter by topic, exam, and whether you've answered or missed a question before. Choose 5, 10, 20 or all questions.
- After each answer you get an explanation, notes on why some of the wrong options are wrong, and a link to review the topic.
- The results screen shows your score by topic and by exam, a full answer review, and a **Retry missed** option.
- Progress is saved in your browser between visits.

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| `/` | Focus search |
| `Enter` (in search) | Open the first matching condition |
| `Esc` | Clear search / close a tooltip |
| `↑` `↓` `Home` `End` | Move between conditions in the sidebar |
| `A`–`E` or `1`–`5` | Choose a quiz answer |
| `Enter` | Submit a quiz answer, then go to the next question |

## Accessibility

- **Skip link and full keyboard navigation**
- **Screen-reader announcements** when you switch conditions or answer a quiz question
- **Not colour alone:** information is also shown with shapes, icons and text labels
- **Contrast:** text colours were chosen to meet WCAG AA contrast in both themes
- **Reduced motion:** animation turns off when your system's reduced-motion setting is on

## Project structure

```text
index.html          Landing page: choose an organ system
shared/
  style.css         Styles, including light and dark theme colours
  theme.js          Applies the saved theme before the page appears
  app.js            Navigation, search, section jump bar, tooltips, theme toggle
  quiz.js           Quiz screens and logic
  map.js            Lines the sidebar drawing up with its stations; highlighting
gi/
  index.html        Page layout and all GI condition content
  style.css         GI-only styles (map spacing, biliary tree diagram)
  questions.js      GI quiz question bank
  map.js            Draws the GI tract
neuro/
  index.html        Page layout and all neurology condition content
  style.css         Neurology theme
  questions.js      Neurology quiz question bank
  map.js            Draws the neuron chain
  concepts.js       Shared concepts panel linking conditions
```

## Editing content

The steps below use the GI pages as the example; other organ systems work the same way.

### Adding or editing a condition

All GI condition content lives in `gi/index.html`.

1. Add a button to the right organ's group in the sidebar (the `.condition-group` inside each `.station`). Adding a new organ group also needs a matching drawing in `gi/map.js`.

   ```html
   <button type="button" class="condition-item" data-condition="my-condition">My condition</button>
   ```

2. Add an article inside `#content-panel` with a matching `id`:

   ```html
   <article class="condition-content" id="my-condition">
       <h2>My Condition</h2>

       <section class="content-section">
           <h3>Pathophysiology</h3>
           ...
       </section>
   </article>
   ```

   The section jump bar, the Previous and Next buttons, and the "Quiz me" button are generated automatically.

3. Useful building blocks:

   | Markup | Result |
   | --- | --- |
   | `<abbr class="term" tabindex="0" data-definition="...">ABC</abbr>` | Term with a definition tooltip |
   | `<span class="change up">Increased</span>` | ▲ Increased label (also `down` and `erratic`) |
   | `<button type="button" class="link-button" data-goto="gerd">GERD</button>` | Link to another condition |
   | `<p class="note">...</p>` | Highlighted callout |
   | `<span class="badge">Most common</span>` | Badge |
   | `<nav class="mnemonic">...</nav>` | Mnemonic letter strip (copy it from the vascular liver injury page) |

   Any `data-goto` link to a page that doesn't exist yet is shown greyed out as "not added yet". It becomes active automatically once an article with that `id` is added.

### The hepatocellular injury letter strip

Each hepatocellular injury page has a copy of the `.mnemonic` strip. It links to these article ids:

| Letter | Cause | Article `id` |
| --- | --- | --- |
| V | Vascular | `hepatic-vascular` |
| I | Infectious | `hepatic-infectious` |
| T | Traumatic | `hepatic-traumatic` |
| A | Autoimmune | `hepatic-autoimmune` |
| M | Metabolic | `hepatic-metabolic` |
| I | Iatrogenic / idiopathic | `hepatic-iatrogenic` |
| N | Neoplastic | `hepatic-neoplastic` |
| + | Other | `hepatic-other` |

In each copy, the current page's letter is a `<span ... aria-current="page">` and every other letter is a `<button ... data-goto="...">`. If you change a letter, update all eight copies.

### Adding a quiz question

Add an entry to `QUIZ_QUESTIONS` in `gi/questions.js`:

```js
{
    id: "gerd-example",            // unique and stable: saved progress uses it
    condition: "gerd",             // must match an article id
    step: 2,                       // 1 = Step 1, 2 = Step 2 CK
    stem: "A 45-year-old man ...", // clinical vignette
    leadIn: "Which of the following is the most appropriate next step?",
    options: ["...", "...", "...", "...", "..."], // exactly five
    answer: 2,                     // index of the correct option
    explanation: "...",
    notes: { 0: "Why option 0 is wrong" },    // optional
    info: "Context beyond the course material", // optional, shown as "Additional information"
},
```

Options are shuffled when shown, so you can list them in any order.

### Adding an organ system

1. Copy the `gi` folder (e.g. to `neuro`), then replace its conditions, questions and drawing.
2. In the new `index.html`, set `data-specialty` on `<body>`. Quiz progress is saved separately for each value.
3. In the new `map.js`, write a `drawTract()` that returns the point each `.station`'s leader line starts from. The last `.station` in the sidebar sets the height of the drawing.
4. Add a card for it to the landing page (`index.html`).

### Shared concepts (neurology)

Mark a term that recurs across conditions:

```html
<span class="concept" data-concept="dopamine">dopamine</span>
```

The mark is invisible. If the same `data-concept` appears in another condition, a "Shared concepts" panel linking the two is added automatically.

## Browser support

The page works in current versions of Chrome, Edge, Firefox and Safari. Highlighting search matches on a page needs the CSS Custom Highlight API. Browsers without it still filter the sidebar but don't highlight matches.

## Saved data

The theme choice (`clinical-theme`) and each organ system's quiz progress (e.g. `gi-quiz-history`) are saved in the browser's `localStorage` and never leave your device. To clear quiz progress, use **Reset progress** on the quiz setup screen.
