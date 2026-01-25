import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Contact from "../sections/Contact.jsx";

import Panel from "../components/Panel.jsx";

export default function Home() {
  return (
    <main className="home">
      {/* Main stream screen */}
      <section className="home__stream">
        <Panel title="LIVE PORTFOLIO">
          <Hero />
        </Panel>
      </section>

      {/* Webcam box */}
      <aside className="home__webcam">
        <Panel title="WEBCAM">
          <div className="webcam__placeholder">
            <div className="webcam__avatar">NS</div>
            <p className="webcam__text">streamer mode: on</p>
          </div>
        </Panel>
      </aside>

      {/* Chat box */}
      <aside className="home__chat">
        <Panel title="JOIN CHAT">
          <About />
        </Panel>
      </aside>

      {/* Bottom widgets */}
      <footer className="home__widgets">
        <Panel>
          <div className="widgets">
            <a className="widget" href="#projects">
              Projects
            </a>
            <a className="widget" href="#contact">
              Contact
            </a>
            <a
              className="widget"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="widget"
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </Panel>
      </footer>

      {/* Hidden sections for later scrolling (optional) */}
      <div className="home__sections">
        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
