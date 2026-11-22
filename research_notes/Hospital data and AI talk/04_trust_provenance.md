# Trust, verification, human control and provenance

Levels of reading: [F] full text, [P] page read through a summarising fetch tool, [A] abstract only. Full details in the JSON.

## Terminology: "chain of proof"

- One targeted search found no use of "chain of proof" for AI-derived clinical data. It is the speaker's own phrase.
- Established terms:
  - Provenance: "information about entities, activities, and people involved in producing a piece of data or thing" ([W3C PROV](https://www.w3.org/TR/prov-overview/)) [P]
  - Attribution: whether a statement is backed by a named source, "Attributable to Identified Sources" ([AIS](https://arxiv.org/abs/2112.12870)) [A]
  - Citation recall and precision, verifiability ([Liu 2023](https://arxiv.org/abs/2304.09848)) [A]
  - Traceability, auditability, source verification ([Frontiers AI 2026](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1737532/full)) [A]
  - Audit trail (who changed what and when; [21 CFR 11.10(e)](https://www.law.cornell.edu/cfr/text/21/11.10)) [P]
  - Source data verification (clinical trials).
- Near collision: [Chain-of-Verification](https://arxiv.org/abs/2309.11495) is a technique where a model checks itself [A].
- Suggested wording (recommendation): "I call it a chain of proof. The technical terms are provenance and traceability." "Proof" claims too much: a link shows where a value comes from and lets a person check it. It proves neither that the reading is right nor that nothing is missing.

## Do source links help?

For:
- [Kim et al., CHI 2025](https://arxiv.org/html/2502.08554v1) [P], n=308 non-clinicians: agreement with wrong answers 78.2% without and 68.2% with sources. Only 119 (39%) ever clicked a source. Clickers were more accurate (60.1% vs 49.2%, self-selected). Explanations alone raised reliance on right and wrong answers.
- [Scout, Duke 2026](https://arxiv.org/abs/2604.26953) [F], randomised crossover, 20 participants, 200 cases: 9.67 to 6.03 min (-37.6%), quality non-inferior. Every claim is linked with highlighted span and "evidence cards". No arm without citations.
- [Click to inspect, JMIR Hum Factors 2026](https://humanfactors.jmir.org/2026/1/e95644) [F]: System Usability Scale 86.25 (46 participants), synthetic charts. Error detection was not measured. Authors hold equity in the maker.
- [Self-verification](https://arxiv.org/abs/2306.00024) [A]: the LLM names the text span for each extracted value and checks itself; accuracy improved, and the span makes audit easier (authors' argument).

Against:
- [CORA, DKFZ 2026](https://arxiv.org/abs/2608.00817) [F], 46 dermatology physicians: accuracy 70.8% to 82.6%. When the AI was wrong and the physician judged a citation as supporting, they abandoned their own correct answer in 15 of 23 cases, versus 2 of 25 without perceived support. "the cue that is meant to enable scrutiny can instead substitute for it".
- [SourceCheckup](https://pmc.ncbi.nlm.nih.gov/articles/PMC12003634/) [F]: 50 to 90% of answers not fully supported by their cited sources. GPT-4o with web search: about 30% of statements unsupported.
- [Citation faithfulness](https://arxiv.org/abs/2412.18004) [A]: up to 57% of citations were post-rationalised.
- [Legal AI tools](https://arxiv.org/abs/2405.20362) [A]: products sold as "hallucination-free" hallucinated in 17 to 33% of queries.
- [JAMA Netw Open commentary on Small et al. 2025](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2837488) [P]: drafts with linked sources had more confabulations than clinician texts, also after residents' 3-minute edit. The trial itself was not read.
- [Verma et al. (JAMIA 2026, preprint read)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12155021/) [F]: summaries gave no significant time gain (9.45 vs 10.30 min, p=0.46), accuracy 88.0% vs 86.4%. One factually wrong summary made a physician doubt the tool in general.
- [The Provenance Gap](https://arxiv.org/abs/2604.17114) [A, parts F]: when asked to cite, the best of five models gave 15.3% relevant PubMed IDs. Blinded neurologists in Göttingen preferred an evidence graph on verifiability (three raters).

Inference: a link stored at extraction time and checked by code (does the span exist in the document?) is stronger than a citation the model writes afterwards. [LangExtract](https://github.com/google/langextract) [P] is an example: "Maps every extraction to its exact location in the source text"; items not found in the text get no position. Finding the words does not show that they were understood, for example negation, family history or wrong date.

## Automation bias and deskilling

- [Dratsch 2023](https://research.vu.nl/en/publications/automation-bias-in-mammography-the-impact-of-artificial-intellige/) [A], 27 radiologists: correct category with right versus wrong AI advice 79.7% / 19.8% (inexperienced), 81.3% / 24.8% (moderate), 82.3% / 45.5% (very experienced).
- [Prinster 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11605106/) [P], 220 physicians, chest radiographs: with wrong advice 23.6% (highlighted regions) vs 26.1% (example cases). With right advice 92.8% vs about 85%. Highlighting helps when the AI is right and did not protect when it was wrong.
- [NEJM AI 2026](https://doi.org/10.1056/aioa2501001) [A], 44 AI-trained physicians: 73.3% vs 84.9% with planted errors (-14.0 points).
- [Biro 2025](https://www.nature.com/articles/s41746-025-01586-2) [A], 20 primary care physicians: 35 to 45% of faulty drafts sent unedited, while 75% found drafts safe.
- [Budzyn 2025](https://wrap.warwick.ac.uk/id/eprint/191005) [A]: adenoma detection without AI 28.4% to 22.4%, observational.

Mitigation:
- [Cognitive forcing](https://arxiv.org/abs/2102.09692) [A], N=199: less over-reliance; the designs that helped most were liked least.
- [Nudge trial 2026](https://www.medrxiv.org/content/10.64898/2026.06.01.26354596) [A], 72 physicians: accuracy cue plus traffic light gave +7.6 points (95% CI 1.4 to 13.9).
- [AI Act Article 14](https://artificialintelligenceact.eu/article/14/) [P] names automation bias for high-risk systems. Whether an extraction tool counts as high-risk was not checked.

## Human verification of extraction

- Human baseline: pooled error of medical record abstraction [6.57%](https://www.researchsquare.com/article/rs-2386986/v2) [A], versus 0.29% single and 0.14% double data entry (93 papers, 1978 to 2008).
- [Gartlehner 2025](https://www.medrxiv.org/content/10.1101/2025.03.20.25324350v1) [A]: LLM plus human check 9.0% incorrect vs 11.0% human-only; major errors 2.5% vs 2.7%; 41 min saved per study. Published studies, not notes.
- [Breast pathology](https://arxiv.org/abs/2502.12183) [A]: GPT-4o 96.1%, Llama 3.1 405B 94.7%, human 95.4%. In 348 disagreements an evaluator sided with GPT-4o in 52.9% and the human in 44.3%.
- [VeriFact](https://arxiv.org/abs/2501.16672) [A]: checker agrees with adjudicated clinicians up to 92.7% (93.2% in [news on the NEJM AI version](https://hlth.com/insights/news/stanford-s-verifact-uses-ai-to-verify-llm-generated-clinical-records-2026-01-05)); clinicians among themselves at most 88.5%. Cannot find omissions.
- Scout: the AI judge raised 17 alarms in 187 claims, 11 of them false; no confirmed error slipped through in this small sample.
- Flags: [two models](https://arxiv.org/abs/2503.21004) [A] under 4% discordant items, over 75% of reports fully agreeing. [Uncertainty in coronary CT reports](https://arxiv.org/abs/2611.10502) [A]: OR 4.15 for extraction failure, AUC gain only +0.06. [Semantic entropy](https://doi.org/10.1038/s41586-024-07421-0) [A] finds only arbitrary errors ("a subset of hallucinations").
- Abstention: [synthetic timeline study, October 2026](https://arxiv.org/abs/2610.06177) [A]: keep sources, record revisions, abstain when evidence is missing. Span precision 0.864, recall 0.850. Author: no clinical claim.

## Error rates in summaries

- [Asgari 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12075489/) [F]: 1.47% hallucinated sentences (44% major), 3.45% omitted (16.7% major), 12,999 sentences.
- [ChatEHR, Stanford](https://arxiv.org/abs/2602.00074) [F]: 2.33 unsupported claims per summary in routine use (0.73 invented, 1.60 inaccurate), automatic estimate; order of events and numbers are typical.
- [Grolleau 2026](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2848785) [P]: of 100 reviewed summaries 2 with hallucinations, 25 with omissions, 20 with inaccuracies; time saving not significant.

Inference: omissions are as frequent or more frequent than inventions in two of these, and a link cannot show them. An overview therefore also needs a coverage check (which documents were read, which gave nothing).

## Standards and the trial analogy

- [FHIR Provenance](https://hl7.org/fhir/R4/provenance.html) [P] builds on W3C PROV (target, agent, source entity); AuditEvent covers usage. [FAIR R1.2](https://www.gofair.foundation/fair-principles/r1-2-metadata-associated-detailed-provenance/) [P]: "(meta)data are associated with detailed provenance".
- [HL7 AI Transparency on FHIR](https://hl7.org/fhir/uv/aitransparency/2026Jan/general_guidance.html) [P], 1.0.0-ballot: tag AIAST plus optional Provenance naming model, input document and human verifier. The tag does not tell whether a human reviewed.
- [ICH E6(R3), version 16 June 2026](https://database.ich.org/sites/default/files/ICH%20E6%28R3%29_Step4_FinalConsolidatedGuideline_2026_0616_.pdf) [P], 2.12.2: "Unnecessary transcription steps between the source record and the data acquisition tool should be avoided."
- Source data verification: [25 to 40% of trial cost, 46% of on-site monitoring time](https://www.cambridge.org/core/journals/journal-of-clinical-and-translational-science/article/source-data-verification-sdv-quality-in-clinical-research-a-scoping-review/5C34E89421CBC4919F7CDCEDF5F410DA) [P], old estimates. [Sheetz 2014](https://doi.org/10.1177/2168479014554400) [A]: checking everything has limited value; risk-based is better.
- Use of the analogy (inference): trials already demand that a value leads back to the record. Today a person searches for the place. If the place is stored with the value, the check takes one click, and full checks go to critical fields.

## Attitudes

- [COMFORT](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2835159) [P], 13,806 patients, 43 countries, 2023: 72.9% want the physician to decide, 70.2% prefer explainable AI at some loss of accuracy. No country comparison possible.
- [Bitkom/Hartmannbund 2025](https://www.bitkom.org/Presse/Presseinformation/KI-in-Praxis-und-Kliniken-im-Einsatz) [P], 616 doctors, not representative: 78% huge opportunity, 76% strict regulation, 18% AI use in hospitals.

## Contradictions and caveats

- Sources reduce over-reliance in Kim (people could click, real sources) and go with more false reliance in CORA (perceived support). Both fit: a link helps if its support is checked and harms if its presence is taken as support.
- Time savings: Scout yes, Verma and Grolleau no.
- No study isolates source links for error detection in patient records.
- CORA: preprint, not randomised on citations, n=23 and n=25.
- SourceCheckup is web citation. Do not transfer its percentages to patient files.
- Bias studies use planted errors and vignettes. Rates per sentence, per summary and per reviewed case are not comparable.

## Gaps

- German patient survey 2026, German data on source links: not found (search budget exhausted).
- Norwegian 2026 study reportedly without deskilling: seen only in LinkedIn posts (said to be Endoscopy 2026;58(9):1003-1014). Verify first.
- Verification time with versus without span highlighting; review share under multi-model agreement: no study found.
- Epic, Dedalus, Abridge "Linked Evidence": not confirmed.
- Sheetz full text and FDA ALCOA guidance: not read.
