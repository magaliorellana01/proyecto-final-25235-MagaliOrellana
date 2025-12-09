import React, { useContext, useState, useEffect } from "react";
import { Row, Col, Pagination, Spinner, Form } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../context/ProductsContext";
import { useSearch } from "../context/SearchContext";

const ListaProductos = ({ categoria }) => {
    const { productos, cargando } = useContext(ProductsContext);
    const { searchTerm } = useSearch();
    
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 6;

    useEffect(() => {
        setPaginaActual(1);
    }, [searchTerm, categoria]);

    // Lógica de filtrado más robusta
    const synonymMap = {
        "Velas Cítricas": ["citr", "cítr", "fresco"],
        "Velas Florales": ["flor"],
        "Kits de Regalo": ["kit", "set"]
    };

    const productosFiltrados = productos.filter((producto) => {
        const searchMatch = producto.name.toLowerCase().includes(searchTerm.toLowerCase());

        const cat = categoria || "Todas";
        const categoryValue = (producto.category || "").toString().toLowerCase();

        let categoryMatch = true;
        if (cat && cat !== "Todas") {
            const syns = synonymMap[cat];
            if (syns && syns.length > 0) {
                categoryMatch = syns.some(sub => categoryValue.includes(sub));
            } else {
                // Fallback: comparar por texto
                categoryMatch = categoryValue.includes(cat.toLowerCase());
            }
        }

        return searchMatch && categoryMatch;
    });

    // Lógica de paginación
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    const cambiarPagina = (numero) => setPaginaActual(numero);

    // ESTADO DE CARGA
    if (cargando) {
        return (
            <div className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "300px" }}>
                <Spinner animation="border" role="status" style={{ color: "var(--color-primary)" }}>
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                <span className="text-muted">
                    Mostrando <strong>{productosActuales.length}</strong> de {productosFiltrados.length} productos
                </span>
                <div className="d-flex align-items-center">
                    <Form.Select size="sm" style={{ width: "150px", borderColor: "var(--color-borders)" }}>
                        <option>Más relevantes</option>
                        <option>Menor precio</option>
                        <option>Mayor precio</option>
                    </Form.Select>
                </div>
            </div>

            <Row>
                {productosActuales.length > 0 ? (
                    productosActuales.map((producto) => (
                        <Col lg={4} md={6} sm={6} xs={12} key={producto.id} className="mb-4">
                            <ProductCard producto={producto} />
                        </Col>
                    ))
                ) : (
                    <Col xs={12} className="text-center py-5">
                        <h4 className="text-muted">No encontramos velas con ese nombre 🕯️</h4>
                        <p>Intenta con otra palabra clave.</p>
                    </Col>
                )}
            </Row>

            {totalPaginas > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <Pagination className="custom-pagination">
                        <Pagination.Prev 
                            onClick={() => cambiarPagina(paginaActual - 1)} 
                            disabled={paginaActual === 1}
                        />
                        
                        {[...Array(totalPaginas)].map((_, index) => (
                            <Pagination.Item 
                                key={index + 1} 
                                active={index + 1 === paginaActual}
                                onClick={() => cambiarPagina(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}

                        <Pagination.Next 
                            onClick={() => cambiarPagina(paginaActual + 1)} 
                            disabled={paginaActual === totalPaginas}
                        />
                    </Pagination>
                </div>
            )}
        </>
    )
};

export default ListaProductos;