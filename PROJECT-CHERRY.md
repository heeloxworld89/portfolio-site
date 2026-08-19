# Project Cherry

**A neurosymbolic mesh of small specialised models that trains itself in real time, grows its own
capacity, and never stops learning.**

> **Status.** Not built. Cherry is Layer 3 of the OXIDO stack and the only layer that does not yet
> exist. What makes it more than a proposal is that it is not a new idea requiring new science — it
> is the **composition of two things that are already built and validated**: OXIMO, which has run the
> topology in production for eighteen months, and ORMAS, which supplies the learning mechanism across
> 383 experiments and four architecture families. Cherry is unbuilt in its composition, not
> speculative in its components. Every projection in this document is labelled.

---

## 1. The One-Paragraph Answer

Every frontier lab is building the same shape of object: one enormous general model, trained once,
frozen at a cutoff, then wrapped in retrieval and guardrails and sold into every context including
ones it structurally cannot serve. That shape works beautifully for consumers. It fails for regulated
institutions, and it fails for a reason no amount of scale fixes — a frozen general model cannot be
retrained on data that legally cannot leave the building, cannot specialise to one institution
without forgetting others, and cannot account for what changed inside it. **Project Cherry is a
different shape of object entirely: not one large model but a growing mesh of small, deeply
specialised models, each carrying its own weights and its own categorised memory, routed
dynamically, learning continuously in real time, with the whole structure inspectable because the
architecture emits its own telemetry.** The industry is trying to make the general model work for
the institution. Cherry inverts it — the model is built inside the institution, on its data, and
specialises there permanently.

---

## 2. What Is Actually Wrong With the Current Shape

The standard lifecycle is: **train → freeze → deploy → (optionally) fine-tune → freeze again.**

For a consumer, this is fine. For an institution whose data cannot leave and whose regulator asks
what changed, every stage of that lifecycle is a defect:

| Stage | Why it fails the institutional case |
|---|---|
| **Train** | On public data. The institution's actual knowledge — the thing that makes it valuable — is not in there and cannot be put in there without moving it. |
| **Freeze** | The model stops at a cutoff. Institutional reality does not. |
| **Deploy** | Inference is an API call. For locked data, that is disqualifying before any accuracy question is asked. |
| **Fine-tune** | Catastrophic forgetting. Teach it the new thing, lose the old thing. Every existing workaround needs replay buffers, task boundaries, or task IDs at inference — none of which a live deployment can supply. |
| **Freeze again** | Back to a static artefact, and the audit trail for what changed is reconstructed after the fact, if it exists at all. |

The industry's response is to make the general model *bigger* and wrap it in more scaffolding —
RAG, guardrails, adapters, evaluation harnesses. That is engineering around the shape rather than
changing it. The shape is the problem.

---

## 3. What Cherry Is

Cherry is a **closed mesh of neurosymbolic language models**.

Not one model with many parameters. **Many models with few parameters each**, arranged as a graph:

- Each node is a **small model specialised to one function** — its weights encode one job well
  rather than everything adequately.
- Each node carries **its own categorised memory**, bound to its weights rather than stored beside
  them in a separate retrieval system.
- Nodes are **hot-swappable**: the active set for a given task is assembled at runtime, not fixed at
  training time.
- The **number of nodes is not specified in advance.** The mesh grows when it encounters work it
  cannot do, and the count at any moment is an emergent property of what the system has been asked
  to do.
- Because ORMAS emits five layers of telemetry natively, **the topology being dynamic does not make
  it opaque.** You do not know how many nodes there will be; you know exactly what every one of them
  is doing.

The **symbolic** half is the structure: explicit roles, explicit routing, categorised memory, an
audit trail of every change. The **neural** half is the computation inside each node. Neither half
alone is sufficient — pure connectionism gives you a black box that cannot be governed, and pure
symbolic systems cannot learn.

---

## 4. The Key Correspondence — OXIMO Is Already the Blueprint

This is the part that makes Cherry a build rather than a research programme, and it is the dot most
easily missed.

**OXIMO already implements Cherry's topology — in software orchestration instead of weight space.**

Look at what OXIMO persists. Nine tables, three of which matter here: `RoleTable`, `BrainTable`,
`KnowledgeCellTable`. An OXIMO agent *is* a role definition plus a brain state plus a set of
knowledge cells. Read those records as weight files and the correspondence is exact:

