import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // Use environment variable for base path in case you deploy under a subpath
  base: process.env.VITE_BASE_PATH ?? "/",

  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },

  plugins: [
    react(),
    // Only include tempo plugin in development
    ...(process.env.NODE_ENV === "development" ? [tempo()] : []),
  ],

  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    // Only enable allowedHosts when Tempo is active in dev
    allowedHosts: process.env.VITE_TEMPO === "true" ? true : undefined,
  },

  build: {
    target: "esnext", // ensure modern JS output
    sourcemap: false, // optional, faster build
  },
});
