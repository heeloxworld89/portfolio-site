import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links, news, publications, talks } from "../data";
import "../ux/home.css";

type Mark = { name: string; logo?: string; word?: string; sup?: string; tag: string; note: string };

const L = "/assets/images/logos/";
// Fixed at build time so the prerendered and hydrated markup agree.
const BUILD_TIME = Number(import.meta.env.VITE_BUILD_TIME ?? Date.parse("2026-10-03T00:00:00Z"));
// Ten marks: the logo wall is laid out for exactly ten (5×2, 3×3 plus one, 2×5).
const marks: Mark[] = [
  { name: "DeepMath 2026", word: "DeepMath", tag: "Peer-reviewed · Sole author", note: "Stability paper accepted after double-blind review; poster at The Ohio State University, one of 41 accepted papers" },
  { name: "NeurIPS 2026", word: "NeurIPS", tag: "Workshop reviewer", note: "Reviewer for the Workshop on Trustworthy AI for Good, Paris" },
  { name: "Cohere Labs", logo: L + "cohere.svg", tag: "Invited talk", note: "Invited talk at Cohere Labs, Toronto, November 2026; member of its research community" },
  { name: "Cosmos Institute", logo: L + "cosmos-institute.svg", tag: "Highest-ranked", note: "ORMAS was the highest-ranked application in its review cycle" },
  { name: "IARCO 2026", logo: L + "iarco-dark.png", tag: "Finalist · 24th of 145", note: "International Academic Research Competition, Junior division; about 500 participants from 60 countries" },
  { name: "1752vc Ignite", logo: L + "1752vc.png", tag: "Top 1%", note: "OXIEDO accepted to Ignite from the top 1% of applicants; investment discussions ongoing" },
  { name: "500 Global", logo: L + "500-global.svg", tag: "Investment discussions", note: "In investment discussions with OXIEDO" },
  { name: "The Bridge", logo: L + "the-bridge.png", tag: "Finalist", note: "Finalist for The Bridge by Entrepreneur First, San Francisco" },
  { name: "FIAP", logo: L + "fiap.svg", tag: "Member", note: "Member of FIAP, São Paulo; sponsored for MIT Open Learning’s Universal AI program" },
  { name: "Freshmango", logo: L + "freshmango.png", tag: "Offer", note: "Offered a place in the Freshmango accelerator" },
];

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

// Internal paths open in place; everything else in a new tab.
const ext = (href: string) => (href.startsWith("/") ? {} : { target: "_blank", rel: "noreferrer" });

