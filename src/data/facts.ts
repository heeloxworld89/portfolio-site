/**
 * Single source of truth for every name, number, date and link on the site.
 *
 * Pages, structured data, llms.txt and the press kit all read from here, so a
 * figure changes in exactly one place. Research figures are taken from the
 * ORMAS preprint (v4); company facts match oxiedo.com.
 */

export const SITE_URL = 'https://raadh.me';

export const person = {
  name: 'Rokib Al Dhin Raadh',
  short: 'Raadh',
  role: 'Founder & CEO, OXIEDO',
  title: 'Founder & CEO',
  age: 18,
  location: 'Dhaka, Bangladesh',
  headshot: '/assets/images/banner/header-left-user.jpg',
  email: 'raadxbusiness9@gmail.com',
  emailCompany: 'rokib@blackbloxie.com',
  orcid: '0009-0003-1178-5296',
  languages: ['English (fluent)', 'Bengali (native)'],
} as const;

export const links = {
  company: 'https://oxiedo.com',
  invest: 'https://oxiedo.com/invest',
  preprint: 'https://zenodo.org/records/21730363',
  preprintPdf: 'https://zenodo.org/records/21730363/files/ORMAS_preprint.pdf?download=1',
  doi: 'https://doi.org/10.5281/zenodo.21730363',
  github: 'https://github.com/raad-x',
  orcid: 'https://orcid.org/0009-0003-1178-5296',
  telemetry: 'https://drive.google.com/file/d/1CDaMIpTZ_8Mkot9D-O7JU29mDopq_Bdl/view',
  cv: '/assets/pdf/Rokib_Al_Dhin_Raadh_CV.pdf?v=2026-09-25a',
  deck: '/assets/pdf/oxiedo_pitch_deck.pdf?v=2026-09-25a',
  videoFounder: 'https://www.loom.com/embed/c30a0509fdc442b5b6f6ea47213798c9',
  videoResearch: 'https://www.loom.com/embed/59caaa73445443cb8d345b4d594a8347',
  mail: 'mailto:raadxbusiness9@gmail.com',
} as const;

export const company = {
  name: 'OXIEDO',
  founded: 2023,
  oneLiner: 'AI that can see inside itself, and fix what it finds.',
  what:
    'OXIEDO licenses ORMAS, a neural-network training architecture that records every change a model makes to itself while it learns, so institutions can train on data that is never allowed to leave the building.',
  stage: 'Pre-seed',
  entity: 'Incorporating as a Delaware C-corporation; headquarters moving to San Francisco',
  sectors: [
    { n: 'AI Training', q: 'Is this run failing, and which component?' },
    { n: 'Regulated Finance', q: 'What changed, and can a validator verify it?' },
    { n: 'Medical AI', q: 'Which site caused this, and can we show it?' },
    { n: 'Data Obligation', q: 'What data is in here, and can it be taken back out?' },
    { n: 'Defense & Safety-Critical', q: 'What did the model do to itself in the field?' },
  ],
  whyNow: [
    { k: 'SR 26-2', v: 'Model-risk guidance for US banks, already in force.' },
    { k: '2 Dec 2027', v: 'EU AI Act obligations for Annex III high-risk systems apply.' },
    { k: '2 Aug 2028', v: 'EU AI Act obligations for Annex I regulated products apply.' },
  ],
} as const;

export const paper = {
  title: 'ORMAS: Neural Architectural Transparency Enables Autonomous Self-Correction',
  author: 'Raadh, Rokib Al Dhin',
  doi: '10.5281/zenodo.21730363',
  version: 'v4',
  published: '2026-08-01',
  publishedLabel: '1 August 2026',
  license: 'CC BY-NC 4.0',
  status: 'Open-access preprint · under double-blind review',
  abstract:
    'The neural network black box is not an inherent property of deep learning — it is a mathematical consequence of global backpropagation, where a single entangled error signal renders mid-training structural collapse invisible. Bounding each node’s local gradient chain to a 4-operation path turns a standard network into a transparent, self-correcting system whose failures are individually attributable and autonomously repairable. ORMAS extends backpropagation with a per-node local loss anchored through a capacity-constrained shared bottleneck and a health-gated mechanism that diagnoses and repairs structural pathologies in real time, with an Input-to-State Stability analysis characterising the stability of its bounded corrections.',
  bibtex: `@misc{raadh2026ormas,
  author    = {Raadh, Rokib Al Dhin},
  title     = {ORMAS: Neural Architectural Transparency Enables Autonomous Self-Correction},
  year      = {2026},
  publisher = {Zenodo},
  version   = {v4},
  doi       = {10.5281/zenodo.21730363},
  url       = {https://doi.org/10.5281/zenodo.21730363}
}`,
  apa: 'Raadh, R. A. D. (2026). ORMAS: Neural architectural transparency enables autonomous self-correction (Version v4) [Preprint]. Zenodo. https://doi.org/10.5281/zenodo.21730363',
} as const;

