import React, { useContext, useState } from "react";
import { Container, Table, Button, Image, Modal } from "react-bootstrap";
import { ProductsContext } from "../context/ProductsContext";
import ProductForm from "../components/ProductForm";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Admin = () => {
    const { productos, eliminarProducto } = useContext(ProductsContext);
    const [showModal, setShowModal] = useState(false);
    const [productoAEditar, setProductoAEditar] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [toDeleteId, setToDeleteId] = useState(null);

    const handleShow = (producto = null) => {
        setProductoAEditar(producto);
        setShowModal(true);
    };

    const handleClose = () => {
        setProductoAEditar(null);
        setShowModal(false);
    };

    const handleDelete = async (id) => {
        // direct delete (kept if needed)
        await eliminarProducto(id);
    };

    const promptDelete = (id) => {
        setToDeleteId(id);
        setShowConfirm(true);
    };

    const confirmDelete = async () => {
        if (toDeleteId) {
            await eliminarProducto(toDeleteId);
        }
        setToDeleteId(null);
        setShowConfirm(false);
    };

    const cancelDelete = () => {
        setToDeleteId(null);
        setShowConfirm(false);
    };

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 style={{ color: "#333D29" }}>Panel de Administración</h1>
                <Button 
                    style={{ backgroundColor: "#333D29", border: "none" }} 
                    onClick={() => handleShow()}
                >
                    <FaPlus className="me-2" /> Nueva Vela
                </Button>
            </div>

            <Table striped bordered hover responsive className="shadow-sm">
                <thead style={{ backgroundColor: "#333D29", color: "white" }}>
                    <tr>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td style={{ width: "100px" }}>
                                <Image src={producto.image} thumbnail style={{ height: "50px", objectFit: "cover" }} />
                            </td>
                            <td>{producto.name}</td>
                            <td>{producto.category}</td>
                            <td>${producto.price}</td>
                            <td>
                                <Button 
                                    variant="warning" 
                                    size="sm" 
                                    className="me-2"
                                    onClick={() => handleShow(producto)}
                                >
                                    <FaEdit />
                                </Button>
                                <Button 
                                    variant="danger" 
                                    size="sm"
                                    onClick={() => promptDelete(producto.id)}
                                >
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <ProductForm 
                show={showModal} 
                handleClose={handleClose} 
                productoAEditar={productoAEditar} 
            />

            {/* Modal de confirmación para eliminar producto */}
            <Modal show={showConfirm} onHide={cancelDelete} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Seguro que querés eliminar este producto?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Admin;