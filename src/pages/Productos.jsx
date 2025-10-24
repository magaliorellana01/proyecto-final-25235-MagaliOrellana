import React from "react";
import ListaProductos from "../components/ListaProductos";

export default function Home() {
    return (
        <div className="container" >
            <h1 style={{ color: "#414833", marginBottom: "20px" }}>Productos</h1>
            <div style={{ paddingBottom: "100px" }}>
                <ListaProductos />
            </div>
        </div>
    );
}
