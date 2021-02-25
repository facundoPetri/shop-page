import { Link } from "react-router-dom";
import Item from "./Item";

const ShoppingCart = (props) => {
  const items = props.cart.map((x, index) => {
    return (
      <Item
        x={x}
        key={x.id}
        index={index}
        name={x.name}
        url={x.url}
        price={x.price}
        qty={x.quantity}
        addToCart={(e) => props.addToCart(e, x)}
        removeFromCart={() => props.removeFromCart(x)}
        removeFromCartAll={() => props.removeFromCart(x, true)}
      />
    );
  });

  const totalPrice = props.cart.reduce(
    (acc, curr) => acc + parseInt(curr.price) * curr.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>
      {props.cart.length < 1 ? (
        <div className="shopping-cart-empty">
          <p>Your cart is empty</p>
          <Link to={`/shop`}>
            <button className="buy">Back to Shop</button>
          </Link>
        </div>
      ) : (
        <div className="shopping-cart">
          <div className="shopping-cart-items">{items}</div>
          <hr />
          <p>Total Price: ${totalPrice}</p>
          <button
            className="buy"
            onClick={() => alert("Under construction...")}
          >
            Buy
          </button>
          <Link to={`/shop`}>
            <button style={{ margin: "20px 15px" }} className="buy">
              Back to Shop
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
