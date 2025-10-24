import React from 'react';
import ProductList from './ProductList';

export default function Ofertas () {
  return (
    <div className="container">
      <h1 style = {{color: "#333D29"}} >Ofertas</h1>
      <ProductList category="women's clothing" />
    </div>
  );
};
