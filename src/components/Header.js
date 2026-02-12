import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0b12]/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" href="#home">
          SABARI
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white/80 font-medium">
            <li><a className="hover:text-cyan-300 transition" href="#home">Home</a></li>
            <li><a className="hover:text-cyan-300 transition" href="#about">About</a></li>
            <li><a className="hover:text-cyan-300 transition" href="#skills">Skills</a></li>
            <li><a className="hover:text-cyan-300 transition" href="#experience">Experience</a></li>
            <li><a className="hover:text-cyan-300 transition" href="#education">Education</a></li>
            <li><a className="hover:text-cyan-300 transition" href="#projects">Projects</a></li>
            <li><a className="hover:text-cyan-300 transition" href="#resume">Resume</a></li>
            <li><a className="hover:text-cyan-300 transition" href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden text-white"
        >
          <Bars3Icon className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="md:hidden bg-[#0a0b12] border-t border-white/10">
          <ul
            onClick={() => setToggleMenu(false)}
            className="flex flex-col text-white/80 font-medium px-6 py-4 space-y-4"
          >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
