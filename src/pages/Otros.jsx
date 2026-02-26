import { useState, useEffect } from "react";
import OtherCard from "../components/OtherCard";

function Otros() {
  const [activa, setActiva] = useState(null);
  const [opciones, setOpciones] = useState([]);

  useEffect(() => {
    fetch("/data/otros.json")
      .then((res) => res.json())
      .then((data) => setOpciones(data))
      .catch((err) => console.error("Error cargando opciones:", err));
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
              <p style={{ marginTop: "10px", color: "#4caf50" }}>✅ Promoción activada</p>
            )}
          </div>
        )) : <p className="loading">Cargando opciones...</p>}
      </div>
    </div>
  );
}

export default Otros;