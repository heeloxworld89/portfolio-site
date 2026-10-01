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
  { n: 'AI Training',               q: 'Is this run failing, and which component?', w: 'A lab whose long training run keeps failing, with no way to say which component broke' },
  { n: 'Regulated Finance',         q: 'What changed, and can a validator verify it?', w: 'A bank whose model cannot clear SR 26-2 validation' },
  { n: 'Medical AI',                q: 'Which site caused this, and can we show it?', w: 'A hospital whose approved model may never be updated' },
  { n: 'Data Obligation',           q: 'What data is in here, and can I take it back out?', w: 'A controller facing erasure against trained weights' },
  { n: 'Defence & Safety-Critical', q: 'What did it do to itself in the field?', w: 'A programme that ends if the answer is “we cannot say”' },
];

const position = [
  { k: 'Stage',     v: 'Pre-revenue; licensing model defined. Conversations with model-risk and compliance teams are under way; no pilots signed yet.' },
  { k: 'Entity',    v: 'Delaware C-corporation in formation; the ORMAS IP is held by the founder and will be assigned to it.' },
  { k: 'Evidence',  v: 'ORMAS results to date are on CIFAR-10 and CIFAR-100: 383 experiments, reproducible from seed. Validation on clinical, financial or defence data is the next step and requires a data-custodian partner.' },
  { k: 'Team',      v: 'Founder-led: Raadh invented ORMAS and wrote its 16,316-line PyTorch codebase. The first use of funds is a research engineer.' },
];

