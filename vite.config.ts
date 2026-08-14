import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false, // We register manually in main.tsx with updateViaCache:'none'
      includeAssets: ["favicon/favicon.svg", "favicon/apple-touch-icon.png"],
      workbox: {
        // ── Critical: new SW takes control immediately, no waiting ──
        skipWaiting: true,
        clientsClaim: true,
        // ── Remove stale cached files from old deployments ──
        cleanupOutdatedCaches: true,
        // ── THE stale-site bug ──────────────────────────────────────────────
        // vite-plugin-pwa auto-registers an SPA "navigateFallback" route bound
        // to the build-time-precached index.html, and Workbox matches routes
        // in registration order — that auto route wins over the NetworkFirst
        // rule below for every navigation, permanently freezing whatever
        // index.html happened to be precached when the SW first installed.
        // Disabling it (and excluding index.html from the precache manifest)
        // forces navigations through NetworkFirst instead, so a page load
        // always tries the network first and only falls back to cache if
        // the network is unreachable.
        navigateFallback: undefined,
        globIgnores: ["**/index.html"],
        // ── Never cache the HTML shell or SW itself ──
        navigateFallbackDenylist: [/^\/assets\/pdf\//, /\.pdf$/],
        runtimeCaching: [
          {
            // HTML navigation: always go to network first, fall back to cache
            urlPattern: ({ request }: { request: Request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              networkTimeoutSeconds: 5,
              cacheName: "html-cache",
              cacheableResponse: { statuses: [200] },
            },
          },
          {
            // Hashed JS/CSS assets: cache first (they never change for a given hash)
            urlPattern: /\/assets\/.+\.(js|css|woff2?)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets",
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [200] },
            },
          },
          {
            // Images: stale-while-revalidate
            urlPattern: /\/assets\/.+\.(png|jpg|jpeg|svg|gif|webp|ico)$/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "image-cache",
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [200] },
            },
          },
        ],
      },
      manifest: {
        name: "Rokib Al Dhin Raadh Portfolio",
        short_name: "Raadh",
        description: "Independent AI Researcher Portfolio",
        theme_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/favicon/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/favicon/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-charts': ['recharts'],
          'vendor-katex': ['katex', 'react-katex'],
          'vendor-bootstrap': ['bootstrap'],
          'vendor-swiper': ['swiper'],
          'vendor-particles': ['@tsparticles/react', '@tsparticles/slim'],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import", "global-builtin", "mixed-decls"],
      },
    },
  },
});
