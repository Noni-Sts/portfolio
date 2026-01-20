import { useEffect, useState } from "react";
import StartingSoon from "./components/StartingSoon";
import Home from "./Home";

export default function App() {
  const [view, setView] = useState(getViewFromHash());

  useEffect(() => {
    const onHashChange = () => setView(getViewFromHash());
    window.addEventListener("hashchange", onHashChange);

    // optional default
    if (!window.location.hash) window.location.hash = "starting";

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const goToSite = () => {
    window.location.hash = "site";
  };

  return (
    <>{view === "starting" ? <StartingSoon onEnter={goToSite} /> : <Home />}</>
  );
}

function getViewFromHash() {
  const hash = window.location.hash.replace("#", "").trim();
  return hash === "site" ? "site" : "starting";
}
