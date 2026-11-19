import React from "react";
import { useLocation, Link } from "react-router-dom";

// Importazione dei dati centralizzati dei contenuti e delle immagini locali di sfondo
import { heroContentData } from "../data/comicsData";
import batmanHero from "../assets/img/carousel/batman.jpg";
import supermanHero from "../assets/img/carousel/superman.jpg";
import harleyHero from "../assets/img/carousel/harley.jpg";

/* --- COMPONENTE CAROSELLO / BANNER PRINCIPALE (HERO CAROUSEL) --- */
/* Gestisce la visualizzazione dinamica del banner di copertina in base alla rotta corrente, integrando sfondi personalizzati e call-to-action */
function Hero() {
  const location = useLocation();

  // Mappa delle immagini locali associata alle chiavi testuali definite in comicsData.js
  const imageMap = {
    batman: batmanHero,
    superman: supermanHero,
    harley: harleyHero,
  };

  // Recupera i dati della hero in base al percorso corrente della pagina, con fallback al valore predefinito
  const currentHero =
    heroContentData[location.pathname] || heroContentData["default"];
  const selectedImage = imageMap[currentHero.imageKey] || batmanHero;

  return (
    /* Contenitore principale del banner posizionato sotto la navbar fissa */
    <div
      className="container-fluid p-0 mb-5 w-100 p-0"
      style={{ marginTop: "75px" }}
    >
      {/* Sfondo dinamico con gradiente scuro sovrapposto per garantire la leggibilità del testo */}
      <div
        className="position-relative w-100 d-flex align-items-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedImage})`,
          height: "520px",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="container px-4 px-md-5 z-1">
          <div className="row">
            <div className="col-lg-8">
              {/* Titolo principale dinamico della hero */}
              <h1 className="display-3 fw-black text-uppercase tracking-wide mb-2">
                {currentHero.title}
              </h1>

              {/* Sottotitolo descrittivo in evidenza */}
              <p className="fs-2 fw-bold text-uppercase mb-4 text-light">
                "{currentHero.subtitle}"
              </p>

              {/* Pulsante di call-to-action (CTA) collegato alla rotta specifica */}
              <div>
                <Link
                  to={currentHero.btnLink}
                  className="btn btn-outline-light rounded-pill px-5 py-2 fs-5 text-uppercase fw-bold border-2 shadow-sm"
                >
                  {currentHero.btnText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
