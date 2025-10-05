import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const certs = [
  {
    name: "Power BI Workshop – Office Master",
    link: "P.BI.jpg"
  },
  {
    name: "Programming Fundamentals using Python – Infosys Springboard",
    link: "INFO1.jpg"
  },
  {
    name: "Data Analytics Virtual Job Simulation – Deloitte via Forage",
    link: "DELOITTE.jpg"
  },
  {
    name: "Elements of AI – University of Helsinki & MinnaLearn",
    link: "ELEMENTS-OF-AI.png"
  },
  {
    name: "Introduction to Artificial Intelligence – Infosys Springboard",
    link: "/certificates/IntroAI.jpg"
  },
  {
    name: "Internship Completion Certificate – StaxTech",
    link: "CER.jpg"
  }
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Certifications & Achievements
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            onClick={() => window.open(cert.link, "_blank")}
            className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border-l-4 border-teal-400 cursor-pointer flex flex-col items-center justify-center transition-transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Subtle award icon */}
            <div className="bg-white/20 p-3 rounded-full mb-4">
              <FaAward className="text-teal-400 text-2xl" />
            </div>
            <p className="text-white font-semibold text-center text-lg md:text-xl">{cert.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
