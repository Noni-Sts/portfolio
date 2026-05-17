import "../styles/Home.css";

export default function Home() {
  return (
    <>
      {/* MAIN HERO / STREAM CONTENT */}
      <div className="hero">
        {/* Top stream status row */}
        <div className="hero__hud">
          <span className="hero__pill">
            <span className="hero__dot" />
            ONLINE
          </span>

          <span className="hero__tag">Frontend Dev • Career Changer</span>
        </div>

        {/* Main heading */}
        <h1 className="hero__title">Hey, I’m Noni.</h1>

        {/* Intro text */}
        <p className="hero__text">
          I learn by making fun projects — clean UI, thoughtful interactions,
          and a bit of personality.
        </p>

        {/* CTA buttons */}
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary">
            View Projects
          </button>

          <button className="hero__btn hero__btn--ghost">Contact</button>
        </div>
      </div>
    </>
  );
}
