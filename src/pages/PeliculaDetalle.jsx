import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PeliculaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pelicula, setPelicula] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [ticket, setTicket] = useState(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    fetch("/data/peliculas.json")
      .then((res) => res.json())
      .then((data) => {
        const p = data.find((pel) => pel.id === Number(id));
        setPelicula(p || null);
      })
      .catch(() => setPelicula(null))
      .finally(() => setLoading(false));
  }, [id]);

  const manejarSubmit = (e) => {
    e.preventDefault();
    setTicket({ nombre, email, cantidad });
  };

  if (loading) return <div className="container"><p className="loading">Cargando...</p></div>;
  if (!pelicula) return <div className="container"><p>Película no encontrada.</p><button onClick={() => navigate("/")}>Volver al inicio</button></div>;

  return (
    <div className="container">
      <h2>{pelicula.titulo}</h2>
      <div className="card detalle-card">
        {!imgError ? (
          <img src={pelicula.imagen} alt={pelicula.titulo} onError={() => setImgError(true)} className="detalle-poster" />
        ) : (
          <div className="detalle-poster detalle-poster-placeholder">🎬 {pelicula.titulo}</div>
        )}
        <div className="card-content detalle-content">
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#e0e0e0" }}>{pelicula.sinopsis}</p>
        </div>
      </div>
      <h3 style={{ marginTop: "40px" }}>Comprar boletos</h3>
      <form onSubmit={manejarSubmit} style={{ background: "none", padding: 0, border: "none", margin: "20px 0" }}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />
        <button type="submit">Comprar</button>
      </form>
      {ticket && (
        <div className="confirmacion">
          <p>✅ Compra confirmada para {ticket.nombre}</p>
          <p>Boletos: {ticket.cantidad}</p>
        </div>
      )}
      <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>Volver</button>
    </div>
  );
}

export default PeliculaDetalle;
