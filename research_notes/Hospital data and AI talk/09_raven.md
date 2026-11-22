# 09 RACOON-RAVEN: code facts for the walkthrough

Read from `F:\workspace\racoon-raven`, main at a7fa7ec (2026-11-22). Nothing was run. Paths below: `be/` = `backend/racoon_raven/`, `fe/` = `frontend/src/`.

Not opened: `docs/reference/sample_mint_lesion_report.xml` (not documented as synthetic), `docs/reference/RACOON-RAVEN.pptx`. `samples/lung-ct/` is documented as "Invented data for a demo ... No real person, no real report." (`samples/lung-ct/README.md:3`).

## What it does

| Concept | Plain words |
| --- | --- |
| Study | One research project, holds everything else |
| Timepoints | The visit plan (T0 baseline, T1 follow-up) |
| Template | The empty form: questions, types, units, allowed answers, and a hint for the model per question |
| Patients | The cohort list with pseudonyms, imported or typed in |
| Input | One uploaded table (CSV or XLSX). One column may hold whole reports or letters |
| Mapping | "Column A answers question B"; "NSCLC" means option C; which column is the report text |
| Record | One filled form: one patient, one timepoint, one template |
| Proposal | What one source says about one question. Never the final value by itself |
| State | proposed, auto accepted, accepted, corrected, rejected |
| Conflict, flag | Sources disagree; or a proposal has a defect (quote not found, value needs mapping, invalid value) |
| Review | A person accepts, corrects, rejects or reopens each field |
| Export | CSV/XLSX, three columns per question: value, state, source |

Pipeline: upload (file kept in object storage, SHA-256, every row stored as raw cells, `be/services/inputs.py:181-209`) → mapping wizard with suggestions (`be/services/input_suggest.py`) → background job: LLM first, then matching and ingestion row by row (`be/services/input_processing.py:131-163`) → proposals (`be/services/ingest.py:60-90`) → field state (`be/services/field_state.py:75-106`) → review (`be/services/review.py:53-103`) → export (`be/services/export.py`).

Row matching: pseudonym exact, then patient ID exact, and even an exact hit is refused if birth date, sex or family name contradict it. Fuzzy name matches are only suggestions for a person (`be/services/input_matching.py:97-107, 199-208`). Timepoint: code, date window or fixed (`:110-141`).

## The chain of proof, link by link

1. **Proposal, never a direct value.** One row, one question, one method (`mapping` or `llm`) gives one proposal with value, raw text, location and flags (`be/db/models.py:432-471`).
2. **Source cell.** A mapped value stores `{column, row}` and the raw cell text (`ingest.py:363-381`).
3. **Quote and span.** The model must return `{value, quotes[]}` per question, verbatim and contiguous (`be/llm/schema.py:17-33`, `be/strategies/prompt.py:5-20`). No confidence score exists.
4. **Quote check by the server.** `locate()` (`be/llm/quotes.py:4-33`) does a substring search after collapsing whitespace and folding case. It is **exact apart from case and whitespace, not fuzzy**. The first occurrence wins. Offsets refer to the original text, in Unicode code points on both sides (`fe/lib/review/segments.ts:7-9`).
5. **Flag.** If **no** quote is found (or none was given) the proposal gets `quote_not_found` (`ingest.py:225-237`). One found quote is enough; others are marked "not found" individually.
6. **Type check.** Values are coerced to number, date, yes/no or an allowed code. Unknown codes from the model become `invalid_value` (`be/services/coercion.py:22-120`, `ingest.py:222-224`).
7. **Automatic acceptance.** All unflagged proposals agree **and** at least one is a mapped cell (`field_state.py:98-105`). A model-only value stays `proposed`.
8. **Conflict.** Unflagged proposals differ. The field shows the oldest value and stays open; mapping leads at the same instant (`field_state.py:84-87, 97-106`). A human decision is never overwritten; later disagreement raises a conflict again (`:88-94`).
9. **Open fields.** Conflict, or only proposed, or any flagged proposal while undecided (`be/services/open_fields.py:12-32`). A record cannot be marked reviewed while one is open (`review.py:150-157`); it closes itself when none is left (`:171-180`) and reopens on new evidence (`ingest.py:340-342`).
10. **History.** Every state or value change writes a `FieldEvent` with from, to, value, user, time, reason (`models.py:474-492`; `ingest.py:277-289`; `review.py:83-92`). User is empty for the import.
11. **Trace of model calls.** Each run stores model, host, strategy and version, template version, SHA-256 of the text, status; each call stores messages, JSON schema, raw answer, error, duration, tokens (`models.py:288-331`, `be/llm/extractor.py:38-66, 146-176`). A run is reused only if text, strategy, version, template version and model are the same (`:119-144`).
12. **Reference date.** Sources can be sorted by the distance in days between document date and a reference date (`fe/lib/review/sourceOrder.ts`). The export can settle open conflicts with the closest document (`export.py:295-347`).
13. **Export source.** `__source` names the document ID, else `filename:row`, or `manual` (`be/services/export_table.py:159-171`).

