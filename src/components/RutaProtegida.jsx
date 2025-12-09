import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RutaProtegida = ({ children, requireAdmin }) => {
    const { usuario } = useAuth();

    if (!usuario) {
        return <Navigate to="/micuenta" />;
    }

    if (requireAdmin && usuario.role !== 'admin') {
        return <Navigate to="/" />;
    }
    return children;
};

export default RutaProtegida;