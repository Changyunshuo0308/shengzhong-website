import { useLang } from '../App.jsx'

export default function Catalog() {
  const { t } = useLang()
  const catalog = t.catalog

  return (
    <section id="catalog" className="section catalog">
      <div className="container catalog__grid">
        <div className="catalog__visual reveal">
          <img src="/russian_page_1.png" alt={catalog.label} />
          <img src="/russian_page_2.png" alt={catalog.title} />
        </div>
        <div className="catalog__copy reveal">
          <p className="section-label">{catalog.label}</p>
          <h2 className="section-title">{catalog.title}</h2>
          <p className="section-desc">{catalog.desc}</p>
          <ul>
            {catalog.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
