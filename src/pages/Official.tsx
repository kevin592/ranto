import { useState, type FormEvent } from 'react'
import Chrome from '../components/Chrome'
import Reveal from '../components/Reveal'
import { SectionLabel, useCopy } from '../components/bits'

export default function Official() {
  const { locale, setLocale, t } = useCopy()
  const [verification, setVerification] = useState('')
  const [verificationResult, setVerificationResult] = useState('')

  const submitVerification = (event: FormEvent) => {
    event.preventDefault()
    setVerificationResult(verification.trim() ? t.searchResult : t.emptyResult)
  }

  return (
    <Chrome page="official" locale={locale} setLocale={setLocale} nav={t.nav} verify={t.verify} footerBody={t.footerBody} footerLocation={t.footerLocation}>
      <section className="page-hero">
        <Reveal><SectionLabel>{t.officialEyebrow}</SectionLabel><h1>{t.officialTitle}</h1><p>{t.officialBody}</p></Reveal>
      </section>

      <section id="official" className="official-section">
        <Reveal className="verify-card">
          <form onSubmit={submitVerification}><label htmlFor="verification">CHANNEL VERIFICATION</label><input id="verification" value={verification} onChange={(event) => setVerification(event.target.value)} placeholder={t.placeholder} /><button className="button button--blue" type="submit">{t.verifyButton}</button>{verificationResult && <p className="form-result" role="status">{verificationResult}</p>}</form>
        </Reveal>
        <Reveal className="official-rows stagger">{t.officialRows.map(([name, status]) => <div key={name}><span>{name}</span><strong>{status}</strong></div>)}</Reveal>
        <Reveal className="official-rows channels">
          <div><span>LINE</span><strong>@ranto.th</strong></div>
          <div><span>EMAIL</span><strong>hello@ranto.co.th</strong></div>
          <div><span>GLOBAL BRAND SITE</span><strong>kevin592.github.io/ranto</strong></div>
        </Reveal>
      </section>

      <section className="content-section confidence-section">
        <Reveal><SectionLabel>{t.confidenceEyebrow}</SectionLabel><h2>{t.confidenceTitle}</h2></Reveal>
        <Reveal className="confidence-grid stagger">{t.confidence.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</Reveal>
      </section>

      <section className="contact-cta"><Reveal className="cta-inner"><div><SectionLabel light>{t.ctaEyebrow}</SectionLabel><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><a className="button button--light" href="mailto:hello@ranto.co.th">{t.ctaButton}</a></Reveal></section>
    </Chrome>
  )
}
