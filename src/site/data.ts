// Single source for the facts the profile pages repeat.

export const CV_VERSION = "2026-09-30c";

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
  email: "raadxbusiness9@gmail.com",
  companyEmail: "rokib@blackbloxie.com",
  neurips: "https://trustworthy-ai-for-good.github.io/",
};

export type NewsItem = { date: string; kind: string; title: string; body: string; href?: string };

export const news: NewsItem[] = [
  {
    date: "30 Sep 2026", kind: "Peer review",
    title: "Stability paper accepted at DeepMath 2026",
    body: "“Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics” was accepted after double-blind review for poster presentation at the Conference on the Mathematical Theory of Deep Neural Networks, Ohio State University, 29–30 October.",
    href: links.deepmath,
  },
  {
    date: "Sep 2026", kind: "Service",
    title: "Programme committee, NeurIPS 2026 Trustworthy AI for Good",
    body: "Reviewing submissions on mechanistic interpretability, attribution, auditing and post-deployment monitoring for the NeurIPS 2026 workshop in Paris.",
    href: links.neurips,
  },
  {
    date: "25 Sep 2026", kind: "Community",
    title: "Joins Cohere Labs’ Open Science Community",
    body: "Welcomed into the community of Cohere’s research lab, which cited the solo development of ORMAS across 383 experiments as “remarkable initiative in ML safety and auditability.”",
  },
  {
    date: "Sep 2026", kind: "Competition",
    title: "Finalist, IARCO 2026",
    body: "Selected for the final stage of the International Academic Research Competition from more than 500 submissions across 60 countries.",
  },
  {
    date: "Sep 2026", kind: "Company",
    title: "OXIEDO accepted to 1752vc Ignite and Freshmango",
    body: "A place in 1752vc’s Ignite cohort from the top 1% of applicants, and an offer from the equity-free Freshmango programme. He is holding in the final round of The Bridge (San Francisco).",
  },
  {
    date: "1 Aug 2026", kind: "Publication",
    title: "ORMAS preprint released",
    body: "The full paper, a 36-page supplementary and code reproducing all 383 experiments, published openly on Zenodo.",
    href: links.preprint,
  },
  {
    date: "Jul 2026", kind: "Recognition",
    title: "Ranked highest in the Cosmos Institute grant cycle",
    body: "The ORMAS application ranked first in its cycle; Cosmos invited a resubmission to its forthcoming technical track.",
  },
];

export const publications = [
  {
    authors: "R. A. D. Raadh",
    title: "Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics",
    venue: "DeepMath 2026, Conference on the Mathematical Theory of Deep Neural Networks. Accepted (poster), double-blind review.",
    year: "2026",
    links: [{ label: "Conference", href: links.deepmath }],
  },
  {
    authors: "R. A. D. Raadh",
    title: "ORMAS: Neural Architectural Transparency Enables Autonomous Self-Correction",
    venue: "Preprint, Zenodo. DOI 10.5281/zenodo.21730363.",
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
    venue: "Technical report, 2026.",
    year: "2026",
    links: [{ label: "PDF", href: links.techPaper }, { label: "Whitepaper", href: links.whitepaper }],
  },
];

// title/description drive the tab, search results and link previews; image is
// the share card rendered by assets-source/og/make.cjs.
export const pages = {
  "/": {
    title: "Rokib Al Dhin Raadh — 18-Year-Old Founder & CEO of OXIEDO",
    description:
      "Founder of OXIEDO and inventor of ORMAS, the self-repairing neural network. Stability proof accepted at DeepMath 2026; top 1% at 1752vc; ranked #1 by Cosmos Institute.",
    image: "/og/home-v2.jpg",
    imageAlt: "Rokib Al Dhin Raadh, 18-year-old founder and CEO of OXIEDO and inventor of ORMAS",
  },
  "/research": {
    title: "ORMAS: the neural network that repairs itself — Rokib Al Dhin Raadh",
    description:
      "ORMAS finds, fixes and records its own failures during training: 80.3% recovery after a layer is destroyed, against 10.0% for a standard network. Stability proof accepted at DeepMath 2026.",
    image: "/og/research-v2.jpg",
    imageAlt: "ORMAS recovers to 80.3% after a layer is destroyed; a standard network stays at 10.0%",
  },
  "/work": {
    title: "OXIEDO: an audit trail for what AI learned — Rokib Al Dhin Raadh",
    description:
      "OXIEDO licenses ORMAS to banks, hospitals and other regulated teams, with a tamper-evident record of every change a model makes in training. Plus OXIMO and the Black Bloxie study.",
    image: "/og/work-v2.jpg",
    imageAlt: "OXIEDO and the Model Change Record, a tamper-evident log of every weight change in training",
  },
  "/about": {
    title: "About Rokib Al Dhin Raadh — Founder & CEO of OXIEDO",
    description:
      "Self-taught, eighteen, and selected by DeepMath, NeurIPS, 1752vc and Cosmos Institute in one year. Recognition, story, MIT coursework and contact.",
    image: "/og/about-v2.jpg",
    imageAlt: "Rokib Al Dhin Raadh, founder and CEO of OXIEDO",
  },
} as const;

export type PagePath = keyof typeof pages;
