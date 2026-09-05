import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

const projectDir = fileURLToPath(new URL('../', import.meta.url))
const outputDir = path.resolve(projectDir, process.argv[2] ?? 'dist')
const siteUrl = new URL('https://kevin592.github.io/ranto/')
const pages = {
  'index.html': 'home',
  'story.html': 'story',
  'quality.html': 'quality',
  'products.html': 'products',
  'global.html': 'global',
  'official.html': 'official',
}
const errors = new Set()
const resources = new Set()
const files = []
const label = (file) => path.relative(outputDir, file).split(path.sep).join('/')
const fail = (file, message) => errors.add(label(file) + ': ' + message)
const decodeHtml = (value) => value.replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#39;/g, "'")

async function collectFiles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) await collectFiles(file)
    else if (entry.isFile()) files.push(file)
  }
}

function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
      .map((match) => [match[1].toLowerCase(), decodeHtml(match[2] ?? match[3] ?? match[4])]),
  )
}

async function checkReference(reference, source, { documentRelative = false, module = false } = {}) {
  let value = decodeHtml(reference.trim())
  if (!value || value.startsWith('#') || /^(?:data|blob|mailto|tel|javascript):/i.test(value)) return
  if (/^(?:https?:)?\/\//i.test(value)) {
    const absolute = new URL(value, siteUrl)
    if (absolute.origin !== siteUrl.origin || !absolute.pathname.startsWith(siteUrl.pathname)) return
    value = absolute.pathname.slice(siteUrl.pathname.length) + absolute.search
    documentRelative = true
  } else if (/^[a-z][a-z\d+.-]*:/i.test(value)) {
    fail(source, 'Unsupported local resource scheme: ' + reference)
    return
  }
  if (module && !documentRelative && !/^(?:\.{1,2}\/|\/)/.test(value)) {
    fail(source, 'Unresolved module specifier: ' + reference)
    return
  }
  try {
    value = decodeURIComponent(value.split(/[?#]/)[0])
  } catch {
    fail(source, 'Invalid resource URL: ' + reference)
    return
  }
  if (!value) return
  if (value.startsWith('/')) {
    if (!value.startsWith(siteUrl.pathname)) {
      fail(source, 'Root-absolute URL breaks the /ranto/ deployment: ' + reference)
    }
    value = value.startsWith(siteUrl.pathname) ? value.slice(siteUrl.pathname.length) : value.slice(1)
    documentRelative = true
  }
  const target = path.resolve(documentRelative ? outputDir : path.dirname(source), value)
  const relative = path.relative(outputDir, target)
  if (relative.startsWith('..' + path.sep) || relative === '..' || path.isAbsolute(relative)) {
    fail(source, 'Resource escapes the build directory: ' + reference)
    return
  }
  resources.add(target)
  try {
    const info = await stat(target)
    if (!info.isFile()) fail(source, 'Resource is not a file: ' + reference)
  } catch {
    fail(source, 'Missing resource: ' + reference)
  }
}

async function checkHtml(file, page) {
  let html
  try {
    html = await readFile(file, 'utf8')
  } catch {
    fail(file, 'Missing page')
    return
  }
  const tags = [...html.matchAll(/<([a-z][\w:-]*)\b[^>]*>/gi)]
    .map(([tag, name]) => ({ name: name.toLowerCase(), attrs: attributes(tag) }))
  const root = tags.find(({ attrs }) => attrs.id === 'root')
  if (root?.attrs['data-page'] !== page) fail(file, 'Expected data-page="' + page + '"')
  if (tags.find(({ name }) => name === 'html')?.attrs.lang !== 'en') fail(file, 'Missing English default language')
  const modules = tags.filter(({ name, attrs }) => name === 'script' && attrs.type === 'module' && attrs.src)
  if (!modules.length) fail(file, 'Missing built module entry')
  if (modules.some(({ attrs }) => /(?:^|\/)src\//.test(attrs.src))) fail(file, 'HTML still points at source code')
  const stylesheets = tags.filter(({ name, attrs }) => name === 'link' && attrs.rel?.split(/\s+/).includes('stylesheet'))
  if (!stylesheets.length) fail(file, 'Missing built stylesheet')
  if (/fonts\.(?:googleapis|gstatic)\.com/i.test(html)) fail(file, 'Remote Google Fonts reference remains')

  const metadata = new Map(tags.filter(({ name }) => name === 'meta')
    .map(({ attrs }) => [attrs.property ?? attrs.name, attrs.content ?? '']))
  const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim()
  for (const key of ['description', 'og:title', 'og:description', 'og:image', 'og:url']) {
    if (!metadata.get(key)?.trim()) fail(file, 'Missing ' + key)
  }
  if (!title.startsWith('RANTO')) fail(file, 'Missing RANTO page title')
  const expectedCanonical = new URL(page === 'home' ? './' : path.basename(file), siteUrl).href
  const canonical = tags.find(({ name, attrs }) => name === 'link' && attrs.rel === 'canonical')?.attrs.href
  if (canonical !== expectedCanonical || metadata.get('og:url') !== expectedCanonical) {
    fail(file, 'Canonical and og:url must both be ' + expectedCanonical)
  }
  const image = metadata.get('og:image') ?? ''
  const allowedShareImages = ['multipurpose', 'bathroom', 'lingerie-white']
    .map((product) => new URL('images/launch/' + product + '.png', siteUrl).href)
  if (!allowedShareImages.includes(image)) {
    fail(file, 'Share image must be an absolute URL to one of the three real launch products on the canonical site')
  }
  const favicon = tags.find(({ name, attrs }) => name === 'link' && attrs.rel === 'icon')?.attrs
  if (favicon?.href !== './images/logo.svg' || favicon?.type !== 'image/svg+xml') {
    fail(file, 'Expected the transparent SVG logo favicon')
  }
  const publicMetadata = [title, ...metadata.values()].join(' ')
  const obsoleteClaims = [
    /\b(?:japan|japanese)\b/i,
    /\bsix (?:care |controlled )?(?:systems|categories|stages)\b/i,
    /\b(?:shoe care|pods|traceable release|professional first|verified markets)\b/i,
    /\b(?:verify an official|channel verification|quality and manufacturing|brand heritage)\b/i,
  ]
  if (obsoleteClaims.some((pattern) => pattern.test(publicMetadata))) fail(file, 'Obsolete or unsubstantiated brand metadata remains')

  const checks = []
  for (const { name, attrs } of tags) {
    for (const attribute of ['src', 'poster', 'data']) {
      if (attrs[attribute] && (attribute !== 'data' || name === 'object')) {
        checks.push(checkReference(attrs[attribute], file))
      }
    }
    if (name === 'link' && attrs.href && !/^(?:canonical|preconnect|dns-prefetch)$/.test(attrs.rel ?? '')) {
      checks.push(checkReference(attrs.href, file))
    }
    if (name === 'a' && attrs.href) checks.push(checkReference(attrs.href, file))
    if (attrs.srcset && !attrs.srcset.startsWith('data:')) {
      for (const candidate of attrs.srcset.split(',')) {
        checks.push(checkReference(candidate.trim().split(/\s+/)[0], file))
      }
    }
    if (attrs.style) checks.push(checkCss(attrs.style, file))
  }
  for (const [key, value] of metadata) {
    if (['og:image', 'og:video', 'og:audio', 'twitter:image'].includes(key)) checks.push(checkReference(value, file))
  }
  for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) checks.push(checkCss(match[1], file))
  await Promise.all(checks)
}

async function checkCss(css, file) {
  const content = css.replace(/\/\*[\s\S]*?\*\//g, '')
  const urls = [...content.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)\s]+))\s*\)/gi)]
    .map((match) => match[1] ?? match[2] ?? match[3])
  urls.push(...[...content.matchAll(/@import\s*(?:"([^"]*)"|'([^']*)')/gi)]
    .map((match) => match[1] ?? match[2]))
  await Promise.all(urls.map((url) => checkReference(url, file)))
}

