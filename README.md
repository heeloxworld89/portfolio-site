# raadh.me

Personal site of Rokib Al Dhin Raadh, Founder & CEO of OXIEDO.
React + TypeScript + Vite, pre-rendered to static HTML at build time, deployed on Vercel.

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/Home.tsx` | The 30-second read: company, research, recognition, track record |
| `/research` | `src/pages/Research.tsx` | ORMAS: preprint, cite, plain-English summary, reviewer tables |
| `/recognition` | `src/pages/Recognition.tsx` | Every decided outcome |
| `/work` | `src/pages/Work.tsx` | OXIMO, Black Bloxie, the five ventures |
| `/about` | `src/pages/About.tsx` | Biography, education, certificates |
| `/press` | `src/pages/Press.tsx` | Bios in three lengths, key facts, downloads |

## Where things live

- **`src/data/facts.ts` — every name, number, date and link.** Change a figure here and
  every page, the structured data, `llms.txt` and the press kit follow. Research figures
  must match the ORMAS preprint.
- `src/data/routes.ts` — page titles, descriptions, preview images and JSON-LD.
- `src/components/site/blocks.tsx` — shared building blocks (section headers, stat tiles,
  recognition cards, timeline, paper card, contact band).
- `src/components/layout/` — sidebar, mobile menu, footer.
- `src/components/viz/` — the three diagrams.
- `src/styles/site.scss` — site styles; the colour palette is in `public/assets/scss/custom.scss`.

## Commands

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, client build, server build, pre-render
npm run lint
```

`npm run build` renders every route to `dist/<route>.html` with its own title, meta tags and
JSON-LD, and generates `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt` from the
facts file (`scripts/prerender.mjs`).

## Link-preview images

`public/og/*.png` are 1200×630 cards. After changing headline facts, regenerate them with
`node scripts/og-images.cjs` (needs Playwright; see the note at the top of the script).

## CV and deck

LaTeX sources are in `assets-source/`; see `assets-source/README.md`. After recompiling,
bump the `?v=` date on `links.cv` or `links.deck` in `src/data/facts.ts`.
