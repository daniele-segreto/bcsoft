import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* --- COMPONENTE GESTIONE CARRELLO E CHECKOUT (CART) --- */
/* Gestisce la visualizzazione dei prodotti aggiunti, la modifica delle quantità, il calcolo dei subtotali, lo svuotamento e la simulazione del checkout */
function Cart() {
  // Estrazione delle funzioni e dello stato globale dal CartContext
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();

  // Stato locale per gestire la visualizzazione dell'avviso di avvenuto ordine
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Funzione per simulare il completamento dell'acquisto (checkout)
  const handleCheckout = () => {
    clearCart();
    setOrderSuccess(true);
  };

  return (
    /* Contenitore principale della pagina carrello con spaziatura verticale */
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Card principale contenente il riepilogo degli acquisti */}
          <div className="card promo-card p-4 rounded-4 shadow-sm border-0">
            <h2 className="promo-title mb-4">🛒 Carrello Acquisti</h2>

            {/* Messaggio di successo condizionale visualizzato dopo il checkout */}
            {orderSuccess && (
              <div
                className="alert alert-success text-center rounded-3 mb-4"
                role="alert"
              >
                <strong>Ordine completato con successo!</strong> Grazie per aver
                acquistato sul portale DC Universe.
              </div>
            )}

            {/* Verifica condizionale: mostra la tabella se ci sono articoli, altrimenti mostra lo stato vuoto */}
            {cartItems.length > 0 ? (
              <div>
                {/* Tabella responsive con i dettagli dei prodotti nel carrello */}
                <div className="table-responsive mb-4">
                  <table className="table align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Prodotto</th>
                        <th>Prezzo Unitario</th>
                        <th className="text-center">Quantità</th>
                        <th className="text-end">Subtotale</th>
                        <th className="text-center">Azioni</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => {
                        // Estrazione sicura dell'identificativo e normalizzazione dei valori numerici
                        const itemId = item.id || item.title || item.name;
                        const unitPrice = Number(item.price) || 0;
                        const qty = item.quantity || 1;

                        return (
                          <tr key={itemId || index}>
                            {/* Colonna Prodotto con immagine e titolo/categoria */}
                            <td>
                              <div className="d-flex align-items-center gap-3">
                                {item.image && (
                                  <img
                                    src={item.image}
                                    alt={item.title || item.name}
                                    className="rounded"
                                    style={{
                                      width: "50px",
                                      height: "70px",
                                      objectFit: "cover",
                                    }}
                                  />
                                )}
                                <div>
                                  <div className="fw-bold text-dark">
                                    {item.title || item.name}
                                  </div>
                                  {item.category && (
                                    <small className="text-muted text-uppercase">
                                      {item.category}
                                    </small>
                                  )}
                                </div>
                              </div>
                            </td>

                            {/* Prezzo unitario formattato */}
                            <td>€ {unitPrice.toFixed(2)}</td>

                            {/* Gestione incrementale e decrementale della quantità */}
                            <td>
                              <div className="d-flex justify-content-center align-items-center gap-2">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary fw-bold px-2"
                                  onClick={() => updateQuantity(itemId, -1)}
                                >
                                  -
                                </button>
                                <span className="fw-bold px-2">{qty}</span>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary fw-bold px-2"
                                  onClick={() => updateQuantity(itemId, 1)}
                                >
                                  +
                                </button>
                              </div>
                            </td>

                            {/* Subtotale calcolato per singolo articolo */}
                            <td className="text-end fw-bold">
                              € {(unitPrice * qty).toFixed(2)}
                            </td>

                            {/* Pulsante di rimozione dell'articolo */}
                            <td className="text-center">
                              <button
                                type="button"
                                className="btn btn-sm btn-outline-danger rounded-pill px-3"
                                onClick={() => removeFromCart(itemId)}
                              >
                                Rimuovi
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Blocco di riepilogo del totale complessivo */}
                <div className="d-flex justify-content-between align-items-center border-top pt-3 mb-4">
                  <h4 className="fw-bold mb-0">Totale Complessivo:</h4>
                  <h3 className="fw-bold text-primary mb-0">
                    € {totalPrice.toFixed(2)}
                  </h3>
                </div>

                {/* Pulsanti di azione globale (Svuota carrello e Procedi al checkout) */}
                <div className="d-flex flex-wrap gap-2 justify-content-between">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="btn btn-outline-danger fw-bold rounded-pill px-4"
                  >
                    Svuota Carrello
                  </button>
                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="btn btn-success fw-bold rounded-pill px-5 text-uppercase shadow-sm"
                  >
                    Procedi al Checkout
                  </button>
                </div>
              </div>
            ) : (
              /* Vista alternativa visualizzata quando il carrello è vuoto */
              <div className="text-center py-5">
                <p className="text-muted fs-5 mb-4">
                  Il tuo carrello degli acquisti è attualmente vuoto.
                </p>
                <Link
                  to="/fumetti"
                  className="btn btn-primary fw-bold rounded-pill px-5 py-2 text-uppercase shadow-sm"
                >
                  Esplora i Fumetti
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
