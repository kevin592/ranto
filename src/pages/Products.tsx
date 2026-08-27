import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import { StarField } from '../components/motifs'
import { SERIES, T, useSite } from '../i18n'
import { PageHero } from './Story'

export default function Products() {
  const { lang } = useSite()
  const P = T.productsPage

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' })
      })
    }
  }, [])

  return (
    <main>
      <PageHero label={P.heroLabel} title={P.heroTitle[lang]} sub={P.heroSub[lang]} />

      {SERIES.map((s, idx) => (
        <div key={s.id}>
          <section id={s.id} className={`scroll-mt-20 ${idx % 2 === 1 ? 'bg-white' : ''}`}>
            <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
              {/* 系列头 */}
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-8">
                  <div className="max-w-xl">
                    <div className="flex items-baseline gap-4">
                      <span className="block h-[3px] w-12 self-center" style={{ backgroundColor: s.color }} />
                      <h2 className="text-[26px] font-medium tracking-[0.14em] md:text-[30px]">{s.jaKana}</h2>
                      <span className="font-liter text-[10px] text-neutral-400">{s.en}</span>
                    </div>
                    <p className="mt-4 text-[16px] tracking-[0.1em] text-neutral-700">{s.slogan[lang]}</p>
                    <p className="mt-3 text-[13.5px] leading-[2] text-neutral-500">{s.desc[lang]}</p>
                  </div>
                  <p className="font-liter text-[10px] text-neutral-400">
                    {String(s.skus.length).padStart(2, '0')} {P.skuCount[lang]}
                  </p>
                </div>
              </Reveal>

              <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
                {/* 系列影像 */}
                <Reveal>
                  <div className="overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.imageAlt[lang]}
                      loading="lazy"
                      decoding="async"
                      className="img-hover aspect-[16/11] w-full object-cover"
                    />
                  </div>
                  <p className="mt-3 font-liter text-[9px] text-neutral-400">
                    LINE — {s.color.toUpperCase()}
                  </p>
                </Reveal>

                {/* SKU 列表 */}
                <Reveal delay={0.1}>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-neutral-300 text-[11px] tracking-[0.2em] text-neutral-400">
                          <th className="py-3 pr-4 font-normal">{P.colName[lang]}</th>
                          <th className="py-3 pr-4 font-normal whitespace-nowrap">{P.colSpec[lang]}</th>
                          <th className="py-3 pr-4 font-normal">{P.colForm[lang]}</th>
                          <th className="py-3 font-normal">{P.colDesc[lang]}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.skus.map((sku, i) => {
                          const lineColor = sku.line ?? s.color
                          return (
                            <tr key={i} className="group border-b border-neutral-200/80 align-top transition-colors hover:bg-neutral-50/60">
                              <td className="py-5 pr-4">
                                <span className="flex items-start gap-3">
                                  <span
                                    className="mt-[6px] block h-[2px] w-5 shrink-0"
                                    style={{ backgroundColor: lineColor }}
                                  />
                                  <span className="text-[14px] font-medium tracking-[0.05em]">{sku.name[lang]}</span>
                                </span>
                              </td>
                              <td className="py-5 pr-4 text-[13px] whitespace-nowrap text-neutral-600">
                                {typeof sku.spec === 'string' ? sku.spec : sku.spec[lang]}
                              </td>
                              <td className="py-5 pr-4 text-[13px] text-neutral-600">{sku.form[lang]}</td>
                              <td className="py-5 text-[12.5px] leading-[1.9] text-neutral-500">{sku.desc[lang]}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
          {idx < SERIES.length - 1 && <StarField />}
        </div>
      ))}

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-24">
        <p className="text-[12px] leading-[2] text-neutral-400">{P.note[lang]}</p>
      </section>
    </main>
  )
}
