"use client"

import type React from "react"
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init('3yRozoRRjNTU_knZg_PDV')

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    try {
      const serviceId = 'service_1ynbfu3'
      const templateId = 'template_tghe5lq'
      const publicKey = 'heUxr2XqM1AxhvMo6'

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          title: 'Contact Form Submission',
          to_email: 'adityaghildiyal50@gmail.com'
        },
        publicKey
      )

      setFormState({
        name: "",
        email: "",
        message: "",
      })
      
      // Show success message
      alert("Message sent successfully!")
    } catch (error) {
      console.error('Error sending email:', error)
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSending(false)
    }
  }

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
    <section id="contact" ref={sectionRef} className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="scanline"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-2 inline-block px-3 py-1 border border-[#333] bg-[#1a1a1a] text-[#50fa7b] text-sm font-mono">
          $ ./contact.sh
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center text-[#f8f8f2] cyberpunk-heading">
          <span className="text-[#ff79c6]">&lt;</span> Get in Touch <span className="text-[#ff79c6]">/&gt;</span>
        </h2>

        <div
          className={`max-w-3xl mx-auto bg-[#1a1a1a] border border-[#333] p-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <div className="ml-4 text-[#8be9fd] font-mono text-sm">contact.sh</div>
          </div>

          <p className="text-center text-lg mb-8 text-[#f8f8f2] font-mono">
            <span className="text-[#50fa7b]">$</span> I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#8be9fd] font-mono text-sm mb-2">
                $ NAME:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="w-full bg-[#252525] border border-[#333] p-3 text-[#f8f8f2] font-mono focus:border-[#50fa7b] focus:outline-none"
                placeholder="Aditya Ghildiyal"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-[#8be9fd] font-mono text-sm mb-2">
                $ EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-[#252525] border border-[#333] p-3 text-[#f8f8f2] font-mono focus:border-[#50fa7b] focus:outline-none"
                placeholder="adityaghildiyal@proton.me"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-[#8be9fd] font-mono text-sm mb-2">
                $ MESSAGE:
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-[#252525] border border-[#333] p-3 text-[#f8f8f2] font-mono focus:border-[#50fa7b] focus:outline-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full bg-transparent hover:bg-[#50fa7b] text-[#50fa7b] hover:text-[#121212] font-mono py-3 px-6 border border-[#50fa7b] hover:border-transparent transition-all duration-300 flex items-center justify-center ${
                isSending ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Send className="mr-2" size={18} />
              {isSending ? '$ SENDING...' : '$ SEND_MESSAGE'}
            </button>
          </form>

          <div className="flex justify-center space-x-6">
            <SocialLink href="adityaghildiyal@proton.me" icon={Mail} label="Email" color="#ff79c6" />
            <SocialLink
              href="https://www.linkedin.com/in/aditya-ghildiyal-1a02772a0/"
              icon={Linkedin}
              label="LinkedIn"
              color="#8be9fd"
            />
            <SocialLink href="https://github.com/AdityaGhildiyal/" icon={Github} label="GitHub" color="#bd93f9" />
            <SocialLink href="https://x.com/Ghil82362Aditya" icon={Twitter} label="Twitter" color="#50fa7b" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
  href,
  icon: Icon,
  label,
  color,
}: {
  href: string
  icon: React.ElementType
  label: string
  color: string
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (label === "Email") {
      e.preventDefault()
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${href}`, "_blank")
    }
  }

  return (
    <a
      href={label === "Email" ? `mailto:${href}` : href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex flex-col items-center text-[#f8f8f2] hover:text-[color] transition-colors duration-300 group"
      style={{ "--color": color } as React.CSSProperties}
    >
      <div
        className="w-12 h-12 flex items-center justify-center border border-[#333] mb-2 group-hover:border-[color] transition-colors duration-300"
        style={{ "--color": color } as React.CSSProperties}
      >
        <Icon size={24} className="group-hover:text-[color]" style={{ "--color": color } as React.CSSProperties} />
      </div>
      <span className="font-mono text-sm">{label}</span>
    </a>
  )
}
