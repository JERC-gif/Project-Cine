import peliculas from "../data/peliculas.json";
import MovieCard from "../components/MovieCard";

function Home({ verDetalle, favoritos, toggleFavorito }) {
  const peliculasDestacadas = peliculas.slice(0, 4);

  const promos = [
    {
      id: 1,
      titulo: "2x1 en boletos",
      descripcion: "Todos los martes, lleva a un amigo gratis. Aplica para funciones 2D y 3D.",
      imagen: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600"
    },
    {
      id: 2,
      titulo: "Combo familiar",
      descripcion: "2 refrescos + 1 palomitas gigantes + 2 hot dogs por solo $199.",
      imagen: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600"
    },
    {
      id: 3,
      titulo: "Miércoles de dulces",
      descripcion: "50% de descuento en todos los dulces y golosinas.",
      imagen: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600"
    },
    {
      id: 4,
      titulo: "Preventa exclusiva",
      descripcion: "Compra tus boletos para los estrenos con 3 días de anticipación y llévate un póster.",
      imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600"
    }
  ];

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
        {peliculasDestacadas.map((p) => (
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
        {promos.map((promo) => (
          <div className="card" key={promo.id}>
            <img src={promo.imagen} alt={promo.titulo} />
            <div className="card-content">
              <h3>{promo.titulo}</h3>
              <p>{promo.descripcion}</p>
              <button className="btn-secondary">Ver promoción</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;