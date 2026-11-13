import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    ? {
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
