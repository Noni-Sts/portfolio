import "../styles/StreamLayout.css";
import StreamDescription from "../sections/StreamDescription";

export default function StreamLayout() {
  return (
    <>
      {/* FIXED STREAM AREA */}
      <section className="stream-page">
        <div className="stream-shell">
          <div className="stream-stage">
            <div className="stage-inner">
              <div className="stream-hud">
                <span className="live-dot" />
                <span className="stream-title">Noni • Live Coding</span>
              </div>

              <div className="stream-canvas">
                <p className="stage-label">LIVE STREAM</p>
              </div>

              <div className="webcam-frame">CAM</div>

              <footer className="stream-footer">
                <span>✨ New Follower</span>
                <span>💖 Subscribers</span>
                <span>💸 Donations</span>
              </footer>
            </div>
          </div>

          <aside className="stream-chat">
            <p>Chat coming soon 💬</p>
          </aside>
        </div>
      </section>

      {/* SCROLLABLE BELOW-THE-STREAM CONTENT */}
      <StreamDescription />
    </>
  );
}
