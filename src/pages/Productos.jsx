import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ListaProductos from "../components/ListaProductos";

export default function Productos() {
    const [searchParams] = useSearchParams();
    const categoriaParam = searchParams.get("categoria");

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaParam || "Todas");

    useEffect(() => {
        setCategoriaSeleccionada(categoriaParam || "Todas");
    }, [categoriaParam]);

    const categorias = ["Todas", "Velas Cítricas", "Velas Florales", "Kits de Regalo"];


    return (
        <Container>
            <div className="p-5 mb-5 bg-light rounded-3 text-center shadow-sm">
                <h1 className="display-5 fw-bold" style={{ color: "#414833" }}>Nuestros Productos</h1>
                <p className="fs-5 text-muted">Explora nuestra colección de velas artesanales, hechas con amor y cera de soja natural.</p>
            </div>
            <div className="text-center mb-4">
                <h4 className="mb-3" style={{ color: "#4F4A4A" }}>Filtrar por Categoría</h4>
                <ButtonGroup aria-label="Filtro de categorías">
                    {categorias.map((cat) => (
                        <Button
                            key={cat}
                            variant={categoriaSeleccionada === cat ? "dark" : "outline-dark"}
                            onClick={() => setCategoriaSeleccionada(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>

            <div style={{ paddingBottom: "100px" }}>
                <ListaProductos categoria={categoriaSeleccionada} />
            </div>
        </Container>
    );
}
