import React from 'react';
import { Container, Row, Col, Button, Image, Table } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Carrito() {
    const { cart, addToCart, decreaseFromCart, removeFromCart, clearCart, totalPrice } = useCart();

    return (
        <Container>
            <div className="p-4 mb-4 bg-light rounded-3 text-center shadow-sm">
                <h1 className="display-5 fw-bold">Tu Carrito</h1>
                <p className="fs-5 text-muted">Revisa los productos que agregaste y completa tu compra.</p>
            </div>

            {cart.length === 0 ? (
                <div className="text-center py-5">
                    <h4 className="text-muted">Tu carrito está vacío 🕯️</h4>
                    <p>Explora nuestros productos y agrega lo que más te guste.</p>
                    <Button as={Link} to="/productos" variant="dark">Ver Productos</Button>
                </div>
            ) : (
                <Row>
                    <Col md={8}>
                        <Table responsive bordered>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center gap-3">
                                                <Image src={item.image} alt={item.name} rounded style={{ width: 80, height: 60, objectFit: 'cover' }} />
                                                <div>
                                                    <div className="fw-bold">{item.name}</div>
                                                    <div className="text-muted" style={{ fontSize: '0.85rem' }}>{item.category}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">${item.price}</td>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <Button size="sm" variant="outline-secondary" onClick={() => decreaseFromCart(item.id)}>-</Button>
                                                <div className="px-3">{item.quantity}</div>
                                                <Button size="sm" variant="outline-secondary" onClick={() => addToCart(item)}>+</Button>
                                            </div>
                                        </td>
                                        <td className="align-middle">${(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="align-middle">
                                            <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>

                    <Col md={4}>
                        <div className="p-4 bg-white rounded shadow-sm">
                            <h5>Resumen</h5>
                            <hr />
                            <div className="d-flex justify-content-between mb-2">
                                <div>Subtotal</div>
                                <div>${totalPrice.toFixed(2)}</div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div>Envío</div>
                                <div>Gratis</div>
                            </div>

                            <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                                <div>Total</div>
                                <div>${totalPrice.toFixed(2)}</div>
                            </div>

                            <Button variant="dark" className="w-100 mb-2">Ir a pagar</Button>
                            <Button variant="outline-danger" className="w-100" onClick={clearCart}>Vaciar carrito</Button>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
}
