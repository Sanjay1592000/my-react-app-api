import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NewHome } from '.'
import { BrowserRouter as Router, Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<NewHome />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
