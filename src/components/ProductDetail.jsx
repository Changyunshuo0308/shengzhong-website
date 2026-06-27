import { useLang } from '../App.jsx'

export default function ProductDetail({ product }) {
  const { t } = useLang()
  const detail = t.detail

  return (
    <main className="detail-page">
      <section className="detail-hero">
        <div className="container detail-hero__grid">
          <div className="detail-hero__copy reveal visible">
            <button className="detail-back" onClick={() => { window.location.hash = '' }}>
              {t.detailBack}
            </button>
            <p className="section-label">{detail.overview}</p>
            <h1>{product.name}</h1>
            <p>{product.desc}</p>
            <a className="btn btn--primary" href="#contact">{t.detailCta}</a>
          </div>
          <div className="detail-hero__image reveal visible">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="container detail-grid">
          <article className="detail-panel reveal">
            <h2>{detail.functions}</h2>
            <div className="function-list">
              {product.functions.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>

          <article className="detail-panel reveal">
            <h2>{detail.params}</h2>
            <div className="detail-table">
              {product.params.map(([name, value]) => (
                <div key={name}>
                  <span>{name}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="detail-section detail-section--dark">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">{detail.components}</p>
            <h2 className="section-title">{detail.origin}</h2>
          </div>
          <div className="component-grid">
            {product.components.map(([part, brand, origin]) => (
              <div className="component-card reveal" key={`${part}-${brand}`}>
                <span>{part}</span>
                <strong>{brand}</strong>
                <em>{origin}</em>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
