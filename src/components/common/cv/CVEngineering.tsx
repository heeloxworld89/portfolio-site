import ExpandableSection from '../ExpandableSection';

export default function CVEngineering() {
  return (
    <div className="row mb--50" id="engineering">
      <style>{`
        .eng-card {
          background: #191b1e;
          border-radius: 10px;
          padding: 25px;
          border: 1px solid #2a2d32;
          transition: 0.3s ease;
          height: 100%;
          overflow: hidden;
        }
        .eng-card:hover {
          border-color: rgba(255,255,255,0.2);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        .eng-layer-title {
          font-size: 16px;
          color: #c4cfde;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .eng-layer-num {
          background: #2a2d32;
          color: #fff;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 14px;
        }
        .eng-module-list { display: flex; flex-direction: column; gap: 10px; }
        .eng-module-row { display: flex; align-items: baseline; gap: 12px; }
        .eng-module-name { color: #c4cfde; font-family: 'Fira Code', monospace; font-size: 13px; font-weight: 600; flex-shrink: 0; min-width: 150px; }
        .eng-module-desc { color: #9aa4b0; font-size: 13px; }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 992px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
        .process-step {
          display: flex;
          gap: 20px;
          margin-bottom: 25px;
        }
        .step-num {
          font-size: 20px;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px #c4cfde;
          opacity: 0.8;
          min-width: 40px;
        }
        .memory-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 10px;
        }
        .memory-table th {
          color: #c4cfde;
          font-weight: 600;
          text-align: left;
          padding: 10px 20px;
          border-bottom: 2px solid rgba(255,255,255,0.05);
        }
        .memory-table td {
          background: #191b1e;
          padding: 20px;
          color: #9aa4b0;
          font-size: 15px;
        }
        .memory-table tr td:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
          color: #fff;
          font-weight: 600;
        }
        .memory-table tr td:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .memory-table tr:hover td {
          background: #1e2024;
        }
        .glow-text {
          color: #c4cfde;
          font-weight: 600;
        }
        .pill {
          background: rgba(255,255,255,0.05);
          color: #9aa4b0;
          padding: 5px 12px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 10px;
          border: 1px solid #2a2d32;
        }
        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #c4cfde;
          margin-top: 50px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
        }
        .section-title::after {
          content: "";
          flex-grow: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-left: 20px;
        }
        @media (min-width: 768px) {
          .section-title { font-size: 28px; }
        }
      `}</style>
      <div className="col-12">
        <span className="subtitle" style={{ color: "#9aa4b0", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px" }}>Systems Engineering</span>
        <h2 className="title mb--20 fs-2" style={{ fontWeight: "800", color: "#c4cfde" }}>OXIMO — Cognitive Multi-Agent OS</h2>
        <p style={{ fontSize: '13px', color: '#838d99', marginTop: '-14px', marginBottom: '20px' }}>
          <a href="https://anonymous.4open.science/r/oximo-5C73/README.md" target="_blank" rel="noreferrer" style={{ color: '#9aa4b0', textDecoration: 'underline' }}>
            ↗ View Codebase
          </a>
          {' '}&nbsp;·&nbsp; Architecture is complete. Code is not polished — this was production research infrastructure, not a demo.
        </p>

        <div style={{ background: "#191b1e", padding: "20px 24px", borderRadius: "8px", borderLeft: "2px solid #2a2d32", marginBottom: "40px", border: "1px solid #2a2d32" }}>
          <p style={{ fontSize: "18px", color: "#c4cfde", margin: 0, fontWeight: "500" }}>
            Sole Architect & Engineer | 2023 – Present | Python
          </p>
          <div style={{ display: "flex", gap: "15px", marginTop: "10px", flexWrap: "wrap" }}>
            <span className="pill">40,933 LINES PROD</span>
            <span className="pill">27,228 LINES TEST</span>
            <span className="pill">2,011 TESTS (0 FAILS)</span>
            <span className="pill" style={{ background: "rgba(255,255,255,0.05)", color: "#c4cfde" }}>PRODUCTION-GRADE</span>
          </div>
          <p style={{ fontSize: "15px", color: "#9aa4b0", marginTop: "15px", margin: 0 }}>
            Status: API-based (LLM providers). Future version will replace API calls with ORMAS-powered self-improving language models.
          </p>
        </div>
        
        <div className="content">
          {/* STAT STRIP */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '40px' }}>
            {[
              { val: '40,933', lbl: 'Lines of Code' },
              { val: '2,011', lbl: 'Tests · 0 Failures' },
              { val: '11', lbl: 'Mini-Repos' },
              { val: '72%', lbl: 'Line Reduction' },
              { val: '12/12', lbl: 'Algorithms Ported' },
              { val: '47', lbl: 'Feature Flags' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#191b1e', border: '1px solid #2a2d32', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#c4cfde', lineHeight: 1.1, marginBottom: '4px' }}>{s.val}</div>
                <div style={{ fontSize: '11px', color: '#838d99', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{s.lbl}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#9aa4b0", marginBottom: "14px" }}>
            Every multi-agent framework I studied needed a human in the middle — someone to frame each task, prompt each model, carry the output to the next step. I wanted agents that hire other agents, break work apart themselves, remember what happened last session, and run like a company. That turned into 40,933 lines of production code.
          </p>
          <p style={{ lineHeight: "1.8", color: "#c4cfde", marginBottom: "14px", fontSize: "18px", fontWeight: "600", fontStyle: "italic", borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: "20px" }}>
            Not a chatbot. A full organizational structure that assembles itself.
          </p>
          <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#9aa4b0", marginBottom: "40px" }}>
            I rebuilt it from a 106,000-line monolith: 72% fewer lines, every critical algorithm intact, not one test failing at the end. The rebuild was never housekeeping. It was the experiment that showed the architecture underneath was sound enough to survive complete reconstruction.
          </p>

          <ExpandableSection
            closedLabel="View Full Architecture Detail"
            hint="The 4-layer module breakdown, the Sacred Chain, self-hiring pipeline, memory tiers, safety systems, and test-suite tables — for engineers."
          >
          <h4 className="section-title">4 Layers. 11 Mini-Repos. Strict Separation of Concerns.</h4>
          <p style={{ fontSize: "16px", color: "#9aa4b0", marginBottom: "30px" }}>
            Constructor injection everywhere, no global state, every dependency declared and every boundary enforced. This is not a monolith wearing modules as a costume — each repo can be tested, deployed, and replaced on its own.
          </p>
          
          <div className="grid-2 mb--50">
            <div className="eng-card">
              <div className="eng-layer-title"><span className="eng-layer-num">1</span> Foundation</div>
              <div className="eng-module-list">
                <div className="eng-module-row"><span className="eng-module-name">oximo_config</span><span className="eng-module-desc">Pydantic v2 Settings</span></div>
                <div className="eng-module-row"><span className="eng-module-name">oximo_models</span><span className="eng-module-desc">18 immutable domain models</span></div>
                <div className="eng-module-row"><span className="eng-module-name">oximo_db</span><span className="eng-module-desc">SQLAlchemy async ORM</span></div>
                <div className="eng-module-row"><span className="eng-module-name">oximo_llm</span><span className="eng-module-desc">Unified LLM adapter</span></div>
              </div>
            </div>

            <div className="eng-card">
              <div className="eng-layer-title"><span className="eng-layer-num">2</span> Domain Engines</div>
              <div className="eng-module-list">
                <div className="eng-module-row"><span className="eng-module-name">oximo_safety</span><span className="eng-module-desc">Adversarial input/output filter</span></div>
                <div className="eng-module-row"><span className="eng-module-name">oximo_cognitive</span><span className="eng-module-desc">Brain lifecycle, 3-tier memory</span></div>
                <div className="eng-module-row"><span className="eng-module-name">oximo_router</span><span className="eng-module-desc">Graph-of-Thoughts planner</span></div>
                <div className="eng-module-row"><span className="eng-module-name">oximo_execution</span><span className="eng-module-desc">Sacred Chain, sandbox</span></div>
                <div className="eng-module-row"><span className="eng-module-name">oximo_hiring</span><span className="eng-module-desc">Self-hiring pipeline</span></div>
              </div>
            </div>

            <div className="eng-card">
              <div className="eng-layer-title"><span className="eng-layer-num">3</span> Orchestration</div>
              <div className="eng-module-list">
                <div className="eng-module-row"><span className="eng-module-name">oximo_orchestrator</span><span className="eng-module-desc">Central wiring hub</span></div>
                <div className="eng-module-row"><span className="eng-module-name" style={{ opacity: 0 }}>—</span><span className="eng-module-desc">4 execution paths (Sequential, Parallel, Hybrid, Mesh)</span></div>
                <div className="eng-module-row"><span className="eng-module-name" style={{ opacity: 0 }}>—</span><span className="eng-module-desc">Post-task learning integration</span></div>
              </div>
            </div>

            <div className="eng-card">
              <div className="eng-layer-title"><span className="eng-layer-num">4</span> API</div>
              <div className="eng-module-list">
                <div className="eng-module-row"><span className="eng-module-name">oximo_api</span><span className="eng-module-desc">FastAPI routes</span></div>
                <div className="eng-module-row"><span className="eng-module-name" style={{ opacity: 0 }}>—</span><span className="eng-module-desc">SSE streaming</span></div>
                <div className="eng-module-row"><span className="eng-module-name" style={{ opacity: 0 }}>—</span><span className="eng-module-desc">Webhooks & Prometheus metrics</span></div>
              </div>
            </div>
          </div>

          <h4 className="section-title">The Sacred Chain & Self-Hiring</h4>
          
          <div className="grid-2">
            <div>
              <h5 style={{ color: "#fff", marginBottom: "20px", fontSize: "20px" }}>Hierarchical Decomposition</h5>
              <div className="eng-card" style={{ padding: "20px" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <strong style={{ color: "#c4cfde" }}>Tier 1 — Master Realization</strong>
                    <p style={{ margin: "5px 0 0", color: "#9aa4b0", fontSize: "14px" }}>Receives objective, decomposes into department assignments.</p>
                  </li>
                  <li style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <strong style={{ color: "#c4cfde" }}>Tier 2 — Department Head</strong>
                    <p style={{ margin: "5px 0 0", color: "#9aa4b0", fontSize: "14px" }}>Plans employee task assignments within its domain.</p>
                  </li>
                  <li style={{ padding: "14px 0" }}>
                    <strong style={{ color: "#c4cfde" }}>Tier 3 — Employee Executor</strong>
                    <p style={{ margin: "5px 0 0", color: "#9aa4b0", fontSize: "14px" }}>Detects task type, selects models, executes.</p>
                  </li>
                </ul>
                <div style={{ marginTop: "15px", fontSize: "13px", color: "#c4cfde", padding: "10px", background: "rgba(255,255,255,0.02)", borderRadius: "6px" }}>
                  <strong>Execution Modes:</strong> Sequential, Parallel, Hybrid, Mesh. <em>V2 Graph-of-Thoughts Planner uses Kahn's topological sort.</em>
                </div>
              </div>
            </div>
            
            <div>
              <h5 style={{ color: "#fff", marginBottom: "20px", fontSize: "20px" }}>Autonomous Role Creation</h5>
              <div className="eng-card" style={{ padding: "20px" }}>
                <div className="process-step" style={{ marginBottom: "15px" }}>
                  <div className="step-num">01</div>
                  <div><strong style={{ color: "#fff" }}>Realization Block</strong> <span style={{ color: "#9aa4b0", fontSize: "14px" }}>LLM designs persona, skills, department.</span></div>
                </div>
                <div className="process-step" style={{ marginBottom: "15px" }}>
                  <div className="step-num">02</div>
                  <div><strong style={{ color: "#fff" }}>Persona Matching</strong> <span style={{ color: "#9aa4b0", fontSize: "14px" }}>ChromaDB vector search prevents duplication.</span></div>
                </div>
                <div className="process-step" style={{ marginBottom: "15px" }}>
                  <div className="step-num">03</div>
                  <div><strong style={{ color: "#fff" }}>7-Phase Validation</strong> <span style={{ color: "#9aa4b0", fontSize: "14px" }}>Format, skills, reports-to chain.</span></div>
                </div>
                <div className="process-step" style={{ marginBottom: "15px" }}>
                  <div className="step-num">04</div>
                  <div><strong style={{ color: "#fff" }}>Prompt Testing</strong> <span style={{ color: "#9aa4b0", fontSize: "14px" }}>Cheap LLM call verifies coherence.</span></div>
                </div>
                <div className="process-step" style={{ marginBottom: "15px" }}>
                  <div className="step-num">05</div>
                  <div><strong style={{ color: "#fff" }}>Materialization</strong> <span style={{ color: "#9aa4b0", fontSize: "14px" }}>Persist role + nascent brain to DB.</span></div>
                </div>
                <div className="process-step" style={{ marginBottom: "0" }}>
                  <div className="step-num">06</div>
                  <div><strong style={{ color: "#c4cfde" }}>Atomic Rollback</strong> <span style={{ color: "#9aa4b0", fontSize: "14px" }}>If any step fails, reverse. No orphans.</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* 7-Stage Task Execution Pipeline */}
          <h4 className="section-title">7-Stage Task Execution Pipeline</h4>
          <p style={{ fontSize: "16px", color: "#9aa4b0", marginBottom: "25px" }}>
            Every task entering OXIMO runs the same deterministic 7-stage pipeline. Each stage is modular, testable on its own, and can be switched off behind a feature flag.
          </p>
          <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '10%' }}>Stage</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '25%' }}>Name</th>
                  <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>What It Does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Safety Gate', 'Input validation, injection detection, rate limiting — 7-check cascade.'],
                  ['2', 'Dynamic Router', 'Graph-of-Thoughts planner decomposes task; Kahn\'s topological sort determines execution order.'],
                  ['3', 'Self-Hiring', 'If no suitable role exists, the system designs, validates, and materialises a new agent.'],
                  ['4', 'Cognitive', '3-tier memory retrieval (Working → Episodic → Semantic) enriches task context.'],
                  ['5', 'Sacred Chain', 'Hierarchical decomposition: Master → Department Head → Employee Executor.'],
                  ['6', 'Validation', 'Output safety checks, PII redaction, harmful content scanning, drift monitoring.'],
                  ['7', 'Post-Task Learning', 'Extracts lessons, updates episodic memory, adjusts brain maturity state.']
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{ padding: '13px 20px', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: '#c4cfde', fontWeight: 700, fontFamily: "'Fira Code', monospace" }}>{row[0]}</td>
                    <td style={{ padding: '13px 20px', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: '#c4cfde', fontWeight: 600 }}>{row[1]}</td>
                    <td style={{ padding: '13px 20px', borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: '#9aa4b0' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="section-title">Cognitive System: 3-Tier Memory</h4>
          <p style={{ fontSize: "16px", color: "#9aa4b0", marginBottom: "25px" }}>
            Knowledge is built from 4 parallel sources (First Principles, Book, Industry, Internet). Every agent's Brain progresses through: Nascent → Learning → Mature → Expert.
          </p>
          <div className="table-responsive mb--40" style={{ overflowX: 'auto' }}>
            <table className="memory-table">
              <thead>
                <tr>
                  <th style={{ width: "25%" }}>Tier</th>
                  <th style={{ width: "35%" }}>What It Stores</th>
                  <th style={{ width: "40%" }}>How It Retrieves</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Working Memory</td>
                  <td>Current session context</td>
                  <td>Most recent N items (bounded deque)</td>
                </tr>
                <tr>
                  <td>Episodic Memory</td>
                  <td>Task outcomes + lessons learned</td>
                  <td>Role-scoped, task-type matching</td>
                </tr>
                <tr>
                  <td>Semantic Memory</td>
                  <td>Deep knowledge (ChromaDB vectors)</td>
                  <td>Vector similarity search, cross-role queries</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '30px' }}>
            <div>
              <h4 className="section-title" style={{ marginTop: "0" }}>Safety &amp; Guardrails</h4>
              <div className="eng-card">
                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#9aa4b0", fontSize: "15px", display: "flex", flexDirection: "column", gap: "15px" }}>
                  <li><strong style={{ color: "#c4cfde", display: "block", marginBottom: "5px" }}>Input Safety — 7-Check Cascade</strong> Rate limiting, burst detection, length bounds, character validation, repetition, entropy bounds, injection pattern matching (jailbreak/DAN).</li>
                  <li><strong style={{ color: "#c4cfde", display: "block", marginBottom: "5px" }}>Output Safety</strong> PII detection and redaction, harmful content scanning.</li>
                  <li><strong style={{ color: "#c4cfde", display: "block", marginBottom: "5px" }}>Behavioral Drift Monitoring</strong> EMA + Page-Hinkley change detection, KL divergence, per-model anomaly alerts.</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="section-title" style={{ marginTop: "0" }}>LLM Layer &amp; Testing</h4>
              <div className="eng-card">
                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#9aa4b0", fontSize: "15px", display: "flex", flexDirection: "column", gap: "15px" }}>
                  <li><strong style={{ color: "#c4cfde", display: "block", marginBottom: "5px" }}>Unified Adapter</strong> Routes to 5 native providers + LiteLLM gateway. Provider fallback chains, Gemini 2.5 thinking budgets, 420-line JSON parser with 6 repair strategies.</li>
                  <li><strong style={{ color: "#c4cfde", display: "block", marginBottom: "5px" }}>V2 Feature Flags</strong> 47 feature flags deployed across 6 waves (Semantic router, Debate, Shared brain, Sandbox, SSE).</li>
                  <li><strong style={{ color: "#c4cfde", display: "block", marginBottom: "5px" }}>Test Suite Rigor</strong> 2,011 passing tests. 0 failures. 12/12 critical algorithms ported verbatim from original 106K monolith. 82/96 unique bug fixes ported individually.</li>
                </ul>

                {/* V2 Feature Flags Wave Table */}
                <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#c4cfde', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '25px', marginBottom: '15px' }}>V2 Feature Flags — Wave Breakdown</h5>
                <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto', marginBottom: '20px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '20%' }}>Wave</th>
                        <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Capabilities</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Wave 1', 'Semantic Router — intent classification, Graph-of-Thoughts planning'],
                        ['Wave 2', 'Multi-Agent Debate — adversarial consensus protocol'],
                        ['Wave 3', 'Shared Brain — cross-role semantic memory queries'],
                        ['Wave 4', 'Sandbox Execution — isolated code execution environment'],
                        ['Wave 5', 'SSE Streaming — real-time task progress via Server-Sent Events'],
                        ['Wave 6', 'Behavioral Drift Monitoring — EMA, Page-Hinkley, KL divergence']
                      ].map((row, i) => (
                        <tr key={i}>
                          <td style={{ padding: '13px 20px', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: '#c4cfde', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ padding: '13px 20px', borderBottom: i < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: '#9aa4b0' }}>{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Test Suite Breakdown Table */}
                <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#c4cfde', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '25px', marginBottom: '15px' }}>Test Suite — Module Breakdown</h5>
                <div style={{ background: '#191b1e', borderRadius: '8px', border: '1px solid #2a2d32', overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ padding: '12px 20px', textAlign: 'left', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32', width: '50%' }}>Module</th>
                        <th style={{ padding: '12px 20px', textAlign: 'right', color: '#c4cfde', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', borderBottom: '1px solid #2a2d32' }}>Tests</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Execution', '818'],
                        ['LLM', '115'],
                        ['Config', '108'],
                        ['Cognitive', '206'],
                        ['Safety', '175'],
                        ['Router', '142'],
                        ['Hiring', '131'],
                        ['Models', '89'],
                        ['DB', '74'],
                        ['API', '63'],
                        ['Orchestrator', '90']
                      ].map((row, i) => (
                        <tr key={i}>
                          <td style={{ padding: '13px 20px', borderBottom: i < 10 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: '#c4cfde', fontWeight: 600 }}>{row[0]}</td>
                          <td style={{ padding: '13px 20px', borderBottom: i < 10 ? '1px solid rgba(255,255,255,0.04)' : 'none', fontSize: '14px', color: '#9aa4b0', textAlign: 'right', fontFamily: "'Fira Code', monospace", fontWeight: 700 }}>{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          </ExpandableSection>

          <div className="mt--50 p-3 p-md-5" style={{ background: "#191b1e", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.05)", position: "relative", overflow: "hidden" }}>
            
            <h4 style={{ fontSize: "24px", fontWeight: "700", color: "#fff", marginBottom: "8px" }}>Where OXIMO Fits</h4>
            <p style={{ fontSize: '15px', color: '#9aa4b0', marginBottom: '20px', lineHeight: '1.75', maxWidth: '620px' }}>
              Everything above is OXIMO on its own. It doesn't run alone in the bigger picture — see{' '}
              <a href="#oxido" style={{ color: '#c4cfde', textDecoration: 'underline' }}>OXIDO</a> above for how it fits with ORMAS and Black Bloxie.
            </p>

            <p style={{ fontSize: '15px', lineHeight: '1.75', color: '#9aa4b0', marginBottom: '0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px' }}>
              Today OXIMO runs on API-based LLMs. Next comes ORMAS-T, carrying per-node health monitoring onto Transformers, and then Cherry — a self-correcting language model trained to take the external API out of the loop for good.
            </p>

            <hr style={{ borderColor: "rgba(255,255,255,0.05)", margin: "30px 0" }} />
            
            <h5 style={{ fontSize: "18px", color: "#c4cfde", marginBottom: "15px", fontWeight: "600" }}>Planned Publications</h5>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              <span style={{ padding: "10px 20px", background: "rgba(0,0,0,0.3)", borderRadius: "8px", color: "#9aa4b0", fontSize: "14px", border: "1px solid rgba(255,255,255,0.05)" }}><strong style={{ color: "#fff" }}>ICSE SEIP:</strong> Case study of autonomous e-commerce (Black Bloxie)</span>
              <span style={{ padding: "10px 20px", background: "rgba(0,0,0,0.3)", borderRadius: "8px", color: "#9aa4b0", fontSize: "14px", border: "1px solid rgba(255,255,255,0.05)" }}><strong style={{ color: "#fff" }}>OXIDO Ecosystem Paper:</strong> Integration architecture</span>
            </div>
          </div>

        </div>
      </div>
      <div className="col-12"><hr className="my-5" style={{ borderColor: "rgba(255,255,255,0.05)" }} /></div>
    </div>
  );
}