export default function Home() {
  const featured = news.find((n) => n.kind === "Conference") ?? news[0];
  const rest = news.filter((n) => n !== featured);
  return (
    <SiteLayout>
      <div className="ux-home">
      {/* ── hero ─────────────────────────────────────────────────────── */}
      <section className="rx-hero2 rx-hero3" id="home">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap rx-h2-grid">
          <div className="rx-h2-copy">
            <p className="rx-h2-eb">
              <span className="dot" aria-hidden="true" /> <b className="ux-age">18 years old</b> <i /> AI researcher <i className="rx-h2-hide" /> <span className="rx-h2-hide">Founder &amp; CEO, OXIEDO</span>
            </p>
            <h1>
              Building neural networks that can account for what they learned.
              <span className="rx-h2-age">Peer-reviewed at <em>eighteen.</em></span>
            </h1>
            <p className="rx-h2-sub">
              Rokib Al Dhin Raadh is an AI researcher and the founder of <b>OXIEDO</b>. His network, ORMAS, finds its
              failing components during training, repairs them and records every change. His analysis of its stability
              was accepted after double-blind review at DeepMath 2026, and he was a reviewer for a NeurIPS 2026 workshop.
            </p>
            <div className="rx-btns">
              <Link className="rx-btn is-cta" to="/research">Read the research <Arrow /></Link>
              <a className="rx-btn is-ghost" href={links.cv} target="_blank" rel="noreferrer">CV (PDF) <Arrow /></a>
              <a className="rx-btn is-ghost" href={links.oxiedo} target="_blank" rel="noreferrer">OXIEDO <Arrow /></a>
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
        <div className="rx-wrap">
          <nav className="ux-jump" aria-label="On this page">
            <span className="ux-jump-k">On this page</span>
            <a href="#news">News</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#talks">Talks</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </section>

      {/* ── selected distinctions ────────────────────────────────────── */}
      <section className="rx-sel" aria-labelledby="rx-sel-h">
        <div className="rx-wrap">
          <div className="rx-sel-head">
            <div>
              <p className="rx-sel-eb">Recognition · 2026</p>
              <h2 id="rx-sel-h">
                Selected distinctions, <em>2026.</em>
              </h2>
            </div>
            <p>
              A sole-authored paper at DeepMath 2026, a reviewer role at a NeurIPS 2026 workshop, an invited talk at
              Cohere Labs, the highest-ranked application at the Cosmos Institute and the top 1% at 1752vc Ignite.
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
          <Link className="rx-sel-more" to="/evidence">Every claim, with its source <Arrow /></Link>
        </div>
      </section>

      {/* ── bio ──────────────────────────────────────────────────────── */}
      <section className="rx-bio">
        <div className="rx-wrap">
          <div className="rx-bio-inner">
            <p>
              <strong>Rokib Al Dhin Raadh</strong> is an 18-year-old AI researcher and the founder and CEO of{" "}
              <a href={links.oxiedo} target="_blank" rel="noreferrer">OXIEDO</a>. He invented{" "}
              <Link to="/research">ORMAS</Link>, a self-repairing neural network that identifies, repairs and records its
              own failures while it trains, and is the sole author of a paper on its stability, accepted at{" "}
              <a href="/deepmath">DeepMath 2026</a> after double-blind review. He was a reviewer for the{" "}
              <a href={links.neuripsReviewers} target="_blank" rel="noreferrer">NeurIPS 2026 Workshop on Trustworthy AI for Good</a>{" "}
              and gave an invited talk at Cohere Labs.
            </p>
            <p>
              He grew up in Dhaka, Bangladesh. He developed ORMAS independently over 383 controlled experiments on a
              single GPU, released it as an open preprint with code that reproduces every result, and published{" "}
              <a href={links.monitor} target="_blank" rel="noreferrer">ormas-monitor</a>, an open training monitor based on
              the DeepMath result. OXIEDO, which he founded in 2023, licenses ORMAS to regulated industries that need an
              auditable record of what their models learned. Before ORMAS he built OXIMO, a 40,933-line multi-agent system,
              and founded five ventures between the ages of 12 and 17, selling the EWM trading algorithm for about $10,000
              at 15.
            </p>
            <div className="rx-links">
              <a href={links.cv} target="_blank" rel="noreferrer">CV <Arrow /></a>
              <a href="/deepmath">DeepMath poster <Arrow /></a>
              <a href={links.doi} target="_blank" rel="noreferrer">Preprint <Arrow /></a>
              <a href={links.code} target="_blank" rel="noreferrer">Code <Arrow /></a>
              <a href={links.monitor} target="_blank" rel="noreferrer">ormas-monitor <Arrow /></a>
              <a href={links.orcid} target="_blank" rel="noreferrer">ORCID <Arrow /></a>
              <a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href={links.x} target="_blank" rel="noreferrer">X <Arrow /></a>
              <a href={links.youtube} target="_blank" rel="noreferrer">YouTube <Arrow /></a>
            </div>
          </div>

          <div className="rx-figs" role="list">
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v is-age">18</div>
              <div className="rx-fig-k">AI researcher; founder and CEO of OXIEDO</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">383</div>
              <div className="rx-fig-k">Controlled experiments, run on one GPU</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">80.3%</div>
              <div className="rx-fig-k">Accuracy recovered after trained layers are zeroed; standard training stays at 10.0%</div>
            </div>
            <div className="rx-fig" role="listitem">
              <div className="rx-fig-v">2026</div>
              <div className="rx-fig-k">DeepMath paper; NeurIPS workshop reviewer; invited talk at Cohere Labs</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── news ─────────────────────────────────────────────────────── */}
      <section className="rx-sec" id="news">
        <div className="rx-wrap">
          <h2 className="rx-label">News <small>updated November 2026</small></h2>

          <article className="rx-dm-card has-photo">
            <div className="rx-dm-main">
              <p className="rx-dm-k"><span className="dot" aria-hidden="true" /> Conference · Poster · Double-blind review</p>
              <h3>
                The mathematics behind ORMAS at <em>DeepMath&nbsp;2026.</em>
              </h3>
              <p className="rx-dm-lede">
                Raadh&rsquo;s sole-authored paper, accepted after double-blind review, was shown at the poster session of
                DeepMath 2026 at <b>The Ohio State University</b> on 29 October. It was one of 41 papers accepted to the
                Conference on the Mathematical Theory of Deep Neural Networks, whose invited speakers came from{" "}
                <b>Michigan</b>, <b>Stanford</b>, <b>Penn</b>, <b>Georgia Tech</b>, the <b>University of Washington</b>{" "}
                and <b>Brown</b>.
              </p>
              <p className="rx-dm-lede">
                Prof. Zhihui Zhu of The Ohio State University printed and displayed the poster.
              </p>
              <p className="rx-dm-paper">
                &ldquo;Self-Repair as a Bounded Disturbance: Input-to-State Stability of Neural Network Training
                Dynamics&rdquo;
              </p>
              <div className="rx-meta">Date: <b>{featured.date}</b> &nbsp;·&nbsp; By: <b>Rokib Al Dhin Raadh</b></div>
              <div className="rx-btns">
                <a className="rx-btn is-light" href="/deepmath">Poster and paper <Arrow /></a>
                <a className="rx-btn is-outline-light" href={links.openreview} target="_blank" rel="noreferrer">OpenReview <Arrow /></a>
              </div>
            </div>
            <figure className="ux-dm-fig">
              <img
                src="/assets/deepmath/poster-at-deepmath-800.webp"
                srcSet="/assets/deepmath/poster-at-deepmath-800.webp 800w, /assets/deepmath/poster-at-deepmath-1400.webp 1400w"
                sizes="(min-width: 1000px) 560px, 100vw"
                width="800" height="600" loading="lazy" decoding="async"
                alt="The poster Self-Repair as a Bounded Disturbance on display at DeepMath 2026, The Ohio State University"
              />
              <figcaption>The poster at DeepMath 2026, The Ohio State University, 29 October 2026.</figcaption>
            </figure>
          </article>

          <div className="rx-rows ux-news-rows">
            {rest.map((n) => (
              <article className="rx-row" key={n.title}>
                <div className="rx-row-date">{n.date}<span>{n.kind}</span></div>
                <div>
                  <h3>{n.href ? <a href={n.href} {...ext(n.href)}>{n.title}</a> : n.title}</h3>
                  <p>{n.body}</p>
                </div>
                {n.href ? (
                  <a className="rx-row-go" href={n.href} {...ext(n.href)} aria-label={n.title}><Arrow /></a>
                ) : <span />}
              </article>
            ))}
          </div>
          <div className="rx-btns">
            <Link className="rx-btn" to="/about">Full record <Arrow /></Link>
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
                <strong>ORMAS is a self-repairing neural network architecture. It finds its own failing components
                during training, repairs them without stopping and logs every repair with its cause.</strong> Standard
                networks cannot say which of their parts failed. A single error signal updates every parameter at
                once, so interpretability has worked from the outside, reconstructing a finished model&rsquo;s
                behaviour after the fact.
              </p>
              <p>
                ORMAS works from the inside. It bounds each node&rsquo;s path to the loss at four operations, so every
                component can be measured while the network trains. Three signals run together: global
                backpropagation, a per-node local loss through a shared bottleneck, and health-gated self-correction
                that diagnoses a failing node, repairs it and logs the repair with its cause.
              </p>
              <p>
                The DeepMath 2026 paper analyses this process with input-to-state stability. Bounded repairs keep
                training within a computable radius of a local minimum, and bounded repairs alone cannot revive a dead
                channel, so self-repairing training is a switched system of small corrections and occasional resets.
                The evidence base is 383 controlled experiments across four architectures, each reproducible from seed.
                The dead-channel result is available as{" "}
                <a href={links.monitor} target="_blank" rel="noreferrer">ormas-monitor</a>, an open training monitor for
                PyTorch.
              </p>
              <div className="rx-btns">
                <Link className="rx-btn" to="/research">Read the research <Arrow /></Link>
                <a className="rx-btn is-ghost" href="/deepmath">DeepMath poster <Arrow /></a>
                <a className="rx-btn is-ghost" href={links.preprint} target="_blank" rel="noreferrer">Preprint <Arrow /></a>
              </div>
            </div>
            <div className="rx-result">
              <div className="k">Recovery after trained layers are zeroed at epoch 100 · CIFAR-10 · 3 seeds</div>
              <div className="rx-bar">
                <div className="rx-bar-top"><span>ORMAS</span><b>80.3%</b></div>
                <div className="rx-bar-track"><div className="rx-bar-fill" style={{ width: "80.3%" }} /></div>
              </div>
              <div className="rx-bar is-bad">
                <div className="rx-bar-top"><span>Standard training</span><b>10.0%</b></div>
                <div className="rx-bar-track"><div className="rx-bar-fill" style={{ width: "10%" }} /></div>
              </div>
              <div className="foot">
                Small corrections cannot revive the zeroed layers. A reset redraws the dead channels and corrections
                finish the recovery. Standard training stays at chance in every seed. Full tables and ablations are on
                the research page.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── publications ─────────────────────────────────────────────── */}
      <section className="rx-sec" id="publications">
        <div className="rx-wrap">
          <h2 className="rx-label">Publications <small>Peer-reviewed paper · preprint · report · proposal</small></h2>
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
                      <a key={l.label} href={l.href} {...ext(l.href)}>{l.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── talks ────────────────────────────────────────────────────── */}
      <section className="rx-sec" id="talks">
        <div className="rx-wrap">
          <h2 className="rx-label">Talks <small>Invited talk · poster · 2026</small></h2>
          <div className="ux-talks">
            {talks.map((t) => {
              const past = new Date(`${t.end}T23:59:59Z`).getTime() < BUILD_TIME;
              return (
                <article className={`ux-talk${past ? " is-past" : ""}`} key={t.id}>
                  <div className="ux-talk-date">
                    <span className="ux-talk-day">{t.day}</span>
                    <span className="ux-talk-mon">{t.month}</span>
                    {t.time && <span className="ux-talk-time">{t.time}</span>}
                  </div>
                  <div className="ux-talk-body">
                    <div className="ux-talk-top">
                      <span className="ux-talk-logo"><img src={t.logo} alt={t.host} loading="lazy" /></span>
                      <span className="ux-talk-k">
                        <span className={`ux-talk-state${past ? "" : " is-up"}`}>{past ? "Presented" : "Upcoming"}</span>
                        {t.kind} · {t.host}
                      </span>
                    </div>
                    <h3>{t.title}</h3>
                    <p className="ux-talk-where">{t.where}</p>
                    <p className="ux-talk-note">{t.note}</p>
                    <a className="ux-talk-go" href={t.href} {...ext(t.href)}>{t.hrefLabel} <Arrow /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── company + earlier work ───────────────────────────────────── */}
      <section className="rx-sec" id="work">
        <div className="rx-wrap">
          <h2 className="rx-label">Work <small>OXIEDO · OXIMO · Black Bloxie</small></h2>

          <article className="rx-work-hero">
            <div className="rx-work-hero-copy">
              <div className="k">AI company · founded 2023 · Founder &amp; CEO</div>
              <h3>OXIEDO</h3>
              <p>
                OXIEDO licenses ORMAS, the self-repairing neural network Raadh invented, for on-premise use in regulated
                industries. Each training run produces a tamper-evident record of model changes, for model-risk teams and
                the EU AI Act&rsquo;s high-risk obligations. OXIEDO is in investment discussions with 500 Global and 1752vc.
              </p>
              <div className="rx-btns">
                <a className="rx-btn is-light" href={links.oxiedo} target="_blank" rel="noreferrer">oxiedo.com <Arrow /></a>
                <a className="rx-btn is-outline-light" href={links.deck} target="_blank" rel="noreferrer">Investor deck <Arrow /></a>
              </div>
            </div>
            <div className="rx-work-hero-stats">
              <div><b>ORMAS</b><span>On-premise licence</span></div>
              <div><b>Dec 2027</b><span>EU AI Act high-risk obligations</span></div>
              <div><b>Top 1%</b><span>1752vc Ignite</span></div>
            </div>
          </article>

          <div className="rx-work-pair">
            <article className="rx-work-card">
              <div className="k">System · 2023–2026</div>
              <div className="rx-work-num">40,933<small>lines</small></div>
              <h3>OXIMO</h3>
              <p>
                A multi-agent system of 40,933 lines of Python with 2,069 tests. Agents create new specialist roles as
                tasks require.
              </p>
              <Link className="more" to="/work">How OXIMO works →</Link>
            </article>
            <article className="rx-work-card">
              <div className="k">Field study · 2025–2026</div>
              <div className="rx-work-num">−91%<small>output without OXIMO</small></div>
              <h3>Black Bloxie LTD</h3>
              <p>
                A twelve-month controlled study of OXIMO on a live UK e-commerce business. Output fell 91% when the system
                was removed and exceeded its original level after it was restored.
              </p>
              <Link className="more" to="/work">Read the field study →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── contact ──────────────────────────────────────────────────── */}
      <section className="rx-sec" id="contact">
        <div className="rx-wrap">
          <h2 className="rx-label">Contact <small>Research · press · investors</small></h2>
          <div className="rx-grid">
            <div className="rx-cell">
              <h4>Email</h4>
              <p><a href={`mailto:${links.email}`}>{links.email}</a></p>
              <p>Replies usually within one working day. Questions and opportunities are always welcome.</p>
            </div>
            <div className="rx-cell">
              <h4>Call</h4>
              <p><a href={links.calendly} target="_blank" rel="noreferrer">Book a 30-minute call</a></p>
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
            </div>
          </div>
          <a className="ux-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </section>
      </div>
    </SiteLayout>
  );
}
