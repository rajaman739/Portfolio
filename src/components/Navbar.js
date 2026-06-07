import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/95 border-b border-cyan-400/30 shadow-[0_4px_20px_rgba(34,211,238,0.2)] z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl lg:text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          Aman Raj
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-5 text-sm xl:text-base font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#certifications" className="hover:text-cyan-400 transition">
              Certifications
            </a>
          </li>

          <li>
            <a href="#achievements" className="hover:text-cyan-400 transition">
              Achievements
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1s1juIVil4zgpJN5MJ9e_xBBTZTmKuF_d/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="lg:hidden cursor-pointer z-50"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="lg:hidden flex flex-col items-center bg-black/95 border-t border-cyan-400/20 space-y-8 py-10 text-xl font-medium">
          <li>
            <a href="#home" onClick={() => setNav(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setNav(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#education" onClick={() => setNav(false)}>
              Education
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setNav(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" onClick={() => setNav(false)}>
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setNav(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#certifications" onClick={() => setNav(false)}>
              Certifications
            </a>
          </li>

          <li>
            <a href="#achievements" onClick={() => setNav(false)}>
              Achievements
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setNav(false)}>
              Contact
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/1s1juIVil4zgpJN5MJ9e_xBBTZTmKuF_d/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setNav(false)}
              className="px-4 py-2 border border-cyan-400 rounded-lg text-cyan-400"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;