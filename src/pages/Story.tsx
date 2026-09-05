import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ContactBand, TextLink } from '../components/Brand'
import { Inspiration } from '../components/Editorial'
import { SpaceImage, DesignBoard, SceneVisual } from '../components/Visuals'

export default function Story() {
  const { locale, setLocale, t } = useCopy('story')
  return <Chrome page="story" locale={locale} setLocale={setLocale} t={t}>
    <section className="editorial-hero story-hero section-wrap"><div><p className="eyebrow">{t.nav.story}</p><h1>{t.story.title}</h1><p className="intro-text">{t.story.intro}</p></div><SpaceImage t={t} eager /></section>
    <Inspiration t={t} />
    <section className="story-body story-body--expanded section-wrap"><h2>{t.philosophy.title}</h2><div>{t.story.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="story-values-note section-wrap" aria-label={t.philosophy.eyebrow}><dl>{t.story.principles.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.body}</dd></div>)}</dl></section>
    <DesignBoard t={t} />
    <section className="story-closing story-closing--visual"><SceneVisual id="lingerie" t={t} /><div><h2>{t.story.closing}</h2><TextLink href="./products.html">{t.hero.cta}</TextLink></div></section>
    <ContactBand t={t} />
  </Chrome>
}
