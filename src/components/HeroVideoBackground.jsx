import { useEffect, useRef } from 'react'

export default function HeroVideoBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let frame = 0
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
      frame += 0.008
      ctx.clearRect(0, 0, w, h)

      const gradient = ctx.createLinearGradient(0, 0, w, h)
      gradient.addColorStop(0, '#10100d')
      gradient.addColorStop(0.52, '#f4f1e8')
      gradient.addColorStop(1, '#ffffff')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, w, h)

      ctx.globalAlpha = 0.28
      for (let i = 0; i < 18; i += 1) {
        const y = h * 0.18 + i * 34 + Math.sin(frame * 4 + i) * 8
        ctx.strokeStyle = i % 3 === 0 ? '#c6a34f' : '#ffffff'
        ctx.lineWidth = i % 3 === 0 ? 1.2 : 0.55
        ctx.beginPath()
        ctx.moveTo(-80, y)
        ctx.bezierCurveTo(w * 0.25, y - 70, w * 0.65, y + 80, w + 80, y - 20)
        ctx.stroke()
      }

      ctx.globalAlpha = 0.18
      for (let i = 0; i < 28; i += 1) {
        const x = ((i * 97 + frame * 1400) % (w + 180)) - 90
        const y = h * 0.58 + Math.sin(frame * 2 + i) * 90
        ctx.fillStyle = i % 4 === 0 ? '#c6a34f' : '#d8d1bd'
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(frame * 2 + i)
        ctx.fillRect(-18, -10, 36, 20)
        ctx.restore()
      }

      ctx.globalAlpha = 1
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

  return <canvas className="hero-video" ref={ref} aria-hidden="true" />
}
