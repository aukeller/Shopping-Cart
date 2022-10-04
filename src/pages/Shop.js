import React from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import styles from "../styles/Shop.module.css";

import productInfo from "../assets/product-data/productDetails";

const Shop = () => {
  const generateProductList = () => {
    const productComponents = [];
    for (let product in productInfo) {
      let name = productInfo[product].name;
      let price = productInfo[product].price;
      let image = productInfo[product].image;

      productComponents.push(
        <Product key={name} name={name} price={price} image={image} />
      );
    }

    return productComponents;
  };

  return (
    <div>
      <NavBar />
      <div className={styles.productList}>{generateProductList()}</div>
    </div>
  );
};

export default Shop;
