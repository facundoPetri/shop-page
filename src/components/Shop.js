import Item from "./Item";

import { data } from "../data";

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div className="item-container">
        {data.map((item, index) => {
          return (
            <Item key={item.id} index={index} name={item.name} url={item.url} />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
