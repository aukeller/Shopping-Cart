import React from "react";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Welcome to the best climbing shop on the planet</h1>
        <h3>From beginners to experts, we have what you need</h3>
        <button>Shop</button>
      </div>
    </div>
  );
};

export default Home;
