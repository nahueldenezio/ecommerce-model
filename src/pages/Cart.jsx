import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import '../styles/Cart.scss';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item._id}
            item={item}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        ))
      )}
    </div>
  );
};

export default Cart;