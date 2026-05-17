import ChatBubble from "../components/ChatBubble";
import "../styles/Chat.css";

const messages = [
  "👋 Hey, I’m Noni",
  "💻 self-taught dev + bootcamp grad",
  "🌸 portfolio in progress…",
  "🎮 currently building fun UI ideas",
  "☕ powered by tea and panic",
];

export default function Chat() {
  return (
    <aside className="chat">
      {/* CHAT MESSAGES */}
      <div className="chat__messages">
        {messages.map((msg, index) => (
          <div
            className="chat__message-wrap"
            key={msg}
            style={{
              animationDelay: `${index * 1.2}s`,
            }}
          >
            <ChatBubble text={msg} />
          </div>
        ))}
      </div>

      {/* INPUT BAR */}
      <div className="chat__input">
        <span className="typing-dots">
          <i></i>
          <i></i>
          <i></i>
        </span>

        <input type="text" placeholder="Chat opens soon…" disabled />
      </div>
    </aside>
  );
}
