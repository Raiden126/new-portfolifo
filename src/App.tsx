import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <main className="h-full w-full bg-gradient-to-r from-[#5ae79a] from-10% via-[#42fde7] via-70% to-[#2cddd4] to-90%">
<Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
    </main>
    
  );
}

export default App;
