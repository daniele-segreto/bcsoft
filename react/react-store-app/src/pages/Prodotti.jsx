import React, { useState, useEffect } from "react";
import { ProductCard } from "../components/ProductCard";
import Swal from "sweetalert2";

export function Prodotti() {
  // Stato locale per memorizzare l'elenco dei prodotti recuperati dall'API e lo stato di caricamento
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Al montaggio del componente, effettua la chiamata asincrona per recuperare i dati dal Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Disattiva lo spinner al termine del caricamento
      })
      .catch((err) => {
        console.error("Errore nel recupero dei prodotti:", err);
        setLoading(false);
      });
  }, []);

  // Gestore per aggiungere un prodotto alla Lista dei Desideri dell'utente autenticato
  const handleAddToWishlist = (product) => {
    // Verifica se vi è un utente attualmente loggato nel localStorage
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      // Mostra un avviso interattivo (SweetAlert2) se l'utente non è autenticato
      Swal.fire({
        title: "Accesso richiesto",
        text: "Deve effettuare l'accesso per aggiungere prodotti alla Sua Lista dei Desideri.",
        icon: "warning",
        confirmButtonText: "Vai al Login",
        confirmButtonColor: "#212529",
        background: "#ffffff",
        customClass: { popup: "rounded-4 shadow-sm" },
      });
      return;
    }

    // 1. Generazione di una chiave dinamica e univoca per il localStorage basata sull'email dell'utente loggato.
    // In questo modo, ogni utente avrà il suo spazio di memorizzazione isolato (es. "wishlist_dani@dani.it").
    const userWishlistKey = `wishlist_${loggedUser.email}`;

    // 2. Recupero dei dati attuali dal localStorage usando la chiave univoca appena creata.
    // JSON.parse() converte la stringa JSON memorizzata in un array di oggetti JavaScript.
    // L'operatore logico OR (|| []) funge da fallback di sicurezza: se nel localStorage non esiste ancora
    // alcuna wishlist per quell'utente (restituisce null/undefined), viene assegnato un array vuoto [] per evitare errori di runtime.
    const currentWishlist =
      JSON.parse(localStorage.getItem(userWishlistKey)) || [];

    // Controlla se il prodotto è già presente all'interno della lista dei desideri
    const exists = currentWishlist.some((item) => item.id === product.id);
    if (exists) {
      Swal.fire({
        title: "Già presente",
        text: "Questo prodotto è già presente nella Sua Lista dei Desideri.",
        icon: "info",
        confirmButtonText: "OK",
        confirmButtonColor: "#212529",
        background: "#ffffff",
        customClass: { popup: "rounded-4 shadow-sm" },
      });
      return;
    }

    // Aggiunge il nuovo prodotto alla lista e aggiorna la persistenza nel localStorage
    const updatedWishlist = [...currentWishlist, product];
    localStorage.setItem(userWishlistKey, JSON.stringify(updatedWishlist));

    // Notifica visiva di successo per l'operazione completata
    Swal.fire({
      title: "Aggiunto con successo",
      text: "Il prodotto è stato inserito nella Sua Lista dei Desideri.",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#212529",
      background: "#ffffff",
      customClass: { popup: "rounded-4 shadow-sm" },
    });
  };;

  // Renderizza uno spinner di caricamento finché i dati dell'API non sono pronti
  if (loading) {
    return (
      <div className="container my-5 text-center py-5">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Caricamento in corso...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-center">Catalogo Prodotti</h2>
      {/* Griglia responsive dei prodotti mappati tramite il componente ProductCard */}
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <ProductCard
              product={product}
              onAdd={() => handleAddToWishlist(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
