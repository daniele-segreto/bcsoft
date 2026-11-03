import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    /* Stato locale per i campi del form di accesso (email e password) */
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    /* Stati dedicati alla gestione dei messaggi di feedback per l'utente e degli errori */
    const [statusMessage, setStatusMessage] = useState(null);
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate(); // Hook per la navigazione programmatica tra le rotte

    /* Listener per pulire completamente lo stato quando la modale viene chiusa */
    useEffect(() => {
        const modalElement = document.getElementById("loginModal");
        if (modalElement) {
            const handleHidden = () => {
                setStatusMessage(null);
                setIsError(false);
                setLoginData({ email: "", password: "" });
            };
            modalElement.addEventListener("hidden.bs.modal", handleHidden);
            return () => {
                modalElement.removeEventListener("hidden.bs.modal", handleHidden);
            };
        }
    }, []);

    /* Funzione di gestione per aggiornare dinamicamente lo stato del form al variare dell'input */
    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    /* Funzione asincrona per gestire l'accesso verificando le credenziali sul json-server */
    const handleLogin = async (e) => {
        e.preventDefault(); // Previene il ricaricamento predefinito della pagina
        setStatusMessage(null);
        setIsError(false);

        try {
            /* Richiesta GET per prelevare tutti gli utenti registrati dal database locale */
            const response = await fetch("http://localhost:5000/users");
            if (!response.ok) {
                throw new Error("Errore di connessione al server locale.");
            }

            const users = await response.json();

            /* Ricerca dell'utente corrispondente per email e password inserite */
            const foundUser = users.find(
                (user) =>
                    user.email === loginData.email &&
                    user.password === loginData.password,
            );

            if (foundUser) {
                /* Salvataggio dell'utente autenticato nel localStorage */
                localStorage.setItem("dc_logged_user", JSON.stringify(foundUser));

                /* Messaggio di successo richiesto */
                setStatusMessage(
                    "Accesso effettuato con successo! Reindirizzamento alla Dashboard...",
                );

                /* Dopo aver fatto visualizzare il messaggio per qualche secondo, chiude la modale e reindirizza */
                setTimeout(() => {
                    /* Attiva il pulsante nascosto per chiudere la modale nativamente via Bootstrap */
                    const closeBtn = document.getElementById("closeLoginModalBtn");
                    if (closeBtn) {
                        closeBtn.click();
                    }

                    /* Rimuove forzatamente eventuali residui di backdrop per liberare la schermata */
                    document
                        .querySelectorAll(".modal-backdrop")
                        .forEach((el) => el.remove());
                    document.body.classList.remove("modal-open");
                    document.body.style.overflow = "";
                    document.body.style.paddingRight = "";

                    setStatusMessage(null);

                    /* Reindirizzamento alla dashboard personale */
                    navigate("/dashboard");
                }, 1500); // 1.5 secondi di attesa per leggere il messaggio
            } else {
                setIsError(true);
                setStatusMessage("Credenziali non valide. Verifichi email e password.");
            }
        } catch (error) {
            /* Gestione degli errori di rete o mancata risposta del server locale */
            setIsError(true);
            setStatusMessage(
                "Impossibile completare l'accesso. Verifichi che il server sia attivo.",
            );
        }
    };

    return (
        /* Struttura principale della modale di login basata sulle classi di Bootstrap 5 */
        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-4 border-0 shadow">
                    {/* Intestazione della modale con pulsante di chiusura */}
                    <div className="modal-header border-bottom-0 pb-0">
                        <h5
                            className="modal-title fw-bold text-uppercase"
                            id="loginModalLabel"
                        >
                            Accedi al Portale
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

                        {/* Modulo di accesso dell'utente */}
                        <form onSubmit={handleLogin}>
                            {/* Campo di input per l'Indirizzo Email */}
                            <div className="mb-3">
                                <label htmlFor="loginEmail" className="form-label fw-semibold">
                                    Indirizzo Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="loginEmail"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Campo di input per la Password */}
                            <div className="mb-4">
                                <label
                                    htmlFor="loginPassword"
                                    className="form-label fw-semibold"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="loginPassword"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Pulsante di invio del modulo per l'accesso */}
                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-2 fw-bold rounded-pill text-uppercase"
                            >
                                Entra nella Dashboard
                            </button>
                        </form>

                        {/* Pulsante nativo nascosto per chiudere la modale via Bootstrap allo scadere del timer */}
                        <button
                            id="closeLoginModalBtn"
                            type="button"
                            className="d-none"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
