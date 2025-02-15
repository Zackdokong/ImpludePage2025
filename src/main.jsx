import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './Router.jsx'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeedInsights/>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