## Limits, stated honestly

- A found quote proves that the words are in the text. It does **not** prove that they support the value. "38 mm" quoted for value 55 would pass. Short quotes ("13 mm") may be marked at the wrong place, because the first occurrence is taken.
- **One mapped cell alone auto-accepts.** "All sources agree" includes one source (`field_state.py:98-105`). Nobody has looked, and the cell may be wrong.
- **What the model misses leaves no trace on the form.** A null answer makes no proposal (`ingest.py:219`), the field is empty and does not count as open. A record can become "reviewed" with missed values. Completeness is not checked.
- **Bulk accept** takes every agreeing, unflagged proposed field, including model-only values, without showing them (`review.py:105-148, 254-264`). It is visible only as `review:bulk_accept` in the stored reason, and the UI history does not show the reason (`fe/lib/records/format.ts:68-72`).
- A model-made conversion (5,2 cm to 52 mm) is not recomputed.
- History does not store which proposal was chosen (`models.py:474-492`); the field keeps only the current one, without a foreign key (`:425`). Reprocessing updates or deletes proposals in place (`ingest.py:176-195`). Runs stay. If the proposal behind an accepted value is gone, `__source` is empty.
- Record-level closing and reopening is not logged as an event (`review.py:163-169`). "Append-only" is a convention; I found no database trigger.
- The Trace is on the input page per row; the record page has no link from a proposal to its model call (`llm_run_id` is not in `ProposalOut`, `be/services/records.py:122-135`). Not recorded: retries, whether the fallback `json_object` was used, model weights hash, model reasoning.
- Blank rows are dropped before numbering (`be/services/cohort_file.py:90`, `inputs.py:204`), so row numbers can be off in files with gaps. Dates and whole numbers are normalised first (`:76-86`).
- The original file is stored, but no code reads it back; the viewer sees stored cells. The hash is not rechecked. The PDF or ORBIS page behind a letter is out of reach: the chain ends at the uploaded row.
- The export has no quote, span, reviewer or model columns, and it includes unreviewed values (with their state). The FHIR QuestionnaireResponse holds only auto accepted, accepted and corrected values, no provenance, and status is always `in-progress` (`be/services/responses.py:20, 48, 79-83`).
- `auto accepted` and `accepted` share the same green tag; only the word differs (`fe/routes/studies/[id]/records/[recordId]/+page.svelte:720-726`). The design brief asked for distinct markers (`docs/design/frontend-brief.md:19`).

## LLM, data flow, privacy

Two strategies: `single_call` (default) and `per_group` (one call per section), both version 2 (`be/strategies/`). One OpenAI-compatible provider from server config, temperature 0, JSON schema output with fallback (`be/llm/client.py:96-117`). No built-in default provider or model: without both, extraction is off (`be/settings.py:26-37`). Timeout 120 s, 2 calls at once. Local example: qwen3.5-9b.

Where data goes: Postgres, Garage (S3) and Keycloak on localhost (`docker-compose.yml`), report text to whatever `RR_LLM_BASE_URL` names. Local operation works, but nothing enforces it. The **whole text cell is sent unchanged**; there is no de-identification, and text plus prompt are stored in the trace. Pseudonyms are per study, but names, birth dates and IDs are kept, and the **export contains patient ID, name and birth date** (`export.py:361-377`).

Login: Keycloak/OIDC, RS256 tokens (`be/auth/jwt.py`). No roles or study membership: "every authenticated user reaches everything" (`HANDOFF.md`). Fonts load from Google (`fe/lib/styles/tokens.css:6`).

## FHIR and templates

Template = FHIR R4 `Questionnaire` JSON, filled record = `QuestionnaireResponse`; hint and unit as extensions (`be/fhir/constants.py`). Stored as JSONB in Postgres; the HIVE adapter raises `NotImplementedError` (`be/main.py:49-52`). Types: text, number, date, boolean, choice, group. Only template in the repo: invented CT thorax staging, 11 questions, 4 groups. **No RACOON-COMBINE template** (searched tracked text files, not the binary/XML ones).

## Upstream RAVEN

