/**
 * Attesa del caricamento completo del DOM prima dell'esecuzione dello script.
 */
document.addEventListener("DOMContentLoaded", function () {

    // 1. Array di dati puri: ogni oggetto contiene solo le proprietà numeriche necessarie
    const figure = [
        { nome: "Quadrato", lato: 6 },
        { nome: "Rettangolo", base: 10, altezza: 4 },
        { nome: "Triangolo Equilatero", lato: 8, altezza: 6.93 },
        { nome: "Rombo", lato: 5, diagMag: 8, diagMin: 6 }
    ];

    // Selezione del contenitore nel DOM
    const outputContainer = document.getElementById("output-container");

    // 2. Iterazione lineare sull'array con variabile esplicativa estesa
    figure.forEach(function (figura) {
        let perimetro = 0;
        let area = 0;
        let datiTesto = "";

        // 3. Struttura switch pulita e diretta per il calcolo geometrico
        switch (figura.nome) {
            case "Quadrato":
                perimetro = figura.lato * 4;
                area = figura.lato * figura.lato;
                datiTesto = `Lato = ${figura.lato} cm`;
                break;

            case "Rettangolo":
                perimetro = (figura.base + figura.altezza) * 2;
                area = figura.base * figura.altezza;
                datiTesto = `Base = ${figura.base} cm, Altezza = ${figura.altezza} cm`;
                break;

            case "Triangolo Equilatero":
                perimetro = figura.lato * 3;
                area = (figura.lato * figura.altezza) / 2;
                datiTesto = `Lato = ${figura.lato} cm, Altezza = ${figura.altezza} cm`;
                break;

            case "Rombo":
                perimetro = figura.lato * 4;
                area = (figura.diagMag * figura.diagMin) / 2;
                datiTesto = `Lato = ${figura.lato} cm, Diag. Magg. = ${figura.diagMag} cm, Diag. Min. = ${figura.diagMin} cm`;
                break;
        }

        // 4. Creazione e iniezione della scheda HTML nel DOM
        const card = document.createElement("article");
        card.className = "polygon-card";
        card.innerHTML = `
            <h3>${figura.nome}</h3>
            <p><strong>Dati:</strong> ${datiTesto}</p>
            <p><strong>Perimetro:</strong> ${perimetro} cm</p>
            <p><strong>Area:</strong> ${area} cm²</p>
        `;

        // Al div contenitore aggiungo dinamicamente la scheda appena creata
        outputContainer.appendChild(card);
    });
});