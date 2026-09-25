import { useState } from 'react';
import Icon from '@/components/common/Icon';
import { bios, blackBloxie, company, links, ormas, oximo, paper, person } from '@/data/facts';
import { PageHead, SecHead } from '@/components/site/blocks';

function Bio({ label, words, text }: { label: string; words: string; text: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="card-x">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <span className="card-k" style={{ margin: 0 }}>{label} · {words}</span>
        <button
          type="button"
          className={`lnk${done ? ' copied' : ''}`}
          style={{ background: 'none', border: 0, padding: 0 }}
          onClick={() => navigator.clipboard?.writeText(text).then(() => { setDone(true); setTimeout(() => setDone(false), 1800); }).catch(() => {})}
        >
          <Icon name={done ? 'check' : 'copy'} size={13} /> {done ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="p" style={{ margin: 0 }}>{text}</p>
    </div>
  );
}

const facts: [string, string][] = [
  ['Name', `${person.name} (${person.short})`],
  ['Role', person.role],
  ['Based in', person.location],
  ['Company', `${company.name} — founded ${company.founded}. ${company.what}`],
  ['Company stage', `${company.stage}. ${company.entity}.`],
  ['Research', `ORMAS — ${ormas.experiments} controlled experiments; recovers to ${ormas.lesion.ormas} after a mid-training layer lesion where parameter-matched baselines stay at ${ormas.lesion.base}.`],
  ['Preprint', `${paper.title}. Zenodo, ${paper.publishedLabel}. DOI ${paper.doi}.`],
  ['Recognition', 'NeurIPS 2026 programme committee (Trustworthy AI for Good workshop) · 1752vc Ignite · Freshmango · highest-ranked application, Cosmos Institute cycle · Entrepreneur First (The Bridge, two interview rounds) · Antler (passed initial screening)'],
  ['Prior work', `OXIMO multi-agent operating system (${oximo.lines} lines, ${oximo.tests} tests); Black Bloxie LTD twelve-month controlled study (${blackBloxie.customers} paying customers, ${blackBloxie.countries} countries).`],
  ['ORCID', person.orcid],
];

export default function Press() {
  return (
    <div className="container">
      <PageHead
        k="Press kit"
        title={<>Everything you need to <em>write about this work.</em></>}
        lead="Approved biographies, key facts, photos and documents — for journalists, programme teams and grant applications. Copy freely."
      >
        <div className="btns">
          <a className="btn-x is-p" href={person.headshot} download="Rokib_Al_Dhin_Raadh_headshot.jpg"><Icon name="download" size={15} /> Headshot</a>
          <a className="btn-x" href={links.cv} target="_blank" rel="noreferrer"><Icon name="fileText" size={15} /> CV</a>
          <a className="btn-x" href={links.deck} target="_blank" rel="noreferrer"><Icon name="chart" size={15} /> OXIEDO deck</a>
          <a className="btn-x" href={links.preprint} target="_blank" rel="noreferrer"><Icon name="book" size={15} /> Preprint</a>
        </div>
      </PageHead>

      <section className="sec">
        <SecHead k="Biographies" title="Three lengths, ready to paste." />
        <div style={{ display: 'grid', gap: 14 }}>
          <Bio label="One line" words="~30 words" text={bios.short} />
          <Bio label="Short" words="~85 words" text={bios.medium} />
          <Bio label="Full" words="~180 words" text={bios.long} />
        </div>
      </section>

      <section className="sec">
        <SecHead k="Key facts" title="Names, numbers and spellings." lead="Please use these exact forms. OXIEDO is written in capitals; ORMAS and OXIMO likewise." />
        <div className="kv">
          {facts.map(([k, v]) => (
            <div className="kv-row" key={k}><div className="kv-k">{k}</div><div className="kv-v">{v}</div></div>
          ))}
        </div>
      </section>

      <section className="sec">
        <SecHead k="Contact" title="Interviews, verification and requests." />
        <div className="kv">
          <div className="kv-row"><div className="kv-k">Email</div><div className="kv-v"><a className="lnk" href={links.mail}>{person.email}</a></div></div>
          <div className="kv-row"><div className="kv-k">Company</div><div className="kv-v"><a className="lnk" href={links.company} target="_blank" rel="noreferrer">oxiedo.com</a></div></div>
          <div className="kv-row"><div className="kv-k">Verification</div><div className="kv-v">Documentation for any fact on this site is available on request.</div></div>
        </div>
      </section>
    </div>
  );
}
