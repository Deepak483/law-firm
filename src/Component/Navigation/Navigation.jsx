import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <div className={styles.navigationContainer}>
        <ul className={styles.navigationList}>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
        <button className={styles.navButton}>Contact Now</button>
      </div>
    </>
  );
};

export default Navigation;
