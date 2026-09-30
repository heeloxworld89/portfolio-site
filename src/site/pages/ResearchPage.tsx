import CVResearch from "@/components/common/cv/CVResearch";
import CVCherry from "@/components/common/cv/CVCherry";
import SiteLayout from "../SiteLayout";

export default function ResearchPage() {
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">Research</h2>
          <h1>ORMAS: neural networks that identify, repair and record their own failures.</h1>
          <p>The full research record: method, all 383 experiments, the stability derivation, ablations and adverse results, followed by Project Cherry, the planned next architecture.</p>
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
