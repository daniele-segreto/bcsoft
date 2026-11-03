/**
 * Attesa del caricamento completo del DOM tramite jQuery.
 * Garantisce che tutti gli elementi della pagina siano pronti prima dell'interazione.
 */
$(document).ready(function() {
    
    // Faccio il mio getElementById, ma con jQuery
    const $campoInput = $('#campo-input');
    const $pulsanteAggiungi = $('#pulsante-aggiungi');
    const $listaElementi = $('#lista-elementi');
    
    function aggiungiElemento() {
        const testoElemento = $campoInput.val().trim();
        /* trim elimina gli spazi vuoti presenti all'inizio e alla fine di una stringa
        es. "   elemento   " */
        
        // Se il campo non è vuoto (diverso da stringa vuota)
        if (testoElemento !== "") {
            // Creo dinamicamente il nuovo elemento con il testo inserito
            const $nuovoElemento = $('<li>').text(testoElemento);
            
            // Aggiungo l'elemento in coda alla lista
            $listaElementi.append($nuovoElemento);
            
            // Svuoto il campo di input e riposiziono il cursore
            $campoInput.val("").focus();
        }
    }
    
    // =========================================================================
    // 1. GESTIONE DELL'INSERIMENTO (Click sul pulsante)
    // =========================================================================
    // Ricolleghiamo l'evento click al pulsante "Aggiungi"
    $pulsanteAggiungi.on('click', function () {
        aggiungiElemento();
    });

    // =========================================================================
    // 2. GESTIONE DELL'INSERIMENTO TRAMITE TASTIERA (Tasto Invio)
    // =========================================================================
    $campoInput.on('keypress', function (evento) {
        // Se il codice numerico del tasto premuto (which) è identico a 13, 
        // che corrisponde al codice ASCII del tasto "Invio" (Enter)
        if (evento.which === 13) {
            // Se l'utente preme Invio, invoca la funzione per aggiungere l'elemento
            aggiungiElemento();
        }
    });

    // =========================================================================
    // 3. GESTIONE DELLA RIMOZIONE DINAMICA (Click sugli elementi della lista)
    // =========================================================================
    $listaElementi.on('click', 'li', function () {
        $(this).remove();
    });
    
});