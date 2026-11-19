# Struttura del Progetto DC Universe App

src/
├── components/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Registrati.jsx
│   ├── ComicSection.jsx
│   ├── Footer.jsx
│   ├── HeroCarousel.jsx
│   ├── Navbar.jsx
│   └── PromoSection.jsx
├── context/
│   └── AuthContext.jsx   <-- Nuovo contesto globale per autenticazione e modali
├── data/
│   └── comicsData.js
├── pages/
│   ├── Contatti.jsx
│   ├── FilmSerie.jsx
│   ├── Fumetti.jsx
│   ├── Home.jsx
│   └── UserDashboard.jsx
├── App.jsx
├── index.css
├── main.jsx
└── style.css

---

### 🚀 Configurazione degli Script (`package.json`)
* **`npm run dev`**: Avvia il server di sviluppo frontend Vite.
* **`npm run server`**: Avvia `json-server` in ascolto sul database locale (`db/db.json`) alla porta `5000`.

### 🛠️ Caratteristiche Principali
1. **Navigazione Fissa (`fixed-top`):** Navbar sempre visibile durante lo scorrimento delle pagine.
2. **Modale di Registrazione:** Popup Bootstrap globale attivato direttamente dalla voce "REGISTRATI" della Navbar, senza ricaricamento di pagina, con salvataggio asincrono su `json-server`.
3. **Carosello Condiviso:** Componente visivo coerente presente nella Home, nella sezione Fumetti e nella sezione Film e Serie TV.