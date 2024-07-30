import '../styles/Checkout.scss';

const Checkout = () => {
  return (
    <div className="checkout-page">
      <h1>Finalizar Compra</h1>
      {/* Aquí va el formulario para que el usuario complete la compra */}
      <form>
        {/* Campos del formulario */}
        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
