# Speaker guide

Slide numbers are the ones printed on the slides. "Click" lists what each press reveals. "Notes" are for a quick look while speaking. "Background" is for your preparation.

Reliability marks used below:

- **checked**: I found the headline figure or quote in the raw source text.
- **read**: a researcher read the source (often through a summarising tool). I did not compare it again.
- **general knowledge**: not researched for this talk. You or a clinician should confirm it.

All full citations with links are in the speaker view (`S`) of each slide.

**The red thread.** One invented patient (LC-009) and one question. Slide 3 asks "Why was the immunotherapy stopped?", slide 26 answers it. Yellow always means "this is the source". The RAVEN demo (slide 20) uses the same patient but another fact, the tumour size.

---

## Opening

### 1 Title

**Notes**
- Welcome, name, clinic
- Topic: data we already have, how to use it better
- Promise: one question now, the answer at the end

**Background.** The title says "Orbis", the audience knows it as their daily system. Make clear early that this is about hospital systems as such and that ORBIS is the familiar example.

### 2 Who am I

**Notes**
- Scientific associate, radiology, background in software and data
- RACOON: research infrastructure, all German university radiology departments
- RAVEN: our framework to assess extraction from reports, paper 2026
- Body composition analysis: routine CT, AI, prognosis; lung, melanoma, oesophagus
- Both the same idea: data that exists anyway, used a second time

**Background.** The last point links your two topics to the talk. Body composition analysis reads information from CTs that were made for another reason, and RAVEN does the same with text.

If someone asks about the RAVEN paper: it evaluates the earlier tool for extraction from radiology reports. RACOON-RAVEN, which you show later, is a new implementation, so the figures of the paper do not carry over. I only saw the paper's figures in a search snippet, so rely on your own copy.

Check that the people in both photos agree to being shown. The RACOON extension 2026 to 2029 ("RACOON x NATON") is announced and can be mentioned (checked, except the number of 39 hospitals, which is not on the cited page).

### 3 Why was the immunotherapy stopped?

**Click.** 1: documents pile up. 2: four documents come forward with highlighted passages. 3: second question.

**Notes**
- Question alone, pause
- Sounds simple, every ward round has one like it
- Click: this is where the answer sits
- Click: four documents, four wordings. Suspicion, date, symptom, final reason
- Click: from one patient to all. From care to research
- Keep the answer for the end

**Background.** The patient and all documents are invented. The story: pembrolizumab from March 2026, breathlessness and new ground-glass opacities on CT on 14 August, suspicion of pneumonitis, therapy paused, final stop in October.

Each document alone is insufficient. The medication plan has the date without a reason. The general practitioner names the symptom. The August letter has a suspicion. Only the October letter names the reason. A keyword search for "Pneumonitis" misses two of the four.

"Pausiert" (letter of 19 August) and "abgesetzt" (plan, 14 August) differ on purpose. Real records contradict each other in this way, and a doctor may point it out. Your answer: yes, and the system has to show both passages instead of choosing one silently.

Pneumonitis is a known immune-related adverse event of checkpoint inhibitors. At grade 3, permanent discontinuation is the usual recommendation (general knowledge, please confirm with a clinician).

---

## Status quo

### 4 Divider

**Notes**
- What we have today, why this question was hard

### 5 We store documents

**Click.** 1: the tree turns into a timeline.

**Notes**
- Patient, cases, documents, forms
- Order follows departments and billing
- Click: same documents, sorted by time
- Nothing added, only rearranged, already easier to read

**Background.** This is the core of your message: the problem starts with the way we order information. The idea is old. Lawrence Weed proposed a record ordered by patient problems in 1968, and "LifeLines" showed one-screen patient timelines in the 1990s (the latter: abstract read, no measured benefit reported).

Evidence that the order matters: in a simulation, data grouped by problem was found faster (173 instead of 205 seconds) and with fewer errors (3.4% instead of 7.7%) (abstract read). In Cologne, a dashboard for one treatment question needed 172 seconds instead of 635 in ORBIS (checked). Use that one with care: seven clinicians, built by the authors, and ORBIS had been completely filled beforehand. Neither is on the slide.

