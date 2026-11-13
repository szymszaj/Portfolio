import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {
        // Bundle używany tylko przez scripts/prerender.mjs w Node.
        minify: false,
        emptyOutDir: true,
      }
    : {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (
                id.includes("node_modules/react-dom") ||
                id.includes("node_modules/react/")
              ) {
                return "vendor";
              }
              if (id.includes("node_modules/framer-motion")) {
                return "motion";
              }
            },
          },
        },
        minify: "terser",
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
}));
