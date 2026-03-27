import { memo, useState } from "react";

function MovieCard({ id, title, image, sinopsis, onVerDetalle, favoritos, toggleFavorito }) {
  const [imgError, setImgError] = useState(false);
  const esFavorito = favoritos.includes(id);

  return (
    <div className="card">
      {!imgError ? (
        <img
          src={image}
          alt={title}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="image-placeholder">
          🎬 {title}
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{sinopsis.substring(0, 120)}...</p>

        <div className="card-actions">
          <button onClick={onVerDetalle}>Ver detalle</button>
          <button
            className={esFavorito ? "btn-favorito activo" : "btn-favorito"}
            onClick={() => toggleFavorito(id)}
          >
            {esFavorito ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(MovieCard);