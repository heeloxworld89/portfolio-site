import CVResearch from "@/components/common/cv/CVResearch";
import CVCherry from "@/components/common/cv/CVCherry";
import SiteLayout from "../SiteLayout";

export default function ResearchPage() {
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">Research · ORMAS</h2>
          <h1>ORMAS: a self-repairing neural network that identifies, repairs and records its own failures.</h1>
          <p>
            ORMAS, invented by Rokib Al Dhin Raadh, recovers to 80.3% accuracy after a trained layer is destroyed
            mid-training, while a parameter-matched baseline stays at chance (10.0%). Its stability result, the first
            formal local stability characterisation of a self-correcting neural architecture, was accepted after
            double-blind review at DeepMath 2026 (poster). Below: the method, all 383 reproducible experiments, the
            Input-to-State Stability derivation, ablations and stated limits, then Project Cherry, the next architecture.
          </p>
        </div>
      </section>
      <div className="rx-deep">
        <div className="rx-wrap">
          <CVResearch />
          <CVCherry />
        </div>
      </div>
    </SiteLayout>
  );
}
