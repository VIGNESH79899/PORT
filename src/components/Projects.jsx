import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiC, SiReact } from "react-icons/si";

// Projects data
const projectList = [
  {
    title: "Watch Website",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Responsive online watch store with product showcase and cart features.",
    demo: "#",
  },
  {
    title: "Personal Portfolio",
    tech: ["HTML", "CSS", "JS", "Animations"],
    desc: "Interactive portfolio showcasing projects and achievements with smooth animations.",
    demo: "#",
  },
  {
    title: "Password Storage System",
    tech: ["C", "DSA"],
    desc: "Secure password storage using hashing and hash table operations.",
    demo: "#",
  },
  {
    title: "Image Compression",
    tech: ["Linear Algebra", "C"],
    desc: "Compressed images using Rank-Nullity Theorem to save storage efficiently.",
    demo: "#",
  },
  {
    title: "Sales Data Aggregator",
    tech: ["Python"],
    desc: "Processed and analyzed raw sales data to generate actionable insights.",
    demo: "#",
  },
  {
    title: "PixelBoost",
    tech: ["React.js", "HTML", "CSS", "JS"],
    desc: "Startup website under development for creative digital solutions.",
    demo: "#",
  },
];

// Tech colors and icons mapping
const techData = {
  HTML: { color: "bg-red-500 text-white", icon: <SiHtml5 className="inline w-4 h-4 mr-1" /> },
  CSS: { color: "bg-blue-500 text-white", icon: <SiCss3 className="inline w-4 h-4 mr-1" /> },
  JavaScript: { color: "bg-yellow-400 text-gray-900", icon: <SiJavascript className="inline w-4 h-4 mr-1" /> },
  JS: { color: "bg-yellow-400 text-gray-900", icon: <SiJavascript className="inline w-4 h-4 mr-1" /> },
  C: { color: "bg-cyan-400 text-gray-900", icon: <SiC className="inline w-4 h-4 mr-1" /> },
  DSA: { color: "bg-purple-500 text-white", icon: null },
  Python: { color: "bg-green-500 text-white", icon: <SiPython className="inline w-4 h-4 mr-1" /> },
  "React.js": { color: "bg-sky-400 text-gray-900", icon: <SiReact className="inline w-4 h-4 mr-1" /> },
  Animations: { color: "bg-pink-500 text-white", icon: null },
  "Linear Algebra": { color: "bg-indigo-500 text-white", icon: null },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-wide relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-transparent hover:border-gradient-to-r hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 hover:shadow-xl hover:scale-105 transition-transform cursor-pointer flex flex-col justify-between"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            whileHover={{ rotateX: 3, rotateY: 3 }}
          >
            {/* Project Title with hover glow */}
            <h3 className="text-2xl font-extrabold mb-3 text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_white]">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-200 mb-4">{project.desc}</p>

            {/* Tech Tags with icons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center ${
                    techData[tech]?.color || "bg-gray-400 text-white"
                  }`}
                >
                  {techData[tech]?.icon} {tech}
                </span>
              ))}
            </div>

            {/* Classic Clean View Project Button */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto self-start px-5 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
