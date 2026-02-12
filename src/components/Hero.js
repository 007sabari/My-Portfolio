import HeroImg from "../assets/hero.png";
import { AiOutlineGithub, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "PROGRAMMER", // animated through CSS
    social: {
      github: "https://github.com/007sabari",
      mail: "mailto:sabarinathan14052003@gmail.com",
      linkedin: "https://www.linkedin.com/in/sabarinathan-m-14d05m2003y",
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 
      overflow-hidden bg-[#0e0f1a] text-white"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(90,0,255,0.25),transparent_70%)]"></div>

      {/* Noise Layer */}
      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Transform Orbit */}
      <div className="absolute w-72 h-72 md:w-[380px] md:h-[380px] animate-orbitSlow opacity-70">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 40 100 A 60 60 0 0 1 160 100"
            stroke="#ffffff60"
            strokeWidth="1"
            strokeLinecap="round"
            fill="transparent"
          ></path>
          <circle cx="40" cy="100" r="2" fill="#fff"></circle>
          <circle cx="160" cy="100" r="2" fill="#fff"></circle>
        </svg>
      </div>

      {/* LEFT TEXT */}
      <div className="md:w-1/2 flex flex-col z-10 text-center md:text-left animate-heroTextUp">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi,<br />
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Sabarinathan
          </span>
        </h1>

        {/* 🔥 Animated Subtitle */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300 tracking-wide typing-effect">
          {config.subtitle}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-10">
          <a href={config.social.github} className="hover:text-purple-400 transition text-white/80">
            <AiOutlineGithub size={45} />
          </a>
          <a href={config.social.mail} className="hover:text-purple-400 transition text-white/80">
            <AiOutlineMail size={45} />
          </a>
          <a href={config.social.linkedin} className="hover:text-purple-400 transition text-white/80">
            <AiOutlineLinkedin size={45} />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/3 flex items-center justify-center mt-10 md:mt-0 z-10 animate-imageFloat">
        <img
          src={HeroImg}
          alt="Hero"
          className="w-60 md:w-80 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
