// Form.jsx

import React from "react";
import styles from "./Form.module.css";
import { ReactComponent as EmailImage } from "../../assests/svgs/email.svg";

const Form = () => {
  return (
    <form className={styles.formHeader}>
      <div className={styles.emailContainer}>
        <EmailImage style={{ marginLeft: "0.1rem" }} />
        <input
          type="text"
          placeholder="Enter your email address"
          className={styles.emailInput}
        />
      </div>
      <button type="submit" className={styles.formHeaderButton}>
        Let's Talk
      </button>
    </form>
  );
};

export default Form;
