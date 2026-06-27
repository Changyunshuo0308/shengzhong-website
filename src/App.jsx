import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import getSiteData from './data/siteData.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import EfficiencyFilm from './components/EfficiencyFilm.jsx'
import History from './components/History.jsx'
import Products from './components/Products.jsx'
import Advantages from './components/Advantages.jsx'
import Contact from './components/Contact.jsx'
import ProductDetail from './components/ProductDetail.jsx'

export const LangContext = createContext()
export const useLang = () => useContext(LangContext)

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return hash
}

export default function App() {
  const [lang, setLang] = useState('zh')
  const route = useHashRoute()
  const t = useMemo(() => getSiteData(lang), [lang])
  const productSlug = route.startsWith('#/product/') ? route.replace('#/product/', '') : ''
  const activeProduct = t.products.items.find((item) => item.slug === productSlug)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.14 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [lang, route])

  useEffect(() => {
    if (activeProduct) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [activeProduct?.slug])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="app">
        <Navbar detailMode={Boolean(activeProduct)} />
        {activeProduct ? (
          <ProductDetail product={activeProduct} />
        ) : (
          <>
            <Hero />
            <EfficiencyFilm />
            <History />
            <Products />
            <Advantages />
            <Contact />
          </>
        )}
      </div>
    </LangContext.Provider>
  )
}
