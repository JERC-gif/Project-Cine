import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Preventas() {
  const [preventas, setPreventas] = useState([]);

  useEffect(() => {
    fetch("/data/peliculas.json")
      .then((res) => res.json())
      .then((data) => setPreventas(data.slice(0, 4)))
      .catch(() => setPreventas([]));
  }, []);

  return (
    <div className="container content-page">
      <h2>Preventas</h2>
      <p className="page-intro">Asegura tu lugar para los próximos estrenos. Compra con anticipación y evita filas.</p>
      <div className="grid">
        {preventas.length > 0 ? preventas.map((p) => (
          <div className="card" key={p.id}>
            <img src={p.imagen} alt={p.titulo} style={{ height: "260px", objectFit: "cover" }} />
            <div className="card-content">
              <h3>{p.titulo}</h3>
              <p>Disponible en preventa. Compra ya y elige tu función.</p>
              <Link to={`/pelicula/${p.id}`} className="btn btn-secondary" style={{ display: "inline-block", textDecoration: "none", marginTop: "8px" }}>Ver y comprar</Link>
            </div>
          </div>
        )) : <p className="loading">Cargando preventas...</p>}
      </div>
      <p style={{ marginTop: "1rem" }}>
        <Link to="/cartelera" className="footer-link">Ver cartelera →</Link>
      </p>
    </div>
  );
}

export default Preventas;
