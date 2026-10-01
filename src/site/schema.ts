// schema.org JSON-LD for every prerendered page. One connected graph: the
// person, the companies, the papers, the code, the conference, credentials and
// recognition, each pointing at an independent source (DOI, ORCID, conference
// site, code archive, course record) so search engines and AI systems can
// corroborate every claim instead of taking the site's word for it.
import { links, pages } from "./data";

const SITE = "https://www.raadh.me";
const id = (frag: string) => `${SITE}/#${frag}`;
const ref = (frag: string) => ({ "@id": id(frag) });
// The one-sentence entity definition, repeated verbatim in the page meta,
// public/llms.txt and here so every system that summarises him converges on it.
const DEFINITION =
  "Rokib Al Dhin Raadh is the 18-year-old founder and CEO of OXIEDO and the inventor of ORMAS, a self-repairing neural network whose stability paper was accepted after double-blind review at DeepMath 2026.";
const wiki = (name: string, slug: string) => ({ "@type": "Thing", name, sameAs: `https://en.wikipedia.org/wiki/${slug}` });

const person = {
  "@type": "Person",
  "@id": id("person"),
  name: "Rokib Al Dhin Raadh",
  givenName: "Rokib Al Dhin",
  familyName: "Raadh",
  alternateName: ["Raadh", "Rokib Raadh", "R. A. D. Raadh"],
  url: `${SITE}/`,
  image: {
    "@type": "ImageObject",
    url: `${SITE}/assets/images/banner/header-left-user.jpg`,
    caption: "Rokib Al Dhin Raadh",
  },
  description: `${DEFINITION} He is a reviewer for the NeurIPS 2026 Trustworthy AI for Good workshop and is based in Dhaka, Bangladesh. OXIEDO, founded in 2023, licenses ORMAS on-premise to regulated industries.`,
  disambiguatingDescription: "Dhaka-based AI founder, 18: founder and CEO of OXIEDO and inventor of the ORMAS self-repairing neural network.",
  jobTitle: "Founder & CEO, OXIEDO",
  hasOccupation: [
    { "@type": "Occupation", name: "Founder & Chief Executive Officer", occupationLocation: { "@type": "City", name: "Dhaka" } },
    { "@type": "Occupation", name: "Inventor of ORMAS, a self-repairing neural network" },
    { "@type": "Occupation", name: "Independent AI researcher" },
  ],
  worksFor: ref("oxiedo"),
  homeLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" } },
  nationality: { "@type": "Country", name: "Bangladesh" },
  email: `mailto:${links.founderEmail}`,
  contactPoint: [
    { "@type": "ContactPoint", contactType: "founder, investor and press enquiries", email: links.founderEmail },
    { "@type": "ContactPoint", contactType: "general enquiries", email: links.email },
  ],
  knowsAbout: [
    wiki("Neural networks", "Neural_network_(machine_learning)"),
    wiki("Deep learning", "Deep_learning"),
    wiki("Explainable artificial intelligence", "Explainable_artificial_intelligence"),
    wiki("Input-to-state stability", "Input-to-state_stability"),
    wiki("Control theory", "Control_theory"),
    wiki("Model risk", "Model_risk"),
    wiki("Catastrophic interference", "Catastrophic_interference"),
    wiki("Multi-agent system", "Multi-agent_system"),
    wiki("PyTorch", "PyTorch"),
    "Self-repairing neural networks",
    "Auditable AI training",
    "Mathematical theory of deep learning",
  ],
  award: [
    "DeepMath 2026: stability paper accepted after double-blind review (poster), Conference on the Mathematical Theory of Deep Neural Networks, Ohio State University",
    "1752vc Ignite: OXIEDO accepted from the top 1% of applicants (2026)",
    "Cosmos Institute: ORMAS application ranked highest in its 2026 review cycle",
    "IARCO 2026: finalist, International Academic Research Competition (500+ entries, 60 countries)",
    "Freshmango: OXIEDO offered a place in the equity-free accelerator after a single interview (2026)",
  ],
  memberOf: [
    { "@type": "Organization", name: "Cohere Labs Open Science Community", url: "https://cohere.com/research" },
    {
      "@type": "OrganizationRole",
      roleName: "Reviewer",
      startDate: "2026",
      memberOf: { "@type": "Organization", name: "NeurIPS 2026 Workshop: Trustworthy AI for Good", url: links.neurips },
    },
  ],
  hasCredential: [
    ...[
      ["Universal AI Foundational Models", "776b490f-67be-46a2-8ddc-86d3b86bb9c0"],
      ["AI & Precision Medicine", "cc81d799-e745-4f8e-8837-a75d4e1bfd49"],
      ["Holistic AI in Medicine", "082917c3-0327-4b28-8049-10e588692dc0"],
      ["AI and Sustainability: Energy", "3d1aa3ad-4f07-4f64-aaf8-7dbc720913db"],
      ["AI and Sustainability: Transportation", "ed8f94b2-2fb0-43fb-b5ab-9052d6e777fb"],
      ["AI for Transportation: From Concepts to Implementation", "31cbd749-a3ca-488e-80ad-10ddb771a12f"],
      ["AI & Entrepreneurship", "c4c84c9c-1c8e-469f-a050-2269b1fe0a3c"],
    ].map(([name, rec]) => ({
      "@type": "EducationalOccupationalCredential",
      name: `MITx: ${name}`,
      credentialCategory: "certificate",
      url: `https://mitxonline.mit.edu/records/shared/${rec}/`,
      recognizedBy: { "@type": "Organization", name: "MIT Open Learning", url: "https://openlearning.mit.edu/" },
    })),
    {
      "@type": "EducationalOccupationalCredential",
      name: "Deep Learning Specialization",
      credentialCategory: "certificate",
      url: "https://coursera.org/verify/specialization/R7SYBBCXR1OY",
      recognizedBy: { "@type": "Organization", name: "DeepLearning.AI", url: "https://www.deeplearning.ai/" },
    },
  ],
  identifier: [
    { "@type": "PropertyValue", propertyID: "ORCID", value: "0009-0003-1178-5296", url: links.orcid },
  ],
  sameAs: [links.orcid, links.github, links.x, links.substack, links.youtube],
};

