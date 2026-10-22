import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import InternalBoard from './pages/InternalBoard';
import Login from "./pages/Login";
import Notice from "./pages/Notice";
import TechnicalArticle from './pages/TechnicalArticle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/board" element={<InternalBoard />} />
        <Route path="/articles" element={<TechnicalArticle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
