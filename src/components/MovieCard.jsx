import { useState } from "react";

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
        <div className="image-placeholder" style={{
          height: "260px",
          background: "linear-gradient(135deg, #3b36d1, #1a1a2e)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.5rem",
          textAlign: "center",
          padding: "20px"
        }}>
          🎬 {title}
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{sinopsis.substring(0, 120)}...</p>
        
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button onClick={onVerDetalle}>Ver detalle</button>
          <button 
            className={esFavorito ? "btn-favorito activo" : "btn-favorito"}
            onClick={() => toggleFavorito(id)}
            style={{
              background: esFavorito ? "#e50914" : "#3b36d1",
              minWidth: "50px",
              fontSize: "1.2rem"
            }}
          >
            {esFavorito ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;