import MovieCard from "../components/MovieCard"

function Home({ cambiarVista }) {
  return (
    <div className="container">
      <h2>Cartelera</h2>

      <div className="grid">

        <MovieCard
          title="El Padrino"
          image="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Pulp Fiction"
          image="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzMjMjEstZGU2NzYxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Interestelar"
          image="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
          title="Parásitos"
          image="https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"
          onVerDetalle={() => cambiarVista("detalle")}
        />

      </div>
    </div>
  )
}

export default Home
