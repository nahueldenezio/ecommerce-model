import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import PrivateRoute from './pages/PrivateRoute';
import Dashboard from './components/Dashboard';
import { CartProvider } from './context/CartContext';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} /> {/* Ruta para los detalles del producto */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
