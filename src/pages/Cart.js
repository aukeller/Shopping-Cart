import React from "react";
import Product from "../components/Product";
import NavBar from "../components/NavBar";
import styles from "../styles/Cart.module.css";
import { useState } from "react";

const Cart = ({ cart, orderCount }) => {
  const [items, setItems] = useState([...cart]);

  const productList = items.map((prod) => {
    return (
      <div className={styles.cartProduct}>
        <Product name={prod.name} price={prod.price} image={prod.image} />
        <div className={styles.quantityContainer}>
          <button>-</button>
          <span>{prod.count}</span>
          <button>+</button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <NavBar orderCount={orderCount} />
      <div className={styles.cartContainer}>{productList}</div>
    </div>
  );
};

export default Cart;
