import { useContext } from "react";
import { shopContext } from "../context";

export default function GoodItem(props) {
  const { id, name, description, price, full_background } = props;

  const { addToBasket } = useContext(shopContext);

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <span className="card-title" style={{ paddingLeft: "23px" }}>
        {name}
      </span>
      <div className="card-content">{description}</div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ id, name, price })}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price}$
        </span>
      </div>
    </div>
  );
}
