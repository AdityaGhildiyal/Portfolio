"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
    color: `rgba(30, 30, 30, ${0.05 + i * 0.02})`,
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
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Patterns */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center text-primary">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/HeadShot.jpg?height=400&width=400"
              alt="Addy"
              width={400}
              height={400}
              className="rounded-full shadow-lg border-4 border-gray-800 object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-xl mb-6 text-gray-300">
              Hello! I'm Aditya, a passionate software developer with a keen eye for creating elegant, efficient, and
              user-friendly solutions. With a strong foundation in full-stack development, I specialize in crafting
              robust web applications that make a difference.
            </p>
            <p className="text-xl mb-6 text-gray-300">
              My journey in tech began with a fascination for problem-solving, which led me to pursue a degree in
              Computer Science. Since then, I've worked on various projects, from small startups to large enterprises,
              always striving to learn and grow.
            </p>
            <p className="text-xl text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through tech blogs and community meetups.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}