import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Componente Navbar principale dell'applicazione e-commerce.
// Riceve le props 'isLogged' (stato di autenticazione) e 'onLogout' (funzione per gestire la disconnessione).
export function Navbar({ isLogged, onLogout }) {
  const navigate = useNavigate();
  // Stato locale per memorizzare l'email dell'utente autenticato da mostrare nella barra di navigazione
  const [userEmail, setUserEmail] = useState("");

  // Hook per aggiornare l'email dell'utente in base allo stato di login memorizzato nel localStorage
  useEffect(() => {
    if (isLogged) {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser && savedUser.email) {
        setUserEmail(savedUser.email);
      }
    } else {
      // Pulisce l'email se l'utente effettua il logout
      setUserEmail("");
    }
  }, [isLogged]);

  // Funzione per chiudere automaticamente il menu mobile al click su un link di navigazione
  const handleCloseMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      // Sfruttiamo l'oggetto Collapse nativo di Bootstrap per chiudere la tendina con animazione fluida
      const bsCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        // Fallback di sicurezza nel caso in cui l'istanza di Bootstrap non sia ancora registrata nel DOM
        navbarCollapse.classList.remove("show");
      }
    }
  };

  // Gestore unificato per il click sul pulsante di autenticazione (Login / Logout)
  const handleAuthClick = () => {
    handleCloseMenu();
    if (isLogged) {
      onLogout(); // Esegue la pulizia dello stato di login
      navigate("/login"); // Reindirizza alla pagina di accesso
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3 px-4 sticky-top">
      <div className="container-fluid">
        {/* Logo aziendale con reindirizzamento alla Home e chiusura automatica del menu mobile */}
        <NavLink
          className="navbar-brand fw-bolder tracking-wide fs-4 text-warning"
          to="/"
          onClick={handleCloseMenu}
        >
          REACT<span className="text-white">STORE</span>
        </NavLink>

        {/* Pulsante toggler per l'apertura/chiusura del menu su dispositivi mobili */}
        <button
          className="navbar-toggler border-0 shadow-none text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenitore dei link di navigazione e delle azioni utente comprimibile su mobile */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {/* Elenco dei collegamenti di navigazione principali */}
          <ul className="navbar-nav align-lg-items-center gap-1 my-3 my-lg-0 me-lg-4 text-start">
            <li className="nav-item">
              <NavLink
                className="nav-link px-3 py-2"
                to="/"
                onClick={handleCloseMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3 py-2"
                to="/chi-siamo"
                onClick={handleCloseMenu}
              >
                Chi Siamo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3 py-2"
                to="/prodotti"
                onClick={handleCloseMenu}
              >
                Prodotti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3 py-2"
                to="/lista-desideri"
                onClick={handleCloseMenu}
              >
                Lista dei Desideri
              </NavLink>
            </li>
            {/* Render condizionale: la voce di registrazione appare solo se l'utente NON è autenticato */}
            {!isLogged && (
              <li className="nav-item">
                <NavLink
                  className="nav-link px-3 py-2"
                  to="/register"
                  onClick={handleCloseMenu}
                >
                  Registrazione
                </NavLink>
              </li>
            )}
          </ul>

          {/* Sezione destra: Benvenuto personalizzato e pulsante di autenticazione dinamico */}
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 pt-2 pt-lg-0">
            {isLogged && userEmail && (
              <span className="text-light small">
                Ciao, <strong className="text-warning">{userEmail}</strong>
              </span>
            )}
            <button
              onClick={handleAuthClick}
              className={`btn px-4 py-2 rounded-pill fw-semibold shadow-sm transition align-self-start align-self-lg-auto ${
                isLogged ? "btn-outline-danger" : "btn-warning text-dark"
              }`}
            >
              {/* Se l'utente è loggato mostra il pulsante Logout, altrimenti Accedi */}
              {isLogged ? "Logout" : "Accedi"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
