import { ArrowUpRight } from 'lucide-react'
import { products, productIds } from '../products'
import type { ProductId, SiteCopy } from '../types'

export function BrandReadingGuide({ t }: { t: SiteCopy }) {
  const paths = ['story', 'quality', 'global']
  return <section className="brand-reading section-wrap"><div className="section-heading"><h2>{t.depth.home.title}</h2><p>{t.depth.home.intro}</p></div><div className="brand-reading-links">{t.depth.home.items.map((item, i) => <a key={item.title} href={`./${paths[i]}.html`}><span className="reading-number">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div><ArrowUpRight size={23} strokeWidth={1.5} aria-hidden="true" /></a>)}</div></section>
}

export function ProductComparison({ t, onSelect }: { t: SiteCopy; onSelect: (id: ProductId) => void }) {
  return <section className="product-comparison section-wrap" id="compare"><div className="section-heading"><h2>{t.depth.comparison.title}</h2><p>{t.depth.comparison.intro}</p></div><div className="comparison-columns">{productIds.map(id => <article key={id}><h3>{t.products[id].name}</h3><dl><div><dt>{t.productUI.usage}</dt><dd>{t.products[id].uses.join(' / ')}</dd></div><div><dt>{t.depth.comparison.format}</dt><dd>{t.depth.comparison[products[id].format]}</dd></div><div><dt>{t.productUI.volume}</dt><dd>{products[id].volume}</dd></div></dl><button className="text-link" onClick={() => onSelect(id)} aria-label={`${t.productUI.details}: ${t.products[id].name}`}>{t.productUI.details}<ArrowUpRight size={18} aria-hidden="true" /></button></article>)}</div></section>
}

export function EvidenceReadingGuide({ t }: { t: SiteCopy }) {
  return <section className="evidence-reading section-wrap"><div className="section-heading"><h2>{t.depth.reading.title}</h2><p>{t.depth.reading.intro}</p></div><ol>{t.depth.reading.items.map((item, i) => <li key={item.title}><span className="reading-number" aria-hidden="true">0{i + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></li>)}</ol></section>
}

export function LaunchPreparation({ t }: { t: SiteCopy }) {
  return <section className="launch-preparation section-wrap"><div className="section-heading"><h2>{t.depth.preparation.title}</h2><p>{t.depth.preparation.intro}</p></div><dl>{t.depth.preparation.items.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.body}</dd></div>)}</dl></section>
}
