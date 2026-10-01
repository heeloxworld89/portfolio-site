// Single source for the facts the profile pages repeat.

export const CV_VERSION = "2026-10-01e";

export const links = {
  cv: `/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf?v=${CV_VERSION}`,
  preprint: "https://zenodo.org/records/21730363",
  doi: "https://doi.org/10.5281/zenodo.21730363",
  code: "https://anonymous.4open.science/r/ormas-EB73/README.md",
  archive: "https://drive.google.com/file/d/1CDaMIpTZ_8Mkot9D-O7JU29mDopq_Bdl/view",
  oximoCode: "https://anonymous.4open.science/r/oximo-5C73/README.md",
  deepmath: "https://deepmath-conference.com/",
  oxiedo: "https://oxiedo.com",
  invest: "https://oxiedo.com/invest",
  deck: "/assets/pdf/oxiedo_pitch_deck.pdf",
  techPaper: "/assets/pdf/oxiedo_academic_research_paper.pdf",
  whitepaper: "/assets/pdf/oxiedo_investor_whitepaper.pdf",
  orcid: "https://orcid.org/0009-0003-1178-5296",
  github: "https://github.com/raad-x",
  x: "https://x.com/Raad_X_",
  substack: "https://rokibraadh.substack.com/",
  youtube: "https://www.youtube.com/@rokibraadh",
  founderEmail: "raadh@oxiedo.com",
  email: "raadxbusiness9@gmail.com",
  neurips: "https://trustworthy-ai-for-good.github.io/",
};

export type NewsItem = { date: string; kind: string; title: string; body: string; href?: string };

export const news: NewsItem[] = [
  {
    date: "30 Sep 2026", kind: "Peer review",
    title: "ORMAS stability paper accepted at DeepMath 2026 after double-blind review",
    body: "“Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics” was accepted after double-blind review for poster presentation at DeepMath 2026, the Conference on the Mathematical Theory of Deep Neural Networks, Ohio State University, 29–30 October.",
    href: links.deepmath,
  },
  {
    date: "Sep 2026", kind: "Reviewer",
    title: "Named a reviewer for the NeurIPS 2026 Trustworthy AI for Good workshop",
    body: "Raadh reviews submissions on mechanistic interpretability, attribution, auditing and post-deployment monitoring, the problems ORMAS was built to address, for the NeurIPS 2026 workshop in Paris.",
    href: links.neurips,
  },
  {
    date: "Sep 2026", kind: "Company",
    title: "OXIEDO accepted to 1752vc Ignite from the top 1% of applicants",
    body: "1752vc placed OXIEDO in its Ignite cohort from the top 1% of applicants, and the equity-free Freshmango programme offered a place after a single interview. Raadh is holding in the final round of The Bridge (Entrepreneur First, San Francisco) after two interview rounds.",
  },
  {
    date: "25 Sep 2026", kind: "Community",
    title: "Joins Cohere Labs’ Open Science Community, cited for “remarkable initiative in ML safety and auditability”",
    body: "Cohere’s research lab welcomed him into its Open Science Community, citing his solo development of ORMAS across 383 experiments.",
  },
  {
    date: "Sep 2026", kind: "Competition",
    title: "IARCO 2026 finalist, from 500+ submissions across 60 countries",
    body: "Selected for the final stage of the International Academic Research Competition from more than 500 submissions across 60 countries.",
  },
  {
    date: "1 Aug 2026", kind: "Publication",
    title: "Full ORMAS paper and code released openly",
    body: "The full paper and a 36-page supplementary are public on Zenodo (DOI 10.5281/zenodo.21730363), with code that reproduces all 383 experiments, including the 80.3% vs 10.0% recovery after a layer is destroyed.",
    href: links.preprint,
  },
  {
    date: "Jul 2026", kind: "Recognition",
    title: "ORMAS ranked first in the Cosmos Institute review cycle",
    body: "The ORMAS application ranked highest of every application in its cycle; Cosmos invited it to its technical track.",
  },
];

