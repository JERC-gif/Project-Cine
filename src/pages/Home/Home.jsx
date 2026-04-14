import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard, MovieCarousel } from "../../components";
import { getPromos } from "../../services/contentService";
import styles from "./Home.module.css";

function Home({ peliculas, favoritos = [], toggleFavorito }) {
  const navigate = useNavigate();
  const [promos, setPromos] = useState([]);

  const peliculasDestacadas = peliculas?.slice(0, 4) || [];
  const favoritas = (peliculas || []).filter((pelicula) => favoritos.includes(pelicula.id));

  useEffect(() => {
    getPromos()
      .then((data) => setPromos(Array.isArray(data) ? data : []))
      .catch(() => setPromos([]));
  }, []);

  return (
    <>
      <MovieCarousel peliculas={peliculas} promos={promos} />
      <div className="container">
        <div className={styles.heroTitle}>
          <h1 className={styles.heroHeading}>CINEPOLIS</h1>
          <p className={styles.heroSubtitle}>
            Vive la experiencia del cine desde casa
          </p>
        </div>

        <h2>Películas destacadas</h2>
        <div className="grid">
          {peliculasDestacadas.length > 0 ? peliculasDestacadas.map((p) => (
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
          )) : <p className="loading">Cargando películas...</p>}
        </div>

        {favoritos?.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>Tus favoritas</h2>
            <div className="grid">
              {favoritas.map((p) => (
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
          </>
        )}

        <h2 className={styles.sectionTitle}>Promociones especiales</h2>
        <div className="grid">
          {promos.length > 0 ? promos.map((promo) => (
            <div className="card" key={promo.id}>
              <img src={promo.imagen} alt={promo.titulo} />
              <div className="card-content">
                <h3>{promo.titulo}</h3>
                <p>{promo.descripcion}</p>
                <button type="button" className="btn-secondary" onClick={() => navigate("/promos")}>
                  Ver promoción
                </button>
              </div>
            </div>
          )) : <p className="loading">Cargando promociones...</p>}
        </div>
      </div>
    </>
  );
}

export default Home;
