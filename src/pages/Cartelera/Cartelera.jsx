import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard } from "../../components";

function Cartelera({ peliculas = [], favoritos = [], toggleFavorito }) {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  const filtradas = peliculas.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Cartelera</h2>

      <input
        type="text"
        placeholder="Buscar película..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="search-input search-input-wide"
      />

      <div className="grid">
        {filtradas.map((p) => (
          <MovieCard
            key={p.id}
            id={p.id}
            title={p.titulo}
            image={p.imagen}
            sinopsis={p.sinopsis}
            onVerDetalle={() => navigate(`/pelicula/${p.id}`)}
            favoritos={favoritos}
            toggleFavorito={toggleFavorito}
          />
        ))}
      </div>
    </div>
  );
}

export default Cartelera;