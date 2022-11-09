import React from "react";
import Product from "../components/Product";
import NavBar from "../components/NavBar";
import styles from "../styles/Cart.module.css";

const Cart = ({ cart, orderCount, setCart }) => {
  const increaseProdQty = (e) => {
    const cartCopy = [...cart];
    const prodIdx = parseInt(e.target.className);

    cartCopy[prodIdx].count += 1;
    setCart(cartCopy);
  };

  const decreaseProdQty = (e) => {
    const cartCopy = [...cart];
    const prodIdx = parseInt(e.target.className);

    if (cartCopy[prodIdx].count > 1) {
      cartCopy[prodIdx].count -= 1;
    }

    setCart(cartCopy);
  };

  const productList = cart.map((prod, idx) => {
    return (
      <div className={styles.cartProduct}>
        <Product name={prod.name} price={prod.price} image={prod.image} />
        <div className={styles.quantityContainer}>
          <button className={idx} onClick={decreaseProdQty}>
            -
          </button>
          <span>{prod.count}</span>
          <button className={idx} onClick={increaseProdQty}>
            +
          </button>
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
