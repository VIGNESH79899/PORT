import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-8 right-8 bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition text-black dark:text-white z-50"
    >
      {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
