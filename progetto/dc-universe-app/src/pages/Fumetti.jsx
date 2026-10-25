import React from "react";
import HeroCarousel from "../components/HeroCarousel";

function Fumetti() {
    return (
        /* Contenitore principale della sezione fumetti con layout fluido e padding azzerato */
        <main className="container-fluid p-0">
            {/* Componente carosello condiviso posizionato sotto la navbar fissa */}
            <HeroCarousel />

            {/* Blocco dei contenuti specifici della pagina dedicata ai fumetti */}
            <div className="container py-5">
                <h2 className="mb-4">Eroi e Leggende</h2>
                <p>Sezione dedicata ai fumetti dell'universo DC.</p>
            </div>
        </main>
    );
}

export default Fumetti;
