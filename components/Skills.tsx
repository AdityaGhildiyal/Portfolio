"use client"

import { Code, Database, Globe, Palette, Server, Smartphone } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const skills = [
  {
    name: "Frontend Development",
    icon: Globe,
    description:
      "I build dynamic and responsive user interfaces using React.js and Next.js, focusing on performance, accessibility, and maintainability.",
  },
  {
    name: "Backend Development",
    icon: Server,
    description:
      "I develop scalable backend solutions with Django and Node.js, handling REST APIs, authentication, and server-side logic.",
  },
  {
    name: "Database Management",
    icon: Database,
    description:
      "I work with MySQL, MongoDB, and PostgreSQL, designing optimized database schemas and writing efficient queries for data handling.",
  },
  {
    name: "Mobile App Development",
    icon: Smartphone,
    description:
      "I develop cross-platform mobile applications using React Native, ensuring smooth performance on both Android and iOS devices.",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description:
      "I create intuitive and visually appealing designs using Figma, Tailwind CSS, and Framer Motion, enhancing user experiences.",
  },
  {
    name: "API Development",
    icon: Code,
    description:
      "I design secure and scalable APIs using REST and GraphQL, ensuring seamless data flow between frontend and backend systems.",
  },
]

export default function Skills() {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])
  const [revealedSkills, setRevealedSkills] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = skillRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1 && !revealedSkills.includes(index)) {
              setRevealedSkills((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [revealedSkills])

  return (
    <section id="skills" className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="scanline"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-2 inline-block px-3 py-1 border border-[#333] bg-[#1a1a1a] text-[#50fa7b] text-sm font-mono">
          $ ./skills.sh
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center text-[#f8f8f2] cyberpunk-heading">
          <span className="text-[#8be9fd]">&lt;</span> My Skills <span className="text-[#8be9fd]">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => {skillRefs.current[index] = el}}
              className={`bg-[#1a1a1a] p-6 border border-[#333] transition-all duration-500 reveal ${
                revealedSkills.includes(index) ? "active" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#252525] border border-[#333] mr-4">
                  <skill.icon size={24} className="text-[#50fa7b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#8be9fd] font-mono">{skill.name}</h3>
              </div>
              <p className="text-[#f8f8f2] font-mono text-sm">{skill.description}</p>

              <div className="mt-4 w-full bg-[#252525] h-2">
                <div
                  className="bg-[#50fa7b] h-full animate-pulse"
                  style={{
                    width: revealedSkills.includes(index) ? "85%" : "0%",
                    transition: "width 1s ease-in-out",
                    transitionDelay: `${index * 0.2 + 0.5}s`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
