// Build-time renderer: produces the full page HTML so crawlers, link
// previews and LLM fetchers receive real content, not an empty #root.
import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router";
import App from "./App";
export { pages } from "./site/data";
export { schemaFor } from "./site/schema";

export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  const chunks: Buffer[] = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8");
}
export { groups as evidence, evidenceChecked } from "./site/evidence";
