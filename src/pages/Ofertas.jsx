import React from 'react';
import { Container } from 'react-bootstrap';
import ProductList from '../components/ListaProductos';

export default function Ofertas() {
  return (
    <>
      <div className="bg-light py-5 mb-4 text-center shadow-sm">
        <Container>
          <h1 className="display-4 fw-bold" style={{ color: "var(--color-primary)" }}>
            Ofertas Especiales
          </h1>
          <p className="lead text-muted">
            Descubrí nuestros aromas exclusivos con precios increíbles.
          </p>
        </Container>
      </div>

      <Container style={{ paddingBottom: "50px" }}>
        <ProductList />
      </Container>
    </>
  );
};