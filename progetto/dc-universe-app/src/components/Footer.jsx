import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        /* Sezione principale del footer con classi Bootstrap e personalizzate */
        <footer className="footer-dc text-center text-white py-5">
            <div className="container d-flex flex-column align-items-center">
                {/* Logo DC circolare */}
                <div className="mb-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg"
                        alt="DC Logo"
                        className="footer-logo"
                    />
                </div>

                {/* Link di navigazione legale e di policy (gestiti tramite React Router) */}
                <div className="footer-links d-flex flex-wrap justify-content-center align-items-center gap-2 mb-3">
                    <Link to="/privacy" className="footer-link">
                        INFORMATIVA SULLA PRIVACY
                    </Link>
                    <span className="footer-divider">|</span>
                    <Link to="/termini" className="footer-link">
                        TERMINI E CONDIZIONI
                    </Link>
                    <span className="footer-divider">|</span>
                    <Link to="/cookie" className="footer-link">
                        IMPOSTAZIONE DEI COOKIE
                    </Link>
                </div>

                {/* Disclaimer ufficiale e note di licenza */}
                <p className="footer-disclaimer mb-4">
                    Gli abbonamenti a DC e MAD sono gestiti su licenza di DC Publications,
                    Inc. e DC Comics da Midtown Comics, che è l'unica responsabile del
                    contenuto del sito e di tutti gli aspetti relativi al tuo acquisto. ™
                    & © DC.
                </p>

                {/* Nota di copyright e attribuzione della docenza/sviluppo */}
                <p className="footer-copyright mb-0">
                    DANIELE SEGRETO, CORSO VIBE CODING CON REACT DEVELOPER (DC SOFT) ©
                    2026 DC. TUTTI I DIRITTI RISERVATI.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
