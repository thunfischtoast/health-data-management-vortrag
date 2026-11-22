# Law and privacy for AI on patient records, NRW university hospital (status 22 November 2026)

Background for Q&A, no legal advice. "Inference" marks own conclusions. Statutes were read in the unofficial online versions.

## Data protection and secrecy: own-clinic data

### Takeaway
Own-data research without individual consent is possible under conditions. Legal basis, ethics advice, secrecy and IT approval are separate questions.

### Cited findings
- **GDNG § 6** lets a care institution reuse lawfully stored care data for quality assurance, research and statistics if necessary. Duties: pseudonymise, anonymise as soon as possible, roles-and-rights concept with logging, deletion after 30 years at the latest, public information in plain language. [GDNG § 6](https://www.gesetze-im-internet.de/gdng/__6.html)
- Passing personal data to third parties is prohibited in principle. Exceptions: consent, another law, anonymised transfer, or joint use by publicly funded networks with approval of the authority (target one month). [GDNG § 6(3)](https://www.gesetze-im-internet.de/gdng/__6.html)
- The Bavarian authority (1 January 2026) reads § 6 as covering the whole institution, not only the treating department (Rn. 104). Medical faculties, institutes and chairs cannot be members of a joint-use network (Rn. 129) but can act as processors. [OH GDNG](https://www.datenschutz-bayern.de/infothek/OH_GDNG.pdf)
- Unlawful sharing or re-identification of data made available for research is punishable (up to one year; three with intent to profit or harm). [§ 7](https://www.gesetze-im-internet.de/gdng/__7.html), [§ 9](https://www.gesetze-im-internet.de/gdng/__9.html)
- **The GDSG NW no longer exists.** Article 15 of the law of 10 June 2025 repealed it, in force 1 July 2025. Many pages still show it. [GV. NRW. 2025 S. 530](https://recht.nrw.de/gvnrw/2025-s530)
- **DSG NRW § 17** allows research with health data without consent if necessary and if the person's interests do not prevail; anonymise as soon as possible, store identifiers separately. [DSG NRW](https://recht.nrw.de/lrgv/gesetz/01042026-datenschutzgesetz-nordrhein-westfalen) Scope includes university hospitals according to a [project brochure](https://oa.tib.eu/renate/server/api/core/bitstreams/ffeea045-5b58-43bc-98cf-33bd3922e944/content).
- KHGG NRW (1 July 2025): keyword search found no general patient-data provision. [KHGG NRW](https://recht.nrw.de/lrgv/gesetz/01072025-krankenhausgestaltungsgesetz-des-landes-nordrhein-westfalen-khgg-nrw/) The 2026 government draft of the 6th amendment has no hit for data protection terms either. [draft](https://table.media/assets/ge_kv_mags_ag-khgg-(1).pdf)
- **§ 203 StGB**: access for own staff and trainees is no disclosure; outside contributors only as far as necessary for their service. [§ 203](https://www.gesetze-im-internet.de/stgb/__203.html) BÄK: outside AI operators must be bound to secrecy, patients informed in plain language. [BÄK 2025](https://www.bundesaerztekammer.de/fileadmin/user_upload/BAEK/Politik/Programme-Positionen/Von_aerztlicher_Kunst_mit_Kuenstlicher_Intelligenz_27.05.2025.pdf)
- **§ 393 SGB V** for cloud: Germany, EU, equated states or adequacy country; establishment in Germany; C5 attestation, in principle type 2 since 1 July 2025; customer criteria implemented. [§ 393](https://www.gesetze-im-internet.de/sgb_5/__393.html)
- **Ethics**: doctors who take part in research using data that can be linked to a specific person must ensure ethics committee advice first (§ 15(1), reworded December 2025). If colleagues were already advised, notification suffices (new § 15(2)). [MB.NRW 2025 Nr. 184](https://recht.nrw.de/mbnrw/2025-184)
- **CJEU EDPS v SRB** (4 September 2025): pseudonymised data are not personal data "in all cases and for every person" (para. 86). Information duties are judged from the controller's side (paras 111 to 115). [Judgment](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:62023CJ0413)
- Council position of 21 October 2026 on the GDPR omnibus: keeps the definition of personal data, adds Article 25a. Not law. [Lewis Silkin](https://www.lewissilkin.com/insights/2026/11/09/digital-rulebook-simplification-of-eu-data-protection-and-cyber-rules-102o7e4)
- **GeDIG bill**: new § 24 replaces § 6 and names developing AI models and systems (train, test, validate). [21/8279](https://dserver.bundestag.de/btd/21/082/2108279.pdf) Hearing 14 October 2026. [hib](https://www.bundestag.de/1224850) State authorities (May draft) want clearer wording that it must always be research. [Statement](https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/Gesetze_und_Verordnungen/Stellungnahmen_WP21/GeDIG/20260518_Stellungnahme_Datenschutzbehoerden_der_Laender.pdf)

### Inferences: cautious checklist for a doctoral candidate
1. Clarify for whom you act: hospital (GDNG § 6 possible) or university institute (DSG NRW § 17, consent or a processing contract).
2. Ask the ethics committee before starting. Whether § 15 covers pseudonymised or anonymised retrospective data is its call.
3. Work inside the hospital's role concept with pseudonymised extracts. No private devices, no private AI accounts.
4. Another institution involved: new legal basis (consent, network approval, or true anonymity).
5. On-premise avoids § 393 SGB V and most third-party secrecy questions; GDPR, access control and logging remain.

## AI guidance: retrieval, training, anonymisation

### Takeaway
Regulators look more kindly on "retrieve and cite" than on "train on records". Neither makes data anonymous.

### Cited findings
- DSK (October 2025): with RAG, Art. 9 data can be processed if requirements are met, because they do not stay in the model unless it is trained on them; on-premise may become possible; source references make the input traceable while the output process stays opaque; hallucinations are reduced, not removed; a legal basis is always needed; data subject rights in LLMs are "weitgehend ungelöst". [DSK](https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/publikationen/DSK/orientierungshilfen/2025-DSK-OH_RAG.pdf)
- LLM-Anonymizer (Dresden preprint): Llama-3 70B removed 98.05% of identifying characters in 100 letters; 81 letters had no missed identifier. [medRxiv](https://medrxiv.org/content/10.1101/2024.06.11.24308355v1.full.pdf) Later abstract: 250 letters, 99.24% removed, 2.43% over-redacted. [abstract copy](https://ctisus.com/learning/journalclub/344117)
- Fine-tuning on 10,000 Yale records: 3,192 protected health information instances regenerated; 30-token memorisation 2% to 30%. [arXiv](https://arxiv.org/pdf/2509.08604v3) Test suite for models trained on structured records: [arXiv](https://arxiv.org/pdf/2510.12950) (abstract).
- Misuse: Dutch GP practice employee entered patient data into a chatbot against the rules. [AP 2024](https://autoriteitpersoonsgegevens.nl/actueel/let-op-gebruik-ai-chatbot-kan-leiden-tot-datalekken)

## AI Act

### Takeaway
High-risk duties were postponed in July 2026. Literacy stays, softened. Pure research is exempt; real-world testing is not covered by the pre-market exemption.

### Cited findings
- [Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng) (published 24 July 2026): Annex III systems from 2 December 2027, Annex I product systems from 2 August 2028. Only machinery moved to Section B; medical devices stay in Section A.
- New Article 4: measures "to support the development of AI literacy"; no guaranteed level for individuals. Same source.
- Research exemptions: [Article 2(6) and 2(8)](https://artificialintelligenceact.eu/article/2/).
- High-risk status of AI devices depends on third-party conformity assessment under MDR/IVDR, says [Bitkom, October 2026](https://www.bitkom.org/sites/main/files/2026-11/bitkom-stellungnahme-ki-in-medizinprodukten-risikobasiert-statt-pauschal-regulieren.pdf); it also reports a German non-paper asking for at least class IIa for AI devices.

### Inferences
- A chart-search or summary tool that is neither a medical device nor on the Annex III list is probably not high-risk. Annex III was not re-read.

## Medical device law

### Takeaway
Intended purpose decides. Summarisers are a grey area with published opinions on both sides.

### Cited findings
- MDCG 2019-11 rev. 1 (June 2025): simple search and record storage are no devices; NLP search that contributes to a medical purpose is not "simple search"; software that creates or modifies medical information may be a device if a medical purpose governs it. [MDCG](https://health.ec.europa.eu/document/download/b45335c5-1679-4c71-a91c-fc7a4d37f12b_en?filename=mdcg_2019_11_en.pdf)
- Blatti (BioLaw Journal 4/2025) suggests classing summarisation tools as devices, case by case. [PDF](https://teseo.unitn.it/biolaw/article/download/3927/4240/11665) Gilbert: could be argued either way, regulator unlikely to class them as devices. [Citeline](https://insights.citeline.com/MT154472/AI-Clinical-Summarization-Tools-Sit-In-Regulatory-Grey-Area-Experts-Warn)
- Article 5(5) MDR in-house route: no transfer to another legal entity, quality management, no equivalent product, public declaration, experience review. [MDR](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02017R0745-20250110)
- MDR revision: Council compromise of 31 August 2026 moves devices to AI Act Annex I Section B. [ST 12273/26](https://data.consilium.europa.eu/doc/document/ST-12273-2026-INIT/en/pdf) Trilogue expected end of 2026 or early 2027. [Ärzteblatt, 14 July 2026](https://www.aerzteblatt.de/news/neufassung-der-eu-medizinprodukteverordnung-trilog-konnte-zum-jahresende-starten-35673475-b8f6-4920-a539-ad74c9da9ca2)

## EHDS
- General application 26 March 2027; secondary use (Chapter IV) 26 March 2029; some categories such as genomic data 26 March 2031. EHR data are a minimum category (Art. 51(1)(a)). [Regulation (EU) 2025/327](https://eur-lex.europa.eu/eli/reg/2025/327/oj/eng)
- The federal government says the EHDS opt-out does not extend to own-data research under draft § 24; the Bundesrat had asked. [21/8279](https://dserver.bundestag.de/btd/21/082/2108279.pdf)
- Inference: hospitals as data holders will need to find and deliver record data, which gives document structuring a second use.

## Contradictions and caveats
- Web pages still surface the GDSG NW; the repealing article was read directly. That DSG NRW plus GDNG fill the gap for UKM is an inference.
- Sources on AI Act and MDR conflict because two procedures run in parallel: the omnibus (adopted) kept devices in Section A, the MDR revision (pending) would move them.
- GeDIG: no adoption found by 22 November 2026; this rests on searches.
- SRB interprets Regulation 2018/1725, not the GDPR itself.
- Anonymizer figures differ by version; 81 of 100 belongs to the preprint. Memorisation tests prompted with training records and do not describe retrieval-only use.
- The Gilbert interview shows no date (context about 2024).

## Gaps
- UKM or University of Münster rules on ChatGPT; DFG, Deutscher Ethikrat, BSI documents: not found or not read.
- BfArM position on LLM summarisers: none found. Workum et al. (SSRN 2025) not read.
- Ethics committee rules for anonymised or retrospective data: keyword search of the [2026 applicant guide](https://www.aekwl.de/fileadmin/user_upload/aekwl/ethik/Leitfaden_fuer_Antragstellende_AEKWL.pdf) found none.
- In-house and Rule 11 changes in the MDR proposal; EDPB draft Guidelines 02/2026: primary texts not read.
- No documented German hospital ChatGPT incident. The search budget ended before further queries.
