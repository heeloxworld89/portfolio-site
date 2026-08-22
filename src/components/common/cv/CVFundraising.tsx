import { useState } from 'react';
import Icon from '@/components/common/Icon';
import VerticalModal from '@/components/common/VerticalModal';
const caseBeats = [
  {
    n: '01',
    label: 'The Problem',
    body: 'One design decision from 1986 means no unit inside a network can assess its own state. Every institution holding data worth learning from — hospitals, funds, insurers — is locked out, because no regulator accepts "trust us."',
    href: '#oxido',
    link: 'Full argument →',
  },
  {
    n: '02',
    label: 'The Fix',
    body: 'ORMAS gives every node a bounded second path. Attribution becomes a byproduct of training instead of a reconstruction performed afterward. Kill a converged layer: baseline dies at 10.0% forever, ORMAS returns to 80.3%.',
    href: '#research',
    link: '383 experiments →',
  },
  {
    n: '03',
    label: 'The Proof',
    body: 'Twelve months trying to disprove it on a real company. Remove the system: −91% revenue, every channel collapsing the same day. Restore it: +1,300%, overshooting baseline 3.3× on memory alone.',
    href: '#deployment',
    link: 'All seven rungs →',
  },
  {
    n: '04',
    label: 'Why Now',
    body: 'Regulators reject models on architecture, not accuracy. Rented inference stops scaling at institutional volume. Models degrade invisibly with no detection at the training layer. All three converged in the last two years.',
    href: '#oxido',
    link: 'The three forces →',
  },
];

const businessTiers = [
  {
    tier: 'Tier 1 — Free',
    title: 'OXIMO ships open source',
    body: 'The operating system closes the gap between one person and a ten-person team, which is why it gets adopted — and it generates no revenue on purpose. Content structured for machines gets recommended by machines: every customer Black Bloxie acquired in twelve months arrived through an LLM recommending it, unprompted, at zero ad spend. Every developer who adopts OXIMO and writes about it becomes another node in that same graph.',
  },
  {
    tier: 'Tier 2 — Licensed',
    title: 'The training layer carries the revenue',
    body: 'Deployed inside the client’s own infrastructure. Nothing leaves the perimeter, so infrastructure cost is near zero and margin is software-grade. Priced against comparable model-risk and compliance tooling: $150K–$300K per year.',
  },
  {
    tier: 'The Renewal',
    title: 'Not satisfaction-driven — measured',
    body: 'After twelve months of accumulated agent memory, removal is not a migration. That experiment has already been run: taking the system out of Black Bloxie cost 91% of output within weeks. The switching cost is not a projection.',
  },
];

