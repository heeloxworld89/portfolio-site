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
          <h1>Recognition, profile and statement.</h1>
          <p>External recognition in 2026, a timeline of the work, a personal statement, education, and how to get in touch.</p>
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
