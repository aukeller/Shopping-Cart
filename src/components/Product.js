import React from "react";
import styles from "../styles/Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={props.image} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <h3>{props.name}</h3>
        <span>{props.price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
