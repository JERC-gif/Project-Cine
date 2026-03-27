import { useState, useEffect } from "react";
import { OtherCard } from "../../components";
import { getOtros } from "../../services/contentService";

function Otros() {
  const [activa, setActiva] = useState(null);
  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    getOtros()
      .then((data) => setOpciones(data))
      .catch(() => setOpciones([]));
  }, []);

  return (
    <div className="container">
      <h2>Otros</h2>

      <div className="grid">
        {opciones.length > 0 ? opciones.map((item) => (
          <div key={item.id}>
            <OtherCard title={item.title} image={item.image} />
            <button onClick={() => setActiva(item.id)}>
              Activar promoción
            </button>
            {activa === item.id && (
              <p className="promotion-active-message">✅ Promoción activada</p>
            )}
          </div>
        )) : <p className="loading">Cargando opciones...</p>}
      </div>
    </div>
  );
}

export default Otros;