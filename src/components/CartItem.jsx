import "../styles/CartItem.scss";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (e) => {
    onUpdateQuantity(item._id, parseInt(e.target.value, 10));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={() => onRemove(item._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
