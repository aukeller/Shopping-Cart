import React, { useEffect } from "react";
import Product from "../components/Product";
import NavBar from "../components/NavBar";
import styles from "../styles/Cart.module.css";
import QuantityClicker from "../components/QuantityClicker";

import { useState } from "react";

const Cart = ({ cart, orderCount, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const convertToUSD = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const calculatePrice = (unit, quantity) => {
    let convertedUnit = parseFloat(unit.slice(1));

    let result = convertedUnit * parseFloat(quantity);

    return parseFloat(result);
  };

  useEffect(() => {
    const cartCopy = [...cart];
    setTotalPrice(
      cartCopy.reduce((a, b) => {
        return a + calculatePrice(b.price, b.count);
      }, 0)
    );
  }, [cart]);

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
      setCart(cartCopy);
    }
  };

  const productList = cart.map((prod, idx) => {
    let prodTotalPrice = calculatePrice(prod.price, prod.count);
    return (
      <div className={styles.cartProdContainer}>
        <Product
          className={styles.cartProd}
          name={prod.name}
          price={prod.price}
          image={prod.image}
        />
        <QuantityClicker
          className={styles.quantity}
          idx={idx}
          increase={increaseProdQty}
          decrease={decreaseProdQty}
          count={prod.count}
        />
        <div className={styles.totalPrice}>{convertToUSD(prodTotalPrice)}</div>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <NavBar orderCount={orderCount} />
      <div className={styles.productList}>
        <div className={styles.headers}>
          <div>Items</div>
          <div>Price</div>
          <div>Quanity</div>
          <div>Total</div>
        </div>
        {productList}
      </div>
      <div className={styles.totalPrice}>
        <span>Order Total: {convertToUSD(totalPrice)}</span>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.checkout}>Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
