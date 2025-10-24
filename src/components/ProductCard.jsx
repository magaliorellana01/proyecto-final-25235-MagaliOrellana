import React from "react";
import { Card, Button } from 'react-bootstrap';


const ProductCard = ({ producto, agregarAlCarrito }) => {
    return (
        <Card className="h-100 d-flex flex-column">
            <Card.Img
                variant="top"
                src={producto.image}
                alt={producto.title}
                className="card-img-top img-fluid"
                style={{ height: '200px', objectFit: 'cover' }} />

            <Card.Body className="d-flex flex-column">
                <Card.Title> {producto.title} </Card.Title>
                <Card.Text>
                    {producto.description.slice(0, 100)}...
                </Card.Text>
                <Card.Text>
                    <strong>${producto.price}</strong>
                </Card.Text>
                <Button style={{ backgroundColor: "#333D29", borderColor: "#333D29", transition: "all 0.3s" }}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "#C2C5AA";
                        e.currentTarget.style.color = "#333D29";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = "#333D29";
                        e.currentTarget.style.color = "#C2C5AA";
                    }} onClick={() => agregarAlCarrito(producto)}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>

    )
};

export default ProductCard;