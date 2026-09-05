import type { ReactNode } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { products, productIds } from '../products'
import type { ProductId, SiteCopy } from '../types'

// CSS crops the supplied photographs for display. Product artwork is never recreated.
export function Packshot({ id, name, eager = false }: { id: ProductId; name: string; eager?: boolean }) {
  return <div className={`packshot packshot--${id}`}><img src={products[id].displayImage} alt={name} width={id === 'lingerie' ? 1600 : 1448} height={id === 'lingerie' ? 1600 : 1086} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager && id === 'multipurpose' ? 'high' : 'auto'} decoding="async" /></div>
}

export function ProductFamily({ t, compact = false }: { t: SiteCopy; compact?: boolean }) {
  return <div className={`product-family${compact ? ' product-family--compact' : ''}`} aria-label={t.collection.title}>
    {productIds.map(id => <div className={`family-position family-position--${id}`} key={id}><Packshot id={id} name={t.products[id].name} eager={!compact} /></div>)}
  </div>
}

export function ProductCards({ t, onSelect }: { t: SiteCopy; onSelect?: (id: ProductId) => void }) {
  return <div className="product-grid">{productIds.map(id => {
    const product = t.products[id]
    const content = <><div className={`product-card-image product-card-image--${id}`}><Packshot id={id} name={product.name} /></div><div className="product-card-meta"><span>{product.category}</span><span>{products[id].volume}</span></div><div className="product-card-heading"><h3>{product.name}</h3><ArrowUpRight size={22} strokeWidth={1.5} /></div><p className="product-card-copy">{product.short}</p><span className="availability">{t.productUI[products[id].status]}</span></>
    return onSelect ? <button key={id} className="product-card" onClick={() => onSelect(id)} aria-label={`${t.productUI.details}: ${product.name}`}>{content}</button> : <a key={id} className="product-card" href={`./products.html#${id}`}>{content}</a>
  })}</div>
}

export function ContactBand({ t }: { t: SiteCopy }) {
  return <section className="contact-band"><div><h2>{t.footer.headline}</h2><p>{t.contact.cooperationBody}</p></div><a href="./official.html" className="button button--blue">{t.footer.contact}<ArrowUpRight size={18} strokeWidth={1.5} /></a></section>
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href}>{children}<ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" /></a>
}
