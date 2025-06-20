import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './providers/AuthProvider'
import { AppGuard } from './components/AppGuard'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppGuard>
        <App />
      </AppGuard>
    </AuthProvider>
  </StrictMode>
)
