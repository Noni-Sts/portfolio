import ChatBubble from "../components/ChatBubble";
import "../styles/Chat.css";

/* 
  Fake livestream chat messages
  Makes the page feel alive/community-driven
*/
const messages = [
  {
    user: "pixelbun",
    text: "the cozy vibes are immaculate 🌸",
  },

  {
    user: "uiwizard",
    text: "wait this stream layout is actually so cute",
  },

  {
    user: "teacoder",
    text: "self-taught + bootcamp grind is REAL",
  },

  {
    user: "gardenbyte",
    text: "internet garden project sounds adorable 😭",
  },

  {
    user: "sleepdepriveddev",
    text: "powered by tea and panic is too relatable",
  },
];

export default function Chat() {
  return (
    <aside className="chat">
      {/* CHAT MESSAGE AREA */}
      <div className="chat__messages">
        {messages.map((msg, index) => (
          <div
            className="chat__message-wrap"
            key={msg.user}
            style={{
              /* 
                Each message appears slightly later
                Gives "live chat popping in" effect
              */
              animationDelay: `${index * 1.2}s`,
            }}
          >
            {/* Pass BOTH username + text */}
            <ChatBubble user={msg.user} text={msg.text} />
          </div>
        ))}
      </div>

      {/* FAKE CHAT INPUT */}
      <div className="chat__input">
        {/* Animated typing dots */}
        <span className="typing-dots">
          <i></i>
          <i></i>
          <i></i>
        </span>

        {/* Disabled because it's decorative for now */}
        <input type="text" placeholder="Chat opens soon…" disabled />
      </div>
    </aside>
  );
}
