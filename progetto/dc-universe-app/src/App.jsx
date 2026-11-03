import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fumetti from "./pages/Fumetti";
import FilmSerie from "./pages/FilmSerie";
import UserDashboard from "./pages/UserDashboard";
import Registrati from "./components/auth/Registrati";
import Login from "./components/auth/Login";
import Footer from "./components/Footer";

function App() {
  return (
    /* Configurazione principale del router per la gestione delle pagine */
    <Router>
      {/* Contenitore principale dell'applicazione con stili di layout globali */}
      <div className="min-vh-100 bg-white text-dark m-0 p-0 overflow-x-hidden">
        {/* Barra di navigazione fissa in alto (presente in tutte le viste) */}
        <div className="col-md-12">
          <Navbar />
        </div>

        {/* Gestione delle rotte dell'applicazione */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fumetti" element={<Fumetti />} />
          <Route path="/film-serie" element={<FilmSerie />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>

        {/* Piè di pagina istituzionale del portale */}
        <div className="col-md-12">
          <Footer />
        </div>

        {/* Modali globali di autenticazione (Registrazione e Login) */}
        <Registrati />
        <Login />
      </div>
    </Router>
  );
}

export default App;
