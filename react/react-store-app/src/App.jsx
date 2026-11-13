import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { ChiSiamo } from "./pages/ChiSiamo";
import { Prodotti } from "./pages/Prodotti";
import { ListaDesideri } from "./pages/ListaDesideri";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { NotFound } from "./pages/NotFound";

export default function App() {
  // Stato globale per tracciare se l'utente è autenticato
  const [isLogged, setIsLogged] = useState(false);

  // Al montaggio dell'applicazione, verifica se esiste una sessione salvata nel localStorage
  useEffect(() => {
    // Interroga il localStorage del browser alla ricerca della chiave "user",
    // (che memorizza l'oggetto JSON dell'utente precedentemente autenticato)
    const savedUser = localStorage.getItem("user");

    // "Se la chiave esiste ed è valida..."" (restituisce un valore diverso da null/undefined), significa che la sessione era attiva.
    // Di conseguenza, "...aggiorna lo stato globale dell'app impostando isLogged a true", consentendo all'utente di rimanere loggato anche dopo aver aggiornato la pagina (refresh).
    if (savedUser) {
      setIsLogged(true);
    }
  }, []);

  // Gestore per aggiornare lo stato di autenticazione in seguito al login riuscito (se l'utente è loggato o meno)
  // Viene passata come prop al componente di Login e si occupa di aggiornare lo stato booleano
  // globale (isLogged) della componente radice (App), sbloccando le rotte protette e l'interfaccia utente.
  const handleLoginSuccess = (status) => {
    setIsLogged(status);
  };

  // Funzione di gestione della "disconnessione" (handler del logout).
  // Si occupa di azzerare lo stato di autenticazione globale (impostando isLogged a false),
  // di "rimuovere la chiave user" dal localStorage per invalidare definitivamente la sessione attiva <--------
  // e di ripristinare le condizioni iniziali dell'applicazione.
  const handleLogout = () => {
    setIsLogged(false);
    localStorage.removeItem("user");

    Swal.fire({
      title: "Disconnessione effettuata", // <---------
      text: "Ha effettuato il logout con successo.",
      icon: "info",
      confirmButtonText: "OK",
      confirmButtonColor: "#212529",
      background: "#ffffff",
      customClass: { popup: "rounded-4 shadow-sm" },
    });
  };

  return (
    // Configurazione del Router principale per la navigazione client-side
    <BrowserRouter>
      {/* Struttura Flexbox globale per mantenere il footer sempre ancorato in basso (sticky footer) */}
      <div className="d-flex flex-column min-vh-100 bg-light">
        {/* Barra di navigazione superiore con passaggio dello stato di autenticazione e callback di logout */}
        <Navbar isLogged={isLogged} onLogout={handleLogout} />

        {/* Contenitore principale flessibile che ospita le rotte */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />

            {/* Rotta protetta: l'accesso alla Lista dei Desideri è subordinato allo stato 'isLogged' */}
            <Route
              path="/lista-desideri"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <ListaDesideri />
                </ProtectedRoute>
              }
            />

            {/* Rotta di login con passaggio della funzione di callback per il successo */}
            <Route
              path="/login"
              element={<Login onLoginSuccess={handleLoginSuccess} />}
            />
            <Route path="/register" element={<Register />} />

            {/* Rotta di fallback (Catch-all) per la gestione dell'Errore 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer globale dell'applicazione */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
