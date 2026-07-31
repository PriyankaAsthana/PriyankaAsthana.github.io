import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Publications from "./pages/Publications";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/about" element={<About />} />
      <Route path="/research" element={<Research />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;