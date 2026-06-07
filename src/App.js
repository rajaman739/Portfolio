import ParticlesBg from "./components/ParticlesBg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <ParticlesBg />
      <Navbar />

      <Hero />
      <div className="h-[1px] bg-cyan-400/20" />

      <About />
      <div className="h-[1px] bg-cyan-400/20" />

      <Education />
      <div className="h-[1px] bg-cyan-400/20" />

      <Skills />
      <div className="h-[1px] bg-cyan-400/20" />

      <Experience />
      <div className="h-[1px] bg-cyan-400/20" />

      <Projects />
      <div className="h-[1px] bg-cyan-400/20" />

      <Certifications />
      <div className="h-[1px] bg-cyan-400/20" />

      <Achievements />
      <div className="h-[1px] bg-cyan-400/20" />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;