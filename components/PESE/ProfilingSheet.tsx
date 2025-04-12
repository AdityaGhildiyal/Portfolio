"use client"

export default function ProfilingSheet() {
  const questions = [
    {
      question: "Write your career objective.",
      answer:
        "To secure a challenging position in a reputable organization that allows me to utilize my technical skills and knowledge in software development, while providing opportunities for continuous learning and professional growth. I aim to contribute innovative solutions that drive technological advancement and create meaningful impact.",
    },
    {
      question: "Why do you want to be an engineer? Elaborate reasons.",
      answer:
        "I want to be an engineer because I'm passionate about solving complex problems and creating solutions that positively impact people's lives. Engineering combines my love for mathematics, logical thinking, and creativity. The field offers continuous learning opportunities as technology evolves, ensuring I'll never stop growing professionally. Additionally, engineering provides a platform to collaborate with diverse teams, bringing different perspectives together to innovate. Ultimately, I find fulfillment in building tangible products and systems that can improve efficiency, sustainability, and quality of life.",
    },
    {
      question: "Write about projects or internship you have done/ are doing along with the learning.",
      answer:
        "During my recent web development internship at TechSolutions Inc., I worked on building a responsive e-commerce platform using React.js and Node.js. This experience taught me the importance of clean code architecture and efficient state management. I learned to implement RESTful APIs and gained practical knowledge of database design with MongoDB.\n\nI also developed a personal project—a task management application with real-time collaboration features. This project enhanced my understanding of WebSocket technology and user authentication systems. The most valuable learning came from troubleshooting deployment issues, which improved my debugging skills and understanding of cloud infrastructure.",
    },
    {
      question: "What would you consider a significant achievement in your life and why?",
      answer:
        "A significant achievement in my life was leading a team of five students to win the regional hackathon competition despite being first-time participants. We developed an accessibility application that translates sign language to text in real-time using computer vision. This achievement stands out because we overcame numerous technical challenges and tight deadlines through effective collaboration and perseverance. The project required learning new technologies within 48 hours and adapting quickly when our initial approach failed. Beyond the technical accomplishment, this experience taught me valuable leadership skills—how to leverage each team member's strengths, maintain motivation during setbacks, and communicate complex ideas clearly. The recognition validated our innovative thinking, but more importantly, it demonstrated what determined individuals can accomplish when united by a meaningful purpose.",
    },
    {
      question: "Write about a failure of yours which you consider to share. What have you learned from it?",
      answer:
        "During my second year, I attempted to launch a student-led coding bootcamp initiative that ultimately failed to gain traction. Despite my enthusiasm and initial support from faculty, I underestimated the logistics involved and didn't adequately address scheduling conflicts with existing academic commitments. Attendance dwindled after the first few sessions, and the program was discontinued.\n\nThis failure taught me several valuable lessons. First, thorough planning and stakeholder analysis are crucial before launching any initiative. I should have conducted surveys to understand student availability and interest levels. Second, I learned the importance of building a committed team rather than trying to manage everything independently. Most importantly, this experience showed me that failure isn't final but instructive—I've since applied these insights to successfully coordinate smaller, more focused study groups with clearer objectives and realistic timelines. This experience transformed my approach to leadership and project management.",
    },
    {
      question: "What are your strengths? Write one or two instances where you have demonstrated your strengths.",
      answer:
        "My key strengths include analytical thinking, adaptability, and effective communication. My analytical abilities were evident during a complex database optimization project where I identified inefficient query patterns that were causing performance bottlenecks. By methodically analyzing execution plans and implementing indexed views, I reduced query response times by 70%, significantly improving the application's performance.\n\nMy adaptability was demonstrated when our team's project requirements changed drastically mid-development due to client feedback. While others were frustrated by the pivot, I quickly adjusted my approach, learned the necessary new technologies, and helped create a transition plan that kept the project on schedule. This flexibility not only salvaged the project but also strengthened client trust in our team's capabilities.",
    },
    {
      question: "Write about your weaknesses. What are you doing to overcome your weaknesses?",
      answer:
        "One of my weaknesses is perfectionism, which sometimes leads me to spend excessive time refining details instead of moving forward with projects. This has occasionally affected my productivity and created unnecessary stress when working under tight deadlines. To address this, I've implemented a structured time-boxing approach where I allocate specific time limits for tasks and force myself to progress once that time expires. I've also started practicing the \"Minimum Viable Product\" philosophy, focusing first on core functionality before refinements.\n\nAnother weakness is my tendency to avoid delegating tasks when working in team settings, as I sometimes doubt others can meet my standards. I'm overcoming this by consciously practicing delegation, providing clear instructions, and focusing on outcomes rather than methodologies. I've joined collaborative projects specifically to improve this skill, and I'm keeping a reflection journal to track my progress in building trust with team members.",
    },
    {
      question:
        "What is the most difficult moment that you have faced in your life so far? What qualities helped you to overcome the moment?",
      answer:
        "The most difficult moment I've faced was when I failed a critical programming course during my first year, which threatened my academic standing and shook my confidence in my chosen field. This unexpected setback was particularly challenging because I had always excelled academically and had built my identity around academic success.\n\nThe qualities that helped me overcome this situation were resilience, humility, and strategic thinking. Resilience allowed me to push through the initial disappointment and shame, transforming these emotions into determination. Humility enabled me to acknowledge my knowledge gaps and seek help from professors and peers—something I had rarely done before. Strategic thinking helped me analyze my study habits and learning approach, leading me to develop a more effective methodology focused on practical application rather than theoretical memorization.\n\nI restructured my learning process, formed a study group, and committed to daily coding practice. Not only did I retake the course and earn an A, but this experience fundamentally changed how I approach challenges. I now view setbacks as opportunities for growth rather than personal failures, which has made me more adaptable and confident in facing new challenges.",
    },
    {
      question:
        "Apart from academics, what else are you interested in? Make a separate list in terms of extracurricular activities, sports and any other interests.",
      answer:
        "Beyond academics, I maintain a diverse range of interests that help me develop as a well-rounded individual:\n\nExtracurricular Activities:\n• Active member of the college's Robotics Club, participating in monthly build challenges\n• Volunteer at local STEM workshops for middle school students\n• Content writer for the Engineering Department's monthly newsletter\n• Participant in public speaking and debate competitions\n\nSports:\n• Competitive chess player with a district-level ranking\n• Recreational basketball player in the campus intramural league\n• Practice yoga three times weekly for mental clarity and physical flexibility\n• Weekend hiking enthusiast exploring local trails and nature reserves\n\nOther Interests:\n• Amateur photography focusing on urban architecture and landscapes\n• Learning to play the guitar, currently mastering intermediate techniques\n• Cooking enthusiast experimenting with fusion cuisine\n• Avid reader of science fiction and popular science literature\n• Podcast creator discussing emerging technologies and their societal impacts",
    },
    {
      question: "Give an example of an area, concept or thing that you are absolutely passionate about.",
      answer:
        "I am absolutely passionate about artificial intelligence ethics and responsible AI development. This fascination began when I encountered a research paper on algorithmic bias in facial recognition systems that disproportionately misidentified individuals from certain demographic groups. This revelation sparked my interest in the intersection of technology, ethics, and social impact.\n\nWhat captivates me most is how AI systems reflect and sometimes amplify human biases, raising profound questions about fairness, transparency, and accountability in technology. I spend hours reading research papers, attending webinars, and participating in online forums discussing these issues. I've implemented several personal projects exploring bias mitigation techniques and explainable AI methods.\n\nThis passion extends beyond technical aspects—I'm equally interested in the policy and governance frameworks needed to ensure AI benefits humanity equitably. I've organized campus discussions on these topics and am developing a workshop series to help fellow students understand the ethical dimensions of the code they write.\n\nUltimately, I believe that creating beneficial AI requires not just technical excellence but also careful consideration of human values and societal impact. This conviction drives my academic pursuits and shapes my vision for my future career in technology.",
    },
    {
      question: "Describe yourself as an individual in 5 lines.",
      answer:
        "I am a curious problem-solver who finds joy in understanding complex systems and creating elegant solutions.\nI approach challenges with analytical thinking while maintaining creativity that allows me to see beyond conventional approaches.\nI value authenticity and integrity, striving to align my actions with my principles even when faced with difficult choices.\nI am resilient in the face of setbacks, viewing failures as valuable learning opportunities rather than deterrents.\nI am driven by a desire to create technology that positively impacts people's lives, believing that innovation should serve human needs and values.",
    },
    {
      question: "What kinds of people do you enjoy working with?",
      answer:
        "I thrive when working with people who bring passion and dedication to their work, regardless of their specific role or expertise level. I particularly enjoy collaborating with individuals who maintain a healthy balance of confidence in their abilities while remaining open to new ideas and perspectives. Team members who communicate clearly and directly, without being confrontational, create an environment where productive discussions can flourish.\n\nI value working alongside people who take ownership of their responsibilities and follow through on commitments, as this builds mutual trust and respect. Individuals with diverse thinking styles complement my approach—analytical thinkers who challenge assumptions, creative minds who propose innovative solutions, and pragmatic team members who keep projects grounded in reality.\n\nPerhaps most importantly, I appreciate colleagues who maintain a positive attitude even during challenging situations and who can find appropriate moments for humor and lightness. These qualities create a supportive team dynamic where everyone feels empowered to contribute their best work while continuing to grow professionally.",
    },
    {
      question:
        "What kinds of people you don't want to work with? What would you do if they became your senior in your dream job?",
      answer:
        "I find it challenging to work with individuals who consistently demonstrate closed-mindedness, refusing to consider alternative perspectives or new approaches. Similarly, I struggle with team members who prioritize personal recognition over collective success, as this often undermines collaboration and creates an unnecessarily competitive environment.\n\nIf someone with these traits became my senior in my dream job, I would adopt a strategic and professional approach. First, I'd focus on understanding their communication style and work preferences to adapt my interactions accordingly. I'd make efforts to establish common ground by identifying shared goals and demonstrating reliability through consistent high-quality work.\n\nRather than focusing on personality differences, I would emphasize results and data when presenting ideas, as this approach tends to be more persuasive with difficult managers. I would also seek to build a network of positive relationships with other team members and stakeholders to create a supportive professional environment.\n\nIf specific issues arose, I would address them directly but respectfully in private conversations, focusing on work impact rather than personal criticisms. Throughout this process, I would maintain boundaries to protect my professional well-being while continuing to develop my skills and contribute value to the organization. This balanced approach would allow me to navigate the challenging dynamic while still advancing my career goals.",
    },
    {
      question: "What do you expect from your first job? Prioritize and write in order.",
      answer:
        "My expectations from my first job, in order of priority:\n\n1. Learning and Skill Development: Opportunities to apply theoretical knowledge in practical scenarios and acquire new technical and soft skills through meaningful projects and mentorship.\n\n2. Professional Growth Path: Clear understanding of performance metrics and advancement opportunities that allow me to visualize and work toward long-term career development.\n\n3. Collaborative Team Environment: Working with experienced professionals in a supportive culture that encourages knowledge sharing, constructive feedback, and collaborative problem-solving.\n\n4. Work on Impactful Projects: Contributing to initiatives that solve real problems and create value, providing a sense of purpose and accomplishment.\n\n5. Work-Life Balance: Reasonable expectations regarding working hours and flexibility that allow me to maintain personal well-being and prevent burnout.\n\n6. Constructive Feedback Mechanisms: Regular performance reviews and feedback channels that help me identify improvement areas and recognize strengths.\n\n7. Competitive Compensation: Fair salary and benefits package that reflects industry standards and values my contributions.\n\n8. Networking Opportunities: Chances to build professional relationships within and outside the organization through events, conferences, and collaborative projects.",
    },
    {
      question: "In the past year, what have you been dissatisfied about in your performance?",
      answer:
        "In the past year, I've been dissatisfied with my time management skills, particularly when juggling multiple projects with competing deadlines. I noticed that I would sometimes underestimate the complexity of certain tasks, leading to rushed work in the final stages and unnecessary stress. This was evident during our department's semester project when I had to complete several major components in the last week, affecting the overall quality of my implementation.\n\nI've also been disappointed with my tendency to work in isolation when facing challenging problems. Rather than leveraging the collective knowledge of my peers or seeking guidance from professors early on, I would spend excessive time trying to solve issues independently. This not only reduced my efficiency but also limited my exposure to alternative approaches and perspectives.\n\nAdditionally, I've realized that my technical documentation skills need improvement. My code comments and project documentation often lack the detail and clarity necessary for others to easily understand and build upon my work. This became apparent when team members had difficulty continuing a project I had started during a collaborative assignment.\n\nI've begun addressing these areas by implementing structured planning techniques, setting earlier personal deadlines, actively participating in study groups, and studying documentation best practices. While I've seen some improvement, these remain areas of focus for continued development.",
    },
    {
      question:
        "Rate yourself out of 5 in verbal communication. What are you doing to improve your communication skills?",
      answer:
        "I would rate myself 3.5 out of 5 in verbal communication. While I can articulate ideas clearly in prepared settings and one-on-one conversations, I sometimes struggle with impromptu speaking in large groups and technical presentations where precision is crucial.\n\nTo improve my communication skills, I've implemented several strategies. First, I joined the campus Toastmasters club, where I practice delivering speeches and receive structured feedback. This has been particularly helpful for managing nervousness and organizing thoughts quickly under pressure.\n\nI've also started recording myself when practicing presentations, analyzing areas like pacing, clarity, and filler words. This self-assessment has made me more conscious of my speaking patterns and helped me develop more concise delivery.\n\nAdditionally, I volunteer to present project updates during team meetings, deliberately placing myself in situations that require clear technical communication. I've found that this regular practice in a supportive environment has gradually built my confidence.\n\nI'm also working on active listening skills by taking notes during conversations and paraphrasing others' points before responding. This ensures I fully understand the discussion and can contribute more meaningfully.\n\nFinally, I've expanded my vocabulary, particularly industry-specific terminology, through regular reading of technical articles and papers. This has enhanced my ability to express complex concepts precisely and professionally.",
    },
    {
      question:
        "Who is your role model? What qualities of that person you would like to see in your personality and why?",
      answer:
        "My role model is Dr. Fei-Fei Li, the co-director of Stanford's Human-Centered AI Institute and a pioneer in computer vision and AI ethics. Beyond her groundbreaking technical contributions like ImageNet, which revolutionized machine learning, I admire how she consistently emphasizes the human impact of technology.\n\nThe first quality I admire and seek to develop is her remarkable ability to bridge technical expertise with humanitarian vision. Dr. Li doesn't just create advanced algorithms; she thoughtfully considers their societal implications. This perspective is increasingly crucial in our field, where technical capabilities often outpace ethical frameworks.\n\nSecond, I'm inspired by her resilience and determination. As an immigrant who faced significant challenges, she persevered through obstacles to become a leading figure in a male-dominated field. This resilience reminds me to view setbacks as temporary and to maintain focus on long-term goals.\n\nThird, I admire her exceptional communication skills. She can explain complex technical concepts to diverse audiences without oversimplification, making AI accessible to policymakers, students, and the public. This ability to translate between technical and non-technical worlds is something I'm actively working to develop.\n\nFinally, I value her collaborative leadership style that elevates others rather than seeking personal recognition. She consistently acknowledges her team's contributions and creates opportunities for emerging researchers. This generosity of spirit and commitment to mentorship exemplifies the kind of leader I aspire to become—one who measures success not just by personal achievements but by positive impact on both technology and the people who create it.",
    },
    {
      question:
        "Write a few lines about your friends. Do you think they help/ may help you in achieving your goals? If yes, how? If no, why do you accompany them?",
      answer:
        "My friend circle consists of a diverse group of individuals with varied interests and strengths. Rahul, a fellow computer science student, challenges me intellectually with his analytical approach to problem-solving. Priya brings creative thinking to our discussions, often helping me see challenges from unexpected angles. Amit, who studies business, provides valuable perspectives on the practical applications of technology in industry.\n\nThese friendships definitely help me achieve my goals in multiple ways. Academically, we form study groups that enhance my learning through peer teaching and discussion. When I explain concepts to them, I solidify my own understanding, and their questions often reveal gaps in my knowledge that I might have overlooked.\n\nEmotionally, they provide crucial support during stressful periods, offering encouragement when I face setbacks and celebrating my successes. This support system has been invaluable in maintaining motivation and resilience throughout my academic journey.\n\nProfessionally, my friends expand my network and expose me to opportunities I might otherwise miss. For instance, Amit's connection with the entrepreneurship club led to my involvement in a startup weekend that significantly enhanced my project portfolio.\n\nPerhaps most importantly, these friendships provide balance in my life. They remind me to step away from coursework occasionally, preventing burnout and fostering well-being. Our diverse conversations broaden my thinking beyond technical subjects, developing the soft skills and perspective that are increasingly valuable in the technology sector.",
    },
    {
      question:
        "Write 3 leadership qualities. How many do you possess? Write an instance where you have applied those qualities.",
      answer:
        "Three essential leadership qualities are effective communication, empathetic decision-making, and adaptability in the face of challenges.\n\nI believe I possess two of these qualities strongly—communication and adaptability—while I'm actively developing my empathetic decision-making skills.\n\nMy communication skills were evident when I led our college's technical symposium organizing committee. The event involved coordinating with 15 team members, speakers from industry, and over 200 participants. I established clear communication channels, created detailed documentation, and held regular check-ins to ensure everyone understood their responsibilities. When conflicts arose between team members regarding resource allocation, I facilitated open discussions where each person could express their concerns. By clearly articulating the event objectives and constraints, I helped the team reach consensus and maintain focus on our shared goals. The symposium's success, with attendance exceeding previous years by 30%, demonstrated the effectiveness of this communication-centered approach.\n\nMy adaptability was tested when, two days before this same event, our keynote speaker canceled due to a medical emergency. Rather than panicking, I quickly assembled the team to brainstorm alternatives. We pivoted to a panel discussion format featuring local industry professionals from our network. I reorganized the schedule, briefed the new panelists, and communicated changes to attendees—all within 36 hours. This last-minute adaptation actually enhanced the event, as the interactive panel received extremely positive feedback in post-event surveys.\n\nI continue working on empathetic decision-making by actively seeking diverse perspectives before making important decisions and considering how my choices affect all stakeholders involved.",
    },
    {
      question: "So finally, tell us something more about yourself or introduce yourself.",
      answer:
        "I'm a second-year Computer Science student at Graphic Era Hill University with a passion for creating technology that solves real-world problems. Born and raised in Delhi until my 10th standard, with a brief period in Bhopal, I completed my higher secondary education in Srinagar Garhwal before joining the university in Dehradun.\n\nMy academic journey has been shaped by a fascination with how systems work—from the logical elegance of algorithms to the creative possibilities of user interface design. I maintain a strong academic record while actively participating in hackathons and coding competitions, where I've developed valuable teamwork and problem-solving skills under pressure.\n\nBeyond academics, I'm an avid photographer who finds inspiration in urban architecture and natural landscapes. This creative outlet balances my technical pursuits and trains my eye for design aesthetics that inform my UI/UX work. I also volunteer with a local STEM education initiative, teaching basic programming concepts to middle school students—an experience that has improved my communication skills and reinforced my own understanding of fundamentals.\n\nI approach challenges with analytical thinking but believe that empathy and user-centered design are equally important in creating meaningful technology. My goal is to develop solutions that not only function efficiently but also enhance people's lives in tangible ways.\n\nWhat drives me is the belief that technology should be accessible and beneficial to diverse communities. This perspective guides my project choices and long-term career aspirations in software development. I'm particularly interested in exploring the intersection of AI and accessibility, with the aim of making digital experiences more inclusive.\n\nI value continuous learning, constructive feedback, and collaborative environments where diverse perspectives lead to innovative solutions. As I continue my education, I look forward to expanding my technical expertise while developing the leadership and communication skills necessary to make a meaningful impact in the technology field.",
    },
  ]

  return (
    <div className="w-full p-6 md:p-8 font-mono">
      <div className="max-w-5xl mx-auto">
        {" "}
        {/* Increased from max-w-4xl to max-w-5xl (110%) */}
        <div className="mb-8">
          <h2 className="text-2xl font-normal mb-3 text-[#f8f8f2] tracking-wide">Profiling Sheet</h2>{" "}
          {/* Increased from text-xl to text-2xl */}
          <p className="text-[#bbb] text-base">
            {" "}
            {/* Increased from text-sm to text-base */}
            This profiling sheet consists of 20 questions designed to help you reflect on your personal and professional
            development. Each question requires a video response.
          </p>
        </div>
        <div className="space-y-8">
          {questions.map((question, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-none border border-[#333] overflow-hidden">
              <div className="bg-[#252525] px-4 py-3 border-b border-[#333]">
                <div className="flex items-center">
                  <span className="text-[#50fa7b] mr-2 text-lg">$</span> {/* Increased from default to text-lg */}
                  <h3 className="text-base font-normal text-[#f8f8f2]">
                    {" "}
                    {/* Increased from text-sm to text-base */}Q{index + 1}: {question.question}
                  </h3>
                </div>
              </div>

              <div className="p-4">
                <div className="bg-[#252525] rounded-none p-4 mb-6 border border-[#333] text-[#bbb]">
                  <h4 className="font-normal mb-3 text-[#999] text-sm flex items-center">
                    {" "}
                    {/* Increased from text-xs to text-sm */}
                    <span className="inline-block w-2 h-2 rounded-none bg-[#50fa7b] mr-2"></span>
                    Sample Answer
                  </h4>
                  <div className="whitespace-pre-line text-[#bbb] text-sm font-mono">
                    {" "}
                    {/* Increased from text-xs to text-sm */}
                    {question.answer}
                  </div>
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
