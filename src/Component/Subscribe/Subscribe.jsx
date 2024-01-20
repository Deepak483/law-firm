import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subContainer}>
      <div className={styles.subContent}>
        <h1 className={styles.subHeading}>Subscribe Our Newsletter</h1>
        <form action="" className={styles.inputPlaceholder}>
          <input type="text" placeholder="Name:" className={styles.name} />
          <input type="email" placeholder="Enter your Email" className={styles.email} />
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
