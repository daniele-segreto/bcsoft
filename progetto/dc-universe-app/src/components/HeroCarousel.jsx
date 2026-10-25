import React from "react";

// Importazione diretta delle immagini di sfondo dalla cartella degli asset locali
import batmanHero from "../assets/img/carousel/batman.jpg";
import supermanHero from "../assets/img/carousel/superman.jpg";
import harleyHero from "../assets/img/carousel/harley.jpg";

function HeroCarousel() {
    return (
        /* Contenitore principale del carosello con transizione sfumata e margine superiore per distanziarlo dalla navbar fissa */
        <div
            id="dcHeroCarousel"
            className="carousel slide carousel-fade mb-5 w-100 p-0"
            data-bs-ride="carousel"
            style={{ marginTop: "75px" }}
        >
            {/* Indicatori di navigazione posizionati nella parte inferiore */}
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#dcHeroCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#dcHeroCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#dcHeroCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            {/* Contenitore interno che racchiude tutte le slide del carosello */}
            <div className="carousel-inner w-100">
                {/* Slide 1: Dedicata a Batman */}
                <div
                    className="carousel-item active w-100"
                    style={{
                        backgroundImage: `url(${batmanHero})`,
                        height: "520px",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                >
                    <div className="hero-overlay d-flex align-items-center h-100 w-100">
                        <div className="container text-white px-4 px-md-5">
                            <h1 className="display-3 fw-black text-uppercase tracking-wide">
                                DC SUBSCRIPTIONS
                            </h1>
                            <p className="fs-2 fw-bold text-uppercase mb-4">
                                L'oscurità non è un rifugio, è un'arma nelle mani della
                                giustizia
                            </p>
                            <button className="btn btn-outline-light rounded-pill px-5 py-2 fs-5 text-uppercase fw-bold border-2">
                                ACQUISTA ORA!
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide 2: Dedicata a Superman */}
                <div
                    className="carousel-item w-100"
                    style={{
                        backgroundImage: `url(${supermanHero})`,
                        height: "520px",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                >
                    <div className="hero-overlay d-flex align-items-center h-100 w-100">
                        <div className="container text-white px-4 px-md-5">
                            <h1 className="display-3 fw-black text-uppercase tracking-wide">
                                BATMAN
                            </h1>
                            <p className="fs-2 fw-bold text-uppercase mb-4">
                                Un simbolo di speranza
                            </p>
                            <button className="btn btn-outline-light rounded-pill px-5 py-2 fs-5 text-uppercase fw-bold border-2">
                                ACQUISTA ORA!
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slide 3: Dedicata a Harley Quinn */}
                <div
                    className="carousel-item w-100"
                    style={{
                        backgroundImage: `url(${harleyHero})`,
                        height: "520px",
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                    }}
                >
                    <div className="hero-overlay d-flex align-items-center h-100 w-100">
                        <div className="container text-white px-4 px-md-5">
                            <h1 className="display-3 fw-black text-uppercase tracking-wide">
                                HARLEY QUINN
                            </h1>
                            <p className="fs-2 fw-bold text-uppercase mb-4">
                                La regina indiscussa del brivido
                            </p>
                            <button className="btn btn-outline-light rounded-pill px-5 py-2 fs-5 text-uppercase fw-bold border-2">
                                ACQUISTA ORA!
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pulsante di controllo laterale per la diapositiva precedente */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#dcHeroCarousel"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon rounded-circle bg-dark bg-opacity-50 p-3"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Precedente</span>
            </button>

            {/* Pulsante di controllo laterale per la diapositiva successiva */}
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#dcHeroCarousel"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon rounded-circle bg-dark bg-opacity-50 p-3"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Successivo</span>
            </button>
        </div>
    );
}

export default HeroCarousel;
