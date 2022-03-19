export default function BasketItem(props) {
  const {
    id,

    name,
    price,
    quantity,
    decrementQuantity,
    incrementQuantity,
  } = props;
  return (
    <li className="collection-item">
      {name} x{quantity} = {price}
      <b>$</b>
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">add</i>Add
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(id)}
          style={{ margin: "0px 10px" }}
        >
          <i className="material-icons left">remove</i>remove
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => props.removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">delete_forever</i> Delete
        </a>
      </span>
    </li>
  );
}
