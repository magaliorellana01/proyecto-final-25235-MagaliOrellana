import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="site-footer bg-dark text-white py-4"> {/* Agregué bg-dark y text-white por si acaso faltaban */}
            <Container>
                <Row className="text-center text-md-start align-items-center">
                    {/* Logo */}
                    <Col md={4} className="mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start" >
                        <img src={Logo} style={{ maxWidth: "100px" }} alt="Logo" />
                    </Col>

                    {/* Links  */}
                    <Col md={4} className="mb-3 mb-md-0 d-flex flex-column align-items-center" >
                        <a href="#" className="text-white text-decoration-none mb-2">Preguntas Frecuentes</a>
                        <a href="#" className="text-white text-decoration-none mb-2">Nosotros</a>
                        <a href="#" className="text-white text-decoration-none">Contacto</a>
                    </Col>

                    {/* Iconos */}
                    <Col md={4} className="d-flex justify-content-center justify-content-md-end align-items-center gap-3" >
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}