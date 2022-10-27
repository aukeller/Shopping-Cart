import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

import productInfo from "../assets/product-data/productDetails";

const ProductDetail = ({ addToCart, orderCount }) => {
  const { id } = useParams();
  const name = productInfo[id].name;
  const price = productInfo[id].price;
  const image = productInfo[id].image;

  return (
    <div>
      <NavBar orderCount={orderCount} />
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <span>{price}</span>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
