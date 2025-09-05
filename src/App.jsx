import { BrowserRouter, Routes, Route } from "react-router-dom"

// Importo il guestlayout con AppHeader
import GuestLayout from "./layouts/GuestLayout"

// importo le pagine
import Home from "./Pages/Home"
import ListaIA from "./Pages/ListaIA"
import DettagliIA from "./Pages/DettagliIA"
import Preferiti from "./Pages/Preferiti"
import NotFound from "./Pages/404NotFound"

// importo il GlobalProvider
import { GlobalProvider } from "./contexts/GlobalContext"


function App() {


  return (
    <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />                    
          <Route element={<GuestLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/listaia" element={<ListaIA />} />
            <Route path="/listaia/:id" element={<DettagliIA/>}/>
            <Route path="/preferiti" element={<Preferiti/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
    </>
  )
}

export default App
