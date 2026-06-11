import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FavouritesProvider } from './contexts/FavouritesContext.jsx'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </ThemeProvider>
  </BrowserRouter>
</StrictMode>
)
