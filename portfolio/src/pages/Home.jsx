import StreamLayout from "./StreamLayout";
import "../styles/Home.css";

export default function Home() {
  return (
    <StreamLayout>
      <section className="hero">
        <div className="hero__hud">
          <span className="hero__pill">
            <span className="hero__dot" />
            ONLINE
          </span>
          <span className="hero__tag">Frontend Dev • Career Changer</span>
        </div>

        <h1 className="hero__title">
          Hey, I’m <span className="hero__accent">Noni.</span>
        </h1>

        <p className="hero__text">
          I learn by making fun projects — clean UI, thoughtful interactions,
          and a bit of personality.
        </p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary">
            View Projects
          </button>
          <button className="hero__btn hero__btn--ghost">Contact</button>
        </div>
      </section>
    </StreamLayout>
  );
}
