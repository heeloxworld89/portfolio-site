import { useState } from 'react';
import Icon from '@/components/common/Icon';
import VerticalModal from '@/components/common/VerticalModal';
import OxidoVisualization from './OxidoVisualization';
import CVSection from './CVSection';

/**
 * OXIEDO — the business.
 *
 * This section used to carry 3,660 words of market analysis plus 3,342 words of
 * vertical deep-dives. All of that now lives on oxiedo.com, written better and
 * kept current. A portfolio that restates its own company's website is a
 * portfolio competing with itself, so this says what the company is, what my
 * job in it is, and then sends the reader there.
 */

const sectors = [
  { n: 'AI Training',               q: 'Is this run failing, and where?' },
  { n: 'Regulated Finance',         q: 'What changed, and can a validator verify it?' },
  { n: 'Medical AI',                q: 'Which site caused this, and can we show it?' },
  { n: 'Data Obligation',           q: 'What data is in here, and can I remove it?' },
  { n: 'Defense & Safety-Critical', q: 'What did the system do to itself in the field?' },
];

const position = [
  { k: 'Stage',     v: 'Pre-revenue. No customers, no pilot, no institutional investment.' },
  { k: 'Entity',    v: 'A research company in formation. Delaware C-corporation being established; contracting meanwhile through an existing UK-registered company.' },
  { k: 'Evidence',  v: 'Every result is CIFAR-10 or CIFAR-100. No clinical, financial, biological or defence data has touched the system.' },
  { k: 'Team',      v: 'One person. That is the first thing the round is spent on.' },
];

