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
          <h1>OXIEDO: the audit trail AI has never had.</h1>
          <p>What OXIEDO sells, who needs it, and why the window opens now. Then the track record that got him here: OXIMO, twelve months running a live company, and five ventures from the age of twelve.</p>
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
