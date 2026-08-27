import { useEffect, useState } from 'react'
import { LANGS, T, useSite, type Page } from '../i18n'

export default function Header() {
  const { lang, setLang, page, go } = useSite()
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 24)
      if (y > 160 && y > lastY) setHidden(true)
      else setHidden(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items: { id: Page; label: string }[] = [
    { id: 'home', label: T.nav.home[lang] },
    { id: 'story', label: T.nav.story[lang] },
    { id: 'products', label: T.nav.products[lang] },
    { id: 'lifestyle', label: T.nav.lifestyle[lang] },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${hidden && !menuOpen ? 'header-out' : 'header-in'} ${
        solid || menuOpen ? 'bg-[#FAF8F4]/92 backdrop-blur-md' : ''
      } transition-[border-color,box-shadow] duration-300 ${
        solid && !menuOpen ? 'border-b border-[#1A1A1A]/8' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[76px] md:px-8">
        <button onClick={() => go('home')} className="group flex items-center" aria-label="RANTO">
          <img
            src="./images/logo.svg"
            alt="RANTO"
            className="h-7 w-auto transition-transform duration-300 group-hover:-translate-y-[1px] md:h-8"
          />
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className={`group relative py-2 text-[13px] tracking-[0.18em] transition-colors duration-300 ${
                page === it.id ? 'text-[#0554B8]' : 'text-neutral-600 hover:text-[#1A1A1A]'
              }`}
            >
              {it.label}
              <span
                className={`absolute bottom-0 left-0 block h-[2px] w-full origin-left bg-[#0554B8] transition-transform duration-300 ease-out ${
                  page === it.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-[#1A1A1A]/25'
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <div className="flex items-center rounded-full border border-[#1A1A1A]/12 bg-white/60 px-1 py-[3px] text-[12px] tracking-wider backdrop-blur-sm">
            {LANGS.map((l, i) => (
              <span key={l.id} className="flex items-center">
                {i > 0 && <span className="mx-[2px] h-3 w-px bg-neutral-300" />}
                <button
                  onClick={() => setLang(l.id)}
                  className={`rounded-full px-2 py-[3px] transition-all duration-300 ${
                    lang === l.id
                      ? 'bg-[#0554B8] font-medium text-white shadow-sm'
                      : 'text-neutral-500 hover:text-[#1A1A1A]'
                  }`}
                >
                  {l.short}
                </button>
              </span>
            ))}
          </div>
          <button
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span className={`block h-[1.5px] w-5 bg-[#1A1A1A] transition-transform ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-[#1A1A1A] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-5 bg-[#1A1A1A] transition-transform ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-neutral-200 bg-[#FAF8F4] px-6 pt-2 pb-6 md:hidden">
          {items.map((it, i) => (
            <button
              key={it.id}
              onClick={() => {
                go(it.id)
                setMenuOpen(false)
              }}
              className={`menu-item block w-full border-b border-neutral-200/70 py-4 text-left text-[15px] tracking-[0.15em] ${
                page === it.id ? 'text-[#0554B8]' : 'text-neutral-700'
              }`}
              style={{ ['--menu-delay' as string]: `${0.05 * i}s` }}
            >
              {it.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
