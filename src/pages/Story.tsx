import Chrome, { pageHrefs } from '../components/Chrome'
import Reveal from '../components/Reveal'
import { Media, SectionLabel, useCopy } from '../components/bits'

export default function Story() {
  const { locale, setLocale, t } = useCopy()

  return (
    <Chrome page="story" locale={locale} setLocale={setLocale} nav={t.nav} verify={t.verify} footerBody={t.footerBody} footerLocation={t.footerLocation}>
      <section className="page-hero">
        <Reveal><SectionLabel>{t.nav[0]}</SectionLabel><h1>{t.heritageTitle}</h1><p>{t.storyIntro}</p></Reveal>
      </section>

      <section className="split-section heritage-section">
        <Media src="./images/brand/heritage-home.jpg" alt="Quiet Japanese hospitality interior" parallax />
        <Reveal className="split-copy split-copy--statement"><SectionLabel>{t.heritageEyebrow}</SectionLabel><p className="statement-body">{t.heritageBody}</p></Reveal>
      </section>

      <section id="heritage-detail" className="content-section pillars-section">
        <Reveal><SectionLabel>JAPAN PROFESSIONAL HERITAGE</SectionLabel></Reveal>
        <Reveal className="pillar-grid stagger">{t.heritagePillars.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</Reveal>
      </section>

      <section className="content-section places-section">
        <Reveal><div className="section-heading"><div><SectionLabel>{t.placesEyebrow}</SectionLabel><h2>{t.placesTitle}</h2></div><p>{t.placesBody}</p></div></Reveal>
        <Reveal className="place-grid stagger">
          {["./images/series-laundry.jpg", "./images/series-kitchen.jpg", "./images/series-home.jpg"].map((image, index) => (
            <article key={image}><Media src={image} alt={t.places[index]?.[0] ?? 'RANTO product'} /><SectionLabel>{t.places[index]?.[0]}</SectionLabel><h3>{t.places[index]?.[1]}</h3></article>
          ))}
        </Reveal>
      </section>

      <section className="next-up"><a href={pageHrefs[1]}><span>{t.nextLabel}</span><h2>{t.nav[1]}</h2></a></section>
    </Chrome>
  )
}
