import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { OnThisPage, useActiveSection, type TocItem } from "../OnThisPage";
import { links } from "../data";
import "../ux/research.css";
import "../ux/article.css";

/* /lunar-fire-safety: the spacecraft fire-safety preprint (22 Nov 2026) and
   the ledger of its registered predictions. Independent work from public
   NASA documents; the page must not imply any affiliation with NASA or the
   FM2 team. When FM2 data are released, score each prediction in LEDGER. */

const REGISTERED_SHA256 = "42a7cc60be844c2f63cce6cea30430f7632daf7bf36ecc887b50d247606a93a2";

const TOC: TocItem[] = [
  { id: "lf-rule", label: "The exact condition" },
  { id: "lf-data", label: "Tested on White Sands data" },
  { id: "lf-theory", label: "Where flame theory says it can break" },
  { id: "lf-fm2", label: "Registered predictions for FM2" },
  { id: "lf-limits", label: "What this does not claim" },
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
          <h1>When can a fire test be carried to another cabin pressure?</h1>
          <p>
            Rokib Al Dhin Raadh · Preprint, 22 November 2026 · Independent work from public sources; not affiliated with
            NASA or the FM2 team.
          </p>
        </div>
      </section>

      <div className="rx-deep ux-research ux-art">
        <div className="rx-wrap uxr-layout">
          <aside className="uxr-rail">
            <OnThisPage toc={TOC} active={active} foldOnPhone />
          </aside>
          <article className="uxr-main">

            <div className="art-intro">
              <p className="uxr-p">
                Lunar habitats are planned to run at 34% oxygen and 8.2 psia, and NASA&apos;s own engineering assessment
                finds that it has limited material flammability data above 30% oxygen. So fire-test results from older
                atmospheres get carried into the new one by rule.
              </p>
              <p className="uxr-p">
                The rule is exception (f) of NASA-STD-6016C. It lets a material that passed the upward flammability test
                be used at a lower oxygen concentration if the oxygen partial pressure does not rise, or if &ldquo;general
                test data&rdquo; show that the higher partial pressure is outweighed. The standard does not say what those
                data must show.
              </p>
              <p className="uxr-p">
                This preprint states exactly when the rule is safe, tests that condition on public NASA data, and registers
                predictions for FM2, the burn tests planned on the lunar surface, before any FM2 data were public. It is
                the same method as the machine-learning work on this site, such as the{" "}
                <Link to="/deepmath">DeepMath paper</Link>: find the exact condition under which a rule or an update is
                safe, test it, and say where it stops.
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
              <h2 className="uxr-h" id="lf-limits-h">What this does not claim</h2>
              <ul className="uxr-list">
                <li>It does not claim that any material is acceptable in the exploration atmosphere, propose a change to a NASA standard, or qualify anything.</li>
                <li>Every result compares verdicts of the same test. Whether a 1 g test bounds a material&apos;s behaviour in lunar gravity is a separate premise, which the condition neither assumes nor tests.</li>
                <li>The data test covers 22 materials at two or three pressures each. Zero violations means not contradicted.</li>
                <li>The burn-down correction assumes a well-mixed chamber. Gas warming of about 10 K per mol of oxygen consumed per 100 mol of gas would cancel the predicted 33-versus-29 difference.</li>
                <li>The FM2 plan used is a March 2026 conference presentation. The hardware, test ladder and launch date may change.</li>
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
