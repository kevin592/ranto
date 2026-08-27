import Reveal from '../components/Reveal'
import { SectionLabel, Star, StarField } from '../components/motifs'
import { T, useSite } from '../i18n'

function PageHero({ label, title, sub }: { label: string; title: string; sub: string }) {
  return (
    <section className="border-b border-neutral-200 bg-[#F5F2EA]">
      <div className="mx-auto max-w-6xl px-5 pt-36 pb-16 md:px-8 md:pt-44 md:pb-20">
        <p className="font-liter text-[11px] text-[#0554B8]">{label}</p>
        <h1 className="mt-5 text-[30px] font-medium tracking-[0.12em] md:text-[40px]">{title}</h1>
        <p className="mt-5 max-w-2xl text-[15px] leading-[2.1] text-neutral-600">{sub}</p>
      </div>
    </section>
  )
}

export default function Story() {
  const { lang } = useSite()
  const S = T.storyPage

  return (
    <main>
      <PageHero label={S.heroLabel} title={S.heroTitle[lang]} sub={S.heroSub[lang]} />

      {/* 命名故事 */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionLabel en="NAMING" text={S.namingLabel[lang]} />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
          {S.naming.map((n, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="border-t-2 border-[#0554B8] pt-6">
                <span className="text-[28px] font-medium tracking-[0.2em] text-[#0554B8]">{n.k[lang]}</span>
                <h3 className="mt-4 text-[17px] font-medium tracking-[0.08em]">{n.t[lang]}</h3>
                <p className="mt-4 text-[13.5px] leading-[2.1] text-neutral-600">{n.d[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StarField />

      {/* 使命与愿景 */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionLabel en="MISSION & VISION" text={S.mvvLabel[lang]} />
          </Reveal>
          <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-20">
            {[S.mission, S.vision].map((m, i) => (
              <Reveal key={i} delay={0.12 * i}>
                <div className={i === 1 ? 'md:pt-16' : ''}>
                  <p className="font-liter text-[10px] text-neutral-400">{m.k[lang]}</p>
                  <p className="mt-5 text-[22px] leading-[1.9] font-medium tracking-[0.1em] text-[#1A1A1A] md:text-[24px]">
                    {m.v[lang]}
                  </p>
                  <span className={`mt-6 block h-[3px] w-12 ${i === 0 ? 'bg-[#0554B8]' : 'bg-[#3FAD32]'}`} />
                </div>
              </Reveal>
            ))}
          </div>

          {/* 价值观 */}
          <div className="mt-20">
            <Reveal>
              <p className="font-liter text-[10px] text-neutral-400">VALUES — {S.valuesLabel[lang]}</p>
            </Reveal>
            <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
              {S.values.map((v, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-[18px] font-medium tracking-[0.15em]">{v.k[lang]}</h3>
                    <span className="font-liter text-[9px] text-[#0554B8]">{v.en}</span>
                  </div>
                  <p className="mt-4 text-[13.5px] leading-[2.1] text-neutral-600">{v.d[lang]}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 语言的约定 */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionLabel en="TONE OF VOICE" text={S.toneLabel[lang]} />
          <p className="mt-7 max-w-2xl text-[15px] leading-[2.2] text-neutral-600">{S.toneIntro[lang]}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="flex items-center gap-3 text-[13px] tracking-[0.2em] text-[#0554B8]">
              <Star size={12} color="#0554B8" />
              {S.weSay[lang]}
            </p>
            <ul className="mt-7 space-y-7">
              {S.tone.map((t, i) => (
                <li key={i} className="border-l-2 border-[#0554B8] pl-5 text-[14px] leading-[2] text-neutral-700">
                  {t.yes[lang]}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[13px] tracking-[0.2em] text-neutral-400">{S.weDontSay[lang]}</p>
            <ul className="mt-7 space-y-7">
              {S.tone.map((t, i) => (
                <li key={i} className="border-l border-neutral-300 pl-5 text-[14px] leading-[2] text-neutral-400">
                  {t.no[lang]}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 影像收尾 */}
      <section className="mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <div className="overflow-hidden">
            <img src="./images/banner.jpg" alt="RANTO" loading="lazy" decoding="async" className="aspect-[4/1] w-full object-cover" />
          </div>
        </Reveal>
      </section>
    </main>
  )
}

export { PageHero }
