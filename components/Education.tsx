"use client"

import Image from "next/image"
import { GraduationCap, MapPin, School } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Education() {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([])
  const [revealedItems, setRevealedItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = timelineRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1 && !revealedItems.includes(index)) {
              setRevealedItems((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      timelineRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [revealedItems])

  return (
    <section id="education" className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="scanline"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-2 inline-block px-3 py-1 border border-[#333] bg-[#1a1a1a] text-[#50fa7b] text-sm font-mono">
          $ ./education.sh
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center text-[#f8f8f2] cyberpunk-heading">
          <span className="text-[#f1fa8c]">&lt;</span> Education <span className="text-[#f1fa8c]">/&gt;</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* University Logo */}
          <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col items-center">
            <div className="relative w-48 h-48 overflow-hidden border-2 border-[#333] shadow-lg mb-4">
              <div className="absolute inset-0 bg-[#50fa7b] opacity-0 animate-pulse"></div>
              <Image
                src="/GEHU-logo.png?height=200&width=200"
                alt="Graphic Era Hill University"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          </div>

          {/* Education Timeline */}
          <div className="md:w-3/4 md:pl-12">
            <div className="space-y-8">
              {/* Current Education */}
              <div
                ref={(el) => { timelineRefs.current[0] = el }}
                className={`relative pl-8 border-l-2 border-[#333] reveal ${revealedItems.includes(0) ? "active" : ""}`}
              >
                <div
                  className={`absolute left-[-9px] top-2 w-4 h-4 bg-[#252525] border-2 border-[#50fa7b] ${
                    revealedItems.includes(0) ? "animate-pulse" : ""
                  }`}
                ></div>
                <div className="mb-1 flex items-center text-xl font-semibold text-[#f1fa8c] font-mono">
                  <GraduationCap className="mr-2" />
                  Graphic Era Hill University
                </div>
                <div className="mb-2 flex items-center text-[#f8f8f2] font-mono text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Dehradun Campus
                </div>
                <p className="text-[#bbb] font-mono text-sm">
                  Currently pursuing B.Tech in Computer Science and Engineering, second year of studies, embracing new
                  challenges and opportunities in the field of technology.
                </p>
              </div>

              {/* High School */}
              <div
                ref={(el) => { timelineRefs.current[1] = el }}
                className={`relative pl-8 border-l-2 border-[#333] reveal ${revealedItems.includes(1) ? "active" : ""}`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div
                  className={`absolute left-[-9px] top-2 w-4 h-4 bg-[#252525] border-2 border-[#50fa7b] ${
                    revealedItems.includes(1) ? "animate-pulse" : ""
                  }`}
                ></div>
                <div className="mb-1 flex items-center text-xl font-semibold text-[#f1fa8c] font-mono">
                  <School className="mr-2" />
                  Higher Secondary Education
                </div>
                <div className="mb-2 flex items-center text-[#f8f8f2] font-mono text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Srinagar Garhwal
                </div>
                <p className="text-[#bbb] font-mono text-sm">
                  Completed 11th and 12th standard education, laying the foundation for future academic pursuits.
                </p>
              </div>

              {/* Early Education */}
              <div
                ref={(el) => { timelineRefs.current[2] = el }}
                className={`relative pl-8 border-l-2 border-[#333] reveal ${revealedItems.includes(2) ? "active" : ""}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div
                  className={`absolute left-[-9px] top-2 w-4 h-4 bg-[#252525] border-2 border-[#50fa7b] ${
                    revealedItems.includes(2) ? "animate-pulse" : ""
                  }`}
                ></div>
                <div className="mb-1 flex items-center text-xl font-semibold text-[#f1fa8c] font-mono">
                  <School className="mr-2" />
                  Early Education
                </div>
                <div className="mb-2 flex items-center text-[#f8f8f2] font-mono text-sm">
                  <MapPin className="mr-2 h-4 w-4" />
                  Delhi & Bhopal
                </div>
                <p className="text-[#bbb] font-mono text-sm">
                  Completed schooling up to 10th standard across Delhi and Bhopal, experiencing diverse educational
                  environments and cultural perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
