import "../styles/StreamLayout.css";
import StreamDescription from "../sections/StreamDescription";
import Chat from "../sections/Chat";

export default function StreamLayout({ children, onToggleTheme, theme }) {
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

          <div className="stream-layout">
            <main className="stream-main">{children}</main>

            <aside className="stream-chat">
              <Chat />
            </aside>
          </div>
        </div>
      </section>

      {/* SCROLLABLE BELOW-THE-STREAM CONTENT */}
      <StreamDescription />
    </>
  );
}
