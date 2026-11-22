import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { OnThisPage, useActiveSection, type TocItem } from "../OnThisPage";
import { links } from "../data";
import "../ux/research.css";
import "../ux/article.css";

/* /lunar-fire-safety: the lunar fire-safety research project, told as
   problem → approach → what is solved → what is next. Its paper (22 Nov 2026)
   is one output. When FM2 data are released, score each prediction in LEDGER. */

const REGISTERED_SHA256 = "42a7cc60be844c2f63cce6cea30430f7632daf7bf36ecc887b50d247606a93a2";

const TOC: TocItem[] = [
  { id: "lf-problem", label: "The problem" },
  { id: "lf-approach", label: "The approach" },
  {
    id: "lf-solved",
    label: "What is solved",
    children: [
      { id: "lf-rule", label: "1 · The exact rule" },
      { id: "lf-data", label: "2 · Checked on NASA's data" },
      { id: "lf-theory", label: "3 · Where flame physics could break it" },
      { id: "lf-fm2", label: "4 · Reading FM2 before it flies" },
    ],
  },
  { id: "lf-next", label: "What comes next" },
  { id: "lf-limits", label: "Scope" },
  { id: "lf-links", label: "Paper, code and data" },
];

const WSTF: string[][] = [
  ["NASA's rule, exception (f)", "44", "0"],
  ["A relaxed version of the rule", "44", "1"],
  ["Judging by oxygen share alone", "44", "38"],
];

const LEDGER: string[][] = [
  ["F1 · raw readings of the 33% and 29% tests", "33% reads higher by +0.47 to +0.69 points in an isothermal chamber (registered band +0.10 to +0.69)", "Awaiting FM2 data"],
  ["F2 · the same readings, corrected", "Agree within twice their combined uncertainty plus 0.31 points", "Awaiting FM2 data"],
  ["S1 · ISS stagnation blowoff, pressure slope at 15% O₂", "s between 0.08 and 0.40", "Awaiting ISS reduced-pressure data"],
  ["S2 · forced opposed-flow blowoff", "s between −0.17 and 0.22", "Conditional, not registered"],
];

const ext = { target: "_blank", rel: "noreferrer" } as const;

