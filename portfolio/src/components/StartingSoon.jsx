export default function StartingSoon() {
  return (
    <section className="startingSoon">
      <div className="startingSoon__card">
        <div className="startingSoon__top">
          <span className="startingSoon__pill">● LIVE SOON</span>
          <span className="startingSoon__meta">Portfolio Stream</span>
        </div>

        <h1 className="startingSoon__title">Starting Soon</h1>
        <p className="startingSoon__subtitle">
          Warming up the vibes… grab a snack 🍷✨
        </p>

        <div className="startingSoon__timer" aria-label="Countdown timer">
          <span>00</span>:<span>00</span>:<span>00</span>
        </div>

        <button className="startingSoon__button" type="button">
          Enter Stream
        </button>

        <p className="startingSoon__hint">
          (This button will scroll to the main site soon 👀)
        </p>
      </div>
    </section>
  );
}
