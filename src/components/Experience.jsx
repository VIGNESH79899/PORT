import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Internship Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline accent line */}
        <div className="absolute top-0 bottom-0 left-4 w-1 bg-teal-400 rounded-full"></div>

        <motion.div
          className="relative bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-2xl border-l-4 border-teal-400 hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-transform cursor-pointer flex flex-col md:flex-row items-start gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Left: Internship Details */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-purple-300 to-blue-300">
              Web Development Intern – StaxTech
            </h3>
            <p className="text-gray-200 mb-6 italic">May 2025 – June 2025</p>
            <ul className="list-disc list-inside text-lg text-gray-100 space-y-3">
              <li>Gained practical experience in HTML, CSS, and JavaScript for responsive web applications.</li>
              <li>Designed and deployed Personal Portfolio Website with animations for branding.</li>
              <li>Built basic E-commerce Website with product pages, cart features, and checkout.</li>
              <li>Improved understanding of UI/UX principles and project structure.</li>
            </ul>
          </div>

          {/* Right: Certificate Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/CER.jpg" // Put your certificate image in public folder
              alt="Internship Certificate"
              className="w-[full] md:w-[600px] h-auto object-contain rounded-xl shadow-lg border border-gray-200"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
