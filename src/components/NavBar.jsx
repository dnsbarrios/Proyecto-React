import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const setActive = ({ isActive }) => (isActive ? "active" : undefined);

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav__content">
        <Link to="/" className="nav__logo">
          EXODO CENTER
        </Link>

        <nav className="nav__links">
          <NavLink to="/" className={setActive}>
            Inicio
          </NavLink>
          <NavLink to="/category/remeras" className={setActive}>
            Remeras
          </NavLink>
          <NavLink to="/category/pantalones" className={setActive}>
            Pantalones
          </NavLink>
          <NavLink to="/category/zapatillas" className={setActive}>
            Zapatillas
          </NavLink>
        </nav>

        <CartWidget count={0} />
      </div>
    </header>
  );
}
