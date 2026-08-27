import Chrome, { pageHrefs } from '../components/Chrome'
import Reveal from '../components/Reveal'
import { Media, SectionLabel, useCopy } from '../components/bits'

export default function Global() {
  const { locale, setLocale, t } = useCopy()

  return (
    <Chrome page="global" locale={locale} setLocale={setLocale} nav={t.nav} verify={t.verify} footerBody={t.footerBody} footerLocation={t.footerLocation}>
      <section className="page-hero">
        <Reveal><SectionLabel>{t.globalEyebrow}</SectionLabel><h1>{t.globalTitle}</h1><p>{t.globalBody}</p></Reveal>
      </section>

      <section id="global" className="split-section global-section">
        <Media src="./images/brand/retail-global.jpg" alt="Consumer shopping in an international supermarket" parallax />
        <Reveal className="split-copy"><SectionLabel>{t.partnersEyebrow}</SectionLabel><h2>{t.partnersTitle}</h2><p>{t.partnersBody}</p></Reveal>
      </section>

      <section id="markets" className="content-section markets-section">
        <Reveal><SectionLabel>ONE BRAND / LOCAL RELEVANCE</SectionLabel><h2>{t.marketsTitle}</h2></Reveal>
        <Reveal className="market-grid stagger">{t.markets.map(([title, label, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><strong>{label}</strong><p>{body}</p></article>)}</Reveal>
      </section>

      <section className="content-section scene-host">
        <Reveal className="scene-grid stagger">
          <article><Media src="./images/brand/retail-global.jpg" alt="Offline and specialty retail" /><div className="scene-copy"><SectionLabel>OFFLINE & SPECIALTY RETAIL</SectionLabel><h3>{t.offlineTitle}</h3><p>{t.offlineBody}</p></div></article>
          <article><Media src="./images/brand/hospitality.jpg" alt="Hospitality and professional environment" /><div className="scene-copy"><SectionLabel>HOSPITALITY & PROFESSIONAL USE</SectionLabel><h3>{t.hospitalityTitle}</h3><p>{t.hospitalityBody}</p></div></article>
        </Reveal>
      </section>

      <section className="ecosystem-section">
        <Reveal className="ecosystem-copy"><SectionLabel light>PARTNER ECOSYSTEM</SectionLabel><h2>{t.ecosystemTitle}</h2><p>{t.ecosystemBody}</p></Reveal>
        <Reveal className="ecosystem-list stagger">{t.ecosystem.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</Reveal>
      </section>

      <section className="content-section network-section">
        <div className="marquee" aria-label={t.partnersEyebrow}>
          <div className="marquee-track">
            {[...t.partnerTypes, ...t.partnerTypes].map((type, index) => <span key={index}>{type}</span>)}
          </div>
        </div>
        <Reveal><p className="verification-note">{t.partnerDisclaimer}</p></Reveal>
      </section>

      <section className="next-up"><a href={pageHrefs[4]}><span>{t.nextLabel}</span><h2>{t.nav[4]}</h2></a></section>
    </Chrome>
  )
}
