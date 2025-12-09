import React from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://placehold.co/1200x400/DABFBF/4F4A4A?text=Velas+Artesanales"
                        alt="Velas Artesanales"
                    />
                    <Carousel.Caption>
                        <h3>Crea Momentos Únicos</h3>
                        <p>Nuestras velas están hechas a mano con cera de soja natural.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://placehold.co/1200x400/A2C5AA/4F4A4A?text=Nuevas+Fragancias"
                        alt="Nuevas Fragancias"
                    />
                    <Carousel.Caption>
                        <h3>Nuevas Fragancias de Temporada</h3>
                        <p>Descubre los aromas que tenemos para ti este invierno.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container fluid className="p-5 mb-4 bg-light rounded-3 text-center">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Aromas que Enamoran</h1>
                    <p className="fs-4">Encuentra la fragancia perfecta para cada rincón de tu hogar. ¡Aprovecha nuestras ofertas!</p>
                    <Button as={Link} to="/ofertas" size="lg" className="btn-custom-primary">
                        Ver Ofertas
                    </Button>
                </div>
            </Container>

            <Container className="mt-5 text-center">
                <h2>Nuestras Colecciones</h2>
                <Row className="mt-4">
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://placehold.co/400x300/EED7C5/4F4A4A?text=Aromas+Florales" />
                            <Card.Body>
                                <Card.Title>Velas Florales</Card.Title>
                                <Button as={Link} to="/productos?categoria=Velas%20Florales" variant="outline-dark">Descubrir</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://placehold.co/400x300/F4E8D1/4F4A4A?text=Aromas+Cítricos" />
                            <Card.Body>
                                <Card.Title>Velas Cítricas</Card.Title>
                                <Button as={Link} to="/productos?categoria=Velas%20Cítricas" variant="outline-dark">Descubrir</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src="https://placehold.co/400x300/C9D4C2/4F4A4A?text=Kits+de+Regalo" />
                            <Card.Body>
                                <Card.Title>Kits de Regalo</Card.Title>
                                <Button as={Link} to="/productos?categoria=Kits%20de%20Regalo" variant="outline-dark">Descubrir</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 mb-5">
                 <Row className="text-center">
                    <Col md={4}>
                        <h4><i className="fa fa-leaf" aria-hidden="true"></i> Ingredientes Naturales</h4>
                        <p>Cera de soja y aceites esenciales puros.</p>
                    </Col>
                    <Col md={4}>
                        <h4><i className="fa fa-heart" aria-hidden="true"></i> Hecho a Mano</h4>
                        <p>Cada vela es creada con amor y dedicación.</p>
                    </Col>
                    <Col md={4}>
                        <h4><i className="fa fa-truck" aria-hidden="true"></i> Envío Seguro</h4>
                        <p>Empaquetamos con cuidado para que lleguen perfectas.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
