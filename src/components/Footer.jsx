import "../styles/Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.instagram.com/tu_comercio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/tu_comercio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.instagram.com/tu_comercio" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Nuestro Emprendimiento. Todos los derechos reservados.
        </p>
        <p>
          Powered by{" "}
          <a href="https://portfolio-nd.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
            Nahuel Denezio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
