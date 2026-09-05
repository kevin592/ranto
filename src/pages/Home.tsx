import { ArrowRight } from 'lucide-react'
import Chrome from '../components/Chrome'
import { useCopy } from '../components/bits'
import { ProductFamily, ProductCards, ContactBand, TextLink } from '../components/Brand'
import { FAQSection } from '../components/Editorial'
import { CareSpace, SceneStories } from '../components/Visuals'

export default function Home() {
  const { locale, setLocale, t } = useCopy('home')
  return <Chrome page="home" locale={locale} setLocale={setLocale} t={t}>
    <section className="home-hero">
      <div className="hero-copy"><p className="eyebrow">{t.hero.eyebrow}</p><h1>{t.hero.title}</h1><p className="hero-description">{t.hero.body}</p><a className="button button--blue" href="./products.html">{t.hero.cta}<ArrowRight size={19} strokeWidth={1.5} /></a></div>
      <div className="hero-visual"><ProductFamily t={t} /><div className="hero-visual-caption"><span>{t.productUI.comingSoon}</span><span>500 ml</span></div></div>
    </section>
    <section className="collection-section section-wrap"><div className="section-heading"><h2>{t.collection.title}</h2><p>{t.collection.intro}</p></div><ProductCards t={t} /><TextLink href="./products.html">{t.collection.viewAll}</TextLink></section>
    <CareSpace t={t} />
    <SceneStories t={t} />
    <section className="home-care-reading section-wrap"><div><h2>{t.philosophy.title}</h2><p>{t.philosophy.body}</p><TextLink href="./quality.html">{t.nav.quality}</TextLink></div><dl className="home-care-principles">{t.philosophy.points.map(point => <div key={point.title}><dt>{point.title}</dt><dd>{point.body}</dd></div>)}</dl></section>
    <FAQSection t={t} limit={2} />
    <ContactBand t={t} />
  </Chrome>
}
