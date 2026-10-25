dc-universe-app/
├── db/
│   └── db.json                 # Database locale per json-server (collezione users)
├── public/
├── src/
│   ├── assets/
│   │   └── img/
│   │       └── carousel/       # Immagini del carosello (batman.jpg, superman.jpg, harley.jpg)
│   ├── components/
│   │   ├── Footer.jsx          # Piè di pagina del portale
│   │   ├── HeroCarousel.jsx    # Componente carosello principale (statico e riutilizzabile)
│   │   ├── Navbar.jsx          # Barra di navigazione fissa in alto (fixed-top) con link alle pagine e modale
│   │   └── Registrati.jsx      # Componente modale (popup) di registrazione utente con chiamata POST a json-server
│   ├── pages/
│   │   ├── FilmSerie.jsx       # Pagina Film e Serie TV (con HeroCarousel integrato)
│   │   ├── Fumetti.jsx         # Pagina Fumetti (con HeroCarousel integrato)
│   │   └── Home.jsx            # Pagina Home principale (con HeroCarousel integrato)
│   ├── App.jsx                 # Layout principale, configurazione React Router e modale globale
│   ├── index.css               # Stili globali e personalizzazioni CSS
│   └── main.jsx                # Punto d'ingresso React e importazione bundle Bootstrap JS
├── package.json                # Script di avvio (Vite + json-server su porta 5000)
└── structure.md                # Documentazione dell'architettura del progetto

---

### 🚀 Configurazione degli Script (`package.json`)
* **`npm run dev`**: Avvia il server di sviluppo frontend Vite.
* **`npm run server`**: Avvia `json-server` in ascolto sul database locale (`db/db.json`) alla porta `5000`.

### 🛠️ Caratteristiche Principali
1. **Navigazione Fissa (`fixed-top`):** Navbar sempre visibile durante lo scorrimento delle pagine.
2. **Modale di Registrazione:** Popup Bootstrap globale attivato direttamente dalla voce "REGISTRATI" della Navbar, senza ricaricamento di pagina, con salvataggio asincrono su `json-server`.
3. **Carosello Condiviso:** Componente visivo coerente presente nella Home, nella sezione Fumetti e nella sezione Film e Serie TV.