import { useEffect, useState } from 'react'
import Header from './sections/Header'
import Footer from './sections/Footer'
import Home from './pages/Home'
import Story from './pages/Story'
import Products from './pages/Products'
import Lifestyle from './pages/Lifestyle'
import { LangContext, type Lang, type Page } from './i18n'

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem('ranto-lang') as Lang | null
    if (saved === 'ja' || saved === 'th' || saved === 'zh') return saved
    const nav = navigator.language.toLowerCase()
    if (nav.startsWith('zh')) return 'zh'
    if (nav.startsWith('ja')) return 'ja'
    if (nav.startsWith('th')) return 'th'
  } catch {
    /* ignore */
  }
  return 'th'
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(detectLang)
  const [page, setPage] = useState<Page>('home')

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('ranto-lang', l)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const go = (p: Page, anchor?: string) => {
    setPage(p)
    if (anchor) {
      window.location.hash = anchor
      requestAnimationFrame(() => {
        document.getElementById(anchor)?.scrollIntoView({ block: 'start' })
      })
    } else {
      window.location.hash = ''
      window.scrollTo({ top: 0 })
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang, page, go }}>
      <div className="min-h-screen bg-[#FAF8F4]">
        <Header />
        <div key={page + window.location.hash} className="page-in">
          {page === 'home' && <Home />}
          {page === 'story' && <Story />}
          {page === 'products' && <Products />}
          {page === 'lifestyle' && <Lifestyle />}
        </div>
        <Footer />
      </div>
    </LangContext.Provider>
  )
}
