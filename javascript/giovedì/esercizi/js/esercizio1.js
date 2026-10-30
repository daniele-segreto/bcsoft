// Variabile per accumulare i risultati HTML da stampare a schermo
let htmlOutput = "";

// ------------------------------------------
// 1. FUNZIONI JAVASCRIPT E ISTRUZIONE 'RETURN'
// ------------------------------------------

// Funzione con SweetAlert2 al posto del console.log
function salutaUtente(nome) {
    Swal.fire({
        title: 'Benvenuto!',
        text: 'Benvenuto nel sistema, ' + nome,
        icon: 'success',
        confirmButtonText: 'Continua'
    });
}
salutaUtente("Daniele");

// Funzione con l'istruzione 'return' per il calcolo della media
function calcolaMedia(a, b, c) {
    return (a + b + c) / 3;
}
let mediaVoti = calcolaMedia(25, 28, 30);

htmlOutput += `<h3>1. Funzioni e Return</h3>`;
htmlOutput += `<p>La media calcolata tramite funzione con return è: <strong>${mediaVoti.toFixed(2)}</strong></p>`;
// toFixed() Converte il valore numerico in una stringa, arrotondandolo a un numero predefinito di cifre decimali (altimenti sarebbe benuto 27.666666666666668)

// ------------------------------------------
// 2. GESTIONE COMPLETA DEGLI ARRAY
// ------------------------------------------

let arrayVuoto = [];
arrayVuoto.push("Cane");
arrayVuoto.push("Gatto");
arrayVuoto.push("Topo");

let votiEsami = [18, 24, 30, 27, 21];

let matriceStudenti = [
    ["Mario", 25],
    ["Luigi", 28],
    ["Anna", 30]
];

htmlOutput += `<h3>2. Tipologie di Array</h3>`;
htmlOutput += `<p>Array riempito tramite push: <strong>${arrayVuoto.join(" - ")}</strong></p>`;
htmlOutput += `<p>Array iniziale di voti: <strong>${votiEsami.join(", ")}</strong></p>`;
htmlOutput += `<p>Accesso tramite indice (votiEsami[2]): <strong>${votiEsami[2]}</strong></p>`;
htmlOutput += `<p>Proprietà length dell'array votiEsami: <strong>${votiEsami.length}</strong></p>`;


// ------------------------------------------
// 3. COPIA E MODIFICA DEGLI ARRAY ESISTENTI
// ------------------------------------------

// Copia di un array esistente tramite .slice()
let copiaVoti = votiEsami.slice();
copiaVoti.push(29);
copiaVoti.shift(); // Rimuove il primo elemento

htmlOutput += `<h3>3. Copia e Modifica (slice, push, shift)</h3>`;
htmlOutput += `<p>Copia modificata dei voti: <strong>${copiaVoti.join(", ")}</strong></p>`;


// ------------------------------------------
// 4. CICLI SU ARRAY (FOR e FOR...OF)
// ------------------------------------------

htmlOutput += `<h3>4. Iterazione con Cicli</h3>`;

// Ciclo for tradizionale
htmlOutput += `<p><strong>Iterazione con ciclo for:</strong></p>`;
htmlOutput += `<ul class="lista-terminale">`;
for (let i = 0; i < votiEsami.length; i++) {
    htmlOutput += `<li class="item-terminale">Voto ${i + 1}: <strong>${votiEsami[i]}</strong></li>`;
}
htmlOutput += `</ul>`;

// Ciclo for...of
htmlOutput += `<p><strong>Iterazione con ciclo for...of (Matrice Studenti):</strong></p>`;
htmlOutput += `<ul class="lista-terminale">`;
for (let studente of matriceStudenti) {
    htmlOutput += `<li class="item-terminale">Studente: <strong>${studente[0]}</strong> - Voto: <strong>${studente[1]}</strong></li>`;
}
htmlOutput += `</ul>`;

// studente[0]: Accede al primo elemento del sotto-array corrente, che si trova alla posizione 0 e corrisponde al nome dello studente (es. "Mario"). studente[1]: Accede al secondo elemento del sotto-array, che si trova alla posizione 1 e corrisponde al voto conseguito (es. 25).

// utilizziamo esclusivamente 0 e 1 in quel frammento di codice perché la struttura di ciascun sotto-array all'interno della nostra matrice (matriceStudenti) è progettata per contenere esattamente due elementi


// ------------------------------------------
// 5. METODI MAP E FILTER SU ARRAY
// ------------------------------------------

// Metodo .map() con operatore ternario (tetto massimo a 30)
let votiBonus = votiEsami.map(function(voto) {
    return voto + 2 > 30 ? 30 : voto + 2; 
}); // se voto+2 è maggiore di 30, lascia 30, altrimenti dai bonus

// Metodo .filter() per selezionare i voti >= 26
let votiEccellenti = votiEsami.filter(function(voto) {
    return voto >= 26;
});

htmlOutput += `<h3>5. Metodi Avanzati: map e filter</h3>`;
htmlOutput += `<p>Voti originali: <strong>${votiEsami.join(", ")}</strong></p>`;
htmlOutput += `<p>Voti elaborati con <strong>map</strong> (con bonus): <strong>${votiBonus.join(", ")}</strong></p>`;
htmlOutput += `<p>Voti filtrati con <strong>filter</strong> (>= 26): <strong>${votiEccellenti.join(", ")}</strong></p>`;

// Inserimento finale nel DOM
document.getElementById("output").innerHTML = htmlOutput;