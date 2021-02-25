import { Link } from "react-router-dom";

import { data } from "../data";

const style = {
  fontStyle: "italic",
  margin: "30px 10px",
};

const price = {
  fontWeight: "bold",
  fontSize: "26px",
  marginBottom: "15px",
};

const ItemDetail = (props) => {
  const index = props.match.params.id;
  const item = data[index];

  return (
    <div className="item-detail">
      <p>{item.brand}</p>
      <h3>{item.name}</h3>
      <img src={item.url} alt="" />
      <span style={style}>{item.description}</span>
      <p style={price}>${item.price}</p>
      <div className="buttons">
        <button className="buy" onClick={(e) => props.addToCart(e, item)}>
          Add To Cart
        </button>
        {props.cartLength > 0 && (
          <Link to="/shopping-cart">
            <button className="buy">Proceed to Checkout</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
