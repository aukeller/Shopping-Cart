import React from "react";
import NavBar from "../components/NavBar";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.header}>
        <h1>Welcome to the best climbing shop on the planet</h1>
        <h3>From beginners to experts, we have what you need</h3>
        <button>Shop</button>
      </div>
    </div>
  );
};

export default Home;
