import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ContactBand, ProductCards } from '../components/Brand'
import { SelectionGuide } from '../components/Editorial'
import { ProductGallery, SceneStories } from '../components/Visuals'
import { ProductComparison } from '../components/PageDepth'
import { isProductId, products } from '../products'
import { keepDialogFocus } from '../lib/dialog'
import type { ProductId } from '../types'

export default function Products() {
  const { locale, setLocale, t } = useCopy('products')
  const [selected, setSelected] = useState<ProductId | null>(() => { const id = location.hash.slice(1); return isProductId(id) ? id : null })
  const dialog = useRef<HTMLDialogElement>(null)
  const restoreFocus = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const onHash = () => { const id = location.hash.slice(1); setSelected(isProductId(id) ? id : null) }
    window.addEventListener('hashchange', onHash)
    window.addEventListener('popstate', onHash)
    return () => { window.removeEventListener('hashchange', onHash); window.removeEventListener('popstate', onHash) }
  }, [])
  useEffect(() => {
    if (selected) { dialog.current?.showModal(); document.body.style.overflow = 'hidden' }
    else { dialog.current?.close(); document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [selected])
  function open(id: ProductId) {
    restoreFocus.current = document.activeElement as HTMLElement
    history.replaceState(null, '', `#${id}`)
    setSelected(id)
  }
  function close() {
    setSelected(null)
    history.replaceState(null, '', location.pathname + location.search)
    restoreFocus.current?.focus()
  }
  const product = selected ? t.products[selected] : null
  return <Chrome page="products" locale={locale} setLocale={setLocale} t={t}>
    <section className="page-intro section-wrap"><p className="eyebrow">{t.nav.products}</p><h1>{t.productUI.title}</h1><p>{t.productUI.intro}</p></section>
    <section className="section-wrap product-catalog"><ProductCards t={t} onSelect={open} /><div className="collection-note"><span className="availability">{t.productUI.comingSoon}</span><p>{t.contact.availability}</p></div></section>
    <SelectionGuide t={t} onSelect={open} />
    <ProductComparison t={t} onSelect={open} />
    <SceneStories t={t} />
    <ContactBand t={t} />
    <dialog className="product-dialog" ref={dialog} aria-labelledby="product-dialog-title" onKeyDown={keepDialogFocus} onCancel={event => { event.preventDefault(); close() }} onClick={event => { if (event.target === event.currentTarget) close() }}>
      {selected && product && <><div className="product-dialog-toolbar"><button className="dialog-close icon-button" onClick={close} aria-label={t.common.close} autoFocus><X size={24} /></button></div><div className="product-dialog-content"><ProductGallery key={selected} id={selected} t={t} /><div className="product-detail-copy"><p className="eyebrow">{product.category}</p><h2 id="product-dialog-title">{product.name}</h2><div className="product-detail-status"><span>{products[selected].volume}</span><span className="availability">{t.productUI[products[selected].status]}</span></div><p className="detail-intro">{product.description}</p><h3 className="technical-heading">{t.productUI.technicalTitle}</h3><dl>{product.ingredients && <div><dt>{t.productUI.ingredients}</dt><dd>{product.ingredients}</dd></div>}{product.suitability && <div><dt>{t.productUI.suitability}</dt><dd>{product.suitability}</dd></div>}<div><dt>{t.productUI.usage}</dt><dd>{product.uses.join(' / ')}</dd></div><div><dt>{t.productUI.directions}</dt><dd>{product.directions}</dd></div><div><dt>{t.productUI.precautions}</dt><dd>{product.precautions}</dd></div>{product.origin && <div><dt>{t.productUI.origin}</dt><dd>{product.origin}</dd></div>}</dl><a href="./official.html" className="button button--blue">{t.common.contact}<ArrowUpRight size={18} /></a></div></div></>}
    </dialog>
  </Chrome>
}
