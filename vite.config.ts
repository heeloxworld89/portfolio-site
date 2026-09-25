import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // The site used to install an offline service worker. Visitors who still
    // have it get this self-destroying replacement, which unregisters itself
    // and clears its caches. New visitors never get a service worker at all.
    VitePWA({ selfDestroying: true, injectRegister: false, manifest: false }),
  ],
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
