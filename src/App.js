import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  const [orderCount, setOrderCount] = useState(0);

  const addToCart = () => setOrderCount(orderCount + 1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home orderCount={orderCount} />} />
        <Route path="/shop" element={<Shop orderCount={orderCount} />} />
        <Route
          path="shop/:id"
          element={
            <ProductDetail addToCart={addToCart} orderCount={orderCount} />
          }
        />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
