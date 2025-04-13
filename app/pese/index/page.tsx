"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Film, Terminal } from "lucide-react"
import { JetBrains_Mono } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export default function PESEIndex() {
  const [activeTab, setActiveTab] = useState("profiling")

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

        <div className="bg-[#1a1a1a] rounded-none border border-[#333] p-6 overflow-auto h-[calc(100vh-12rem)]">
          {activeTab === "profiling" && <ProfilingSheet />}
          {activeTab === "movie" && <MovieReview />}
        </div>
      </div>
    </div>
  )
}

// Include the ProfilingSheet component directly in this file
function ProfilingSheet() {
  const questions = [
    {
      question: "Write your career objective.",
      answer:
        "To become a skilled software engineer, specializing in full-stack development and artificial intelligence. I aim to create efficient, scalable applications that solve real-world problems while continuously enhancing my knowledge of data structures, algorithms, and system design.",
    },
    {
      question: "Why do you want to be an engineer? Elaborate reasons.",
      answer:
        "I have always been passionate about technology and problem-solving. Engineering provides the perfect platform to apply logic, creativity, and innovation to build solutions that impact society. I enjoy writing code, optimizing algorithms, and developing interactive applications, which makes software engineering the ideal field for me.",
    },
    {
      question: "Write about projects or internship you have done/ are doing along with the learning.",
      answer:
        "Attendance System with QR Code\n\nTechnologies: React, Next.js, MongoDB\n\nLearned about frontend development, API integration, and database management.\n\nOnline Class Platform\n\nTechnologies: Next.js, ZEGOCLOUD (for media streaming)\n\nGained knowledge about real-time communication, authentication, and cloud-based APIs.\n\nWordle Game (Cross-Platform)\n\nTechnologies: Next.js (web), React Native (mobile)\n\nLearned about game logic implementation, UI design, and cross-platform development.",
    },
    {
      question: "What would you consider a significant achievement in your life and why?",
      answer:
        "Building a functional chatbot for Graphic Era Hill University using Next.js and MongoDB. It provides students with information about placements, courses, and admissions. This project helped me understand API routes, database storage, and UI optimization.",
    },
    {
      question: "Write about a failure of yours which you consider to share. What have you learned from it?",
      answer:
        "I initially started working with Django for backend development but found it too complex for my use case. After struggling with it, I switched to Next.js and built my applications efficiently. This taught me that choosing the right technology stack is crucial, and sometimes, simplifying an approach leads to better results.",
    },
    {
      question: "What are your strengths? Write one or two instances where you have demonstrated your strengths.",
      answer:
        "Logical Thinking & Problem-Solving – Successfully implemented the A* algorithm for a shortest path finder project.\n\nAdaptability & Quick Learning – Switched from Django to Next.js when developing a chatbot, proving my ability to learn new technologies quickly.",
    },
    {
      question: "Write about your weaknesses. What are you doing to overcome your weaknesses?",
      answer:
        "Typing Speed – Working on improving my typing accuracy and speed through daily practice.\n\nTime Management – Using task prioritization techniques and scheduling my projects efficiently.",
    },
    {
      question:
        "What is the most difficult moment that you have faced in your life so far? What qualities helped you to overcome the moment?",
      answer:
        "Balancing college coursework and project development was challenging. Discipline, persistence, and problem-solving skills helped me manage both effectively.",
    },
    {
      question:
        "Apart from academics, what else are you interested in? Make a separate list in terms of extracurricular activities, sports and any other interests.",
      answer:
        "Extracurricular Activities:\n• Web development\n• AI research\n• Competitive programming\n\nSports:\n• Chess\n• Table tennis\n\nOther Interests:\n• Deep-sea creatures and their behaviors",
    },
    {
      question: "Give an example of an area, concept or thing that you are absolutely passionate about.",
      answer:
        "I am deeply interested in AI and algorithm optimization. Understanding how search and pathfinding algorithms work, such as A* and Dijkstra's, excites me, and I enjoy implementing them in projects.",
    },
    {
      question: "Describe yourself as an individual in 5 lines.",
      answer:
        "1. Passionate about building scalable web applications.\n\n2. Enjoys problem-solving and algorithmic challenges.\n\n3. Constantly learning new programming languages and frameworks.\n\n4. Adapts quickly to new technologies and methodologies.\n\n5. Aims to develop impactful software solutions in the future.",
    },
    {
      question: "What kinds of people do you enjoy working with?",
      answer:
        "People who are collaborative, open-minded, and eager to learn. I enjoy working with those who take initiative and contribute innovative ideas.",
    },
    {
      question:
        "What kinds of people you don't want to work with? What would you do if they became your senior in your dream job?",
      answer:
        "I prefer not to work with uncooperative or overly negative individuals. However, if such a person became my senior, I would maintain professionalism, adapt, and focus on learning from the experience.",
    },
    {
      question: "What do you expect from your first job? Prioritize and write in order.",
      answer:
        "1. Opportunities for learning and growth.\n\n2. A collaborative and innovative work environment.\n\n3. Challenging projects that improve my skills.\n\n4. Fair compensation and work-life balance.\n\n5. Exposure to industry best practices and technologies.",
    },
    {
      question: "In the past year, what have you been dissatisfied about in your performance?",
      answer:
        "I felt that my time management was not efficient enough, especially while working on multiple projects. I have since started prioritizing tasks and using productivity tools to improve efficiency.",
    },
    {
      question:
        "Rate yourself out of 5 in verbal communication. What are you doing to improve your communication skills?",
      answer:
        "3.5/5 – I can explain technical concepts well but aim to improve my clarity and confidence. To improve, I participate in discussions, explain concepts to peers, and engage in coding communities.",
    },
    {
      question:
        "Who is your role model? What qualities of that person you would like to see in your personality and why?",
      answer:
        "Elon Musk – I admire his vision, persistence, and problem-solving skills. I want to develop the ability to think ahead, take calculated risks, and innovate in my field.",
    },
    {
      question:
        "Write a few lines about your friends. Do you think they help/ may help you in achieving your goals? If yes, how? If no, why do you accompany them?",
      answer:
        "My friends are motivated and hardworking, especially in tech-related fields. We often share knowledge, discuss coding problems, and work on projects together, helping each other grow.",
    },
    {
      question:
        "Write 3 leadership qualities. How many do you possess? Write an instance where you have applied those qualities.",
      answer:
        "1. Decision-making\n\n2. Problem-solving\n\n3. Team coordination\n\nI demonstrated problem-solving and team coordination when leading my team in the Attendance System project. I ensured smooth development, assigned tasks efficiently, and handled technical challenges.",
    },
    {
      question: "So finally, tell us something more about yourself or introduce yourself.",
      answer:
        "I am a second-year CSE student at Graphic Era Hill University, passionate about software development and algorithm design. My expertise lies in React, Next.js, and MongoDB, and I enjoy building projects that solve real-world problems. Apart from coding, I have an interest in deep-sea creatures and their behaviors. I am always eager to learn and improve my skills, whether in web development, AI, or competitive programming.",
    },
  ]

  return (
    <div className="w-full p-6 md:p-8 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-normal mb-3 text-[#f8f8f2] tracking-wide">Profiling Sheet</h2>
          <p className="text-[#bbb] text-base">
            20 answers about me
          </p>
        </div>
        <div className="space-y-8">
          {questions.map((question, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-none border border-[#333] overflow-hidden">
              <div className="bg-[#252525] px-4 py-3 border-b border-[#333]">
                <div className="flex items-center">
                  <span className="text-[#50fa7b] mr-2 text-lg">$</span>
                  <h3 className="text-base font-normal text-[#f8f8f2]">
                    Q{index + 1}: {question.question}
                  </h3>
                </div>
              </div>

              <div className="p-4">
                <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333] text-[#bbb]">
                  <h4 className="font-normal mb-3 text-[#999] text-sm flex items-center">
                    <span className="inline-block w-2 h-2 rounded-none bg-[#50fa7b] mr-2"></span>
                    Answer
                  </h4>
                  <div className="whitespace-pre-line text-[#bbb] text-sm font-mono">{question.answer}</div>
                </div>

                <div className="mt-6">
                  <h4 className="font-normal mb-3 text-[#999] text-sm flex items-center">
                    <span className="inline-block w-2 h-2 rounded-none bg-[#bd93f9] mr-2"></span>
                    My Video Response
                  </h4>
                  <div className="aspect-w-16 aspect-h-9 bg-[#252525] rounded-none border border-[#333] flex items-center justify-center mb-4 h-64 overflow-hidden group relative">
                    <video
                      className="w-full h-full object-contain"
                      controls
                      src={`/Q${index + 1}.mp4`}
                      poster={`/placeholder.svg?height=400&width=600&text=Video ${index + 1}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Include the MovieReview component directly in this file
function MovieReview() {
  return (
    <div className="w-full p-6 md:p-8 font-mono">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-normal mb-3 text-[#f8f8f2] tracking-wide">
            Movie Review: The Pursuit of Happyness
          </h2>
          <p className="text-[#bbb] text-base">
            My review of the movie "The Pursuit of Happyness"
          </p>
        </div>
        <div className="space-y-8">
          <div className="bg-[#1a1a1a] rounded-none border border-[#333] overflow-hidden">
            <div className="bg-[#252525] px-4 py-3 border-b border-[#333]">
              <div className="flex items-center">
                <span className="text-[#50fa7b] mr-2 text-lg">$</span>
                <h3 className="text-base font-normal text-[#f8f8f2]">1) Your Favourite Dialogue and Why?</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333]">
                <p className="italic text-[#bbb] mb-4 text-sm">
                  "Don't ever let somebody tell you… You can't do something. Not even me. You got a dream, you gotta
                  protect it."
                </p>
                <p className="text-[#bbb] text-sm">
                  This dialogue hits deep because it's a reminder that dreams are fragile and easily crushed by others'
                  doubts. It speaks to self-belief and resilience, even when those around us—including people we look up
                  to—fail to see our potential. It's especially motivating for students and young people navigating
                  uncertainties in life.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-normal mb-3 text-[#999] text-sm flex items-center">
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
                <span className="text-[#50fa7b] mr-2 text-lg">$</span>
                <h3 className="text-base font-normal text-[#f8f8f2]">2) Your Personal Review</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333]">
                <p className="text-[#bbb] text-sm">
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
                <span className="text-[#50fa7b] mr-2 text-lg">$</span>
                <h3 className="text-base font-normal text-[#f8f8f2]">3) Learning to Take Away from the Movie</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333]">
                <ul className="list-disc list-inside space-y-2 text-[#bbb] text-sm">
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
                <span className="text-[#50fa7b] mr-2 text-lg">$</span>
                <h3 className="text-base font-normal text-[#f8f8f2]">Overall Video Review</h3>
              </div>
            </div>

            <div className="p-4">
              <p className="text-[#bbb] mb-6 text-sm">
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
