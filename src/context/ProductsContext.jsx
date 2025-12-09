import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const URL_API = "https://69378381f8dc350aff346c21.mockapi.io/products";

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const res = await fetch(URL_API);
            if (!res.ok) throw new Error("Error en la conexión");
            const data = await res.json();
            setProductos(data);
        } catch (error) {
            console.error("Error trayendo productos:", error);
            toast.error("Error al cargar productos");
        } finally {
            setCargando(false);
        }
    };

    const agregarProducto = async (nuevoProducto) => {
        try {
            const res = await fetch(URL_API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevoProducto)
            });
            if (res.ok) {
                const data = await res.json();
                setProductos([...productos, data]);
                toast.success("Producto creado exitosamente");
                return true;
            }
        } catch (error) {
            console.error("Error al crear:", error);
            toast.error("Error al crear producto");
            return false;
        }
    };

    const editarProducto = async (productoEditado) => {
        try {
            const res = await fetch(`${URL_API}/${productoEditado.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productoEditado)
            });
            if (res.ok) {
                const data = await res.json();
                setProductos(productos.map(p => p.id === data.id ? data : p));
                toast.success("Producto actualizado");
                return true;
            }
        } catch (error) {
            console.error("Error al editar:", error);
            toast.error("Error al editar producto");
            return false;
        }
    };

    const eliminarProducto = async (id) => {
        try {
            const res = await fetch(`${URL_API}/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setProductos(productos.filter(p => p.id !== id));
                toast.success("Producto eliminado");
                return true;
            }
        } catch (error) {
            console.error("Error al eliminar:", error);
            toast.error("Error al eliminar producto");
            return false;
        }
    };

    return (
        <ProductsContext.Provider value={{ 
            productos, 
            cargando, 
            agregarProducto, 
            editarProducto, 
            eliminarProducto 
        }}>
            {children}
        </ProductsContext.Provider>
    );
};