export default function CVBusiness() {
  const [deckOpen, setDeckOpen] = useState(false);

  return (
    <CVSection
      id="oxiedo"
      phase="now"
      eyebrow="OXIEDO · The Business"
      title="The company I am building around the research."
      lead={
        <>
          ORMAS answers a question, and <strong>OXIEDO is the answer to what that question is worth.</strong>{' '}
          The most valuable data in the world sits unused — hospital records, bank ledgers, licensed
          corpora — not because anyone holding it is careless, but because training on it means handing
          it to a model that afterwards cannot say what it did with it. OXIEDO licenses the architecture
          that supplies the missing account.
        </>
      }
      meta={[
        { k: 'Status', v: 'Live · oxiedo.com' },
        { k: 'Founded', v: '2023' },
        { k: 'Product', v: 'One licence' },
        { k: 'Sectors', v: 'Five' },
      ]}
    >
      <style>{`
        .bz-cta {
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap; text-decoration: none;
          padding: 24px 28px; border-radius: 12px; margin-bottom: 40px;
          border: 1px solid rgba(255,74,87,0.42);
          background:
            radial-gradient(120% 180% at 0% 50%, rgba(255,74,87,0.14) 0%, rgba(255,74,87,0) 62%),
            #191b1e;
          transition: border-color .25s, transform .25s;
        }
        .bz-cta:hover { border-color: rgba(255,74,87,0.78); transform: translateY(-2px); }
        .bz-cta-l { min-width: 240px; flex: 1; }
        .bz-cta-h { font-size: 19px; font-weight: 800; color: #fff; margin: 0 0 6px; letter-spacing: -0.3px; }
        .bz-cta-p { font-size: 14px; line-height: 1.6; color: #b3bcc7; margin: 0; }
        .bz-cta-b {
          display: inline-flex; align-items: center; gap: 9px; flex-shrink: 0;
          padding: 14px 22px; border-radius: 8px;
          font-size: 12.5px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;
          color: #fff; background: #d43644; border: 1px solid #ff6b76;
          transition: background .25s;
        }
        .bz-cta:hover .bz-cta-b { background: #bd2734; }

        .bz-label {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: #838d99;
          margin: 0 0 16px; padding-bottom: 9px; border-bottom: 1px solid #2a2d32;
        }

        .bz-thesis {
          background: #191b1e; border: 1px solid #2a2d32;
          border-left: 2px solid #ff4a57; border-radius: 0 10px 10px 0;
          padding: 24px 28px; margin-bottom: 40px;
        }
        .bz-thesis p { font-size: 16px; line-height: 1.8; color: #c4cfde; margin: 0; }
        .bz-thesis strong { color: #fff; font-weight: 700; }

        .bz-sectors { display: grid; gap: 1px; background: #2a2d32; border: 1px solid #2a2d32; border-radius: 10px; overflow: hidden; margin-bottom: 40px; }
        .bz-sector { display: grid; grid-template-columns: 220px 1fr; gap: 18px; background: #191b1e; padding: 15px 20px; }
        .bz-sector-n { font-size: 14px; font-weight: 700; color: #c4cfde; }
        .bz-sector-q { font-size: 14px; color: #9aa4b0; line-height: 1.6; }
        @media (max-width: 640px) { .bz-sector { grid-template-columns: 1fr; gap: 4px; } }

        .bz-pos { display: flex; flex-direction: column; gap: 2px; margin-bottom: 40px; }
        .bz-pos-row { display: grid; grid-template-columns: 150px 1fr; gap: 20px; background: #191b1e; border: 1px solid #2a2d32; padding: 16px 22px; }
        .bz-pos-k { font-size: 10px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #838d99; padding-top: 2px; }
        .bz-pos-v { font-size: 14px; line-height: 1.7; color: #9aa4b0; }
        @media (max-width: 640px) { .bz-pos-row { grid-template-columns: 1fr; gap: 6px; } }

        .bz-deck {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          background: #191b1e; border: 1px solid #2a2d32; border-radius: 10px;
          padding: 18px 22px;
        }
        .bz-deck-t { font-size: 14px; color: #9aa4b0; flex: 1; min-width: 220px; line-height: 1.6; }
        .bz-deck-t strong { color: #c4cfde; font-weight: 600; }
        .bz-deck-b {
          display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
          padding: 11px 18px; border-radius: 7px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
          color: #c4cfde; background: rgba(196,207,222,0.06); border: 1px solid #343941;
          transition: background .22s, border-color .22s, color .22s;
        }
        .bz-deck-b:hover { background: rgba(196,207,222,0.13); border-color: rgba(196,207,222,0.5); color: #fff; }

        @media (prefers-reduced-motion: reduce) { .bz-cta:hover { transform: none; } }
      `}</style>

      <a className="bz-cta" href="https://oxiedo.com" target="_blank" rel="noreferrer">
        <span className="bz-cta-l">
          <h3 className="bz-cta-h">The company has its own site, and it is the real one.</h3>
          <p className="bz-cta-p">
            The product, the five sectors, the licence, the pricing logic and the full risk register
            live at oxiedo.com. This page is about the person who built it.
          </p>
        </span>
        <span className="bz-cta-b">
          oxiedo.com
          <Icon name="externalLink" size={15} />
        </span>
      </a>

      <div className="bz-thesis">
        <p>
          Transparency is the mechanism. <strong>Unlocked data is the product.</strong> That
          distinction is the whole business. Nobody buys an audit trail for its own sake — they buy
          the ability to train on data they already hold and currently cannot touch.
        </p>
      </div>

      <p className="bz-label">One question, asked in five places</p>
      <div className="bz-sectors">
        {sectors.map((s) => (
          <div className="bz-sector" key={s.n}>
            <div className="bz-sector-n">{s.n}</div>
            <div className="bz-sector-q">{s.q}</div>
          </div>
        ))}
      </div>

      <p className="bz-label">Why it has to run where the data already is</p>
      <OxidoVisualization />

      <div style={{ marginBottom: '40px' }} />

      <p className="bz-label">Where it honestly stands</p>
      <div className="bz-pos">
        {position.map((p) => (
          <div className="bz-pos-row" key={p.k}>
            <div className="bz-pos-k">{p.k}</div>
            <div className="bz-pos-v">{p.v}</div>
          </div>
        ))}
      </div>

      <div className="bz-deck">
        <span className="bz-deck-t">
          <strong>Investors —</strong> the raise, the milestones and the risk register are set out at{' '}
          oxiedo.com/invest. The deck is here if you would rather read it in one pass.
        </span>
        <button type="button" className="bz-deck-b" onClick={() => setDeckOpen(true)} aria-haspopup="dialog">
          <Icon name="chart" size={15} />
          Read the deck
        </button>
      </div>

      <VerticalModal
        open={deckOpen}
        onClose={() => setDeckOpen(false)}
        eyebrow="OXIEDO · Investor Deck"
        title="The deck, in the page"
      >
        <iframe
          src="/assets/pdf/oxido_pitch_deck.pdf#view=FitH"
          title="OXIEDO investor pitch deck"
          style={{ width: '100%', height: '70vh', border: '1px solid #2a2d32', borderRadius: '8px', background: '#0b0c0e' }}
        />
        <p style={{ fontSize: '13px', color: '#838d99', marginTop: '14px', lineHeight: 1.7 }}>
          If the viewer does not load,{' '}
          <a href="/assets/pdf/oxido_pitch_deck.pdf" target="_blank" rel="noreferrer" style={{ color: '#c4cfde', textDecoration: 'underline' }}>
            open the PDF directly
          </a>.
        </p>
      </VerticalModal>
    </CVSection>
  );
}
