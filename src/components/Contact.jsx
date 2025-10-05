import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    const response = await fetch("https://formspree.io/f/xzzjvzkd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("✅ Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
      // Remove message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("⚠️ Something went wrong. Please try again.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-teal-800"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="p-4 rounded-xl border border-white/40 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        ></textarea>
        <button
          type="submit"
          className="bg-teal-400 hover:bg-teal-500 text-white font-semibold p-4 rounded-xl transition-all shadow-lg hover:shadow-2xl"
        >
          Send Message
        </button>

        {/* Temporary status message */}
        {status && (
          <motion.p
            className="text-center text-white font-medium mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>

      <p className="text-center mt-8 text-white/80">
        📧 Email:{" "}
        <a
          href="mailto:vigneshadhi773@gmail.com"
          className="underline hover:text-teal-300"
        >
          vigneshadhi773@gmail.com
        </a>{" "}
        | 🔗{" "}
        <a
          href="https://linkedin.com/in/vigneshadhi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-teal-300"
        >
          LinkedIn
        </a>{" "}
        /{" "}
        <a
          href="https://github.com/vigneshadhi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-teal-300"
        >
          GitHub
        </a>
      </p>
    </section>
  );
};

export default Contact;
