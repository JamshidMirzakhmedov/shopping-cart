export default function Cart(props) {
  const { quantity = 0, handleBasktetShow = Function.prototype } = props;

  return (
    <div className="cart red accent-3 white-text" onClick={handleBasktetShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
