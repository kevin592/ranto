import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ContactBand } from '../components/Brand'
import { FAQSection } from '../components/Editorial'
import { DetailCollection } from '../components/Visuals'
import { EvidenceSection } from '../components/Evidence'
import { EvidenceReadingGuide } from '../components/PageDepth'

export default function Quality() {
  const { locale, setLocale, t } = useCopy('quality')
  return <Chrome page="quality" locale={locale} setLocale={setLocale} t={t}>
    <section className="page-intro section-wrap"><p className="eyebrow">{t.nav.quality}</p><h1>{t.quality.title}</h1><p>{t.quality.intro}</p></section>
    <DetailCollection t={t} />
    <EvidenceReadingGuide t={t} />
    <EvidenceSection t={t} />
    <FAQSection t={t} id="care-questions" />
    <ContactBand t={t} />
  </Chrome>
}
