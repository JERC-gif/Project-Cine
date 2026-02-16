import Button from "./Button"

function MovieCard({ title, image, onVerDetalle }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />

      <div className="movie-content">
        <h3>{title}</h3>
        <Button text="Ver detalle" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

export default MovieCard
