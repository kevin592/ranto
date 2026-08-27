import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Check, Menu, X } from 'lucide-react'
import Reveal from './components/Reveal'
import { copy, localeNames, type Locale } from './content'
import './App.css'

const products = [
  { number: '01', title: 'LAUNDRY', image: './images/series-laundry.jpg' },
  { number: '02', title: 'KITCHEN', image: './images/series-kitchen.jpg' },
  { number: '03', title: 'BATHROOM', image: './images/series-care.jpg' },
  { number: '04', title: 'HOME', image: './images/series-home.jpg' },
  { number: '05', title: 'SHOE CARE', image: './images/series-shoe.jpg' },
  { number: '06', title: 'PODS', image: './images/series-pods.jpg' },
]

function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem('ranto-global-lang') as Locale | null
    if (saved && ['en', 'ja', 'th', 'zh'].includes(saved)) return saved
    const language = navigator.language.toLowerCase()
    if (language.startsWith('zh')) return 'zh'
    if (language.startsWith('ja')) return 'ja'
    if (language.startsWith('th')) return 'th'
  } catch {
    // Browser storage can be unavailable in privacy mode.
  }
  return 'en'
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`section-label${light ? ' section-label--light' : ''}`}>{children}</p>
}

function Media({ src, alt, parallax = false }: { src: string; alt: string; parallax?: boolean }) {
  return (
    <div className={`media${parallax ? ' media--parallax' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [verification, setVerification] = useState('')
  const [verificationResult, setVerificationResult] = useState('')
  const sentinel = useRef<HTMLDivElement>(null)
  const t = copy[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('ranto-global-lang', locale)
  }, [locale])

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navigate = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  const submitVerification = (event: FormEvent) => {
    event.preventDefault()
    setVerificationResult(verification.trim() ? t.searchResult : t.emptyResult)
  }

  const ids = ['heritage', 'quality', 'products', 'global', 'official']

  return (
    <div className="site-shell">
      <div ref={sentinel} className="header-sentinel" aria-hidden="true" />
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} data-menu-open={menuOpen}>
        <button className="brand-lockup" onClick={() => scrollToSection('top')} aria-label="RANTO home">
          <img src="./images/logo.png" alt="RANTO" />
          <span>JAPAN / GLOBAL CARE</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {t.nav.map((item, index) => <button key={item} onClick={() => navigate(ids[index])}>{item}</button>)}
        </nav>
        <div className="header-actions">
          <label className="sr-only" htmlFor="locale">Language</label>
          <select id="locale" value={locale} onChange={(event) => setLocale(event.target.value as Locale)}>
            {(Object.keys(localeNames) as Locale[]).map((key) => <option key={key} value={key}>{localeNames[key]}</option>)}
          </select>
          <button className="button button--outline desktop-verify" onClick={() => navigate('official')}>{t.verify}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}<span>MENU</span>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
            <nav aria-label="Mobile navigation">
              {t.nav.map((item, index) => (
                <button key={item} onClick={() => navigate(ids[index])}>
                  <span className="mobile-menu-index">0{index + 1}</span>{item}
                </button>
              ))}
            </nav>
            <div className="mobile-languages" aria-label="Language">
              {(Object.keys(localeNames) as Locale[]).map((key) => <button key={key} className={locale === key ? 'is-active' : ''} onClick={() => setLocale(key)} aria-pressed={locale === key}>{localeNames[key]}</button>)}
            </div>
            <button className="button button--blue" onClick={() => navigate('official')}>{t.verify}</button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <SectionLabel>{t.heroEyebrow}</SectionLabel>
            <h1>{t.heroTitle}</h1><p>{t.heroBody}</p>
            <div className="button-row">
              <button className="button button--blue" onClick={() => navigate('heritage')}>{t.discover}</button>
              <button className="button button--outline" onClick={() => navigate('products')}>PRODUCT SYSTEMS</button>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="Folded towels in a refined Japanese interior">
            <div className="hero-image-note"><strong>RANTO PROFESSIONAL STANDARD</strong><span>A quiet system for cleaner living.</span></div>
          </div>
        </section>

        <Reveal><section className="proof-strip" aria-label="Brand proof points">
          {t.proof.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </section></Reveal>

        <section id="heritage" className="split-section heritage-section">
          <Media src="./images/brand/heritage-home.jpg" alt="Quiet Japanese hospitality interior" parallax />
          <Reveal className="split-copy"><SectionLabel>{t.heritageEyebrow}</SectionLabel><h2>{t.heritageTitle}</h2><p>{t.heritageBody}</p><button className="text-link" onClick={() => scrollToSection('heritage-detail')}>{t.heritageLink}<ArrowRight /></button></Reveal>
        </section>

        <section id="heritage-detail" className="content-section pillars-section">
          <Reveal><div className="section-heading"><div><SectionLabel>JAPAN PROFESSIONAL HERITAGE</SectionLabel><h2>{t.heritageTitle}</h2></div><p>{t.heritageBody}</p></div></Reveal>
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

        <section id="quality" className="quality-feature">
          <Reveal className="quality-copy"><SectionLabel light>{t.qualityEyebrow}</SectionLabel><h2>{t.qualityTitle}</h2><p>{t.qualityBody}</p><ul>{t.qualityPoints.map((point) => <li key={point}><Check size={15} strokeWidth={1.5} />{point}</li>)}</ul><button className="button button--blue" onClick={() => scrollToSection('process')}>{t.qualityLink}</button></Reveal>
          <Media src="./images/brand/factory-quality.jpg" alt="Qualified production and manufacturing environment" parallax />
        </section>

        <section id="process" className="content-section process-section">
          <Reveal><div className="section-heading"><div><SectionLabel>{t.processEyebrow}</SectionLabel><h2>{t.processTitle}</h2></div><p>{t.qualityBody}</p></div></Reveal>
          <Reveal className="process-list stagger">{t.process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</Reveal>
        </section>

        <section className="lab-section">
          <Media src="./images/brand/laboratory.jpg" alt="Laboratory testing for material compatibility" parallax />
          <Reveal className="lab-copy"><SectionLabel>MATERIAL CARE & TESTING</SectionLabel><h2>{t.labTitle}</h2><p>{t.qualityBody}</p><div className="mini-list">{t.qualityPoints.slice(0, 3).map((point, index) => <div key={point}><span>0{index + 1}</span><p>{point}</p></div>)}</div></Reveal>
        </section>

        <section id="products" className="content-section products-section">
          <Reveal><div className="section-heading"><div><SectionLabel>{t.productsEyebrow}</SectionLabel><h2>{t.productsTitle}</h2></div><p>{t.productsBody}</p></div></Reveal>
          <Reveal className="product-grid stagger">{products.map((product, index) => (
            <article key={product.title}><Media src={product.image} alt={`RANTO ${product.title} system`} /><div className="product-copy"><span>{product.number}</span><h3>{product.title}</h3><p>{t.productDescriptions[index]}</p><button onClick={() => navigate('official')}>{t.verify}<ArrowRight /></button></div></article>
          ))}</Reveal>
        </section>

        <section className="content-section network-section">
          <Reveal><SectionLabel>{t.partnersEyebrow}</SectionLabel><div className="section-heading"><h2>{t.partnersTitle}</h2><p>{t.partnersBody}</p></div></Reveal>
          <div className="marquee" aria-label={t.partnersEyebrow}>
            <div className="marquee-track">
              {[...t.partnerTypes, ...t.partnerTypes].map((type, index) => <span key={index}>{type}</span>)}
            </div>
          </div>
          <Reveal><p className="verification-note">{t.partnerDisclaimer}</p></Reveal>
        </section>

        <section id="global" className="split-section global-section">
          <Media src="./images/brand/retail-global.jpg" alt="Consumer shopping in an international supermarket" parallax />
          <Reveal className="split-copy"><SectionLabel>{t.globalEyebrow}</SectionLabel><h2>{t.globalTitle}</h2><p>{t.globalBody}</p><button className="text-link" onClick={() => scrollToSection('markets')}>{t.globalLink}<ArrowRight /></button></Reveal>
        </section>

        <section id="markets" className="content-section markets-section">
          <Reveal><SectionLabel>ONE BRAND / LOCAL RELEVANCE</SectionLabel><h2>{t.marketsTitle}</h2></Reveal>
          <Reveal className="market-grid stagger">{t.markets.map(([title, label, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><strong>{label}</strong><p>{body}</p></article>)}</Reveal>
        </section>

        <section className="content-section scene-host">
          <Reveal className="scene-grid stagger">
            <article><Media src="./images/brand/retail-global.jpg" alt="Offline and specialty retail" /><div className="scene-copy"><SectionLabel>OFFLINE & SPECIALTY RETAIL</SectionLabel><h3>{t.offlineTitle}</h3><p>{t.partnersBody}</p></div></article>
            <article><Media src="./images/brand/hospitality.jpg" alt="Hospitality and professional environment" /><div className="scene-copy"><SectionLabel>HOSPITALITY & PROFESSIONAL USE</SectionLabel><h3>{t.hospitalityTitle}</h3><p>{t.placesBody}</p></div></article>
          </Reveal>
        </section>

        <section className="ecosystem-section">
          <Reveal className="ecosystem-copy"><SectionLabel light>PARTNER ECOSYSTEM</SectionLabel><h2>{t.ecosystemTitle}</h2><p>{t.ecosystemBody}</p></Reveal>
          <Reveal className="ecosystem-list stagger">{t.ecosystem.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</Reveal>
        </section>

        <section className="split-section repeat-section">
          <Reveal className="split-copy"><SectionLabel>{t.repeatEyebrow}</SectionLabel><h2>{t.repeatTitle}</h2><p>{t.repeatBody}</p><div className="repeat-points"><span>REFILL</span><span>CONCENTRATE</span><span>REUSE</span></div></Reveal>
          <Media src="./images/refill.jpg" alt="RANTO refill pack and bottle" parallax />
        </section>

        <section className="content-section confidence-section">
          <Reveal><SectionLabel>{t.confidenceEyebrow}</SectionLabel><h2>{t.confidenceTitle}</h2></Reveal>
          <Reveal className="confidence-grid stagger">{t.confidence.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</Reveal>
        </section>

        <section id="official" className="official-section">
          <Reveal className="official-copy"><SectionLabel>{t.officialEyebrow}</SectionLabel><h2>{t.officialTitle}</h2><p>{t.officialBody}</p></Reveal>
          <Reveal className="verify-card">
            <form onSubmit={submitVerification}><label htmlFor="verification">CHANNEL VERIFICATION</label><input id="verification" value={verification} onChange={(event) => setVerification(event.target.value)} placeholder={t.placeholder} /><button className="button button--blue" type="submit">{t.verifyButton}</button>{verificationResult && <p className="form-result" role="status">{verificationResult}</p>}</form>
          </Reveal>
          <Reveal className="official-rows stagger">{t.officialRows.map(([name, status]) => <div key={name}><span>{name}</span><strong>{status}</strong></div>)}</Reveal>
        </section>

        <section className="contact-cta"><Reveal className="cta-inner"><div><SectionLabel light>{t.ctaEyebrow}</SectionLabel><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><a className="button button--light" href="mailto:hello@ranto.co.th">{t.ctaButton}</a></Reveal></section>
      </main>

      <footer>
        <Reveal className="footer-brand"><h2>RANTO</h2><p>{t.footerBody}</p></Reveal>
        <div className="footer-links">{t.nav.map((item, index) => <button key={item} onClick={() => navigate(ids[index])}>{item}</button>)}</div>
        <div className="footer-bottom"><span>© 2026 RANTO GLOBAL</span><span>{t.footerLocation}</span></div>
      </footer>

      <div className="grain" aria-hidden="true" />
    </div>
  )
}