### 6 More questions like this

**Click.** 1: pneumonitis cohort. 2: tumour size.

**Notes**
- Contrast reaction: safety question, CAVE field or an old letter
- Cohort: typical doctoral thesis; synonyms, suspected diagnoses, missing codes
- Tumour size: one number, two sources, two answers (returns in the demo)
- One person, one group, one number

**Background.** The three questions are different kinds of problem. The first is about absence: an empty field can mean "no reaction" or "nobody asked". The second is about finding patients. The third is about contradiction.

Someone will say that the contrast reaction belongs into the CAVE field. Agree, and ask how many reactions are only in a letter from another hospital.

### 7 I searched for MELD

**Click.** 1: the letter with the word. 2: MeDIC quote.

**Notes**
- My own search in ORBIS: MELD, no letters found
- But the word is there
- Full-text search covers only some fields
- Click: the study module has a similar limit, MeDIC says it itself
- No semantic search that I know of

**Background.** Two separate facts stand on this slide. The search result is your own observation and applies to the normal ORBIS search. The quote applies to the ORBIS study module, which helps to find study patients, and concerns PDF documents (checked, page undated). The quote does not explain the search result, so do not connect the two.

Repeat the search shortly before the talk and have MeDIC confirm the quote. People from MeDIC or UKM IT may sit in the room.

The study module deserves credit: it has supported more than 80 studies at UKM and searches structured and free text every night.

A good anecdote: UKM radiology published a study in 2026 in which GPT models calculated MELD and other liver scores for 106 patients. The reports had to be retrieved from ORBIS as PDF files and merged into one anonymised PDF per patient first (checked).

MELD can be calculated from laboratory values (general knowledge). If someone says "just take the lab data", the answer is that the example is about the search and the word.

### 8 The vendor says it too

**Click.** 1: highlight on the first excerpt. 2: highlight on the second. 3: press release.

**Notes**
- Not my words: vendor magazine, 2024
- Chief Medical Officer: systems imitate the paper chart
- Guest article: large part unstructured, "so auch in ORBIS"
- Press release last month: still navigating modules, views, forms
- A generation of systems, all vendors

**Background.** All three quotes are verbatim and checked. The context matters if a Dedalus-friendly colleague asks:

- The first is from an interview that promotes ORBIS U. The speaker describes the problem that the new product is meant to solve.
- The second is a guest article by a Dedalus author. It also mentions UKM: about 300,000 outpatient bills per year, for which the diagnosis is to be derived from ORBIS documents with language processing.
- The third speaks about hospital information systems in general. It announces the ORBIS Buddy assistant.

Fairness: KLAS gave ORBIS its DACH award, and I found no usability score for ORBIS alone. KLAS also reports that customers criticise delays, support, outdated technology and usability across the vendors (checked). So criticise the generation of systems. Do not say that ORBIS is worse than others.

The excerpts are short quotations with a source. If the slides are published, check the image rights.

### 9 Is today's data reliable?

**Click.** 1: second figure. 2: third figure.

**Notes**
- Before we doubt the AI: how good is the data now?
- 34%: severe sepsis with a sepsis code, ten German hospitals
- 6.6%: errors when people copy values from records into a study
- 50%: note text copied (USA)
- Compare AI with this, not with perfection

**Background.**

- **34%** (checked). 10,334 charts in eight university and two teaching hospitals, 2015 to 2017. The range between hospitals was 11 to 59%. In a follow-up analysis, 56% of cases were coded if sepsis was named in the chart, and 6% if it was not (read). The data predate a change in coding rules in 2020.
- **6.6%** (checked). A meta-analysis of 93 papers from 1978 to 2008, so it is old, and definitions vary. With training and checks, one study reached 1.0 to 2.6% (read). Typing itself is not the problem: single data entry has 0.29% errors. The weak step is reading and interpreting the record, which is exactly what doctoral candidates do.
- **50%** (checked). 104 million notes at Penn Medicine. Templates count as copies, so part of it is harmless. Copying means that the same statement in five notes is one piece of evidence.

