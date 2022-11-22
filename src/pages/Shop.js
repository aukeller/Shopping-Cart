import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import styles from "../styles/Shop.module.css";

import productInfo from "../assets/product-data/productDetails";

const Shop = ({ orderCount }) => {
  const generateProductList = () => {
    const productComponents = [];
    for (let product in productInfo) {
      let name = productInfo[product].name;
      let price = productInfo[product].price;
      let image = productInfo[product].image;

      productComponents.push(
        <Link key={`${product}`} to={`/shopping-cart/shop/${product}`}>
          <Product name={name} price={price} image={image} />
        </Link>
      );
    }

    return productComponents;
  };

  return (
    <div>
      <NavBar orderCount={orderCount} />
      <div className={styles.productList}>{generateProductList()}</div>
    </div>
  );
};

export default Shop;
