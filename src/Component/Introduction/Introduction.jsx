import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introContainer}>
      <h1 className={styles.introHeading}>
        Let's us Introduce<br></br>
        <span className={styles.introduceOurself}>Ourself</span>
      </h1>
      <div className={styles.line}></div>
      <div className={styles.introInfo}>
        <h2>Criminal Lawyer</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.<br></br> Velit officia consequatduis enim velit mollit
          Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
