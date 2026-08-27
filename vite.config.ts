import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react()],
  build: {
    rollupOptions: {
      input: {
        home: path.resolve(__dirname, 'index.html'),
        story: path.resolve(__dirname, 'story.html'),
        quality: path.resolve(__dirname, 'quality.html'),
        products: path.resolve(__dirname, 'products.html'),
        global: path.resolve(__dirname, 'global.html'),
        official: path.resolve(__dirname, 'official.html'),
      },
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
