import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links, news, publications } from "../data";

type Mark = { name: string; logo?: string; word?: string; tag: string; note: string };

const L = "/assets/images/logos/";
const marks: Mark[] = [
  { name: "DeepMath 2026", word: "DeepMath", tag: "Peer-Reviewed", note: "Stability paper selected for poster presentation at Ohio State" },
  { name: "NeurIPS 2026", word: "NeurIPS", tag: "Reviewer", note: "Invited to review for the Trustworthy AI for Good workshop" },
  { name: "Cosmos Institute", logo: L + "cosmos-institute.svg", tag: "Ranked First", note: "The top-ranked application of its grant cycle" },
  { name: "1752vc Ignite", logo: L + "1752vc.png", tag: "Top 1%", note: "Chosen for the Ignite cohort from the top 1% of applicants" },
  { name: "Antler Australia", logo: L + "antler.svg", tag: "Cancelled · Work Permit", note: "In the programme process until it was cancelled over Australian work-permit logistics" },
  { name: "The Bridge", logo: L + "the-bridge.png", tag: "Holding · Final Round", note: "Two interview rounds done; holding in the final round" },
  { name: "Entrepreneur First", logo: L + "entrepreneur-first.svg", tag: "Invited to Interview", note: "Called in by the talent team for a first-round interview in London" },
  { name: "Freshmango", logo: L + "freshmango.png", tag: "Offer Extended", note: "Offered a place in the equity-free accelerator after interview" },
  { name: "IARCO 2026", logo: L + "iarco-dark.png", tag: "Finalist", note: "Finalist, International Academic Research Competition" },
  { name: "Cohere Labs", logo: L + "cohere.svg", tag: "Research Community", note: "Member of the Open Science Community" },
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
      {/* ── hero ─────────────────────────────────────────────────────── */}
      <section className="rx-hero2 rx-hero3" id="home">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap rx-h2-grid">
          <div className="rx-h2-copy">
            <p className="rx-h2-eb">
              <span className="dot" aria-hidden="true" /> Founder &amp; CEO, OXIEDO <i /> AI researcher <i className="rx-h2-hide" /> <span className="rx-h2-hide">Dhaka</span>
            </p>
            <h1>
              Building neural networks that can account for what they learned.
              <span className="rx-h2-age">Peer-reviewed at <em>eighteen.</em></span>
            </h1>
            <p className="rx-h2-sub">
              Every AI model on earth is a black box. <b>OXIEDO</b> is ending that. Its engine, ORMAS, finds its own
              broken parts, repairs them mid-training and writes a tamper-evident record of every change, so banks,
              hospitals and defence teams can finally train AI on the data they have been locked out of.
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
              <span>Dhaka · 2026</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── selected / reviewed / interviewed ────────────────────────── */}
      <section className="rx-sel" aria-labelledby="rx-sel-h">
        <div className="rx-wrap">
          <div className="rx-sel-head">
            <div>
              <p className="rx-sel-eb">Recognition · 2026</p>
              <h2 id="rx-sel-h">
                Vetted by the rooms <em>that are hardest to enter.</em>
              </h2>
            </div>
            <p>
              Double-blind peer review, a NeurIPS reviewer role and the most selective accelerators in venture:
              ten independent panels, one year.
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
                    <span className="rx-logo-word">{m.word}<i>2026</i></span>
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
              <strong>Rokib Al Dhin Raadh</strong> is the Founder and CEO of{" "}
              <a href={links.oxiedo} target="_blank" rel="noreferrer">OXIEDO</a> and the author of{" "}
              <Link to="/research">ORMAS</Link>, a neural network architecture that identifies, repairs and records its
              own failures while it trains. His stability analysis of self-correcting training was accepted at{" "}
              <a href={links.deepmath} target="_blank" rel="noreferrer">DeepMath 2026</a> after double-blind review. He
              is a reviewer for the{" "}
              <a href={links.neurips} target="_blank" rel="noreferrer">NeurIPS 2026 Trustworthy AI for Good</a> workshop
              and is a member of Cohere Labs&rsquo; Open Science Community.
            </p>
            <p>
              Self-taught and working independently from Dhaka, Bangladesh, he ran 383 controlled experiments on a
              single GPU, released the full work as an open preprint with reproducible code, and founded OXIEDO to
              license the architecture to regulated industries that need an auditable record of what their models
              learned. Before ORMAS he built OXIMO, a 40,933-line multi-agent operating system, and founded five
              ventures between the ages of twelve and seventeen.
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
              <div className="rx-fig-k">Founder and CEO at eighteen</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">383</div>
              <div className="rx-fig-k">Controlled experiments on a single GPU</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">+70.3</div>
              <div className="rx-fig-k">Percentage-point recovery after a layer is destroyed</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">2026</div>
              <div className="rx-fig-k">DeepMath acceptance and NeurIPS reviewer</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── company + earlier work ───────────────────────────────────── */}
      <section className="rx-sec" id="work">
        <div className="rx-wrap">
          <h2 className="rx-label">Work</h2>

          <article className="rx-work-hero">
            <div className="rx-work-hero-copy">
              <div className="k">Company · founded 2023</div>
              <h3>OXIEDO</h3>
              <p>
                Licenses ORMAS on-premise to regulated industries, producing a tamper-evident record of what a model
                learned during training, for model-risk teams and the EU AI Act&rsquo;s high-risk obligations.
              </p>
              <div className="rx-btns">
                <a className="rx-btn is-light" href={links.oxiedo} target="_blank" rel="noreferrer">oxiedo.com <Arrow /></a>
                <a className="rx-btn is-outline-light" href={links.deck} target="_blank" rel="noreferrer">Investor deck <Arrow /></a>
              </div>
            </div>
            <div className="rx-work-hero-stats">
              <div><b>ORMAS</b><span>On-premise licence</span></div>
              <div><b>Dec 2027</b><span>EU AI Act high-risk obligations</span></div>
              <div><b>+70.3pp</b><span>Recovery after a layer is destroyed</span></div>
            </div>
          </article>

          <div className="rx-work-pair">
            <article className="rx-work-card">
              <div className="k">System · 2023–2025</div>
              <div className="rx-work-num">40,933<small>lines</small></div>
              <h3>OXIMO</h3>
              <p>
                A 40,933-line multi-agent operating system that turns a one-sentence brief into an organisation and
                creates the specialist roles it lacks. 2,069 passing tests.
              </p>
              <Link className="more" to="/work">Details →</Link>
            </article>
            <article className="rx-work-card">
              <div className="k">Field study · 2025–2026</div>
              <div className="rx-work-num">−91%<small>output without OXIMO</small></div>
              <h3>Black Bloxie LTD</h3>
              <p>
                A twelve-month controlled study on a live UK company: removing OXIMO cut output by 91%, and restoring it
                brought output back above its original level.
              </p>
              <Link className="more" to="/work">Details →</Link>
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
                DeepMath, the Conference on the Mathematical Theory of Deep Neural Networks, takes theory only and
                reviews it double-blind. Specialists judged the proof without knowing who wrote it, or that he is
                eighteen and self-taught. This year it is hosted by <b>Ohio State</b> and organised by researchers from{" "}
                <b>Johns Hopkins</b> and <b>Michigan</b>, with invited speakers from <b>Stanford</b> and <b>UPenn</b>; past
                editions were supported by the <b>National Science Foundation</b> and the <b>Simons Foundation</b>. He
                presents on 29–30 October.
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

          <div className="rx-rows" style={{ marginTop: 40 }}>
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
            <Link className="rx-btn" to="/about">All recognition <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* ── research ─────────────────────────────────────────────────── */}
      <section className="rx-sec" id="research">
        <div className="rx-wrap">
          <h2 className="rx-label">Research</h2>
          <div className="rx-split">
            <div>
              <p>
                <strong>Neural networks cannot say which of their parts failed.</strong> A single error signal updates
                every parameter at once, so interpretability has worked from the outside, reconstructing a finished
                model&rsquo;s behaviour after the fact.
              </p>
              <p>
                ORMAS takes the opposite approach. It bounds each node&rsquo;s path to the loss at four operations, so
                every component can be measured while the network trains. Three signals run together: global
                backpropagation, a per-node local loss through a shared bottleneck, and health-gated self-correction
                that diagnoses a failing node, repairs it, and logs the repair with its cause.
              </p>
              <p>
                The stability of that process is characterised with Sontag&rsquo;s Input-to-State Stability framework,
                the first formal local stability result for a self-correcting architecture.
              </p>
              <div className="rx-btns">
                <Link className="rx-btn" to="/research">Read the research <Arrow /></Link>
                <a className="rx-btn is-ghost" href={links.preprint} target="_blank" rel="noreferrer">Preprint <Arrow /></a>
              </div>
            </div>
            <div className="rx-result">
              <div className="k">One layer destroyed at epoch 100 · CIFAR-10 · 3 seeds</div>
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
                chance on every seed. Full tables, ablations and adverse results are on the research page.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── publications ─────────────────────────────────────────────── */}
      <section className="rx-sec" id="publications">
        <div className="rx-wrap">
          <h2 className="rx-label">Publications</h2>
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
          <h2 className="rx-label">Contact</h2>
          <div className="rx-grid">
            <div className="rx-cell">
              <h4>Research and press</h4>
              <p><a href={`mailto:${links.email}`}>{links.email}</a></p>
              <p>Replies are typically sent within one working day.</p>
            </div>
            <div className="rx-cell">
              <h4>OXIEDO and investors</h4>
              <p><a href={`mailto:${links.companyEmail}`}>{links.companyEmail}</a></p>
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
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
