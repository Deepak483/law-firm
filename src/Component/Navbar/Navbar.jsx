import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Navbar;
