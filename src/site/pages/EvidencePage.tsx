import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links } from "../data";
import "../ux/evidence.css";

/* Every claim on raadh.me, with where it can be checked. "Public" rows link to
   a record anyone can open; "On request" rows are backed by correspondence the
   founder shares with investors, journalists and reviewers. Keep this page in
   step with the rest of the site: a claim that is not listed here should not
   appear anywhere else. */

type Row = { claim: string; detail: string; source?: { label: string; href: string }[]; status: "Public record" | "On request" };
type Group = { id: string; title: string; rows: Row[] };

const MITX = "https://mitxonline.mit.edu/records/shared/";

const groups: Group[] = [
  {
    id: "research",
    title: "Research: ORMAS",
    rows: [
      {
        claim: "Author and inventor of ORMAS",
        detail: "Full paper and 36-page supplementary, sole author, released 1 August 2026.",
        source: [{ label: "Zenodo · DOI 10.5281/zenodo.21730363", href: links.doi }],
        status: "Public record",
      },
      {
        claim: "80.3% vs 10.0% after a layer is destroyed; 383 experiments on one RTX 3090",
        detail: "Every number is in the preprint's tables. The code reproduces all 383 runs from seed.",
        source: [
          { label: "Preprint", href: links.preprint },
          { label: "Code archive", href: links.code },
          { label: "Results archive", href: links.archive },
        ],
        status: "Public record",
      },
      {
        claim: "Researcher identity",
        detail: "ORCID record for Rokib Al Dhin Raadh, which links back to raadh.me.",
        source: [{ label: "ORCID 0009-0003-1178-5296", href: links.orcid }],
        status: "Public record",
      },
    ],
  },
  {
    id: "peer-review",
    title: "Peer review and service",
    rows: [
      {
        claim: "DeepMath 2026: stability paper accepted after double-blind review (poster)",
        detail:
          "Conference on the Mathematical Theory of Deep Neural Networks, hosted by Ohio State University, 29–30 October 2026. Submissions are reviewed double-blind; DeepMath publishes no proceedings.",
        source: [{ label: "DeepMath 2026", href: links.deepmath }],
        status: "On request",
      },
      {
        claim: "Reviewer, NeurIPS 2026 Trustworthy AI for Good workshop",
        detail: "Workshop at NeurIPS 2026, Paris, 12–13 December. Reviewer role through the workshop's open application.",
        source: [{ label: "Workshop site", href: links.neurips }],
        status: "On request",
      },
    ],
  },
  {
    id: "company",
    title: "Company and systems",
    rows: [
      {
        claim: "Founder and CEO of OXIEDO (founded 2023)",
        detail: "OXIEDO licenses ORMAS on-premise to regulated industries. Pre-revenue; no outside capital raised.",
        source: [{ label: "oxiedo.com", href: links.oxiedo }],
        status: "Public record",
      },
      {
        claim: "OXIMO: 40,933-line multi-agent operating system, 2,069 passing tests",
        detail: "Source archive of the system described on the Work page.",
        source: [{ label: "OXIMO code archive", href: links.oximoCode }],
        status: "Public record",
      },
      {
        claim: "OXIMO / Black Bloxie twelve-month field study",
        detail: "Technical report and commercial whitepaper with the full method and figures.",
        source: [
          { label: "Technical report (PDF)", href: links.techPaper },
          { label: "Whitepaper (PDF)", href: links.whitepaper },
        ],
        status: "Public record",
      },
      {
        claim: "Five ventures between ages 12 and 17; a stock-prediction system sold for about $10,000 at 15",
        detail: "Records of the ventures and of the sale.",
        status: "On request",
      },
    ],
  },
  {
    id: "selection",
    title: "Selection and recognition, 2026",
    rows: [
      { claim: "1752vc Ignite: accepted from the top 1% of applicants", detail: "Acceptance correspondence from 1752vc.", status: "On request" },
      { claim: "Cosmos Institute: ranked highest in its grant cycle", detail: "Correspondence from Cosmos Institute. No grant was awarded in that cycle; Cosmos invited a resubmission to its technical track.", status: "On request" },
      { claim: "Freshmango: offered a place after a single interview", detail: "Offer correspondence from Freshmango.", status: "On request" },
      { claim: "The Bridge (Entrepreneur First, San Francisco): holding in the final round", detail: "Interview records from two completed rounds.", status: "On request" },
      { claim: "Entrepreneur First, London: first-round interview", detail: "Interview invitation from EF's talent team.", status: "On request" },
      { claim: "Onstage W26: invited to the pre-pitch event", detail: "Invitation to the pre-pitch event in Central London. The demo-day decision is pending.", status: "On request" },
      { claim: "Antler Australia: programme process cancelled over work-permit logistics", detail: "Correspondence from Antler Australia.", status: "On request" },
      { claim: "IARCO 2026: finalist", detail: "Finalist notification, International Academic Research Competition.", status: "On request" },
      { claim: "Cohere Labs Open Science Community: member", detail: "Welcome correspondence from Cohere Labs.", status: "On request" },
    ],
  },
  {
    id: "education",
    title: "Education",
    rows: [
      {
        claim: "Seven MIT Open Learning (MITx) programmes completed",
        detail: "Shared MITx Online records. MITx Online sometimes fails to load shared records; certificates are available on request.",
        source: [
          { label: "Universal AI Foundational Models", href: MITX + "776b490f-67be-46a2-8ddc-86d3b86bb9c0/" },
          { label: "AI & Precision Medicine", href: MITX + "cc81d799-e745-4f8e-8837-a75d4e1bfd49/" },
          { label: "Holistic AI in Medicine", href: MITX + "082917c3-0327-4b28-8049-10e588692dc0/" },
          { label: "AI and Sustainability: Energy", href: MITX + "3d1aa3ad-4f07-4f64-aaf8-7dbc720913db/" },
          { label: "AI and Sustainability: Transportation", href: MITX + "ed8f94b2-2fb0-43fb-b5ab-9052d6e777fb/" },
          { label: "AI for Transportation", href: MITX + "31cbd749-a3ca-488e-80ad-10ddb771a12f/" },
          { label: "AI & Entrepreneurship", href: MITX + "c4c84c9c-1c8e-469f-a050-2269b1fe0a3c/" },
        ],
        status: "Public record",
      },
      {
        claim: "Deep Learning Specialization (DeepLearning.AI)",
        detail: "Five-course specialisation, verified by Coursera.",
        source: [{ label: "Coursera verification", href: "https://coursera.org/verify/specialization/R7SYBBCXR1OY" }],
        status: "Public record",
      },
      {
        claim: "40% scholarship offered on a further MIT programme",
        detail: "Offered after an admissions call; not taken up for financial and logistical reasons.",
        status: "On request",
      },
    ],
  },
];

