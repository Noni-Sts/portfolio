import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import StartingSoon from "./pages/StartingSoon.jsx";
import Home from "./pages/Home.jsx";
import StreamLayout from "./pages/StreamLayout.jsx";

export default function App() {
  const [dark, setDark] = useState(false);

  /* DARK MODE BODY CLASS */
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  /* SILLY CONSOLE MESSAGE */
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
    <Routes>
      {/* STARTING SOON PAGE */}
      <Route path="/" element={<StartingSoon />} />

      {/* MAIN STREAM PAGE */}
      <Route
        path="/home"
        element={
          <StreamLayout theme={dark} onToggleTheme={setDark}>
            <Home />
          </StreamLayout>
        }
      />
    </Routes>
  );
}
