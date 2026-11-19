import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

/* --- COMPONENTE SEZIONE RACCOLTA FUMETTI (COMIC SECTION) --- */
/* Gestisce la visualizzazione a griglia delle collezioni di fumetti, inclusi i prezzi, gli sconti, il pulsante dei preferiti e l'aggiunta al carrello */
function ComicSection({ title, comics }) {
  // Estrazione delle funzioni dai contesti globali del carrello e dei preferiti
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    /* Sezione principale per la visualizzazione delle raccolte di fumetti con spaziatura verticale e sfondo bianco */
    <section className="py-5 bg-white">
      <div className="container">
        {/* Titolo principale della sezione (es. In Evidenza o Più Popolari) */}
        <h2 className="section-main-title mb-4">{title}</h2>

        {/* Griglia responsive per la disposizione ordinata delle card dei fumetti */}
        <div className="row g-4">
          {/* Iterazione dinamica sull'array di oggetti comics passato tramite props */}
          {comics &&
            comics.map((comic) => {
              const itemId = comic.id || comic.title;

              // Estrazione e pulizia del prezzo per la corretta gestione nel carrello
              const rawPrice = comic.ourPrice || comic.price || "14.99";
              const numericPrice =
                typeof rawPrice === "number"
                  ? rawPrice
                  : parseFloat(
                      rawPrice
                        .toString()
                        .replace("€", "")
                        .replace(",", ".")
                        .trim(),
                    ) || 14.99;

              // Verifica se l'articolo è attualmente nei preferiti dell'utente attivo
              const liked = isFavorite(itemId);

              return (
                <div key={itemId} className="col-6 col-md-4 col-lg-3">
                  <div className="card h-100 border-0 comic-item-card text-center position-relative">
                    {/* Pulsante preferiti posizionato in alto a destra sulla card */}
                    <button
                      type="button"
                      className={`btn btn-sm position-absolute top-0 end-0 m-2 rounded-circle shadow-sm ${liked ? "btn-danger" : "btn-light"}`}
                      style={{ zIndex: 2, width: "35px", height: "35px" }}
                      onClick={() => toggleFavorite(comic)}
                      title={
                        liked
                          ? "Rimuovi dai preferiti"
                          : "Aggiungi ai preferiti"
                      }
                    >
                      ♥
                    </button>

                    {/* Contenitore grafico della copertina del fumetto */}
                    <div className="comic-img-container mb-3">
                      <img
                        src={comic.image}
                        alt={comic.title}
                        className="img-fluid comic-cover"
                      />
                    </div>

                    {/* Blocco dei dettagli descrittivi e commerciali del prodotto */}
                    <div className="card-body p-0 d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="comic-title">{comic.title}</h5>

                        {/* Sezione dedicata alla gestione dei prezzi, degli sconti e del link al dettaglio */}
                        <div className="pricing-block my-2">
                          <p className="our-price mb-1">
                            IL TUO PREZZO: <strong>{comic.ourPrice}</strong>
                          </p>
                          <p className="cover-price mb-1">
                            PREZZO DI COPERTINA:{" "}
                            <span className="text-decoration-line-through">
                              {comic.coverPrice}
                            </span>
                          </p>
                          <p className="discount-text mb-2">{comic.discount}</p>

                          {/* Link per accedere alla pagina di dettaglio del singolo fumetto */}
                          <div className="mt-1 px-3">
                            <Link
                              to={`/fumetti/${itemId}`}
                              className="text-decoration-none text-muted small fw-bold text-uppercase d-block w-100 py-1 rounded"
                              style={{
                                fontSize: "0.75rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              🔍 Vedi Dettagli
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Pulsante d'azione per l'aggiunta rapida del fumetto al carrello */}
                      <button
                        className="btn comic-cart-btn w-100 mt-2"
                        onClick={() =>
                          addToCart({
                            id: itemId,
                            title: comic.title,
                            price: numericPrice,
                            image: comic.image,
                            category: title,
                          })
                        }
                      >
                        AGGIUNGI AL CARRELLO
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ComicSection;
