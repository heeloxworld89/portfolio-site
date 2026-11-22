import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { OnThisPage, useActiveSection, type TocItem } from "../OnThisPage";
import { links } from "../data";
import "../ux/research.css";
import "../ux/article.css";

/* /lunar-fire-safety: the spacecraft fire-safety preprint (22 Nov 2026) and
   the ledger of its registered predictions. When FM2 data are released, score
   each prediction in LEDGER. */

const REGISTERED_SHA256 = "42a7cc60be844c2f63cce6cea30430f7632daf7bf36ecc887b50d247606a93a2";

const TOC: TocItem[] = [
  { id: "lf-rule", label: "The exact condition" },
  { id: "lf-data", label: "Tested on White Sands data" },
  { id: "lf-theory", label: "Where flame theory says it can break" },
  { id: "lf-fm2", label: "Registered predictions for FM2" },
  { id: "lf-limits", label: "Scope" },
  { id: "lf-links", label: "Paper, code and timestamp" },
];

const WSTF: string[][] = [
  ["Exception (f), s̄ = 1", "44", "0"],
  ["Relaxed rule, s̄ = 0.5", "44", "1"],
  ["Oxygen share alone, s̄ = 0", "44", "38"],
];

const LEDGER: string[][] = [
  ["F1 · raw readings of the 33% and 29% tests", "33% reads higher by +0.47 to +0.69 points in an isothermal chamber (registered band +0.10 to +0.69)", "Awaiting FM2 data"],
  ["F2 · the same readings, corrected", "Agree within twice their combined uncertainty plus 0.31 points", "Awaiting FM2 data"],
  ["S1 · ISS stagnation blowoff, pressure slope at 15% O₂", "s between 0.08 and 0.40", "Awaiting ISS reduced-pressure data"],
  ["S2 · forced opposed-flow blowoff", "s between −0.17 and 0.22", "Conditional, not registered"],
];

const ext = { target: "_blank", rel: "noreferrer" } as const;

