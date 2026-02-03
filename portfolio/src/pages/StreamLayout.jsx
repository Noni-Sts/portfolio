import "../styles/StreamLayout.css";

export default function StreamLayout({ children }) {
  return (
    <div className="overlay">
      <div className="overlay__bg" />
      <div className="overlay__vignette" />
      <div className="overlay__noise" />
      <div className="overlay__scanlines" />

      <div className="overlay__hearts">
        <span className="heart heart--1" />
        <span className="heart heart--2" />
        <span className="heart heart--3" />
        <span className="heart heart--4" />
        <span className="heart heart--5" />
      </div>

      <main className="frame">
        <span className="frame__corner frame__corner--tl" />
        <span className="frame__corner frame__corner--tr" />
        <span className="frame__corner frame__corner--bl" />
        <span className="frame__corner frame__corner--br" />

        {children}
      </main>
    </div>
  );
}
