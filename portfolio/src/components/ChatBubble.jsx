export default function ChatBubble({ user, text, type, index }) {
  /*
    Alternates slight left/right positioning
    so chat feels less rigid
  */

  const offsetClass =
    index % 2 === 0 ? "chat-bubble--left" : "chat-bubble--right";

  /*
    MOD messages use special styling
  */

  if (type === "mod") {
    return (
      <div className="chat-bubble chat-bubble--mod">
        <span className="chat-bubble__mod-text">{text}</span>
      </div>
    );
  }

  return (
    <div className={`chat-bubble ${offsetClass}`}>
      {/* USERNAME */}
      <span className="chat-bubble__user">{user}</span>

      {/* MESSAGE */}
      <div className="chat-bubble__text">{text}</div>
    </div>
  );
}
