import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { OnThisPage, useActiveSection, type TocItem } from "../OnThisPage";
import "../ux/research.css";
import "../ux/article.css";

/* /dead-channels: an article on the near-dead channels in torchvision's
   VGG-19-BN. The text is the author's, published as written; this file only
   adds structure and links. It must not link to oxiedo.com, so the layout's
   company link is hidden here too. */

const GH = "https://github.com/Oxiedo/ormas-monitor";
const L = {
  tool: GH,
  results: `${GH}/blob/main/docs/results.md`,
  allModels: `${GH}/blob/main/scan_results/real_photos.md`,
  raw: `${GH}/blob/main/scan_results/vgg19_real_photos.json`,
  testScript: `${GH}/blob/main/examples/reproduce/vgg19_real_photos.py`,
  removal: `${GH}/blob/main/examples/reproduce/prune_vgg19.py`,
  imagenetv2: "https://arxiv.org/abs/1902.10811",
  mehta: "https://openaccess.thecvf.com/content_CVPR_2019/html/Mehta_On_Implicit_Filter_Level_Sparsity_in_Convolutional_Neural_Networks_CVPR_2019_paper.html",
  slimming: "https://arxiv.org/abs/1708.06519",
  redo: "https://arxiv.org/abs/2302.12902",
};

const TOC: TocItem[] = [
  { id: "dc-how", label: "How a channel ends up like this" },
  { id: "dc-cost", label: "Why 5.3% of the channels cost 18.6% of the compute" },
  { id: "dc-test", label: "How I tested it" },
  { id: "dc-models", label: "This varies a lot between models" },
  { id: "dc-proof", label: "The part I can prove" },
  { id: "dc-wrong", label: "What I got wrong" },
  { id: "dc-limits", label: "What this doesn't show" },
  { id: "dc-you", label: "Tell me where I'm wrong" },
];

const COMMANDS = [
  'pip install "ormas-monitor[demo]"',
  `python -c "import torchvision; torchvision.models.vgg19_bn(weights='DEFAULT')"`,
  "ormas-monitor check ~/.cache/torch/hub/checkpoints/vgg19_bn-c79401a0.pth --arch torchvision:vgg19_bn",
].join("\n");

const OUTPUT = [
  "[warning] 20 of 64 channels in layer `features.3` (Conv2d, BatchNorm `features.4`) are effectively dead",
  "[warning] 14 of 128 channels in layer `features.10` (Conv2d, BatchNorm `features.11`) are effectively dead",
  "[warning] 57 of 256 channels in layer `features.14` (Conv2d, BatchNorm `features.15`) are effectively dead",
].join("\n");

const LAYERS: [string, string, string][] = [
  ["features.3", "224 × 224", "20 of 64"],
  ["features.7", "112 × 112", "1 of 128"],
  ["features.10", "112 × 112", "14 of 128"],
  ["features.14", "56 × 56", "57 of 256"],
  ["features.17", "56 × 56", "46 of 256"],
  ["features.20", "56 × 56", "35 of 256"],
  ["features.23", "56 × 56", "35 of 256"],
  ["features.27", "28 × 28", "59 of 512"],
  ["features.30", "28 × 28", "22 of 512"],
  ["features.33", "28 × 28", "3 of 512"],
];

const COMPARISON: [string, string, string][] = [
  ["Top-1 accuracy", "61.9%", "61.9%"],
  ["Top-5 accuracy", "83.5%", "83.5%"],
  ["Answers compared with the original", "n/a", "identical on 10,000 of 10,000"],
  ["Largest logit difference", "n/a", "0 on the Mac's GPU"],
  ["Operations per image", "19.63 GMACs", "15.98 GMACs (18.6% less)"],
  ["CPU speed, batch 16", "n/a", "15–18% faster"],
  ["CPU speed, batch 1", "n/a", "11–13% faster"],
];

