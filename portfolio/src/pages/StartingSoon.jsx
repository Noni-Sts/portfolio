import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/StartingSoon.css";

export default function StartingSoon() {
  const navigate = useNavigate();

  return (
    <motion.main
      className="overlay"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45 }}
    >
      {/* Background atmosphere layers */}
      <div className="overlay__bg" aria-hidden="true" />
      <div className="overlay__vignette" aria-hidden="true" />
      <div className="overlay__noise" aria-hidden="true" />
      <div className="overlay__scanlines" aria-hidden="true" />

      {/* Floating mini hearts */}
      <div className="overlay__hearts" aria-hidden="true">
        <span className="heart heart--1" />
        <span className="heart heart--2" />
        <span className="heart heart--3" />
        <span className="heart heart--4" />
        <span className="heart heart--5" />
        <span className="heart heart--6" />
        <span className="heart heart--7" />
      </div>

      {/* Frame */}
      <section className="frame">
        <header className="hud">
          <div className="hud__left">
            <span className="hud__pill">
              <span className="hud__dot" />
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

        <div className="content">
          <h1 className="content__title">Starting Soon</h1>

          <p className="content__subtitle">
            Warming up the site… keep your notepad open for contact details
          </p>

          <div className="status">
            <div className="timer">
              <span className="timer__digits">00:00:00</span>
            </div>

            <div className="status__meta">
              <span className="status__chip">audio: ok</span>
              <span className="status__chip">video: ok</span>
              <span className="status__chip">chat: soon</span>
            </div>
          </div>

          <button
            className="cta"
            type="button"
            onClick={() => navigate("/home")}
          >
            Enter Stream
          </button>

          <p className="hint">
            (This button will scroll to the main site soon 👀)
          </p>
        </div>
      </section>
    </motion.main>
  );
}
