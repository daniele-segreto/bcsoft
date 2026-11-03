import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import ComicSection from "./../components/ComicSection";
import { cinema } from "../data/comicsData";
import { tvSeries  } from "../data/comicsData";
import { animatedSeries } from "../data/comicsData";

function FilmSerie() {
    return (
        /* Contenitore principale della sezione film e serie TV con layout fluido e padding azzerato */
        <main className="container-fluid p-0">
            {/* Componente carosello condiviso posizionato sotto la navbar fissa */}
            <HeroCarousel />

            {/* Sezione Cinema */}
            <ComicSection title="CINEMA" comics={cinema} />

            {/* Sezione Serie TV */}
            <ComicSection title="SERIE TV" comics={tvSeries} />

            {/* Sezione Serie Animate */}
            <ComicSection title="SERIE ANIMATE" comics={animatedSeries} />
        </main>
    );
}

export default FilmSerie;
