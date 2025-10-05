import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ dark, toggleDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/20 backdrop-blur-md dark:bg-gray-900/50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo / Name */}
        <div className="text-3xl md:text-4xl font-extrabold text-amber-100">
          AV's Portfolio
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-900 dark:text-gray-100 text-lg md:text-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group font-medium transition"
              >
                {link.name}
                {/* Animated underline on hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 dark:bg-teal-300 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDark}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 p-4 text-gray-900 dark:text-gray-100 text-lg">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium p-2 rounded hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-red-400 hover:text-white transition"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
