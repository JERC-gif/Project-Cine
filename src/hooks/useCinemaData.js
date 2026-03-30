import { useEffect, useState } from "react";
import { getPeliculas } from "../services/contentService";

function useCinemaData() {
  const [peliculas, setPeliculas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    let isMounted = true;

    getPeliculas()
      .then((data) => {
        if (isMounted) {
          setPeliculas(Array.isArray(data) ? data : []);
        }
      })
      .catch(() => {
        if (isMounted) {
          setPeliculas([]);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleFavorito = (id) => {
    setFavoritos((prev) => (prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]));
  };

  return { peliculas, favoritos, toggleFavorito };
}

export default useCinemaData;
