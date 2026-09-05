import { ScanLine, Layers3, HandHeart } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ContactBand } from '../components/Brand'
import { FAQSection } from '../components/Editorial'
import { DetailCollection } from '../components/Visuals'
import { EvidenceSection } from '../components/Evidence'

const icons = [ScanLine, Layers3, HandHeart]
export default function Quality() {
  const { locale, setLocale, t } = useCopy('quality')
  return <Chrome page="quality" locale={locale} setLocale={setLocale} t={t}>
    <section className="page-intro section-wrap"><p className="eyebrow">{t.nav.quality}</p><h1>{t.quality.title}</h1><p>{t.quality.intro}</p></section>
    <DetailCollection t={t} />
    <section className="approach-list approach-list--compact section-wrap">{t.quality.items.map((item, index) => { const Icon = icons[index % icons.length]; return <article key={item.title}><Icon size={28} strokeWidth={1.3} /><h2>{item.title}</h2><p>{item.body}</p></article> })}</section>
    <EvidenceSection t={t} />
    <FAQSection t={t} id="care-questions" />
    <ContactBand t={t} />
  </Chrome>
}
