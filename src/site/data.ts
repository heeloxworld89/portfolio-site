// Single source for the facts the profile pages repeat.

export const CV_VERSION = "2026-11-03a";

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
  email: "raadh@oxiedo.com",
  neurips: "https://trustworthy-ai-for-good.github.io/",
  neuripsReviewers: "https://trustworthy-ai-for-good.github.io/#reviewers",
  openreview: "https://openreview.net/forum?id=kowltBZEIv",
  poster: "/deepmath",
  cohereTalk: "https://luma.com/p28sna3q",
  iarco: "https://iarco.org/2026-winners",
  monitor: "https://pypi.org/project/ormas-monitor/",
  monitorDocs: "https://oxiedo.github.io/ormas-monitor/",
  calendly: "https://calendly.com/raadh",
  posterPdf: "/assets/pdf/DeepMath2026_Poster_Raadh_A0.pdf?v=20261023",
  programme: "https://drive.google.com/file/d/1b_d27WosXvAi9IVP1lDwCBilCDe5oCGz/view",
  // Slides of the Cohere Labs talk, 2 Nov 2026 (37 slides, with both proofs and the corrections).
  cohereSlides: "/assets/pdf/Raadh_CohereLabs_2026_When_the_Update_Is_Not_a_Gradient.pdf",
  // YouTube link to the recording of the Cohere Labs talk. Leave "" until it
  // is published; every "Watch the talk" button and player appears once set.
  cohereRecording: "",
};

/** YouTube video id from a watch, youtu.be, shorts or embed URL ("" if none). */
export function youtubeId(url: string): string {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/(?:embed|shorts|live)\/)([\w-]{11})/);
  return m ? m[1] : "";
}

export type NewsItem = { date: string; kind: string; title: string; body: string; href?: string };

export const news: NewsItem[] = [
  {
    date: "2 Nov 2026", kind: "Invited talk",
    title: "Invited talk at Cohere Labs on the stability of self-repairing training",
    body: "Raadh gave an invited talk at Cohere Labs, “When the Update Is Not a Gradient: Input-to-State Stability of Self-Repairing Neural Network Training.” The talk covered why self-repairing training converges although its updates are not gradients, and where the proof stops. The slides are public; a recording will follow.",
    href: links.cohereTalk,
  },
  {
    date: "29 Oct 2026", kind: "Conference",
    title: "Poster presented at DeepMath 2026, The Ohio State University",
    body: "The paper was shown at the DeepMath 2026 poster session in Columbus, one of 41 papers accepted to the Conference on the Mathematical Theory of Deep Neural Networks. Prof. Zhihui Zhu of The Ohio State University printed and displayed the poster.",
    href: links.poster,
  },
  {
    date: "23 Oct 2026", kind: "Software",
    title: "ormas-monitor released on PyPI",
    body: "An open training monitor for PyTorch that implements the dead-channel result from the DeepMath paper as a runtime check, with per-layer alarms, optional repair and a tamper-evident log.",
    href: links.monitor,
  },
  {
    date: "30 Sep 2026", kind: "Peer review",
    title: "Stability paper accepted at DeepMath 2026 after double-blind review",
    body: "“Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics” was accepted after double-blind review at DeepMath 2026, the Conference on the Mathematical Theory of Deep Neural Networks, hosted by The Ohio State University. Raadh is the sole author.",
    href: links.openreview,
  },
  {
    date: "Sep 2026", kind: "Service",
    title: "Reviewer for the NeurIPS 2026 Workshop on Trustworthy AI for Good",
    body: "Raadh reviewed submissions on mechanistic interpretability, attribution, model auditing and post-deployment monitoring for the workshop, held at the Palais des Congrès de Paris on 12 December 2026. The workshop lists him among its reviewers.",
    href: links.neuripsReviewers,
  },
  {
    date: "Sep 2026", kind: "Company",
    title: "OXIEDO accepted to 1752vc Ignite from the top 1% of applicants",
    body: "1752vc accepted OXIEDO to its Ignite programme from the top 1% of applicants, and the Freshmango accelerator offered a place. Raadh was a finalist for The Bridge by Entrepreneur First in San Francisco. OXIEDO is in investment discussions with 500 Global and 1752vc.",
  },
  {
    date: "25 Sep 2026", kind: "Community",
    title: "Invited into the Cohere Labs research community",
    body: "Cohere Labs, the research lab of Cohere in Toronto, invited Raadh into its research community on the basis of ORMAS, which it described as showing “remarkable initiative in ML safety and auditability.”",
  },
  {
    date: "Sep 2026", kind: "Competition",
    title: "IARCO 2026 finalist, ranked 24th of 145 in the Junior division",
    body: "His research proposal, “Can a Machine’s Own Failure Record Be Read? Evaluating the Human Usability and Reliability of Automatically Generated Neural Network Incident Logs,” was ranked 24th of 145 in the Junior division of the International Academic Research Competition, which drew about 500 participants from 60 countries.",
    href: links.iarco,
  },
  {
    date: "1 Aug 2026", kind: "Publication",
    title: "ORMAS paper and code released",
    body: "The full paper and a 36-page supplement are public on Zenodo (DOI 10.5281/zenodo.21730363), with code that reproduces all 383 experiments.",
    href: links.preprint,
  },
  {
    date: "Jul 2026", kind: "Recognition",
    title: "Highest-ranked application in the Cosmos Institute review cycle",
    body: "The ORMAS application was the highest-ranked in its Cosmos Institute review cycle and was invited to the technical track.",
  },
];

/** Talks and presentations, newest last. Status ("Upcoming" / "Presented")
 *  is worked out at build time from the end date. */
