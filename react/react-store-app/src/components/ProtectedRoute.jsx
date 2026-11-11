import React from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

// Componente di ordine superiore per la protezione delle rotte (Route Guard).
// Si occupa di verificare lo stato di autenticazione dell'utente prima di autorizzare la visualizzazione di pagine riservate.
export function ProtectedRoute({ isLogged, children }) {
    // Controllo condizionale: se l'utente non risulta autenticato (isLogged è false)
    if (!isLogged) {
        // Attiva una finestra di avviso interattiva (SweetAlert2) per segnalare la necessità del login
        Swal.fire({
            title: "Accesso Riservato",
            text: "È necessario effettuare il login per accedere alla Lista dei Desideri.",
            icon: "warning",
            confirmButtonText: "Vai al Login",
            confirmButtonColor: "#212529",
            background: "#ffffff",
            customClass: {
                popup: "rounded-4 shadow-sm",
            },
        });

        // Reindirizza l'utente alla pagina di login.
        // L'attributo 'replace' sostituisce la rotta corrente nella cronologia del browser,
        // impedendo all'utente di tornare indietro con il tasto del browser su una pagina protetta non autorizzata.
        return <Navigate to="/login" replace />;
    }

    // Se l'utente è autenticato, restituisce e renderizza regolarmente i componenti figli (children) racchiusi nella rotta
    return children;
}
