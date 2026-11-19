import React, { createContext, useState, useEffect, useContext } from "react";

/* --- CREAZIONE DEL CONTEXT PER L'AUTENTICAZIONE --- */
const AuthContext = createContext();

/* --- HOOK PERSONALIZZATO PER L'UTILIZZO DELL'AUTENTICAZIONE --- */
export const useAuth = () => useContext(AuthContext);

/* --- PROVIDER GLOBALE PER LA GESTIONE DEGLI UTENTI E DEI MODALI --- */
/* Gestisce lo stato dell'utente loggato, la persistenza su localStorage, le funzioni di login/logout e il tracciamento dei modali Bootstrap attivi */
export function AuthProvider({ children }) {
  // Inizializzazione dello stato dell'utente loggato leggendo l'eventuale sessione salvata in localStorage
  const [loggedUser, setLoggedUser] = useState(() => {
    const savedUser = localStorage.getItem("dc_logged_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Stato per tracciare quale modale di autenticazione (login o registrazione) è attualmente aperto nell'interfaccia
  const [activeModal, setActiveModal] = useState(null);

  // useEffect per sincronizzare gli eventi di apertura e chiusura dei modali Bootstrap con lo stato React `activeModal`
  useEffect(() => {
    const registerModalEl = document.getElementById("registerModal");
    const loginModalEl = document.getElementById("loginModal");

    // Funzioni di gestione per aggiornare lo stato in base agli eventi nativi di Bootstrap
    const handleRegisterShow = () => setActiveModal("register");
    const handleRegisterHide = () => setActiveModal(null);
    const handleLoginShow = () => setActiveModal("login");
    const handleLoginHide = () => setActiveModal(null);

    // Registrazione dei listener sul DOM per il modale di registrazione
    if (registerModalEl) {
      registerModalEl.addEventListener("show.bs.modal", handleRegisterShow);
      registerModalEl.addEventListener("hidden.bs.modal", handleRegisterHide);
    }

    // Registrazione dei listener sul DOM per il modale di login
    if (loginModalEl) {
      loginModalEl.addEventListener("show.bs.modal", handleLoginShow);
      loginModalEl.addEventListener("hidden.bs.modal", handleLoginHide);
    }

    // Funzione di pulizia (cleanup) per rimuovere i listener al unmount del componente
    return () => {
      if (registerModalEl) {
        registerModalEl.removeEventListener(
          "show.bs.modal",
          handleRegisterShow,
        );
        registerModalEl.removeEventListener(
          "hidden.bs.modal",
          handleRegisterHide,
        );
      }
      if (loginModalEl) {
        loginModalEl.removeEventListener("show.bs.modal", handleLoginShow);
        loginModalEl.removeEventListener("hidden.bs.modal", handleLoginHide);
      }
    };
  }, []);

  // Funzione per effettuare il login: salva i dati utente nel localStorage e aggiorna lo stato
  const login = (userData) => {
    localStorage.setItem("dc_logged_user", JSON.stringify(userData));
    setLoggedUser(userData);
  };

  // Funzione per effettuare il logout: rimuove i dati dal localStorage e resetta lo stato utente
  const logout = () => {
    localStorage.removeItem("dc_logged_user");
    setLoggedUser(null);
  };

  return (
    /* Fornitore del contesto che espone lo stato di autenticazione e le funzioni di controllo ai componenti figli */
    <AuthContext.Provider
      value={{
        loggedUser,
        login,
        logout,
        activeModal,
        setActiveModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
