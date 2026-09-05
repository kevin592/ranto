import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { copy } from './src/content'
import type { PageId } from './src/types'

const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [inspectAttr(), react(), {
    name: 'ranto-page-metadata',
    transformIndexHtml(html) {
      const page = html.match(/data-page="([a-z]+)"/)?.[1] as PageId | undefined
      if (!page || !copy.en.meta[page]) throw new Error('Unknown RANTO page')
      const meta = copy.en.meta[page]
      return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
        .replace(/(<meta (?:name|property)="(?:description|og:description)" content=")[^"]*("\s*\/?>)/g, (_, start, end) => start + escapeHtml(meta.description) + end)
        .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, (_, start, end) => start + escapeHtml(meta.title) + end)
        .replace(/(<meta name="theme-color" content=")[^"]*/, '$1#fcfcfa')
    },
  }],
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
