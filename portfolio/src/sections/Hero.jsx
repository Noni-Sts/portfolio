export default function Hero() {
  return (
    <section className="panel hero" id="top">
      <div className="hero__hud">
        <span className="hero__pill">● ONLINE</span>
        <span className="hero__tag">Frontend Dev • Career Changer</span>
      </div>

      <h1 className="hero__title">
        Hey, I’m <span className="hero__accent">Noni</span>.
      </h1>

      <p className="hero__text">
        I build clean, modern web apps with React — and I’m obsessed with making
        things feel smooth, soft, and intentional.
      </p>

      <div className="hero__actions">
        <a className="hero__btn hero__btn--primary" href="#projects">
          View Projects
        </a>

        <a className="hero__btn hero__btn--ghost" href="#contact">
          Contact
        </a>
      </div>
    </section>
  );
}
