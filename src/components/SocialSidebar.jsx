// SocialSidebar.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const SocialSidebar = () => {
  return (
    <div className="fixed top-[35%] left-0 flex flex-col space-y-4 z-50">
      <a
        href="https://www.linkedin.com/in/adhi-vignesh-342431289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 p-3 rounded-r-full text-white hover:bg-blue-700 transition"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 p-3 rounded-r-full text-white hover:bg-gray-900 transition"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="mailto:vigneshadhi773@gmail.com"
        className="bg-red-500 p-3 rounded-r-full text-white hover:bg-red-600 transition"
      >
        <FaEnvelope size={20} />
      </a>
      <a
        href="https://x.com/Adhi_Vignesh_07?t=tUhtkRuEfXjgzy5jMy58KQ&s=09"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-400 p-3 rounded-r-full text-white hover:bg-blue-500 transition"
      >
        <FaTwitter size={20} />
      </a>
    </div>
  );
};

export default SocialSidebar;
