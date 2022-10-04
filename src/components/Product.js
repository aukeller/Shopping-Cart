import React from "react";

const Product = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <span>{props.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
