import Reveal from '../components/Reveal'
import { ColorLines, SectionLabel, Star, StarField } from '../components/motifs'
import { SERIES, T, useSite } from '../i18n'

export default function Home() {
  const { lang, go } = useSite()

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./images/hero.jpg"
            alt="RANTO"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4] via-[#FAF8F4]/88 to-[#FAF8F4]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4]/70 via-transparent to-transparent" />
        </div>

        {/* 竖排日文 */}
        <div className="hero-stagger absolute top-28 right-8 hidden lg:block" style={{ ['--hero-delay' as string]: '0.9s' }}>
          <p className="vertical-rl text-[15px] tracking-[0.5em] text-[#1A1A1A]/70">
            {T.hero.vertical}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 md:px-8">
          <div className="max-w-xl">
            <p className="hero-stagger font-liter text-[11px] text-[#0554B8]" style={{ ['--hero-delay' as string]: '0.1s' }}>
              {T.hero.label}
            </p>
            <h1
              className="hero-stagger mt-6 text-[38px] leading-[1.35] font-medium tracking-[0.14em] md:text-[52px]"
              style={{ ['--hero-delay' as string]: '0.25s' }}
            >
              {T.hero.slogan[lang]}
            </h1>
            <p
              className="hero-stagger mt-6 text-[15px] leading-[2.1] whitespace-pre-line text-neutral-600 md:text-[16px]"
              style={{ ['--hero-delay' as string]: '0.45s' }}
            >
              {T.hero.sub[lang]}
            </p>
            <div className="hero-stagger mt-10 flex flex-wrap items-center gap-4" style={{ ['--hero-delay' as string]: '0.6s' }}>
              <button
                onClick={() => go('story')}
                className="border border-[#0554B8] px-7 py-3 text-[13px] tracking-[0.22em] text-[#0554B8] transition-colors duration-300 hover:bg-[#0554B8] hover:text-white"
              >
                {T.hero.ctaStory[lang]}
              </button>
              <button
                onClick={() => go('products')}
                className="px-2 py-3 text-[13px] tracking-[0.22em] text-neutral-600 underline decoration-neutral-300 underline-offset-8 transition-colors hover:text-[#0554B8] hover:decoration-[#0554B8]"
              >
                {T.hero.ctaSeries[lang]}
              </button>
            </div>
            <div className="hero-stagger mt-14" style={{ ['--hero-delay' as string]: '0.75s' }}>
              <ColorLines />
            </div>
          </div>
        </div>

        <div className="hero-stagger absolute bottom-8 left-1/2 -translate-x-1/2" style={{ ['--hero-delay' as string]: '1.1s' }}>
          <div className="flex flex-col items-center gap-2 text-neutral-400">
            <span className="font-liter text-[9px]">{T.hero.scroll[lang]}</span>
            <span className="block h-8 w-[1px] bg-neutral-400/60" />
          </div>
        </div>
      </section>

      {/* ===== 品牌缘起 ===== */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <Reveal>
            <div className="md:pt-10">
              <SectionLabel en="ORIGIN" text={T.origin.label[lang]} />
              <h2 className="mt-7 text-[26px] leading-[1.6] font-medium tracking-[0.1em] md:text-[32px]">
                {T.origin.title[lang]}
              </h2>
              <p className="mt-7 text-[14.5px] leading-[2.2] text-neutral-600">
                {T.origin.body[lang]}
              </p>
              <div className="mt-8 flex items-center gap-3 text-[13px] tracking-[0.15em] text-[#0554B8]">
                <Star size={13} color="#0554B8" />
                <span>{T.origin.trademark[lang]}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden">
              <img
                src="./images/story-laundry.jpg"
                alt="RANTO"
                loading="lazy" decoding="async" className="img-hover aspect-[4/3] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-right font-liter text-[9px] text-neutral-400">
              RANTO — RINTO — 凛と
            </p>
          </Reveal>
        </div>
      </section>

      <StarField />

      {/* ===== 四大系列 ===== */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <SectionLabel en="COLLECTION" text={T.homeSeries.label[lang]} />
          <h2 className="mt-7 text-[26px] font-medium tracking-[0.12em] md:text-[32px]">
            {T.homeSeries.title[lang]}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {SERIES.map((s, i) => (
            <Reveal key={s.id} delay={0.08 * i} className={i % 2 === 1 ? 'md:translate-y-14' : ''}>
              <button
                onClick={() => go('products', s.id)}
                className="group block w-full text-left"
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={s.image}
                    alt={s.imageAlt[lang]}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-4">
                  <span className="block h-[3px] w-10 shrink-0 self-center" style={{ backgroundColor: s.color }} />
                  <span className="text-[19px] font-medium tracking-[0.12em]">{s.jaKana}</span>
                  <span className="font-liter text-[10px] text-neutral-400">{s.en}</span>
                </div>
                <p className="mt-3 text-[14px] leading-[1.9] text-neutral-600">{s.slogan[lang]}</p>
                <p className="mt-1 text-[12.5px] tracking-[0.06em] text-neutral-400">{s.title[lang]}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 text-center md:mt-32">
          <button
            onClick={() => go('products')}
            className="border border-[#1A1A1A] px-10 py-3.5 text-[13px] tracking-[0.25em] transition-colors duration-300 hover:bg-[#1A1A1A] hover:text-white"
          >
            {T.homeSeries.more[lang]}
          </button>
        </Reveal>
      </section>

      {/* ===== 替换装 ===== */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-8 md:py-32">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src="./images/refill.jpg"
                alt="RANTO refill"
                loading="lazy" decoding="async" className="img-hover aspect-[16/11] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionLabel en="REFILL" text={T.refill.label[lang]} color="#3FAD32" />
            <h2 className="mt-7 text-[24px] leading-[1.6] font-medium tracking-[0.1em] md:text-[30px]">
              {T.refill.title[lang]}
            </h2>
            <p className="mt-6 text-[14.5px] leading-[2.2] text-neutral-600">{T.refill.body[lang]}</p>
            <ol className="mt-9 space-y-4">
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

      {/* ===== 生活方式 ===== */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <Reveal>
            <SectionLabel en="LIFESTYLE" text={T.homeLife.label[lang]} />
            <h2 className="mt-7 text-[24px] leading-[1.6] font-medium tracking-[0.1em] md:text-[30px]">
              {T.homeLife.title[lang]}
            </h2>
            <p className="mt-6 text-[14.5px] leading-[2.2] text-neutral-600">{T.homeLife.body[lang]}</p>
            <button
              onClick={() => go('lifestyle')}
              className="mt-8 text-[13px] tracking-[0.22em] text-[#0554B8] underline decoration-[#0554B8]/40 underline-offset-8 transition-colors hover:decoration-[#0554B8]"
            >
              {T.homeLife.more[lang]}
            </button>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="./images/life-bath.jpg"
                alt="RANTO"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover"
              />
              <img
                src="./images/life-lineup.jpg"
                alt="RANTO"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full translate-y-8 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 收尾标语 ===== */}
      <section className="border-t border-neutral-200 bg-[#F5F2EA]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:px-8 md:py-28">
          <Reveal>
            <Star size={18} color="#0554B8" className="mx-auto" />
            <p className="mt-8 text-[24px] leading-[1.8] font-medium tracking-[0.16em] md:text-[30px]">
              {T.hero.slogan[lang]}
            </p>
            <p className="mt-4 font-liter text-[10px] text-neutral-400">LIVE REFINED.</p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
