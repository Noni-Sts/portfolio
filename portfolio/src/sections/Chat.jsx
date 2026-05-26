import ChatBubble from "../components/ChatBubble";
import "../styles/Chat.css";

/*
  Fake livestream chat data
  -----------------------------------
  type:
  - "user" = regular chatter
  - "mod" = centered stream notice
*/

const messages = [
  {
    user: "pixelbun",
    text: "the cozy vibes are immaculate 🌸",
    type: "user",
  },

  {
    user: "uiwizard",
    text: "wait this stream layout is actually so cute",
    type: "user",
  },

  {
    user: "MOD",
    text: "🌸 welcome to the stream chat",
    type: "mod",
  },

  {
    user: "teacoder",
    text: "self-taught + bootcamp grind is REAL",
    type: "user",
  },

  {
    user: "gardenbyte",
    text: "internet garden project sounds adorable 😭",
    type: "user",
  },

  {
    user: "sleepdepriveddev",
    text: "powered by tea and panic is too relatable",
    type: "user",
  },
];

export default function Chat() {
  return (
    <aside className="chat">
      {/* TOP BAR */}
      <div className="chat__top">
        <span className="chat__heading">STREAM CHAT</span>

        {/* 
          Placeholder area for future theme toggle
          You can move your dark mode button here later
        */}
        <div className="chat__status">LIVE</div>
      </div>

      {/* CHAT MESSAGES */}
      <div className="chat__messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="chat__message-wrap"
            style={{
              /*
                Slower staggered appearance
                feels more livestream-y
              */
              animationDelay: `${index * 2.2}s`,
            }}
          >
            <ChatBubble
              user={msg.user}
              text={msg.text}
              type={msg.type}
              index={index}
            />
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
