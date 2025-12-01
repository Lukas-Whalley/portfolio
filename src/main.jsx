import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <div className="flex-1 p-4">
              <Routes>
                  <Route path="/" element={<App/>} />
              </Routes>
          </div>
      </BrowserRouter>
  </StrictMode>,
)
