/**
* Attesa del caricamento completo del DOM prima dell'esecuzione dello script.
* Garantisce che tutti gli elementi HTML siano disponibili in memoria prima della manipolazione.
*/
document.addEventListener("DOMContentLoaded", function () {
    
    /**
    * Definizione di un array di oggetti letterali rappresentante una lista di persone.
    * La lista include deliberatamente duplicati di nomi e un mix di età superiori e inferiori a 30 anni,
    * così da testare rigorosamente i metodi di Lodash.
    */
    const elencoPersone = [
        { nome: "Marco", eta: 35 },
        { nome: "Anna", eta: 28 },
        { nome: "Giulia", eta: 42 },
        { nome: "Marco", eta: 35 }, // Duplicato esatto > 30
        { nome: "Luca", eta: 22 }, // Duplicato esatto < 30
        { nome: "Luca", eta: 22 },
        { nome: "Elena", eta: 31 },
        { nome: "Anna", eta: 40 },  // Stesso nome, età diversa
        { nome: "Davide", eta: 26 },
        { nome: "Giulia", eta: 30 }
    ];
    
    // Selezione del contenitore principale nel DOM
    const container = document.getElementById("output-container");
    
    // =========================================================================
    // ELABORAZIONE CON LODASH
    // =========================================================================
    
    // 'LISTA ORDINATA' ==>
    // _.filter(): Filtra le persone che hanno più di 30 anni.
    const personeOver30 = _.filter(elencoPersone, function (persona) {
        return persona.eta > 30;
    });
    //  _.sortBy(): Filtra in ordine 'alfabetico' per nome.
    const personeOrdinate = _.sortBy(personeOver30, ['nome']);
    /** _.uniqBy(): Rimuove i duplicati basandosi sulla proprietà 'nome',
    mantiene unicamente la prima occorrenza registrata. */
    const personeUniche = _.uniqBy(personeOrdinate, 'nome');
    
    // 'LISTA SEPARATA' ==>
    /** 
     * Crea una 'LISTA SEPARATA' per chi NON soddisfa il criterio (> 30 anni)
     * la filtra in ordine alfabetico
     * e la rende unica per nome. */
    const personeUnderUguali30 = _.filter(elencoPersone, function (persona) {
        return persona.eta <= 30;
    });
    // Filtra in ordine alfabetico per nome
    const personeUnderOrdinate = _.sortBy(personeUnderUguali30, ['nome']);
    // Filtra escludendo i doppioni
    const personeUnderUniche = _.uniqBy(personeUnderOrdinate, 'nome');
    
    // =========================================================================
    // RENDERIZZAZIONE DINAMICA NEL DOM (Versione Semplificata)
    // =========================================================================
    
    // Inseriamo direttamente tutte le schede nel contenitore usando un unico blocco HTML dinamico
    container.innerHTML = `
        <article class="result-card">
            <h3>1. Lista Originaria</h3>
            <ul>
                ${elencoPersone.map(p => `<li><strong>${p.nome}</strong> ha ${p.eta} anni</li>`).join('')}
            </ul>
        </article>
    
        <article class="result-card">
            <h3>2. Over 30 (Ordinati A-Z & Unici)</h3>
            <p><em>Metodi: _.filter, _.sortBy, _.uniqBy</em></p>
            <br>
            <ul>
                ${personeUniche.map(p => `<li><strong>${p.nome}</strong> ha ${p.eta} anni</li>`).join('')}
            </ul>
        </article>
    
        <article class="result-card">
            <h3>3. Lista Separata (&le; 30 anni)</h3>
            <p><em>Ordinati alfabeticamente</em></p>
            <br>
            <ul>
                ${personeUnderUniche.map(p => `<li><strong>${p.nome}</strong> ha ${p.eta} anni</li>`).join('')}
            </ul>
        </article>
    `;
    
});