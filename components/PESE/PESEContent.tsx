"use client"

import type React from "react"
import { useState } from "react"
import { X, FileText, Film, Terminal } from "lucide-react"
import ProfilingSheet from "./ProfilingSheet"
import MovieReview from "./MovieReview"

export default function PESEContent({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("profiling")

  return (
    <div className="fixed inset-0 z-50 bg-[#121212] text-[#e0e0e0] overflow-hidden font-mono">
      <header className="bg-[#1a1a1a] border-b border-[#333] p-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <Terminal size={24} className="text-[#50fa7b] mr-3" />
          <h1 className="text-2xl font-normal tracking-wide text-[#f8f8f2]">PESE 400</h1>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center rounded-sm hover:bg-[#333] text-[#999] hover:text-[#f8f8f2] transition-colors"
        >
          <X size={22} />
        </button>
      </header>

      <div className="flex border-b border-[#333] sticky top-16 z-10 bg-[#1a1a1a]">
        <TabButton
          active={activeTab === "profiling"}
          onClick={() => setActiveTab("profiling")}
          icon={<FileText size={20} />}
          label="Profiling Sheet"
        />
        <TabButton
          active={activeTab === "movie"}
          onClick={() => setActiveTab("movie")}
          icon={<Film size={20} />}
          label="Movie Review"
        />
      </div>

      <div className="overflow-auto h-[calc(100vh-8rem)]">
        {activeTab === "profiling" && <ProfilingSheet />}
        {activeTab === "movie" && <MovieReview />}
      </div>
    </div>
  )
}

function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-6 py-3 transition-all duration-200 text-base ${
        active
          ? "text-[#50fa7b] border-b border-[#50fa7b] bg-[#1a1a1a]"
          : "text-[#999] hover:text-[#f8f8f2] hover:bg-[#252525]"
      }`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </button>
  )
}
