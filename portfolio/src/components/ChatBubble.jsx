export default function ChatBubble({ user, text }) {
  return (
    <div className="chat-bubble">
      <span className="chat-bubble__user">{user}</span>

      <p className="chat-bubble__text">{text}</p>
    </div>
  );
}
