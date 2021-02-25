import { Link } from "react-router-dom";

const price = {
  fontWeight: "bold",
  fontSize: "26px",
  marginBottom: "15px",
};

const Item = (props) => {
  function handleChange(e, item) {
    if (e.target.value > props.qty) {
      props.addToCart(item);
    } else {
      props.removeFromCart(item, false);
    }
  }

  return (
    <div className="item">
      <h3>{props.name}</h3>
      <img src={props.url} alt="" />
      {!props.price && (
        <Link to={`/shop/${props.index}`}>
          <button className="buy">View Product</button>
        </Link>
      )}
      {props.qty > 0 && (
        <div>
          <button
            onClick={(e) => props.removeFromCart(props.x, false)}
            className="set"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            max="99"
            value={props.qty}
            onChange={(e) => handleChange(e, props.x)}
          />
          <button onClick={(e) => props.addToCart(e, props.x)} className="set">
            +
          </button>
        </div>
      )}
      {props.qty > 0 && (
        <button
          onClick={() => props.removeFromCartAll(props.x, true)}
          className="rmv"
        >
          Remove Item
        </button>
      )}
      {props.price && <p style={price}>${props.price}</p>}
    </div>
  );
};

export default Item;
