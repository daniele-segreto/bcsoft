react-store-app/
├── database/
│   └── db.json             <-- Database mock per la persistenza di utenti e credenziali
├── src/
│   ├── auth/
│   │   ├── Login.jsx       <-- Pagina di accesso con verifica delle credenziali tramite json-server
│   │   └── Register.jsx    <-- Pagina di registrazione per nuovi utenti
│   ├── components/
│   │   ├── Navbar.jsx          <-- Barra di navigazione superiore (con link e stato login/logout)
│   │   ├── ProductCard.jsx     <-- Singola card prodotto per il catalogo e la wishlist
│   │   └── ProtectedRoute.jsx  <-- Componente di guardia per la protezione della rotta Lista dei Desideri
│   ├── pages/
│   │   ├── Home.jsx            <-- Pagina Home dell'e-commerce
│   │   ├── ChiSiamo.jsx        <-- Pagina Chi Siamo
│   │   ├── Prodotti.jsx        <-- Pagina Catalogo (con fetch asincrona da Fake Store API)
│   │   ├── ListaDesideri.jsx   <-- Pagina Wishlist (con salvataggio e recupero da localStorage)
│   │   └── NotFound.jsx        <-- Pagina di errore 404 (gestita tramite rotta di fallback)
│   ├── App.jsx                 <-- Configurazione centrale del Router, delle rotte e dello stato globale
│   ├── main.jsx                <-- Punto d'ingresso principale dell'applicazione React
│   └── index.css               <-- Personalizzazioni CSS e classi di stile avanzate in stile e-commerce moderno
├── package.json
└── vite.config.js

Frontend:npm run dev
Backend: npx json-server --watch database/db.json --port 5000