export const publications = [
  {
    authors: "R. A. D. Raadh",
    title: "Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics",
    venue: "Accepted after double-blind review, DeepMath 2026: Conference on the Mathematical Theory of Deep Neural Networks, Ohio State University, 29–30 Oct 2026. Poster.",
    year: "2026",
    links: [{ label: "Conference", href: links.deepmath }],
  },
  {
    authors: "R. A. D. Raadh",
    title: "ORMAS: Neural Architectural Transparency Enables Autonomous Self-Correction",
    venue: "Preprint, Zenodo, 1 Aug 2026. Full paper, 36-page supplementary and code reproducing all 383 experiments. DOI 10.5281/zenodo.21730363.",
    year: "2026",
    links: [
      { label: "Paper", href: links.preprint },
      { label: "Code", href: links.code },
      { label: "Results archive", href: links.archive },
    ],
  },
  {
    authors: "R. A. D. Raadh",
    title: "OXIMO/AX09: Autonomous LLM-Dependent Commerce. A twelve-month controlled ablation study",
    venue: "Technical report, 2026. Twelve-month controlled field study on a live UK company (Black Bloxie LTD): removing OXIMO cut output by 91%.",
    year: "2026",
    links: [{ label: "PDF", href: links.techPaper }, { label: "Whitepaper", href: links.whitepaper }],
  },
];

// title/description drive the tab, search results and link previews; image is
// the share card rendered by assets-source/og/make.cjs.
export const pages = {
  "/": {
    title: "Rokib Al Dhin Raadh, 18 — Founder of OXIEDO, Inventor of ORMAS",
    description:
      "Rokib Al Dhin Raadh, 18, is the founder and CEO of OXIEDO and inventor of ORMAS, a self-repairing neural network. DeepMath 2026 paper; NeurIPS 2026 reviewer.",
    image: "/og/home-v3.jpg",
    imageAlt: "Rokib Al Dhin Raadh, 18-year-old founder and CEO of OXIEDO and inventor of ORMAS",
  },
  "/research": {
    title: "ORMAS: The Self-Repairing Neural Network — Rokib Al Dhin Raadh",
    description:
      "ORMAS repairs its own failures in training: 80.3% accuracy after a layer is destroyed vs 10.0% for a baseline. Stability paper accepted at DeepMath 2026.",
    image: "/og/research-v3.jpg",
    imageAlt: "ORMAS, the self-repairing neural network, recovers to 80.3% after a layer is destroyed; a parameter-matched baseline stays at 10.0%",
  },
  "/work": {
    title: "OXIEDO: Auditable AI Training — Founded by Rokib Al Dhin Raadh",
    description:
      "OXIEDO, founded 2023 by Rokib Al Dhin Raadh, licenses ORMAS on-premise to regulated industries with a tamper-evident record of every weight change in training.",
    image: "/og/work-v3.jpg",
    imageAlt: "OXIEDO, founded by Rokib Al Dhin Raadh, and the Model Change Record: a tamper-evident log of every weight change in training",
  },
  "/about": {
    title: "About Rokib Al Dhin Raadh — Founder & CEO of OXIEDO",
    description:
      "Rokib Al Dhin Raadh, 18, self-taught founder of OXIEDO. DeepMath 2026 paper, NeurIPS 2026 reviewer, 1752vc top 1%, seven MIT Open Learning programmes.",
    image: "/og/about-v3.jpg",
    imageAlt: "Rokib Al Dhin Raadh, founder and CEO of OXIEDO and inventor of ORMAS",
  },
  "/evidence": {
    title: "Evidence: every claim, with its source — Rokib Al Dhin Raadh",
    description:
      "Each claim about Rokib Al Dhin Raadh, 18, founder of OXIEDO and inventor of ORMAS, with its source: DOI, ORCID, code, MITx records, and documents on request.",
    image: "/og/about-v3.jpg",
    imageAlt: "Rokib Al Dhin Raadh, founder and CEO of OXIEDO and inventor of ORMAS",
  },
} as const;

export type PagePath = keyof typeof pages;
