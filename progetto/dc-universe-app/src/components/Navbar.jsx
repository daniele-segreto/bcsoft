import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [loggedUser, setLoggedUser] = useState(null);

    /* Stato per tracciare quale modale di autenticazione è attualmente aperta */
    const [activeModal, setActiveModal] = useState(null);

    /* Controlla lo stato di autenticazione nel localStorage ad ogni cambio di pagina */
    useEffect(() => {
        const user = localStorage.getItem("dc_logged_user");
        if (user) {
            setLoggedUser(JSON.parse(user));
        } else {
            setLoggedUser(null);
        }
    }, [location]);

    /* Listener per rilevare quando le modali di Registrazione o Login vengono aperte o chiuse */
    useEffect(() => {
        const registerModalEl = document.getElementById("registerModal");
        const loginModalEl = document.getElementById("loginModal");

        const handleRegisterShow = () => setActiveModal("register");
        const handleRegisterHide = () => setActiveModal(null);

        const handleLoginShow = () => setActiveModal("login");
        const handleLoginHide = () => setActiveModal(null);

        if (registerModalEl) {
            registerModalEl.addEventListener("show.bs.modal", handleRegisterShow);
            registerModalEl.addEventListener("hidden.bs.modal", handleRegisterHide);
        }

        if (loginModalEl) {
            loginModalEl.addEventListener("show.bs.modal", handleLoginShow);
            loginModalEl.addEventListener("hidden.bs.modal", handleLoginHide);
        }

        return () => {
            if (registerModalEl) {
                registerModalEl.removeEventListener(
                    "show.bs.modal",
                    handleRegisterShow,
                );
                registerModalEl.removeEventListener(
                    "hidden.bs.modal",
                    handleRegisterHide,
                );
            }
            if (loginModalEl) {
                loginModalEl.removeEventListener("show.bs.modal", handleLoginShow);
                loginModalEl.removeEventListener("hidden.bs.modal", handleLoginHide);
            }
        };
    }, []);

    /* Funzione per gestire la disconnessione (logout) direttamente dalla Navbar */
    const handleLogout = () => {
        localStorage.removeItem("dc_logged_user");
        setLoggedUser(null);
        navigate("/");
    };

    /* Verifica se ci si trova nella dashboard e nessuna modale di autenticazione è aperta */
    const isDashboardActive =
        location.pathname === "/dashboard" && activeModal === null;

    return (
        /* Barra di navigazione principale bloccata in alto tramite la classe fixed-top */
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100 py-3 fixed-top">
            <div className="container-fluid px-4">
                {/* Logo DC brand con reindirizzamento alla Home */}
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
                        alt="DC Logo"
                        style={{ height: "40px" }}
                    />
                </NavLink>

                {/* Pulsante hamburger per la visualizzazione responsive su dispositivi mobili */}
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

                {/* Sezione dei collegamenti del menu collassabile */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {/* Link alla Home (disattiva l'active se c'è una modale aperta) */}
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

                        {/* Link alla sezione Fumetti (disattiva l'active se c'è una modale aperta) */}
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

                        {/* Link alla sezione Film e Serie TV (disattiva l'active se c'è una modale aperta) */}
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

                        {/* Rendering condizionale: Dropdown utente se autenticato, altrimenti Registrati e Login */}
                        {loggedUser ? (
                            /* Menu Dropdown utente visibile quando l'utente è autenticato */
                            <li className="nav-item dropdown">
                                <button
                                    className="dropdown-toggle custom-nav-link text-uppercase border-0 bg-transparent d-flex align-items-center gap-1 text-secondary p-0"
                                    type="button"
                                    id="userDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span
                                        className={`nav-link fw-semibold px-3 py-2 d-inline-block ${isDashboardActive
                                                ? "text-dark fw-bold active-page"
                                                : "text-secondary"
                                            }`}
                                    >
                                        {loggedUser.name}
                                    </span>
                                </button>

                                {/* Contenuto del menu a tendina */}
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
                            <>
                                {/* Pulsante Registrati con stato attivo dinamico */}
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className={`nav-link fw-semibold px-3 custom-nav-link border-0 bg-transparent text-uppercase ${activeModal === "register"
                                                ? "text-dark fw-bold active-page"
                                                : "text-secondary"
                                            }`}
                                        data-bs-toggle="modal"
                                        data-bs-target="#registerModal"
                                    >
                                        REGISTRATI
                                    </button>
                                </li>

                                {/* Pulsante Login con stato attivo dinamico */}
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className={`nav-link fw-semibold px-3 custom-nav-link border-0 bg-transparent text-uppercase ${activeModal === "login"
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

                        {/* Pulsante evidenziato per il Carrello / Dashboard */}
                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <NavLink
                                className="btn btn-primary rounded-pill px-4 text-white fw-bold d-flex align-items-center gap-2"
                                to="/dashboard"
                            >
                                🛒 CARRELLO
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
