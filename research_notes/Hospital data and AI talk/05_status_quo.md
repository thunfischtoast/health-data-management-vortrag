# Status quo of hospital data: quality, fragmentation, documentation burden, search, manual abstraction

Checked on 2026-11-22. "Abstract" means only the abstract was read; all other linked sources were read as page or full text.

## "80% of health data is unstructured": folklore

- The trail: the editorial [Kong 2019, Healthc Inform Res](https://pmc.ncbi.nlm.nih.gov/articles/PMC6372467) says "about 80% of medical data remains unstructured and untapped" and cites a [2015 HIT Consultant article](https://hitconsultant.net/2015/03/31/tapping-unstructured-data-healthcares-biggest-hurdle-realized/). That article is sponsored by a vendor (SyTrue), gives only "cross-industry consensus" and speaks of all data.
- The general 80% claim: [Mancini, CMSWire 2018](https://www.cmswire.com/information-management/deconstructing-a-content-management-urban-legend) found only an attribution to a 1998 Coopers & Lybrand report, with no copy in the AIIM archives. Wikipedia (search summary only) names Merrill Lynch 1998, source unclear.
- The [2025 JMIR study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11887999/) calls the claim grounded in business-related data.

Better evidence:
- [JMIR 2025;27:e66910](https://pmc.ncbi.nlm.nih.gov/articles/PMC11887999/): 1.8 million Dutch GP records. Of the concepts in free text, 13% (per record) or 7% (per visit) had a similar structured counterpart. Reverse: 42% and 25% of structured concepts had a match in text.
- [Smith et al., JAMIA Open 2026](https://academic.oup.com/jamiaopen/article/9/2/ooag025/8519495): Vanderbilt, 15,000 encounters. 92 to 95% of positively mentioned MedDRA terms were not coded in the same encounter; 40 to 50% of coded terms were not positively mentioned in the notes.

## Documentation burden

- [DKI, Sept 2025](https://www.dki.de/fileadmin//user_upload/2025-09_Buerokratiebelastung_im_Krankenhaus_-_final.pdf): 400 hospitals estimate 3.0 h (physicians, quartiles 2.0 and 3.5) and 2.8 h (nurses) per day; 2024: 2.9 and 2.6. 88% report an increase. Redundant entry due to missing interfaces is named.
- [MB-Monitor 2024](https://aerztestellen.aerzteblatt.de/de/redaktion/mb-monitor-2024-arbeitsbelastung-von-aerztinnen-und-aerzten-auf-neuem-hoechststand): n=9,649; about 3 h/day administration by self-report; 52% frequent multiple data entry; 65% dissatisfied with IT. No newer MB-Monitor found.
- Observed, not surveyed: [Schröder 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11296878), 9 physicians, 216 h: 93 min/day (19.4%), internists 120 min; discharge letters 32% of documentation time, paper files 21%.

## Searching and reading

- [de Hoop & Neumuth 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8695058/), Leipzig university hospital: 37.1% of observed time with the record (20.5% writing, 9.0% searching, 7.7% reading); 28.0% with patients. 13 physicians, 2,205 min. Themes: "use of multiple HIT systems with limited integration", repeated documentation, paper CT orders. System: SAP i.s.h.med plus COPRA.
- [Overhage & McCallie 2020](https://doi.org/10.7326/M18-3684) (abstract): 100 million US outpatient encounters, 16 min 14 s each; chart review 33%, documentation 24%, ordering 17%.
- [Mayo ICU survey 2017](https://pmc.ncbi.nlm.nih.gov/articles/PMC5802307): 156 clinicians; median 15 min chart review for a typical new ICU patient, 25 min for complex ones (self-report). 75% spend much time on notes, 34% rate notes as always useful.

## Note bloat and record size

- [Steinkamp 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9513649/): 104 million notes, 50.1% of words duplicated, 33.0% (2015) to 54.2% (2020); 54.1% from the same author. Authors: "duplication is a rational response of clinicians attempting to manage information". Median record 4,285 words, mean 16,826.
- [Rule 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8290305) (abstract): outpatient notes reached 642 words in 2018 (median), redundancy 47.9 to 58.8% (2009 to 2018), only 29.4% typed directly.
- [Patterson 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11110617): 730,968 ED visits; median available notes 5 (2006) to 359 (2022); 19.12% of 2022 visits exceeded Moby Dick (206,052 words); median 98,308 tokens.

## Quality of existing records

- Notes: [Bell 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7284300/): 21.1% of 22,889 note readers reported a mistake; 42.3% of those serious. Unverified, 21.7% response.
- Codes: [Schwarzkopf 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10954942), ten German hospitals, 10,334 charts: sensitivity for severe sepsis 34.4% (10.7 to 58.5%), PPV 83.3%, sepsis named in 49.7% of records; hospital mortality by code vs chart r=0.09. [Thomas-Rüddel 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12864231/): coded in 56.2% if named, 5.5% if not.
- Billing audits: [GKV file Q2 2026](https://www.gkv-spitzenverband.de/media/dokumente/krankenversicherung/krankenhaeuser/abrechnung/mdk-pruefstatistiken/2-q-2026/statistikdaten-nach-275c-abs-4-sgb-v-2026q2.xlsx), own sum: 575,324 completed audits, 50.5% reduced; UKM 937 audits, 53.0% reduced. About 60% of audits concern length of stay or admission ([f&w 5/2026](https://www.gkv-spitzenverband.de/media/dokumente/presse/beitraege_und_interviews/2026_1/fw_2026_05_Wolff_Moeckel_Abrechungspruefung_Ende_der_Populisten-Logik.pdf)).
- Problem lists: [Wright 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4549158): diabetes listed for 78.2% (60.2 to 99.4%) of patients with HbA1c of 7% or more.
- Medication: [Tam 2005](https://doi.org/10.1503/cmaj.045311) (abstract): 27 to 54% of admitted patients with at least one history error.

## Manual abstraction and double entry

- [Garza 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC10775420/): pooled error rates: record abstraction 6.57% (CI 5.51 to 7.72), optical scanning 0.74%, single entry 0.29%, double entry 0.14%. 93 papers, 1978 to 2008.
- [Garza 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11653794) (abstract): with quality control 1.04 to 2.57%.
- [Rutzner 2017, Erlangen](https://www.frontiersin.org/articles/10.3389/fonc.2017.00016/full): 251 patients, 668 h manual vs about 35 h data warehouse; 91.2% vs 93.9% correct on comparable items. Histology, tumour site, cause of death stayed manual. Warehouse missed 7 of 14 deaths.

## Media breaks, maturity, ePA

- [DigitalRadar 2025](https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/5_Publikationen/Gesundheit/Abschlussberichte/DigitalRadar_Zwischenbericht_t2_barrierefrei.pdf): 1,592 hospitals; score 42.4/100 (2021: 33.3), university sites 52.9; indicative EMRAM stage 0: 56% (68.6%), stage 1: 35.9%, stage 2: 3.3%.
- Fax: [Ärzte Zeitung, Dec 2025](https://www.aerztezeitung.de/Politik/Wenn-die-Klinik-Faxe-in-die-Praxis-schickt-461345.html): 97% of hospital staff in the KomK-K survey use fax for discharge documents (no n). The bill [GeDIG](https://www.it-boltwise.de/gedig-bringt-fax-verbot-e-ueberweisung-und-volltextsuche-in-der-epa.html) (cabinet, 15 July 2026) plans a fax ban by autumn 2029.
- ePA: [DKG guide, 8 Oct 2026](https://www.dkgev.de/fileadmin/Mediapool/2_Themen/2.1_Digitalisierung_Daten/2.1.5._Telematik-Infrastruktur/2.1.5.4_Elektronische_Patientenakte__ePA_/DKG-Umsetzungshinweise_zur_ePA_prozessual-technischer_Teil_2026-10-08.pdf): mandatory hospital documents are unstructured (PDF/A); search beyond metadata "frühestens ab 2027"; structured labs with version 27; structured discharge letters later. Medication list is structured. [KBV](https://www.kbv.de/praxis/digitalisierung/anwendungen/elektronische-patientenakte): full-text pilots from Oct 2026, rollout from Jan 2027.
- Hospitals: [DKI, Feb 2026](https://www.dkgev.de/fileadmin/Mediapool/1_DKG/1.7_Presse/1.7.1_Pressemitteilungen/2026/2026-03-25_DKI-Blitzumfrage_ePA.pdf), n=489: 26% expected hospital-wide use in Q1 2026, 43% not before Q3. [heise, 1 Oct 2026](https://www.heise.de/news/Ein-Jahr-Befuellungspflicht-fuer-die-E-Patientenakte-Ein-Blick-vieles-unklar-11473343.html): few clinics fill it; 3.3 million uploads and 1.15 million downloads per week in total.
- Quote (GP, [heise 29 Oct 2026](https://www.heise.de/news/Buendnis-fordert-Gesundheit-besser-digitalisieren-11505289.html)): "Ich bekomme eine digitale Wäscheleine, an der hängen mit Datum verschlossene Briefumschläge."

## Harm from missing or fragmented information

- [Smith 2005, JAMA](https://doi.org/10.1001/jama.293.5.565) (abstract): information missing in 13.6% of 1,614 US primary care visits.
- [Houston 2021](https://pmc.ncbi.nlm.nih.gov/articles/PMC8457306): repeat CT in 51.7% of 711 transfers, but only 41 patients with unavailable images. [Rome 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7210344/): shared EHR 29.4 to 20.7%, not significant.
- [BMJ Qual Saf 2026](https://www.eurekalert.org/news-releases/1114744) (press release): duplicate records and higher mortality; confounding not excluded.
- Missed findings: no source read in full.

## Why not structured forms everywhere?

- [Joukes 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC5801881) (abstract): -8.5% dedicated patient care time in one centre, +8.3% documentation in the other; consultation length unchanged.
- [Golburean 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC11971576/) (abstract), Norway: free text stayed preferred; partial use created distrust of structured data.
- [Rosenbloom 2011](https://pmc.ncbi.nlm.nih.gov/articles/PMC3116264): expressivity and structure conflict; let clinicians choose, process text later where needed.
- [Biechele 2026](https://doi.org/10.1186/s41747-026-00777-0) (abstract): PSMA PET/CT, free text sufficient for decisions in 91% vs 76% structured. Other template studies found the opposite.

## Contradictions and caveats

- 3 hours (survey) vs 93 minutes (observed). Leipzig writing share (20.5% of observed time) agrees with the observed value. Definitions differ.
- Do not turn 13% overlap into "87% unstructured". Codes also hold content missing in text.
- Nothing here is ORBIS-specific; Leipzig used SAP i.s.h.med.
- Audit figures are selected cases and no coding error rate. Percentages are own sums.
- 6.57% rests on old, mostly uncontrolled studies.
- Record size and copy-paste data are from the US.
- Moby Dick share counts visits, not patients.
- Web quotes came through a fetch tool with a small model; re-check before printing.

## Gaps

- ePA hospital use after Feb 2026 (search budget exhausted).
- German data on text duplication, record size, number of systems, clicks, harm, registry errors.
- Chart review time of German doctoral candidates beyond Erlangen 2017.
- KomK-K original, Grimes 2008 and the 1998 reports not read.
