import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import VideoFacade from "@/components/common/VideoFacade";
import SiteLayout from "../SiteLayout";
import { links, youtubeId } from "../data";
import { OnThisPage, useActiveSection, type TocItem } from "../OnThisPage";
import "../ux/research.css";
import "../ux/deepmath.css";

/* /deepmath: the permanent page of the DeepMath 2026 paper. The printed poster's
   QR code points here, so it opens with a note to people who scanned it, then
   reads as a paper page in the same system as /research. */

const TOC: TocItem[] = [
  { id: "dm-note", label: "From the author" },
  { id: "dm-conference", label: "At DeepMath 2026" },
  { id: "dm-poster", label: "The poster" },
  { id: "dm-abstract", label: "Abstract" },
  { id: "dm-results", label: "Two results" },
  { id: "dm-figures", label: "Figures" },
  { id: "dm-open", label: "Open problems" },
  { id: "dm-faq", label: "Questions" },
  { id: "dm-reproduce", label: "Reproduce it" },
  { id: "dm-corrections", label: "Corrections" },
  { id: "dm-cite", label: "Cite" },
  { id: "dm-refs", label: "References" },
  { id: "dm-contact", label: "Ask a question" },
];

/** Inline maths. `p` is punctuation that must stay on the same line as the formula. */
const M = ({ m, p }: { m: string; p?: string }) =>
  p ? <span className="dmp-nb"><InlineMath math={m} />{p}</span> : <InlineMath math={m} />;

const BIBTEX = `@misc{raadh2026selfrepair,
  author       = {Raadh, Rokib Al Dhin},
  title        = {Self-Repair as a Bounded Disturbance: Input-to-State
                  Stability of Neural Network Training Dynamics},
  howpublished = {Poster, DeepMath 2026: Conference on the Mathematical
                  Theory of Deep Neural Networks, The Ohio State University},
  year         = {2026},
  month        = oct,
  url          = {https://openreview.net/forum?id=kowltBZEIv}
}`;

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "Isn't Theorem 2 just the dead-ReLU problem?",
    a: <>The mechanism is simple: a zero filter gives a constant pre-activation, train-mode BatchNorm maps it to its shift b&nbsp;≤&nbsp;0, and ReLU blocks every gradient. What the theorem adds is the exact conditions: fresh optimiser state, and invariance under every per-channel-bounded repair, not only gradient steps. That makes it checkable, which is what ormas-monitor certifies, and it is the lower bound that makes self-repair a switched system.</>,
  },
  {
    q: "You zeroed the layers yourself. Does this happen in real models?",
    a: <>The lesion is a controlled test, so exact zeros are by construction. Scanning 22 released torchvision ImageNet models, I find channels decayed to about zero (filter or BatchNorm scale below 10<sup>−5</sup> of the layer median, shift ≤&nbsp;0) in 19 of the 21 that use BatchNorm&nbsp;→&nbsp;ReLU. They are not exactly zero, so the theorem does not certify them. On 64 real images (CIFAR-10 test images upscaled to 224&nbsp;px) they output exactly 0 in ResNet-18, VGG-19-BN and MnasNet, and removing them from VGG-19-BN cuts compute by 18.6% with identical top-1 answers. Shrinking BatchNorm scales is also a known pruning technique (network slimming); the point is that one command finds them. <a href="https://oxiedo.github.io/ormas-monitor/results/" target="_blank" rel="noreferrer">Full results</a></>,
  },
  {
    q: "With no repair, γ is still 2βM/α. Why doesn't training converge to θ*?",
    a: <>Because training also optimises each layer's local loss with weight β&nbsp;≤&nbsp;0.3, which pulls against the global loss. The local-loss gradient and its projection add up to 2ηβM per step whether or not a repair fires. That offset is why this is practical ISS; it becomes strict ISS only if β(t)&nbsp;→&nbsp;0, for example by annealing the local-loss weight.</>,
  },
  {
    q: "What keeps θ near θ* in Proposition 1?",
    a: <>Induction. If the worst-case radius fits inside the strongly convex ball of radius R, that is r<sub>0</sub>&nbsp;≤&nbsp;R and 2βM/α + ε<sub>max</sub>/(ηα)&nbsp;≤&nbsp;R, each step gives r&nbsp;≤&nbsp;(1&nbsp;−&nbsp;ηα)R + ηαR = R, so the iterates never leave the ball. The statement is self-consistent, but with realistic constants it cannot be checked, which is why I call it idealised.</>,
  },
  {
    q: "Why does the radius grow as the step size shrinks?",
    a: <>Because a repair is an absolute move of size ε; it is not multiplied by η. Gradient descent pulls back only about ηα of the distance per step, so the balance is ηα·r = ε, giving r = ε/(ηα). Smaller η means a slower pull-back against the same push. The fix is to scale the repairs with η, or anneal them with the learning rate. In these runs the repairs also shrink late in training (about 90% smaller when one fires), which offsets part of this.</>,
  },
  {
    q: "Why model a repair as an input rather than as part of the optimiser?",
    a: <>Because it is not a gradient step. A repair fires when a diagnostic crosses a threshold, depends on the current state and is discontinuous. Writing training as θ<sub>t+1</sub> = θ<sub>t</sub> − η∇L(θ<sub>t</sub>) + u<sub>t</sub> lets input-to-state stability bound the effect of u<sub>t</sub> without requiring it to descend any objective.</>,
  },
  {
    q: "How does this relate to Cui, Jiang, Sontag & Braatz (2025)?",
    a: <>They prove that perturbed gradient descent is small-disturbance ISS under a generalised Polyak–Łojasiewicz condition. Modelling repair as the input lets bounds of that kind apply to self-repair. What this work adds is the repair-specific side: the diagnostic-triggered input, the measurable condition the bound needs (repairs must shrink), and Theorem 2, which shows that bounded repair alone cannot leave a dead set.</>,
  },
  {
    q: "Strong convexity cannot hold with BatchNorm. Doesn't that break Proposition 1?",
    a: <>It makes Proposition 1 a local, idealised statement, and the poster says so: BatchNorm makes the loss invariant to rescaling a layer's incoming weights (Arora, Li & Lyu, 2019), so it is flat along those directions and cannot be strongly convex. The natural replacement is a PL-type condition, under which Cui et al. (2025) already have ISS for gradient descent; whether BN networks satisfy it is the open step. Theorem 2 does not use convexity at all.</>,
  },
  {
    q: "Why exactly 10.00%, with zero variance across seeds?",
    a: <>Once the layers are zeroed, the network's output no longer depends on the input, so it predicts the same class for every image. The CIFAR-10 test set is balanced, 1,000 images per class, so accuracy is exactly 10.00%. Theorem 2 says no gradient step or bounded repair can change that, and none did in 99 epochs across 3 seeds.</>,
  },
  {
    q: "Does Theorem 2 depend on the optimiser state?",
    a: <>Yes. Leftover momentum could move a zero filter, so the theorem is stated for AdamW with fresh state for the channel. Every gradient into the channel is then exactly zero, and with decoupled weight decay the BatchNorm shift evolves as b(t) = (1 − ηλ)<sup>t</sup> b(0), which stays non-positive; the run logs match this to the bit. The ormas-monitor certificate checks these conditions before it certifies a channel as dead. One edge case: in the monitor&apos;s quick demo run, 2 of 64 channels in the zeroed layers had a positive shift. Those output a constant, and the monitor reports them as constant, not as certified dead.</>,
  },
  {
    q: "Does the jump do all the work?",
    a: <>For reviving a dead layer, yes: that is Theorem 2. In all three seeds accuracy stays at exactly chance until the epoch of that seed&apos;s reset and rises from that epoch on (Figure 2). The small corrections then help finish the recovery. Whether they beat plain resets is an open empirical question; the next experiment is reset-only and ReDo baselines over several seeds, with the same detector.</>,
  },
  {
    q: "Why doesn't ResNet-18 benefit from repair?",
    a: <>The skip path routes around the same lesion, so the network barely notices it: 92.3% without repair against 91.6% with (3-seed means). Repair matters when there is no redundancy to fall back on.</>,
  },
  {
    q: "Is the bound informative in practice?",
    a: <>Only if ε̄ is small, which is what makes it a prediction rather than a formality: a self-repairing network should need progressively smaller repairs. It does: after a shock the largest correction per epoch falls from 5.07 to 0.38 (Figure 3), and a correction that fires late is about 90% smaller than an early one (Table 1). Two limits. Late corrections still reach 6.6, so ε̄&nbsp;&gt;&nbsp;0: this is practical stability, not convergence to θ*. And with our settings γ comes out at about 3,800, so the bound should be read for its shape, not its size.</>,
  },
];

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

