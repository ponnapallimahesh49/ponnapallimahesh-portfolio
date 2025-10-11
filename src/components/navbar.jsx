import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = ["Home", "About", "Projects", "Blogs", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%] lg:w-[90%] bg-[#0F172B] rounded-2xl border-teal-800 border transition-all duration-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-display font-bold text-white tracking-wide">
          Ponnapalli <span className="text-teal-400">Mahesh</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-display font-medium items-center">
          {navItems.map((item) =>
            item === "About" ? (
              <li key="About" className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className={`flex items-center gap-1 text-white transition-all duration-300 ${
                    aboutOpen ? "text-teal-400" : "hover:text-teal-400"
                  }`}
                >
                  About
                  <span
                    className={`transform transition-transform duration-300 ${
                      aboutOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {aboutOpen && (
                  <ul className="absolute left-0 mt-2 bg-[#0b1522] rounded-lg shadow-md py-2 w-48 z-50 border border-teal-700 text-white">
                    <li>
                      <NavLink
                        to="/education"
                        className="block px-4 py-2 text-white hover:text-teal-400 transition-colors duration-300"
                        onClick={() => setAboutOpen(false)}
                      >
                        Education
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/skills"
                        className="block px-4 py-2 text-white hover:text-teal-400 transition-colors duration-300"
                        onClick={() => setAboutOpen(false)}
                      >
                        Skills
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/certifications"
                        className="block px-4 py-2 text-white hover:text-teal-400 transition-colors duration-300"
                        onClick={() => setAboutOpen(false)}
                      >
                        Certifications
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `relative group transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-teal-400"
                        : "text-white hover:text-teal-400"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-teal-400 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </>
                  )}
                </NavLink>
              </li>
            )
          )}

          {/* Download Resume Button for Desktop */}
          <li>
            <a
              href="/ponnapallimahesh-resume.pdf"
              download
              className="ml-4 px-4 py-2 bg-white text-teal-700 border-2 border-teal-400 rounded-lg hover:bg-teal-500 hover:text-white transition-colors duration-300 flex items-center gap-2 font-semibold shadow-md"
              title="Download Resume"
            >
              <Download size={20} /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-teal-400 transition-colors duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0b1522] border-t border-teal-700 rounded-b-xl shadow-md py-4 px-6 flex flex-col space-y-3 text-white font-medium"
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
              >
                {item === "About" ? (
                  <div className="flex flex-col w-full">
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="flex justify-between items-center w-full py-2 hover:text-teal-400 transition-colors duration-300"
                    >
                      About ▾
                    </button>
                    <AnimatePresence>
                      {mobileAboutOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 flex flex-col space-y-2 mt-1"
                        >
                          <NavLink
                            to="/education"
                            onClick={() => setOpen(false)}
                            className="block py-1 hover:text-teal-400"
                          >
                            Education
                          </NavLink>
                          <NavLink
                            to="/skills"
                            onClick={() => setOpen(false)}
                            className="block py-1 hover:text-teal-400"
                          >
                            Skills
                          </NavLink>
                          <NavLink
                            to="/certifications"
                            onClick={() => setOpen(false)}
                            className="block py-1 hover:text-teal-400"
                          >
                            Certifications
                          </NavLink>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block py-2 hover:text-teal-400 transition-colors duration-300"
                  >
                    {item}
                  </NavLink>
                )}
              </motion.li>
            ))}

            {/* Download Resume */}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * navItems.length }}
            >
              <a
                href="/ponnapallimahesh-resume.pdf"
                download
                className="mt-2 px-4 py-2 bg-white text-teal-600 rounded-lg hover:text-white hover:bg-teal-500 border-2 border-teal-700 transition-colors duration-300 flex items-center gap-2 font-semibold"
              >
                <Download size={20} /> Resume
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
