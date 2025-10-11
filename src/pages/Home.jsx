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
    <div className="bg-white dark:bg-slate-900 text-black px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 dark:text-white flex flex-col justify-center items-center min-h-screen overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto pt-24 sm:pt-28 md:pt-32 gap-6 md:gap-12 text-white">
        {/* LEFT TEXT */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 md:pr-4 lg:pr-10 max-w-[90%] sm:max-w-[700px] md:max-w-[800px]"
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
            className="text-3xl sm:text-4xl md:text-6xl sm:4xl font-semibold font-display whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I am <span className="text-teal-400">Ponnapalli Mahesh</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-lg font-display text-gray-300 mx-auto md:mx-0 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
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
            className="flex gap-4 sm:gap-5 md:gap-6 justify-center md:justify-start"
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
                href: "/ponnapallimahesh-resume.pdf",
                icon: <FileText size={32} color="#14B8A6" />,
                title: "Resume",
                download: false,
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                download={item.download || false}
                className="p-3 rounded-full border-2 border-teal-400 hover:scale-110 transition-transform duration-300 bg-white dark:bg-gray-800"
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
          className="flex-1 mt-6 sm:mt-8 md:mt-0 flex justify-center md:justify-end relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Rotating border */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-teal-400/50"
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

        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <ProjectsHome />
      </section>

      {/* Footer Section */}
      <section id="footer" className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <Footer />
      </section>
    </div>
  );
}
