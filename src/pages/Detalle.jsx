import { useState } from "react";

function Detalle({ pelicula, cambiarVista }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [ticket, setTicket] = useState(null);
  const [imgError, setImgError] = useState(false);

  const manejarSubmit = (e) => {
    e.preventDefault();
    setTicket({ nombre, email, cantidad });
  };

  if (!pelicula) {
    return <div className="container">No hay película seleccionada</div>;
  }

  return (
    <div className="container">
      <h2>{pelicula.titulo}</h2>

      <div className="card" style={{ flexDirection: "row", alignItems: "flex-start" }}>
        {!imgError ? (
          <img
            src={pelicula.imagen}
            alt={pelicula.titulo}
            onError={() => setImgError(true)}
            style={{ width: "300px", height: "450px", objectFit: "cover", borderRadius: "12px 0 0 12px" }}
          />
        ) : (
          <div style={{
            width: "300px",
            height: "450px",
            background: "linear-gradient(135deg, #3b36d1, #1a1a2e)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.8rem",
            textAlign: "center",
            padding: "20px",
            borderRadius: "12px 0 0 12px"
          }}>
            🎬 {pelicula.titulo}
          </div>
        )}
        <div className="card-content" style={{ flex: 1, padding: "30px" }}>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#e0e0e0" }}>
            {pelicula.sinopsis}
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: "40px" }}>Comprar boletos</h3>

      <form onSubmit={manejarSubmit} style={{ background: "none", padding: 0, border: "none", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          required
        />
        <button type="submit">Comprar</button>
      </form>

      {ticket && (
        <div className="confirmacion">
          <p>✅ Compra confirmada para {ticket.nombre}</p>
          <p>Boletos: {ticket.cantidad}</p>
        </div>
      )}

      <button onClick={() => cambiarVista("home")} style={{ marginTop: "20px" }}>
        Volver
      </button>
    </div>
  );
}

export default Detalle;