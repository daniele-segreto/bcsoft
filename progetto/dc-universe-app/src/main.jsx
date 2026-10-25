import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importazione del foglio di stile di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Importazione di eventuali script JavaScript di Bootstrap (es. per modali o menu a tendina)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Import del nostro stile personalizzato (se presente)
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
