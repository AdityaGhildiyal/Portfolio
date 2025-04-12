"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, FileText, Film, Terminal } from "lucide-react"
import ProfilingSheet from "@/components/PESE/ProfilingSheet"
import MovieReview from "@/components/PESE/MovieReview"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export default function PESEIndex() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("profiling")

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("pese_authenticated") === "true"
    if (!isAuthenticated) {
      router.push("/pese")
    }
  }, [router])

  return (
    <div className={`min-h-screen bg-[#121212] text-[#f8f8f2] ${jetbrainsMono.className}`}>
      <header className="bg-[#1a1a1a] p-4 flex items-center border-b border-[#333]">
        <Link href="/" className="flex items-center text-[#999] hover:text-[#f8f8f2] transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          <span className="text-base">$ cd /portfolio</span>
        </Link>
        <div className="flex items-center mx-auto">
          <Terminal size={22} className="text-[#50fa7b] mr-2" />
          <h1 className="text-2xl font-normal tracking-wide">PESE 400</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap mb-8">
          <button
            onClick={() => setActiveTab("profiling")}
            className={`flex items-center px-6 py-3 mr-2 ${
              activeTab === "profiling"
                ? "bg-[#252525] text-[#50fa7b] border-b border-[#50fa7b]"
                : "bg-[#1a1a1a] text-[#999] hover:text-[#f8f8f2] border border-[#333]"
            }`}
          >
            <FileText className="mr-2" size={20} />
            <span className="text-base">Profiling Sheet</span>
          </button>
          <button
            onClick={() => setActiveTab("movie")}
            className={`flex items-center px-6 py-3 mr-2 ${
              activeTab === "movie"
                ? "bg-[#252525] text-[#50fa7b] border-b border-[#50fa7b]"
                : "bg-[#1a1a1a] text-[#999] hover:text-[#f8f8f2] border border-[#333]"
            }`}
          >
            <Film className="mr-2" size={20} />
            <span className="text-base">Movie Review</span>
          </button>
        </div>

        <div className="bg-[#1a1a1a] rounded-none border border-[#333] p-6">
          {activeTab === "profiling" && <ProfilingSheet />}
          {activeTab === "movie" && <MovieReview />}
        </div>
      </div>
    </div>
  )
}