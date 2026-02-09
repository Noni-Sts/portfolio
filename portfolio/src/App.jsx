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

  return (
    <>
      {/* GLOBAL THEME TOGGLE */}
      <button
        className="theme-toggle"
        onClick={() => setDark((d) => !d)}
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 9999,
        }}
      >
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
