import { useState } from "react";
import StartingSoon from "./pages/StartingSoon";
import Home from "./pages/Home";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className={`site ${entered ? "site--enter" : ""}`}>
      {!entered ? <StartingSoon onEnter={() => setEntered(true)} /> : <Home />}
    </div>
  );
}