[github.com/thunfischtoast/raven](https://github.com/thunfischtoast/raven) (page and README read; `gh` is not installed): "Radiological Analysis and Validation Engine with NLP", MIT, one commit. Research tool to extract fields from free-text radiology reports and rate them; Ollama or OpenRouter, single API key, warns against real patient data without extra protection. Paper: Römer et al., "RAVEN: An open-source assessment framework for automated entity extraction in structured radiology reporting", Informatics in Medicine Unlocked 63, 101755 (2026), [doi](https://doi.org/10.1016/j.imu.2026.101755). Search snippet only (publisher page 403): two medical researchers rated 5,355 items, 11 error categories, Mistral-24B beat Llama-70B by 22.6 %. Not RACOON-RAVEN results.

RACOON-RAVEN is "a full re-implementation. Only concepts are taken over" (`docs/superpowers/specs/2026-09-10-racoon-raven-scope-design.md`, section 1). Inherited: schema from a template, strategies as code, quote per field, "false only when negated", per-field human rating, full trace. Dropped: fuzzy quote matching, JSON repair. New: studies, timepoints, cohort matching, spreadsheets, proposals, conflicts, FHIR, OIDC, exports.

## Screens

Best five: (1) **Record page** `/studies/{id}/records/{recordId}`; (2) **Conflicts** `/studies/{id}/conflicts`; (3) **Mapping wizard** `/studies/{id}/inputs/{inputId}`; (4) **Trace** on the same input page; (5) **Records list** `/studies/{id}/records`.

Best interaction: on the record page click a field. Its Excel cell gets an aqua border and its quote turns from yellow to solid aqua and scrolls into view; clicking a marked passage selects the field (`fe/lib/components/SourcePane.svelte:63-71, 108-144, 194-227`).

Layout: 224 px sidebar, 48 px top bar, tabs with aqua underline, content 1160 px; record page two columns with draggable divider, source left (sticky), white cards right, 1 px borders, 6 px radius. Montserrat, IBM Plex Mono for IDs. Tokens: JSON. The three-column layout of the design brief was not built. No screenshots or mocks are tracked.

## Demo setup

`cp .env.example .env`, `just infra-up`, `just install`, `just migrate`, `just dev`; frontend on localhost:5173, demo user `annotator` in the dev realm. No seed script: click path in `samples/lung-ct/README.md`. Needs a local model (llama.cpp/Ollama); measured there: about 7 s per report without thinking, 90 s with.

## Maturity

191 commits, 2026-09-10 to 2026-11-22. I counted 458 backend test functions, 187 frontend test cases, 7 E2E tests; I did not run them. Coverage gate 80 % (`justfile`). **No extraction accuracy is recorded in the repo.** HANDOFF (2026-09-23, partly outdated): E2E not run in two sessions. Not built: PDF/DOCX, zip upload, FHIR bundle and HIVE export, FHIR ingestion, Mint import/export, row dedup (design and plan only).

## Speaker's notes versus code

- "Insert unstructured letters": only as text in a CSV/XLSX column, or one pasted report (with a provider configured). **No PDF, DOCX or scan**: the parser refuses anything else (`cohort_file.py:30-37`), the design lists PDF and DOCX as out of scope.
- "Excel tables": yes, one sheet per input, 10,000 rows, 500 columns.
- "Link with a structured report template": yes, a FHIR Questionnaire; a person confirms the mapping.
- "System fills it automatically": it fills proposals. Text-only values wait for a person.
- "UI shows where a value comes from": yes, down to cell or marked passage in the stored row, not in the original document or in ORBIS. No ORBIS connection.

## Walkthrough (invented patient LC-009 of the sample set)

Data: Excel row 10 says tumour size 48 mm, the report says 38 mm. Model answers below are the expected ones from the sample README; I did not run the model.

1. **The question and the form.** Empty template with hint "largest axial diameter in mm, no lymph nodes, no prior values".
2. **Drop in the table.** Columns link to questions; one column is marked "report text".
3. **Values arrive with evidence.** Form fills; date agrees in cell and text, so auto accepted; contrast and cT stage are LLM, proposed.
4. **Click a value, see the proof.** "T2" lights up "cT2a"; show the variant "quote not found" as a staged example.
5. **Sources disagree.** Cards "48 mm: Excel, row 10" and "38 mm: report". A person accepts 38 mm; history records it.
6. **Export and replay.** Value 38, state accepted, source `baseline.xlsx:10`. Then the Trace: exact question to the model, exact answer. Limit: the words are proven, the meaning is judged by a person.
