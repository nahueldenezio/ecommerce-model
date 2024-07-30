import { useState } from 'react';
import CartDrawer from '../components/CartDrawer'; // Asegúrate de que la ruta es correcta
import { useCart } from '../context/CartContext';
import '../styles/Cart.scss'; // Asegúrate de que tienes este archivo para los estilos

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCheckout = () => {
    removeFromCart(cartItems);
    setIsCartOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsCartOpen(true)}>Abrir Carrito</button>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Cart;