| OXIMO today (orchestration layer) | Cherry (weight layer) |
|---|---|
| `RoleTable` — agent identity, skills, department | Node identity and position in the graph |
| `BrainTable` — maturity, confidence score | The node's weights and its goodness score |
| `KnowledgeCellTable` — categorised domain knowledge | The node's weight-bound categorised memory |
| **Self-Hiring Pipeline** — designs, validates, materialises a new agent when no existing one has the skill | **Silent Node Injection** — a new node enters a live network with zero net perturbation |
| **Sacred Chain** — Master → Department → Employee hierarchy | The layered mesh structure of the network |
| **DynamicRouter** — classifies the task, selects the execution path | Learned routing across the node graph |
| **PostTaskLearner** — updates brain confidence, records lessons | ORMAS health gate updating node goodness in real time |
| **DecayManager** — Ebbinghaus forgetting curve on unused knowledge | Goodness decay on unused nodes |
| **Circuit Breaker** — isolates a failing provider | Health-gated isolation and repair of a failing node |
| **Atomic Rollback** — no orphaned agents on failed hire | Conservation-constrained correction; verify-then-commit |

OXIMO is not a precursor to Cherry. **OXIMO is Cherry's specification, already written, already
debugged, and already validated for eighteen months on a live company.** Cherry is the same
organisation collapsed from the orchestration layer down into the weights.

That collapse is the entire project. And it matters commercially as much as technically: today
OXIMO's nodes are external LLM APIs, which means for a data-locked institution the whole stack is
disqualified at the first call. When the nodes become weights the institution owns, the disqualifier
disappears.

---

## 5. Why This Requires ORMAS, and Could Not Have Been Built Before It

Every property Cherry needs is a property standard training cannot provide.

**Real-time learning.** Cherry has no train/deploy boundary. A node improves while operating. That
is not fine-tuning on a schedule; it is continuous adaptation. Standard backpropagation offers one
global error signal with no mechanism for any unit to assess its own state — there is nothing to
build continuous per-node learning on top of. ORMAS's Signal 2 gives every node a local objective,
which is the precondition.

**Growth without collapse.** Cherry adds nodes when it meets work it cannot do — the direct analogue
of OXIMO's self-hiring. Standard networks cannot do this: the parameter space changes dimension, the
optimiser's momentum buffers become wrong-shaped, and the conserved quantity derived from
weight-rescaling symmetry is violated. ORMAS's mean-subtracted initialisation
(Σⱼ w_new,j = 0) means a new node enters contributing **zero net perturbation**, leaving every
existing conserved quantity intact. This is the mechanism the whole architecture stands on.

**Specialisation without forgetting.** A mesh of specialists is worthless if specialising node B
degrades node A. Measured: **94.6% prior-task retention against ResNet-18's 47.3%**, with no replay
buffer and no task labels — because gradient conflict forces competing representations into
physically separate regions of weight space.

**Locality as the enabling condition.** ORMAS's stability characterisation is local, and that is the
design rather than a shortfall. A global convergence proof is defined over a fixed parameter space
θ ∈ ℝⁿ; the instant the mesh grows a node, *n* changes and such a proof stops referring to anything.
Locality is what buys topological freedom. **A globally coupled, globally proven system could not
grow. This one can.**

**Observability under dynamism.** A mesh whose size and shape are emergent would ordinarily be
ungovernable. ORMAS's five-layer telemetry is a physical byproduct of the forward and backward pass,
not a reconstruction — so the structure stays auditable precisely while it is changing.

---

## 6. What Cherry Is Not

Precision here matters, because every one of these will be the first guess a technical reader makes.

**Not fine-tuning.** Fine-tuning is a discrete event against a frozen base, and it forgets. Cherry
has no frozen base and no discrete event.

**Not LoRA or adapters.** Adapters require a task ID at inference — you must already know which
adapter to load. In Cherry, which nodes activate is the *result* of routing, not an input to it.

**Not Mixture-of-Experts.** MoE is the closest existing thing and the difference is instructive: an
MoE has a **fixed** number of experts decided before training, a gating network trained jointly and
frozen with the rest, no per-expert health monitoring, no capacity growth, and no audit trail.
Cherry's node count is unknown in advance and grows on demand; each node is independently monitored,
repairable, and individually accountable.

**Not an agent framework.** CrewAI, LangGraph, and AutoGen orchestrate calls to somebody else's
frozen model. The intelligence is rented and the data leaves. Cherry's intelligence is the mesh
itself.

**Not a frontier-scale general model.** This is a deliberate refusal, not a limitation of ambition.
The industry is racing toward trillion-parameter general models. Cherry goes the opposite direction
and bets that the correct unit is many small specialists.

---

## 7. The Small-Specialist Bet

The wager underneath Cherry is straightforward and increasingly well-supported: **for a bounded
domain, a small model specialised on that domain outperforms a much larger general model, at a
fraction of the compute.** Recent work on small task-specialised models points the same way.

