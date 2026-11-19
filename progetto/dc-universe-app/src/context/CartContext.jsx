import React, { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

/* --- CREAZIONE DEL CONTEXT PER IL CARRELLO --- */
const CartContext = createContext();

/* --- HOOK PERSONALIZZATO PER L'UTILIZZO DEL CARRELLO --- */
export const useCart = () => useContext(CartContext);

/* --- PROVIDER GLOBALE PER LA GESTIONE DEL CARRELLO E DEGLI ACQUISTI --- */
/* Gestisce l'aggiunta dei prodotti, l'aggiornamento delle quantità, la rimozione, lo svuotamento e la persistenza locale legata all'utente autenticato */
export function CartProvider({ children }) {
  // Estrazione dell'utente attualmente loggato, esattamente come definito nell'AuthContext
  const { loggedUser } = useAuth();

  // Funzione per ricavare una chiave univoca nel localStorage per ogni utente (es. "dc_cart_daniele89")
  const getCartKey = (user) => {
    if (!user) return "dc_cart_guest";
    const identifier = user.username || user.email || user.id || "guest";
    return `dc_cart_${identifier.toString().trim().toLowerCase()}`;
  };

  const currentKey = getCartKey(loggedUser);

  // Inizializzazione dello stato del carrello leggendo i dati salvati nel localStorage per l'utente corrente
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(currentKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // useEffect per ricaricare istantaneamente i prodotti del carrello ogni volta che l'utente effettua il login o il logout
  useEffect(() => {
    try {
      const saved = localStorage.getItem(currentKey);
      setCartItems(saved ? JSON.parse(saved) : []);
    } catch (e) {
      setCartItems([]);
    }
  }, [currentKey]);

  // Helper interno per aggiornare contemporaneamente lo stato e il localStorage dell'utente attivo (previene sovrascritture nei cambi profilo)
  const updateCartAndStorage = (newItems) => {
    setCartItems(newItems);
    try {
      localStorage.setItem(currentKey, JSON.stringify(newItems));
    } catch (e) {
      console.error("Errore salvataggio carrello", e);
    }
  };

  // Funzione per aggiungere un prodotto al carrello o incrementarne la quantità se già presente
  const addToCart = (product) => {
    const productId = product.id || product.title || product.name;
    const existingIndex = cartItems.findIndex(
      (item) => (item.id || item.title || item.name) === productId,
    );

    let updatedItems;
    if (existingIndex > -1) {
      // Se il prodotto esiste già, incrementa la quantità di 1
      updatedItems = [...cartItems];
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        quantity: (updatedItems[existingIndex].quantity || 1) + 1,
      };
    } else {
      // Se il prodotto è nuovo, lo aggiunge con quantità iniziale pari a 1 e prezzo normalizzato
      updatedItems = [
        ...cartItems,
        {
          ...product,
          price: Number(product.price) || 14.99,
          quantity: 1,
        },
      ];
    }
    updateCartAndStorage(updatedItems);
  };

  // Funzione per aggiornare la quantità di un articolo specifico (incremento o decremento tramite delta)
  const updateQuantity = (productId, delta) => {
    const updatedItems = cartItems
      .map((item) => {
        const currentId = item.id || item.title || item.name;
        if (currentId === productId) {
          return { ...item, quantity: (item.quantity || 1) + delta };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Rimuove automaticamente l'articolo se la quantità scende a zero

    updateCartAndStorage(updatedItems);
  };

  // Funzione per rimuovere completamente un articolo dal carrello tramite il suo identificativo
  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter(
      (item) => (item.id || item.title || item.name) !== productId,
    );
    updateCartAndStorage(updatedItems);
  };

  // Funzione per svuotare interamente il carrello e ripulire il localStorage associato
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem(currentKey);
  };

  // Calcolo derivato del numero totale di pezzi presenti nel carrello
  const totalItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0,
  );

  // Calcolo derivato del prezzo totale complessivo di tutti gli articoli
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1),
    0,
  );

  return (
    /* Fornitore del contesto che espone lo stato e tutte le funzioni di gestione ai componenti figli */
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
