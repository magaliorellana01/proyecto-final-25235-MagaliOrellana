import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const { iniciarSesion } = useAuth(); 
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    if (correo === "admin@velas.com" && contrasena === "123456") {
        iniciarSesion({ correo, role: 'admin', nombre: 'Administrador' });
        navigate('/admin'); 
    } else {
        iniciarSesion({ correo, role: 'user', nombre: 'Cliente' });
        navigate('/');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg p-4" style={{ backgroundColor: "#fdfdfd" }}>
            <Card.Body>
              <h2 className="text-center mb-4" style={{ color: "#333D29" }}>Iniciar Sesión</h2>
              <Form onSubmit={manejarEnvio}>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="admin@velas.com" 
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="123456" 
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required 
                  />
                </Form.Group>

                <Button type="submit" className="w-100" style={{ backgroundColor: "#333D29", border: "none" }}>
                  Ingresar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;