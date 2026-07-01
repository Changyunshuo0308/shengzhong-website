import { useState } from 'react'
import { useLang } from '../App.jsx'

const WEB3FORMS_ACCESS_KEY = 'a2df081f-2de5-4ea8-94ab-d57d1f2c33e6'
const GOOGLE_FORM_RESPONSE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdYHf2eI_oKIx_XH19CeRMDN4bb_f52tPHqv3ERaq2aBkR2vQ/formResponse'

const GOOGLE_FORM_FIELDS = {
  name: 'entry.655919084',
  email: 'entry.1123161134',
  phone: 'entry.201850104',
  company: 'entry.693731949',
  country: 'entry.393924628',
  message: 'entry.1518647973',
  contactMethod: 'entry.235272457'
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const formText = c.form
  const [status, setStatus] = useState('idle')

  const submitToGoogleForms = (data) => {
    const googleData = new URLSearchParams()
    Object.entries(GOOGLE_FORM_FIELDS).forEach(([key, entryName]) => {
      const value = data.get(key)
      if (value) googleData.append(entryName, value)
    })
    googleData.append('submit', 'Submit')

    return fetch(GOOGLE_FORM_RESPONSE_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: googleData.toString()
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')

    try {
      const web3Data = new FormData()
      web3Data.append('access_key', WEB3FORMS_ACCESS_KEY)
      web3Data.append('subject', 'New inquiry from shengzhongcnc.com')
      web3Data.append('from_name', 'ShengZhong Website')
      web3Data.append('name', data.get('name') || '')
      web3Data.append('email', data.get('email') || '')
      web3Data.append('phone', data.get('phone') || '')
      web3Data.append('company', data.get('company') || '')
      web3Data.append('country', data.get('country') || '')
      web3Data.append('preferred_contact_method', data.get('contactMethod') || '')
      web3Data.append('message', data.get('message') || '')

      const [web3Response] = await Promise.all([
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: web3Data
        }),
        submitToGoogleForms(data)
      ])

      if (!web3Response.ok) throw new Error('Email delivery failed')

      setStatus('sent')
      form.reset()
    } catch (error) {
      setStatus('error')
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

        <form className="contact-final__form reveal" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
          <input type="text" name="name" placeholder={formText.name} required />
          <input type="email" name="email" placeholder={formText.email} required />
          <input type="tel" name="phone" placeholder={formText.phone} required />
          <input type="text" name="company" placeholder={formText.company} />
          <input type="text" name="country" placeholder={formText.country} />
          <textarea name="message" rows="6" placeholder={formText.message} required />
          <select name="contactMethod" defaultValue="" aria-label={formText.contactMethod}>
            <option value="">{formText.contactMethod}</option>
            <option value="Email">{formText.options.email}</option>
            <option value="WhatsApp">{formText.options.whatsapp}</option>
            <option value="Phone">{formText.options.phone}</option>
          </select>
          <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? formText.sending : formText.submit}
          </button>
          {status === 'sent' && <p className="contact-final__status">{formText.sent}</p>}
          {status === 'error' && <p className="contact-final__status contact-final__status--error">{formText.error}</p>}
        </form>
      </div>
    </section>
  )
}
