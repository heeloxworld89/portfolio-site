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
  { id: "oxiedo", n: "01", name: "OXIEDO", status: "Now · UK → US · licensing ORMAS", tone: "now" },
  { id: "oximo", n: "02", name: "OXIMO", status: "2023–2025 · ran a UK company", tone: "done" },
  { id: "black-bloxie", n: "03", name: "Black Bloxie", status: "2025–2026 · UK study · 10 countries", tone: "done" },
  { id: "ventures", n: "04", name: "Ventures", status: "2020–2025 · EU & US markets · one exit", tone: "done" },
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
            <h1>In business since he was twelve. OXIEDO is the company he is building now.</h1>
            <p>OXIEDO licenses ORMAS, Raadh&rsquo;s self-repairing neural network, to regulated institutions in the US, the EU and the UK, and its US company is being formed in Delaware. It is the end of a long chain. At 12 he started his first venture. At 15 he sold a stock-prediction system for about $10,000. At 17 he registered Black Bloxie LTD in England, handed the business to OXIMO, the 40,933-line agent system he had written, and saw output fall 91% when he switched it off. ORMAS came out of what OXIMO could not do.</p>
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
