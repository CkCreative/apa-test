import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      customElement: true, // Enable custom element build
    }),
  ],
  build: {
    lib: {
      entry: "./src/App.vue", // Entry point for your component
      name: "ChuckNorrisWidget", // Name of the generated library (used for UMD/IIFE builds)
      fileName: (format) => `chucknorris-widget.${format}.js`, // Output file names
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
