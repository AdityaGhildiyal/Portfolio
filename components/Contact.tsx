import type React from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Get in Touch</h2>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
          <p className="text-center text-lg mb-8 text-gray-300">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink href="mailto:adityaghildiyal@proton.me" icon={Mail} label="Email" />
            <SocialLink href="https://www.linkedin.com/in/aditya-ghildiyal-1a02772a0/" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="https://github.com/AdityaGhildiyal/" icon={Github} label="GitHub" />
            <SocialLink href="https://x.com/Ghil82362Aditya" icon={Twitter} label="Twitter" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center text-gray-400 hover:text-gray-300 transition-colors duration-300"
    >
      <Icon size={32} className="mb-2" />
      <span>{label}</span>
    </a>
  )
}

