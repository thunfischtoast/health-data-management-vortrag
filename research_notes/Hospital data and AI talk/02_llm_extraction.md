# LLM extraction from clinical text, PDFs and tables

Details, quotes and check level for each item are in `02_llm_extraction.json`. "(abstract)" marks sources read only as abstract.

## 1. Accuracy against humans

**Takeaway:** Plainly stated facts with a narrow schema reach about 90 to 98%, similar to one human reader. Interpretation, rare classes and open coding are clearly worse.

- Systematic review of breast pathology reports (npj Digit Med, May 2026, 9 studies): best models 87.7 to 97.4%. One study had external validation. One included study lost 11 to 32 points from curated cases to real documents. No pooling possible. [Shankar 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13473680/)
- Registry population (JAMIA, 15 studies, 2010 to 2025): median micro F1 81.2%, 9/15 high risk of bias, 11/15 without external validation, one generative LLM study. "most systems remain experimental". [Liu 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12844598/)
- Radiology scoping review (34 studies, search August 2023): no generative models yet; external validation showed a general performance drop. [Reichenpfader 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11344824/)
- Cancer pathology scoping review (41 studies, July 2026): high for defined extraction, external validation uncommon, success does not carry over to reasoning tasks. [Seifaddini 2026 (abstract)](https://doi.org/10.1016/j.modpat.2026.101043)
- Breast histology, English: human annotator 95.4%, GPT-4o 96.1%, Llama 3.1 405B 94.7%, 70B 91.6%, GPT-4o mini 87.9%. [Balasubramanian 2025](https://arxiv.org/abs/2502.12183)
- Large local multilingual example: CIDER, 2,073 Hungarian histopathology reports, Qwen3-VL-32B: sex 99.5%, T stage 95.6%, histology 87.5%, tumour size 78.1% exact. It proposed values for 62.8% of T stages missing from the manual database. [Posta 2026 (abstract)](https://doi.org/10.2196/95780)

## 2. German-language evidence

**Takeaway:** There is a solid German evidence base for local models. Bonn, Essen, Dresden, Würzburg, Cologne and a Münster study contribute. Results range from above 99% to 35% depending on the question.

- **Münster**: 14 cardiac function values from 497 German cardiac MRI reports, zero-shot open models, up to 95.4% right annotation. [Plagwitz 2024 (abstract)](https://doi.org/10.3233/shti240861)
- **Swiss tertiary hospital, German oncology imaging reports**, five local models, duplicate human coding: metastasis 97.6% (best model) vs 98.4% (human), noninferior. Treatment response 78.3% vs 86.0%, inferior; humans agreed with each other on only 76.2% there. About 20% of re-checked disagreements were errors of the human gold standard, and against the corrected reference the best model was noninferior. [Passweg 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13465685/)
- **Bonn**: 18,500 German chest X-ray reports, Mistral-Large zero-shot macro F1 91.6% vs rules 74.8%; with 1,000 training reports 94.3% vs BERT 86.7%; from 2,000 reports no relevant difference. [Nowak 2025 (abstract)](https://pubs.rsna.org/doi/10.1148/radiol.240895)
- **Würzburg**: Llama-2-70B, 197 German reports, MCC 0.66 vs human readers 0.66 to 0.67 (English 0.75 vs 0.74). Invented pleural drains occurred. [Woźnicki 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11913902/)
- **Essen, letters to FHIR**: MedGemma 27B trained on 75,000 synthetic letters. Synthetic F1 0.99 medication and 0.63 OPS codes. On 30 real letters physicians accepted 93.0% medication, 86.1% tumour, 78.9% ICD diagnoses, 61.3% procedures. [Eryılmaz 2026](https://www.jmir.org/2026/1/e92413)
- **Essen, ICD-O coding**: 21,364 real reports, exact topography F1 71.6%, exact morphology 34.7%, poor on rare tumours. [Arzideh 2026 (abstract)](https://pubmed.ncbi.nlm.nih.gov/41812101/)
- **Cologne, prostate**: German reports GPT-4 97%, Llama 3 70B 97%, 8B 83%, 8B at 4 bit 59%. [Grothey 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11958830/)
- **Dresden (preprint, October 2026)**: 15 liver cancer variables, macro F1 above 0.99 with a local 31B model; gatekeeper model corrected administrative metadata. [Koch 2026 (abstract)](https://doi.org/10.64898/2026.10.07.26364402)
- **Urology notes**: 92% first-diagnosis dates correct; wrong dates off by a median of 1,520 days. [BioData Mining 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12291363/)
- **Hamburg benchmark**: 7B models on all three public German corpora: drugs F1 0.71 to 0.87, diagnoses and treatments 0.44 to 0.71. [Spiegel 2025 (abstract)](https://aclanthology.org/2025.konvens-1.4.pdf)
- **Essen/Aachen, GPT-4 letters**: 20 patients, secondary diagnoses 55.8% before and 88.9% after prompt refinement; open models did not match (numbers from search summary). [Siepmann 2025](https://doi.org/10.1016/j.health.2024.100378)
- **LMU**: up to 90% on 800 German reports with a local model plus retrieval. [Wang 2024 (abstract)](https://doi.org/10.3233/shti240567)
- **Bonn service**: an on-premise LLM approved for non-anonymised data. In a one-week pilot with 22 radiologists, text-anchored tasks rated best, free conclusion generation produced most critical errors. [Nowak 2026](https://arxiv.org/abs/2604.22768)
- Dutch benchmark: translation to English "consistently degraded performance"; trained RoBERTa 0.819 vs zero-shot Llama 3.3 70B 0.760. [Builtjes 2025](https://arxiv.org/abs/2507.20859)

## 3. PDF, OCR, vision models

**Takeaway:** Document reading is its own error source. Vision-language models help, but clinical German evidence is thin.

- LLM-AIx: OCR read "N1" as "N:", "MA" as "M1", "I/IV" as "1/9", and the LLM repeated it. Accuracy 87%, 89% with another OCR engine. [Wiest 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12443949/)
- Augsburg care-transfer forms to FHIR: 97% on synthetic, 85% on real scans. [Werlitz 2025](https://opus.bibliothek.uni-augsburg.de/opus4/files/125156/125156.pdf)
- Photographed ultrasound reports: character error 18.9% (Tesseract) vs 3.1% (Qwen-2.5 VL); numeric accuracy over 92%. [Neveditsin 2025](https://arxiv.org/abs/2511.13523)
- Italian medico-legal files (60 documents, 809 pages): fine-tuned Qwen3-VL reduced word errors by at least 74% against Tesseract, but layout detection reached only mAP@50 0.633. [Marulli 2026 (abstract)](https://ceur-ws.org/Vol-4240/paper33.pdf)

## 4. Chart review, structured output, terminologies

**Takeaway:** A person checking pre-filled answers is the best supported design. Schema enforcement solves format, while choosing codes needs a lookup service and remains hard.

- IBD chart review: manual 68% (142/207) vs assisted 89% (185/207) correct; 9.4 vs 3.6 min per patient. Hallucination 1.2%. The model alone averaged 69.3% in a separate benchmark. [Neuse 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13779612/)
- Ophthalmology: manual 82.3%, tool 94.3%, assisted 97.1%; 25.2 min, 80 s, 8.8 min; about $0.20 per chunk. [Chen 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12517364/)
- Osteoarthritis, 26 patients: 92 to 94% exact match; prompt required "Not documented" and a source snippet. [Schwartz 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13340080/)
- Large-scale quality control: 919,783 US veterans' notes; rule and grounding checks removed 14.59% of positive extractions. [arXiv 2604.06028](https://arxiv.org/abs/2604.06028)
- Valid JSON: Llama 2 failed in up to 54% of cases, Llama 3 70B produced 99.8% valid output. [Grothey 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11958830/)
- SNOMED codes from memory: 10.9 to 19.3% non-existent. Lookup removes these, but F1 stays at 19 to 23% versus 78% for a specialised system (vendor authors). [Born 2026](https://aclanthology.org/2026.clinicalnlp-1.41/)
- Essen: lookup after extraction raised full ICD code F1 by about 13.5 points. [Eryılmaz 2026](https://www.jmir.org/2026/1/e92413)

## 5. Failure modes

- **Absence vs silence**: most prompt disagreement vanishes when "no" and "not documented" are merged; changing the model changes the main category on close to half of notes, rewording on one in eight. [Murin 2026 (abstract)](https://arxiv.org/abs/2606.05970)
- **Case report forms**: best shared-task system macro F1 0.68; 96.3% of training labels "unknown"; negated mentions misread as positive. [Sommer 2026](https://arxiv.org/abs/2606.13082)
- **Hallucination**: "She had confusion present at admission", not in the report (7B model). [Wiest 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11415382/)
- **Omission**: 46 omissions vs 5 hallucinations among comments on 147 AI chart summaries; "severe" stenosis became "moderate". [Kahl 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13354172/)
- **Missing rules**: adding the human annotation guideline raised precision from 0.83 to 0.95. [Wihl 2025 (abstract)](https://doi.org/10.1101/2025.01.22.25320938)
- **Compression and size**: see Cologne above.

## 6. Examples for a lay audience

1. Sentence to row: "Patient reported mild right upper quadrant pain." becomes `abdominal pain: {excerpt: "...", present: true}`. The excerpt is written first. [Wiest 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11415382/)
2. **pN1 vs Pn1**: lymph node spread versus nerve invasion, confused by models. [Grothey 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11958830/)
3. Easy vs hard question on the same report: "metastasis?" 98/98, "response?" 78/86. [Passweg 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13465685/)

## Contradictions and caveats

- Above 99% (Koch) and 35% (Arzideh) are both German pathology. Likely reasons: narrow schema vs large code list, one tumour vs all, newer model. This explanation is an inference.
- Local equals GPT: supported by Nowak (English subset) and Grothey; contradicted by Wihl (GPT-4o better) and Siepmann (open models could not fill the template reliably).
- Bigger is better: Grothey and Balasubramanian say yes; the urology study found no gain above 7 to 12B.
- The LLM vs BERT question is open once 2,000 or more labelled reports exist.
- Human gold standards are imperfect. Passweg re-checked disagreements only, which can only help the model.
- Time savings are small, single-centre, non-randomised, and omit set-up and validation.
- OphthoACR and Woźnicki contain internal inconsistencies in reported figures.
- A source quote exposes invention and leaves omission undetected.
- PMC full texts were read through a summarising fetch tool; check quotes before slide use.

## Gaps

- No pooled meta-analysis of extraction accuracy. No evaluation of vision-language models on German Arztbriefe, ePA PDFs or ORBIS documents. No strong clinical table extraction study.
- No longitudinal drift study, no randomised trial of assisted chart review, no full cost analysis.
- Bias is barely quantified. OMOP mapping and long-document effects not covered by a strong source.
- No further German extraction study found for Freiburg, Charité or Aachen beyond shared authorship. RACOON text work not searched.
