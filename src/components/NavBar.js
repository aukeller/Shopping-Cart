import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ orderCount }) => {
  return (
    <div className={styles.container}>
      <div>The Crag</div>
      <ul className={styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span>{orderCount}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
