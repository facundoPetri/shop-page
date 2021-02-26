import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShoppingCart from "./components/ShoppingCart";
import ItemDetail from "./components/ItemDetail";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (event, item) => {
    if (event.hasOwnProperty("defaultPrevented")) {
      event.preventDefault();
    }

    const itemIndex = cart.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      const newCart = cart.slice();
      newCart[itemIndex].quantity++;

      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  function removeItemFromCart(item, removeAll) {
    const itemIndex = cart.findIndex((i) => i.id === item.id);
    if (itemIndex > -1) {
      const newCart = cart.slice();

      removeAll ? newCart.splice(itemIndex, 1) : newCart[itemIndex].quantity--;

      setCart(newCart);
    } else {
      console.error(
        "Couldn't remove item from shopping cart: There's no such item in the shopping cart."
      );
    }
  }

  return (
    <Router>
      <div className="App">
        <Navbar cartLength={cart.length} />
        <Route exact path="/shop-page">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route path="/shopping-cart">
          <ShoppingCart
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeItemFromCart}
          />
        </Route>
        <Route
          path="/shop/:id"
          render={(props) => (
            <ItemDetail
              {...props}
              addToCart={addToCart}
              cartLength={cart.length}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;
