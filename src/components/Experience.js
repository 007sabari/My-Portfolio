import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-[#0c0d15] text-white overflow-hidden"
    >
      {/* Transform Shape – Glow Pill */}
      <div className="absolute w-60 h-60 bg-gradient-to-br from-purple-700/30 to-cyan-500/20 
      blur-3xl rounded-full -top-10 left-10"></div>

      <div className="relative z-10 text-center mb-16">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text">
          Experience
        </h1>
        <p className="text-gray-300 mt-3">My professional journey</p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            Web Developer Intern — BrandWaves, Chennai
          </h2>
          <p className="text-gray-400 mb-4">Jul 2024 – Aug 2024</p>

          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Built an Employee Management System using Next.js, Spring Boot & MySQL.</li>
            <li>Reduced front-end load time by 20% through optimization.</li>
            <li>Improved management processes by 60%, reduced manual work by 70%.</li>
            <li>Implemented secure backend logic enhancing data accuracy by 50%.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
