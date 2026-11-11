import React from "react";

// Componente riusoucile per la visualizzazione della singola card di un prodotto.
// Riceve in ingresso i dati del prodotto e le funzioni di callback (props) per gestire le azioni.
export function ProductCard({ product, onAdd, onRemove, isWishlistView }) {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white d-flex flex-column justify-content-between">
      {/* Sezione superiore della card: Immagine e dettagli testuali */}
      <div>
        {/* Contenitore grafico per "l'anteprima dell'immagine" del prodotto */}
        <div
          className="text-center py-3 bg-light rounded-3 mb-3"
          style={{ height: "200px" }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Badge testuale con la "categoria" del prodotto convertita in maiuscolo */}
        <span className="badge bg-secondary text-uppercase small mb-2">
          {product.category}
        </span>

        {/* "Titolo del prodotto" con troncamento automatico in caso di testo troppo lungo */}
        <h5
          className="fw-bold text-dark text-truncate mb-2"
          title={product.title}
        >
          {product.title}
        </h5>

        {/* "Descrizione del prodotto" limitata visivamente a un massimo di 2 righe tramite proprietà CSS webkit */}
        <p
          className="text-muted small mb-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>
      </div>

      {/* Sezione inferiore della card: Prezzo e pulsante d'azione dinamico */}
      <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
        {/* Visualizzazione del "prezzo" formattato in Euro */}
        <span className="fw-bold fs-5 text-dark">EUR {product.price}</span>

        {/* Render condizionale: se le cardi si trovano nella ListaDesideri mostra il tasto Rimuovi, altrimenti mostra Aggiungi */}
        {isWishlistView ? (
          <button
            onClick={onRemove}
            className="btn btn-outline-danger btn-sm rounded-pill px-3 py-2 fw-semibold"
          >
            Rimuovi
          </button>
        ) : (
          <button
            onClick={onAdd}
            className="btn btn-dark btn-sm rounded-pill px-3 py-2 fw-semibold"
          >
            Aggiungi ai Desideri
          </button>
        )}
      </div>
    </div>
  );
}
