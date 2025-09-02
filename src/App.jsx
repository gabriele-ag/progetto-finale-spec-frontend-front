import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importo il guestlayout con AppHeader
import GuestLayout from "./layouts/GuestLayout"

// importo le pagine
import Home from "./pages/Home"
import ListaIA from "./pages/ListaIA"
import DettagliIA from "./pages/DettagliIA"
import Preferiti from "./pages/Preferiti"
import PaginaConfronto from "./Pages/PaginaConfronto"

// importo i dati globalmente
import { GlobalProvider } from "./contexts/GlobalContext"


function App() {


  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/listaia" element={<ListaIA />} />
            <Route path="/listaia/:id" element={<DettagliIA/>}/>
            <Route path="/preferiti" element={<Preferiti/>}/>
            <Route path="/confronto" element={<PaginaConfronto/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
