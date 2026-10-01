import CVRecognition from "@/components/common/cv/CVRecognition";
import CVWhoIAm from "@/components/common/cv/CVWhoIAm";
import CVOriginStatement from "@/components/common/cv/CVOriginStatement";
import CVEducation from "@/components/common/cv/CVEducation";
import CVClosingAsk from "@/components/common/cv/CVClosingAsk";
import SiteLayout from "../SiteLayout";

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h2 className="rx-label">About</h2>
          <h1>Rokib Al Dhin Raadh, 18: founder of OXIEDO and inventor of ORMAS.</h1>
          <p>Founder and CEO of OXIEDO and inventor of ORMAS, a self-repairing neural network. In 2026 he earned ten independent selections, including a DeepMath 2026 acceptance after double-blind review and a NeurIPS 2026 reviewer role. Below: the full recognition record, a six-year timeline, his personal statement, education and contact.</p>
        </div>
      </section>
      <div className="rx-deep">
        <div className="rx-wrap">
          <CVRecognition />
          <CVWhoIAm />
          <CVOriginStatement />
          <CVEducation />
          <CVClosingAsk />
        </div>
      </div>
    </SiteLayout>
  );
}
