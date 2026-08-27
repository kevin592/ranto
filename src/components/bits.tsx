import { useEffect, useState, type ReactNode } from 'react'
import { copy, type Locale } from '../content'

export function detectLocale(): Locale {
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

export function useLocale(): [Locale, (value: Locale) => void] {
  const [locale, setLocale] = useState<Locale>(detectLocale)
  useEffect(() => {
    document.documentElement.lang = locale
    try { localStorage.setItem('ranto-global-lang', locale) } catch { /* private mode */ }
  }, [locale])
  return [locale, setLocale]
}

export function useCopy() {
  const [locale, setLocale] = useLocale()
  return { locale, setLocale, t: copy[locale] }
}

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`section-label${light ? ' section-label--light' : ''}`}>{children}</p>
}

export function Media({ src, alt, parallax = false }: { src: string; alt: string; parallax?: boolean }) {
  return (
    <div className={`media${parallax ? ' media--parallax' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}
