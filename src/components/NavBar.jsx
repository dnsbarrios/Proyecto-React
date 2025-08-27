import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav__content">
        <a href="/" className="nav__logo">
          Exodo Center
        </a>

        <nav className="nav__links">
          <a href="#">Inicio</a>
          <a href="#">Categorías</a>
          <a href="#">Ofertas</a>
          <a href="#">Contacto</a>
        </nav>

        <CartWidget count={0} />
      </div>
    </header>
  );
}
