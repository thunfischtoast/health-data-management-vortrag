# Speaker guide

Slide numbers are the ones printed on the slides. "Click" lists what each press reveals. "Notes" are for a quick look while speaking. "Background" is for your preparation.

Reliability marks used below:

- **checked**: I found the headline figure or quote in the raw source text.
- **read**: a researcher read the source (often through a summarising tool). I did not compare it again.
- **general knowledge**: not researched for this talk. You or a clinician should confirm it.

Linked words lead to the source. Hover over a link to see its author and title. All full citations are also in the speaker view (`S`) of each slide, and all 210 findings are in `reports/Hospital data and AI talk.html`.

**The red thread.** One invented patient (LC-009) and one question. Slide 3 asks "Why was the immunotherapy stopped?", slide 15 answers it. Yellow always means "this is the source". The RAVEN demo (slide 13) uses the same patient but another fact, the tumour size.

**The idea.** The talk has one sentence to remember: "Let people write. Let machines structure." It lands on slide 6, and the closing slide repeats it with a third line, "Check where they read." Everything between the two shows why the third line matters.

**The arc.** Five parts in 20 minutes. The slides carry no chapter titles, so the transitions are yours to say.

| Minutes | Part | Slides |
| --- | --- | --- |
| 0 to 4 | The question, and how I ran into it | 1 to 4 |
| 4 to 7 | Why it is hard, and why more forms will not fix it | 5, 6 |
| 7 to 12 | What machines can do now, and where they fail | 7 to 10 |
| 12 to 17 | How we stay in charge | 11 to 14 |
| 17 to 20 | The answer, why now, what you can do | 15 to 18 |

Study figures appear on two slides only (10 and 14). All others are in the notes and in the backup, ready for questions.


---

## The question

### 1 Title

**Notes**
- Welcome, name, clinic
- Topic: data we already have, how to use it better
- No agenda. After a short introduction, go straight to the question

**Background.** The title says "Orbis", the audience knows it as their daily system. Make clear early that this is about hospital systems as such and that ORBIS is the familiar example.

### 2 Who am I

**Notes**
- Keep it short, about 30 seconds. The story starts on the next slide
- Scientific associate, radiology, background in software and data
- RACOON: research infrastructure, all German university radiology departments
- RAVEN: our framework to assess extraction from reports, paper 2026
- Body composition analysis: routine CT, AI, prognosis; lung, melanoma, oesophagus
- Both the same idea: data that exists anyway, used a second time

**Background.** The last point links your two topics to the talk. Body composition analysis reads information from CTs that were made for another reason, and RAVEN does the same with text. The papers: [lung][bca-lung], [melanoma][bca-melanoma], [oesophagus][bca-oesophagus].

If someone asks about the [RAVEN paper][raven-paper]: it evaluates the earlier tool for extraction from radiology reports. RACOON-RAVEN, which you show later, is a new implementation, so the figures of the paper do not carry over. I only saw the paper's figures in a search snippet, so rely on your own copy.

Check that the people in both photos agree to being shown. The RACOON extension 2026 to 2029 ("RACOON x NATON") [is announced][06:racoon-naton-2026] and can be mentioned (checked, except the number of 39 hospitals, which is not on the cited page).

### 3 Why was the immunotherapy stopped?

**Click.** 1: documents pile up. 2: four documents come forward with highlighted passages. 3: second question.

**Notes**
- Question alone, pause
- Sounds simple, every ward round has one like it
- Click: this is where the answer sits
- Click: four documents, four wordings. Suspicion, date, symptom, final reason
- Click: from one patient to all. From care to research
- Keep the answer for the end
- Transition: "I ran into this myself. Let me show you how."

**Background.** The patient and all documents are invented. The story: pembrolizumab from March 2026, breathlessness and new ground-glass opacities on CT on 14 August, suspicion of pneumonitis, therapy paused, final stop in October.

Each document alone is insufficient. The medication plan has the date without a reason. The general practitioner names the symptom. The August letter has a suspicion. Only the October letter names the reason. A keyword search for "Pneumonitis" misses two of the four.

"Pausiert" (letter of 19 August) and "abgesetzt" (plan, 14 August) differ on purpose. Real records contradict each other in this way, and a doctor may point it out. Your answer: yes, and the system has to show both passages instead of choosing one silently.

Pneumonitis is a known immune-related adverse event of checkpoint inhibitors. At grade 3, permanent discontinuation is the usual recommendation (general knowledge, please confirm with a clinician).

### 4 I searched for MELD

**Click.** 1: the letter with the word.

**Notes**
- My own search in ORBIS: MELD, no letters found
- But the word is there
- Full-text search covers only some fields
- No semantic search that I know of
- Tell it as a story: what you wanted, what you typed, what came back

**Background.** The slide shows only your own observation, which applies to the normal ORBIS search. The MeDIC quote has left the slide; use it only if asked. It applies to the [ORBIS study module][01:ukm-studymodule-no-pdf], which helps to find study patients, and concerns PDF documents (checked, page undated). The quote does not explain the search result, so do not connect the two.

Repeat the search shortly before the talk and have MeDIC confirm the quote. People from MeDIC or UKM IT may sit in the room.

The [study module][01:ukm-studymodule-no-pdf] deserves credit: it has supported more than 80 studies at UKM and searches structured and free text every night.

A good anecdote: UKM radiology [published a study in 2026][01:ukm-radiology-hcc-pdf] in which GPT models calculated MELD and other liver scores for 106 patients. The reports had to be retrieved from ORBIS as PDF files and merged into one anonymised PDF per patient first (checked).

MELD can be calculated from laboratory values (general knowledge). If someone says "just take the lab data", the answer is that the example is about the search and the word.

---

## Why it is hard

### 5 We store documents

**Click.** 1: the tree turns into a timeline.

**Notes**
- Patient, cases, documents, forms
- Order follows departments and billing
- Click: same documents, sorted by time
- Nothing added, only rearranged, already easier to read

**Background.** This is the core of your message: the problem starts with the way we order information. The idea is old. [Lawrence Weed][03:weed-1968] proposed a record ordered by patient problems in 1968, and ["LifeLines"][03:lifelines-1998] showed one-screen patient timelines in the 1990s (Weed: citation only, not read; LifeLines: abstract read, no measured benefit reported).

Evidence that the order matters: in a simulation, [data grouped by problem was found faster][03:problem-view-faster] (173 instead of 205 seconds) and with fewer errors (3.4% instead of 7.7%) (abstract read). In Cologne, [a dashboard for one treatment question][01:orbis-vs-dashboard-time] needed 172 seconds instead of 635 in ORBIS (checked). Use that one with care: seven clinicians, built by the authors, and ORBIS had been completely filled beforehand. Neither is on the slide.

### 6 Why not more forms?

**Click.** 1: RACOON template. 2: conclusion.

**Notes**
- Obvious idea: structure everything at entry
- Norway: structured record introduced, doctors stayed with free text
- RACOON's first template: 67 items, more time than routine reading
- Structure costs the time of the person who writes
- Click: let people write, let machines structure
- This is the idea of the talk. Say it, then pause

**Background.** [The Norwegian study][05:free-text-preferred-norway] is qualitative and from one hospital (abstract read). Doctors distrusted structured fields because colleagues kept writing the real information as text.

[The 67-item template][06:racoon-template-cost] was the starting point of RACOON in the COVID period (283 patients, 8 European centres, read). You can say this with self-irony, it is your own network.

Counterpoints you may hear: structured reporting improves completeness in some studies. True, and in others free text was rated better, for example [PSMA PET/CT in 2026][05:structured-reporting-mixed] (abstract read). Forms remain right where the data must be exact, such as medication or study endpoints.

---

## What machines can do

### 7 LLM use cases in data management

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

### 8 Search by meaning

**Click.** 1: words move into clusters.

