import React, { useContext, useEffect } from "react";
import { ConsigliContext } from "../context/ConsigliContext";

/**
 * Componente per la visualizzazione del consiglio in primo piano.
 * Progettato didatticamente per mostrare il comportamento dell'Hook useEffect
 * e la gestione delle fasi di montaggio, aggiornamento e pulizia (cleanup).
 */
export default function VisualizzaConsiglio() {
    const { consiglioSelezionato, rimuoviConsiglio } =
        useContext(ConsigliContext);

    /**
     * USEEFFECT - MONITORAGGIO DEL CICLO DI VITA
     *
     * L'array di dipendenze [consiglioSelezionato] indica a React di rieseguire
     * questo blocco di codice ogni volta che la variabile 'consiglioSelezionato' cambia.
     */
    useEffect(() => {
        // FASE 1: AGGIORNAMENTO O MONTAGGIO
        // Se c'è un consiglio selezionato valido, stampiamo il log di aggiornamento.
        if (consiglioSelezionato) {
            console.log(
                `[Lifecycle - MOUNT / UPDATE] Il componente ha ricevuto il consiglio: "${consiglioSelezionato}"`,
            );
        }

        /**
         * FASE 2: LA FUNZIONE DI PULIZIA (CLEANUP FUNCTION)
         * React esegue questa funzione di return PRIMA di eseguire l'effetto successivo
         * (quando il consiglio cambia) oppure quando il componente viene smontato (rimosso dalla pagina).
         */
        return () => {
            if (consiglioSelezionato) {
                console.log(
                    `[Lifecycle - CLEANUP / UNMOUNT] Il vecchio consiglio sta per essere rimosso o sostituito: "${consiglioSelezionato}"`,
                );
            }
        };
    }, [consiglioSelezionato]); // <-- Dipendenza che scatena l'effetto
    // l'effetto rimane "in ascolto" e si attiva esclusivamente in risposta alla variazione di quel dato specifico

    // Controllo condizionale: se non è stato estratto alcun consiglio, mostriamo un placeholder
    if (!consiglioSelezionato) {
        return (
            <div className="alert alert-secondary text-center rounded-4 py-3 fw-bold shadow-sm">
                Nessun consiglio estratto. Premi il pulsante qui sopra per ricevere una
                lezione da Onizuka!
            </div>
        );
    }

    // Rendering grafico del consiglio attivo in primo piano
    return (
        <div className="card bg-warning text-dark p-4 rounded-4 shadow mb-4 border-2 border-white text-center">
            <h5 className="fw-bold mb-3">🔥 Consiglio del Giorno:</h5>
            <p className="fs-5 fst-italic mb-3">"{consiglioSelezionato}"</p>
            <div>
                <button
                    onClick={() => rimuoviConsiglio(consiglioSelezionato)}
                    className="btn btn-danger btn-sm rounded-pill fw-bold px-4 shadow-sm"
                >
                    Rimuovi questo consiglio 🗑️
                </button>
            </div>
        </div>
    );
}
