export default function Panel({ title, children }) {
  return (
    <div className="panel">
      {title ? <div className="panel__title">{title}</div> : null}
      <div className="panel__content">{children}</div>
    </div>
  );
}
