import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";
// Use VITE_BASE_PATH env var if set, otherwise default to repo name pattern
const base = process.env.VITE_BASE_PATH || (isProduction ? "/vibrant-otter-cheer/" : "/");

export default defineConfig({
  base,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});