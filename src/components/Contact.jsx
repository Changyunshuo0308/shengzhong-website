import { useLang } from '../App.jsx'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

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

        <form className="contact-final__form reveal" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="a2df081f-2de5-4ea8-94ab-d57d1f2c33e6" />
          <input type="hidden" name="subject" value="New inquiry from shengzhongcnc.com" />
          <input type="hidden" name="from_name" value="Shengzhong CNC Website" />
          <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />
          <input type="text" name="name" placeholder={c.form[0]} required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder={c.form[1]} required />
          <textarea name="message" rows="6" placeholder={c.form[2]} required />
          <button className="btn btn--primary" type="submit">{c.form[3]}</button>
        </form>
      </div>
    </section>
  )
}
