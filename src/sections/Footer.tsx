import { T, useSite, type Page } from '../i18n'
import { ColorLines, DualArc } from '../components/motifs'

export default function Footer() {
  const { lang, go } = useSite()

  const items: { id: Page; label: string }[] = [
    { id: 'home', label: T.nav.home[lang] },
    { id: 'story', label: T.nav.story[lang] },
    { id: 'products', label: T.nav.products[lang] },
    { id: 'lifestyle', label: T.nav.lifestyle[lang] },
  ]

  return (
    <footer className="relative border-t border-neutral-200 bg-[#F5F2EA]">
      <div className="pointer-events-none absolute -top-9 right-6 opacity-80 md:right-16">
        <DualArc width={160} />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src="./images/logo.svg" alt="RANTO" className="h-9 w-auto" />
            <p className="mt-5 text-[15px] leading-relaxed tracking-[0.1em] text-neutral-600">
              {T.hero.slogan[lang]}
            </p>
            <ColorLines className="mt-6" />
          </div>
          <div>
            <p className="font-liter text-[11px] text-[#0554B8]">{T.footer.brand[lang]}</p>
            <ul className="mt-5 space-y-3">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    onClick={() => go(it.id)}
                    className="text-[14px] tracking-[0.12em] text-neutral-600 transition-colors hover:text-[#0554B8]"
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-liter text-[11px] text-[#0554B8]">{T.footer.contact[lang]}</p>
            <ul className="mt-5 space-y-3 text-[14px] tracking-[0.08em] text-neutral-600">
              <li>hello@ranto.co.th</li>
              <li>{T.footer.line}</li>
              <li>Bangkok, Thailand</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-neutral-300/60 pt-6 text-[12px] tracking-[0.08em] text-neutral-400 md:flex-row md:items-center md:justify-between">
          <span>{T.footer.copyright}</span>
          <span>{T.footer.note[lang]}</span>
        </div>
      </div>
    </footer>
  )
}
