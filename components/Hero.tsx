"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const serverGridRef = useRef<HTMLDivElement>(null)
  const [activeServer, setActiveServer] = useState<number | null>(null)

  // Create server grid
  useEffect(() => {
    if (!serverGridRef.current) return

    // Clear existing servers
    serverGridRef.current.innerHTML = ""

    // Create servers
    for (let i = 0; i < 64; i++) {
      const server = document.createElement("div")
      server.className = "server"
      server.dataset.index = i.toString()

      // Create LEDs
      for (let j = 0; j < 3; j++) {
        const led = document.createElement("div")
        led.className = "led"
        server.appendChild(led)
      }

      serverGridRef.current.appendChild(server)
    }
  }, [])

  // Handle mouse movement for server grid
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!serverGridRef.current) return

    const servers = serverGridRef.current.querySelectorAll(".server")
    const rect = serverGridRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    let closestServer = null
    let closestDistance = Number.POSITIVE_INFINITY

    servers.forEach((server, index) => {
      const serverRect = server.getBoundingClientRect()
      const serverX = serverRect.left - rect.left + serverRect.width / 2
      const serverY = serverRect.top - rect.top + serverRect.height / 2

      const distance = Math.hypot(x - serverX, y - serverY)

      if (distance < closestDistance) {
        closestDistance = distance
        closestServer = index
      }
    })

    setActiveServer(closestServer)
  }

  // Update active server
  useEffect(() => {
    if (!serverGridRef.current) return

    const servers = serverGridRef.current.querySelectorAll(".server")
    servers.forEach((server, index) => {
      if (index === activeServer) {
        server.classList.add("active")
      } else {
        server.classList.remove("active")
      }
    })
  }, [activeServer])

  // Add floating icons
  const floatingIcons = [
    { emoji: "💾", top: "20%", left: "20%" },
    { emoji: "🔌", top: "70%", left: "70%" },
    { emoji: "☁️", top: "30%", right: "20%" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#121212]" onMouseMove={handleMouseMove}>
      <div className="scanline"></div>
      <div ref={serverGridRef} className="server-grid"></div>

      {floatingIcons.map((icon, index) => (
        <div
          key={index}
          className="floating-icon"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {icon.emoji}
        </div>
      ))}

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
