import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Estrenos() {
  const navigate = useNavigate();
  const [peliculas, setPeliculas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch("/data/peliculas.json")
      .then((res) => res.json())
      .then((data) => setPeliculas(data.slice(0, 6)))
      .catch(() => setPeliculas([]));
  }, []);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  return (
    <div className="container content-page">
      <h2>Estrenos</h2>
      <p className="page-intro">Las películas que acaban de llegar a cartelera.</p>
      <div className="grid">
        {peliculas.length > 0 ? peliculas.map((p) => (
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
        )) : <p className="loading">Cargando estrenos...</p>}
      </div>
      <p style={{ marginTop: "1rem" }}>
        <Link to="/cartelera" className="footer-link">Ver cartelera completa →</Link>
      </p>
    </div>
  );
}

export default Estrenos;
