import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const orderCount = cart.length;

  useEffect(() => console.log(cart));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home orderCount={orderCount} />} />
        <Route path="/shop" element={<Shop orderCount={orderCount} />} />
        <Route
          path="shop/:id"
          element={
            <ProductDetail
              cart={cart}
              setCart={setCart}
              orderCount={orderCount}
            />
          }
        />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
