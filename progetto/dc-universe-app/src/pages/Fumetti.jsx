import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import ComicSection from "./../components/ComicSection";
import { justiceLeague } from "../data/comicsData";
import { supermanFamily } from "../data/comicsData";
import { gothamFamily } from "../data/comicsData";

function Fumetti() {
    return (
        /* Contenitore principale della sezione fumetti con layout fluido e padding azzerato */
        <main className="container-fluid p-0">
            {/* Componente carosello condiviso posizionato sotto la navbar fissa */}
            <HeroCarousel />

            {/* Sezione Superman Family */}
            <ComicSection title="SUPERMAN FAMILY" comics={supermanFamily} />

            {/* Sezione Justice League */}
            <ComicSection title="JUSTICE LEAGUE" comics={justiceLeague} />

            {/* Sezione Gotham Family */}
            <ComicSection title="GOTHAM FAMILY" comics={gothamFamily} />
        </main>
    );
}

export default Fumetti;
