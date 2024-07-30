import PropTypes from 'prop-types';
import "../styles/ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      {/* <p>{product.description}</p> */}
      <span>${product.price}</span>
      <button onClick={() => console.log('Add to cart')}>Ver</button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
