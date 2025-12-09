import React from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";
import { toast } from 'react-toastify'; 

const ProductCard = ({ producto }) => {
    const { addToCart } = useCart();

    const handleAgregar = () => {
        addToCart(producto);
        toast.success(` Agregaste ${producto.name} al carrito`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };

    const handleImageError = (e) => {
        e.target.src = "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=500&auto=format&fit=crop"; 
    };

    const mapCategoryToDisplay = (cat) => {
        if (!cat) return 'Todas';
        const c = cat.toString().toLowerCase();
        if (c.includes('citr')) return 'Velas Cítricas';
        if (c.includes('flor')) return 'Velas Florales';
        if (c.includes('kit') || c.includes('set')) return 'Kits de Regalo';
        return 'Todas';
    };

    return (
        <Card className="h-100 d-flex flex-column shadow-sm border-0">
            <div style={{ height: '250px', overflow: 'hidden' }}>
                <Card.Img
                    variant="top"
                    src={producto.image} 
                    alt={producto.name} 
                    onError={handleImageError}
                    className="img-fluid"
                    style={{ width: '100%', height: '100%', objectFit: "cover" }} 
                />
            </div>

            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-5" style={{ color: "#333D29" }}>
                    {producto.name} 
                </Card.Title>
                
                <Card.Text className="text-muted flex-grow-1" style={{ fontSize: "0.9rem" }}>
                    {producto.description ? producto.description.slice(0, 80) + "..." : "Descripción no disponible"}
                </Card.Text>
                
                <Card.Text className="fs-4 fw-bold" style={{ color: "#333D29" }}>
                    ${producto.price}
                </Card.Text>
                
                <div className="d-flex gap-2">
                    <Button
                        style={{
                            backgroundColor: "#333D29",
                            borderColor: "#333D29",
                            transition: "all 0.3s"
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = "#C2C5AA";
                            e.currentTarget.style.color = "#333D29";
                            e.currentTarget.style.borderColor = "#C2C5AA";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = "#333D29";
                            e.currentTarget.style.color = "#fff";
                        }}
                        onClick={handleAgregar}
                    >
                        Agregar al carrito
                    </Button>

                    <Button
                        as={Link}
                        to={`/productos?categoria=${encodeURIComponent(mapCategoryToDisplay(producto.category))}`}
                        variant="outline-dark"
                        style={{ borderColor: '#333D29', color: '#333D29' }}
                    >
                        Descubrir
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;