import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800 text-white text-center overflow-hidden">
      
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bg-white opacity-10 rounded-full w-72 h-72 -top-20 -left-20 animate-pulseSlow"></div>
        <div className="absolute bg-white opacity-10 rounded-full w-60 h-60 -bottom-20 -right-10 animate-pulseSlow"></div>
      </div>

      {/* Profile Image */}
      <motion.div
        className="w-40 md:w-52 aspect-square rounded-full mb-6 border-4 border-white shadow-2xl bg-white overflow-hidden flex justify-center items-center z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <img
          src="profile-pic.jpg"
          alt="Adhi Vignesh"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Adhi Vignesh
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-xl md:text-2xl mb-6 z-10 max-w-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Aspiring AI & ML Engineer | Web Development Enthusiast | Exploring
        Opportunities in AI-driven Solutions
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <a
          href="/Resume-1.pdf"
          download
          className="bg-teal-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-teal-500 hover:scale-105 transition-transform"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
