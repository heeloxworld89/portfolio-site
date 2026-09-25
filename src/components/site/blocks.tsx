import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/common/Icon';
import { links, ormas, paper, person, recognition, timeline, type Recognition } from '@/data/facts';

export function SecHead({ k, title, lead, id }: { k: string; title: ReactNode; lead?: ReactNode; id?: string }) {
  return (
    <div className="sec-head" id={id}>
      <span className="k"><span className="k-dot" aria-hidden="true" />{k}</span>
      <h2 className="h2">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

export function PageHead({ k, title, lead, children }: { k: string; title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <header className="sec" style={{ paddingTop: 8 }}>
      <span className="k"><span className="k-dot" aria-hidden="true" />{k}</span>
      <h1 className="h1">{title}</h1>
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </header>
  );
}

export function MoreLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <div className="sec-more">
      <Link className="lnk" to={to}>{children} <Icon name="arrowRight" size={13} /></Link>
    </div>
  );
}

export function Stats({ items }: { items: { v: string; l: string; a?: boolean }[] }) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div className="stat" key={s.l}>
          <div className={`stat-v${s.a ? ' is-a' : ''}`}>{s.v}</div>
          <div className="stat-l">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

/** The single experiment that carries the research claim. */
export function ProofCard() {
  return (
    <div className="proof">
      <span className="k">The result that matters</span>
      <p className="proof-q">A trained network has one of its layers destroyed mid-training. What happens next?</p>
      <div className="bar is-good">
        <div className="bar-top"><span className="bar-n">ORMAS</span><span className="bar-v">{ormas.lesion.ormas}</span></div>
        <div className="bar-t"><div className="bar-f" style={{ width: '80.3%' }} /></div>
        <div className="bar-s">Finds the damage within one epoch and repairs itself — {ormas.lesion.corrections} logged repairs, each with its cause.</div>
      </div>
      <div className="bar is-bad">
        <div className="bar-top"><span className="bar-n">Standard network, same size</span><span className="bar-v">{ormas.lesion.base}</span></div>
        <div className="bar-t"><div className="bar-f" style={{ width: '10%' }} /></div>
        <div className="bar-s">Collapses to chance and never recovers, on every seed.</div>
      </div>
      <div className="proof-gap"><b>{ormas.lesion.gap}</b><span>recovery gap · CIFAR-10 · 3 seeds</span></div>
    </div>
  );
}

const logoOrder = ['neurips', '1752vc', 'freshmango', 'cosmos', 'ef', 'antler'];

export function LogoStrip() {
  const items = logoOrder.map((k) => recognition.find((r) => r.key === k)!).filter(Boolean);
  return (
    <div className="logos">
      <div className="logos-k">Selected, ranked or accepted by</div>
      <div className="logos-row">
        {items.map((r) => (
          <Link to={`/recognition#${r.key}`} key={r.key} className={`logo-chip${r.logoDark ? ' is-dark' : ''}`} title={`${r.org} — ${r.outcome}`}>
            <img src={r.logo} alt={r.org} loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function RecognitionCard({ r }: { r: Recognition }) {
  return (
    <article className="card-x rc" id={r.key}>
      <div className="rc-top">
        <span className={`rc-logo${r.logoDark ? ' is-dark' : ''}`}><img src={r.logo} alt={r.org} loading="lazy" /></span>
        <span className="rc-date">{r.date}</span>
      </div>
      <span className="rc-out">{r.outcome}</span>
      <h3 className="h3">{r.headline}</h3>
      <p className="p">{r.body}</p>
      {r.stats ? (
        <div className="rc-stats">
          {r.stats.map((s) => (
            <div className="rc-stat" key={s.l}><b>{s.v}</b><span>{s.l}</span></div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function Timeline({ items = timeline }: { items?: readonly { year: string; age: string; title: string; body: string }[] }) {
  return (
    <div className="tl">
      {items.map((t) => (
        <div className="tl-row" key={t.title}>
          <div className="tl-when"><div className="tl-y">{t.year}</div><div className="tl-a">age {t.age}</div></div>
          <div className="tl-sp"><span className="tl-dot" /></div>
          <div className="tl-body"><div className="tl-t">{t.title}</div><div className="tl-d">{t.body}</div></div>
        </div>
      ))}
    </div>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={`lnk${done ? ' copied' : ''}`}
      style={{ background: 'none', border: 0, padding: 0 }}
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        }).catch(() => {});
      }}
    >
      <Icon name={done ? 'check' : 'copy'} size={13} /> {done ? 'Copied' : label}
    </button>
  );
}

export function PaperCard({ withCite = false }: { withCite?: boolean }) {
  return (
    <div>
      <div className="paper">
        <div>
          <span className="k">{paper.status}</span>
          <div className="paper-t">{paper.title}</div>
          <div className="paper-m">
            <span><b>{person.name}</b></span>
            <span>DOI <b>{paper.doi}</b></span>
            <span>{paper.version} · {paper.publishedLabel}</span>
            <span>{paper.license}</span>
          </div>
        </div>
        <div className="btns">
          <a className="btn-x is-p" href={links.preprint} target="_blank" rel="noreferrer"><Icon name="fileText" size={15} /> Read the preprint</a>
          <a className="btn-x" href={links.preprintPdf} target="_blank" rel="noreferrer"><Icon name="download" size={15} /> PDF</a>
        </div>
      </div>
      {withCite ? (
        <div className="cite card-x" id="cite">
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <span className="card-k" style={{ margin: 0 }}>Cite this work</span>
            <span style={{ display: 'flex', gap: 18 }}>
              <CopyButton text={paper.bibtex} label="Copy BibTeX" />
              <CopyButton text={paper.apa} label="Copy APA" />
            </span>
          </div>
          <pre>{paper.bibtex}</pre>
        </div>
      ) : null}
    </div>
  );
}

export function ContactBand({ title = 'Let’s talk.', body }: { title?: string; body?: ReactNode }) {
  return (
    <div className="cta-band">
      <div>
        <h2 className="h2" style={{ marginTop: 0 }}>{title}</h2>
        <p className="p">
          {body ?? <>Investors, programme teams, reviewers and press — every email is read and answered personally, usually within a day.</>}
        </p>
      </div>
      <div className="btns" style={{ marginTop: 0 }}>
        <a className="btn-x" href={links.mail}><Icon name="mail" size={15} /> {person.email}</a>
        <Link className="btn-x is-ghost" to="/press"><Icon name="mic" size={15} /> Press kit</Link>
      </div>
    </div>
  );
}
