import { ArrowUpRight, Mail } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ProductFamily } from '../components/Brand'
import '../editorial.css'

export default function Official() {
  const { locale, setLocale, t } = useCopy('official')
  return <Chrome page="official" locale={locale} setLocale={setLocale} t={t}>
    <section className="contact-hero section-wrap"><div><p className="eyebrow">{t.nav.official}</p><h1>{t.contact.title}</h1><p className="intro-text">{t.contact.intro}</p><a className="contact-email" href="mailto:hello@ranto.co.th">hello@ranto.co.th<ArrowUpRight strokeWidth={1.3} /></a><p className="contact-email-note">{t.contact.emailBody}</p></div><div className="contact-visual"><ProductFamily t={t} compact /></div></section>
    <section className="contact-information contact-information--consumer section-wrap"><article className="contact-consumer"><Mail size={26} strokeWidth={1.4} aria-hidden="true" /><h2>{t.contact.consumerTitle}</h2><p>{t.contact.consumerBody}</p><a className="text-link consumer-link" href={`mailto:hello@ranto.co.th?subject=${encodeURIComponent(t.contact.consumerTitle)}`}>{t.contact.emailLabel}<ArrowUpRight size={18} aria-hidden="true" /></a><div className="contact-launch"><span className="availability">{t.productUI.comingSoon}</span><p>{t.contact.availability}</p></div></article><article><h2>{t.contact.prepareTitle}</h2><ul>{t.contact.prepareItems.map(item => <li key={item}>{item}</li>)}</ul></article></section>
    <section className="contact-cooperation section-wrap"><div className="contact-cooperation-inner"><h2>{t.contact.cooperationTitle}</h2><div><p>{t.contact.cooperationBody}</p><a className="text-link" href={`mailto:hello@ranto.co.th?subject=${encodeURIComponent(t.contact.cooperationTitle)}`}>{t.contact.emailLabel}<ArrowUpRight size={16} aria-hidden="true" /></a></div></div></section>
  </Chrome>
}
