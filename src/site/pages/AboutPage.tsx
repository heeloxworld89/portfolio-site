import { useEffect, useState } from "react";
import CVRecognition from "@/components/common/cv/CVRecognition";
import CVWhoIAm from "@/components/common/cv/CVWhoIAm";
import CVOriginStatement from "@/components/common/cv/CVOriginStatement";
import CVEducation from "@/components/common/cv/CVEducation";
import CVClosingAsk from "@/components/common/cv/CVClosingAsk";
import SiteLayout from "../SiteLayout";
import "../ux/about.css";

const toc = [
  { id: "recognition", label: "Recognition" },
  { id: "who-i-am", label: "Who he is" },
  { id: "statement", label: "Statement" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

/** Marks the section currently under the reading line. Runs only in the
 *  browser (inside an effect), so the prerender never touches `window`. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0]);
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const tocIds = toc.map((t) => t.id);

export default function AboutPage() {
  const active = useActiveSection(tocIds);
  // On narrow screens the list scrolls sideways: keep the current item visible.
  useEffect(() => {
    const list = document.querySelector<HTMLElement>(".ab-toc-list");
    const link = list?.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!list || !link || list.scrollWidth <= list.clientWidth) return;
    const lr = list.getBoundingClientRect();
    const kr = link.getBoundingClientRect();
    const left = list.scrollLeft + (kr.left - lr.left) - (lr.width - kr.width) / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [active]);
  return (
    <SiteLayout>
      <div className="ux-about">
        <section className="rx-page-head">
          <div className="rx-field is-hero" aria-hidden="true" />
          <div className="rx-wrap" style={{ position: "relative" }}>
            <h2 className="rx-label">About</h2>
            <h1>Rokib Al Dhin Raadh, 18: founder of OXIEDO and inventor of ORMAS.</h1>
            <p>Founder and CEO of OXIEDO and inventor of ORMAS, a self-repairing neural network. He taught himself machine learning and built both without a lab or a co-founder. In 2026 he earned ten independent selections, including a DeepMath 2026 acceptance after double-blind review and a NeurIPS 2026 reviewer role. The full recognition record, a six-year timeline, his personal statement, education and contact follow.</p>
          </div>
        </section>
        <nav className="ab-toc" aria-label="On this page">
          <div className="rx-wrap ab-toc-in">
            <span className="ab-toc-k">On this page</span>
            <ol className="ab-toc-list">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    aria-current={active === t.id ? "location" : undefined}
                  >
                    <span className="ab-toc-n">{String(i + 1).padStart(2, "0")}</span>
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <div className="rx-deep">
          <div className="rx-wrap">
            <CVRecognition />
            <CVWhoIAm />
            <CVOriginStatement />
            <CVEducation />
            <CVClosingAsk />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