Do not use "80% of health data is unstructured". I traced it to a vendor-sponsored article without a measurement. The better figure is that 13% of the concepts in free text of 1.8 million Dutch GP records had a structured counterpart (checked). Do not turn that into "87% unstructured".

### 10 Why not more forms?

**Click.** 1: RACOON template. 2: conclusion.

**Notes**
- Obvious idea: structure everything at entry
- Norway: structured record introduced, doctors stayed with free text
- RACOON's first template: 67 items, more time than routine reading
- Structure costs the time of the person who writes
- Click: let people write, let machines structure

**Background.** The Norwegian study is qualitative and from one hospital (abstract read). Doctors distrusted structured fields because colleagues kept writing the real information as text.

The 67-item template was the starting point of RACOON in the COVID period (283 patients, 8 European centres, read). You can say this with self-irony, it is your own network.

Counterpoints you may hear: structured reporting improves completeness in some studies. True, and in others free text was rated better, for example PSMA PET/CT in 2026 (abstract read). Forms remain right where the data must be exact, such as medication or study endpoints.

---

## New methods

### 11 Divider

**Notes**
- What language models can do with text we already have

### 12 One letter, four verbs

**Click.** 1: extract. 2: classify. 3: summarise. 4: search by meaning.

**Notes**
- Same letter as at the start
- Extract: drug, status. Text becomes fields
- Classify: what kind of document, what kind of event. "Suspected" stays suspected
- Summarise: one sentence
- Search: English query finds the German word
- No model was run for this slide

**Background.** The four verbs are the vocabulary for the rest of the talk. "Extract" and "classify" produce data that can be counted, so they matter most for research. "Summarise" produces text for a person. "Search by meaning" finds passages.

Point out the "V. a.". A model that drops it turns a suspicion into a diagnosis. Detecting such shades (negation, suspicion, time) is what separates a useful system from a risky one.

How a language model works, if asked: it has learned from very much text which words fit together, and it can follow an instruction such as "return the drug and its status as a table". It has no database of facts about the patient except the text you give it.

### 13 Search by meaning

**Click.** 1: words move into clusters. 2: chart.

**Notes**
- Keyword search compares letters
- Atemnot, Kurzatmigkeit, Dyspnoe, SOB: no shared letters, one meaning
- Text becomes a position on a map, similar meaning lies close together
- Click: identical words, both work. Synonyms: keyword search halves, meaning stays
- English data, German still open

**Background.** An embedding is a list of numbers that places a text on a map with many dimensions. The search looks for passages near the question. The two clusters on the slide are drawn by hand.

The chart (checked): MRR, mean reciprocal rank, scaled to 100. 100 means the right passage is always first. A passage in second place scores 50, in fourth place 25. The source is CliniQ, a preprint with 1,000 English discharge summaries from intensive care. "By meaning" is the best embedding model in that test.

Two things to know. For drug names keyword search was better, and the combination of both was best overall, so nobody should throw away keyword search. Semantic search can also confuse a finding with its absence ("Atemnot" and "keine Atemnot"). The study behind this used biomedical literature, and in hospital notes in Philadelphia a search plus language model answered 94% of negative questions correctly (abstract read).

I found no comparison of keyword and semantic search on German clinical text.

### 14 Stated facts work. Judgement is harder.

**Click.** 1: second question. 2: Münster study.

**Notes**
- 300 German oncology reports, models running locally
- Metastasis yes or no: as good as people
- Response to treatment: below people
- People disagree there too
- Münster: 14 heart values from 497 MRI reports, no training
- Rule: is the answer written in the text?

**Background.** Passweg 2026 (checked): Swiss hospital, reports in German, 300 in the test set, five models on local hardware. The human value comes from duplicate extraction by people. Humans agreed with each other in 96.6% of cases on metastasis and in 76.2% on response, so the second question is hard for everyone.

A good detail for the discussion: experts looked again at cases where model and human reference disagreed, and the human reference was wrong in about 20% of them (read). Only disagreements were re-checked, which favours the model.

The Münster study (checked) by Plagwitz and colleagues reached up to 95.4% correct annotation. "No fine-tuning" means that the models were used as they were, only with an instruction. The authors may be in the audience; the Münster affiliation was found by search and not read on the paper itself.

