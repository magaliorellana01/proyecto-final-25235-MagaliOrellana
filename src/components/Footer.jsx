import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.png";


export default function Footer() {
    const estilos = {
        container: {
            backgroundColor: "#333D29",
            color: "#C2C5AA",
            padding: "40px 20px",
        },
        link: {
            color: "#C2C5AA",
            margin: "5px 0",
            textDecoration: "none",
            cursor: "pointer",
            transition: "color 0.3s"
        },

        icono: {
            color: "#C2C5AA",
            fontSize: "24px",
            cursor: "pointer",
            transition: "color 0.3s",
            marginRight: "15px"

        }

    }
    return (
        <footer style={estilos.container} >
            <Container>
                <Row className="text-center text-md-start">
                    {/* Logo */}
                    <Col md={4} className="mb-3 mb-0 d-flex justify-content-center justify-content-md-start" >
                        <img src={Logo} style={{ maxWidth: "100px", marginBottom: "10px", }} />
                    </Col>

                    {/* Links  */}
                    <Col md={4} className="mb-3 mb-md-0 d-flex flex-column align-items-center" >
                        <a href="#" style={estilos.link}
                            onMouseEnter={e => e.target.style.color = "#fff"}
                            onMouseLeave={e => e.target.style.color = "#C2C5AA"} > Preguntas Frecuentes </a>
                        <a href="#" style={estilos.link}
                            onMouseEnter={e => e.target.style.color = "#fff"}
                            onMouseLeave={e => e.target.style.color = "#C2C5AA"}> Nosotros </a>
                        <a href="#" style={estilos.link}
                            onMouseEnter={e => e.target.style.color = "#fff"}
                            onMouseLeave={e => e.target.style.color = "#C2C5AA"}> Contacto </a>
                    </Col>

                    {/* Iconos */}
                    <Col md={4} className="d-flex justify-content-center justify-content-md-end align-items-center" >
                        <i className="fa fa-facebook" style={estilos.icono}
                            onMouseEnter={e => e.target.style.color = "#fff"}
                            onMouseLeave={e => e.target.style.color = "#C2C5AA"}></i>
                        <i className="fa fa-instagram" style={estilos.icono}
                            onMouseEnter={e => e.target.style.color = "#fff"}
                            onMouseLeave={e => e.target.style.color = "#C2C5AA"} ></i>
                    </Col>
                </Row>
            </Container>


        </footer >
    );
}