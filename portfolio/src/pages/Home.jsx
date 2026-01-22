import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <main className="site">
      <div className="site__bg" aria-hidden="true" />

      <div className="site__wrap">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
