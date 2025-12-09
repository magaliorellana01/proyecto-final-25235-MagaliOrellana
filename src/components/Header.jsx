import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { FaSearch } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const { query, handleSearch, submitSearch } = useSearch();
    const navigate = useNavigate();

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const applied = submitSearch();
            if (applied) navigate('/productos');
        }
    };
    const { usuario, cerrarSesion } = useAuth();
    const { totalItems } = useCart();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 sticky-top shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} style={{ maxWidth: "100px" }} alt="Logo" />
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbar-nav" />
                
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
                        <Nav.Link as={Link} to="/ofertas" className="mx-2">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/productos" className="mx-2">Productos</Nav.Link>
                    </Nav>

                    <Form className="d-flex me-3 my-2 my-lg-0">
                        <InputGroup>
                            <InputGroup.Text>
                                <FaSearch />
                            </InputGroup.Text>
                            <Form.Control
                                type="search"
                                placeholder="Buscar aroma..."
                                className="me-2"
                                aria-label="Search"
                                value={query}
                                onChange={handleSearch}
                                onKeyDown={onKeyDown}
                            />
                        </InputGroup>
                    </Form>

                    <div className="d-flex align-items-center mt-3 mt-lg-0">
                        {usuario ? (
                            <>
                                {usuario.role === 'admin' && (
                                    <Button as={Link} to="/admin" className="me-3 btn-sm btn-custom-primary">
                                        Admin
                                    </Button>
                                )}
                                <Button variant="outline-light" onClick={cerrarSesion} className="me-3 btn-sm">
                                    Cerrar sesión
                                </Button>
                            </>
                        ) : (
                            <Button variant="outline-light" as={Link} to="/micuenta" className="me-3 btn-sm">
                                Mi Cuenta
                            </Button>
                        )}

                        {!(usuario && usuario.role === 'admin') && (
                            <Link to="/carrito" className="position-relative text-white" aria-label="Ver carrito">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                                {totalItems > 0 && (
                                    <Badge pill bg="danger" className="position-absolute" style={{ top: '-6px', right: '-8px' }}>
                                        {totalItems}
                                    </Badge>
                                )}
                            </Link>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}