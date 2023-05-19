import React, { useState } from "react";
import logo from "../img/logoPNG.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <img src={logo} alt="/" />
      <nav>
        <ul
          className={
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
          }
        >
          <li>
            <a href="/">Future</a>
          </li>
          <li>
            <a href="/">Technology</a>
          </li>
          <li>
            <a href="/">Updates</a>
          </li>
          <li>
            <a href="/">Contract</a>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <i class="fa fa-times" size={25}></i>
        ) : (
          <i class="fa fa-bars" size={25}></i>
        )}
      </div>
    </header>
  );
};
