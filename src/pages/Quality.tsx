import { ScanLine, Layers3, HandHeart } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { Packshot, ContactBand, TextLink } from '../components/Brand'
import { CareRoutines, FAQSection } from '../components/Editorial'

const icons = [ScanLine, Layers3, HandHeart]
export default function Quality() {
  const { locale, setLocale, t } = useCopy('quality')
  return <Chrome page="quality" locale={locale} setLocale={setLocale} t={t}>
    <section className="page-intro section-wrap"><p className="eyebrow">{t.nav.quality}</p><h1>{t.quality.title}</h1><p>{t.quality.intro}</p></section>
    <section className="approach-list section-wrap">{t.quality.items.map((item, index) => { const Icon = icons[index % icons.length]; return <article key={item.title}><Icon size={32} strokeWidth={1.3} /><h2>{item.title}</h2><p>{item.body}</p></article> })}</section>
    <CareRoutines t={t} />
    <section className="label-section quality-label section-wrap"><div className="label-image"><Packshot id="lingerie" name={t.products.lingerie.name} /></div><div><h2>{t.quality.readLabelTitle}</h2><p>{t.quality.readLabelBody}</p><TextLink href="./products.html">{t.collection.viewAll}</TextLink></div></section>
    <FAQSection t={t} id="care-questions" />
    <ContactBand t={t} />
  </Chrome>
}
