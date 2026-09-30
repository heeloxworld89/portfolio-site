import { useState } from 'react';
import Icon from '@/components/common/Icon';
import VerticalModal from '@/components/common/VerticalModal';
import OxidoVisualization from './OxidoVisualization';
import CVSection from './CVSection';

/* Bump on every deck recompile so browsers refetch rather than serving cache. */
const DECK_VERSION = '2026-09-22a';

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
  { n: 'AI Training',               q: 'Is this run failing, and which component?', w: 'A lab burning $15M on a run that stopped 419 times' },
  { n: 'Regulated Finance',         q: 'What changed, and can a validator verify it?', w: 'A bank whose model cannot clear SR 26-2 validation' },
  { n: 'Medical AI',                q: 'Which site caused this, and can we show it?', w: 'A hospital whose approved model may never be updated' },
  { n: 'Data Obligation',           q: 'What data is in here, and can I take it back out?', w: 'A controller facing erasure against trained weights' },
  { n: 'Defense & Safety-Critical', q: 'What did it do to itself in the field?', w: 'A programme that ends if the answer is “we cannot say”' },
];

const position = [
  { k: 'Stage',     v: 'Pre-revenue. Early conversations with model-risk and compliance teams are under way; no pilots signed.' },
  { k: 'Entity',    v: 'Delaware C-corporation in formation; the ORMAS IP is held by the founder and will be assigned to it.' },
  { k: 'Evidence',  v: 'All results to date are on CIFAR-10 and CIFAR-100. Validation on clinical, financial or defence data requires a data-custodian partner.' },
  { k: 'Team',      v: 'Founder-led. Building the team is the first use of funds, starting with a research engineer.' },
];

