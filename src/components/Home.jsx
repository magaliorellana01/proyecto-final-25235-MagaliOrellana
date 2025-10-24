import React from "react";
import ListaProductos from "./ListaProductos";

export default function Home () {
    return (
        <div className ="container"  >
            <h1 style= {{color: "#414833"}} > Todos Los Productos </h1>
            <ListaProductos/>
        </div>
    )
}