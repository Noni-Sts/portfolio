export default function ChatBubble({ user, text }) {
  return (
    <div className="chat-bubble">
      {/* Fake username */}
      <span className="chat-bubble__user">{user}</span>

      {/* Actual message */}
      <div className="chat-bubble__text">{text}</div>
    </div>
  );
}
