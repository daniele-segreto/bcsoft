import React, { useState, useContext } from "react";
import { ConsigliContext } from "../context/ConsigliContext";

/**
 * Componente per la gestione del form di inserimento di un nuovo consiglio.
 * Gestisce lo stato locale dell'input e si interfaccia con il Context globale per l'aggiunta.
 */
export default function FormInserimento() {
    const [testoInput, setTestoInput] = useState("");
    const { aggiungiConsiglio } = useContext(ConsigliContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        aggiungiConsiglio(testoInput);
        setTestoInput(""); // Pulizia del campo di input dopo l'invio
    };

    return (
        <form onSubmit={handleSubmit} className="input-group">
            <input
                type="text"
                className="form-control rounded-start-pill px-4"
                placeholder="Inserisci una nuova massima di vita..."
                value={testoInput}
                onChange={(e) => setTestoInput(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-dark rounded-end-pill px-4 fw-bold text-warning border border-light"
            >
                Aggiungi
            </button>
        </form>
    );
}
