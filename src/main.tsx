import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// ── Service Worker: force reload on any new deployment ──
// skipWaiting + clientsClaim in workbox config means the new SW is already
// controlling the page — this reload just makes the user see the new assets.
import { registerSW } from "virtual:pwa-register";
registerSW({
  onNeedRefresh() {
    // New SW is ready and waiting — force the page to reload immediately.
    // skipWaiting means the new SW already took control, so this reload
    // will load fresh assets from the new bundle.
    window.location.reload();
  },
  onOfflineReady() {
    console.log("App ready for offline use.");
  },
  onRegisteredSW(_swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) {
    if (!registration) return;
    // Poll every 60 seconds for long-lived tabs (mobile tabs left open in background)
    setInterval(() => {
      registration.update().catch(() => {});
    }, 60 * 1000);
  },
});

reportWebVitals((metric) => {
  console.log(metric);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
