import { Certificates } from "../components/certificates";
import { Education } from "../components/education";
import { SkillHome } from "../components/skillshome";
import { Navbar } from "../components/navbar";
import Footer from "../components/Footer";
import { CertificatesHome } from "../components/certificationsforhome";

export function About() {
  return (
    <div className="bg-slate-900 text-black dark:text-white flex flex-col transition-colors duration-300">
      <Navbar />

      <section className="min-h-screen mt-20 px-4 md:px-12 py-16 w-full">
        <div className="max-w-6xl mx-auto space-y-16">
          <h1 className="text-5xl font-display font-bold text-teal-400 mb-6 text-center">
            About Me
          </h1>

          <div className="flex justify-center items-center">
            <div className="bg-slate-100 border border-teal-500 rounded-2xl p-10 shadow-2xl w-full max-w-5xl transition-colors duration-300">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Hello! I'm{" "}
                <span className="text-teal-400 font-semibold">
                  Ponnapalli Mahesh
                </span>
                , a passionate MERN-Stack developer focused on building
                responsive, scalable, and visually engaging web applications. I
                specialize in creating seamless user interfaces using{" "}
                <span className="text-teal-400">
                  React.js, JavaScript, and Tailwind CSS
                </span>
                , while ensuring performance, accessibility, and maintainable
                code. I also have experience in full-stack development with{" "}
                <span className="text-teal-400">
                  Node.js, Express, and MongoDB
                </span>
                . I enjoy exploring new technologies, working on impactful
                projects, and continuously improving my skills to deliver
                efficient and creative solutions.
              </p>
            </div>
          </div>
          {/* Sections without extra mt-15 */}
          <Education />
          <SkillHome />
          <CertificatesHome />
        </div>
      </section>
    </div>
  );
}
