/**
* Attesa del caricamento completo del DOM prima dell'esecuzione dello script.
*/
document.addEventListener("DOMContentLoaded", function () {
    
    const outputContainer = document.getElementById("output-container");
    
    // ==========================================
    // PUNTO 1: Valutazione Livello Studente
    // ==========================================
    const punteggioStudente = 50; // Valore da testare
    let livello = "";
    
    if (punteggioStudente >= 90) {
        livello = "A";
    } else if (punteggioStudente >= 80) {
        livello = "B";
    } else if (punteggioStudente >= 70) {
        livello = "C";
    } else {
        livello = "D";
    }
    
    // Creazione scheda 1
    const card1 = document.createElement("article");
    card1.className = "result-card";
    card1.innerHTML = `
        <h3>1. Livello Istruzione</h3>
        <p><strong>Punteggio inserito:</strong> ${punteggioStudente} punti</p>
        <p><strong>Livello assegnato:</strong> ${livello}</p>
    `;
    outputContainer.appendChild(card1);
    
    // ==========================================
    // PUNTO 2: Giorno della Settimana (con gestione errore)
    // ==========================================
    const numeroGiorno = 6;
    let nomeGiorno = "";
    
    switch (numeroGiorno) {
        case 1:
        nomeGiorno = "Lunedì";
        break;
        case 2:
        nomeGiorno = "Martedì";
        break;
        case 3:
        nomeGiorno = "Mercoledì";
        break;
        case 4:
        nomeGiorno = "Giovedì";
        break;
        case 5:
        nomeGiorno = "Venerdì";
        break;
        case 6:
        nomeGiorno = "Sabato";
        break;
        case 7:
        nomeGiorno = "Domenica";
        break;
        default:
        nomeGiorno = "<span class='error-text'>Errore: inserire un numero valido da 1 a 7</span>";
        break;
    }
    
    // Creazione scheda 2
    const card2 = document.createElement("article");
    card2.className = "result-card";
    card2.innerHTML = `
        <h3>2. Giorno della Settimana</h3>
        <p><strong>Numero inserito:</strong> ${numeroGiorno}</p>
        <p><strong>Risultato:</strong> ${nomeGiorno}</p>
    `;
    outputContainer.appendChild(card2);
    
    // ==========================================
    // PUNTO 3: Calcolo del Fattoriale (n!)
    // ------------------------------------------
    // SPIEGAZIONE MATEMATICA:
    // Il fattoriale di un numero è:
    // il prodotto di tutti i numeri interi da 1 fino a un numero qualsiasi:
    // Esempio: 4! = 1 * 2 * 3 * 4 = 24. (parte da 1*)
    // Il fattoriale di 0 è 1 (0! = 1). Non esiste per i negativi.
    // ==========================================
    const numeroFattoriale = 4; // Valore di input (es. 4!) - valore fisso
    let fattoriale = 1;// Variabile accumulatrice (parte da 1*)
    
    // Controllo preliminare: i numeri negativi non ammettono fattoriale
    if (numeroFattoriale < 0) {
        fattoriale = "Non definito per numeri negativi";
    } else {
        // Ciclo for per eseguire la moltiplicazione progressiva:
        // - Inizializzazione: i parte da 1
        // - Condizione: il ciclo continua finché l'indice è minore o uguale al numeroFattoriale (in questo caso 4)
        // - Incremento: i aumenta di 1 ad ogni passaggio (i++)
        for (let i = 1; i <= numeroFattoriale; i++) {
            // L'operatore *= moltiplica il valore attuale di 'fattoriale' per 'i' 
            // e salva il nuovo totale (equivalente a: fattoriale = fattoriale * i)
            fattoriale *= i; // ad ogni giro, moltiplica se stesso
        }
    }
    
    // Creazione scheda 3
    const card3 = document.createElement("article");
    card3.className = "result-card";
    card3.innerHTML = `
        <h3>3. Calcolo del Fattoriale</h3>
        <p><strong>Numero inserito:</strong> ${numeroFattoriale}</p>
        <p><strong>Fattoriale (${numeroFattoriale}!):</strong> ${fattoriale}</p>
    `;
    outputContainer.appendChild(card3);
    
});