import React from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import styles from "../styles/ProdDetail.module.css";
import { useParams } from "react-router-dom";

import productInfo from "../assets/product-data/productDetails";

const ProductDetail = ({ cart, setCart, orderCount }) => {
  const { id } = useParams();
  const name = productInfo[id].name;
  const price = productInfo[id].price;
  const image = productInfo[id].image;

  const addToCart = () => {
    const cartCopy = [...cart];
    const productMatchIndex = cartCopy.findIndex((prod) => prod.name === name);

    if (productMatchIndex !== -1) {
      cartCopy[productMatchIndex].count += 1;
    } else {
      cartCopy.push({ name, price, image, count: 1 });
    }
    setCart(cartCopy);
  };

  return (
    <div className={styles.container}>
      <NavBar orderCount={orderCount} />
      <Product addToCart={addToCart} name={name} price={price} image={image} />
    </div>
  );
};

export default ProductDetail;
