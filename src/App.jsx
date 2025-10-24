import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Login from "./components/Login.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import Productos from "./pages/Productos.jsx"

function App() {

  return (
   <Router>
    <Header/>
    <div style={{ backgroundColor: "#C2C5AA", minHeight: "calc(100vh - 80px)", padding: "20px 0" }}>
    <Routes>
      <Route path="/micuenta" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
    </div>
    <Footer/>
   </Router>
  )
}

export default App
