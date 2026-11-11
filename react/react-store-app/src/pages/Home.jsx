import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
    // Stato locale per memorizzare i dati dell'utente attualmente autenticato
    const [currentUser, setCurrentUser] = useState(null);

    // Al caricamento del componente, recupera le informazioni dell'utente salvate nel localStorage
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
            setCurrentUser(savedUser);
        }
    }, []);

    // Array statico contenente i prodotti in evidenza (stile e-commerce minimalista)
    const featuredProducts = [
        {
            id: 1,
            title: "Classic White Tee",
            price: "29.99",
            image:
                "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Urban Black Cotton",
            price: "34.50",
            image:
                "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Minimal Grey Fit",
            price: "32.00",
            image:
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
        },
    ];

    return (
        <div className="container my-5 py-4">
            {/* Sezione di Benvenuto condizionata dallo stato di autenticazione dell'utente */}
            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm text-center mb-5">
                {currentUser ? (
                    // Vista dedicata all'utente autenticato (Area Riservata)
                    <div>
                        <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3 fw-semibold">
                            Area Riservata
                        </span>
                        <h1 className="fw-bold mb-3 display-6 display-md-5">
                            Benvenuto,{" "}
                            <span className="text-warning">{currentUser.email}</span>!
                        </h1>
                        <p className="text-muted lead mb-4 small fs-md-6">
                            È un piacere riaverla qui. Può esplorare il catalogo prodotti o
                            gestire la Sua Lista dei Desideri personalizzata.
                        </p>
                        {/* Pulsanti di navigazione rapida per l'utente loggato */}
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <Link
                                to="/prodotti"
                                className="btn btn-dark px-4 py-3 rounded-pill fw-bold shadow-sm"
                            >
                                Vai al Catalogo
                            </Link>
                            <Link
                                to="/lista-desideri"
                                className="btn btn-outline-dark px-4 py-3 rounded-pill fw-bold shadow-sm"
                            >
                                La Mia Lista dei Desideri
                            </Link>
                        </div>
                    </div>
                ) : (
                    // Vista per il visitatore non autenticato
                    <div>
                        <h1 className="fw-bold mb-3 display-6 display-md-5">
                            Benvenuto in REACTSTORE
                        </h1>
                        <p className="text-muted lead mb-4 small fs-md-6">
                            Il Suo punto di riferimento per lo shopping online. Acceda o si
                            registri per iniziare a salvare i Suoi prodotti preferiti.
                        </p>
                        {/* Pulsanti responsive: disposti in colonna su mobile, affiancati su schermi medi e superiori */}
                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                            <Link
                                to="/prodotti"
                                className="btn btn-dark px-4 py-3 rounded-pill fw-bold shadow-sm"
                            >
                                Esplora i Prodotti
                            </Link>
                            <Link
                                to="/login"
                                className="btn btn-warning text-dark px-4 py-3 rounded-pill fw-bold shadow-sm"
                            >
                                Accedi al Sistema
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            {/* Intestazione della vetrina dei capi in evidenza */}
            <div className="mb-4 text-center">
                <h3 className="fw-bold text-dark mb-2">I Nostri Capi in Evidenza</h3>
                <p className="text-muted small">
                    Una selezione di stile pensata per Lei
                </p>
            </div>

            {/* Griglia responsive dei prodotti in vetrina generata tramite map */}
            <div className="row g-4">
                {featuredProducts.map((item) => (
                    <div key={item.id} className="col-12 col-md-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white text-center">
                            {/* Contenitore grafico dell'immagine del prodotto */}
                            <div
                                className="bg-light rounded-3 py-4 mb-3 d-flex align-items-center justify-content-center"
                                style={{ height: "240px" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-3"
                                    style={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            {/* Dettagli testuali del prodotto */}
                            <h5 className="fw-bold text-dark">{item.title}</h5>
                            <p className="text-muted fw-semibold mb-3">EUR {item.price}</p>
                            {/* Pulsante di collegamento rapido al catalogo completo */}
                            <Link
                                to="/prodotti"
                                className="btn btn-outline-dark btn-sm rounded-pill py-2 fw-semibold"
                            >
                                Scopri nel Catalogo
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
