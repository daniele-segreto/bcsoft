// ==========================================
// ESERCIZIO INTRODUTTIVO SU JAVASCRIPT
// ==========================================

/* RICHIESTO */
// 1. Realizzazione di un alert
Swal.fire({
    title: 'Benvenuto!',
    // Sequenza di escape \'
    text: 'Benvenuto nella pagina dell\'esercizio introduttivo!',
    icon: 'success',
    confirmButtonText: 'Iniziamo'
});

/* RICHIESTO */
// 2. Utilizzo di const e let per visualizzare il valore di una variabile
let nomeCorso = "Vibe Coding con React";

let nome = 'Daniele';
let cognome = 'Segreto';
const annoNascita = 1989;

/* RICHIESTO */
// 3. Utilizzo della concatenazione di stringhe
let messaggioCompleto = "Mi chiamo " + nome + " " + cognome + ", sto seguendo il corso di: " + nomeCorso + " e sono nato nel " + annoNascita + ".";

/* RICHIESTO */
// 4. Utilizzo di console.log
console.log("Dati elaborati con successo: " + messaggioCompleto);

/* RICHIESTO */
// 5. Utilizzo di document.getElementById
document.getElementById("messaggio").innerText = messaggioCompleto;

/* RICHIESTO */
// 6. Realizzazione di un cambio di stile ad un elemento HTML
let elementoTitolo = document.getElementById("titolo");
elementoTitolo.style.color = "red";
elementoTitolo.style.textTransform = "uppercase";

// Apri messaggio
let apriMessaggio = document.getElementById("apri-messaggio");
apriMessaggio.addEventListener('click', function() {
    apriMessaggio.innerHTML += " <h1>Ho aggiunto qualcosa!</h1>";
})

// Toogle
let pulsanteToogle = document.getElementById("pulsante-toogle");
let elementoToogle = document.getElementById("elemento-toogle");

pulsanteToogle.addEventListener('click', function () {
    if (elementoToogle.style.display === "none") {
        elementoToogle.style.display = "block";
    } else {
        elementoToogle.style.display = "none";
    }
});

// Colora lo sfondo
let body = document.querySelector('body');
function coloraSfondo() {
    body.style.backgroundColor = "hotpink";
}