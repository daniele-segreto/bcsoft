import React, { createContext, useState } from "react";

/**
 * Creazione del Contesto globale (Context API).
 * Permette di definire un canale di comunicazione dati condiviso
 * accessibile a qualsiasi componente dell'albero senza il passaggio manuale delle props (prop drilling).
 */
export const ConsigliContext = createContext();

/**
 * Componente Provider del Contesto.
 * Gestisce lo stato globale dell'applicazione e mette a disposizione le funzioni
 * di manipolazione dei dati per tutti i componenti figli.
 */
export const ConsigliProvider = ({ children }) => {
  // Stato iniziale della lista dei consigli di vita ispirati a G.T.O.
  const [consigli, setConsigli] = useState([
    "Fai un giro in moto sotto la stelle per schiarirti le idee",
    "Urla i tuoi sogni dal tetto della scuola senza paura",
    "Ricordati che un vero insegnante impara sempre dai propri studenti",
    "Affronta i problemi a testa alta, proprio come a Shonan",
    "Prenditi una pausa e goditi un buon ramen istantaneo alle tre di notte",
    "Non seguire ciecamente le regole: usa il cuore e l'istinto",
    "Fai uno scherzo per scaricare lo stress, ma rimani sempre leale",
  ]);

  // Stato per tracciare il consiglio attualmente estratto e visualizzato in primo piano
  const [consiglioSelezionato, setConsiglioSelezionato] = useState(null);

  // Stato per il contatore globale delle interazioni (estrazioni totali effettuate)
  const [visualizzazioniTotali, setVisualizzazioniTotali] = useState(0);

  /**
   * Funzione per l'aggiunta di un nuovo consiglio.
   * Implementa la validazione del testo e la normalizzazione per prevenire duplicati.
   */
  const aggiungiConsiglio = (nuovoTesto) => {
    // Controllo di sicurezza: se la stringa è vuota o composta solo da spazi, interrompe l'esecuzione
    if (!nuovoTesto || !nuovoTesto.trim()) return;

    // Pulizia degli spazi superflui agli estremi
    const testoNormalizzato = nuovoTesto.trim();

    // Verifica dell'esistenza di un elemento identico (case-insensitive) per evitare duplicazioni
    const esiste = consigli.some(
      (c) => c.toLowerCase() === testoNormalizzato.toLowerCase(),
    );

    if (esiste) {
      console.log(
        `Il consiglio "${testoNormalizzato}" esiste già e non è stato aggiunto.`,
      );
      alert(`Il consiglio "${testoNormalizzato}" esiste già!`);
      return;
    }

    // Creazione di un nuovo array immutabile aggiungendo il nuovo consiglio
    const nuovaLista = [...consigli, testoNormalizzato];
    setConsigli(nuovaLista);

    // Log di controllo in console per il debugging
    console.log(`Nuovo consiglio aggiunto: "${testoNormalizzato}"`);
    console.log("Consigli attuali:", nuovaLista);
  };

  /**
   * Funzione per la rimozione di un consiglio.
   * Filtra l'array globale eliminando l'elemento selezionato e resetta la vista se attivo.
   */
  const rimuoviConsiglio = (consiglioDaRimuovere) => {
    /**
     * FILTRAGGIO DICHIARATIVO:
     * Il metodo .filter() analizza ogni elemento dell'array 'consigli'.
     * Gli elementi che NON superano il test logico (c !== consiglioDaRimuovere),
     * ovvero l'elemento che si intende eliminare, vengono scartati e NON inseriti
     * all'interno dell'array 'nuovaLista'.
     */
    const nuovaLista = consigli.filter((c) => c !== consiglioDaRimuovere);

    /**
     * AGGIORNAMENTO REATTIVO DELLO STATO:
     * Il setter 'setConsigli' riceve l'array 'nuovaLista' già depurato
     * dall'elemento escluso, notificando a React la necessità di aggiornare l'interfaccia.
     */
    setConsigli(nuovaLista);

    console.log(`Consiglio rimosso: "${consiglioDaRimuovere}"`);
    console.log("Consigli rimasti:", nuovaLista);

    // Se il consiglio rimosso coincide con quello attualmente in primo piano, azzera la selezione
    if (consiglioSelezionato === consiglioDaRimuovere) {
      setConsiglioSelezionato(null); // Mostra nuovamente "Nessun consiglio estratto..."
    }
  };

  /**
   * Funzione per l'estrazione casuale di un consiglio dalla lista.
   * Seleziona un indice randomico e incrementa contestualmente il contatore globale.
   */
  const estraiConsiglioCasuale = () => {
    if (consigli.length === 0) {
      alert("Nessun consiglio disponibile!");
      return;
    }

    const indiceCasuale = Math.floor(Math.random() * consigli.length);
    const estratto = consigli[indiceCasuale];

    setConsiglioSelezionato(estratto);

    // Aggiornamento funzionale del contatore delle visualizzazioni totali
    setVisualizzazioniTotali((prev) => {
      const nuovoTotale = prev + 1;
      console.log(`Consiglio estratto: "${estratto}"`);
      console.log(`Visualizzazioni totali: ${nuovoTotale}`);
      return nuovoTotale;
    });
  };

  return (
    // Esposizione dello stato e delle funzioni attraverso il Provider ai componenti discendenti
    <ConsigliContext.Provider
      value={{
        consigli,
        consiglioSelezionato,
        visualizzazioniTotali,
        aggiungiConsiglio,
        rimuoviConsiglio,
        estraiConsiglioCasuale,
      }}
    >
      {children}
    </ConsigliContext.Provider>
  );
};
