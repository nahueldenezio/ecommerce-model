import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`}>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <span>${product.price}</span>
      </Link>
      <button>Ver</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
