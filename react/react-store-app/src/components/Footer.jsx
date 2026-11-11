import React from "react";
import { Link } from "react-router-dom";

// Componente Footer (Piè di pagina) dell'applicazione e-commerce.
// Fornisce informazioni istituzionali, collegamenti rapidi di navigazione, contatti di assistenza e note di copyright.
export function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-4 mt-auto border-top border-secondary">
            <div className="container">
                {/* Griglia principale del footer suddivisa in tre colonne responsive */}
                <div className="row g-4">
                    {/* Sezione 1: Brand aziendale e breve descrizione della piattaforma */}
                    <div className="col-md-4">
                        <h5 className="fw-bolder text-warning mb-3">
                            REACT<span className="text-white">STORE</span>
                        </h5>
                        <p className="text-light small opacity-75">
                            La piattaforma di e-commerce moderna basata su React e Bootstrap.
                            Prodotti di qualità ed un'esperienza utente semplice e intuitiva.
                        </p>
                    </div>

                    {/* Sezione 2: Collegamenti rapidi di navigazione interna tramite React Router */}
                    <div className="col-md-4">
                        <h6 className="fw-bold text-white mb-3 text-uppercase small tracking-wide">
                            Navigazione
                        </h6>
                        <ul className="list-unstyled small">
                            <li className="mb-2">
                                <Link
                                    to="/"
                                    className="text-decoration-none text-light opacity-75"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/chi-siamo"
                                    className="text-decoration-none text-light opacity-75"
                                >
                                    Chi Siamo
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/prodotti"
                                    className="text-decoration-none text-light opacity-75"
                                >
                                    Catalogo Prodotti
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link
                                    to="/lista-desideri"
                                    className="text-decoration-none text-light opacity-75"
                                >
                                    Lista dei Desideri
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Sezione 3: Informazioni di contatto e supporto clienti */}
                    <div className="col-md-4">
                        <h6 className="fw-bold text-white mb-3 text-uppercase small tracking-wide">
                            Assistenza Clienti
                        </h6>
                        <p className="text-light small opacity-75 mb-1">
                            Email: supporto@reactstore.it
                        </p>
                        <p className="text-light small opacity-75 mb-1">
                            Telefono: +39 091 1234567
                        </p>
                        <p className="text-light small opacity-75">
                            Orari: Lun - Ven (9:00 - 18:00)
                        </p>
                    </div>
                </div>

                {/* Linea divisoria orizzontale di separazione */}
                <hr className="border-secondary my-4" />

                {/* Sezione inferiore: Copyright con anno dinamico e note di sviluppo */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center small text-light opacity-75">
                    {/* Generazione automatica dell'anno corrente tramite l'oggetto Date di JavaScript */}
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} REACTSTORE. Tutti i diritti
                        riservati.
                    </p>
                    <p className="mb-0">Sviluppato con React &amp; Bootstrap</p>
                </div>
            </div>
        </footer>
    );
}
