export default function StartingSoon({ onEnter }) {
  return (
    <main className="overlay">
      {/* Background atmosphere layers */}
      <div className="overlay__bg" aria-hidden="true" />
      <div className="overlay__vignette" aria-hidden="true" />
      <div className="overlay__noise" aria-hidden="true" />
      <div className="overlay__scanlines" aria-hidden="true" />

      {/* Floating mini hearts (MUST be outside frame so they sit in the scene) */}
      <div className="overlay__hearts" aria-hidden="true">
        <span className="heart heart--1" />
        <span className="heart heart--2" />
        <span className="heart heart--3" />
        <span className="heart heart--4" />
        <span className="heart heart--5" />
        <span className="heart heart--6" />
        <span className="heart heart--7" />
      </div>

      {/* Frame = stream overlay */}
      <section className="frame" aria-label="Starting soon overlay frame">
        {/* Corner brackets */}
        <span className="frame__corner frame__corner--tl" aria-hidden="true" />
        <span className="frame__corner frame__corner--tr" aria-hidden="true" />
        <span className="frame__corner frame__corner--bl" aria-hidden="true" />
        <span className="frame__corner frame__corner--br" aria-hidden="true" />

        {/* Top HUD row */}
        <header className="hud">
          <div className="hud__left">
            <span className="hud__pill">
              <span className="hud__dot" aria-hidden="true" />
              LIVE SOON
            </span>
            <span className="hud__label">Portfolio Stream</span>
          </div>

          <div className="hud__right">
            <span className="hud__tiny">SYS</span>
            <span className="hud__tiny">READY</span>
            <span className="hud__tiny">v1.0</span>
          </div>
        </header>

        {/* Main content block */}
        <div className="content">
          <h1 className="content__title">Starting Soon</h1>

          <p className="content__subtitle">
            Warming up the site… keep your notepad open for contact details
          </p>

          {/* Timer + status */}
          <div className="status">
            <div className="timer" aria-label="Countdown timer">
              <span className="timer__digits">00:00:00</span>
            </div>

            <div className="status__meta">
              <span className="status__chip">audio: ok</span>
              <span className="status__chip">video: ok</span>
              <span className="status__chip">chat: soon</span>
            </div>
          </div>

          {/* CTA */}
          <button className="cta" type="button" onClick={onEnter}>
            Enter Stream
          </button>

          <p className="hint">
            (This button will scroll to the main site soon 👀)
          </p>
        </div>

        {/* Bottom “overlay footer line” */}
        <footer className="footer">
          <span className="footer__text">Press ENTER to continue</span>
          <span className="footer__divider" aria-hidden="true" />
          <span className="footer__text">Loading modules…</span>
        </footer>
      </section>
    </main>
  );
}