const oxiedo = {
  "@type": "Organization",
  "@id": id("oxiedo"),
  name: "OXIEDO",
  url: links.oxiedo,
  email: `mailto:${links.founderEmail}`,
  contactPoint: { "@type": "ContactPoint", contactType: "founder", name: "Rokib Al Dhin Raadh", email: links.founderEmail, url: links.invest },
  foundingDate: "2023",
  founder: ref("person"),
  employee: ref("person"),
  description:
    "OXIEDO is a deep-tech AI company founded in 2023 by Rokib Al Dhin Raadh. It licenses ORMAS, his self-repairing neural network, on-premise to regulated industries, with the Model Change Record: a tamper-evident log of every weight change in a training run, for model-risk teams (SR 26-2) and the EU AI Act's high-risk obligations.",
  knowsAbout: ["Auditable AI training", "AI model risk management", "EU AI Act compliance", "Self-repairing neural networks"],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "ORMAS on-premise licence with the Model Change Record",
      description: "Annual on-premise licence for the ORMAS training architecture and a tamper-evident record of every weight change during training.",
      brand: { "@id": id("oxiedo") },
    },
  },
  sameAs: [links.oxiedo],
};

const blackBloxie = {
  "@type": "Organization",
  "@id": id("black-bloxie"),
  name: "Black Bloxie LTD",
  legalName: "Black Bloxie LTD",
  foundingDate: "2025-09-11",
  foundingLocation: { "@type": "Place", name: "England and Wales" },
  founder: ref("person"),
  url: "https://www.blackbloxie.com/",
  identifier: { "@type": "PropertyValue", propertyID: "Companies House company number", value: "16711223", url: "https://find-and-update.company-information.service.gov.uk/company/16711223" },
  sameAs: ["https://www.blackbloxie.com/pages/leadership", "https://find-and-update.company-information.service.gov.uk/company/16711223"],
  description:
    "UK company incorporated in England and Wales on 11 September 2025 and run on the OXIMO multi-agent system for a twelve-month controlled field study; removing OXIMO cut output by 91%.",
};

