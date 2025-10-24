import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";


function App() {

  return (
   <Router>
    <Header/>
    <Footer/>
   </Router>
  )
}

export default App
