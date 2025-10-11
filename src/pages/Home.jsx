import { Navbar } from "../components/navbar";
import "../App.css";
import { Github, Linkedin, Mail, Instagram, Download,FileText } from "lucide-react";
import { About } from "./About";
import Footer from "../components/Footer";
import { ProjectsHome } from "./../components/projectshome";
import SplitText from "./../components/splittext";
import { motion } from "framer-motion";
import {ScrollIndicator} from "./../components/scrollindicator"

export function Home() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white flex flex-col justify-center items-center min-h-screen overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 text-white pt-32">
        {/* LEFT TEXT */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5 md:pr-10 max-w-[800px]"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <SplitText
            text="Hello !!"
            className="text-4xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <motion.h1
            className="text-4xl md:text-6xl font-semibold font-display whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I am <span className="text-teal-400">Ponnapalli Mahesh</span>
          </motion.h1>

          <motion.p
            className="text-lg font-display text-gray-300 mx-auto md:mx-0 max-w-[fit-content]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            I’m an AI-ML graduate with a passion for full-stack development. I
            enjoy building responsive web applications and love integrating AI
            to create smart, user-friendly solutions. I'm always exploring new
            technologies and ways to turn ideas into real-world impact.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex gap-6 justify-center md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delayChildren: 1.2, staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                href: "https://github.com/ponnapallimahesh49",
                icon: <Github size={30} color="#14B8A6" strokeWidth={2.5} />,
                title: "GitHub Profile",
              },
              {
                href: "https://linkedin.com/in/ponnapalli-mahesh",
                icon: <Linkedin size={30} color="#14B8A6" strokeWidth={2.5} />,
                title: "LinkedIn Profile",
              },
              {
                href: "mailto:ponnapallimahesh49@gmail.com",
                icon: <Mail size={30} color="#14B8A6" strokeWidth={2.5} />,
                title: "Send Email",
              },
              {
                href: "https://instagram.com/mahesh_ponnapalliii",
                icon: <Instagram size={32} color="#14B8A6" />,
                title: "Instagram Profile",
              },
              {
                href: "/ponnapallimahesh-resume.pdf", // link to resume
                icon: <FileText size={32} color="#14B8A6" />,
                title: "Resume",
                download: false, // optional for direct download
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                download={item.download || false}
                className="bg-gray-50 p-3 rounded-full border-2 border-teal-400 hover:scale-110 transition-transform duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Rotating border */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-teal-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            ></motion.div>

            {/* Profile image */}
            <img
              src="/mahi3.png"
              alt="Ponnapalli Mahesh"
              className="w-full h-full rounded-full border-4 border-teal-500 shadow-lg object-cover relative z-10"
            />
          </div>
        </motion.div>
        
        <ScrollIndicator/>
      </section>

      <About />
      <ProjectsHome />
      <Footer />
    </div>
  );
}
