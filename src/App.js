import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/main.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  const [orderCount, setOrderCount] = useState(0);

  const addToCart = () => setOrderCount(orderCount + 1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home orderCount={orderCount} />} />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} orderCount={orderCount} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
