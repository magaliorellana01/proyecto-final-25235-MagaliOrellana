import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const ListaProductos = ({ categoria = null }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useEffect(true);

    useEffect(() => {
        let url = "https://fakestoreapi.com/products";

        if (categoria) {
            url = "https://fakestoreapi.com/products/category/${category}"
        }

        fetch(url).then((res) => res.json()).then((data) => {
            setProductos(data);
            setCargando(false);
        })

            .catch((error) => {
                console.error("Error al devolver data", error);
                setCargando(false);
            });
    }, [categoria]);

    const handleAgregarAlCarrito = (producto) => {
        alert(`Producto ${product.title} agregado al carrito`)
    };

    if (cargando) {
        return <div> Cargando . . . </div>
    }

    return (
        <Row>
            {productos.map((producto) => (
                <Col md={4} key={producto.id} className="mb-4">
                    <ProductCard product={producto} agregarAlCarrito={handleAgregarAlCarrito} />
                </Col>
            ))}
        </Row>

    )
};



export default ListaProductos;