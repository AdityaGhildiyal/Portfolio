import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"

// Import only what's needed for PESE, not the global CSS
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PESE 400",
  description: "PESE 400 - Profiling and Evaluation",
}

export default function PESELayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`pese-container ${jetbrainsMono.className} bg-[#121212] text-[#f8f8f2]`}>
      {children}
    </div>
  )
}
