import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

function Home({ peliculas, verDetalle, favoritos, toggleFavorito }) {
  const [promos, setPromos] = useState([]);
  const peliculasDestacadas = peliculas.slice(0, 4);

  useEffect(() => {
    fetch("/data/promos.json")
      .then((res) => res.json())
      .then((data) => setPromos(data))
      .catch((err) => console.error("Error cargando promociones:", err));
  }, []);

  return (
    <div className="container">
      <div style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>CINEPOLIS</h1>
        <p style={{ fontSize: "1.2rem", color: "#b0b0b0" }}>
          Vive la experiencia del cine desde casa
        </p>
      </div>

      <h2>🎬 Películas destacadas</h2>
      <div className="grid">
        {peliculasDestacadas.length > 0 ? peliculasDestacadas.map((p) => (
          <MovieCard
            key={p.id}
            id={p.id}
            title={p.titulo}
            image={p.imagen}
            sinopsis={p.sinopsis}
            onVerDetalle={() => verDetalle(p)}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        )) : <p className="loading">Cargando películas...</p>}
      </div>

      {/* Sección de películas favoritas */}
      {favoritos.length > 0 && (
        <>
          <h2 style={{ marginTop: "60px" }}>⭐ Tus favoritas</h2>
          <div className="grid">
            {peliculas
              .filter(p => favoritos.includes(p.id))
              .map(p => (
                <MovieCard
                  key={p.id}
                  id={p.id}
                  title={p.titulo}
                  image={p.imagen}
                  sinopsis={p.sinopsis}
                  onVerDetalle={() => verDetalle(p)}
                  favoritos={favoritos}
                  toggleFavorito={toggleFavorito}
                />
              ))}
          </div>
        </>
      )}

      <h2 style={{ marginTop: "60px" }}>🔥 Promociones especiales</h2>
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

export default Home;