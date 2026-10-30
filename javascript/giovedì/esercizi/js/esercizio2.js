// Variabile per accumulare i risultati HTML da stampare a schermo
let htmlOutput = "";

// --------------------------------------------------------
// 1. UTILIZZO DELLA LIBRERIA UNDERSCORE.JS (https://underscorejs.org/)
// --------------------------------------------------------
htmlOutput += `<h3>1. Underscore.js (Metodo _.shuffle)</h3>`;

// Array di partenza con i nomi di alcuni moduli di programmazione
let moduliCorso = ["UX/UI", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "SQL", "React"];
htmlOutput += `<p>Array originale dei moduli: <strong>${moduliCorso.join(", ")}</strong></p>`;

// Utilizzo del metodo _.shuffle di Underscore.js per mescolare casualmente gli elementi
let moduliMischiati = _.shuffle(moduliCorso);

htmlOutput += `<p>Array dopo l'applicazione di <strong>_.shuffle()</strong>:</p>`;
htmlOutput += `<ul class="lista-terminale">`;
for (let modulo of moduliMischiati) {
    htmlOutput += `<li class="item-terminale">Modulo estratto: <strong>${modulo}</strong></li>`;
}
htmlOutput += `</ul>`;


// --------------------------------------------------------
// 2. UTILIZZO DELLA LIBRERIA LODASH.JS (https://lodash.com/)
// --------------------------------------------------------
htmlOutput += `<h3>2. Lodash.js (Metodo _.chunk)</h3>`;

// Array di voti o elementi da suddividere in sottogruppi
let listaVoti = [18, 21, 24, 27, 28, 30];
htmlOutput += `<p>Array originale dei voti: <strong>${listaVoti.join(", ")}</strong></p>`;

// Utilizzo del metodo _.chunk di Lodash.js per dividere l'array in gruppi di 2 elementi
// Utilizzo del metodo _.chunk di Lodash.js per dividere l'array in gruppi di 2 elementi
let votiACoppie = _.chunk(listaVoti, 2);

htmlOutput += `<p>Suddivisione in coppie tramite <strong>_.chunk(array, 2)</strong>:</p>`;
htmlOutput += `<ul class="lista-terminale">`;
for (let coppia of votiACoppie) {
    htmlOutput += `<li class="item-terminale">Gruppo di voti: <strong>[ ${coppia.join(", ")} ]</strong></li>`;
}
htmlOutput += `</ul>`;

// Inserimento finale nel DOM
document.getElementById("output").innerHTML = htmlOutput;