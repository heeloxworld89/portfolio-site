import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// ─────────────────────────────────────────────────────────────────────────────
// Service Worker — manual registration with iOS Safari fixes
//
// Why manual instead of virtual:pwa-register?
//   1. updateViaCache:'none' — Safari caches sw.js itself in its HTTP cache,
//      meaning it never detects a new SW even after you deploy. This option
//      tells Safari: always fetch sw.js fresh from the network, ignore HTTP cache.
//   2. pageshow+persisted — iOS Safari's bfcache freezes the page in memory
//      when you navigate away. When you come back, zero network requests fire.
//      The SW never gets a chance to check for updates. We detect this and reload.
// ─────────────────────────────────────────────────────────────────────────────

if ("serviceWorker" in navigator) {
  const registerSW = async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        // ── THE iOS Safari fix ──────────────────────────────────────────────
        // Without this, Safari serves sw.js from its own HTTP cache.
        // The SW is 7 days old, Safari doesn't know there's a new one.
        updateViaCache: "none",
      });

      // Force an update check on every single page load — not just first visit.
      registration.update().catch(() => {});

      // Poll every 60s for tabs left open in background (common on mobile).
      setInterval(() => registration.update().catch(() => {}), 60_000);

      // When a new SW installs, reload immediately.
      // skipWaiting + clientsClaim in workbox means the new SW is already
      // in control — this reload just flushes the old assets from the page.
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;

        newWorker.addEventListener("statechange", () => {
          if (
            newWorker.state === "installed" &&
            navigator.serviceWorker.controller
          ) {
            // New version is ready — reload so the user sees it immediately.
            window.location.reload();
          }
        });
      });
    } catch (err) {
      // SW registration failed — site still works, just no offline support.
      console.warn("Service worker registration failed:", err);
    }
  };

  // ── bfcache restore handler (iOS Safari specific) ─────────────────────────
  // When Safari restores a frozen page from bfcache (event.persisted === true),
  // no network request is made. The page is exactly as it was when you left.
  // If you deployed 7 days ago, the visitor sees the 7-day-old version.
  // Solution: detect bfcache restore and force a full reload.
  window.addEventListener("pageshow", (event: PageTransitionEvent) => {
    if (event.persisted) {
      // Page was served from bfcache. Reload to get the current version.
      window.location.reload();
    }
  });

  registerSW();
}

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
