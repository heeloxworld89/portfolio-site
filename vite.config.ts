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
      includeAssets: ["favicon/favicon.svg", "favicon/apple-touch-icon.png"],
      workbox: {
        navigateFallbackDenylist: [/^\/assets\/pdf\//, /\.pdf$/],
      },
      manifest: {
        name: "Rokib Al Dhin Raadh Portfolio",
        short_name: "Raadh",
        description: "Independent AI Researcher Portfolio",
        theme_color: "#ffffff",
        display: "standalone", // ✅ ADD THIS
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