export default function CVBusiness() {
  const [deckOpen, setDeckOpen] = useState(false);

  return (
    <CVSection
      id="oxiedo"
      phase="now"
      eyebrow="OXIEDO · The Business"
      title="OXIEDO lets regulated industries train AI on data they already own."
      lead={
        <>
          OXIEDO, founded by Raadh in 2023, licenses ORMAS on-premise to banks, hospitals and other
          regulated institutions. Their records are among the most valuable training data in existence, and
          most of it sits unused, because conventional models cannot account for what they learned from it.
          ORMAS writes that account during training: the <strong>Model Change Record</strong>, a
          tamper-evident log of every weight change in a run.{' '}<strong>It is built for SR 26-2 model-risk
          validation and for the EU AI Act&apos;s high-risk record-keeping obligations, which apply from
          December 2027.</strong>
        </>
      }
      meta={[
        { k: 'Status', v: 'Pre-revenue · licence defined' },
        { k: 'Founded', v: '2023' },
        { k: 'Lead product', v: 'Model Change Record' },
        { k: 'Markets', v: 'Five regulated' },
      ]}
    >
      <style>{`
        .bz-label {
          display: flex; align-items: baseline; flex-wrap: wrap; gap: 6px 14px;
          font-size: 12px; font-weight: 800; letter-spacing: 1.6px; line-height: 1.5;
          text-transform: uppercase; color: var(--pf-ink-2);
          margin: 0 0 14px;
        }
        .bz-step {
          font-family: var(--rx-mono, ui-monospace, monospace); font-weight: 500;
          font-size: 11px; letter-spacing: .08em; color: #fff; background: var(--pf-accent); padding: 3px 8px;
        }
        .bz-gap { height: 48px; }

        .bz-thesis {
          background: var(--pf-surface); border: 1px solid var(--pf-border);
          border-top: 3px solid var(--pf-accent);
          padding: 26px 30px; margin-bottom: 48px;
        }
        .bz-thesis p { font-size: 17px; line-height: 1.7; color: var(--pf-ink-2); margin: 0; max-width: 72ch; }
        .bz-thesis strong { color: var(--pf-ink); font-weight: 700; }

        .bz-sectors { display: grid; gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); margin-bottom: 48px; }
        .bz-sector { display: grid; grid-template-columns: 240px 1fr; gap: 24px; background: var(--pf-surface); padding: 16px 22px; }
        .bz-sector-n { font-size: 15px; font-weight: 700; color: var(--pf-ink); }
        .bz-sector-q { font-size: 16px; color: var(--pf-ink); line-height: 1.55; }
        .bz-sector-w { font-size: 14px; color: var(--pf-ink-3); line-height: 1.55; margin-top: 3px; }
        @media (max-width: 640px) { .bz-sector { grid-template-columns: 1fr; gap: 4px; padding: 16px 18px; } }

        .bz-pos { display: grid; gap: 1px; background: var(--pf-border); border: 1px solid var(--pf-border); margin-bottom: 32px; }
        .bz-pos-row { display: grid; grid-template-columns: 160px 1fr; gap: 24px; background: var(--pf-surface); padding: 16px 22px; }
        .bz-pos-k {
          font-family: var(--rx-mono, ui-monospace, monospace); font-size: 11.5px; font-weight: 500;
          letter-spacing: .08em; text-transform: uppercase; color: var(--pf-accent); padding-top: 3px;
        }
        .bz-pos-v { font-size: 16px; line-height: 1.65; color: var(--pf-ink-2); max-width: 75ch; }
        @media (max-width: 640px) { .bz-pos-row { grid-template-columns: 1fr; gap: 6px; padding: 16px 18px; } }

        .bz-next { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: 14px; }
        @media (max-width: 900px) { .bz-next { grid-template-columns: 1fr; } }

        .bz-deck {
          display: flex; flex-direction: column; align-items: flex-start; gap: 18px;
          background: linear-gradient(135deg, #082f39, #0b404d 55%, #155e5a);
          padding: 26px 28px;
        }
        .bz-deck-t { font-size: 16px; color: rgba(251, 251, 249, .86); line-height: 1.65; }
        .bz-deck-t strong { color: #fbfbf9; font-weight: 700; }
        .rx .bz-deck .bz-deck-b {
          display: inline-flex; width: auto; align-self: flex-start; align-items: center; gap: 10px; cursor: pointer; min-height: 46px;
          padding: 12px 22px; border: 1px solid #d8ee96; background: #d8ee96; color: #0b404d;
          font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          transition: background .2s, color .2s;
        }
        .rx .bz-deck .bz-deck-b:hover { background: transparent; color: #d8ee96; }

        .rx a.bz-cta, .bz-cta {
          display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start;
          gap: 18px; text-decoration: none; color: var(--pf-ink);
          padding: 26px 28px; background: var(--pf-surface);
          border: 1px solid var(--pf-border); border-top: 3px solid var(--pf-accent);
          transition: border-color .2s, background .2s;
        }
        .rx a.bz-cta:hover { background: #fff; border-color: var(--pf-border-2); border-top-color: var(--pf-accent); color: var(--pf-ink); }
        .bz-cta-l { display: block; }
        .bz-cta-h { display: block; font-size: 18px; font-weight: 800; color: var(--pf-ink); margin: 0 0 6px; letter-spacing: -0.2px; }
        .bz-cta-p { display: block; font-size: 15px; line-height: 1.6; color: var(--pf-ink-2); }
        .bz-cta-b {
          display: inline-flex; align-items: center; gap: 9px; min-height: 46px;
          padding: 12px 20px; font-size: 13px; font-weight: 800; letter-spacing: .1em; text-transform: uppercase;
          color: #fff; background: var(--pf-accent); border: 1px solid var(--pf-accent);
          transition: background .2s;
        }
        .bz-cta:hover .bz-cta-b { background: var(--rx-teal-2, #146273); }
      `}</style>

      <p className="bz-label"><span className="bz-step">Problem</span></p>
      <div className="bz-thesis">
        <p>
          Institutions do not buy audit trails for their own sake. A hospital wants to train on its own
          patient records without regulatory exposure; a bank wants a model its validators can sign off.{' '}
          <strong>Transparency is the mechanism; the value is access to data these institutions already own
          but cannot yet use.</strong> Interpretability tools sell an explanation after the fact; OXIEDO
          licenses the ability to train on that data in the first place.
        </p>
      </div>

      <p className="bz-label"><span className="bz-step">Product</span>On-premise by design: the data never leaves the building</p>
      <OxidoVisualization />

      <div className="bz-gap" />

      <p className="bz-label"><span className="bz-step">Markets</span>Five regulated markets, one question regulators ask</p>
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

      <p className="bz-label"><span className="bz-step">Position</span>Current position: pre-revenue, founder-led, no outside capital</p>
      <div className="bz-pos">
        {position.map((p) => (
          <div className="bz-pos-row" key={p.k}>
            <div className="bz-pos-k">{p.k}</div>
            <div className="bz-pos-v">{p.v}</div>
          </div>
        ))}
      </div>

      <div className="bz-next">
        <div className="bz-deck">
          <span className="bz-deck-t">
            <strong>Investors:</strong> the round, the six milestones and the full risk register are at
            oxiedo.com/invest. The investor deck (15 slides plus appendix, September 2026) opens here.
          </span>
          <button type="button" className="bz-deck-b" onClick={() => setDeckOpen(true)} aria-haspopup="dialog">
            <Icon name="fileText" size={15} />
            Read the deck
          </button>
        </div>

        <a className="bz-cta" href="https://oxiedo.com" target="_blank" rel="noreferrer">
          <span className="bz-cta-l">
            <span className="bz-cta-h">Product, licensing and pricing at oxiedo.com</span>
            <span className="bz-cta-p">
              OXIEDO&apos;s one on-premise ORMAS licence, sector coverage and full risk register are published on
              the company site.
            </span>
          </span>
          <span className="bz-cta-b">
            oxiedo.com
            <Icon name="externalLink" size={15} />
          </span>
        </a>
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
