"use client"

import { useState } from "react"

interface PinEntryProps {
  onSuccess: () => void
  onClose: () => void
}

function PinEntry({ onSuccess, onClose }: PinEntryProps) {
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")

  // Use environment variable in production
  const CORRECT_PIN = "6540"

  const handleSubmit = () => {
    if (pin === CORRECT_PIN) {
      setError("")
      onSuccess()
    } else {
      setError("Incorrect PIN")
      setPin("")
    }
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-black">Enter PIN</h2>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="mb-4 p-2 border rounded w-full text-black"
          placeholder="Enter PIN"
          autoFocus
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            disabled={!pin}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PESEEntry({ onSuccess, onClose }: PinEntryProps) {
  return (
    <div className="fixed inset-0 z-50 font-mono bg-black bg-opacity-50 flex items-center justify-center">
      <PinEntry onSuccess={onSuccess} onClose={onClose} />
    </div>
  )
}