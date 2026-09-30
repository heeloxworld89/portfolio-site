import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links, news, publications } from "../data";

type Mark = { name: string; logo?: string; word?: string; verb: "Reviewed" | "Selected" | "Interviewed"; note: string; href?: string };

const L = "/assets/images/logos/";
const marks: Mark[] = [
  { name: "DeepMath 2026", word: "DeepMath", verb: "Reviewed", note: "Paper accepted after double-blind review", href: "https://deepmath-conference.com/" },
  { name: "NeurIPS 2026", word: "NeurIPS", verb: "Selected", note: "Workshop programme committee" },
  { name: "Cosmos Institute", logo: L + "cosmos-institute.svg", verb: "Reviewed", note: "Ranked highest in its grant cycle" },
  { name: "1752vc", logo: L + "1752vc.png", verb: "Selected", note: "Ignite cohort, top 1% of applicants" },
  { name: "Antler", logo: L + "antler.svg", verb: "Selected", note: "Offered a place" },
  { name: "The Bridge", logo: L + "the-bridge.png", verb: "Interviewed", note: "Two rounds, final selection" },
  { name: "Entrepreneur First", logo: L + "entrepreneur-first.svg", verb: "Interviewed", note: "First-round interview, London" },
  { name: "Freshmango", logo: L + "freshmango.png", verb: "Interviewed", note: "Accepted after interview" },
  { name: "IARCO 2026", logo: L + "iarco-dark.png", verb: "Reviewed", note: "Finalist" },
  { name: "Cohere Labs", logo: L + "cohere.svg", verb: "Selected", note: "Open Science Community" },
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
              Author of ORMAS, the self-correcting architecture accepted at DeepMath 2026, and founder of the company
              licensing it to regulated industries.
            </p>
            <div className="rx-btns">
              <Link className="rx-btn" to="/research">Read the research <Arrow /></Link>
              <a className="rx-btn is-ghost" href={links.cv} target="_blank" rel="noreferrer">Download CV <Arrow /></a>
            </div>
          </div>

          <figure className="rx-h3-visual">
            <svg viewBox="0 0 700 760" role="img" aria-label="Portrait of Rokib Al Dhin Raadh">
              <defs>
                <radialGradient id="rx-disc" cx="62%" cy="30%" r="80%">
                  <stop offset="0" stopColor="#d8ee96" />
                  <stop offset=".45" stopColor="#98e0a0" />
                  <stop offset="1" stopColor="#64c3d3" />
                </radialGradient>
                <clipPath id="rx-cut">
                  <path d="M-40,-40 H740 V390 H670 A320,320 0 0 1 30,390 H-40 Z" />
                </clipPath>
              </defs>
              <circle className="rx-h3-ring" cx="350" cy="390" r="346" />
              <circle cx="350" cy="390" r="320" fill="url(#rx-disc)" />
              <image
                href="/assets/images/portrait-cut.webp"
                x="0" y="20" width="700" height="700"
                clipPath="url(#rx-cut)"
                preserveAspectRatio="xMidYMid meet"
              />
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
            <h2 id="rx-sel-h">
              Selected. Reviewed. <em>Interviewed.</em>
            </h2>
            <p>
              Ten programmes, review panels and committees across research and venture, all in 2026 and all before
              his nineteenth birthday.
            </p>
          </div>
          <ul className="rx-logos">
            {marks.map((m) => (
              <li key={m.name} className={m.logo ? undefined : "is-word"}>
                <span className="rx-logo-verb">{m.verb}</span>
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
          <Link className="rx-sel-more" to="/about">The full record <Arrow /></Link>
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
              serves on the programme committee of the{" "}
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
            </div>
          </div>

          <div className="rx-figs" role="list">
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v is-age">18</div>
              <div className="rx-fig-k">years old · founder &amp; CEO</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">383</div>
              <div className="rx-fig-k">controlled experiments, one GPU</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">+70.3</div>
              <div className="rx-fig-k">pp recovery after a layer is destroyed</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">2026</div>
              <div className="rx-fig-k">DeepMath · NeurIPS programme committee</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── news ─────────────────────────────────────────────────────── */}
      <section className="rx-sec" id="news">
        <div className="rx-wrap">
          <h2 className="rx-label">News <small>updated 30 September 2026</small></h2>

          <article className="rx-feature">
            <div className="rx-feature-visual">
              <div className="k">Accepted · Poster · Double-blind</div>
              <div className="v">DeepMath<br />2026</div>
              <div className="s">Conference on the Mathematical Theory of Deep Neural Networks · Ohio State University · 29–30 October</div>
            </div>
            <div>
              <h3>
                <a href={featured.href} target="_blank" rel="noreferrer">{featured.title}</a>
              </h3>
              <p>{featured.body}</p>
              <p>
                The paper formalises the stability guarantee underneath ORMAS: each self-correction is treated as a
                bounded disturbance, and the weight trajectory is shown to remain bounded under it.
              </p>
              <div className="rx-meta">Date: <b>{featured.date}</b> &nbsp;·&nbsp; By: <b>Rokib Al Dhin Raadh</b></div>
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

      {/* ── company + earlier work ───────────────────────────────────── */}
      <section className="rx-sec" id="work">
        <div className="rx-wrap">
          <h2 className="rx-label">Work</h2>
          <div className="rx-grid">
            <div className="rx-cell">
              <div className="k">Company · founded 2023</div>
              <h3>OXIEDO</h3>
              <p>
                Licenses ORMAS on-premise to regulated industries, producing a tamper-evident record of what a model
                learned during training, for model-risk teams and the EU AI Act&rsquo;s high-risk obligations.
              </p>
              <a className="more" href={links.oxiedo} target="_blank" rel="noreferrer">oxiedo.com ↗</a>
            </div>
            <div className="rx-cell">
              <div className="k">System · 2023–2025</div>
              <h3>OXIMO</h3>
              <p>
                A 40,933-line multi-agent operating system that turns a one-sentence brief into an organisation and
                creates the specialist roles it lacks. 2,069 passing tests.
              </p>
              <Link className="more" to="/work">Details →</Link>
            </div>
            <div className="rx-cell">
              <div className="k">Field study · 2025–2026</div>
              <h3>Black Bloxie LTD</h3>
              <p>
                A twelve-month controlled study on a live UK company: removing OXIMO cut output by 91%, and restoring it
                brought output back above its original level.
              </p>
              <Link className="more" to="/work">Details →</Link>
            </div>
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
                <a href={links.x} target="_blank" rel="noreferrer">X</a>
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