/** Headline ORMAS figures. Every value appears in the preprint. */
export const ormas = {
  experiments: 383,
  families: 4,
  gpu: 'One RTX 3090',
  codeLines: '37,000',
  lesion: { ormas: '80.3%', ormasSd: '± 1.6', base: '10.0%', gap: '+70.3 pp', corrections: 85 },
  allLayer: { ormas: '70.8%', base: '10.0%', gap: '+60.8 pp' },
  noise: { ormasDecay: '2.5 pp', baseDecay: '7.8 pp', ormasFinal: '75.6%' },
  retention: { ormas: '94.6%', base: '47.3%' },
  zeroShot: { ormas: '58.8%', chance: '25%' },
  decay: { peak: '4.2', mean: '1.35', after: '0' },
  dagCorrections: '22,014',
  dagEventsMax: '23,227',
  pathologies: 7,
  telemetryLayers: 5,
} as const;

export type Recognition = {
  key: string;
  org: string;
  logo: string;
  logoDark?: boolean;
  date: string;
  headline: string;
  outcome: string;
  body: string;
  stats?: { v: string; l: string }[];
  featured?: boolean;
};

export const recognition: Recognition[] = [
  {
    key: 'neurips',
    org: 'NeurIPS 2026',
    logo: '/assets/images/logos/neurips.svg',
    date: 'Dec 2026',
    outcome: 'Programme Committee',
    headline: 'Reviewer for the Trustworthy AI for Good workshop at NeurIPS 2026',
    body:
      'Sits on the programme committee of the Trustworthy AI for Good (AI4GOOD) workshop at NeurIPS 2026 in Paris, reviewing submissions on interpretability, attribution, auditing and post-deployment monitoring — the field ORMAS is built in. The workshop’s ICML edition drew 539 submissions, reviewed by 237 researchers from Oxford, MIT, Toronto, Berkeley, Stanford and Mila.',
    stats: [
      { v: 'NeurIPS', l: 'The field’s flagship conference' },
      { v: '539', l: 'Submissions at the ICML edition' },
    ],
    featured: true,
  },
  {
    key: '1752vc',
    org: '1752vc',
    logo: '/assets/images/logos/1752vc.png',
    date: 'Sep 2026',
    outcome: 'Accepted · Ignite cohort',
    headline: 'Accepted into 1752vc Ignite — from the top 1% of thousands of applications',
    body:
      '1752vc placed the application in the top 5% of its intake, then ran a final round to select the top 1%. OXIEDO came out of it with a place in the Ignite cohort — a deliberately small cohort chosen from thousands of applications.',
    stats: [
      { v: 'Top 1%', l: 'Final-round selection' },
      { v: 'Ignite', l: 'Cohort' },
    ],
    featured: true,
  },
  {
    key: 'freshmango',
    org: 'Freshmango',
    logo: '/assets/images/logos/freshmango.png',
    date: 'Sep 2026',
    outcome: 'Accepted',
    headline: 'Accepted by Freshmango, the equity-free accelerator',
    body:
      'Freshmango offered a place after a twenty-minute interview, with the founder agreement the same day: a 5,000-founder network, $4M in AI credits and introductions across 160 venture funds — for no equity and no fee.',
    stats: [
      { v: '$4M', l: 'AI credits' },
      { v: '160', l: 'Venture funds' },
      { v: '0%', l: 'Equity taken' },
    ],
    featured: true,
  },
  {
    key: 'cosmos',
    org: 'Cosmos Institute',
    logo: '/assets/images/logos/cosmos-institute.svg',
    date: 'Jul 2026',
    outcome: 'Highest-ranked application',
    headline: 'Ranked highest in its Cosmos Institute grant cycle',
    body:
      'The ORMAS application ranked highest of its cycle at the Cosmos Institute. The round was dedicated to philosophical work on AI; Cosmos invited the work back for its technical track.',
    stats: [{ v: '#1', l: 'Ranking in cycle' }],
    featured: true,
  },
  {
    key: 'ef',
    org: 'Entrepreneur First',
    logo: '/assets/images/logos/entrepreneur-first.svg',
    date: 'Aug – Sep 2026',
    outcome: 'Two interview rounds · The Bridge',
    headline: 'Advanced through two interview rounds for EF’s The Bridge in San Francisco',
    body:
      'After a first screen with Entrepreneur First’s London team in August, he advanced through two interview rounds for The Bridge — EF’s eight-week San Francisco residency for technical founders who already have something built.',
    stats: [{ v: '2', l: 'Interview rounds completed' }],
  },
  {
    key: 'antler',
    org: 'Antler',
    logo: '/assets/images/logos/antler.svg',
    date: 'Sep 2026',
    outcome: 'Passed initial screening',
    headline: 'Passed Antler’s initial screening — then met a residency rule',
    body:
      'OXIEDO passed initial screening with Antler, one of the largest early-stage investors in the world. The process ended on eligibility, not on the assessment: Antler’s Australian programme is open only to Australian citizens and founders with permanent Australian working rights.',
    stats: [{ v: 'Passed', l: 'Initial screening' }],
  },
];

