import React from "react";
import Product from "../components/Product";
import { useState } from "react";

const Cart = ({ cart }) => {
  const [items, setItems] = useState([...cart]);

  const productList = items.map((prod) => {
    console.log(prod.count);
    return (
      <div>
        <Product name={prod.name} price={prod.price} image={prod.image} />
        <span>{prod.count}</span>
      </div>
    );
  });
  return <div>{productList}</div>;
};

export default Cart;
