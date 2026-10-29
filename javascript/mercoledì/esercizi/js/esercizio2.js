// ==========================================
// ESERCIZIO JAVASCRIPT SUGLI OPERATORI
// ==========================================

// 1. Operatori Matematici (Addizione, Sottrazione, Moltiplicazione, Divisione)
/* RICHIESTO */
let a = 10;
let b = 2;

let somma = a + b;
let sottrazione = a - b;
let moltiplicazione = a * b;
let divisione = a / b;
let resto = a % b;

let risultatoMatematici = "a = " + a + ";<br> b = " + b + ";<br>" +
    "Addizione (a + b) = " + somma + "<br>" +
    "Sottrazione (a - b) = " + sottrazione + "<br>" +
    "Moltiplicazione (a * b) = " + moltiplicazione + "<br>" +
    "Divisione (a / b) = " + divisione  + "<br>" +
    "Resto (a % b) = " + resto;

document.getElementById("matematici").innerHTML = risultatoMatematici;


// 2. Operatori Numerici (Negazione, Incremento, Decremento)
/* RICHIESTO */
let numeroBase = 10;
let negazione = -numeroBase;

let x = numeroBase;
x++; // Incremento post-fisso (ora x vale 11)
let y = numeroBase;
y--; // Decremento post-fisso (ora y vale 9)

let risultatoNumerici = "Numero base = " + numeroBase + "<br>" +
    "Negazione (-numeroBase): " + negazione + "<br>" +
    "Incremento (10++): " + x + "<br>" +
    "Decremento (10--): " + y;

document.getElementById("numerici").innerHTML = risultatoNumerici;


// 3. Operatori Relazionali (minore, maggiore, uguale, diverso, strettamente uguale, strettamente diverso)
/* RICHIESTO */
let num1 = 10;
let num2 = "10";

let minore = num1 < 20; // minore (<)
let maggiore = num1 > 5; // maggiore (>)
let uguale = num1 == num2; // uguale (==)
let diverso = num1 != 5;  // diverso (!=)
let strettamenteUguale = num1 === num2; // strettamente uguale (===)
let strettamenteDiverso = num1 !== num2; // strettamente diverso (!==)

let risultatoRelazionali = "num1 = 10; <br> num2 = \"10\";<br>" +
    "Minore (num1 < 20): " + minore + "<br>" +
    "Maggiore (num1 > 5): " + maggiore + "<br>" +
    "Uguale (num1 == num2): " + uguale + "<br>" +
    "Diverso (num1 != 5): " + diverso + "<br>" +
    "Strettamente uguale (num1 === num2): " + strettamenteUguale + "<br>" +
    "Strettamente diverso (num1 !== num2): " + strettamenteDiverso;

document.getElementById("relazionali").innerHTML = risultatoRelazionali;


// 4. Operatori Logici (AND, OR, NOT)
/* RICHIESTO */
let cond1 = true;
let cond2 = false;

let logicoAnd = cond1 && cond2; // AND
let logicoOr = cond1 || cond2; // OR
let logicoNot = !cond2; // NOT (inverte il valore booleano)

let risultatoLogici = "cond1 = true; <br> cond2 = false;<br>" +
    "AND (cond1 && cond2): " + logicoAnd + "<br>" +
    "OR (cond1 || cond2): " + logicoOr + "<br>" +
    "NOT (!cond2): " + logicoNot;

document.getElementById("logici").innerHTML = risultatoLogici;


// 5. Operatore di concatenazione di stringhe | template literals (${})
/* RICHIESTO */
let parte1 = "Sviluppo";
let parte2 = "Web";
let parte3 = "JavaScript"

// Interpolazione pulita ed immediata
let fraseConcatenata = `Corso di ${parte1} ${parte2} con HTML, CSS, ${parte3} e React.`;

let risultatoConcatenazione = `Concatenazione: ${fraseConcatenata}`;

document.getElementById("concatenazione").innerHTML = risultatoConcatenazione;