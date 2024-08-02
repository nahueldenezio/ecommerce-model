import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.scss";
import CartDrawer from "./CartDrawer";
import "../styles/Cart.scss";
import { useCart } from "../context/CartContext";
import Logo from '../assets/logo.svg';

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
      <div className="nav-logo"><a className="nav-a" href="/"><img className="logo" src={Logo} alt="Logo"/></a></div>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
        <a onClick={() => setIsCartOpen(true)}>Carrito</a>
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onCheckout={handleCheckout}
        />
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/prods1">Productos</Link>
        </li>
        <li>
          <a href="#footer">Nosotros</a>
        </li>
        <li>
          <a href="#footer">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
