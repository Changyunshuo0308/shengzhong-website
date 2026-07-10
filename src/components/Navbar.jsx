import { useEffect, useState } from 'react'
import { useLang } from '../App.jsx'
import { asset } from '../utils/asset.js'

const languages = [
  { code: 'zh', label: '中文' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' }
]

export default function Navbar({ detailMode = false }) {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    if (detailMode) {
      window.location.hash = ''
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 40)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  const navItems = [
    ['about', t.nav.about],
    ['products', t.nav.products],
    ['advantages', t.nav.advantages],
    ['contact', t.nav.contact]
  ]

  return (
    <header className={`nav ${scrolled || detailMode ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <button className="brand" onClick={() => { window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="brand__mark">
            <img className="brand__logo" src={asset('/images/cys-logo.png')} alt="CYS CNC Equipment" />
          </span>
          <span className="brand__text">{t.brand}</span>
        </button>

        <button className="nav__toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          <span />
          <span />
        </button>

        <div className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
          <nav className="nav__links">
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => go(id)}>{label}</button>
            ))}
          </nav>
          <div className="lang">
            {languages.map((item) => (
              <button
                key={item.code}
                className={lang === item.code ? 'active' : ''}
                onClick={() => setLang(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
