import React, { useState, useEffect, useRef, useMemo } from "https://esm.sh/react@19"
import { createRoot } from "https://esm.sh/react-dom@19/client"
import { renderToStaticMarkup } from 'https://esm.sh/react-dom@19/server'
import rough from "https://esm.sh/roughjs"
import { TreePalm, Parasol, Sailboat } from "https://esm.sh/lucide-react"

const FRAME_COUNT = 12
const FRAME_INTERVAL = 250

const App = () => {
  const canvasRef = useRef(null)
  const framesRef = useRef([])
  const frameIndexRef = useRef(0)
  const lastDrawTimeRef = useRef(0)
  const rafRef = useRef(null)

  const icons = useMemo(() => {
    return [
      { icon: TreePalm, color: 'seagreen', position: [10, 120], scale: 6 },
      { icon: Parasol, color: 'hotpink', position: [290, 170], scale: 4 },
      { icon: Sailboat, color: 'darkorange', position: [260, 90], scale: 3 },
    ].map(({ icon, color, ...rest }) => {
      const svg = renderToStaticMarkup(React.createElement(icon))
      const parser = new DOMParser()
      const doc = parser.parseFromString(svg, 'image/svg+xml')
      const svgEl = doc.querySelector('svg')
      const pathEls = svgEl?.querySelectorAll('path') ?? []
      const paths = [...pathEls].map(p => p.getAttribute('d'))
      return { paths, color, ...rest }
    })
  }, [])

  const draw = (ctx, rc) => {
    rc.rectangle(0, 0, 400, 100, { fill: 'coral', stroke: 'transparent', roughness: 0.2 }) // sky
    
    rc.path('M130 100 A 70 70 0 0 1 270 100 L130 100 Z', { fill: '#ffcc33', stroke: '#ffcc33', fillWeight: 2, hachureAngle: 90 }) // sun (top)
    rc.path('M140 100 A 60 60 0 0 0 260 100 L140 100 Z', { fill: 'gold', stroke: 'transparent', fillWeight: 2, hachureGap: 8, hachureAngle: 90, roughness: 2 }) // sun (bottom)
    
    rc.rectangle(0, 100, 400, 100, { fill: 'royalblue', stroke: 'transparent', hachureGap: 5, roughness: 0.5 }) // sea
    rc.rectangle(0, 200, 400, 100, { fill: 'burlywood', stroke: 'transparent', roughness: 0.2 }) // beach

    for (const { paths, color, position, scale } of icons) {
      ctx.save()
      ctx.translate(...position)
      ctx.scale(scale, scale) // enlarge the icon

      for (const d of paths) {
        rc.path(d, {
          stroke: color,
          fill: color,
          fillWeight: 1.5 / scale,
          roughness: 0.5,
          strokeWidth: 1.5 / scale,
        })
      }
      ctx.restore() // reset the offset and scale
    }
  }

  // pre-render frames to save the rendering
  const preRenderFrames = (cw, ch, dpr) => {
    framesRef.current = Array.from({ length: FRAME_COUNT }, () => {
      const offscreen = new OffscreenCanvas(cw * dpr, ch * dpr)
      const offCtx = offscreen.getContext('2d')
      offCtx.scale(dpr, dpr)

      const rc = rough.canvas(offscreen)
      draw(offCtx, rc, icons)
      return offscreen
    })
  }

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // handle canvas resolution
    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.clientWidth * dpr
    canvas.height = canvas.clientHeight * dpr
    const [cw, ch] = [canvas.width, canvas.height]
    ctx.scale(dpr, dpr)

    preRenderFrames(cw, ch, dpr)

    const loop = (t) => {
      rafRef.current = requestAnimationFrame(loop)
      if (framesRef.current.length < FRAME_COUNT) return
      if (t - lastDrawTimeRef.current < FRAME_INTERVAL) return

      lastDrawTimeRef.current = t
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(framesRef.current[frameIndexRef.current], 0, 0, cw, ch)
      frameIndexRef.current = (frameIndexRef.current + 1) % FRAME_COUNT
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  )
}

const root = createRoot(document.getElementById("app"))

root.render(<App />)