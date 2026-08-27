import { ArrowRight } from 'lucide-react'
import Chrome, { pageHrefs } from '../components/Chrome'
import Reveal from '../components/Reveal'
import { Media, SectionLabel, useCopy } from '../components/bits'

export default function Home() {
  const { locale, setLocale, t } = useCopy()
  const chapterTitles = t.nav

  return (
    <Chrome page="home" locale={locale} setLocale={setLocale} nav={t.nav} verify={t.verify} footerBody={t.footerBody} footerLocation={t.footerLocation}>
      <section className="hero">
        <div className="hero-copy">
          <SectionLabel>{t.heroEyebrow}</SectionLabel>
          <h1>{t.heroTitle}</h1><p>{t.heroBody}</p>
          <div className="button-row">
            <a className="button button--blue" href={pageHrefs[0]}>{t.discover}</a>
            <a className="button button--outline" href={pageHrefs[2]}>PRODUCT SYSTEMS</a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Folded towels in a refined Japanese interior">
          <div className="hero-image-note"><strong>RANTO PROFESSIONAL STANDARD</strong><span>A quiet system for cleaner living.</span></div>
        </div>
      </section>

      <Reveal><section className="proof-strip" aria-label="Brand proof points">
        {t.proof.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section></Reveal>

      <section className="content-section chapters-section">
        <Reveal><SectionLabel>{t.homeIndexLabel}</SectionLabel></Reveal>
        <div className="chapters">
          <Reveal className="chapters-media"><Media src="./images/brand/heritage-home.jpg" alt="Quiet Japanese hospitality interior" parallax /></Reveal>
          <Reveal className="chapter-list stagger">
            {t.homeChapterLines.map((line, index) => (
              <a key={line} href={pageHrefs[index]} className="chapter-row">
                <span className="chapter-number">0{index + 1}</span>
                <span className="chapter-body"><strong>{chapterTitles[index]}</strong><p>{line}</p></span>
                <ArrowRight size={20} strokeWidth={1.25} className="chapter-arrow" />
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="statement" aria-label="RANTO principle">
        <Media src="./images/brand/heritage-japan.jpg" alt="Traditional Japanese craft and material culture" parallax />
        <Reveal className="statement-copy"><h2>{t.manifesto}</h2></Reveal>
      </section>

      <section className="contact-cta"><Reveal className="cta-inner"><div><SectionLabel light>{t.ctaEyebrow}</SectionLabel><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><a className="button button--light" href="mailto:hello@ranto.co.th">{t.ctaButton}</a></Reveal></section>
    </Chrome>
  )
}
