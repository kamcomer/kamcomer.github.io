/**
 * Perlin-noise flow field drawn as fading particle trails. Ported from the legacy
 * FlowFieldEffect, with the per-particle shadowBlur dropped (the main cost) and pausing
 * when off screen or when the user prefers reduced motion.
 */

class Perlin {
  private perm: Uint8Array

  constructor() {
    const p = new Uint8Array(256).map(() => Math.floor(Math.random() * 256))
    this.perm = new Uint8Array(512)
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255]
  }

  private grad(hash: number, x: number, y: number) {
    const h = hash & 3
    return (h & 1 ? -x : x) + (h & 2 ? -y : y)
  }

  noise(xin: number, yin: number) {
    const X = Math.floor(xin) & 255
    const Y = Math.floor(yin) & 255
    const x = xin - Math.floor(xin)
    const y = yin - Math.floor(yin)
    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
    const lerp = (a: number, b: number, t: number) => a + t * (b - a)
    const u = fade(x)
    const v = fade(y)
    const p = this.perm
    return lerp(
      lerp(this.grad(p[X + p[Y]], x, y), this.grad(p[X + 1 + p[Y]], x - 1, y), u),
      lerp(this.grad(p[X + p[Y + 1]], x, y - 1), this.grad(p[X + 1 + p[Y + 1]], x - 1, y - 1), u),
      v,
    )
  }
}

interface Particle {
  x: number
  y: number
  px: number
  py: number
  life: number
}

export function mountFlowField(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
  const perlin = new Perlin()
  const particles: Particle[] = []
  let width = 0
  let height = 0
  let t = 0
  let frame = 0
  let visible = true
  let stroke = ""
  let fade = ""

  const readColors = () => {
    const styles = getComputedStyle(document.documentElement)
    stroke = styles.getPropertyValue("--primary").trim()
    fade = styles.getPropertyValue("--bg").trim()
  }

  const spawn = (p?: Particle): Particle => {
    const x = Math.random() * width
    const y = Math.random() * height
    const life = 80 + Math.random() * 220
    if (!p) return { x, y, px: x, py: y, life }
    Object.assign(p, { x, y, px: x, py: y, life })
    return p
  }

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = canvas.clientWidth
    height = canvas.clientHeight
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const target = Math.min(1400, Math.floor((width * height) / 1100))
    particles.length = 0
    for (let i = 0; i < target; i++) particles.push(spawn())
    ctx.fillStyle = fade
    ctx.fillRect(0, 0, width, height)
  }

  const step = () => {
    ctx.globalAlpha = 0.05
    ctx.fillStyle = fade
    ctx.fillRect(0, 0, width, height)
    ctx.globalAlpha = 0.85
    ctx.strokeStyle = stroke
    ctx.lineWidth = 1.25
    ctx.beginPath()
    for (const p of particles) {
      const angle = perlin.noise(p.x * 0.0035, p.y * 0.0035 + t * 0.0009) * Math.PI * 3
      p.px = p.x
      p.py = p.y
      p.x += Math.cos(angle) * 1.4
      p.y += Math.sin(angle) * 1.4
      p.life--
      if (p.life < 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
        spawn(p)
        continue
      }
      ctx.moveTo(p.px, p.py)
      ctx.lineTo(p.x, p.y)
    }
    ctx.stroke()
    ctx.globalAlpha = 1
    t++
  }

  const loop = () => {
    step()
    frame = requestAnimationFrame(loop)
  }

  const start = () => {
    cancelAnimationFrame(frame)
    if (!visible) return
    if (reduced.matches) {
      // Render a still frame so the hero keeps its texture
      for (let i = 0; i < 120; i++) step()
      return
    }
    loop()
  }

  readColors()
  resize()
  start()

  new ResizeObserver(() => {
    resize()
    start()
  }).observe(canvas)

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    start()
  }).observe(canvas)

  reduced.addEventListener("change", start)
  document.addEventListener("themechange", () => {
    readColors()
    resize()
    start()
  })
}
