import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Check, Menu, X } from 'lucide-react'
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

export default function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  const [menuOpen, setMenuOpen] = useState(false)
  const [verification, setVerification] = useState('')
  const [verificationResult, setVerificationResult] = useState('')
  const t = copy[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem('ranto-global-lang', locale)
  }, [locale])

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
      <header className="site-header">
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
          <button className="button button--blue desktop-verify" onClick={() => navigate('official')}>{t.verify}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}<span>MENU</span>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {t.nav.map((item, index) => <button key={item} onClick={() => navigate(ids[index])}>{item}<ArrowRight size={16} /></button>)}
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

        <section className="proof-strip" aria-label="Brand proof points">
          {t.proof.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section id="heritage" className="split-section heritage-section">
          <img src="./images/brand/heritage-home.jpg" alt="Quiet Japanese hospitality interior" />
          <div className="split-copy"><SectionLabel>{t.heritageEyebrow}</SectionLabel><h2>{t.heritageTitle}</h2><p>{t.heritageBody}</p><button className="text-link" onClick={() => scrollToSection('heritage-detail')}>{t.heritageLink}<ArrowRight /></button></div>
        </section>

        <section id="heritage-detail" className="content-section pillars-section">
          <div className="section-heading"><div><SectionLabel>JAPAN PROFESSIONAL HERITAGE</SectionLabel><h2>{t.heritageTitle}</h2></div><p>{t.heritageBody}</p></div>
          <div className="pillar-grid">{t.heritagePillars.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className="content-section places-section">
          <div className="section-heading"><div><SectionLabel>{t.placesEyebrow}</SectionLabel><h2>{t.placesTitle}</h2></div><p>{t.placesBody}</p></div>
          <div className="place-grid">
            {["./images/series-laundry.jpg", "./images/series-kitchen.jpg", "./images/series-home.jpg"].map((image, index) => (
              <article key={image}><img src={image} alt={t.places[index]?.[0] ?? 'RANTO product'} /><SectionLabel>{t.places[index]?.[0]}</SectionLabel><h3>{t.places[index]?.[1]}</h3></article>
            ))}
          </div>
        </section>

        <section id="quality" className="quality-feature">
          <div className="quality-copy"><SectionLabel light>{t.qualityEyebrow}</SectionLabel><h2>{t.qualityTitle}</h2><p>{t.qualityBody}</p><ul>{t.qualityPoints.map((point) => <li key={point}><Check size={16} />{point}</li>)}</ul><button className="button button--blue" onClick={() => scrollToSection('process')}>{t.qualityLink}</button></div>
          <img src="./images/brand/factory-quality.jpg" alt="Qualified production and manufacturing environment" />
        </section>

        <section id="process" className="content-section process-section">
          <div className="section-heading"><div><SectionLabel>{t.processEyebrow}</SectionLabel><h2>{t.processTitle}</h2></div><p>{t.qualityBody}</p></div>
          <div className="process-list">{t.process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className="lab-section">
          <img src="./images/brand/laboratory.jpg" alt="Laboratory testing for material compatibility" />
          <div><SectionLabel>MATERIAL CARE & TESTING</SectionLabel><h2>Designed for surfaces, fabrics and routines that deserve care.</h2><p>{t.qualityBody}</p><div className="mini-list">{t.qualityPoints.slice(0, 3).map((point, index) => <div key={point}><span>0{index + 1}</span><p>{point}</p></div>)}</div></div>
        </section>

        <section id="products" className="content-section products-section">
          <div className="section-heading"><div><SectionLabel>{t.productsEyebrow}</SectionLabel><h2>{t.productsTitle}</h2></div><p>{t.productsBody}</p></div>
          <div className="product-grid">{products.map((product, index) => (
            <article key={product.title}><img src={product.image} alt={`RANTO ${product.title} system`} /><div className="product-copy"><span>{product.number}</span><h3>{product.title}</h3><p>{t.productDescriptions[index]}</p><button onClick={() => navigate('official')}>{t.verify}<ArrowRight /></button></div></article>
          ))}</div>
        </section>

        <section className="content-section network-section">
          <SectionLabel>{t.partnersEyebrow}</SectionLabel><div className="section-heading"><h2>{t.partnersTitle}</h2><p>{t.partnersBody}</p></div>
          <div className="partner-types">{t.partnerTypes.map((type) => <span key={type}>{type}</span>)}</div>
          <p className="verification-note">Only confirmed relationships should be named publicly. Supporting factory, retail and channel documents can be reviewed through the official business contact.</p>
        </section>

        <section id="global" className="split-section global-section">
          <img src="./images/brand/retail-global.jpg" alt="Consumer shopping in an international supermarket" />
          <div className="split-copy"><SectionLabel>{t.globalEyebrow}</SectionLabel><h2>{t.globalTitle}</h2><p>{t.globalBody}</p><button className="text-link" onClick={() => scrollToSection('markets')}>{t.globalLink}<ArrowRight /></button></div>
        </section>

        <section id="markets" className="content-section markets-section">
          <SectionLabel>ONE BRAND / LOCAL RELEVANCE</SectionLabel><h2>{t.marketsTitle}</h2>
          <div className="market-grid">{t.markets.map(([title, label, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><strong>{label}</strong><p>{body}</p></article>)}</div>
        </section>

        <section className="content-section scene-grid">
          <article><img src="./images/brand/retail-global.jpg" alt="Offline and specialty retail" /><div><SectionLabel>OFFLINE & SPECIALTY RETAIL</SectionLabel><h3>Seen where trust is built in person.</h3><p>{t.partnersBody}</p></div></article>
          <article><img src="./images/brand/hospitality.jpg" alt="Hospitality and professional environment" /><div><SectionLabel>HOSPITALITY & PROFESSIONAL USE</SectionLabel><h3>Used where consistency is visible.</h3><p>{t.placesBody}</p></div></article>
        </section>

        <section className="ecosystem-section">
          <div><SectionLabel light>PARTNER ECOSYSTEM</SectionLabel><h2>{t.ecosystemTitle}</h2><p>{t.ecosystemBody}</p></div>
          <div className="ecosystem-list">{t.ecosystem.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </section>

        <section className="split-section repeat-section">
          <div className="split-copy"><SectionLabel>{t.repeatEyebrow}</SectionLabel><h2>{t.repeatTitle}</h2><p>{t.repeatBody}</p><div className="repeat-points"><span>REFILL</span><span>CONCENTRATE</span><span>REUSE</span></div></div>
          <img src="./images/refill.jpg" alt="RANTO refill pack and bottle" />
        </section>

        <section className="content-section confidence-section">
          <SectionLabel>{t.confidenceEyebrow}</SectionLabel><h2>{t.confidenceTitle}</h2><div className="confidence-grid">{t.confidence.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section id="official" className="official-section">
          <div className="official-copy"><SectionLabel>{t.officialEyebrow}</SectionLabel><h2>{t.officialTitle}</h2><p>{t.officialBody}</p></div>
          <form onSubmit={submitVerification} className="verify-card"><label htmlFor="verification">CHANNEL VERIFICATION</label><input id="verification" value={verification} onChange={(event) => setVerification(event.target.value)} placeholder={t.placeholder} /><button className="button button--blue" type="submit">{t.verifyButton}</button>{verificationResult && <p className="form-result" role="status">{verificationResult}</p>}</form>
          <div className="official-rows">{t.officialRows.map(([name, status]) => <div key={name}><span>{name}</span><strong>{status}</strong></div>)}</div>
        </section>

        <section className="contact-cta"><div><SectionLabel light>{t.ctaEyebrow}</SectionLabel><h2>{t.ctaTitle}</h2><p>{t.ctaBody}</p></div><a className="button button--light" href="mailto:hello@ranto.co.th">{t.ctaButton}</a></section>
      </main>

      <footer>
        <div className="footer-brand"><h2>RANTO</h2><p>{t.footerBody}</p></div>
        <div className="footer-links">{t.nav.map((item, index) => <button key={item} onClick={() => navigate(ids[index])}>{item}</button>)}</div>
        <div className="footer-bottom"><span>© 2026 RANTO GLOBAL</span><span>{t.footerLocation}</span></div>
      </footer>
    </div>
  )
}
