"use client"

import type React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import PESEEntry from "@/components/PESE/PESEEntry"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showPESE, setShowPESE] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.substring(1)
      const targetElement = document.getElementById(targetId || "")
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  const handlePESEClick = () => {
    setShowPESE(true)
  }

  return (
    <>
      <header className="fixed w-full z-10 bg-background/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Addy
          </Link>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button
              onClick={handlePESEClick}
              className="text-primary hover:text-gray-400 transition-colors duration-300 font-semibold"
            >
              PESE 400
            </button>
          </nav>
          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col items-center py-4 space-y-4 bg-background border-t border-gray-800">
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
            <button
              onClick={() => {
                setIsMenuOpen(false)
                handlePESEClick()
              }}
              className="text-primary hover:text-gray-400 transition-colors duration-300 font-semibold"
            >
              PESE 400
            </button>
          </nav>
        )}
      </header>

      {showPESE && <PESEEntry onClose={() => setShowPESE(false)} />}
    </>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="text-primary hover:text-gray-400 transition-colors duration-300" onClick={onClick}>
      {children}
    </Link>
  )
}
