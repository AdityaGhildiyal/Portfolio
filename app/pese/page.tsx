"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PESEEntry from "@/components/PESE/PinEntry"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

const REQUIRE_PIN = true

export default function PESEPage() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    // Check persisted authentication
    const storedAuth = localStorage.getItem("pese_authenticated") === "true"
    if (storedAuth || !REQUIRE_PIN) {
      setAuthenticated(true)
      router.push("/pese/index")
    }
  }, [router])

  const handlePinSuccess = () => {
    localStorage.setItem("pese_authenticated", "true")
    setAuthenticated(true)
    router.push("/pese/index")
  }

  if (authenticated) {
    return null
  }

  return (
    <div
      className={`min-h-screen bg-[#121212] text-[#f8f8f2] flex items-center justify-center ${jetbrainsMono.className}`}
    >
      <PESEEntry onSuccess={handlePinSuccess} onClose={() => router.push("/")} />
    </div>
  )
}