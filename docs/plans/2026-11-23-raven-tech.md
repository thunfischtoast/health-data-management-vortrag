# Plan: optional technical stack on RACOON-RAVEN

Approved 2026-11-23. Source: RAVEN `main` a7fa7ec, read, not run. Facts checked in code: `strategies/prompt.py`, `llm/quotes.py`, `llm/client.py`, `llm/extractor.py`, `services/ingest.py`, `services/field_state.py`, `services/review.py`, `fhir/scoring.py`, `fhir/constants.py`, `services/input_matching.py`, `frontend/src/lib/review/keymap.ts`, `docker-compose.yml`; counts by command.

1. `js/scenes.js`: `slideNumber` handles a stack with `data-prefix`. Its first child keeps the main number (position of the stack), the others get prefix + index (T1 ...). The backup stack keeps B1 ...
2. `index.html`: wrap slide 20 (record page) in `<section class="stack" data-prefix="T">` with `<!-- end stack -->` (needed by `tools/shots.sh`). Add T1 to T9, chapter 3, `data-visibility="uncounted"`:
   T1 under the hood, T2 architecture, T3 upload to export, T4 prompt, T5 evidence check, T6 data model, T7 field states, T8 matching, T9 review and gaps.
3. `css/ukm.css`: one block per new slide type (`.code`, `.arch`, `.steps`, `.tables`, `.states`, `.match`, `.gaps`).
4. `docs/speaker-guide.md`: Click/Notes/Background per T slide, with file:line references into RAVEN.
5. `README.md`: down arrow on slide 20 opens the technical stack.
6. Check: screenshots of slides 19 to 21 (all steps, all T slides), hash `#/19` still slide 20, PDF print not broken.
