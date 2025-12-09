import React, { createContext, useState, useEffect, useContext } from 'react';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null); 

    useEffect(() => {
        const storedUser = localStorage.getItem('usuario_vela');
        if (storedUser) {
            setUsuario(JSON.parse(storedUser));
        }
    }, []);

    const iniciarSesion = (userData) => {
        setUsuario(userData);
        localStorage.setItem('usuario_vela', JSON.stringify(userData));
    };

    const cerrarSesion = () => {
        setUsuario(null);
        localStorage.removeItem('usuario_vela');
    };

    return (
        <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
            {children}
        </AuthContext.Provider>
    );
};