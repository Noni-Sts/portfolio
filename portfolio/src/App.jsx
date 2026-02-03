import { Routes, Route } from "react-router-dom";
import StartingSoon from "./pages/StartingSoon.jsx";
import Home from "./pages/Home.jsx";
import StreamLayout from "./pages/StreamLayout.jsx";

export default function App() {
  return (
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
  );
}
