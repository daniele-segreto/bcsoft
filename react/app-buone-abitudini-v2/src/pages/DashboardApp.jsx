import React, { useContext } from "react";
// Importazione del contesto globale per accedere allo stato e alle funzioni dell'applicazione
import { ConsigliContext } from "../context/ConsigliContext";
// Importazione dei sotto-componenti atomici dalla cartella components
import FormInserimento from "../components/FormInserimento";
import VisualizzaConsiglio from "../components/VisualizzaConsiglio";
import ListaConsigli from "../components/ListaConsigli";
import ContenutoLista from "../components/ContenutoLista";
// Importazione dell'Higher Order Component per la limitazione degli elementi
import hocWithLimit from "../hoc/withLimit";

/**
 * Applicazione dell'Higher Order Component (HOC) 'withLimit' al componente 'ContenutoLista'.
 * Impone un vincolo strutturale che limita la visualizzazione a un massimo di 10 elementi.
 */
const ListaConsigliLimitata = hocWithLimit(ContenutoLista, 10);

/**
 * Componente DashboardApp (Vista principale).
 * Funziona da contenitore logico di livello superiore (Page/Layout).
 * Estrae lo stato globale tramite la Context API e gestisce la disposizione visiva
 * di tutti i moduli grafici con uno stile tematico ispirato a G.T.O.
 */
export default function DashboardApp() {
  // Estrazione delle proprietà e delle funzioni necessarie dal Context globale
  const { visualizzazioniTotali, estraiConsiglioCasuale, consigli } =
    useContext(ConsigliContext);

  return (
    <div
      className="min-vh-100 py-5 px-3"
      style={{
        // Sfumatura di sfondo personalizzata (stile G.T.O.)
        background: "linear-gradient(135deg, #ff5e00 0%, #111111 100%)",
      }}
    >
      <div
        className="container bg-dark px-5 py-5 rounded-5 shadow-lg"
        style={{ maxWidth: "650px" }}
      >
        {/* Intestazione tematica con immagine del profilo e badge descrittivo */}
        <header className="text-center mb-4">
          <div className="mb-3">
            <img
              src="https://movieplayer.net-cdn.it/t/images/2026/05/01/gto_jpg_1280x720_crop_q85.jpg"
              alt="Great Teacher Onizuka"
              className="rounded-circle shadow-lg border border-4 border-warning"
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
            />
          </div>
          <h1 className="display-6 fw-black">
            G.T.O. - Lezioni di Vita & Relax a Shonan 🏍️
          </h1>
          <p className="text-white fw-bold bg-danger d-inline-block px-3 py-1 rounded-pill mt-2 border border-light">
            "Ascolta il Professor Onizuka e raddrizza la giornata!"
          </p>
        </header>

        {/* Sezione del Form per l'inserimento di nuovi consigli (con validazione duplicati) */}
        <div className="card p-3 mb-4 bg-warning rounded-4">
          <FormInserimento />
        </div>

        {/* Pulsante d'interazione per l'estrazione casuale di una massima di vita */}
        <div className="d-grid gap-2 mb-3">
          <button
            onClick={estraiConsiglioCasuale}
            className="btn btn-success btn-lg rounded-pill shadow fw-bold text-uppercase border border-white py-3"
            style={{ letterSpacing: "2px" }}
          >
            ⚡ Estrai Massima di Vita
          </button>
        </div>

        {/* Badge di visualizzazione del contatore globale delle interazioni */}
        <div className="text-center mb-4">
          <span className="badge bg-light text-dark fs-5 px-4 py-2 rounded-pill border border-dark fw-bold shadow-sm">
            Lezioni impartite (Visualizzazioni): {visualizzazioniTotali}
          </span>
        </div>

        {/* Componente dinamico per la visualizzazione e la rimozione del consiglio estratto */}
        <VisualizzaConsiglio />

        {/* Sezione tabellone dei consigli che sfrutta i componenti contenitori e la prop 'children' */}
        <div className="mt-4">
          <h4 className="text-center text-white mb-3 fw-bold">
            📜 Tabellone delle Abitudini di Shonan
          </h4>
          <ListaConsigli>
            {/* Passaggio della lista limitata tramite HOC all'interno della prop children */}
            <ListaConsigliLimitata consigli={consigli} />
          </ListaConsigli>
        </div>
      </div>
    </div>
  );
}
