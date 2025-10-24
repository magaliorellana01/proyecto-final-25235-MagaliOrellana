import React from 'react';
import ProductList from '../components/ListaProductos';

export default function Ofertas () {
  return (
    <div className="container"  style={{ paddingBottom: "50px" }}>
      <h1 style = {{color: "#333D29"}} >Ofertas</h1>
      <ProductList category="women's clothing" />
    </div>
  );
};
