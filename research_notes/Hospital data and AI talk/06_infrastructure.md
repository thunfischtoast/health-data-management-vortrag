# German and local (Münster) infrastructure for using hospital data

Checked 2026-11-22. "Page read" = fetched and read. "Abstract" = abstract only. "Snippet" = search result only.

## 1. Münster: what a doctoral candidate can use

**Takeaway.** UKM already offers ways from ORBIS to research data. They end at structured fields and text typed into ORBIS; PDFs are out of reach. That is the local opening for document-to-data methods.

- MeDIC offers ORBIS data extraction for scientific questions, with the UKM IT department. Results are delivered "as a print or excel worksheet", anonymised or pseudonymised after a data protection check. Apply with the form "Datenauszug beantragen" in the IT section of the UKM intranet. [MeDIC, ORBIS data extraction](https://medic.uni-muenster.de/en/advice-cooperation/orbis-data-extraction/) (page read)
- Study module in ORBIS: nightly queries put matching patients on a work list. More than 80 studies supported. It searches structured and free text in ORBIS, but "An automatic search for information in PDF-documents is not possible." [MeDIC, study module](https://medic.uni-muenster.de/en/advice-cooperation/study-module/) (page read, undated)
- The Use and Access Committee (UAC) assesses applications for data release on organisational, legal, ethical and scientific grounds. Münster belongs to the HiGHmed consortium. [MeDIC, UAC](https://medic.uni-muenster.de/en/advice-cooperation/use-and-access-committee/) (page read)
- Data usually stays in MeDIC; trained staff evaluate it; personal data leaves only in exceptional cases with consent. [MeDIC, data use](https://medic.uni-muenster.de/en/advice-cooperation/data-use/) (page read)
- KI-AIM2 is coordinated by MeDIC Münster, with Dedalus (DH Healthcare), BIH/Charité, DFKI, TMF and others. It connects the open-source anonymisation tool Cinnamon to hospital systems over FHIR and extends it to free text such as physicians' letters. [MeDIC](https://medic.uni-muenster.de/en/?p=1169) (page read)
- UKM, per its CIO (Feb 2026): pilot of an AI tool for doctors' letters; AI in diagnostics (caries, skin cancer screening, radiology); "mehrere Petabytes" of patient data; "Davon geht nichts nach draußen". [IHK Nord Westfalen](https://www.ihk.de/nordwestfalen/wirtschaftsspiegel-online/unternehmen-und-maerkte/ukm-geht-neue-wege-6954694) (page read)
- UniGPT (University of Münster, not UKM): local models accept information up to class V3 ("vertraulich"); V4 ("streng vertraulich") must not be processed; external models only V1 (public). [Terms of use](https://www.uni-muenster.de/IT/services/arbeitsplatz/unigpt/agb.html) (page read). Which class patient data falls into is in an internal handbook we could not open. No UniGPT page read mentions patient data or permits it.

## 2. RACOON

**Takeaway.** A national imaging network with a node at each university hospital. Its structured data were entered by people through templates. It renews and grows 2026 to 2029.

- NUM infrastructure with nodes at all German university hospitals, connected to RACOON-CENTRAL; structured reporting, annotation and segmentation, AI training and inference. States that class IIb medical device requirements are met. [NUM](https://www.netzwerk-universitaetsmedizin.de/en/projects/racoon) (page read)
- Tool stack: mint Lesion (structured reporting), SATORI and ImFusion Labels (annotation), Kaapana (curation and federated learning; open source). mint Lesion and ImFusion come from commercial companies, so "open-source stack" is only partly right. [Bujotzek et al., JAMIA 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11648732/) (full text, first 100k characters). HIVE, a self-service portal, is being built at Essen. [UDE, 3 Nov 2026](https://www.uni-due.de/med/meldung.php?id=2021) (page read). SHIP-AI in RACOON: no public source read.
- RACOON x NATON: 39 university hospitals, 2026 to 2029, federal special fund (SVIK). Adds digital pathology, later nuclear medicine and radiotherapy. Essen receives 10.8 million euros. [UDE](https://www.uni-due.de/med/meldung.php?id=2021). Total and Münster share not found.
- NUM third phase 2025 to 2030. Use cases: MARDER (liver MRI), INCLUDED (childhood leukaemia, up to 33 hospitals), PAIN (about 12,000 patients, 39 hospitals), COMPARE (about 30,000 tumour patients, 37 hospitals; targets, not results). Partners DKFZ, Fraunhofer MEVIS, Mint Medical, ImFusion, IKIM. [MHH](https://www.mhh.de/forschung/covid-19/netzwerk-universitaetsmedizin/num-3-foerderperiode) (page read)
- Precursor template: 67 items, 283 patients, 8 centres, on mint Lesion. Authors name the cost: data entry takes longer than routine reading, and completeness depends on the reader. [Salg et al., npj Digit Med 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8041811) (full text)
- Published results: viral pneumonia score, 8 readers, Kendall's W 0.95 overall but 0.55 to 0.69 when separating reticulation from fibrosis ([Persigehl 2025](https://doi.org/10.3389/fmed.2025.1578282), abstract); CT fingerprints from structured reports, 359 patients, 15 disease groups ([Bachl 2026](https://doi.org/10.1055/a-2818-5917), abstract); muscle density and COVID mortality, 1,379 patients, with two co-authors from UKM Radiology ([Bucher 2024](https://doi.org/10.1016/j.acra.2024.11.054), abstract).
- Federated learning at 6 hospitals: 666 CTs in, 582 usable. Hurdles were staff, inconsistent annotation, contracts and restricted hospital networks. FL beat local models; more sites did not always help. (Bujotzek, above; Münster not among the six)
- UKM Radiology is named as carrying out RACOON-COMBINE in a May 2026 patient information sheet; the PDF now returns 404 (snippet only).
- RACOON-RAVEN: no public source found.

## 3. Medical Informatics Initiative and FDPG

**Takeaway.** The structured part of hospital data is now findable nationwide. Consent is the bottleneck for pooled analysis, and texts are the missing part.

- FDPG, March 2026 slide: more than 27 million persons, 41 sites, 3 billion lab values, 350 million diagnoses, 385 million medication records, 8 million radiology reports, 550,000 persons with consent, about 140 applications. [Overton, MII Symposium](https://www.medizininformatik-initiative.de/sites/default/files/2026-03/S3.1_Overton.pdf) (slide image read). Inference: 550k of 27M is about 2 percent.
- The portal deals in structured data (same slides), so "radiology reports" here means resources in the core data set, not coded findings.
- MII: over 480 million euros to end of 2026; consortia DIFUTURE, HiGHmed, MIRACUM, SMITH; data integration centres in NUM since 2023. [TMF annual report 2025](https://www.tmf-ev.de/sites/default/files/2026-03/tmf-jahresbericht-2025.pdf) (relevant pages). MII funding ends 2026; merges into NUM. [Ärzteblatt, 24 Mar 2026](https://www.aerzteblatt.de/news/perspektivwechsel-fur-die-medizininformatik-initiative-88929ec3-1bce-479f-8506-ca5c90c463e3) (page read)
- GeMTeX, Feb 2026: more than 15,000 documents, 20 million tokens, 6 university hospitals, SNOMED CT annotation, on request. [CMLC 2026](https://aclanthology.org/2026.cmlc-1.16/) (abstract). Provision through FDPG planned; the lack of usable clinical text is called a "big gap in Germany". [heise, 26 Mar 2026](https://heise.de/-11224853) (page read)
- Criticism: industry user calls access complex, "each center is trying to push its interests" (heise). HELP study: significant heterogeneity in data quality and standards, several iteration rounds ([Palm 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12310147/), abstract). FHIR resources may differ between centres because each builds its own processes ([Draeger 2026](https://doi.org/10.3233/shti260982), abstract).

## 4. Standards and law

- FHIR is the basis of the MII core data set; HiGHmed started on openEHR (snippet); OMOP is used for mapping studies. No adoption survey found. ISiK (FHIR interfaces for hospital systems) is mandated via § 373 SGB V; stage 5 profiles date from Nov 2025 (snippet). ORBIS certification status not verified.
- GDNG § 6: health facilities may reuse their own care data for quality assurance, research and statistics. Pseudonymise, anonymise as soon as possible, delete after at most 30 years, no transfer to third parties without consent or other legal basis, public notice. [Text](https://www.gesetze-im-internet.de/gdng/__6.html) (page read)
- FDZ Gesundheit (BfArM), open since Oct 2025: 53 applications, 82 institutions, 18 teams (Feb 2026). [PZ](https://www.pharmazeutische-zeitung.de/53-antraege-auf-datennutzung-fuer-forschung-163005/) (page read). Claims data only so far. A later headline says more than 120 (paywalled).
- ePA: transfer procedure from Oct 2026, staged technical transfer from mid-December, data for research in 2027. [BMG FAQ](https://www.bundesgesundheitsministerium.de/themen/gesundheitswesen/forschungsdatenzentrum-fdz-gesundheit-fragen-und-antworten) (page read)
- EHDS: in force 26 Mar 2025; March 2029 patient summaries, prescriptions and secondary use for most data; March 2031 images, lab results, discharge reports. [Commission](https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space-regulation-ehds_en) (page read)
- Medizinregistergesetz: cabinet 11 Mar, first reading 21 May, hearing 10 June 2026; second and third reading still open on 27 Oct 2026. [AOK](https://www.aok.de/pp/gesetz/medizinregistergesetz/) (page read)
- genomDE platform: 25,000 quality-checked data sets three months after start. [Ärzteblatt, 26 Jun 2026](https://www.aerzteblatt.de/news/neue-genomdatenbank-verfugt-bereits-uber-25000-datensatze-a373ecc8-8442-4b6c-aa5e-94ae9aba0f3f) (page read)

## 5. Local language models

**Takeaway.** Hospitals can run strong open models on their own hardware, with approval for real patient data. University chat services are a different matter.

- Bonn: one server, 8 A100 80 GB, DeepSeek-R1 671B, approved for unanonymised patient data, offered to over 10,000 staff. One-week pilot with 22 radiologists, July 2025. Source-bound tasks rated best; free conclusions produced the most critical errors. [Nowak et al., arXiv 2026](https://arxiv.org/html/2604.22768v1) (preprint, read in part)
- Magdeburg: one H100, Llama 3.2 90B. 91 of 322 users answered; 44 percent saved at least 30 minutes a week; 37 percent criticised answer quality. About 150 euros per million tokens versus 10 to 15 in the cloud. [Grünig et al., JMIR AI 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13082445/) (full text)
- Leipzig: UKL-GPT in its own data centre, searches about 8,700 internal documents, may handle patient data. [Ärzteblatt, 9 Mar 2026](https://www.aerzteblatt.de/news/universitatsklinikum-leipzig-setzt-auf-hausinterne-ki-plattform-70f5b9c9-0b19-490a-af84-671b4f4553f4) (page read)
- Two German centres (preprint Oct 2026): gpt-oss-120B on one GPU structured 96.5 percent of 2,186,982 archived radiology reports. Best template chosen in 74.4 percent; residents left 88.7 percent of 24,638 fields unchanged; unsupported content flagged in 1.0 to 1.5 percent of reports; multi-region accuracy 54.1 percent. [arXiv 2610.04541](https://arxiv.org/abs/2610.04541) (abstract)
- GWDG Chat AI: no storage for self-hosted models; external models forward content. The privacy notice does not address health data. [GWDG](https://docs.hpc.gwdg.de/services/ai-services/chat-ai/data-privacy/index.html) (page read)
- KI:connect.nrw at Düsseldorf: "it is currently prohibited to enter personal data", although Mistral Small 4 and GPT OSS run in NRW. [HHU](https://www.heicad.hhu.de/en/kiconnect) (page read).

## 6. Structured platforms

- Essen: over 2 billion FHIR resources, over 1.4 million patients (paper 2024). In 2022 data, 44.2 percent of patients with abnormal sugar values had a coded diabetes diagnosis (6,138 of 13,887). [Brehmer et al., JMIR 2024](https://www.jmir.org/2024/1/e55148) (abstract plus passages)
- Essen, letters to FHIR: fine-tuned MedGemma 27B; synthetic F1 up to 0.99, but on 30 real letters 78.9 percent correct for diagnoses, 93.0 for medication, 61.3 for procedures. [Eryılmaz et al., JMIR 2026](https://doi.org/10.2196/92413) (abstract)

## Contradictions and caveats

- FDPG persons: 27 million (slide, March 2026) vs 21 million (TMF report, also "Stand März 2026", there called records of hospital stays). Consents: 550,000 (slide) vs 450,000 (heise, March 2026). Use "over 20 million" and "about half a million", or cite the slide.
- RACOON sites: 36 (2021), 38 (2025), 39 (Nov 2026). Staff: nearly 400 vs about 600.
- MII funding: over 480 million (TMF) vs over 500 million (heise).
- Essen FHIR: over 1 billion (web page), 1.2 billion (NVIDIA blog, snippet), over 2 billion (paper). Cite the paper.
- "Runs locally" does not mean "may process patient data". Bonn needed sign-off from management, compliance, data protection and security.
- FDPG counts are availability, not delivered data.

## Gaps

- Search budget ran out. Erlangen, Freiburg, Charité figures, cancer registries, KISSKI details: not found.
- Münster RACOON funding, node head, local project list; UKM AI strategy document; a UKM-internal LLM ("UKMGPT"): no public source found.
- University of Münster class for patient data (internal handbook): check internally before the talk.
- ISiK status of ORBIS; Medizinregistergesetz after 27 Oct 2026.
