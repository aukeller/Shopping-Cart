import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const orderCount = cart.reduce((a, b) => a + b.count, 0);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/shopping-cart"
          element={<Home orderCount={orderCount} />}
        />
        <Route
          path="/shopping-cart/shop"
          element={<Shop orderCount={orderCount} />}
        />
        <Route
          path="/shopping-cart/shop/:id"
          element={
            <ProductDetail
              cart={cart}
              setCart={setCart}
              orderCount={orderCount}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} orderCount={orderCount} setCart={setCart} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
