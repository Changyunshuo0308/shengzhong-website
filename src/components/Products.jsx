import { useLang } from '../App.jsx'

export default function Products() {
  const { t } = useLang()
  const products = t.products

  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-label">{products.label}</p>
          <h2 className="section-title">{products.title}</h2>
          <p className="section-desc">{products.desc}</p>
        </div>

        <div className="product-grid">
          {products.items.map((item, index) => (
            <a
              className="product-card reveal"
              href={`#/product/${item.slug}`}
              key={item.slug}
              style={{ transitionDelay: `${Math.min(index, 8) * 45}ms` }}
            >
              <div className="product-card__image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-card__body">
                <span className="product-card__index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="spec-list">
                  <span>{item.speed}</span>
                  <span>{item.width}</span>
                </div>
                <em>{products.open}</em>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
