import { useContext } from "react";
import { shopContext } from "../context";

export default function Cart(props) {
  const { order, handleBasketShow = Function.prototype } =
    useContext(shopContext);
  const quantity = order.length;
  return (
    <div className="cart red accent-3 white-text" onClick={handleBasketShow}>
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
