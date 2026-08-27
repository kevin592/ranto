import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import Lenis from 'lenis'
import { localeNames, type Locale } from '../content'
import { setLenis, lockPageScroll } from '../lib/scroll'

export const pageHrefs = ['story.html', 'quality.html', 'products.html', 'global.html', 'official.html']
const homeHref = 'index.html'

export type PageId = 'home' | 'story' | 'quality' | 'products' | 'global' | 'official'

function LocaleMenu({ locale, setLocale }: { locale: Locale; setLocale: (value: Locale) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`locale-menu${open ? ' is-open' : ''}`} ref={ref}>
      <button className="locale-button" onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open}>
        {localeNames[locale]}<ChevronDown size={12} strokeWidth={1.5} />
      </button>
      {open && (
        <div className="locale-panel" role="listbox" aria-label="Language">
          {(Object.keys(localeNames) as Locale[]).map((key) => (
            <button key={key} role="option" aria-selected={locale === key} className={locale === key ? 'is-active' : ''}
              onClick={() => { setLocale(key); setOpen(false) }}>
              <span>{localeNames[key]}</span><span className="locale-code">{key.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Chrome({
  page, locale, setLocale, nav, verify, footerBody, footerLocation, children,
}: {
  page: PageId
  locale: Locale
  setLocale: (value: Locale) => void
  nav: string[]
  verify: string
  footerBody: string
  footerLocation: string
  children: ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sentinel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15 })
    setLenis(lenis)
    let raf = 0
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  useEffect(() => {
    lockPageScroll(menuOpen)
    return () => lockPageScroll(false)
  }, [menuOpen])

  const navIndex = ['story', 'quality', 'products', 'global', 'official'].indexOf(page)

  return (
    <div className="site-shell">
      <div ref={sentinel} className="header-sentinel" aria-hidden="true" />
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`} data-menu-open={menuOpen}>
        <a className="brand-lockup" href={homeHref} aria-label="RANTO home">
          <img src="./images/logo.png" alt="RANTO" />
          <span>JAPAN / GLOBAL CARE</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item, index) => (
            <a key={item} href={pageHrefs[index]} className={index === navIndex ? 'is-active' : ''} aria-current={index === navIndex ? 'page' : undefined}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <LocaleMenu locale={locale} setLocale={setLocale} />
          <a className="button button--outline desktop-verify" href={pageHrefs[4]}>{verify}</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}<span>MENU</span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <nav aria-label="Mobile navigation">
            {nav.map((item, index) => (
              <a key={item} href={pageHrefs[index]}>
                <span className="mobile-menu-index">0{index + 1}</span>{item}<ArrowRight size={18} className="mobile-menu-arrow" />
              </a>
            ))}
          </nav>
          <div className="mobile-languages" aria-label="Language">
            {(Object.keys(localeNames) as Locale[]).map((key) => <button key={key} className={locale === key ? 'is-active' : ''} onClick={() => setLocale(key)} aria-pressed={locale === key}>{localeNames[key]}</button>)}
          </div>
          <a className="button button--blue" href={pageHrefs[4]}>{verify}</a>
        </div>
      )}

      <main id="top">{children}</main>

      <footer>
        <div className="footer-brand"><h2>RANTO</h2><p>{footerBody}</p></div>
        <div className="footer-links">
          {nav.map((item, index) => <a key={item} href={pageHrefs[index]}>{item}</a>)}
        </div>
        <div className="footer-bottom"><span>© 2026 RANTO GLOBAL</span><span>{footerLocation}</span></div>
      </footer>

      <div className="grain" aria-hidden="true" />
    </div>
  )
}
