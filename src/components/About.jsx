import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800 overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl leading-relaxed text-gray-100 text-center">
          I am a <span className="font-bold text-teal-400">2nd-year B.Tech student</span> at <span className="font-bold text-yellow-400">Aurora University</span>, specializing in <span className="font-bold text-cyan-400">Computer Science</span> with a focus on <span className="font-bold text-purple-400">AI & Machine Learning</span>.  
          <br /><br />
          I have hands-on experience in <span className="font-bold text-teal-300">web development</span>, <span className="font-bold text-cyan-300">programming</span>, and <span className="font-bold text-yellow-300">project-based learning</span>.  
          <br /><br />
          Passionate about building <span className="font-bold text-teal-400">innovative solutions</span> and enhancing my skills in <span className="font-bold text-purple-400">AI/ML</span> and <span className="font-bold text-cyan-400">full-stack development</span>.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
