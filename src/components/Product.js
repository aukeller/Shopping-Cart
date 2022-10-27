import React from "react";
import styles from "../styles/Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div>
        <h3>{props.name}</h3>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default Product;
