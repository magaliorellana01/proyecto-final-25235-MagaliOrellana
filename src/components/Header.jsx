import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png"


export default function Header() {
    return (
        <Navbar style={{ backgroundColor: "#333D29" }} variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src={logo} style={{ maxWidth: "100px", color: "#C2C5AA" }} />
                </Navbar.Brand>
                <Nav className="ms-auto align-items-center" >
                    <Nav.Link as={Link} to="/" className="me-3" style={{ color: "#C2C5AA" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                        onMouseLeave={e => e.currentTarget.style.color = "#C2C5AA"}> Home </Nav.Link>
                    <Nav.Link as={Link} to="/ofertas" className="me-3" style={{ color: "#C2C5AA" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                        onMouseLeave={e => e.currentTarget.style.color = "#C2C5AA"}> Ofertas </Nav.Link>
                    <Nav.Link as={Link} to="/productos" className="me-3" style={{ color: "#C2C5AA" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                        onMouseLeave={e => e.currentTarget.style.color = "#C2C5AA"}> Productos </Nav.Link>
                    <div className="d-flex align-items-center">
                        <Button variant="outline-light" as={Link} to="/micuenta" className="me-2" style={{ color: "#C2C5AA" }}  >
                            Mi Cuenta
                        </Button>
                        <Link to="/carrito" className="text-white" >
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" style={{ color: "#C2C5AA" }}/>
                        </Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
}