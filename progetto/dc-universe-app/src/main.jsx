import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx"; // <--- Import del context per la gestione dei preferiti
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./style.css";

/* --- MONTAGGIO DELL'APPLICAZIONE REACT --- */
/* Inizializzazione del root DOM e configurazione dei provider globali (Router, Autenticazione, Carrello e Preferiti) */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Provider per la gestione dello stato di autenticazione dell'utente */}
      <AuthProvider>
        {/* Provider per la gestione dello stato globale del carrello e degli acquisti */}
        <CartProvider>
          {/* Provider per la gestione e la persistenza dei preferiti */}
          <FavoritesProvider>
            {" "}
            {/* <--- Inserimento del Provider nel tree dei componenti */}
            <App />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
