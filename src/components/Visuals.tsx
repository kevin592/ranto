import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Packshot, TextLink } from './Brand'
import { editorialMedia, sceneMedia } from '../media'
import { productIds, products } from '../products'
import type { ProductId, SiteCopy } from '../types'

export function SpaceImage({ t, eager = false }: { t: SiteCopy; eager?: boolean }) {
  return <figure className="space-image"><img src={editorialMedia.careSpace} alt={t.visual.spaceTitle} width="1536" height="1024" loading={eager ? 'eager' : 'lazy'} /><figcaption>{t.visual.conceptCaption}</figcaption></figure>
}
export function CareSpace({ t }: { t: SiteCopy }) {
  return <section className="care-space-feature section-wrap"><SpaceImage t={t} /><div><p className="eyebrow">{t.inspiration.eyebrow}</p><h2>{t.visual.spaceTitle}</h2><p>{t.visual.spaceBody}</p><TextLink href="./story.html#inspiration">{t.nav.story}</TextLink></div></section>
}
export function SceneVisual({ id, t }: { id: ProductId; t: SiteCopy }) {
  return <figure className={`scene-visual scene-visual--${id}`}><div className="scene-composition"><img className="scene-background" src={sceneMedia[id]} alt={t.visual.sceneLabels[id]} width="1536" height="1024" loading="lazy" decoding="async" /></div><figcaption>{t.visual.conceptCaption}</figcaption></figure>
}
export function SceneStories({ t }: { t: SiteCopy }) {
  return <section className="scene-stories section-wrap"><div className="section-heading"><h2>{t.scenes.title}</h2><p>{t.scenes.body}</p></div><div className="scene-story-grid">{productIds.map((id, i) => <article key={id}><SceneVisual id={id} t={t} /><div className="scene-story-caption"><div><h3>{t.scenes.items[i].title}</h3><p>{t.scenes.items[i].body}</p></div><a href={`./products.html#${id}`} aria-label={`${t.productUI.details}: ${t.products[id].name}`}><ArrowUpRight size={24} strokeWidth={1.5} /></a></div></article>)}</div></section>
}
export function DetailPlate({ id, t }: { id: ProductId; t: SiteCopy }) {
  return <figure className={`detail-plate detail-plate--${id}`} data-visual={`detail-${id}`}><div className="detail-plate-header"><img src="./images/logo.svg" alt="RANTO" width="100" height="50" /><span>500 ml</span></div><div className="detail-plate-body"><div className="detail-whole"><Packshot id={id} name={t.products[id].name} /></div><div className="detail-insets">{t.visual.details[id].map((item, i) => <div className="detail-inset" key={item.title}><div className={`detail-crop detail-crop--${i}`}><Packshot id={id} name={t.products[id].name} /></div><div><span className="detail-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.body}</p></div></div>)}</div></div><figcaption><strong>{t.products[id].name}</strong><span>{t.visual.productPreviewCaption}</span></figcaption></figure>
}
export function DetailCollection({ t }: { t: SiteCopy }) {
  const [selected, select] = useState<ProductId>('multipurpose')
  return <section className="detail-collection section-wrap" id="details"><div className="section-heading"><h2>{t.visual.detailTitle}</h2><p>{t.visual.detailIntro}</p></div><div className="visual-selector" aria-label={t.visual.detailTitle}>{productIds.map(id => <button key={id} onClick={() => select(id)} aria-pressed={id === selected}>{t.products[id].name}</button>)}</div><DetailPlate id={selected} t={t} /></section>
}
export function DesignBoard({ t }: { t: SiteCopy }) {
  const images = [editorialMedia.designBottle, editorialMedia.designTrigger, editorialMedia.designLabel]
  return <section className="design-section section-wrap" id="packaging"><div className="section-heading"><h2>{t.visual.designTitle}</h2><p>{t.visual.designIntro}</p></div><figure className="design-board" data-visual="packaging"><div className="design-board-top"><img src="./images/logo.svg" alt="RANTO" width="110" height="55" /><span>{t.quality.evidenceTypes.design}</span></div><div className="design-board-grid">{t.visual.designSteps.map((step, i) => <div className={`design-step design-step--${i}`} key={step.title}><div className="design-object"><img src={images[i]} alt={step.title} loading="lazy" /></div><div className="design-step-text"><span className="detail-index">0{i + 1}</span><h3>{step.title}</h3><p>{step.body}</p></div></div>)}</div><figcaption>{t.visual.productPreviewCaption}</figcaption></figure></section>
}
export function ProductGallery({ id, t }: { id: ProductId; t: SiteCopy }) {
  const [view, setView] = useState<'pack' | 'scene' | 'detail'>('pack')
  return <div className="product-gallery"><div className="visual-selector" aria-label={t.productUI.packView}>{(['pack', 'scene', 'detail'] as const).map(key => <button key={key} onClick={() => setView(key)} aria-pressed={view === key}>{t.productUI.gallery[key]}</button>)}</div><div className="gallery-stage">{view === 'pack' ? <div className="gallery-pack"><img src={products[id].image} alt={`${t.products[id].name} · ${t.productUI.packView}`} /><p>{t.productUI.labelNote}</p><a className="text-link packaging-link" href={products[id].image} target="_blank" rel="noopener noreferrer">{t.productUI.fullImage}<ArrowUpRight size={16} /></a></div> : view === 'scene' ? <SceneVisual id={id} t={t} /> : <DetailPlate id={id} t={t} />}</div></div>
}
