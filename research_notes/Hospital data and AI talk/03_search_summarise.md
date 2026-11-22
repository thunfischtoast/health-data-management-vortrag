# 03 Search, question answering, summarisation and patient timelines

FT = full text read, A = abstract read, P = page read. The shared web search budget ran out late, so some points were searched less than planned (see Gaps).

## 1. How clinicians search today, and the synonym problem

- Kaiser Northern California, 2018-2019: 4,328,330 searches by 34,735 users (75.6% of physicians). Top terms: statin, colonoscopy, pft. [Ruppel 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7060491/) (A)
- One academic hospital, 2,207 queries: 85.1% informational, mostly lab results and diseases. [Natarajan 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC2881186/) (A)
- Query suggestion, 33 experienced users in Michigan: "in most cases the participants had not thought of these terms on their own". [Hanauer 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5378386/) (abstract, parts of FT). Synonym expansion helps without any LLM.
- CliniQ benchmark: 1,000 MIMIC-III discharge summaries, 1,246 queries. [arXiv 2502.06252](https://arxiv.org/html/2502.06252v2) (FT). Single-patient MRR x 100 (100 = right passage always first):

| Match type | Keyword (BM25) | BM25 + UMLS synonyms | Best embedding | Hybrid (RRF) |
|---|---|---|---|---|
| same word | 83.9 | 83.9 | 87.7 | 94.3 |
| synonym | 44.8 | 53.1 | 84.3 | 85.0 |
| abbreviation | 38.6 | 38.4 | 71.5 | 69.2 |
| subtype | 42.8 | 51.2 | 74.4 | 73.7 |
| implied | 36.3 | 38.1 | 59.6 | 56.9 |

  Slide examples from the paper: "RA" missed for "rheumatoid arthritis"; "acute tubular necrosis" for "acute renal failure"; "amlodipine" for "hypertension".
- Children's Hospital of Philadelphia: 166 million notes, 1.68 million patients, sub-second, about USD 4,000 per month. Five clinicians, three abstraction tasks, medians: 40 to 30 s, 67 to 32 s, 260 to 28 s. 812 patients with confirmed genetic disease: 97.4% found within 1,000 candidates, diagnosis codes at most 75%. [arXiv 2604.25605](https://arxiv.org/abs/2604.25605) (FT, preprint). Caveats: the 260 to 28 s task is asymmetric by the authors' account; recall at cohort size is only 27.6% (codes 20.3%); precision not estimable; main error was questions about a given year returning notes from other years, because no date filter was set.
- **German**: Essen fine-tuned multilingual-e5-large on 11 million synthetic question-answer pairs from 400,000 documents. Retrieval mAP@100 0.27 versus 0.14 (e5) and 0.11 (bge-m3); final answers for single patients almost unchanged (BERTScore F1 0.781 versus 0.778). No BM25 comparison, one site, 27-51% of synthetic pairs filtered out, no unanswerable questions. [Arzideh 2026, JMIR](https://www.jmir.org/2026/1/e82997) (FT via PMC)
- Lay intuition: DocCheck lists Atemnot, Kurzatmigkeit, dyspnea, shortness of breath and SOB under one entry (R06.0). [DocCheck](https://flexikon.doccheck.com/de/Dyspnoe) (P). Suggested wording (mine): keyword search compares letters; an embedding puts texts on a map where similar meaning means short distance. The map also explains the weakness: "effusion" and "no effusion" are neighbours.

## 2. Where keyword or structured search wins

- CliniQ across patients: BM25 ranks first for drug names on top-of-list metrics; dense retrievers "behave suboptimally in drug retrieval". Hybrid is best overall (MRR 67.0; BM25 59.2; best embedding 60.4). Medical embedding models were generally weaker than general ones. (FT)
- JMIR Med Inform 2026: BM25 MRR@10 0.999 on PMC-Patients; BioBERT and ClinicalBERT underperformed. [Mikkelsen](https://medinform.jmir.org/2026/1/e94241) (A; case reports and synthetic notes)
- Negation: "Semantic Collapse, where negation signals become indistinguishable in vector space" ([arXiv 2603.17580](https://arxiv.org/abs/2603.17580), A, biomedical literature). Most retrieval models are at or below random on NevIR ([arXiv 2502.13506](https://arxiv.org/abs/2502.13506), A, general text). Counterpoint: CHOP retrieval plus LLM got 93.9% of 98 negative questions right.
- FHIRPath-QA: letting the model write a query instead of reading the record cuts tokens 391-fold (629,839 to 1,609) and failures from 0.36 to 0.09. No off-the-shelf model exceeds 42% accuracy, and reading was better where it did not fail (0.51 versus 0.39). [arXiv 2602.23479](https://arxiv.org/html/2602.23479) (FT; 100 demo patients, template questions)

## 3. Asking the chart a question

- **ChatEHR (Stanford)**: 1,075 trained users, 23,000 sessions in three months, most answers under 20 s, $0.16 per query. 719 summaries: 2.33 unsupported claims each (0.73 hallucinations, 1.60 inaccuracies). Pilot errors: temporal sequence, numbers, roles, inferred plans. Diagnostic radiology is a highest-volume department. Automatic citations were a planned enhancement. [arXiv 2602.00074](https://arxiv.org/abs/2602.00074) (FT, preprint; automated judge)
- **Scout (Duke)**: randomised, evaluator-blinded crossover, 20 participants, 200 cases: 9.67 to 6.03 min (37.6% less), quality non-inferior, every claim cited. It shifts "the core task from manual curation to verification". Participants rated their own performance slightly worse. Of 17 claims an LLM judge called unsupported, 11 were supported. [arXiv 2604.26953](https://arxiv.org/abs/2604.26953) (FT, preprint; one site, one evaluator per use case who also authored it)
- **Finnish oncology, offline open models**: 1,664 question-answer pairs, 183 patients. Llama-3.1-70B 95.3% accurate; 2.9% clinically significant errors; in 0.96% one wording was right and an equivalent one seriously wrong. [arXiv 2603.26434](https://arxiv.org/html/2603.26434v1) (most of FT). Questions had predefined answer options. Closest analogue to on-premises German use.
- **Time**: MedAlign error 35% (GPT-4) to 68% ([arXiv 2308.14089](https://arxiv.org/abs/2308.14089), A, 2023 models). 55.3% of its instructions concern the last quarter of the timeline; general 7-8B models score 58-67% on time-spread questions ([TIMER, arXiv 2503.04176](https://arxiv.org/html/2503.04176), FT; model-written benchmark). Accuracy 59.5% versus 37.6% depending on position in the record ([arXiv 2608.20348](https://arxiv.org/abs/2608.20348), partly read; single author, wide intervals).
- **RAG versus whole record**, 200 stays per task, mean 74k-108k tokens: RAG clearly beats recent notes for imaging procedures and approaches full context; no consistent gain for diagnoses. 32% of antibiotics missed at 20 chunks; for 22.4% the notes did not contain the information. [arXiv 2508.14817](https://arxiv.org/html/2508.14817v1) (FT)

## 4. Summaries

- **Epic outpatient summary, pragmatic RCT 2026 (main counter-evidence)**: 284 clinicians, 90 days, 74,474 summaries, 14.2% interacted with. Task load -27.4 on 0-400 (P=0.02), burnout lower, charting time -1.2 s per encounter (95% CI -19.0 to 16.6), use fell 21.5% to 10.5%, net promoter score -22. [medRxiv via Sciety](https://sciety.org/articles/activity/10.64898/2026.08.26.26361496) (A, preprint)
- **Van Veen, Nature Medicine 2024**: best adapted LLM equal (45%) or better (36%) than experts; hallucinations 5% versus 12%. [arXiv](https://arxiv.org/html/2309.07430v5) (FT). Short texts, no longitudinal charts.
- **MedAgentBrief, Stanford 2025**: 384 discharges, AI text used in 57%. 100 reviews: omissions 25, inaccuracies 20, hallucinations 2, wrong citations 0, no severe harm. Documentation time not significantly changed (P=.13), yet 67% of responses perceived savings. Single arm, 11 physicians. [JAMA Netw Open 2026](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2848785) (FT)
- **UCSF, blinded, 100 stays**: errors per summary 2.91 (LLM) versus 1.82 (physician); harm score low but higher (0.84 versus 0.36 on 0-7). [JAMA Intern Med 2025](https://pubmed.ncbi.nlm.nih.gov/40323616/) (A)
- **Dutch hospital, 292 pairs**: trusted 85.3% (LLM) versus 95.5% (physician); LLM less complete, more concise. [EBioMedicine 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13091380/) (A)
- **NYU**: LLM drafts needed less editing (31.5% versus 44.8%), contained more confabulations. [JAMA Netw Open 2025](https://doi.org/10.1001/jamanetworkopen.2025.26339) (A)
- **Stony Brook, 60 long stays**: reviewers preferred AI in 95%. [News-Medical, Nov 2026](https://www.news-medical.net/news/20261102/AI-improves-accuracy-and-completeness-of-hospital-discharge-summaries.aspx) (P; paper not read)
- **Radiology, RSNA 2026 abstract**: review time 11.3 to 9.4 min, before-after, over 133,000 CT/MRI exams; completeness adequate in 70% of 102 summaries. [AuntMinnie](https://www.auntminnie.com/resources/conference/rsna/2026/imaging-informatics-preview/article/16542077/chart-summary-llm-tool-boosts-radiologist-efficiency) (snippet only; scheduled 2 December 2026)

## 5. Overview and timelines

- Weed, "Medical records that guide and teach", NEJM 1968;278:593-600: brought the problem-oriented record to a wide audience. [PubMed](https://pubmed.ncbi.nlm.nih.gov/5637758/) (citation only), [Shukor 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5424594/) (A). The 1968 text was not read; do not quote it.
- LifeLines, AMIA 1998 (CHI precursor 1996): one-screen timeline; "The visual display acts as a giant menu, giving direct access to the data." [Plaisant](https://pmc.ncbi.nlm.nih.gov/articles/PMC2232192/) (A). The [project page](https://www.cs.umd.edu/projects/hcil/lifelines/) gives no quantitative results (P).
- Problem-oriented view, randomised simulation: 173 versus 205 s, errors 3.4% versus 7.7%. [Semanik 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8068438/) (A). Simple look-ups, no LLM.
- LLM timelines from 40 clinician-annotated sepsis case reports: GPT-5 finds 93% of events, order concordance 0.965, time error 4 h; Llama 3.3 70B 76%, 0.908, 24 h. Wrong timing is more common than invention. [arXiv 2504.12326](https://arxiv.org/html/2504.12326) (most of FT). Case reports are tidier than charts.
- CliniCIRCA 2026: 15,891 events from 52 discharge summaries; clinicians corrected 629 errors (about 4%, my calculation). [arXiv 2609.19585](https://arxiv.org/abs/2609.19585) (A)

## Contradictions and caveats

- Time saved: 37.6% (Scout, set tasks), none (Epic RCT, real use), 17% (radiology, uncontrolled). Inference, untested: concrete questions gain more than unrequested summaries.
- ChatEHR's $2.2 million for the chat rests on an assumption ("If each query saves 10 minutes"). "$6M savings" is also an estimate. Do not cite as measured.
- Error units differ (claims per summary, share of summaries, share of outputs). Do not chart them together. LLM judges can overcall.
- Omissions outnumber hallucinations in MedAgentBrief (25 versus 2). Source links cannot show what is missing.
- Van Veen and UCSF point in opposite directions on errors; text length and definitions differ.
- Nearly all data are English; many key items are preprints.

## Gaps

- Nothing found on semantic search over patient records in ORBIS or another German KIS; no BM25 comparison on German notes.
- No measured evidence that AI timelines save time. Interactive timeline trials and automation bias not searched (budget).
- EHRSQL, EHRNoteQA, LongHealth not read. No independent accuracy data for Epic's chat assistant found.
- "Luftnot" not verified as a listed synonym; use "Atemnot" or "Kurzatmigkeit".
