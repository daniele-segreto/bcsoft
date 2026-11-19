import React from "react";
import Hero from "../components/Hero";
import ComicSection from "./../components/ComicSection";
import {
  justiceLeague,
  supermanFamily,
  gothamFamily,
} from "../data/comicsData";

/* --- COMPONENTE PAGINA FUMETTI --- */
/* Gestisce la visualizzazione del catalogo completo dei fumetti suddiviso per famiglie e collane tematiche */
function Fumetti() {
  return (
    /* Contenitore principale della sezione fumetti con layout fluido e padding azzerato */
    <main className="container-fluid p-0">
      {/* Componente carosello dinamico e condiviso posizionato sotto la navbar fissa */}
      <Hero />

      {/* Sezione dedicata alla famiglia di Superman con i relativi volumi in evidenza */}
      <ComicSection title="SUPERMAN FAMILY" comics={supermanFamily} />

      {/* Sezione dedicata alla Justice League con le saghe dei principali eroi */}
      <ComicSection title="JUSTICE LEAGUE" comics={justiceLeague} />

      {/* Sezione dedicata alla famiglia di Gotham con le storie di Batman e alleati */}
      <ComicSection title="GOTHAM FAMILY" comics={gothamFamily} />
    </main>
  );
}

export default Fumetti;
