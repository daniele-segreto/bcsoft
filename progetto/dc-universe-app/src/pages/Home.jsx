import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import PromoSection from "./../components/PromoSection";
import ComicSection from "./../components/ComicSection";
import { popularComics } from "../data/comicsData";
import { featuredComics } from "../data/comicsData";

function Home() {
    return (
        /* Sezione principale della Home con layout fluido e padding azzerato */
        <main className="container-fluid p-0">
            {/* Componente carosello principale posizionato sotto la navbar fissa */}
            <HeroCarousel />

            {/* Sezione promozionale */}
            <PromoSection />

            {/* Sezione In Evidenza (vengono passati 3 elementi tramite props) */}
            <ComicSection title="IN EVIDENZA" comics={featuredComics} />

            {/* Sezione Più Popolari (vengono passati 4 elementi tramite props) */}
            <ComicSection title="PIÙ POPOLARI" comics={popularComics} />
        </main>
    );
}

export default Home;
