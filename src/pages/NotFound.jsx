import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container" style={{ textAlign: "center" }}>
      <h2>404 — Página no encontrada</h2>
      <p className="muted">
        El enlace puede estar mal escrito o el contenido no existe.
      </p>
      <Link className="btn" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}
