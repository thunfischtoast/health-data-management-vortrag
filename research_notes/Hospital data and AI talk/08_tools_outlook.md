# Tools and outlook (2024 to Nov 2026)

## 1. Short answer
- Writing tools are widely sold and increasingly tested. Measured time savings are small; perceived workload and burnout improve more than minutes do. Summarising the whole chart (closer to the talk) is newer, and the first large randomised trial found no time saving.
- "Links to the source" is becoming a selling point, but most tools link to a note, a transcript or a document shown side by side. Few link a structured value to an exact passage. I found no published evidence that such links reduce errors.
- For ORBIS, voice documentation (Corti) is in roll-out and an agent layer ("ORBIS Buddy") is presented. I found no published evaluation of either.

## 2. Reality check: ambient scribes and summaries
| Study | Design | Result |
|---|---|---|
| [UCLA, NEJM AI 2025](https://www.uclahealth.org/news/release/ucla-study-finds-ai-scribes-may-reduce-documentation-time) ([PubMed](https://pubmed.ncbi.nlm.nih.gov/41497288/)) | RCT, 238 physicians, about 72,000 encounters | Nabla 9.5% less time in note than control (41 s vs 18 s raw drop). DAX not significant (-1.7%, CI -9.4 to +5.9, snippet only). Occasional significant inaccuracies, 1 mild safety event |
| [Wisconsin/Illinois, NEJM AI 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12858090) | Stepped-wedge RCT, 66 practitioners | 0.36 h/day less on notes (CI 0.17 to 0.55); exhaustion/disengagement -0.44 of 5. Open label, volunteers |
| [JAMA, April 2026](https://jamanetwork.com/journals/jama/article-abstract/2847319) | 5 US centres, 8,581 clinicians, 1,809 adopters, difference in differences | EHR time -13.4 min (3%), documentation -16.0 min (10%) per 8 patient hours; after-hours work unchanged; [32% used it in at least half of visits](https://www.eurekalert.org/news-releases/1122192). Observational |
| [Epic outpatient chart summary, medRxiv Aug 2026](https://sciety.org/articles/activity/10.64898/2026.08.26.26361496) | RCT, 284 clinicians, 42 specialties, 90 days | Task load -27.4 of 400 (CI -49.4 to -5.3); charting -1.2 s (CI -19.0 to +16.6); 14.2% of 74,474 summaries touched, falling from 21.5% to 10.5%; net promoter score -22 |
| [Stanford MedAgentBrief, JAMA Netw Open 2026](https://www.iww.de/cb/management/dokumentation-ki-im-entlassmanagement-weniger-burnout-trotz-geringer-zeitersparnis-f174445) (secondary) | Prospective ward pilot, 384 discharges | Drafts used in 57%; 10.7 to 7.8 min, not significant; burnout 1.75 to 1.20; omissions 25%, inaccuracies 20%, hallucinations 2% |
| [NYU, JAMA Netw Open 2025](https://pure.psu.edu/en/publications/evaluating-hospital-course-summarization-by-an-electronic-health-/) | 100 admissions | Less editing (31.5 vs 44.8%), more complete, more confabulations (difference 0.98, P=.002) |
| [Stony Brook, npj Digit Med 2026](https://www.news-medical.net/news/20261102/AI-improves-accuracy-and-completeness-of-hospital-discharge-summaries.aspx) (news) | 60 long stays, paired review | AI preferred in 95%; both had errors, no significant difference in harm; not routine use |

## 3. Chart search and chat with the record
- [Stanford ChatEHR](https://arxiv.org/abs/2602.00074) (preprint): 1,075 trained users, 23,000 sessions in 3 months. 719 sampled summaries: 2.33 unsupported claims on average (0.73 hallucinations, 1.60 inaccuracies); 50% had none or one. Counted by an automated checker. Typical errors on manual review: time order, numbers, who did what, wrong overall plan. Planned: "automatic citations linking each extracted fact to its exact location in the medical record". Diagnostic radiology is among the top user departments.
- [STAT, Aug 2026](https://www.statnews.com/2026/08/20/health-systems-embrace-ai-chatbots-query-patient-records-ehr/): US systems roll out home-built and vendor record chatbots (paywalled, lead only).
- Epic: Insights used ["over 16 million times each month"](https://www.epic.com/epic/post/epic-ai-charting-rolls-out-alongside-an-expanding-set-of-built-in-ai-capabilities/) (Feb 2026, vendor); [20 to 30% faster discharge summaries](https://www.epic.com/epic/post/real-results-right-now-how-epic-ai-is-reducing-costs-improving-care-and-helping-patients/) (vendor, no method); [Agent Factory, Ergo](https://www.advisory.com/daily-briefing/2026/08/26/epic-ugm-ab-oi-ec) (UGM 2026). Compare the RCT above.
- NYU reportedly [links each fact in a summary to its source note](https://www.beckershospitalreview.com/?p=305077) after its pilot (snippet only, page blocked).

## 4. Germany
- **UKE / IDM, ARGO**: discharge letter drafts [since Aug 2024](https://www.aerzteblatt.de/news/uniklinikum-hamburg-eppendorf-setzt-ki-sprachmodell-fuer-arztbriefe-ein-ff98a50d-b277-427e-9e17-57f624eb3015). [Vendor](https://www.idmedizin.de/en/argo): on premises, "Every statement carries its source", "ARGO and IDMBase are not medical devices". Closest German product claim to a chain of proof; no published evaluation found. (An [AOK page](https://www.aok.de/pp/gg/versorgung/automatisierung-gesundheitswesen/) reports the US JAMA study next to ARGO; that study did not test ARGO.)
- **Fraunhofer IAIS / Essen Arztbriefgenerator**: 2023 press expected market entry by end of 2024 (snippet); [Feb 2024: prototype test planned](https://www.aok.de/pp/gg/versorgung/digitale-arztbriefe/). No outcome study found.
- **Freiburg**: [93% of the best model's letters usable after minor corrections](https://www.aerzteblatt.de/archiv/titel/dae/2024/24/studie-sprachmodelle-generieren-gute-arztbriefe-0e2680a6-14eb-4c2e-87e6-48af3682096b) (ophthalmology, about 90,000 training documents).
- **Unnamed hospital, on-premise pilot** ([EACL 2026](https://aclanthology.org/2026.eacl-industry.34.pdf)): FHIR to Mistral Small 3.2, 31 patients; JSON input beat flat text; follow-up steps absent from the source, "often resulting in hallucinated text".
- **Essen PIGEON** ([JMIR 2026](https://mml.kite.ume.de/publications/eryilmaz-extracting-2026/), abstract): MedGemma 27B tuned on 75,000 synthetic letters. Synthetic test about 0.99 (tumour, lab, medication). 30 real letters: medication 93.0%, tumour 86.1%, diagnoses 78.9%, procedures 61.3%.
- **Leipzig UKL-GPT**: [in-house data centre, may handle patient data](https://www.aerzteblatt.de/news/universitatsklinikum-leipzig-setzt-auf-hausinterne-ki-plattform-70f5b9c9-0b19-490a-af84-671b4f4553f4) (March 2026).
- **Dragon Copilot**: [in Germany since Oct 2025](https://news.microsoft.com/de-de/nach-erfolgreicher-pilotphase-microsoft-dragon-copilot-fuer-deutschlands-kliniken-und-praxen-ab-sofort-allgemein-verfuegbar/); five pilot hospitals incl. Charite; no German outcome numbers.
- **ORBIS**: [Corti partnership](https://heise.de/-10474887) (July 2025); [ambient scribe in ORBIS Speech Assistant](https://corti.ai/stories/corti-and-dedalus-are-expanding-across-europe) (April 2026, no outcome data); [ORBIS Buddy](https://www.efficientlyconnected.com/dedalus-corti-agentic-ehr-orbis-buddy/) (analyst blog, no sites or results). [An integrator says Dedalus offers no MCP server](https://innfactory.ai/de/leistungen/companygpt/integrationen/dedalus-orbis/); own LLM tools need HL7 v2, ISiK FHIR or IHE (vendor marketing).
- US vendors: [ChatGPT for Healthcare](https://openai.com/index/openai-for-healthcare/) (Jan 2026; citations point to literature), [Claude for Healthcare](https://www.techtarget.com/healthtechanalytics/news/366637160/Claude-for-Healthcare-launches) (Jan 2026, snippet). No German hospital use found. [Abridge](https://www.abridge.com/product): US cloud; Linked Evidence ties note text to transcript or audio (snippet).

## 5. Extraction tools and a table for doctoral candidates
| Tool | Use | Data location | Cost/licence | Source link | Maturity |
|---|---|---|---|---|---|
| [LangExtract](https://github.com/google/langextract) | Extract defined fields | Local (Ollama) or cloud | Apache 2.0 | Yes: character position; unlocated items get `char_interval = None` | Python library; not officially supported; no clinical benchmark found |
| [LLM-AIx](https://pmc.ncbi.nlm.nih.gov/articles/PMC11398444/), [llmaixweb](https://github.com/KatherLab/llmaixweb) | No-code batch extraction, built-in evaluation | Local server | AGPL-3.0 (web) | Report beside output; no passage link described | Research prototype. TCGA: 87% overall, 100 reports in about 60 min |
| [EndoExtract](https://arxiv.org/html/2601.18154v1) | Ultrasound reports to table | Local gpt-oss-20b | Not found | Yes: highlighted sentence in original PDF | 6 users, no accuracy numbers |
| [uniGPT Muenster](https://www.uni-muenster.de/IT/services/arbeitsplatz/unigpt/index.html) | Chat, code, public text | Local models in Uni Cloud; OpenAI external | Free for staff and students | No | Service; model list looks old; "sensible Daten" wording is no clearance for patient data |
| [GWDG Chat AI](https://docs.hpc.gwdg.de/services/ai-services/chat-ai/) | Chat/API | Mostly GWDG hardware, no chat storage | Free (except external) | No | Service; check access and health data rules |
| ARGO, Dragon Copilot | Clinical letters | On premises / not stated | Hospital contract | Vendor claim / not found | Product |
| MedGemma, Mistral, gpt-oss, Qwen | Engine | Local GPU | Open weights | Only if the tool adds it | Model |

Safe default (inference): try on synthetic or public reports; real records only on an approved hospital system with ethics and data protection clearance; store the source sentence with each value; hand-check a random sample; report accuracy per variable.

Limits: [benchmark Oct 2026](https://www.medrxiv.org/content/10.64898/2026.01.19.26344287.full.pdf): 17 tools reviewed, one met criteria; F1 79.2% (GPT-4.1-mini) vs 76.2% (Mistral Small 3.1, local); 200 synthetic reports. [Form filling with local MedGemma-27B](https://arxiv.org/abs/2606.13082): macro-F1 0.55, still second among local entries. EndoExtract users saw risks of false reassurance and over-skimming.

[Flatiron VALID](https://resources.flatiron.com/press/flatiron-health-publishes-first-peer-reviewed-validation-framework-for-ai-extracted-real-world-oncology-data-in-journal-of-clinical-oncology) (JCO CCI 2026, vendor): compare with human abstraction per variable, check plausibility, replicate known results.

**Compared with a source-linked template filler** (inference, no head-to-head study found): scribes create new text, summarisers answer openly, a template filler answers fixed questions, can leave blanks, and every cell can be checked.

## 6. Agents
- [MedAgentBench](https://arxiv.org/abs/2501.14654): best model 69.67% of 300 FHIR tasks (2025 models, dated).
- [Myeloma, 811 patients, 44,962 documents](https://arxiv.org/abs/2604.24473): agent 79.6% agreement vs about 75% RAG. Error rate 12.2% vs expert disagreement 13.6%, but 57.8% of errors clinically significant vs 18.8%.
- [Lung cancer chart review](https://sciety.org/articles/activity/10.64898/2026.06.02.26354727): with keyword search 92.4% vs 83.5% without.

## 7. Adoption
- Hospital doctors, Germany: [18% report AI in use, 9% in 2022](https://www.bitkom.org/Presse/Presseinformation/KI-in-Praxis-und-Kliniken-im-Einsatz) (2025, n=616, not representative, includes imaging).
- Shadow use: [50% of doctors use private AI tools for research, 28% for documentation](https://media.doctolib.com/image/upload/mkg/file/digital-health-report-2026.pdf) (YouGov for Doctolib, 204 doctors, 2025). Does not measure entry of patient data.
- Practices: [48% use AI; documentation 13%](https://www.kbv.de/praxis/tools-und-services/praxisnachrichten/2026/11-12/praxisbarometer-2026-kommunikation-im-ambulanten-sektor-laeuft-bereits-ueberwiegend-digital) (KBV Nov 2026, about 2,300). Almost two thirds still communicate with hospitals mostly on paper; 20% receive electronic discharge letters; 3% of ePA documents come from hospitals.
- [DigitalRadar 2026](https://www.aerzteblatt.de/news/rubriken/vermischtes/digitalisierung-deutscher-krankenhauser-macht-weitere-fortschritte-c3c19df8-8440-4ef3-b4c8-17067a377caf): 1,531 hospitals, 55 of 100 points (33 in 2021).
- USA: [81% use AI (38% in 2023), n=1,692; 88% cite possible skill loss](https://ascopost.com/news/march-2026/ama-survey-finds-rapid-growth-in-physician-ai-adoption/).

## 8. Outlook
- [BMG strategy, Feb 2026](https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/D/Digitalisierungsstrategie/Weiterentwicklung_Digitalisierungsstrategie.pdf): AI documentation as standard, "mehr als 70 Prozent der Einrichtungen sollen diese 2028 aktiv nutzen"; EHDS connection by end of 2028. A goal; no baseline found.
- [GeDIG cabinet draft](https://www.bundesgesundheitsministerium.de/service/gesetze-und-verordnungen/guv-21-lp/gedig) (Aug 2026): EHDS implementation, AI summaries of findings offered by insurers. Not law as of that page.
- [ePA, KVB 2026](https://www.kvb.de/fileadmin/kvb/Mitglieder/Service/Informationsservice/KVB-FORUM/2026-DS/Einzelartikel/KVB-FORUM-3-4-2026-ePA-Ausbaustufen.pdf): full-text search stepwise from Q1 2027; research transfer planned from 2027, structured data only, first the medication list; PDF findings are not passed on.
- Risks: [training on AI-made clinical data](https://arxiv.org/abs/2601.12946) (lab preprint: rare findings vanish, false reassurance triples to 40%); [AI notes degrade later AI reading](https://arxiv.org/abs/2611.10601) (modest; injected over-diagnoses reappear unnoticed by standard metrics); Stanford warns "verification behaviors may erode".

## Contradictions and caveats
- Scribe effects: 22 min/day (volunteers, one system), 13 to 16 min per 8 h (five sites), null (DAX arm).
- Workload scores improve while minutes do not (Epic RCT, MedAgentBrief); open label, so expectation effects are possible.
- 0.73 hallucinations per ChatEHR summary and 2% of MedAgentBrief drafts are different methods, not comparable.
- 48% (practices, 2026) and 18% (hospital doctors, 2025) differ in year, question and group.
- Many German items are press or vendor pages. WebFetch pages were read through model summaries; check numbers before printing.

## Gaps
- Search budget ran out. Not researched: Oracle Health, Google Vertex, AWS HealthScribe, John Snow Labs, Mendel, Averbis, Tiplu, ID Berlin, Recare, Noa, Jameda, Tandem, Heidi, REDCap AI, Ark, CLEAR, Trialogue, RADx, Kaapana, Docling, FHIR MCP, gematik AI plans, deskilling studies.
- No UKM-specific LLM deployment found. No evaluation of ARGO, Orpheus or ORBIS Buddy found. No 2026 survey of LLM use by German hospital doctors found. No trial on whether clinicians open source links found.
