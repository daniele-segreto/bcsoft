import React from "react";
import HeroCarousel from "../components/HeroCarousel";

function FilmSerie() {
    return (
        /* Contenitore principale della sezione film e serie TV con layout fluido e padding azzerato */
        <main className="container-fluid p-0">
            {/* Componente carosello condiviso posizionato sotto la navbar fissa */}
            <HeroCarousel />

            {/* Blocco dei contenuti specifici della pagina dedicata al cinema e alle serie TV DC */}
            <div className="container py-5">
                <h2 className="mb-4">Film e Serie TV</h2>
                <p>Sezione dedicata al cinema e alle serie tv dell'universo DC.</p>
            </div>
        </main>
    );
}

export default FilmSerie;
