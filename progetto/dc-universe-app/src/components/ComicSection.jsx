import React from "react";

function ComicSection({ title, comics }) {
    return (
        /* Sezione principale per la visualizzazione delle raccolte di fumetti con spaziatura e sfondo */
        <section className="py-5 bg-white">
            <div className="container">
                {/* Titolo principale della sezione (es. In Evidenza o Più Popolari) */}
                <h2 className="section-main-title mb-4">{title}</h2>

                {/* Griglia responsive per la disposizione ordinata delle card dei fumetti */}
                <div className="row g-4">
                    {/* Iterazione dinamica sull'array di oggetti comics passato tramite props */}
                    {comics.map((comic) => (
                        <div key={comic.id} className="col-6 col-md-4 col-lg-3">
                            <div className="card h-100 border-0 comic-item-card text-center">
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

                                        {/* Sezione dedicata alla gestione dei prezzi e dello sconto */}
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
                                        </div>
                                    </div>

                                    {/* Pulsante d'azione per l'aggiunta del fumetto al carrello */}
                                    <button className="btn comic-cart-btn w-100 mt-2">
                                        AGGIUNGI AL CARRELLO
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ComicSection;
