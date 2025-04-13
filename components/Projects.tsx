"use client"
import Image from "next/image"
import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, X } from "lucide-react"

const projects = [
  {
    title: "ChatBot",
    description: "I made a chatbot in NextJs with OpenAI API and a custom API to interact with the model.",
    image: "/Project1.png?height=300&width=400",
    github: "https://github.com/AdityaGhildiyal/ChatBot-GEHUCollege",
    live: "https://deployement-page.vercel.app/",
  },
  {
    title: "ERP Cell",
    description:
      "Made a custom ERP system in NextJs with a custom API to interact with the teacher and the student models.",
    image: "/Project2.png?height=300&width=400",
    github: "https://github.com/AdityaGhildiyal/Attendance_react-nextjs",
    live: "https://deployement-page.vercel.app/",
  },
  {
    title: "PathFinding Website",
    description:
      "A website for a pathfinding algorithm implemented in NextJS using MapLibreGL. Implemented using the A* and Dijkstra algorithm.",
    image: "/Project3.png?height=300&width=400",
    github: "https://gitlab.com/collegeprojects3461408/daa-4thsemester/-/tree/main/pathvisualization?ref_type=heads",
    live: "https://deployement-page.vercel.app/",
  },
  {
    title: "MST-TSP Route Optimization",
    description: "An optimization project to solve MST and TSP using graph theory and algorithms.",
    image: "/Project4.png?height=300&width=400",
    github: "https://github.com/AdityaGhildiyal/MST-CityCalculator",
    live: "https://deployement-page.vercel.app/",
  },
  {
    title: "Minesweeper",
    description: "A classic Minesweeper game built using React and deployed on Vercel.",
    image: "/Project5.png?height=300&width=400",
    github: "https://github.com/AdityaGhildiyal/Minesweeper",
    live: "https://minesweeper-addyg.vercel.app/",
  },
  {
    title: "Voice Authentication Lock",
    description: "A voice-based authentication system for secure access control using ML techniques.",
    image: "/Project6.png?height=300&width=400",
    github: "https://github.com/AdityaGhildiyal/VoiceAuth",
    live: "https://deployement-page.vercel.app/",
  },
  {
    title: "Tournament Fixture Display",
    description: "A tournament generator supporting Knockout, Round Robin, and Hybrid formats. Built with Next.js.",
    image: "/Project7.png?height=300&width=400",
    github: "https://gitlab.com/AdityaG05/tourneygen",
    live: "https://v0-dark-theme-ui-design.vercel.app/",
  },
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [revealedProjects, setRevealedProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const serverGridRef = useRef<HTMLDivElement>(null)
  const [activeServer, setActiveServer] = useState<number | null>(null)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [isClearing, setIsClearing] = useState(false)

  const projectTerminalLines = [
    "$ Loading projects...",
    "$ Initializing project database...",
    "$ Scanning project repositories...",
    "$ Analyzing code quality...",
    "$ Projects loaded successfully!",
  ]

  useEffect(() => {
    let lineCount = 0;
    const interval = setInterval(() => {
      lineCount++;
      if (lineCount > projectTerminalLines.length) {
        setIsClearing(true);
        setTimeout(() => {
          setTerminalLines([]);
          setIsClearing(false);
          lineCount = 0;
        }, 1000);
      } else {
        setTerminalLines((prevLines) => {
          if (prevLines.length < 5) {
            return [...prevLines, projectTerminalLines[prevLines.length]]
          }
          return prevLines;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  // Reveal projects on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1 && !revealedProjects.includes(index)) {
              setRevealedProjects((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [revealedProjects])

  // Add floating icons
  const floatingIcons = [
    { emoji: "💾", top: "20%", left: "20%" },
    { emoji: "🔌", top: "70%", left: "70%" },
    { emoji: "☁️", top: "30%", right: "20%" },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-[#121212] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-2 inline-block px-3 py-1 border border-[#333] bg-[#1a1a1a] text-[#50fa7b] text-sm font-mono">
          $ ./projects.sh
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center text-[#f8f8f2] cyberpunk-heading">
          <span className="text-[#bd93f9]">&lt;</span> My Projects <span className="text-[#bd93f9]">/&gt;</span>
        </h2>

        <div className="code-terminal mb-8 bg-[#1a1a1a] p-6 border border-[#333] font-mono text-[#f8f8f2] h-[200px] overflow-hidden">
          <div id="terminal-output" className="h-full space-y-3">
            {terminalLines.map((line, index) => (
              <div 
                key={index} 
                className={`terminal-line flex items-center transition-opacity duration-500 ${
                  isClearing ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <span className="text-[#50fa7b] mr-2">$</span>
                <span className="text-[#f8f8f2]">{line.replace('$ ', '')}</span>
              </div>
            ))}
            <span className="terminal-cursor inline-block w-2 h-5 bg-[#f8f8f2] animate-pulse"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { projectRefs.current[index] = el }}
              className={`bg-[#1a1a1a] rounded-none overflow-hidden shadow-lg border border-[#333] transition-all duration-500 reveal ${
                revealedProjects.includes(index) ? "active" : ""
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedImage(project.image)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#50fa7b] font-mono">{project.title}</h3>
                <p className="text-[#f8f8f2] mb-4 font-mono text-sm">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#8be9fd] hover:text-[#50fa7b] transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#ff79c6] hover:text-[#50fa7b] transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-4">
            <button
              className="absolute top-2 right-2 bg-[#1a1a1a] text-[#f8f8f2] p-2 border border-[#333]"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X size={24} />
            </button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Expanded Project"
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain border border-[#333]"
            />
          </div>
        </div>
      )}
    </section>
  )
}
