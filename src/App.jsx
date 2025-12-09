import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import IniciarSesion from "./components/Login.jsx";
import Ofertas from "./pages/Ofertas.jsx";
import Productos from "./pages/Productos.jsx";
import Carrito from "./pages/Carrito.jsx";
import Admin from "./pages/Admin.jsx";
// 1. IMPORTAR CON EL NUEVO NOMBRE
import RutaProtegida from "./components/RutaProtegida.jsx"; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
   <Router>
    <Header/>
    
    <div style={{ backgroundColor: "#C2C5AA", minHeight: "calc(100vh - 80px)", padding: "20px 0" }}>
        <Routes>
          <Route path="/micuenta" element={<IniciarSesion />} />
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          
          {/* 2. USAR EL COMPONENTE EN ESPAÑOL */}
          <Route 
            path="/admin" 
            element={
              <RutaProtegida requireAdmin={true}>
                <Admin />
              </RutaProtegida>
            } 
          />
          
        </Routes>
    </div>
    
    <Footer/>

    <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
   </Router>
  )
}

export default App;