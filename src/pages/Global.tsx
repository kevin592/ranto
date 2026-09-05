import { ArrowUpRight } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ContactBand, ProductFamily } from '../components/Brand'
import { LocalLife } from '../components/Editorial'
import { localeNames } from '../content'
import type { Locale } from '../types'

export default function Global() {
  const { locale, setLocale, t } = useCopy('global')
  return <Chrome page="global" locale={locale} setLocale={setLocale} t={t}>
    <section className="page-intro section-wrap"><p className="eyebrow">{t.nav.global}</p><h1>{t.global.title}</h1><p>{t.global.intro}</p></section>
    <section className="global-feature section-wrap"><div className="global-visual"><ProductFamily t={t} compact /></div><div><span className="availability">{t.productUI.comingSoon}</span><h2>{t.global.marketTitle}</h2><p>{t.global.marketBody}</p><a href="./products.html" className="text-link">{t.collection.viewAll}<ArrowUpRight size={19} /></a></div></section>
    <LocalLife t={t} />
    <section className="global-values section-wrap"><article><h2>{t.global.visionTitle}</h2><p>{t.global.visionBody}</p></article><article><h2>{t.global.languagesTitle}</h2><p>{t.global.languagesBody}</p><div className="global-languages">{(Object.keys(localeNames) as Locale[]).map(key => <button key={key} onClick={() => setLocale(key)} aria-pressed={locale === key}>{localeNames[key]}</button>)}</div></article></section>
    <ContactBand t={t} />
  </Chrome>
}