function Table({ label, head, rows, numeric = false }: { label: string; head: string[]; rows: string[][]; numeric?: boolean }) {
  return (
    <div className="uxr-table-wrap" role="region" aria-label={label} tabIndex={0}>
      <table className="uxr-table">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={h} scope="col" className={numeric && i > 0 ? "num" : undefined}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, ...rest]) => (
            <tr key={a}>
              <th scope="row">{a}</th>
              {rest.map((c, i) => (
                <td key={i} className={numeric ? "num" : undefined}>{c}</td>
              ))}
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
          <h2 className="rx-label">Research · Spacecraft fire safety</h2>
          <h1>Solving a fire-safety problem in NASA&apos;s plans for the Moon.</h1>
          <p>
            NASA&apos;s lunar habitats are planned to run at 34% oxygen, and NASA&apos;s own engineering review says it has
            limited fire data above 30%. This preprint gives the exact rule for carrying fire-test results into that
            atmosphere, and registers predictions for the first fire experiment on the Moon before it flies.
          </p>
          <p className="lf-byline">Rokib Al Dhin Raadh · Preprint · 22 November 2026</p>
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

            <div className="art-intro">
              <p className="uxr-p">
                NASA is moving its crews to a new atmosphere. Lunar landers, habitats and rovers are planned to run at 8.2
                psia and 34% oxygen, to cut the risk of decompression sickness. NASA&apos;s own engineering assessment
                finds that &ldquo;NASA has limited empirical material flammability data at O<sub>2</sub> concentrations
                higher than 30%&rdquo;. So decades of fire-test results from older atmospheres have to be carried into the
                new one by rule.
              </p>
              <p className="uxr-p">
                That rule is exception (f) of NASA-STD-6016C: a material that passed the upward flammability test may be
                used at a lower oxygen share if the oxygen partial pressure does not rise, or if &ldquo;general test
                data&rdquo; show that the higher partial pressure is outweighed. The standard never says what those data
                must show, or when the rule itself is safe.
              </p>
              <p className="uxr-p">
                This paper answers both, exactly. It proves the condition under which the rule can never let a failing
                material through, checks it against NASA&apos;s own White Sands data, maps where flame physics could break
                it at 34% oxygen, and locks in predictions for FM2, the burn tests planned on the lunar surface, which its
                team calls the first combustion experiments on another world. It is the same method as Raadh&apos;s
                machine-learning work, such as the <Link to="/deepmath">DeepMath paper</Link>: find the exact condition
                under which a rule is safe, then test it.
              </p>
            </div>

            <section className="uxr-sec" id="lf-rule" aria-labelledby="lf-rule-h">
              <h2 className="uxr-h" id="lf-rule-h">The exact condition</h2>
              <p className="uxr-p">
                Fix one test configuration: material, thickness, geometry, gravity, flow and igniter. The partial-pressure
                rule, and every relaxed rule <i>X</i>·<i>P</i><sup>s̄</sup> ≤ constant, never licenses an atmosphere in
                which the same test would fail, across a pressure interval, <strong>if and only if</strong> the slope of
                the material&apos;s limiting oxygen fraction against pressure, σ = −Δ ln <i>X</i>* / Δ ln <i>P</i>, stays
                between 0 and s̄ for every pair of pressures in it.
              </p>
              <p className="uxr-p">
                Direction matters. A move to higher pressure needs only σ ≤ s̄; a move to lower pressure needs only σ ≥ 0.
                A version on pass-probability curves removes the assumption that a material has a sharp limit.
              </p>
              <p className="uxr-p">
                This gives the &ldquo;general test data&rdquo; clause a precise meaning: an upper bound, below one, on that
                slope between the test and use pressures, in the test configuration. The proofs are elementary; the
                contribution is the exact statement.
              </p>
            </section>

            <section className="uxr-sec" id="lf-data" aria-labelledby="lf-data-h">
              <h2 className="uxr-h" id="lf-data-h">Tested on White Sands data</h2>
              <p className="uxr-p">
                The largest public table of these limits at several pressures is NASA White Sands Test Facility data for 22
                materials (Harper et al., 2016; 1 g upward Test 1, 7 to 17.3 psia). On it, exception (f) licenses no
                known failure, and no pressure pair is provably outside the band. Reading by oxygen share alone licenses a
                known failure on 38 of 44 upward pairs up to 14.7 psia.
              </p>
              <Table
                label="Known failures licensed by each rule on the White Sands table, 7 to 14.7 psia"
                head={["Rule", "Upward pressure pairs", "Known failures licensed"]}
                rows={WSTF}
                numeric
              />
              <p className="uxr-p">
                The test can only falsify: zero violations means &ldquo;not contradicted by these data&rdquo;, not proven.
              </p>
            </section>

            <section className="uxr-sec" id="lf-theory" aria-labelledby="lf-theory-h">
              <h2 className="uxr-h" id="lf-theory-h">Where flame theory says it can break</h2>
              <p className="uxr-p">
                Within a standard family of flame scaling models, both ways out of the band appear in low-flow
                configurations: radiation-controlled regimes give slopes above 1, and slow-kinetics regimes give slopes
                below 0. The models cannot say which controls at 34% oxygen, and none of them is a model of the 1 g upward
                Test 1. That is the gap a test at the target pressure has to close.
              </p>
            </section>

            <section className="uxr-sec" id="lf-fm2" aria-labelledby="lf-fm2-h">
              <h2 className="uxr-h" id="lf-fm2-h">Registered predictions for FM2</h2>
              <p className="uxr-p">
                FM2 plans four burn tests at 8.2 psia, starting at 37, 33, 29 and 25% oxygen, in a 14.4 L sealed chamber on
                the lunar surface. Each test reaches its limit by burning the chamber&apos;s own oxygen, so its raw reading
                is not a fresh-gas limit.
              </p>
              <p className="uxr-p">
                The preprint derives the bias. Combustion products carry more heat than nitrogen, so a raw reading comes
                out high, by 0.17 to 0.21 points per mol of oxygen consumed per 100 mol of gas. Used as a fresh-gas limit,
                a raw reading is unconservative.
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
                F1 is decisive only if gas temperature, pressure, the oxygen sensor&apos;s uncertainty and the reading time
                relative to flame-out are reported; in practice FM2 can test the sign of the correction, not its size.
                When FM2 data are released, each prediction will be scored on this page, including the ones that fail.
              </p>
              <p className="uxr-p">
                <strong>When it was registered.</strong> In v1 of the preprint, whose Zenodo record was created on 22
                November 2026 at 07:08 UTC. As of that date no report of an FM2 flight and no public FM2 data could be
                found. The registered band is printed in <a href={links.fireRegistered} {...ext}>f1_band.out</a>, SHA-256{" "}
                <code className="lf-hash">{REGISTERED_SHA256}</code>.
              </p>
            </section>

            <section className="uxr-sec" id="lf-limits" aria-labelledby="lf-limits-h">
              <h2 className="uxr-h" id="lf-limits-h">Scope</h2>
              <ul className="uxr-list">
                <li>The condition is exact for a fixed test configuration. Whether a 1 g test bounds a material&apos;s behaviour in lunar gravity is a separate question, and one FM2 helps answer.</li>
                <li>The data check covers 22 materials at two or three pressures each, so zero violations means not contradicted by NASA&apos;s data.</li>
                <li>The FM2 predictions assume a well-mixed chamber and are decisive only if gas temperature and pressure are reported.</li>
              </ul>
            </section>

            <section className="uxr-sec" id="lf-links" aria-labelledby="lf-links-h">
              <h2 className="uxr-h" id="lf-links-h">Paper, code and timestamp</h2>
              <p className="uxr-p">
                The preprint is 39 pages, sole-authored and public on Zenodo under CC BY 4.0, with the code and data that
                regenerate every number and a SHA-256 list of every file.
              </p>
              <div className="art-sign">
                <p className="uxr-p">
                  Raadh, R. A. D. (2026). <i>Carrying flammability limits across cabin pressure: the oxygen partial-pressure
                  rule, and how to read the FM2 lunar burn-down tests.</i> Preprint, Zenodo.{" "}
                  <a href={links.fireDoi} {...ext}>doi:10.5281/zenodo.24435363</a>
                </p>
                <p className="uxr-p">Corrections and data: raadh@oxiedo.com</p>
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