const publicCount = groups.flatMap((g) => g.rows).filter((r) => r.status === "Public record").length;
const total = groups.flatMap((g) => g.rows).length;

export default function EvidencePage() {
  return (
    <SiteLayout>
      <div className="ux-evidence">
        <section className="rx-page-head">
          <div className="rx-field is-hero" aria-hidden="true" />
          <div className="rx-wrap" style={{ position: "relative" }}>
            <h2 className="rx-label">Evidence</h2>
            <h1>Every claim on this site, with where to check it.</h1>
            <p>
              Rokib Al Dhin Raadh, 18, is the founder and CEO of OXIEDO and the inventor of ORMAS. This page lists each
              claim made on raadh.me and its source: {publicCount} of {total} link to a public record anyone can open,
              and the rest are backed by correspondence available on request from{" "}
              <a href={`mailto:${links.founderEmail}?subject=Verifying%20a%20claim%20on%20raadh.me`}>{links.founderEmail}</a>.
              Last checked 1 October 2026.
            </p>
          </div>
        </section>

        <div className="rx-wrap">
          <nav className="ev-jump" aria-label="Evidence sections">
            {groups.map((g) => (
              <a key={g.id} href={`#ev-${g.id}`}>{g.title}</a>
            ))}
          </nav>

          {groups.map((g) => (
            <section className="ev-group" id={`ev-${g.id}`} key={g.id} aria-labelledby={`ev-${g.id}-h`}>
              <h2 id={`ev-${g.id}-h`}>{g.title}</h2>
              <ul className="ev-rows">
                {g.rows.map((r) => (
                  <li className="ev-row" key={r.claim}>
                    <div className="ev-claim">
                      <span className={`ev-status ${r.status === "Public record" ? "is-public" : "is-request"}`}>{r.status}</span>
                      <h3>{r.claim}</h3>
                      <p>{r.detail}</p>
                    </div>
                    <div className="ev-src">
                      {r.source ? (
                        r.source.map((s) => (
                          <a key={s.href} href={s.href} target={s.href.startsWith("/") ? undefined : "_blank"} rel="noreferrer">
                            {s.label} ↗
                          </a>
                        ))
                      ) : (
                        <a href={`mailto:${links.founderEmail}?subject=${encodeURIComponent("Documentation: " + r.claim)}`}>
                          Request the document ↗
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="ev-group ev-policy">
            <h2>How this page is kept</h2>
            <p>
              Figures on the{" "}
              <Link to="/research">Research</Link>, <Link to="/work">Work</Link> and <Link to="/about">About</Link> pages
              are taken from the sources above. When a status changes, for example a decision that is still pending,
              this page and the claim are updated together.
            </p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
