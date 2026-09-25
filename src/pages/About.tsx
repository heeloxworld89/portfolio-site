import Icon from '@/components/common/Icon';
import { bios, credentials, links, person } from '@/data/facts';
import { ContactBand, PageHead, SecHead, Timeline } from '@/components/site/blocks';

export default function About() {
  return (
    <div className="container">
      <PageHead
        k="About"
        title={<>{person.name}</>}
        lead={<><strong>{person.role}.</strong> {person.age} · {person.location}.</>}
      >
        <div className="hero" style={{ alignItems: 'start' }}>
          <div>
            <p className="p" style={{ fontSize: 16.5 }}>{bios.long}</p>
            <div className="btns">
              <a className="btn-x is-p" href={links.cv} target="_blank" rel="noreferrer"><Icon name="download" size={15} /> Download CV</a>
              <a className="btn-x" href={links.orcid} target="_blank" rel="noreferrer"><Icon name="link" size={15} /> ORCID {person.orcid}</a>
              <a className="btn-x" href={links.github} target="_blank" rel="noreferrer"><Icon name="github" size={15} /> GitHub</a>
            </div>
          </div>
          <div>
            <div className="video">
              <iframe src={links.videoFounder} allowFullScreen loading="lazy" title={`Founder introduction — ${person.name}`} />
            </div>
            <p className="muted" style={{ marginTop: 8 }}>Founder introduction · 31 seconds</p>
          </div>
        </div>
      </PageHead>

      <section className="sec">
        <SecHead
          k="Why this work"
          title="One finding, followed all the way down."
          lead="Five ventures between twelve and seventeen each broke somewhere different — and all for the same reason: coordination, never capability. Chasing that one sentence produced a multi-agent operating system, then a live-company experiment, then a new training architecture, then a company to take it to market."
        />
        <Timeline />
      </section>

      <section className="sec">
        <SecHead
          k="Education"
          title="Self-directed, and taken as far as the problems required."
          lead="Control theory for the stability analysis, market microstructure for a trading system at fifteen, UK company law to register and run Black Bloxie — each learned because a problem demanded it."
        />
        <div className="kv">
          <div className="kv-row"><div className="kv-k">Schooling</div><div className="kv-v">{credentials.schooling}</div></div>
          <div className="kv-row"><div className="kv-k">Research</div><div className="kv-v">Sole author of the ORMAS preprint (DOI 10.5281/zenodo.21730363); programme committee, Trustworthy AI for Good workshop, NeurIPS 2026</div></div>
          <div className="kv-row"><div className="kv-k">Languages</div><div className="kv-v">{person.languages.join(' · ')}</div></div>
        </div>
      </section>

      <section className="sec" id="more">
        <SecHead k="More" title="Certificates, skills and the record." />

        <details className="dz">
          <summary><span><div className="dz-t">MIT and other certificates</div><div className="dz-s">Seven MITx courses, the Deep Learning Specialization and 20+ further certificates</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <div className="tbl-h">MITx</div>
            <ul className="p" style={{ paddingLeft: 18 }}>
              {credentials.mitx.map((c) => (
                <li key={c.t}>
                  <a className="lnk" href={c.h} target="_blank" rel="noreferrer">{c.t}</a>
                  {'note' in c && c.note ? <span className="muted"> — {c.note}</span> : null}
                </li>
              ))}
            </ul>
            <div className="tbl-h">DeepLearning.AI</div>
            <p className="p"><a className="lnk" href={credentials.deeplearning.h} target="_blank" rel="noreferrer">{credentials.deeplearning.t}</a></p>
            <div className="tbl-h">Further certificates</div>
            <p className="p">{credentials.others}. Every credential can be verified on request.</p>
            <div className="tbl-h">FIAP</div>
            <p className="p">{credentials.fiap}</p>
          </div>
        </details>

        <details className="dz">
          <summary><span><div className="dz-t">Guinness World Records application</div><div className="dz-s">28 unedited livestreamed working days, November 2024</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            <p className="p" style={{ marginTop: 14 }}>{credentials.guinness}</p>
            <div className="chips">
              {credentials.guinnessSessions.map((id, i) => (
                <a key={id} className="chip-x" href={`https://youtube.com/live/${id}`} target="_blank" rel="noreferrer">
                  Session {String(i + 1).padStart(2, '0')}
                </a>
              ))}
            </div>
          </div>
        </details>

        <details className="dz">
          <summary><span><div className="dz-t">Skills and tools</div><div className="dz-s">Machine learning, systems, infrastructure, languages</div></span><span className="dz-i">Open</span></summary>
          <div className="dz-b">
            {credentials.skills.map((g) => (
              <div key={g.t} style={{ marginTop: 14 }}>
                <div className="card-k">{g.t}</div>
                <div className="chips">{g.v.map((t) => <span className="chip-x" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </details>
      </section>

      <section className="sec"><ContactBand /></section>
    </div>
  );
}
