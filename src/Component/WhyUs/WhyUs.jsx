import React from "react";
import styles from "./WhyUs.module.css";
import gift from "../../assests/images/gift.png";

const WhyUs = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Why Choose Us?</h1>
      <div className={styles.reasonsContainer}>
        <div className={styles.reason}>
          <img src={gift} alt="gift-icon" />
          <h4>98% Success Rate</h4>
          <p>
            met minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className={styles.reason}>
          <img src={gift} alt="gift-icon" />
          <h4>100% Success Rate</h4>
          <p>
            met minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
        <div className={styles.reason}>
          <img src={gift} alt="gift-icon" />
          <h4>100% Success Rate</h4>
          <p>
            met minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
