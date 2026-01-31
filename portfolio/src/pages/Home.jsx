import "../styles/Home.css";
import StreamLayout from "../pages/StreamLayout";
import "../styles/StreamLayout.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Hi, I’m Noni </h1>
        <p>
          Frontend developer in progress. Building interactive, thoughtful web
          experiences.
        </p>

        <StreamLayout>
          <h1>Main Stream Area</h1>
          <p>This will become the portfolio screen.</p>
        </StreamLayout>

        <div className="hero__actions">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </section>
    </main>
  );
}
