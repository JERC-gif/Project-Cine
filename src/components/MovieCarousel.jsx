import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./MovieCarousel.css";

const defaultMovies = [
  {
    id: 1,
    titulo: "El Padrino",
    imagen: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 2,
    titulo: "The Matrix",
    imagen: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 3,
    titulo: "Interestelar",
    imagen: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 4,
    titulo: "Parásitos",
    imagen: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 5,
    titulo: "Titanic",
    imagen: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  },
];

function MovieCarousel({ peliculas = [], promos = [] }) {
  const [foodSlides, setFoodSlides] = useState([]);
  const [activeTab, setActiveTab] = useState("peliculas");

  useEffect(() => {
    fetch("/data/alimentos.json")
      .then((res) => res.json())
      .then((data) => {
        const flattened = data
          .flatMap((seccion) =>
            seccion.items.map((item) => ({
              id: `${seccion.categoria}-${item.name}`,
              titulo: item.name,
              imagen: item.image,
              subtitulo: `${seccion.categoria} · ${item.price}`,
            })),
          )
          .slice(0, 5);
        setFoodSlides(flattened);
      })
      .catch(() => setFoodSlides([]));
  }, []);

  const movies = useMemo(() => {
    if (peliculas?.length > 0) {
      return peliculas.map((p) => ({
        id: p.id,
        titulo: p.titulo,
        imagen: p.imagen,
      }));
    }
    return defaultMovies;
  }, [peliculas]);

  const promoSlides = useMemo(
    () =>
      promos.map((promo) => ({
        id: promo.id,
        titulo: promo.titulo,
        imagen: promo.imagen,
        subtitulo: promo.descripcion,
        link: "/promos",
      })),
    [promos],
  );

  const currentSlides = useMemo(() => {
    if (activeTab === "promos") return promoSlides;
    if (activeTab === "alimentos") return foodSlides;
    return movies;
  }, [activeTab, movies, promoSlides, foodSlides]);

  const headerTitle =
    activeTab === "promos" ? "Promociones" : activeTab === "alimentos" ? "Alimentos" : "Estrenos";

  const resolveLink = (slide) => {
    if (activeTab === "promos") return slide.link || "/promos";
    if (activeTab === "alimentos") return "/alimentos";
    return `/pelicula/${slide.id}`;
  };

  return (
    <section className="movie-carousel-section">
      <div className="carousel-header">
        <h2 className="carousel-title">{headerTitle}</h2>
        <div className="carousel-tabs">
          <button
            type="button"
            className={`carousel-tab ${activeTab === "peliculas" ? "active" : ""}`}
            onClick={() => setActiveTab("peliculas")}
          >
            Películas
          </button>
          <button
            type="button"
            className={`carousel-tab ${activeTab === "promos" ? "active" : ""}`}
            onClick={() => setActiveTab("promos")}
          >
            Promos
          </button>
          <button
            type="button"
            className={`carousel-tab ${activeTab === "alimentos" ? "active" : ""}`}
            onClick={() => setActiveTab("alimentos")}
          >
            Alimentos
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop
        grabCursor
        className="movie-carousel"
      >
        {currentSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to={resolveLink(slide)} className="carousel-slide-link">
              <div
                className="carousel-slide-bg"
                style={{ backgroundImage: `url(${slide.imagen})` }}
              />
              <div className="carousel-slide-overlay" />
              <div className="carousel-slide-content">
                <h3 className="carousel-slide-title">{slide.titulo}</h3>
                {slide.subtitulo && (
                  <p className="carousel-slide-subtitle">{slide.subtitulo}</p>
                )}
                <span className="carousel-slide-cta">
                  {activeTab === "promos"
                    ? "Ver promoción"
                    : activeTab === "alimentos"
                      ? "Ver alimentos"
                      : "Ver detalle"}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MovieCarousel;
