import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NewHome } from '.'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/my-react-app-api">
      <Routes>
        <Route path="/" element={<NewHome />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
