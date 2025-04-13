"use client"

import type React from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")

      // Only handle smooth scrolling for hash links
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.getElementById(targetId.substring(1))
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
          setIsMenuOpen(false)
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#121212]/90 backdrop-blur-md border-b border-[#333]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#50fa7b] font-mono flex items-center">
            <Terminal className="mr-2" size={20} />
            AG
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Link href="/pese" className="text-[#bd93f9] hover:text-[#50fa7b] transition-colors duration-300 font-mono">
              PESE_400
            </Link>
          </nav>
          <button className="md:hidden text-[#f8f8f2]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-center py-4 space-y-4 bg-[#121212] border-t border-[#333]">
            <NavLink href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink href="#education" onClick={() => setIsMenuOpen(false)}>
              Education
            </NavLink>
            <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
              Skills
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
            <Link
              href="/pese"
              className="text-[#bd93f9] hover:text-[#50fa7b] transition-colors duration-300 font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              PESE_400
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="text-[#f8f8f2] hover:text-[#50fa7b] transition-colors duration-300 font-mono"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
