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
          <h1>ORMAS: the technology behind OXIEDO.</h1>
          <p>Neural networks that find, fix and record their own failures while they train. Everything is here: how it works, all 383 experiments, the peer-reviewed math, the honest limits, and Project Cherry, the next version.</p>
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
