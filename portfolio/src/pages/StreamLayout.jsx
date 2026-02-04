import StreamStage from "../sections/StreamStage";
import "../styles/StreamLayout.css";

export default function StreamLayout() {
  return (
    <div className="overlay">
      <div className="overlay__bg" />
      <div className="overlay__vignette" />
      <div className="overlay__noise" />
      <div className="overlay__scanlines" />

      <div className="overlay__hearts">
        <span className="heart heart--1" />
        <span className="heart heart--2" />
        <span className="heart heart--3" />
      </div>

      <main className="frame">
        <div className="stream-grid">
          <section className="stream-stage">
            <StreamStage />
          </section>

          <aside className="stream-chat">
            <div className="chat-placeholder">Chat coming soon 💬</div>
          </aside>
        </div>
      </main>
    </div>
  );
}
