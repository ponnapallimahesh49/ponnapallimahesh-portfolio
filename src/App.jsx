// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/contact.jsx";
import { Projects } from "./pages/projects.jsx";
import { Blogs } from "./pages/blogs.jsx";
import { Resume } from "./pages/resume.jsx";
import { Education } from "./components/education.jsx";
import { Skills } from "./components/skills.jsx";
import { Certificates } from "./components/certificates.jsx";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certifications" element={<Certificates />} />
        </Routes>
    </div>
  );
}

export default App;
