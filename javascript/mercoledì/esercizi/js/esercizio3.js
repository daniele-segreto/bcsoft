// ==========================================
// Esercizio sui Controlli di Flusso
// ==========================================

/* RICHIESTO */
// 1. Utilizzo di if, else if, else
let punteggio = 5;
let giudizio = "";

if (punteggio >= 90) {
    giudizio = "Eccellente";
} else if (punteggio >= 70) {
    giudizio = "Buono";
} else if (punteggio >= 60) {
    giudizio = "Sufficienza";
} else {
    giudizio = "Insufficiente";
}

let risultatoIf = `Punteggio verificato: ${punteggio} <br> Valutazione: <strong>${giudizio}</strong>`;
document.getElementById("condizionale-if").innerHTML = risultatoIf;


/* RICHIESTO */
// 2. Utilizzo di switch, case, break
let giornoSettimana = 3;
let nomeGiorno = "";

switch (giornoSettimana) {
    case 1:
        nomeGiorno = "Lunedì";
        break; // interrompe l'esecuzione
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
        nomeGiorno = "Giorno non valido";
        break;
}

let risultatoSwitch = `Numero giorno: ${giornoSettimana} <br> Corrispondenza: <strong>${nomeGiorno}</strong>`;
document.getElementById("seleziona-switch").innerHTML = risultatoSwitch;


/* RICHIESTO */
// 3. Utilizzo del ciclo for
let numeriFor = "";
for (let i = 1; i <= 10; i++) {
    numeriFor += `${i} `;
}

let risultatoFor = `Ciclo <strong>for:</strong> ${numeriFor}`;
document.getElementById("ciclo-for").innerHTML = risultatoFor;


/* RICHIESTO */
// 4. Utilizzo del ciclo while
let numeriWhile = "";
let indiceWhile = 1;

while (indiceWhile <= 10) {
    // Accodo il valore attuale e uno spazio alla stringa
    numeriWhile += `${indiceWhile} `;
    indiceWhile++;
}

let risultatoWhile = `Ciclo <strong>while:</strong> ${numeriWhile}`;
document.getElementById("ciclo-while").innerHTML = risultatoWhile;


/* RICHIESTO */
// 5. Utilizzo del ciclo do...while
let numeriDoWhile = "";
let indiceDo = 1;

// Il blocco 'do' viene eseguito SEMPRE almeno una volta, prima di verificare la condizione
do {
    // Accodo il valore corrente dell'indice e uno spazio alla stringa
    numeriDoWhile += `${indiceDo} `;
    indiceDo++;
} while (indiceDo <= 5);
// La condizione viene valutata ALLA FINE: se è vera, il ciclo ripete il blocco

let risultatoDoWhile = `Ciclo <strong>do...while:</strong> ${numeriDoWhile}`;
document.getElementById("ciclo-do-while").innerHTML = risultatoDoWhile;