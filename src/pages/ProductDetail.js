import React from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
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
    <div>
      <NavBar orderCount={orderCount} />
      <Product name={name} price={price} image={image} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