const deepmath = {
  "@type": "Event",
  "@id": id("deepmath-2026"),
  name: "DeepMath 2026: Conference on the Mathematical Theory of Deep Neural Networks",
  startDate: "2026-10-29",
  endDate: "2026-10-30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  url: links.deepmath,
  location: {
    "@type": "Place",
    name: "The Ohio State University",
    sameAs: "https://en.wikipedia.org/wiki/Ohio_State_University",
    address: { "@type": "PostalAddress", addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
  },
  description:
    "Conference on the Mathematical Theory of Deep Neural Networks, hosted by The Ohio State University. Papers are accepted after double-blind review;",
  workFeatured: ref("deepmath-paper"),
  performer: ref("person"),
};

const deepmathPaper = {
  "@type": "ScholarlyArticle",
  "@id": id("deepmath-paper"),
  headline: "Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics",
  name: "Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics",
  author: ref("person"),
  inLanguage: "en",
  dateCreated: "2026-09",
  genre: "Conference poster",
  url: `${SITE}/research`,
  creativeWorkStatus: "Accepted (poster) after double-blind review, DeepMath 2026",
  keywords: ["Input-to-State Stability", "self-repairing neural networks", "training dynamics", "ORMAS"],
  description:
    "Formal local stability characterisation of a self-correcting neural network: each self-repair is treated as a bounded disturbance under Sontag's Input-to-State Stability framework. Accepted after double-blind review for poster presentation at DeepMath 2026, Ohio State University, 29–30 October 2026.",
  about: [wiki("Input-to-state stability", "Input-to-state_stability"), wiki("Deep learning", "Deep_learning")],
  isBasedOn: ref("ormas-preprint"),
  subjectOf: ref("deepmath-2026"),
};

const ormasPreprint = {
  "@type": "ScholarlyArticle",
  "@id": id("ormas-preprint"),
  headline: "ORMAS: Neural Architectural Transparency Enables Autonomous Self-Correction",
  name: "ORMAS: Neural Architectural Transparency Enables Autonomous Self-Correction",
  author: ref("person"),
  inLanguage: "en",
  datePublished: "2026-08-01",
  genre: "Preprint",
  url: links.preprint,
  sameAs: links.doi,
  identifier: { "@type": "PropertyValue", propertyID: "DOI", value: "10.5281/zenodo.21730363", url: links.doi },
  publisher: { "@type": "Organization", name: "Zenodo", url: "https://zenodo.org/" },
  isAccessibleForFree: true,
  keywords: ["ORMAS", "self-repairing neural networks", "self-correcting neural networks", "auditable AI training", "interpretability"],
  description:
    "A neural network architecture that identifies, repairs and records its own failing components during training. After a trained convolutional layer is destroyed (CIFAR-10, three seeds), ORMAS recovers to 80.3% accuracy while a parameter-matched baseline stays at 10.0%. 383 controlled experiments across four architectures on a single RTX 3090.",
  about: [wiki("Neural networks", "Neural_network_(machine_learning)"), wiki("Explainable artificial intelligence", "Explainable_artificial_intelligence")],
  hasPart: ref("ormas-code"),
};

const ormasCode = {
  "@type": "SoftwareSourceCode",
  "@id": id("ormas-code"),
  name: "ORMAS reference implementation",
  description: "PyTorch code reproducing all 383 ORMAS experiments; every run reproducible from seed.",
  codeRepository: links.code,
  programmingLanguage: "Python",
  runtimePlatform: "PyTorch",
  author: ref("person"),
  isPartOf: ref("ormas-preprint"),
};

const oximo = {
  "@type": "SoftwareSourceCode",
  "@id": id("oximo"),
  name: "OXIMO",
  description: "A 40,933-line multi-agent operating system that turns a one-sentence brief into an organisation and creates the roles it lacks; 2,069 passing tests.",
  codeRepository: links.oximoCode,
  programmingLanguage: "Python",
  author: ref("person"),
};

const oximoReport = {
  "@type": "Report",
  "@id": id("oximo-report"),
  name: "OXIMO/AX09: Autonomous LLM-Dependent Commerce. A twelve-month controlled ablation study",
  author: ref("person"),
  datePublished: "2026",
  url: `${SITE}${links.techPaper}`,
  about: [ref("oximo"), ref("black-bloxie")],
};

const website = {
  "@type": "WebSite",
  "@id": id("website"),
  url: `${SITE}/`,
  name: "Rokib Al Dhin Raadh",
  alternateName: "raadh.me",
  description: DEFINITION,
  inLanguage: "en",
  publisher: ref("person"),
  about: ref("person"),
};

type PageKey = keyof typeof pages;
const pageMeta: Record<PageKey, { type: string; name: string; main: string; about: string[] }> = {
  "/": { type: "ProfilePage", name: "Home", main: "person", about: ["person", "oxiedo"] },
  "/research": { type: "WebPage", name: "Technology: ORMAS", main: "ormas-preprint", about: ["ormas-preprint", "deepmath-paper", "ormas-code"] },
  "/work": { type: "WebPage", name: "Company: OXIEDO", main: "oxiedo", about: ["oxiedo", "oximo", "black-bloxie"] },
  "/about": { type: "AboutPage", name: "About", main: "person", about: ["person"] },
  "/evidence": { type: "WebPage", name: "Evidence", main: "person", about: ["person", "ormas-preprint", "deepmath-paper", "oxiedo"] },
};

export function schemaFor(path: string): string {
  const key = (path in pages ? path : "/") as PageKey;
  const meta = pages[key];
  const m = pageMeta[key];
  const url = SITE + (key === "/" ? "/" : key);
  const page = {
    "@type": m.type,
    "@id": `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: "en",
    isPartOf: ref("website"),
    mainEntity: ref(m.main),
    about: m.about.map(ref),
    author: ref("person"),
    primaryImageOfPage: { "@type": "ImageObject", url: SITE + meta.image, width: 1200, height: 630, caption: meta.imageAlt },
    dateModified: "2026-09-30",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Rokib Al Dhin Raadh", item: `${SITE}/` },
        ...(key === "/" ? [] : [{ "@type": "ListItem", position: 2, name: m.name, item: url }]),
      ],
    },
  };
  const graph = [website, page, person, oxiedo, blackBloxie, ormasPreprint, deepmathPaper, deepmath, ormasCode, oximo, oximoReport];
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 1).replace(/</g, "\\u003c");
}
