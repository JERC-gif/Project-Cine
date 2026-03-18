import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Alimentos from "./pages/Alimentos";
import Otros from "./pages/Otros";
import Promos from "./pages/Promos";
import PeliculaDetalle from "./pages/PeliculaDetalle";
import GarantiaCinepolis from "./pages/GarantiaCinepolis";
import MasQueCine from "./pages/MasQueCine";
import Festivales from "./pages/Festivales";
import Estrenos from "./pages/Estrenos";
import Preventas from "./pages/Preventas";
import Terminos from "./pages/Terminos";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";
import Contacto from "./pages/Contacto";
import QuienesSomos from "./pages/QuienesSomos";
import BolsaTrabajo from "./pages/BolsaTrabajo";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetch("/data/peliculas.json")
      .then((res) => res.json())
      .then((data) => setPeliculas(data))
      .catch(() => setPeliculas([]));
  }, []);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home peliculas={peliculas} favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
        <Route path="cartelera" element={<Cartelera peliculas={peliculas} favoritos={favoritos} toggleFavorito={toggleFavorito} />} />
        <Route path="alimentos" element={<Alimentos />} />
        <Route path="otros" element={<Otros />} />
        <Route path="promos" element={<Promos />} />
        <Route path="pelicula/:id" element={<PeliculaDetalle />} />
        <Route path="peliculas/garantia-cinepolis" element={<GarantiaCinepolis />} />
        <Route path="peliculas/mas-que-cine" element={<MasQueCine />} />
        <Route path="peliculas/festivales" element={<Festivales />} />
        <Route path="cartelera/estrenos" element={<Estrenos />} />
        <Route path="cartelera/preventas" element={<Preventas />} />
        <Route path="legales/terminos" element={<Terminos />} />
        <Route path="legales/aviso-privacidad" element={<AvisoPrivacidad />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="corporativo/quienes-somos" element={<QuienesSomos />} />
        <Route path="corporativo/bolsa-trabajo" element={<BolsaTrabajo />} />
      </Route>
    </Routes>
  );
}

export default App;