export type Talk = {
  id: string; start: string; end: string; day: string; month: string; time?: string;
  kind: string; host: string; logo: string; title: string; where: string; note: string;
  href: string; hrefLabel: string;
  /** Slides (PDF), shown as a second link when present. */
  slides?: string;
};
export const talks: Talk[] = [
  {
    id: "deepmath-2026", start: "2026-10-29", end: "2026-10-29", day: "29", month: "Oct 2026",
    kind: "Poster", host: "DeepMath 2026", logo: "/assets/images/logos/deepmath.png",
    title: "Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics",
    where: "The Ohio State University, Columbus, OH",
    note: "Poster session of the Conference on the Mathematical Theory of Deep Neural Networks. One of 41 accepted papers.",
    href: "/deepmath", hrefLabel: "Poster and paper",
  },
  {
    id: "cohere-labs-2026", start: "2026-11-02", end: "2026-11-02", day: "2", month: "Nov 2026",
    kind: "Invited talk", host: "Cohere Labs", logo: "/assets/images/logos/cohere.svg",
    title: "When the Update Is Not a Gradient: Input-to-State Stability of Self-Repairing Neural Network Training",
    where: "Cohere Labs, Toronto, Canada",
    note: "Every convergence proof for gradient descent assumes each update is a gradient. Self-repairing training breaks that assumption and still converges. The talk covered why, and where the proof stops.",
    href: "https://luma.com/p28sna3q", hrefLabel: "Event page",
    slides: links.cohereSlides,
  },
];

export const publications = [
  {
    authors: "R. A. D. Raadh",
    title: "Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics",
    venue: "DeepMath 2026: Conference on the Mathematical Theory of Deep Neural Networks, The Ohio State University. Double-blind review; poster, 29 Oct 2026.",
    year: "2026",
    links: [
      { label: "OpenReview", href: links.openreview },
      { label: "Poster", href: links.poster },
      { label: "Conference", href: links.deepmath },
    ],
  },
  {
    authors: "R. A. D. Raadh",
    title: "ORMAS: Neural Architectural Transparency Enables Autonomous Self-Correction",
    venue: "Preprint, Zenodo, 1 Aug 2026. Full paper, 36-page supplement and code reproducing all 383 experiments. DOI 10.5281/zenodo.21730363.",
    year: "2026",
    links: [
      { label: "Paper", href: links.preprint },
      { label: "Code", href: links.code },
      { label: "Results archive", href: links.archive },
    ],
  },
  {
    authors: "R. A. D. Raadh",
    title: "OXIMO/AX09: Autonomous LLM-Dependent Commerce. A Twelve-Month Controlled Ablation Study",
    venue: "Technical report, 2026. Twelve-month controlled field study on a live UK company (Black Bloxie LTD): removing OXIMO cut output by 91%.",
    year: "2026",
    links: [{ label: "PDF", href: links.techPaper }, { label: "Whitepaper", href: links.whitepaper }],
  },
  {
    authors: "R. A. D. Raadh",
    title: "Can a Machine’s Own Failure Record Be Read? Evaluating the Human Usability and Reliability of Automatically Generated Neural Network Incident Logs",
    venue: "Research proposal, International Academic Research Competition (IARCO 2026). Finalist; ranked 24th of 145 in the Junior division.",
    year: "2026",
    links: [{ label: "Results", href: links.iarco }],
  },
];

// title/description drive the tab, search results and link previews; image is
// the share card rendered by assets-source/og/make.cjs.
export const pages = {
  "/": {
    title: "Rokib Al Dhin Raadh — AI Researcher, Founder of OXIEDO, Inventor of ORMAS",
    description:
      "Rokib Al Dhin Raadh, 18: AI researcher and founder of OXIEDO. Sole-authored DeepMath 2026 paper, NeurIPS 2026 workshop reviewer, invited talk at Cohere Labs.",
    image: "/og/home-v3.jpg",
    imageAlt: "Rokib Al Dhin Raadh, 18-year-old founder and CEO of OXIEDO and inventor of ORMAS",
  },
  "/research": {
    title: "ORMAS: The Self-Repairing Neural Network — Rokib Al Dhin Raadh",
    description:
      "ORMAS repairs its own failures during training: 80.3% accuracy after trained layers are zeroed, against 10.0% for standard training. Stability paper at DeepMath 2026.",
    image: "/og/research-v3.jpg",
    imageAlt: "ORMAS, the self-repairing neural network, recovers to 80.3% after trained layers are zeroed; standard training stays at 10.0%",
  },
  "/work": {
    title: "OXIEDO: Auditable AI Training — Founded by Rokib Al Dhin Raadh",
    description:
      "OXIEDO, founded 2023 by Rokib Al Dhin Raadh, licenses ORMAS on-premise to regulated industries with a tamper-evident record of every weight change in training.",
    image: "/og/work-v3.jpg",
    imageAlt: "OXIEDO, founded by Rokib Al Dhin Raadh, and the Model Change Record: a tamper-evident log of every weight change in training",
  },
  "/about": {
    title: "About Rokib Al Dhin Raadh — AI Researcher and Founder of OXIEDO",
    description:
      "Rokib Al Dhin Raadh, 18, AI researcher and founder of OXIEDO: DeepMath 2026 paper, NeurIPS 2026 workshop reviewer, Cohere Labs invited talk, 1752vc top 1%.",
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
  "/deepmath": {
    title: "Self-Repair as a Bounded Disturbance · DeepMath 2026 · Rokib Al Dhin Raadh",
    description:
      "Sole-authored DeepMath 2026 paper by Rokib Al Dhin Raadh on the stability of self-repairing neural network training. Poster, abstract, results, figures and Q&A.",
    image: "/og/deepmath.png",
    imageAlt: "Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics, DeepMath 2026 poster",
  },
} as const;

export type PagePath = keyof typeof pages;