function CopyBibtex() {
  const [label, setLabel] = useState("Copy");
  const copy = () => {
    if (!navigator.clipboard) return setLabel("Select and copy");
    navigator.clipboard.writeText(BIBTEX).then(
      () => { setLabel("Copied"); setTimeout(() => setLabel("Copy"), 1600); },
      () => setLabel("Select and copy"),
    );
  };
  return <button type="button" className="dmp-copy" onClick={copy}>{label}</button>;
}

export default function DeepMathPage() {
  const active = useActiveSection(TOC);
  const recording = youtubeId(links.cohereRecording);
  return (
    <SiteLayout>
      <section className="rx-page-head ux-dm-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">DeepMath 2026 · Poster · Sole author</h2>
          <h1>
            Self-Repair as a Bounded Disturbance.
            <span className="dmp-sub">Input-to-State Stability of Neural Network Training Dynamics</span>
          </h1>
          <p>
            <strong>Rokib Al Dhin Raadh</strong>, independent researcher, Dhaka. Accepted after double-blind review at
            DeepMath 2026, the Conference on the Mathematical Theory of Deep Neural Networks, and shown at its poster
            session at The Ohio State University on 29 October 2026, one of 41 accepted papers.
          </p>
          <div className="rx-btns">
            <a className="rx-btn" href={links.posterPdf} target="_blank" rel="noreferrer">Poster (PDF) <Arrow /></a>
            <a className="rx-btn is-ghost" href={links.openreview} target="_blank" rel="noreferrer">OpenReview <Arrow /></a>
            <a className="rx-btn is-ghost" href="#dm-cite">Cite</a>
          </div>
        </div>
      </section>

      <div className="rx-deep ux-research ux-dm">
        <div className="rx-wrap uxr-layout">
          <aside className="uxr-rail">
            <OnThisPage toc={TOC} active={active} />
          </aside>
          <div className="uxr-main">

            {/* ── From the author: for readers who scanned the printed poster ── */}
            <section id="dm-note" aria-labelledby="dm-note-h">
              <h3 className="uxr-kicker">From the author</h3>
              <h3 className="uxr-h" id="dm-note-h">Thanks for scanning.</h3>
              <p className="uxr-p">
                I wrote this paper on my own, outside any lab, and it was accepted after double-blind review. I couldn&apos;t
                travel to Ohio State for the conference, so the poster was shown at the poster session on 29 October
                without me. You can still hear the work from me and ask me anything about it.
              </p>
              <figure className="dmp-photo">
                <img
                  src="/assets/deepmath/poster-at-deepmath-800.webp"
                  srcSet="/assets/deepmath/poster-at-deepmath-800.webp 800w, /assets/deepmath/poster-at-deepmath-1400.webp 1400w"
                  sizes="(min-width: 1180px) 860px, calc(100vw - 48px)"
                  width="800" height="600" decoding="async"
                  alt="The poster on display at the DeepMath 2026 poster session, The Ohio State University"
                />
                <figcaption>
                  The poster at DeepMath 2026, The Ohio State University, 29 October 2026. Thank you to Prof. Zhihui Zhu of
                  The Ohio State University, who printed and displayed it.
                </figcaption>
              </figure>

              <div className="dmp-pair">
                <article className="dmp-talk">
                  <p className="dmp-k">Invited talk · Cohere Labs · 2 Nov 2026</p>
                  <h4>When the Update Is Not a Gradient</h4>
                  <p>
                    Cohere Labs invited me to present this work as a guest speaker: why training whose updates are not
                    gradients still converges, and where the proof stops. The 37 slides include both proofs and the
                    corrections below.
                  </p>
                  {recording ? (
                    <div className="dmp-video">
                      <VideoFacade
                        src={`https://www.youtube-nocookie.com/embed/${recording}?rel=0`}
                        title="When the Update Is Not a Gradient, invited talk at Cohere Labs"
                        label="Recording · YouTube"
                      />
                    </div>
                  ) : (
                    <p className="dmp-soon">Recording on YouTube soon.</p>
                  )}
                  <div className="rx-btns">
                    {recording ? (
                      <a className="rx-btn is-light" href={links.cohereRecording} target="_blank" rel="noreferrer">Watch on YouTube <Arrow /></a>
                    ) : null}
                    <a className={`rx-btn ${recording ? "is-outline-light" : "is-light"}`} href={links.cohereSlides} target="_blank" rel="noreferrer">Slides (PDF) <Arrow /></a>
                    <a className="rx-btn is-outline-light" href={links.cohereTalk} target="_blank" rel="noreferrer">Event page <Arrow /></a>
                  </div>
                </article>
                <article className="dmp-call">
                  <p className="dmp-k">Questions and opportunities</p>
                  <h4>Ask me directly</h4>
                  <p>
                    A question about the proofs or the experiments, or an opportunity you&apos;d like to discuss? Book a
                    30-minute call at any time that suits you.
                  </p>
                  <div className="rx-btns">
                    <a className="rx-btn" href={links.calendly} target="_blank" rel="noreferrer">Book a 30-minute call <Arrow /></a>
                  </div>
                </article>
              </div>
            </section>

            {/* ── At the conference ── */}
            <section className="uxr-sec" id="dm-conference" aria-labelledby="dm-conference-h">
              <h3 className="uxr-h" id="dm-conference-h">At DeepMath 2026</h3>
              <dl className="uxr-cells is-3">
                <div className="uxr-cell">
                  <dt className="uxr-cell-k">Programme</dt>
                  <dd className="dmp-cell-v">41</dd>
                  <dd className="uxr-cell-v">papers accepted: 8 contributed talks and 33 posters. This is poster 36.</dd>
                </div>
                <div className="uxr-cell">
                  <dt className="uxr-cell-k">Decision</dt>
                  <dd className="dmp-cell-v">30 Sep</dd>
                  <dd className="uxr-cell-v">Accept (Poster) after double-blind review.</dd>
                </div>
                <div className="uxr-cell">
                  <dt className="uxr-cell-k">Poster session</dt>
                  <dd className="dmp-cell-v">29 Oct</dd>
                  <dd className="uxr-cell-v">Energy Advancement Innovation Center, The Ohio State University, Columbus.</dd>
                </div>
              </dl>
              <p className="uxr-p">
                <strong>Invited speakers.</strong> Alfred Hero (University of Michigan; former President of the IEEE Signal
                Processing Society), Renyuan Xu (Stanford), Yuting Wei (Wharton, University of Pennsylvania), Wenjing Liao
                (Georgia Tech), Randall Balestriero (Brown) and Mo Zhou (University of Washington).
              </p>
              <p className="uxr-p">
                <strong>In the same poster session.</strong> Papers co-authored by Ren&eacute; Vidal, Richard Baraniuk, Laura
                Balzano, Christos Thrampoulidis, Jonathan Keating, Ness Shroff, Yingbin Liang, Aylin Yener and Zhihui Zhu.
                The contributed talks included work co-authored by Patrick Jaillet, Qing Qu and Eric Shea-Brown.
              </p>
              <p className="uxr-cap">
                Names are from the conference programme, which lists all 41 accepted papers.{" "}
                <a href={links.programme} target="_blank" rel="noreferrer">Conference programme (PDF)</a> ·{" "}
                <a href={links.deepmath} target="_blank" rel="noreferrer">DeepMath</a>
              </p>
            </section>

            {/* ── The poster ── */}
            <section className="uxr-sec" id="dm-poster" aria-labelledby="dm-poster-h">
              <h3 className="uxr-h" id="dm-poster-h">The poster</h3>
              <a className="dmp-poster" href={links.posterPdf} target="_blank" rel="noreferrer">
                <img
                  src="/assets/deepmath/poster-1000.webp?v=20261023"
                  srcSet="/assets/deepmath/poster-1000.webp?v=20261023 1000w, /assets/deepmath/poster-1200.webp?v=20261023 1200w, /assets/deepmath/poster-1600.webp?v=20261023 1600w"
                  sizes="(min-width: 1180px) 860px, calc(100vw - 48px)"
                  width="1000" height="707" loading="lazy" decoding="async"
                  alt="DeepMath 2026 poster: Self-Repair as a Bounded Disturbance. Opens the full A0 PDF."
                />
              </a>
              <div className="rx-btns">
                <a className="rx-btn" href={links.posterPdf} target="_blank" rel="noreferrer">Open full poster (PDF) <Arrow /></a>
                <a className="rx-btn is-ghost" href={links.posterPdf} download>Download</a>
              </div>
              <p className="uxr-cap">
                A0 landscape, vector PDF. Poster version of 23 October 2026. One label and three abstract figures have
                since been corrected; see <a href="#dm-corrections">Corrections</a>.
              </p>
            </section>

            {/* ── Abstract ── */}
            <section className="uxr-sec" id="dm-abstract" aria-labelledby="dm-abstract-h">
              <h3 className="uxr-h" id="dm-abstract-h">Abstract</h3>
              <p className="dmp-take">
                Small repairs keep training stable. Only <em>a jump</em> can revive a dead layer.
              </p>
              <p className="uxr-p">
                Methods that repair a network while it trains, such as Continual Backprop, ReDo, Shrink &amp; Perturb and
                plasticity injection, apply updates that are not the gradient of any loss, so the usual convergence proofs
                do not cover them. We model each repair as an input to the training dynamics and ask for input-to-state
                stability (ISS). Proposition&nbsp;1 shows that near a strongly convex minimum, bounded repairs keep training
                within a radius <M m="\gamma = 2\beta M/\alpha + \bar\varepsilon/(\eta\alpha)" /> of the minimum, where{" "}
                <M m="\beta \le 0.3" /> weights each layer&apos;s local loss, <M m="M" /> bounds that loss&apos;s gradient, and{" "}
                <M m="\bar\varepsilon" /> is the asymptotic repair size. Theorem&nbsp;2 gives the matching limit: in a
                Conv–BN–ReLU layer, a channel with a zero filter and non-positive BatchNorm shift is invariant under AdamW
                and under every per-channel-bounded repair, so only a reset can revive it. Self-repairing training is
                therefore a switched system: bounded corrections between isolated jumps.
              </p>
              <p className="uxr-p">
                We test both predictions in a 383-run evaluation. After a shock, the largest correction per epoch falls by
                93% (5.07&nbsp;→&nbsp;0.38). A CIFAR-10 CNN with two zeroed convolutional layers stays at exactly 10.00%
                under standard AdamW and recovers to 80.3% with self-repair. On ResNet-18 the skip path makes repair
                unnecessary.
              </p>
              <div className="rx-figs dmp-figs" role="list">
                <div className="rx-fig" role="listitem">
                  <div className="rx-fig-v">10.00%</div>
                  <div className="rx-fig-k">Without repair, after two conv layers are zeroed: exactly chance, 3/3 seeds</div>
                </div>
                <div className="rx-fig" role="listitem">
                  <div className="rx-fig-v">103–104</div>
                  <div className="rx-fig-k">The epochs in which the resets fire; each seed recovers only after its own reset</div>
                </div>
                <div className="rx-fig" role="listitem">
                  <div className="rx-fig-v is-age">80.3%</div>
                  <div className="rx-fig-k">With self-repair (85% before the lesion)</div>
                </div>
              </div>
              <p className="uxr-cap">
                Keywords: input-to-state stability · switched systems · loss of plasticity · self-repairing training ·
                BatchNorm
              </p>
            </section>

            {/* ── Two results ── */}
            <section className="uxr-sec" id="dm-results" aria-labelledby="dm-results-h">
              <h3 className="uxr-h" id="dm-results-h">Two results</h3>
              <div className="dmp-results">
                <article className="uxr-card">
                  <p className="uxr-note-k">Proposition 1 · Practical ISS</p>
                  <h4 className="dmp-card-h">Bounded repair is safe</h4>
                  <p>
                    Near a minimum <M m="\theta^*" p="," /> let <M m="L" /> be <M m="\ell" p="-" />smooth and <M m="\alpha" p="-" />strongly
                    convex, <M m="\eta \le 1/\ell" p="," /> repairs <M m="\lVert u_t \rVert \le \varepsilon_t" p="," /> and each
                    layer&apos;s local-loss gradient, weighted by <M m="\beta \le 0.3" p="," /> bounded by <M m="M" p="." /> While{" "}
                    <M m="\theta_t" /> stays in that neighbourhood:
                  </p>
                  <div className="uxr-math">
                    <BlockMath math="\limsup_{t \to \infty}\, \lVert \theta_t - \theta^* \rVert \le \gamma = \frac{2\beta M}{\alpha} + \frac{\bar\varepsilon}{\eta\,\alpha}" />
                  </div>
                  <p>where <M m="\bar\varepsilon = \limsup_t \varepsilon_t" p="." /></p>
                  <p className="dmp-plain">Repairs push training around, but never further than <M m="\gamma" /> from a good solution.</p>
                  <details className="dmp-proof">
                    <summary>Proof in four steps</summary>
                    <p>Training follows</p>
                    <BlockMath math="\theta_{t+1} = \theta_t - \eta\nabla L(\theta_t) - \eta\, d_t + u_t, \qquad \lVert d_t \rVert \le 2\beta M," />
                    <p>
                      where <M m="d_t" /> is the local-loss term with its projection. Write{" "}
                      <M m="r_t = \lVert \theta_t - \theta^* \rVert" p="." />
                    </p>
                    <ol>
                      <li>
                        <b>The gradient step contracts</b>, for <M m="\eta \le 1/\ell" p=":" />
                        <BlockMath math="\lVert \theta - \eta\nabla L(\theta) - \theta^* \rVert \le \rho\, \lVert \theta - \theta^* \rVert, \quad \rho = 1 - \eta\alpha" />
                      </li>
                      <li>
                        <b>Triangle inequality</b> on <M m="d_t" /> and <M m="u_t" p=":" />
                        <BlockMath math="r_{t+1} \le \rho\, r_t + 2\eta\beta M + \varepsilon_t" />
                      </li>
                      <li>
                        <b>Unroll the recursion:</b>
                        <BlockMath math="r_t \le \rho^t r_0 + \sum_{k<t} \rho^{\,t-1-k}\,(2\eta\beta M + \varepsilon_k)" />
                      </li>
                      <li>
                        <b>Sum the geometric series:</b>
                        <BlockMath math="\limsup_{t\to\infty} r_t \le \frac{2\eta\beta M + \bar\varepsilon}{1 - \rho} = \frac{2\beta M}{\alpha} + \frac{\bar\varepsilon}{\eta\,\alpha}" />
                      </li>
                    </ol>
                    <p className="dmp-proof-note">
                      This is the standard analysis of gradient descent with errors (cf. Devolder, Glineur &amp; Nesterov,
                      2014). What is new is the input it is fed: the repair.
                    </p>
                  </details>
                </article>
                <article className="uxr-card is-stuck">
                  <p className="uxr-note-k">Theorem 2 · Absorbing dead set</p>
                  <h4 className="dmp-card-h">Bounded repair cannot revive</h4>
                  <p>
                    In a Conv–BN–ReLU layer (BatchNorm in train mode), let channel <M m="c" /> have zero filter{" "}
                    <M m="W_c" /> and BatchNorm shift <M m="b_c \le 0" p="." /> This dead set <M m="D" /> is invariant under AdamW
                    (fresh state) and under every repair bounded per channel,{" "}
                    <M m="\lVert R(W)_c - W_c \rVert \le f\, \lVert W_c \rVert" p=":" />
                  </p>
                  <div className="uxr-math">
                    <BlockMath math="\theta_0 \in D \implies \theta_t \in D \quad \forall t" />
                  </div>
                  <p className="dmp-plain">Gradient descent and small fixes are both stuck, exactly. Only a jump leaves <M m="D" p="." /></p>
                  <details className="dmp-proof">
                    <summary>Proof in four steps</summary>
                    <p>
                      Take one channel with filter <M m="W" p="," /> BatchNorm scale <M m="s" /> and shift <M m="b" p="." />
                    </p>
                    <ol>
                      <li>
                        <b>A zero filter feeds BatchNorm a constant</b> (a bias is a constant too), which it normalises to zero:
                        <BlockMath math="\hat x = \frac{x - \mu_{\text{batch}}}{\sqrt{\sigma^2_{\text{batch}} + \epsilon}} = 0" />
                      </li>
                      <li>
                        <b>The channel outputs ReLU(<M m="b" />) = 0</b>, and the ReLU is closed there:
                        <BlockMath math="y = s\,\hat x + b = b \le 0 \;\Rightarrow\; \mathrm{ReLU}(y) = 0,\ \mathrm{ReLU}'(y) = 0" />
                      </li>
                      <li>
                        <b>So every gradient into the channel is exactly zero:</b>
                        <BlockMath math="\partial L/\partial W = \partial L/\partial s = \partial L/\partial b = 0" />
                      </li>
                      <li>
                        <b>AdamW with fresh state cannot move it, and neither can a bounded repair:</b>
                        <BlockMath math="\begin{aligned} &m = v = 0 \;\Rightarrow\; W \leftarrow (1 - \eta\lambda)\,W = 0, \\ &b_t = (1 - \eta\lambda)^t\, b_0 \le 0; \\ &\lVert R(W) - W \rVert \le f\, \lVert W \rVert = 0 \;\Rightarrow\; R(W) = W = 0 \end{aligned}" />
                      </li>
                    </ol>
                    <p className="dmp-proof-note">
                      By induction, the channel stays in <M m="D" /> forever. A relative bound cannot move zero; only an
                      additive jump can.
                    </p>
                  </details>
                </article>
              </div>
              <p className="uxr-cap">
                Notation: as in the talk, <M m="b" /> is a BatchNorm shift and <M m="\beta" /> is the local-loss weight in
                Proposition 1. The poster writes the shift as <M m="\beta" /> too.
              </p>

              <h4 className="dmp-sub-h">What Theorem 2 explains: every working fix contains a jump</h4>
              <div className="uxr-table-wrap" role="region" aria-label="Repair methods: bounded part and jump part" tabIndex={0}>
                <table className="uxr-table">
                  <thead>
                    <tr><th scope="col">Method</th><th scope="col">Bounded part</th><th scope="col">Jump part</th></tr>
                  </thead>
                  <tbody>
                    <tr><th scope="row">Continual Backprop</th><td>none</td><td>re-draws low-utility units</td></tr>
                    <tr><th scope="row">ReDo</th><td>none</td><td>re-draws dormant neurons&apos; inputs</td></tr>
                    <tr><th scope="row">Shrink &amp; Perturb</th><td>shrinks weights toward zero</td><td>adds fresh noise</td></tr>
                    <tr><th scope="row">Plasticity injection</th><td>none</td><td>adds fresh trainable parameters</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="uxr-p">
                A correction bounded relative to the weights cannot move a zero filter, so a method that only rescales or
                clips can never revive a dead channel; only the jump part can leave <M m="D" p="." /> <strong>The jump is not a design accident; it is necessary.</strong>
              </p>
              <p className="uxr-cap">
                L2 Init (Kumar, Marklund &amp; Van Roy, 2024) escapes differently: it pulls weights toward their initial
                values, which changes the loss, so <M m="D" /> is no longer invariant.
              </p>
            </section>

            {/* ── Figures ── */}
            <section className="uxr-sec" id="dm-figures" aria-labelledby="dm-figures-h">
              <h3 className="uxr-h" id="dm-figures-h">Figures</h3>
              <figure className="dmp-fig">
                <img
                  src="/assets/deepmath/fig-run-1000.webp"
                  srcSet="/assets/deepmath/fig-run-1000.webp 1000w, /assets/deepmath/fig-run-1800.webp 1800w"
                  sizes="(min-width: 1180px) 860px, calc(100vw - 48px)"
                  width="1000" height="602" loading="lazy" decoding="async"
                  alt="Test accuracy over 200 epochs. Two conv layers are zeroed at epoch 100. Standard AdamW stays at exactly 10.00%; with resets, accuracy recovers to 80.3 ± 1.5%."
                />
                <figcaption>
                  <b>Figure 1. Zero two layers, and gradient descent never recovers.</b> CIFAR-10 CNN; two conv layers
                  zeroed at epoch 100. Standard AdamW stays at exactly 10.00% for all 99 remaining epochs, in 3 of 3 seeds.
                  With resets, accuracy recovers to 80.3&nbsp;±&nbsp;1.5% (85% before the lesion).
                </figcaption>
              </figure>
              <figure className="dmp-fig">
                <img
                  src="/assets/deepmath/fig-resets-1000.webp"
                  srcSet="/assets/deepmath/fig-resets-1000.webp 1000w, /assets/deepmath/fig-resets-1800.webp 1800w"
                  sizes="(min-width: 1180px) 860px, calc(100vw - 48px)"
                  width="1000" height="612" loading="lazy" decoding="async"
                  alt="Test accuracy for epochs 100 to 111 in three seeds. After the lesion all three seeds sit at 10%. Resets fire in epochs 103 to 104, and each seed rises only after its own reset; AdamW alone stays at 10%."
                />
                <figcaption>
                  <b>Figure 2. Theorem 2, in data: recovery starts exactly at the reset.</b> The dead layers are flagged at
                  step 39&nbsp;493, two steps after the lesion, in every seed. Small corrections cannot revive them, so
                  accuracy stays at chance until the resets fire in epochs <span className="dmp-nb">103–104</span>; each seed rises only after its own
                  reset.
                </figcaption>
              </figure>
              <figure className="dmp-fig is-narrow">
                <img
                  src="/assets/deepmath/fig-decay-800.webp"
                  srcSet="/assets/deepmath/fig-decay-800.webp 800w, /assets/deepmath/fig-decay-1400.webp 1400w"
                  sizes="(min-width: 760px) 600px, calc(100vw - 48px)"
                  width="800" height="386" loading="lazy" decoding="async"
                  alt="Largest correction per epoch on a log scale over 200 epochs after a shock: the mean over the first 20 epochs is 5.07 and over the last 20 epochs is 0.38."
                />
                <figcaption>
                  <b>Figure 3. The falsifiable prediction.</b> Proposition 1&apos;s bound is informative only if repairs
                  shrink. After a shock (σ&nbsp;=&nbsp;1), the largest correction per epoch, ε<sub>k</sub>, falls from 5.07
                  (first 20 epochs) to 0.38 (last 20), a 93% reduction. CIFAR-10 CNN; Gaussian noise with σ&nbsp;=&nbsp;1
                  added to every backbone weight at epoch 2; three seeds.
                </figcaption>
              </figure>
              <div className="uxr-table-wrap" role="region" aria-label="Table 1: repair sizes after the shock" tabIndex={0}>
                <table className="uxr-table">
                  <thead>
                    <tr><th scope="col">Measure, 3 seeds</th><th scope="col" className="num">First 20 epochs</th><th scope="col" className="num">Last 20 epochs</th><th scope="col" className="num">Change</th></tr>
                  </thead>
                  <tbody>
                    <tr><th scope="row">Largest correction per epoch, mean</th><td className="num">5.07</td><td className="num">0.38</td><td className="num">−93%</td></tr>
                    <tr><th scope="row">Size, given a correction fired</th><td className="num">13.1</td><td className="num">1.34</td><td className="num">−90%</td></tr>
                    <tr><th scope="row">Epochs with any correction</th><td className="num">39%</td><td className="num">28%</td><td className="num">−11 points</td></tr>
                    <tr><th scope="row">Largest single correction</th><td className="num">41.0</td><td className="num">6.57</td><td className="num">−84%</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="uxr-cap">
                <b>Table 1. Smaller, not just rarer. But not zero.</b> Repair sizes after the shock. A late correction is about 90% smaller, but late corrections still reach 6.6, so <M m="\bar\varepsilon > 0" p="." />{" "}
                The repair term shrinks without vanishing: practical stability, not convergence to <M m="\theta^*" p="." />
              </p>
            </section>

            {/* ── Open problem ── */}
            <section className="uxr-sec" id="dm-open" aria-labelledby="dm-open-h">
              <h3 className="uxr-h" id="dm-open-h">Open problems: how often may a network jump?</h3>
              <div className="uxr-note is-accent">
                <p>
                  Proposition 1 holds between jumps; Theorem 2 says jumps are unavoidable. Find a dwell time{" "}
                  <M m="\tau_D" /> such that jumps at least <M m="\tau_D" /> apart keep training stable (cf. Hespanha &amp;
                  Morse, 1999).
                </p>
                <p>Three smaller steps are also open:</p>
                <ul className="dmp-open">
                  <li>
                    <b>PL, not strong convexity.</b> BatchNorm&apos;s scale invariance rules out strong convexity. Cui et al.
                    (2025) have ISS under a generalised PL condition; do BatchNorm networks satisfy it near the minima that
                    matter?
                  </li>
                  <li>
                    <b>Derive the repair sizes.</b> The shrinking repairs are measured, not derived. Derive that decay from
                    the repair rule itself.
                  </li>
                  <li>
                    <b>Optimiser state.</b> Theorem 2 needs fresh AdamW state. Adam&apos;s moments belong in the state of the
                    ISS analysis.
                  </li>
                </ul>
                <p><strong>If you have ideas, I&apos;d love to hear them.</strong></p>
              </div>
            </section>

            {/* ── Questions ── */}
            <section className="uxr-sec" id="dm-faq" aria-labelledby="dm-faq-h">
              <h3 className="uxr-h" id="dm-faq-h">Questions I&apos;d expect at the poster</h3>
              <div className="dmp-faq">
                {FAQ.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* ── Reproduce ── */}
            <section className="uxr-sec" id="dm-reproduce" aria-labelledby="dm-reproduce-h">
              <h3 className="uxr-h" id="dm-reproduce-h">Reproduce it</h3>
              <p className="uxr-p">
                Theorem 2 is implemented as a check you can run on your own PyTorch model: ormas-monitor watches training,
                certifies dead channels when the theorem&apos;s conditions hold, and can optionally repair them.
              </p>
              <pre className="dmp-code"><span className="c"># the lesion experiment, small scale</span>{"\n"}pip install "ormas-monitor[demo]"{"\n"}ormas-monitor demo</pre>
              <p className="uxr-p">
                The demo trains a CIFAR-10 CNN, zeroes two of its three conv layers and clears the optimiser state, then
                trains on twice from that same state: once only watching, once repairing. It downloads CIFAR-10 (about
                170&nbsp;MB) once.
              </p>
              <ul className="dmp-links">
                <li><a href={links.monitor} target="_blank" rel="noreferrer"><b>ormas-monitor</b><span>PyPI</span></a></li>
                <li><a href={links.monitorDocs} target="_blank" rel="noreferrer"><b>Documentation</b><span>oxiedo.github.io</span></a></li>
                <li><a href={links.archive} target="_blank" rel="noreferrer"><b>Run archive</b><span>All 383 runs</span></a></li>
              </ul>
            </section>

            {/* ── Corrections ── */}
            <section className="uxr-sec" id="dm-corrections" aria-labelledby="dm-corrections-h">
              <h3 className="uxr-h" id="dm-corrections-h">Corrections</h3>
              <p className="uxr-p">
                Four figures in the submitted abstract and on the printed poster have since been corrected. The lesion and
                shock numbers on this page and in the talk were recomputed from the raw run logs.
              </p>
              <div className="uxr-table-wrap" role="region" aria-label="Corrections to the abstract and the poster" tabIndex={0}>
                <table className="uxr-table">
                  <thead>
                    <tr><th scope="col">Earlier claim</th><th scope="col">Corrected</th></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Correction size fell 83–93% (abstract)</th>
                      <td>93% for the largest correction per epoch after a shock, 3 seeds; 90% counting only corrections that fired. Not to zero.</td>
                    </tr>
                    <tr>
                      <th scope="row">Contraction holds on 31.6% of steps (abstract)</th>
                      <td>Not a contraction measurement. It is the share of steps where ε/(ηα)&nbsp;&lt;&nbsp;1, essentially steps with no correction, in one seed; the other seeds give 71% and 76%. Contraction itself is not measured yet.</td>
                    </tr>
                    <tr>
                      <th scope="row">ResNet-18: 92.6% vs 91.7% (abstract)</th>
                      <td>Those were seed 0. Three-seed means: 92.3% vs 91.6%.</td>
                    </tr>
                    <tr>
                      <th scope="row">First reset at step 39&nbsp;493 (poster)</th>
                      <td>That is when the dead layers are flagged. The resets fire three epochs later, in epochs <span className="dmp-nb">103–104</span>.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Cite ── */}
            <section className="uxr-sec" id="dm-cite" aria-labelledby="dm-cite-h">
              <h3 className="uxr-h" id="dm-cite-h">Cite</h3>
              <div className="dmp-bib">
                <pre className="dmp-code">{BIBTEX}</pre>
                <CopyBibtex />
              </div>
            </section>

            {/* ── References ── */}
            <section className="uxr-sec" id="dm-refs" aria-labelledby="dm-refs-h">
              <h3 className="uxr-h" id="dm-refs-h">Key references</h3>
              <ol className="dmp-refs">
                <li>S. Dohare, J. F. Hernandez-Garcia, Q. Lan, P. Rahman, A. R. Mahmood and R. S. Sutton. Loss of plasticity in deep continual learning. <i>Nature</i> 632, 768–774, 2024. <a href="https://doi.org/10.1038/s41586-024-07711-7" target="_blank" rel="noreferrer">doi</a></li>
                <li>G. Sokar, R. Agarwal, P. S. Castro and U. Evci. The dormant neuron phenomenon in deep reinforcement learning (ReDo). <i>ICML</i>, 2023.</li>
                <li>J. Ash and R. P. Adams. On warm-starting neural network training (Shrink &amp; Perturb). <i>NeurIPS</i>, 2020.</li>
                <li>E. Nikishin, J. Oh, G. Ostrovski, C. Lyle, R. Pascanu, W. Dabney and A. Barreto. Deep reinforcement learning with plasticity injection. <i>NeurIPS</i>, 2023.</li>
                <li>E. D. Sontag. Smooth stabilization implies coprime factorization. <i>IEEE Trans. Automatic Control</i> 34(4), 435–443, 1989.</li>
                <li>J. P. Hespanha and A. S. Morse. Stability of switched systems with average dwell-time. <i>Proc. 38th IEEE Conference on Decision and Control</i>, 1999.</li>
                <li>L. Cui, Z.-P. Jiang, E. D. Sontag and R. D. Braatz. Perturbed gradient descent algorithms are small-disturbance input-to-state stable. 2025. <a href="https://arxiv.org/abs/2507.02131" target="_blank" rel="noreferrer">arXiv:2507.02131</a></li>
                <li>Z.-P. Jiang, A. R. Teel and L. Praly. Small-gain theorem for ISS systems and applications. <i>Mathematics of Control, Signals and Systems</i> 7, 95–120, 1994.</li>
                <li>Z.-P. Jiang and Y. Wang. Input-to-state stability for discrete-time nonlinear systems. <i>Automatica</i> 37(6), 857–869, 2001.</li>
                <li>O. Devolder, F. Glineur and Y. Nesterov. First-order methods of smooth convex optimization with inexact oracle. <i>Mathematical Programming</i> 146, 37–75, 2014.</li>
                <li>S. Arora, Z. Li and K. Lyu. Theoretical analysis of auto rate-tuning by batch normalization. <i>ICLR</i>, 2019.</li>
                <li>S. Kumar, H. Marklund and B. Van Roy. Maintaining plasticity in continual learning via regenerative regularization (L2 Init). <i>CoLLAs</i>, 2024.</li>
                <li>Z. Liu, J. Li, Z. Shen, G. Huang, S. Yan and C. Zhang. Learning efficient convolutional networks through network slimming. <i>ICCV</i>, 2017.</li>
              </ol>
            </section>

            {/* ── Contact ── */}
            <section className="uxr-sec" id="dm-contact" aria-labelledby="dm-contact-h">
              <h3 className="uxr-h" id="dm-contact-h">Ask a question</h3>
              <p className="uxr-p">
                Send me a question or a counter-example; I read everything. Questions and opportunities are always welcome.
              </p>
              <div className="rx-btns">
                <a className="rx-btn" href={`mailto:${links.email}?subject=DeepMath%202026%20poster%20question`}>Email your question</a>
                <a className="rx-btn is-ghost" href={links.calendly} target="_blank" rel="noreferrer">Book a 30-minute call <Arrow /></a>
              </div>
              <ul className="dmp-links">
                <li><a href={links.posterPdf} target="_blank" rel="noreferrer"><b>Poster</b><span>PDF, A0</span></a></li>
                <li><a href={links.openreview} target="_blank" rel="noreferrer"><b>Paper</b><span>OpenReview</span></a></li>
                <li><a href={links.cohereSlides} target="_blank" rel="noreferrer"><b>Talk slides</b><span>Cohere Labs, PDF</span></a></li>
                <li><a href={links.orcid} target="_blank" rel="noreferrer"><b>ORCID</b><span>0009-0003-1178-5296</span></a></li>
                <li><Link to="/research"><b>ORMAS</b><span>The full research record</span></Link></li>
              </ul>
              <p className="uxr-foot">
                All numbers are recomputed from the run logs (3 seeds, final epoch; sample s.d.) and supersede the submitted
                abstract and the poster where they differ (see <a href="#dm-corrections">Corrections</a>). Thank you to Prof. Zhihui Zhu and to DeepMath 2026 for displaying the poster in
                my absence.
              </p>
            </section>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