export const timeline = [
  { year: '2020', age: '12', title: 'First line of code, first venture', body: 'Self-taught from the start; every project built slightly past what he already knew.' },
  { year: '2020–25', age: '12–17', title: 'Five ventures', body: 'Software services, cold-call automation, digital marketing, e-commerce, automation tooling. Each one taught the same lesson: the bottleneck is coordination.' },
  { year: '2023', age: '15', title: 'First exit · OXIEDO founded', body: 'Built and sold a stock-prediction system for ~$10,000 — the money bought the RTX 3090 behind every ORMAS experiment. OXIEDO founded the same year.' },
  { year: '2023–25', age: '15–17', title: 'OXIMO', body: 'A multi-agent operating system in which agents hire their own specialists. 40,933 lines, 2,069 tests.' },
  { year: '2025–26', age: '17–18', title: 'Black Bloxie LTD', body: 'A real UK company run by OXIMO for twelve months as a controlled study: −91% output on removal, full recovery on restoration. 396 paying customers in 10 countries.' },
  { year: '2026', age: '18', title: 'ORMAS preprint · accelerators · NeurIPS', body: '383 experiments on one GPU, published open-access. Accepted by 1752vc Ignite and Freshmango; programme committee at NeurIPS 2026.' },
] as const;

export const oximo = {
  years: '2023–2025',
  lines: '40,933',
  tests: '2,069',
  repos: 11,
  monolith: '106,000',
  reduction: '72%',
  algorithms: '12/12',
} as const;

export const blackBloxie = {
  years: '2025–2026',
  months: 12,
  removal: '−91%',
  restore: '+1,300%',
  customers: 396,
  countries: 10,
  orders: '79+',
  revenue: '$6,691.68',
  largestOrder: '$4,386',
} as const;

export const ventures = [
  { n: '01', title: 'Software Services', age: '12–14', lesson: 'Could build the product; could not get it in front of buyers. Distribution needs credibility, not just engineering.' },
  { n: '02', title: 'Cold-Call Automation (Europe)', age: '14–15', lesson: 'Automation handled 90% of the sales cycle. The close still needed a human — trust has a ceiling at the transaction.' },
  { n: '03', title: 'US Digital Marketing', age: '15', lesson: 'The bottleneck was production, not distribution.' },
  { n: '04', title: 'Organic E-Commerce', age: '15–16', lesson: 'Research, listing, pricing, fulfilment and service all at once — one person cannot be the whole system.' },
  { n: '05', title: 'Automation Tooling', age: '16–17', lesson: 'The fifth confirmation: the limit is never individual capability. It is coordination.' },
] as const;

