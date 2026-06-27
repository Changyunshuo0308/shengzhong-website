import { useMemo, useState } from 'react'
import { useLang } from '../App.jsx'

export default function Hero() {
  const { t } = useLang()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const showcaseProducts = useMemo(() => t.products.items.slice(0, 12), [t])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -12
    setTilt({ x, y })
  }

  return (
    <section id="hero" className="hero" onPointerMove={handlePointerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="hero__shade" />
      <div className="container hero__inner">
        <div className="hero__copy reveal visible">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('products')}>{t.hero.primary}</button>
            <button className="btn btn--ghost" onClick={() => scrollTo('about')}>{t.hero.secondary}</button>
          </div>
        </div>

        <div className="hero__stage reveal visible">
          <div className="product-showcase">
            <div
              className="product-showcase__tilt"
              style={{ '--tilt-x': `${tilt.x}deg`, '--tilt-y': `${tilt.y}deg` }}
            >
              <div className="product-showcase__ring">
                {showcaseProducts.map((item, index) => (
                  <a
                    className="showcase-card"
                    href={`#/product/${item.slug}`}
                    key={item.slug}
                    style={{ '--angle': `${index * (360 / showcaseProducts.length)}deg` }}
                  >
                    <span className="showcase-card__name">{item.name}</span>
                    <img src={item.image} alt={item.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
