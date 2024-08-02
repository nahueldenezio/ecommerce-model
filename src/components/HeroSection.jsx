import "../styles/HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-p">La plataforma de comercio de tu preferencia</p>
        <h2>Un lugar donde comprar fácil y sin vueltas</h2>
        <p>Descubre nuestros productos y más.</p>
      </div>
      <div className="hero-content">
        <div className="hero-content-card">
          <button className="hero-button">Comprar</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
