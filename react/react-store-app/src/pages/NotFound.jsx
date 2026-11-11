import { Link } from "react-router-dom";

// Componente di gestione degli errori di routing (Pagina 404 - Not Found).
// Viene visualizzato automaticamente quando l'utente tenta di accedere a un URL che non corrisponde a nessuna rotta definita.
export function NotFound() {
    return (
        <div className="container my-5 text-center py-5">
            {/* Codice numerico di errore in evidenza con tipografia ingrandita e colore di avviso */}
            <h1 className="fw-bold display-1 text-danger mb-3">404</h1>

            {/* Intestazione descrittiva dell'errore */}
            <h2 className="fw-semibold mb-3">Pagina non trovata</h2>

            {/* Messaggio informativo per l'utente */}
            <p className="text-muted mb-4 fs-5">
                La rotta che sta cercando di raggiungere non esiste o è stata rimossa.
            </p>

            {/* Pulsante di navigazione tramite React Router per riportare l'utente alla pagina principale senza ricaricare la pagina */}
            <Link
                to="/"
                className="btn btn-dark btn-lg px-5 rounded-pill fw-semibold shadow-sm"
            >
                Torna alla Home
            </Link>
        </div>
    );
}
