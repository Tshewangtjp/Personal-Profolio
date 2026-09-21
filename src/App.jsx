import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            P<span className="span2">T</span><span>N</span>
          </div>

          <p>
            Designed & built by Pema Tshewang Norbu.
          </p>

          <p>
            © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;