**Notes**
- Keyword search compares letters
- Atemnot, Kurzatmigkeit, Dyspnoe, SOB: no shared letters, one meaning
- Text becomes a position on a map, similar meaning lies close together
- English data, German still open

**Background.** An embedding is a list of numbers that places a text on a map with many dimensions. The search looks for passages near the question. The two clusters on the slide are drawn by hand.

Figures if asked, no longer on the slide (checked): MRR, mean reciprocal rank, scaled to 100. 100 means the right passage is always first. A passage in second place scores 50, in fourth place 25. The source is [CliniQ][03:cliniq-synonym-gap], a preprint with 1,000 English discharge summaries from intensive care. "By meaning" is the best embedding model in that test.

Two things to know. [For drug names keyword search was better][03:cliniq-hybrid-drugs], and the combination of both was best overall, so nobody should throw away keyword search. Semantic search can also [confuse a finding with its absence][03:negation-weakness] ("Atemnot" and "keine Atemnot"). The study behind this used biomedical literature (abstract read). Counterexample: [in hospital notes in Philadelphia][03:chop-semantic-search], a search plus language model answered 94% of negative questions correctly, compared with 71% without the search (preprint, checked).

I found no comparison of keyword and semantic search on German clinical text. The nearest is [Essen][03:essen-german-embeddings], which trained a search model on German hospital documents without a keyword baseline (read).

### 9 Where it fails

**Click.** 1: not documented.

**Notes**
- pN1 lymph nodes, Pn1 nerves. Two capitals
- The error looks right, that is the danger
- "Not documented" is not "no"
- Contrast reaction: empty is no all-clear

**Background.**

- [**pN1/Pn1**][02:pn-pn-example] (checked). From a Cologne study on prostate pathology. Models reported a lymph node status that was not in the text because they had read the perineural invasion.
- Not on the slide, say if asked: [**25 and 2**][03:medagentbrief] (checked). Stanford, daily drafts of hospital courses, 100 reviewed by physicians. There were also 20 summaries with inaccuracies, which are not on the slide. No severe harm was reported. The physicians reported the errors themselves, so the true number may be higher.
- [**Not documented**][02:absence-vs-silence] (abstract read, preprint, single author). In a test with 17 fields, most disagreement between differently worded prompts came from this distinction. For doctoral candidates this is practical advice: define in the codebook what an empty field means.

### 10 Person plus model

**Click.** 1: minutes.

**Notes**
- The one study figure in this part. Let it stand
- Chart review by hand: 68% correct
- With answers pre-filled by a local model: 89%
- Time: 9.4 to 3.6 minutes
- 38 patients, small. But the direction fits others
- Checking beats searching

**Background.** [Neuse 2026][02:ibd-human-in-loop] (checked): Mount Sinai, inflammatory bowel disease, four clinicians, a local open model (MedGemma 27B). 207 values per arm. The reference came from one clinician.

In a separate test the model alone reached 69.3%. Do not compare that directly with 68% and 89%, since it was another set.