async function checkJavaScript(content, file) {
  const source = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS)
  const checks = []
  const literal = (node) => node && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) ? node.text : undefined
  const visit = (node) => {
    if ((ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) && node.moduleSpecifier) {
      const specifier = literal(node.moduleSpecifier)
      if (specifier !== undefined) checks.push(checkReference(specifier, file, { module: true }))
    }
    if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) {
      const specifier = literal(node.arguments[0])
      if (specifier !== undefined) checks.push(checkReference(specifier, file, { module: true }))
    }
    if (ts.isNewExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 'URL') {
      const url = literal(node.arguments?.[0])
      if (url !== undefined && node.arguments?.[1]?.getText(source) === 'import.meta.url') {
        checks.push(checkReference(url, file))
      }
    }
    // UI asset strings resolve against the document. Imports and
    // new URL(..., import.meta.url) resolve against the JavaScript file.
    const value = literal(node)
    if (value && /^(?:(?:\.\/)?(?:images|fonts|assets)\/|\/(?:ranto\/)?(?:images|fonts|assets)\/)/.test(value)) {
      checks.push(checkReference(value, file, { documentRelative: true }))
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  await Promise.all(checks)
}

try {
  await collectFiles(outputDir)
  await Promise.all(Object.entries(pages).map(([filename, page]) => checkHtml(path.join(outputDir, filename), page)))
  await checkReference('./.nojekyll', path.join(outputDir, 'index.html'))
  for (const file of files) {
    const extension = path.extname(file)
    if (['.js', '.mjs', '.css'].includes(extension)) {
      const content = await readFile(file, 'utf8')
      if (extension === '.css') await checkCss(content, file)
      else await checkJavaScript(content, file)
    }
  }
} catch (error) {
  errors.add('Could not inspect build: ' + error.message)
}

if (errors.size) {
  console.error('Build verification failed (' + errors.size + ' problems):\n' + [...errors].sort().map((error) => '- ' + error).join('\n'))
  process.exitCode = 1
} else {
  console.log('Build verified: ' + Object.keys(pages).length + ' pages and ' + resources.size + ' local resources. Metadata and resource references are consistent.')
}
