import { SITE_URL, person, company, paper, links } from './facts';

export type RouteMeta = {
  path: string;
  nav: string;
  title: string;
  description: string;
  og: string;
};

export const routes: RouteMeta[] = [
  {
    path: '/',
    nav: 'Home',
    title: `${person.name} — Founder & CEO, OXIEDO`,
    description:
      'Founder & CEO of OXIEDO and inventor of ORMAS, a neural-network architecture that diagnoses and repairs its own failures while it trains. Accepted by 1752vc Ignite and Freshmango; NeurIPS 2026 programme committee.',
    og: '/og/home.png',
  },
  {
    path: '/research',
    nav: 'Research',
    title: 'ORMAS — Self-Correcting Neural Networks · Open-Access Preprint',
    description:
      'ORMAS recovers to 80.3% after a layer is destroyed mid-training while parameter-matched baselines stay at 10%. 383 controlled experiments, open-access preprint with DOI.',
    og: '/og/research.png',
  },
  {
    path: '/recognition',
    nav: 'Recognition',
    title: `Recognition — ${person.name}`,
    description:
      'NeurIPS 2026 programme committee, 1752vc Ignite, Freshmango, Cosmos Institute top-ranked application, Entrepreneur First and Antler.',
    og: '/og/recognition.png',
  },
  {
    path: '/work',
    nav: 'Track Record',
    title: `Track Record — OXIMO, Black Bloxie and Five Ventures · ${person.name}`,
    description:
      'The chain that led to OXIEDO: five ventures from age 12, a first exit at 15, OXIMO (40,933 lines), and a 12-month controlled study on a live UK company.',
    og: '/og/work.png',
  },
  {
    path: '/about',
    nav: 'About',
    title: `About — ${person.name}`,
    description: `${person.name}, ${person.age}, founder & CEO of OXIEDO, based in ${person.location}. Biography, credentials and education.`,
    og: '/og/about.png',
  },
  {
    path: '/press',
    nav: 'Press Kit',
    title: `Press Kit — ${person.name}`,
    description: 'Approved biographies, key facts, photos and contact details for press, programmes and grant applications.',
    og: '/og/press.png',
  },
];

export const notFound: RouteMeta = {
  path: '/404',
  nav: '',
  title: `Page not found — ${person.name}`,
  description: routes[0].description,
  og: '/og/home.png',
};

export function metaFor(path: string): RouteMeta {
  return routes.find((r) => r.path === path) ?? notFound;
}

/** JSON-LD graph for a route. Person + Organization everywhere; the preprint on /research. */
export function jsonLdFor(path: string) {
  const personNode = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: person.name,
    alternateName: person.short,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${person.headshot}`,
    jobTitle: person.title,
    worksFor: { '@id': `${SITE_URL}/#oxiedo` },
    founder: undefined,
    email: `mailto:${person.email}`,
    homeLocation: { '@type': 'Place', name: person.location },
    knowsAbout: ['Neural network interpretability', 'Self-correcting neural networks', 'Machine learning', 'Multi-agent systems'],
    identifier: { '@type': 'PropertyValue', propertyID: 'ORCID', value: person.orcid },
    sameAs: [links.orcid, links.github, links.company],
  };
  const orgNode = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#oxiedo`,
    name: company.name,
    url: links.company,
    foundingDate: String(company.founded),
    founder: { '@id': `${SITE_URL}/#person` },
    description: company.what,
  };
  const graph: object[] = [personNode, orgNode];
  const meta = metaFor(path);
  graph.push({
    '@type': path === '/' || path === '/about' ? 'ProfilePage' : 'WebPage',
    '@id': `${SITE_URL}${path === '/' ? '/' : path}#page`,
    url: `${SITE_URL}${path === '/' ? '/' : path}`,
    name: meta.title,
    description: meta.description,
    mainEntity: path === '/' || path === '/about' ? { '@id': `${SITE_URL}/#person` } : undefined,
  });
  if (path === '/research') {
    graph.push({
      '@type': 'ScholarlyArticle',
      '@id': `${links.doi}`,
      headline: paper.title,
      name: paper.title,
      author: { '@id': `${SITE_URL}/#person` },
      datePublished: paper.published,
      publisher: { '@type': 'Organization', name: 'Zenodo' },
      identifier: { '@type': 'PropertyValue', propertyID: 'DOI', value: paper.doi },
      url: links.preprint,
      license: 'https://creativecommons.org/licenses/by-nc/4.0/',
      isAccessibleForFree: true,
      abstract: paper.abstract,
    });
  }
  return { '@context': 'https://schema.org', '@graph': JSON.parse(JSON.stringify(graph)) };
}
