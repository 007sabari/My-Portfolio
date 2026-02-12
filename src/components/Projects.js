import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "My Portfolio Website ",
      description:
        "Animated, fully responsive personal portfolio designed with React, Tailwind CSS, and custom transforms for a futuristic UI experience.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/007sabari", // replace if you upload portfolio repo
    },
    {
      title: "Video Summarization System",
      description:
        "AI-powered system that summarizes long videos using NLP, OCR, scene detection, and speech-to-text. Designed for faster content review and accessibility.",
      tech: ["Python", "OpenAI APIs", "OCR", "Speech-to-Text"],
      link: "https://github.com/007sabari/videoSummarize",
    },
    {
      title: "Employee Management System",
      description:
        "Full-stack system built during BrandWaves internship using Next.js, Spring Boot, and MySQL. Automates employee workflows and improves data accuracy.",
      tech: ["Next.js", "Tailwindcss", "MySQL"],
      link: "https://github.com/007sabari/Employee_Management_System",
    },
    {
      title: "GPT-Based Smart Assistant",
      description:
        "Voice-controlled chatbot built using GPT-3.5. Handles FAQs, automates tasks, and simulates helpdesk workflows with modular Python backend.",
      tech: ["Python", "GPT-3.5", "Speech Recognition", "JS / UI"],
      link: "https://github.com/007sabari/-GPT-Based-Smart-Assistant-",
    },
    {
      title: "Amazon Clone – E-Commerce Web App",
      description:
        "Amazon-style e-commerce website featuring product browsing, cart system, checkout flow, and responsive UI with secure backend.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/007sabari/Amazon-project",
    },
    
    
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#0b0c14] text-white overflow-hidden"
    >
      {/* TRANSFORM SHAPE – Diagonal Floating Beam */}
      <div className="absolute -right-20 top-0 w-60 h-full bg-gradient-to-b from-purple-600/20 to-cyan-500/10 rotate-12 blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-gray-300 mt-3">
          A showcase of my best work — AI, automation, and full-stack development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="
            bg-white/10 backdrop-blur-xl border border-white/10 
            rounded-2xl p-6 shadow-xl hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]
            transition duration-500"
          >
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
              {p.title}
            </h2>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 border border-cyan-400/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <a href={p.link} target="_blank" rel="noreferrer"
              className="inline-block mt-2 px-5 py-2 rounded-xl border border-cyan-300/40
              hover:bg-cyan-400/20 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
