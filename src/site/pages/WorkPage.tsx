import { useEffect, useState } from "react";
import CVBusiness from "@/components/common/cv/CVBusiness";
import CVOximo from "@/components/common/cv/CVOximo";
import CVBlackBloxie from "@/components/common/cv/CVBlackBloxie";
import CVVentures from "@/components/common/cv/CVVentures";
import SiteLayout from "../SiteLayout";
import "../ux/work.css";

/* The page is one arc, newest first. The chapter bar makes that arc visible
   and lets a reader jump straight to the part they came for. */
const chapters = [
  { id: "oxiedo", n: "01", name: "OXIEDO", status: "Now · pre-revenue", tone: "now" },
  { id: "oximo", n: "02", name: "OXIMO", status: "2023–2025 · concluded", tone: "done" },
  { id: "black-bloxie", n: "03", name: "Black Bloxie", status: "2025–2026 · field study", tone: "done" },
  { id: "ventures", n: "04", name: "Ventures", status: "2020–2025 · one exit", tone: "done" },
] as const;

function useActiveChapter() {
  const [active, setActive] = useState<string>(chapters[0].id);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((e): e is HTMLElement => !!e);
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        const first = chapters.find((c) => seen.get(c.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-90px 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export default function WorkPage() {
  const active = useActiveChapter();

  return (
    <SiteLayout>
      <div className="ux-work">
        <section className="rx-page-head">
          <div className="rx-field is-hero" aria-hidden="true" />
          <div className="rx-wrap" style={{ position: "relative" }}>
            <h2 className="rx-label">Work</h2>
            <h1>Founder of OXIEDO. Building companies since the age of 12.</h1>
            <p>Rokib Al Dhin Raadh is the founder and CEO of OXIEDO, which licenses ORMAS, his self-repairing neural network, to regulated industries. Each step built on the last: five ventures from age 12 and a ~$10,000 sale at 15; OXIMO, a 40,933-line multi-agent system with 2,069 tests; a 12-month controlled study on a live UK company, Black Bloxie LTD, where removing OXIMO cut output 91%; then ORMAS and OXIEDO.</p>
          </div>
        </section>

        <nav className="uw-chapters" aria-label="Sections on this page">
          <div className="rx-wrap uw-ch-in">
            <span className="uw-ch-k">On this page</span>
            <ol>
              {chapters.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    className={`is-${c.tone}${active === c.id ? " is-active" : ""}`}
                    aria-current={active === c.id ? "location" : undefined}
                    title={c.status}
                  >
                    <span className="uw-ch-n">{c.n}</span>
                    <span className="uw-ch-t">{c.name}</span>
                    <span className="uw-ch-s">{c.status}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="rx-deep">
          <div className="rx-wrap">
            <CVBusiness />
            <CVOximo />
            <CVBlackBloxie />
            <CVVentures />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
