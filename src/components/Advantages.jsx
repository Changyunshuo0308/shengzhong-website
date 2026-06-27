import { useLang } from '../App.jsx'

export default function Advantages() {
  const { t } = useLang()
  const advantages = t.advantages

  return (
    <section id="advantages" className="section advantages">
      <div className="container advantages__inner">
        <div className="section-head reveal">
          <p className="section-label">{advantages.label}</p>
          <h2 className="section-title">{advantages.title}</h2>
        </div>

        <div className="advantage-grid">
          {advantages.items.map(([title, desc], index) => (
            <article className="advantage-card reveal" key={title} style={{ transitionDelay: `${index * 70}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
