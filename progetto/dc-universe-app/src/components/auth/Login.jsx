import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/* --- COMPONENTE MODALE DI ACCESSO (LOGIN) --- */
/* Gestisce l'interfaccia e la logica per l'autenticazione degli utenti tramite richieste al server locale e chiusura dinamica del modale */
function Login() {
  // Stato locale per memorizzare i dati inseriti nel form di login (email e password)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Stati locali per la gestione dei messaggi di feedback e degli errori
  const [statusMessage, setStatusMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  // Hook di navigazione e funzione di login estratta dall'AuthContext
  const navigate = useNavigate();
  const { login } = useAuth();

  // useEffect per resettare i campi del form e i messaggi quando il modale viene chiuso dall'utente
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

  // Funzione per gestire i cambiamenti nei campi di input del form
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Funzione asincrona per gestire l'invio del form di login e la verifica delle credenziali
  const handleLogin = async (e) => {
    e.preventDefault();
    setStatusMessage(null);
    setIsError(false);

    try {
      // Richiesta al server locale per recuperare la lista degli utenti registrati
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) {
        throw new Error("Errore di connessione al server locale.");
      }

      const users = await response.json();
      // Ricerca dell'utente corrispondente per email e password
      const foundUser = users.find(
        (user) =>
          user.email === loginData.email &&
          user.password === loginData.password,
      );

      if (foundUser) {
        // Se l'utente è valido, esegue il login e mostra un messaggio di successo
        login(foundUser);
        setStatusMessage(
          "Accesso effettuato con successo! Reindirizzamento alla Dashboard...",
        );

        // Timer per chiudere il modale, ripulire il DOM e reindirizzare alla dashboard
        setTimeout(() => {
          const closeBtn = document.getElementById("closeLoginModalBtn");
          if (closeBtn) {
            closeBtn.click();
          }

          // Rimozione forzata dei backdrop e ripristino dello scroll della pagina
          document
            .querySelectorAll(".modal-backdrop")
            .forEach((el) => el.remove());
          document.body.classList.remove("modal-open");
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";

          setStatusMessage(null);
          navigate("/dashboard");
        }, 1500);
      } else {
        // Se le credenziali non sono corrette, attiva lo stato di errore
        setIsError(true);
        setStatusMessage("Credenziali non valide. Verifichi email e password.");
      }
    } catch (error) {
      // Gestione degli errori di connessione o di server non attivo
      setIsError(true);
      setStatusMessage(
        "Impossibile completare l'accesso. Verifichi che il server sia attivo.",
      );
    }
  };

  return (
    /* Struttura del modale Bootstrap (Login Modal) */
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 shadow">
          {/* Intestazione del modale con titolo e pulsante di chiusura */}
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

          <div className="modal-body p-4 pt-2">
            {/* Visualizzazione condizionale dei messaggi di stato o di errore */}
            {statusMessage && (
              <div
                className={`alert ${isError ? "alert-danger" : "alert-success"} text-center`}
                role="alert"
              >
                {statusMessage}
              </div>
            )}

            {/* Form di inserimento credenziali */}
            <form onSubmit={handleLogin}>
              {/* Campo Email */}
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

              {/* Campo Password */}
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

              {/* Pulsante di invio del form */}
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-bold rounded-pill text-uppercase"
              >
                Entra nella Dashboard
              </button>
            </form>

            {/* Pulsante nascosto utilizzato programmaticamente per chiudere il modale */}
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
