# Dedalus ORBIS: data access, search and AI (as of 2026-11-22)

Findings with ids and quotes are in `01_orbis.json`. Vendor sources are marked (V).

## 1. ORBIS at UKM
- UKM: ORBIS in more than 40 clinics, 8,700 GB Oracle database, 7,938 users, 1,927 sessions per day (July 2020). [Blitz et al. 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8262601/). So UKM's use of ORBIS is publicly documented.
- The same paper: ORBIS "does not currently support standardized form metadata, clinical data, or annotated data sets". The team built its own extension, SMA:T (CDISC ODM, 19 forms, 241 items). Earlier Muenster single-source work is x4T (2011/2014, [publication entry](https://www.init-owl.de/forschung/publikationen/detail/x4t-eine-single-source-architektur-zur-sekundaernutzung-der-routinedokumentation-fuer-die-klinische-forschung), snippet only).
- MeDIC study module in ORBIS: nightly queries, more than 80 studies, covers structured and free-text data, but "An automatic search for information in PDF-documents is not possible." [MeDIC](https://medic.uni-muenster.de/en/advice-cooperation/study-module/) (undated).
- MeDIC extracts from ORBIS come anonymized or pseudonymized "as a print or excel worksheet". [MeDIC](https://medic.uni-muenster.de/en/advice-cooperation/orbis-data-extraction/) (undated).
- Counterweight: an ORBIS module made in Muenster registers, pseudonymizes and randomizes study patients; used by more than 10 clinics. [MeDIC](https://medic.uni-muenster.de/en/?p=589)
- Billing: about 300,000 outpatient bills per year at UKM; Dedalus planned NLP that derives the diagnosis from ORBIS documents (V). [DIREKT 1/2024](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2024/03/KIDIREKT_1_2024.pdf)
- UKM radiology LLM study on liver cancer: reports for 106 patients retrieved from ORBIS as PDFs and merged by patient; 9.3 min of expert time for data checks and liver function vs under 2 min for GPT. [Masthoff et al. 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13263330/)
- Retrospective UKM papers describe the usual path, for example "keyword-based searches in the hospital information system". [Budny et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12468427/)

## 2. Document-centred design, in the vendor's words
- "erfordern jedoch weiterhin die Navigation durch verschiedene Module, Ansichten und Formulare" (V). [Press release, 22 Oct 2026](https://www.dedalus.com/dach/de/news/10537/)
- CMO: "Außerdem imitieren die Systeme häufig nur die Papierakte, anstatt Daten zu vernetzen". Product manager: information was "oft in isolierten Freitextfeldern" or hidden as coarse billing diagnoses. The app ORBIS U Diagnosen und Probleme is meant to fix this (V). [DIREKT 2/2024](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2024/11/PatientensichtDIREKT_2_2024.pdf)
- Most data in hospital systems is unstructured text in findings, letters and notes, "so auch in ORBIS" (V). [DIREKT 1/2024](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2024/03/KIDIREKT_1_2024.pdf) (wording: "ein großer Teil").

## 3. Measured evidence on ORBIS data
- Dresden, ORBIS curve module, 1,768,153 prescriptions 2016 to 2020: 47.73% structured; text processing raised this to 85.18%. [Reinecke et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC9909518/)
- Cologne, 7 clinicians, data for tolvaptan counselling: 634.5 s in ORBIS vs 172.3 s in a dashboard fed from ORBIS and research databases (p<0.001). Exploratory, unblinded. [MEDA-PKD 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13683356/)
- Interviews in German hospitals (several vendors): information "sometimes buried" in free-text fields or letters. [Eisenmann et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11256362/)
- Eye clinics (n=44, 2021; ORBIS most used, 27%): 34% store documents as PDF, 23% as scans, 61% document findings in a structured way. [Fuhrmann et al., PMID 35376987](https://pubmed.ncbi.nlm.nih.gov/35376987/) (abstract)

## 4. Product, architecture, interfaces
- ORBIS U: microservices, browser frontend, SNOMED CT and LOINC, stepwise move from the older ORBIS; Composer for local forms (V). [Dedalus](https://www.dedalus.com/dach/de/landing/orbis-u-die-naechste-generation-von-orbis/). A director in 2025: "noch nicht mit allem fertig" (V). [DIREKT 1/2025](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2025/03/Auf-dem-richtigen-WegFINALDIREKT_1_2025.pdf)
- Transition cost: "Die Anwender leiden zunehmend unter dem Wechsel zwischen alter und neuer Welt"; more than 200 applications attached to ORBIS in one hospital (V, customer). [DIREKT 1/2025](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2025/03/Gemeinsam-digital-starkFINALDIREKT_1_2025.pdf)
- Archive HYDMedia G6: FHIR server (Patient, Encounter, DocumentReference), IHE XDS; external clients can search by patient or encounter (V). [Flyer 2025](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2025/12/HYDMedia_FIHR_261125_02.pdf), [product page](https://www.dedalus.com/dach/de/our-offer/products/hydmedia-g6-enterprise-content-management/)
- ISiK (mandated FHIR interface): stage 1 confirmed May 2023; vendor expected first real projects "frühestens 2026" and saw HL7 v2 ahead for years (V). [DIREKT 1/2024](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2024/03/ISIKDIREKT_1_2024.pdf)
- Lock-in: direct award of 7.93 million EUR because Dedalus integrated only one medication system and "bietet keine spezifizierten Schnittstellen an" for comparable third-party integration. [TED 458974-2023](https://ted.europa.eu/en/notice/458974-2023/pdf)
- Research platform: Trials For Care (T4C) with NLP partner LynxCare (V). [Dedalus](https://www.dedalus.com/dach/de/media/news/dedalus-und-lynxcare-gemeinsam-fuer-innovation-der-klinischen-forschung-und-datenzusammenarbeit-durch-kuenstliche-intelligenz-ki/); DMEA 2026 talks on T4C, cloud LLM integration and AI agents in the TIP HCe data warehouse. [Programme](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2026/03/25-3-26_DMEA_2026_Vortraege_final6.pdf)

## 5. AI: shipped vs announced (all V)
- Listed as available in June 2026: Speech Assistant (Corti), AI epicrisis draft from structured data, Intelligent Text Engine, clinalytix (sepsis, delirium, AKI), RICO coding. Outlook: Buddy 2.0, Speech Assistant 2.0 with review fact by fact, dictation, outpatient coding. [Brochure](https://www.dedalus.com/dach/wp-content/uploads/sites/24/2026/10/KI-in-ORBIS-12.06.26.pdf). The "80 to 90%" documentation claim there has no source.
- ORBIS Buddy: agent layer, answers questions, writes back after confirmation, DACH first. Claimed "validiert, auditierbar und nachvollziehbar". [Press release](https://www.dedalus.com/dach/de/news/10537/). No evaluation found.
- voize speech documentation for nursing in ORBIS U (Sept 2026). [News list](https://www.dedalus.com/dach/de/news-und-presse/news/). Corti partnership first reported July 2025. [heise](https://heise.de/-10474887)
- Vivantes: "stellen in den meisten Fällen tatsächlich keinen Mehrwert fest" about AI pilots in general; clinalytix kept. [DIREKT 2/2024](https://dedalus.com/dach/wp-content/uploads/sites/24/2024/11/AWB_VIVANTES_KIDIREKT_2_2024-1.pdf)

## 6. Market, ownership, security
- 43% of acute contracts in DACH, 100% would buy again (V, reading KLAS). [Dedalus 2025](https://www.dedalus.com/dach/de/media/news/orbis-im-klas-report/). KLAS itself on the whole market: "delays in development, weak support, outdated technology, and usability challenges". [KLAS](https://engage.klasresearch.com/?p=8376)
- Best in KLAS Acute Care EHR DACH three years in a row, 2026 included (V). [Dedalus](https://www.dedalus.com/anz/?p=4728)
- Dedalus HealthCare GmbH 2025: revenue 405.1 million EUR (+13%), EBIT margin 18.7% (2024: 13.0%), 1,430 employees. [Annual accounts](https://www.lobbyregister.bundestag.de/media/e5/a2/813285/JA-2025.pdf)
- Ardian agreed to raise its stake to 92% (Oct 2023). [Press release](https://www.dedalus.com/spain/wp-content/uploads/sites/27/2023/10/ardian-dedalus-october-2023-en.pdf)
- Charité: Epic, about 200 million EUR, done by end of 2029; Dedalus excluded for formal errors. [heise, Dec 2025](https://heise.de/-11114132). Goettingen chose ORBIS (April 2026, news list above).
- IS-H: regular maintenance ends 2027, extended 2030. [Taylor Wessing 2026](https://www.taylorwessing.com/de/insights-and-events/insights/2026/05/is-h-abloesung). 30% of hospitals plan a system change. [Roland Berger 2025](https://www.rolandberger.com/de/Insights/Publications/Krankenhaus-IT-Monitor-2025.html)
- Security: CNIL fined Dedalus Biologie (French lab software, not ORBIS) 1.5 million EUR, almost 500,000 people. [Enforcement Tracker](https://www.enforcementtracker.com/ETid-1136), [Orrick](https://www.orrick.com/en/Insights/2022/04/French-Data-Protection-Authority-Fines-Processor-for-Failing-to-Enter-into-Data-Processing-Agreement)
- Safety notices exist for ORBIS Medication, for example a wrongly shown dose. [Swissmedic 2023](https://fsca.swissmedic.ch/mep/api/publications/Vk_20230206_17/documents/0). Such notices are normal for medical devices.

## 7. User satisfaction, national level (not ORBIS specific)
- Gynaecology, n=89: 33.7% would recommend their system; 52.2% dissatisfied with reporting and analysis; ORBIS 32.6% of systems. [Pfob et al. 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10579143/)
- DigitalRadar 2024: 42.4 of 100; access to information 71.5%, interoperability 56.4%, decision support 29.0%, exchange between clinical staff 23.3%. [BMG 2025](https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/5_Publikationen/Gesundheit/Abschlussberichte/DigitalRadar_Zwischenbericht_t2_barrierefrei.pdf)
- About 3 hours of documentation per physician per day (400 hospitals, estimate). [DKI 2025](https://www.dki.de/fileadmin//user_upload/2025-09_Buerokratiebelastung_im_Krankenhaus_-_final.pdf)
- Marburger Bund: 47% unhappy with workplace IT, but the survey is from 2017. [praktischArzt](https://www.praktischarzt.de/magazin/digitalisierung-im-gesundheitswesen-anspruch-und-wirklichkeit-liegen-noch-auseinander/) (secondary). Too old for a main slide.

## Contradictions and caveats
- KLAS: ORBIS is best rated, yet the whole market has unmet expectations. Both are true; criticise the design generation and avoid claiming ORBIS is worse than others.
- Installation counts: over 1,300 DACH (2021 paper), more than 800 hospitals (V), 821 Germany / 930 DACH (reseller, 2024).
- DigitalRadar means 42.1, 42.5 and 42.4 circulate; the BMG report says 42.4.
- Blitz (2021) and Reinecke (data until 2020) predate broad ORBIS U use.
- MeDIC pages undated.
- MEDA-PKD compares a disease dashboard built by the authors with ORBIS, n=7.
- The TED lock-in text is a buyer's justification.

## Gaps
- No ORBIS-specific SUS score.
- No public documentation on native full-text or semantic search in ORBIS or HYDMedia; absence is unproven. Ask UKM IT.
- No public list of UKM's other systems (PDMS, RIS, LIS).
- gematik register for ORBIS ISiK stages not checked.
- No reliable 2025/2026 source on an Ardian sale or price rises; no CVE or CCC finding on ORBIS.
- Web search budget ran out before UKM LLM pilots, MeDIC FHIR pipelines and T4C results could be searched.
