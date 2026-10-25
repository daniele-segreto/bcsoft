import React, { useState } from "react";

function Registrati() {
    /* Stato locale per memorizzare i dati inseriti nei campi del form (nome, email, password) */
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    /* Stati dedicati alla gestione dei messaggi di feedback per l'utente e degli errori */
    const [statusMessage, setStatusMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    /* Funzione di gestione per aggiornare dinamicamente lo stato del form al variare dell'input */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /* Funzione asincrona per gestire l'invio dei dati tramite POST al json-server locale */
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene il ricaricamento predefinito della pagina
        setStatusMessage(null);
        setIsError(false);

        try {
            /* Invio della richiesta asincrona all'endpoint degli utenti del database locale */
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            /* Controllo di validità sulla risposta HTTP restituita dal server */
            if (!response.ok) {
                throw new Error("Errore durante la registrazione sul server.");
            }

            /* Gestione in caso di esito positivo dell'operazione */
            setStatusMessage(
                "Registrazione completata con successo! Benvenuto nel portale DC.",
            );
            setFormData({ name: "", email: "", password: "" }); // Reset dei campi del form
        } catch (error) {
            /* Gestione degli errori di rete o mancata risposta del server locale */
            setIsError(true);
            setStatusMessage(
                "Impossibile completare la registrazione. Verifichi che il server locale sia attivo.",
            );
        }
    };

    return (
        /* Struttura principale della modale (popup) basata sulle classi di Bootstrap 5 */
        <div
            className="modal fade"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="registerModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-4 border-0 shadow">
                    {/* Intestazione della modale con pulsante di chiusura */}
                    <div className="modal-header border-bottom-0 pb-0">
                        <h5
                            className="modal-title fw-bold text-uppercase"
                            id="registerModalLabel"
                        >
                            Registrati
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    {/* Corpo centrale della modale contenente il form e i messaggi */}
                    <div className="modal-body p-4 pt-2">
                        {/* Box di notifica condizionale per la visualizzazione dei messaggi di successo o errore */}
                        {statusMessage && (
                            <div
                                className={`alert ${isError ? "alert-danger" : "alert-success"} text-center`}
                                role="alert"
                            >
                                {statusMessage}
                            </div>
                        )}

                        {/* Modulo di registrazione dell'utente */}
                        <form onSubmit={handleSubmit}>
                            {/* Campo di input per il Nome Utente */}
                            <div className="mb-3">
                                <label htmlFor="modalName" className="form-label fw-semibold">
                                    Nome Utente
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="modalName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Campo di input per l'Indirizzo Email */}
                            <div className="mb-3">
                                <label htmlFor="modalEmail" className="form-label fw-semibold">
                                    Indirizzo Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="modalEmail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Campo di input per la Password */}
                            <div className="mb-4">
                                <label
                                    htmlFor="modalPassword"
                                    className="form-label fw-semibold"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="modalPassword"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Pulsante di invio del modulo per la creazione dell'account */}
                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-2 fw-bold rounded-pill text-uppercase"
                            >
                                Crea Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registrati;
