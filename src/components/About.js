import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      "I’m Sabarinathan — a developer who turns ideas into working products. I enjoy solving problems with clean UI, smart logic, and practical engineering.",
    line2:
      "From building an AI-powered Video Summarization System to creating an Employee Management System during my internship, I love pushing myself to learn, build, and innovate.",
    line3:
      "My current stack includes React, Tailwind, Python, and machine learning tools — and I’m constantly exploring new technologies to grow further.",
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-[#0e0f1a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,0,255,0.18),transparent_70%)]"></div>

      {/* Diagonal Transform Layer */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-700/10 rotate-[25deg] blur-3xl"></div>

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
        
        {/* LEFT — IMAGE PANEL */}
        <div className="relative group animate-aboutDiagonal">
          <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl"></div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-xl">
            {/* Shine sweep effect */}
            <div className="absolute inset-0 shine-effect"></div>

            <img
              src={AboutImg}
              alt="About"
              className="w-72 md:w-96 rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT — TEXT */}
        <div className="max-w-xl animate-aboutTextShow">
          <p className="text-gray-300 leading-relaxed mb-6">{config.line1}</p>
          <p className="text-gray-300 leading-relaxed mb-6">{config.line2}</p>
          <p className="text-gray-300 leading-relaxed">{config.line3}</p>
        </div>

      </div>
    </section>
  );
}
