import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// IMPORTANTE: Para GitHub Pages, defina a base conforme seu repositório
// Se for: username.github.io/sitecraft-ai/ → base: '/sitecraft-ai/'
// Se for: username.github.io/ (user site) → base: '/'
const base = '/sitecraft-ai/';

export default defineConfig({
  base: base,
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