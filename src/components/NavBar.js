import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>The Crag</div>
      <div className={styles.nav}>
        <button>Home</button>
        <button>Shop</button>
        <span>Cart</span>
      </div>
    </div>
  );
};

export default NavBar;
