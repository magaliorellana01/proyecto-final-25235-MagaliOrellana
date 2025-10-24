import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const ListaProductos = ({ category = null }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        let url = "https://fakestoreapi.com/products";

        if (category) {
            url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
        } console.log("URL que se va a fetch:", url);

        fetch(url).then((res) => res.json()).then((data) => {
            setProductos(data);
            setCargando(false);
        })

            .catch((error) => {
                console.error("Error al devolver data", error);
                setCargando(false);
            });
    }, [category]);

    const handleAgregarAlCarrito = (producto) => {
        alert(`Producto ${producto.title} agregado al carrito`)
    };

    if (cargando) {
        return <div> Cargando . . . </div>
    }

    return (
        <Row>
            {productos.map((producto) => (
                <Col md={4} key={producto.id} className="mb-4">
                    <ProductCard producto={producto} agregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
            ))}
        </Row>

    )
};



export default ListaProductos;