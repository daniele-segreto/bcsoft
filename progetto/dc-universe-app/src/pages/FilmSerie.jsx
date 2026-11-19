import React from "react";
import Hero from "../components/Hero";
import ComicSection from "./../components/ComicSection";
import { cinema, tvSeries, animatedSeries } from "../data/comicsData";

/* --- COMPONENTE PAGINA FILM E SERIE TV --- */
/* Gestisce la visualizzazione del catalogo multimediale suddiviso in Cinema, Serie TV e Serie Animate */
function FilmSerie() {
  return (
    /* Contenitore principale della sezione film e serie TV con layout fluido e padding azzerato */
    <main className="container-fluid p-0">
      {/* Componente carosello condiviso posizionato sotto la navbar fissa */}
      <Hero />

      {/* Sezione dedicata alle produzioni cinematografiche dell'Universo DC */}
      <ComicSection title="CINEMA" comics={cinema} />

      {/* Sezione dedicata alle serie televisive live-action */}
      <ComicSection title="SERIE TV" comics={tvSeries} />

      {/* Sezione dedicata alle serie animate e alle produzioni animate di genere */}
      <ComicSection title="SERIE ANIMATE" comics={animatedSeries} />
    </main>
  );
}

export default FilmSerie;
