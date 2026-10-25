import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
                        {/* Link alla Home */}
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-semibold px-3 custom-nav-link ${isActive ? "text-dark fw-bold active-page" : "text-secondary"}`
                                }
                                to="/"
                            >
                                HOME
                            </NavLink>
                        </li>

                        {/* Link alla sezione Fumetti */}
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-semibold px-3 custom-nav-link ${isActive ? "text-dark fw-bold active-page" : "text-secondary"}`
                                }
                                to="/fumetti"
                            >
                                FUMETTI
                            </NavLink>
                        </li>

                        {/* Link alla sezione Film e Serie TV */}
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-semibold px-3 custom-nav-link ${isActive ? "text-dark fw-bold active-page" : "text-secondary"}`
                                }
                                to="/film-serie"
                            >
                                FILM E SERIE TV
                            </NavLink>
                        </li>

                        {/* Pulsante trigger per aprire la modale di registrazione */}
                        <li className="nav-item">
                            <button
                                type="button"
                                className="nav-link fw-semibold px-3 custom-nav-link text-secondary border-0 bg-transparent text-uppercase"
                                data-bs-toggle="modal"
                                data-bs-target="#registerModal"
                            >
                                REGISTRATI
                            </button>
                        </li>

                        {/* Link alla pagina di Login */}
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-link fw-semibold px-3 custom-nav-link ${isActive ? "text-dark fw-bold active-page" : "text-secondary"}`
                                }
                                to="/login"
                            >
                                LOGIN
                            </NavLink>
                        </li>

                        {/* Pulsante evidenziato per il Carrello */}
                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <NavLink
                                className="btn btn-primary rounded-pill px-4 text-white fw-bold d-flex align-items-center gap-2"
                                to="/carrello"
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
