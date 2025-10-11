import { Navbar } from "./navbar";
import { motion } from "framer-motion";
import { FaJava, FaPython } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiAmazon,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiLeetcode,
} from "react-icons/si";
import Footer from "./Footer";

export function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-500" />,
        },
        { name: "Redux", icon: <SiRedux className="text-indigo-500" /> },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "Core Java", icon: <FaJava className="text-blue-400" /> },
        {
          name: "LeetCode",
          icon: <SiLeetcode className="text-orange-400" />,
          link: "https://leetcode.com/Maheshponnapalli/",
        },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      ],
    },
    {
      category: "Deployment",
      skills: [
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
        { name: "AWS", icon: <SiAmazon className="text-green-400" /> },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Navbar />

      <main className="flex-grow px-4 md:px-12 lg:px-20 py-16">
        <section className="min-h-screen">
          <h2 className="text-5xl font-display font-bold mt-15 text-teal-400 mb-14 text-center">
            🛠️ Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-slate-800 rounded-2xl border-2 border-teal-500 p-6 shadow-lg hover:shadow-teal-500/40 hover:-translate-y-2 transition transform duration-300"
              >
                <h3 className="text-2xl font-semibold text-teal-400 mb-4 text-center">
                  {section.category}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {section.skills.map((skill, idx) =>
                    skill.link ? (
                      <a
                        key={idx}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center bg-slate-700 rounded-lg py-4 hover:bg-slate-600 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-300 group-hover:text-teal-400">
                          {skill.name}
                        </p>
                      </a>
                    ) : (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center bg-slate-700 rounded-lg py-4 hover:bg-slate-600 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <p className="text-sm font-medium text-gray-300 group-hover:text-teal-400">
                          {skill.name}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
