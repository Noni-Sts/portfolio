import ChatBubble from "../components/ChatBubble";
import "../styles/Chat.css";

export default function Chat() {
  return (
    <aside className="chat">
      <div className="chat__messages">
        <ChatBubble text="👋 hey, I’m Noni" />
        <ChatBubble text="💻 self-taught dev + bootcamp grad" />
        <ChatBubble text="🌸 portfolio in progress…" />
      </div>

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
