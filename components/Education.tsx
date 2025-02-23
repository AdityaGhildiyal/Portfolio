import Image from "next/image"
import { GraduationCap, MapPin, School } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Education</h2>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* University Logo */}
          <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-800 shadow-lg mb-4">
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
              <div className="relative pl-8 border-l-2 border-gray-800">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-gray-800 border-2 border-primary"></div>
                <div className="mb-1 flex items-center text-xl font-semibold text-primary">
                  <GraduationCap className="mr-2" />
                  Graphic Era Hill University
                </div>
                <div className="mb-2 flex items-center text-gray-400">
                  <MapPin className="mr-2 h-4 w-4" />
                  Dehradun Campus
                </div>
                <p className="text-gray-300">
                  Currently pursuing B.Tech in Computer Science and Engineering, second year of studies, embracing new challenges and opportunities in the field of
                  technology.
                </p>
              </div>

              {/* High School */}
              <div className="relative pl-8 border-l-2 border-gray-800">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-gray-800 border-2 border-primary"></div>
                <div className="mb-1 flex items-center text-xl font-semibold text-primary">
                  <School className="mr-2" />
                  Higher Secondary Education
                </div>
                <div className="mb-2 flex items-center text-gray-400">
                  <MapPin className="mr-2 h-4 w-4" />
                  Srinagar Garhwal
                </div>
                <p className="text-gray-300">
                  Completed 11th and 12th standard education, laying the foundation for future academic pursuits.
                </p>
              </div>

              {/* Early Education */}
              <div className="relative pl-8 border-l-2 border-gray-800">
                <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-gray-800 border-2 border-primary"></div>
                <div className="mb-1 flex items-center text-xl font-semibold text-primary">
                  <School className="mr-2" />
                  Early Education
                </div>
                <div className="mb-2 flex items-center text-gray-400">
                  <MapPin className="mr-2 h-4 w-4" />
                  Delhi & Bhopal
                </div>
                <p className="text-gray-300">
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

