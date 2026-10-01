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
          <h1>Founder of OXIEDO. Building companies since the age of 12.</h1>
          <p>Rokib Al Dhin Raadh is the founder and CEO of OXIEDO, which licenses ORMAS, his self-repairing neural network, to regulated industries. Each step built on the last: five ventures from age 12 and a ~$10,000 sale at 15; OXIMO, a 40,933-line multi-agent system with 2,069 tests; a 12-month controlled study on a live UK company, Black Bloxie LTD, where removing OXIMO cut output 91%; then ORMAS and OXIEDO.</p>
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
