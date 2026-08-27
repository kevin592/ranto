import { useEffect, useRef, useState } from 'react'
import { Check } from 'lucide-react'
import Chrome, { pageHrefs } from '../components/Chrome'
import Reveal from '../components/Reveal'
import { Media, SectionLabel, useCopy } from '../components/bits'
import { scrollToElement } from '../lib/scroll'

export default function Quality() {
  const { locale, setLocale, t } = useCopy()
  const [stage, setStage] = useState(0)
  const stageMarks = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStage(Number((entry.target as HTMLElement).dataset.stage))
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    stageMarks.current.forEach((el) => { if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <Chrome page="quality" locale={locale} setLocale={setLocale} nav={t.nav} verify={t.verify} footerBody={t.footerBody} footerLocation={t.footerLocation}>
      <section className="page-hero">
        <Reveal><SectionLabel>{t.nav[1]}</SectionLabel><h1>{t.qualityTitle}</h1><p>{t.qualityBody}</p></Reveal>
      </section>

      <section id="quality" className="quality-feature">
        <Reveal className="quality-copy"><SectionLabel light>{t.qualityEyebrow}</SectionLabel><h2>{t.qualityFeatureTitle}</h2><ul>{t.qualityPoints.map((point) => <li key={point}><Check size={15} strokeWidth={1.5} />{point}</li>)}</ul></Reveal>
        <Media src="./images/brand/factory-quality.jpg" alt="Qualified production and manufacturing environment" parallax />
      </section>

      <section id="process" className="process-section">
        <Reveal><div className="section-heading process-heading"><div><SectionLabel>{t.processEyebrow}</SectionLabel><h2>{t.processTitle}</h2></div></div></Reveal>
        <div className="process-runway">
          <div className="process-view">
            <div className="process-stage-info" aria-live="polite">
              {t.process.map(([number, title, body], index) => (
                <article key={number} className={`process-stage${index === stage ? ' is-active' : ''}`} aria-hidden={index !== stage}>
                  <h3>{title}</h3><p>{body}</p>
                </article>
              ))}
            </div>
            <div className="process-numerals" aria-hidden="true">
              {t.process.map(([number], index) => <span key={number} className={index === stage ? 'is-active' : ''}>{number}</span>)}
            </div>
            <div className="process-counter" aria-hidden="true"><strong>{t.process[stage][0]}</strong><span>/ 0{t.process.length}</span></div>
            <div className="process-rail" role="tablist" aria-label={t.processTitle}>
              {t.process.map((proc, index) => (
                <button key={proc[0]} role="tab" aria-selected={index === stage} aria-label={proc[1]} className={index === stage ? 'is-active' : ''} onClick={() => { const el = stageMarks.current[index]; if (el) scrollToElement(el) }} />
              ))}
            </div>
          </div>
          {t.process.map((proc, index) => (
            <div key={proc[0]} data-stage={index} className="process-mark" aria-hidden="true"
              ref={(el) => { stageMarks.current[index] = el }} />
          ))}
        </div>
      </section>

      <section className="lab-section">
        <Media src="./images/brand/laboratory.jpg" alt="Laboratory testing for material compatibility" parallax />
        <Reveal className="lab-copy"><SectionLabel>MATERIAL CARE & TESTING</SectionLabel><h2>{t.labTitle}</h2><p>{t.labBody}</p><div className="mini-list">{t.qualityPoints.slice(0, 3).map((point, index) => <div key={point}><span>0{index + 1}</span><p>{point}</p></div>)}</div></Reveal>
      </section>

      <section className="next-up"><a href={pageHrefs[2]}><span>{t.nextLabel}</span><h2>{t.nav[2]}</h2></a></section>
    </Chrome>
  )
}
