import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 bg-[#0b0b13] text-white overflow-hidden"
    >
      {/* Transform Shape – Vertical Beam */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-b 
      from-cyan-500/20 to-purple-600/10 blur-2xl rotate-6"></div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Education
        </h1>
        <p className="text-gray-300 mt-3">My academic background</p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 p-8 rounded-2xl backdrop-blur-xl border border-white/10 
          shadow-xl hover:-translate-y-2 transition"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 mb-2">
            Bachelor of Engineering in Computer Science
          </h2>

          <p className="text-gray-400 mt-1">
            University College of Engineering (BIT Campus), Trichy
          </p>

          <p className="text-gray-300 mt-3 font-medium">
            <span className="text-cyan-300">CGPA:</span> 7.52
          </p>

          <p className="text-gray-300 mt-3">
            2022 – 2025
          </p>
        </motion.div>
      </div>
    </section>
  );
}
