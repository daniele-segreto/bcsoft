import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

// Componente di registrazione (Register) dell'applicazione e-commerce.
// Gestisce l'inserimento delle nuove credenziali, il controllo di unicità dell'email e la persistenza sul server locale.
export function Register() {
  // Stati locali per memorizzare i dati inseriti nel modulo di registrazione
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Funzione asincrona per gestire l'invio del modulo di registrazione
  const handleRegister = async (e) => {
    e.preventDefault(); // Previene il comportamento di default del browser al submit del form

    try {
      // Effettua una richiesta GET al server locale per recuperare l'elenco degli utenti esistenti
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      // Verifica preliminare: controlla se l'email inserita è già presente nel database
      const userExists = users.some((u) => u.email === email);
      if (userExists) {
        // Notifica di avviso in caso di duplicazione dell'account
        Swal.fire({
          title: "Utente già registrato",
          text: "L'indirizzo email inserito risulta già associato a un account.",
          icon: "warning",
          confirmButtonText: "Chiudi",
          confirmButtonColor: "#212529",
          background: "#ffffff",
          customClass: { popup: "rounded-4 shadow-sm" },
        });
        return; // Interrompe l'esecuzione della funzione
      }

      // Se l'utente non esiste, invia una richiesta POST al server per salvare il nuovo account
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Se è tutto ok...
      if (res.ok) {
        // Notifica visiva di successo al completamento della registrazione
        Swal.fire({
          title: "Registrazione completata",
          text: "Può procedere adesso con l'accesso al sistema.",
          icon: "success",
          confirmButtonText: "Vai al Login",
          confirmButtonColor: "#212529",
          background: "#ffffff",
          customClass: { popup: "rounded-4 shadow-sm" },
        });
        // Reindirizza l'utente alla pagina di login per consentire l'accesso
        navigate("/login");
      }

      // Altrimenti...
    } catch (error) {
      // Gestione di eventuali errori di comunicazione o di rete con il server di autenticazione
      Swal.fire({
        title: "Errore di connessione",
        text: "Impossibile comunicare con il server di autenticazione.",
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
          <h2 className="fw-bold mb-4 text-center">Registrazione</h2>

          {/* Modulo di registrazione con associazione dell'evento onSubmit */}
          <form onSubmit={handleRegister}>
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
              className="btn btn-dark w-100 py-3 rounded-pill fw-bold shadow-sm mb-3"
            >
              Registrati
            </button>
          </form>

          {/* Sezione di rimando per gli utenti che possiedono già un account */}
          <div className="text-center">
            <span className="text-muted small">Hai già un account? </span>
            <Link
              to="/login"
              className="text-dark fw-semibold small text-decoration-underline"
            >
              Accedi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
