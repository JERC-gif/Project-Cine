import { useState } from "react";
import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "Cartelera",
    mainLinks: [
      { path: "/cartelera/estrenos", label: "Estrenos" },
      { path: "/cartelera/preventas", label: "Preventas" },
    ],
  },
  {
    title: "Legales",
    mainLinks: [
      { path: "/legales/terminos", label: "Términos y condiciones" },
      { path: "/legales/aviso-privacidad", label: "Aviso de privacidad" },
    ],
  },
  {
    title: "Contacto",
    mainLinks: [
      { path: "/contacto", label: "Atención al cliente" },
    ],
    extra: (
      <ul className="footer-extra">
        <li><a href="tel:018008312345">01 800 831 2345</a></li>
        <li><a href="mailto:atencion@cinepolis.com">atencion@cinepolis.com</a></li>
      </ul>
    ),
  },
  {
    title: "Corporativo",
    mainLinks: [
      { path: "/corporativo/quienes-somos", label: "Quiénes somos" },
      { path: "/corporativo/bolsa-trabajo", label: "Bolsa de trabajo" },
    ],
  },
];

function Footer() {
  const [openColumn, setOpenColumn] = useState(null);

  return (
    <footer className="footer">
      <div className="footer-inner">
        {footerColumns.map((col, index) => (
          <div
            key={col.title}
            className={`footer-column ${openColumn === index ? "open" : ""}`}
            onMouseEnter={() => setOpenColumn(index)}
            onMouseLeave={() => setOpenColumn(null)}
          >
            <h4 className="footer-column-title">{col.title}</h4>
            <ul className="footer-links">
              {col.mainLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {col.extra}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cinépolis. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
