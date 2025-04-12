"use client"

export default function MovieReview() {
  return (
    <div className="w-full p-6 md:p-8 font-mono">
      <div className="max-w-5xl mx-auto">
        {" "}
        {/* Increased from max-w-4xl to max-w-5xl (110%) */}
        <div className="mb-8">
          <h2 className="text-2xl font-normal mb-3 text-[#f8f8f2] tracking-wide">
            {" "}
            {/* Increased from text-xl to text-2xl */}
            Movie Review: The Pursuit of Happyness
          </h2>
          <p className="text-[#bbb] text-base">
            {" "}
          </p>
        </div>
        <div className="space-y-8">
          <div className="bg-[#1a1a1a] rounded-none border border-[#333] overflow-hidden">
            <div className="bg-[#252525] px-4 py-3 border-b border-[#333]">
              <div className="flex items-center">
                <span className="text-[#50fa7b] mr-2 text-lg">$</span> {/* Increased from default to text-lg */}
                <h3 className="text-base font-normal text-[#f8f8f2]">1) Your Favourite Dialogue and Why?</h3>{" "}
                {/* Increased from text-sm to text-base */}
              </div>
            </div>

            <div className="p-4">
              <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333]">
                <p className="italic text-[#bbb] mb-4 text-sm">
                  {" "}
                  {/* Increased from text-xs to text-sm */}
                  "Don't ever let somebody tell you… You can't do something. Not even me. You got a dream, you gotta
                  protect it."
                </p>
                <p className="text-[#bbb] text-sm">
                  {" "}
                  {/* Increased from text-xs to text-sm */}
                  This dialogue hits deep because it's a reminder that dreams are fragile and easily crushed by others'
                  doubts. It speaks to self-belief and resilience, even when those around us—including people we look up
                  to—fail to see our potential. It's especially motivating for students and young people navigating
                  uncertainties in life.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-normal mb-3 text-[#999] text-sm flex items-center">
                  {" "}
                  {/* Increased from text-xs to text-sm */}
                  <span className="inline-block w-2 h-2 rounded-none bg-[#bd93f9] mr-2"></span>
                  My Video Response
                </h4>
                <div className="aspect-w-16 aspect-h-9 bg-[#252525] rounded-none border border-[#333] flex items-center justify-center mb-4 h-64 overflow-hidden group relative">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    src="/MR1.mp4"
                    poster="/placeholder.svg?height=400&width=600&text=Movie Review 1"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-none border border-[#333] overflow-hidden">
            <div className="bg-[#252525] px-4 py-3 border-b border-[#333]">
              <div className="flex items-center">
                <span className="text-[#50fa7b] mr-2 text-lg">$</span> {/* Increased from default to text-lg */}
                <h3 className="text-base font-normal text-[#f8f8f2]">2) Your Personal Review</h3>{" "}
                {/* Increased from text-sm to text-base */}
              </div>
            </div>

            <div className="p-4">
              <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333]">
                <p className="text-[#bbb] text-sm">
                  {" "}
                  {/* Increased from text-xs to text-sm */}
                  "The Pursuit of Happyness" is a heart-touching and inspiring true story about Chris Gardner, a man who
                  refuses to give up despite facing homelessness, financial ruin, and personal struggles. The film
                  portrays the harsh realities of life while emphasizing hope, perseverance, and the power of dreams.
                  Will Smith delivers a powerful performance that makes you feel every moment of Chris's struggle and
                  eventual triumph. It's a rollercoaster of emotions, with moments of pain, motivation, and triumph all
                  blended into one masterpiece.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-normal mb-3 text-[#999] text-sm flex items-center">
                  {" "}
                  {/* Increased from text-xs to text-sm */}
                  <span className="inline-block w-2 h-2 rounded-none bg-[#bd93f9] mr-2"></span>
                  My Video Response
                </h4>
                <div className="aspect-w-16 aspect-h-9 bg-[#252525] rounded-none border border-[#333] flex items-center justify-center mb-4 h-64 overflow-hidden group relative">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    src="/MR2.mp4"
                    poster="/placeholder.svg?height=400&width=600&text=Movie Review 2"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-none border border-[#333] overflow-hidden">
            <div className="bg-[#252525] px-4 py-3 border-b border-[#333]">
              <div className="flex items-center">
                <span className="text-[#50fa7b] mr-2 text-lg">$</span> {/* Increased from default to text-lg */}
                <h3 className="text-base font-normal text-[#f8f8f2]">3) Learning to Take Away from the Movie</h3>{" "}
                {/* Increased from text-sm to text-base */}
              </div>
            </div>

            <div className="p-4">
              <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333]">
                <ul className="list-disc list-inside space-y-2 text-[#bbb] text-sm">
                  {" "}
                  {/* Increased from text-xs to text-sm */}
                  <li>Resilience pays off – No matter how tough things get, persistence leads to results.</li>
                  <li>Believe in yourself – Self-confidence is key to overcoming rejection and failure.</li>
                  <li>Hard work matters – Success doesn't come overnight; it takes relentless effort.</li>
                  <li>
                    Stay focused on your goal – Even in chaos, keeping your eyes on the goal can change your destiny.
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-normal mb-3 text-[#999] text-sm flex items-center">
                  {" "}
                  {/* Increased from text-xs to text-sm */}
                  <span className="inline-block w-2 h-2 rounded-none bg-[#bd93f9] mr-2"></span>
                  My Video Response
                </h4>
                <div className="aspect-w-16 aspect-h-9 bg-[#252525] rounded-none border border-[#333] flex items-center justify-center mb-4 h-64 overflow-hidden group relative">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    src="/MR3.mp4"
                    poster="/placeholder.svg?height=400&width=600&text=Movie Review 3"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-none border border-[#333] overflow-hidden">
            <div className="bg-[#252525] px-4 py-3 border-b border-[#333]">
              <div className="flex items-center">
                <span className="text-[#50fa7b] mr-2 text-lg">$</span> {/* Increased from default to text-lg */}
                <h3 className="text-base font-normal text-[#f8f8f2]">Overall Video Review</h3>{" "}
                {/* Increased from text-sm to text-base */}
              </div>
            </div>

            <div className="p-4">
              <p className="text-[#bbb] mb-6 text-sm">
                {" "}
                {/* Increased from text-xs to text-sm */}
                Please provide a comprehensive video review of the movie, discussing all aspects covered in the
                questions above.
              </p>

              <div className="aspect-w-16 aspect-h-9 bg-[#252525] rounded-none border border-[#333] flex items-center justify-center h-80 overflow-hidden group relative">
                <video
                  className="w-full h-full object-contain"
                  controls
                  src="/MR4.mp4"
                  poster="/placeholder.svg?height=400&width=600&text=Movie Review Overall"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
