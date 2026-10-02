import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links, news, publications } from "../data";
import "../ux/home.css";

type Mark = { name: string; logo?: string; word?: string; sup?: string; tag: string; note: string };

const L = "/assets/images/logos/";
const marks: Mark[] = [
  { name: "DeepMath 2026", word: "DeepMath", tag: "Accepted · Double-Blind", note: "Stability paper on self-repairing neural networks accepted after double-blind review; poster at Ohio State" },
  { name: "NeurIPS 2026", word: "NeurIPS", tag: "Reviewer", note: "Reviewer for the Trustworthy AI for Good workshop, invited to judge submissions on AI auditing" },
  { name: "Cosmos Institute", logo: L + "cosmos-institute.svg", tag: "Ranked First", note: "ORMAS was the highest-ranked application in its cycle" },
  { name: "1752vc Ignite", logo: L + "1752vc.png", tag: "Top 1%", note: "OXIEDO accepted to the Ignite cohort from the top 1% of applicants" },
  { name: "The Bridge", logo: L + "the-bridge.png", tag: "Holding · Final Round", note: "Entrepreneur First's San Francisco programme: through two interview rounds, holding in the final round" },
  { name: "Onstage W26", word: "Onstage", sup: "W26", tag: "Invited · Pre-Pitch", note: "Invited to the W26 pre-pitch event in London; Onstage ranks founders by interest from 350 venture funds" },
  { name: "Entrepreneur First", logo: L + "entrepreneur-first.svg", tag: "Invited to Interview", note: "Invited by the talent team to a first-round interview in London" },
  { name: "Freshmango", logo: L + "freshmango.png", tag: "Offer Extended", note: "Offered a place in the equity-free accelerator after a single interview" },
  { name: "IARCO 2026", logo: L + "iarco-dark.png", tag: "Finalist", note: "International Academic Research Competition finalist, from 500+ entries across 60 countries" },
  { name: "Cohere Labs", logo: L + "cohere.svg", tag: "Research Community", note: "Open Science Community member; Cohere cited his solo work on ORMAS for “remarkable initiative in ML safety and auditability”" },
];

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export default function Home() {
  const [featured, ...rest] = news;
  return (
    <SiteLayout>
      <div className="ux-home">
      {/* ── hero ─────────────────────────────────────────────────────── */}
      <section className="rx-hero2 rx-hero3" id="home">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap rx-h2-grid">
          <div className="rx-h2-copy">
            <p className="rx-h2-eb">
              <span className="dot" aria-hidden="true" /> <b className="ux-age">18 years old</b> <i /> Founder &amp; CEO, OXIEDO <i className="rx-h2-hide" /> <span className="rx-h2-hide">Inventor of ORMAS</span>
            </p>
            <h1>
              Building neural networks that can account for what they learned.
              <span className="rx-h2-age">Peer-reviewed in the United States at <em>eighteen.</em></span>
            </h1>
            <p className="rx-h2-sub">
              Every AI model on earth is a black box. <b>OXIEDO</b> is ending that. Its engine, ORMAS, finds its own
              broken parts, repairs them mid-training and writes a tamper-evident record of every change, so banks,
              hospitals and defence teams can finally train AI on the data they have been locked out of. Raadh built it
              at 18 on a single graphics card he paid for himself. In September, DeepMath at Ohio State accepted the
              mathematics behind it.
            </p>
            <div className="rx-btns">
              <a className="rx-btn is-cta" href={links.oxiedo} target="_blank" rel="noreferrer">Enter OXIEDO <Arrow /></a>
              <Link className="rx-btn is-ghost" to="/research">Read the research <Arrow /></Link>
            </div>
          </div>

          <figure className="rx-h3-visual">
            <svg viewBox="0 0 700 760" role="img" aria-label="Portrait of Rokib Al Dhin Raadh">
              <defs>
                <clipPath id="rx-disc-clip">
                  <circle cx="350" cy="390" r="320" />
                </clipPath>
              </defs>
              <circle className="rx-h3-ring" cx="350" cy="390" r="346" />
              <g clipPath="url(#rx-disc-clip)">
                <image
                  href="/assets/images/portrait.webp"
                  x="20" y="60" width="660" height="660"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
            <figcaption>
              <span>Rokib Al Dhin Raadh</span>
              <span>UK · US · Bangladesh · 2026</span>
            </figcaption>
          </figure>
        </div>
        <div className="rx-wrap">
          <nav className="ux-jump" aria-label="On this page">
            <span className="ux-jump-k">On this page</span>
            <a href="#work">Work</a>
            <a href="#news">News</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </section>

      {/* ── selected / reviewed / interviewed ────────────────────────── */}
      <section className="rx-sel" aria-labelledby="rx-sel-h">
        <div className="rx-wrap">
          <div className="rx-sel-head">
            <div>
              <p className="rx-sel-eb">2026</p>
              <h2 id="rx-sel-h">
                Ten panels moved him forward this year. <em>He came in cold to all of them.</em>
              </h2>
            </div>
            <p>
              DeepMath&rsquo;s reviewers accepted his paper without knowing who wrote it. NeurIPS took him on as a
              reviewer for its Paris workshop. 1752vc took OXIEDO from the top 1% of applicants, Cosmos Institute ranked
              the work first in its cycle, and Entrepreneur First&rsquo;s The Bridge in San Francisco is still holding
              him in its final round.
            </p>
          </div>
          <ul className="rx-logos">
            {marks.map((m) => (
              <li key={m.name} className={m.logo ? undefined : "is-word"}>
                <span className="rx-logo-verb">{m.tag}</span>
                <span className="rx-logo-img">
                  {m.logo ? (
                    <img src={m.logo} alt={m.name} loading="lazy" />
                  ) : (
                    <span className="rx-logo-word">{m.word}<i>{m.sup ?? "2026"}</i></span>
                  )}
                </span>
                <span className="rx-logo-note"><b>{m.name}</b>{m.note}</span>
              </li>
            ))}
          </ul>
          <Link className="rx-sel-more" to="/about">Read the full record <Arrow /></Link>
        </div>
      </section>

      {/* ── bio ──────────────────────────────────────────────────────── */}
      <section className="rx-bio">
        <div className="rx-wrap">
          <div className="rx-bio-inner">
            <p>
              <strong>Rokib Al Dhin Raadh</strong> is the 18-year-old founder and CEO of{" "}
              <a href={links.oxiedo} target="_blank" rel="noreferrer">OXIEDO</a> and the inventor of{" "}
              <Link to="/research">ORMAS</Link>, a self-repairing neural network that identifies, repairs and records its
              own failures while it trains. His stability result for self-repairing training was accepted at{" "}
              <a href={links.deepmath} target="_blank" rel="noreferrer">DeepMath 2026</a> after double-blind review. He
              is a reviewer for the{" "}
              <a href={links.neurips} target="_blank" rel="noreferrer">NeurIPS 2026 Trustworthy AI for Good</a> workshop
              and is a member of Cohere Labs&rsquo; Open Science Community.
            </p>
            <p>
              Raadh grew up in Dhaka and taught himself machine learning. He wrote all 16,316 lines of ORMAS himself
              and ran its 383 experiments on one RTX 3090, bought with the money from a stock-prediction system he
              sold at fifteen. The paper and the code are public. OXIEDO, which he founded in 2023, licenses the architecture
              to banks, hospitals and defence programmes in the UK, the EU and the US, and is setting up its US
              company in Delaware. Before ORMAS he built OXIMO, a 40,933-line multi-agent operating system with 2,069
              passing tests, and ran it through a 12-month controlled field study at Black Bloxie LTD, the company he
              incorporated in England and Wales in 2025; removing OXIMO cut output by 91%. He founded five ventures
              between the ages of twelve and seventeen, selling a stock-prediction system for about $10,000 at fifteen.
            </p>
            <div className="rx-links">
              <a href={links.cv} target="_blank" rel="noreferrer">CV <Arrow /></a>
              <a href={links.doi} target="_blank" rel="noreferrer">Preprint <Arrow /></a>
              <a href={links.code} target="_blank" rel="noreferrer">Code <Arrow /></a>
              <a href={links.orcid} target="_blank" rel="noreferrer">ORCID <Arrow /></a>
              <a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href={links.x} target="_blank" rel="noreferrer">X <Arrow /></a>
              <a href={links.substack} target="_blank" rel="noreferrer">Substack <Arrow /></a>
              <a href={links.youtube} target="_blank" rel="noreferrer">YouTube <Arrow /></a>
            </div>
          </div>

          <div className="rx-figs" role="list">
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v is-age">18</div>
              <div className="rx-fig-k">Founder and CEO of OXIEDO, inventor of ORMAS</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">383</div>
              <div className="rx-fig-k">Controlled experiments, run solo on one GPU</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">+70.3</div>
              <div className="rx-fig-k">Percentage points over the baseline after a layer is destroyed (80.3% vs 10.0%)</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">2026</div>
              <div className="rx-fig-k">Accepted at DeepMath after double-blind review; NeurIPS reviewer</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── company + earlier work ───────────────────────────────────── */}
      <section className="rx-sec" id="work">
        <div className="rx-wrap">
          <h2 className="rx-label">Work <small>OXIEDO · OXIMO · Black Bloxie</small></h2>

          <article className="rx-work-hero">
            <div className="rx-work-hero-copy">
              <div className="k">Deep-tech AI company · founded 2023 · Founder &amp; CEO</div>
              <h3>OXIEDO</h3>
              <p>
                OXIEDO licenses ORMAS, the self-repairing neural network Raadh invented, on-premise to regulated
                industries. Every training run produces a tamper-evident record of what the model learned: evidence
                for model-risk teams and the EU AI Act&rsquo;s high-risk obligations.
              </p>
              <div className="rx-btns">
                <a className="rx-btn is-light" href={links.oxiedo} target="_blank" rel="noreferrer">oxiedo.com <Arrow /></a>
                <a className="rx-btn is-outline-light" href={links.deck} target="_blank" rel="noreferrer">Investor deck <Arrow /></a>
              </div>
            </div>
            <div className="rx-work-hero-stats">
              <div><b>ORMAS</b><span>On-premise licence</span></div>
              <div><b>Dec 2027</b><span>EU AI Act high-risk obligations</span></div>
              <div><b>+70.3pp</b><span>Over the baseline after a layer is destroyed</span></div>
            </div>
          </article>

          <div className="rx-work-pair">
            <article className="rx-work-card">
              <div className="k">System · 2023–2025</div>
              <div className="rx-work-num">40,933<small>lines</small></div>
              <h3>OXIMO</h3>
              <p>
                A 40,933-line multi-agent operating system with 2,069 passing tests. It turns a one-sentence brief into
                a working organisation and creates the specialist roles it lacks.
              </p>
              <Link className="more" to="/work">How OXIMO works →</Link>
            </article>
            <article className="rx-work-card">
              <div className="k">Field study · 2025–2026</div>
              <div className="rx-work-num">−91%<small>output without OXIMO</small></div>
              <h3>Black Bloxie LTD</h3>
              <p>
                Removing OXIMO cut output by 91%; restoring it took output above its original level. A twelve-month
                controlled study on a live UK e-commerce company.
              </p>
              <Link className="more" to="/work">Read the field study →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── news ─────────────────────────────────────────────────────── */}
      <section className="rx-sec" id="news">
        <div className="rx-wrap">
          <h2 className="rx-label">News <small>updated 30 September 2026</small></h2>

          <article className="rx-dm-card">
            <div className="rx-dm-main">
              <p className="rx-dm-k"><span className="dot" aria-hidden="true" /> Accepted · Double-blind review · Poster</p>
              <h3>
                The mathematics behind ORMAS passed blind review at <em>DeepMath&nbsp;2026.</em>
              </h3>
              <p className="rx-dm-lede">
                Raadh&rsquo;s stability result for ORMAS, the self-repairing neural network, was accepted for poster
                presentation at DeepMath 2026, the Conference on the Mathematical Theory of Deep Neural Networks.
                DeepMath takes theory only and reviews it double-blind: specialists judged the proof without knowing
                who wrote it, or that he is eighteen and self-taught.
              </p>
              <p className="rx-dm-lede">
                This year it is hosted by <b>Ohio State</b> and organised by researchers from{" "}
                <b>Johns Hopkins</b> and <b>Michigan</b>, with invited speakers from <b>Stanford</b> and <b>UPenn</b>; past
                editions were supported by the <b>National Science Foundation</b> and the <b>Simons Foundation</b>. He
                presents his poster at the conference on 29–30 October.
              </p>
              <p className="rx-dm-paper">
                &ldquo;Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training
                Dynamics&rdquo;
              </p>
              <div className="rx-meta">Date: <b>{featured.date}</b> &nbsp;·&nbsp; By: <b>Rokib Al Dhin Raadh</b></div>
              <div className="rx-btns">
                <a className="rx-btn is-light" href={links.deepmath} target="_blank" rel="noreferrer">Conference site <Arrow /></a>
                <a className="rx-btn is-outline-light" href={links.preprint} target="_blank" rel="noreferrer">ORMAS preprint <Arrow /></a>
              </div>
            </div>
          </article>

          <div className="rx-rows ux-news-rows">
            {rest.map((n) => (
              <article className="rx-row" key={n.title}>
                <div className="rx-row-date">{n.date}<span>{n.kind}</span></div>
                <div>
                  <h3>{n.href ? <a href={n.href} target="_blank" rel="noreferrer">{n.title}</a> : n.title}</h3>
                  <p>{n.body}</p>
                </div>
                {n.href ? (
                  <a className="rx-row-go" href={n.href} target="_blank" rel="noreferrer" aria-label={n.title}><Arrow /></a>
                ) : <span />}
              </article>
            ))}
          </div>
          <div className="rx-btns">
            <Link className="rx-btn" to="/about">Full recognition record <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* ── research ─────────────────────────────────────────────────── */}
      <section className="rx-sec" id="research">
        <div className="rx-wrap">
          <h2 className="rx-label">Research <small>ORMAS · self-repairing neural networks</small></h2>
          <div className="rx-split">
            <div>
              <p>
                <strong>ORMAS is a self-repairing neural network architecture: it finds its own failing components
                during training, repairs them without stopping, and logs every repair with its cause.</strong> Standard
                networks cannot say which of their parts failed. A single error signal updates every parameter at
                once, so interpretability has worked from the outside, reconstructing a finished model&rsquo;s
                behaviour after the fact.
              </p>
              <p>
                ORMAS works from the inside. It bounds each node&rsquo;s path to the loss at four operations, so every
                component can be measured while the network trains. Three signals run together: global
                backpropagation, a per-node local loss through a shared bottleneck, and health-gated self-correction
                that diagnoses a failing node, repairs it, and logs the repair with its cause.
              </p>
              <p>
                Raadh&rsquo;s analysis of that process, adapted from Sontag&rsquo;s Input-to-State Stability framework, is
                the first formal local stability result for a self-correcting neural architecture, and was accepted at
                DeepMath 2026 after double-blind review. The evidence base is 383 controlled experiments across four
                architectures, every run reproducible from seed.
              </p>
              <div className="rx-btns">
                <Link className="rx-btn" to="/research">Read the research <Arrow /></Link>
                <a className="rx-btn is-ghost" href={links.preprint} target="_blank" rel="noreferrer">Preprint <Arrow /></a>
              </div>
            </div>
            <div className="rx-result">
              <div className="k">Recovery after one layer is destroyed at epoch 100 · CIFAR-10 · 3 seeds</div>
              <div className="rx-bar">
                <div className="rx-bar-top"><span>ORMAS</span><b>80.3%</b></div>
                <div className="rx-bar-track"><div className="rx-bar-fill" style={{ width: "80.3%" }} /></div>
              </div>
              <div className="rx-bar is-bad">
                <div className="rx-bar-top"><span>Parameter-matched baseline</span><b>10.0%</b></div>
                <div className="rx-bar-track"><div className="rx-bar-fill" style={{ width: "10%" }} /></div>
              </div>
              <div className="foot">
                ORMAS locates the damage within one epoch and recovers through 85 logged repairs; the baseline stays at
                chance on every seed. Full tables and ablations are on the research page.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── publications ─────────────────────────────────────────────── */}
      <section className="rx-sec" id="publications">
        <div className="rx-wrap">
          <h2 className="rx-label">Publications <small>Peer-reviewed paper · preprint · technical report</small></h2>
          <div className="rx-pubs">
            {publications.map((p) => (
              <div className="rx-pub" key={p.title}>
                <div className="rx-pub-y">{p.year}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p className="a">{p.authors}</p>
                  <p className="v">{p.venue}</p>
                  <div className="l">
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── contact ──────────────────────────────────────────────────── */}
      <section className="rx-sec" id="contact">
        <div className="rx-wrap">
          <h2 className="rx-label">Contact <small>Press · research · investors</small></h2>
          <div className="rx-grid">
            <div className="rx-cell">
              <h4>Press, interviews and research</h4>
              <p><a href={`mailto:${links.email}`}>{links.email}</a></p>
              <p>Replies are typically sent within one working day.</p>
            </div>
            <div className="rx-cell">
              <h4>Founder: OXIEDO and investors</h4>
              <p><a href={`mailto:${links.founderEmail}`}>{links.founderEmail}</a></p>
              <p><a href={links.invest} target="_blank" rel="noreferrer">oxiedo.com/invest</a> · <a href={links.deck} target="_blank" rel="noreferrer">Investor deck (PDF)</a></p>
            </div>
            <div className="rx-cell">
              <h4>Profiles</h4>
              <p>
                <a href={links.orcid} target="_blank" rel="noreferrer">ORCID</a> ·{" "}
                <a href={links.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
                <a href={links.x} target="_blank" rel="noreferrer">X</a> ·{" "}
                <a href={links.substack} target="_blank" rel="noreferrer">Substack</a> ·{" "}
                <a href={links.youtube} target="_blank" rel="noreferrer">YouTube</a>
              </p>
              <p>Working across the UK, the US and Bangladesh</p>
            </div>
          </div>
          <a className="ux-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </section>
      </div>
    </SiteLayout>
  );
}
