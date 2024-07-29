import '../styles/Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav className="nav">
        <div className="nav-logo">Logo</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Nosotros</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/cart">Carrito</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;