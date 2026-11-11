import React from "react";
// Importazione del Provider globale della Context API
import { ConsigliProvider } from "./context/ConsigliContext";
// Importazione della vista principale della dashboard dalla cartella pages
import DashboardApp from "./pages/DashboardApp";

/**
 * Componente Radice (Root Component) dell'applicazione.
 * Agisce come punto d'ingresso principale della gerarchia dei componenti di React.
 *
 * Il suo compito architetturale fondamentale è avvolgere l'intera applicazione
 * all'interno del 'ConsigliProvider', garantendo che qualsiasi sotto-componente
 * possa accedere e manipolare lo stato globale.
 */
export default function App() {
    return (
        <ConsigliProvider>
            <DashboardApp />
        </ConsigliProvider>
    );
}
