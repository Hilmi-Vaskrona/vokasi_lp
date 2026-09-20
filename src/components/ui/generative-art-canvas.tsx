import React from "react"

interface GenerativeArtCanvasProps {
  isHovered: boolean
  color?: string
  className?: string
}

export function GenerativeArtCanvas({
  isHovered,
  color = "rgba(59, 130, 246, 0.4)", // Theme-matched Delta Team blue
  className = ""
}: GenerativeArtCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const numLines = 35

    class Line {
      x: number
      y: number
      speed: number
      angle: number
      length: number
      alpha: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.speed = Math.random() * 0.6 + 0.15
        this.angle = Math.random() * Math.PI * 2
        this.length = Math.random() * 25 + 8
        this.alpha = Math.random() * 0.35 + 0.15
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        if (
          this.x < 0 ||
          this.x > canvas!.width ||
          this.y < 0 ||
          this.y > canvas!.height
        ) {
          this.x = Math.random() * canvas!.width
          this.y = Math.random() * canvas!.height
          this.angle = Math.random() * Math.PI * 2
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length,
          this.y - Math.sin(this.angle) * this.length
        )

        // If color contains comma-separated values or rgba, respect it, otherwise fallback
        if (color.startsWith("rgba")) {
          ctx.strokeStyle = color.replace(/[\d.]+\)$/, `${this.alpha})`)
        } else {
          ctx.strokeStyle = color
        }

        ctx.lineWidth = 1.2
        ctx.stroke()
      }
    }

    let lines: Line[] = []

    const init = () => {
      lines = []
      for (let i = 0; i < numLines; i++) {
        lines.push(new Line())
      }
    }

    const animate = () => {
      if (isHovered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        lines.forEach((line) => {
          line.update()
          line.draw()
        })
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    canvas.width = canvas.parentElement?.clientWidth || 400
    canvas.height = canvas.parentElement?.clientHeight || 300
    init()
    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovered, color])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${className}`}
    />
  )
}

export default GenerativeArtCanvas
