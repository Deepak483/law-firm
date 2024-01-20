import React from "react";
import styles from "./Hero.module.css";
import header from "../../assests/images/header.png";
import Form from "../Form/Form";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroHeading}>
          You don’t have to <br></br>
          <span style={{ fontWeight: "bolder" }}>Fight them Alone.</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor
          eget,hac massa gravida arcu interdum proin curae.
        </p>
        <Form />
      </div>
      <img src={header} alt="person pointing" className={styles.heroImage} />
    </div>
  );
};

export default Hero;
