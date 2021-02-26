import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <li className="nav-links">
        <Link to="/shop-page">
          <i className="fas fa-home link"></i>
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/shop">
          <i className="fas fa-shopping-bag link"></i>
        </Link>
      </li>
      <li className="nav-links">
        <Link to="/shopping-cart">
          <i className="fas fa-shopping-cart link">
            {props.cartLength === 0 ? null : props.cartLength}
          </i>
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
