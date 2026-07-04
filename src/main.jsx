import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Registro do service worker (gerado pelo vite-plugin-pwa em build de produção).
// Em dev, o módulo virtual não existe de forma útil, então isolamos o registro
// e ignoramos silenciosamente se ele não estiver disponível.
if (import.meta.env.PROD) {
  import('virtual:pwa-register')
    .then(({ registerSW }) => registerSW({ immediate: true }))
    .catch(() => {})
}
