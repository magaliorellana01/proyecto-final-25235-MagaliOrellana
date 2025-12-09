import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('carrito_velas');
        if (!savedCart) return [];
        try {
            const parsed = JSON.parse(savedCart);
            return parsed.map(item => ({
                ...item,
                id: item.id ?? item.name,
                quantity: typeof item.quantity === 'number' ? item.quantity : (item.quantity ? Number(item.quantity) : 1)
            }));
        } catch (e) {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('carrito_velas', JSON.stringify(cart));
    }, [cart]);

    const getProductId = (product) => product.id ?? product.name;

    const addToCart = (product) => {
        const pid = getProductId(product);
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === pid);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === pid ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                const price = typeof product.price === 'number' ? product.price : Number(product.price || 0);
                return [...prevCart, { ...product, id: pid, price, quantity: 1 }];
            }
        });
    };

    const decreaseFromCart = (productId) => {
        const pid = productId;
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === pid);
            if (!existingProduct) return prevCart;
            if (existingProduct.quantity <= 1) {
                return prevCart.filter(item => item.id !== pid);
            }
            return prevCart.map(item =>
                item.id === pid ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const removeFromCart = (id) => {
        const pid = id;
        setCart(prevCart => prevCart.filter(item => item.id !== pid));
    };
    const clearCart = () => setCart([]);
    const totalPrice = cart.reduce((acc, item) => acc + (Number(item.price || 0) * Number(item.quantity || 0)), 0);
    const totalItems = cart.reduce((acc, item) => acc + Number(item.quantity || 0), 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            decreaseFromCart,
            clearCart, 
            totalPrice, 
            totalItems 
        }}>
            {children}
        </CartContext.Provider>
    );
};