import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
      <SpeedInsights/>
    </BrowserRouter>
  </StrictMode>,
)
