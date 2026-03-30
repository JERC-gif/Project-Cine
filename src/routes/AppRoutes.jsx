import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import useCinemaData from "../hooks/useCinemaData";
import Home from "../pages/Home/Home";
import Cartelera from "../pages/Cartelera/Cartelera";
import Alimentos from "../pages/Alimentos/Alimentos";
import Otros from "../pages/Otros/Otros";
import Promos from "../pages/Promos/Promos";
import PeliculaDetalle from "../pages/PeliculaDetalle/PeliculaDetalle";
import GarantiaCinepolis from "../pages/GarantiaCinepolis/GarantiaCinepolis";
import MasQueCine from "../pages/MasQueCine/MasQueCine";
import Festivales from "../pages/Festivales/Festivales";
import Estrenos from "../pages/Estrenos/Estrenos";
import Preventas from "../pages/Preventas/Preventas";
import Terminos from "../pages/Terminos/Terminos";
import AvisoPrivacidad from "../pages/AvisoPrivacidad/AvisoPrivacidad";
import Contacto from "../pages/Contacto/Contacto";
import QuienesSomos from "../pages/QuienesSomos/QuienesSomos";
import BolsaTrabajo from "../pages/BolsaTrabajo/BolsaTrabajo";

function AppRoutes() {
  const { peliculas, favoritos, toggleFavorito } = useCinemaData();

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

export default AppRoutes;
