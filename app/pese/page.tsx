"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { JetBrains_Mono } from "next/font/google"
import { Terminal } from "lucide-react"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export default function PESEPage() {
  const router = useRouter()
  const [pin, setPin] = useState(["", "", "", ""])
  const [error, setError] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handlePinChange = (index: number, value: string, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value && index > 0) {
      // Move to previous input on backspace when current input is empty
      const inputs = document.querySelectorAll('input[type="text"]')
      const prevInput = inputs[index - 1] as HTMLInputElement
      if (prevInput) {
        prevInput.focus()
      }
      return
    }

    if (e.key === 'Enter') {
      handleSubmit()
      return
    }

    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    if (!/^\d*$/.test(value)) {
      return
    }

    const newPin = [...pin]
    newPin[index] = value
    setPin(newPin)

    // Auto-focus next input if a digit was entered
    if (value && index < 3) {
      const inputs = document.querySelectorAll('input[type="text"]')
      const nextInput = inputs[index + 1] as HTMLInputElement
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleSubmit = () => {
    const enteredPin = pin.join("")
    if (enteredPin.length !== 4) {
      setError("Please enter all 4 digits")
      return
    }

    if (enteredPin === "6540") {
      setError("")
      setShowSuccess(true)
      setTimeout(() => {
        router.push("/pese/index")
      }, 1000)
    } else {
      setError("Incorrect PIN. Please try again.")
      setPin(["", "", "", ""])
    }
  }

  const handleGoBack = () => {
    router.push("/")
  }

  return (
    <div
      className={`min-h-screen bg-[#121212] text-[#f8f8f2] flex items-center justify-center ${jetbrainsMono.className}`}
    >
      <div className="relative w-full max-w-md bg-[#1a1a1a] rounded-none p-8 border border-[#333]">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Terminal size={40} className="text-[#50fa7b]" />
          </div>
          <h1 className="text-3xl font-normal text-[#f8f8f2] tracking-wide mb-2">PESE 400</h1>
          <div className="text-[#999] text-lg">
            <p>$ Enter your 4-digit PIN to access</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            {pin.map((digit, index) => (
              <div key={index} className="relative">
                <input
                  type="text"
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value, e as any)}
                  onKeyDown={(e) => handlePinChange(index, digit, e)}
                  className={`w-16 h-16 text-center text-2xl bg-[#252525] border ${
                    error ? "border-[#ff5555]" : "border-[#333]"
                  } rounded-none focus:outline-none focus:border-[#50fa7b] text-[#f8f8f2] transition-all duration-200 font-mono`}
                  maxLength={1}
                  inputMode="numeric"
                  disabled={showSuccess}
                />
                {showSuccess && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#50fa7b] rounded-none">
                    <svg
                      className="w-8 h-8 text-[#121212]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          {error && (
            <div className="flex items-center justify-center mt-4 text-[#ff5555] text-sm">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{error}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={handleSubmit}
            disabled={showSuccess}
            className={`w-full py-4 ${
              showSuccess
                ? "bg-[#50fa7b] text-[#121212]"
                : "bg-[#252525] hover:bg-[#333] text-[#f8f8f2] border border-[#333] hover:border-[#50fa7b]"
            } font-normal rounded-none transition-all duration-300 text-lg tracking-wide`}
          >
            {showSuccess ? "$ Access Granted" : "$ Submit"}
          </button>

          <button
            onClick={handleGoBack}
            disabled={showSuccess}
            className="w-full py-4 bg-transparent hover:bg-[#252525] text-[#999] hover:text-[#f8f8f2] font-normal rounded-none transition-colors duration-300 text-lg border border-[#333] tracking-wide"
          >
            $ Cancel
          </button>
        </div>

        <div className="mt-6 text-center text-[#666] text-sm">
          <p>$ System v1.0.4 // Secure Authentication Module</p>
        </div>
      </div>
    </div>
  )
}
