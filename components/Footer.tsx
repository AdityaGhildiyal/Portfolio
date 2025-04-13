"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [randomChars, setRandomChars] = useState<string[]>([])

  useEffect(() => {
    // Generate random characters for cyberpunk effect
    const chars = "01010101010101010101".split("")
    setRandomChars(chars)

    // Update random characters periodically
    const interval = setInterval(() => {
      const newChars = "01010101010101010101".split("").map((char) => (Math.random() > 0.5 ? "0" : "1"))
      setRandomChars(newChars)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-[#121212] py-6 border-t border-[#333] relative overflow-hidden">
      <div className="scanline"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center items-center mb-4">
          <div className="h-px bg-[#333] flex-grow max-w-xs"></div>
          <div className="px-4 text-[#50fa7b] font-mono text-sm">EOF</div>
          <div className="h-px bg-[#333] flex-grow max-w-xs"></div>
        </div>

        <p className="text-[#f8f8f2] font-mono text-sm mb-2">
          <span className="text-[#50fa7b]">$</span> © {new Date().getFullYear()} Addy. All rights reserved.
        </p>

        <div className="flex justify-center space-x-1 text-[#333] font-mono text-xs">
          {randomChars.map((char, index) => (
            <span key={index} className={char === "1" ? "text-[#50fa7b]" : "text-[#333]"}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
