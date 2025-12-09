import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App.jsx'
import { ProductsProvider } from './context/ProductsContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
            <SearchProvider> {/* aca envuelve */}
                <App />
            </SearchProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>,
)