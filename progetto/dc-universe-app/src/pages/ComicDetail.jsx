import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import {
  featuredComics,
  popularComics,
  supermanFamily,
  justiceLeague,
  gothamFamily,
  cinema,
  tvSeries,
  animatedSeries,
} from "../data/comicsData";

/* --- COMPONENTE PAGINA DETTAGLIO PRODOTTO (COMIC DETAIL) --- */
/* Gestisce la ricerca dinamica dell'articolo nell'archivio e visualizza la scheda dettagliata con opzioni di acquisto e preferiti */
function ComicDetail() {
  // Estrazione dell'ID dalla rotta dinamica e degli hook di navigazione
  const { id } = useParams();
  const navigate = useNavigate();
  // Estrazione delle funzioni per la gestione del carrello e dei preferiti
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Unione di tutti gli array del file comicsData.js in un unico grande archivio consultabile
  const allPortalItems = [
    ...featuredComics,
    ...popularComics,
    ...supermanFamily,
    ...justiceLeague,
    ...gothamFamily,
    ...cinema,
    ...tvSeries,
    ...animatedSeries,
  ];

  // Ricerca dell'elemento corrispondente confrontando l'ID (convertito in stringa per sicurezza)
  const foundItem = allPortalItems.find(
    (item) => item.id.toString() === id?.toString(),
  );

  // Fallback di sicurezza nel caso in cui l'ID non venga trovato nell'archivio
  const product = foundItem || {
    id: id || "1",
    title: "PRODOTTO DC UNIVERSE",
    category: "Collezione Ufficiale",
    ourPrice: "€ 28,96",
    coverPrice: "€ 47,88",
    discount: "SCONTO DEL 40%",
    image: "https://via.placeholder.com/400x600?text=DC+Universe",
    description:
      "Un'imperdibile opera ufficiale dell'Universo DC, curata nei minimi dettagli per collezionisti e appassionati di grandi storie eroiche.",
    releaseDate: "2026",
    pages: "160 pagine",
    publisher: "DC Comics",
  };

  const itemId = product.id;
  const currentFavorite = isFavorite(itemId);

  // Estrazione e pulizia del prezzo in formato numerico per il corretto funzionamento del carrello
  const rawPrice = product.ourPrice || "28.96";
  const numericPrice =
    typeof rawPrice === "number"
      ? rawPrice
      : parseFloat(
          rawPrice.toString().replace("€", "").replace(",", ".").trim(),
        ) || 28.96;

  return (
    /* Contenitore principale della pagina di dettaglio con spaziatura verticale e margine superiore per la navbar fissa */
    <main className="container py-5" style={{ marginTop: "70px" }}>
      {/* Riga per il pulsante di ritorno alla pagina precedente */}
      <div className="row mb-4">
        <div className="col-12">
          <button
            type="button"
            className="btn btn-outline-dark btn-sm fw-bold rounded-pill px-3 text-uppercase"
            onClick={() => navigate(-1)}
          >
            ← Torna Indietro
          </button>
        </div>
      </div>

      {/* Sezione principale con layout a due colonne (immagine e dettagli prodotto) */}
      <div className="row g-5 align-items-center bg-white p-4 p-lg-5 rounded-4 shadow-sm border-0">
        {/* Colonna Immagine in evidenza: leggermente ingrandita e con sfondo sfocato d'impatto */}
        <div className="col-lg-5 text-center">
          <div
            className="position-relative d-flex align-items-center justify-content-center overflow-hidden rounded-4 shadow mx-auto p-3"
            style={{
              maxWidth: "420px",
              minHeight: "520px",
              backgroundColor: "#000",
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Sfondo sfocato e reso più scuro per esaltare l'opera */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                backdropFilter: "blur(14px)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 1,
              }}
            ></div>

            {/* Immagine principale in primo piano con proporzioni originali e contrasto calibrato */}
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded-3 shadow-lg position-relative"
              style={{
                maxHeight: "480px",
                width: "auto",
                objectFit: "contain",
                zIndex: 2,
                filter: "contrast(1.08) saturate(1.05)",
              }}
            />
          </div>
        </div>

        {/* Colonna Informazioni testuali, prezzi e pulsanti di azione */}
        <div className="col-lg-7">
          {/* Badge della categoria */}
          <span className="badge bg-primary text-white text-uppercase fw-bold px-3 py-2 rounded-pill mb-3">
            {product.category || "Fumetti & Multimedia"}
          </span>

          {/* Titolo principale del prodotto */}
          <h1 className="fw-bold text-uppercase mb-3">{product.title}</h1>

          {/* Blocco Prezzo coerente con lo stile delle card del portale */}
          <div className="pricing-block my-3 p-3 bg-light rounded-3">
            <p className="our-price mb-1 fs-5 text-primary">
              IL TUO PREZZO: <strong>{product.ourPrice}</strong>
            </p>
            {product.coverPrice && (
              <p className="cover-price mb-1 text-muted">
                PREZZO DI COPERTINA:{" "}
                <span className="text-decoration-line-through">
                  {product.coverPrice}
                </span>
              </p>
            )}
            {product.discount && (
              <p className="discount-text mb-0 text-danger fw-bold">
                {product.discount}
              </p>
            )}
          </div>

          {/* Descrizione estesa del volume */}
          <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
            {product.description ||
              "Immergiti nelle atmosfere straordinarie dell'Universo DC con questo imperdibile volume da collezione."}
          </p>

          {/* Tabella riassuntiva con specifiche tecniche (Editore, Formato, Anno) */}
          <div className="row g-3 mb-4 text-muted small border-top border-bottom py-3">
            <div className="col-4">
              <strong>Editore:</strong> <br />
              {product.publisher || "DC Comics"}
            </div>
            <div className="col-4">
              <strong>Formato:</strong> <br />
              {product.pages || "Volume Illustrato"}
            </div>
            <div className="col-4">
              <strong>Anno:</strong> <br />
              {product.releaseDate || "2026"}
            </div>
          </div>

          {/* Pulsanti Interattivi per l'aggiunta al carrello e gestione dei preferiti */}
          <div className="d-flex gap-3 flex-wrap">
            {/* Pulsante di acquisto / aggiunta al carrello */}
            <button
              type="button"
              className="btn btn-success fw-bold rounded-pill px-4 py-3 text-uppercase shadow-sm flex-grow-1"
              onClick={() =>
                addToCart({
                  id: itemId,
                  title: product.title,
                  price: numericPrice,
                  image: product.image,
                  category: product.category || "Catalogo",
                })
              }
            >
              🛒 Aggiungi al Carrello
            </button>

            {/* Pulsante dinamico per aggiungere o rimuovere dai preferiti */}
            <button
              type="button"
              className={`btn fw-bold rounded-pill px-4 py-3 text-uppercase shadow-sm ${
                currentFavorite ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => toggleFavorite(product)}
            >
              {currentFavorite
                ? "❤️ Nei Preferiti"
                : "🤍 Aggiungi ai Preferiti"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComicDetail;
