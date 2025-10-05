// CTA.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Like What You See?
      </motion.h2>
      <p className="text-white/90 mb-8 text-lg">
        Download my resume or contact me to discuss collaboration and projects!
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="/Resume-1.pdf"
          download
          className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default CTA;
