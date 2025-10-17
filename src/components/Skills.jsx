import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJs, FaJava, FaReact, FaDatabase, FaCuttlefish } from 'react-icons/fa';

const coreSkills = [
  { title: "C", icon: <FaCuttlefish size={28} />, tags: ["C"], color: "border-teal-400" },
  { title: "Python", icon: <FaPython size={28} />, tags: ["Python"], color: "border-yellow-400" },
  { title: "JavaScript", icon: <FaJs size={28} />, tags: ["JavaScript"], color: "border-cyan-400" },
  { title: "React.js", icon: <FaReact size={28} />, tags: ["React", "Frontend"], color: "border-blue-400" },
  { title: "HTML", icon: <FaDatabase size={28} />, tags: ["Structure"], color: "border-pink-400" },
];

const learningSkills = [
  { title: "Java", icon: <FaJava size={28} />, tags: ["Java"], color: "border-purple-400" },
  { title: "AI & ML", icon: null, tags: ["Linear Regression", "Classification"], color: "border-green-400" },
  { title: "DS & Algo", icon: null, tags: ["DSA", "Hashing"], color: "border-indigo-400" },
  { title: "TypeScript", icon: null, tags: ["TypeScript"], color: "border-cyan-300" },
];

const Skills = () => {
  const renderCards = (skillsArray) => (
    skillsArray.map((skill, index) => (
      <motion.div
        key={index}
        className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-4 ${skill.color} hover:scale-110 hover:rotate-1 hover:shadow-neon transition-transform cursor-pointer flex flex-col items-center`}
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {skill.icon && <div className="mb-4 text-white">{skill.icon}</div>}
        <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {skill.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    ))
  );

  return (
    <section id="skills" className="relative py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800 overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-wide"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills & Learning
      </motion.h2>

      {/* Core Skills */}
      <h3 className="text-2xl font-semibold text-white mb-6 text-center">Core Skills</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {renderCards(coreSkills)}
      </div>

      {/* Learning Skills */}
      <h3 className="text-2xl font-semibold text-white mb-6 text-center">Learning Skills</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {renderCards(learningSkills)}
      </div>
    </section>
  );
};

export default Skills;
