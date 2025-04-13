"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })

  // Create grid lines
  useEffect(() => {
    if (!gridRef.current) return

    // Create horizontal lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement("div")
      line.className = "grid-line grid-line-horizontal"
      line.style.top = `${i * 5}%`
      gridRef.current.appendChild(line)
    }

    // Create vertical lines
    for (let i = 0; i < 20; i++) {
      const line = document.createElement("div")
      line.className = "grid-line grid-line-vertical"
      line.style.left = `${i * 5}%`
      gridRef.current.appendChild(line)
    }
  }, [])

  // Handle mouse movement for grid glow effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gridRef.current) return

    const rect = gridRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setIsHovering(true)
    setHoverPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  // Apply glow effect to grid lines
  useEffect(() => {
    if (!gridRef.current || !isHovering) return

    const lines = gridRef.current.querySelectorAll(".grid-line")
    lines.forEach((line) => {
      const lineRect = line.getBoundingClientRect()
      const gridRect = gridRef.current!.getBoundingClientRect()

      // Calculate distance from mouse to line
      let distance = 0
      if (line.classList.contains("grid-line-horizontal")) {
        const lineY = lineRect.top - gridRect.top + lineRect.height / 2
        distance = Math.abs(hoverPosition.y - lineY)
      } else {
        const lineX = lineRect.left - gridRect.left + lineRect.width / 2
        distance = Math.abs(hoverPosition.x - lineX)
      }

      // Apply glow based on distance
      const maxDistance = 100
      if (distance < maxDistance) {
        const intensity = 1 - distance / maxDistance
        const glow = `0 0 ${intensity * 10}px rgba(80, 250, 123, ${intensity * 0.8})`
        line.setAttribute(
          "style",
          `${line.getAttribute("style")}; box-shadow: ${glow}; background-color: rgba(80, 250, 123, ${0.1 + intensity * 0.4});`,
        )
      } else {
        line.setAttribute(
          "style",
          `${line.getAttribute("style")}; box-shadow: none; background-color: rgba(80, 250, 123, 0.1);`,
        )
      }
    })
  }, [isHovering, hoverPosition])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#121212]">
      <div className="scanline"></div>
      <div ref={gridRef} className="grid-lines" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] to-[#1a1a1a] opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-2 inline-block px-3 py-1 border border-[#333] bg-[#1a1a1a] text-[#50fa7b] text-sm font-mono animate-fade-in-up">
          $ ./welcome.sh
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up cyberpunk-heading">
          <span className="text-[#f8f8f2]">Hi, I'm </span>
          <span className="text-[#50fa7b] glitch" data-text="Aditya Ghildiyal">
            Aditya Ghildiyal
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-[#8be9fd] font-mono">
          <span className="animate-typing">Crafting elegant solutions through code</span>
          <span className="terminal-cursor"></span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="inline-flex items-center bg-transparent hover:bg-[#50fa7b] text-[#50fa7b] hover:text-[#121212] font-mono py-3 px-6 border border-[#50fa7b] hover:border-transparent transition-all duration-300"
          >
            $ view_my_work
            <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center bg-transparent hover:bg-[#bd93f9] text-[#bd93f9] hover:text-[#121212] font-mono py-3 px-6 border border-[#bd93f9] hover:border-transparent transition-all duration-300"
          >
            $ contact_me
          </a>
        </div>
      </div>
    </section>
  )
}
