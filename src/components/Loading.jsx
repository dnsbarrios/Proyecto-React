export default function Loading({ text = "Cargando..." }) {
  return (
    <div className="loading">
      <span className="loading__spinner" aria-hidden />
      <span>{text}</span>
    </div>
  );
}
