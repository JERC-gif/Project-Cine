function Contacto() {
  return (
    <div className="container content-page">
      <h2>Contacto</h2>
      <p className="page-intro">Estamos para ayudarte. Elige el canal que prefieras.</p>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>Teléfono</h3>
          <p><a href="tel:018008312345">01 800 831 2345</a></p>
          <p className="muted">Lun a Dom 9:00 - 21:00</p>
        </div>
        <div className="contact-card">
          <h3>Email</h3>
          <p><a href="mailto:atencion@cinepolis.com">atencion@cinepolis.com</a></p>
          <p className="muted">Respuesta en menos de 24 h</p>
        </div>
        <div className="contact-card">
          <h3>Redes sociales</h3>
          <p>@Cinepolis en Twitter, Facebook e Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
