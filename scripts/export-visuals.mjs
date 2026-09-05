import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const root = fileURLToPath(new URL('../', import.meta.url))
const output = path.resolve(process.argv[2] ?? path.join(root, '../../outputs/RANTO-视觉素材'))
await mkdir(output, { recursive: true })
const mime = { '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.woff': 'font/woff' }
async function inlineAsset(url) {
  const file = path.join(root, 'public', url.replace(/^\.\//, ''))
  return 'data:' + mime[path.extname(file)] + ';base64,' + (await readFile(file)).toString('base64')
}
const cssName = (await readdir(path.join(root, 'dist/assets'))).find(name => name.endsWith('.css'))
let css = await readFile(path.join(root, 'dist/assets', cssName), 'utf8')
for (const match of [...css.matchAll(/url\((?:"|')?([^)'"\s]+)(?:"|')?\)/g)]) {
  if (match[1].includes('fonts/')) css = css.replace(match[0], `url("${await inlineAsset(match[1].replace(/^\.\.\//, ''))}")`)
}
const server = await createServer({ root, configFile: false, plugins: [react()], server: { middlewareMode: true }, appType: 'custom' })
try {
  const { DetailPlate, DesignBoard } = await server.ssrLoadModule('/src/components/Visuals.tsx')
  const { copy } = await server.ssrLoadModule('/src/content.ts')
  for (const id of ['multipurpose', 'bathroom', 'lingerie', 'packaging']) {
    let markup = renderToStaticMarkup(React.createElement(id === 'packaging' ? DesignBoard : DetailPlate, { id, t: copy.zh }))
    for (const match of [...markup.matchAll(/src="(\.\/images\/[^"]+)"/g)]) markup = markup.replace(match[0], `src="${await inlineAsset(match[1])}"`)
    markup = markup.replaceAll('loading="lazy"', 'loading="eager"')
    const title = id === 'packaging' ? 'RANTO 包装设计图版' : `RANTO ${copy.zh.products[id].name}细节图版`
    const html = `<!doctype html><html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>${css}\nbody{margin:0}.export-canvas{width:1440px;min-height:1000px;padding:50px 60px;display:flex;align-items:center;background:#fcfcfa}.export-canvas>figure,.export-canvas>section{width:100%}.export-canvas .design-section{padding:0}.export-canvas .section-heading{margin-bottom:25px}.export-canvas .detail-whole{height:460px}.export-canvas .detail-crop{height:210px}.export-canvas .detail-plate{padding:30px 40px}.export-canvas .detail-plate-body{padding-block:30px}.export-canvas .design-object{height:325px}</style></head><body><main class="export-canvas">${markup}</main></body></html>`
    await writeFile(path.join(output, `RANTO-${id}-图版.html`), html)
    console.log(title)
  }
} finally { await server.close() }
