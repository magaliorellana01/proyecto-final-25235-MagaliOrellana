import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Ofertas from "./components/Ofertas.jsx";
import Productos from "./components/Productos.jsx"

function App() {

  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/micuenta" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="ofertas" element={<Ofertas />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
