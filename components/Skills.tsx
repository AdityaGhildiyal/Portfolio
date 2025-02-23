import { Code, Database, Globe, Palette, Server, Smartphone } from "lucide-react";

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
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <skill.icon size={24} className="text-gray-400 mr-3" />
                <h3 className="text-xl font-semibold text-primary">{skill.name}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
