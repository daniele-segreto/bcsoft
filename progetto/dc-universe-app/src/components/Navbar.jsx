import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext"; // <--- Import del Context del carrello

/* --- COMPONENTE BARRA DI NAVIGAZIONE (NAVBAR) --- */
/* Gestisce il menu di navigazione principale, lo stato di autenticazione dell'utente, i modali e il contatore dinamico degli articoli nel carrello */
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  // Estrazione dello stato utente, della funzione di logout e del modale attivo dall'AuthContext
  const { loggedUser, logout, activeModal } = useAuth();
  // Estrazione del conteggio totale degli articoli dal CartContext
  const { totalItems } = useCart();

  // Funzione per gestire la disconnessione e il reindirizzamento alla Home
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Verifiche per determinare se la pagina corrente è attiva (escludendo l'apertura di modali)
  const isDashboardActive =
    location.pathname === "/dashboard" && activeModal === null;
  const isCartActive =
    location.pathname === "/carrello" && activeModal === null;

  return (
    /* Barra di navigazione fissa in alto con sfondo bianco e ombreggiatura leggera */
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100 py-3 fixed-top">
      <div className="container-fluid px-4">
        {/* Logo ufficiale DC Comics che rimanda alla Home Page */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
            alt="DC Logo"
            style={{ height: "40px" }}
          />
        </NavLink>

        {/* Pulsante toggle per la visualizzazione mobile (hamburger menu) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenitore dei collegamenti di navigazione */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {/* Link di navigazione: Home */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  const isCurrentActive = isActive && activeModal === null;
                  return `nav-link fw-semibold px-3 custom-nav-link ${isCurrentActive ? "text-dark fw-bold active-page" : "text-secondary"}`;
                }}
                to="/"
              >
                HOME
              </NavLink>
            </li>

            {/* Link di navigazione: Fumetti */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  const isCurrentActive = isActive && activeModal === null;
                  return `nav-link fw-semibold px-3 custom-nav-link ${isCurrentActive ? "text-dark fw-bold active-page" : "text-secondary"}`;
                }}
                to="/fumetti"
              >
                FUMETTI
              </NavLink>
            </li>

            {/* Link di navigazione: Film e Serie TV */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) => {
                  const isCurrentActive = isActive && activeModal === null;
                  return `nav-link fw-semibold px-3 custom-nav-link ${isCurrentActive ? "text-dark fw-bold active-page" : "text-secondary"}`;
                }}
                to="/film-serie"
              >
                FILM E SERIE TV
              </NavLink>
            </li>

            {/* Verifica condizionale: mostra il menu utente se loggato, altrimenti i pulsanti di accesso/registrazione */}
            {loggedUser ? (
              /* Dropdown del profilo utente autenticato */
              <li className="nav-item dropdown">
                <button
                  className="dropdown-toggle custom-nav-link text-uppercase border-0 bg-transparent d-flex align-items-center gap-1 text-secondary p-0"
                  type="button"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span
                    className={`nav-link fw-semibold px-3 py-2 d-inline-block ${
                      isDashboardActive
                        ? "text-dark fw-bold active-page"
                        : "text-secondary"
                    }`}
                  >
                    {loggedUser.name}
                  </span>
                </button>

                {/* Voci del menu a tendina dell'utente */}
                <ul
                  className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-3 py-2 mt-2"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item fw-semibold py-2"
                      to="/dashboard"
                    >
                      DASHBOARD
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-1" />
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="dropdown-item text-danger fw-bold py-2 d-flex align-items-center gap-2"
                    >
                      ESCI (LOGOUT)
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              /* Pulsanti per utenti non autenticati (Registrati e Login) */
              <>
                {/* Pulsante per aprire il modale di Registrazione */}
                <li className="nav-item">
                  <button
                    type="button"
                    className={`nav-link fw-semibold px-3 custom-nav-link border-0 bg-transparent text-uppercase ${
                      activeModal === "register"
                        ? "text-dark fw-bold active-page"
                        : "text-secondary"
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    REGISTRATI
                  </button>
                </li>

                {/* Pulsante per aprire il modale di Login */}
                <li className="nav-item">
                  <button
                    type="button"
                    className={`nav-link fw-semibold px-3 custom-nav-link border-0 bg-transparent text-uppercase ${
                      activeModal === "login"
                        ? "text-dark fw-bold active-page"
                        : "text-secondary"
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    LOGIN
                  </button>
                </li>
              </>
            )}

            {/* Pulsante Carrello con Badge Dinamico basato sul numero totale degli articoli (`totalItems`) */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <NavLink
                className={`btn rounded-pill px-4 fw-bold d-flex align-items-center gap-2 position-relative ${
                  isCartActive
                    ? "btn-dark text-white shadow"
                    : "btn-primary text-white"
                }`}
                to="/carrello"
              >
                🛒 CARRELLO
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light">
                    {totalItems}
                    <span className="visually-hidden">
                      articoli nel carrello
                    </span>
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
