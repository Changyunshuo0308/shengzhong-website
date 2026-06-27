import { useEffect, useMemo, useRef } from 'react'

function project(lat, lng, rotation, width, height, tilt = 0) {
  const phi = (90 - lat) * Math.PI / 180
  const theta = (lng + rotation) * Math.PI / 180
  const x = Math.sin(phi) * Math.cos(theta)
  const y = Math.cos(phi)
  const z = Math.sin(phi) * Math.sin(theta)
  const tiltRad = tilt * Math.PI / 180
  const y2 = y * Math.cos(tiltRad) - z * Math.sin(tiltRad)
  const z2 = y * Math.sin(tiltRad) + z * Math.cos(tiltRad)
  const scale = 1.9 / (2.6 - z2)
  const radius = Math.min(width, height) * 0.42
  return {
    x: width / 2 + x * radius * scale,
    y: height / 2 - y2 * radius * scale,
    z: z2,
    scale
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value))
}

export default function Globe3D({ countries }) {
  const ref = useRef(null)
  const stars = useMemo(() => Array.from({ length: 120 }, (_, i) => ({
    x: (Math.sin(i * 43.12) * 0.5 + 0.5),
    y: (Math.cos(i * 21.77) * 0.5 + 0.5),
    r: 0.6 + ((i * 7) % 11) / 10,
    glow: i % 7 === 0
  })), [])
  const network = useMemo(() => {
    const nodes = []
    for (let lat = -58; lat <= 68; lat += 14) {
      for (let lng = -170; lng <= 180; lng += 18) {
        if ((Math.sin((lat + lng) * 0.21) + Math.cos(lng * 0.15)) > -0.6) {
          nodes.push({ lat: lat + Math.sin(lng) * 2, lng: lng + Math.cos(lat) * 2 })
        }
      }
    }
    return nodes
  }, [])
  const landMasses = useMemo(() => [
    { color: '#6f9d5f', points: [[72, -12], [64, 45], [58, 103], [46, 140], [24, 122], [10, 103], [20, 78], [10, 50], [28, 31], [36, 5], [52, -8]] },
    { color: '#b69557', points: [[36, -18], [31, 32], [14, 48], [-25, 39], [-35, 18], [-21, 2], [0, -12], [20, -16]] },
    { color: '#5f9659', points: [[58, -168], [66, -92], [48, -58], [26, -83], [15, -105], [24, -136], [44, -162]] },
    { color: '#568f59', points: [[12, -82], [7, -58], [-18, -44], [-52, -68], [-30, -78], [-7, -79]] },
    { color: '#947849', points: [[-12, 112], [-10, 153], [-32, 153], [-39, 124], [-26, 112]] },
    { color: '#6f9f62', points: [[23, 96], [20, 108], [8, 112], [-7, 106], [-4, 96], [11, 92]] },
    { color: '#6d9c5e', points: [[14, 118], [19, 124], [10, 128], [4, 122]] }
  ], [])
  const denseDots = useMemo(() => {
    const dots = []
    countries.forEach((country, index) => {
      const amount = Math.max(3, Math.round(country.count / 5))
      for (let i = 0; i < amount; i += 1) {
        const jitterLat = Math.sin(i * 7.7 + index) * 2.4
        const jitterLng = Math.cos(i * 5.3 + index) * 3.2
        dots.push({
          lat: country.lat + jitterLat,
          lng: country.lng + jitterLng,
          count: country.count,
          name: country.name
        })
      }
    })
    return dots
  }, [countries])

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let rotation = -20
    let tilt = -5
    let spinVelocity = 0
    let isDragging = false
    let lastX = 0
    let lastY = 0
    let raf = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.floor(canvas.clientWidth * ratio)
      canvas.height = Math.floor(canvas.clientHeight * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const pointerPosition = (event) => {
      const point = event.touches?.[0] || event
      return { x: point.clientX, y: point.clientY }
    }

    const onPointerDown = (event) => {
      const point = pointerPosition(event)
      isDragging = true
      spinVelocity = 0
      lastX = point.x
      lastY = point.y
      canvas.classList.add('is-dragging')
      event.preventDefault()
    }

    const onPointerMove = (event) => {
      if (!isDragging) return
      const point = pointerPosition(event)
      const dx = point.x - lastX
      const dy = point.y - lastY
      rotation += dx * 0.28
      tilt = clamp(tilt + dy * 0.18, -42, 42)
      spinVelocity = dx * 0.028
      lastX = point.x
      lastY = point.y
      event.preventDefault()
    }

    const onPointerUp = () => {
      isDragging = false
      canvas.classList.remove('is-dragging')
    }

    const draw = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (!isDragging) {
        rotation += 0.09 + spinVelocity
        spinVelocity *= 0.94
        if (Math.abs(spinVelocity) < 0.01) spinVelocity = 0
      }
      ctx.clearRect(0, 0, w, h)

      stars.forEach((star, index) => {
        const pulse = 0.28 + Math.sin(rotation * 0.03 + index) * 0.18
        ctx.fillStyle = star.glow ? `rgba(205,163,74,${0.08 + pulse * 0.18})` : `rgba(122,90,31,${0.04 + pulse * 0.08})`
        ctx.shadowColor = 'rgba(205,163,74,.18)'
        ctx.shadowBlur = star.glow ? 5 : 0
        ctx.beginPath()
        ctx.arc(star.x * w, star.y * h, star.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      const radius = Math.min(w, h) * 0.5
      const cx = w * 0.5
      const cy = h * 0.48

      const aura = ctx.createRadialGradient(cx, cy, radius * 0.34, cx, cy, radius * 1.3)
      aura.addColorStop(0, 'rgba(205,163,74,.08)')
      aura.addColorStop(0.62, 'rgba(205,163,74,.04)')
      aura.addColorStop(1, 'rgba(205,163,74,0)')
      ctx.fillStyle = aura
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.45, 0, Math.PI * 2)
      ctx.fill()

      const globe = ctx.createRadialGradient(cx - radius * 0.35, cy - radius * 0.35, radius * 0.12, cx, cy, radius)
      globe.addColorStop(0, '#ffffff')
      globe.addColorStop(0.22, '#edf9f6')
      globe.addColorStop(0.58, '#d7eee7')
      globe.addColorStop(0.86, '#c7dfd7')
      globe.addColorStop(1, '#bcd5ce')
      ctx.fillStyle = globe
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.02, 0, Math.PI * 2)
      ctx.clip()
      landMasses.forEach((land, landIndex) => {
        const projected = land.points.map(([lat, lng]) => project(lat, lng, rotation, w, h, tilt))
        if (!projected.some((p) => p.z > -0.12)) return
        ctx.globalAlpha = 0.76
        ctx.fillStyle = land.color
        ctx.strokeStyle = landIndex % 2 === 0 ? 'rgba(232,213,166,.55)' : 'rgba(73,112,69,.38)'
        ctx.lineWidth = 1
        ctx.beginPath()
        projected.forEach((p, index) => {
          if (index === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        })
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      })

      ctx.globalAlpha = 0.16
      for (let i = 0; i < 10; i += 1) {
        const cloudY = cy - radius * 0.72 + i * radius * 0.16 + Math.sin(rotation * 0.03 + i) * 10
        ctx.strokeStyle = 'rgba(255,255,255,.8)'
        ctx.lineWidth = 2.5 + (i % 3) * 1.5
        ctx.beginPath()
        ctx.moveTo(cx - radius * 1.2, cloudY)
        ctx.bezierCurveTo(cx - radius * 0.4, cloudY - 34, cx + radius * 0.34, cloudY + 30, cx + radius * 1.2, cloudY - 12)
        ctx.stroke()
      }
      ctx.restore()

      ctx.strokeStyle = 'rgba(255,255,255,0.28)'
      ctx.lineWidth = 1
      for (let i = -60; i <= 60; i += 20) {
        ctx.beginPath()
        for (let lng = -180; lng <= 180; lng += 6) {
          const p = project(i, lng, rotation, w, h, tilt)
          if (p.z > -0.96) {
            if (lng === -180) ctx.moveTo(p.x, p.y)
            else ctx.lineTo(p.x, p.y)
          }
        }
        ctx.stroke()
      }
      for (let lng = -150; lng <= 180; lng += 30) {
        ctx.beginPath()
        for (let lat = -80; lat <= 80; lat += 4) {
          const p = project(lat, lng, rotation, w, h, tilt)
          if (p.z > -0.96) {
            if (lat === -80) ctx.moveTo(p.x, p.y)
            else ctx.lineTo(p.x, p.y)
          }
        }
        ctx.stroke()
      }

      const visibleNodes = network.map((node) => ({
        ...node,
        p: project(node.lat, node.lng, rotation, w, h, tilt)
      })).filter((node) => node.p.z > -0.08)

      ctx.strokeStyle = 'rgba(146,205,255,.42)'
      ctx.lineWidth = 0.9
      visibleNodes.forEach((node, index) => {
        const next = visibleNodes[index + 1]
        const skip = visibleNodes[index + 7]
        ;[next, skip].forEach((target) => {
          if (!target) return
          const dist = Math.hypot(node.p.x - target.p.x, node.p.y - target.p.y)
          if (dist > radius * 0.34) return
          ctx.beginPath()
          ctx.moveTo(node.p.x, node.p.y)
          ctx.lineTo(target.p.x, target.p.y)
          ctx.stroke()
        })
      })
      visibleNodes.forEach((node, index) => {
        const alpha = Math.min(1, 0.25 + node.p.z)
        ctx.fillStyle = index % 9 === 0 ? `rgba(255,218,153,${alpha})` : `rgba(224,245,255,${alpha})`
        ctx.shadowColor = '#a9ddff'
        ctx.shadowBlur = index % 6 === 0 ? 16 : 8
        ctx.beginPath()
        ctx.arc(node.p.x, node.p.y, (index % 5 === 0 ? 3.2 : 1.9) * node.p.scale, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      denseDots.forEach((dot) => {
        const p = project(dot.lat, dot.lng, rotation, w, h, tilt)
        if (p.z < -0.14) return
        const alpha = Math.min(1, 0.34 + p.z)
        const size = Math.max(1.4, Math.min(4.2, dot.count / 32)) * p.scale
        ctx.fillStyle = `rgba(236, 196, 93, ${alpha})`
        ctx.shadowColor = 'rgba(236,196,93,.9)'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      ctx.strokeStyle = 'rgba(255,255,255,.82)'
      ctx.lineWidth = 2
      ctx.shadowColor = 'rgba(255,255,255,.72)'
      ctx.shadowBlur = 12
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.015, -Math.PI * 0.9, Math.PI * 0.78)
      ctx.stroke()
      ctx.shadowBlur = 0

      const visibleCountries = countries
        .map((country) => ({ ...country, p: project(country.lat, country.lng, rotation, w, h, tilt) }))
        .filter((country) => country.p.z > 0.08)
        .sort((a, b) => b.p.z - a.p.z)
        .slice(0, 7)

      const labelBoxes = []
      visibleCountries.forEach((country, index) => {
        const p = country.p
        const label = country.name
        const textSize = Math.max(10, Math.min(13, 10.5 * p.scale))
        ctx.font = `800 ${textSize}px Inter, Arial, sans-serif`
        const textWidth = ctx.measureText(label).width
        const padX = 8
        const boxW = textWidth + padX * 2
        const boxH = textSize + 9
        const side = index % 2 === 0 ? 1 : -1
        let x = p.x + side * (14 + index * 3)
        let y = p.y - 20 - (index % 3) * 10
        x = Math.max(12, Math.min(w - boxW - 12, x))
        y = Math.max(18, Math.min(h - boxH - 16, y))
        const overlaps = () => labelBoxes.some((box) => (
          x < box.x + box.w + 6 &&
          x + boxW + 6 > box.x &&
          y < box.y + box.h + 6 &&
          y + boxH + 6 > box.y
        ))
        let attempts = 0
        while (overlaps() && attempts < 8) {
          y += boxH + 8
          if (y > h - boxH - 16) y = Math.max(18, p.y - boxH - 34 - attempts * 10)
          attempts += 1
        }
        labelBoxes.push({ x, y, w: boxW, h: boxH })

        ctx.strokeStyle = 'rgba(122,90,31,.36)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(x + boxW / 2, y + boxH)
        ctx.stroke()

        ctx.fillStyle = 'rgba(255,255,255,.88)'
        ctx.strokeStyle = 'rgba(205,163,74,.52)'
        ctx.shadowColor = 'rgba(122,90,31,.16)'
        ctx.shadowBlur = 14
        ctx.beginPath()
        ctx.roundRect(x, y, boxW, boxH, 8)
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.stroke()

        ctx.fillStyle = '#513b14'
        ctx.fillText(label, x + padX, y + textSize + 3)
      })

      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousedown', onPointerDown)
    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('mouseup', onPointerUp)
    canvas.addEventListener('touchstart', onPointerDown, { passive: false })
    window.addEventListener('touchmove', onPointerMove, { passive: false })
    window.addEventListener('touchend', onPointerUp)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup', onPointerUp)
      canvas.removeEventListener('touchstart', onPointerDown)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('touchend', onPointerUp)
    }
  }, [countries, denseDots, landMasses, network, stars])

  return <canvas className="globe3d" ref={ref} aria-label="global delivery map" />
}
