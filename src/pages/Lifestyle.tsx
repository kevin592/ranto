import Reveal from '../components/Reveal'
import { SectionLabel, StarField } from '../components/motifs'
import { T, useSite } from '../i18n'
import { PageHero } from './Story'

export default function Lifestyle() {
  const { lang } = useSite()
  const L = T.lifePage

  return (
    <main>
      <PageHero label={L.heroLabel} title={L.heroTitle[lang]} sub={L.heroSub[lang]} />

      {/* 影像约定 */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionLabel en="PHOTOGRAPHY" text={L.principlesLabel[lang]} />
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {L.principles.map((p, i) => (
            <Reveal key={i} delay={0.08 * i}>
              <span className="font-liter text-[10px] text-[#0554B8]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-[17px] font-medium tracking-[0.15em]">{p.t[lang]}</h3>
              <p className="mt-3 text-[13px] leading-[2.1] text-neutral-600">{p.d[lang]}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 画廊：非对称拼贴 */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <Reveal className="md:translate-y-10">
            <img src="./images/life-bath.jpg" alt="RANTO" loading="lazy" decoding="async" className="img-hover aspect-[3/4] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.08}>
            <img src="./images/story-laundry.jpg" alt="RANTO" loading="lazy" decoding="async" className="img-hover aspect-[3/4] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.16} className="md:translate-y-10">
            <img src="./images/life-stool.jpg" alt="RANTO" loading="lazy" decoding="async" className="img-hover aspect-[3/4] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.24}>
            <img src="./images/life-lineup.jpg" alt="RANTO" loading="lazy" decoding="async" className="img-hover aspect-[3/4] w-full object-cover" />
          </Reveal>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 md:px-24">
          <Reveal delay={0.1}>
            <img src="./images/series-shoe.jpg" alt="RANTO" loading="lazy" decoding="async" className="img-hover aspect-[16/10] w-full object-cover" />
          </Reveal>
          <Reveal delay={0.18}>
            <img src="./images/series-pods.jpg" alt="RANTO" loading="lazy" decoding="async" className="img-hover aspect-[16/10] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <StarField />

      {/* 替换的时刻 */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:gap-20 md:px-8 md:py-28">
          <Reveal>
            <div className="overflow-hidden">
              <img src="./images/refill.jpg" alt="RANTO refill" loading="lazy" decoding="async" className="img-hover aspect-[16/10] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionLabel en="REFILL RITUAL" text={L.ritualLabel[lang]} color="#3FAD32" />
            <h2 className="mt-7 text-[24px] leading-[1.6] font-medium tracking-[0.1em] md:text-[28px]">
              {L.ritualTitle[lang]}
            </h2>
            <p className="mt-6 text-[14.5px] leading-[2.2] text-neutral-600">{L.ritualBody[lang]}</p>
            <ol className="mt-8 space-y-4">
              {T.refill.steps.map((st, i) => (
                <li key={i} className="flex items-center gap-4 text-[14px] tracking-[0.08em] text-neutral-700">
                  <span className="font-liter flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3FAD32] text-[11px] text-[#3FAD32]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {st[lang]}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
