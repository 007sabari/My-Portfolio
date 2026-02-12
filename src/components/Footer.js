import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative bg-[#05050a] py-14 px-6 text-gray-300 overflow-hidden">

      {/* Transform Shape – Curved Wave Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] opacity-30">
        <svg viewBox="0 0 500 120" fill="none">
          <path
            d="M 0 60 Q 125 0 250 60 T 500 60"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-footerWave"
          />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.12),transparent_70%)]"></div>

      <div className="max-w-5xl mx-auto relative z-10 animate-footerFade">
        
        {/* Brand */}
        <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6">
          SABARI
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com/007sabari" target="_blank" rel="noreferrer"
            className="hover:text-white transition transform hover:-translate-y-2">
            <AiOutlineGithub size={30} />
          </a>
          <a href="mailto:sabarinathan14052003@gmail.com"
            className="hover:text-white transition transform hover:-translate-y-2">
            <AiOutlineMail size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sabarinathan-m-14d05m2003y"
            className="hover:text-white transition transform hover:-translate-y-2">
            <AiOutlineLinkedin size={30} />
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Sabarinathan — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