function Table({ label, head, rows }: { label: string; head: string[]; rows: string[][] }) {
  return (
    <div className="uxr-table-wrap" role="region" aria-label={label} tabIndex={0}>
      <table className="uxr-table">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={h} scope="col" className={i > 0 ? "num" : undefined}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, ...rest]) => (
            <tr key={a}>
              <th scope="row">{a}</th>
              {rest.map((c, i) => <td key={i} className="num">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LunarFirePage() {
  const active = useActiveSection(TOC);
  return (
    <SiteLayout>
      <section className="rx-page-head ux-art-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">Research project · Spacecraft fire safety</h2>
          <h1>Solving a fire-safety problem in NASA&apos;s plans for the Moon.</h1>
          <p>
            NASA&apos;s lunar habitats will run at 34% oxygen, above most of NASA&apos;s fire data. This project finds the
            exact rule for when a fire test still holds in that atmosphere, checks it against NASA&apos;s own data, and
            reads the first fire experiment on the Moon before it flies.
          </p>
          <p className="lf-byline">A research project by Rokib Al Dhin Raadh · built on the same theory as ORMAS</p>
        </div>
      </section>

      <div className="rx-deep ux-research ux-art">
        <div className="rx-wrap uxr-layout">
          <aside className="uxr-rail">
            <OnThisPage toc={TOC} active={active} foldOnPhone />
          </aside>
          <article className="uxr-main">

            <ul className="lf-stats" aria-label="Key numbers">
              <li><b>34%</b><span>oxygen planned for NASA&apos;s lunar habitats, above most of its fire data</span></li>
              <li><b>0</b><span>known failures NASA&apos;s rule allows on its own White Sands data</span></li>
              <li><b>38 of 44</b><span>moves where judging by oxygen share alone lets a known failure through</span></li>
              <li><b>Pre-flight</b><span>predictions for FM2 registered before any lunar fire data exist</span></li>
            </ul>

            <section className="uxr-sec" id="lf-problem" aria-labelledby="lf-problem-h">
              <h2 className="uxr-h" id="lf-problem-h">The problem</h2>
              <p className="uxr-p">
                Fire is the hazard an oxygen-rich cabin cannot afford. In 1967 a fire in the pure-oxygen cabin of Apollo 1
                killed three astronauts during a ground test, and spacecraft materials have been fire-tested ever since.
              </p>
              <p className="uxr-p">
                Now NASA is moving its crews to a new atmosphere. Lunar landers, habitats and rovers are planned to run at
                8.2 psia and 34% oxygen, to cut the risk of decompression sickness, with control bands up to 37%. NASA&apos;s
                own engineering assessment finds that &ldquo;NASA has limited empirical material flammability data at
                O<sub>2</sub> concentrations higher than 30%&rdquo;.
              </p>
              <p className="uxr-p">
                So the fire-test results NASA already has, from 24.1% oxygen at 14.7 psia and 30% at 10.2 psia, have to be
                carried into the new atmosphere by rule. That rule is exception (f) of NASA-STD-6016C, and it never says
                when it is safe: its &ldquo;general test data&rdquo; clause does not say what the data must show.
              </p>
              <p className="uxr-p">
                The first direct test is coming. FM2, which its team calls the first combustion experiments on another
                world, will burn a fabric in a sealed chamber on the lunar surface. Each burn eats the chamber&apos;s own
                oxygen and fills it with combustion products, so its raw readings will not be the limits they look like.
              </p>
            </section>

            <section className="uxr-sec" id="lf-approach" aria-labelledby="lf-approach-h">
              <h2 className="uxr-h" id="lf-approach-h">The approach</h2>
              <p className="uxr-p">
                The same theory that runs through <Link to="/research">ORMAS</Link>: when a system takes a step that is not
                the standard one, find the exact condition under which it stays safe. In ORMAS the step is a repair that is
                not a gradient. Here it is a move from the atmosphere a material was tested in to the one it will be used
                in.
              </p>
              <ol className="uxr-list">
                <li><strong>Prove</strong> the exact condition under which NASA&apos;s rule can never let a failing material through.</li>
                <li><strong>Test</strong> it against NASA&apos;s own fire-test data.</li>
                <li><strong>Predict</strong> what FM2 will read on the Moon, and register it before FM2 flies, so the theory can be proven wrong.</li>
              </ol>
            </section>

            <div id="lf-solved" className="lf-solved-anchor" />

            <section className="uxr-sec" id="lf-rule" aria-labelledby="lf-rule-h">
              <h2 className="uxr-h" id="lf-rule-h">1 · The exact rule</h2>
              <p className="uxr-p">
                For one fixed test, NASA&apos;s partial-pressure rule, and every relaxed rule <i>X</i>·<i>P</i><sup>s̄</sup>
                {" "}≤ constant, never licenses an atmosphere in which the material would fail, across a pressure range,{" "}
                <strong>if and only if</strong> one number stays in a band: the slope of the material&apos;s limiting oxygen
                fraction against pressure, σ = −Δ ln <i>X</i>* / Δ ln <i>P</i>, must lie between 0 and s̄.
              </p>
              <p className="uxr-p">
                Direction matters. Moving to a higher pressure needs only σ ≤ s̄; moving to a lower pressure needs only
                σ ≥ 0. A version on pass-probability curves drops the assumption that a material has a sharp limit. Now the
                &ldquo;general test data&rdquo; clause has a precise meaning: an upper bound, below one, on
                that slope between the test and use pressures.
              </p>
            </section>

            <section className="uxr-sec" id="lf-data" aria-labelledby="lf-data-h">
              <h2 className="uxr-h" id="lf-data-h">2 · Checked on NASA&apos;s data</h2>
              <p className="uxr-p">
                On the largest public table of these limits at several pressures, NASA White Sands Test Facility data for 22
                materials (Harper et al., 2016; 7 to 17.3 psia), NASA&apos;s rule allows no known failure. Judging by oxygen
                share alone, the intuitive shortcut, lets a known failure through on 38 of 44 moves to higher pressure.
              </p>
              <Table
                label="Known failures each rule lets through on NASA's White Sands table, 7 to 14.7 psia"
                head={["Rule", "Moves to higher pressure", "Known failures let through"]}
                rows={WSTF}
              />
              <p className="uxr-p">
                The same data also supply the evidence the &ldquo;general test data&rdquo; clause asks for: for a material
                that passed at 34% and 8.2 psia and is later used at 24.1% and 14.7 psia, the table covers two of the four
                materials that could pass at 34% at all, and all four from the 37% worst case.
              </p>
            </section>

            <section className="uxr-sec" id="lf-theory" aria-labelledby="lf-theory-h">
              <h2 className="uxr-h" id="lf-theory-h">3 · Where flame physics could break it</h2>
              <p className="uxr-p">
                Standard flame scaling models show both ways out of the band in low-flow conditions: where radiation
                controls the flame the slope rises above 1, and where chemistry is slow it falls below 0. Which one governs
                at 34% oxygen the models cannot say. That is exactly what a test at the target pressure, in real lunar
                gravity, has to settle.
              </p>
            </section>

            <section className="uxr-sec" id="lf-fm2" aria-labelledby="lf-fm2-h">
              <h2 className="uxr-h" id="lf-fm2-h">4 · Reading FM2 before it flies</h2>
              <p className="uxr-p">
                FM2 plans four burns at 8.2 psia, starting at 37, 33, 29 and 25% oxygen, in a 14.4 L sealed chamber. A gas
                balance gives the size of the error in its raw readings: they come out high, by 0.17 to 0.21 points per mol
                of oxygen consumed per 100 mol of gas, because combustion products carry more heat than nitrogen. Read
                uncorrected, a burn-down limit is unsafe.
              </p>
              <ol className="lf-ledger" aria-label="Registered predictions and their status">
                {LEDGER.map(([name, value, status]) => (
                  <li key={name}>
                    <p className="lf-ledger-name">{name}</p>
                    <p className="lf-ledger-val">{value}</p>
                    <span className={`lf-ledger-st${status.startsWith("Conditional") ? " is-cond" : ""}`}>{status}</span>
                  </li>
                ))}
              </ol>
              <p className="uxr-p">
                F1 is decisive if FM2 reports gas temperature, pressure, the oxygen sensor&apos;s uncertainty and the reading
                time relative to flame-out. When FM2 data are released, every prediction will be scored here, including any
                that fail.
              </p>
              <p className="uxr-p">
                <strong>Registered on 22 November 2026</strong>, in a Zenodo record created at 07:08 UTC, before any FM2 data
                were public. The registered band is printed in <a href={links.fireRegistered} {...ext}>f1_band.out</a>,
                SHA-256 <code className="lf-hash">{REGISTERED_SHA256}</code>.
              </p>
            </section>

            <section className="uxr-sec" id="lf-next" aria-labelledby="lf-next-h">
              <h2 className="uxr-h" id="lf-next-h">What comes next</h2>
              <ol className="uxr-list">
                <li><strong>Score FM2.</strong> Compare every registered prediction with FM2&apos;s data when it is released, and publish the result either way.</li>
                <li><strong>Class-by-class bounds.</strong> Turn NASA&apos;s White Sands archive into slope bounds for each material family (hydrocarbons, halogenated polymers, silicones, aramids), fitted on one set of materials and tested on another. That is exactly the evidence exception (f)&apos;s second clause asks for.</li>
                <li><strong>Test the physics map on the ISS.</strong> Check the flame-scaling predictions against the reduced-pressure limits from the SoFIE experiments on the ISS when they are published.</li>
                <li><strong>Partial-gravity data.</strong> Digitize NASA&apos;s published centrifuge and reduced-pressure limits and add a model for the upward-flow test, so the physics map becomes a test.</li>
                <li><strong>Test-campaign design.</strong> Finish the model that ranks which facility, from White Sands to the ISS to the Moon, best pins down a lunar-habitat material&apos;s fire limit.</li>
              </ol>
            </section>

            <section className="uxr-sec" id="lf-limits" aria-labelledby="lf-limits-h">
              <h2 className="uxr-h" id="lf-limits-h">Scope</h2>
              <ul className="uxr-list">
                <li>The rule is exact for a fixed test configuration. Whether a 1 g test bounds a material&apos;s behaviour in lunar gravity is a separate question, and one FM2 helps answer.</li>
                <li>The data check covers 22 materials at two or three pressures each, so zero violations means not contradicted by NASA&apos;s data.</li>
                <li>The FM2 predictions assume a well-mixed chamber and are decisive only if gas temperature and pressure are reported.</li>
              </ul>
            </section>

            <section className="uxr-sec" id="lf-links" aria-labelledby="lf-links-h">
              <h2 className="uxr-h" id="lf-links-h">Paper, code and data</h2>
              <p className="uxr-p">
                The full 39-page paper is public under CC BY 4.0, with the code and data that regenerate every number and a
                SHA-256 list of every file.
              </p>
              <div className="art-sign">
                <p className="uxr-p">
                  Raadh, R. A. D. (2026). <i>Carrying flammability limits across cabin pressure: the oxygen partial-pressure
                  rule, and how to read the FM2 lunar burn-down tests.</i> Zenodo.{" "}
                  <a href={links.fireDoi} {...ext}>doi:10.5281/zenodo.24435363</a>
                </p>
                <p className="uxr-p">Data, corrections and collaboration: raadh@oxiedo.com</p>
                <ul className="art-links">
                  <li><a href={links.fire} {...ext}>Paper</a></li>
                  <li><a href={links.fireCode} {...ext}>Code and data</a></li>
                  <li><a href={links.fireRegistered} {...ext}>Registered output</a></li>
                  <li><Link to="/evidence#ev-fire">Evidence</Link></li>
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </SiteLayout>
  );
}
