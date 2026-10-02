import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { links } from "../data";
import "../ux/evidence.css";
import { groups } from "../evidence";

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
              Most milestones were also announced publicly on{" "}
              <a href={links.x} target="_blank" rel="noreferrer">X (@Raad_X_)</a>. Last checked 1 October 2026.
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
                      {r.source?.map((s) => (
                        <a key={s.href} href={s.href} target={s.href.startsWith("/") ? undefined : "_blank"} rel="noreferrer">
                          {s.label} ↗
                        </a>
                      ))}
                      {r.status === "On request" && (
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
              are taken from the sources above. When a status changes, this page and the claim are updated together. The same list is published as machine-readable
              JSON at <a href="/evidence.json">/evidence.json</a>.
            </p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
