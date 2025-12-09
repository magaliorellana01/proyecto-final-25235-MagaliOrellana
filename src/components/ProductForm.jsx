import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { ProductsContext } from '../context/ProductsContext';

const ProductForm = ({ show, handleClose, productoAEditar }) => {
    const { agregarProducto, editarProducto } = useContext(ProductsContext);
    
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    useEffect(() => {
        if (productoAEditar) {
            setFormData(productoAEditar);
        } else {
            setFormData({ name: '', price: '', description: '', category: '', image: '' });
        }
    }, [productoAEditar]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.price <= 0) {
            alert("El precio debe ser mayor a 0");
            return;
        }
        if (formData.description.length < 10) {
            alert("La descripción debe tener al menos 10 caracteres");
            return;
        }

        if (productoAEditar) {
            await editarProducto(formData);
        } else {
            await agregarProducto(formData);
        }
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{productoAEditar ? 'Editar Vela' : 'Nueva Vela'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control 
                            type="number" 
                            name="price" 
                            value={formData.price} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="category" 
                            value={formData.category} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="image" 
                            value={formData.image} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="description" 
                            value={formData.description} 
                            onChange={handleChange} 
                            required 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ backgroundColor: "#333D29", border: "none" }}>
                        {productoAEditar ? 'Guardar Cambios' : 'Crear Producto'}
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ProductForm;