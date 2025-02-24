"use client"
import Image from "next/image"
import { useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"

const projects = [
  {
    title: "ChatBot",
    description: "I made a chatbot in NextJs with OpenAI API and a custom API to interact with the model.",
    image: "/Project1.png?height=300&width=400",
    github: "https://github.com/AdityaGhildiyal/ChatBot-GEHUCollege",
    live: "https://deployement-page-dsxgwynu6-addyg.vercel.app/",
  },
  {
    title: "ERP Cell",
    description: "Made a custom ERP system in NextJs with a custom API to interact with the teacher and the student models.",
    image: "/Project2.png?height=300&width=400",
    github: "https://github.com/AdityaGhildiyal/Attendance_react-nextjs",
    live: "https://deployement-page-dsxgwynu6-addyg.vercel.app/",
  },
  {
    title: "PathFinding Website",
    description: "A website for a pathfinding algorithm implemented in NextJS using MapLibreGL.Implemented using the A* and Dijkstra algorithm.",
    image: "/Project3.png?height=300&width=400",
    github: "https://gitlab.com/collegeprojects3461408/daa-4thsemester/-/tree/main/pathvisualization?ref_type=heads",
    live: "https://deployement-page-dsxgwynu6-addyg.vercel.app/",
  },
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-900 bg-pattern-lines">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              {/* Image with onClick */}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-300"
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

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-4">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X size={24} />
            </button>
            {/* Expanded Image */}
            <Image
              src={selectedImage}
              alt="Expanded Project"
              width={800}
              height={600}
              className="rounded-lg shadow-lg max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
