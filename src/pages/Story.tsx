import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ProductFamily, ContactBand, TextLink } from '../components/Brand'

export default function Story() {
  const { locale, setLocale, t } = useCopy('story')
  return <Chrome page="story" locale={locale} setLocale={setLocale} t={t}>
    <section className="editorial-hero section-wrap"><div><p className="eyebrow">{t.nav.story}</p><h1>{t.story.title}</h1><p className="intro-text">{t.story.intro}</p></div><div className="editorial-family"><ProductFamily t={t} compact /></div></section>
    <section className="story-body section-wrap"><h2>{t.philosophy.title}</h2><div>{t.story.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="story-principles section-wrap">{t.story.principles.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</section>
    <section className="story-closing"><img src="./images/launch/lifestyle.webp" alt="" loading="lazy" width="1536" height="1024" /><div><h2>{t.story.closing}</h2><TextLink href="./products.html">{t.hero.cta}</TextLink></div></section>
    <ContactBand t={t} />
  </Chrome>
}
