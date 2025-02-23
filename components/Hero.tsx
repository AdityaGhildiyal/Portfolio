import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-geometric-pattern">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-primary">
          Hi, I'm <span className="text-gray-400">Aditya Ghildiyal</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 text-gray-300">
          Crafting elegant solutions through code
        </p>
        <a
          href="#projects"
          className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-primary font-bold py-3 px-6 rounded-full transition-colors duration-300 animate-fade-in-up animation-delay-600 border border-gray-700"
        >
          View My Work
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  )
}

