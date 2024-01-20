import React from "react";
import styles from "./Verticals.module.css";
import businessLaw from "../../assests/images/business.png";
import partnership from "../../assests/images/partnership.png";
import realEstateLaw from "../../assests/images/realEstateLaw.png";
import business from "../../assests/images/businessLaw.png";
import landlordDispute from "../../assests/images/landlordDispute.png";
import elderAbuse from "../../assests/images/elderAbuse.png";

const Verticals = () => {
  return (
    <div className={styles.verticalsContainer}>
      <h1>Area of Practices</h1>
      <div className={styles.imageContainer}>
        <div className={styles.row}>
          <div className={styles.imageDiv}>
            <img
              src={businessLaw}
              alt="business law
            "
            />
            <p>BUSINESS LAW</p>
          </div>
          <div className={styles.imageDiv}>
            <img src={partnership} alt="partnership" />
            <p>Partnership LAW</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.imageDiv}>
            <img src={realEstateLaw} alt="realEstateLaw" />
            <p>REAL ESTATE LAW</p>
          </div>
          <div className={styles.imageDiv}>
            <img src={business} alt="business law " />
            <p>BUSINESS LAW</p>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.imageDiv}>
            <img src={landlordDispute} alt="landlordDispute" />
            <p>LANDLORD DISPUTES</p>
          </div>
          <div className={styles.imageDiv}>
            <img src={elderAbuse} alt="elderAbuse" />
            <p>ELDER ABUSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verticals;
