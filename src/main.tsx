import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

// ─────────────────────────────────────────────────────────────────────────────
// Stale-chunk recovery. If a deploy lands while a tab is open, the old bundle's
// hashed chunks no longer exist and imports fail. Reload once per tab to pick
// up the new index.html; the sessionStorage guard stops a broken deploy from
// looping forever.
// ─────────────────────────────────────────────────────────────────────────────
const RELOAD_KEY = "chunk-reload-attempted";

function recoverFromStaleChunk() {
  try {
    if (sessionStorage.getItem(RELOAD_KEY)) return;
    sessionStorage.setItem(RELOAD_KEY, "1");
  } catch {
    /* storage unavailable — reload once anyway */
  }
  window.location.reload();
}

window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  recoverFromStaleChunk();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    try {
      sessionStorage.removeItem(RELOAD_KEY);
    } catch {
      /* ignore */
    }
  }, 5_000);
});

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages are pre-rendered at build time; hydrate them. In dev the root is empty.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