If that holds, then a *correctly routed mesh of specialists* beats one generalist on every task in
its coverage — provided three problems are solved: routing between specialists, specialising them
continuously, and doing so without forgetting. ORMAS is the answer to the second and third. OXIMO's
DynamicRouter is a validated answer to the first, in orchestration form.

The economic consequence is already visible in OXIMO's production numbers. Cascading specialised
cheap models instead of single-shotting a frontier model produced roughly **$3.50 against ~$180**
for equivalent output — a 99% reduction, achieved by specialisation rather than compromise. Cherry
is that same principle pushed down from the orchestration layer into the architecture.

---

## 8. What It Unlocks

**Data that can never leave becomes trainable.** The mesh is instantiated inside the institution's
infrastructure and specialises on their data. Nothing is uploaded. There is no external inference
call to disqualify the deployment.

**Specialisation becomes permanent and compounding.** A deployment that has run for three years
holds nodes shaped by three years of that institution's specific work. This is the measured
switching cost — removing an embedded system cost **91% of commercial output** in the Black Bloxie
ablation — expressed in weights rather than orchestration state.

**Governance stops being a bolt-on.** Every node's state, every correction, every injection is
recorded natively. Under the FDA's Predetermined Change Control Plan framework — which permits
post-authorisation learning only within bounds specified, validated, and monitored in advance — this
is precisely the artefact required, produced during training rather than reconstructed afterwards.

**And the reason this is worth doing at all:** a system that accumulates knowledge over time,
specialises where it spends its attention, grows new capacity when it meets something it cannot
handle, and does not destroy what it already knew — is a materially better model of how learning
works than train-once-and-freeze. That is the long-term thesis, and it is why the target is not a
bigger general model.

---

## 9. Honest Status

**Built and validated:**

- **OXIMO** — 40,933 production lines, 2,069 passing tests, 11 subpackages, eighteen months on a
  live company. Self-hiring, Sacred Chain, three-tier memory, dynamic routing, drift monitoring.
  The topology works.
- **ORMAS** — 383 controlled experiments across four architecture families (FC-DAG, CNN, 11.24M
  Fat CNN, ResNet-18). 94.6% retention, 58.8% zero-shot compositional accuracy, 80.3% recovery from
  a mid-training lesion where the baseline permanently collapses to 10.0%, native five-layer
  telemetry. The mechanism works.
- **Black Bloxie LTD** — twelve-month controlled ablation. −91% on removal, +1,300% on re-injection.
  The composition produces real-world economic output.

**Designed, not yet built:**

- **Silent Node Injection at scale.** Reasoned rigorously from the conservation constraint; the
  mathematics is worked. Not yet run on a live network.
- **ORMAS-T.** The conservation and injection machinery is architecture-agnostic. What a Transformer
  additionally requires is a pathology taxonomy for attention — dead heads, saturated heads,
  gradient-dead heads where softmax saturates so hard nothing flows backward — approximately sixty
  lines of plug-in diagnostics against machinery that already exists. Gated on multi-node H100/A100
  access, not on an unanswered question.
- **Cherry itself.** The composition. Not started.

**Projected, and labelled as such:**

- ~99% retention with dedicated per-node capacity, and a zero-shot ceiling of 85–92%. These are
  reasoned projections from measured telemetry, not results. The current 58.8% is a fixed-capacity
  artefact — Node 3 (256→512) died and was resurrected **eleven times** because two tasks competed
  for one block in a static graph.

**Genuinely open:**

- Whether attention heads behave like convolutional nodes under the conservation constraint.
- The ceiling on node count before the graph becomes computationally impractical.
- Routing quality across a large dynamic mesh — OXIMO's router is validated in orchestration, not in
  weight space.
- No clinical, financial, or defense data has touched any part of this.

---

## 10. The Dependency Chain, End to End

```
Five failed ventures (12–17)
   └─ finding: the bottleneck is coordination, never individual capability
        ↓
OXIMO — agents that hire agents, remember, and organise themselves
   └─ wall: its agents must learn from real operational data, which is adversarial
        ↓
ORMAS — per-node local objectives, health-gated self-correction, native telemetry
   └─ wall: proven on a static graph; fixed capacity caps it at 58.8%
        ↓
ORMAS-T + Silent Node Injection — dynamic capacity, growth without collapse
   └─ wall: OXIMO still rents intelligence from an external API, so locked data stays locked
        ↓
PROJECT CHERRY — the OXIMO organisation collapsed into weight space:
   a growing mesh of specialised models, learning in real time,
   owned by the institution, auditable by construction
        ↓
An autonomous organisation that runs inside a firewall,
gets better at that institution's specific work every day,
and can prove what it learned.
```

Nothing in that chain was planned in advance. Each layer exists because the one before it hit a wall
that could not be engineered around. Cherry is the end of the chain — the point at which the stack
stops depending on any intelligence but its own.
