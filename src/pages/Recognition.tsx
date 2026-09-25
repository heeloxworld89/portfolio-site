import { recognition } from '@/data/facts';
import { ContactBand, PageHead, RecognitionCard, SecHead, Stats } from '@/components/site/blocks';

export default function Recognition() {
  const featured = recognition.filter((r) => r.featured);
  const more = recognition.filter((r) => !r.featured);

  return (
    <div className="container">
      <PageHead
        k="Recognition · 2026"
        title={<>Chosen by the people <em>whose job is choosing early.</em></>}
        lead="Accelerators that accept a fraction of a percent, a grant panel, and the field’s flagship conference — every one reached from a cold application, with no introduction."
      >
        <Stats
          items={[
            { v: 'NeurIPS 2026', l: 'Programme committee, Trustworthy AI for Good workshop', a: true },
            { v: 'Top 1%', l: '1752vc Ignite — final-round selection' },
            { v: '#1', l: 'Highest-ranked application, Cosmos Institute cycle' },
            { v: '2 accepted', l: '1752vc Ignite and Freshmango, September 2026' },
          ]}
        />
      </PageHead>

      <section className="sec">
        <SecHead k="Selected and accepted" title="The decisions." />
        <div className="g2">
          {featured.map((r) => <RecognitionCard r={r} key={r.key} />)}
        </div>
      </section>

      <section className="sec">
        <SecHead k="Advanced" title="Further through the funnel." lead="Processes where OXIEDO advanced past the screening stage." />
        <div className="g2">
          {more.map((r) => <RecognitionCard r={r} key={r.key} />)}
        </div>
      </section>

      <section className="sec">
        <ContactBand
          title="Verify anything on this page."
          body="Every item has a name, a date and a third party who can confirm it. Correspondence and documentation are available on request."
        />
      </section>
    </div>
  );
}
