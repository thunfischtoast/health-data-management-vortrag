# Hospital data management in the age of AI

Slides for a talk by Christian Römer, Clinic for Radiology, University Hospital Münster. They are built with reveal.js 6.0.2, which is included in `vendor/reveal/`. The talk needs no internet connection and no build step.

## Start

Double-click `index.html`. Use a current version of Edge, Chrome or Firefox and press F11 or F for full screen.

| Key | Action |
| --- | --- |
| Space, right arrow | Next step or slide |
| Left arrow | Previous step or slide |
| Down arrow | Next backup slide (after the closing slide, press right once); on slide 13 the optional technical slides T1 to T9 |
| S | Speaker view with notes |
| Esc | Slide overview |
| B | Black screen |
| G | Go to slide |

The browser must allow pop-ups for the speaker view. The notes hold the full citation, the study design and the caveats for every figure.

The address shows the position as `#/slide/backup/step`, all counted from zero. `#/7` is the slide with the four verbs without a click, and `#/7/0/2` shows it after three clicks.

## Website

`.github/workflows/pages.yml` publishes the deck to GitHub Pages on every push to `main`. The site holds only `index.html`, `css/`, `js/`, `assets/` and `vendor/`. The two group photos are replaced by `tools/pages/photo-placeholder.jpg`, and the build fails if any other JPEG reaches the site. To switch the site on once, set Settings, Pages, Source to "GitHub Actions".

## PDF export

Open `index.html?print-pdf` in Edge or Chrome and print to PDF with background graphics switched on and margins set to none. Each step becomes one page.

## Edit

- `index.html` contains all slides, in order, with the notes in `<aside class="notes">`.
- `css/ukm.css` contains the UKM layout and one block per slide.
- `js/scenes.js` adds the logo, header and slide number, and computes the current step. The name and date in the header are in `HEADER` at the top of the file.

A slide declares its number of clicks with `data-steps="3"`. The script writes the current step to `data-step` and all steps reached so far to `data-reached`. Elements with the class `s2` appear at step 2, and passages with the classes `hl m2` are highlighted at step 2. Other states are CSS rules on the two attributes.

A vertical stack with `data-prefix="T"` keeps the number of its first slide and numbers the slides below it T1, T2 and so on; the backup stack at the end uses B. Close each stack with `<!-- end stack -->`.

Keep each `<section>` tag on one line, because `tools/shots.sh` reads the slides from there.

## Screenshots

`tools/shots.sh [first] [last]` runs in Git Bash and writes one image per step to `shots/` with Edge headless. The two arguments are slide indices and start at zero.

## Sources and image rights

The research notes in `research_notes/` hold the evidence behind each figure. All patients, letters and values on the slides are invented.

The two excerpts from Dedalus DIREKT in `assets/vendor-quote/` are used as quotations with the source named on the slide. The group photos in `assets/img/` and `templates/` are for the talk only and must not be published. The website shows a placeholder instead, but the repository is public, so the files are visible there. The logos belong to UKM and RACOON.
