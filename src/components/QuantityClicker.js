import React from "react";

const QuantityClicker = ({ className, idx, decrease, increase, count }) => {
  return (
    <div className={className}>
      <button className={idx} onClick={decrease}>
        -
      </button>
      <span>{count}</span>
      <button className={idx} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default QuantityClicker;