export const credentials = {
  schooling: '12th grade (final year) · self-directed in machine learning, systems engineering and theoretical computer science',
  mitx: [
    { t: 'Universal AI Foundational Models', h: 'https://mitxonline.mit.edu/records/shared/776b490f-67be-46a2-8ddc-86d3b86bb9c0/', note: 'via FIAP-sponsored access' },
    { t: 'AI & Precision Medicine', h: 'https://mitxonline.mit.edu/records/shared/cc81d799-e745-4f8e-8837-a75d4e1bfd49/' },
    { t: 'AI and Sustainability: Energy', h: 'https://mitxonline.mit.edu/records/shared/3d1aa3ad-4f07-4f64-aaf8-7dbc720913db/' },
    { t: 'AI and Sustainability: Transportation', h: 'https://mitxonline.mit.edu/records/shared/ed8f94b2-2fb0-43fb-b5ab-9052d6e777fb/' },
    { t: 'AI for Transportation: From Concepts to Implementation', h: 'https://mitxonline.mit.edu/records/shared/31cbd749-a3ca-488e-80ad-10ddb771a12f/' },
    { t: 'AI & Entrepreneurship', h: 'https://mitxonline.mit.edu/records/shared/c4c84c9c-1c8e-469f-a050-2269b1fe0a3c/' },
    { t: 'Holistic AI in Medicine', h: 'https://mitxonline.mit.edu/records/shared/082917c3-0327-4b28-8049-10e588692dc0/' },
  ],
  deeplearning: { t: 'Deep Learning Specialization — DeepLearning.AI', h: 'https://coursera.org/verify/specialization/R7SYBBCXR1OY' },
  others: '20+ further certificates in machine learning, systems architecture and applied AI from Google, UC Davis, the University of Michigan and Udemy',
  fiap:
    'FIAP (São Paulo, Brazil) made him a member in early 2026 and sponsored his access to MIT Open Learning’s Universal AI programme.',
  guinness:
    'In November 2024 he livestreamed his full working day for two weeks — 28 unedited sessions — submitted as a Guinness World Records application.',
  guinnessSessions: [
    '9L1WZ9PO-bI', 'JW-WqB52ugo', 'NWz7uzN_NNQ', '2rbk0J3jp6Q', 'hBwS1rivWPA',
    'n7KlERWehl4', 'kjVlV4BVDyA', '-fH4VMbQOfk', '5O2FrndmxFo', '7OEl6Mqjjds',
    'nMUVMgR0uHQ', 'TDNlIncP5O8', 'uO_3atbGzZ8', 'xvJT0aOYcgI', '1o0g0PJMtsg',
    '71q_4imOHRM', 'TDSZk97LuNY', 'E8I3CzBsyQ8', 'U88sFQVsebo', 'IDEvtbip5eE',
    'v_5z8SeqVO4', '4bKiT3zLVvM', '4S4p5EBxfXE', 'ytJxIxFwYz8', 'kLduxS4BvJQ',
    'O6Ou5i-5pCo', 'FX7Qb8-foOQ', 'QcKAifqnTCw',
  ],
  skills: [
    { t: 'Machine learning', v: ['PyTorch', 'CNN / ResNet / DAG', 'Transformers', 'PCGrad', 'Stability theory', 'Noise-robust training'] },
    { t: 'Systems', v: ['Multi-agent orchestration', 'Dependency injection', 'Atomic rollback', 'Three-tier memory', 'Graph-of-Thoughts planning'] },
    { t: 'Infrastructure', v: ['Docker', 'FastAPI', 'Prometheus', 'SQLAlchemy async', 'ChromaDB', 'React / TypeScript'] },
    { t: 'Languages', v: ['Python', 'C++', 'LaTeX'] },
  ],
} as const;

export const bios = {
  short:
    'Rokib Al Dhin Raadh is the founder and CEO of OXIEDO and the creator of ORMAS, a neural-network architecture that diagnoses and repairs its own failures while it trains.',
  medium:
    'Rokib Al Dhin Raadh is the founder and CEO of OXIEDO, which licenses ORMAS — a training architecture that records every change a neural network makes to itself — to institutions whose data cannot leave the building. He built ORMAS independently at 17, across 383 controlled experiments on a single GPU, and published it as an open-access preprint. OXIEDO has been accepted by 1752vc Ignite and Freshmango, and he serves on the NeurIPS 2026 programme committee for the Trustworthy AI for Good workshop.',
  long:
    'Rokib Al Dhin Raadh is the founder and CEO of OXIEDO and the inventor of ORMAS, a neural-network training architecture that detects, attributes and repairs its own structural failures during training. In the ORMAS preprint, a network whose layer is destroyed mid-training recovers to 80.3% accuracy while parameter-matched baselines stay at 10%, and every repair is logged with its cause — the audit trail regulated institutions need before they can train on locked data. Raadh wrote his first code at 12, ran five ventures by 17 and sold his first system at 15, using the proceeds to buy the GPU that ran all 383 ORMAS experiments. Before ORMAS he built OXIMO, a 40,933-line multi-agent operating system, and tested it for twelve months on Black Bloxie LTD, a UK company it operated for 396 paying customers in ten countries. OXIEDO has been accepted into 1752vc’s Ignite cohort and by Freshmango, his application ranked highest in its Cosmos Institute grant cycle, and he serves on the programme committee of the Trustworthy AI for Good workshop at NeurIPS 2026. He is based in Dhaka, Bangladesh.',
} as const;
