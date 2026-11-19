import React from "react";
import Hero from "../components/Hero";
import PromoSection from "./../components/PromoSection";
import ComicSection from "./../components/ComicSection";
import { popularComics, featuredComics } from "../data/comicsData";

/* --- COMPONENTE HOME PAGE --- */
/* Rappresenta la pagina principale del portale, organizzata in blocchi tematici fluidi */
function Home() {
  return (
    /* Sezione principale della Home con layout fluido e padding azzerato per un corretto allineamento */
    <main className="container-fluid p-0">
      {/* Componente carosello dinamico della Hero posizionato in cima alla pagina */}
      <Hero />

      {/* Sezione promozionale con offerte e sconti attivi */}
      <PromoSection />

      {/* Sezione In Evidenza (vengono passati i 3 elementi principali tramite la prop 'comics') */}
      <ComicSection title="IN EVIDENZA" comics={featuredComics} />

      {/* Sezione Più Popolari (vengono passati i 4 elementi di punta tramite la prop 'comics') */}
      <ComicSection title="PIÙ POPOLARI" comics={popularComics} />
    </main>
  );
}

export default Home;
