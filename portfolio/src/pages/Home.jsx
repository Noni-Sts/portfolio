import "../styles/Home.css";
import "../styles/StreamLayout.css";

export default function Home() {
  return (
    <main className="home">
      <section className="stream-main">
        <h1 className="stream-title">Hey, I’m Noni.</h1>

        <p className="stream-subtitle">
          Frontend developer · Career changer · Builder of cool things
        </p>

        <p className="stream-description">
          I learn by making fun projects — clean UI, thoughtful interactions,
          and a bit of personality.
        </p>

        <div className="stream-actions">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Contact</button>
        </div>
      </section>
    </main>
  );
}

{
  /* 
  TODO:
  - Main stream hero (intro + CTA)
  - Projects section (cards or panels)
  - Chat panel (read-only, aesthetic)
*/
}
