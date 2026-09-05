import { ArrowUpRight, Mail } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ProductFamily } from '../components/Brand'

export default function Official() {
  const { locale, setLocale, t } = useCopy('official')
  return <Chrome page="official" locale={locale} setLocale={setLocale} t={t}>
    <section className="contact-hero section-wrap"><div><p className="eyebrow">{t.nav.official}</p><h1>{t.contact.title}</h1><p className="intro-text">{t.contact.intro}</p><a className="contact-email" href="mailto:hello@ranto.co.th">hello@ranto.co.th<ArrowUpRight strokeWidth={1.3} /></a><p className="contact-email-note">{t.contact.emailBody}</p></div><div className="contact-visual"><ProductFamily t={t} compact /></div></section>
    <section className="contact-information section-wrap"><article><Mail size={26} strokeWidth={1.4} /><h2>{t.contact.cooperationTitle}</h2><p>{t.contact.cooperationBody}</p><div className="contact-launch"><span className="availability">{t.productUI.comingSoon}</span><p>{t.contact.availability}</p></div></article><article><h2>{t.contact.prepareTitle}</h2><ul>{t.contact.prepareItems.map(item => <li key={item}>{item}</li>)}</ul><a className="button button--blue" href="mailto:hello@ranto.co.th">{t.contact.emailLabel}<ArrowUpRight size={18} /></a></article></section>
  </Chrome>
}
