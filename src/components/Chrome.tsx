import { useEffect, useRef, type ReactNode } from 'react'
import { ArrowUpRight, Menu, X, Globe2 } from 'lucide-react'
import { localeNames } from '../content'
import { keepDialogFocus } from '../lib/dialog'
import { ContactChannels } from './ContactChannels'
import '../visuals.css'
import type { Locale, PageId, SiteCopy } from '../types'

export type { PageId } from '../types'
const navigation = ['story', 'products', 'quality', 'global', 'official'] as const

export default function Chrome({ page, locale, setLocale, t, children }: {
  page: PageId; locale: Locale; setLocale: (locale: Locale) => void; t: SiteCopy; children: ReactNode
}) {
  const menu = useRef<HTMLDialogElement>(null)
  const menuTrigger = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const dialog = menu.current
    const unlock = () => { document.body.style.overflow = ''; menuTrigger.current?.focus() }
    dialog?.addEventListener('close', unlock)
    return () => { dialog?.removeEventListener('close', unlock); document.body.style.overflow = '' }
  }, [])
  const closeMenu = () => menu.current?.close()
  const links = (mobile = false) => navigation.map(id => (
    <a key={id} href={`./${id}.html`} aria-current={page === id ? 'page' : undefined} onClick={mobile ? closeMenu : undefined}>
      {t.nav[id]}{mobile && <ArrowUpRight size={20} strokeWidth={1.5} />}
    </a>
  ))
  return <div className="site-shell">
    <a href="#main-content" className="skip-link">{t.common.skip}</a>
    <header className="site-header">
      <a className="brand-lockup" href="./index.html" aria-label={t.common.home}><img src="./images/logo.svg" alt="RANTO" width="1248" height="624" /></a>
      <nav className="desktop-nav" aria-label={t.common.navigation}>{links()}</nav>
      <div className="header-actions">
        <label className="language-select"><Globe2 size={16} strokeWidth={1.5} aria-hidden="true" /><span className="sr-only">{t.common.language}</span>
          <select value={locale} onChange={event => setLocale(event.target.value as Locale)}>
            {(Object.keys(localeNames) as Locale[]).map(key => <option key={key} value={key}>{localeNames[key]}</option>)}
          </select>
        </label>
        <button ref={menuTrigger} className="menu-toggle icon-button" aria-label={t.common.menu} aria-haspopup="dialog" onClick={() => { menu.current?.showModal(); document.body.style.overflow = 'hidden' }}><Menu size={24} strokeWidth={1.5} /></button>
      </div>
    </header>
    <dialog ref={menu} className="mobile-menu" aria-label={t.common.navigation} onKeyDown={keepDialogFocus} onClick={event => { if (event.target === event.currentTarget) closeMenu() }}>
      <div className="mobile-menu-header"><img src="./images/logo.svg" alt="RANTO" width="100" height="50" /><button className="icon-button" onClick={closeMenu} aria-label={t.common.close}><X /></button></div>
      <nav aria-label={t.common.navigation}>{links(true)}</nav>
      <div className="mobile-languages" aria-label={t.common.language}>{(Object.keys(localeNames) as Locale[]).map(key => <button key={key} aria-pressed={locale === key} onClick={() => { setLocale(key); closeMenu() }}>{localeNames[key]}</button>)}</div>
    </dialog>
    <main id="main-content" tabIndex={-1}>{children}</main>
    <footer className="site-footer">
      <div className="footer-top"><a href="./index.html" aria-label={t.common.home}><img src="./images/logo.svg" alt="RANTO" width="150" height="75" /></a><p>{t.footer.body}</p><nav aria-label={t.common.navigation}>{links()}</nav></div>
      <ContactChannels t={t} compact />
      <div className="footer-bottom"><span>© {new Date().getFullYear()} RANTO</span><span>{t.footer.legal}</span></div>
    </footer>
  </div>
}
