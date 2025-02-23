import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 bg-pattern-lines">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">About Me</h2>
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
            <p className="text-lg mb-6 text-gray-300">
              Hello! I'm Aditya Ghildiyal, a passionate software developer with a keen eye for creating elegant, efficient, and
              user-friendly solutions. With a strong foundation in full-stack development, I specialize in crafting
              robust web applications that make a difference.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              My journey in tech began with a fascination for problem-solving, which led me to pursue a degree in
              Computer Science. Since then, I've worked on various projects, from small startups to large enterprises,
              always striving to learn and grow.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through tech blogs and community meetups.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

