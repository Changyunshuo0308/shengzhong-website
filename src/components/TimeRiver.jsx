import { useEffect, useRef } from 'react'

export default function TimeRiver({ items, title }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let tick = 0
    let raf = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.floor(canvas.clientWidth * ratio)
      canvas.height = Math.floor(canvas.clientHeight * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      tick += 0.012
      ctx.clearRect(0, 0, w, h)

      for (let layer = 0; layer < 5; layer += 1) {
        ctx.beginPath()
        for (let x = -120; x <= w + 120; x += 18) {
          const p = x / w
          const center = h * (0.74 - layer * 0.065)
          const y = center - Math.sin(p * Math.PI * 2 + tick * (1.4 + layer * 0.18)) * (44 + layer * 14) - Math.sin(p * Math.PI * 5 - tick * 1.2) * 16
          if (x === -120) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(235, 177, 66, ${0.12 + layer * 0.055})`
        ctx.lineWidth = 18 - layer * 2.4
        ctx.shadowColor = '#ffbd4a'
        ctx.shadowBlur = 22
        ctx.stroke()
      }

      for (let i = 0; i < 160; i += 1) {
        const x = ((i * 97 + tick * 640) % (w + 160)) - 80
        const p = x / w
        const y = h * 0.68 - Math.sin(p * Math.PI * 2 + tick * 1.7) * 74 + Math.sin(i) * 28
        const alpha = 0.18 + (i % 7) * 0.065
        ctx.fillStyle = `rgba(255, 215, 128, ${alpha})`
        ctx.shadowColor = '#ffd780'
        ctx.shadowBlur = i % 9 === 0 ? 18 : 4
        ctx.beginPath()
        ctx.arc(x, y, i % 11 === 0 ? 2.4 : 1.25, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="time-river">
      <canvas ref={ref} className="time-river__canvas" aria-hidden="true" />
      <div className="time-river__content">
        <h3>{title}</h3>
        <div className="time-river__cards">
          {items.map(([year, text], index) => (
            <article className="river-card reveal" key={year} style={{ transitionDelay: `${index * 80}ms` }}>
              <strong>{year}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
