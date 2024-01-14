import React from "react";
import logo from "../../assests/images/logo.png";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img
        src={logo}
        alt={"lawfirm logo"}
        style={{ width: "auto", height: "3rem" }}
      />
      <p className={styles.logoText}>IGSTUDIO</p>
    </div>
  );
};

export default Logo;
