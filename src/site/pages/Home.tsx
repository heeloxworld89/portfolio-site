import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links, news, publications } from "../data";

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
      <section className="rx-hero" id="home">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap rx-hero-grid">
          <div className="rx-portrait">
            <img
              src="/assets/images/banner/header-left-user.jpg"
              alt="Portrait of Rokib Al Dhin Raadh"
              width={700}
              height={700}
              fetchPriority="high"
            />
          </div>
          <h1>
            Founder of OXIEDO and peer-reviewed AI&nbsp;researcher, at <span className="rx-age">eighteen</span>
          </h1>
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
