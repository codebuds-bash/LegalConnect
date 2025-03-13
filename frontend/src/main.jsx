import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/auth.css"; 
import App from './App.jsx'
import "./App.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
