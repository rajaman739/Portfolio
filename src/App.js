import Certifications from "./components/Certifications";
import ParticlesBg from "./components/ParticlesBg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <ParticlesBg />
      <Navbar />

      <Hero />
      <div className="h-[1px] bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"></div>

      <About />
      <div className="h-[1px] bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"></div>

      <Skills />
      <div className="h-[1px] bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"></div>

      <Projects />
      <div className="h-[1px] bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"></div>

      <Education />
      <div className="h-[1px] bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"></div>

      <Certifications />
      <div className="h-[1px] bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"></div>

      <Contact />
      <div className="h-[1px] bg-cyan-400/30 shadow-[0_0_10px_#00ffff]"></div>

      <Footer />
    </div>
  );
}

export default App;