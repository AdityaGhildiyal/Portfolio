import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "../globals.css"

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
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.className} overflow-hidden bg-[#121212] text-[#f8f8f2]`}>{children}</body>
    </html>
  )
}
