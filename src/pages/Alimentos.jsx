import { useState, useEffect } from "react";
import FoodCard from "../components/FoodCard";

function Alimentos() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    fetch("/data/alimentos.json")
      .then((res) => res.json())
      .then((data) => setAlimentos(data))
      .catch((err) => console.error("Error cargando alimentos:", err));
  }, []);

  return (
    <div className="container">
      <h2>Alimentos</h2>

      {alimentos.length > 0 ? (
        alimentos.map((seccion) => (
          <section key={seccion.categoria} className="food-section">
            <h3 className="food-category">{seccion.categoria}</h3>
            <div className="grid">
              {seccion.items.map((item, idx) => (
                <FoodCard
                  key={`${seccion.categoria}-${idx}`}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </section>
        ))
      ) : (
        <p className="loading">Cargando alimentos...</p>
      )}
    </div>
  );
}

export default Alimentos;