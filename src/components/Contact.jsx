import { useState } from 'react'
import { useLang } from '../App.jsx'

export default function Contact() {
  const { t } = useLang()
  const [sent, setSent] = useState(false)
  const c = t.contact

  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSent(false), 2200)
  }

  return (
    <section id="contact" className="contact-final">
      <div className="contact-final__bg" />
      <div className="container contact-final__grid">
        <div className="contact-final__copy reveal">
          <p className="section-label">{c.label}</p>
          <h2>{c.title}</h2>
          <p>{c.desc}</p>
          <div className="contact-final__list">
            <span>{c.company}</span>
            <strong>{c.phone}</strong>
            <strong>{c.phone2}</strong>
            <strong>{c.email}</strong>
            <strong>{c.website}</strong>
            <span>{c.address}</span>
          </div>
        </div>

        <form className="contact-final__form reveal" onSubmit={onSubmit}>
          <input type="text" placeholder={c.form[0]} required />
          <input type="tel" placeholder={c.form[1]} required />
          <textarea rows="6" placeholder={c.form[2]} required />
          <button className="btn btn--primary" type="submit">{sent ? c.form[4] : c.form[3]}</button>
        </form>
      </div>
    </section>
  )
}
