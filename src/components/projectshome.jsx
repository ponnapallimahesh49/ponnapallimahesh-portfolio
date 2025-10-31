import { Navbar } from "./navbar";
import { motion } from "framer-motion";

export function ProjectsHome() {
  const projectsData = [
    {
      id: 1,
      title: "MyStore",
      description:
        "A Mini Frontend e-commerce project built with React.js, Context API, and TailwindCSS. Implemented reusable components, responsive design, and efficient state management for 100+ product catalog.",
      image: "mystore.png",
      tools: ["React", "Tailwindcss", "API Fetching", "Context API"],
      link: "https://mystore-ten-psi.vercel.app/",
    },
    {
      id: 2,
      title: "Agri-Management",
      description:
        "A Django based web application used for predicting amount of yield, seasonal crop suggestion, Weather Forecasting and a chatbot of FAQ related to Farming.",
      image: "project1.png",
      tools: ["Django", "Machine Learning", "NLP", "API", "AWS"],
      link: "https://github.com/ponnapallimahesh49/agri-management",
    },
    {
      id: 3,
      title: "Pagination",
      description:
        "A MERN-based full-stack app to create customized QR codes with logos, frames, and multiple content types.",
      image: "project2.png",
      tools: ["React", "Tailwindcss", "API Fetching"],
      link: "https://pagination-eight-snowy.vercel.app/",
    },
    {
      id: 4,
      title: "Random Quote Generator",
      description:
        "JavaScript-based quote generator fetching random quotes from an API with responsive design and user-friendly interactions.",
      image: "randomquote.png",
      tools: ["Javascript", "Tailwindcss", "API Fetching"],
      link: "https://randomquotegeneratorusingjs.vercel.app/",
    },
    {
      id: 5,
      title: "Redux Usecase",
      description: "A react-based webpage built using Redux",
      image: "popx.png",
      tools: ["React", "Tailwindcss", "Redux"],
      link: "https://popx-app-assignment.vercel.app/",
    },
    {
      id: 6,
      title: "TMDB Data",
      description:
        "A react-based webpage that fetches TMDB data and you can also download the tmdb data as a csv file, and also regulate the fields you want to fetch, mostly used for people who are working with Movie datasets using NLP, ML, Datascience",
      image: "tmdb.png",
      tools: ["React", "Tailwindcss", "axios"],
      link: "https://dashing-mermaid-6a1dfd.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900  text-white px-4 md:px-12 lg:px-20 ">
      <Navbar />
      <section className="px-6 md:px-20 py-20">
        <h1 className="text-5xl font-display font-bold text-center text-teal-400 mb-14">
          🚀 My Projects
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gray-700 border border-teal-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/40 transition-transform hover:-translate-y-2 duration-300 max-w-sm w-full flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-bold text-teal-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-100 text-sm mb-4 h-20 overflow-hidden">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-gray-300 dark:bg-slate-700 text-teal-500 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-teal-500 text-slate-900 dark:text-black font-semibold py-2 rounded-lg hover:bg-teal-400 transition-colors duration-300"
                >
                  🔗 View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
