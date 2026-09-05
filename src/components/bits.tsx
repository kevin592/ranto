import { useEffect, useState } from 'react'
import { copy } from '../content'
import type { Locale, PageId } from '../types'

export function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem('ranto-global-lang')
    if (saved && ['en', 'ja', 'th', 'zh'].includes(saved)) return saved as Locale
  } catch { /* Language detection still works when storage is unavailable. */ }
  const language = navigator.language.toLowerCase().split('-')[0]
  return ['zh', 'ja', 'th'].includes(language) ? language as Locale : 'en'
}

export function useCopy(page: PageId = 'home') {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  const t = copy[locale]
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta[page].title
    const values = [
      ['meta[name="description"]', t.meta[page].description],
      ['meta[property="og:title"]', t.meta[page].title],
      ['meta[property="og:description"]', t.meta[page].description],
    ]
    values.forEach(([selector, value]) => document.querySelector(selector)?.setAttribute('content', value))
    try { localStorage.setItem('ranto-global-lang', locale) } catch { /* private mode */ }
  }, [locale, page, t])
  return { locale, setLocale, t }
}
