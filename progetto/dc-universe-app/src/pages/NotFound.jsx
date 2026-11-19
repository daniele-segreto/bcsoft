import React from "react";
import { useNavigate } from "react-router-dom";

/* --- COMPONENTE PAGINA NON TROVATA (ERRORE 404) --- */
/* Visualizza una schermata di avviso personalizzata a tema DC quando la rotta cercata non esiste */
function NotFound() {
  // Hook di navigazione per reindirizzare l'utente verso le pagine principali
  const navigate = useNavigate();

  return (
    /* Posizionamento centrale con margini adeguati per evitare la sovrapposizione con la navbar fissa */
    <main
      className="container text-center py-5"
      style={{ marginTop: "80px", minHeight: "70vh" }}
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6">
          {/* Card centrale con stile pulito, bordi arrotondati e ombreggiatura */}
          <div className="card border-0 shadow-sm rounded-4 p-5 bg-white">
            {/* Codice numerico dell'errore in evidenza */}
            <div className="display-1 fw-bold text-primary mb-3">404</div>

            {/* Titolo descrittivo dell'errore */}
            <h2 className="fw-bold text-uppercase mb-3">Pagina Non Trovata</h2>

            {/* Messaggio a tema con ambientazione DC Comics */}
            <p className="text-muted mb-4">
              Sembra che tu abbia varcato i confini di Gotham o di Metropolis
              finendo in un settore inesplorato dell'Universo DC.
            </p>

            {/* Pulsanti di azione rapida per il recupero della navigazione */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {/* Pulsante per tornare alla Home Page */}
              <button
                type="button"
                className="btn btn-primary fw-bold rounded-pill px-4 py-2 text-uppercase"
                onClick={() => navigate("/")}
              >
                🏠 Torna alla Home
              </button>

              {/* Pulsante per esplorare direttamente il catalogo dei fumetti */}
              <button
                type="button"
                className="btn btn-outline-dark fw-bold rounded-pill px-4 py-2 text-uppercase"
                onClick={() => navigate("/fumetti")}
              >
                📚 Esplora Fumetti
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
