import React from "react";
import ListaProductos from "../components/ListaProductos";

export default function Productos() {
  return (
    <div className="container">
      <h1 style={{ color: "#333D29" }} > PRODUCTOS </h1>
      <ListaProductos category="jewelery" />
    </div>

  );
};