### 15 Where it fails

**Click.** 1: omissions. 2: not documented.

**Notes**
- pN1 lymph nodes, Pn1 nerves. Two capitals
- Omissions: 25 of 100, invented: 2 of 100
- Everybody fears inventions, the gaps are more frequent
- "Not documented" is not "no"
- Contrast reaction: empty is no all-clear

**Background.**

- **pN1/Pn1** (checked). From a Cologne study on prostate pathology. Models reported a lymph node status that was not in the text because they had read the perineural invasion.
- **25 and 2** (checked). Stanford, daily drafts of hospital courses, 100 reviewed by physicians. There were also 20 summaries with inaccuracies, which are not on the slide. No severe harm was reported. The physicians reported the errors themselves, so the true number may be higher.
- **Not documented** (abstract read, preprint, single author). In a test with 17 fields, most disagreement between differently worded prompts came from this distinction. For doctoral candidates this is practical advice: define in the codebook what an empty field means.

### 16 Person plus model

**Click.** 1: minutes.

**Notes**
- Chart review by hand: 68% correct
- With answers pre-filled by a local model: 89%
- Time: 9.4 to 3.6 minutes
- 38 patients, small. But the direction fits others
- Checking beats searching

**Background.** Neuse 2026 (checked): Mount Sinai, inflammatory bowel disease, four clinicians, a local open model (MedGemma 27B). 207 values per arm. The reference came from one clinician.

In a separate test the model alone reached 69.3%. Do not compare that directly with 68% and 89%, since it was another set.

