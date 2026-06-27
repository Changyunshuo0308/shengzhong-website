export default function TimepieceTimeline({ items, title }) {
  return (
    <div className="timepiece">
      <div className="timepiece__watch" aria-hidden="true">
        <span className="timepiece__ring" />
        <span className="timepiece__hand timepiece__hand--hour" />
        <span className="timepiece__hand timepiece__hand--minute" />
        <span className="timepiece__pin" />
      </div>
      <div className="timepiece__content">
        <h3>{title}</h3>
        <div className="timepiece__track">
          {items.map(([year, text], index) => (
            <article className="time-card reveal" key={year} style={{ transitionDelay: `${index * 80}ms` }}>
              <strong>{year}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
