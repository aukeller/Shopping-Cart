import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

import productInfo from "../assets/product-data/productDetails";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const name = productInfo[id].name;
  const price = productInfo[id].price;
  const image = productInfo[id].image;

  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductDetail;
