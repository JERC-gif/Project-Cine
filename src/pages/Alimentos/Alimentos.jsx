import { useState, useEffect } from "react";
import { FoodCard } from "../../components";
import { getAlimentos } from "../../services/contentService";

function Alimentos() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    getAlimentos()
      .then((data) => setAlimentos(data))
      .catch(() => setAlimentos([]));
  }, []);

  return (
    <div className="container">
      <h2>Alimentos</h2>

      {alimentos.length > 0 ? (
        alimentos.map((seccion) => (
          <section key={seccion.categoria} className="food-section">
            <h3 className="food-category">{seccion.categoria}</h3>
            <div className="grid">
              {seccion.items.map((item) => (
                <FoodCard
                  key={`${seccion.categoria}-${item.name}`}
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