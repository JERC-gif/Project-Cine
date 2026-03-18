import { useState } from "react";
import { NavLink } from "react-router-dom";

const dropdownItems = [
  { path: "/peliculas/garantia-cinepolis", label: "Garantía Cinépolis" },
  { path: "/peliculas/mas-que-cine", label: "+Que Cine" },
  { path: "/peliculas/festivales", label: "Festivales" },
];

function Navbar() {
  const [peliculasOpen, setPeliculasOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="navbar-logo">
          CINEPOLIS
        </NavLink>
        <nav className="navbar-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`} end>
            Home
          </NavLink>
          <NavLink to="/cartelera" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Cartelera
          </NavLink>

          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setPeliculasOpen(true)}
            onMouseLeave={() => setPeliculasOpen(false)}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${peliculasOpen ? "open" : ""}`}
              onClick={() => setPeliculasOpen((prev) => !prev)}
              aria-expanded={peliculasOpen}
              aria-haspopup="true"
            >
              Películas
              <span className="dropdown-arrow" aria-hidden>▼</span>
            </button>
            <ul className={`nav-dropdown ${peliculasOpen ? "open" : ""}`}>
              {dropdownItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `nav-dropdown-link ${isActive ? "active" : ""}`}
                    onClick={() => setPeliculasOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/alimentos" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Alimentos
          </NavLink>
          <NavLink to="/otros" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Otros
          </NavLink>
          <NavLink to="/promos" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
            Promos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
