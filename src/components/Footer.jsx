import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = ({ bottomText }) => {
  return (
    <footer className="bg-slate-900 text-gray-800 dark:text-gray-300 py-10 border-t border-gray-300 dark:border-slate-700 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center md:items-start gap-10 md:gap-40 text-center md:text-left">
        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src="/mahi3.png"
            alt="Ponnapalli Mahesh"
            className="w-24 md:w-40 h-24 md:h-40 object-cover rounded-full border-4 border-teal-400 shadow-lg mx-auto md:mx-0"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-teal-400 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-teal-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-teal-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-teal-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-teal-400 transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-teal-400 mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-teal-400" />{" "}
              ponnapallimahesh49@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-teal-400" /> Guntur, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-teal-400 mb-4">
            Follow Me
          </h2>
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a
              href="https://github.com/ponnapallimahesh49"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ponnapalli-mahesh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-slate-700 pt-4">
        {bottomText ||
          `© ${new Date().getFullYear()} Ponnapalli Mahesh. All Rights Reserved.`}
      </div>
    </footer>
  );
};

export default Footer;
