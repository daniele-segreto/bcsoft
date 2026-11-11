import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ChiSiamo() {
    // Stato locale per memorizzare i dati dell'utente attualmente autenticato
    const [currentUser, setCurrentUser] = useState(null);

    // Al montaggio del componente, verifica la presenza di un utente salvato nel localStorage
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setCurrentUser(savedUser);
        }
    }, []);

    return (
        <div className="container my-5 py-4">
            {/* Sezione Introduttiva con intestazione e descrizione istituzionale */}
            <div className="bg-white p-5 rounded-4 shadow-sm text-center mb-5">
                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3 fw-semibold">
                    La Nostra Identità
                </span>
                <h1 className="fw-bold mb-3 display-5">Chi Siamo</h1>
                <p className="text-muted lead mx-auto" style={{ maxWidth: "750px" }}>
                    Benvenuti in <strong className="text-dark">REACTSTORE</strong>, la
                    piattaforma e-commerce progettata per offrire un'esperienza di
                    shopping online fluida, sicura e moderna.
                </p>
            </div>

            {/* Sezione dei Valori Aziendali disposta in una griglia responsive di card */}
            <div className="row g-4 mb-5">
                {/* Valore 01: Qualità */}
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-white">
                        <div className="mb-3 text-warning fs-1">01</div>
                        <h4 className="fw-bold text-dark mb-3">Qualità Selezionata</h4>
                        <p className="text-muted small">
                            Curiamo ogni dettaglio del nostro catalogo per proporre
                            esclusivamente prodotti di alto livello che rispondono agli
                            standard più elevati.
                        </p>
                    </div>
                </div>
                {/* Valore 02: Stile */}
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-white">
                        <div className="mb-3 text-warning fs-1">02</div>
                        <h4 className="fw-bold text-dark mb-3">Stile e Tendenza</h4>
                        <p className="text-muted small">
                            Selezioniamo con cura le collezioni per anticipare le tendenze
                            della moda, offrendo capi versatili e di grande impatto visivo.
                        </p>
                    </div>
                </div>
                {/* Valore 03: Cliente */}
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center bg-white">
                        <div className="mb-3 text-warning fs-1">03</div>
                        <h4 className="fw-bold text-dark mb-3">Attenzione al Cliente</h4>
                        <p className="text-muted small">
                            Mettiamo l'utente al centro di ogni scelta, offrendo aree
                            riservate protette, liste dei desideri personalizzate e
                            un'assistenza dedicata.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sezione Call to Action Dinamica condizionata dallo stato di login dell'utente */}
            <div className="bg-dark text-light p-5 rounded-4 shadow-sm text-center">
                <h3 className="fw-bold mb-3">
                    {currentUser
                        ? "Pronto per il tuo prossimo acquisto?"
                        : "Pronto a scoprire la nostra collezione?"}
                </h3>
                <p className="text-light opacity-75 mb-4">
                    {currentUser
                        ? "Esplora i prodotti del momento oppure organizza i tuoi preferiti nella tua area personale."
                        : "Esplora il catalogo completo o accedi al tuo account per iniziare subito lo shopping."}
                </p>
                {/* Blocco pulsanti d'azione responsive */}
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <Link
                        to="/prodotti"
                        className="btn btn-warning text-dark px-4 py-3 rounded-pill fw-bold shadow-sm"
                    >
                        Vai al Catalogo
                    </Link>
                    {currentUser ? (
                        // Pulsante visibile solo se l'utente è autenticato (reindirizza alla wishlist)
                        <Link
                            to="/lista-desideri"
                            className="btn btn-outline-light px-4 py-3 rounded-pill fw-bold shadow-sm"
                        >
                            La Mia Lista Desideri
                        </Link>
                    ) : (
                        // Pulsante visibile per i visitatori non loggati (reindirizza al login)
                        <Link
                            to="/login"
                            className="btn btn-outline-light px-4 py-3 rounded-pill fw-bold shadow-sm"
                        >
                            Accedi / Registrati
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
