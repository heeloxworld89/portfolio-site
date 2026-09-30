import CVBusiness from "@/components/common/cv/CVBusiness";
import CVOximo from "@/components/common/cv/CVOximo";
import CVBlackBloxie from "@/components/common/cv/CVBlackBloxie";
import CVVentures from "@/components/common/cv/CVVentures";
import SiteLayout from "../SiteLayout";

export default function WorkPage() {
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">Work</h2>
          <h1>OXIEDO, and the work that led to it.</h1>
          <p>The company built on ORMAS, then the systems and ventures that produced the research question: OXIMO, the Black Bloxie field study, and five earlier ventures.</p>
        </div>
      </section>
      <div className="rx-deep">
        <div className="rx-wrap">
          <CVBusiness />
          <CVOximo />
          <CVBlackBloxie />
          <CVVentures />
        </div>
      </div>
    </SiteLayout>
  );
}
