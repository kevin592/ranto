import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ProductFamily, ContactBand, TextLink } from '../components/Brand'
import { Inspiration } from '../components/Editorial'

export default function Story() {
  const { locale, setLocale, t } = useCopy('story')
  return <Chrome page="story" locale={locale} setLocale={setLocale} t={t}>
    <section className="editorial-hero section-wrap"><div><p className="eyebrow">{t.nav.story}</p><h1>{t.story.title}</h1><p className="intro-text">{t.story.intro}</p></div><div className="editorial-family"><ProductFamily t={t} compact /></div></section>
    <Inspiration t={t} />
    <section className="story-body story-body--expanded section-wrap"><h2>{t.philosophy.title}</h2><div>{t.story.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="story-values-note section-wrap" aria-label={t.philosophy.eyebrow}><dl>{t.story.principles.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.body}</dd></div>)}</dl></section>
    <section className="story-closing"><img src="./images/launch/lifestyle.webp" alt="" loading="lazy" width="1536" height="1024" /><div><h2>{t.story.closing}</h2><TextLink href="./products.html">{t.hero.cta}</TextLink></div></section>
    <ContactBand t={t} />
  </Chrome>
}
