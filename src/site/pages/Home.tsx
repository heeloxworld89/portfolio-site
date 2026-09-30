import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links, news, publications } from "../data";

type Mark = { name: string; logo?: string; word?: string; tag: string; note: string };

const L = "/assets/images/logos/";
const marks: Mark[] = [
  { name: "DeepMath 2026", word: "DeepMath", tag: "Accepted Blind", note: "Anonymous reviewers accepted the proof. Presenting at Ohio State, 29 October." },
  { name: "NeurIPS 2026", word: "NeurIPS", tag: "Reviewer", note: "Reviews papers for the largest AI conference in the world." },
  { name: "Cosmos Institute", logo: L + "cosmos-institute.svg", tag: "Ranked #1", note: "First out of every application in its grant round." },
  { name: "1752vc Ignite", logo: L + "1752vc.png", tag: "Top 1%", note: "Cleared the top-1% cut into the Ignite cohort." },
  { name: "Antler", logo: L + "antler.svg", tag: "Paused · Work Permit", note: "In the programme process until Australian work-permit logistics stopped it." },
  { name: "The Bridge", logo: L + "the-bridge.png", tag: "Final Round", note: "Two interviews deep. Final selection, San Francisco." },
  { name: "Entrepreneur First", logo: L + "entrepreneur-first.svg", tag: "Invited to Interview", note: "Called in by EF’s talent team for interview in London." },
  { name: "Freshmango", logo: L + "freshmango.png", tag: "Offer", note: "An offer after a single interview." },
  { name: "IARCO 2026", logo: L + "iarco-dark.png", tag: "Finalist", note: "Final stage, from 500+ entries across 60 countries." },
  { name: "Cohere Labs", logo: L + "cohere.svg", tag: "Invited Member", note: "Welcomed for “remarkable initiative in ML safety.”" },
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
              <span className="dot" aria-hidden="true" /> Founder &amp; CEO, OXIEDO <i className="rx-h2-hide" /> <span className="rx-h2-hide">Inventor of ORMAS</span> <i className="rx-h2-hide" /> <span className="rx-h2-hide">Dhaka</span>
            </p>
            <h1>
              He built the neural network that repairs itself.
              <span className="rx-h2-age">Alone. On one GPU. <span className="rx-nw">At <em>eighteen.</em></span></span>
            </h1>
            <p className="rx-h2-sub">
              Rokib Al Dhin Raadh is the founder and CEO of <b>OXIEDO</b> and the inventor of <b>ORMAS</b>: the first
              self-repairing neural network with a formal stability proof, accepted after double-blind review. No lab.
              No team. No outside capital. OXIEDO takes it to the industries that cannot run AI they cannot audit.
            </p>
            <div className="rx-btns">
              <Link className="rx-btn" to="/work">See the company <Arrow /></Link>
              <a className="rx-btn is-ghost" href={links.deck} target="_blank" rel="noreferrer">Investor deck <Arrow /></a>
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
              <span>Founder &amp; CEO, OXIEDO</span>
              <span>Dhaka · 2026</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── recognition wall ─────────────────────────────────────────── */}
      <section className="rx-sel" aria-labelledby="rx-sel-h">
        <div className="rx-wrap">
          <div className="rx-sel-head">
            <div>
              <p className="rx-sel-eb">Recognition · 2026</p>
              <h2 id="rx-sel-h">
                Ten rooms. Ten cold applications. <em>One year.</em>
              </h2>
            </div>
            <p>
              No introductions. No network. 1752vc put him in its top 1%. Cosmos ranked him first. DeepMath accepted
              him blind. NeurIPS made him a reviewer.
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
          <Link className="rx-sel-more" to="/about">See the full record <Arrow /></Link>
        </div>
      </section>

      {/* ── who he is ────────────────────────────────────────────────── */}
      <section className="rx-bio">
        <div className="rx-wrap">
          <div className="rx-bio-inner">
            <p className="rx-bio-lead">
              Every neural network in production shares one flaw: it cannot tell you which part of it failed.{" "}
              <strong>Rokib Al Dhin Raadh</strong> built one that can, working alone from Dhaka, and founded{" "}
              <a href={links.oxiedo} target="_blank" rel="noreferrer">OXIEDO</a> to sell it.
            </p>
            <div className="rx-bio-cols">
              <p>
                <Link to="/research">ORMAS</Link> is a new way to train neural networks. Every part carries its own
                health signal, so when one fails the network finds it, repairs it mid-training and writes the repair
                into a permanent record. Destroy a trained layer and ORMAS climbs back to <b>80.3%</b> accuracy. A
                standard network of the same size stays at <b>10.0%</b>: pure chance.
              </p>
              <p>
                He proved it the hard way: 383 controlled experiments, 16,316 lines of PyTorch, one RTX 3090, every run
                reproducible from seed. The mathematics passed double-blind review at{" "}
                <a href={links.deepmath} target="_blank" rel="noreferrer">DeepMath 2026</a>, and{" "}
                <a href={links.neurips} target="_blank" rel="noreferrer">NeurIPS 2026</a> made him a reviewer. He started
                his first venture at twelve and sold a stock-prediction engine for about $10,000 at fifteen.
              </p>
            </div>
            <div className="rx-links">
              <a href={links.cv} target="_blank" rel="noreferrer">CV <Arrow /></a>
              <a href={links.deck} target="_blank" rel="noreferrer">Investor deck <Arrow /></a>
              <a href={links.doi} target="_blank" rel="noreferrer">Paper <Arrow /></a>
              <a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href={links.x} target="_blank" rel="noreferrer">X <Arrow /></a>
            </div>
          </div>

          <div className="rx-figs" role="list">
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v is-age">18</div>
              <div className="rx-fig-k">Founder and CEO of OXIEDO. Inventor of ORMAS.</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">383</div>
              <div className="rx-fig-k">Controlled experiments, run alone on a single GPU</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">+70.3</div>
              <div className="rx-fig-k">Accuracy points recovered after a layer is destroyed. Standard networks recover none.</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">12</div>
              <div className="rx-fig-k">His age when he started his first venture</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── the company ──────────────────────────────────────────────── */}
      <section className="rx-sec" id="company">
        <div className="rx-wrap">
          <h2 className="rx-label">The company <small>OXIEDO · founded 2023</small></h2>
          <div className="rx-co">
            <div className="rx-co-top">
              <p className="rx-co-k">OXIEDO</p>
              <h3>Every AI model, with a receipt for what it learned.</h3>
              <p className="rx-co-lede">
                Banks, hospitals and defence teams hold the data that would build the best models, and they cannot
                touch it, because no one can prove what a model took from it. ORMAS writes that proof while the model
                trains. OXIEDO licenses it.
              </p>
            </div>
            <div className="rx-co-grid">
              <div>
                <span className="n">01</span>
                <h4>The problem</h4>
                <p>
                  Every model in production is a black box. When it fails, no one can say which part broke or what it
                  learned. Regulators have noticed.
                </p>
              </div>
              <div>
                <span className="n">02</span>
                <h4>The product</h4>
                <p>
                  ORMAS on the customer’s own servers, plus the Model Change Record: a tamper-evident ledger of every
                  weight change in a training run.
                </p>
              </div>
              <div>
                <span className="n">03</span>
                <h4>Why now</h4>
                <p>
                  US model-risk guidance SR 26-2 and the EU AI Act’s high-risk rules, which bite in December 2027,
                  both demand the audit trail ORMAS produces by default.
                </p>
              </div>
            </div>
            <div className="rx-co-foot">
              <a className="rx-btn is-light" href={links.oxiedo} target="_blank" rel="noreferrer">Visit oxiedo.com <Arrow /></a>
              <a className="rx-btn is-outline-light" href={links.deck} target="_blank" rel="noreferrer">Investor deck <Arrow /></a>
              <a className="rx-btn is-outline-light" href={links.invest} target="_blank" rel="noreferrer">Invest <Arrow /></a>
            </div>
          </div>

          <h3 className="rx-sub">Before OXIEDO</h3>
          <div className="rx-grid">
            <div className="rx-cell">
              <div className="k">Ages 12–17</div>
              <h3>Five ventures</h3>
              <p>
                First venture at twelve. A stock-prediction engine sold for about $10,000 at fifteen. Five ventures
                before eighteen.
              </p>
              <Link className="more" to="/work">The full story →</Link>
            </div>
            <div className="rx-cell">
              <div className="k">2023–2025</div>
              <h3>OXIMO</h3>
              <p>
                A 40,933-line multi-agent operating system. Give it one sentence; it assembles an organisation and
                creates the roles it lacks. 2,069 passing tests.
              </p>
              <Link className="more" to="/work">How it works →</Link>
            </div>
            <div className="rx-cell">
              <div className="k">2025–2026</div>
              <h3>Black Bloxie LTD</h3>
              <p>
                Twelve months running a live UK company on OXIMO. Pull OXIMO out: output falls 91%. Put it back: output
                beats the original.
              </p>
              <Link className="more" to="/work">See the results →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── news ─────────────────────────────────────────────────────── */}
      <section className="rx-sec" id="news">
        <div className="rx-wrap">
          <h2 className="rx-label">Latest <small>Updated 30 September 2026</small></h2>

          <article className="rx-feature">
            <div className="rx-feature-visual">
              <div className="k">Accepted · Double-blind peer review</div>
              <div className="v">DeepMath<br />2026</div>
              <div className="s">Conference on the Mathematical Theory of Deep Neural Networks · Ohio State University · 29–30 October</div>
            </div>
            <div>
              <h3>
                <a href={featured.href} target="_blank" rel="noreferrer">{featured.title}</a>
              </h3>
              <p>
                Anonymous reviewers accepted his proof that ORMAS stays stable while it repairs itself: every repair is
                a bounded disturbance, so training cannot run away. It is the mathematical guarantee OXIEDO sells on.
              </p>
              <p className="rx-feature-cite">
                “Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training Dynamics”
              </p>
              <div className="rx-meta">Date: <b>{featured.date}</b> &nbsp;·&nbsp; Poster presentation, Ohio State University</div>
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
        </div>
      </section>

      {/* ── the technology ───────────────────────────────────────────── */}
      <section className="rx-sec" id="research">
        <div className="rx-wrap">
          <h2 className="rx-label">The technology <small>ORMAS</small></h2>
          <div className="rx-split">
            <div>
              <p className="rx-split-lead">
                A network that finds its own broken parts, fixes them mid-training, and logs every repair.
              </p>
              <p>
                A standard network learns from one error signal smeared across millions of parameters, so a failure stays
                invisible until the output goes wrong. ORMAS gives every node a short, direct line to the loss and its
                own health score.
              </p>
              <p>
                When a node fails, ORMAS diagnoses it, repairs it without pausing training, and logs the cause. Its
                stability is proven with Sontag’s Input-to-State Stability framework: the first formal stability
                guarantee for a self-repairing network.
              </p>
              <p>
                Under sequential learning it keeps <b>94.6%</b> of earlier tasks. ResNet-18 keeps 47.3%.
              </p>
              <div className="rx-btns">
                <Link className="rx-btn" to="/research">How ORMAS works <Arrow /></Link>
                <a className="rx-btn is-ghost" href={links.preprint} target="_blank" rel="noreferrer">Read the paper <Arrow /></a>
              </div>
            </div>
            <div className="rx-result">
              <div className="k">Stress test · part of the network destroyed mid-training · 3 runs</div>
              <div className="rx-bar">
                <div className="rx-bar-top"><span>ORMAS</span><b>80.3%</b></div>
                <div className="rx-bar-track"><div className="rx-bar-fill" style={{ width: "80.3%" }} /></div>
              </div>
              <div className="rx-bar is-bad">
                <div className="rx-bar-top"><span>Standard model, same size</span><b>10.0%</b></div>
                <div className="rx-bar-track"><div className="rx-bar-fill" style={{ width: "10%" }} /></div>
              </div>
              <div className="foot">
                ORMAS found the damage within one training round and recovered through 85 logged repairs. The standard
                model stayed at 10%, the same as random guessing, in every run.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── publications ─────────────────────────────────────────────── */}
      <section className="rx-sec" id="publications">
        <div className="rx-wrap">
          <h2 className="rx-label">Papers</h2>
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
          <h2 className="rx-label">Talk to the founder</h2>
          <div className="rx-grid">
            <div className="rx-cell">
              <h4>Investors and partners</h4>
              <p><a href={`mailto:${links.companyEmail}`}>{links.companyEmail}</a></p>
              <p><a href={links.invest} target="_blank" rel="noreferrer">oxiedo.com/invest</a> · <a href={links.deck} target="_blank" rel="noreferrer">Investor deck (PDF)</a></p>
            </div>
            <div className="rx-cell">
              <h4>Press, research and speaking</h4>
              <p><a href={`mailto:${links.email}`}>{links.email}</a></p>
              <p>He usually replies within one working day.</p>
            </div>
            <div className="rx-cell">
              <h4>Elsewhere</h4>
              <p>
                <a href={links.x} target="_blank" rel="noreferrer">X</a> ·{" "}
                <a href={links.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
                <a href={links.orcid} target="_blank" rel="noreferrer">ORCID</a>
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
