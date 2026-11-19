import React from "react";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

/* --- COMPONENTE DELLA DASHBOARD UTENTE (QUARTIER GENERALE) --- */
/* Gestisce il profilo personale, il calcolo del grado in base ai preferiti e la tabella dei prodotti salvati */
function UserDashboard() {
  // Estrazione dello stato di autenticazione e delle funzioni di logout
  const { loggedUser, logout } = useAuth();
  // Estrazione della lista dei preferiti e della funzione per rimuoverli
  const { favorites, toggleFavorite } = useFavorites();
  // Estrazione della funzione per aggiungere gli articoli al carrello
  const { addToCart } = useCart();
  // Hook di navigazione per reindirizzare l'utente
  const navigate = useNavigate();

  // Dati dinamici dell'utente loggato con valori di fallback predefiniti
  const username = loggedUser?.username || loggedUser?.name || "DANIELE89";
  const email = loggedUser?.email || "daniele@segreto.it";
  const userInitial = username.charAt(0).toUpperCase();

  // Calcolo del conteggio dei preferiti e determinazione del livello e del grado utente
  const favoritesCount = favorites ? favorites.length : 0;
  const userLevel =
    favoritesCount >= 5 ? "Lv. 3" : favoritesCount >= 2 ? "Lv. 2" : "Lv. 1";
  const userRank =
    favoritesCount >= 5
      ? "Eroe della Justice League"
      : favoritesCount >= 2
        ? "Vigilante di Gotham"
        : "Cittadino di Gotham";

  // Gestione della procedura di disconnessione (Logout)
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    /* Posizionamento pulito sotto la navbar fissa */
    <main className="container py-5" style={{ marginTop: "70px" }}>
      <div className="row g-4">
        {/* Colonna laterale del profilo utente */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 text-center bg-white">
            {/* Avatar circolare con iniziale del nome utente */}
            <div
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3 fw-bold fs-2 shadow-sm"
              style={{ width: "90px", height: "90px" }}
            >
              {userInitial}
            </div>
            <h3 className="fw-bold text-uppercase mb-1">{username}</h3>
            <p className="text-muted small mb-3">{email}</p>

            {/* Badge dinamico del grado dell'eroe */}
            <div className="badge bg-dark text-warning p-2 mb-4 text-uppercase fw-bold rounded-pill px-3">
              ⭐ Grado: {userRank}
            </div>

            <hr className="text-muted opacity-25" />

            {/* Pulsante di uscita (Logout) */}
            <button
              type="button"
              className="btn btn-outline-danger w-100 fw-bold rounded-pill py-2 text-uppercase"
              onClick={handleLogout}
            >
              Esci (Logout)
            </button>
          </div>
        </div>

        {/* Colonna principale dei contenuti e delle statistiche */}
        <div className="col-lg-8">
          {/* Card di benvenuto personalizzata */}
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
            <h2 className="fw-bold mb-2">
              Benvenuto nel tuo Quartier Generale, {username}
            </h2>
            <p className="text-muted mb-0">
              Da qui puoi gestire le tue preferenze, esplorare l'archivio dei
              fumetti e monitorare tutti i contenuti salvati nell'Universo DC.
            </p>
          </div>

          {/* Box statistici dinamici organizzati in 2 colonne simmetriche */}
          <div className="row g-3 mb-4">
            {/* Box contatore preferiti */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 p-3 text-center bg-white h-100">
                <span className="text-uppercase text-muted small fw-bold mb-1">
                  Preferiti Salvati
                </span>
                <h3 className="fw-bold text-primary display-6 mb-0">
                  {favoritesCount}
                </h3>
              </div>
            </div>
            {/* Box livello raggiunto */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 p-3 text-center bg-white h-100">
                <span className="text-uppercase text-muted small fw-bold mb-1">
                  Livello Raggiunto
                </span>
                <h3 className="fw-bold text-success display-6 mb-0">
                  {userLevel}
                </h3>
              </div>
            </div>
          </div>

          {/* Sezione collegamenti rapidi per la navigazione nel portale */}
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
            <h4 className="fw-bold mb-3">Esplora il Portale</h4>
            <div className="d-flex gap-3 flex-wrap">
              <button
                className="btn btn-outline-primary fw-bold rounded-pill px-4 py-2 text-uppercase"
                onClick={() => navigate("/fumetti")}
              >
                📚 Esplora Fumetti
              </button>
              <button
                className="btn btn-outline-dark fw-bold rounded-pill px-4 py-2 text-uppercase"
                onClick={() => navigate("/film-serie")}
              >
                🎬 Film e Serie TV
              </button>
            </div>
          </div>

          {/* Sezione Preferiti in formato tabellare coordinato con il carrello */}
          <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
            <h4 className="fw-bold mb-3">
              I Tuoi Preferiti ({favoritesCount})
            </h4>

            {/* Messaggio condizionale se non ci sono preferiti salvati */}
            {favoritesCount === 0 ? (
              <p className="text-muted mb-0">
                Non hai ancora salvato nessun elemento nei preferiti. Esplora il
                catalogo e clicca sul cuore per aggiungerli qui!
              </p>
            ) : (
              /* Tabella responsive dei prodotti preferiti */
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead>
                    <tr className="text-uppercase text-muted small border-bottom">
                      <th scope="col" className="py-3">
                        Prodotto
                      </th>
                      <th scope="col" className="py-3">
                        Prezzo
                      </th>
                      <th scope="col" className="py-3 text-end">
                        Azioni
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {favorites.map((item) => {
                      // Estrazione sicura dell'ID e normalizzazione del prezzo in formato numerico
                      const itemId = item.id || item.title;
                      const rawPrice = item.ourPrice || item.price || "14.99";
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

                      return (
                        <tr key={itemId} className="border-bottom">
                          {/* Colonna Prodotto con Immagine, Titolo e Categoria */}
                          <td className="py-3">
                            <div className="d-flex align-items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="rounded shadow-sm"
                                style={{
                                  width: "55px",
                                  height: "70px",
                                  objectFit: "cover",
                                }}
                              />
                              <div>
                                <h6 className="fw-bold mb-1 text-uppercase">
                                  {item.title}
                                </h6>
                                <span className="text-muted small">
                                  {item.category || "COLLEZIONE DC"}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Colonna Prezzo formattato */}
                          <td className="py-3 fw-bold text-dark">
                            € {numericPrice.toFixed(2)}
                          </td>

                          {/* Colonna Azioni (Aggiungi al carrello o Rimuovi dai preferiti) */}
                          <td className="py-3 text-end">
                            <div className="d-flex justify-content-end gap-2">
                              {/* Pulsante per trasferire l'articolo direttamente nel carrello */}
                              <button
                                type="button"
                                className="btn btn-success btn-sm fw-bold px-3"
                                onClick={() =>
                                  addToCart({
                                    id: itemId,
                                    title: item.title,
                                    price: numericPrice,
                                    image: item.image,
                                    category: item.category || "Preferiti",
                                  })
                                }
                              >
                                + Carrello
                              </button>
                              {/* Pulsante per rimuovere l'elemento dalla lista dei preferiti */}
                              <button
                                type="button"
                                className="btn btn-outline-danger btn-sm px-3 fw-bold"
                                onClick={() => toggleFavorite(item)}
                              >
                                Rimuovi
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserDashboard;
