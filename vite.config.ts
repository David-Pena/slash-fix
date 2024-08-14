import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "PathFixer",
      fileName: (format) => `path-fixer.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [
        "yargs",
        "clipboardy",
        "node:fs/promises",
        "node:fs",
        "fs",
        "node:path",
        "path",
        "util",
        "assert",
        "url",
      ],
      output: {
        globals: {
          yargs: "yargs",
          clipboardy: "clipboardy",
          "node:fs": "node:fs",
          "node:fs/promises": "node:fs/promises",
          fs: "fs",
          "node:path": "node:path",
          path: "path",
          util: "util",
          assert: "assert",
          url: "url",
        },
      },
    },
    outDir: "dist",
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  optimizeDeps: {
    exclude: ["yargs", "clipboardy"], // Ensure clipboardy is not optimized or bundled
  },
  define: {
    "process.env.NODE_ENV": '"node"', // Set the environment to Node.js
  },
});
