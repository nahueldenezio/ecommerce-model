import PropTypes from "prop-types";
import "../styles/CartDrawer.scss";
import { Link } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose, cartItems, onCheckout }) => {
  return (
    <div className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </li>
          ))
        )}
      </ul>
      <button className="checkout-button" onClick={onCheckout}>
        <Link to="/checkout">Finalizar Compra</Link>
      </button>
    </div>
  );
};

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default CartDrawer;
