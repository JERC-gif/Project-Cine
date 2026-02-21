function Header({ cambiarVista }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-logo">CINEPOLIS</h1>
        <nav className="header-nav">
          <span className="nav-link" onClick={() => cambiarVista("home")}>
            Inicio
          </span>
          <span className="nav-link" onClick={() => cambiarVista("cartelera")}>
            Cartelera
          </span>
          <span className="nav-link" onClick={() => cambiarVista("alimentos")}>
            Alimentos
          </span>
          <span className="nav-link" onClick={() => cambiarVista("otros")}>
            Otros
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Header;