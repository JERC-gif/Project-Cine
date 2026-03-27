import { useState, useEffect } from "react";
import { getPromos } from "../../services/contentService";
import { fallbackPromos } from "../../utils/fallbackData";

function Promos() {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    getPromos()
      .then((data) => setPromos(data))
      .catch(() => setPromos(fallbackPromos));
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
