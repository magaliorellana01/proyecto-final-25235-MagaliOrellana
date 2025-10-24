import React from "react";
import ListaProductos from "../components/ListaProductos";

export default function Home () {
    return (
        <div className ="container"  >
            <h1 style= {{color: "#414833"}} > Todos Los Productos </h1>
            <ListaProductos/>
        </div>
    )
}