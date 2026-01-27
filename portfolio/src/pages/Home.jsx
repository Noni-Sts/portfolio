import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Projects from "../sections/Projects.jsx";
import Contact from "../sections/Contact.jsx";

import Panel from "../components/Panel.jsx";

export default function Home() {
  return (
    <main className="home">
      {/* MAIN STREAM */}
      <section className="stream">
        <header className="stream__header">
          <span className="pill live">● ONLINE</span>
          <span className="stream__role">Frontend Dev • Career Changer</span>
        </header>

        <h1 className="stream__title">
          Hey, I’m <span className="accent">Your Name</span>.
        </h1>

        <p className="stream__intro">
          I build clean, modern web apps with React — obsessed with smooth
          interactions, soft UI, and intentional design.
        </p>

        <div className="stream__actions">
          <a className="btn primary">View Projects</a>
          <a className="btn ghost">Contact</a>
        </div>

        <div className="stream__links">
          <a>Projects</a>
          <a>GitHub</a>
          <a>LinkedIn</a>
        </div>
      </section>

      {/* CHAT */}
      <aside className="chat">
        <div className="chat__header">
          <span>JOIN CHAT</span>
          <span className="status">streamer mode: on</span>
        </div>

        <div className="chat__body">
          <div className="chat__card">
            <h3>About</h3>
            <p>
              Confident frontend developer with a strong eye for UI, layout
              logic, and interaction design. Open to junior / graduate roles.
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
}
