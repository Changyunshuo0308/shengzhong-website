import { useState } from 'react'
import { useLang } from '../App.jsx'

export default function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState('idle')
  const c = t.contact
  const isSending = status === 'sending'
  const statusText = {
    idle: c.form[3],
    sending: '...',
    sent: c.form[4],
    error: '请稍后再试'
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) return

    setStatus('sending')
    try {
      const response = await fetch('https://formsubmit.co/ajax/qdszsk@126.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      })

      if (!response.ok) throw new Error('Form submission failed')

      setStatus('sent')
      form.reset()
      window.setTimeout(() => setStatus('idle'), 2600)
    } catch {
      setStatus('error')
      window.setTimeout(() => setStatus('idle'), 3200)
    }
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
          <input type="hidden" name="_subject" value="New inquiry from shengzhongcnc.com" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
          <input type="text" name="name" placeholder={c.form[0]} required />
          <input type="tel" name="phone" placeholder={c.form[1]} required />
          <textarea name="message" rows="6" placeholder={c.form[2]} required />
          <button className="btn btn--primary" type="submit" disabled={isSending}>{statusText[status]}</button>
        </form>
      </div>
    </section>
  )
}
