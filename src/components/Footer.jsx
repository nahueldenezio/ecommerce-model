import '../styles/Footer.scss'
const Footer = () => {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Nuestro Emprendimiento. Todos los derechos reservados.</p>
      </footer>
    );
  };
  
  export default Footer;