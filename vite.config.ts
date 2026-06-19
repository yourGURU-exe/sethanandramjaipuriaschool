import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("react") || id.includes("react-dom")) return "react";
          if (id.includes("three") || id.includes("@react-three")) return "three";
          if (id.includes("framer-motion") || id.includes("gsap") || id.includes("lenis") || id.includes("motion")) return "motion";
          if (id.includes("lucide-react") || id.includes("@tanstack/react-query")) return "ui";
        }
      }
    }
  },
  server: {
    port: 5173,
    strictPort: false
  }
});
