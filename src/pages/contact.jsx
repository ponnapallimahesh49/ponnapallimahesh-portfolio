import { Navbar } from "../components/navbar";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // ✅ success/error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0gpkvuw", // ✅ replace with your EmailJS Service ID
        "template_nspoxrb", // ✅ replace with your Template ID
        formRef.current,
        "K2XOH1oPCYiA7NkKY" // ✅ replace with your Public Key
      )
      .then(
        () => {
          setStatus("success");
          alert("✅ Message sent successfully!"); // ✅ Alert after submission
          formRef.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        () => {
          setStatus("error");
          alert("❌ Failed to send message. Try again later."); // ✅ Error alert
          setTimeout(() => setStatus(""), 4000);
        }
      );
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white relative">
      <Navbar />

      <section className="px-6 md:px-20 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mt-20 font-display font-bold text-teal-400">
            📬 Contact Me
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl font-display mx-auto text-lg text-center">
            Looking for enthusiastic talent? 👨‍💻 I’m a fresher passionate about
            building modern web applications with{" "}
            <span className="text-teal-400 font-semibold">
              React, Node.js, and MongoDB
            </span>
            . I’m open to{" "}
            <span className="text-teal-400 font-semibold">
              internships, full-time roles, or freelance projects
            </span>
            . If you’re hiring or have a project idea, let’s connect — I’d love
            to contribute and grow with your team 🚀
          </p>

          
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold font-test2 text-teal-400 mb-4">
              🤝 Let’s Connect
            </h2>
            <p className="text-gray-300 font-display leading-relaxed">
              I’m open to new opportunities and collaborations. Feel free to
              reach out through any of the platforms below:
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-teal-400 text-xl" />
                <a
                  href="mailto:ponnapallimahesh49@gmail.com"
                  className="hover:text-teal-400 transition"
                >
                  ponnapallimahesh49@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <FaMapMarkerAlt className="text-teal-400 text-xl" />
                <p>Guntur, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/ponnapallimahesh49"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-teal-400 transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/ponnapalli-mahesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-teal-400 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Hire Me under Social Links */}
            <div className="mt-6">
              <a
                href="mailto:ponnapallimahesh49@gmail.com"
                className="inline-block px-5 py-2 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-400 transition duration-300"
              >
                💼 Hire Me
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 border border-teal-500 rounded-2xl p-8 shadow-lg hover:shadow-teal-500/30 transition"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-6 text-center">
              📩 Send a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-500 text-slate-900 font-semibold rounded-lg hover:bg-teal-400 transition duration-300"
              >
                🚀 Send Message
              </button>

              {/* Success/Error Message */}
              {status === "success" && (
                <p className="text-green-400 text-center mt-4">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center mt-4">
                  ❌ Failed to send message. Try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Floating Hire Me Button */}
      <a
        href="mailto:ponnapallimahesh49@gmail.com"
        className="fixed bottom-6 right-6 bg-teal-500 text-slate-900 font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-teal-400 transition duration-300"
      >
        💼 Hire Me
      </a>
    </div>
  );
}
