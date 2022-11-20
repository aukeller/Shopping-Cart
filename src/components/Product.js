import React from "react";

const Product = (props) => {
  return (
    <div className={props.className}>
      <div>
        {" "}
        <img src={props.image} alt="" />
      </div>
      <div>
        <h3>{props.name}</h3>
        <span>{props.price}</span>
        {props.addToCart && (
          <button onClick={props.addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
