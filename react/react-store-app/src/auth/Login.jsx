import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

// Componente di autenticazione (Login) dell'applicazione e-commerce.
// Gestisce l'inserimento delle credenziali, la validazione tramite server locale e il reindirizzamento protetto.
export function Login({ onLoginSuccess }) {
  // Stati locali per memorizzare i valori immessi nei campi di input del modulo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Funzione asincrona per gestire l'invio del modulo di accesso
  const handleLogin = async (e) => {
    e.preventDefault(); // Previene il ricaricamento predefinito della pagina HTML

    try {
      // Effettua una richiesta HTTP GET al server locale (JSON Server) per recuperare l'elenco degli utenti registrati
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      // Cerca all'interno dell'array un utente che corrisponda esattamente a email e password inserite
      const validUser = users.find(
        (u) => u.email === email && u.password === password,
      );

      if (validUser) {
        // Se le credenziali sono valide, salva l'oggetto utente nel localStorage convertendolo in stringa JSON
        localStorage.setItem("user", JSON.stringify(validUser));
        // Aggiorna lo stato globale di autenticazione tramite la prop di callback ricevuta dal componente padre
        onLoginSuccess(true);

        // Notifica visiva di successo con SweetAlert2
        Swal.fire({
          title: "Accesso Effettuato",
          text: "Benvenuto nell'area riservata.",
          icon: "success",
          confirmButtonText: "Prosegui",
          confirmButtonColor: "#212529",
          background: "#ffffff",
          customClass: { popup: "rounded-4 shadow-sm" },
        });
        // Reindirizza l'utente alla sua Lista dei Desideri
        navigate("/lista-desideri");
      } else {
        // Notifica di errore in caso di credenziali errate
        Swal.fire({
          title: "Credenziali non valide",
          text: "Verifichi l'indirizzo email o la password inseriti.",
          icon: "error",
          confirmButtonText: "Riprova",
          confirmButtonColor: "#212529",
          background: "#ffffff",
          customClass: { popup: "rounded-4 shadow-sm" },
        });
      }
    } catch (error) {
      // Gestione di eventuali errori critici di rete o di connessione al server locale
      Swal.fire({
        title: "Errore di sistema",
        text: "Impossibile completare la verifica delle credenziali sul server.",
        icon: "error",
        confirmButtonText: "Chiudi",
        confirmButtonColor: "#212529",
        background: "#ffffff",
        customClass: { popup: "rounded-4 shadow-sm" },
      });
    }
  };

  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-5 bg-white p-5 rounded-4 shadow-sm">
          <h2 className="fw-bold mb-4 text-center">Accesso</h2>

          {/* Modulo di login con gestione dell'evento onSubmit */}
          <form onSubmit={handleLogin}>
            {/* Campo di input per l'email */}
            <div className="mb-3">
              <label className="form-label text-muted small fw-semibold">
                Posta Elettronica
              </label>
              <input
                type="email"
                className="form-control rounded-3 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo di input per la password */}
            <div className="mb-4">
              <label className="form-label text-muted small fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Pulsante di invio del modulo */}
            <button
              type="submit"
              className="btn btn-warning text-dark w-100 py-3 rounded-pill fw-bold shadow-sm mb-3"
            >
              Accedi
            </button>
          </form>

          {/* Link di reindirizzamento alla pagina di registrazione per nuovi utenti */}
          <div className="text-center">
            <span className="text-muted small">Non possiedi un account? </span>
            <Link
              to="/register"
              className="text-dark fw-semibold small text-decoration-underline"
            >
              Registrati
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
