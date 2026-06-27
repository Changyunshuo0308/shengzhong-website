import { useLang } from '../App.jsx'
import Globe3D from './Globe3D.jsx'
import TimeRiver from './TimeRiver.jsx'

export default function History() {
  const { t } = useLang()
  const about = t.about

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__copy reveal">
          <p className="section-label">{about.label}</p>
          <h2 className="section-title">{about.title}</h2>
          <p className="section-lead">{about.desc}</p>
          <div className="global-copy">
            <h3>{about.globeTitle}</h3>
            <p>{about.globeDesc}</p>
          </div>
        </div>

        <div className="globe-panel reveal">
          <Globe3D countries={t.countries} />
          <div className="country-strip">
            {t.countries.slice(0, 8).map((country) => (
              <span key={country.name}>{country.name} · {country.count}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <TimeRiver items={about.timeline} title={about.timelineTitle} />
      </div>
    </section>
  )
}
