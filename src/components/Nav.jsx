import '../styles/Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">Logo</div>
      <ul className="nav-links">
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Nav;