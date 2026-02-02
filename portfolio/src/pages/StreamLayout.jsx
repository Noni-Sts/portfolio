import "../styles/StreamLayout.css";
export default function StreamLayout({ children }) {
  return (
    <div className="stream-layout">
      <div className="stream-main">{children}</div>

      <aside className="stream-chat">Chat panel</aside>
    </div>
  );
}
