import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import StartingSoon from "./pages/StartingSoon.jsx";
import Home from "./pages/Home.jsx";
import StreamLayout from "./pages/StreamLayout.jsx";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (import.meta.env.PROD) {
      console.log(
        "%c👀 Looking for loot?",
        "color: hotpink; font-size: 16px; font-weight: bold;",
      );
      console.log(
        "%cThis code drops only after you talk to me 💖",
        "color: plum;",
      );
    }
  }, []);

  return (
    <>
      {/* GLOBAL THEME TOGGLE */}
      <button className="theme-toggle" onClick={() => setDark((d) => !d)}>
        {dark ? "🌙 Dark" : "🌸 Light"}
      </button>

      <Routes>
        <Route path="/" element={<StartingSoon />} />

        <Route
          path="/home"
          element={
            <StreamLayout>
              <Home />
            </StreamLayout>
          }
        />
      </Routes>
    </>
  );
}
