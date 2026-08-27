import type Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function setLenis(lenis: Lenis | null) {
  lenisInstance = lenis
}

export function getLenis() {
  return lenisInstance
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: -72, duration: 1.4 })
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function scrollToElement(el: HTMLElement) {
  if (lenisInstance) lenisInstance.scrollTo(el, { duration: 1.2 })
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function lockPageScroll(locked: boolean) {
  document.body.style.overflow = locked ? 'hidden' : ''
  if (lenisInstance) locked ? lenisInstance.stop() : lenisInstance.start()
}