[A second study in an eye clinic][02:ophthoacr] points the same way: 82.3% by hand, 94.3% tool alone, 97.1% with both, and 8.8 instead of 25.2 minutes (checked; the paper's abstract and text differ slightly). Limits for both: one centre, not randomised, and set-up time is not counted. What the model misses is easily missed by the person too.

---

## How we stay in charge

### 11 How do I stay the boss?

**Click.** 1: the chain builds up. 2: closing line.

**Notes**
- The worry everybody has: do I hand over control?
- Read it backwards: statement, value, passage, document
- Every link one click away
- Chain of proof, technically provenance
- Click: machine proposes, person decides

**Background.** "Chain of proof" is your term. I found [no established use][04:term-chain-of-proof] in one targeted search. The established words are provenance, traceability, attribution and audit trail. There are standards for it ([W3C PROV, the FHIR Provenance resource][04:standards-prov]).

The closest relative in medicine is source data verification in clinical trials, where monitors compare study data with the record. It is estimated at [25 to 40% of trial cost][04:sdv-cost] (read, old estimates). Good clinical practice ([ICH E6 R3, 2026][04:ich-e6r3]) asks for traceable source records and says that unnecessary transcription steps should be avoided (checked).

Best supporting study: at Duke, [a chart search that cites every claim][03:scout-rct] made clinicians 37.6% faster at non-inferior quality (9.67 to 6.03 minutes, randomised crossover, 20 participants, preprint, checked).

### 12 A form and its sources

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

### 13 One record in RACOON-RAVEN

**Click.** 1: cT stage and its quote. 2: quote not found. 3: conflict. 4: decision and export. Down: optional technical slides T1 to T9.

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

### T1 to T9 Optional technical stack

Press down on slide 13 to enter, right to skip to slide 14. For a session with a technical audience. Everything describes RAVEN `main` a7fa7ec (22.11.2026). The code was read, not run. Paths are relative to `backend/racoon_raven/` unless they start with `frontend/` or `docs/`.

Two more marks apply here:

- **code**: I read the lines myself in the source.
- **fact sheet**: a code-reading agent reported it with file and line, and I did not open the lines again.

### T1 RACOON-RAVEN under the hood

**Notes**
- Cover of the technical part
- Down: details. Right: back to slide 14

**Background.** The slide lists the topics and points down. If someone asks about size: about 9,700 lines of Python in the backend, 11,600 lines in the frontend, 458 backend and 187 frontend test functions, 7 browser tests against a fake LLM, 191 commits since 10 September 2026 (counted by command). There is no CI (fact sheet, from git log).

### T2 Architecture

**Click.** 1: the LLM endpoint turns red, with the data protection sentence.

**Notes**
- One Postgres: tables, FHIR resources, job queue
- No FHIR server, no Redis
- Only Postgres, Keycloak, Garage in Docker
- LLM: any OpenAI-compatible URL
- Text goes unchanged: protection is the choice of a local endpoint

**Background.**
- **Stack (fact sheet):** FastAPI with SQLAlchemy 2 async and psycopg 3. Procrastinate is a job queue that lives in Postgres, and the worker runs one task, `process_input`. The frontend is a SvelteKit single-page app that logs in with oidc-client-ts (OIDC with PKCE). The API checks the RS256 token against Keycloak's keys. It does not check the audience; it checks `azp`, the client the token was issued to.
- **Docker (code):** `docker-compose.yml` has three services: `postgres:17`, `keycloak:26.7.3` and `garage:v2.3.0`.
- **LLM client (code):** `llm/client.py` posts to `{base_url}/chat/completions` with httpx and uses no SDK. Any server that speaks this protocol works: llama.cpp, vLLM, Ollama or a cloud service. The model in use is Qwen 3.7 27B. The RAVEN docs still name qwen3.5-9b on llama.cpp, and the speed figures on T9 were measured with that older model.
- **No de-identification (fact sheet, confirmed by grep):** no code removes names or dates from the text. `strategies/prompt.py` puts the report text unchanged between the markers. Dates are out of scope in the LLM spec. If someone points the URL at a cloud service, the report text leaves the hospital. Say this plainly.

### T3 From upload to export

**Click.** 0: upload. 1: map. 2: queue. 3: extract, with the call to the LLM. 4: match. 5: ingest. 6: export. Each click draws the next arrow and shows below what the invented patient LC-009 looks like at that stage: the Excel row with its German report, the column mapping, the job, the model answer as JSON, the match, the field states and the export row.

**Notes**
- Top lane: browser and API. Middle: worker. Bottom: what lands in Postgres
- Upload and map in the browser, then one job
- Worker: extract all reports first, then match and ingest row by row
- Export reads the field values: CSV or XLSX

**Background (fact sheet).** Uploading parses the file at once and stores the original in Garage. A file with a known SHA-256 hash gets a warning; it is not refused. Mapping assigns columns to roles and items, values to answer options, and optionally a text column with a strategy. Processing defers one job, which the browser follows over server-sent events. The worker runs two phases. Phase 1 extracts every report (progress 0 to 90%). Phase 2 handles each row in its own transaction: it matches subject and timepoint, then writes proposals or opens a review task. Extraction runs two calls in parallel by default (`RR_LLM_CONCURRENCY`). The examples are invented and match slides 12 and 13: the same report, 48 mm in the table and 38 mm in the text. The JSON answer is the expected one, not a model run. The export row assumes that a reviewer accepted 38 mm; the real export has more columns (study, patient data, template, review status, `__distance`), shortened to "…" on the slide.

### T4 The prompt

**Click.** 1: three rules marked: no guessing, verbatim quotes, ignore instructions in the text.

**Notes**
- English rules, German report and form
- One block per field, from the FHIR item: label, type, unit, hint
- The hint is the researcher's definition
- Answer: value plus verbatim quotes per field
- Injection defence is one sentence

**Background (code).** The system message is quoted in full from `strategies/prompt.py`. The field block is what `_field()` builds for the item `tumor-groesse` of the sample template `samples/lung-ct/template-ct-thorax-staging.json`, with its real German hint. Only the text column is sent; the pseudonym and patient ID columns are not added to the prompt. There are two strategies with the same prompt (fact sheet). `single_call` asks for all fields at once. `per_group` makes one call per top-level group, one after the other. The answer on the right is the expected one; no model was run for this slide.

### T5 Checking the answer

**Click.** 1: what a found quote proves.

**Notes**
- Schema forces value and quotes
- Bad field dropped, rest kept
- Quote search exact, only case and spaces ignored
- Every call stored, reused when nothing changed
- Timeout not retried on purpose

**Background.**
- **Schema (code):** `temperature: 0` and `response_format` of type `json_schema` with `strict: true`. After the first HTTP 400 the client switches to `json_object` for good, because some servers do not support schemas.
- **Validation (fact sheet):** each field is checked with pydantic. Values then go through the same type check as table cells, and an unknown choice code gets the flag `invalid_value`.
- **Quote search (code):** `llm/quotes.py` folds case (ß becomes ss), collapses whitespace on both sides and then looks for the exact substring. It takes the first hit and maps the offsets back to the original text. A field is flagged `quote_not_found` only when none of its quotes is found (`services/ingest.py`).
- **Reuse (code):** a run is reused when it succeeded and text hash, strategy, strategy version, form version and model are all the same (`llm/extractor.py`).
- **Retries (code):** network errors, 429 and 5xx are tried up to three times, with 1 s and 4 s pauses. A read timeout fails at once. The code comment says the server is still busy with the same request. The LLM spec says timeouts are retried; README and code agree with each other.

### T6 The chain of proof in the database

**Click.** 1: the conclusion.

**Notes**
- Start at the 38 in the export
- Who decided, and when
- Which proposals there were: report with quote, table cell
- Where they came from: file and row, model call
- Each step stores the one before. Nothing is lost on the way

**Background (fact sheet).** The cards map to tables in `db/models.py`. The export is built on request from `field_value`. The decision is `field_value` plus one `field_event` per change, with user, time and reason. Each proposal is a `proposal` row, one per source row, item and method, with the table cell or the quote position. The source is `input_row` (the raw cells) and, for model proposals, `llm_run` and `llm_step` (prompt, model, raw answer). The QuestionnaireResponse is stored as FHIR JSON in the same database. There is no FHIR server (HAPI and Medplum too heavy, Fuego closed source, Aidbox commercial, from the scope spec) and no FHIR export yet. One caveat for questions: the CSV export itself names only value, state and source row, not the quote, reviewer or model. Those stay in RAVEN.

### T7 Field states and automatic acceptance

**Click.** 1: the rule that keeps model-only values open.

**Notes**
- Flagged proposals do not count
- All sources agree, and one is a table column: automatic
- Only a model read it: a person decides
- Ingestion never overwrites a human decision
- Settled conflicts stay settled

**Background (code).** The excerpt is from `evaluate()` in `services/field_state.py`, with only the comment wrapped. One consequence for the main talk: a single table cell with no other source is accepted automatically, because "all sources agree" holds for one source. A conflict on a decided field is raised again only by a proposal that was updated after the decision. Both times come from the database clock (`clock_timestamp()`), so a job that waited for the reviewer's lock still counts as newer (fact sheet).

### T8 Matching patients and timepoints

**Notes**
- Pseudonym, patient ID, then a score
- Score: family name weighs half
- From 0.6 a candidate, a person links
- Timepoint: distance from baseline, inside a window
- Unclear cases become review tasks

**Background (code).** The weights and the formula are from `fhir/scoring.py`. The family name counts with its difflib similarity, the other fields only when they are equal. The sum is divided by the weights of the fields the row carries, so a row with only family name and birth date can still reach 0.6. The thresholds are in `fhir/constants.py`. The code comment gives the reason for difflib: trigram similarity is too low for one-letter typos, "meyer" and "meier" score 0.33. difflib gives 0.80; I computed that myself. For input rows, a fuzzy result never links on its own (`services/input_matching.py`). The timepoint rule is in `assign_timepoint()`. It has three modes per input: a fixed timepoint, a column with the timepoint code or label, and the date rule on the slide. The windows on the slide are invented. Dates are read day first (fact sheet).

### T9 Review, and what is not there yet

**Notes**
- Keyboard review, one key per action
- Conflict view: one card per value, all sources
- Then the honest list, slowly

**Background.**
- **Keys (code):** they are in `frontend/src/lib/review/keymap.ts`. The list on the slide is shortened: `N` (previous open field), `[`, `]` and `?` are missing, and the arrow keys and Enter are aliases for j, k and e.
- **Bulk accept (code):** "Accept agreeing values" in `services/review.py` takes every proposed field without conflict and without flags. That includes fields with only an LLM proposal.
- **History (fact sheet):** `field_event` rows are deleted with a record that has neither a proposal nor a human decision. Records with a decision are never deleted this way.
- **Speed (fact sheet, docs only):** about 91 s per report with thinking and 5 to 7 s without (qwen3.5-9b). A test with 2,000 table rows has a 60 s budget and took about 85 s on the dev machine (HANDOFF, 23.09.2026).
- **Quality:** there are no figures. The LLM spec lists metrics and model comparison as out of scope.

### 14 What the chain does not prove

**Click.** 1: the sentence.

**Notes**
- Honest minute, take your time
- Very experienced radiologists: 82% correct, 46% once the AI suggestion was wrong
- That can happen to us with a quote next to the value
- Click: a quote shows where the words are. Not that the reading is right, not that nothing is missing
- So: keep reading, take samples, check for gaps

**Background.** This slide makes the talk credible. Only the mammography study is on the slide; the other two points are for questions.

- [**15 of 23**][04:cora-double-edge] (checked). DKFZ preprint with 46 dermatology physicians. Without perceived support it was 2 of 25. Overall accuracy still rose from 70.8% to 82.6%, which you should say if the mood turns against AI. Whether the citation seemed to fit was not randomised, and the groups are small.
- [**82% to 46%**][04:mammo-bias] (checked). 27 radiologists, 50 mammograms, deliberately wrong suggestions. Inexperienced readers fell from 80% to 20%. It was an experiment without clinical consequences.
- **No trace.** In RAVEN an empty field is not an open task, so a record can be closed with missed values.

In another experiment [only 39% of users ever clicked][04:users-click-sources] a source (119 of 308, lay people, checked). No study I found isolates whether source links help doctors find errors in patient records. If asked what helps: showing the passage next to the value without a click, second readings of samples, and a fixed list of fields that must be answered with "not documented".

---

## Back to the question

### 15 Back to the question

**Click.** 1: answer with four passages. 2: cohort question.

**Notes**
- The question from the beginning
- Pneumonitis grade 3, suspected in August, stopped for good in October
- Four passages, each can be checked
- GP letter: only the symptom. No contradiction, no proof
- Click: for all patients, it becomes a query
- From documents to data

**Background.** This is an illustration and no RAVEN output. It shows the goal. "Becomes a query" is meant as a step that structured data makes possible, so do not give a number and do not claim that it runs today.

Transition to the next slide: "We have the documents. Let us make them answer, and soon."

### 16 Why now

**Click.** 1: quote.

**Notes**
- ePA: research data centre from 2027
- Only structured data, first the medication list
- PDF findings stay outside
- What we leave as PDF does not exist for research
- Transition: so what can each of us do?

**Background.** The quote is from [a KVB article][08:kvb-structured-only] that summarises the gematik schedule (checked). The dates have moved before, so "is to get" is the right wording.

As of October 2026, almost all hospital documents in the ePA are PDF/A, [according to the German Hospital Federation][05:epa-pdf-late-2026]. Search beyond metadata comes in 2027 at the earliest (checked). [The European Health Data Space][06:epa-ehds-timeline] follows: secondary use from March 2029, with exchange of discharge reports and images from 2031 (read).

Patients can object to this use of their data.

### 17 What you can do on Monday

**Click.** 1: keep the passage. 2: ask for the sentence.

**Notes**
- Three habits, no budget needed
- Define the field: one sentence, before extraction. The hint on slide 12 is an example
- Keep the passage: the source sentence next to every value, in your own Excel tables too
- Ask for the sentence: every tool, every vendor demo. "Show me where you read that"
- Doctoral candidates can start with the first two tomorrow

**Background.** This slide is new and has no study behind it. It turns the talk into advice. The three habits follow from slides 6, 12 and 14. If someone asks about tools that already keep the passage: [LangExtract][08:langextract] marks where each item stands in the text (backup B11).

### 18 Closing

**Notes**
- Read the three lines slowly
- Thanks, questions
- Backup: right once, then down (B1 to B13)

---

## Backup

### B1 May we use our own records?

**Notes**
- GDNG section 6: own care data, research, without individual consent
- Pseudonymised, roles, logging, no passing on in principle
- GDSG NW gone since July 2025
- Identifiable data: ethics committee
- No legal advice, ask data protection

**Background.** [The GDNG][07:gdng-6-own-data] permits the institution, it is no licence for a single person (checked). A bill called [GeDIG][07:gedig-ai-development] would replace the GDNG and name AI development explicitly. It was not adopted as far as I found by 22 November 2026. How [the ethics rule][07:ethics-aekwl-15] applies to pseudonymised or anonymised retrospective data is not settled by its wording, so ask the committee. Older NRW guidance on the internet still cites [the repealed act][07:gdsg-nw-repealed].

### B2 Patient data in chatbots

**Notes**
- Public services: no
- UniGPT: class V3 only in local models, V4 never
- Class of patient data: check before answering
- [Düsseldorf][06:kiconnect-no-personal-data]: no personal data
- Local does not mean allowed

**Background.** [UniGPT][06:unigpt-classes] belongs to the university and not to UKM. Its pages do not name patient data, and the handbook that defines the class could not be opened. [The Dutch case][07:chatbot-breach-gp] is an official notice from 2024 (read). I found no documented case in a German hospital.

### B3 Hallucination and omission

**Notes**
- Stanford: 2.33 unsupported claims per summary
- Half had none or one
- Other study: 46 omissions, 5 errors
- Links show inventions, hide gaps

**Background.** [The Stanford number][03:chatehr-errors] is an automatic estimate in routine use (checked, preprint). One of the summaries in [the other study][02:omissions-over-hallucinations] turned a severe aortic stenosis into a moderate one. Rates from different studies use different units, so never put them in one chart.

### B4 Local models in German

**Notes**
- 97%: Llama 3 70B equal to GPT-4, prostate pathology
- 83% small model, 59% strongly compressed
- 34.7%: exact tumour morphology codes
- 61.3%: procedures in real letters
- Size, task and real data decide

**Background.** The 97% are from [Cologne][02:grothey-prostate] and the 34.7% from [Essen][02:essen-icdo-failure] (both checked). F1 combines two things: how many of the found items are right, and how many of the right items were found. [Essen's model][02:essen-pigeon-synthetic-real] reached 0.99 for medication on synthetic letters and 93.0% correct on 30 real ones. The two measures differ, so the drop is only an indication. The lesson: test on your own real documents.

### B5 AI scribes

**Notes**
- 16 minutes documentation per 8 patient hours
- 9.5% with one product, nothing significant with another
- Helpful, small effect

**Background.** [The 16 minutes][08:jama-scribe-multisite] come from an observational study in five US centres, where after-hours work did not change (read). The second is [a randomised trial][08:ucla-scribe-rct] in one centre (checked for the 9.5%).

### B6 Summaries in practice

**Notes**
- Epic, randomised, 284 clinicians
- Load lower, time the same
- 14% of summaries touched, use halved
- Concrete questions seem to work better than unrequested summaries

**Background.** [Preprint][03:epic-summary-rct], figures checked in the abstract. Minus 27.4 points is on a scale from 0 to 400. The last note is my inference from comparing [Scout][03:scout-rct] (Duke, 37.6% faster with questions) with this trial. Nobody has tested it directly, so present it as an impression.

### B7 More questions like this

**Click.** 1: pneumonitis cohort. 2: tumour size.

**Notes**
- Contrast reaction: safety question, CAVE field or an old letter
- Cohort: typical doctoral thesis; synonyms, suspected diagnoses, missing codes
- Tumour size: one number, two sources, two answers (returns in the demo)
- One person, one group, one number

**Background.** The three questions are different kinds of problem. The first is about absence: an empty field can mean "no reaction" or "nobody asked". The second is about finding patients. The third is about contradiction.

Someone will say that the contrast reaction belongs into the CAVE field. Agree, and ask how many reactions are only in a letter from another hospital.

### B8 The vendor says it too

**Click.** 1: highlight on the first excerpt. 2: highlight on the second. 3: press release.

**Notes**
- Not my words: vendor magazine, 2024
- Chief Medical Officer: systems imitate the paper chart
- Guest article: large part unstructured, "so auch in ORBIS"
- Press release last month: still navigating modules, views, forms
- A generation of systems, all vendors

**Background.** All three quotes are verbatim and checked. The context matters if a Dedalus-friendly colleague asks:

- The first is from [an interview][01:dedalus-cmo-paper-copy] that promotes ORBIS U. The speaker describes the problem that the new product is meant to solve.
- The second is [a guest article][01:dedalus-unstructured-orbis] by a Dedalus author. It also mentions UKM: about 300,000 outpatient bills per year, for which the diagnosis is to be derived from ORBIS documents with language processing.
- [The third][01:dedalus-navigation-admission] speaks about hospital information systems in general. It announces the ORBIS Buddy assistant.

Fairness: [KLAS gave ORBIS its DACH award][01:dedalus-market-share], and I found no usability score for ORBIS alone. [KLAS also reports][01:klas-market-crossroads] that customers criticise delays, support, outdated technology and usability across the vendors (checked). So criticise the generation of systems. Do not say that ORBIS is worse than others.

The excerpts are short quotations with a source. If the slides are published, check the image rights.

### B9 Is today's data reliable?

**Click.** 1: second figure. 2: third figure.

**Notes**
- Before we doubt the AI: how good is the data now?
- 34%: severe sepsis with a sepsis code, ten German hospitals
- 6.6%: errors when people copy values from records into a study
- 50%: note text copied (USA)
- Compare AI with this, not with perfection

**Background.**

- [**34%**][05:sepsis-undercoding-germany] (checked). 10,334 charts in eight university and two teaching hospitals, 2015 to 2017. The range between hospitals was 11 to 59%. In a [follow-up analysis][sepsis-followup], 56% of cases were coded if sepsis was named in the chart, and 6% if it was not (read). The data predate a change in coding rules in 2020.
- [**6.6%**][05:mra-error-rate] (checked). A meta-analysis of 93 papers from 1978 to 2008, so it is old, and definitions vary. With training and checks, one study reached 1.0 to 2.6% (read). Typing itself is not the problem: single data entry has 0.29% errors. The weak step is reading and interpreting the record, which is exactly what doctoral candidates do. An example from Erlangen: [668 hours by hand against about 35 with a data warehouse][05:erlangen-668-hours] for 251 patients (checked, not on the slide).
- [**50%**][05:half-duplicated-text] (checked). 104 million notes at Penn Medicine. Templates count as copies, so part of it is harmless. Copying means that the same statement in five notes is one piece of evidence.

Do not use "80% of health data is unstructured". I traced it to [a vendor-sponsored article][05:eighty-percent-folklore] without a measurement. The better figure is that [13% of the concepts][05:text-vs-codes-dutch-gp] in free text of 1.8 million Dutch GP records had a structured counterpart (checked). Do not turn that into "87% unstructured".

### B10 Stated facts work. Judgement is harder.

**Click.** 1: second question. 2: Münster study.

**Notes**
- 300 German oncology reports, models running locally
- Metastasis yes or no: as good as people
- Response to treatment: below people
- People disagree there too
- Münster: 14 heart values from 497 MRI reports, no training
- Rule: is the answer written in the text?

**Background.** [Passweg 2026][02:passweg-metastasis-response] (checked): Swiss hospital, reports in German, 300 in the test set, five models on local hardware. The human value comes from duplicate extraction by people. Humans agreed with each other in 96.6% of cases on metastasis and in 76.2% on response, so the second question is hard for everyone.

A good detail for the discussion: experts looked again at cases where model and human reference disagreed, and [the human reference was wrong in about 20% of them][02:passweg-gold-standard-wrong] (read). Only disagreements were re-checked, which favours the model.

[The Münster study][02:ukm-cardiac-mri] (checked) by Plagwitz and colleagues reached up to 95.4% correct annotation. "No fine-tuning" means that the models were used as they were, only with an instruction. The authors may be in the audience; the Münster affiliation was found by search and not read on the paper itself.

### B11 What exists today

**Notes**
- ORBIS: five AI functions, vendor information
- ORBIS Buddy: assistant over the record, announced last month
- UKM: letter pilot, data stay in house
- Bonn: local model, approved for real patient data
- For research: LangExtract, LLM-AIx, free, local
- Ask each tool: does it show me the source?

**Background.** There is hardly any independent evidence for the first two rows. [The brochure claim][01:orbis-ai-available] that the speech assistant takes over 80 to 90% of documentation has no source. I did not check which functions UKM has licensed. [The Buddy press release][01:orbis-buddy] calls actions traceable, but does not describe links to passages.

The UKM row comes from [an interview with the CIO][06:ukm-ai-status] in a chamber of commerce magazine (checked). No UKM-internal language model and no UKM AI strategy were found publicly. If you know more, use that.

[Bonn][06:bonn-llm] (checked, preprint): one server with eight GPUs, approved by management, compliance, data protection and security. Tasks tied to a source text were rated best, and free conclusions caused the most critical errors. That supports your message.

[LangExtract][08:langextract] marks where each item stands in the text. [LLM-AIx][08:llmaix] needs no programming and compares with a human reading. Both need a cleared way of using the data first. The ePA is no source for this yet (slide 16).

### B12 What comes next

**Click.** 1: hospital.

**Notes**
- RAVEN: PDF documents, planned
- Hospital: traceable answers, local hardware, structured data as by-product
- Doctors write as today, structure arises alongside

**Background.** The right side is your expectation. It is no announcement by UKM, so say "I hope" or "I would ask for". PDF is harder than it looks: [in one open pipeline][02:llmaix-ocr-errors], part of the wrong values came from reading the scan and not from the language model (read).

### B13 Sources

**Notes**
- Short list, details in the speaker view

---

## Before the talk

1. Have a clinician read the invented letters (slides 3, 7, 15).
2. Run LC-009 in RAVEN and compare it with slide 13.
3. Repeat the MELD search and confirm the MeDIC quote (notes of slide 4).
4. Ask whether the people in the photos agree (slide 2).
5. Check the class of patient data for UniGPT (B2).
6. Set the date in `HEADER` in `js/scenes.js`.
7. Test projector and speaker view.

## Sources

Every linked source in order of appearance.

- [Body composition, lung cancer, J Cachexia Sarcopenia Muscle 2025][bca-lung]
- [Body composition, melanoma, J Transl Med 2025][bca-melanoma]
- [Body composition, oesophageal cancer, J Cachexia Sarcopenia Muscle 2026][bca-oesophagus]
- [RAVEN, Informatics in Medicine Unlocked 2026][raven-paper]
- [University of Duisburg-Essen, Faculty of Medicine, news, 2026-11][06:racoon-naton-2026] (page read)
- [Weed, Medical records that guide and teach, NEJM, 1968-03][03:weed-1968] (snippet only)
- [Plaisant et al., LifeLines: using visualization to enhance navigation and analysis of patient records, AMIA, 1998][03:lifelines-1998] (abstract)
- [Semanik et al., Impact of a problem-oriented view on clinical data retrieval, JAMIA, 2021][03:problem-view-faster] (abstract)
- [Grundmann et al., MEDA-PKD, npj Digital Medicine 2026, doi 10.1038/s41746-026-03267-0, 2026][01:orbis-vs-dashboard-time] (full text)
- [MeDIC Muenster, Study module, n.d. (read 2026-11)][01:ukm-studymodule-no-pdf] (page read)
- [Masthoff et al., Performance of GPT-based large language models in hepatocellular carcinoma stratification, Sci Rep 16:18342, 2026-06][01:ukm-radiology-hcc-pdf] (full text)
- [Dedalus DIREKT 2/2024, Paradigmenwechsel in der Patientensicht, 2024-11][01:dedalus-cmo-paper-copy] (full text)
- [Dedalus DIREKT 1/2024, Digitale Revolution: die nächsten Schritte, 2024-03][01:dedalus-unstructured-orbis] (full text)
- [Dedalus and Corti press release, 2026-10][01:dedalus-navigation-admission] (page read)
- [Dedalus, ORBIS im KLAS Report, 2025-08][01:dedalus-market-share] (page read)
- [KLAS Research, DACH KIS 2025: A Market at a Crossroads, 2025-08][01:klas-market-crossroads] (page read)
- [Schwarzkopf D et al., Understanding the biases to sepsis surveillance and quality assurance caused by inaccurate coding in administrative health data, Infection 2023;52(2):413-427, 2023-09][05:sepsis-undercoding-germany] (full text)
- [Thomas-Rüddel et al. 2025, follow-up analysis][sepsis-followup]
- [Garza MY et al., Error rates of data processing methods in clinical research, Int J Med Inform 2025, doi:10.1016/j.ijmedinf.2024.105749 (preprint full text and published abstract read; same numbers), 2025][05:mra-error-rate] (full text)
- [Rutzner S et al., Front Oncol 2017;7:16, doi:10.3389/fonc.2017.00016, 2017][05:erlangen-668-hours] (full text)
- [Steinkamp J, Kantrowitz JJ, Airan-Javia S, Prevalence and Sources of Duplicate Information in the EMR, JAMA Netw Open 2022;5(9):e2233348, 2022][05:half-duplicated-text] (full text)
- [HIT Consultant, Why Unstructured Data Holds the Key to Intelligent Healthcare Systems (sponsored); cited by Kong HJ, Healthc Inform Res 2019;25(1):1-2; see also Mancini, CMSWire 2018, 2015-03][05:eighty-percent-folklore] (page read)
- [Using Structured Codes and Free-Text Notes to Measure Information Complementarity in Electronic Health Records, J Med Internet Res 2025;27:e66910, 2025][05:text-vs-codes-dutch-gp] (full text)
- [Golburean O et al., JMIR Form Res 2025;9:e63902, 2025][05:free-text-preferred-norway] (abstract)
- [Salg et al., A reporting and analysis framework for structured evaluation of COVID-19 clinical and imaging data, npj Digital Medicine, 2021-04][06:racoon-template-cost] (full text)
- [Biechele G et al., Eur Radiol Exp 2026, doi:10.1186/s41747-026-00777-0, 2026][05:structured-reporting-mixed] (abstract)
- [Zhao et al., CliniQ, arXiv 2502.06252, 2025-02][03:cliniq-synonym-gap] (full text)
- [Zhao et al., CliniQ, arXiv 2502.06252, 2025-02][03:cliniq-hybrid-drugs] (full text)
- [Negation is Not Semantic, arXiv 2603.17580, 2026-03][03:negation-weakness] (abstract)
- [Mutinda et al., Health System Scale Semantic Search Across Unstructured Clinical Notes, arXiv 2604.25605, 2026-04][03:chop-semantic-search] (full text)
- [Arzideh et al., Improving RAG for Health Care by Fine-Tuning Clinical Embedding Models, JMIR, 2026-03][03:essen-german-embeddings] (full text)
- [Passweg et al., Data Extraction From Oncology Imaging Reports by Large Language Models: A Comparative Accuracy Study, JCO Clin Cancer Inform, 2026-07][02:passweg-metastasis-response] (full text)
- [Passweg et al., JCO Clin Cancer Inform, 2026-07][02:passweg-gold-standard-wrong] (full text)
- [Plagwitz et al., Zero-Shot LLMs for Named Entity Recognition: Targeting Cardiac Function Indicators in German Clinical Texts, Stud Health Technol Inform, 2024-08][02:ukm-cardiac-mri] (abstract)
- [Grothey et al., Commun Med 5:96, 2025-03][02:pn-pn-example] (full text)
- [Grolleau et al., Physician-Reported Safety Outcomes of AI-Generated Hospital Course Summaries, JAMA Network Open, 2026-05][03:medagentbrief] (full text)
- [Murin, Measuring the sensitivity of LLM-based structured extraction, arXiv 2606.05970, 2026-06][02:absence-vs-silence] (abstract)
- [Neuse et al., Cutting chart-review time and improving database accuracy in IBD with human-in-the-loop LLMs, BMC Med Inform Decis Mak, 2026-08][02:ibd-human-in-loop] (full text)
- [Chen et al., OphthoACR, Transl Vis Sci Technol 14(10):8, 2025-10][02:ophthoacr] (full text)
- [Fidelis, An auditable and source-verified framework for clinical AI decision support, Frontiers in Artificial Intelligence, 2026][04:term-chain-of-proof] (abstract)
- [W3C PROV-Overview; HL7 FHIR R4 Provenance (https://hl7.org/fhir/R4/provenance.html), 2013][04:standards-prov] (page read)
- [Source data verification (SDV) quality in clinical research: A scoping review, Journal of Clinical and Translational Science, 2024][04:sdv-cost] (page read)
- [ICH E6(R3) Good Clinical Practice, consolidated guideline, 2026-06][04:ich-e6r3] (page read)
- [Gao et al., A Randomized Controlled Trial and Pilot of Scout, arXiv 2604.26953, 2026-03][03:scout-rct] (full text)
- [Chanda et al. (DKFZ), Large language models improve physician accuracy but lead to false reliance, arXiv 2608.00817, 2026-08][04:cora-double-edge] (full text)
- [Dratsch et al., Automation Bias in Mammography, Radiology, 2023-05][04:mammo-bias] (abstract)
- [Kim, Vaughan, Liao, Lombrozo, Russakovsky, Fostering Appropriate Reliance on Large Language Models, CHI 2025, arXiv 2502.08554, 2025][04:users-click-sources] (page read)
- [Dedalus, Künstliche Intelligenz in ORBIS (brochure), 2026-06][01:orbis-ai-available] (full text)
- [Dedalus and Corti press release, 2026-10][01:orbis-buddy] (page read)
- [IHK Nord Westfalen, UKM geht neue Wege, 2026-02][06:ukm-ai-status] (page read)
- [Nowak et al., Secure On-Premise Deployment of Open-Weights LLMs in Radiology, arXiv 2604.22768, 2026][06:bonn-llm] (page read)
- [Google LangExtract, GitHub, 2026][08:langextract] (page read)
- [LLM-AIx (medRxiv 2024; npj Precision Oncology 2025) and KatherLab/llmaixweb, 2024-09][08:llmaix] (page read)
- [Wiest et al., A software pipeline for medical information extraction with LLMs, npj Precis Oncol 9:313, 2025-09][02:llmaix-ocr-errors] (full text)
- [KVB FORUM 3-4/2026, ePA-Ausbaustufen, 2026][08:kvb-structured-only] (full text)
- [DKG, Umsetzungshinweise für die elektronische Patientenakte, prozessual-technischer Teil, Version 2.4, 2026-10][05:epa-pdf-late-2026] (full text)
- [European Commission, EHDS Regulation; Federal Ministry of Health, FAQ FDZ Gesundheit, 2026][06:epa-ehds-timeline] (page read)
- [GDNG section 6, gesetze-im-internet.de, 2024][07:gdng-6-own-data] (full text)
- [Bundestag, Gesetzentwurf GeDIG, Drs. 21/8279, 2026-09][07:gedig-ai-development] (page read)
- [Ärztekammer Westfalen-Lippe, 11th amendment of the Berufsordnung, MB.NRW 2025 Nr. 184, 2025-12][07:ethics-aekwl-15] (full text)
- [GV. NRW. 2025 S. 530, Articles 15 and 20, 2025-06][07:gdsg-nw-repealed] (page read)
- [HHU Düsseldorf, HeiCAD, KI:connect, undated, read 2026-11][06:kiconnect-no-personal-data] (page read)
- [University of Münster, UniGPT terms of use, undated, read 2026-11][06:unigpt-classes] (page read)
- [Autoriteit Persoonsgegevens, notice on AI chatbots and data breaches, 2024-08][07:chatbot-breach-gp] (page read)
- [Shah et al. (Stanford), Adoption and Use of LLMs at an Academic Medical Center, arXiv 2602.00074, 2026-01][03:chatehr-errors] (full text)
- [Kahl et al., Evaluation of electronic health record-integrated AI chart review, npj Health Systems, 2026-01][02:omissions-over-hallucinations] (full text)
- [Grothey et al., Comprehensive testing of LLMs for extraction of structured data in pathology, Commun Med 5:96, 2025-03][02:grothey-prostate] (full text)
- [Arzideh et al., Automated Tumor ICD Coding of Real-World Pathology Reports, JCO Clin Cancer Inform 10:e2500254, 2026-03][02:essen-icdo-failure] (abstract)
- [Eryılmaz et al. (University Hospital Essen), J Med Internet Res 2026, e92413, 2026-07][02:essen-pigeon-synthetic-real] (full text)
- [Rotenstein et al., JAMA 2026, doi 10.1001/jama.2026.2253, 2026-04][08:jama-scribe-multisite] (page read)
- [Ambient AI Scribes in Clinical Practice: A Randomized Trial, NEJM AI 2025; read via UCLA Health release, 2025][08:ucla-scribe-rct] (page read)
- [Chin et al., A Pragmatic Randomized Trial of an EHR-Integrated Generative AI Chart Summarization Tool, medRxiv 2026.08.26.26361496, 2026-08][03:epic-summary-rct] (abstract)

[bca-lung]: https://doi.org/10.1002/jcsm.70021 "Body composition, lung cancer, J Cachexia Sarcopenia Muscle 2025"
[bca-melanoma]: https://doi.org/10.1186/s12967-025-06507-1 "Body composition, melanoma, J Transl Med 2025"
[bca-oesophagus]: https://doi.org/10.1002/jcsm.70363 "Body composition, oesophageal cancer, J Cachexia Sarcopenia Muscle 2026"
[raven-paper]: https://doi.org/10.1016/j.imu.2026.101755 "RAVEN, Informatics in Medicine Unlocked 2026"
[06:racoon-naton-2026]: https://www.uni-due.de/med/meldung.php?id=2021 "University of Duisburg-Essen, Faculty of Medicine, news, 2026-11"
[03:weed-1968]: https://pubmed.ncbi.nlm.nih.gov/5637758/ "Weed, Medical records that guide and teach, NEJM, 1968-03"
[03:lifelines-1998]: https://pmc.ncbi.nlm.nih.gov/articles/PMC2232192/ "Plaisant et al., LifeLines: using visualization to enhance navigation and analysis of patient records, AMIA, 1998"
[03:problem-view-faster]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8068438/ "Semanik et al., Impact of a problem-oriented view on clinical data retrieval, JAMIA, 2021"
[01:orbis-vs-dashboard-time]: https://pmc.ncbi.nlm.nih.gov/articles/PMC13683356/ "Grundmann et al., MEDA-PKD, npj Digital Medicine 2026, doi 10.1038/s41746-026-03267-0, 2026"
[01:ukm-studymodule-no-pdf]: https://medic.uni-muenster.de/en/advice-cooperation/study-module/ "MeDIC Muenster, Study module, n.d. (read 2026-11)"
[01:ukm-radiology-hcc-pdf]: https://pmc.ncbi.nlm.nih.gov/articles/PMC13263330/ "Masthoff et al., Performance of GPT-based large language models in hepatocellular carcinoma stratification, Sci Rep 16:18342, 2026-06"
[01:dedalus-cmo-paper-copy]: https://www.dedalus.com/dach/wp-content/uploads/sites/24/2024/11/PatientensichtDIREKT_2_2024.pdf "Dedalus DIREKT 2/2024, Paradigmenwechsel in der Patientensicht, 2024-11"
[01:dedalus-unstructured-orbis]: https://www.dedalus.com/dach/wp-content/uploads/sites/24/2024/03/KIDIREKT_1_2024.pdf "Dedalus DIREKT 1/2024, Digitale Revolution: die nächsten Schritte, 2024-03"
[01:dedalus-navigation-admission]: https://www.dedalus.com/dach/de/news/10537/ "Dedalus and Corti press release, 2026-10"
[01:dedalus-market-share]: https://www.dedalus.com/dach/de/media/news/orbis-im-klas-report/ "Dedalus, ORBIS im KLAS Report, 2025-08"
[01:klas-market-crossroads]: https://engage.klasresearch.com/?p=8376 "KLAS Research, DACH KIS 2025: A Market at a Crossroads, 2025-08"
[05:sepsis-undercoding-germany]: https://pmc.ncbi.nlm.nih.gov/articles/PMC10954942 "Schwarzkopf D et al., Understanding the biases to sepsis surveillance and quality assurance caused by inaccurate coding in administrative health data, Infection 2023;52(2):413-427, 2023-09"
[sepsis-followup]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12864231 "Thomas-Rüddel et al. 2025, follow-up analysis"
[05:mra-error-rate]: https://pmc.ncbi.nlm.nih.gov/articles/PMC10775420/ "Garza MY et al., Error rates of data processing methods in clinical research, Int J Med Inform 2025, doi:10.1016/j.ijmedinf.2024.105749 (preprint full text and published abstract read; same numbers), 2025"
[05:erlangen-668-hours]: https://www.frontiersin.org/articles/10.3389/fonc.2017.00016/full "Rutzner S et al., Front Oncol 2017;7:16, doi:10.3389/fonc.2017.00016, 2017"
[05:half-duplicated-text]: https://pmc.ncbi.nlm.nih.gov/articles/PMC9513649/ "Steinkamp J, Kantrowitz JJ, Airan-Javia S, Prevalence and Sources of Duplicate Information in the EMR, JAMA Netw Open 2022;5(9):e2233348, 2022"
[05:eighty-percent-folklore]: https://hitconsultant.net/2015/03/31/tapping-unstructured-data-healthcares-biggest-hurdle-realized/ "HIT Consultant, Why Unstructured Data Holds the Key to Intelligent Healthcare Systems (sponsored); cited by Kong HJ, Healthc Inform Res 2019;25(1):1-2; see also Mancini, CMSWire 2018, 2015-03"
[05:text-vs-codes-dutch-gp]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11887999/ "Using Structured Codes and Free-Text Notes to Measure Information Complementarity in Electronic Health Records, J Med Internet Res 2025;27:e66910, 2025"
[05:free-text-preferred-norway]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11971576/ "Golburean O et al., JMIR Form Res 2025;9:e63902, 2025"
[06:racoon-template-cost]: https://pmc.ncbi.nlm.nih.gov/articles/PMC8041811 "Salg et al., A reporting and analysis framework for structured evaluation of COVID-19 clinical and imaging data, npj Digital Medicine, 2021-04"
[05:structured-reporting-mixed]: https://doi.org/10.1186/s41747-026-00777-0 "Biechele G et al., Eur Radiol Exp 2026, doi:10.1186/s41747-026-00777-0, 2026"
[03:cliniq-synonym-gap]: https://arxiv.org/html/2502.06252v2 "Zhao et al., CliniQ, arXiv 2502.06252, 2025-02"
[03:cliniq-hybrid-drugs]: https://arxiv.org/html/2502.06252v2 "Zhao et al., CliniQ, arXiv 2502.06252, 2025-02"
[03:negation-weakness]: https://arxiv.org/abs/2603.17580 "Negation is Not Semantic, arXiv 2603.17580, 2026-03"
[03:chop-semantic-search]: https://arxiv.org/abs/2604.25605 "Mutinda et al., Health System Scale Semantic Search Across Unstructured Clinical Notes, arXiv 2604.25605, 2026-04"
[03:essen-german-embeddings]: https://www.jmir.org/2026/1/e82997 "Arzideh et al., Improving RAG for Health Care by Fine-Tuning Clinical Embedding Models, JMIR, 2026-03"
[02:passweg-metastasis-response]: https://pmc.ncbi.nlm.nih.gov/articles/PMC13465685/ "Passweg et al., Data Extraction From Oncology Imaging Reports by Large Language Models: A Comparative Accuracy Study, JCO Clin Cancer Inform, 2026-07"
[02:passweg-gold-standard-wrong]: https://pmc.ncbi.nlm.nih.gov/articles/PMC13465685/ "Passweg et al., JCO Clin Cancer Inform, 2026-07"
[02:ukm-cardiac-mri]: https://doi.org/10.3233/shti240861 "Plagwitz et al., Zero-Shot LLMs for Named Entity Recognition: Targeting Cardiac Function Indicators in German Clinical Texts, Stud Health Technol Inform, 2024-08"
[02:pn-pn-example]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11958830/ "Grothey et al., Commun Med 5:96, 2025-03"
[03:medagentbrief]: https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2848785 "Grolleau et al., Physician-Reported Safety Outcomes of AI-Generated Hospital Course Summaries, JAMA Network Open, 2026-05"
[02:absence-vs-silence]: https://arxiv.org/abs/2606.05970 "Murin, Measuring the sensitivity of LLM-based structured extraction, arXiv 2606.05970, 2026-06"
[02:ibd-human-in-loop]: https://pmc.ncbi.nlm.nih.gov/articles/PMC13779612/ "Neuse et al., Cutting chart-review time and improving database accuracy in IBD with human-in-the-loop LLMs, BMC Med Inform Decis Mak, 2026-08"
[02:ophthoacr]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12517364/ "Chen et al., OphthoACR, Transl Vis Sci Technol 14(10):8, 2025-10"
[04:term-chain-of-proof]: https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1737532/full "Fidelis, An auditable and source-verified framework for clinical AI decision support, Frontiers in Artificial Intelligence, 2026"
[04:standards-prov]: https://www.w3.org/TR/prov-overview/ "W3C PROV-Overview; HL7 FHIR R4 Provenance (https://hl7.org/fhir/R4/provenance.html), 2013"
[04:sdv-cost]: https://www.cambridge.org/core/journals/journal-of-clinical-and-translational-science/article/source-data-verification-sdv-quality-in-clinical-research-a-scoping-review/5C34E89421CBC4919F7CDCEDF5F410DA "Source data verification (SDV) quality in clinical research: A scoping review, Journal of Clinical and Translational Science, 2024"
[04:ich-e6r3]: https://database.ich.org/sites/default/files/ICH%20E6%28R3%29_Step4_FinalConsolidatedGuideline_2026_0616_.pdf "ICH E6(R3) Good Clinical Practice, consolidated guideline, 2026-06"
[03:scout-rct]: https://arxiv.org/abs/2604.26953 "Gao et al., A Randomized Controlled Trial and Pilot of Scout, arXiv 2604.26953, 2026-03"
[04:cora-double-edge]: https://arxiv.org/abs/2608.00817 "Chanda et al. (DKFZ), Large language models improve physician accuracy but lead to false reliance, arXiv 2608.00817, 2026-08"
[04:mammo-bias]: https://research.vu.nl/en/publications/automation-bias-in-mammography-the-impact-of-artificial-intellige/ "Dratsch et al., Automation Bias in Mammography, Radiology, 2023-05"
[04:users-click-sources]: https://arxiv.org/html/2502.08554v1 "Kim, Vaughan, Liao, Lombrozo, Russakovsky, Fostering Appropriate Reliance on Large Language Models, CHI 2025, arXiv 2502.08554, 2025"
[01:orbis-ai-available]: https://www.dedalus.com/dach/wp-content/uploads/sites/24/2026/10/KI-in-ORBIS-12.06.26.pdf "Dedalus, Künstliche Intelligenz in ORBIS (brochure), 2026-06"
[01:orbis-buddy]: https://www.dedalus.com/dach/de/news/10537/ "Dedalus and Corti press release, 2026-10"
[06:ukm-ai-status]: https://www.ihk.de/nordwestfalen/wirtschaftsspiegel-online/unternehmen-und-maerkte/ukm-geht-neue-wege-6954694 "IHK Nord Westfalen, UKM geht neue Wege, 2026-02"
[06:bonn-llm]: https://arxiv.org/html/2604.22768v1 "Nowak et al., Secure On-Premise Deployment of Open-Weights LLMs in Radiology, arXiv 2604.22768, 2026"
[08:langextract]: https://github.com/google/langextract "Google LangExtract, GitHub, 2026"
[08:llmaix]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11398444/ "LLM-AIx (medRxiv 2024; npj Precision Oncology 2025) and KatherLab/llmaixweb, 2024-09"
[02:llmaix-ocr-errors]: https://pmc.ncbi.nlm.nih.gov/articles/PMC12443949/ "Wiest et al., A software pipeline for medical information extraction with LLMs, npj Precis Oncol 9:313, 2025-09"
[08:kvb-structured-only]: https://www.kvb.de/fileadmin/kvb/Mitglieder/Service/Informationsservice/KVB-FORUM/2026-DS/Einzelartikel/KVB-FORUM-3-4-2026-ePA-Ausbaustufen.pdf "KVB FORUM 3-4/2026, ePA-Ausbaustufen, 2026"
[05:epa-pdf-late-2026]: https://www.dkgev.de/fileadmin/Mediapool/2_Themen/2.1_Digitalisierung_Daten/2.1.5._Telematik-Infrastruktur/2.1.5.4_Elektronische_Patientenakte__ePA_/DKG-Umsetzungshinweise_zur_ePA_prozessual-technischer_Teil_2026-10-08.pdf "DKG, Umsetzungshinweise für die elektronische Patientenakte, prozessual-technischer Teil, Version 2.4, 2026-10"
[06:epa-ehds-timeline]: https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en "European Commission, EHDS Regulation; Federal Ministry of Health, FAQ FDZ Gesundheit, 2026"
[07:gdng-6-own-data]: https://www.gesetze-im-internet.de/gdng/__6.html "GDNG section 6, gesetze-im-internet.de, 2024"
[07:gedig-ai-development]: https://dserver.bundestag.de/btd/21/082/2108279.pdf "Bundestag, Gesetzentwurf GeDIG, Drs. 21/8279, 2026-09"
[07:ethics-aekwl-15]: https://recht.nrw.de/mbnrw/2025-184 "Ärztekammer Westfalen-Lippe, 11th amendment of the Berufsordnung, MB.NRW 2025 Nr. 184, 2025-12"
[07:gdsg-nw-repealed]: https://recht.nrw.de/gvnrw/2025-s530 "GV. NRW. 2025 S. 530, Articles 15 and 20, 2025-06"
[06:kiconnect-no-personal-data]: https://www.heicad.hhu.de/en/kiconnect "HHU Düsseldorf, HeiCAD, KI:connect, undated, read 2026-11"
[06:unigpt-classes]: https://www.uni-muenster.de/IT/services/arbeitsplatz/unigpt/agb.html "University of Münster, UniGPT terms of use, undated, read 2026-11"
[07:chatbot-breach-gp]: https://autoriteitpersoonsgegevens.nl/actueel/let-op-gebruik-ai-chatbot-kan-leiden-tot-datalekken "Autoriteit Persoonsgegevens, notice on AI chatbots and data breaches, 2024-08"
[03:chatehr-errors]: https://arxiv.org/abs/2602.00074 "Shah et al. (Stanford), Adoption and Use of LLMs at an Academic Medical Center, arXiv 2602.00074, 2026-01"
[02:omissions-over-hallucinations]: https://pmc.ncbi.nlm.nih.gov/articles/PMC13354172/ "Kahl et al., Evaluation of electronic health record-integrated AI chart review, npj Health Systems, 2026-01"
[02:grothey-prostate]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11958830/ "Grothey et al., Comprehensive testing of LLMs for extraction of structured data in pathology, Commun Med 5:96, 2025-03"
[02:essen-icdo-failure]: https://pubmed.ncbi.nlm.nih.gov/41812101/ "Arzideh et al., Automated Tumor ICD Coding of Real-World Pathology Reports, JCO Clin Cancer Inform 10:e2500254, 2026-03"
[02:essen-pigeon-synthetic-real]: https://www.jmir.org/2026/1/e92413 "Eryılmaz et al. (University Hospital Essen), J Med Internet Res 2026, e92413, 2026-07"
[08:jama-scribe-multisite]: https://jamanetwork.com/journals/jama/article-abstract/2847319 "Rotenstein et al., JAMA 2026, doi 10.1001/jama.2026.2253, 2026-04"
[08:ucla-scribe-rct]: https://www.uclahealth.org/news/release/ucla-study-finds-ai-scribes-may-reduce-documentation-time "Ambient AI Scribes in Clinical Practice: A Randomized Trial, NEJM AI 2025; read via UCLA Health release, 2025"
[03:epic-summary-rct]: https://sciety.org/articles/activity/10.64898/2026.08.26.26361496 "Chin et al., A Pragmatic Randomized Trial of an EHR-Integrated Generative AI Chart Summarization Tool, medRxiv 2026.08.26.26361496, 2026-08"
