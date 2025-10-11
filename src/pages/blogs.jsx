import { Navbar } from "../components/navbar"
import Footer from "../components/Footer";
export function Blogs() {
    return (
      <>
        <>
          <Navbar />
          <div className="flex items-center justify-center  min-h-screen text-white bg-slate-900">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-teal-400 mb-4">
                🚧 Coming Soon 🚧
              </h1>
              <p className="text-gray-300">
                Blog section is under construction. Stay tuned for updates!
              </p>
            </div>
          </div>
          <Footer/>
        </>
      </>
    );
}