import { useEffect, useState } from "react";
import ChatBubble from "../components/ChatBubble";
import "../styles/Chat.css";

/* =========================================
   FAKE CHAT DATA
========================================= */

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

/* =========================================
   COMPONENT
========================================= */

export default function Chat({ dark, setDark }) {
  /*
    START WITH ONLY 3 MESSAGES
    instead of dumping everything instantly
  */
  const [visibleMessages, setVisibleMessages] = useState(messages.slice(0, 3));

  /*
    TRACK WHICH MESSAGE COMES NEXT
  */
  const [messageIndex, setMessageIndex] = useState(3);

  /* =========================================
     SLOW CHAT LOOP
  ========================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        /*
          NEXT MESSAGE TO ADD
        */
        const nextMessage = messages[messageIndex % messages.length];

        /*
          ADD NEW MESSAGE TO BOTTOM
        */
        const updated = [...prev, nextMessage];

        /*
          IF TOO MANY MESSAGES:
          remove ONLY the oldest one
        */
        if (updated.length > 5) {
          updated.shift();
        }

        return updated;
      });

      /*
        MOVE TO NEXT MESSAGE
      */
      setMessageIndex((prev) => prev + 1);
    }, 3500);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <aside className="chat">
      {/* =========================================
          CHAT HEADER
      ========================================= */}

      <div className="chat__header">
        <h3 className="chat__title">Stream Chat</h3>

        {/* GLOBAL THEME TOGGLE */}
        <button
          className="theme-toggle theme-toggle--chat"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? "🌙" : "🌸"}
        </button>
      </div>

      {/* =========================================
          CHAT MESSAGES
      ========================================= */}

      <div className="chat__messages">
        {visibleMessages.map((msg, index) => (
          <div className="chat__message-wrap" key={`${msg.user}-${index}`}>
            <ChatBubble user={msg.user} text={msg.text} />
          </div>
        ))}
      </div>

      {/* =========================================
          FAKE INPUT BAR
      ========================================= */}

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
