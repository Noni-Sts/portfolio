import Hero from "../sections/Hero";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main className="site">
      {/* Background glow (same palette as Starting Soon) */}
      <div className="site__bg" aria-hidden="true" />

      {/* Page container */}
      <div className="site__wrap">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