export default function CVFundraising() {
  const [deckOpen, setDeckOpen] = useState(false);

  return (
    <div className="row mb--50" id="fundraising">
      <style>{`
        .fr-beats { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 2px; margin-bottom: 48px; }
        .fr-beat { background: #191b1e; border: 1px solid #2a2d32; padding: 24px 22px; display: flex; flex-direction: column; }
        .fr-beat-n { font-size: 26px; font-weight: 800; color: transparent; -webkit-text-stroke: 1px #2a2d32; line-height: 1; margin-bottom: 10px; }
        .fr-beat-label { font-size: 12px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #c4cfde; margin-bottom: 10px; }
        .fr-beat-body { font-size: 14px; line-height: 1.7; color: #9aa4b0; margin: 0 0 16px; flex: 1; }
        .fr-beat-link { font-size: 12px; font-weight: 700; letter-spacing: 0.5px; color: #838d99; text-decoration: none; transition: color 0.2s; }
        .fr-beat-link:hover { color: #c4cfde; }

        .fr-tier { background: #191b1e; border: 1px solid #2a2d32; padding: 26px 24px; }
        .fr-tier-tag { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #838d99; margin-bottom: 10px; }
        .fr-tier-title { font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 12px; }
        .fr-tier-body { font-size: 14px; line-height: 1.75; color: #9aa4b0; }

        .fr-ask {
          background: linear-gradient(135deg, rgba(196,207,222,0.06) 0%, #191b1e 55%);
          border: 1px solid rgba(196,207,222,0.2);
          border-radius: 10px;
          padding: 36px 40px;
          margin-bottom: 28px;
        }
        @media (max-width: 640px) { .fr-ask { padding: 28px 24px; } }
        .fr-ask-tag { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #ff4a57; margin-bottom: 14px; }
        .fr-ask-lead { font-size: 21px; font-weight: 700; color: #fff; line-height: 1.5; margin: 0 0 18px; max-width: 680px; }
        .fr-ask-body { font-size: 15px; line-height: 1.85; color: #c4cfde; margin: 0 0 14px; max-width: 680px; }
        .fr-ask-body:last-of-type { margin-bottom: 0; }
        .fr-use-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0 24px; }
        .fr-use-row { display: flex; gap: 12px; align-items: baseline; }
        .fr-use-dot { width: 6px; height: 6px; border-radius: 50%; background: #c4cfde; flex-shrink: 0; margin-top: 6px; }
        .fr-use-text { font-size: 14px; line-height: 1.7; color: #9aa4b0; }
        .fr-use-text strong { color: #fff; font-weight: 600; }

        .fr-actions {
          background: #191b1e; border: 1px solid #2a2d32;
          border-radius: 12px; padding: 24px 26px; margin-top: 8px;
        }
        .fr-actions-h {
          font-size: 11px; font-weight: 700; letter-spacing: 1.8px;
          text-transform: uppercase; color: #838d99; margin-bottom: 16px;
        }
        .fr-actions-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
          gap: 10px;
        }
        .fr-act {
          display: flex; align-items: flex-start; gap: 13px;
          text-align: left; cursor: pointer; text-decoration: none;
          background: #141618; border: 1px solid #2a2d32;
          border-radius: 10px; padding: 17px 18px;
          transition: border-color .22s, background .22s, transform .22s;
        }
        .fr-act:hover {
          border-color: rgba(196,207,222,0.45); background: #1b1e22; transform: translateY(-2px);
        }
        .fr-act.is-primary {
          border-color: rgba(255,74,87,0.34); background: rgba(255,74,87,0.05);
        }
        .fr-act.is-primary:hover { border-color: rgba(255,74,87,0.6); background: rgba(255,74,87,0.09); }
        .fr-act-icon {
          flex-shrink: 0; width: 36px; height: 36px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(196,207,222,0.2);
          background: rgba(196,207,222,0.06); color: #c4cfde;
        }
        .fr-act.is-primary .fr-act-icon {
          border-color: rgba(255,74,87,0.34); background: rgba(255,74,87,0.1); color: #ff6b76;
        }
        .fr-act-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
        .fr-act-t { font-size: 14px; font-weight: 700; color: #e8edf4; line-height: 1.3; }
        .fr-act.is-primary .fr-act-t { color: #ff8a93; }
        .fr-act-s { font-size: 12px; line-height: 1.55; color: #98a2ae; }
        .fr-actions-note {
          font-size: 12.5px; line-height: 1.7; color: #838d99;
          margin: 16px 0 0; padding-top: 14px; border-top: 1px solid #24272c;
        }
        .fr-actions-note a { color: #c4cfde; text-decoration: underline; }
        .fr-actions-note a:hover { color: #fff; }

        .fr-deck-frame {
          position: relative; width: 100%; height: 72vh; min-height: 420px;
          border-radius: 10px; overflow: hidden;
          background: #0b0c0e; border: 1px solid #2a2d32;
        }
        .fr-deck-frame iframe { width: 100%; height: 100%; border: none; display: block; }
        .fr-deck-fallback { font-size: 12.5px; color: #838d99; margin: 12px 0 0; }
        .fr-deck-fallback a { color: #c4cfde; text-decoration: underline; }
        @media (prefers-reduced-motion: reduce) { .fr-act:hover { transform: none; } }

        .fr-cta-row { display: flex; flex-wrap: wrap; gap: 12px; }
        .fr-cta-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: #c4cfde; color: #0e0f11;
          padding: 14px 26px; border-radius: 6px;
          font-size: 13px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;
          text-decoration: none; transition: opacity 0.2s;
        }
        .fr-cta-primary:hover { opacity: 0.88; }
        .fr-cta-secondary {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: #c4cfde;
          border: 1px solid rgba(196,207,222,0.35);
          padding: 13px 24px; border-radius: 6px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
          text-decoration: none; transition: border-color 0.2s;
        }
        .fr-cta-secondary:hover { border-color: #c4cfde; }
      `}</style>

      <div className="col-12">
        <span className="subtitle" style={{ color: '#9aa4b0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px' }}>
          For Investors
        </span>
        <h2 className="title fs-2" style={{ fontWeight: 800, marginBottom: '10px' }}>
          Fifty Accounts Is a $10M Business. Here's the Rest of the Case.
        </h2>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '740px', marginBottom: '40px' }}>
          Everything above this section is the long version — the proofs, the tables, the honest
          gaps. <strong style={{ color: '#c4cfde' }}>This is the investor brief.</strong> What the
          position actually is, what it is worth, what is missing, and what I am asking for. The deck
          is readable in the page below, and every document behind it is linked rather than gated. If
          you read only two things here, read this and the{' '}
          <a href="#deployment" style={{ color: '#c4cfde', textDecoration: 'underline' }}>deployment ladder</a>.
        </p>

        {/* THE CASE, FOUR BEATS */}
        <div className="fr-beats">
          {caseBeats.map((b, i) => (
            <div key={i} className="fr-beat">
              <div className="fr-beat-n">{b.n}</div>
              <div className="fr-beat-label">{b.label}</div>
              <p className="fr-beat-body">{b.body}</p>
              <a className="fr-beat-link" href={b.href}>{b.link}</a>
            </div>
          ))}
        </div>

        {/* BUSINESS MODEL */}
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '16px' }}>
          Give Away the Operating System. License the Training Layer.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '2px', marginBottom: '20px' }}>
          {businessTiers.map((t, i) => (
            <div key={i} className="fr-tier">
              <div className="fr-tier-tag">{t.tier}</div>
              <div className="fr-tier-title">{t.title}</div>
              <div className="fr-tier-body">{t.body}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '13px', color: '#838d99', marginBottom: '48px', maxWidth: '700px', lineHeight: '1.7' }}>
          <strong style={{ color: '#c4cfde' }}>Zero enterprise contracts signed to date.</strong>{' '}
          The training layer had to be finished before it could be sold. It's finished now.
        </p>

        {/* THE MOAT — prose, not a scored grid */}
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '16px' }}>
          The Moat Is Not Secrecy — the Work Is Published
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '740px', marginBottom: '16px' }}>
          Every result is on Zenodo. The codebase reproduces in under an hour. The moat is that
          reaching this required breaking a live company on its own data first, then going into
          control theory for the stability result, then two years of experiments. Agent
          frameworks never meet this failure mode, because they don't touch training. Enterprise
          data platforms sit above the training layer, on models somebody else built. <strong style={{ color: '#c4cfde' }}>That
          order doesn't compress</strong> — and by the time it's obvious enough to assign to a large team,
          the assets worth owning are the deployment record and a model nobody else has started.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '740px', marginBottom: '48px' }}>
          Underneath that: the switching cost compounds with tenure, and the data legally cannot
          leave the client's infrastructure — which structurally blocks any competitor whose
          architecture requires an upload, regardless of how good their product is.
        </p>

        {/* THE GAP — co-founder, stated honestly */}
        <p style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#c4cfde', marginBottom: '16px' }}>
          Everything Technical Is Built. One Thing Is Not.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '740px', marginBottom: '10px' }}>
          Regulated institutions buy from someone who has survived their procurement process. The
          system replaced every operational role at Black Bloxie, with causal data on how much of
          it was the system — but it cannot sit in a compliance review and be a person the buyer
          holds accountable. <strong style={{ color: '#c4cfde' }}>That is the one gap, and it is a person, not a
          capability.</strong>
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.85', color: '#9aa4b0', maxWidth: '740px', marginBottom: '48px' }}>
          The profile I'm looking for: has sold or deployed software inside a regulated data
          environment — a fund, a hospital system, an insurer — and understands model risk well
          enough to argue with a compliance officer and win. Not an engineer. Not a generalist.
          Equal equity, four-year vest. The honest gap on my side: I have never worked inside a
          team.
        </p>

        {/* THE ASK */}
        <div className="fr-ask">
          <div className="fr-ask-tag">The Ask</div>
          <p className="fr-ask-lead">
            No fixed number on this page — the right number is a conversation, not a headline.
            Here is what it's for.
          </p>
          <p className="fr-ask-body">
            This is a pre-seed, first-institutional-check conversation. There is no accelerator
            behind it — every dollar spent so far has been personal, and every result on this site
            was produced that way.
          </p>
          <div className="fr-use-list">
            <div className="fr-use-row">
              <span className="fr-use-dot" />
              <span className="fr-use-text"><strong>Multi-node H100/A100 compute</strong> to carry ORMAS onto Transformers (ORMAS-T) — the single artifact that turns "the transformer port is a compute problem" from a claim into a demonstration.</span>
            </div>
            <div className="fr-use-row">
              <span className="fr-use-dot" />
              <span className="fr-use-text"><strong>The first licensed design partner</strong> — an institution matching the three-property buyer test, willing to run the training layer against real proprietary data under a real compliance framework.</span>
            </div>
            <div className="fr-use-row">
              <span className="fr-use-dot" />
              <span className="fr-use-text"><strong>Runway to close the one gap that matters</strong> — finding and closing the co-founder profile above, properly, rather than rushing it.</span>
            </div>
          </div>
          <p className="fr-ask-body">
            If you hold any of those three, or you're an institution matching the buyer profile in
            the OXIDO section above, that's the conversation worth having. I'll volunteer every gap
            before you find it — zero contracts, zero buyer interviews, not validated on
            transformers yet, and the stability result hasn't been checked by a control theorist.
            Naming those first is what makes the rest of this credible.
          </p>
        </div>

        {/* ── Investor actions ─────────────────────────────────────── */}
        <div className="fr-actions">
          <div className="fr-actions-h">Three ways to take this further</div>

          <div className="fr-actions-grid">
            <button type="button" className="fr-act is-primary" onClick={() => setDeckOpen(true)} aria-haspopup="dialog">
              <span className="fr-act-icon"><Icon name="chart" size={17} /></span>
              <span className="fr-act-body">
                <span className="fr-act-t">Read the deck here</span>
                <span className="fr-act-s">Opens in the page — no download, no form, no email gate.</span>
              </span>
            </button>

            <a className="fr-act" href="/assets/pdf/oxido_pitch_deck.pdf" target="_blank" rel="noreferrer">
              <span className="fr-act-icon"><Icon name="download" size={17} /></span>
              <span className="fr-act-body">
                <span className="fr-act-t">Take the PDF</span>
                <span className="fr-act-s">Same deck, as a file, if you would rather forward it to a partner.</span>
              </span>
            </a>

            <a className="fr-act" href="mailto:raadxbusiness9@gmail.com?subject=OXIDO%20%E2%80%94%20Investor%20Conversation">
              <span className="fr-act-icon"><Icon name="mail" size={17} /></span>
              <span className="fr-act-body">
                <span className="fr-act-t">Start the conversation</span>
                <span className="fr-act-s">raadxbusiness9@gmail.com — I answer every one myself.</span>
              </span>
            </a>
          </div>

          <p className="fr-actions-note">
            Two longer documents sit behind this if you want the underlying record rather than the summary: the{' '}
            <a href="/assets/pdf/oxido_investor_whitepaper.pdf" target="_blank" rel="noreferrer">Commercial Evidence Report</a>{' '}
            for the twelve-month ablation, and the{' '}
            <a href="/assets/pdf/oxido_academic_research_paper.pdf" target="_blank" rel="noreferrer">System Architecture Paper</a>{' '}
            for the mechanics.
          </p>
        </div>

        <VerticalModal
          open={deckOpen}
          onClose={() => setDeckOpen(false)}
          eyebrow="OXIDO · Investor Deck"
          title="The Pitch Deck"
        >
          <div className="fr-deck-frame">
            <iframe
              src="/assets/pdf/oxido_pitch_deck.pdf#view=FitH"
              title="OXIDO investor pitch deck"
            />
          </div>
          <p className="fr-deck-fallback">
            If the deck does not render in your browser,{' '}
            <a href="/assets/pdf/oxido_pitch_deck.pdf" target="_blank" rel="noreferrer">open the PDF directly</a>.
          </p>
        </VerticalModal>

      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.05)' }} /></div>
    </div>
  );
}
