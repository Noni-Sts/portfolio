import "../styles/StreamLayout.css";
import StreamDescription from "../sections/StreamDescription";
import Chat from "../sections/Chat";
import wallpaper from "../assets/images/wallpaper.jpg";

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
                <div
                  className="desktop-wallpaper"
                  style={{
                    backgroundImage: `url(${wallpaper})`,
                  }}
                />
                {/* Fake terminal/code window */}
                <div className="code-window">
                  {/* Top bar */}
                  <div className="code-window__topbar">
                    <span />
                    <span />
                    <span />
                  </div>

                  {/* Fake code content */}
                  <div className="code-window__body">
                    <p>
                      <span className="code-pink">const</span> dev = {"{"}
                    </p>

                    <p className="code-indent">
                      name: <span className="code-yellow">"Noni"</span>,
                    </p>

                    <p className="code-indent">
                      role:{" "}
                      <span className="code-blue">"Frontend Developer"</span>,
                    </p>

                    <p className="code-indent">
                      background: [
                      <span className="code-yellow">"bootcamp grad"</span>,
                      <span className="code-yellow">"part self-taught"</span>
                      ],
                    </p>

                    <p className="code-indent">
                      poweredBy: [<span className="code-yellow">"tea"</span>,
                      <span className="code-yellow">"panic"</span>]
                    </p>

                    <p>{"};"}</p>

                    <p>
                      <span className="code-pink">const</span> currentlyBuilding
                      = [
                    </p>

                    <p className="code-indent">
                      <span className="code-yellow">"internet garden"</span>,
                    </p>

                    <p className="code-indent">
                      <span className="code-yellow">"portfolio stream UI"</span>
                      ,
                    </p>

                    <p className="code-indent">
                      <span className="code-yellow">
                        "interactive web experiences"
                      </span>
                    </p>

                    <p>];</p>

                    <p className="typing-line">
                      &gt; booting portfolio experience...
                    </p>

                    <p className="typing-line typing-line--delay">
                      &gt; compiling cozy vibes ✨
                    </p>

                    <p className="typing-line typing-line--delay-2">
                      &gt; loading caffeine reserves ☕
                    </p>
                  </div>
                </div>
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
              <Chat dark={theme} setDark={onToggleTheme} />
            </aside>
          </div>
        </div>
      </section>

      {/* SCROLLABLE BELOW-THE-STREAM CONTENT */}
      <StreamDescription />
    </>
  );
}
