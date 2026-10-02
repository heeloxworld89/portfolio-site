import { useEffect, useState } from "react";
import CVResearch from "@/components/common/cv/CVResearch";
import CVCherry from "@/components/common/cv/CVCherry";
import SiteLayout from "../SiteLayout";
import "../ux/research.css";

type TocItem = { id: string; label: string; children?: { id: string; label: string }[] };

/** "On this page": built from the section headings below; every id exists in the DOM at prerender. */
const TOC: TocItem[] = [
  { id: "research", label: "ORMAS overview" },
  { id: "research-results", label: "Key results" },
  { id: "research-why", label: "Why ORMAS was built" },
  { id: "research-compare", label: "Silent versus loud failure" },
  {
    id: "research-record",
    label: "Full technical record",
    children: [
      { id: "research-signals", label: "Three learning signals" },
      { id: "research-pathologies", label: "Seven failure modes" },
      { id: "research-glassbox", label: "GlassBox telemetry" },
      { id: "research-experiments", label: "383 experiments" },
      { id: "research-stress", label: "Stress tests" },
      { id: "research-zeroshot", label: "Zero-shot generalisation" },
      { id: "research-stability", label: "Stability result (ISS)" },
      { id: "research-ablations", label: "Ablations" },
      { id: "research-reproducibility", label: "Reproducibility" },
      { id: "research-roadmap", label: "Research roadmap" },
    ],
  },
  { id: "research-synthesis", label: "One decision, three results" },
  {
    id: "cherry",
    label: "Project Cherry",
    children: [
      { id: "cherry-design", label: "How it is designed to work" },
      { id: "cherry-differs", label: "How it differs" },
    ],
  },
];

const ALL_IDS = TOC.flatMap((t) => [t.id, ...(t.children ?? []).map((c) => c.id)]);

function useActiveSection() {
  const [active, setActive] = useState<string>(ALL_IDS[0]);
  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const line = window.innerHeight * 0.28;
      let current = ALL_IDS[0];
      for (const id of ALL_IDS) {
        const el = document.getElementById(id);
        if (!el || el.closest('[data-collapsed="true"]')) continue;
        if (el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure); };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // The technical record opening or closing moves everything below it.
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onScroll) : null;
    ro?.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      ro?.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return active;
}

function OnThisPage({ active }: { active: string }) {
  const parentOf = (id: string) => TOC.find((t) => t.id === id || t.children?.some((c) => c.id === id))?.id;
  const activeParent = parentOf(active);
  return (
    <nav className="uxr-toc" aria-label="On this page">
      <p className="uxr-toc-h">On this page</p>
      <ol className="uxr-toc-list">
        {TOC.map((t) => (
          <li key={t.id} className={t.id === activeParent ? "is-in" : undefined}>
            <a href={`#${t.id}`} aria-current={active === t.id ? "location" : undefined}>{t.label}</a>
            {t.children ? (
              <ol className="uxr-toc-sub">
                {t.children.map((c) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} aria-current={active === c.id ? "location" : undefined}>{c.label}</a>
                  </li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function ResearchPage() {
  const active = useActiveSection();
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">Research · ORMAS</h2>
          <h1>ORMAS: a neural network that repairs itself while it trains.</h1>
          <p>
            ORMAS, a neural network architecture invented by Rokib Al Dhin Raadh, recovers to 80.3% accuracy after a
            trained layer is destroyed mid-training, while a parameter-matched baseline stays at chance (10.0%). Raadh built it alone at 18, on one RTX
            3090, with no lab behind him. Its
            stability result, the first formal local stability characterisation of a self-correcting neural
            architecture, was accepted after double-blind review at DeepMath 2026, the Conference on the Mathematical
            Theory of Deep Neural Networks, held at Ohio State University in Columbus on 29&ndash;30 October, where it will
            be presented as a poster. The preprint is open and citable on Zenodo, and the public code reproduces all
            383 experiments. Raadh also reviews for the NeurIPS 2026 Trustworthy AI for Good workshop in Paris and is a
            member of the Cohere Labs Open Science Community. The page walks through the method, the experiments and
            the stability proof, and ends with Project Cherry, the architecture he is building next.
          </p>
        </div>
      </section>
      <div className="rx-deep ux-research">
        <div className="rx-wrap uxr-layout">
          <aside className="uxr-rail">
            <OnThisPage active={active} />
          </aside>
          <div className="uxr-main">
            <CVResearch />
            <CVCherry />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
