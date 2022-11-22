import React from "react";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ orderCount }) => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/">The Crag</Link>
      </div>
      <ul className={styles.nav}>
        <li>
          <FontAwesomeIcon icon={faBagShopping} size="xs" />
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="xs" />
            <span>{orderCount}</span>
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
