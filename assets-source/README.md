# Source for the published PDFs

The deck and the CV are served from `public/assets/pdf/` as compiled PDFs.
Their LaTeX sources used to live outside this repository and outside any
repository — one disk, no history. If that folder had been lost, neither
document could have been edited again, only retyped.

They live here now.

```
assets-source/
  pitch-deck/     main.tex, oxido_theme.sty, sections/, Makefile
  cv/             cv.tex
```

## Rebuilding

**Deck** — `lualatex` twice (the footline's progress bar needs the page
count from the first pass):

```sh
cd assets-source/pitch-deck
lualatex -interaction=nonstopmode main.tex
lualatex -interaction=nonstopmode main.tex
cp main.pdf ../../public/assets/pdf/oxiedo_pitch_deck.pdf
```

**CV** — `pdflatex`, also twice:

```sh
cd assets-source/cv
pdflatex -interaction=nonstopmode cv.tex
pdflatex -interaction=nonstopmode cv.tex
cp cv.pdf ../../public/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf
```

## After rebuilding either one

Bump its version constant in `src/components/headers/Header3.tsx`
(`CV_VERSION`) or `src/components/common/cv/CVBusiness.tsx`
(`DECK_VERSION`). The filenames are stable so existing links keep working;
the query string is what stops a browser serving the copy it cached.

## Checking the deck before shipping it

Two things worth verifying, both learned the hard way:

1. **Overfull boxes.** `grep "Overfull \\vbox" main.log`. Content can extend
   past the text area and still render, so a clean-looking PDF is not proof.
2. **Render and look.** Measuring text positions produces false positives —
   `\rowcolor` cells and `✓` glyphs report a zero text-matrix origin, which
   reads as an overflow that is not there. `pdftoppm -png -r 115 main.pdf out`
   and open the pages.
