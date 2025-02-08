import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NewHome } from '.'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<NewHome />} />
      </Routes>
    </Router>
  </StrictMode>,
)
