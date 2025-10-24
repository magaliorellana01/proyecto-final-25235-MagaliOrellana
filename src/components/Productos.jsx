import React from "react";
import ListaProductos from "./ListaProductos";

export default function Productos() {
  return (
    <div className="container">
      <h1 style={{ color: "#333D29" }} > PRODUCTOS </h1>
      <ProductList category="jewelery" />
    </div>

  );
};
