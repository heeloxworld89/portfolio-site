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
          <h2 className="rx-label">Company</h2>
          <h1>OXIEDO: AI that can prove what it learned.</h1>
          <p>What OXIEDO sells, who buys it and why now, followed by the track record behind the founder: OXIMO, the Black Bloxie live test, and five ventures started between the ages of twelve and seventeen.</p>
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
