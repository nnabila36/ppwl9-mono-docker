import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Routing sederhana berdasarkan path
const path = window.location.pathname

let App: any

async function loadApp() {
  if (path === '/classroom') {
    const { default: ClassroomApp } = await import('./App3')
    App = ClassroomApp
  } else {
    const { default: DefaultApp } = await import('./App2')
    App = DefaultApp
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

loadApp()