import resumePDF from "src/assets/Sabari's-resume.pdf";
import ResumeImg from "../assets/resume.jpg";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-24 px-6 bg-[#0c0c14] text-white overflow-hidden"
    >
      {/* Background spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,200,255,0.15),transparent_70%)]"></div>

      {/* Vertical wave transform shape */}
      <div className="absolute -left-20 top-0 h-full w-40 bg-gradient-to-b from-purple-800/30 to-cyan-700/20 blur-2xl rotate-[14deg]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="mt-3 text-gray-300">
            View or download my complete resume with one click.
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 animate-resumeFade">
          {/* Resume Preview Card */}
          <div
            className="
            bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl 
            rounded-2xl p-5 w-[320px] transform transition duration-500
            hover:-translate-y-3 hover:scale-[1.03] hover:rotate-1
            hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]
          "
          >
            <img
              src={ResumeImg}
              alt="resume"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Buttons + Description */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-2xl font-semibold mb-4">
              Want to explore my experience?
            </h2>

            <p className="mb-6 text-gray-300 leading-relaxed">
              Here's my detailed resume covering my skills, education,
              experience, and the projects I’ve built using modern
              technologies. You can preview or download it anytime.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href={resumePDF} target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-purple-500 to-blue-500 
                shadow-lg hover:opacity-90 transition"
              >
                View Resume
              </a>

              <a
                href={resumePDF}
                download
                className="px-6 py-3 rounded-xl font-semibold border border-cyan-400
                hover:bg-cyan-400/20 transition shadow-lg"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