A second study in an eye clinic points the same way: 82.3% by hand, 94.3% tool alone, 97.1% with both, and 8.8 instead of 25.2 minutes (checked; the paper's abstract and text differ slightly). Limits for both: one centre, not randomised, and set-up time is not counted. What the model misses is easily missed by the person too.

---

## RACOON-RAVEN

### 17 Divider

**Notes**
- One example of how to use this and stay in charge

### 18 How do I stay the boss?

**Click.** 1: the chain builds up. 2: closing line.

**Notes**
- The worry everybody has: do I hand over control?
- Read it backwards: statement, value, passage, document
- Every link one click away
- Chain of proof, technically provenance
- Click: machine proposes, person decides

**Background.** "Chain of proof" is your term. I found no established use in one targeted search. The established words are provenance, traceability, attribution and audit trail. There are standards for it (W3C PROV, the FHIR Provenance resource).

The closest relative in medicine is source data verification in clinical trials, where monitors compare study data with the record. It is estimated at 25 to 40% of trial cost (read, old estimates). Good clinical practice (ICH E6 R3, 2026) asks for traceable source records and says that unnecessary transcription steps should be avoided (checked).

Best supporting study: at Duke, a chart search that cites every claim made clinicians 37.6% faster at non-inferior quality (9.67 to 6.03 minutes, randomised crossover, 20 participants, preprint, checked).

### 19 A form and its sources

**Click.** 1: connections.

**Notes**
- The form comes first: which question, which definition
- Hint: largest axial diameter, no lymph nodes, no prior values
- Sources: text export from ORBIS as CSV, plus the usual Excel table
- PDF is planned
- Same definition for model and person

**Background.** The form is a FHIR Questionnaire, an international standard for forms. The hint is the sentence that the model receives for the question, so a good hint is the same work as a good codebook.

The ORBIS route is the text export: one column with the letter, other columns with metadata. There is no direct connection. A person maps columns to questions, the system only suggests.

RAVEN sends the text as it is to the configured model. Local operation is possible and nothing enforces it. If asked about privacy: it depends on the configured endpoint, and the text is not de-identified before the call.

### 20 One record in RACOON-RAVEN

**Click.** 1: cT stage and its quote. 2: quote not found. 3: conflict. 4: decision and export.

**Notes**
- Green accepted, yellow only read by a model, red look closer
- Click a value: the words light up
- Invented quote: the system searches, finds nothing, says so (staged)
- Table 48, report 38: both in view
- Person takes 38. Probably a typing error in the list
- Nobody would have noticed without the second source
- Export keeps state and source row

**Background.** The screen is redrawn. The answers are those expected for the sample patient, and no model was run. Run LC-009 once before the talk and compare.

How the check works: the model must return a literal quote for each value. The server searches this quote in the text, exactly except for case and spaces. If it is not there, the value gets the flag "quote not found". The report here says "Kein Pleuraerguss", so "links" is a staged error.

What you should know before someone asks:

- A value that only a model read is never accepted automatically. But a bulk accept exists, and with it someone can accept such values without opening them.
- A value from a table cell without a contradicting source is accepted automatically, without anyone looking.
- The quote check takes the first place where the words occur. A short quote can be marked at the wrong place.
- "Accepted" and "auto accepted" share the same green, only the word differs.
- The export contains value, state and source row. It has no quote, reviewer or model. It also contains identifying data such as name and date of birth.
- There are no accuracy figures for RACOON-RAVEN, and it is not presented as a medical device.

All of this was read from the code at commit a7fa7ec.

### 21 What the chain does not prove

**Click.** 1: staying critical. 2: nothing missing.

**Notes**
- Honest minute
- A found quote proves the words are there, not that the reading is right
- 15 of 23: own correct answer dropped, because a citation seemed to fit
- 82 to 46: very experienced radiologists, wrong AI suggestion
- What the model overlooks leaves no trace
- So: keep reading, take samples, check for gaps

**Background.** This slide makes the talk credible, so take time for it.

- **15 of 23** (checked). DKFZ preprint with 46 dermatology physicians. Without perceived support it was 2 of 25. Overall accuracy still rose from 70.8% to 82.6%, which you should say if the mood turns against AI. Whether the citation seemed to fit was not randomised, and the groups are small.
- **82% to 46%** (checked). 27 radiologists, 50 mammograms, deliberately wrong suggestions. Inexperienced readers fell from 80% to 20%. It was an experiment without clinical consequences.
- **No trace.** In RAVEN an empty field is not an open task, so a record can be closed with missed values.

In another experiment only 39% of users ever clicked a source (119 of 308, lay people, checked). No study I found isolates whether source links help doctors find errors in patient records. If asked what helps: showing the passage next to the value without a click, second readings of samples, and a fixed list of fields that must be answered with "not documented".

---

## Outlook

### 22 Divider

**Notes**
- What exists, what comes, why now

### 23 What exists today

**Notes**
- ORBIS: five AI functions, vendor information
- ORBIS Buddy: assistant over the record, announced last month
- UKM: letter pilot, data stay in house
- Bonn: local model, approved for real patient data
- For research: LangExtract, LLM-AIx, free, local
- Ask each tool: does it show me the source?

**Background.** There is hardly any independent evidence for the first two rows. The brochure claim that the speech assistant takes over 80 to 90% of documentation has no source. I did not check which functions UKM has licensed. The Buddy press release calls actions traceable, but does not describe links to passages.

The UKM row comes from an interview with the CIO in a chamber of commerce magazine (checked). No UKM-internal language model and no UKM AI strategy were found publicly. If you know more, use that.

Bonn (checked, preprint): one server with eight GPUs, approved by management, compliance, data protection and security. Tasks tied to a source text were rated best, and free conclusions caused the most critical errors. That supports your message.

LangExtract marks where each item stands in the text. LLM-AIx needs no programming and compares with a human reading. Both need a cleared way of using the data first.

### 24 What comes next

**Click.** 1: hospital.

**Notes**
- RAVEN: PDF documents, planned
- Hospital: traceable answers, local hardware, structured data as by-product
- Doctors write as today, structure arises alongside

**Background.** The right side is your expectation. It is no announcement by UKM, so say "I hope" or "I would ask for". PDF is harder than it looks: in one open pipeline, part of the wrong values came from reading the scan and not from the language model (read).

### 25 Why now

**Click.** 1: quote.

**Notes**
- ePA: research data centre from 2027
- Only structured data, first the medication list
- PDF findings stay outside
- What we leave as PDF does not exist for research

**Background.** The quote is from a KVB article that summarises the gematik schedule (checked). The dates have moved before, so "is to get" is the right wording.

As of October 2026, almost all hospital documents in the ePA are PDF/A, according to the German Hospital Federation. Search beyond metadata comes in 2027 at the earliest (checked). The European Health Data Space follows: secondary use from March 2029, with exchange of discharge reports and images from 2031 (read).

Patients can object to this use of their data.

### 26 Back to the question

**Click.** 1: answer with four passages. 2: cohort question.

**Notes**
- The question from the beginning
- Pneumonitis grade 3, suspected in August, stopped for good in October
- Four passages, each can be checked
- GP letter: only the symptom. No contradiction, no proof
- Click: for all patients, it becomes a query
- From documents to data

**Background.** This is an illustration and no RAVEN output. It shows the goal. "Becomes a query" is meant as a step that structured data makes possible, so do not give a number and do not claim that it runs today.

This is the sentence to end on: "We have the documents. Let us make them answer."

### 27 Thank you

**Notes**
- Thanks, questions
- Backup: right once, then down

---

## Backup

### B1 May we use our own records?

**Notes**
- GDNG section 6: own care data, research, without individual consent
- Pseudonymised, roles, logging, no passing on in principle
- GDSG NW gone since July 2025
- Identifiable data: ethics committee
- No legal advice, ask data protection

**Background.** The GDNG permits the institution, it is no licence for a single person (checked). A bill called GeDIG would replace the GDNG and name AI development explicitly. It was not adopted as far as I found by 22 November 2026. How the ethics rule applies to pseudonymised or anonymised retrospective data is not settled by its wording, so ask the committee. Older NRW guidance on the internet still cites the repealed act.

### B2 Patient data in chatbots

**Notes**
- Public services: no
- UniGPT: class V3 only in local models, V4 never
- Class of patient data: check before answering
- Düsseldorf: no personal data
- Local does not mean allowed

**Background.** UniGPT belongs to the university and not to UKM. Its pages do not name patient data, and the handbook that defines the class could not be opened. The Dutch case is an official notice from 2024 (read). I found no documented case in a German hospital.

### B3 Hallucination and omission

**Notes**
- Stanford: 2.33 unsupported claims per summary
- Half had none or one
- Other study: 46 omissions, 5 errors
- Links show inventions, hide gaps

**Background.** The Stanford number is an automatic estimate in routine use (checked, preprint). One of the summaries in the other study turned a severe aortic stenosis into a moderate one. Rates from different studies use different units, so never put them in one chart.

### B4 Local models in German

**Notes**
- 97%: Llama 3 70B equal to GPT-4, prostate pathology
- 83% small model, 59% strongly compressed
- 34.7%: exact tumour morphology codes
- 61.3%: procedures in real letters
- Size, task and real data decide

**Background.** F1 combines two things: how many of the found items are right, and how many of the right items were found. Essen's model reached 0.99 for medication on synthetic letters and 93.0% correct on 30 real ones. The two measures differ, so the drop is only an indication. The lesson: test on your own real documents.

### B5 AI scribes

**Notes**
- 16 minutes documentation per 8 patient hours
- 9.5% with one product, nothing significant with another
- Helpful, small effect

**Background.** The 16 minutes come from an observational study in five US centres, where after-hours work did not change (read). The second is a randomised trial in one centre (checked for the 9.5%).

### B6 Summaries in practice

**Notes**
- Epic, randomised, 284 clinicians
- Load lower, time the same
- 14% of summaries touched, use halved
- Concrete questions seem to work better than unrequested summaries

**Background.** Preprint, figures checked in the abstract. Minus 27.4 points is on a scale from 0 to 400. The last note is my inference from comparing Scout (Duke, 37.6% faster with questions) with this trial. Nobody has tested it directly, so present it as an impression.

### B7 Sources

**Notes**
- Short list, details in the speaker view

---

## Before the talk

1. Have a clinician read the invented letters (slides 3, 12, 26).
2. Run LC-009 in RAVEN and compare it with slide 20.
3. Repeat the MELD search and confirm the MeDIC quote (slide 7).
4. Ask whether the people in the photos agree (slide 2).
5. Check the class of patient data for UniGPT (B2).
6. Set the date in `HEADER` in `js/scenes.js`.
7. Test projector and speaker view.
