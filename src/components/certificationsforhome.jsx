import { Navbar } from "./navbar";
import { motion } from "framer-motion";

export function CertificatesHome() {
  // 1️⃣ JSON DATA – Easily add new certificates here
  const certificatesData = [
    {
      id: 1,
      title: ".Net (C#) Certification",
      issuedBy: "Wipro Talent Next",
      date: "7 October 2024",
      link: "https://drive.google.com/file/d/1LacCKeYDqrmPlesXSgGCINuG-rU-tj84/view?usp=sharing",
    },
    {
      id: 2,
      title: "JavaScript",
      issuedBy: "GeeksforGeeks",
      date: "July 2025",
      link: "https://media.geeksforgeeks.org/courses/certificates/30f161d6a176af2d505a8c2f12143f4b.pdf",
    },
    {
      id: 3,
      title: "Python",
      issuedBy: "Hackerrank",
      date: "September 2024",
      link: "https://drive.google.com/file/d/13roeCBm7sRVYqXg6hyhS0CgsUCCPqAUG/view?usp=sharing",
    },
    {
      id: 4,
      title: "Python Essentials 1",
      issuedBy: "Cisco",
      date: "May 2025",
      link: "https://drive.google.com/file/d/10bsuYsJeoA5deDOGgbF3ZB6fW4wphl27/view?usp=sharing",
    },
    {
      id: 5,
      title: "Python for Data Science",
      issuedBy: "IBM",
      date: "September 2024",
      link: "https://courses.edx.org/certificates/700bae06e70042cfbfc84ab173e7d0bb",
    },
    {
      id: 6,
      title: "AWS Cloud Architecting",
      issuedBy: "AWS",
      date: "March 2024",
      link: "https://drive.google.com/file/d/12NIwBAF1KWssH5ofeNrGul6oEHIsIsUY/view?usp=sharing",
    },
    {
      id: 7,
      title: "Building Responsive Website",
      issuedBy: "NXTWAVE",
      date: "Jan 2025",
      link: "https://drive.google.com/file/d/15Eg563gG92FMV-ZqxtJboSrmgCNd77dr/view?usp=sharing",
    },
    {
      id: 8,
      title: "SQL",
      issuedBy: "NXTWAVE",
      date: "August 2025",
      link: "https://drive.google.com/file/d/1h-jdIysmnxY_oXyOIqYSgY5WaWlzSjCC/view?usp=sharing",
    },
    {
      id: 9,
      title: "NLP",
      issuedBy: "IBM",
      date: "June 2025",
      link: "https://drive.google.com/file/d/1IKtejrcbSS0cYa4yM7ZOJXTMIstp5u1A/view?usp=sharing",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-900  text-white px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-5xl font-bold font-display  text-teal-400 mb-10 text-center">
            📜 Certifications
          </h2>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-2xl p-6 border-2 font-test2 border-teal-400 shadow-lg hover:shadow-teal-500/40 hover:-translate-y-2 transition transform duration-300"
              >
                {/* Certificate Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {cert.title}
                </h3>

                {/* Issued By */}
                <p className="text-gray-400 text-sm mb-1">
                  <span className="font-semibold text-gray-300">
                    Issued By:
                  </span>{" "}
                  {cert.issuedBy}
                </p>

                {/* Date */}
                <p className="text-gray-400 text-sm mb-4">
                  <span className="font-semibold text-gray-300">Date:</span>{" "}
                  {cert.date}
                </p>

                {/* View Certificate Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-600 transition"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
