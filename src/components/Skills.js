import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    programming: ["Python", "JavaScript"],
    web: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS"],
    tools: ["Git", "GitHub", "VS Code", "PyCharm"],
    soft: ["Problem-solving", "Team Collaboration", "Agile Development"],
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#0d0e17] text-white overflow-hidden"
    >
      {/* Transform Shape – Horizontal Neon Line */}
      <div className="absolute left-0 top-20 w-full h-1 bg-gradient-to-r from-purple-500/40 to-cyan-400/40 blur-lg"></div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
          Skills
        </h1>
        <p className="text-gray-300 mt-3">Technologies I work with</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        {Object.entries(skills).map(([title, list], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 p-6 rounded-2xl backdrop-blur-xl border border-white/10 
          hover:-translate-y-3 transition shadow-xl hover:shadow-[0_0_25px_rgba(0,200,255,0.4)]"
          >
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4 capitalize">
              {title}
            </h2>

            <div className="flex flex-wrap gap-3">
              {list.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 border border-cyan-400/20 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
