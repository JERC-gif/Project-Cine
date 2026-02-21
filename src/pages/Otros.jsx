import { useState } from "react";
import OtherCard from "../components/OtherCard";

function Otros() {
  const [activa, setActiva] = useState(null);

  const opciones = [
    {
      id: 1,
      title: "Promociones 2x1",
      image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600"
    },
    {
      id: 2,
      title: "Membresía CineClub",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600"
    },
    {
      id: 3,
      title: "Preventas Exclusivas",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600"
    },
    {
      id: 4,
      title: "Formatos especiales",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600"
    }
  ];

  return (
    <div className="container">
      <h2>Otros</h2>

      <div className="grid">
        {opciones.map((item) => (
          <div key={item.id}>
            <OtherCard title={item.title} image={item.image} />
            <button onClick={() => setActiva(item.id)}>
              Activar promoción
            </button>
            {activa === item.id && (
              <p style={{ marginTop: "10px", color: "#4caf50" }}>✅ Promoción activada</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Otros;