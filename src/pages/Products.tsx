import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Plus, X } from 'lucide-react'
import Chrome, { pageHrefs } from '../components/Chrome'
import Reveal from '../components/Reveal'
import { Media, SectionLabel, useCopy } from '../components/bits'
import { lockPageScroll } from '../lib/scroll'

const products = [
  { number: '01', title: 'LAUNDRY', image: './images/series-laundry.jpg' },
  { number: '02', title: 'KITCHEN', image: './images/series-kitchen.jpg' },
  { number: '03', title: 'BATHROOM', image: './images/series-care.jpg' },
  { number: '04', title: 'HOME', image: './images/series-home.jpg' },
  { number: '05', title: 'SHOE CARE', image: './images/series-shoe.jpg' },
  { number: '06', title: 'PODS', image: './images/series-pods.jpg' },
]

export default function Products() {
  const { locale, setLocale, t } = useCopy()
  const [activeProduct, setActiveProduct] = useState<number | null>(null)
  const overlayClose = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    lockPageScroll(activeProduct !== null)
    return () => lockPageScroll(false)
  }, [activeProduct])

  useEffect(() => {
    if (activeProduct === null) return
    overlayClose.current?.focus()
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setActiveProduct(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [activeProduct])

  const overlayProduct = activeProduct !== null ? products[activeProduct] : null

  return (
    <Chrome page="products" locale={locale} setLocale={setLocale} nav={t.nav} verify={t.verify} footerBody={t.footerBody} footerLocation={t.footerLocation}>
      <section className="page-hero">
        <Reveal><SectionLabel>{t.productsEyebrow}</SectionLabel><h1>{t.productsTitle}</h1><p>{t.productsBody}</p></Reveal>
      </section>

      <section id="products" className="content-section products-section">
        <Reveal className="product-grid stagger">{products.map((product, index) => (
          <article key={product.title}>
            <div className="media product-media">
              <img src={product.image} alt={`RANTO ${product.title} system`} loading="lazy" decoding="async" />
              <button className="product-open" onClick={() => setActiveProduct(index)} aria-label={`${product.title} details`}><Plus size={18} strokeWidth={1.25} /></button>
            </div>
            <div className="product-copy">
              <span>{product.number}</span>
              <h3><button className="product-title-button" onClick={() => setActiveProduct(index)}>{product.title}</button></h3>
              <p>{t.productDescriptions[index]}</p>
              <button onClick={() => { window.location.href = pageHrefs[4] }}>{t.verify}<ArrowRight /></button>
            </div>
          </article>
        ))}</Reveal>
      </section>

      <section className="split-section repeat-section">
        <Reveal className="split-copy"><SectionLabel>{t.repeatEyebrow}</SectionLabel><h2>{t.repeatTitle}</h2><p>{t.repeatBody}</p><div className="repeat-points"><span>REFILL</span><span>CONCENTRATE</span><span>REUSE</span></div></Reveal>
        <Media src="./images/refill.jpg" alt="RANTO refill pack and bottle" parallax />
      </section>

      {overlayProduct && activeProduct !== null && (
        <div className="product-overlay" role="dialog" aria-modal="true" aria-label={`${overlayProduct.title} details`}>
          <button ref={overlayClose} className="product-overlay-close" onClick={() => setActiveProduct(null)} aria-label="Close details"><X size={20} strokeWidth={1.25} /></button>
          <div className="product-overlay-media">
            <img src={overlayProduct.image} alt={`RANTO ${overlayProduct.title} system`} />
          </div>
          <div className="product-overlay-copy">
            <span className="product-overlay-eyebrow">CARE SYSTEM {overlayProduct.number}</span>
            <h2>{overlayProduct.title}</h2>
            <p className="product-overlay-desc">{t.productDescriptions[activeProduct]}</p>
            <p className="product-overlay-ritual">{t.productRituals[activeProduct]}</p>
            <button className="text-link" onClick={() => { setActiveProduct(null); window.location.href = pageHrefs[4] }}>{t.verify}<ArrowRight /></button>
          </div>
        </div>
      )}

      <section className="next-up"><a href={pageHrefs[3]}><span>{t.nextLabel}</span><h2>{t.nav[3]}</h2></a></section>
    </Chrome>
  )
}