export default function CVBusiness() {
  const [deckOpen, setDeckOpen] = useState(false);

  return (
    <CVSection
      id="oxiedo"
      phase="now"
      eyebrow="OXIEDO · The Business"
      title="OXIEDO: auditable AI training for regulated industries."
      lead={
        <>
          Hospital records, bank ledgers, assay runs and licensed corpora are among the most valuable data
          in existence, and much of it cannot be used for training, because conventional models cannot
          account for what they learned from it.{' '}<strong>From December 2027, the EU AI Act requires
          high-risk AI to keep records and survive validation.</strong> OXIEDO licenses ORMAS, which
          produces that record during training rather than reconstructing it afterwards. Raadh founded the
          company in 2023.
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
          border: 1px solid var(--pf-border);
          border-left: 3px solid var(--pf-accent);
          background: var(--pf-surface);
          transition: border-color .25s, background .25s;
        }
        .bz-cta:hover { background: var(--pf-surface-2); border-color: var(--pf-border-2); border-left-color: var(--pf-accent); }
        .bz-cta-l { min-width: 240px; flex: 1; }
        .bz-cta-h { font-size: 17px; font-weight: 800; color: var(--pf-ink); margin: 0 0 6px; letter-spacing: -0.3px; }
        .bz-cta-p { font-size: 14px; line-height: 1.6; color: var(--pf-ink-2); margin: 0; }
        .bz-cta-b {
          display: inline-flex; align-items: center; gap: 9px; flex-shrink: 0;
          padding: 14px 22px; border-radius: 8px;
          font-size: 12.5px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;
          color: var(--pf-on-accent); background: var(--pf-accent); border: 1px solid var(--pf-accent);
          transition: background .25s;
        }
        .bz-cta:hover .bz-cta-b { background: var(--pf-accent-2); }

        .bz-label {
          font-size: 11px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; color: var(--pf-ink-3);
          margin: 0 0 16px; padding-bottom: 9px; border-bottom: 1px solid var(--pf-border);
        }

        .bz-thesis {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-left: 2px solid var(--pf-accent); border-radius: 0 10px 10px 0;
          padding: 24px 28px; margin-bottom: 40px;
        }
        .bz-thesis p { font-size: 15px; line-height: 1.8; color: var(--pf-ink); margin: 0; }
        .bz-thesis strong { color: var(--pf-ink); font-weight: 700; }

        .bz-sectors { display: grid; gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); border-radius: 10px; overflow: hidden; margin-bottom: 40px; }
        .bz-sector { display: grid; grid-template-columns: 220px 1fr; gap: 18px; background: var(--pf-surface); padding: 15px 20px; }
        .bz-sector-n { font-size: 14px; font-weight: 700; color: var(--pf-ink); }
        .bz-sector-q { font-size: 14px; color: var(--pf-ink-2); line-height: 1.6; }
        .bz-sector-w { font-size: 12px; color: var(--pf-ink-3); line-height: 1.5; margin-top: 3px; }
        @media (max-width: 640px) { .bz-sector { grid-template-columns: 1fr; gap: 4px; } }

        .bz-pos { display: flex; flex-direction: column; gap: 2px; margin-bottom: 40px; }
        .bz-pos-row { display: grid; grid-template-columns: 150px 1fr; gap: 20px; background: var(--pf-surface); border: 1px solid var(--pf-border); padding: 16px 22px; }
        .bz-pos-k { font-size: 10px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: var(--pf-ink-3); padding-top: 2px; }
        .bz-pos-v { font-size: 14px; line-height: 1.7; color: var(--pf-ink-2); }
        @media (max-width: 640px) { .bz-pos-row { grid-template-columns: 1fr; gap: 6px; } }

        .bz-deck {
          display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
          background: var(--pf-surface); border: 1px solid var(--pf-border); border-radius: 10px;
          padding: 18px 22px;
        }
        .bz-deck-t { font-size: 14px; color: var(--pf-ink-2); flex: 1; min-width: 220px; line-height: 1.6; }
        .bz-deck-t strong { color: var(--pf-ink); font-weight: 600; }
        .bz-deck-b {
          display: inline-flex; align-items: center; gap: 8px; cursor: pointer;
          padding: 11px 18px; border-radius: 7px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
          color: var(--pf-ink); background: rgba(var(--pf-ink-rgb), 0.06); border: 1px solid var(--pf-border-2);
          transition: background .22s, border-color .22s, color .22s;
        }
        .bz-deck-b:hover { background: rgba(var(--pf-ink-rgb), 0.13); border-color: rgba(var(--pf-ink-rgb), 0.5); color: var(--pf-ink); }

        @media (prefers-reduced-motion: reduce) { .bz-cta:hover { transform: none; } }
      `}</style>

      <a className="bz-cta" href="https://oxiedo.com" target="_blank" rel="noreferrer">
        <span className="bz-cta-l">
          <h3 className="bz-cta-h">Full company details at oxiedo.com</h3>
          <p className="bz-cta-p">
            The product, licensing, pricing, sector coverage and full risk register are published on the
            company site.
          </p>
        </span>
        <span className="bz-cta-b">
          oxiedo.com
          <Icon name="externalLink" size={15} />
        </span>
      </a>

      <div className="bz-thesis">
        <p>
          Institutions do not buy audit trails for their own sake. A hospital wants to train on its own
          patient records without regulatory exposure. <strong>Transparency is the mechanism; the value is
          access to data these institutions already own but cannot yet use.</strong> That distinction is
          where many interpretability tools have struggled to find buyers.
        </p>
      </div>

      <p className="bz-label">One question, five industries</p>
      <div className="bz-sectors">
        {sectors.map((s) => (
          <div className="bz-sector" key={s.n}>
            <div className="bz-sector-n">{s.n}</div>
            <div>
              <div className="bz-sector-q">{s.q}</div>
              <div className="bz-sector-w">{s.w}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="bz-label">Why deployment is on-premise</p>
      <OxidoVisualization />

      <div style={{ marginBottom: '40px' }} />

      <p className="bz-label">Current position</p>
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
          <strong>Investors:</strong> the round, the six milestones and the full risk register are at
          oxiedo.com/invest. The investor deck (15 slides plus appendix, September 2026) opens here.
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
          src={`/assets/pdf/oxiedo_pitch_deck.pdf?v=${DECK_VERSION}#view=FitH`}
          title="OXIEDO investor pitch deck"
          style={{ width: '100%', height: '70vh', border: '1px solid var(--pf-border)', borderRadius: '8px', background: 'var(--pf-sunk)' }}
        />
        <p style={{ fontSize: '13px', color: 'var(--pf-ink-3)', marginTop: '14px', lineHeight: 1.7 }}>
          If the viewer does not load,{' '}
          <a href={`/assets/pdf/oxiedo_pitch_deck.pdf?v=${DECK_VERSION}`} target="_blank" rel="noreferrer" style={{ color: 'var(--pf-ink)', textDecoration: 'underline' }}>
            open the PDF directly
          </a>.
        </p>
      </VerticalModal>
    </CVSection>
  );
}
