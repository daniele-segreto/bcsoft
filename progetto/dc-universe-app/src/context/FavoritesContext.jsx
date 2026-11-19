import React, { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

/* --- CREAZIONE DEL CONTEXT PER I PREFERITI --- */
const FavoritesContext = createContext();

/* --- HOOK PERSONALIZZATO PER L'UTILIZZO DEI PREFERITI --- */
export const useFavorites = () => useContext(FavoritesContext);

/* --- PROVIDER GLOBALE PER LA GESTIONE DEI PREFERITI --- */
/* Gestisce il salvataggio, la rimozione, la verifica e la persistenza locale dei preferiti associati all'utente attivo */
export function FavoritesProvider({ children }) {
  // Estrazione dell'utente attualmente autenticato dal contesto di autenticazione
  const { loggedUser } = useAuth();

  // Funzione per generare una chiave univoca basata sull'utente loggato (es. "dc_favorites_marco67")
  const getFavoritesKey = (user) => {
    if (!user) return "dc_favorites_guest";
    const identifier = user.username || user.email || user.id || "guest";
    return `dc_favorites_${identifier.toString().trim().toLowerCase()}`;
  };

  const currentKey = getFavoritesKey(loggedUser);

  // Inizializzazione dello stato dei preferiti leggendo i dati salvati nel localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(currentKey);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // useEffect per ricaricare istantaneamente i preferiti corretti ogni volta che cambia l'utente attivo (login/logout)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(currentKey);
      setFavorites(saved ? JSON.parse(saved) : []);
    } catch (e) {
      setFavorites([]);
    }
  }, [currentKey]);

  // Funzione per aggiungere o rimuovere un elemento dalla lista dei preferiti (Toggle)
  const toggleFavorite = (item) => {
    const itemId = item.id || item.title || item.name;
    const exists = favorites.some(
      (fav) => (fav.id || fav.title || fav.name) === itemId,
    );

    // Se l'elemento è già presente viene rimosso, altrimenti viene aggiunto
    const updatedFavorites = exists
      ? favorites.filter((fav) => (fav.id || fav.title || fav.name) !== itemId)
      : [...favorites, item];

    // Aggiornamento dello stato locale e persistenza immediata su localStorage
    setFavorites(updatedFavorites);
    try {
      localStorage.setItem(currentKey, JSON.stringify(updatedFavorites));
    } catch (e) {
      console.error("Errore salvataggio preferiti", e);
    }
  };

  // Funzione di supporto per verificare se un determinato articolo si trova nei preferiti
  const isFavorite = (itemId) => {
    return favorites.some(
      (fav) => (fav.id || fav.title || fav.name) === itemId,
    );
  };

  return (
    /* Fornitore del contesto che espone lo stato e le funzioni ai componenti figli */
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
