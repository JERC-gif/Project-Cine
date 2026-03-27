import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import useCinemaData from "../hooks/useCinemaData";

const Home = lazy(() => import("../pages/Home/Home"));
const Cartelera = lazy(() => import("../pages/Cartelera/Cartelera"));
const Alimentos = lazy(() => import("../pages/Alimentos/Alimentos"));
const Otros = lazy(() => import("../pages/Otros/Otros"));
const Promos = lazy(() => import("../pages/Promos/Promos"));
const PeliculaDetalle = lazy(() => import("../pages/PeliculaDetalle/PeliculaDetalle"));
const GarantiaCinepolis = lazy(() => import("../pages/GarantiaCinepolis/GarantiaCinepolis"));
const MasQueCine = lazy(() => import("../pages/MasQueCine/MasQueCine"));
const Festivales = lazy(() => import("../pages/Festivales/Festivales"));
const Estrenos = lazy(() => import("../pages/Estrenos/Estrenos"));
const Preventas = lazy(() => import("../pages/Preventas/Preventas"));
const Terminos = lazy(() => import("../pages/Terminos/Terminos"));
const AvisoPrivacidad = lazy(() => import("../pages/AvisoPrivacidad/AvisoPrivacidad"));
const Contacto = lazy(() => import("../pages/Contacto/Contacto"));
const QuienesSomos = lazy(() => import("../pages/QuienesSomos/QuienesSomos"));
const BolsaTrabajo = lazy(() => import("../pages/BolsaTrabajo/BolsaTrabajo"));

function RouteFallback() {
  return (
    <div className="container">
      <p className="loading">Cargando vista...</p>
    </div>
  );
}

function AppRoutes() {
  const { peliculas, favoritos, toggleFavorito } = useCinemaData();

  return (
    <Suspense fallback={<RouteFallback />}>
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
    </Suspense>
  );
}

export default AppRoutes;
