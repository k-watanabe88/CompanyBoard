import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './AuthContext.tsx'
import AppThemeProvider from "./AppThemeProvider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <AppThemeProvider >
        <App />
      </AppThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
