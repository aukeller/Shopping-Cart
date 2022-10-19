import React from "react";
import styles from "../styles/Product.module.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link to={`/shop/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
      </div>
      <div className={styles.infoContainer}>
        <h3>{props.name}</h3>
        <span>{props.price}</span>
        <button onClick={props.addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
