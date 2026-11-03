import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  /* Stato locale per memorizzare i dati dell'utente autenticato */
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook per la navigazione programmatica

  useEffect(() => {
    /* Recupero dei dati dell'utente autenticato dal localStorage al caricamento del componente */
    const savedUser = localStorage.getItem("dc_logged_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      /* Se l'utente non risulta autenticato, viene reindirizzato alla pagina principale */
      navigate("/");
    }
  }, [navigate]);

  /* Funzione per gestire la disconnessione (logout) dell'utente */
  const handleLogout = () => {
    localStorage.removeItem("dc_logged_user");
    navigate("/");
  };

  /* Ritorno nullo se i dati dell'utente non sono ancora stati caricati */
  if (!user) return null;

  return (
    /* Sezione principale della Dashboard utente con margini e layout dedicati */
    <main className="container py-5" style={{ marginTop: "75px" }}>
      <div className="row align-items-center mb-5">
        <div className="col-md-8">
          <h1 className="fw-black text-uppercase">Benvenuto, {user.name}!</h1>
          <p className="text-muted">
            Area riservata e gestione del profilo nel portale DC Universe.
          </p>
        </div>
        <div className="col-md-4 text-md-end">
          {/* Pulsante per effettuare il logout */}
          <button
            onClick={handleLogout}
            className="btn btn-outline-danger rounded-pill px-4 fw-bold"
          >
            ESCI (LOGOUT)
          </button>
        </div>
      </div>

      {/* Sezione del carrello personale dell'utente */}
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <h3 className="section-main-title mb-4">IL TUO CARRELLO</h3>

        {/* Contenitore di cortesia per carrello vuoto o prodotti selezionati */}
        <div className="text-center py-5">
          <p className="text-muted fs-5 mb-3">
            Il suo carrello è attualmente vuoto.
          </p>
          <a
            href="/fumetti"
            className="btn btn-primary rounded-pill px-4 fw-bold text-uppercase"
          >
            Esplora i Fumetti
          </a>
        </div>
      </div>
    </main>
  );
}

export default UserDashboard;