const MODELS: [string, string, string][] = [
  ["vgg19_bn", "292 of 5,504", "18.6%"],
  ["vgg13_bn", "91 of 2,944", "17.8%"],
  ["vgg11_bn", "32 of 2,752", "5.6%"],
  ["vgg16_bn", "19 of 4,224", "2.3%"],
  ["densenet169", "7,667 of 77,536", "not measured"],
  ["densenet121", "2,242 of 40,800", "not measured"],
  ["mnasnet1_0", "734 of 17,232", "not measured"],
  ["mobilenet_v3_small", "30 of 336", "not measured"],
  ["resnet50", "1 of 7,616", "almost nothing to gain"],
  ["wide_resnet50_2", "0 of 15,168", "nothing to gain"],
];

const ext = { target: "_blank", rel: "noreferrer" } as const;

function Table({ label, head, rows, code = false }: { label: string; head: [string, string, string]; rows: [string, string, string][]; code?: boolean }) {
  return (
    <div className="uxr-table-wrap" role="region" aria-label={label} tabIndex={0}>
      <table className="uxr-table">
        <thead>
          <tr>
            <th scope="col">{head[0]}</th>
            <th scope="col" className="num">{head[1]}</th>
            <th scope="col" className="num">{head[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a}>
              <th scope="row" className={code ? "is-code" : undefined}>{a}</th>
              <td className="num">{b}</td>
              <td className="num">{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DeadChannelsPage() {
  const active = useActiveSection(TOC);
  return (
    <SiteLayout hideCompanyLink>
      <section className="rx-page-head ux-art-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h1>VGG-19-BN spends 18.6% of its compute on channels that output zero</h1>
          <p>Rokib Al Dhin Raadh · Independent researcher, Dhaka · November 2026</p>
        </div>
      </section>

      <div className="rx-deep ux-research ux-art">
        <div className="rx-wrap uxr-layout">
          <aside className="uxr-rail">
            <OnThisPage toc={TOC} active={active} foldOnPhone />
          </aside>
          <article className="uxr-main">

            <div className="art-intro">
              <p className="uxr-p">torchvision's pretrained VGG-19-BN has 292 convolutional channels that output exactly 0 on every one of 10,000 test photos.</p>
              <p className="uxr-p">I cut all 292 out of the network. All 10,000 answers stayed the same, and the model needs 18.6% fewer operations per image. On my laptop's CPU it ran 11–18% faster.</p>
              <p className="uxr-p">You can find them yourself:</p>
              <pre className="art-code" tabIndex={0}><code>{COMMANDS}</code></pre>
              <p className="uxr-p">Once the weights are downloaded, the check takes about 2 seconds:</p>
              <pre className="art-code is-output" tabIndex={0}><code>{OUTPUT}</code></pre>
            </div>

            <section className="uxr-sec" id="dc-how" aria-labelledby="dc-how-h">
              <h2 className="uxr-h" id="dc-how-h">How a channel ends up like this</h2>
              <p className="uxr-p">In a Conv → BatchNorm → ReLU block, BatchNorm's output is γ(x − μ)/σ + β.</p>
              <p className="uxr-p">If the filter or γ shrinks to almost nothing, that output is close to a constant: β. If β is 0 or below, the ReLU after it outputs 0 for every input. Nothing flows forward and no gradient flows back.</p>
              <p className="uxr-p">The tool flags a channel when its filter or BatchNorm scale is under 10⁻⁵ of the layer's median and its shift is at or below 0. I tested what these channels do. I can't tell you exactly how they got this way during training.</p>
              <p className="uxr-p">This isn't a new discovery. <a href={L.mehta} {...ext}>Mehta et al.</a> described filters that stop responding (CVPR 2019), <a href={L.slimming} {...ext}>network slimming</a> pushes BatchNorm scales toward zero on purpose (ICCV 2017), and <a href={L.redo} {...ext}>ReDo</a> detects and resets dormant neurons (ICML 2023). What I'm adding is small: one command that checks a saved model, and a proof for the exact-zero case below.</p>
            </section>

            <section className="uxr-sec" id="dc-cost" aria-labelledby="dc-cost-h">
              <h2 className="uxr-h" id="dc-cost-h">Why 5.3% of the channels cost 18.6% of the compute</h2>
              <p className="uxr-p">The flagged channels are 292 of 5,504, but many sit early in the network, where the feature maps are largest. Cutting a channel also removes the matching inputs to the next layer.</p>
              <Table label="Layer, feature map and flagged channels" head={["Layer", "Feature map", "Flagged channels"]} rows={LAYERS} code />
              <p className="uxr-p">The other six conv layers have none. Parameters barely change, from 143.7M to 142.2M, so the file stays about the same size while the compute drops.</p>
            </section>

            <section className="uxr-sec" id="dc-test" aria-labelledby="dc-test-h">
              <h2 className="uxr-h" id="dc-test-h">How I tested it</h2>
              <p className="uxr-p">I used <a href={L.imagenetv2} {...ext}>ImageNetV2</a>: 10,000 labelled photos across all 1,000 ImageNet classes, free to download. My first version of this test used 64 upscaled CIFAR-10 images, which wasn't good enough, so this replaces it.</p>
              <Table label="Original and flagged channels removed" head={["", "Original", "Flagged channels removed"]} rows={COMPARISON} />
              <p className="uxr-p">Speed was measured on one Apple M2 CPU with 1 and 4 threads, in two separate runs of 7 alternating rounds per setting. The cut model was faster in all 56 rounds. An earlier CPU comparison on a smaller test showed logit differences of 1.3 × 10⁻⁵, which is floating-point rounding.</p>
              <p className="uxr-p"><strong>Can this test fail?</strong> Yes. Switching off 292 randomly chosen live channels, with the same number per layer, changed 499 of 500 answers and dropped top-1 from 57.2% to under 1%, across three random picks.</p>
              <p className="uxr-p"><strong>What about strange inputs?</strong> On solid colours, checkerboards, uniform noise and Gaussian noise up to σ = 100, the flagged channels still output exactly 0 and no answer changed. That's a test, not a proof for every possible input.</p>
            </section>

            <section className="uxr-sec" id="dc-models" aria-labelledby="dc-models-h">
              <h2 className="uxr-h" id="dc-models-h">This varies a lot between models</h2>
              <Table label="Model, flagged channels and operations saved if cut" head={["Model", "Flagged channels", "Operations saved if cut"]} rows={MODELS} code />
              <p className="uxr-p">19 of the 21 torchvision models with BatchNorm → ReLU had at least one flagged channel. On 2,000 photos, those channels output exactly 0 in 17 of the 19. In the two DenseNets they fire very slightly, at most 6.2 × 10⁻⁶, against a typical peak of about 0.5 for other channels in the same layers. Switching them off changed 0 of 2,000 answers.</p>
              <p className="uxr-p">VGG is old, and most people don't ship it. ResNet-50 has one flagged channel. So the useful thing isn't the VGG number, it's being able to check your own model in seconds. I only cut and fully compared VGG-19-BN. I don't know why it has 292 flagged channels while VGG-16-BN has 19.</p>
            </section>

            <section className="uxr-sec" id="dc-proof" aria-labelledby="dc-proof-h">
              <h2 className="uxr-h" id="dc-proof-h">The part I can prove</h2>
              <p className="uxr-p">The torchvision channels are tiny, not exactly zero, so the proof below does not cover them. For them, the evidence is the measurements above.</p>
              <p className="uxr-p">The exact-zero case is Theorem 2 in <Link to="/deepmath">my paper</Link>, accepted after double-blind review at DeepMath 2026: in a Conv → BatchNorm → ReLU channel, if the filter or BatchNorm scale is exactly zero and the shift is at or below 0, the ReLU is closed for every input. Every gradient into the channel is then exactly zero, so SGD or AdamW can never revive it.</p>
              <p className="uxr-p">The conditions matter. BatchNorm has to be in training mode, the ReLU has to be the only consumer, and the optimizer can't be holding momentum for that channel. In my testing, Adam momentum did revive a zeroed layer. If you zero a layer without clearing the optimizer state, it can come back, and the tool won't certify it.</p>
              <p className="uxr-p">To test it, I zeroed two conv layers in a small CIFAR-10 CNN and cleared the optimizer state. Accuracy stayed at exactly 10.00% for all 12 epochs. Re-initialising the 192 dead channels recovered 76.77%, against 78.84% before the break, on one seed.</p>
              <p className="uxr-p">I broke that network on purpose. I haven't measured how often this happens in real training.</p>
              <p className="uxr-p">You can run a shorter version with <code>ormas-monitor demo</code>. Expect about 61% before the break, exactly 10.00% after it, and about 59–63% with repair. It takes about a minute on an Apple M-series Mac and about 27 minutes on a CPU-only Linux machine.</p>
            </section>

            <section className="uxr-sec" id="dc-wrong" aria-labelledby="dc-wrong-h">
              <h2 className="uxr-h" id="dc-wrong-h">What I got wrong</h2>
              <p className="uxr-p">I started out building a much larger system for repairing networks during training. In one single-seed rerun, a plain reset beat it, 83.3% to 78.5%. I no longer have the raw logs for that run, so treat it as an anecdote, but it's why this tool stays simple. It finds channels and, if you ask, re-initialises them. It doesn't contain the larger system.</p>
            </section>

            <section className="uxr-sec" id="dc-limits" aria-labelledby="dc-limits-h">
              <h2 className="uxr-h" id="dc-limits-h">What this doesn't show</h2>
              <ul className="uxr-list">
                <li>None of the torchvision channels is certified. They're flagged and measured, not proven.</li>
                <li>Only VGG-19-BN was cut and compared.</li>
                <li>Speed comes from one laptop. Nothing has been measured on NVIDIA GPUs.</li>
                <li>The photos are ImageNetV2, not the original ImageNet validation set.</li>
                <li>The proof needs BatchNorm → ReLU, so it says nothing about transformers.</li>
                <li>The tool finds these channels but doesn't remove them yet. The removal code is <a href={L.removal} {...ext}>a separate script</a>.</li>
              </ul>
            </section>

            <section className="uxr-sec" id="dc-you" aria-labelledby="dc-you-h">
              <h2 className="uxr-h" id="dc-you-h">Tell me where I'm wrong</h2>
              <p className="uxr-p">Run <code>ormas-monitor check</code> on your own BatchNorm → ReLU model and tell me what you find. I especially want to see a flagged channel that fires, results from models trained with modern recipes, and any explanation for the gap between VGG-16-BN and VGG-19-BN.</p>
              <p className="uxr-p">The tool is free, Apache-2.0, and runs locally. I'm building a company, Oxiedo, that hopes to sell team features later, so you should know I have an interest.</p>
              <div className="art-sign">
                <p className="uxr-p">Code and all results: <a href={L.tool} {...ext}>github.com/Oxiedo/ormas-monitor</a></p>
                <p className="uxr-p">Paper and poster: <Link to="/deepmath">/deepmath</Link></p>
                <p className="uxr-p">Email: raadh@oxiedo.com</p>
                <ul className="art-links">
                  <li><a href={L.tool} {...ext}>Tool</a></li>
                  <li><a href={L.results} {...ext}>Full results</a></li>
                  <li><a href={L.allModels} {...ext}>All models</a></li>
                  <li><a href={L.raw} {...ext}>Raw results</a></li>
                  <li><a href={L.testScript} {...ext}>Test script</a></li>
                  <li><a href={L.removal} {...ext}>Removal script</a></li>
                </ul>
              </div>
            </section>

          </article>
        </div>
      </div>
    </SiteLayout>
  );
}
