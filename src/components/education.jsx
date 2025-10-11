import { Navbar } from "./navbar";
import { motion } from "framer-motion";

export function Education() {
  const educationData = [
    {
      id: 1,
      degree:
        "Bachelor of Technology - Artificial Intelligence & Machine Learning",
      institution: "Vasireddy Venkatadri Institute of Technology",
      year: "2021 - 2025",
      details: "Focused on Full Stack Web Development, Data Structures and AI.",
      score: "CGPA: 8.21 / 10",
    },
    {
      id: 2,
      degree: "Intermediate - MPC",
      institution: "NRI Junior College",
      year: "2019 - 2021",
      details:
        "Specialized in Mathematics, Physics, and Chemistry with strong academic performance.",
      score: "Percentage: 93.2%",
    },
    {
      id: 3,
      degree: "SSC - 10th",
      institution: "St.Laurel's English Medium School",
      year: "2018 - 2019",
      details:
        "Completed foundational education with excellence and leadership roles.",
      score: "GPA: 8.8 / 10",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-900 text-white px-6 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-5xl font-bold font-display mt-15  text-teal-400 mb-12 text-center">
            🎓 Education
          </h2>

          {/* Timeline */}
          <div className="relative border-l-4 border-teal-500 pl-8 space-y-12">
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Dot */}
                <div className="absolute -left-[22px] bg-teal-500 w-5 h-5 rounded-full border-4 border-slate-900"></div>

                {/* Content Card */}
                <div className="bg-slate-800 p-6 border-2 font-test2 border-teal-400 rounded-2xl shadow-md hover:shadow-teal-500/40 transform hover:-translate-y-2 transition-all duration-300">
                  <h3 className="text-2xl font-for-head font-semibold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-400 font-medium text-sm mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-300 text-sm mb-2">{edu.year}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.details}</p>
                  <p className="text-gray-200 font-medium">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
