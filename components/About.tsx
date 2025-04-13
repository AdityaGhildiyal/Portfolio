"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(80, 250, 123, ${0.05 + i * 0.02})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.5, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="scanline"></div>
      {/* Background Patterns */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-2 inline-block px-3 py-1 border border-[#333] bg-[#1a1a1a] text-[#50fa7b] text-sm font-mono">
          $ ./about.sh
        </div>
        <h2 className="text-5xl font-bold mb-12 text-center text-[#f8f8f2] cyberpunk-heading">
          <span className="text-[#ff79c6]">&lt;</span> About Me <span className="text-[#ff79c6]">/&gt;</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute w-[400px] h-[400px] border-2 border-[#50fa7b] transform translate-x-4 translate-y-4"></div>
              {/* Corner connecting lines */}
              <div className="absolute w-[16px] h-[2px] bg-[#50fa7b] transform translate-x-[-1px] translate-y-[16px] rotate-[-45deg]"></div>
              <div className="absolute w-[16px] h-[2px] bg-[#50fa7b] transform translate-x-[385px] translate-y-[16px] rotate-[45deg]"></div>
              <div className="absolute w-[16px] h-[2px] bg-[#50fa7b] transform translate-x-[-1px] translate-y-[385px] rotate-[45deg]"></div>
              <Image
                src="/HeadShot.jpg?height=400&width=400"
                alt="Addy"
                width={400}
                height={400}
                className="relative z-10 border-2 border-[#333] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[#1a1a1a] p-6 border border-[#333]">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 text-[#8be9fd] font-mono text-sm">about.txt</div>
              </div>

              <p className="text-xl mb-6 text-[#f8f8f2] font-mono">
                <span className="text-[#50fa7b]">$</span> Hello! I'm Aditya, a passionate software developer with a keen
                    eye for creating elegant, efficient, and user-friendly solutions. With a strong foundation in full-stack
                    development, I specialize in crafting robust web applications that make a difference.
              </p>
              <p className="text-xl mb-6 text-[#f8f8f2] font-mono">
                <span className="text-[#50fa7b]">$</span> My journey in tech began with a fascination for
                    problem-solving, which led me to pursue a degree in Computer Science. While I haven't worked in startups yet,
                    I'm always open to exciting opportunities where I can contribute and grow.
              </p>
              <p className="text-xl text-[#f8f8f2] font-mono">
                <span className="text-[#50fa7b]">$</span> When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and
                    community meetups.
              </p>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
