import React, { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function ListaDesideri() {
  // Stati locali per memorizzare i prodotti della wishlist e i dati dell'utente corrente
  const [wishlist, setWishlist] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Al montaggio del componente, recupera l'utente loggato e carica la sua wishlist dedicata dal localStorage
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser && loggedUser.email) {
      setCurrentUser(loggedUser);
      // Costruisce la chiave univoca basata sull'email per isolare i dati dell'utente
      const userWishlistKey = `wishlist_${loggedUser.email}`;
      const savedWishlist =
        JSON.parse(localStorage.getItem(userWishlistKey)) || [];
      setWishlist(savedWishlist);
    }
  }, []);

  // Gestore per "rimuovere" un prodotto specifico dalla Lista dei Desideri
  const handleRemoveFromWishlist = (productId) => {
    if (!currentUser) return;

    // Filtra l'array escludendo il prodotto con l'id corrispondente
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);

    // Aggiorna la persistenza nel localStorage utilizzando la chiave univoca dell'utente
    const userWishlistKey = `wishlist_${currentUser.email}`;
    localStorage.setItem(userWishlistKey, JSON.stringify(updatedWishlist));

    // Notifica visiva di successo tramite SweetAlert2
    Swal.fire({
      title: "Prodotto rimosso",
      text: "L'articolo è stato rimosso dalla Sua Lista dei Desideri.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#212529",
      background: "#ffffff",
      customClass: { popup: "rounded-4 shadow-sm" },
    });
  };

  // Render condizionale: se la wishlist è vuota, mostra un messaggio dedicato con invito all'esplorazione del catalogo
  if (wishlist.length === 0) {
    return (
      <div className="container my-5 py-5 text-center">
        <div className="bg-white p-5 rounded-4 shadow-sm d-inline-block">
          <h2 className="fw-bold mb-3">La Sua Lista dei Desideri è vuota</h2>
          <p className="text-muted mb-4">
            Non ha ancora salvato alcun prodotto di Suo gradimento.
          </p>
          <Link
            to="/prodotti"
            className="btn btn-warning text-dark px-4 py-2 rounded-pill fw-bold shadow-sm"
          >
            Esplora i Prodotti
          </Link>
        </div>
      </div>
    );
  }

  // Vista principale con la griglia dei prodotti salvati nella wishlist
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-center">La Sua Lista dei Desideri</h2>
      <div className="row g-4">
        {wishlist.map((product) => (
          <div key={product.id} className="col-md-4">
            {/* Passa il prodotto, la funzione di callback per la rimozione e il flag booleano per attivare la modalità wishlist nella card */}
            <ProductCard
              product={product}
              onRemove={() => handleRemoveFromWishlist(product.id)}
              isWishlistView={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
