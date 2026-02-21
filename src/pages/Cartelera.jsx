import { useState } from "react";
import peliculas from "../data/peliculas.json";
import MovieCard from "../components/MovieCard";

function Cartelera({ verDetalle, favoritos, toggleFavorito }) {
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
        className="search-input"
        style={{ width: "100%", maxWidth: "500px", margin: "0 auto 30px", display: "block" }}
      />

      <div className="grid">
        {filtradas.map((p) => (
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
    </div>
  );
}

export default Cartelera;