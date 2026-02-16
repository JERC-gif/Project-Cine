function Detalle({ cambiarVista }) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Detalle de la película</h2>
      <p>Aquí va la información detallada.</p>

      <button
        onClick={() => cambiarVista("home")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Volver al inicio
      </button>
    </div>
  )
}

export default Detalle
