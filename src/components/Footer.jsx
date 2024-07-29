import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram />
        </a>
      </div> */}
      <p>
        &copy; {new Date().getFullYear()} Nuestro Emprendimiento. Todos los
        derechos reservados.
      </p>
      <p>
        Powered by{" "}
        <a href="https://portfolio-nd.firebaseapp.com/" target="_blank">
          Nahuel Denezio
        </a>
      </p>
    </footer>
  );
};

export default Footer;
