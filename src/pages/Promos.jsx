import { useState, useEffect } from "react";

function Promos() {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    fetch("/data/promos.json")
      .then((res) => res.json())
      .then((data) => setPromos(data))
      .catch(() => setPromos([
        { id: 1, titulo: "Martes 2x1", descripcion: "Disfruta dos boletos al precio de uno todos los martes.", imagen: "https://via.placeholder.com/400x260/1a1a2e/e50914?text=2x1" },
        { id: 2, titulo: "Combo Familiar", descripcion: "Ahorra con nuestro combo de palomitas y refrescos para toda la familia.", imagen: "https://via.placeholder.com/400x260/1a1a2e/3b36d1?text=Combo" },
      ]));
  }, []);

  return (
    <div className="container">
      <h2>Promos</h2>
      <p className="page-intro">Las mejores promociones para que disfrutes el cine al máximo.</p>
      <div className="grid">
        {promos.length > 0 ? promos.map((promo) => (
          <div className="card" key={promo.id}>
            <img src={promo.imagen} alt={promo.titulo} />
            <div className="card-content">
              <h3>{promo.titulo}</h3>
              <p>{promo.descripcion}</p>
              <button className="btn-secondary">Ver promoción</button>
            </div>
          </div>
        )) : <p className="loading">Cargando promociones...</p>}
      </div>
    </div>
  );
}

export default Promos;
