import CVResearch from "@/components/common/cv/CVResearch";
import CVCherry from "@/components/common/cv/CVCherry";
import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { OnThisPage, useActiveSection, type TocItem } from "../OnThisPage";
import "../ux/research.css";

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

export default function ResearchPage() {
  const active = useActiveSection(TOC);
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">Research · ORMAS</h2>
          <h1>ORMAS: the self-repairing neural network.</h1>
          <p>
            ORMAS, invented by Rokib Al Dhin Raadh, recovers to 80.3% accuracy after trained convolutional layers are
            zeroed mid-training, while standard training stays at chance (10.0%). Raadh developed it independently, on one
            RTX 3090. His stability analysis of self-repairing training was accepted after double-blind review at{" "}
            <Link to="/deepmath">DeepMath 2026</Link> (poster). This page covers the method, all 383 reproducible
            experiments, the input-to-state stability analysis and ablations, then Project Cherry, the next architecture.
          </p>
        </div>
      </section>
      <div className="rx-deep ux-research">
        <div className="rx-wrap uxr-layout">
          <aside className="uxr-rail">
            <OnThisPage toc={TOC} active={active} />
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
