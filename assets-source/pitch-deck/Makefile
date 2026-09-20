# ============================================================
#  OXIDO Pitch Deck — Makefile
#  Usage: make (to build), make clean (to remove artifacts)
# ============================================================

MAIN     = main
COMPILER = lualatex
FLAGS    = -interaction=nonstopmode -halt-on-error

.PHONY: all clean

all: $(MAIN).pdf

$(MAIN).pdf: $(MAIN).tex oxido_theme.sty sections/*.tex
	$(COMPILER) $(FLAGS) $(MAIN).tex
	$(COMPILER) $(FLAGS) $(MAIN).tex

clean:
	rm -f *.aux *.log *.nav *.out *.snm *.toc *.vrb *.pdf
