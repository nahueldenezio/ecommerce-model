import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';
import CartDrawer from './CartDrawer';
import '../styles/Cart.scss';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCheckout = () => {
    removeFromCart(cartItems);
    setIsCartOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">Logo</div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/about">Nosotros</Link></li>
        <li><a href='#footer'>Contacto</a></li>
        <li><a onClick={() => setIsCartOpen(true)}>Carrito</a></li>
        <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onCheckout={handleCheckout}
      />
      </ul>
    </nav>
  );
};

export default Nav;
