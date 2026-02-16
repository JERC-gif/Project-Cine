import { useState } from "react"
import Header from "./components/Header"

import Home from "./pages/Home"
import Cartelera from "./pages/Cartelera"
import Detalle from "./pages/Detalle"
import Alimentos from "./pages/Alimentos"
import Otros from "./pages/Otros"

function App() {
  const [vistaActual, setVistaActual] = useState("home")

  return (
    <>
      <Header cambiarVista={setVistaActual} />

      {vistaActual === "home" && <Home cambiarVista={setVistaActual} />}
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual} />}
      {vistaActual === "detalle" && <Detalle cambiarVista={setVistaActual} />}
      {vistaActual === "alimentos" && <Alimentos />}
      {vistaActual === "otros" && <Otros />}
    </>
  )
}

export default App
