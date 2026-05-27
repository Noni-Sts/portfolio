import { useEffect, useState } from "react";
import ChatBubble from "../components/ChatBubble";
import "../styles/Chat.css";

/* FAKE CHAT MESSAGES */
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
    text: "internet garden project sounds adorable 🌷",
  },
  {
    user: "sleepdepriveddev",
    text: "powered by tea and panic is too relatable",
  },
  {
    user: "cssghost",
    text: "the fake IDE window is such a good idea",
  },
  {
    user: "bugfairy",
    text: "React fighting back again? 😭",
  },
];

export default function Chat({ dark, setDark }) {
  /* VISIBLE CHAT STATE */
  const [visibleMessages, setVisibleMessages] = useState(messages.slice(0, 5));

  /* ROTATING CHAT EFFECT */
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        const nextIndex = prev.length % messages.length;

        return [...prev.slice(1), messages[nextIndex]];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="chat">
      {/* CHAT HEADER */}
      <div className="chat__header">
        <h3 className="chat__title">Stream Chat</h3>

        {/* THEME TOGGLE */}
        <button
          className="chat__theme-toggle"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? "🌙" : "🌸"}
        </button>
      </div>

      {/* CHAT MESSAGES */}
      <div className="chat__messages">
        {visibleMessages.map((msg, index) => (
          <div className="chat__message-wrap" key={`${msg.user}-${index}`}>
            <ChatBubble user={msg.user} text={msg.text} />
          </div>
        ))}
      </div>

      {/* FAKE INPUT */}
      <div className="chat__input">
        <span className="typing-dots">
          <i></i>
          <i></i>
          <i></i>
        </span>

        <input type="text" placeholder="Chat opens soon..." disabled />
      </div>
    </aside>
  );
}
