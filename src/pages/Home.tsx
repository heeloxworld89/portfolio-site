import { Link } from 'react-router-dom';
import Icon from '@/components/common/Icon';
import { company, links, ormas, person, recognition, blackBloxie } from '@/data/facts';
import { ContactBand, LogoStrip, MoreLink, PaperCard, ProofCard, RecognitionCard, SecHead, Stats, Timeline } from '@/components/site/blocks';

export default function Home() {
  const featured = recognition.filter((r) => r.featured);

  return (
    <div className="container">
      {/* ══ Hero ══════════════════════════════════════════════════ */}
      <section className="sec" style={{ paddingTop: 8 }} aria-label="Introduction">
        <div className="hero">
          <div>
            <div className="hero-id">
              <span>{person.name}</span><i /><b>Founder &amp; CEO, OXIEDO</b><i /><span>{person.age}</span><i /><span>{person.location}</span>
            </div>
            <h1 className="h1">
              Neural networks that can see inside themselves — <em>and fix what they find.</em>
            </h1>
            <p className="lead">
              I founded <strong>OXIEDO</strong> to license <strong>ORMAS</strong>, the training architecture I invented. It records
              every change a model makes to itself while it learns — which part, when, why — and repairs failures as they happen.
              That audit trail is what lets banks, hospitals and AI labs train on data that can never leave the building.
            </p>
            <div className="btns">
              <a className="btn-x is-p" href={links.company} target="_blank" rel="noreferrer">
                Visit OXIEDO <Icon name="externalLink" size={14} />
              </a>
              <a className="btn-x" href={links.preprint} target="_blank" rel="noreferrer">
                <Icon name="fileText" size={15} /> Read the preprint
              </a>
              <a className="btn-x" href={links.mail}>
                <Icon name="mail" size={15} /> Get in touch
              </a>
            </div>
          </div>
          <ProofCard />
        </div>

        <LogoStrip />
      </section>

      {/* ══ The company ═══════════════════════════════════════════ */}
      <section className="sec" id="company">
        <SecHead
          k="The company · OXIEDO"
          title="The best data in the world is locked away. OXIEDO is the key."
          lead={
            <>
              Patient records, bank ledgers, licensed corpora: institutions cannot train on them because no model can account
              for what it did with the data. <strong>ORMAS produces that account while the model trains</strong> — so the data
              that was off-limits becomes usable, inside the institution’s own walls.
            </>
          }
        />

        <Stats
          items={[
            { v: 'Founded 2023', l: 'Founder & CEO: Rokib Al Dhin Raadh' },
            { v: 'One licence', l: 'The ORMAS architecture, deployed on the customer’s own infrastructure' },
            { v: 'Five sectors', l: 'AI training · finance · medical · data obligation · defence' },
            { v: company.stage, l: 'Delaware C-corp in formation · HQ moving to San Francisco', a: true },
          ]}
        />

        <div className="g3" style={{ marginTop: 14 }}>
          {company.sectors.slice(0, 3).map((s) => (
            <div className="card-x" key={s.n}>
              <div className="card-k">{s.n}</div>
              <p className="p" style={{ margin: 0, color: 'var(--pf-ink)', fontWeight: 600 }}>{s.q}</p>
            </div>
          ))}
        </div>

        <div className="note-x">
          <p className="p">
            <strong>Why now.</strong> {company.whyNow.map((w) => `${w.k}: ${w.v}`).join(' ')} Regulated buyers need models that can
            show their working — and ORMAS produces that record by construction.
          </p>
        </div>

        <div className="btns">
          <a className="btn-x is-p" href={links.company} target="_blank" rel="noreferrer">oxiedo.com <Icon name="externalLink" size={14} /></a>
          <a className="btn-x" href={links.invest} target="_blank" rel="noreferrer"><Icon name="chart" size={15} /> Investors</a>
          <a className="btn-x" href={links.deck} target="_blank" rel="noreferrer"><Icon name="download" size={15} /> Company deck</a>
        </div>
      </section>

      {/* ══ The research ══════════════════════════════════════════ */}
      <section className="sec" id="research">
        <SecHead
          k="The research · ORMAS"
          title="A network that knows which part of itself is broken — and repairs it."
          lead={
            <>
              Standard neural networks fail silently: one error signal touches every parameter, so when something breaks
              inside, nothing says what. ORMAS gives every component its own health signal. The result is a network that
              diagnoses, repairs and documents itself, mid-training, with no human in the loop.
            </>
          }
        />

        <Stats
          items={[
            { v: ormas.lesion.ormas, l: `Recovery after a layer is destroyed — standard networks stay at ${ormas.lesion.base}`, a: true },
            { v: ormas.retention.ormas, l: `Earlier skills retained after learning a new task — standard ResNet-18: ${ormas.retention.base}` },
            { v: `${ormas.noise.ormasDecay} vs ${ormas.noise.baseDecay}`, l: 'Accuracy lost when 40% of training labels are wrong' },
            { v: String(ormas.experiments), l: `Controlled experiments, ${ormas.families} architecture families, one GPU` },
          ]}
        />

        <div style={{ marginTop: 18 }}>
          <PaperCard />
        </div>
        <MoreLink to="/research">The full research: results, method and the preprint</MoreLink>
      </section>

      {/* ══ Recognition ═══════════════════════════════════════════ */}
      <section className="sec" id="recognition">
        <SecHead
          k="Recognition · 2026"
          title="Selected by the programmes that pick early."
          lead="Outside decisions from 2026 — by accelerators, a grant panel and the field’s flagship conference."
        />
        <div className="g2">
          {featured.map((r) => <RecognitionCard r={r} key={r.key} />)}
        </div>
        <MoreLink to="/recognition">All recognition, including Entrepreneur First and Antler</MoreLink>
      </section>

      {/* ══ The path ══════════════════════════════════════════════ */}
      <section className="sec" id="path">
        <SecHead
          k="Track record"
          title="Six years, one chain. Every step built the next."
          lead={
            <>
              Five ventures taught one lesson — the limit is coordination. That produced OXIMO; running a live company on OXIMO
              ({blackBloxie.customers} paying customers in {blackBloxie.countries} countries) exposed the problem inside the
              model itself. That produced ORMAS. ORMAS became OXIEDO.
            </>
          }
        />
        <Timeline />
        <MoreLink to="/work">OXIMO, Black Bloxie and the five ventures in detail</MoreLink>
      </section>

      <section className="sec" id="contact">
        <ContactBand />
        <p className="muted" style={{ marginTop: 14 }}>
          Programme teams and grant panels: approved bios and key facts are on the <Link to="/press" className="lnk">press kit</Link>.
        </p>
      </section>
    </div>
  );
}
