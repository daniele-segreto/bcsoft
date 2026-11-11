import React from "react";
import "./ListaConsigli.css";

// RICHIESTO: Secondo componente della struttura che visualizza i consigli ricevuti
export default function ListaConsigli({ consigli }) {
    return (
        <div className="card-consigli">
            <h3>Le tue Buone Abitudini</h3>

            {/* Se non abbiamo alcun consiglio... */}
            {consigli.length === 0 ? (
                <p className="placeholder-testo">
                    Nessuna abitudine estratta. Clicca sul pulsante in alto per iniziare!
                </p>
            ) : (
                /* RICHIESTO: Visualizzazione dei suggerimenti ricevuti nell'interfaccia */
                <ul className="elenco-consigli">
                    {consigli.map((consiglio, index) => (
                        <li key={consiglio.id} className="item-consiglio">
                            <span className="badge-numero">#{index + 1}</span>
                            <span className="testo-consiglio">
                                <span className="icona-emoji">{consiglio.icona}</span>
                                {consiglio.testo}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
