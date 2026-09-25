import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */

export { routes, notFound, metaFor, jsonLdFor } from "./data/routes";
export { person, links, paper, company, ormas, recognition, bios, SITE_URL } from "./data/facts";

/** Renders one route to static HTML for the build-time pre-renderer. */
export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
}
