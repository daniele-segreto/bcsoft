import React, { useState } from "react";
import ListaConsigli from "./ListaConsigli";
import "./GestoreAbitudini.css";

// RICHIESTO: Lista predefinita di buone abitudini tra cui scegliere casualmente (strutturata ad array di oggetti)
const LISTA_ABITUDINI = [
    { id: 1, testo: "Bere un bicchiere d’acqua a digiuno", icona: "💧" },
    { id: 2, testo: "Fare 10 minuti di stretching matutino", icona: "🧘‍♂️" },
    { id: 3, testo: "Leggere almeno 15 pagine di un libro", icona: "📚" },
    { id: 4, testo: "Fare una passeggiata all’aria aperta", icona: "🚶‍♂️" },
    { id: 5, testo: "Bere una tisana rilassante serale", icona: "🍵" },
    { id: 6, testo: "Scrivere 3 cose per cui si è grati", icona: "📝" },
    { id: 7, testo: "Dedicare 20 minuti allo studio di una nuova tecnologia", icona: "💻"},
];

// RICHIESTO: Componente padre che contiene il bottone e gestisce l'elenco dei consigli
export default function GestoreAbitudini() {
    // RICHIESTO: Gestione dello stato per l'elenco dei consigli estratti (array di oggetti)
    const [consigliEstratti, setConsigliEstratti] = useState([]);

    // RICHIESTO: Funzione scatenata al click sul bottone per l'estrazione casuale
    const estraiConsiglio = () => {
        // RICHIESTO: Selezione casuale da una lista predefinita
        const indiceCasuale = Math.floor(Math.random() * LISTA_ABITUDINI.length);
        const consiglioSelezionato = LISTA_ABITUDINI[indiceCasuale];

        // RICHIESTO: Controllo se il consiglio è già stato visualizzato in precedenza (verifica tramite id univoco)
        
        // .some() è un metodo degli array che restituisce 'true' se ALMENO UN elemento soddisfa la condizione fornita.
        // In questo caso, scorre 'consigliEstratti' e confronta l'id di ciascun item già presente con l'id di 'consiglioSelezionato'. <---
        const giaPresente = consigliEstratti.some(
            (item) => item.id === consiglioSelezionato.id,
        );

        if (giaPresente) {
            // RICHIESTO: Alert che notifica l'avvenuto inserimento precedente riportando il valore del consiglio (senza aggiungere il duplicato)
            alert(
                `Attenzione! L'abitudine "${consiglioSelezionato.testo}" è già stata visualizzata in precedenza.`,
            );
        } else {
            // Inserimento del nuovo consiglio non duplicato nello stato
            setConsigliEstratti([...consigliEstratti, consiglioSelezionato]);
            // ... = Spread Operator = copio tutti gli elementi già presenti all'interno dell'array consigliEstratti e li inserisco nel nuovo array, a cui poi viene aggiunto, in coda, il consiglioSelezionato
        }
    };

    return (
        <div className="main-container">
            <header className="header-box">
                <h2>Generatore di Buone Abitudini</h2>
                <p>
                    Scopri e colleziona le abitudini ideali per la tua routine quotidiana.
                </p>

                {/* RICHIESTO: Bottone per l'estrazione al click */}
                <button className="btn-estrai" onClick={estraiConsiglio}>
                    Genera Suggerimento ✨
                </button>
            </header>

            {/* RICHIESTO: Passaggio dell'elenco al secondo componente per la visualizzazione */}
            <ListaConsigli consigli={consigliEstratti} />
        </div>
    );
}
