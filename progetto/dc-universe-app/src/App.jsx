import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fumetti from "./pages/Fumetti";
import FilmSerie from "./pages/FilmSerie";
import UserDashboard from "./pages/UserDashboard";
import Cart from "./pages/Cart";
import ComicDetail from "./pages/ComicDetail"; // <--- Import della nuova pagina di dettaglio del singolo fumetto/prodotto
import NotFound from "./pages/NotFound";
import Registrati from "./components/auth/Registrati";
import Login from "./components/auth/Login";
import Footer from "./components/Footer";

/* --- COMPONENTE PRINCIPALE DELL'APPLICAZIONE --- */
/* Struttura radice che incapsula i provider di stato globale, il layout principale e il sistema di routing */
function App() {
  return (
    /* Provider per la gestione dell'autenticazione degli utenti */
    <AuthProvider>
      {/* Provider per la gestione dello stato globale del carrello e degli acquisti */}
      <CartProvider>
        {/* Provider per la gestione dei preferiti dell'utente */}
        <FavoritesProvider>
          {/* Contenitore principale con reset degli spazi e gestione del layout responsive */}
          <div className="min-vh-100 bg-white text-dark m-0 p-0 overflow-x-hidden">
            {/* Barra di navigazione fissa posizionata in cima al portale */}
            <div className="col-md-12">
              <Navbar />
            </div>

            {/* Configurazione delle rotte principali dell'applicazione */}
            <Routes>
              {/* Rotta per la Home Page */}
              <Route path="/" element={<Home />} />

              {/* Rotta per il catalogo dei fumetti */}
              <Route path="/fumetti" element={<Fumetti />} />

              {/* Rotta dinamica per il dettaglio del singolo fumetto/prodotto tramite ID */}
              <Route path="/fumetti/:id" element={<ComicDetail />} />

              {/* Rotta per la sezione Film e Serie TV */}
              <Route path="/film-serie" element={<FilmSerie />} />

              {/* Rotta per la dashboard personale dell'utente */}
              <Route path="/dashboard" element={<UserDashboard />} />

              {/* Rotta per la gestione del carrello e del checkout */}
              <Route path="/carrello" element={<Cart />} />

              {/* Rotta jolly per la gestione delle pagine non trovate (Errore 404) */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Sezione inferiore del footer istituzionale */}
            <div className="col-md-12">
              <Footer />
            </div>

            {/* Modali globali per la registrazione e l'accesso degli utenti */}
            <Registrati />
            <Login />
          </div>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
