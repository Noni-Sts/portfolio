import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Hi, I’m Noni </h1>
        <p>
          Frontend developer in progress. Building interactive, thoughtful web
          experiences.
        </p>

        <div className="hero__actions">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </section>
    </main>
  );
}
