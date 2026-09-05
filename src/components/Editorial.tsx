import { useId } from 'react'
import { ArrowRight, ArrowUpRight, Plus } from 'lucide-react'
import { TextLink } from './Brand'
import { productIds } from '../products'
import type { ProductId, SiteCopy } from '../types'
import '../editorial.css'

export function Inspiration({ t, compact = false }: { t: SiteCopy; compact?: boolean }) {
  const headingId = useId()
  if (compact) {
    const note = t.inspiration.items[0]
    return <section className="inspiration-preview section-wrap" aria-labelledby={headingId}>
      <div className="inspiration-preview-heading"><p className="eyebrow">{t.inspiration.eyebrow}</p><h2 id={headingId}>{t.inspiration.title}</h2><p>{t.inspiration.body}</p></div>
      <div className="inspiration-preview-note"><h3>{note.title}</h3><p>{note.body}</p><TextLink href="./story.html#inspiration">{t.nav.story}</TextLink></div>
    </section>
  }
  return <section className="inspiration-story section-wrap" id="inspiration" aria-labelledby={headingId}>
    <div className="editorial-section-heading"><p className="eyebrow">{t.inspiration.eyebrow}</p><h2 id={headingId}>{t.inspiration.title}</h2><p>{t.inspiration.body}</p></div>
    <div className="inspiration-chapters">{t.inspiration.items.map((item, index) => <article key={item.title} className="inspiration-chapter">
      <span className="chapter-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p>
    </article>)}</div>
  </section>
}

export function CareRoutines({ t }: { t: SiteCopy }) {
  const headingId = useId()
  return <section className="care-routines section-wrap" aria-labelledby={headingId}>
    <div className="editorial-section-heading"><h2 id={headingId}>{t.routines.title}</h2><p>{t.routines.intro}</p></div>
    <ol className="routine-sequence">{t.routines.items.map((item, index) => <li key={item.title}>
      <span className="routine-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.body}</p></div>
    </li>)}</ol>
  </section>
}

export function FAQSection({ t, limit, id }: { t: SiteCopy; limit?: number; id?: string }) {
  const headingId = useId()
  const items = limit ? t.faq.items.slice(0, limit) : t.faq.items
  return <section className={`care-faq section-wrap${limit ? ' care-faq--preview' : ''}`} id={id} aria-labelledby={headingId}>
    <div className="editorial-section-heading"><h2 id={headingId}>{t.faq.title}</h2><p>{t.faq.intro}</p></div>
    <div className="faq-list">{items.map((item, index) => <details key={item.title} className="faq-item" open={index === 0}>
      <summary><span>{item.title}</span><Plus size={21} strokeWidth={1.5} aria-hidden="true" /></summary><div className="faq-answer"><p>{item.body}</p></div>
    </details>)}</div>
    {limit && <TextLink href="./quality.html#care-questions">{t.nav.quality}</TextLink>}
  </section>
}

export function SelectionGuide({ t, onSelect }: { t: SiteCopy; onSelect: (id: ProductId) => void }) {
  const headingId = useId()
  return <section className="selection-guide section-wrap" aria-labelledby={headingId}>
    <div className="editorial-section-heading"><h2 id={headingId}>{t.selection.title}</h2><p>{t.selection.intro}</p></div>
    <div className="selection-list">{productIds.map((id, index) => <article className="selection-row" key={id}>
      <div><h3>{t.selection.items[index].title}</h3><p>{t.selection.items[index].body}</p></div>
      <button className="selection-product" onClick={() => onSelect(id)} aria-label={`${t.productUI.details}: ${t.products[id].name}`}><span><span className="selection-category">{t.products[id].category}</span><span className="selection-product-name">{t.products[id].name}</span></span><ArrowUpRight size={22} strokeWidth={1.5} aria-hidden="true" /></button>
    </article>)}</div>
  </section>
}

export function LocalLife({ t }: { t: SiteCopy }) {
  const headingId = useId()
  return <section className="local-life section-wrap" aria-labelledby={headingId}>
    <div className="editorial-section-heading"><h2 id={headingId}>{t.localLife.title}</h2><p>{t.localLife.intro}</p></div>
    <div className="local-life-notes">{t.localLife.items.map((item, index) => <article className={index === 0 ? 'local-life-primary' : 'local-life-secondary'} key={item.title}><h3>{item.title}</h3><p>{item.body}</p>{index === 0 && <a className="text-link" href="./products.html">{t.collection.viewAll}<ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" /></a>}</article>)}</div>
  </section>
}
