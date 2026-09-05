import { Mail, BriefcaseBusiness } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ProductFamily } from '../components/Brand'
import { ContactChannels } from '../components/ContactChannels'
import '../editorial.css'

export default function Official() {
  const { locale, setLocale, t } = useCopy('official')
  return <Chrome page="official" locale={locale} setLocale={setLocale} t={t}>
    <section className="contact-hero section-wrap"><div><p className="eyebrow">{t.nav.official}</p><h1>{t.contact.title}</h1><p className="intro-text">{t.contact.intro}</p></div><div className="contact-visual"><ProductFamily t={t} compact /></div></section>
    <section className="channel-section section-wrap"><div className="section-heading"><h2>{t.contact.channelsTitle}</h2><p>{t.contact.pendingBody}</p></div><ContactChannels t={t} /></section>
    <section className="contact-information section-wrap"><article><Mail size={26} strokeWidth={1.4} aria-hidden="true" /><h2>{t.contact.consumerTitle}</h2><p>{t.contact.consumerBody}</p><ul>{t.contact.prepareItems.map(item => <li key={item}>{item}</li>)}</ul></article><article><BriefcaseBusiness size={26} strokeWidth={1.4} aria-hidden="true" /><h2>{t.contact.cooperationTitle}</h2><p>{t.contact.cooperationBody}</p><h3 className="business-checklist-title">{t.depth.business.title}</h3><ul>{t.depth.business.items.map(item => <li key={item}>{item}</li>)}</ul><div className="contact-launch"><span className="availability">{t.productUI.comingSoon}</span><p>{t.contact.availability}</p></div></article></section>
  </Chrome>
}
