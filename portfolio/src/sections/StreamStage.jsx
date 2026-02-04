export default function StreamStage() {
  return (
    <div className="stage">
      <div className="stage__hud">
        <span className="stage__pill">
          <span className="stage__dot" />
          ONLINE
        </span>
        <span className="stage__tag">Frontend Dev • Career Changer</span>
      </div>

      <h1 className="stage__title">Hey, I’m Noni</h1>

      <p className="stage__text">
        I learn by making fun projects — clean UI, thoughtful interactions, and
        a bit of personality.
      </p>

      <div className="stage__actions">
        <button className="stage__btn stage__btn--primary">
          View Projects
        </button>
        <button className="stage__btn stage__btn--ghost">Contact</button>
      </div>
    </div>
  );
}
