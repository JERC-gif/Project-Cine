import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Alimentos from "./pages/Alimentos";
import Otros from "./pages/Otros";

function App() {
  const [vista, setVista] = useState("home");
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("/data/peliculas.json")
      .then((res) => res.json())
      .then((data) => setPeliculas(data))
      .catch((err) => console.error("Error cargando películas:", err));
  }, []);

  const verDetalle = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setVista("detalle");
  };

  const toggleFavorito = (id) => {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter(favId => favId !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  };

  return (
    <>
      <Header cambiarVista={setVista} />

      {vista === "home" && (
        <Home 
          peliculas={peliculas}
          verDetalle={verDetalle} 
          favoritos={favoritos} 
          toggleFavorito={toggleFavorito}
        />
      )}
      {vista === "cartelera" && (
        <Cartelera 
          peliculas={peliculas}
          verDetalle={verDetalle} 
          favoritos={favoritos} 
          toggleFavorito={toggleFavorito}
        />
      )}
      {vista === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} cambiarVista={setVista} />
      )}
      {vista === "alimentos" && <Alimentos />}
      {vista === "otros" && <Otros />}
    </>
  );
}

export default App;