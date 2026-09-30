import CVResearch from "@/components/common/cv/CVResearch";
import CVCherry from "@/components/common/cv/CVCherry";
import SiteLayout from "../SiteLayout";

export default function ResearchPage() {
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">Technology</h2>
          <h1>ORMAS: the neural network that repairs itself, and proves it.</h1>
          <p>The complete record: the architecture, all 383 experiments, the stability proof accepted at DeepMath 2026, every limit it hit, and Project Cherry, what comes next.</p>
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
